---
title: "Google Workspace MCP 서버 출시 + AI 에이전트 OAuth 'agentic' 표시 의무화 (11/11 시행)"
source_url: "https://astig.ph/google-workspace-oauth-agentic-setting-mcp-servers-2026/"
source_type: "news"
authors: ["Google Workspace Team", "Google Cloud Support", "ASTIG"]
published: 2026-10-12
fetched: 2026-10-13
tags: [google, workspace, mcp, oauth, agentic, is_agentic]
status: raw
---

# Google Workspace MCP 서버 출시 + AI 에이전트 OAuth 'agentic' 표시 의무화 (11/11 시행)

> Google Workspace Team 이메일 (2026-10-12 11:59 PDT 수신) + Google Cloud 공식 지원 문서(support.google.com/cloud/answer/15549257) + ASTIG 보도 교차 확인. Workspace용 MCP(Model Context Protocol) 서버 출시에 앞서 OAuth 클라이언트에 새로운 "agentic"(is_agentic) 분류 도입.

## 내용

- 일정 (3단): 10/12부터 Cloud 콘솔에서 기존·신규 OAuth 클라이언트에 agentic 표시 가능 → 11/11부터 agentic 표시 없는 클라이언트의 Workspace MCP 서버 호출 거부(에러: "the client isn't marked as an AI agent") → 11/12부터 설정 영구 고정 (이후 변경 시 새 OAuth Client ID 필요).
- 적용 범위: Google Workspace MCP 서버 — Gmail, Drive, Calendar 등 생산성 도구의 실시간 기능을 노출. 순수 REST API(Gmail/Drive API) 사용 앱은 조치 불필요.
- 영향 프로젝트: 이메일 명시 2개 — `hermes-chat-test`, `tahoe-503917`.
- 공식 문서 권장: 인간 인터랙션용 standard client ID와 AI 에이전트용 agentic client ID를 분리. 일부 Google MCP 엔드포인트(Workspace tools)는 agentic client ID로만 허용.
- 주의: agentic 표시는 추가 스코프·권한을 부여하지 않음. 표준 OAuth 2.0 보안 요건(사용자 동의, 앱 검증)은 동일하게 적용.

## 맥락

- [[concepts/mcp]] — MCP 표준의 신원 레이어가 퍼스트파티에서 실제 강제되는 첫 사례. 오픈 표준 위에 플랫폼의 "에이전트 신원 보증"이 얹히는 형태.
- [[concepts/a2a-protocol]] — 에이전트 간 협력 표준과 함께 "에이전트가 누구인지"를 플랫폼이 보증하는 시대.
- [[patterns/agent-supply-chain-security]] — 에이전트 트래픽 분리·모니터링이 공식 메커니즘으로 제공됨. 외부 도구 신뢰 모델에 신원 축 추가.
- [[concepts/meta-sierra-poppy-protocol]] — Meta×Sierra Poppy(에이전트 상거래 신원)와 같은 주간의 평행 움직임: 에이전트 신원 인프라의 표준화 경쟁.