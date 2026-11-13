---
title: "Google Gemini Decisions API — gemini-decision-1, 단일 forward pass 판단 모델 (11-11)"
category: concepts
tags: [google, gemini, gemini-decision-1, decisions-api, agent-routing, evaluation]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-google-gemini-decisions-api.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/tool-use]]"
status: draft
confidence: high
---

# Google Gemini Decisions API — gemini-decision-1, 단일 forward pass 판단 모델 (11-11)

## 쉽게 읽기

**비유**: 지금까지는 판단을 내릴 때마다 에세이를 쓰게 했다면, 이제는 객관식 답안지에 동그라미만 치는 전용 채점기가 나온 셈이다. "이 도구를 쓸까, 말까" 같은 질문 1,000개를 한 번에 채점하고, 답만 확률로 내놓는다. 에세이(텍스트 생성)보다 빠르고 싸다.

| 용어 | 풀이 |
| **forward pass** | 모델이 입력에서 출력까지 한 번 계산을 통과하는 것 — 생성 모델은 토큰마다 반복하지만, 결정 모델은 한 번으로 끝낸다 |
| **루브릭(rubric)** | 채점 기준표 — "이 답은 기준 1~5 중 몇 점인가"처럼 정해진 기준으로 평가하는 문항 |
| **ECE** | Expected Calibration Error — 모델이 "90% 확신"이라고 할 때 실제로 90% 맞는지 재는 보정 오차 |
| **라우팅(routing)** | 쿼리·작업의 성질을 보고 어떤 모델·도구에 보낼지 정하는 분기 결정 |

## 한줄 정의

2026-11-11 — Google이 텍스트를 생성하지 않고 후보 옵션을 단일 forward pass로 점수화하는 전용 모델 `gemini-decision-1` 기반의 Decisions API를 공개했다. yes/no·선택·루브릭 문항 최대 1,000개를 한 번에 평가하고, 입력 100만 토큰당 $0.10에 출력 과금은 $0이다. 에이전트의 라우팅·검증·정책 게이트를 LLM 생성 없이 확률 기반으로 처리하는 '판단 원자'의 상품화다.

## 핵심 내용

- **모델**: `gemini-decision-1`은 비생성(non-generative) 모델로, yes/no·선택(2~255개 옵션)·루브릭 문항 최대 1,000개를 하나의 공유 멀티모달 입력(텍스트·이미지·오디오·비디오·PDF)에 대해 단일 forward pass로 평가해 확률과 신뢰도를 반환한다. 출력 토큰은 0개다.
- **성능·가격**: 모델 연산 중앙값 50~100ms, 종단 간 지연 150~250ms로, 1~100문항까지 거의 일정하다. 가격은 입력 100만 토큰당 $0.10, 출력 과금 $0. Google 주장으로는 Gemini 3.5 Flash-Lite 대비 약 5배 저렴하다.
- **용도**: 도구 선택, 정책 검사, 모델 라우팅, 컨텍스트 등급 평가. Gemini Notebook이 실시간 라우터로 사용해 일반 쿼리 지연시간을 최대 40% 단축했다고 한다. Search의 MCP 도구 안전 계층으로도 쓰인다.
- **벤치마크 — 자체 vs 독립 지수 엇갈림**: Google 자체 벤치에서 JevBench 공개 분할 92.2%로 GPT-6 Luna 90.9%, Jev 1.14 90.0%를 앞섰고, 보정 오차(top-1 ECE 0.0250)도 가장 낮았다고 한다. 다만 독립 지수 Artificial Analysis Decision Index v2.1에서는 18개 중 9위(65.98), Drex Max v1.1(72.62)보다 뒤처진다. 같은 '결정' 능력인데도 측정 틀에 따라 순위가 갈린다.
- **가용성**: Gemini API(v1beta, `/v1beta/decisions`)에서 제공, Vertex AI는 "coming soon". Google Cloud 출시는 아직 미정(near term)이다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 아키텍처에 '판단'이라는 새 원자가 생겼다**: 지금까지 라우팅·검증·정책 검사는 비싼 생성 모델에 프롬프트로 맡겼다. 1,000개 문항을 150~250ms에 $0.10/MTok으로 처리하는 전용 모델은 하네스 설계의 비용 구조를 바꾼다. '비싼 플래너 + 싼 실행기' 2계층에 '거의 공짜인 심판'이 추가되는 셈이다.
2. **확률이 곧 인터페이스가 된다**: 출력이 토큰이 아니라 확률·신뢰도라는 점이 중요하다. 임계값으로 분기하고, 신뢰도가 낮으면 사람에게 넘기는 HITL 게이트를 숫자 기반으로 설계할 수 있다. Plan-Then-Verify 패턴의 검증기를 이 API로 대체하는 그림이 나온다.
3. **벤치마크 읽는 법의 교본**: 자체 벤치 1위와 독립 지수 9위라는 엇갈림은, '결정' 능력이 단일 숫자가 아니라 어떤 문항·어떤 분포로 재느냐에 따라 달라진다는 뜻이다. 내 하네스의 실제 문항 분포로 직접 재는 것만이 유효한 비교다.

## 한계 (명시)

- 수치 대부분은 Google 1차 주장으로 독립 검증이 없다. JevBench 수치는 Google 자체 벤치이며, 독립 지수에서는 9위다.
- 컨텍스트 상한은 2차 보도 간 16K 토큰과 256K 토큰으로 엇갈려 원문 확인이 필요하다.
- Vertex AI·Google Cloud 출시는 미정이라, 엔터프라이즈 도입은 아직 Gemini API(v1beta) 경로로만 가능하다.

## 관련 개념

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' 내부 테스트, Gemini 4 계열 체크포인트 (2026-10-10)
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴
- [[concepts/tool-use]] — LLM이 외부 함수/API를 호출하는 메커니즘

## 참고 소스

- [Gemini Decisions API 원본](raw/articles/2026-11-12-google-gemini-decisions-api.md)
