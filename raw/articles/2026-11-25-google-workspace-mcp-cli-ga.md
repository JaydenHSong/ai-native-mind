---
title: "Google, Workspace MCP 서버·CLI 정식 출시 — 2027년 2월부터 에이전트는 MCP 경유 의무화 (11-24)"
source_url: "https://cloud.google.com/blog/products/identity-security/deploying-agents-safely-in-your-enterprise"
source_type: "news"
authors: ["Google Cloud Blog"]
published: 2026-11-24
fetched: 2026-11-25
tags: [google, workspace, mcp, cli, agent-gateway, enterprise]
status: raw
---

# Google, Workspace MCP 서버·CLI 정식 출시 — 2027년 2월부터 에이전트는 MCP 경유 의무화 (11-24)

> Google이 11월 24일 Google 호스팅 Workspace MCP 서버와 공식 Workspace CLI(gwscli)를 정식 출시(GA)했다. Google Cloud Agent Gateway와 함께 공개됐고, 2027년 2월 1일부터 AI 에이전트는 Workspace REST API 직접 호출 대신 MCP를 경유해야 하며 기술적으로 강제된다.

## 내용

- **Workspace MCP 서버 (GA)**: Gmail, Google Drive, Docs, Sheets, Slides, Calendar, Chat, Tasks 전용 원격 서버. Keep은 곧 출시, People은 개발자 프리뷰. OAuth 2.0으로 MCP 호환 에이전트 누구나 연결.
- **Workspace CLI (GA, gwscli)**: 로컬 에이전트·터미널 워크플로우·자동화용. 구조화 JSON 출력, 범위 지정 OAuth 로그인, 패키지형 에이전트 스킬과 동적 명령어 발견. Claude Code·Codex·Antigravity 등과 연결 가능.
- **Google Cloud Agent Gateway**: LLM·MCP·Agent2Agent(A2A) 트래픽용 프로토콜 네이티브 게이트웨이. Agent Registry와 에이전트 신원 검증.
- **의무화 일정**: Workspace AI Tools Addendum에 따라 2027년 2월 1일부터 기술적 강제 시작 — AI 에이전트·하네스·모델 주도 도구는 Workspace 데이터 접근 시 MCP 사용 필수. 표준 사용량 티어 적용(99% 이상 개발자는 무료 범위), 2027년 4월 1일부터 Scaled 티어 과금 시작(Gmail·Calendar·Drive API 및 MCP 서버, 일일 무료 허용량 초과분만).
- **보안·관리**: 외부 AI 에이전트의 OAuth 신원 표시 의무화, 관리자가 Admin 콘솔에서 에이전트 접근을 기존 앱처럼 관리. 파생 임베딩·메모리 인덱스·조직 그래프는 30일 보관 상한.
- **출시 범위**: Rapid Release·Scheduled Release 도메인에 약 2주 내 순차 적용.

## 맥락

- 위키의 Google Workspace MCP + agentic OAuth(2026-10-13, 11/11 시행) 후속 — 예고됐던 신원 분류 의무화가 GA + 강제 일정으로 확정
- Anthropic의 MCP 확장과 같은 날 발표 — 에이전트 인프라 표준 경쟁이 '접근 거버넌스' 단계로 이동
