---
title: "DeepMind AlphaGenome 2 — 세포 특이적 DNA 변이 효과 예측 (11-11)"
source_url: "https://aifrontierpost.com/articles/alphagenome-2-cell-specific-dna-variant-predictions/"
source_type: "news"
authors: ["Google DeepMind (via AI Frontier Post)"]
published: 2026-11-11
fetched: 2026-11-12
tags: [deepmind, alphagenome-2, genomics, science-model, dna]
status: raw
---

# DeepMind AlphaGenome 2 — 세포 특이적 DNA 변이 효과 예측 (11-11)

> DeepMind가 Gemini 4 Carbon·Gemini Robotics 2.5에 이어 일주일 내 두 번째 플래그십 과학 모델 AlphaGenome 2를 공개했다. 조직 평균이 아니라 특정 세포에서의 DNA 변이 효과를 예측하는 조건부 모델이다.

## 내용

- **모델**: 조건부 DNA 서열 모델로, 최대 100만 글자의 DNA 구간에 조직·세포 유형·상태라는 조건 하나를 함께 받아 해당 세포에서의 변이 효과만을 예측한다. AlphaGenome 1이 조직 평균 예측에 그친 것과 대비된다.
- **학습 데이터**: 68개 조직에 걸친 1억 700만 개 이상의 단일세포 프로파일(인간 637개·생쥐 311개 세포 유형)로 학습했고, DNA 메틸화 판독을 새로 추가했다.
- **성능**: TenK10K(28개 면역 세포 유형) 기준, 90% 정밀도에서 인과적 발현 변이의 30%를 회수해 AlphaGenome 1 파인튜닝(16%)의 약 2배다. 유전자 효과 방향 정확도는 43% 대 23%, 조직 내 발현 분산 설명력은 중앙값 34% 대 23%다.
- **사례**: IBD/ETS2 관련 발견(변형 rs2836882, 약 290kb 떨어진 위치를 장 단핵구·대식세포로 특정)을 실험실에서 1.5년이 걸렸던 작업을 약 30분 만에 재현했다고 한다.
- **가용성**: 비영리 연구용으로 AlphaGenome API를 통해 즉시 이용 가능, 상업용은 비공개 프리뷰. 연구용이며 임상 검증되지 않았다.
- **주의**: 수치는 모두 DeepMind 자체 발표(프리프린트)로 독립 재현이 없다. 30% 회수는 인과 변이 10개 중 7개는 여전히 놓친다는 뜻이다.

## 맥락

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' 내부 테스트, DeepMind 플래그십 릴리스 흐름 (2026-10-10)
- [[concepts/nvidia-cosmos-3-nano-open-models]] — NVIDIA Cosmos 3 Nano, 월드 시뮬레이션 모델 (2026-11-07)
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
