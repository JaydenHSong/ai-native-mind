---
title: "A2A Protocol (Agent-to-Agent)"
category: concepts
tags: [a2a, protocol, multi-agent, langchain, google, linux-foundation, interoperability]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
  - "raw/articles/2026-05-01-langchain-deep-agents-skills.md"
  - "raw/articles/2026-05-01-agentic-engineering-cisco-langchain.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/agent-frameworks]]"
status: active
confidence: high
---

# A2A Protocol (Agent-to-Agent)

## 쉽게 읽기

**비유**: [[concepts/mcp|MCP]]가 **AI ↔ 도구**의 USB-C라면, **A2A**는 **AI ↔ AI**의 HTTP. 서로 다른 회사·프레임워크·언어로 만든 에이전트들이 **상대의 내부를 모르고도** 서로 발견하고 협력할 수 있게 해 주는 공개 통신 표준.

| 용어 | 풀이 |
|------|------|
| **Capability discovery** | "너 뭐 할 수 있어?" 물어보기 |
| **Modality negotiation** | 텍스트로 줄지, 파일로 줄지, 표로 줄지 합의 |
| **Opaque agent** | **내부를 공개하지 않는** 에이전트 (회사 비밀이거나 그냥 그래야 함) |

## 한줄 정의

서로 다른 프레임워크·벤더의 AI 에이전트들이 **서로의 internal state·메모리·도구에 직접 접근하지 않고** 협력 task를 수행할 수 있게 하는 공개 통신 프로토콜. Google이 만들어 Linux Foundation에 기증.

## 4가지 핵심 capability

1. **Capability discovery** — 다른 에이전트의 능력을 메타데이터로 발견
2. **Modality negotiation** — text/files/structured data 중 어떤 방식으로 주고받을지 합의
3. **Collaborative task management** — 멀티 에이전트가 같은 task에 협력
4. **Secure information exchange** — 서로의 internal state 노출 없이 정보 교환

## 표준 RPC 메서드 (LangSmith Agent Server 기준)

| 메서드 | 용도 |
|--------|------|
| `message/send` | 메시지 보내고 완전한 응답 수신 |
| `message/stream` | SSE로 실시간 스트림 응답 |
| `tasks/get` | 이전에 만든 task의 상태/결과 조회 |

엔드포인트 표준: `/a2a/{assistant_id}` (LangChain Agent Server 구현). [[tools/managed-agents]]와 [[tools/deep-agents-deploy]] 모두 A2A endpoint 자동 노출.

## MCP와의 관계 (자주 헷갈리는 부분)

| 축 | MCP | A2A |
|----|-----|-----|
| 누구를 잇는가 | 에이전트 ↔ **도구·데이터·시스템** | 에이전트 ↔ **다른 에이전트** |
| 비유 | 장비 USB-C | 서비스 HTTP |
| 발견 | Tools/Resources/Prompts | Capability discovery |
| 거버넌스 | Anthropic → 표준화 진행 | Google → Linux Foundation |

**둘은 보완 관계**: A2A로 발견한 다른 에이전트를 MCP wrapper로 **도구처럼도** 호출 가능. [[concepts/agentic-engineering]]의 Cisco 파일럿이 이 패턴 — A2A 비지원 IDE 코딩 에이전트와 MCP 어댑터로 연결해 IDE 무관성 확보.

## 채택 사례 (2026)

- **50+ 기술 파트너**: Atlassian, Box, Cohere, Intuit, LangChain, MongoDB, PayPal, Salesforce, SAP, ServiceNow, UKG, Workday 등
- **Anthropic Claude Managed Agents** — multi-agent coordination을 A2A 호환 (research preview)
- **LangChain Deep Agents Deploy** — `deepagents deploy` 후 자동 노출
- **LangGraph Agent Server** — `/a2a/{assistant_id}` endpoint 표준

## 왜 중요한가

A2A 없이는 멀티 에이전트 시스템이 **벤더별 사일로**가 된다 — 같은 회사 안에서도 LangGraph 에이전트와 Claude Code 서브에이전트와 OpenAI Agent SDK가 서로 못 부른다. A2A는 **각자가 옳은 일을 하면서 협력**할 수 있게 한다 (HTTP가 그랬던 것처럼).

위키의 [[concepts/agentic-engineering|Agentic Engineering]]의 Worker/Leader 제어 평면이 실제로 production에서 도는 데 A2A가 인프라 전제. [[concepts/harness-engineering|Harness Engineering]]의 "tool 통신"을 에이전트 간으로 확장한 것.

## 관련 개념

- [[concepts/mcp]] — 자매 표준 (도구 통신)
- [[concepts/agentic-engineering]] — Worker/Leader 제어 평면이 A2A 위에서 돈다
- [[concepts/ai-orchestration]] — orchestrator-workers 패턴의 통신 층

## 참고 소스

- [A2A 프로토콜 정리 (raw)](raw/articles/2026-05-01-a2a-protocol-spec.md)
- [Cisco × LangChain 파일럿 (Worker/Leader)](raw/articles/2026-05-01-agentic-engineering-cisco-langchain.md)
- [공식 스펙 — a2a-protocol.org](https://a2a-protocol.org/latest/specification/)
- [GitHub a2aproject/A2A](https://github.com/a2aproject/A2A)
- [LangSmith A2A endpoint docs](https://docs.langchain.com/langsmith/server-a2a)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 4 (도구·통신 표준)
- **클리어 조건**: MCP와 A2A의 차이를 한 문장으로 설명할 수 있다 ("MCP는 도구, A2A는 다른 에이전트")
- **다음 퀘스트**: [[concepts/agentic-engineering]] 의 Worker/Leader 패턴이 어떻게 A2A를 쓰는지 한 번 읽어 보기
