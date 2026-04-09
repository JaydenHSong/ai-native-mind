# LLM Evaluation (Evals) 리서치 (2026-04-09)

## 출처
- https://developers.openai.com/api/docs/guides/evals
- https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation
- https://futureagi.substack.com/p/llm-evaluation-frameworks-metrics
- https://deepeval.com/

## Evals란?
AI 모델 출력이 원하는 스타일/내용 기준을 충족하는지 체계적으로 테스트.
"AI가 좋은 답변을 했는가?"를 판단하는 방법론.

## 왜 필요한가
- LLM은 비결정적 (같은 입력, 다른 출력)
- 단위 테스트로는 불충분
- 프로덕션 품질 보장에 필수
- 프롬프트 변경 시 회귀 방지

## 평가 종류

### Single-turn Evals
개별 프롬프트의 출력 평가
- Accuracy (정확도)
- Factuality (사실성)
- Coherence (일관성)

### Multi-turn Evals
대화형 멀티스텝 평가
- Contextual reasoning (맥락 추론)
- Memory (메모리 유지)
- Task completion (작업 완수)

## 주요 방법론

### 1. LLM-as-a-Judge
강력한 참조 모델(GPT-5, Claude Opus)이 다른 모델의 출력을 평가.
- 인간 평가보다 저렴
- 열린 텍스트 출력에 적합
- 2026년 가장 인기 있는 방법

### 2. Rule-based Metrics
규칙 기반 평가:
- Exact match
- BLEU, ROUGE (번역/요약)
- Keyword presence

### 3. Embedding-based
시맨틱 유사도 기반 평가:
- Cosine similarity
- Semantic textual similarity

## 주요 프레임워크

### DeepEval
- Pytest 스타일 LLM 유닛 테스트
- Metrics: G-Eval, task completion, answer relevancy, hallucination
- 가장 사용자 친화적

### Inspect AI
- 연구 수준 평가
- Model-level + Agent-level 평가
- 오픈소스

### OpenAI Evals
- 공식 프레임워크
- GPT 모델 평가 표준

### Promptfoo
- 프롬프트 A/B 테스트에 특화
- CI/CD 통합 쉬움

## 2026 트렌드

### Traceability (추적성)
평가 점수를 정확한 prompt/model/dataset 버전에 연결.
어떤 변경이 어떤 영향을 주었는지 추적.

### 자동 평가 에이전트
멀티스텝 테스트 시나리오를 자동 실행.

### Self-evaluating LLMs
LLM이 자기 출력을 스스로 점수화.

### Production Monitoring
실시간 LLM 모니터링을 파이프라인에 내장.

## 실전 평가 워크플로우
1. Golden dataset 만들기 (입력-기대출력 쌍)
2. 메트릭 정의 (정확도, 관련성, 안전성 등)
3. LLM-as-Judge 또는 자동 평가 설정
4. CI/CD에 통합 → PR마다 회귀 감지
5. 프로덕션 로그 모니터링
