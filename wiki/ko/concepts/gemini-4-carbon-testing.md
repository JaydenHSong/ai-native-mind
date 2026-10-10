---
title: "Gemini 4 'Carbon' 내부 테스트 — Opus 5.5급 코딩 평가"
category: concepts
tags: [google, gemini-4, carbon, coding-model, opus-5-5, internal-testing, jetski, checkpoint]
created: 2026-10-10
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-10-gemini-4-carbon-internal-testing.md"
related:
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Gemini 4 'Carbon' 내부 테스트 — Opus 5.5급 코딩 평가

## 한줄 정의

Google이 내부 코딩 플랫폼 'Jetski'에서 테스트 중인 Gemini 4 계열 내부 변형 'Carbon' — 직원 평가로 코딩 성능이 Anthropic Opus 5.5급 (Business Insider 10/9 보도, Google 공식 논평 거부).

## 핵심 내용

- 테스트: 구글 내부 코딩 플랫폼 Jetski에서 Gemini 4 계열 내부 변형 'Carbon' 테스트 중 (Business Insider, 10/9).
- 직원 평가: 코딩 성능이 Anthropic Opus 5.5와 "같은 느낌(feels like Opus 5.5)" — 다른 직원은 "Carbon is really good". 내부에서 Opus 5.5급 코딩 능력을 인정한 셈.
- 체크포인트 3종: 내부 문서상 **Argon·Barium·Carbon 병행 테스트** 중. Barium-B가 공개 예정인 Argon 버전으로 선정된 것으로 알려짐.
- Carbon이 별도 모델인지 Argon의 업데이트인지는 미확정. Google은 공식 논평 거부.
- 근거의 한계: Business Insider 단일 원보도 기반 (the-decoder·storyboard18·aistockwire·testingcatalog가 인용) — 참고 성격.

## 왜 중요한가

- **Gemini 4 패밀리 전략의 실체**: Argon(공개 플래그십) 뒤에 Barium(공개 예정 버전)·Carbon(내부 코딩 특화)이 병행 — "하나의 모델"이 아니라 체크포인트 포트폴리오로 운용.
- **벤치마크 괴리의 내부 버전**: [[concepts/gemini-4-argon]]에서 자체 벤치(12/18 선두) vs 독립 지수(AA 53)의 괴리를 봤다. Carbon의 "Opus 5.5급"은 직원 체감 평가 — 외부 독립 검증 전까지는 주장 단계.
- **가격전이 아닌 성능전**: 같은 주 Anthropic이 Haiku 5.5로 90% 가격 인하 공세를 펴는 동안, Google은 코딩 성능으로 맞불 — 프론티어 경쟁의 두 전선.

## 관련 개념

- [[concepts/gemini-4-argon]] — 같은 Gemini 4 패밀리. Argon은 공개 플래그십, Carbon은 내부 코딩 특화 변형(으로 추정).
- [[concepts/claude-haiku-5-5]] — Anthropic의 가격 인하 공세. Google의 성능 맞불과 대비.
- [[comparisons/frontier-lab-economics]] — 가격 결정력 vs 성능 경쟁의 프론티어 랩 경제학.

## 참고 소스

- [구글, 내부 코딩 플랫폼에 Gemini 4 'Carbon' 테스트 — Opus 5.5급 평가 (Business Insider 원보도, 10/9)](raw/articles/2026-10-10-gemini-4-carbon-internal-testing.md)
