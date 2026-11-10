---
title: "OpenAI GPT-6.1 Terra — 절반 가격의 컴퓨터 사용 모델"
category: concepts
tags: [openai, gpt-6-1-terra, computer-use, api-pricing, codex]
created: 2026-10-27
updated: 2026-10-27
sources:
  - "raw/articles/2026-10-27-openai-gpt61-terra-half-price.md"
related:
  - "[[concepts/gpt-61-sol-ultrafast]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/openai-enterprise-discounts-anthropic]]"
status: draft
confidence: high
---

# OpenAI GPT-6.1 Terra — 절반 가격의 컴퓨터 사용 모델

## 쉽게 읽기

**비유**: 플래그십 모델이 "무엇이든 다 잘하는 비싼 만능 직원"이라면, Terra는 "사무·컴퓨터 작업만 빠르고 싸게 처리하는 실무 직원"이다. 같은 일을 10분의 1 토큰 가격에, 3배 이상 빠르게 끝낸다고 한다. 다만 가장 어려운 코딩·컴퓨터 작업은 여전히 상위 모델(Sol·Astra) 몫이다 — 싸다고 만능은 아니다.

| 용어 | 풀이 |
|------|------|
| **컴퓨터 사용** | 화면·소프트웨어를 직접 조작해 업무를 수행하는 에이전트 능력 |
| **캐시 입력** | 이전에 처리한 프롬프트를 재사용해 할인받는 입력 토큰 |
| **Agents' Last Exam** | 에이전트의 실무 소프트웨어 활용 능력을 재는 벤치마크 |
| **Critical 임계** | OpenAI Preparedness Framework의 사이버보안 위험 최고 단계 |

## 한줄 정의

2026-10-26 OpenAI가 출시한 GPT-6.1 Terra — ChatGPT Work·Codex·API용 컴퓨터 사용 특화 모델, 입력 $1·출력 $5(백만 토큰당)로 Sol의 절반 가격.

## 핵심 내용

- **가격**: 입력 $1 / 캐시 입력 $0.05 / 출력 $5(백만 토큰당). Sol($2/$10)의 절반, Astra($10/$50)의 10분의 1, 전작 Terra($2/$12)의 절반 이하. 배치 요금은 절반 추가 할인, Ultrafast 티어에는 없음.
- **제공 경로**: ChatGPT Work·Codex(Plus·Pro·Enterprise·Edu), API gpt-6.1-terra, Codex CLI 0.159.0 이상. 일반 Chat이 아닌 Work·Codex 경로이며 플랜 사용량 한도는 그대로 — 같은 한도로 더 많은 과제를 처리한다는 것이 OpenAI의 주장.
- **성능(OpenAI 주장)**: Agents' Last Exam 최대 effort 60.0%, 과제당 $1.01. Astra 동급 과제 수행을 토큰 가격 10분의 1로, 평균 3배 이상 빠르게. 사실 오류율 대폭 감소(내부 유도 테스트 4.3%, 저 effort 16.7%) — 독립 재현 미확인.
- **독립 평가**: Artificial Analysis 지수 48(전작 42, Sol 54, Opus 5.5 58, Argon·Astra 53). 과제당 비용 $1.40→$0.40, 답을 모를 때 추측률 88%→38%. 코딩·심층 컴퓨터 작업에서는 Sol이 여전히 우위라는 OpenAI 자체 평가도 함께 공개됐다.
- **안전·제약**: 사이버보안 Critical 임계 도달, Astra용 안전장치 유지, 36쪽 시스템 카드 부록 공개. UAE 추론 레지던시 미지원, 272,000 토큰 초과 요청 할증, Fast 모드 2배 요금 등 부가 조건 존재.

## 왜 중요한가 (1인 개발자 관점)

1. **가격대 분화의 완성**: 플래그십·Sol·Terra·Luna로 이어지는 가격 사다리 — 어떤 작업을 어느 가격대에 맡길지 라우팅하는 것이 곧 비용 전략이다.
2. **중간 가격대의 전쟁터**: 할인 공세에 이어 정가 자체가 반값으로 — "싼 모델" 경쟁이 판을 바꾸고 있다. 1인 개발자에게는 고가 모델 의존도를 낮출 실질적 대안.
3. **속도도 스펙이다**: 3배 빠르다는 것은 단순 편의가 아니라, 같은 시간에 3배 많은 에이전트 작업을 돌릴 수 있다는 처리량 차이다.

## 한계 (명시)

- 성능·오류율 수치의 상당 부분은 OpenAI 자체 측정이며, 독립 재현이 아직 없다.
- 최상위 코딩·컴퓨터 작업은 Sol·Astra가 여전히 우위 — Terra는 범용 대체재가 아니다.
- UAE 레지던시 미지원 등 지역·티어 제약이 있어, 데이터 거버넌스 요건이 있는 팀은 사전 확인이 필요하다.
