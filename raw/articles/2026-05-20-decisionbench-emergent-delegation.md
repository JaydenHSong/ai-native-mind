---
title: "DecisionBench: A Benchmark for Emergent Delegation in Long-Horizon Agentic Workflows (arXiv 2605.19099)"
source_url: "https://arxiv.org/abs/2605.19099"
source_type: "arxiv-paper"
authors: ["Gao, Yuxuan", "Wang, Megan", "Yu, Yi Ling", "Ma, Zijian Carl", "Qu, Ao"]
published: 2026-05-20
fetched: 2026-05-20
tags: [orchestration, delegation, benchmark, evaluation, long-horizon, multi-agent, routing, agentic-workflow, arxiv]
status: ingested
---

# DecisionBench: A Benchmark for Emergent Delegation in Long-Horizon Agentic Workflows

> arXiv:2605.19099. delegation을 "좋은 아이디어"가 아니라 **측정 가능한 오케스트레이션 substrate** 로 만들려는 benchmark.

## 메타

- **Title**: DecisionBench: A Benchmark for Emergent Delegation in Long-Horizon Agentic Workflows
- **Authors**: Yuxuan Gao · Megan Wang · Yi Ling Yu · Zijian Carl Ma · Ao Qu
- **Link**: <https://arxiv.org/abs/2605.19099>
- **Focus**: emergent delegation, routing fidelity, awareness channel, counterfactual delegation ceiling

## 한 줄 요약

**"delegation은 quality만 보면 거의 안 보이고, routing fidelity·delivery channel·counterfactual ceiling을 같이 봐야 비로소 오케스트레이션 신호가 드러난다."**

## 핵심 주장

### 1) delegation 평가를 위한 공통 substrate가 필요하다

DecisionBench는 task suite, peer-model pool, delegation interface, skill annotation, metric suite를 함께 고정한다.

- **Task suite**: GAIA, tau-bench, BFCL multi-turn
- **Peer pool**: **11 models / 7 vendor families**
- **Interface**: `call_model` + optional `read_profile`
- **Metrics**: quality, cost, latency, delegation rate, routing fidelity-at-k, vendor self-preference, **counterfactual-delegation ceiling**

즉 "누구에게 위임했는가"를 모델 성능과 분리해 볼 수 있게 한다.

### 2) quality만 보면 오케스트레이션 차이가 가려진다

full pool 기준 **n=23,375 task instances** reference sweep에서 저자들이 강조하는 발견 3개:

1. awareness condition을 바꿔도 **mean end-task quality는 통계적으로 거의 구분되지 않음**
   - **|beta| <= 0.010, p >= 0.21**
2. 하지만 **routing fidelity-at-1은 7.5% ~ 29.5%**까지 크게 달라짐
3. **perfect delegation ceiling은 실제보다 15~31 percentage points 높음**

→ 현재 시스템은 겉보기 품질은 비슷해도, 내부적으로는 **delegation을 훨씬 더 잘할 여지**가 남아 있다는 뜻이다.

### 3) profile 내용보다 전달 채널이 더 중요할 수 있다

논문은 peer information의 내용 자체보다, 그것이 **on-demand tool** 로 주어지는지 **preloaded description** 으로 주어지는지가 더 큰 차이를 만든다고 주장한다.

→ 오케스트레이션에서는 "무슨 정보를 주나"뿐 아니라 **언제/어떻게 꺼내 쓰게 하느냐**가 설계 변수다.

## 실무적 시사점

- delegation agent를 평가할 때 최종 성공률만 저장하면 **routing failure** 를 놓친다
- peer card / skill profile / agent registry는 정적 문서보다 **tool-like retrieval channel** 로 다루는 편이 나을 수 있다
- perfect delegation ceiling 같은 **counterfactual upper bound** 를 같이 두면, 모델 한계와 라우터 한계를 분리해 볼 수 있다

## 기존 지식과의 연결

- [[concepts/ai-orchestration]] — routing / handoff / delegation을 benchmark substrate로 재는 새 계기
- [[concepts/llm-evaluation]] — quality-only eval이 orchestration signal을 놓친다는 반례
- [[patterns/subagents-delegation]] — subagent 위임에서 profile delivery와 routing fidelity를 따로 측정해야 한다는 힌트
- [[concepts/harness-engineering]] — agent score는 model alone이 아니라 **model + delegation interface + info channel** 의 함수라는 또 하나의 증거
