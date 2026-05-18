---
title: "GSAR: Typed Grounding for Hallucination Detection and Recovery in Multi-Agent LLMs (arXiv 2604.23366)"
source_url: "https://arxiv.org/abs/2604.23366"
source_type: "arxiv-paper"
authors: ["Federico A. Kamelhar (Oracle)"]
published: 2026-04-25
fetched: 2026-05-13
tags: [grounding, hallucination, multi-agent, llm-judge, evaluation, fever, arxiv]
status: ingested
---

# GSAR: Typed Grounding for Hallucination Detection and Recovery in Multi-Agent LLMs

> arXiv:2604.23366, 2026-04-25. Federico A. Kamelhar (Oracle Corporation). Multi-agent operational-incident investigation report context.

## 메타

- **Title**: GSAR: Typed Grounding for Hallucination Detection and Recovery in Multi-Agent LLMs
- **Author**: Federico A. Kamelhar (Oracle)
- **arXiv**: <https://arxiv.org/abs/2604.23366>
- **HTML**: <https://arxiv.org/html/2604.23366>
- **Domain**: 다중 에이전트가 operational incident를 조사하고 구조화된 진단 보고서를 만드는 시나리오. 보고서의 trustworthiness는 "claim이 observed evidence에 grounded인가, 아니면 model-internal inference인가"에 달려 있다.

## 한 줄 요약

**"Grounded vs Ungrounded"의 이진 분류는 부족하다 — claim을 4가지 type으로 나누고, evidence type에 따라 가중치를 다르게 주고, 결과 점수에 따라 *proceed / regenerate / replan* 세 가지 액션을 분기하는 게이트를 만들어라.**

## 핵심 주장

### 1) 기존 groundedness evaluator의 한계

- Binary classifier(grounded vs not), LLM-as-judge scalar, self-correction loop 모두 **supporting evidence를 interchangeable로 취급**한다.
- 그래서 출력이 **단일 신호**(점수 하나 / yes-no)뿐이라 downstream action을 **principled하게 통제 불가**.
- 특히 multi-agent 보고서에서는 "evidence 있음 / 없음" 두 칸으론 부족하다 — 어떤 claim은 evidence와 직접 모순되고, 어떤 claim은 evidence가 보조적이다.

### 2) GSAR의 4-way claim typology

| Type | 의미 | Action 기여 |
|------|-----|-----|
| **Grounded** | Evidence가 claim을 직접 support | + (정상) |
| **Ungrounded** | Evidence가 없거나 claim과 무관 | 0 |
| **Contradicted** | Evidence가 claim과 정면 충돌 | **−(비대칭 큰 페널티)** |
| **Complementary** | Evidence가 claim의 일부만 보조 | 부분 + |

- **Evidence-type-specific weights**: 각 evidence가 가지는 epistemic strength(증거의 강도)에 따라 가중치 차등.
- **Asymmetric contradiction penalty**: 모순된 claim 한 개가 grounded claim 여러 개를 무력화 — 이것이 "보고서를 함부로 내보내지 않는다"의 수학적 핵심.

### 3) 3-tier decision function

Bounded-iteration outer loop, 명시적 compute budget 하에서:

```
score ∈ proceed_region  → 보고서 출판
score ∈ regenerate_region → 같은 plan으로 텍스트만 다시 생성
score ∈ replan_region    → plan 자체를 갈아엎고 다른 evidence 수집
```

이게 "Λ(plan generator)"를 통제 가능하게 만드는 lock 메커니즘. (참고: [[journal/2026-05-06-pm|CAAF]]의 "H를 incorruptible asset으로 잠가라"와 같은 정신을 score-driven gate로 구현.)

## 정량 결과

- **Benchmark**: FEVER (Fact Extraction and VERification) + gold Wikipedia evidence
- **Judges**: 4 independently-trained LLM judges — gpt-5.4, claude-sonnet-4-6, claude-opus-4-7, gemini-2.5-pro
- **Metrics (5종)**: M1 Grounded-output rate / M2 Replan efficiency / M3 Calibration / M4 Contradiction catch-rate / M5 Complementary separation
- **헤드라인 결과**:
  - 같은 judge 품질에서 GSAR default는 **100 proceed decision** vs binary baseline **35** → **+185% grounded-output rate**.
  - Weighted approach는 proceed rate를 16/50 → 18/50 (+4pp)로 끌어올림.
  - **Contradiction penalty 제거** 실험: 시스템이 contradicted claim을 포함한 보고서까지 advance — **asymmetric penalty의 존재 이유**가 ablation으로 입증.

## 6 structural properties (formalized)

논문은 알고리즘을 formalize하고 **6가지 구조적 성질을 proof**한다 (대표: monotonicity, contradiction-asymmetry, budget-boundedness). 단순한 heuristic이 아니라 **수학적으로 검증된 게이트**.

## 본 위키 적용 후보

- [[concepts/context-rot-hallucination|context-rot-hallucination]]의 1번 Hallucination 섹션 — "Zero hallucination은 불가능 / 불확실성 관리에 집중"이라는 기존 입장에 **typed grounding이 그 불확실성을 어떻게 측정·게이팅하는지**의 구체 사례로 합류.
- [[concepts/llm-evaluation|llm-evaluation]] — 어제 들어온 [[journal/2026-05-12|JRH(judge reliability)]]가 "judge가 universally reliable하지 않다"였다면, GSAR는 "judge 4명 합의 + typed claim partition으로 그 unreliability를 누른다"의 짝.
- [[concepts/agent-supply-chain-security|agent-supply-chain-security]] — multi-agent 보고서의 출력 게이트로서 dual-LLM/CaMeL 라인과 합류 가능.

## 비교 포인트

- **JRH (2026-05-12)** vs **GSAR (2026-05-13)**: JRH는 *judge를 측정*하고, GSAR는 *judge들을 운영*한다. JRH가 "어떤 judge가 신뢰 가능?"이고, GSAR는 "여러 judge를 어떻게 묶어 게이트로 만드나?"이다.
- **CAAF (2026-05-06 PM)** vs **GSAR**: CAAF는 *State Locking으로 H를 잠그고*, GSAR는 *score-driven decision으로 출력 단을 잠근다*. 같은 정신, 다른 layer.

## 의의

- "Verification before commit" 라인의 **claim/text 도메인** 대표 사례.
- Binary groundedness → typed typology로 가는 **카테고리 시프트**. 4-way가 충분하냐는 별개 문제지만, *분류 카테고리를 늘려 액션 분기를 가능하게 만든다*는 원리는 일반화 가능.
- 1인 개발자 ROI: 위키 ingest 시 "claim이 source에 grounded인가 / contradicted인가 / complementary인가"를 명시적으로 표시하는 lint 항목 후보.

## 출처

- arXiv abstract + HTML version (2026-05-13 fetched)
- Submitted: 2026-04-25
- License: 명시 안 됨 (arXiv 기본)
