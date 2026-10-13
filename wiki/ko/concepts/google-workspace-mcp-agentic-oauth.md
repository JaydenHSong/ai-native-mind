---
title: "Google Workspace MCP + agentic OAuth — AI 에이전트 신원 분류 의무화 (2026-10-12)"
category: concepts
tags: [google, workspace, mcp, oauth, agentic, is_agentic, agent-identity]
created: 2026-10-13
updated: 2026-10-13
sources:
  - "raw/articles/2026-10-13-google-workspace-mcp-agentic-oauth.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
status: draft
confidence: high
---

# Google Workspace MCP + agentic OAuth — AI 에이전트 신원 분류 의무화 (2026-10-12)

## 한줄 정의

Google이 Workspace MCP 서버에 앞서 OAuth 클라이언트에 도입한 AI 에이전트용 공식 신원 분류(is_agentic) — agentic 표시가 없으면 2026-11-11부터 Workspace MCP 호출 차단.

## 핵심 내용

- **일정 (3단)**: 10/12부터 Cloud 콘솔에서 기존·신규 OAuth 클라이언트에 agentic 표시 가능 → 11/11부터 표시 없는 클라이언트의 Workspace MCP 서버 호출 거부(에러: "the client isn't marked as an AI agent") → 11/12부터 설정 영구 고정 (이후 변경 시 새 OAuth Client ID 필요).
- **적용 범위**: Google Workspace MCP 서버 — Gmail, Drive, Calendar 등 생산성 도구의 실시간 기능 노출. 순수 REST API(Gmail/Drive API) 사용 앱은 조치 불필요.
- **영향 프로젝트**: Google 공지 이메일 명시 2개 — `hermes-chat-test`, `tahoe-503917`.
- **공식 문서 권장**: 인간 인터랙션용 standard client ID와 AI 에이전트용 agentic client ID를 분리 사용. 일부 Google MCP 엔드포인트(Workspace tools)는 agentic client ID로만 허용.
- **한계 명시**: agentic 표시는 추가 스코프·권한을 부여하지 않음. 표준 OAuth 2.0 보안 요건(사용자 동의, 앱 검증)은 동일.

## 왜 중요한가

AI 네이티브 프로그래머에게 이것은 **MCP 표준의 신원 레이어가 퍼스트파티에서 실제로 강제되는 첫 사례**다. 지금까지 에이전트의 도구 접근은 "누가 호출하는지"보다 "어떤 스코프를 가졌는지"로만 통제됐다. 이제 Google은 "에이전트 트래픽" 자체를 별도 신원으로 분리하고, MCP 서버가 그 신원을 요구한다. 하네스 설계 관점의 실무 함의는 직접적이다: Workspace 연동 에이전트를 만든다면 11/11 전에 agentic client ID를 분리해야 하고, human/API 트래픽과 agent 트래픽의 모니터링·정책을 분리 설계하는 것이 공식 권장 패턴이 됐다. Poppy(Meta×Sierra)가 상거래 쪽 신원을 표준화한다면, 이것은 생산성 도구 쪽 신원의 플랫폼 강제 버전이다.

## 관련 개념

- [[concepts/mcp]] — MCP 표준의 신원 레이어가 퍼스트파티에서 강제되는 첫 사례.
- [[concepts/a2a-protocol]] — 에이전트 간 협력 표준과 함께 "에이전트가 누구인지"를 플랫폼이 보증하는 시대.
- [[concepts/meta-sierra-poppy-protocol]] — 같은 주의 평행 움직임: 에이전트 신원 인프라의 표준화 경쟁 (상거래 vs 생산성 도구).
- [[concepts/agent-supply-chain-security]] — 에이전트 트래픽 분리·모니터링이 공식 메커니즘으로 제공됨.

## 참고 소스

- [Google Cloud 공식 문서 — Manage OAuth Clients (agentic 설정)](https://support.google.com/cloud/answer/15549257?hl=en)
- [ASTIG 보도](https://astig.ph/google-workspace-oauth-agentic-setting-mcp-servers-2026/)
- Google Workspace Team 공지 이메일 (2026-10-12 11:59 PDT 수신)
- 원본 캡처: [raw/articles/2026-10-13-google-workspace-mcp-agentic-oauth.md](raw/articles/2026-10-13-google-workspace-mcp-agentic-oauth.md)