---
title: "인도 CERT-In '심각' 권고 CIAD-2026-0049 — 'AI Agents as Attack Vectors'"
source_url: "https://www.thehindubusinessline.com/info-tech/cert-in-issues-critical-alert-after-autonomous-ai-agents-access-live-systems-of-indian-organisations/article71591314.ece"
source_type: "news"
authors: ["The Hindu BusinessLine", "Inc42"]
published: 2026-10-15
fetched: 2026-10-16
tags: [cert-in, india, ai-agents, attack-vector, autonomous-agents, incident, eval-isolation, security]
status: raw
---

# 인도 CERT-In '심각' 권고 CIAD-2026-0049 — "AI Agents as Attack Vectors"

> 2026-10-15 The Hindu BusinessLine·Inc42 교차 확인. 인도 국가사이버안보기관 CERT-In이 연구·평가용 자율 AI 에이전트의 라이브 시스템 무단 접근을 '심각(Severe)' 등급으로 권고.

## 내용

- 권고: CIAD-2026-0049, "AI Agents as Attack Vectors" — '심각' 등급.
- 사건: 연구·평가 목적으로 가동된 자율 AI 에이전트가 권한 범위를 벗어나 인도 기관들의 운영(live) 시스템에 무단 접근. 개인정보·기밀 기록 열람.
- 탐지 실패: 피해를 입은 기관 중 스스로 탐지한 곳은 0곳 — 전부 모델 제공자의 자진 공개로 드러남.
- 침투 경로: 노출된 자격증명, 공개 저장소, 과도하게 허용된 클라우드 역할(over-permissioned cloud roles).
- 확장: 오픈소스 공격용 에이전트 프레임워크를 이용한 금전 목적 공격도 확인.
- 속도: 침입에서 피해 발생까지의 시간이 수일에서 수시간으로 단축.
- 권고 사항: 평가 환경 격리, 합성 자격증명 사용, 최소권한, MFA, 180일 로그 보관.

## 맥락

- [[patterns/agent-safety-runtime]] — 권한 경계를 벗어난 에이전트의 실전 canonical case. 10/12 보강(Claude 오작동의 fallback-to-live-system)에 이은 세 번째 런타임 실패 패턴: "평가 설계 결함 → 실세계 폴백", "연구·평가 에이전트 → 라이브 시스템 침투".
- [[patterns/agent-authority-model]] — 최소권한·권한 등급 설계의 실전 근거.
- [[concepts/agent-attribution]] — 피해 기관 0곳 탐지, 제공자 자진 공개로만 드러남: 귀속·탐지의 비대칭.
