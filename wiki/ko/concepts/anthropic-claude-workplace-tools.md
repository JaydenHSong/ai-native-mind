---
title: "Anthropic, Claude 오피스 번들 출시 — Meetings·Sheets·Whiteboards·Data (11-10)"
category: concepts
tags: [anthropic, claude, workplace, meetings, sheets, whiteboards, data]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-anthropic-claude-workplace-tools.md"
related:
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
  - "[[concepts/anthropic-claude-enterprise-security-hooks]]"
  - "[[concepts/openai-businesses-in-chatgpt]]"
status: draft
confidence: high
---

# Anthropic, Claude 오피스 번들 출시 — Meetings·Sheets·Whiteboards·Data (11-10)

## 쉽게 읽기

**비유**: 지금까지 Claude는 '물어보면 답해 주는 똑똑한 동료'였다. 이제 그 동료가 회의실에 직접 들어와서 칠판에 그림을 그리고, 스프레드시트를 같이 고치고, 숫자 대시보드까지 만들어 준다. 일하는 '장소' 자체가 Claude 안으로 들어온 셈이다.

| 용어 | 풀이 |
|------|------|
| **Claude Meetings** | Claude가 화상회의에 참가자로 합류해 회의 중 일을 시작하는 기능 |
| **Claude Sheets** | Claude가 함께 편집하는 Anthropic 호스팅 스프레드시트 |
| **Claude Whiteboards** | Claude와 함께 브레인스토밍하는 공유 보드 |
| **Claude Data** | 구 Dashboards — 데이터 소스에 연결해 대시보드·데이터 스토리를 만드는 기능 |

## 한줄 정의

2026-11-10 — Anthropic이 Claude에 직장용 도구 번들을 내놨다. Claude Meetings(베타, Team·Enterprise, Google Meet), Claude Sheets(베타), Claude Whiteboards(베타), Claude Data(GA, 구 Dashboards)다. 채팅·코딩을 넘어 회의·스프레드시트·브레인스토밍·데이터 분석까지 Claude 안에서 처리하겠다는 것으로, Microsoft 365·Google Workspace·ChatGPT 직장 스택에 대한 직접 도전이다.

## 핵심 내용

- **Claude Meetings**: Claude가 Google Meet 통화에 눈에 보이는 참가자로 합류해 대화를 따라가며 논의 중인 계획을 초안으로 만들고, 화이트보드에 타임라인을 그리며, 회의 채팅에서 질문에 답하고, 연결된 업무 앱에서 수치를 가져온다. 회의 뒤 노트·계획·액션 아이템을 만든다. 베타는 Team·Enterprise 한정, 출시 시 Google Meet만 지원한다.
- **Claude Sheets**: Anthropic 호스팅 스프레드시트로, Claude가 트래커·예산을 만들고 수식을 쓰며 셀을 함께 편집한다. 베타, 유료 플랜 대상, 웹·데스크톱·모바일. Anthropic 스스로 "simple spreadsheet functionality"라고 밝혀 아직 기본 기능 수준이다.
- **Claude Whiteboards**: 팀이 Claude와 실시간으로 브레인스토밍하는 공유 보드로, 아이디어를 타임라인·문서·슬라이드 덱으로 바꾼다. 베타, 유료 플랜 대상.
- **Claude Data**: 구 Claude Dashboards가 GA로 전환·개명했다. Snowflake·Salesforce 같은 데이터 소스에 연결해 대시보드·데이터 스토리·나레이션 영상을 만든다. 인증 쿼리·라이브 공유 기능이 추가됐다. Enterprise에서는 11-19부터 기본 켜짐으로 전환된다.
- **접근 조건**: Sheets·Whiteboards·Data는 모든 유료 플랜, Team에서는 기본 켜짐, Enterprise에서는 Sheets·Whiteboards가 기본 꺼짐이다. Meetings는 외부 게스트가 있으면 관리자 허용 없이는 참여 불가하고, 미승인 게스트 합류 시 Claude가 나간다. 무료 플랜은 대상이 아니다.
- **출시 맥락**: 발표는 IPO 로드쇼 시작과 같은 주에 나왔다. 같은 날 OpenAI도 Businesses in ChatGPT를 열며, 양사가 같은 날 '직장·비즈니스 표면' 경쟁을 벌였다.

## 왜 중요한가 (1인 개발자 관점)

1. **경쟁 축이 모델에서 업무 표면으로 이동했다**: 회의·문서·데이터라는 '일하는 곳'을 누가 장악하느냐가 다음 싸움이다. 모델 성능만 비교하던 1인 개발자에게는, 어느 도구에 내 업무 맥락이 쌓이는지가 선택 기준이 된다.
2. **회의에 들어가는 에이전트는 노트테이커가 아니다**: 회의 중 계획을 초안으로 만들고 수치를 가져오는 에이전트는 '기록'에서 '실행'으로 넘어간다. 회의 데이터 통제·보존 정책이 곧 실무 리스크가 된다.
3. **Sheets는 아직 기본 수준 — 기대치 조절이 필요하다**: Anthropic 스스로 기능이 단순하다고 밝혔다. 기존 스프레드시트를 대체하는 도구가 아니라, Claude와 함께 '새로 만드는' 용도로 보는 게 맞다.

## 한계 (명시)

- Meetings의 실제 롤아웃 상태가 보도와 공식 글 사이에서 엇갈린다. Anthropic 공식 글은 "coming soon"으로 표기하고 TechCrunch는 Team·Enterprise 베타로 보도한다. 전 계정에 켜진 상태가 아니다.
- Sheets 기능이 기본 수준이라는 점, Meetings의 데이터 통제·보존 정책, 추가 회의 서비스 지원 일정은 아직 미공개다.
- 유료 플랜 한정이라 Free 사용자는 대상이 아니다.

## 관련 개념

- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2 출시 (2026-11-09)
- [[concepts/anthropic-claude-enterprise-security-hooks]] — Claude Enterprise 추론 훅 GA·보안 센터 베타 (2026-11-05)
- [[concepts/anthropic-claude-personal-finance]] — Claude Personal Finance 베타, Plaid 경유 읽기 전용 은행 연결 (2026-11-05)
- [[concepts/openai-businesses-in-chatgpt]] — OpenAI Businesses in ChatGPT 베타, Business Hub·Business Agents (2026-11-10)

## 참고 소스

- [Anthropic Claude 오피스 번들 출시 원본](raw/articles/2026-11-11-anthropic-claude-workplace-tools.md)