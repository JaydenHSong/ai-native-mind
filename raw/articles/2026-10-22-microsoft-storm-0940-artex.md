---
title: "Microsoft 공개 — 중국 연계 Storm-0940의 AI 에이전트 주도 대규모 공격"
source_url: "https://www.microsoft.com/en-us/security/blog/2026/10/21/storm-0940-agent-led-attacks/"
source_type: "news"
authors: ["Microsoft Security Blog", "The Hacker News", "aiweekly.co", "digit.in", "cryptobriefing.com"]
published: 2026-10-21
fetched: 2026-10-22
tags: [storm-0940, microsoft, agent-led-attack, artex, connectwise, supply-chain, oauth, china]
status: raw
---

# Microsoft 공개 — 중국 연계 Storm-0940의 AI 에이전트 주도 대규모 공격

> 2026-10-21 Microsoft는 중국 연계 행위자 Storm-0940이 에이전트 AI 침투테스트 프레임워크 ARTEX를 이용해 수백 개 조직을 대상으로 한 대규모 공급망 공격을 자동화했다고 공개. 최근 공개된 ConnectWise Cloud Backup 침해를 이 그룹 소행으로 지목. 탈취한 OAuth 앱 자격증명을 악용해 하류 Microsoft 365 환경에 사용자 로그인 없이 인증. 일부 사례에서는 초기 표적 선정부터 권한 있는 클라우드 접근까지 3시간 미만. 10-10~10-14에는 8개 조직의 327개 계정을 대상으로 15만 건이 넘는 로그인 실패 발생 — 피크 시 분당 2,900건의 인증 시도. ARTEX는 2026년 7월 합법적 보안 테스트용으로 공개됐으나 남용 신고 후 클로즈드 소스로 전환된 바 있음. (Microsoft Security Blog 원본·The Hacker News·aiweekly.co·digit.in·cryptobriefing.com 교차)

## 내용

- **행위자**: Storm-0940 (중국 연계) — 에이전트 AI 침투테스트 프레임워크 ARTEX로 수백 개 조직 대상 공격 자동화.
- **기법**: 탈취한 OAuth 앱 자격증명으로 하류 M365 환경에 사용자 로그인 없이 인증 — 자격증명 기반 공급망 공격.
- **속도**: 표적 선정 → 권한 있는 클라우드 접근까지 3시간 미만 (일부 사례).
- **규모** (10-10~10-14): 8개 조직 327개 계정에 15만+ 로그인 실패, 피크 분당 2,900건 인증 시도.
- **이중 용도**: ARTEX는 2026-07 합법 보안 테스트용 공개 → 남용 신고 후 클로즈드 소스 전환. 공개 도구에서 공격 도구로.
- **귀속**: 최근 공개된 ConnectWise Cloud Backup 침해를 Storm-0940 소행으로 지목.

## 맥락

- [[concepts/cairn-norforge-ai-agent-hacking-spree]] — Cairn 해킹 캠페인, 오픈소스 에이전트 플랫폼으로 100+ 기업 침해 — 건당 $50 (2026-10-20) — "에이전트 주도 실전 공격" 트윈 케이스 (하루 차이로 2건).
- [[concepts/agent-attribution]] — 에이전트 보안 사건의 귀속 (행위자·책임·공개 시점) — 벤더 (Microsoft) 공개 리포트의 귀속 프레임.
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 — OAuth 앱 자격증명 남용이 신뢰 모델의 붕괴 지점.
