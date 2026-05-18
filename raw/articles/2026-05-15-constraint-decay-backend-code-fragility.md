---
title: "Constraint Decay: The Fragility of LLM Agents in Backend Code Generation (arXiv 2605.06445)"
source_url: "https://arxiv.org/abs/2605.06445"
source_type: "arxiv-paper"
authors: ["Francesco Dente", "Dario Satriani", "Paolo Papotti"]
published: 2026-05-07
fetched: 2026-05-15
tags: [code-generation, backend, constraint, framework-sensitivity, empirical, descriptive-measurement, arxiv]
status: ingested
---

# Constraint Decay: The Fragility of LLM Agents in Backend Code Generation

> arXiv:2605.06445, 2026-05-07. Dente · Satriani · Papotti (EURECOM). cs.SE; cs.AI. **100 task** (80 greenfield + 20 feature-impl) × **8 web framework** (Flask, FastAPI, Django, …), unified API contract.

## 메타

- **Title**: Constraint Decay: The Fragility of LLM Agents in Backend Code Generation
- **Authors**: Francesco Dente, Dario Satriani, Paolo Papotti
- **arXiv**: <https://arxiv.org/abs/2605.06445> | PDF: <https://arxiv.org/pdf/2605.06445> | HTML: <https://arxiv.org/html/2605.06445v1>
- **Domain**: LLM 에이전트의 *multi-file backend* 코드 생성 — "기능 통과"가 아니라 "구조 제약"(아키텍처 패턴 · DB · ORM)을 동시에 지킬 수 있는가.

## 한 줄 요약

**"기능만 보던 벤치마크는 LLM 에이전트의 *현실*을 가렸다 — 구조 제약(아키텍처·DB·ORM)을 *누적해서* 부과하면 capable model도 평균 30점 추락하고, 약한 configuration은 0점에 수렴한다. 게다가 *framework 선택* 하나로 같은 모델 점수가 크게 바뀐다 (Flask 대비 FastAPI·Django 약함)."**

## 핵심 주장

### 1) 문제 — "기능 정확"만 보는 benchmark가 prod 현실을 가렸다

논문 인용 (abstract): "Existing benchmarks often overlook these non-functional requirements, rewarding functionally correct but structurally arbitrary solutions."

→ HumanEval·SWE-bench·LiveCodeBench류는 *함수 1개의 기능*은 측정하지만 "이게 우리 회사 layered architecture를 지키는가?"는 묻지 않는다. Prod backend에서는 후자가 *실제로* PR 거절 사유다.

### 2) 실험 디자인 — unified API contract × 8 framework × 100 task

- **80 greenfield generation tasks** + **20 feature-implementation tasks** = 100 tasks
- **8 web framework** 횡단 (Flask, FastAPI, Django 명시; 나머지 5개 본문 필요)
- **Unified API contract** 고정 → 같은 endpoint spec을 8 다른 framework로 구현 강제
- **Dual evaluation**:
  - End-to-end behavioral test (기존 방식)
  - **Static verifier** (구조 제약 — 아키텍처 패턴 · DB schema · ORM 사용 — 정적으로 검증)

### 3) 주요 발견 — "Constraint Decay"

| 발견 | 정량 |
|---|---|
| **Constraint decay**: 구조 제약이 *누적*될수록 성능 추락 | capable config 평균 **−30 points** (baseline → fully specified) |
| 약한 configuration | assertion pass rate **≈ 0** 수렴 |
| Framework sensitivity | Flask 강함 / **FastAPI · Django 평균적으로 substantially worse** |
| 주된 에러 유형 (root cause) | **Data-layer defect** — incorrect query composition, ORM runtime violation |

### 4) Framework 감도의 의미

**Convention-heavy framework**(Django의 DRF, FastAPI의 dependency injection 등)에서 LLM 에이전트가 더 헷갈린다 — *minimal & explicit*(Flask)이 LLM에게 더 친절하다는 직관과 일치하지만 정량으로 보여줬다.

→ 1인 개발자 교훈: "AI가 잘 짜 주는 stack"은 단순히 인기 stack이 아니라 *convention보다 explicit code*가 많은 stack이다.

## 본 위키와의 짝

| 본 위키 페이지 | Constraint Decay와의 관계 |
|---|---|
| [[concepts/context-rot-hallucination]] | Constraint Decay는 *Capability decay*의 일종 — 같은 모델이 입력 *제약*이 늘 때 capability 곡선이 꺾인다 (Context Rot이 *입력 길이*에서 꺾이듯) |
| [[patterns/ai-code-review]] | Static verifier 결과를 *리뷰 단계*에 끼워 넣으라는 자연스러운 처방 — Phase 2 (Plan-Review-Execute의 *Review*)에 framework idiom checker 추가 |
| [[concepts/llm-evaluation]] | "Functional + Structural" *dual evaluation*은 [[comparisons/agent-eval-frameworks]] 6대장이 아직 표면 위에 노출하지 않은 메뉴 |
| [[patterns/agent-server-harness]] | 본 패턴이 권장하는 framework 선택(Flask vs FastAPI vs Django)에 *agent-friendly* 차원이 한 줄 추가될 후보 |

## 2x3 좌표계에서의 위치

- **Descriptive × 측정** 칸 ← 이 논문이 채운다. 어제(05-14)까지 빈 칸. Wei(70 project descriptive)와 WildClawBench(tooling 측정) 사이의 "*descriptive*하면서 *측정*인" 빈 칸. Constraint Decay는 *실태조사*(framework별 성능 분포)이면서 정량 *측정*이다.

## 한계 (추정 — 본문 미독)

- Greenfield 80 + feature 20 = 100 task의 *동일 API contract* 가정이 prod 다양성 압축할 수 있음.
- 8 framework 중 본문에 명시된 건 Flask/FastAPI/Django 3개 — 나머지 5는 PDF 정독 후 채우기.
- Configuration("capable" vs "weak")이 *어떤 모델 × 어떤 prompt × 어떤 tool*인지 detail 본문 필요.
- "Framework idiom"이 학습 corpus 비중과 얼마나 분리되는가는 분리 어려운 confound.

## 출처

- arXiv: <https://arxiv.org/abs/2605.06445>
- (코드/dataset 공개 여부 확인 필요)
