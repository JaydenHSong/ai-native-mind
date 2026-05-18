---
title: "Belief Memory: Agent Memory Under Partial Observability (arXiv 2605.05583)"
source_url: "https://arxiv.org/abs/2605.05583"
source_type: "arxiv-paper"
authors: ["Junfeng Liao", "Qizhou Wang", "Jianing Zhu", "Bo Du", "Rui Yan", "Xiuying Chen"]
published: 2026-05-07
fetched: 2026-05-17
tags: [memory, partial-observability, probabilistic-memory, belief-state, agent-memory, locomo, alfworld, arxiv]
status: ingested
---

# Belief Memory: Agent Memory Under Partial Observability

> arXiv:2605.05583, 2026-05-07. Liao · Wang · Zhu · Du · Yan · Chen. 외부 메모리가 관측 하나마다 단일 결론만 저장하면서 생기는 자기증폭 오류를 줄이기 위해 **확률적 후보 기억**을 유지하는 BeliefMem 제안.

## 메타

- **Title**: Belief Memory: Agent Memory Under Partial Observability
- **Authors**: Junfeng Liao, Qizhou Wang, Jianing Zhu, Bo Du, Rui Yan, Xiuying Chen
- **arXiv**: <https://arxiv.org/abs/2605.05583> | PDF: <https://arxiv.org/pdf/2605.05583>
- **Domain**: agent memory, partial observability, probabilistic belief state
- **Benchmarks**: LoCoMo, ALFWorld

## 한 줄 요약

**"메모리가 관측마다 하나의 결론만 박아 두면, 에이전트는 자기 오답을 계속 강화한다 — BeliefMem은 관측을 여러 후보 결론과 확률로 저장해, 기억을 '정답 캐시'가 아니라 'belief state'로 바꾼다."**

## 핵심 주장

### 1) 문제 — deterministic memory는 partial observation을 과신한다

논문이 드는 예: 일시적 에러만 보고 "API X failed"를 메모리에 단정적으로 저장해 버리면, 이후 agent는 그 결론을 전제로 행동하고 다시 그 결론을 강화한다.

→ 즉 메모리 오류가 단순 retrieval miss가 아니라 **self-reinforcing error loop**가 된다.

### 2) 제안 — BeliefMem

- 관측 1건당 결론 1개가 아니라 **candidate conclusions 여러 개** 유지
- 각 후보는 **확률(probability)** 을 함께 가짐
- 새로운 관측이 들어오면 **Noisy-OR rule**로 확률 갱신
- retrieval 시에도 후보들을 확률과 함께 함께 노출

→ 메모리가 "무엇이 사실인가"를 단정하는 대신, "지금 무엇을 얼마나 믿는가"를 보존한다.

### 3) 메모리 패러다임 전환

BeliefMem의 핵심은 정확도만이 아니라 **메모리 표현 자체의 철학 전환**이다.

| 기존 deterministic memory | BeliefMem |
|---|---|
| observation → single conclusion | observation → multiple hypotheses |
| 불확실성 폐기 | 불확실성 보존 |
| 나중에 수정 어려움 | 새 증거로 confidence 갱신 가능 |
| 자기증폭 오류 위험 | 대안 가설을 계속 가시화 |

### 4) 평가 결과 — 제한된 데이터에서도 평균 성능 최고

abstract가 명시하는 결과:

- **LoCoMo / ALFWorld** 에서 평가
- 제한된 데이터 조건에서도 **best average performance** 달성
- well-known baseline 대비 **remarkable outperformance**

세부 수치는 본문 표 확인이 필요하지만, 메시지는 명확하다: partial observability 환경에선 probabilistic memory가 deterministic memory보다 우월하다.

## 본 위키와의 짝

| 본 위키 페이지 | BeliefMem과의 관계 |
|---|---|
| [[concepts/ai-memory-systems]] | ZenBrain이 "망각·예측·자기 모델"을 말했다면, BeliefMem은 **uncertainty를 memory primitive로 보존**하는 구체 구현 |
| [[concepts/context-rot-hallucination]] | hallucination의 한 원인이 생성 단계뿐 아니라 **기억 단계의 조기 단정**일 수 있음을 보여 줌 |
| [[patterns/preventing-context-rot]] | 요약/압축 시 "하나의 결론만 남기기"가 위험할 수 있다는 경고 |
| [[concepts/harness-engineering]] | project memory를 deterministic log가 아니라 **belief-bearing memory**로 설계하는 방향 제안 |

## 2x3 좌표계에서의 위치

- **Prescriptive × 학습** 칸.
- 메모리를 어떻게 저장해야 하는지에 대한 처방이며, partial observability 하에서 memory update 자체를 **belief update 문제**로 재정의한다.

## 한계

- abstract와 HTML 구조 기반. benchmark별 세부 score, 메모리 비용, retrieval latency는 본문 정독 필요.
- LoCoMo / ALFWorld 중심 결과라 enterprise coding agent memory까지 일반화는 추가 검증 필요.
- Noisy-OR 업데이트가 복잡한 상관관계까지 표현하는지는 미지수.

## 출처

- arXiv: <https://arxiv.org/abs/2605.05583>
- PDF: <https://arxiv.org/pdf/2605.05583>
