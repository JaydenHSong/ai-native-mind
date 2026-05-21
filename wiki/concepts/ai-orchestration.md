---
title: "AI 오케스트레이션"
category: concepts
tags: [ai-orchestration, multi-agent, patterns, anthropic, rl-traces, credit-assignment, delegation-benchmark, decisionbench]
created: 2026-04-09
updated: 2026-05-20
sources:
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/articles/2026-05-01-anthropic-advisor-strategy.md"
  - "raw/articles/2026-05-01-langchain-langgraph-1-0.md"
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
  - "raw/articles/2026-05-02-google-scaling-agent-systems.md"
  - "raw/articles/2026-05-03-microsoft-agent-framework-v1.md"
  - "raw/articles/2026-05-14-rl-multiagent-orchestration-traces.md"
  - "raw/articles/2026-05-20-decisionbench-emergent-delegation.md"
related:
  - "[[concepts/ai-native-programmer]]"
  - "[[concepts/context-engineering]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[tools/claude-code]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/a2a-protocol]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
status: active
confidence: medium
---

# AI 오케스트레이션

## 쉽게 읽기

**비유**: 학교 축제에서 **진행 요원·부스 담당·방송**을 나누고, 순서를 맞추는 것이 오케스트레이션이다. AI도 여러 단계·여러 “역할”을 **순서와 조건**에 맞게 이어 준다.

| 용어 | 풀이 |
|------|------|
| **에이전트** | 목표를 위해 스스로 단계를 밟는 AI 실행 단위 |
| **멀티 에이전트** | 역할 다른 AI들을 **나눠 쓰기** |
| **패턴 이름**(Chaining 등) | 자주 쓰는 **진행 순서 템플릿**에 붙은 별명 |

## 한줄 정의

여러 AI 에이전트를 역할별로 배치하고 조율하여 복잡한 작업을 수행하는 기술.

## 핵심 내용

### Anthropic의 핵심 원칙

Anthropic이 수십 개 팀과 협업하며 발견한 것: 가장 성공적인 구현은 **복잡한 프레임워크가 아니라 단순하고 조합 가능한 패턴**을 사용한다.

> "간단한 프롬프트로 시작 → 평가로 최적화 → 간단한 솔루션이 안될 때만 멀티에이전트"

### 6대 오케스트레이션 패턴

#### 1. Prompt Chaining (순차 체이닝)
작업을 고정된 단계로 분해하여 순서대로 실행.
- A의 출력 → B의 입력 → C의 입력
- 중간에 검증 게이트 추가 가능
- **적합**: 명확한 단계가 있는 작업 (번역 → 검증 → 포맷팅)

#### 2. Routing (라우팅)
입력을 분류하여 전문화된 에이전트로 전달.
- 고객 문의 유형별 다른 에이전트 배정
- 각 에이전트가 도메인 특화 프롬프트 보유
- **적합**: 입력 카테고리가 명확히 구분되는 작업

#### 3. Parallelization (병렬화)
독립적인 하위 작업을 동시 실행.
- **Sectioning**: 작업을 나눠서 각 에이전트에 배분
- **Voting**: 같은 작업을 여러 에이전트가 수행, 결과 종합
- **적합**: 속도가 중요하거나 신뢰성 향상이 필요한 작업

#### 4. Orchestrator-Workers (오케스트레이터-워커)
중앙 오케스트레이터가 작업을 **동적으로** 분해하고 위임.
- 복잡도가 예측 불가능한 작업에 적합
- Anthropic의 코딩 에이전트가 이 패턴 사용
- **적합**: GitHub 이슈 처리, 코드 리팩토링

#### 5. Evaluator-Optimizer (평가자-최적화자)
하나의 에이전트가 생성, 다른 에이전트가 평가. 반복적 품질 개선.
- **우리가 쓰는 예**: PDCA의 Gap Analysis → Iterate
- **적합**: 문학 번역, 코드 리뷰, 콘텐츠 품질 관리

#### 6. Autonomous Agent (자율 에이전트)
에이전트가 스스로 도구 사용과 의사결정.
- 환경에서 피드백을 받아 다음 행동 결정
- 가장 강력하지만 비용과 에러 누적 위험
- **적합**: 복잡한 open-ended 문제

### 7. Advisor Strategy (조언자 전략) — 2026-04 추가

[Anthropic 2026-04-09 발표](https://claude.com/blog/the-advisor-strategy)의 보조 패턴. **메인 에이전트는 빠른/저렴한 모델로 돌리고, 어렵거나 불확실한 결정에서만 더 똑똑한 advisor 모델에게 짧게 컨설팅**받는다.

- 비유: 메인 = **현장 직원**, advisor = **상사·전문가**. 매번 부르면 비싸지만, **막힐 때만** 부르면 양쪽 시간 다 절약.
- Orchestrator-Workers와의 차이: orchestrator는 항상 위에 있지만, **advisor는 on-demand로만** 호출
- 적합: long-running session에서 가끔 critical decision (아키텍처 선택, root cause 가설 검증)
- 비용 전략은 [[patterns/ai-cost-management]] 참조

### 실무 고려사항

| 고려사항 | 내용 |
|----------|------|
| **토큰 비용** | 멀티에이전트는 싱글 대비 10-15x 토큰 사용 |
| **시작점** | 대부분 단일 에이전트 + 좋은 프롬프트가 더 효율적 |
| **프레임워크** | LangGraph(안정적), CrewAI(빠른 프로토타입), OpenAI Agents SDK |
| **시장** | Gartner: 멀티에이전트 문의 1,445% 증가 (2024→2025) |

### 런타임·구현에서 자주 빠지는 조각

패턴 이름만 알고 있으면, **서버나 CI에 올렸을 때** 바로 막히는 부분이 생긴다. 아래는 오케스트레이션을 “코드·인프라”로 내릴 때 같이 설계할 항목이다.

| 조각 | 질문 | 비고 |
|------|------|------|
| **상태** | 단계 간에 무엇을 저장하는가? (요약, JSON, DB 행) | 재시작·재시도 시 복구에 필요 |
| **멱등성** | 같은 요청이 두 번 오면? | 웹훅·큐 재전달 시 필수 |
| **HITL** | 어디서 사람이 승인/거절하는가? | 비용·위험 큰 단계에 게이트 |
| **타임아웃·취소** | LLM·도구 호출 상한은? | 무한 대기 방지, UX(취소 버튼) |
| **부분 실패** | 한 워커만 실패하면 롤백인가, 재시도인가, 스킵인가? | Orchestrator-Workers와 짝 |
| **관측** | `run_id`, 단계별 로그, 토큰·비용 메트릭 | 디버깅과 비용 통제 |

**프레임워크 vs 직접 구현**: LangGraph 등은 그래프·상태·체크포인트를 표준화해 준다. 반대로 요청-응답 한 번짜리 라우팅은 **라우팅 패턴 + 얇은 오케스트레이터 함수**로 충분한 경우가 많다. "멀티에이전트"가 목표가 아니라 **신뢰 가능한 상태 기계**가 목표인지 먼저 판단하는 편이 낫다.

**2026-04 stability·플랫폼 진화**: [LangGraph 1.0](https://blog.langchain.com/langchain-langgraph-1dot0/) (2025-10)이 "2.0 전까지 breaking change 없음" 약속과 함께 production 안정성을 잠갔다. 그 위에 [[tools/managed-agents]]·[[tools/deep-agents-deploy]] 같은 매니지드 플랫폼이 4월에 등장. 에이전트 간 통신은 [[concepts/a2a-protocol|A2A 프로토콜]]이 Linux Foundation 표준으로 자리 잡음. **즉, 오케스트레이션 패턴 → 런타임 → 플랫폼 → 통신 표준의 4층이 모두 안정 단계로 진입**.

### Alignment principle — 태스크 속성에 구조를 맞춰라 (Google Research, 2026-01)

[Towards a Science of Scaling Agent Systems](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/) ([arXiv 2512.08296](https://arxiv.org/abs/2512.08296))은 **5 아키텍처 × 3 모델 패밀리 × 4 벤치마크 = 180 컨피그**의 통제 실험으로 "에이전트가 많을수록 좋다"라는 통념을 정량으로 반박했다. 결론은 **alignment principle**: 코디네이션 구조는 태스크의 속성(병렬 가능성·도구 밀도·순차 의존성)에 정렬되어야 한다.

| 신호 | 수치 |
|------|------|
| Centralized vs Single-Agent, parallelizable 태스크(Finance-Agent) | **+80.9%** |
| 모든 멀티 에이전트 변형, 순차 태스크(PlanCraft) | **-39 ~ -70%** |
| Independent (무통신 병렬) 오류 증폭 | **17.2x** |
| Centralized (오케스트레이터) 오류 증폭 | **4.4x** |
| 도구 ≥ 16개일 때 코디네이션 세금 | 비례 이상 증가 (tool-coordination trade-off) |

위의 6대 패턴에 매핑하면:

- **Parallelization**: Finance-Agent류 분해 가능 태스크에서 +80% 가능 — 단, **결과 통합(Sectioning/Voting)** 단계가 없으면 Independent로 떨어져 17.2x 오류 증폭의 늪에 빠진다.
- **Orchestrator-Workers**: 오류 증폭 4.4x로 **validation bottleneck = 안전 컴포넌트**로 작동한다. "성능 booster"라기보다 신뢰성 컴포넌트로 봐야 한다.
- **Prompt Chaining**: PlanCraft류 순차 태스크는 멀티 에이전트로 분해할수록 **-39 ~ -70%** — 통신 오버헤드가 인지 예산을 깎는다. 단일 에이전트의 긴 chain이 더 낫다.

Anthropic의 "단순한 프롬프트로 시작 → 평가 → 안 될 때만 멀티" 원칙이 통제 실험 데이터로 보강된 셈. 운영 권고: 새 태스크에서 멀티 에이전트로 가기 전에 **(1) 정말 분해 가능한가?** **(2) 도구 수가 16개를 넘는가?** **(3) 오케스트레이터/검증자가 명시적으로 있는가?** 세 질문을 먼저 답하라.

프로덕션에서 에이전트가 **HTTP 뒤**에 있을 때의 배치·한계는 [[patterns/agent-server-harness|에이전트 서버 하네스]]에서 정리한다.

### 2026-05-03 보강 — Microsoft Agent Framework 1.0 (5 패턴) 매핑

[Microsoft Agent Framework 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) (2026-04-03 GA, .NET·Python, MIT)이 Semantic Kernel(엔터프라이즈)과 AutoGen(연구)을 하나의 SDK로 통합. **MCP·A2A 1차 지원**으로 6대 패턴 외부 표준과 직접 연결.

| MS 1.0 패턴 | 6대 패턴 매핑 | 비고 |
|-------------|---------------|------|
| **sequential** | Prompt Chaining | `SequentialBuilder(participants=[…])` |
| **concurrent** | Parallelization | streaming + 결과 통합 |
| **handoff** | Routing | 명시적 인계 메시지 |
| **group chat** | Orchestrator-Workers 변종 | 다중 에이전트 토론 |
| **Magentic-One** | Autonomous (자율 매니저) | Planner가 plan을 동적으로 갱신 |

전 패턴이 **streaming·HITL 승인·pause/resume·체크포인트** 기본 지원. **DevUI**(브라우저 로컬 디버거)는 [[concepts/gen-ai-observability|GenAI 관측]]을 IDE 차원으로 끌어옴. **Claude Code SDK / GitHub Copilot SDK as harness** 옵션은 [[concepts/harness-engineering]]의 "model + harness" 분리가 벤더 SDK 표준으로 굳어지는 신호다 — 코딩 에이전트는 SDK가, 워크플로 합류는 Agent Framework가 담당.

운영 함의: AutoGen·Semantic Kernel 사용자는 **마이그레이션 어시스턴트** 제공. 새 프로젝트라면 **MCP+A2A를 1일차에 채택**할 수 있는 환경이 되었다.

## 2026-05-14 보강 — Orchestration as RL Target (Zhang, 2026-05-04)

출처: Chenchen Zhang, "Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces" (arXiv 2605.02801, 2026-05-04). 코드/artifact: <https://github.com/xxzcc/awesome-llm-mas-rl>. [원본 노트](raw/articles/2026-05-14-rl-multiagent-orchestration-traces.md).

본 페이지의 6대 패턴(Chaining / Routing / Parallelization / Orchestrator-Workers / Evaluator-Optimizer / Autonomous)이 **수작업 디자인 패턴**이라면, Zhang은 같은 의사결정 표면을 **학습 가능한 정책**으로 본다. 즉 "어떤 패턴 고를까" → "어떤 패턴이 *학습*되는가"가 한 layer 다음.

### Orchestration trace = temporal interaction graph

한 트리거에서 다음 이벤트들이 노드로 기록된다: `sub-agent spawn / delegate / communicate / tool use / return / aggregate / stop`. 이 graph 자체가 학습 대상.

### 5 sub-decision (학습 단위)

| Sub-decision | 6대 패턴 매핑 | 2026-05 시점 RL 학습 |
|---|---|---|
| **When to spawn** | Orchestrator-Workers의 worker 동적 생성 | 사례 있음 |
| **Whom to delegate to** | Routing 결정 | 사례 있음 |
| **How to communicate** | message protocol·내용 | 사례 있음 |
| **How to aggregate** | Parallelization 결과 합치기, Evaluator-Optimizer 채점 | 사례 있음 |
| **When to stop** | Autonomous loop 종료, HITL gate | **No explicit RL training method found (May 4, 2026 snapshot)** |

→ **stop decision의 학습 공백**이 본 위키의 1인 개발자 관점에선 *오히려 안전선* — Anthropic이 "사람을 loop에 두라"고 한 영역이 학술 RL에도 아직 미답.

### Reward design — 8 family (orchestration reward 강조)

저자가 multi-agent 고유로 강조하는 세 metric:

1. **Parallelism speedup** — sub-agent를 띄워 *진짜* 빨라졌는지
2. **Split correctness** — 작업 쪼개기가 옳았는지
3. **Aggregation quality** — 합칠 때 정보 손실 없었는지

나머지 5: outcome / process / tool-use / safety / cost-or-style. ← **orchestration reward 3종이 본 페이지의 6대 패턴 평가 메트릭으로 직접 차용 가능**.

### Credit assignment 8 단위와 *message-level counterfactual* 공백

token → action → step → turn → episode → **message** → sub-agent → team

저자 발견: **"한 메시지를 빼면 결과가 어떻게 달라졌을까?"** 식의 explicit counterfactual message-level credit이 84-entry curated pool에서 특히 sparse. 즉 multi-agent에서 *어느 한 메시지가 결정적이었나*를 학습 신호로 쓰는 작업이 아직 거의 없다.

### 산업 vs 학술 scale gap

저자는 학술 RL 작업을 **Kimi Agent Swarm · OpenAI Codex · Anthropic Claude Code**의 공개 사례에 연결한다. 단 "scale gap = 공개 deployment envelope vs 공개 academic evaluation regime의 비교 불가능성"이며, **산업 내부 training trace의 *독립 검증*은 아니다**. 인용 시 그대로 옮길 framing.

### Jayden 위키 함의

1. **6대 패턴 평가 메트릭 후보**: 본 페이지 6 패턴 각각에 *parallelism speedup / split correctness / aggregation quality* 세 metric을 붙여 [[concepts/llm-evaluation|eval]] 페이지의 a layer 위 dashboard 가능.
2. **Replayable orchestration trace JSON schema** (artifact 제공): 1인 개발자가 *자기 워크플로의 trace*를 그 schema로 찍어 두면 나중에 RL이 아니더라도 *post-hoc analytics*에 그대로 활용. [[concepts/gen-ai-observability|OTel GenAI agent SC]]와 cross-link 후보.
3. **Stop-decision은 학습보다 *규칙*으로**: 학술이 아직 못 푼 stopping이라면 *우리는 명시적 규칙·HITL*로 둔다는 결정의 *증거* — [[patterns/agent-server-harness]]의 cancel/timeout policy를 더 보수적으로 유지.

> 어제(2026-05-13) verification-gated 게이트가 *출력 직전*을 잠갔다면, 오늘 Zhang은 *오케스트레이션 결정 표면 자체*에 보상 신호를 박는 한 layer 더 위. Zhong/Zhu의 11 책임 중 **Task state(#5)·Observability(#6)·Failure attribution(#7)** 가 trace artifact로 한꺼번에 풀린다.

## 2026-05-20 보강 — DecisionBench: delegation은 quality만으로 보이지 않는다 (arXiv 2605.19099)

[DecisionBench](https://arxiv.org/abs/2605.19099) (2026-05-20)는 delegation을 "잘하면 좋다" 수준이 아니라 **측정 가능한 오케스트레이션 substrate** 로 고정하려는 benchmark다. 최근 이 페이지가 쌓아 온 질문은 대략 이랬다.

- Anthropic 6대 패턴: **어떻게 나눌까**
- Google alignment principle: **언제 멀티에이전트가 맞을까**
- Zhang RL traces: **어떤 orchestration decision에 학습 신호를 줄까**

DecisionBench가 추가하는 질문은 이것이다.

> **"위임을 잘했는지"를 최종 품질과 분리해 따로 잴 수 있는가?**

### 무엇을 고정하나

- **Task suite**: GAIA · tau-bench · BFCL multi-turn
- **Peer-model pool**: **11 models / 7 vendor families**
- **Delegation interface**: `call_model` + optional `read_profile`
- **Metric suite**: quality / cost / latency / delegation rate / routing fidelity-at-k / vendor self-preference / **counterfactual-delegation ceiling**

즉 오케스트레이션의 핵심 변수인 **누구에게, 어떤 정보 채널로, 어떤 기대를 가지고 넘겼는가**를 benchmark surface 위로 끌어낸다.

### 핵심 발견 3개

full pool **23,375 task instances** reference sweep에서 가장 중요한 결과는 quality-only 평가가 delegation 차이를 거의 못 본다는 점이다.

1. awareness condition을 바꿔도 **mean end-task quality는 통계적으로 거의 차이 없음**
   - **|beta| <= 0.010, p >= 0.21**
2. 반면 **routing fidelity-at-1은 7.5% ~ 29.5%**로 크게 벌어진다
3. **perfect delegation ceiling은 실제보다 15~31 percentage points 높다**

→ 현재 frontier orchestration은 "겉보기 결과는 비슷하지만, 내부 delegation은 아직 많이 서툴다"는 뜻이다.

### 우리 위키 관점에서 새로 선명해진 점

#### 1) routing은 pattern이 아니라 별도 측정 대상이다

이제 [[concepts/ai-orchestration]] 의 routing / orchestrator-worker / evaluator-optimizer를 읽을 때 단순 성공률만 보지 않고 **routing fidelity** 를 별도 메트릭으로 붙일 수 있다.

#### 2) profile 내용보다 전달 채널이 중요할 수 있다

논문은 peer description의 풍부함보다 **on-demand tool vs preloaded description** 같은 **delivery channel** 차이가 더 클 수 있다고 말한다. 이는 [[concepts/context-engineering]] 과도 연결된다. 좋은 orchestration은 "정보를 많이 준다"가 아니라 **필요할 때 꺼내 쓰게 설계한다**에 가깝다.

#### 3) counterfactual ceiling이 있으면 라우터 한계를 분리할 수 있다

모델 자체 한계와 위임 정책 한계를 섞지 않으려면, 가능한 경우 **"완벽하게 위임했으면 어느 정도였나"** 같은 상한선을 같이 기록하는 편이 낫다.

### 1인 개발자 ROI 3개

1. subagent 실험을 할 때 최종 성공률만 보지 말고 **누구에게 넘겼는지 / 왜 넘겼는지 / 맞게 넘겼는지**를 로그로 남긴다.
2. agent profile은 README처럼 미리 다 넣기보다 **tool처럼 필요 시 조회**하게 만드는 편이 더 나을 수 있다.
3. 멀티에이전트 성능이 기대보다 낮을 때, 모델을 바꾸기 전에 **delegation channel 설계**를 먼저 의심한다.

## 왜 중요한가

AI 네이티브 프로그래머의 **핵심 역량**이다. 혼자서 팀 규모의 결과를 내려면, 여러 AI를 잘 조율하는 능력이 필수. 하지만 Anthropic의 조언대로, **복잡하게 시작하지 말고 단순한 패턴부터** 마스터하는 게 중요하다.

## 관련 개념

- [[concepts/ai-native-programmer]] — 오케스트레이션은 핵심 역량 중 하나
- [[concepts/context-engineering]] — 오케스트레이션의 기반 스킬
- [[tools/claude-code]] — 오케스트레이터-워커 패턴의 실제 구현체
- [[patterns/agent-server-harness]] — HTTP·큐·스트림 위 오케스트레이션
- [[patterns/agent-planning-to-implementation]] — 문서 단계의 체이닝·HITL

## Chapter Clear 가이드

- **소속 챕터**: Chapter 3 (파티 운영)
- **퀘스트**: 현재 진행 중인 작업 하나를 6대 오케스트레이션 패턴 중 하나로 분류한다.
- **클리어 조건**: 왜 해당 패턴이 맞는지 비용/속도/신뢰성 관점에서 설명할 수 있다.
- **보상(산출물)**: 내 작업용 오케스트레이션 선택표 1개
- **다음 퀘스트**: [[patterns/orchestration-patterns-practice]] -> [[patterns/agent-planning-to-implementation]]

## 참고 소스

- [AI Orchestration 리서치](raw/notes/2026-04-09-ai-orchestration-research.md)
- [Building Effective Agents (Anthropic)](https://www.anthropic.com/research/building-effective-agents)
- [Context Engineering (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
