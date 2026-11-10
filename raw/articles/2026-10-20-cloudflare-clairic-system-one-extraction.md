---
title: "Cloudflare Clairic — 비생성형 System One 정보추출 모델 프리뷰, 출력 토큰 0개"
source_url: "https://www.unite.ai/cloudflare-releases-clairic-its-first-system-one-extraction-model/"
source_type: "news"
authors: ["Cloudflare", "Unite.AI", "BigGo Finance", "dev.to", "ppc.land"]
published: 2026-10-19
fetched: 2026-10-20
tags: [cloudflare, clairic, system-one, extraction, non-generative, agent-cost, workers-ai]
status: raw
---

# Cloudflare Clairic — 비생성형 System One 정보추출 모델 프리뷰, 출력 토큰 0개

> Cloudflare가 10/19 첫 System One 추출 모델 Clairic을 Workers AI 프리뷰로 공개 — 단일 forward pass, 출력 토큰 없이 입력만 과금($0.10/M). 65,536 토큰 컨텍스트, typed fields API (extract/compute/estimate/forecast) + 비전. 자체 테스트에서 Clairic+Clef+GLM-5.3 파이프라인이 49% 저렴·3.2배 빠름. (Cloudflare 공식 블로그·Unite.AI·ppc.land·dev.to 교차)

## 내용

- **공개**: Workers AI 프리뷰 `@cf/cloudflare/clairic` — env.AI.run() 또는 REST API. 오픈 웨이트는 "soon" (날짜 없음).
- **아키텍처**: 비생성형(non-generative) — 단일 forward pass, **출력 토큰 0개**, 입력 전용 과금 **$0.10/M 토큰**.
- **스펙**: 65,536 토큰 컨텍스트. typed fields API — extract/compute/estimate/forecast. 비전 (최대 4개 임베드 이미지).
- **자체 테스트 수치**: Clairic + Clef + GLM-5.3 파이프라인이 GLM-5.3 단독 대비 **49% 저렴, 3.2× 빠름** (19.3초 vs 61.7초). 손해사정(damage-claim) 추출은 0.68초 vs 38초. TSA 스크리닝 예측: 평균 오차 3.3%, 21개 중 17개가 80% 예측 구간 내.
- **계보**: TypeSafe의 Jev (9월 결정 모델) → Cloudflare 자체 Clef (10/1) → Clairic — System One이 **결정(decision)에서 추출/예측(extraction/forecasting)으로 확장**.
- **인정된 약점**: 회사 스스로 다단계 산술·캘리브레이션·예측이 약하다고 밝힘.

## 맥락

- [[concepts/semantic-decision-engine]] — Jev (9/27 위키)에 이은 System One 계열 3호기 — "선택지가 고정된 비생성 엔진" 패러다임이 추출로 확장. 1인 개발자의 에이전트 파이프라인 설계 패턴으로 정제 가치 높음.
- [[concepts/llm-evaluation]] — 49%/3.2×/0.68s vs 38s 수치는 전부 Cloudflare 자체 측정 — "주장/실측" 이중 표기 필요. 독립 검증 전까지 confidence medium.
- [[comparisons/frontier-lab-economics]] — "출력 토큰 0개 = 입력 전용 과금"은 에이전트 파이프라인의 비용 구조를 바꾸는 과금 모델 혁신 — 추출 단계를 특화 모델로 분리하는 아키텍처 흐름의 경제적 근거.
