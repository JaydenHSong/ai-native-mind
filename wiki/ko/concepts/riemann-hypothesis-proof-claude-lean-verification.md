---
title: "리만 가설 증명 주장 — Claude와 6주 작업, Lean·Mathlib 독립 검증 통과"
category: concepts
tags: [anthropic, claude, mathematics, formal-verification, lean, riemann, research]
created: 2026-11-22
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-22-riemann-hypothesis-proof-claude-lean-verification.md"
related:
  - "[[concepts/openai-ai-science-three-discoveries]]"
  - "[[concepts/deepmind-alphaproof-code-signal]]"
  - "[[concepts/google-antigravity-teamwork]]"
status: draft
confidence: medium
---

# 리만 가설 증명 주장 — Claude와 6주 작업, Lean·Mathlib 독립 검증 통과

## 쉽게 읽기

**비유**: 167년 동안 아무도 못 푼 수학의 가장 유명한 문제를, 수학자 한 명이 AI와 6주 동안 함께 풀었다고 발표한 일이다. 증명은 사람이 읽는 글이 아니라 컴퓨터가 검사하는 코드 1,740만 줄로만 공개됐다. 수학 검산 프로그램이 "틀린 곳이 없다"고 확인까지 했다. 그런데도 아직 "풀렸다"고 확정할 수는 없다 — 증명자 본인도 내용을 다 이해 못 한다고 했고, 상금을 주는 연구소는 여전히 "안 풀린 문제"로 적어 두고 있기 때문이다.

| 용어 | 풀이 |
|------|------|
| **리만 가설** | 소수(2, 3, 5, 7 같은 수)가 어떻게 흩어져 있는지를 설명하는, 1859년 제기된 수학의 가장 유명한 미해결 문제 |
| **Lean** | 수학 증명을 컴퓨터가 검사할 수 있는 코드로 쓰는 언어 |
| **Mathlib** | Lean으로 쌓아 올린 수학 지식 모음 — 일종의 수학 도서관 |
| **형식 검증** | 증명이 논리적으로 맞는지 컴퓨터가 한 줄 한 줄 직접 검사하는 방법 |
| **Clay 연구소** | 리만 가설을 7대 난제 중 하나로 정하고 상금 100만 달러를 건 수학 연구소 |

## 한줄 정의

Anthropic 수학자 Levent Alpöge가 Claude와 약 6주간 작업해 리만 가설(일반화 리만 가설(GRH) 포함)의 증명을 찾았다고 2026년 11월 20일 발표했다. 증명은 논문이 아니라 Lean 코드 약 1,740만 줄로만 공개됐고, 11월 21일 Lean FRO·Mathlib Initiative가 명제와 증명 모두 옳다고 독립 인증했다. 다만 Clay 수학연구소는 여전히 미해결로 표기하고 있다.

## 핵심 내용

- **주장**: Alpöge, 11월 20일 개인 웹사이트에 4쪽 개요와 함께 발표. 리만 가설뿐 아니라 일반화 리만 가설(GRH)까지 해결했다고 주장. 작업 기간 10월 6일~11월 16일, 약 6주.
- **규모**: Lean 코드 약 1,740만 줄, 175,187개 파일. Mathlib 전체의 약 7.6배 규모. 47%가 아벨 다양체 관련 폴더에 집중.
- **검증**: 11월 21일 Lean FRO·Mathlib Initiative 공동성명 "명제와 증명 모두 옳다"고 인증. MIT Andrew Sutherland 등 독립 연구자들이 자체 재컴파일 — 175,187개 모듈 전부 오류 0건, 3개 표준 공리만 사용. 기호 재정의·커널 악용 여부를 확인하는 comparator run도 완료.
- **한계**: Alpöge 본인도 증명 일부를 완전히 파악하지 못했다고 인정. Clay 연구소는 상($100만) 심사를 위해 출판 후 최소 2년 검증 기간을 요구, 현재 미해결 표기 유지. 같은 날 인간 단독 증명 주장(Alessandro Masullo)도 등장.
- **시기**: Anthropic 상장(11월 19일, $813억 조달) 바로 다음 날 발표라 시점 논란도 있음. Anthropic은 공식 논평 없음.

## 왜 중요한가 (1인 개발자 관점)

1. **형식 검증이 '증명'의 의미를 바꾼다**: 인간이 읽지 못한 증명을 기계가 수 시간 만에 검증했다. [[concepts/deepmind-alphaproof-code-signal]]의 Signal 프로토콜 검증(Lean 650만 줄)과 [[concepts/google-antigravity-teamwork]]의 Weil 추측 형식화(180만 줄)를 잇는, AI 시대 수학의 새 장면이다. "이해"와 "검증"이 갈라지는 지점이다.
2. **에이전트의 작업 단위가 6주·1,700만 줄로 커졌다**: [[concepts/openai-ai-science-three-discoveries]]의 AI 과학 발견 흐름과 같은 선상 — 모델이 "답을 내는" 단계를 넘어 "검증 가능한 산출물을 대량 생산하는" 단계로 왔다.
3. **합의는 검증과 다른 속도로 온다**: 기계 인증이 끝났는데도 수학계 합의는 아직이다. 기술이 앞서고 제도가 따라오는 간극 — AI 산출물을 받아들이는 쪽의 검증·신뢰 구조가 병목이 되는 사례다.

## 한계 (명시)

- "증명됐다"가 아니라 "증명했다고 주장하고 기계 검증이 통과됐다"는 단계다. Clay 연구소는 여전히 미해결로 표기하며, 상금 심사에는 출판 후 최소 2년 검증 기간이 필요하다.
- GRH까지 해결했다는 주장의 인증 범위와, 보도마다 달라지는 GRH 인증 상태는 따로 확인이 필요하다 — 같은 사건을 두고 보고서마다 서술이 갈린다.
- Alpöge 본인이 증명 일부를 완전히 파악하지 못했다고 인정했다 — "이해 없는 검증"이 무엇을 의미하는지는 수학계 논의가 진행 중이다.
- confidence는 medium — Lean·Mathlib의 독립 인증이 있으나 수학계 합의가 없고, 증명자 본인의 이해 한계가 명시돼 있다.

## 관련 개념

- [[concepts/openai-ai-science-three-discoveries]] — OpenAI AI 과학 발견 3건, AI가 수학·컴퓨터과학·물리학에서 낸 발견의 선행 흐름 (2026-10-27)
- [[concepts/deepmind-alphaproof-code-signal]] — DeepMind AlphaProof Code, Signal 암호 프로토콜 기계어 수준 검증·Lean 650만 줄 (2026-11-10)
- [[concepts/google-antigravity-teamwork]] — Google Antigravity /teamwork, 에이전트 팀의 Weil 추측 형식화·180만 줄 Lean (2026-11-13)

## 참고 소스

- [클로드와 함께한 리만 가설 증명, Lean·Mathlib 독립 검증 통과 — 다만 수학계 합의는 아직 (Scientific American, 11-21)](raw/articles/2026-11-22-riemann-hypothesis-proof-claude-lean-verification.md)
