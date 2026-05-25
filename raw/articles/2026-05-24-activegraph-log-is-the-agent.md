---
title: "The Log is the Agent: Event-Sourced Reactive Graphs for Auditable, Forkable Agentic Systems (arXiv 2605.21997)"
source_url: "https://arxiv.org/abs/2605.21997"
source_type: "arxiv-paper"
authors: ["Yohei Nakajima"]
published: 2026-05-21
fetched: 2026-05-24
tags: [observability, event-sourcing, runtime, replay, forkable-systems, graph, auditability, agent-memory, arxiv]
status: ingested
---

# The Log is the Agent: Event-Sourced Reactive Graphs for Auditable, Forkable Agentic Systems

> arXiv:2605.21997. conversation loop 위에 나중에 logging을 덧대는 대신, **append-only event log를 agent의 source of truth** 로 두는 ActiveGraph runtime을 제안한다.

## 메타

- **Title**: The Log is the Agent: Event-Sourced Reactive Graphs for Auditable, Forkable Agentic Systems
- **Author**: Yohei Nakajima
- **Link**: <https://arxiv.org/abs/2605.21997>
- **Published**: 2026-05-21
- **Subjects**: Artificial Intelligence (cs.AI)

## 한 줄 요약

**"로그는 디버깅 흔적이 아니라, agent를 다시 재생하고 갈라치고 계보를 추적하게 만드는 런타임 본체일 수 있다."**

## 핵심 주장

### 1) 대부분의 agent framework는 model-first이고, log는 나중에 붙는다

논문은 현재 agent framework의 기본 구도를 이렇게 요약한다.

1. conversation loop
2. tools
3. rules
4. observability/logging
5. memory persistence

이 구조에서는 log가 어디까지나 사후 기록이기 때문에,

- replay가 어렵고
- branching cost가 크고
- lineage 추적이 약하며
- "memory"도 retrieval/summarization 중심으로 흐르기 쉽다.

### 2) ActiveGraph는 log-first runtime으로 배치를 뒤집는다

ActiveGraph의 핵심 설계는 다음 한 문장이다.

> **append-only event log가 source of truth이고, working graph는 그 log의 deterministic projection이다.**

그 위에서 behavior는 함수, 클래스, LLM-backed routine, typed edge logic 등 어떤 형태든 될 수 있고, graph 변화에 반응해 다시 event를 emit한다.

즉 coordination은 "누가 누구를 직접 호출하느냐"가 아니라, **공유 그래프와 event flow** 를 통해 일어난다.

### 3) log-first 설계가 주는 세 가지 속성

논문은 retrieval-and-summarization memory와 구분되는 세 속성을 강조한다.

1. **deterministic replay** — 어떤 run도 log에서 다시 재생 가능
2. **cheap forking** — 특정 event 시점에서 run을 갈라칠 수 있음
3. **end-to-end lineage** — high-level goal부터 개별 model call까지 causal path 추적 가능

이 세 가지는 agent를 단순 챗봇이 아니라 **감사 가능한 실행 시스템** 으로 다루게 만든다.

## 기여점

- event-sourced agent runtime **ActiveGraph** 제안
- replay soundness를 위한 **determinism contract** 설명
- auditability / forking / lineage를 한 설계에서 연결
- BabyAGI lineage와 graph-memory 연구를 **runtime substrate** 관점으로 확장

## 실무적 시사점

1. long-running agent에서 log는 observability의 부산물이 아니라, **state reconstruction contract** 여야 한다.
2. branching experimentation을 자주 하는 agent라면 checkpoint만큼 **event replay cost** 도 중요하다.
3. memory를 retrieval store만으로 설명하면 lineage가 약해진다. event log와 semantic memory는 서로 다른 역할이다.

## 기존 지식과의 연결

- [[concepts/gen-ai-observability]] — trace를 모으는 수준에서 더 나아가, **log가 runtime substrate가 되는 경우** 를 보여 준다.
- [[concepts/harness-engineering]] — DeltaBox가 branchable sandbox를 보여 줬다면, ActiveGraph는 **branchable execution history** 를 보여 준다.
- [[concepts/ai-memory-systems]] — retrieval/summarization memory와 달리, event log는 **정확한 replay와 lineage** 를 담당하는 다른 memory layer로 읽을 수 있다.
- [출처](raw/articles/2026-05-21-insights-generator-trace-diagnostics.md) — Insights Generator가 trace 해석을 강조했다면, ActiveGraph는 **trace 자체를 주 실행 기록** 으로 승격한다.

## 한계 / 메모

- 논문 자체가 comparative performance claim을 강하게 하지는 않는다.
- worked diligence example 중심이라 대규모 benchmark 비교는 부족하다.
- 그 대신 "관측을 나중에 붙이지 말고 처음부터 source of truth로 두라"는 architectural claim이 핵심이다.

## 참고

- arXiv abs: <https://arxiv.org/abs/2605.21997>
