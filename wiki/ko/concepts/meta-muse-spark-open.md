---
title: "Meta Muse Spark Open — 816B 오픈웨이트 에이전트 모델, Mac Studio 로컬 구동"
category: concepts
tags: [meta, muse-spark, open-weights, moe, agents, coding, apple, mac-studio, mlx, distribution]
created: 2026-10-16
updated: 2026-10-16
sources:
  - "raw/articles/2026-10-16-meta-muse-spark-open.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/meta-muse-wonder-models]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: high
---

# Meta Muse Spark Open — 816B 오픈웨이트 에이전트 모델, Mac Studio 로컬 구동

## 한줄 정의

Meta가 2026-10-15 공개한 **816B 파라미터(활성 42B) MoE 멀티모달 오픈웨이트 모델** — 1M 컨텍스트·코딩/에이전트 특화, Apple 협력으로 M5 Ultra Mac Studio 2대(MLX·통합메모리 1TB)에서 로컬 구동을 시연한 "미국에서 가장 유능한(most capable) 오픈웨이트 모델" 주장.

## 핵심 내용 (TechCrunch·MacRumors, 10/15)

- **스펙**: 816B 파라미터 중 활성 42B의 MoE. 1M 토큰 컨텍스트. 코딩·에이전트 워크로드 특화.
- **벤치**: GPQA Diamond 89.0, Terminal-Bench 2.1 76.4. 단 독립 지수(Artificial Analysis 지능지수) 39 — 중국 오픈 모델 GLM 5.3·Kimi K3보다 낮음. 자사 벤치와 독립 지수 간 괴리.
- **Apple 협력**: M5 Ultra Mac Studio 2대(MLX, 통합메모리 1TB)에서 로컬 구동 시연 — 소비자급 하드웨어가 아닌 워크스테이션급 로컬.
- **배포**: 가중치는 HuggingFace·AWS SageMaker·Google Cloud·Microsoft Foundry. API는 Baseten·Fireworks·Groq·Modal·Nebius·OpenRouter·Together.
- **라이선스 경계**: 연매출 $20M 초과 서비스는 별도 계약 — "오픈"이지만 대형 상용은 과금.

## 왜 중요한가

1. **오픈 전략의 회귀 — 하지만 프론티어가 아닌 에이전트에서**: 10/13 보강([[concepts/meta-muse-wonder-models]])이 "오픈 전략 = 프론티어 전략도 깨졌다"(Muse Wonder 클로즈드 전환)였는데, 하루 만에 오픈웨이트 회귀. 모순처럼 보이지만 대상이 다름 — Wonder는 클로즈드 프론티어, Spark Open은 **에이전트 특화 오픈 모델**. "오픈 = 프론티어"가 아니라 **"오픈 = 유통(에이전트 배포 채널)"** 이라는 10/8 보강(Nous Research 기업화)의 논리와 통한다.
2. **"로컬" 스펙트럼의 상단 확장**: [[concepts/agent-residence]]의 축으로 읽으면 — 2026-08 Meta 30B(소비자 GPU 1장) vs 2026-10 Muse Spark(816B, Mac Studio 2대·1TB 통합메모리). "로컬 상주"가 단일 GPU에서 워크스테이션급으로 넓어짐. OS 내장(10/8 보강, Surface Ultra)에 이어 Apple 하드웨어 × Meta 모델의 결합 — 플랫폼(OS)×모델(오픈웨이트)의 교차.
3. **오픈웨이트의 라이선스 경계선 명시**: $20M 초과 서비스 별도 계약 — "오픈 = 저가" 등식에 대한 예외 조항. [[comparisons/frontier-lab-economics]]의 프레이밍으로는: 오픈이 유통 채널이 되면, 대형 서비스에서의 수익 회수는 라이선스 경계로.

## 한계 (명시)

- "미국에서 가장 유능"은 Meta 주장 — 독립 지수 39는 GLM 5.3·Kimi K3(중국)보다 낮음. 자사 벤치(GPQA 89.0·Terminal-Bench 76.4)와 독립 측정 간 괴리는 Gemini 4 Argon(10/1)·Muse Wonder(10/13) 패턴의 재현.
- 중국 오픈 모델과의 직접 비교 수치는 AA 지수 단일 출처.
- confidence **high** — Meta 공식 발표 + 2개 매체 교차, 스펙·배포·라이선스 조항은 사실.

## 관련 개념

- [[concepts/agent-residence]] — Mac Studio 로컬 구동, "로컬 상주" 스펙트럼의 상단 확장
- [[comparisons/frontier-lab-economics]] — 오픈웨이트의 경제학: 유통 채널로서의 오픈 + $20M 라이선스 경계
- [[concepts/meta-muse-wonder-models]] — 클로즈드 프론티어(Wonder) vs 오픈 에이전트 모델(Spark)의 이원 전략
- [[concepts/reflection-open-weight]] — "미국산 오픈웨이트" 경쟁 구도

## 참고 소스

- [Meta launches an open-weight model that runs on Macs (TechCrunch·MacRumors, 10/15)](raw/articles/2026-10-16-meta-muse-spark-open.md)
