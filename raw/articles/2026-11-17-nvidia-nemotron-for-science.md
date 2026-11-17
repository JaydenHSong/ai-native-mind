---
title: "NVIDIA Nemotron for Science — 오픈 화학 에이전트 툴킷 + LitmusBench v0.2 (11-16)"
source_url: "https://www.globenewswire.com/news-release/2026/11/16/3403880/0/en/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents.html"
source_type: "news"
authors: ["NVIDIA"]
published: 2026-11-16
fetched: 2026-11-17
tags: [nvidia, nemotron, science-agents, chemistry, litmusbench, open-model]
status: raw
---

# NVIDIA Nemotron for Science — 오픈 화학 에이전트 툴킷 + LitmusBench v0.2 (11-16)

> NVIDIA가 SC26에서 과학 발견용 에이전트를 위한 오픈 패키지 Nemotron for Science를 발표했다. 오픈 모델 + 화학 평가 데이터셋 + 도메인 특화 포스트트레이닝 레시피 묶음이며 Hugging Face에서 바로 쓸 수 있다.

## 내용

- **발표**: 2026-11-16, SC26. 보도자료(GlobeNewswire) 기준 1차 출처.
- **모델**: 오픈 Nemotron 3.5 Super VL — 총 120B 파라미터 / 활성 12B 멀티모달 모델, 최대 100만 토큰 컨텍스트.
- **데이터셋**: LitmusBench v0.2 — 화학 단답형 질문 47,118개(학습용) + 2,056개(테스트용). 출처는 ChEMBL v36, ExpansionRx, Biogen.
- **구성**: 모델 + LitmusBench + 도메인 특화 과학 에이전트용 포스트트레이닝 레시피 + DGX Spark 배포 경로.
- **활용 사례로 거론된 기관**: Argonne(단백질 치료제 에이전트 StructBioReasoner), Jülich, RIKEN(RiVault 경유), KTH(자가 수리 GROMACS 설정), Lila Sciences, Terray, Therna.
- **위치**: 일반 코딩 에이전트와는 다른 갈래인 '도구를 쓰는 과학 추론' 에이전트 스택의 오픈 패키지다.

## 맥락

- [[patterns/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인: 문헌 접지→in-silico 가설→wet-lab 검증
- [[concepts/openai-ai-science-three-discoveries]] — OpenAI의 AI 과학 발견 3건과 비교되는 과학 에이전트 흐름
- [[concepts/nvidia-rubin-hpc]] — 같은 SC26 발표 축의 하드웨어 쪽(별도 수집 아님 — Rubin HPC는 이번 수집에서 제외, 사양 미공개)
