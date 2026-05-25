---
title: "Agent Memory Taxonomy — Task vs Belief vs Lifecycle vs Safety"
category: comparisons
tags: [memory, taxonomy, belief-memory, safety-memory, lifecycle-memory, agent, virtual-memory, usable-scale-boundary]
created: 2026-05-17
updated: 2026-05-22
sources:
  - "raw/articles/2026-05-03-zenbrain-7-layer-memory.md"
  - "raw/articles/2026-05-15-groupmembench-multi-party-memory.md"
  - "raw/articles/2026-05-17-belief-memory-partial-observability.md"
  - "raw/articles/2026-05-17-human-inspired-memory-architecture.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md"
  - "raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md"
related:
  - "[[concepts/ai-memory-systems]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
  - "[[journal/2026-05-17]]"
status: active
confidence: high
---

# Agent Memory Taxonomy — Task vs Belief vs Lifecycle vs Safety

## 쉽게 읽기

"memory"를 한 단어로 부르면 실제 설계 질문이 섞인다. 지금 위키에 누적된 최근 논문들은 최소 네 층을 구분하라고 말한다.

1. **task / productivity memory** — 지금 일을 계속하게 돕는 기억
2. **belief memory** — 무엇을 얼마나 믿는지 보존하는 기억
3. **lifecycle memory** — 언제 압축·망각·재강화할지 운영하는 기억
4. **safety memory** — 무엇을 안 잊어야 위험을 막는지 보존하는 기억

## 핵심 차이

**같은 "메모리"라도 목적 함수가 다르다** — productivity memory는 일을 빨리 끝내려 하고, belief memory는 불확실성을 보존하려 하고, lifecycle memory는 저장소를 건강하게 유지하려 하고, safety memory는 위험 행동을 막으려 한다.

## 비교표

| 구분 | task / productivity memory | belief memory | lifecycle memory | safety memory |
|---|---|---|---|---|
| 핵심 질문 | 지금 일을 이어가려면 무엇이 필요하나? | 지금 무엇을 얼마나 믿나? | 언제 압축·망각·재강화해야 하나? | 지금 실행하면 위험한가? |
| 대표 소스 | ZenBrain, GroupMemBench | BeliefMem | Human-Inspired Memory | MAGE |
| 저장 단위 | 요약, 사실, 상태, 회상 후보 | candidate conclusion + probability | consolidated trace, deduped memory, entity link | safety-critical signal, prohibited pattern, risk cue |
| 실패 모드 | context rot, retrieval noise, stale summary | self-reinforcing error, premature commitment | store bloat, interference, stale memory 고착 | long-horizon threat 누적, delayed attack, unsafe action |
| 좋은 설계 | working/episodic/semantic/procedural 분리 | uncertainty를 버리지 않기 | forgetting·reconsolidation을 정책으로 두기 | 일반 메모리와 분리된 shadow memory 두기 |
| 대표 benchmark / 근거 | GroupMemBench 46.0%, BM25가 다수 시스템 매치 또는 능가 | LoCoMo / ALFWorld best average performance | VSCode issue 97.2% retention precision + 58% store reduction | AgentDojo Banking/Slack, early-stage detection 다수 |
| 위키에서의 대응 페이지 | [[concepts/ai-memory-systems]] | [[concepts/ai-memory-systems]] | [[concepts/ai-memory-systems]] | [[concepts/agent-supply-chain-security]] |

## 1. Task / Productivity Memory

이 범주는 가장 넓다. 전통적인 short-term / long-term, episodic / semantic / procedural 구분이 여기에 들어간다.

- [[concepts/ai-memory-systems]]의 기본 구조
- ZenBrain의 7-layer memory
- GroupMemBench가 드러낸 multi-party memory 한계

핵심은 **"얼마나 많이 저장하나"보다 "지금 일을 이어가게 해 주는가"** 이다. GroupMemBench에서 BM25가 강했던 이유는, 자동 메모리 시스템이 productivity를 돕겠다고 압축하는 과정에서 오히려 group 구조 신호를 지워 버렸기 때문이다.

## 2. Belief Memory

BeliefMem이 분명하게 만든 층이다.

- deterministic memory: observation → conclusion 1개
- belief memory: observation → candidate conclusion 여러 개 + probability

핵심은 **uncertainty를 폐기하지 않는 것**이다. partial observability 환경에서는 "사실"보다 "현재 가설 집합"이 더 정직한 표현일 수 있다.

언제 필요한가:

- 로그가 불완전할 때
- 멀티 에이전트가 서로 상충하는 관측을 낼 때
- root cause가 아직 굳지 않은 디버깅 상황

## 3. Lifecycle Memory

Human-Inspired Memory가 추가한 층이다. memory를 retrieval DB가 아니라 **운영 파이프라인**으로 본다.

- sleep-phase consolidation
- interference-based forgetting
- engram maturation
- reconsolidation upon retrieval
- entity knowledge graph
- hybrid multi-cue retrieval

핵심은 **좋은 기억은 잘 저장된 기억이 아니라 잘 정리되는 기억**이라는 점이다. 저장량을 줄여도 정확도를 유지할 수 있다면, 메모리 설계의 병목은 모델이 아니라 maintenance policy일 수 있다.

## 4. Safety Memory

MAGE가 추가한 층이다. 일반 작업 메모리와 별도로 **위험 신호만 기억하는 shadow memory**를 둔다.

- 외부 tool / skill / agent output이 누적될 때
- 단발 필터가 아니라 trajectory-level guardrail이 필요할 때
- action 직전 risk assess가 필요한 장기 실행 agent에서 중요

이 층은 productivity와 목적이 다르다. 생산성 메모리는 "더 잘 하게" 만들고, safety memory는 "하지 말아야 할 것을 멈추게" 만든다.

## 2026-05-22 보강 — 역할 taxonomy 위에 "경계" 질문을 덧댄다

이번 주 후반 source들을 다시 겹쳐 읽으면, memory 중복은 "종류가 너무 많다"가 아니라 **역할을 말하는 표와, 그 역할이 언제 깨지는지 말하는 표가 분리되지 않았기 때문**에 생겼다.

이 페이지의 네 분류는 **역할 taxonomy** 다. 여기에 아래의 **경계 질문**을 덧대면, 최근 페이지들 사이 겹침이 더 잘 정리된다.

| 경계 질문 | 대표 source | 이 taxonomy에서 읽는 법 |
|---|---|---|
| **얼마나 커져도 계속 쓸 만한가?** | Scale-Conditioned Evaluation | task/productivity memory만의 문제가 아니라, 어떤 memory든 **irrelevant session 증가 아래 usable evidence를 유지하는가**를 따로 재야 한다. |
| **기억을 실제 런타임에서 잃지 않게 강제하는가?** | ClawVM | belief / lifecycle / safety 구분과 별개로, writeback·flush·reset을 누가 책임지는지라는 **runtime enforcement** 질문이 있다. |
| **위험을 막는 기억이 실제 행동 차단으로 이어지는가?** | MAGE + LITMUS | safety memory는 "있다"로 끝나지 않고, action 직전 re-check와 state-audited eval이 짝이 되어야 한다. |

즉 최근 memory 논의는 두 축으로 압축된다.

1. **역할 축** — task / belief / lifecycle / safety
2. **경계 축** — scale boundary / runtime enforcement / action-time safety check

이렇게 보면 페이지 배치도 선명해진다.

- [[concepts/ai-memory-systems]] = memory의 기본 구조 + belief/lifecycle/productivity
- [[concepts/agent-supply-chain-security]] = safety memory + 실제 공격 표면
- [[concepts/llm-evaluation]] = memory를 어디서 어떻게 재는가
- 이 페이지 = 그 셋을 잇는 **상위 naming layer**

## 무엇을 통합했고 무엇을 남겼나

이번 taxonomy는 기존 페이지를 지우지 않고 **역할 기준으로 재배치**한다.

- ZenBrain / GroupMemBench / BeliefMem / Human-Inspired Memory는 계속 [[concepts/ai-memory-systems]] 본문에 남긴다.
- MAGE는 계속 [[concepts/agent-supply-chain-security]] 본문에 남긴다.
- 이 페이지는 그 사이를 잇는 **상위 비교 레이어**다.

즉 "메모리 관련 내용이 여러 페이지에 흩어졌다"는 문제를 삭제가 아니라 **명명과 연결**로 압축한다.

## 1인 개발자용 설계 체크리스트

1. 이 메모리는 **일을 돕기 위한 것**인가, **위험을 막기 위한 것**인가?
2. 이 메모리는 **확률/대안 가설**을 표현하는가?
3. 이 메모리는 **언제 잊을지** 정책이 있는가?
4. 이 메모리는 일반 회상과 분리된 **pre-action safety check**를 갖는가?

네 질문 중 하나라도 답이 다르면, 같은 "memory"라는 이름을 써도 사실은 **다른 서브시스템**이다.

## 결론

메모리는 이제 단일 기능이 아니다. **저장 위치(layer)** 만 보는 단계에서 끝나지 않고, **불확실성 표현(belief)**, **운영 정책(lifecycle)**, **위험 방어(safety)** 까지 분리해서 설계해야 한다. 최근 일주일의 memory 관련 논문들은 바로 그 분화를 보여 준다.

## 참고 소스

- [ZenBrain 7-layer memory raw](raw/articles/2026-05-03-zenbrain-7-layer-memory.md)
- [GroupMemBench raw](raw/articles/2026-05-15-groupmembench-multi-party-memory.md)
- [BeliefMem raw](raw/articles/2026-05-17-belief-memory-partial-observability.md)
- [Human-Inspired Memory raw](raw/articles/2026-05-17-human-inspired-memory-architecture.md)
- [MAGE raw](raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md)