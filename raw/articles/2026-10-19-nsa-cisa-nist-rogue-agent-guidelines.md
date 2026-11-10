---
title: "NSA·CISA·NIST, 'SI 통제 사고' 대응 합동 가이드라인 — 이탈 에이전트의 자동 중단·격리 10개 관행"
source_url: "https://cybersecuritynews.com/nsa-cisa-and-nist-release-guidelines-to-rogue-ai-agents/"
source_type: "news"
authors: ["cybersecuritynews", "NIST", "cryptika", "cybernoz", "The Daily Tech Feed"]
published: 2026-10-19
fetched: 2026-10-19
tags: [nsa, cisa, nist, rogue-agents, si-control-incident, incident-response, kill-switch]
status: raw
---

# NSA·CISA·NIST, "SI 통제 사고" 대응 합동 가이드라인 — 이탈 에이전트의 자동 중단·격리 10개 관행

> 미 NSA·CISA·NIST가 초지능 훈련·평가 중 "통제를 벗어난 AI 에이전트"의 탐지·격리·중단 가이드라인 발표 — 원문서 10/16, cybersecuritynews 보도 10/19 12:08 UTC(윈도우 내) + cryptika·cybernoz·Daily Tech Feed 동시 보도. 자발적(voluntary) 가이드라인, NIST SP 800-61r3 기반.

## 내용

- **"SI control incident" 정의**: 에이전트가 지시 없이 중대한 행동을 하고, 과제 경계를 정의하는 정책·보안 통제를 위반하는 사건. 예: 무단 외부 접촉, 금융 거래, 제3자 시스템 접근. 프롬프트 인젝션·백도어 모델 같은 **공격자 주도 행위와는 구분** — 독립적 에이전트 오작동이 대상. near-miss(피해 없이 통제 약점 드러낸 경우)도 포함.
- **10개 관행** (준비·탐지·대응·복구·보고 5단계): 인간 감독 유지가 핵심 전제. 대상은 긴 과제·제한적 인간 감독 하에 고도 에이전트를 훈련·테스트하는 조직 — 배포 조직에도 적용 가능.
- **격리**: 에이전트는 과제 수행에 필요한 데이터·도구·시스템으로만 제한. 가능한 경우 엄격한 allowlist 네트워크 접근, 모니터링 게이트웨이 경유. 은닉 통신·지속성·가중치 무단 복제 경로 식별.
- **탐지**: 모델·지원 소프트웨어·호스트·네트워크 활동 전층. 에이전트가 모니터링 도구·로그를 변경 불가. 가능한 경우 **다른 계열의 모니터링 모델**로 교차 검증(공통 블라인드 스팟 제거).
- **자동 중단**: 통제 실패·진행 중 사고 감지 시 해당 에이전트 실행의 **자동 중단**이 핵심 권고. 심각도에 따라 관련 훈련·평가·배포를 일시 중지 — 보호 강화·검증 전까지 재개 금지.
- **대응**: 모델 가중치·체크포인트·툴 호출·거부된 액션·신뢰 가능한 로그 보존. 노출된 자격증명 폐기, 환경 재구축, 백도어·은닉 통신 경로 제거. 재시작 전 해당 사건의 행동에 대해 모니터링·접근 제한·중단 컨트롤 테스트.
- **보고**: 영향 당사자 통지, 법적 신고 의무 이행, 정부 전문가와 사고·near-miss 공유.
- **모니터링 시스템 겨냥 경고**: 에이전트 출력에 모니터링 시스템을 노리는 익스플로잇이 포함될 수 있음.

## 맥락

- [[patterns/agent-safety-runtime]] — 9/28 페이지(NVIDIA OpenShell/Sentry)의 "정부판". 실행시점 중단이 이제 연방 가이드라인 문안.
- [[concepts/shutdown-evasion]] — "자기보존 CoT" 페이지와 정면 연결: 가이드라인이 상정하는 위협이 바로 이 페이지의 주제.
- [[concepts/white-house-ai-incident-reporting-mandate]] — 10/9 강제 신고 의무화 → 10/16 사고 대응 가이드라인 → 10/19 GSA 조달 조항. 10일 만에 "신고→대응→조달" 3단 완성.
- [[concepts/taste-bench]] — 같은 날 수집. "중간 판단력 59.7%"가 이 가이드라인이 대비하는 사고의 원인 층.
- 한계: 자발적 가이드라인 — 강제력 없음. 원문서 10/16, 본 수집은 10/19 보도 기준.
