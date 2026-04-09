# MCP (Model Context Protocol) 리서치 (2026-04-09)

## 출처
- https://www.anthropic.com/news/model-context-protocol
- https://modelcontextprotocol.io/specification/2025-11-25
- https://www.anthropic.com/engineering/code-execution-with-mcp
- https://en.wikipedia.org/wiki/Model_Context_Protocol
- https://calmops.com/ai/model-context-protocol-mcp-2026-complete-guide/

## MCP란?
- Anthropic이 2024년 11월 발표한 오픈 표준
- AI 모델과 외부 도구/데이터 소스를 연결하는 프로토콜
- "AI의 USB-C" — 하나의 표준으로 모든 도구 연결

## 해결하는 문제
- 각 데이터 소스마다 커스텀 구현 필요 → 확장 불가
- AI가 정보 사일로에 갇힘
- MCP로 표준화된 양방향 연결

## 아키텍처
- MCP Client (AI 앱) ↔ MCP Server (도구/데이터)
- 3대 프리미티브:
  - Tools (모델이 호출) — 함수 실행
  - Resources (앱이 제어) — 데이터 접근
  - Prompts (사용자가 제어) — 프롬프트 템플릿

## 주요 MCP 서버 (이미 사용 가능)
- Google Drive, Slack, GitHub, Git, Postgres, Puppeteer
- Figma, Notion, Gmail, Google Calendar
- 커뮤니티에서 수백 개 추가

## 2025년 12월: Linux Foundation 이관
- Anthropic이 Agentic AI Foundation (AAIF)에 기부
- Anthropic, Block, OpenAI 공동 설립
- 2026년 사실상 업계 표준으로 자리잡음

## Context Engineering과의 관계
- MCP는 Context Engineering의 "도구 접근" 계층을 표준화
- AI가 사용할 수 있는 도구를 체계적으로 정의
- Harness Engineering의 핵심 인프라
