---
source_url: "https://blog.langchain.com/langchain-langgraph-1dot0/"
title: "LangChain and LangGraph Agent Frameworks Reach v1.0 Milestones"
publisher: "LangChain"
ingested: 2026-05-01
related_urls:
  - "https://github.com/langchain-ai/langgraph/releases"
  - "https://docs.langchain.com/langsmith/agent-server-changelog"
---

# LangChain·LangGraph v1.0 — 안정성 약속

> 출처: [LangChain 공식 블로그](https://blog.langchain.com/langchain-langgraph-1dot0/) · [GitHub releases](https://github.com/langchain-ai/langgraph/releases)

## 한 줄 요약

**LangGraph 1.0** (2025-10) 이 durable agent framework 분야의 **첫 stable major release**. "**2.0 전까지 breaking change 없음**" 약속이 핵심 — 1년 넘는 iteration과 Uber·LinkedIn·Klarna 등 widespread adoption을 거쳐 안정 단계 진입. 4월 2026 시점에도 여전히 1.x 라인이 활발히 진화 중이며, **2.0은 아직 미발표**.

## 의미

- **API 안정성** = 프로덕션 배포의 전제 조건. 1.0 약속은 "지금 짠 LangGraph 그래프가 1년 뒤에도 동작"을 보장.
- LangGraph가 **deepagents의 기반 런타임**이라는 사실을 함께 고려하면, 4월 발표된 deepagents·Deep Agents Deploy의 무게도 같이 단단해짐.
- LangGraph 위에 도는 **Agent Server**의 [A2A endpoint](https://docs.langchain.com/langsmith/server-a2a)도 같은 stability 약속 안에 들어감.

## 4월 changelog 주요 흐름

[Agent Server changelog](https://docs.langchain.com/langsmith/agent-server-changelog)에 4월 한 달간 주요 갱신:

- A2A endpoint 추가 (`/a2a/{assistant_id}`)
- Deep Agents 통합 강화
- Subagent 백그라운드 실행 (4월 16일 발표)
- 모델 무관성 튜닝 가이드 (4월 29일)

## 위키 매핑

- 보강: [[comparisons/agent-frameworks]] (LangGraph 1.0 stability 약속 행 갱신 — 현재 비교 표가 stability 축이 약함)
- 보강: [[concepts/ai-orchestration]] (orchestrator-workers 패턴의 production-grade 런타임으로 LangGraph 1.0 명시)

confidence: high (LangChain 공식)
