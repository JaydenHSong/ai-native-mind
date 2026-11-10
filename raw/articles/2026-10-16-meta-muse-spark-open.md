---
title: "Meta Muse Spark Open 공개 — 816B 오픈웨이트, 1M 컨텍스트, Mac Studio 로컬 구동"
source_url: "https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/"
source_type: "news"
authors: ["TechCrunch", "MacRumors"]
published: 2026-10-15
fetched: 2026-10-16
tags: [meta, muse-spark, open-weights, moe, agents, coding, apple, mac-studio, mlx]
status: raw
---

# Meta Muse Spark Open 공개 — 816B 오픈웨이트, 1M 컨텍스트, Mac Studio 로컬 구동

> 2026-10-15 TechCrunch·MacRumors 교차 확인. Meta가 코딩·에이전트 특화 오픈웨이트 모델 'Muse Spark Open'을 공개. "미국에서 가장 유능한(most capable) 오픈웨이트 모델" 주장.

## 내용

- 스펙: 816B 파라미터(활성 42B) MoE 멀티모달 모델. 1M 토큰 컨텍스트. 코딩·에이전트 워크로드 특화.
- 벤치: GPQA Diamond 89.0, Terminal-Bench 2.1 76.4. 독립 지수(Artificial Analysis 지능지수) 39 — 중국 오픈 모델 GLM 5.3·Kimi K3보다 낮음 (자사 벤치와 독립 지수 간 괴리).
- Apple 협력: M5 Ultra Mac Studio 2대(MLX, 통합메모리 1TB)에서 로컬 구동 시연 — 소비자급 하드웨어가 아닌 워크스테이션급 로컬.
- 배포: 가중치는 HuggingFace·AWS SageMaker·Google Cloud·Microsoft Foundry. API는 Baseten·Fireworks·Groq·Modal·Nebius·OpenRouter·Together.
- 라이선스 경계: 연매출 $20M 초과 서비스는 별도 계약 필요 — "오픈"이지만 대형 상용은 과금.

## 맥락

- [[concepts/meta-muse-wonder-models]] — 10/13 "Muse Wonder 클로즈드 전환(오픈 전략 ≠ 프론티어 전략)" 보강 하루 만에 오픈웨이트 회귀. 단 Spark Open은 프론티어가 아닌 에이전트 특화 모델 — "오픈 = 프론티어"가 아니라 "오픈 = 유통(배포 채널)"로 읽힘.
- [[concepts/agent-residence]] — Mac Studio 2대·1TB 통합메모리 로컬 구동은 "로컬 상주" 스펙트럼의 상단 확장 (8월 Meta 30B 단일 GPU vs 10월 816B 워크스테이션).
- [[comparisons/frontier-lab-economics]] — $20M 초과 서비스 별도 계약: 오픈웨이트의 라이선스 경계선, "오픈 = 저가" 등식의 예외 조항.
