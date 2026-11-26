---
title: "OpenAI 수학 원고 9편 — 행렬곱 지수 9/4 하한, Smale 9번 문제·Hirsch 추측 반증 주장 (11-24)"
source_url: "https://dev.to/axrisi/openais-claim-that-the-matrix-multiplication-exponent-is-exactly-94-and-what-has-been-checked-398j"
source_type: "news"
authors: ["axrisi"]
published: 2026-11-24
fetched: 2026-11-26
tags: [openai, math, matrix-multiplication, lean, complexity, hirsch, smale]
status: raw
---

# OpenAI 수학 원고 9편 — 행렬곱 지수 9/4 하한, Smale 9번 문제·Hirsch 추측 반증 주장 (11-24)

> OpenAI가 11월 24일 저녁 openai/math 저장소에 수학 원고 9편을 올렸다. 핵심은 행렬곱 지수 ω가 정확히 9/4(=2.25)라는 주장으로, 1969년부터 열린 문제에 대한 하한(lower bound)을 제시한다. 같은 묶음에는 선형계획법의 강다항(strongly polynomial) 알고리즘과 다항 Hirsch 추측 반증도 포함됐다. 모두 미검증 주장이다.

## 내용

- **규모**: history.md 기준 9편, 두 패밀리 — 379번 유클리드 텐서 기하(7편), 380번 강다항 선형계획법(2편). 저장소 설명에 따르면 원고는 "이름 없는 OpenAI 내부 모델이 만든 raw 연구 데이터"이며 다듬어진 학술 논문이 아님.
- **행렬곱 지수 ω=9/4**: 111쪽 프리프린트 "The matrix multiplication exponent is nine fourths". n×n 행렬곱의 최적 지수가 모든 체(field)에서 9/4라고 주장. 상한(9/4에 도달 가능)은 10월 2일 원고에서 이미 나왔고, 이번에 새로 나온 것은 하한 — 형식적 산술 회로(formal arithmetic circuit)는 최소 ⌈n^{9/4}/2⌉개의 곱셈·나눗셈 게이트가 필요하다는 주장. 수십 년간 희망이던 ω=2는 이 주장이 맞다면 불가능.
- **같은 묶음의 다른 주장**: 강다항 선형계획법 알고리즘(Smale의 9번 문제에 대한 답이라고 소개), 단순 다면체의 초대각(superpolynomial graph diameter)으로 다항 Hirsch 추측 반증.
- **검증 상태**: Lean 형식화는 일부만 존재. 11월 25일 기준 이름 있는 전문가의 검토는 확인되지 않음. OpenAI의 Sebastien Bubeck은 "하한에 대해 알려진 것이 아무것도 없었다"며 충격이라고 했고, Scott Aaronson은 더 큰 충격은 "AI가 ω>2 형태의 하한을 증명했다는 것 자체"라고 적음.
- **범위 주의**: 주장은 형식적 산술 회로 모델(기호 연산 횟수를 세는 모델)에 한정되며, Word RAM이나 비트 단위 알고리즘에 대한 하한은 아니다. 상수는 천문학적이라 실용 알고리즘은 아님('galactic'). 외부 저자들이 상한 절반을 자기 방식으로 다시 증명한 사례는 있음(Shpilka ECCC, Pass arXiv).

## 맥락

- 11월 23일 VP≠VNP 원고에 이은 OpenAI 수학 시리즈의 연속 — AI가 증명하는 수학이 '모델이 낸 결과'에서 '미해결 문제의 하한'으로 단계가 올라감
- 같은 날 Google Cogentic의 수학 증명 6편과 나란히 읽어야 할 'AI 수학 증명 주간'의 한 축. 둘 다 아직 독립 검증 전이라는 공통점
- 위키의 에이전트 과학 발견·Lean 형식 검증·멀티 에이전트 연구 주제와 직결
