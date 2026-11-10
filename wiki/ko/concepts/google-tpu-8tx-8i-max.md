---
title: "Google, TPU 8tx·TPU 8i Max 공개 — 기밀 추론·대규모 멀티 에이전트용 8세대 TPU (11-09)"
category: concepts
tags: [google, tpu, confidential-computing, inference, amd]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-google-tpu-8tx-8i-max.md"
related:
  - "[[concepts/openai-google-tpu-purchase-plan]]"
  - "[[concepts/google-agent-compute-engine]]"
  - "[[concepts/microsoft-maia-300]]"
status: draft
confidence: high
---

# Google, TPU 8tx·TPU 8i Max 공개 — 기밀 추론·대규모 멀티 에이전트용 8세대 TPU (11-09)

## 쉽게 읽기

**비유**: 에이전트가 일하는 사무실에 금고와 큰 책상을 들여놓는 셈이다. 8tx는 남이 못 보게 자물쇠가 달린 금고(기밀 추론)이고, 8i Max는 여러 에이전트가 동시에 펼쳐 볼 수 있는 큰 책상(대규모 컨텍스트·멀티 에이전트)이다. 둘 다 '계산이 빨라서'가 아니라 '일을 안전하게·넓게 할 수 있어서' 필요한 장비다.

| 용어 | 풀이 |
|------|------|
| **TPU** | Tensor Processing Unit — Google의 AI 전용 칩 |
| **기밀 컴퓨팅** | 데이터를 암호화된 격리 환경에서 처리해 운영자도 내용을 못 보게 하는 기술 |
| **HBM 대역폭** | 고대역폭 메모리가 칩에 데이터를 공급하는 속도 — 큰 모델·긴 컨텍스트의 병목 |

## 한줄 정의

2026-11-09 — Google이 8세대 TPU 패밀리의 4번째 시스템 2종을 공개했다. TPU 8tx는 기밀 추론·소규모 학습용, TPU 8i Max는 8i 칩 2개를 한 패키지에 넣어 대규모 컨텍스트·멀티 에이전트 추론용이다. 가격·지역·GA 일정은 미공개이며 Bloomberg는 내년 출시로 보도했다.

## 핵심 내용

- **TPU 8tx**: 8t와 같은 실리콘에 5세대 AMD EPYC 호스트를 결합했다. 하드웨어 기밀 컴퓨팅(confidential computing)을 갖춰, 민감 데이터를 다루는 추론을 암호화된 격리 환경에서 실행한다. 8t 대비 최대 2배 낮은 지연(latency)을 주장한다. 용도는 기밀 추론과 소규모 학습이다.
- **TPU 8i Max**: 8i 칩 2개를 하나의 패키지에 담아 8i 대비 연산 2배·SRAM 2배·HBM 대역폭 2배를 제공한다. 대규모 컨텍스트와 멀티 에이전트 추론이 타깃이다. 메모리 벽이 기업 에이전트 배포의 병목이라는 점에서, 메모리·대역폭을 늘린 설계다.
- **맥락**: 8세대 TPU 패밀리는 1년 안에 4개 시스템을 냈다. AMD EPYC 호스트 채택은 AMD의 승리로, 발표 당일 AMD 주가는 +13.26% 급등해 $508.58을 기록했다(6개월 만 최대 일일 상승, Oppenheimer의 Outperform 상향·목표가 $600도 함께 작용). 같은 날 NVDA는 보드 조사 소식에 −4.27% 하락했다.
- **주의**: 가격·제공 지역·정식 출시(GA) 일정이 공개되지 않았다. 성능 수치는 Google 주장으로 독립 검증이 없다. 8i Max의 2배 수치는 칩 2개 패키징에 따른 것으로, 실제 워크로드에서의 선형 확장은 별도 검증이 필요하다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 배포의 병목이 '기밀성'과 '메모리'로 이동한다**: 모델이 똑똑해지는 것보다, 민감 데이터를 안전하게 다루고 긴 컨텍스트를 여러 에이전트가 공유하는 것이 기업 도입의 관건이 되고 있다. 8tx·8i Max는 그 두 축을 겨냥한 칩이다.
2. **칩 선택이 곧 클라우드 선택이다**: TPU는 Google Cloud에서만 쓸 수 있다. OpenAI의 TPU 구매 검토 보도와 함께 읽으면, Nvidia 의존을 줄이려는 움직임이 칩 공급 다변화로 이어지고 있다.
3. **AMD가 에이전트 인프라의 수혜자가 됐다**: 호스트 CPU 채택 하나가 주가 +13%였다. 칩 전쟁은 GPU만이 아니라 호스트·메모리·패키징 전체의 싸움이다.

## 한계 (명시)

- 가격·제공 지역·GA 일정이 미공개라, 실제 사용 가능 시점과 비용을 평가할 수 없다.
- 성능 수치는 Google 주장으로 독립 검증이 없다. 2배 수치는 패키징 사양이지 워크로드 실측이 아니다.
- TPU는 Google Cloud 종속이라, 멀티 클라우드 전략을 쓰는 조직에는 선택지가 제한된다.

## 관련 개념

- [[concepts/openai-google-tpu-purchase-plan]] — OpenAI의 Google TPU 구매 검토 보도, Nvidia 의존 완화 시도
- [[concepts/google-agent-compute-engine]] — Google Cloud Agent Compute Engine, 에이전트 세션마다 하드웨어 격리 microVM
- [[concepts/microsoft-maia-300]] — Microsoft Maia 300 3세대 자체 AI 칩, TSMC 칩렛·랙당 96칩

## 참고 소스

- [Google TPU 8tx·TPU 8i Max 공개 원본](raw/articles/2026-11-10-google-tpu-8tx-8i-max.md)
