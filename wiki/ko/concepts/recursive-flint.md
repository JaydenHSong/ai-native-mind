---
title: "Recursive Flint — 'Eureka Machine'이 만든 40B MoE 오픈웨이트 코딩 모델"
category: concepts
tags: [recursive, flint, open-weight, coding-model, moe, rsi, eureka-machine, richard-socher, swe-bench]
created: 2026-10-22
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-22-recursive-flint.md"
related:
  - "[[concepts/self-improving-ai-risk]]"
  - "[[concepts/nvidia-nemotron-3-5-bolt]]"
  - "[[concepts/meta-muse-spark-open]]"
status: draft
confidence: high
---

# Recursive Flint — 'Eureka Machine'이 만든 40B MoE 오픈웨이트 코딩 모델

## 쉽게 읽기

**비유**: 모델을 만드는 건 보통 수백 명의 연구자가 몇 달씩 붙는 대공사다. Recursive는 "모델을 만드는 기계 (Eureka Machine)" 를 먼저 만들고, 그 기계가 모델을 거의 다 만들게 했다. 결과물이 Flint — 노트북에서도 돌아가는 40B급 코딩 모델. AI가 AI를 만드는 고리 (RSI) 가 연구실 논문이 아니라 "제품"으로 처음 나온 셈이다.

| 용어 | 풀이 |
|------|------|
| **RSI (Recursive Self-Improvement)** | AI가 스스로를 (또는 AI 연구 과정을) 개선하는 재귀 고리 |
| **MoE (Mixture of Experts)** | 토큰마다 일부 전문가 모듈만 활성화하는 구조 — 전체는 크지만 한 번에 쓰는 건 작음 |
| **Eureka Machine** | Recursive의 자동 연구 시스템 — 아키텍처 탐색·학습 방법·GPU 커널 튜닝을 자동 수행 |

## 한줄 정의

2026-10-21 리처드 소처의 Recursive가 공개한 40B MoE (활성 2.5B) 오픈웨이트 코딩 모델 — 자사 자동 연구 시스템 "Eureka Machine"이 제작 과정 대부분을 주도했다는 RSI 첫 공개 실증 주장. Apache 2.0, 컨텍스트 512K.

## 핵심 내용

- **모델**: Flint — 총 39.8B MoE, 토큰당 활성 약 2.5B, 컨텍스트 512K (권장 256K), Apache 2.0, Hugging Face 공개.
- **성능 주장** (업체 측정, 독립 검증 없음): SWE-bench Verified 74.2% · SWE-bench Pro v2 89.7% · Terminal-Bench 2.1 54.9% — 50B 이하 MoE 중 최상위급.
- **로컬 구동**: M4 Pro 맥북 프로에서 약 131 tokens/sec — 고성능 노트북/워크스테이션에서 실용 속도.
- **제작 과정**: "Eureka Machine"이 아키텍처 탐색·학습 방법·GPU 커널 튜닝까지 거의 전 과정 주도 — 4개월 미만, 소규모 팀으로 완성 (회사 발표).
- **회사**: 5월 스텔스 탈피. GV·Nvidia·AMD Ventures 등에서 $6.5억 유치, 밸류에이션 $46.5억.
- **의의**: RSI의 첫 공개 실증 사례 주장 — "AI가 AI 연구 파이프라인의 대부분을 수행했다"는 게 제품 형태로 처음 제시됨.

## 왜 중요한가 (1인 개발자 관점)

1. **RSI가 논문에서 제품으로**: [[concepts/self-improving-ai-risk]]는 "통제 상실 리스크"로 RSI를 다뤘다. Flint는 그 반대편 증거 — RSI가 "연구 가속의 실용 도구"로 먼저 등장했다는 기록. 리스크 논의에 "이미 돌아가고 있다"는 현실이 추가됨.
2. **로컬 코딩 모델의 새 축**: Nemotron 3.5 Bolt (RTX Spark용, 10-14) · Muse Spark Open (816B, 10-16) 에 이어 오픈웨이트 코딩 모델이 "노트북급 구동"으로 수렴. 1인 개발자의 로컬 에이전트 스택 선택지가 넓어짐 — Apache 2.0이라 상용 이용도 자유로움.
3. **벤치 해석 주의**: 74.2%는 "업체 측정" — SWE-bench Verified는 에이전트 하네스 의존도가 커서 동일 점수라도 실사용 체감이 다를 수 있음. [[concepts/llm-evaluation]]의 evals 방법론으로 보면 "측정 조건"이 곧 결론의 일부.

## 한계 (명시)

- 모든 성능 수치는 업체 측정 — 독립 검증 없음.
- "Eureka Machine이 전 과정을 주도"는 회사 발표 — 실제 자동화 범위 (인간 개입도) 미공개.
- 512K 컨텍스트의 실효 품질 (long-context 성능) 은 벤치에 없음.