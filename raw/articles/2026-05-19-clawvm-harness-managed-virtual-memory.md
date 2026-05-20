---
title: "ClawVM: Harness-Managed Virtual Memory for Stateful Tool-Using LLM Agents (arXiv 2604.10352)"
source_url: "https://arxiv.org/abs/2604.10352"
source_type: "arxiv-paper"
authors: ["Rafique, Mofasshara", "Bindschaedler, Laurent"]
published: 2026-04-11
fetched: 2026-05-19
tags: [memory, harness-engineering, stateful-agents, virtual-memory, tool-use, lifecycle, token-budget, arxiv]
status: ingested
---

# ClawVM: Harness-Managed Virtual Memory for Stateful Tool-Using LLM Agents

> arXiv:2604.10352, EuroMLSys '26 채택. stateful tool-using agent의 메모리를 "best-effort 요약/압축"이 아니라 **하네스가 관리하는 virtual memory contract** 로 다루자는 제안.

## 메타

- **Title**: ClawVM: Harness-Managed Virtual Memory for Stateful Tool-Using LLM Agents
- **Authors**: Rafique, Mofasshara · Bindschaedler, Laurent
- **arXiv**: <https://arxiv.org/abs/2604.10352> | HTML: <https://arxiv.org/html/2604.10352v1>
- **Focus**: typed pages, token-budget memory residency, validated writeback, lifecycle boundaries

## 한 줄 요약

**"에이전트 메모리 실패의 상당수는 모델이 멍청해서가 아니라, 하네스가 메모리 residency·flush·writeback을 느슨하게 관리해서 생긴다."**

## 핵심 주장

### 1) stateful agent의 메모리는 context window에 방치하면 망가진다

논문이 지적하는 recurring failure:

- compaction 뒤 **lost state**
- reset 시 **flush bypass**
- 잘못된 **destructive writeback**

즉 memory 문제가 단순히 "더 긴 context가 필요하다"가 아니라 **lifecycle boundary를 어떻게 통과시키느냐**의 문제다.

### 2) ClawVM은 memory를 typed pages + policy engine으로 관리한다

핵심 구조:

- **typed pages**
- **minimum-fidelity invariants**
- **multi-resolution representation** under token budget
- lifecycle boundary마다 **validated writeback**

논문은 prompt assembler / tool mediator / compaction / flush / reset / writeback journal을 하네스 안의 명시적 컴포넌트로 둔다.

### 3) enforcement point는 모델이 아니라 harness여야 한다

저자의 논지는 명확하다.

- 하네스가 이미 prompt를 조립하고
- tool을 중재하고
- lifecycle event를 관찰하므로
- memory residency와 durability 계약도 **하네스가 강제**하는 것이 자연스럽다

→ memory를 retrieval plugin이 아니라 **runtime substrate responsibility** 로 격상한다.

### 4) 정량 결과는 강하다

HTML 본문 기준 주요 수치:

- synthetic workloads + **12 real-session traces** + adversarial stress tests
- minimum-fidelity set이 token budget에 들어가는 한 **policy-controllable fault 전부 제거**
- task replay에서 budget 180 기준 **ClawVM 100% success** vs practitioner baseline **76.7%**
- policy-engine overhead **median 18–44μs/turn**, p95 **< 60μs**, abstract 요약은 **median < 50μs/turn**

→ 아주 작은 overhead로 state loss 계열 실패를 구조적으로 줄인다.

## 실무적 시사점

- long-running agent memory는 vector DB 연결만으로 끝나지 않고 **flush / reset / save boundary policy** 가 필요하다
- memory artifact를 한 덩어리 요약이 아니라 **page-like unit** 으로 다루면 compaction·replay·audit가 쉬워진다
- token budget을 넘겼을 때 "무엇을 버릴지"보다 먼저 **무엇을 절대 안 잃어도 되는지(minimum fidelity)** 를 정의해야 한다

## 기존 지식과의 연결

- [[concepts/ai-memory-systems]] — memory를 store/belief/lifecycle 다음에 **virtual-memory contract** 로 보는 새 층
- [[concepts/harness-engineering]] — harness 책임 11개 중 context selection·project memory·task state가 실제로 어떻게 runtime contract가 되는지 보여 줌
- [[comparisons/agent-memory-taxonomy]] — productivity/task memory 쪽 구현 구체성을 크게 높이는 사례
- [[journal/2026-05-17]] 의 Human-Inspired Memory가 "언제 압축·망각하나"를 말했다면, ClawVM은 **압축·flush·writeback을 누가 강제하나**를 말한다

## 남는 질문 / 한계

- synthetic workload 비중이 있어 production generalization은 추가 검증 필요
- typed page schema와 minimum-fidelity set을 실제 제품에서 어떻게 설계할지가 핵심 운영 과제
- safety memory(MAGE)나 probabilistic belief memory(BeliefMem)와 결합한 하이브리드 설계는 후속 연구 영역
