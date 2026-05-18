---
title: "AI Agent 프레임워크 비교 (2026)"
category: comparisons
tags: [langgraph, crewai, openai-agents-sdk, multi-agent, framework]
created: 2026-04-09
updated: 2026-05-01
sources:
  - "raw/notes/2026-04-09-agent-frameworks-comparison.md"
  - "raw/articles/2026-05-01-langchain-langgraph-1-0.md"
  - "raw/articles/2026-05-01-langchain-deep-agents-skills.md"
  - "raw/articles/2026-05-01-anthropic-managed-agents-launch.md"
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/managed-vs-deep-agents]]"
status: active
confidence: medium
---

# AI Agent 프레임워크 비교 (2026)

## 쉽게 읽기

여기 이름들(LangGraph, CrewAI 등)은 **“여러 AI 단계를 코드로 엮는 도구상자 브랜드”**라고 보면 된다. 표는 “그래프로 그릴까, 역할 팀으로 갈까, 넘겨주기(handoff)로 갈까” **정리 스타일**이 다른지 비교한다.

| 용어 | 풀이 |
|------|------|
| **프레임워크** | 같은 패턴을 **덜 반복해서** 짜게 해 주는 틀 |
| **핸드오프** | A가 하다가 B에게 **공 넘기기** |
| **프로토타입** | 빠르게 써 보는 **시험판** 버전 |

## 핵심 차이

**3대 접근법**: LangGraph(그래프 기반), CrewAI(역할 기반), OpenAI Agents SDK(핸드오프 기반).

## 비교표

| 기준 | LangGraph | CrewAI | OpenAI Agents SDK |
|------|-----------|--------|-------------------|
| **접근** | 방향성 상태 그래프 | 역할 부여 팀 | 핸드오프 패턴 |
| **강점** | 프로덕션 안정성 | 빠른 프로토타입 | 최소 코드 |
| **모델** | 모델 무관 | 모델 무관 | 100+ LLM 지원 |
| **체크포인팅** | 내장 (시간 여행) | 제한적 | Context 변수 |
| **관측성** | LangSmith | 성장 중 | 내장 트레이싱 |
| **학습 곡선** | 높음 | 낮음 | 매우 낮음 |
| **GitHub Stars** | ~30K | ~44.6K | - |
| **MCP 지원** | 있음 | 1급 지원 | - |

## 언제 무엇을 쓸까

### LangGraph → 프로덕션, 복잡한 상태 관리
- 노드(함수) + 엣지(전환) + 조건 분기
- 체크포인팅으로 중단/재개 가능
- 가장 세밀한 제어

### CrewAI → 빠른 프로토타입, 팀 시뮬레이션
- 각 에이전트에 역할/목표/배경 부여
- LangGraph 대비 **40% 빠르게** 프로토타입
- 직관적 API

### OpenAI Agents SDK → 최소 코드로 시작
- 에이전트 정의 + 핸드오프 규칙 = 100줄 미만
- 가드레일 내장

### Claude Code → 프레임워크 없이 직접
- 1인 개발자는 프레임워크 없이 Claude Code로 충분한 경우 많음
- CLAUDE.md + 서브에이전트 = 가벼운 오케스트레이션

## [[concepts/ai-orchestration|오케스트레이션 패턴]]과의 매핑

| 패턴 | LangGraph | CrewAI | OpenAI SDK |
|------|-----------|--------|------------|
| Prompt Chaining | ✅ | ✅ | ✅ |
| Routing | ✅ | - | ✅ (핸드오프) |
| Parallelization | ✅ | ✅ | - |
| Orchestrator-Workers | ✅ | ✅ | ✅ |
| Evaluator-Optimizer | ✅ | ✅ | - |

## 2026-04 업데이트 — 매니지드 플랫폼 두 종 등장

위 비교표는 **저수준~중간** 프레임워크들 간의 비교다. 2026년 4월 들어 그 위에 **upper-middle 매니지드 플랫폼 두 종**이 추가되었다 — 같은 라이브러리/프레임워크를 **운영까지 포함해서 패키징**한 변형.

| 플랫폼 | 기반 | 모델 | 라이선스 | 가격 |
|--------|------|------|---------|------|
| [[tools/managed-agents]] (Claude Managed Agents, Anthropic) | Anthropic 자체 하네스 | Claude 전용 | 클로즈드 SaaS | 토큰 + $0.08/세션-시간 |
| [[tools/deep-agents-deploy]] (LangChain Deep Agents Deploy) | LangGraph 1.0 + deepagents | 모델 무관 | MIT | 인프라 자체 부담 |

자세한 비교: [[comparisons/managed-vs-deep-agents]].

**LangGraph 1.0 stability**: [LangChain·LangGraph v1.0](https://blog.langchain.com/langchain-langgraph-1dot0/)이 2025-10에 발표되어, "**2.0 전까지 breaking change 없음**" 약속과 함께 production deploy의 안정성 보장이 들어왔다. Uber·LinkedIn·Klarna 등 widespread adoption.

**A2A 프로토콜 채택**: 모든 매니지드 플랫폼과 LangGraph Agent Server가 [[concepts/a2a-protocol|A2A]] endpoint를 표준으로 노출 — 프레임워크가 달라도 에이전트끼리 통신 가능.

## 참고 소스

- [Agent 프레임워크 비교 리서치](raw/notes/2026-04-09-agent-frameworks-comparison.md)
- [LangGraph 1.0 stability](raw/articles/2026-05-01-langchain-langgraph-1-0.md)
- [Deep Agents + Skills](raw/articles/2026-05-01-langchain-deep-agents-skills.md)
- [Managed Agents 출시](raw/articles/2026-05-01-anthropic-managed-agents-launch.md)
- [A2A 프로토콜](raw/articles/2026-05-01-a2a-protocol-spec.md)
- [LangGraph vs CrewAI vs OpenAI SDK (Particula)](https://particula.tech/blog/langgraph-vs-crewai-vs-openai-agents-sdk-2026)
- [AI Agent Frameworks Compared (Langfuse)](https://langfuse.com/blog/2025-03-19-ai-agent-comparison)
