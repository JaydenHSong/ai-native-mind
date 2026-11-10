---
title: "Cloudflare Clairic — 출력 토큰 없이 정보를 추출하는 System One 모델"
category: concepts
tags: [cloudflare, clairic, system-one, extraction, non-generative, agent-cost, workers-ai, semantic-decision-engine]
created: 2026-10-20
updated: 2026-10-20
sources:
  - "raw/articles/2026-10-20-cloudflare-clairic-system-one-extraction.md"
related:
  - "[[concepts/semantic-decision-engine]]"
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Cloudflare Clairic — 출력 토큰 없이 정보를 추출하는 System One 모델

## 쉽게 읽기

**비유**: 문서에서 "계약 금액"을 뽑아내는 데 거대 LLM을 쓰는 건, 계산기에 "2+2"를 물어보려고 박사님을 부르는 격이다. Clairic은 "추출 전용 계산기" — 글을 생성하지 않고, 한 번의 연산으로 답만 뽑아낸다. 출력 토큰이 0개라 과금도 입력에만 붙는다.

| 용어 | 풀이 |
|------|------|
| **비생성형 (non-generative)** | 텍스트를 한 토큰씩 생성하지 않고, 한 번의 forward pass로 답을 직접 뽑아내는 방식 |
| **System One** | Cloudflare의 비생성형 특화 모델 계열 — 결정(Jev·Clef)에 이어 추출(Clairic)로 확장 중 |
| **typed fields API** | extract/compute/estimate/forecast처럼 "무엇을 할지"를 타입으로 지정하는 API — 프롬프트 대신 구조로 지시 |

## 한줄 정의

Cloudflare가 2026-10-19 Workers AI 프리뷰로 공개한 비생성형 정보추출 모델 — 단일 forward pass, 출력 토큰 0개, 입력 전용 과금 $0.10/M. System One 계열의 결정→추출/예측 확장.

## 핵심 내용

- **공개**: Workers AI 프리뷰 `@cf/cloudflare/clairic` — env.AI.run() 또는 REST API. 오픈 웨이트는 "soon" (날짜 없음).
- **아키텍처**: 비생성형 — 단일 forward pass, **출력 토큰 0개**, 입력 전용 과금 **$0.10/M 토큰**.
- **스펙**: 65,536 토큰 컨텍스트. typed fields API — extract/compute/estimate/forecast. 비전 (최대 4개 임베드 이미지).
- **자체 테스트 수치**: Clairic + Clef + GLM-5.3 파이프라인이 GLM-5.3 단독 대비 **49% 저렴, 3.2× 빠름** (19.3초 vs 61.7초). 손해사정 추출은 0.68초 vs 38초. TSA 스크리닝 예측: 평균 오차 3.3%, 21개 중 17개가 80% 예측 구간 내.
- **계보**: TypeSafe의 Jev (9월 결정 모델) → Cloudflare 자체 Clef (10/1) → Clairic — System One이 **결정에서 추출/예측으로 확장**.
- **인정된 약점**: 회사 스스로 다단계 산술·캘리브레이션·예측이 약하다고 밝힘.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 파이프라인의 "역할 분담"이 정형화됨**: 9/27 위키의 semantic-decision-engine(Jev)이 "판단은 싼 특화 모델로"였다면, Clairic은 "추출도 싼 특화 모델로"다. 에이전트 워크플로우를 "생성(비싼 LLM) + 판단/추출(싼 특화 모델)"로 나누는 아키텍처가 제품 라인업으로 굳어지는 중 — 하네스 설계 시 단계별로 모델을 다르게 쓰는 게 이제 "최적화"가 아니라 "표준".
2. **과금 모델의 혁신**: "출력 토큰 0개 = 입력에만 과금"은 추출 단계의 비용을 구조적으로 낮춘다. 10/19 위키의 "태스크당 $0.22" 같은 모델 가격 하락과 다른 축 — 같은 일을 "더 싼 모델"이 아니라 "다른 종류의 모델"로 하는 것.
3. **솔직한 한계 공개의 가치**: 회사가 "다단계 산술·캘리브레이션이 약하다"고 스스로 밝힘 — 특화 모델의 적용 범위를 정하는 데 이런 자기 고백이 가장 유용. 에이전트에 넣을 때는 "추출은 맡기고, 계산·예측은 검증 루프를 붙인다"는 설계로.

## 한계 (명시)

- 49%/3.2×/0.68s vs 38s/3.3% 오차 수치는 **전부 Cloudflare 자체 측정** — 독립 검증 없음. confidence medium의 이유.
- 오픈 웨이트 "soon"은 날짜 없음 — 실제 공개 전까지는 Workers AI 종속.
- TSA 스크리닝 예측 사례의 실제 운영 적용 여부는 불명 — 데모 수치로 취급.
