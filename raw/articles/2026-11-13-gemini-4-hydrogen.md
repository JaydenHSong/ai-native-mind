---
title: "Gemini 4 Hydrogen 출시 — 코딩 에이전트용 실행형 모델, 1M 컨텍스트·$1.50/$7.50 (11-12)"
source_url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
source_type: "news"
authors: ["Google"]
published: 2026-11-12
fetched: 2026-11-13
tags: [google, gemini-4, hydrogen, coding-agent, llm]
status: raw
---

# Gemini 4 Hydrogen 출시 — 코딩 에이전트용 실행형 모델, 1M 컨텍스트·$1.50/$7.50 (11-12)

> Google이 11-12 Gemini 4 Hydrogen을 출시했다. Gemini 4 패밀리의 세 번째 멤버로, Argon(09-30)·Carbon(10-28) 아래에서 빠르고 저렴한 일상 코딩·에이전트 작업을 맡는 실행형 모델이다. 1M 토큰 컨텍스트, 사고(thinking) 4단계, 입·출력 토큰당 $1.50/$7.50의 균일 요금제가 특징이다.

## 내용

- **포지셔닝**: Argon·Carbon이 프론티어급이라면 Hydrogen은 속도·비용 최적화형. AI Studio, Gemini API, Gemini 앱, Google Search(AI Mode·AI Overviews), Gemini for business, Antigravity에 당일 전역 출시됐다.
- **성능**: Artificial Analysis Intelligence Index에서 기본 high 사고 기준 51점으로 Argon(50점)을 앞섰고, 새 xhigh 사고 단계에서는 54점. Gemini 3.8 Flash 대비 작업을 2.5배 빠르게 끝내고 Terminal-Bench 4.1은 57% 대 18.2%로 3배 이상 높다.
- **가격·컨텍스트**: 1M 토큰 컨텍스트 전체 구간에 균일 요금 — 입력 $1.50/출력 $7.50(백만 토큰당). 컨텍스트 길이에 따라 가격이 오르는 계단식 요금이 아니다.
- **사고 단계**: low / medium / high(기본) / xhigh(신규) 4단계. xhigh는 더 깊은 추론이 필요한 작업용이다.
- **Orchestrator**: Antigravity에 함께 출시된 오케스트레이터가 한 세션 안에서 Carbon과 Hydrogen을 동적으로 전환한다. Terminal-Bench 4.0에서 Carbon에 근접한 성공률에 할당량 24% 절감, 완료 속도 19% 향상을 기록했다.
- **안전 주장**: 과도한 개입(overreach) 81% 감소, 정직도 96.7%, 사고 과정(chain-of-thought) 가독성 99.9%를 Google이 제시했다. 독립 검증 수치는 아니다.
- **정정 이력**: 어제(11-12) 데일리에서는 'Gemini 4 Hydrogen'을 미확인 루머로 제외한 바 있다. 오늘은 Google 공식 블로그 발표로 확정된 출시라 범위가 다르다 — 루머 단계와 공식 출시를 구분해 기록한다.

## 맥락

- [[concepts/gemini-4-argon]] — Gemini 4 Argon, 자체 벤치 vs 독립 지수 괴리 + gated release (2026-10-01)
- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' 내부 테스트, 코딩 성능 Opus 5.5급 평가 (2026-10-10)
- [[concepts/google-gemini-decisions-api]] — Gemini Decisions API, 결정 전용 비생성 엔진 (2026-11-12)
