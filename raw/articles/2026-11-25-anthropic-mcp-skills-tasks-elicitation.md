---
title: "Anthropic, MCP 2주년 — Skills over MCP 베타, Tasks·Elicitation 정식 출시 (11-24)"
source_url: "https://agentpedia.codes/blog/mcp-turns-two-skills-over-mcp-tasks-elicitation"
source_type: "news"
authors: ["Agentpedia"]
published: 2026-11-24
fetched: 2026-11-25
tags: [anthropic, mcp, claude, agent-skills, tasks, elicitation]
status: raw
---

# Anthropic, MCP 2주년 — Skills over MCP 베타, Tasks·Elicitation 정식 출시 (11-24)

> Anthropic이 11월 24일 Model Context Protocol(MCP) 출시 2주년을 맞아 4가지 확장을 발표했다. Skills over MCP는 공개 베타, Tasks와 Elicitation은 정식 출시(GA), File Uploads는 곧 출시 예정이다. Claude와 Claude Code에서 제공되며, MCP 월간 SDK 다운로드가 7억 회를 넘었다고 Anthropic이 밝혔다.

## 내용

- **Skills over MCP (공개 베타)**: MCP 서버가 도구 옆에 SKILL.md 기반 스킬(다단계 작업 절차·운영 지식)을 함께 게시. Claude는 필요할 때만 스킬을 불러옴. Pro·Max·Ultra는 기본 활성화, Team은 관리자 활성화 필요, Enterprise는 곧 지원.
- **Tasks (GA)**: 서버가 긴 작업이나 전체 에이전트 루프를 백그라운드에서 실행하고 작업 핸들을 반환. Claude는 다른 작업을 계속하다가 결과가 준비되면 회수. Pro·Max·Ultra 제공 중, Team·Enterprise로 확대 중.
- **Elicitation (GA)**: 서버가 작업 도중 폼이나 링크로 사용자에게 정보·승인(지출·삭제 등)을 요청하며 일시 정지. Tasks와 같은 요금제 범위.
- **File Uploads (곧 출시)**: Claude가 PDF·스프레드시트·이미지를 컨텍스트 윈도우를 거치지 않고 서버에 직접 전송. 실험적 확장 단계로 날짜 미정.
- **방향 전환**: MCP가 도구 호출용 프로토콜에서 에이전트 간 위임·조율 표준으로 진화 — Anthropic 표현으로 서버와 "다른 에이전트와 일하듯" 배우고, 위임하고, 입력·파일을 주고받음.
- **MCP 규모**: 월간 SDK 다운로드 7억 회 이상(Anthropic 발표, 2년 만). 오픈 표준·확장 체계라 대응 서버는 다른 호환 클라이언트에서도 동작.
- **주의**: Claude의 'GA' 표기와 MCP 확장 자체의 성숙도 단계는 다를 수 있음. 성능·지연·신뢰성·보안에 대한 독립 평가 데이터는 발표에 없음.

## 맥락

- Agent Skills의 중립 표준화(2026-10-23, Linux Foundation 기증)와 이어지는 흐름 — 스킬이 서버에서 자동 배포되는 단계로 이동
- 위키의 MCP·Agent Skills·에이전트 오케스트레이션 주제와 직결
