---
title: "Claude for Google Workspace"
category: tools
tags: [anthropic, claude, google-workspace, enterprise, docs, sheets, slides, agent-ui]
created: 2026-10-07
updated: 2026-10-07
sources:
  - "raw/articles/2026-10-07-claude-google-workspace-beta.md"
related:
  - "[[tools/claude-code]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/agent-residence]]"
  - "[[tools/gemini-agent-work]]"
status: draft
confidence: medium
---

# Claude for Google Workspace

## 쉽게 읽기

**비유**: Gemini가 살던 Google Docs·Sheets·Slides에 Claude가 세들어 왔다. 문서 옆에 Claude 사이드바가 붙어 글을 직접 고치고, 표를 만들고, 슬라이드를 짜준다. 채팅창에 머물던 AI가 **직원이 매일 쓰는 앱 안으로 이사**한 사건이다.

## 한줄 설명

Anthropic의 1st-party Google Workspace 통합 (2026-10-06 공개 베타) — Docs·Sheets·Slides 안에서 Claude가 파일을 직접 읽고 편집·생성하고, 반대로 Claude 채팅에서도 Google 파일을 다루는 양방향 에이전트 UI.

## 핵심 내용

- 출시: 2026-10-06, public beta, 모든 유료 Claude 플랜(Enterprise 포함). Google Workspace Marketplace에서 설치.
- 양방향: (1) Google 파일 안 Claude 사이드바 — 열린 문서·시트·덱을 읽고 선택 영역을 인식해 직접 수정. (2) Claude 채팅 안 Docs·Sheets·Slides 커넥터(beta) — 파일 링크를 붙여넣거나 새로 만들어 대화 옆에서 작업.
- Docs: 서식 유지 문장 수정·제목 리스타일, 대규모 재작성은 제안 카드(accept/dismiss).
- Sheets: 수식 작성, 피벗 테이블·네이티브 차트, 탭 추가, Python 데이터 정제·조인 후 결과 쓰기.
- Slides: 기존 레이아웃·테마로 슬라이드 생성, 겹침·슬라이드 밖 콘텐츠·가독성 자동 점검.
- 승인 모드: **"Ask before edits"**(기본, 변경 전 미리보기·승인) vs **"Accept all edits"**(자동 적용) — [[patterns/agent-authority-model]]의 권한 단계가 제품 UI로 구현된 사례.
- 접근 권한은 기존 Google 공유 권한을 그대로 따름. Compliance API·customer-managed encryption keys·OpenTelemetry audit export가 애드온에도 적용 — IT 관리자의 AI 워크플로 가시성 확보.
- 서드파티 애드온은 이전부터 있었으나 Anthropic 공식 1st-party는 처음. 기존 Drive 커넥터는 파일 접근만 됐지 live-edit는 안 됐음.

## 왜 중요한가

- "챗봇에서 직원이 쓰는 앱과 산출물을 직접 조작하는 에이전트로"의 이동 — 에이전트의 경쟁 무대가 모델 성능에서 **업무 앱 내장**으로 옮겨감.
- Gemini의 홈그라운드(Workspace)에 Claude가 정면 진입 — 엔터프라이즈 AI 어시스턴트 경쟁이 앱 내장형으로 심화.
- [[tools/claude-code]]가 개발자 터미널을 장악한다면, 이것은 지식 노동자의 문서·시트·덱을 장악하는 같은 전략의 사무직 버전.

## 관련 도구

- [[tools/claude-code]] — 같은 Claude 제품군, 개발자용 CLI 에이전트 vs 사무직용 Workspace 통합
- [[patterns/agent-authority-model]] — "Ask before edits" 승인 모드가 권한 5단계 프레임워크의 구현체
- [[concepts/agent-residence]] — 클라우드 상주(Underdog 온디바이스와 정반대 벡터, 같은 날 보도)

## 참고 소스

- [Anthropic, Google Workspace용 Claude 공개 베타 출시 (10/6)](raw/articles/2026-10-07-claude-google-workspace-beta.md)
