---
title: "TerminalWorld: Benchmarking Agents on Real-World Terminal Tasks (arXiv 2605.22535)"
source_url: "https://arxiv.org/abs/2605.22535"
source_type: "arxiv-paper"
authors: ["Zhaoyang Chu", "Jiarui Hu", "Xingyu Jiang", "Pengyu Zou", "Han Li", "Chao Peng", "Peter O'Hearn", "Earl T. Barr", "Mark Harman", "Federica Sarro", "He Ye"]
published: 2026-05-21
fetched: 2026-05-23
tags: [evaluation, benchmark, terminal, coding-agents, real-world, long-horizon, developer-tools, arxiv]
status: ingested
---

# TerminalWorld: Benchmarking Agents on Real-World Terminal Tasks

> arXiv:2605.22535. 실제 terminal recording을 역공학해 **authentic terminal workflow benchmark** 를 자동 생성하는 data engine과 benchmark 제안.

## 메타

- **Title**: TerminalWorld: Benchmarking Agents on Real-World Terminal Tasks
- **Authors**: Zhaoyang Chu · Jiarui Hu · Xingyu Jiang · Pengyu Zou · Han Li · Chao Peng · Peter O'Hearn · Earl T. Barr · Mark Harman · Federica Sarro · He Ye
- **Link**: <https://arxiv.org/abs/2605.22535>
- **Published**: 2026-05-21
- **Subjects**: Artificial Intelligence (cs.AI)

## 한 줄 요약

**"terminal agent 평가는 사람이 문제를 손으로 꾸민 작은 벤치보다, 실제 녹화에서 다시 뽑아낸 작업 흐름 쪽이 더 진짜에 가깝다."**

## 핵심 주장

### 1) benchmark를 사람이 쓰지 말고 실제 작업 기록에서 재구성하자

논문은 terminal task benchmark가 대체로 expert-curated라는 점을 문제 삼는다. 그런 benchmark는 유용하지만,

- 실제 현업에서 어떤 command sequence가 많이 쓰이는지
- 얼마나 자주 길게 분기하는지
- 어떤 실수가 현실적인지

를 충분히 반영하지 못할 수 있다.

TerminalWorld의 핵심 전환은 **in-the-wild terminal recordings** 를 처리해 benchmark task를 자동 역구성하는 것이다.

### 2) 자동 생성인데도 규모와 현실성이 같이 간다

처리 규모는 꽤 크다.

- **80,870 terminal recordings** 처리
- **1,530 validated tasks** 생성
- **18 real-world categories**
- **1,280 unique commands**
- 50 step을 넘는 workflow까지 포함

이 중 **200개 Verified subset** 을 수동 검토해 대표 평가 세트로 만든다.

### 3) frontier agent도 실제 terminal workflow에서는 아직 약하다

TerminalWorld-Verified에서 보고된 핵심 결과는 다음과 같다.

- **8 frontier models / 6 agents** 평가
- 최고 pass rate는 **62.5%**

즉 terminal agent는 여전히 **실제 작업 흐름** 에서 안정적으로 강하지 않다.

### 4) 기존 benchmark와도 다른 능력을 잰다

논문은 TerminalWorld와 기존 expert-curated benchmark(예: Terminal-Bench) 점수 상관이 약하다고 보고한다.

- **Pearson r = 0.20**

이 말은 기존 벤치가 쓸모없다는 뜻보다, **무엇을 재고 있는지가 다르다** 는 뜻에 가깝다.

## 정량 / 기여점

- recordings **80,870**
- validated tasks **1,530**
- verified tasks **200**
- categories **18**
- unique commands **1,280**
- 최고 성능 **62.5%**
- Terminal-Bench와 상관 **r = 0.20**

## 실무적 시사점

1. **terminal eval은 synthetic task와 real workflow를 분리해서 봐야 한다**
   - 둘 다 필요하지만 같은 성능으로 읽으면 오해가 생긴다.
2. **agent 선택보다 benchmark provenance가 중요하다**
   - 사람이 만든 과제에서 강한 agent가 실제 녹화 기반 workflow에서도 강하다는 보장이 약하다.
3. **developer tool agent eval의 현실성 기준이 높아진다**
   - 앞으로 CLI agent는 short task pass@1 뿐 아니라 실제 command ecology를 반영한 benchmark로도 봐야 한다.

## 기존 지식과의 연결

- [[concepts/llm-evaluation]]
  - WildClawBench가 production-like runtime realism을 열었다면, TerminalWorld는 그 중 terminal domain에서 **benchmark generation provenance** 를 더 아래까지 내린다.
- [[patterns/ai-code-review]]
  - coding agent를 볼 때 PR 결과뿐 아니라 **어떤 terminal workflow를 재현할 수 있는지** 도 확인해야 한다는 근거가 된다.
- [[concepts/harness-engineering]]
  - 실전 하네스가 잘 설계되었는지 보려면 synthetic command toy-task가 아니라 **현실적인 shell ecology** 가 필요하다는 점을 강화한다.

## 한계 / 메모

- abstract 기준 정리라 18 category 세부 구성과 6 agent 목록, 오류 taxonomy는 본문 확인이 더 필요하다.
- 녹화 기반 task reconstruction이 privacy / environment normalization 문제를 어떻게 처리하는지는 논문 본문을 봐야 더 정확히 판단할 수 있다.
