---
source_url: "https://www.langchain.com/langsmith/evaluation"
title: "DeepEval vs LangSmith vs Braintrust — Agent Eval 프레임워크 비교 2026"
publisher: "여러 출처 종합"
ingested: 2026-05-01
related_urls:
  - "https://github.com/confident-ai/deepeval"
  - "https://deepeval.com/guides/guides-ai-agent-evaluation"
  - "https://docs.langchain.com/langsmith/evaluation"
  - "https://www.braintrust.dev/articles/deepeval-alternatives-2026"
  - "https://awesomeagents.ai/tools/best-llm-eval-tools-2026/"
---

# 에이전트 Eval 프레임워크 2026 — DeepEval vs LangSmith vs Braintrust

> 출처: [LangSmith Eval](https://www.langchain.com/langsmith/evaluation) · [DeepEval GitHub](https://github.com/confident-ai/deepeval) · [DeepEval AI Agent guide](https://deepeval.com/guides/guides-ai-agent-evaluation) · [Braintrust comparison](https://www.braintrust.dev/articles/deepeval-alternatives-2026) · [Awesome Agents 2026 ranking](https://awesomeagents.ai/tools/best-llm-eval-tools-2026/)

## 한 줄 요약

2026년 LLM·에이전트 eval 프레임워크 6대장: **DeepEval, Braintrust, Langfuse, LangSmith, Inspect AI, RAGAS**. 각자 **딱 맞는 자리가 다름** — 단일 챔피언은 없다. 위키의 [[concepts/llm-evaluation]] 다음 단계로 "**어떤 상황에 어떤 프레임워크**" 가이드가 비어 있음.

## 비교 표

| | **DeepEval** | **LangSmith** | **Braintrust** |
|--|------------|---------------|----------------|
| 라이선스 | Apache 2.0 (free) | SaaS (free tier + 유료) | SaaS |
| 강점 | 50+ research-backed metrics, **pytest 통합** | LangGraph trajectory full capture, multi-turn | 구조화된 실험 플랫폼 |
| 메트릭 예시 | G-Eval, task completion, answer relevancy, hallucination | 중간 결정·tool call 평가 | 사용자 정의 자유도 높음 |
| 실행 모델 | LLM-as-judge + 로컬 NLP 모델 | 트레이스 기반 evaluator | 트레이스 기반 |
| 적합 시점 | Python-first, 결정론적 graph-aware eval, 폭넓은 metric 필요 | LangChain/LangGraph 사용 + multi-turn + 엔터프라이즈 | 실험 비교·반복 자유도 |
| Off-the-shelf 통합 | pytest | LangGraph 네이티브 | 광범위 SDK |

## 핵심 통찰 (DeepEval guides 인용·짧게)

- **Agent eval은 단일 점수가 아니다**. **trajectory(궤적)** 전체 — tool call 순서, 중간 결정, reasoning step — 를 캡처해야 한다.
- **LLM-as-judge**가 사실상의 디폴트지만, **judge가 일관되지 않을 위험**(judge drift)에 대한 안전장치(다수결, 전통 NLP 모델 보조)가 필수.
- 회귀 검증은 **트레이스 + golden dataset** 결합 — 같은 입력에 대한 새 모델/하네스 버전의 성능을 시각화.

## 선택 가이드 (Braintrust·Awesome Agents 종합)

```
Are you LangChain/LangGraph-native?
  Yes → LangSmith (multi-turn, deployment까지 같은 자리)
  No  → ↓
Are you Python-first, want OSS, want pytest-style integration?
  Yes → DeepEval
  No  → ↓
Need multi-stack experiment platform with rich UI?
  Yes → Braintrust
  No  → Langfuse / Inspect AI / RAGAS 중에서 use case별
```

## OTel 시맨틱 컨벤션과의 관계

오늘 ingest한 [[concepts/gen-ai-observability]]의 **agent framework semconv**가 진화하면, 위 4개 eval 프레임워크가 **표준 트레이스를 공유**할 수 있게 된다. 즉 **eval 프레임워크 lock-in이 점점 약해진다** — 트레이스만 표준 OTel로 남기면 eval은 갈아끼울 수 있음.

## 위키 매핑

- 새 페이지 후보: `comparisons/agent-eval-frameworks` (이 비교를 위키에 등록)
- 보강: [[concepts/llm-evaluation]] — "어떤 프레임워크" 결정 가이드 추가, agent trajectory eval 강조
- 보강: [[concepts/gen-ai-observability]] — OTel ↔ eval framework 결합 그림 추가

confidence: medium (출처 다수 일치, 단 시장이 빠르게 변하므로 6개월 단위 갱신 권장)
