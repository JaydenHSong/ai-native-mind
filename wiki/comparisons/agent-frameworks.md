---
title: "AI Agent 프레임워크 비교 (2026)"
category: comparisons
tags: [langgraph, crewai, openai-agents-sdk, multi-agent, framework]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-agent-frameworks-comparison.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
status: active
confidence: medium
---

# AI Agent 프레임워크 비교 (2026)

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

## 참고 소스

- [Agent 프레임워크 비교 리서치](raw/notes/2026-04-09-agent-frameworks-comparison.md)
- [LangGraph vs CrewAI vs OpenAI SDK (Particula)](https://particula.tech/blog/langgraph-vs-crewai-vs-openai-agents-sdk-2026)
- [AI Agent Frameworks Compared (Langfuse)](https://langfuse.com/blog/2025-03-19-ai-agent-comparison)
