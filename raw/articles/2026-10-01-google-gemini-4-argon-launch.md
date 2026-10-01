---
title: "Google, Gemini 4 Argon 발표 — 벤치마크 선두 탈환 주장, 그러나 제한 공개"
source_url: "https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release"
source_type: "press-digest"
authors: ["venturebeat", "reuters", "vandatateam", "gadgets360"]
published: 2026-09-30
fetched: 2026-10-01
tags: [google, gemini-4, argon, frontier-model, gated-release, benchmark, pricing]
status: raw
---

# Google Gemini 4 Argon 발표 (9/30) — 프론티어 복귀전, 그러나 제한 공개

> Google이 9/30 Gemini 4 세대 최상위 모델 "Argon" 발표 (Reuters/VentureBeat). 수개월 지연 끝의 출시 — Gemini 3.5 Pro는 출시 계획 취소 (Pichai가 6월 출시를 예고했던 모델). DeepMind 대개편 병행: 창업자 Demis Hassabis가 물러나고 Gemini 리더 다수 이탈 (Reuters).

## 성능 — 자체 발표 vs 독립 지표의 괴리

- Google 자체 발표: DeepSWE v1.1 77.9%, CWE-bench v1 68% (취약점 수정 공동 1위), AutomationBench 51.3%, LVBench 91.7%. 자체 차트 18개 중 12개에서 GPT-6 Astra·Claude Opus 5.5 상회.
- 독립 지표는 혼합: Artificial Analysis 지수 53 (Astra·Fable 5.1과 동점, Opus 5.5 58·Sonnet 5.5 56에 뒤짐). 두드러진 지표는 환각률 15% (Astra 51% 대비) — 사실 신뢰성 축.
- Bloomberg: 내부 직원 일부는 실제 코딩 성능이 벤치마크에 못 미친다고 평가 (Google은 부인).

## 스펙·내부 활용

- 출력 한도 64K → 1M 토큰 (단일 응답).
- 내부 활용 주장: C/C++→Rust 마이그레이션, libgav1 Rust 디코더 2.7배 고속화, Wiz "Scan for Good"로 병원 소프트웨어 치명적 취약점 발견.

## 가격 — 도입가 패턴

- 도입가 $2/$10 per 1M (cached input 95% 할인) → 이후 $4/$20으로 인상 예정 (Opus 5.5와 동률, Astra $10/$50 하회). 도입 기간 길이는 미공개 — 비용 우위는 한시적.
- $2/$10 티어가 GPT-6.1 Sol·Sonnet 5.5에 이어 업계 표준 도입가로 굳어지는 패턴.

## 접근 — gated-access

- 일반 공개 아님. Fairwind Program의 신뢰받는 사이버 방어팀 우선 + 미 정부 사전공개 모델 접근(자발적) 절차 참여 중. 다음은 유료 API 고객·Google AI Ultra 구독자.
- 사이버 방어팀에게는 통상 사이버 가드레일을 푼 상태로 제공 (gated-access 패턴).
