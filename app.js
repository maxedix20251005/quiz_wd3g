// Past Questions Trainer (offline-friendly; works on file://)
// - Embedded dataset avoids fetch() failure on file://
// - Imported JSON uses object URL (fetch works)

const $ = (id) => document.getElementById(id);

const R07_DATASET = {"meta": {"title": "generated_from_attached_pdfs"}, "questions": [{"id": "R07-1-3_gakka_open_q_001", "exam": "R07-1-3_gakka_open", "no": 1, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_001.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-1-3_gakka_open_q_002", "exam": "R07-1-3_gakka_open", "no": 2, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_002.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_003", "exam": "R07-1-3_gakka_open", "no": 3, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_003.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_004", "exam": "R07-1-3_gakka_open", "no": 4, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_004.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["画像"]}, {"id": "R07-1-3_gakka_open_q_005", "exam": "R07-1-3_gakka_open", "no": 5, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_005.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-1-3_gakka_open_q_006", "exam": "R07-1-3_gakka_open", "no": 6, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_006.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_007", "exam": "R07-1-3_gakka_open", "no": 7, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_007.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_008", "exam": "R07-1-3_gakka_open", "no": 8, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_008.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_009", "exam": "R07-1-3_gakka_open", "no": 9, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_009.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_010", "exam": "R07-1-3_gakka_open", "no": 10, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_010.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_011", "exam": "R07-1-3_gakka_open", "no": 11, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_011.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-1-3_gakka_open_q_012", "exam": "R07-1-3_gakka_open", "no": 12, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_012.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_013", "exam": "R07-1-3_gakka_open", "no": 13, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_013.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_014", "exam": "R07-1-3_gakka_open", "no": 14, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_014.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-1-3_gakka_open_q_015", "exam": "R07-1-3_gakka_open", "no": 15, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_015.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-1-3_gakka_open_q_016", "exam": "R07-1-3_gakka_open", "no": 16, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_016.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-1-3_gakka_open_q_017", "exam": "R07-1-3_gakka_open", "no": 17, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_017.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_018", "exam": "R07-1-3_gakka_open", "no": 18, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_018.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_019", "exam": "R07-1-3_gakka_open", "no": 19, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_019.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-1-3_gakka_open_q_020", "exam": "R07-1-3_gakka_open", "no": 20, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_020.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-1-3_gakka_open_q_021", "exam": "R07-1-3_gakka_open", "no": 21, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_021.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_022", "exam": "R07-1-3_gakka_open", "no": 22, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_022.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["アクセシビリティ"]}, {"id": "R07-1-3_gakka_open_q_023", "exam": "R07-1-3_gakka_open", "no": 23, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_023.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_024", "exam": "R07-1-3_gakka_open", "no": 24, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_024.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-1-3_gakka_open_q_025", "exam": "R07-1-3_gakka_open", "no": 25, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-1-3_gakka_open/q_025.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-2-3_gakka_open_q_001", "exam": "R07-2-3_gakka_open", "no": 1, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_001.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_002", "exam": "R07-2-3_gakka_open", "no": 2, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_002.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_003", "exam": "R07-2-3_gakka_open", "no": 3, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_003.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_004", "exam": "R07-2-3_gakka_open", "no": 4, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_004.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-2-3_gakka_open_q_005", "exam": "R07-2-3_gakka_open", "no": 5, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_005.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_006", "exam": "R07-2-3_gakka_open", "no": 6, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_006.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-2-3_gakka_open_q_007", "exam": "R07-2-3_gakka_open", "no": 7, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_007.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_008", "exam": "R07-2-3_gakka_open", "no": 8, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_008.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_009", "exam": "R07-2-3_gakka_open", "no": 9, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_009.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["画像"]}, {"id": "R07-2-3_gakka_open_q_010", "exam": "R07-2-3_gakka_open", "no": 10, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_010.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_011", "exam": "R07-2-3_gakka_open", "no": 11, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_011.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML", "CSS"]}, {"id": "R07-2-3_gakka_open_q_012", "exam": "R07-2-3_gakka_open", "no": 12, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_012.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-2-3_gakka_open_q_013", "exam": "R07-2-3_gakka_open", "no": 13, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_013.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["ネットワーク"]}, {"id": "R07-2-3_gakka_open_q_014", "exam": "R07-2-3_gakka_open", "no": 14, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_014.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-2-3_gakka_open_q_015", "exam": "R07-2-3_gakka_open", "no": 15, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_015.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_016", "exam": "R07-2-3_gakka_open", "no": 16, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_016.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_017", "exam": "R07-2-3_gakka_open", "no": 17, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_017.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_018", "exam": "R07-2-3_gakka_open", "no": 18, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_018.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-2-3_gakka_open_q_019", "exam": "R07-2-3_gakka_open", "no": 19, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_019.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["アクセシビリティ"]}, {"id": "R07-2-3_gakka_open_q_020", "exam": "R07-2-3_gakka_open", "no": 20, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_020.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_021", "exam": "R07-2-3_gakka_open", "no": 21, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_021.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_022", "exam": "R07-2-3_gakka_open", "no": 22, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_022.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_023", "exam": "R07-2-3_gakka_open", "no": 23, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_023.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-2-3_gakka_open_q_024", "exam": "R07-2-3_gakka_open", "no": 24, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_024.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-2-3_gakka_open_q_025", "exam": "R07-2-3_gakka_open", "no": 25, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-2-3_gakka_open/q_025.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-3-3_gakka_open_q_001", "exam": "R07-3-3_gakka_open", "no": 1, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_001.png", "choices": ["○", "×"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_002", "exam": "R07-3-3_gakka_open", "no": 2, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_002.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-3-3_gakka_open_q_003", "exam": "R07-3-3_gakka_open", "no": 3, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_003.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_004", "exam": "R07-3-3_gakka_open", "no": 4, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_004.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["ネットワーク"]}, {"id": "R07-3-3_gakka_open_q_005", "exam": "R07-3-3_gakka_open", "no": 5, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_005.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_006", "exam": "R07-3-3_gakka_open", "no": 6, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_006.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["画像"]}, {"id": "R07-3-3_gakka_open_q_007", "exam": "R07-3-3_gakka_open", "no": 7, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_007.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_008", "exam": "R07-3-3_gakka_open", "no": 8, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_008.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_009", "exam": "R07-3-3_gakka_open", "no": 9, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_009.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_010", "exam": "R07-3-3_gakka_open", "no": 10, "type": "tf", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_010.png", "choices": ["○", "×"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_011", "exam": "R07-3-3_gakka_open", "no": 11, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_011.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_012", "exam": "R07-3-3_gakka_open", "no": 12, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_012.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_013", "exam": "R07-3-3_gakka_open", "no": 13, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_013.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_014", "exam": "R07-3-3_gakka_open", "no": 14, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_014.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML", "CSS"]}, {"id": "R07-3-3_gakka_open_q_015", "exam": "R07-3-3_gakka_open", "no": 15, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_015.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML"]}, {"id": "R07-3-3_gakka_open_q_016", "exam": "R07-3-3_gakka_open", "no": 16, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_016.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_017", "exam": "R07-3-3_gakka_open", "no": 17, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_017.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-3-3_gakka_open_q_018", "exam": "R07-3-3_gakka_open", "no": 18, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_018.png", "choices": ["1", "2", "3", "4"], "answerIndex": 2, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_019", "exam": "R07-3-3_gakka_open", "no": 19, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_019.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["セキュリティ"]}, {"id": "R07-3-3_gakka_open_q_020", "exam": "R07-3-3_gakka_open", "no": 20, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_020.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_021", "exam": "R07-3-3_gakka_open", "no": 21, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_021.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["CSS"]}, {"id": "R07-3-3_gakka_open_q_022", "exam": "R07-3-3_gakka_open", "no": 22, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_022.png", "choices": ["1", "2", "3", "4"], "answerIndex": 0, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_023", "exam": "R07-3-3_gakka_open", "no": 23, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_023.png", "choices": ["1", "2", "3", "4"], "answerIndex": 1, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["一般"]}, {"id": "R07-3-3_gakka_open_q_024", "exam": "R07-3-3_gakka_open", "no": 24, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_024.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["ネットワーク"]}, {"id": "R07-3-3_gakka_open_q_025", "exam": "R07-3-3_gakka_open", "no": 25, "type": "mc", "promptText": "", "promptImage": "./assets/generated/R07-3-3_gakka_open/q_025.png", "choices": ["1", "2", "3", "4"], "answerIndex": 3, "explanation": "（自動生成）正答はPDFの解答表に基づきます。解説は今後追加可能です。", "tags": ["HTML", "フォーム"]}]};

const EMBEDDED_DATASET = {
  "meta": { "title": "サンプル（埋め込み）" },
  "questions": [
    {
      "id": "sample_tf_01",
      "exam": "サンプル",
      "no": 1,
      "type": "tf",
      "promptText": "HTMLの標準仕様はWHATWGが管理する「HTML Living Standard」である。",
      "choices": ["○","×"],
      "answerIndex": 0,
      "explanation": "現在のHTML仕様はWHATWGのHTML Living Standardが中心です。",
      "tags": ["HTML"]
    },
    {
      "id": "sample_mc_02",
      "exam": "サンプル",
      "no": 2,
      "type": "mc",
      "promptText": "HTTPステータスコード 404 の説明として正しいものはどれか。",
      "choices": ["1","2","3","4"],
      "answerIndex": 1,
      "explanation": "404 Not Found は要求されたリソースが見つからないことを表します。",
      "tags": ["ネットワーク"]
    },
    {
      "id": "sample_img_03",
      "exam": "サンプル",
      "no": 3,
      "type": "mc",
      "promptText": "次の設問画像を参照し、正しい選択肢を選べ。",
      "promptImage": "./assets/sample_q11.png",
      "choices": ["1","2","3","4"],
      "answerIndex": 2,
      "explanation": "（例）border-bottom は要素下辺の境界線を指定します。",
      "tags": ["CSS"]
    }
  ]
};

const state = {
  datasets: new Map([["__embedded__", EMBEDDED_DATASET], ["__r07__", R07_DATASET]]), // value -> raw json
  questions: [],
  quiz: [],
  answers: new Map(),
  idx: 0,
  mode: "chronological",
  type: "all",
  examKey: "all",
  count: 25,
  datasetName: "",
  sessionId: null,
};

const adviceByTag = {
  HTML: "タグの役割・属性・セマンティクスを『例を書いて説明できる』状態に。MDNで確認し、ミニHTMLを書いて検証。",
  CSS: "詳細度/継承/カスケードをセットで整理。小さな例を作って効き方を確認。",
  "アクセシビリティ": "色コントラスト、代替テキスト、フォームのラベル付けから優先。WCAGの目的→実装で理解。",
  "セキュリティ": "攻撃パターンと対策を1対1で整理。どの層（アプリ/OS/ネットワーク）で防ぐかも。",
  "ネットワーク": "HTTP/URL/DNS/TCPの流れ（名前解決→接続→通信）で整理。",
  "画像": "PNG/JPEG/GIFの特性（透過/圧縮/アニメ）を用途で比較。",
  "フォーム": "input type / label / name / required と送信の流れ（バリデーション→送信→サーバ）をセットで。",
  "一般": "言い回しに引っ張られず、定義（仕様/ガイドライン）に戻って判断する癖を付ける。",
};

function guessTagsFromText(t){
  const s = (t||"").toUpperCase();
  const tags = [];
  if (s.includes("HTML")) tags.push("HTML");
  if (s.includes("CSS")) tags.push("CSS");
  if (s.includes("WCAG") || (t||"").includes("アクセシビリティ")) tags.push("アクセシビリティ");
  if (s.includes("HTTP") || (t||"").includes("URL") || (t||"").includes("DNS")) tags.push("ネットワーク");
  if ((t||"").includes("SQL") || (t||"").includes("XSS") || (t||"").includes("CSRF")) tags.push("セキュリティ");
  if ((t||"").includes("JPEG") || (t||"").includes("PNG") || (t||"").includes("GIF")) tags.push("画像");
  if ((t||"").includes("FORM") || (t||"").includes("input") || (t||"").includes("label")) tags.push("フォーム");
  return tags.length ? tags : ["一般"];
}

function getGenericWrongReason(q) {
  const tags = (q.tags && q.tags.length) ? q.tags : guessTagsFromText(q.promptText);
  const top = tags[0] || "一般";
  return `この問題は「${top}」の基本定義が問われています。選択肢の言い回しではなく、仕様/ガイドラインの定義に照らして判断しましょう。`;
}
function getAdvice(q) {
  const tags = (q.tags && q.tags.length) ? q.tags : guessTagsFromText(q.promptText);
  const lines = tags.map(t => adviceByTag[t] || adviceByTag["一般"]);
  return [...new Set(lines)].join("\n");
}
function normalizeDataset(raw) {
  if (!raw || !Array.isArray(raw.questions)) throw new Error("JSON形式が不正です。{ questions: [...] } が必要です。");
  return raw.questions.map((q, i) => {
    if (!q.id) q.id = `q_${i+1}`;
    // Rule: Q1〜Q10は○×（環境/データ差異に強くするためランタイムで強制）
    const noNum = Number(q.no);
    if (Number.isFinite(noNum) && noNum >= 1 && noNum <= 10) {
      q.type = "tf";
      q.choices = ["○","×"];
      // answerIndex を 0/1 に正規化（旧データで 0-3 の場合も吸収）
      const ai = Number(q.answerIndex);
      q.answerIndex = (Number.isFinite(ai) && ai === 0) ? 0 : 1;
    }
    if (!q.type) q.type = (q.choices?.length === 2 && q.choices.includes("○") && q.choices.includes("×")) ? "tf" : "mc";
    if (!q.tags) q.tags = guessTagsFromText(q.promptText);
    // choices fallback
    if (!q.choices || !q.choices.length){
      q.choices = q.type === "tf" ? ["○","×"] : ["1","2","3","4"];
    }
    return q;
  });
}
function sortChronological(qs){
  return [...qs].sort((a,b) => String(a.exam || "").localeCompare(String(b.exam || "")) || Number(a.no||0)-Number(b.no||0));
}
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function buildQuiz() {
  const all = state.questions;
  let filtered = all;

  // Exam filter (R07-1-3 / R07-2-3 / R07-3-3)
  if (state.examKey && state.examKey !== "all") {
    const key = String(state.examKey);
    filtered = filtered.filter(q => {
      const exam = String(q.exam || "");
      const id = String(q.id || "");
      return exam.includes(key) || id.includes(key);
    });
  }
  if (state.mode === "byType" && state.type !== "all") filtered = all.filter(q => q.type === state.type);

  let ordered = filtered;
  if (state.mode === "chronological") ordered = sortChronological(filtered);
  if (state.mode === "random") ordered = shuffle(filtered);
  if (state.mode === "byType") ordered = shuffle(filtered);

  state.quiz = ordered.slice(0, Math.min(state.count, ordered.length));
  state.answers = new Map();
  state.idx = 0;
  state.sessionId = `sess_${Date.now()}`;
}

function labelMode(m){
  return m === "chronological" ? "年代順" : m === "random" ? "ランダム" : "タイプ別";
}
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function questionTemplate(q, selected) {
  const meta = [];
  if (q.exam) meta.push(q.exam);
  meta.push(q.type === "tf" ? "○×" : "四択");
  if (q.tags?.length) meta.push(q.tags.map(t=>`#${t}`).join(" "));
  const promptHtml = q.promptHtml ? q.promptHtml : (q.promptText ? escapeHtml(q.promptText).replace(/\n/g,"<br/>") : "");
  const imgHtml = q.promptImage ? `<figure style="margin:10px 0 0;"><img alt="問題図" src="${q.promptImage}" style="border-radius:12px;border:1px solid rgba(255,255,255,.08)"/></figure>` : "";

  const choices = q.choices || [];
  const choiceHtml = choices.map((c, idx) => {
    const v = String(idx);
    const checked = (selected === v) ? "checked" : "";
    return `
      <label class="choice">
        <input type="radio" name="choice" value="${v}" ${checked}/>
        <div class="ctext">${escapeHtml(c)}</div>
      </label>
    `;
  }).join("");

  return `
    <div class="qhead">
      <div class="qno">Q${q.no ?? "?"}</div>
      <div class="qmeta">${meta.map(m=>`<span class="pill">${escapeHtml(m)}</span>`).join(" ")}</div>
    </div>
    <div class="qbody">
      ${promptHtml ? `<p class="prompt">${promptHtml}</p>` : ""}
      ${imgHtml}
      <div class="choices">${choiceHtml}</div>
    </div>
  `;
}
function wireChoiceEvents(q) {
  document.querySelectorAll('input[name="choice"]').forEach((el) => {
    el.addEventListener("change", (e) => {
      state.answers.set(q.id, e.target.value);
      persistProgress();
    });
  });
}
function render() {
  $("typeField").hidden = ($("mode").value !== "byType");
  $("quiz").hidden = state.quiz.length === 0;
  $("result").hidden = true;
  if (state.quiz.length === 0) return;

  const q = state.quiz[state.idx];
  const total = state.quiz.length;
  $("quizTitle").textContent = "出題中";
  $("quizMeta").textContent = `モード: ${labelMode(state.mode)} / 回: ${state.examKey} / データ: ${state.datasetName}`;
  $("progressText").textContent = `${state.idx+1} / ${total}`;
  $("barFill").style.width = `${Math.round(((state.idx+1)/total)*100)}%`;

  $("prevBtn").disabled = state.idx === 0;
  $("nextBtn").hidden = state.idx >= total-1;
  $("finishBtn").hidden = state.idx < total-1;

  $("questionCard").innerHTML = questionTemplate(q, state.answers.get(q.id));
  wireChoiceEvents(q);
}

function computeWeakTags(results){
  const wrong = results.filter(r=>!r.ok);
  const counts = new Map();
  for(const r of wrong){
    const tags = (r.tags && r.tags.length) ? r.tags : ["一般"];
    for(const t of tags) counts.set(t, (counts.get(t) || 0) + 1);
  }
  return [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,3).map(([t])=>t);
}

function resultItemTemplate(q) {
  const selected = state.answers.get(q.id);
  const correctIdx = String(q.answerIndex);
  const ok = selected === correctIdx;

  const selectedText = (selected != null) ? q.choices?.[Number(selected)] : "未回答";
  const correctText = q.choices?.[Number(correctIdx)];

  const exp = q.explanation ? q.explanation : "（解説はデータ側に追記できます。現状はタグ連動の簡易説明のみ。）";
  const wrongReason = ok ? "" : (q.wrongReason?.[selected] || getGenericWrongReason(q));
  const advice = ok ? "" : getAdvice(q);

  return `
    <div class="result-item">
      <div class="top">
        <div>
          <div><strong>Q${q.no ?? "?"}</strong> <span class="pill">${escapeHtml(q.exam||"")}</span></div>
          <div class="sub">${(q.tags||[]).map(t=>`#${t}`).join(" ")}</div>
        </div>
        <div class="badge ${ok ? "ok" : "ng"}">${ok ? "正解" : "誤答"}</div>
      </div>

      ${q.promptImage ? `<img alt="問題図" src="${q.promptImage}" style="margin-top:10px;border-radius:12px;border:1px solid rgba(255,255,255,.08)"/>` : ""}

      <div style="margin-top:10px;">
        <div class="sub">あなたの回答</div>
        <div>${escapeHtml(String(selectedText||""))}</div>
        <div class="sub" style="margin-top:8px;">正答</div>
        <div><strong>${escapeHtml(String(correctText||""))}</strong></div>
      </div>

      <div style="margin-top:10px;">
        <div class="sub">簡単な解説</div>
        <div style="white-space:pre-wrap;">${escapeHtml(exp)}</div>
      </div>

      ${ok ? "" : `
        <div style="margin-top:10px;">
          <div class="sub">なぜ間違えた？（例）</div>
          <div style="white-space:pre-wrap;">${escapeHtml(wrongReason)}</div>
        </div>
        <div style="margin-top:10px;">
          <div class="sub">克服アドバイス</div>
          <div style="white-space:pre-wrap;">${escapeHtml(advice)}</div>
        </div>
      `}
    </div>
  `;
}

function finish() {
  const results = state.quiz.map(q => {
    const selected = state.answers.get(q.id);
    const ok = String(selected) === String(q.answerIndex);
    return { tags:q.tags||[], ok };
  });
  const correct = results.filter(r=>r.ok).length;
  const rate = results.length ? Math.round((correct / results.length) * 100) : 0;
  const weakTags = computeWeakTags(results);

  $("kpiCorrect").textContent = `${correct} / ${results.length}`;
  $("kpiRate").textContent = `${rate}%`;
  $("kpiWeak").textContent = weakTags.length ? weakTags.map(t=>`#${t}`).join(" ") : "-";

  $("resultList").innerHTML = state.quiz.map((q) => resultItemTemplate(q)).join("");
  $("quiz").hidden = true;
  $("result").hidden = false;

  const history = loadHistory();
  history.unshift({
    sessionId: state.sessionId,
    createdAt: Date.now(),
    datasetName: state.datasetName,
    mode: state.mode,
    type: state.type,
    count: state.quiz.length,
    correct,
    rate,
    weakTags,
    answers: Object.fromEntries(state.answers.entries()),
  });
  saveHistory(history.slice(0, 50));
  clearProgress();
}

// Persistence
const LS_PROGRESS = "pq_progress_v2";
const LS_HISTORY = "pq_history_v2";
function persistProgress(){
  const payload = {
    sessionId: state.sessionId,
    datasetName: state.datasetName,
    mode: state.mode,
    type: state.type,
    count: state.quiz.length,
    quizIds: state.quiz.map(q=>q.id),
    idx: state.idx,
    answers: Object.fromEntries(state.answers.entries()),
  };
  localStorage.setItem(LS_PROGRESS, JSON.stringify(payload));
}
function clearProgress(){ localStorage.removeItem(LS_PROGRESS); }
function loadProgress(){ try{ return JSON.parse(localStorage.getItem(LS_PROGRESS) || "null"); }catch{ return null; } }
function saveHistory(items){ localStorage.setItem(LS_HISTORY, JSON.stringify(items)); }
function loadHistory(){ try{ return JSON.parse(localStorage.getItem(LS_HISTORY) || "[]"); }catch{ return []; } }

function applyProgressIfAny(){
  const p = loadProgress();
  if(!p) return false;
  const map = new Map(state.questions.map(q=>[q.id,q]));
  const quiz = (p.quizIds||[]).map(id=>map.get(id)).filter(Boolean);
  if(!quiz.length) return false;
  state.quiz = quiz;
  state.idx = Math.min(p.idx || 0, quiz.length-1);
  state.answers = new Map(Object.entries(p.answers || {}));
  state.mode = p.mode || state.mode;
  state.type = p.type || state.type;
  state.examKey = p.examKey || state.examKey;
  state.count = p.count || state.count;
  state.sessionId = p.sessionId || state.sessionId;
  state.datasetName = p.datasetName || state.datasetName;
  return true;
}

function loadDatasetFromSelectValue(val){
  const raw = state.datasets.get(val);
  if(raw) return raw;
  throw new Error("選択したデータが見つかりません。JSONを読み込んでください。");
}

// UI
$("mode").addEventListener("change", () => { $("typeField").hidden = ($("mode").value !== "byType"); });

$("startBtn").addEventListener("click", async () => {
  try{
    state.mode = $("mode").value;
    state.type = $("typeSelect").value;
    state.examKey = ($("examSelect") ? $("examSelect").value : "all");
    state.count = Number($("count").value);

    const val = $("dataset").value;
    state.datasetName = $("dataset").selectedOptions[0]?.textContent || "データ";

    const raw = loadDatasetFromSelectValue(val);
    state.questions = normalizeDataset(raw);

    buildQuiz();
    persistProgress();
    $("quiz").hidden = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }catch(e){
    alert(`開始できません: ${e.message || e}`);
  }
});

$("prevBtn").addEventListener("click", () => { state.idx = Math.max(0, state.idx - 1); persistProgress(); render(); });
$("nextBtn").addEventListener("click", () => { state.idx = Math.min(state.quiz.length - 1, state.idx + 1); persistProgress(); render(); });
$("finishBtn").addEventListener("click", () => finish());

$("backToTopBtn").addEventListener("click", () => {
  state.quiz = []; state.answers = new Map(); state.idx = 0;
  $("quiz").hidden = true; $("result").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("reviewBtn").addEventListener("click", () => {
  const wrong = state.quiz.filter(q => String(state.answers.get(q.id)) !== String(q.answerIndex));
  if(!wrong.length){ alert("誤答がありません。"); return; }
  state.quiz = wrong; state.idx = 0; persistProgress();
  $("result").hidden = true; $("quiz").hidden = false; render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("resetBtn").addEventListener("click", () => {
  if(confirm("端末内の進捗/履歴をリセットします。よろしいですか？")){
    localStorage.removeItem(LS_PROGRESS);
    localStorage.removeItem(LS_HISTORY);
    alert("リセットしました。");
  }
});
$("exportBtn").addEventListener("click", () => {
  const history = loadHistory();
  const blob = new Blob([JSON.stringify(history, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "past-questions-history.json";
  a.click();
  URL.revokeObjectURL(a.href);
});
$("importBtn").addEventListener("click", () => $("fileInput").click());
$("fileInput").addEventListener("change", async (e) => {
  const f = e.target.files?.[0];
  if(!f) return;
  try{
    const text = await f.text();
    const raw = JSON.parse(text);
    state.datasets.set(`file:${f.name}`, raw);
    const opt = document.createElement("option");
    opt.value = `file:${f.name}`;
    opt.textContent = `読み込み: ${f.name}`;
    $("dataset").appendChild(opt);
    $("dataset").value = opt.value;
    alert("読み込みました。『開始』で出題できます。");
  }catch{
    alert("JSONの読み込みに失敗しました。形式を確認してください。");
  }finally{
    e.target.value = "";
  }
});

// Boot
(function init(){
  try{
    state.datasetName = $("dataset").selectedOptions[0]?.textContent || "サンプル";
    const raw = loadDatasetFromSelectValue("__embedded__");
    state.questions = normalizeDataset(raw);
    if(applyProgressIfAny()){
      // Sync exam selector
      if ($("examSelect")) $("examSelect").value = state.examKey || "all";
      $("quiz").hidden = false;
      render();
    }
  }catch(e){
    console.warn(e);
  }
})();
