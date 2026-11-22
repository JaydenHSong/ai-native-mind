---
title: "클로드와 함께한 리만 가설 증명, Lean·Mathlib 독립 검증 통과 — 다만 수학계 합의는 아직 (11-20~21)"
source_url: "https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/"
source_type: "news"
authors: ["Scientific American"]
published: 2026-11-21
fetched: 2026-11-22
tags: [anthropic, claude, mathematics, formal-verification, lean, research]
status: raw
---

# 클로드와 함께한 리만 가설 증명, Lean·Mathlib 독립 검증 통과 — 다만 수학계 합의는 아직 (11-20~21)

> Anthropic 수학자 Levent Alpöge가 Claude와 약 6주간 작업해 1859년 제기된 리만 가설의 증명을 찾았다고 11월 20일 발표했다. 증명은 논문이 아니라 Lean 언어로 작성된 약 1,740만 줄의 코드로만 공개됐고, 11월 21일 Lean·Mathlib 커뮤니티가 명제와 증명 모두 옳다고 독립 인증했다. 다만 Clay 수학연구소는 여전히 미해결로 표기하고 있다.

## 내용

- **주장**: Alpöge, 11월 20일 개인 웹사이트에 4쪽 개요와 함께 발표. 리만 가설뿐 아니라 일반화 리만 가설(GRH)까지 해결했다고 주장. 작업 기간 10월 6일~11월 16일, 약 6주.
- **규모**: Lean 코드 약 1,740만 줄, 175,187개 파일. Mathlib 전체의 약 7.6배 규모. 47%가 아벨 다양체 관련 폴더에 집중.
- **검증**: 11월 21일 Lean FRO·Mathlib Initiative 공동성명 "명제와 증명 모두 옳다"고 인증. MIT Andrew Sutherland 등 독립 연구자들이 자체 재컴파일 — 175,187개 모듈 전부 오류 0건, 3개 표준 공리만 사용. 기호 재정의·커널 악용 여부를 확인하는 comparator run도 완료.
- **한계**: Alpöge 본인도 증명 일부를 완전히 파악하지 못했다고 인정. Clay 연구소는 상($100만) 심사를 위해 출판 후 최소 2년 검증 기간을 요구, 현재 미해결 표기 유지. 같은 날 인간 단독 증명 주장(Alessandro Masullo)도 등장.
- **시기**: Anthropic 상장(11월 19일, $813억 조달) 바로 다음 날 발표라 시점 논란도 있음. Anthropic은 공식 논평 없음.

## 맥락

- 기계 검증(formal verification)이 '증명'의 의미를 바꾸는 분기점 — 인간이 읽지 못한 증명을 기계가 수 시간 만에 검증
- 위키의 AI 과학 발견·형식 검증 개념과 직결. 단 '검증됨 ≠ 수학계 합의' 주의 필요
