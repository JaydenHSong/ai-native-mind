---
title: "Learning to Hand Off: Provably Convergent Workflow Learning under Interface Constraints (arXiv 2605.19140)"
source_url: "https://arxiv.org/abs/2605.19140"
source_type: "arxiv-paper"
authors: ["Li, Jiayu", "Zhang, Enpei", "Zhou, Dawei", "Chen, Elynn", "Yan, Yujun"]
published: 2026-05-18
fetched: 2026-05-21
tags: [ai-orchestration, handoff, multi-agent, decentralized-learning, interface-constraints, workflow-learning, arxiv]
status: ingested
---

# Learning to Hand Off: Provably Convergent Workflow Learning under Interface Constraints

> arXiv:2605.19140. 멀티 에이전트가 **공유 artifact를 사이에 두고 handoff** 하는 상황을 정식화하고, joint trajectory 없이도 학습 가능한 분산 `Q`-learning 틀을 제안한다.

## 메타

- **Title**: Learning to Hand Off: Provably Convergent Workflow Learning under Interface Constraints
- **Authors**: Jiayu Li · Enpei Zhang · Dawei Zhou · Elynn Chen · Yujun Yan
- **Link**: <https://arxiv.org/abs/2605.19140>
- **Focus**: handoff workflow, decentralized learning, shared artifact, interface-constrained orchestration

## 한 줄 요약

**"멀티 에이전트 파이프라인의 핵심 문제는 각 agent를 더 똑똑하게 만드는 것만이 아니라, 서로를 거의 못 보는 상태에서 handoff를 어떻게 학습시키느냐이다."**

## 핵심 주장

### 1) 현실의 agent workflow는 중앙집중 joint trajectory를 못 보는 경우가 많다

논문이 겨냥하는 운영 환경은 다음과 같다.

- specialized agent들이 하나의 **shared artifact** 를 사이에 두고 handoff한다
- 각 agent는 artifact의 **local function** 과 자기 private state만 본다
- 중앙 학습기가 모든 **joint trajectory** 를 수집하지 못한다

즉 조직 경계, 벤더 경계, 신뢰 경계가 있는 실제 multi-agent workflow를 그대로 문제로 삼는다.

### 2) 이 상황을 IC-SMDP로 정식화한다

저자들은 이 환경을 **interface-constrained semi-Markov decision process (IC-SMDP)** 로 놓는다.

- decision epoch는 매 step이 아니라 **handoff 시점** 에 발생
- coordination 정보는 풍부한 전체 상태가 아니라 **interface를 통해 교환되는 최소 정보** 로 제한

핵심은 workflow를 agent 내부 reasoning이 아니라 **handoff boundary** 중심으로 모델링한다는 점이다.

### 3) cross-agent coordination을 "handoff당 scalar 하나" 수준으로 줄인 IC-Q를 제안한다

제안 알고리즘 **IC-Q** 는 asynchronous decentralized `Q`-learning 구조를 취한다.

- 각 handoff에서 필요한 cross-agent coordination은 **정확히 scalar 하나**
- joint trajectory 관측 없이도 분산 학습 가능
- 근사 오차를 세 축으로 분해해 분석한다
  - **neural function-approximation error**
  - **interface representation gap**
  - **mixing-time residual**

즉 오케스트레이션 실패를 "모델이 약해서" 하나로 뭉개지 않고, **표현 경계 문제** 와 **동적 잔차** 로 분해한다.

### 4) 이론뿐 아니라 routing·CPU programming까지 실험으로 이어진다

논문 abstract 기준 실험은 네 가지다.

- controlled synthetic IC-SMDP
- multi-LLM mathematical reasoning
- **multi-agent routing**
- **multi-agent CPU programming**

저자 주장에 따르면 IC-Q는 **joint trajectory 없이도 centralized oracle과 맞먹는 성능** 을 보이며, 세 error source가 각각 예측한 축으로 스케일한다.

## 기여점

1. **handoff를 학습 가능한 오케스트레이션 단위** 로 formalize
2. joint trajectory 없이도 되는 **decentralized neural Q-learning** 보장 제시
3. 오케스트레이션 품질을 **interface gap / approximation / mixing residual** 로 분해하는 해석 틀 제공
4. routing과 coding workflow까지 연결해, 멀티 agent handoff를 추상 수학이 아니라 **실제 파이프라인 문제** 로 다룸

## 실무적 시사점

### 1) handoff artifact 설계가 곧 학습 가능성이다

shared artifact가 빈약하면 agent 사이 coordination이 학습되지 않는다. 즉 handoff memo, JSON handoff, task state file은 단순 로깅이 아니라 **학습 인터페이스** 다.

### 2) 멀티 agent 성능 저하를 "모델 탓"으로만 보면 안 된다

문제가 model capability보다 **interface representation gap** 에 있을 수 있다. 실무에서는 subagent prompt 튜닝보다 handoff schema 정리가 더 큰 효과를 낼 수 있다.

### 3) 조직·벤더 경계가 있는 workflow에 특히 중요하다

모든 trace를 한곳에 모을 수 없는 현실에서는 centralized planner보다, **경계가 있는 상태에서도 작동하는 handoff 설계** 가 더 현실적이다.

## 기존 지식과의 연결

- [[concepts/ai-orchestration]]: DecisionBench가 delegation fidelity를 **측정** 했다면, 이 논문은 delegation/handoff를 **학습 문제** 로 formalize한다.
- [[concepts/harness-engineering]]: Zhong/Zhu의 runtime substrate 중 **task state / observability / failure attribution** 을 handoff interface 관점에서 다시 읽게 만든다.
- [[patterns/subagents-delegation]]: subagent 분리는 역할 분해만이 아니라, **handoff contract** 의 품질이 성패를 가른다는 근거를 보탠다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- 정량 성능 수치보다 **문제 정식화와 error decomposition** 의 가치가 더 크다.
- 후속 정독 시 handoff interface가 실제로 어떤 scalar coordination으로 구현되는지 확인 필요.
