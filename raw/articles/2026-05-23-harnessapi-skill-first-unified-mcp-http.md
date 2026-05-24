---
title: "HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools (arXiv 2605.22733)"
source_url: "https://arxiv.org/abs/2605.22733"
source_type: "arxiv-paper"
authors: ["Edwin Jose"]
published: 2026-05-21
fetched: 2026-05-23
tags: [tool-use, mcp, fastapi, sse, api, skill-first, agent-runtime, arxiv]
status: ingested
---

# HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools

> arXiv:2605.22733. Python skill을 **단일 source of truth** 로 두고, 같은 구현에서 **SSE HTTP endpoint + OpenAPI UI + MCP tool** 을 동시에 파생시키는 framework 제안.

## 메타

- **Title**: HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools
- **Author**: Edwin Jose
- **Link**: <https://arxiv.org/abs/2605.22733>
- **Published**: 2026-05-21
- **Subjects**: Artificial Intelligence (cs.AI), Software Engineering (cs.SE)

## 한 줄 요약

**"LLM용 MCP tool과 사람·CI용 HTTP API를 따로 유지하지 말고, typed skill 하나에서 둘 다 생성하자."**

## 핵심 주장

### 1) 지금의 tool 배포는 같은 로직을 두 번 포장하게 만든다

논문이 겨냥하는 문제는 단순하다.

- 사람·CI는 보통 **HTTP endpoint** 를 쓴다
- agent runtime은 보통 **MCP tool registration** 을 쓴다
- 둘은 business logic는 같지만
- routing / validation / serialization / streaming / schema maintenance가 분리되어 drift가 난다

즉 capability 하나를 운영하기 위해 **API stack과 agent stack을 이중 유지** 하게 된다.

### 2) skill folder를 단일 source of truth로 둔다

HarnessAPI는 typed skill folder와 Pydantic schema를 중심에 두고, 여기서 다음을 자동 파생한다.

1. **SSE 기반 streaming HTTP endpoint**
2. **OpenAPI / Swagger UI**
3. **zero-configuration MCP tool**

핵심은 "도구 설명서"를 복제하는 대신 **도구 구현과 schema를 중심 artifact** 로 삼는다는 점이다.

### 3) 같은 handler가 JSON과 streaming을 동시에 상대한다

논문은 dual-mode content negotiation을 강조한다.

- 같은 handler가
- SSE streaming client와
- 일반 JSON client를
- 별도 handler 분기 없이 상대한다

즉 streaming / non-streaming을 서로 다른 서비스로 쪼개지 않아도 된다.

### 4) 기술적 마찰도 하나 줄인다

저자는 FastMCP inspection layer에 Pydantic type annotation이 제대로 전파되지 않는 문제를 지적하고, 이를 동적 code generation으로 우회한다.

메시지는 더 일반적이다.

> MCP는 표준 transport이지만, 실제 운영에서는 **type propagation과 schema fidelity** 같은 구현 디테일이 load-bearing하다.

## 정량 / 기여점

- **6 representative skills** 기준 비교
- 수작업 dual-stack(FastAPI + FastMCP) 대비
- **framework-facing boilerplate 74% 감소**
- FastAPI subclass라 기존 middleware / dependency injection / deployment ecosystem 재사용 가능

## 실무적 시사점

1. **tool을 문서가 아니라 deployable capability object로 본다**
   - schema, executor, HTTP surface, MCP surface를 같은 artifact에서 파생시키는 편이 drift가 적다.
2. **agent interface와 product interface를 분리된 세계로 보지 않는다**
   - 같은 business logic를 사람과 agent가 다른 transport로 접근할 뿐이라는 시각이 생긴다.
3. **MCP 도입 장벽을 낮춘다**
   - 기존 FastAPI 계열 서비스를 운영 중이면, MCP를 새 서버로 따로 두지 않고 같은 프로세스에서 붙일 수 있다는 함의가 있다.

## 기존 지식과의 연결

- [[concepts/tool-use]]
  - Tool Use를 `name + description + input schema` 에서 한 걸음 더 나아가 **runtime·transport까지 묶인 배포 단위** 로 보게 만든다.
- [[concepts/mcp]]
  - MCP를 별도 전용 서버가 아니라 **existing API surface의 파생 인터페이스** 로 읽게 해 준다.
- [[concepts/harness-engineering]]
  - 도구 하네스의 중심을 prompt prose가 아니라 **typed executable artifact** 로 이동시킨다.

## 한계 / 메모

- abstract 기준 정리라 benchmark의 정확한 skill 난이도 분포와 latency overhead는 본문 확인이 더 필요하다.
- Python / FastAPI / FastMCP 생태계 중심이므로, polyglot 팀이나 non-Python stack 일반화는 추가 검토가 필요하다.
