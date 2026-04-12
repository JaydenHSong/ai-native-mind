---
title: "LLM Evaluation (Evals)"
category: concepts
tags: [evaluation, testing, llm, quality, evals]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-llm-evaluation.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/context-rot-hallucination]]"
  - "[[patterns/ai-code-review]]"
  - "[[concepts/gen-ai-observability]]"
status: active
confidence: high
---

# LLM Evaluation (Evals)

## 쉽게 읽기

**비유**: 같은 문제집을 여러 번 풀었는데 매번 답이 조금씩 다르다. 그래서 “**몇 점 이상이면 통과**”를 정해 두고, 바꾼 뒤에도 점수가 안 떨어지는지 자동으로 확인하는 것이 eval이다.

| 용어 | 풀이 |
|------|------|
| **Golden dataset** | 입력과 “이 정도면 정답” 기대를 짝지어 둔 **샘플 시험지** |
| **LLM-as-a-Judge** | 채점을 또 다른(보통 더 큰) AI에게 맡기는 방식 |
| **회귀(regression)** | 고쳤더니 예전엔 되던 게 안 되는 현상 — eval로 잡는다 |

## 한줄 정의

AI 모델 출력이 원하는 기준을 충족하는지 **체계적으로 테스트**하는 방법론. "AI 답변이 좋은가?"를 판단하는 기술.

## 핵심 내용

### 왜 필요한가

- LLM은 **비결정적** (같은 입력, 다른 출력)
- 단위 테스트로는 불충분
- 프로덕션 품질 보장에 필수
- **프롬프트 변경 시 회귀 방지**

## 평가 종류

### Single-turn Evals
개별 프롬프트의 출력 평가:
- Accuracy (정확도)
- Factuality (사실성)
- Coherence (일관성)

### Multi-turn Evals
대화형 멀티스텝 평가:
- Contextual reasoning (맥락 추론)
- Memory (메모리 유지)
- Task completion (작업 완수)

## 주요 방법론

### 1. LLM-as-a-Judge (가장 인기)

강력한 참조 모델(GPT-5, Claude Opus)이 다른 모델의 출력을 평가.

**장점**:
- 인간 평가보다 저렴
- 열린 텍스트 출력에 적합
- 2026년 표준 방법

**주의**:
- Judge 모델의 편향
- 명확한 평가 기준 필요

### 2. Rule-based Metrics

규칙 기반 평가:
- Exact match
- BLEU, ROUGE (번역/요약)
- Keyword presence

### 3. Embedding-based

시맨틱 유사도 기반:
- Cosine similarity
- Semantic textual similarity

## 주요 프레임워크

| 프레임워크 | 특징 | 적합 |
|----------|------|------|
| **DeepEval** | Pytest 스타일 LLM 유닛 테스트 | 가장 사용자 친화적 |
| **Inspect AI** | 연구 수준, model+agent 평가 | 심층 평가 |
| **OpenAI Evals** | 공식 프레임워크 | GPT 생태계 |
| **Promptfoo** | 프롬프트 A/B 테스트 | CI/CD 통합 |

## 2026 트렌드

### Traceability (추적성)
평가 점수를 정확한 prompt/model/dataset 버전에 연결. 어떤 변경이 어떤 영향을 주었는지 추적.

### 자동 평가 에이전트
멀티스텝 테스트 시나리오 자동 실행.

### Self-evaluating LLMs
LLM이 자기 출력을 스스로 점수화.

### Production Monitoring
실시간 LLM 모니터링을 파이프라인에 내장.

## 실전 평가 워크플로우

```
1. Golden dataset 만들기 (입력-기대출력 쌍)
2. 메트릭 정의 (정확도, 관련성, 안전성 등)
3. LLM-as-Judge 또는 자동 평가 설정
4. CI/CD에 통합 → PR마다 회귀 감지
5. 프로덕션 로그 모니터링
```

## [[concepts/harness-engineering|Harness Engineering]]에서의 위치

Evals는 Harness의 **Sensor (피드백 제어)** 계층. 에이전트가 행동한 후 품질을 측정하고 피드백을 제공.

프로덕션에서는 [[concepts/gen-ai-observability|OpenTelemetry GenAI 관측]]으로 수집한 트레이스·세션을 eval 데이터셋과 붙이면, 회귀 원인을 **모델·도구·프롬프트** 단위로 좁히기 쉽다.

## 1인 개발자에게

- 소규모로 시작 — 10-20개 golden example로도 충분
- LLM-as-Judge로 자동화
- PR에서 자동 실행 (GitHub Actions)
- 프롬프트 변경 시 회귀 발견 가능

## Chapter Clear 가이드

- **소속 챕터**: Chapter 6 (운영 보스전)
- **퀘스트**: golden dataset 10개와 통과 기준 1개를 정의한다.
- **클리어 조건**: 프롬프트/모델 변경 후 회귀를 감지하는 루프를 설명할 수 있다.
- **보상(산출물)**: eval 체크리스트 v1
- **다음 퀘스트**: [[concepts/gen-ai-observability]] -> [[patterns/git-ai-workflow]]

## 참고 소스

- [LLM Evaluation 리서치](raw/notes/2026-04-09-llm-evaluation.md)
- [OpenAI Evals Guide](https://developers.openai.com/api/docs/guides/evals)
- [DeepEval](https://deepeval.com/)
- [LLM Evaluation Metrics (Confident AI)](https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation)
