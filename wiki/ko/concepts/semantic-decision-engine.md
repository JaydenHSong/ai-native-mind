---
title: "Semantic Decision Engine"
category: concepts
tags: [semantic-decision-engine, non-generative, model-routing, cost-optimization, llm-evaluation, decisions-api, openai, musubi, policylm]
created: 2026-09-27
updated: 2026-10-08
sources:
  - "raw/articles/2026-09-27-jevs-semantic-decision-engine.md"
  - "raw/articles/2026-10-02-decision-models-clef-decider-2b.md"
  - "raw/articles/2026-10-03-openai-decisions-api-devday.md"
  - "raw/articles/2026-10-08-musubi-policylm-decision-model.md"
related:
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/structured-output]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[patterns/agent-authority-model]]"
status: draft
confidence: medium
---

# Semantic Decision Engine

## 쉽게 읽기

**비유**: 자판기 버튼이 5개인데 굳이 시를 써서 음료를 고르지 않는다. Jev(TypeSafeAI)는 선택지가 정해진 결정(triage·분류·라우팅) 전용 엔진 — **생성하지 않는다**. "코드가 이미 가능한 답을 알고 있을 때 언어 생성은 잘못된 인터페이스."

| 용어 | 풀이 |
|------|------|
| **Semantic Decision Engine** | 의미 이해는 하되 **언어 생성을 하지 않고** 고정된 선택지 중 결정만 내리는 엔진 |
| **Invented-option failure mode** | 생성형 모델이 존재하지 않는 선택지를 날조하는 실패 — 비생성 구조에서는 원천 차단 |

## 한줄 정의

가능한 답이 고정된 경계 있는 결정 문제에 특화된 **비생성(non-generative) AI 엔진** — 비용·지연 절감과 날조 선택지 제거가 핵심 주장.

## 핵심 내용

- **제품**: TypeSafeAI "Jev" (2026-09)
- **대상**: triage, classification, routing — 선택지가 닫힌 결정
- **주장**: "Language generation is the wrong interface when code already knows the possible answers."
- **효과**: 비용·지연 절감 + invented-option failure mode의 구조적 제거
- **출처 주의**: 벤더 자사 발표, 독립 검증 없음 — confidence **low**

## 왜 중요한가 (1인 개발자 관점)

1. **비용 축의 확장**: [[patterns/ai-cost-management]]의 "싼 모델로 라우팅"을 넘어 "생성 자체를 안 함" — 라우팅 대상 분류기 자체를 Jev류로 교체하는 옵션
2. **Eval 용이성**: 출력 공간이 닫혀 있으면 [[concepts/llm-evaluation]]이 쉬워짐 — 열린 생성의 eval 난이도와 대조
3. **아키텍처 패턴**: "생성 LLM + 결정 엔진"의 하이브리드 — 모든 판단을 거대 모델에 맡기지 않는 설계

## 2026-10-02 보강 — Decision Model 웨이브: Clef + Strands Decider 2B

Jev(9/27)가 주장했던 "생성하지 않는 결정 엔진"이 5일 만에 **제품 물결**로 왔다. 자유 텍스트가 아닌 **정해진 선택지의 확률**을 반환하는 모델이 잇달아 오픈소스로.

### Cloudflare — Clef + Clef-flash

- "decision"에 최적화된 오픈소스 모델 2종 공개. 문장 대신 미리 정한 답의 확률 반환.
- **Workers AI 위에 RL 파인튜닝 서비스** 추가 — decision model을 내 워크로드에 맞게 튜닝하는 인프라까지 번들.
- 용도: 에이전트 라우팅, 가드레일, 툴 선택 — 전체 LLM 호출보다 낮은 지연·비용.
- 가중치 Apache 2.0 (석간 보도: 270억/90억 매개변수급 2종 — 회사 시험 결과 기준).

### Strands (AWS) Labs — Decider 2B

- 20억 매개변수 오픈 decision model. 가중치·학습 스크립트 공개, **로컬 실행 가능**.
- 신뢰도 점수가 붙은 선택을 수십~수백 ms에 반환.
- 패턴 제안: **LLM이 액션을 실행하기 전 로컬 decider로 게이팅** ("이 툴 호출은 grounded한가?") — 비용 절감 + 툴 호출 안전성.

### 의미

- 상시 반복되는 분류·라우팅·승인/거부 결정을 값비싼 LLM 호출에서 떼어내는 **하이브리드 에이전트 아키텍처**가 실무 표준으로 이동 중 — 이 페이지의 "왜 중요한가" 3번(생성 LLM + 결정 엔진)이 제품이 된 것.
- 가드레일 관점에서는 [[patterns/agent-safety-runtime]]의 실행시점 강제와 짝: 런타임이 "막는" 쪽이라면 decision model은 "고를 때" 쪽.

### 한계 (명시)

- 성능·지연 수치는 각 회사 **자체 시험 결과** — 독립 검증 필요. confidence **low → medium** (두 벤더가 같은 방향으로 제품화 — 개념의 실재성은 확인, 수치는 대기).

## 2026-10-03 보강 — OpenAI Decisions API: decision model의 빅랩 제품화

DevDay(10/3)에서 OpenAI가 **Decisions API**를 발표 — Luna 모델 기반, 제한 프리뷰.

- 특징: 빠른 의사결정·이미지 이해·다국어·안전성, **단일 선택(single choice) 극속도** 특화 — 이 페이지의 Jev와 사실상 같은 개념.
- Jev와의 유사성이 너무 뚜렷해 TypeSafeAI CEO Diogo Almeida가 "클론 전쟁"이라 농담 — 오픈소스/소규모 벤더 선행 → 빅랩 후행 진입의 전형.
- QueryStory 데모 수치: 동일한 감시 태스크에 Jev **$2.94** vs 프런티어 LLM **$372** — 매 액션을 감시해야 하는 시대에 decision model의 경제성을 정량화.
- 의미: 10/2의 오픈소스 웨이브(Clef·Decider 2B)에 빅랩(OpenAI) 제품이 대응 — **decision model이 표준 레이어**로 굳어지는 단계. 이 페이지 "한계"의 "개념의 실재성은 확인"이 한 단계 더 강해짐.
- 함께 나온 DevDay 소식: 쇼핑 도구 확장, 정보 공유 의혹으로 보안 연구원 3인 퇴사 — 맥락 참고용 (본 페이지의 직접 주제는 아님).

## 2026-10-08 보강 — Musubi PolicyLM-1.7B: 결정 모델의 실시간 가드레일화

10/6 TechCrunch 단독 — Musubi가 **1.7B 파라미터 오픈 웨이트 결정 모델 PolicyLM-1.7B** 공개:

- 평이한 영어 문장의 콘텐츠 정책을 메시지에 **50ms 미만**으로 적용. 정책 변경 시 재학습 불필요 (프롬프트 수준에서 정책 교체).
- 전통 분류기와 동등한 비용·속도 + LLM 유연성 유지. 초기 활용처로 '말썽 피우는 AI 에이전트 통제' 언급.
- 계보: TypeSafeAI Jev(9/27) → Clef·Decider 2B(10/2) → OpenAI Decisions API(10/3) → **PolicyLM-1.7B(10/6)**. 11일 만에 4번째 상용 결정 모델 — 오픈소스/소규모 벤더가 선도하고 빅랩이 후행하는 패턴의 반복.
- [[patterns/agent-safety-runtime]]과 직결: 50ms 실시간 판정은 실행시점 보안 런타임의 "판정 레이어" 후보. [[patterns/agent-authority-model]] 관점에서는 자연어로 표현된 권한 경계를 기계적으로 강제하는 메커니즘.
- 출처 한계: TechCrunch 단독 — 50ms 등 수치는 회사 주장, 독립 검증 없음. 이 페이지 confidence는 medium 유지.

## 관련 개념

- [[patterns/ai-cost-management]] — 비생성 결정이 여는 새 비용 최적화 축
- [[concepts/llm-evaluation]] — 닫힌 출력 공간의 평가 용이성
- [[concepts/structured-output]] — 출력 강제 vs 생성 회피의 대조

## 참고 소스

- [Jev: the Semantic Decision Engine that refuses to generate](raw/articles/2026-09-27-jevs-semantic-decision-engine.md)
- [Musubi, PolicyLM-1.7B 공개 — 50ms 미만 실시간 결정 모델 (TechCrunch, 10/6)](raw/articles/2026-10-08-musubi-policylm-decision-model.md)
