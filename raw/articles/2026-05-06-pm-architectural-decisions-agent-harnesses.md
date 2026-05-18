---
title: "Architectural Design Decisions in AI Agent Harnesses (arXiv 2604.18071)"
source_url: "https://arxiv.org/abs/2604.18071"
source_type: "arxiv-paper"
authors: ["Hu Wei"]
published: 2026-04-20
fetched: 2026-05-06
tags: [harness-engineering, ai-agent, taxonomy, empirical-study, architecture, arxiv]
status: ingested
---

# Architectural Design Decisions in AI Agent Harnesses

> arXiv:2604.18071v1 [cs.AI], 2026-04-20. Hu Wei. 70-project empirical survey, 5 design dimensions, 5 architectural patterns.

## 메타

- **Title**: Architectural Design Decisions in AI Agent Harnesses
- **Authors**: Hu Wei
- **arXiv**: <https://arxiv.org/abs/2604.18071>
- **Submitted**: 2026-04-20
- **Method**: protocol-guided source-grounded empirical study, 70 publicly available agent-system projects (67 OSS + 3 public-evidence comparison cases), project list frozen 2026-03-23, 14 architectural modules per project, human-verified coding with 94% initial field-level agreement on 21% audit sample

## Abstract (verbatim)

> "AI agent systems increasingly rely on reusable non-LLM engineering infrastructure that packages tool mediation, context handling, delegation, safety control, and orchestration. Yet the architectural design decisions in this surrounding infrastructure remain understudied. This paper presents a protocol-guided, source-grounded empirical study of 70 publicly available agent-system projects, addressing three questions: which design-decision dimensions recur across projects, which co-occurrences structure those decisions, and which typical architectural patterns emerge."

## 핵심 — 5 Design Dimensions

| Dimension | What it covers |
|-----------|----------------|
| **Subagent Architecture** | Whether/how frameworks support agent creation, hierarchy depth, communication patterns (none → multi-level recursive) |
| **Context Management** | Storage backend, compression strategy, persistence scope, token awareness (session-only → hierarchical with vector DBs) |
| **Tool Systems** | Registration style: hard-coded, decorator, registry, protocol-based MCP, plugin ecosystem |
| **Safety Mechanisms** | Approval workflows, isolation level (none/process/container/WASM), audit capability (none/basic/structured/tamper-evident) |
| **Orchestration** | Control-flow style (imperative/declarative/event-driven), planning approach (ReAct/plan-and-execute/hierarchical) |

## 5 Recurring Architectural Patterns

Lightweight tools · Balanced CLI frameworks · Multi-agent orchestrators · Enterprise systems · Scenario-verticalized projects.

## 핵심 발견 (corpus 통계)

1. **File-persistent hybrid context is modal** (27.1%) — 성숙한 시스템은 file + summarization + hierarchical을 layer로 결합.
2. **Registry-oriented tool systems are dominant** (34.3%); MCP 채택은 14.3%로 빠르게 자라는 중.
3. **Intermediate isolation is common; high-assurance audit is rare** — container isolation은 structured approval과 tightly co-occur (support 0.89, lift 3.4). Audit 부재가 가장 큰 갭.

## 1인 개발자 함의

| 발견 | 우리의 의사결정 |
|------|-----------------|
| 파일 기반 hybrid가 mode | 단순 in-memory에서 시작해, 장기 세션이 생기면 file persistence부터 도입(vector DB는 더 뒤) |
| Registry > MCP (지금은) | 자체 도구는 registry 패턴으로 충분. MCP는 cross-system 공유 필요할 때만 |
| Audit는 비싸고 드물다 | 처음에는 process isolation + command filter로 충분. 민감 데이터 다룰 때만 audit trail 추가 |

## 인용 (≤25 words each)

> "Architectural coherence matters more than maximizing the number of advanced features."

> "Registry-oriented tool systems remain dominant while MCP- and plugin-oriented extensions are emerging."

> "Capability growth does not automatically produce safety maturity."

## 위키와의 연결

- [[concepts/harness-engineering]] — 우리 위키의 Guides/Sensors 분류와 paper의 5 dimension은 직교한다. dimension 쪽이 *어떤 컴포넌트가 있는가*, Fowler 쪽이 *어떤 역할을 하는가*. 둘을 매트릭스로 곱하면 빈 칸이 보인다.
- [[concepts/mcp]] — 14.3% 채택률, "emerging"이라는 확정.
- [[patterns/harness-engineering-casebook]] — 케이스북의 Guides/Sensors 차이를 5 dimension으로 다시 분해 가능.
- [[comparisons/agent-frameworks]] — 5 architectural patterns가 우리 비교 표에서 1인 관점 칼럼을 보강.

## 이 논문이 보강한 위키 (수술적)

- `concepts/harness-engineering.md` — "2026-05-06 PM 보강" 섹션의 (1) descriptive taxonomy.
