---
title: "MCP (Model Context Protocol)"
category: concepts
tags: [mcp, anthropic, protocol, tools, integration]
created: 2026-04-09
updated: 2026-05-01
sources:
  - "raw/notes/2026-04-09-mcp-research.md"
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[concepts/a2a-protocol]]"
status: active
confidence: high
---

# MCP (Model Context Protocol)

## 쉽게 읽기

**비유**: 예전에는 기기마다 충전기 모양이 달랐다. **MCP**는 AI 앱이 외부(깃허브, DB, 슬랙 등)와 연결할 때 쓰는 **공통 충전 포트(USB-C 같은 것)** 이다. 한 번 표준에 맞춰 두면, 새 도구도 “이 포트만 맞추면” 붙인다.

| 용어 | 풀이 |
|------|------|
| **MCP Client** | AI 앱 쪽(질문·명령을 보내는 쪽) |
| **MCP Server** | 실제 데이터·기능을 제공하는 쪽 |
| **Tools / Resources / Prompts** | AI가 실행할 함수·읽을 데이터·미리 만든 질문 템플릿 |

## 한줄 정의

AI 모델과 외부 도구/데이터 소스를 연결하는 오픈 표준 프로토콜. "AI의 USB-C".

## 핵심 내용

### 해결하는 문제

기존: 각 데이터 소스마다 커스텀 통합 필요 → 확장 불가, 정보 사일로
MCP: **하나의 표준**으로 모든 도구/데이터 연결

### 아키텍처

```
MCP Client (AI 앱)  ←→  MCP Server (도구/데이터)
   예: Claude Code         예: GitHub, Slack, DB
```

### 3대 프리미티브

| 프리미티브 | 제어 주체 | 역할 | 예시 |
|-----------|----------|------|------|
| **Tools** | 모델 | 함수 실행 | 파일 읽기, DB 쿼리, API 호출 |
| **Resources** | 앱 | 데이터 접근 | 문서, 설정, 상태 |
| **Prompts** | 사용자 | 프롬프트 템플릿 | 미리 정의된 작업 패턴 |

### 주요 MCP 서버 (이미 사용 가능)

| 카테고리 | 서버 |
|----------|------|
| **개발** | GitHub, Git, Postgres, Puppeteer |
| **생산성** | Google Drive, Slack, Gmail, Calendar |
| **디자인** | Figma, Notion |
| **데이터** | Supabase, 다양한 DB |

### 역사

- **2024년 11월**: Anthropic이 MCP 발표
- **2025년 12월**: Linux Foundation(AAIF)에 기부 — Anthropic, Block, OpenAI 공동 설립
- **2026년**: 사실상 업계 표준

## [[concepts/context-engineering|Context Engineering]]과의 관계

MCP는 Context Engineering의 **"도구 접근" 계층을 표준화**한 것:

```
Context Engineering 5요소:
├── System Prompt  → CLAUDE.md
├── Task Decomposition → PDCA
├── Memory/State → wiki/
├── Tools/API → ★ MCP가 이 부분을 표준화 ★
└── Guardrails → 규칙, 권한
```

## [[concepts/harness-engineering|Harness Engineering]]에서의 위치

MCP는 Harness의 핵심 인프라. 에이전트가 외부 세계와 상호작용하는 **표준 인터페이스**를 제공한다.

## 왜 중요한가

1인 개발자에게 MCP는 **도구 조합의 비용을 극적으로 낮춘다**. 커스텀 API 통합 없이, MCP 서버만 연결하면 AI가 바로 도구를 사용할 수 있다.

## MCP의 자매 표준 — A2A (Agent-to-Agent)

2026년 들어 자매 표준 [[concepts/a2a-protocol|A2A 프로토콜]]이 Linux Foundation 산하로 자리 잡으면서, "AI 표준 두 축"이 분명해졌다.

| | MCP | A2A |
|--|-----|-----|
| 누구를 잇는가 | 에이전트 ↔ **도구·데이터·시스템** | 에이전트 ↔ **다른 에이전트** |
| 비유 | USB-C (장치 ↔ 도구) | HTTP (서비스 ↔ 서비스) |
| 발견 | Tools/Resources/Prompts 메타데이터 | Capability discovery |
| 거버넌스 | Anthropic → 표준화 진행 중 | Google → Linux Foundation |

**둘은 경쟁이 아니라 보완**: A2A로 발견한 다른 에이전트를 **MCP wrapper**로 도구처럼 호출 가능 ([[concepts/agentic-engineering]]의 Cisco 파일럿이 정확히 이 방법). 실무에서 둘을 같이 쓰는 게 표준 패턴.

## 참고 소스

- [MCP 리서치](raw/notes/2026-04-09-mcp-research.md)
- [A2A 프로토콜 정리 (2026-05-01)](raw/articles/2026-05-01-a2a-protocol-spec.md)
- [Introducing MCP (Anthropic)](https://www.anthropic.com/news/model-context-protocol)
- [MCP Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Code Execution with MCP (Anthropic)](https://www.anthropic.com/engineering/code-execution-with-mcp)
