---
title: "OpenAI 수학 원고 9편 — 행렬곱 지수 9/4 하한, Smale 9번 문제·Hirsch 추측 반증 주장"
category: concepts
tags: [openai, math, matrix-multiplication, lean, complexity, hirsch, smale]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-openai-math-manuscripts-omega-9-4.md"
related:
  - "[[concepts/google-cogentic-six-math-proofs]]"
  - "[[concepts/agent-scientific-discovery]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# OpenAI 수학 원고 9편 — 행렬곱 지수 9/4 하한, Smale 9번 문제·Hirsch 추측 반증 주장

## 쉽게 읽기

**비유**: 두 행렬을 곱하는 가장 빠른 방법을 찾는 일은 1969년부터 풀리지 않은 숙제였다. "이상적으로는 2배 속도로 늘어난다"는 희망이 있었는데, OpenAI의 AI가 만든 원고는 "아무리 잘해도 2.25배(9/4)까지만 줄일 수 있다. 2는 불가능하다"고 주장한다. 말하자면 "이 숙제의 답은 여기까지"라는 하한선을 그은 것이다. 다만 아직 다듬어진 논문이 아니라 AI가 뱉은 날것의 연구 자료이고, 다른 전문가가 맞는지 확인하지 않았다.

| 용어 | 풀이 |
|------|------|
| **행렬곱 지수 ω (오메가)** | n×n 행렬곱에 필요한 연산이 n의 몇 제곱으로 늘어나는지 나타내는 수. 작을수록 빠르다 |
| **하한 (lower bound)** | 아무리 잘해도 이 이하로는 못 줄인다는 최소 한계 |
| **상한 (upper bound)** | 이 정도까지는 가능하다는 달성 가능한 한계 |
| **강다항 (strongly polynomial)** | 입력 숫자의 크기와 상관없이, 개수만으로 실행 횟수가 정해지는 알고리즘 |
| **Lean** | 증명을 컴퓨터가 검사할 수 있는 형태로 적는 도구·언어 |
| **galactic** | 상수가 천문학적으로 커서 실제로는 못 쓰는 알고리즘을 가리키는 말 |

## 한줄 정의

OpenAI가 2026-11-24 저녁 openai/math 저장소에 올린 수학 원고 9편으로, 행렬곱 지수 ω가 정확히 9/4(=2.25)라는 하한 주장을 핵심으로 하며 선형계획법의 강다항 알고리즘과 다항 Hirsch 추측 반증도 포함한다. 모두 미검증 주장이다.

## 핵심 내용

- **규모**: history.md 기준 9편, 두 패밀리 — 379번 유클리드 텐서 기하(7편), 380번 강다항 선형계획법(2편). 저장소 설명에 따르면 원고는 "이름 없는 OpenAI 내부 모델이 만든 raw 연구 데이터"이며 다듬어진 학술 논문이 아님.
- **행렬곱 지수 ω=9/4**: 111쪽 프리프린트 "The matrix multiplication exponent is nine fourths". n×n 행렬곱의 최적 지수가 모든 체(field)에서 9/4라고 주장. 상한(9/4에 도달 가능)은 10월 2일 원고에서 이미 나왔고, 이번에 새로 나온 것은 하한 — 형식적 산술 회로(formal arithmetic circuit)는 최소 ⌈n^{9/4}/2⌉개의 곱셈·나눗셈 게이트가 필요하다는 주장. 수십 년간 희망이던 ω=2는 이 주장이 맞다면 불가능.
- **같은 묶음의 다른 주장**: 강다항 선형계획법 알고리즘(Smale의 9번 문제에 대한 답이라고 소개), 단순 다면체의 초대각(superpolynomial graph diameter)으로 다항 Hirsch 추측 반증.
- **검증 상태**: Lean 형식화는 일부만 존재. 11월 25일 기준 이름 있는 전문가의 검토는 확인되지 않음. OpenAI의 Sebastien Bubeck은 "하한에 대해 알려진 것이 아무것도 없었다"며 충격이라고 했고, Scott Aaronson은 더 큰 충격은 "AI가 ω>2 형태의 하한을 증명했다는 것 자체"라고 적음.
- **범위 주의**: 주장은 형식적 산술 회로 모델(기호 연산 횟수를 세는 모델)에 한정되며, Word RAM이나 비트 단위 알고리즘에 대한 하한은 아니다. 상수는 천문학적이라 실용 알고리즘은 아님('galactic'). 외부 저자들이 상한 절반을 자기 방식으로 다시 증명한 사례는 있음(Shpilka ECCC, Pass arXiv).

## 왜 중요한가 (1인 개발자 관점)

1. **AI 수학의 단계가 올라갔다**: 11월 23일 VP≠VNP 원고에 이은 연속 사례로, AI가 증명하는 수학이 '모델이 낸 결과'에서 '미해결 문제의 하한'으로 이동 중이다. 같은 주 Google Cogentic과 함께 읽어야 할 흐름이다.
2. **'주장'과 '증명'을 구분하는 눈**: 원고는 raw 연구 데이터다. 하한이 맞는지, 어떤 모델(산술 회로)에만 해당하는지를 먼저 확인하는 습관이 과장된 헤드라인을 거른다.
3. **하한 증명의 희소성**: 상한("이렇게 하면 된다")보다 하한( "아무리 해도 안 된다")이 훨씬 어렵다. AI가 하한을 냈다는 것 자체가 연구 방식의 변화를 시사한다 — 검증이 뒤따른다면.

## 한계 (명시)

- 모두 미검증 주장으로, 11월 25일 기준 이름 있는 전문가의 검토가 확인되지 않았다.
- Lean 형식화는 일부만 존재한다.
- 주장은 형식적 산술 회로 모델에 한정되며, Word RAM·비트 단위 알고리즘에는 적용되지 않는다.
- 상수가 천문학적으로 커 실용 알고리즘은 아니다.
- confidence는 medium — OpenAI 저장소 원문과 Bubeck·Aaronson 코멘트 교차이나, 독립 검증이 없다.

## 관련 개념

- [[concepts/google-cogentic-six-math-proofs]] — 같은 주 Google의 수학 증명 6편. AI 수학 증명 주간의 다른 한 축 (2026-11-26)
- [[concepts/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인. 미해결 문제에 대한 AI의 접근 (2026-11-26)
- [[concepts/llm-evaluation]] — 미검증 주장의 평가 기준. Lean 형식화·전문가 검토의 부재 (2026-11-26)

## 참고 소스

- [OpenAI 수학 원고 9편 — 행렬곱 지수 9/4 하한, Smale 9번 문제·Hirsch 추측 반증 주장 (dev.to, 11-24)](raw/articles/2026-11-26-openai-math-manuscripts-omega-9-4.md)
