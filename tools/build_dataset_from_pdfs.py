#!/usr/bin/env python3
"""PDF過去問（問題PDF + 解答が最後のページにある形式）を、出題用JSON + 設問画像へ自動変換します。

前提（添付PDFの構造に合わせた想定）:
- 最終ページに「学科試験解答」があり、"第1問 1" のように解答番号が並ぶ
- 設問本文は "第1問" のような見出しで始まる

出力:
- out_dir/data/questions.json
- out_dir/assets/<exam_id>/q_001.png ... （設問ごとの切り出し画像）

使い方:
  pip install pymupdf
  python tools/build_dataset_from_pdfs.py out_dir input1.pdf input2.pdf ...

例:
  python tools/build_dataset_from_pdfs.py ./generated ./R07-1-3_gakka_open.pdf ./web-design-r05-01.pdf

生成された ./generated フォルダ一式を、このWebアプリのフォルダへ上書きコピーし、
アプリ側で「JSONを読み込む」から generated/data/questions.json を選択してください。
"""
import os, re, sys, json
import fitz  # PyMuPDF

from PIL import Image
import numpy as np

def auto_crop_bottom_rule(png_path: str) -> bool:
    """Detect a strong horizontal rule near the bottom and crop everything below it.
    Conservative: only crops when the below-region has little ink to avoid cutting valid content."""
    try:
        img = Image.open(png_path).convert("RGB")
        g = img.convert("L")
        arr = np.array(g)
        h, w = arr.shape
        y_start = int(h * 0.45)
        dark = arr < 55
        row_frac = dark[y_start:, :].mean(axis=1)
        cand = np.where(row_frac > 0.55)[0]
        if cand.size == 0:
            return False
        y_cand = y_start + int(cand[-1])
        y_cand = min(y_cand, h - 3)

        band_top = max(0, y_cand - 3)
        band_bot = min(h, y_cand + 4)
        if dark[band_top:band_bot, :].mean() < 0.25:
            return False

        below_top = min(h, y_cand + 2)
        below = dark[below_top:, :]
        if below.size == 0:
            return False
        below_ink = below.mean()
        if below_ink > 0.06:
            return False
        removed = h - below_top
        if removed < 90:
            return False

        img = img.crop((0, 0, w, below_top))
        img.save(png_path)
        return True
    except Exception:
        return False

RE_EXAM = re.compile(r"令和\s*([0-9]+)\s*年度.*?第\s*([0-9]+)\s*回", re.DOTALL)
RE_ANS = re.compile(r"第\s*([0-9]+)\s*問\s*([1-4])")

def exam_id_from_first_page(text, fallback):
    m = RE_EXAM.search(text)
    if not m:
        return fallback, fallback
    year = int(m.group(1))
    rnd = int(m.group(2))
    label = f"令和{year}年度 第{rnd}回"
    eid = f"r{year:02d}_{rnd:02d}"
    return eid, label

def parse_answers(text):
    ans = {}
    for q, a in RE_ANS.findall(text):
        ans[int(q)] = int(a)
    return ans

def detect_type(clip_text, ans_value, qno):
    # Rule: Q1-10 are True/False (○×)
    if 1 <= qno <= 10:
        return "tf"
    # Heuristic:
    # - if options markers exist -> mc
    # - else -> tf (common in this exam; answers are 1/2)
    t = clip_text or ""
    if re.search(r"[\n ]1[\.．\)]", t) and re.search(r"[\n ]2[\.．\)]", t):
        return "mc"
    if re.search(r"①|②|③|④|ア|イ|ウ|エ", t):
        return "mc"
    if ans_value in (3,4):
        return "mc"
    return "tf"

def guess_tags(t):
    tags = []
    u = (t or "").upper()
    if "HTML" in u: tags.append("HTML")
    if "CSS" in u: tags.append("CSS")
    if "HTTP" in u or "DNS" in u or "URL" in u: tags.append("ネットワーク")
    if "WCAG" in u or "アクセシビリティ" in (t or ""): tags.append("アクセシビリティ")
    if "XSS" in u or "CSRF" in u or "SQL" in u: tags.append("セキュリティ")
    if "JPEG" in u or "PNG" in u or "GIF" in u: tags.append("画像")
    if "FORM" in u or "INPUT" in u or "LABEL" in u: tags.append("フォーム")
    return tags or ["一般"]

def main():
    if len(sys.argv) < 3:
        print("Usage: python tools/build_dataset_from_pdfs.py out_dir input1.pdf input2.pdf ...")
        sys.exit(1)

    out_dir = sys.argv[1]
    pdfs = sys.argv[2:]

    data_dir = os.path.join(out_dir, "data")
    assets_dir = os.path.join(out_dir, "assets")
    os.makedirs(data_dir, exist_ok=True)
    os.makedirs(assets_dir, exist_ok=True)

    all_questions = []

    for pdf_path in pdfs:
        doc = fitz.open(pdf_path)
        first_text = doc.load_page(0).get_text("text")
        fallback = os.path.splitext(os.path.basename(pdf_path))[0]
        eid, exam_label = exam_id_from_first_page(first_text, fallback)

        # answer key: last page
        ans_text = doc.load_page(doc.page_count - 1).get_text("text")
        answers = parse_answers(ans_text)
        if not answers:
            print(f"[WARN] 解答表が見つかりません: {pdf_path} (最終ページを確認してください)")
            continue

        exam_assets = os.path.join(assets_dir, eid)
        os.makedirs(exam_assets, exist_ok=True)

        max_q = max(answers.keys())

        # locate each question heading and crop region between this and next heading
        # brute-force: search_for on each page
        locations = {}  # qno -> (page_index, y0)
        for qno in range(1, max_q + 1):
            needle_variants = [f"第{qno}問", f"第{qno} 問"]
            found = False
            for pi in range(doc.page_count - 1):  # exclude answer page
                page = doc.load_page(pi)
                for needle in needle_variants:
                    rects = page.search_for(needle)
                    if rects:
                        y0 = min(r.y0 for r in rects)
                        locations[qno] = (pi, y0)
                        found = True
                        break
                if found:
                    break

        # build per page list of qnos to crop
        by_page = {}
        for qno, (pi, y0) in locations.items():
            by_page.setdefault(pi, []).append((qno, y0))
        for pi in by_page:
            by_page[pi].sort(key=lambda x: x[1])

        for pi, items in by_page.items():
            page = doc.load_page(pi)
            page_h = page.rect.height
            page_w = page.rect.width
            for idx, (qno, y0) in enumerate(items):
                y_start = max(0, y0 - 6)
                y_end = page_h if idx == len(items) - 1 else max(y_start + 10, items[idx+1][1] - 6)

                clip = fitz.Rect(0, y_start, page_w, y_end)
                # render clipped image
                mat = fitz.Matrix(2, 2)
                pix = page.get_pixmap(matrix=mat, clip=clip, alpha=False)
                img_name = f"q_{qno:03d}.png"
                img_path = os.path.join(exam_assets, img_name)
                pix.save(img_path)
                # Optional: crop footer area below horizontal rule (conservative)
                auto_crop_bottom_rule(img_path)

                clip_text = page.get_text("text", clip=clip)
                ans_value = answers.get(qno, 1)
                qtype = detect_type(clip_text, ans_value, qno)

                if qtype == "tf":
                    choices = ["○", "×"]
                    answer_index = 0 if ans_value == 1 else 1
                else:
                    choices = ["1", "2", "3", "4"]
                    answer_index = max(0, min(3, ans_value - 1))

                tags = guess_tags(clip_text)
                explanation = "（自動生成）正答は解答表に基づきます。解説は後で追記可能です。まずは根拠となる仕様/ガイドラインを確認しましょう。"

                all_questions.append({
                    "id": f"{eid}_q_{qno:03d}",
                    "exam": exam_label,
                    "no": qno,
                    "type": qtype,
                    "promptText": "",  # 画像に含める想定
                    "promptImage": f"./assets/{eid}/{img_name}",
                    "choices": choices,
                    "answerIndex": answer_index,
                    "explanation": explanation,
                    "tags": tags
                })

        print(f"[OK] {exam_label}: questions={len([q for q in all_questions if q['exam']==exam_label])} (assets: {exam_assets})")

    out_json = os.path.join(data_dir, "questions.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump({"meta":{"title":"generated"}, "questions": all_questions}, f, ensure_ascii=False, indent=2)

    print("----")
    print("generated:", out_json)
    print("assets in:", assets_dir)
    print("次の手順:")
    print("1) 生成した out_dir を Webアプリフォルダにコピー")
    print("2) アプリで『JSONを読み込む』→ out_dir/data/questions.json を選択")
    print("   ※画像参照があるため、questions.json と assets フォルダの相対配置を保ってください。")

if __name__ == "__main__":
    main()
