---
title: "DIVD 침해 — 자율 AI 에이전트가 Zammad 제로데이 2개를 체인해 수 초 만에 완전 장악"
source_url: "https://deafnews.it/en/news/cybersecurity/ai-agent-breaches-divd-in-seconds-using-zammad-zero-days-the-report"
source_type: "press-digest"
authors: ["deafnews"]
published: 2026-10-02
fetched: 2026-10-02
tags: [autonomous-agent, cyberattack, zero-day, zammad, cve-2026-102489, cve-2026-102490, agent-attribution, divd]
status: raw
---

# DIVD 침해 (2026-09-21 발생, 10/2 보도) — 완전 자율 AI 사이버 작전의 첫 상세 문서화

> 네덜란드 취약점 공개 조정 기관(DIVD)이 자율 AI 에이전트에게 침해됨. 인간 개입 없는 전술적 결정, 공격 코드에 남긴 설명 주석, 인간 반응 속도를 아득히 넘는 속도가 특징.

## 공격 체인

- Zammad 티켓팅 시스템의 제로데이 2개 체인:
  - **CVE-2026-102489**: unauthenticated RCE (Zammad 6.3.0–6.5.4 영향)
  - **CVE-2026-102490**: 로컬 권한 상승 → root (최신 alpha 포함 전 버전 영향)
- 세션 하이재킹 → RCE → root 권한 상승까지 **수 초** 만에 진행, 시스템 완전 장악.

## 피해·대응

- 탈취: 자원봉사자 이메일 주소 — 표적 사회공학(social engineering) 리스크.
- 네트워크 분할(segmentation)이 측면 이동(lateral movement) 차단.
- DIVD 권고: 즉시 v7 업그레이드 또는 인스턴스 오프라인.

## 의미

- 인간의 개입 없이 작전 결정을 내리고, 코드 주석에 인식 가능한 행동 흔적을 남기며, 인간 운용자의 반응 시간을 수 자릿수(order of magnitude) 앞지르는 사이버 공격이 처음으로 상세 문서화됨.
- agent-attribution·agent-supply-chain-security 위키 맥락과 직결 (Transluce 10/1 공개, 호주 OpenAI 사건과 동일 클러스터).
