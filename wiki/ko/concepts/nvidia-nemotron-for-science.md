---
title: "NVIDIA Nemotron for Science — 오픈 화학 에이전트 툴킷 + LitmusBench v0.2"
category: concepts
tags: [nvidia, nemotron, science-agents, chemistry, litmusbench, open-model, sc26, dgx-spark]
created: 2026-11-17
updated: 2026-11-17
sources:
  - "raw/articles/2026-11-17-nvidia-nemotron-for-science.md"
related:
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/openai-ai-science-three-discoveries]]"
  - "[[concepts/nvidia-nemotron-3-5-bolt]]"
  - "[[concepts/cerebras-tungsten-wafer-scale-code]]"
status: draft
confidence: medium
---

# NVIDIA Nemotron for Science — 오픈 화학 에이전트 툴킷 + LitmusBench v0.2

## 쉽게 읽기

**비유**: 화학 실험을 대신 해주는 AI 조수에게 필요한 세 가지를 한 상자에 담아 무료로 풀었다 — 똑똑한 머리(오픈 모델), 연습 문제집(화학 평가 데이터), 조수 훈련법(포스트트레이닝 레시피). 누구나 Hugging Face에서 바로 받아 쓸 수 있다.

| 용어 | 풀이 |
|------|------|
| **Nemotron 3.5 Super VL** | NVIDIA의 오픈 멀티모달 모델 — 총 120B 파라미터, 활성 12B |
| **LitmusBench** | 화학 단답형 질문으로 과학 에이전트를 평가하는 벤치마크 |
| **포스트트레이닝(post-training)** | 이미 학습된 모델을 특정 용도에 맞게 추가로 다듬는 단계 |
| **DGX Spark** | NVIDIA의 데스크톱급 AI 슈퍼컴퓨터 — 로컬 배포 경로 |
| **SC26** | 슈퍼컴퓨팅 분야 최대 학회·전시회 (2026년 개최) |

## 한줄 정의

NVIDIA가 SC26(2026-11-16)에서 발표한 과학 발견용 에이전트 오픈 패키지 **Nemotron for Science** — 오픈 모델 + 화학 평가 데이터셋 + 도메인 특화 포스트트레이닝 레시피 묶음으로, Hugging Face에서 바로 쓸 수 있다.

## 핵심 내용

- **발표**: 2026-11-16, SC26. 보도자료(GlobeNewswire) 기준 1차 출처.
- **모델**: 오픈 **Nemotron 3.5 Super VL** — 총 120B 파라미터 / 활성 12B 멀티모달 모델, 최대 **100만 토큰** 컨텍스트.
- **데이터셋**: **LitmusBench v0.2** — 화학 단답형 질문 **47,118개**(학습용) + **2,056개**(테스트용). 출처는 ChEMBL v36, ExpansionRx, Biogen.
- **구성**: 모델 + LitmusBench + 도메인 특화 과학 에이전트용 포스트트레이닝 레시피 + DGX Spark 배포 경로.
- **활용 사례로 거론된 기관**: Argonne(단백질 치료제 에이전트 StructBioReasoner), Jülich, RIKEN(RiVault 경유), KTH(자가 수리 GROMACS 설정), Lila Sciences, Terray, Therna.
- **위치**: 일반 코딩 에이전트와는 다른 갈래인 '도구를 쓰는 과학 추론' 에이전트 스택의 오픈 패키지다.

## 왜 중요한가 (1인 개발자 관점)

1. **과학 에이전트가 "오픈 패키지"가 됐다**: 지금까지 과학 에이전트는 프런티어 랩의 비공개 모델 + 내부 도구 조합이었다. 모델·평가·훈련법이 한 묶음으로 열리면서, 1인 개발자도 화학 에이전트를 "받아서 돌리는" 단계에 들어섰다.
2. **평가가 먼저 나왔다**: LitmusBench처럼 도메인 평가 데이터가 패키지의 일부라는 점이 핵심이다. [[patterns/agent-scientific-discovery]]의 "주장 강도 단계별 표기" 원칙 — 평가 없이 "발견했다"고 말하지 않는 습관이 패키지 설계에 박혀 있다.
3. **SC26 축의 한쪽**: 같은 날 Cerebras Tungsten(웨이퍼 스케일 시뮬레이션 코딩)과 짝을 이룬다 — 과학 에이전트 스택이 "화학 추론"과 "물리 시뮬레이션" 두 갈래로 동시에 열리고 있다. [[concepts/cerebras-tungsten-wafer-scale-code]]와 함께 볼 것.
4. **로컬 배포 경로**: DGX Spark 배포 경로가 포함됐다는 것은 과학 에이전트가 클라우드 전용이 아니라 데스크톱에서도 돈다는 뜻 — [[concepts/agent-residence]]의 "로컬 상주" 축이 과학 도메인으로 확장되는 신호다.

## 한계 (명시)

- 보도자료(GlobeNewswire) 기준 1차 출처이나, 모델 성능 수치·벤치마크 점수 자체는 발표문에 없다 — LitmusBench 점수나 타 모델과의 비교는 미공개.
- 활용 사례 기관 목록은 NVIDIA 발표 기준 — 각 기관의 실제 도입 단계·성과는 미확인.
- confidence는 medium — 발표 사실 자체는 1차 출처이나 성능·효과에 대한 독립 검증이 없다.

## 관련 개념

- [[patterns/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인: 문헌 접지→in-silico 가설→wet-lab 검증
- [[concepts/openai-ai-science-three-discoveries]] — OpenAI의 AI 과학 발견 3건과 비교되는 과학 에이전트 흐름
- [[concepts/nvidia-nemotron-3-5-bolt]] — Nemotron 3.5 Bolt, RTX Spark용 오픈웨이트 에이전틱 모델 (2026-10-14)
- [[concepts/cerebras-tungsten-wafer-scale-code]] — Cerebras Tungsten, 웨이퍼 스케일 코드 — 같은 날 SC26 축의 과학 에이전트 스택

## 참고 소스

- [NVIDIA Nemotron for Science — 오픈 화학 에이전트 툴킷 + LitmusBench v0.2 (NVIDIA 보도자료·GlobeNewswire, 11-16)](raw/articles/2026-11-17-nvidia-nemotron-for-science.md)
