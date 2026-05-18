---
source_url: "https://a2a-protocol.org/latest/specification/"
title: "Agent2Agent (A2A) Protocol Specification"
publisher: "a2aproject / Linux Foundation"
ingested: 2026-05-01
related_urls:
  - "https://a2a-protocol.org/latest/"
  - "https://github.com/a2aproject/A2A"
  - "https://docs.langchain.com/langsmith/server-a2a"
---

# A2A (Agent-to-Agent) Protocol — 멀티에이전트 표준

> 출처: [a2a-protocol.org 스펙](https://a2a-protocol.org/latest/specification/) · [GitHub a2aproject/A2A](https://github.com/a2aproject/A2A) · 거버넌스: Linux Foundation (Google에서 기증)

## 한 줄 요약

서로 다른 프레임워크·언어·벤더로 만든 **opaque(내부 비공개)** 에이전트들이 협력할 수 있게 하는 **공개 통신 표준**. Google이 만들어 Linux Foundation에 기증. **50+ 기술 파트너**(Atlassian, Box, Cohere, Intuit, LangChain, MongoDB, PayPal, Salesforce, SAP, ServiceNow, UKG, Workday)가 합류.

## 무엇을 하는가

- **Capability discovery**: 다른 에이전트가 무엇을 할 수 있는지 발견
- **Modality negotiation**: text/files/structured data 중 어떤 방식으로 주고받을지 합의
- **Collaborative task management**: 멀티 에이전트가 같은 task에 협력
- **Secure information exchange**: 서로의 internal state·memory·tools에 직접 접근하지 않고 정보 교환

## RPC 메서드 (LangSmith Agent Server 구현 기준)

| 메서드 | 용도 |
|--------|------|
| `message/send` | 어시스턴트에게 메시지 보내고 완전한 응답 수신 |
| `message/stream` | 메시지 보내고 SSE로 실시간 스트림 응답 |
| `tasks/get` | 이전에 만든 task의 상태/결과 조회 |

엔드포인트: `/a2a/{assistant_id}` (LangChain 구현 기준).

## MCP와의 관계

- **MCP**: 에이전트 ↔ **도구·데이터·시스템** 연결 ("AI의 USB-C")
- **A2A**: 에이전트 ↔ **다른 에이전트** 연결 (서로의 내부를 모르고도 협력)
- 둘은 경쟁이 아니라 보완. A2A로 발견한 다른 에이전트가 **MCP wrapper**를 통해 도구처럼도 호출 가능 (Cisco의 [[concepts/agentic-engineering]] 파일럿이 정확히 이 방법 사용 — A2A 비지원 IDE 코딩 에이전트와 MCP 어댑터로 연결).

## A2A 채택 사례

- **Anthropic Claude Managed Agents** — multi-agent coordination을 A2A 호환으로 (research preview)
- **LangChain Deep Agents Deploy** — A2A endpoint 지원 (`deepagents deploy` 후 자동 노출)
- **LangGraph 기반 에이전트** — Agent Server에서 `/a2a/{assistant_id}` 자동 노출
- 50+ enterprise 파트너의 production 통합

## 위키 매핑

- 새 페이지 후보: `concepts/a2a-protocol` (MCP와 같은 위치 — 현 위키엔 [[concepts/mcp]]만 있음)
- 보강: [[concepts/mcp]] (A2A는 MCP의 자매 표준; 둘 비교 표 추가 후보)
- 보강: [[comparisons/agent-frameworks]] (각 프레임워크의 A2A 지원 여부 행 추가 후보)
- 보강: [[concepts/agentic-engineering]] (Worker 간 통신이 A2A인 이유)

confidence: high (Linux Foundation 등록 표준)
