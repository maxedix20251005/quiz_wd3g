# 過去問トレーナー v2

## なぜ「開始」が反応しないことがあった？
前版は `fetch(./data/questions.json)` でデータを読む設計でした。
ブラウザで `index.html` をファイル直開き（file://）すると、セキュリティ制約で fetch が失敗し、開始できません。

v2では **サンプルを埋め込み**、ファイル直開きでも開始できます。

## 添付PDFを読み込んで自動出題できますか？
ブラウザ単体でPDFを完全解析して（設問・選択肢・正答・解説まで）自動生成するのは難しいため、
現状は **ツールでPDF→JSON+画像へ自動変換** して運用します（手入力不要）。

## 使い方（手入力なし）
1) 変換ツールを実行（PCで）
   - `pip install pymupdf`
   - `python tools/build_dataset_from_pdfs.py ./generated <pdf1> <pdf2> ...`

2) `./generated` フォルダに `data/questions.json` と `assets/...` ができます。

3) アプリを開いて「JSONを読み込む」から `generated/data/questions.json` を選ぶ。

※画像参照があるため、`questions.json` と `assets` の相対配置を保ってください。

## 共有（低コスト）
- フォルダ一式を GitHub Pages / Cloudflare Pages に置いてURL共有が一番簡単です。


## 回（R07）の選択
トップ画面の「回（R07）」で R07-1-3 / R07-2-3 / R07-3-3 を選んで出題できます。


### 画像の下部カット（自動）
生成時に、問題直下の横罫線より下に余計な注記がある場合、保守的な判定で自動カットします。
必要に応じて `pip install pillow numpy` を追加してください。
