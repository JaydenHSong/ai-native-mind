---
title: "Google Workspace MCP·CLI 정식 출시 — 2027년 2월부터 에이전트는 MCP 경유 의무화"
category: concepts
tags: [google, workspace, mcp, cli, agent-gateway, enterprise, governance]
created: 2026-11-25
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-25-google-workspace-mcp-cli-ga.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/google-workspace-mcp-agentic-oauth]]"
  - "[[concepts/anthropic-mcp-skills-tasks-elicitation]]"
status: draft
confidence: medium
---

# Google Workspace MCP·CLI 정식 출시 — 2027년 2월부터 에이전트는 MCP 경유 의무화

## 쉽게 읽기

**비유**: 지금까지 AI 에이전트가 Gmail·Drive를 쓰려면 각 앱마다 따로 문을 두드리는 식이었다. Google이 이제 "AI 전용 정문"을 열었다. Gmail·Drive·Docs 등 8개 앱에 MCP 서버라는 정문을 달고, 터미널에서 일하는 에이전트용 명령줄 도구(gwscli)도 내놨다. 그리고 2027년 2월 1일부터는 "뒷문(REST API 직접 호출)으로는 AI가 못 들어온다. 정문(MCP)으로만 와라"고 못 박았다. 정문에서는 누가 왔는지 신원을 확인하고, 관리자가 출입을 관리할 수 있다. 대신 많이 쓰면 2027년 4월부터 요금이 붙는다.

| 용어 | 풀이 |
|------|------|
| **MCP 서버** | AI 에이전트가 앱의 기능을 표준 방식으로 쓸 수 있게 해 주는 연결 창구 |
| **Workspace CLI (gwscli)** | 터미널에서 Workspace를 다루는 공식 명령줄 도구. 에이전트가 터미널 안에서 일할 때 쓴다 |
| **Agent Gateway** | 여러 에이전트·모델의 통신을 한곳에서 받아 신원을 확인하고 통제하는 관문 |
| **REST API** | 앱 기능을 직접 부르는 기존 방식. 사람이 쓰던 것을 에이전트가 그대로 빌려 쓰던 길 |
| **Standard / Scaled 티어** | 사용량 구간. Standard는 무료 범위, Scaled는 많이 쓰면 요금이 붙는 구간 |

## 한줄 정의

Google이 2026-11-24 정식 출시한 Google 호스팅 Workspace MCP 서버와 공식 Workspace CLI(gwscli)로, 2027년 2월 1일부터 AI 에이전트는 Workspace 데이터 접근 시 REST API 직접 호출 대신 MCP를 경유해야 하며, Google Cloud Agent Gateway와 함께 에이전트 신원·접근 거버넌스를 제공한다.

## 핵심 내용

- **Workspace MCP 서버 (GA)**: Gmail, Google Drive, Docs, Sheets, Slides, Calendar, Chat, Tasks 전용 원격 서버. Keep은 곧 출시, People은 개발자 프리뷰. OAuth 2.0으로 MCP 호환 에이전트 누구나 연결.
- **Workspace CLI (GA, gwscli)**: 로컬 에이전트·터미널 워크플로우·자동화용. 구조화 JSON 출력, 범위 지정 OAuth 로그인, 패키지형 에이전트 스킬과 동적 명령어 발견. Claude Code·Codex·Antigravity 등과 연결 가능.
- **Google Cloud Agent Gateway**: LLM·MCP·Agent2Agent(A2A) 트래픽용 프로토콜 네이티브 게이트웨이. Agent Registry와 에이전트 신원 검증.
- **의무화 일정**: Workspace AI Tools Addendum에 따라 2027년 2월 1일부터 기술적 강제 시작 — AI 에이전트·하네스·모델 주도 도구는 Workspace 데이터 접근 시 MCP 사용 필수. 2027년 4월 1일부터 Scaled 티어 과금 시작(Gmail·Calendar·Drive API 및 MCP 서버, 일일 무료 허용량 초과분만).
- **보안·관리**: 외부 AI 에이전트의 OAuth 신원 표시 의무화, 관리자가 Admin 콘솔에서 에이전트 접근을 기존 앱처럼 관리. 파생 임베딩·메모리 인덱스·조직 그래프는 30일 보관 상한.
- **추가 확인 사항 (2026-11-26)**: 2027년 2월 1일 강제 이후에도 REST API 직접 호출 자체가 사라지는 것은 아니고, AI 에이전트의 REST 직접 호출은 Standard 티어 한도로 제한된다. 에이전트용 OAuth 클라이언트는 is_agentic 표시가 필요하다. Scaled 티어 과금은 2027년 4월 1일부터 시작한다. (Google Workspace Updates 2026-11-24 발표, TechRepublic·InfoSecurity Magazine 보도)
- **출시 범위**: Rapid Release·Scheduled Release 도메인에 약 2주 내 순차 적용.

## 왜 중요한가 (1인 개발자 관점)

1. **내 에이전트도 '정문'으로 가야 한다**: Gmail·Drive를 건드리는 하네스를 갖고 있다면 2027년 2월 1일이 마감이다. REST 직접 호출은 막히니, 지금부터 MCP 서버·CLI 경유로 바꿔 두는 게 안전하다. 마감은 생각보다 가깝다.
2. **신원이 곧 권한이다**: 에이전트도 이제 신분증을 내야 한다. OAuth 신원 표시 의무화는 "누가, 무슨 권한으로"를 남기는 구조라, 내 에이전트 로그·감사(audit) 설계에도 그대로 적용할 수 있다.
3. **플랫폼이 거버넌스를 파는 시대**: Google이 파는 건 연결이 아니라 '통제된 연결'이다. 에이전트 인프라의 경쟁축이 기능에서 거버넌스로 이동했음을 보여 주는 사례로, 내 하네스 설계 때도 접근 통제·보관 상한 같은 제약을 처음부터 넣는 게 맞다.

## 한계 (명시)

- Google 발표 기준(벤더 보고)으로, 실사용 검증·요금 실측은 아직 없다. Scaled 티어 가격은 미공개다.
- Keep MCP 서버는 아직 '곧 출시', People은 개발자 프리뷰라 앱별 완성도가 다르다.
- CLI의 명령어·스키마는 런타임에 발견되는 구조라 예고 없이 바뀔 수 있다고 Google 문서가 경고한다 — 고정 스크립트에 의존하면 안 된다.
- confidence는 medium — Google 공식 발표와 다수 2차 보도 교차이나 실사용 검증은 없다.

## 관련 개념

- [[concepts/mcp]] — MCP의 기본 개념. Workspace MCP는 그 표준을 Google이 호스팅한 구현 (2026-11-25)
- [[concepts/google-workspace-mcp-agentic-oauth]] — 2026-10-13 발표의 신원 분류 의무화. 이번 GA는 그 예고의 확정판 (2026-11-25)
- [[concepts/anthropic-mcp-skills-tasks-elicitation]] — 같은 날 Anthropic이 발표한 MCP 확장. 에이전트 인프라 표준 경쟁의 양축 (2026-11-25)

## 참고 소스

- [Google, Workspace MCP 서버·CLI 정식 출시 (Google Cloud Blog, 11-24)](raw/articles/2026-11-25-google-workspace-mcp-cli-ga.md)
- [Google Workspace MCP Servers, CLI Now Generally Available (Pandromeda)](https://pandromeda.com/software/google-workspace-mcp-servers-and-cli-reach-general-availability)
