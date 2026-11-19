---
title: "Google Gemini 4 Neon 출시 — Carbon급 성능, 2배 속도, $3/$15 (11-18)"
source_url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
source_type: "news"
authors: ["Google"]
published: 2026-11-18
fetched: 2026-11-19
tags: [google, gemini, gemini-4-neon, model-release]
status: raw
---

# Google Gemini 4 Neon 출시 — Carbon급 성능, 2배 속도, $3/$15 (11-18)

> Google이 11월 18일 Gemini 4 Neon을 출시했다. 약 7주 만의 네 번째 Gemini 4 모델(Argon·Carbon·Hydrogen에 이어)로, 빠른 Hydrogen과 무거운 Carbon 사이의 중위 모델이다. Carbon에서 파생됐고, Carbon급 지능을 약 2배 속도와 더 낮은 작업당 비용으로 제공한다는 게 Google의 주장이다.

## 내용

- **가격**: 입력 100만 토큰당 $3, 출력 $15, 캐시 입력 $0.15(95% 할인). 컨텍스트 100만 토큰, 텍스트·이미지·오디오·비디오·PDF 입력, 텍스트 전용 출력. 지식 기준 2026년 3월. 네 단계 사고 수준(low/medium/high/xhigh).
- **독립 지표(Artificial Analysis)**: Intelligence Index xhigh 기준 61점, 전체 3위(Claude Fable 5.2 65점, GPT-6.2 Astra 62점 다음). 기본 high 기준 60점으로 Carbon과 동점. Coding Agent Index 59점(Antigravity CLI 경유, Opus 5.5·Fable 5.2의 58점 앞섬). Vals Index 70.9%로 42개 모델 중 2위(Carbon 바로 앞).
- **속도·비용**: 출력 속도 약 110토큰/초로 Carbon(약 57)의 약 2배. 평균 작업 시간 약 21분 vs Carbon 약 36분. 기본 high 기준 작업당 비용이 Carbon보다 32% 낮다고 Google은 주장. 단 Carbon은 11월 30일까지 도입가 $2/$10, 12월 1일부터 $4/$20으로 오르므로, Neon이 Carbon보다 토큰 단가에서 25% 저렴해지는 건 12월 1일부터다.
- **Google 자체 주장 벤치마크**: Terminal-Bench 4.1 65.2%, FrontierCode 2.0 46.2%(기본 high), Terminal-Bench Science 70.5%, RiemannBench 84.0%, HLE-Diamond 71.3%에서 동급 최상. AutoBaxBench 하드 티어 76%(SOTA), WebExploitBench v1.2 51.26%(SOTA). 대부분 Google이 선택·제시한 수치라 독립 재현은 없음.
- **용도**: 복잡한 코딩·분석·기업 업무, 장시간 에이전트 워크플로우. Antigravity에서 빠른 고판단 오케스트레이터로 병렬 Hydrogen 서브에이전트를 지휘하는 구성도 제시. 롤아웃: Gemini API(AI Studio), Gemini for business, AI Pro·Ultra 구독자의 Antigravity·Gemini 앱.
- **주의**: 가격 우위는 Carbon의 12월 인상 이후에야 온전히 성립한다. 하네스에 따른 성능 편차가 크다(같은 모델이 표준 하네스 12.8% vs Antigravity 39.0% — Google이 인용한 코딩 테스트 기준).

## 맥락

- [[concepts/gemini-4-carbon-testing]] — Carbon과 동점(60점)이면서 2배 빠른 중위 모델의 등장, Gemini 4 가격 전쟁의 다음 단계
- [[concepts/gemini-4-argon]] — Argon이 맡았던 코드·분석 포지션을 Neon이 이어받음
- [[concepts/google-antigravity-teamwork]] — Antigravity에서 Neon이 오케스트레이터, Hydrogen이 서브에이전트로 짝지어지는 구조