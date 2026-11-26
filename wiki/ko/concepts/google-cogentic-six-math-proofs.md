---
title: "Google Cogentic, 하루 만에 수학 증명 6편 — 인수분해 무조건 준지수 bound 포함"
category: concepts
tags: [google, cogentic, gemini-4, math, factoring, multi-agent, lean]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-google-cogentic-six-math-proofs.md"
related:
  - "[[concepts/openai-math-manuscripts-omega-9-4]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agent-scientific-discovery]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# Google Cogentic, 하루 만에 수학 증명 6편 — 인수분해 무조건 준지수 bound 포함

## 쉽게 읽기

**비유**: 수학자 여러 명이 팀을 이뤄 증명을 쓰고, 다른 팀이 "여기 틀렸다"며 까다롭게 검사하고, 통과한 단계만 기록장에 남기는 방식이다. 이렇게 만든 수학 논문 6편이 하루 만에 나왔다. 그중 하나는 "큰 수를 소수들의 곱으로 쪼개는 일(인수분해)"에 대한 새로운 속도 한계다. 인수분해는 인터넷 암호(RSA)의 바탕이라, 이 소식이 "암호가 깨졌나?"로 번졌지만 아니다. 이번 결과는 기존보다 빠르다는 뜻이 아니라, "아무리 못해도 이 정도 시간 안에는 된다"는 상한선을 처음으로 증명했다는 데 의미가 있다. 아직 다른 수학자들이 맞는지 확인하지 않았다.

| 용어 | 풀이 |
|------|------|
| **인수분해** | 큰 수를 소수들의 곱으로 쪼개는 일. RSA 암호는 이게 어렵다는 데 기대고 있다 |
| **준지수 (subexponential)** | 다항 시간보다 느리고 지수 시간보다 빠른 중간 속도. "빠르다"가 아니라 "지수보다는 낫다"는 뜻 |
| **무조건 (unconditional)** | 증명되지 않은 가정을 하나도 쓰지 않았다는 뜻 |
| **bound** | "이 정도 안에는 된다" 같은 속도 한계선 |
| **Lean 4** | 증명을 컴퓨터가 검사할 수 있는 형태로 적는 도구·언어 |
| **적대적 검증** | 일부러 틀린 곳을 찾아내는 검사 방식 |

## 한줄 정의

Google Research가 2026-11-25 공개한 멀티 에이전트 수학 증명 하네스 Cogentic이 만든 논문 6편(총 274쪽)으로, 인수분해의 무조건 준지수 시간 bound를 포함하며 각 논문은 "초기 프롬프트 외 인간 개입 없이 Cogentic이 전부 만들었다"고 적혀 있다. RSA를 깨는 결과가 아니다.

## 핵심 내용

- **Cogentic이란**: Google Research·DeepMind의 멀티 에이전트 증명 발견 하네스. 여러 에이전트가 증명을 시도하고, 다른 에이전트가 적대적으로 검증하며, 검증된 단계만 원장(ledger)에 기록한다. 기반 모델은 Gemini 4. 2026-09-30 arXiv 논문(Cogentic: Multi-Agent Orchestration for Automated Proof Discovery)으로 소개됨.
- **공개된 6편 (11-25 커밋, google-research 저장소)**: 무조건 인수분해 L_N[1/3, O(1)] (랜덤화, 54쪽), 무조건 결정적 준지수 인수분해 (59쪽), 고정 특성 유한체 이산로그 준다항 시간 (36쪽), 1/5-근사 내시 균형 다항 시간 알고리즘 (41쪽), 로그-랭크 추측 제곱근 장벽 돌파 (37쪽), 선형 밀도 단순 그래프 간선 재구성 (47쪽).
- **인수분해 bound**: 랜덤화 버전은 0-오류 Las Vegas 알고리즘으로 모든 정수 N을 기대 시간 L_N[1/3, 105]에 완전 인수분해한다고 주장. 결정적 버전은 exp(3 (ln N)^{3/4}) 수준의 준지수 bound. 둘 다 미증명 가정이 없는 '무조건' 결과라고 주장.
- **RSA는 안 깨짐**: bound는 준지수이지 다항 시간이 아니며, 상수 105는 범용 수체 체(GNFS)의 ~1.923보다 훨씬 크다. Scott Aaronson은 "어느 것도 깨지 않는다(None of them breaks anything)"고 정리. '인수분해를 다항 시간에 풀었다'는 소문은 별개의 미확인 루머.
- **검증 상태**: 공개 시점에 Lean 4 형식화 파일은 저장소에 0개. README는 "모든 증명의 Lean 4 형식화를 후속 제출로 공개하겠다"고만 적음. 외부 수학자의 독립 검증은 아직 없음.

## 왜 중요한가 (1인 개발자 관점)

1. **검증 파이프라인이 곧 제품이다**: Cogentic의 핵심은 모델이 아니라 '시도–적대적 검증–원장 기록' 구조다. 에이전트에게 어려운 일을 맡길 때, 결과를 믿게 만드는 건 더 큰 모델이 아니라 검증 장치라는 점을 보여 주는 사례다.
2. **'AI가 수학을 증명한다'는 단계가 올라갔다**: 같은 주 OpenAI의 수학 원고 9편과 나란히, AI의 수학 작업이 '결과 내기'에서 '미해결 문제의 하한·bound'로 이동 중이다. 두 사례 모두 아직 독립 검증 전이라는 공통점이 있다.
3. **소문과 결과를 구분하는 기준**: '다항 시간 인수분해' 소문이 따로 돌았다. bound의 종류(다항/준지수/지수)와 상수를 확인하는 습관이, AI 뉴스의 과장을 거르는 첫 번째 필터다.

## 한계 (명시)

- Lean 4 형식화가 0개라 컴퓨터 검증이 아직 불가능하고, 외부 수학자의 독립 검증도 없다.
- 상수 105는 실용 알고리즘(GNFS ~1.923)보다 훨씬 커서, 암호·실무에 미치는 영향은 없다.
- 6편 모두 Google Research의 공개 주장이며, 저장소 README의 설명에 의존한다.
- confidence는 medium — Google 공식 공개와 Scott Aaronson 등 전문가 코멘트 교차이나, 독립 검증이 전혀 없다.

## 관련 개념

- [[concepts/openai-math-manuscripts-omega-9-4]] — 같은 주 OpenAI의 수학 원고 9편. AI 수학 증명 주간의 다른 한 축 (2026-11-26)
- [[concepts/ai-orchestration]] — 여러 에이전트를 조율하는 패턴. Cogentic의 적대적 검증·원장 구조 (2026-11-26)
- [[concepts/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인. 수학 증명 발견도 같은 흐름 (2026-11-26)
- [[concepts/llm-evaluation]] — 독립 검증 전 주장의 평가 기준. Lean 형식화·외부 검증의 부재 (2026-11-26)

## 참고 소스

- [Google Cogentic, 하루 만에 수학 증명 6편 — 인수분해 무조건 준지수 bound 포함 (munderdiffl.in, 11-25)](raw/articles/2026-11-26-google-cogentic-six-math-proofs.md)
