---
title: "영국 사이버보안·복원력법안 — 'AI 에이전트 통제 상실' 조사·집행 조항 신설"
source_url: "https://www.telecompaper.com/news/uk-govt-moves-to-enhance-protections-against-ai-cyber-threats--1586270"
source_type: "news"
authors: ["Yeandel", "Telecompaper", "MLex", "The Register"]
published: 2026-10-20
fetched: 2026-10-20
tags: [uk, csrb, ai-agent, loss-of-control, regulation, enforcement, legislation]
status: raw
---

# 영국 사이버보안·복원력법안 — "AI 에이전트 통제 상실" 조사·집행 조항 신설

> 영국 Cyber Security and Resilience Bill (CSRB)에 10/19 101개 정부 수정안과 함께 **"Functions of the Secretary of State: loss of control of artificial intelligence agent"** 신규 조항이 상정됨. 침해가 **"AI 에이전트에 대한 감독·통제의 상실에 기인하거나 그럴 위험이 있는"** 경우 국무장관이 조사·집행 권한을 갖는다 — **사업장 출입·검사·수색, 문서 압수, 강제 테스트·면담, 역외(영국 밖 문서·행위) 요구, 과징금**. 'AI 에이전트'의 정의는 규정에 위임 (확정된 법적 정의 없음 — DCMS 메모). 10/26 report stage 표결. (Yeandel·Telecompaper·MLex·The Register 교차)

## 내용

- **조항**: 10/19 상정된 101개 정부 수정안 중 신규 조항 "Functions of the Secretary of State: loss of control of artificial intelligence agent". Clause 29(1) 하위 규정에 따라 국무장관이 조사·집행 기능을 수행.
- **발동 조건**: 침해(compromise)가 "AI 에이전트에 대한 감독(oversight)·통제(control)의 상실에 기인하거나 그럴 위험이 있는" 경우 — 에이전트의 **행위(통제 상실)를 직접 겨냥**한 최초의 법정 집행 체계.
- **권한**: 사업장 출입·검사·수색, 문서 압수, 강제 테스트·면담, **역외 요구** (영국 밖의 문서·행위에도), 과징금.
- **정의의 위임**: "'AI agent'는 국무장관이 정하는 규정이 부여하는 의미를 갖는다" — 확정된 법적 정의는 없음 (DCMS Supplementary Delegated Powers Memorandum, 10/19). 정의 규정은 affirmative-resolution 절차 (의회가 표결하되 수정 불가).
- **입장 반전**: 9월에는 AI 벤더를 명시적으로 범위 밖으로 뒀으나, 이번엔 에이전트 행위 기반 집행으로 전환.
- **일정·맥락**: report stage는 10/26. 동료의원 수정안 (Baroness Harding·Clement-Jones·Kidron)은 AI Security Institute의 법정 역할을 제안 — 정부안과 경쟁 중.
- **관련 클러스터**: 같은 날 The Register — 영국 금융 감독당국이 AI 장애·아차사고(close-call) 보고를 요구 (동일 정책 클러스터).

## 맥락

- [[patterns/agent-safety-runtime]] — 9/28부터 위키가 추적한 "런타임 강제"의 입법판. 10/19 NSA·CISA·NIST 자발적 가이드라인(강제력 없음)의 정반대 — 이번엔 출입·수색·과징금의 실력 행사.
- [[concepts/white-house-ai-incident-reporting-mandate]] — 10/10 백악관 사고 강제 신고와 짝을 이루는 영국판 — "보고 의무"(미국) 다음은 "통제 상실 시 집행"(영국). 대서양 양쪽의 규제 수렴.
- [[concepts/shutdown-evasion]] — 법이 "통제 상실"을 발동 조건으로 삼았다는 건, 에이전트 빌더에게 **킬 스위치·감독 로그가 법적 방어선**이 된다는 뜻. 하네스에 중단 훅이 없으면 집행 대상이 될 수 있는 구조.
- [[concepts/uk-ico-ai-privacy-commitments]] — 10/10 ICO 개인정보 합의(다음 타깃은 에이전틱 AI)의 후속 — 영국의 에이전트 규제가 개인정보→안보·복원력으로 확장되는 흐름.
