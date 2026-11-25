---
title: "MCP 2주년 확장 — Skills over MCP 베타, Tasks·Elicitation 정식 출시"
category: concepts
tags: [anthropic, mcp, claude, agent-skills, tasks, elicitation, protocol]
created: 2026-11-25
updated: 2026-11-25
sources:
  - "raw/articles/2026-11-25-anthropic-mcp-skills-tasks-elicitation.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/anthropic-agent-skills-foundation]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/google-workspace-mcp-cli-ga]]"
status: draft
confidence: medium
---

# MCP 2주년 확장 — Skills over MCP 베타, Tasks·Elicitation 정식 출시

## 쉽게 읽기

**비유**: MCP는 AI와 외부 도구를 잇는 'USB-C' 같은 연결 규칙이다. 2년 동안은 "도구 목록을 알려 주는 것"까지만 했다면, 이제는 네 가지가 더 된다. 첫째, 서버가 "이 일은 이렇게 하는 거야"라는 일하는 방법(스킬)까지 함께 건네준다. 둘째, 오래 걸리는 일은 "나중에 결과 줄게" 하고 백그라운드로 돌린다. 셋째, 돈이 드는 일 앞에서는 "이거 해도 돼요?" 하고 사람에게 물어본다. 넷째, 파일은 대화창을 거치지 않고 직접 건넨다(곧 출시). 요컨대 연결 규칙이 '도구 목록'에서 '함께 일하는 방법'으로 커진 것이다.

| 용어 | 풀이 |
|------|------|
| **MCP (Model Context Protocol)** | AI 앱과 외부 도구·데이터를 연결하는 오픈 표준. "AI의 USB-C" |
| **스킬 (Skill)** | "이 작업은 이런 순서로 해"라고 적힌 일하는 방법 설명서. SKILL.md 파일 형태 |
| **Tasks** | 오래 걸리는 작업을 백그라운드로 돌리고 나중에 결과를 받는 방식 |
| **Elicitation** | 서버가 작업 도중 사용자에게 정보나 승인을 물어보는 기능 |
| **File Uploads** | 파일을 모델의 대화(컨텍스트)를 거치지 않고 서버에 직접 보내는 기능 |

## 한줄 정의

Anthropic이 2026-11-24 MCP 출시 2주년을 맞아 발표한 확장으로, Skills over MCP(공개 베타), Tasks·Elicitation(정식 출시), File Uploads(곧 출시)를 Claude와 Claude Code에 제공하며, MCP를 도구 연결 프로토콜에서 에이전트 간 위임·조율 표준으로 확장한다.

## 핵심 내용

- **Skills over MCP (공개 베타)**: MCP 서버가 도구 옆에 SKILL.md 기반 스킬(다단계 작업 절차·운영 지식)을 함께 게시. Claude는 필요할 때만 스킬을 불러옴. Pro·Max·Ultra는 기본 활성화, Team은 관리자 활성화 필요, Enterprise는 곧 지원.
- **Tasks (GA)**: 서버가 긴 작업이나 전체 에이전트 루프를 백그라운드에서 실행하고 작업 핸들을 반환. Claude는 다른 작업을 계속하다가 결과가 준비되면 회수. Pro·Max·Ultra 제공 중, Team·Enterprise로 확대 중.
- **Elicitation (GA)**: 서버가 작업 도중 폼이나 링크로 사용자에게 정보·승인(지출·삭제 등)을 요청하며 일시 정지. Tasks와 같은 요금제 범위.
- **File Uploads (곧 출시)**: Claude가 PDF·스프레드시트·이미지를 컨텍스트 윈도우를 거치지 않고 서버에 직접 전송. 실험적 확장 단계로 날짜 미정.
- **MCP 규모**: 월간 SDK 다운로드 7억 회 이상(Anthropic 발표, 2년 만). 오픈 표준·확장 체계라 대응 서버는 다른 호환 클라이언트에서도 동작.
- **표기 주의**: Claude의 'GA' 표기와 MCP 확장 자체의 성숙도 단계는 다를 수 있다. 성능·지연·신뢰성·보안에 대한 독립 평가 데이터는 발표에 없다.

## 왜 중요한가 (1인 개발자 관점)

1. **스킬이 '설치'에서 '배포'로**: 지금까지 스킬은 내가 직접 설치하는 파일이었다. 이제 서버가 스킬을 함께 건네주니, 도구를 연결하는 것만으로 일하는 방법까지 따라온다. 내 하네스에서 외부 서비스를 붙일 때 "도구 목록 + 스킬"을 한 묶음으로 받는 설계가 표준이 된다.
2. **비동기가 기본값이 된다**: Tasks는 "기다리는 AI"에서 "맡기고 딴 일 하는 AI"로의 전환이다. 긴 작업을 시키는 내 에이전트도 핸들을 받고 나중에 회수하는 구조를 갖추면, 컨텍스트를 길게 붙잡아 두는 낭비를 줄일 수 있다.
3. **승인 지점이 프로토콜로**: Elicitation은 "돈 쓰는 일 전에 사람에게 묻는다"는 안전장치를 프로토콜 수준으로 올린다. 내 에이전트에 돈을 쓰게 할 때도, 물어보는 단계를 하네스가 아니라 프로토콜이 보장하게 설계할 수 있다.

## 한계 (명시)

- 모든 수치는 Anthropic 발표 기준(벤더 보고)이며, 성능·지연·신뢰성·보안의 독립 평가 데이터는 없다.
- Enterprise 지원은 아직 '곧' 단계이고, Team은 관리자 활성화가 필요하다 — 요금제·조직에 따라 체감이 다르다.
- File Uploads는 날짜 미정의 실험적 확장으로, 스펙 변경 가능성이 있다.
- confidence는 medium — Anthropic 발표와 다수 2차 보도 교차이나 실사용 검증은 없다.

## 관련 개념

- [[concepts/mcp]] — MCP의 기본 개념과 2년 전 출발점. 이번 확장은 그 위의 층 (2026-11-25)
- [[concepts/anthropic-agent-skills-foundation]] — Agent Skills의 Linux Foundation 기증(2026-10-23). 스킬 표준화의 전 단계 (2026-11-25)
- [[concepts/ai-orchestration]] — 여러 에이전트 조율 패턴. 서버에 일을 위임하는 Tasks가 조율의 새 축 (2026-11-25)
- [[concepts/google-workspace-mcp-cli-ga]] — 같은 날 Google이 발표한 Workspace MCP GA. 에이전트 인프라 표준 경쟁의 다른 축 (2026-11-25)

## 참고 소스

- [Anthropic, MCP 2주년 — Skills over MCP 베타, Tasks·Elicitation 정식 출시 (Agentpedia, 11-24)](raw/articles/2026-11-25-anthropic-mcp-skills-tasks-elicitation.md)
- [Anthropic Brings Server-Supplied Skills and Background Tasks to Claude (Unite.AI)](https://www.unite.ai/anthropic-brings-server-supplied-skills-and-background-tasks-to-claude/)
