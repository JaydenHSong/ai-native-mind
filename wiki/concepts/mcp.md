---
title: "MCP (Model Context Protocol)"
category: concepts
tags: [mcp, anthropic, protocol, tools, integration]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-mcp-research.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
status: active
confidence: high
---

# MCP (Model Context Protocol)

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

## 참고 소스

- [MCP 리서치](raw/notes/2026-04-09-mcp-research.md)
- [Introducing MCP (Anthropic)](https://www.anthropic.com/news/model-context-protocol)
- [MCP Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Code Execution with MCP (Anthropic)](https://www.anthropic.com/engineering/code-execution-with-mcp)
