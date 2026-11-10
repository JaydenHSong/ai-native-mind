---
title: "Nace Drex Max v1 — 확률만 내는 27B 결정 모델의 오픈웨이트 공개"
category: concepts
tags: [nace, drex, decision-model, open-weights, apple-silicon, agent-routing]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-nace-drex-max-v1-open-weights.md"
related:
  - "[[concepts/semantic-decision-engine]]"
  - "[[concepts/cloudflare-clairic-system-one-extraction]]"
  - "[[concepts/structured-output]]"
status: draft
confidence: medium
---

# Nace Drex Max v1 — 확률만 내는 27B 결정 모델의 오픈웨이트 공개

## 쉽게 읽기

**비유**: 에세이를 쓰지 않고 객관식 답안지에 확률만 찍는 모델이다. "이게 맞을 확률 72%"처럼, 생성 대신 판단을 내놓는 것이 본업이다.

| 용어 | 풀이 |
|------|------|
| **결정 모델** | 텍스트를 생성하지 않고 선택지마다 확률을 반환하는 모델 |
| **순전파** | 입력을 한 번 통과시켜 출력을 내는 계산. 생성처럼 토큰을 반복 생성하지 않는다 |
| **GGUF 양자화** | 가중치를 줄여 로컬 기기에서 돌릴 수 있게 만든 파일 형식. Q8_0·Q4는 정밀도 단계 |

## 한줄 정의

2026-11-01 Nace AI 공개 — 텍스트 생성 없이 선택지 확률을 한 번의 순전파로 반환하는 27B dense 결정 모델 Drex Max v1의 오픈웨이트.

## 핵심 내용

- **구조**: 27B dense, 64층 중 48층 Gated DeltaNet 선형 어텐션 + 16층 풀 어텐션. 컨텍스트 262,144 토큰(기본값 16,384), 질문당 최대 255개 선택지, 요청당 최대 16개 질문.
- **실행 경로**: bf16은 H100급 GPU, Q8_0 GGUF는 48GB Mac, affine Q4는 24GB 이상 Apple Silicon Mac에서 동작. Mac·CPU 경로는 현재 텍스트 전용이며 이미지 입력은 Nvidia GPU용 Python 구현이 필요하다.
- **성능(자체 보고)**: Decision Index 0.4 공개 텍스트 67.52점, Drex v2.0(61.25)·Jev 1.13.0(57.96)보다 높다. InfographicVQA 97.3, Tools 영역 81.9.
- **용도**: 에이전트 라우팅·분류·정책 검사·가드레일 같은 반복 판단 업무를 로컬에서 처리한다. API는 10-19 일반 공개됐고, 이번 공개는 가중치 자체다. 라이선스는 Nace.AI Open RAIL-M.
- **계보**: Drex 1.0(9-24) → 1.5(9-28) → 2.0(10-06) → Max API(10-19) → Max 가중치(11-01) 순으로 이어진다.

## 왜 중요한가 (1인 개발자 관점)

1. **판단은 생성보다 싸다**: 라우팅·분류·정책 검사는 매번 문장을 생성할 필요가 없다. 확률만 내는 모델은 비용·지연·파싱 오류를 한 번에 줄인다.
2. **로컬 판단이 가능해졌다**: 24GB Mac에서 도는 결정 모델은 가드레일·라우터 같은 판단 계층을 내 기기에 둘 수 있게 한다. API 왕복 없이 민감 분류를 처리할 수 있다.
3. **에이전트 스택의 분업이 보인다**: 생성은 프론티어 모델, 판단은 소형 결정 모델이라는 분업이 굳어지고 있다. Jev·Clairic과 같은 계열로, '결정 전용' 카테고리가 하나의 축이 되고 있다.

## 한계 (명시)

- 모든 성능 수치는 Nace 자체 보고이며 독립 검증이 없다.
- 훈련 데이터·베이스 모델 공개 여부는 별도 명시가 없다. 오픈웨이트이지 완전한 오픈소스는 아니다.
- 일부 보도(Artiverse)는 Nace 후원으로 작성됐다.
