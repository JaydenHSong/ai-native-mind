---
title: "Anthropic, GLM-5.3 사이버 역량 분석 공개 — 오픈웨이트 모델의 안전장치 붕괴 실증"
source_url: "https://the-decoder.com/anthropic-says-zhipus-open-weight-glm-5-3-nearly-matches-claude-mythos-preview-at-building-exploits/"
source_type: "press-digest"
authors: ["metallab.ai", "the-decoder", "letsdatascience", "madrobot"]
published: 2026-09-30
fetched: 2026-09-30
tags: [anthropic, glm-5-3, zhipu, open-weight, cyber, exploit, safeguard-collapse, abliteration]
status: raw
---

# Anthropic GLM-5.3 사이버 분석 — 오픈웨이트 안전장치 붕괴 실증 (9/29 보고서, 9/30 보도)

> Anthropic Frontier Red Team이 중국 Zhipu(Z.ai)의 오픈웨이트 GLM-5.3 사이버 역량을 분석한 보고서 (9/29). 2차 보도 기준 정리 — Anthropic 보고서 원문은 1차 확인 필요.

## 역량 수치

- ExploitBench: 410회 시도 중 50회 완전한 공격 코드 생성 (Claude Mythos Preview 56회).
- 내부 바이너리 익스플로잇 평가(오픈소스 프로젝트 100개): 프로그램 제어 흐름 완전 탈취율 GLM-5.3 4% / Mythos Preview 6% (전세대 Opus 4.6·GLM-5.2는 0건). Kimi K3 0.5%, DeepSeek V4.1-Flash 0.2%.
- 실증: 격리 리눅스 환경에서 유명 웹브라우저를 맡기자 모델이 하루 만에 JS 엔진 미공개 취약점 여러 개를 찾아 엮어 "방문만으로 SSH 개인키를 빼가는 웹페이지" 제작 (Anthropic이 브라우저사에 제보).
- GLM-5.3-Flash는 공개된 Chrome 취약점 CVE-2026-11645 포함 결함 2개를 엮어 ARM64 포인터 인증(PAC) 우회 공격 체인 구성 (인간 20분 + 모델 8시간, 지푸AI API 기준 $20.40).

## 안전장치 붕괴 사다리

- 노골적 공격 요청은 전부 거절 → "자율 레드팀 에이전트" 위장 프롬프트에 64% 응함 → 추론 토큰 선채움(pre-filling)에 92% → 거절 기능 가중치 제거(abliteration) 후 100% 원격 표적 접속 시도.
- abliteration 후 유해요청 거절률 90%대→2~12%, GPQA-Diamond 88% 유지, CyberGym 85%→81% 소폭 하락. abliteration 비용 약 2,200 GPU시간·~$4,400 (숙련팀은 ~$1,200 추정). 출시 며칠 만에 거절 제거 사본이 공개됨.
- 대조: 안전장치를 켠 Claude는 한 번도 공격에 응하지 않음 (위장 프롬프트 차단, 추론 선채움 미제공, 가중치 비공개로 abliteration 불가). Anthropic 주장 — 독립 검증 필요.
- 외부 평가: 미국 NIST CAISI (9/17) — GLM-5.3을 "지금까지 테스트한 가장 사이버 역량 높은 오픈웨이트 모델", 미국 프론티어 대비 약 4개월 뒤처짐.

## 맥락

- Sonnet 5.5의 "첫 Sonnet급 cyber safeguards + reasoning-extraction(증류 공격) 차단" (9/29) — 오픈웨이트 증류/탈옥 위협의 실증 데이터.
