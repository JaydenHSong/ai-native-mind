---
title: "Anthropic, Google Workspace용 Claude 공개 베타 출시 — Docs·Sheets·Slides 직접 편집 (10/6)"
source_url: "https://venturebeat.com/technology/you-can-now-open-claude-directly-in-google-docs-sheets-and-slides-and-vice-versa-open-and-edit-the-files-in-claude"
source_type: "news"
authors: ["venturebeat"]
published: 2026-10-06
fetched: 2026-10-07
tags: [anthropic, claude, google-workspace, enterprise, agent-ui, docs, sheets, slides]
status: raw
---

# Anthropic, Google Workspace용 Claude 공개 베타 출시 — Docs·Sheets·Slides 직접 편집 (10/6)

> Anthropic이 10/6 Claude for Google Workspace를 전 유료 플랜 대상 공개 베타로 출시. Google Docs·Sheets·Slides 안에 Claude 사이드바가 들어가 파일을 직접 읽고 고치고 만들며, 반대로 Claude 채팅에서도 Google 파일을 생성·편집하는 커넥터를 함께 공개. Gemini의 홈그라운드에 Claude가 1st-party로 진입.

## 내용

- 출시: 2026-10-06, public beta, 모든 유료 Claude 플랜(Enterprise 포함). Google Workspace Marketplace에서 설치.
- 양방향 통합: (1) Google 파일 안에서 Claude 사이드바 — 열린 문서·시트·덱을 읽고 선택 영역(텍스트/셀/슬라이드)을 인식해 직접 수정. (2) Claude 채팅 안에서 Google Docs·Sheets·Slides 커넥터(beta) — 파일 링크를 붙여넣거나 새로 만들어 대화 옆에서 작업.
- Docs: 서식 유지한 채 문장 수정·제목 리스타일, 대규모 재작성은 제안 카드(accept/dismiss) 형태. next steps를 표로 바꾸는 등 구조 변경도 가능.
- Sheets: 수식 작성, 피벗 테이블·네이티브 차트 생성, 탭 추가, Python으로 데이터 정제·조인 후 결과 쓰기. 분기별 budget-vs-actuals 리포트 예시(팀별 탭 + 요약 차트 + 초과 지출 식별).
- Slides: 기존 레이아웃·테마로 새 슬라이드 생성, 겹친 요소·슬라이드 밖 콘텐츠·가독성 문제 자동 점검.
- 승인 모드: "Ask before edits"(기본, 변경 전 미리보기·승인) vs "Accept all edits"(자동 적용). 접근 권한은 기존 Google 공유 권한을 그대로 따름.
- 엔터프라이즈 통제: Compliance API, customer-managed encryption keys, OpenTelemetry audit export가 애드온에도 그대로 적용. IT 관리자의 AI 워크플로 가시성 확보.
- 이전에도 서드파티 애드온은 있었으나, Anthropic 공식 1st-party 통합은 처음. 기존에는 Drive 커넥터로 파일 접근은 됐지만 Docs·Sheets·Slides를 대화 옆에서 live-edit하지는 못했음.
- 교차검증: VentureBeat, reworked.co, unite.ai(10/6 발표 명시), citybiz, 9to5google, iphoneincanada — 출시일·사양 일치.

## 맥락

- 챗봇에서 "직원이 이미 쓰는 앱과 산출물을 직접 조작하는 에이전트"로의 이동 (VentureBeat) — patterns/agent-authority-model의 승인 단계("Ask before edits")가 제품 UI로 구현된 사례.
- Google Workspace라는 Gemini의 홈그라운드에 Claude가 정면 진입 — 엔터프라이즈 AI 어시스턴트 경쟁이 앱 내장형으로 심화.
- tools/claude-code와 별개 제품 라인(Claude for Work 확장) — 위키 tools 카테고리 신규 항목 후보.
