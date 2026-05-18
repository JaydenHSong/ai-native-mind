---
source_url: "https://awesomeagents.ai/tools/best-llm-eval-tools-2026/"
title: "Agent Eval Framework Deep — Inspect AI · Langfuse · RAGAS 추가"
publisher: "여러 출처 종합"
ingested: 2026-05-01
related_urls:
  - "https://github.com/confident-ai/deepeval"
  - "https://docs.langchain.com/langsmith/evaluation"
  - "https://www.braintrust.dev/articles/deepeval-alternatives-2026"
  - "https://langfuse.com/guides/cookbook/example_pydantic_ai_mcp_agent_evaluation"
  - "https://aws.amazon.com/blogs/machine-learning/evaluate-amazon-bedrock-agents-with-ragas-and-llm-as-a-judge/"
  - "https://aimultiple.com/llm-eval-tools"
  - "https://research.aimultiple.com/agentic-monitoring/"
---

# Agent Eval Framework — Inspect AI · Langfuse · RAGAS 추가 정리

> 출처 종합: [Awesome Agents 2026 ranking](https://awesomeagents.ai/tools/best-llm-eval-tools-2026/) · [Langfuse 공식 가이드](https://langfuse.com/guides/cookbook/example_pydantic_ai_mcp_agent_evaluation) · [Braintrust 비교 분석](https://www.braintrust.dev/articles/deepeval-alternatives-2026) · [AIMultiple 평가 랜드스케이프](https://aimultiple.com/llm-eval-tools) · [AWS Bedrock × RAGAS 가이드](https://aws.amazon.com/blogs/machine-learning/evaluate-amazon-bedrock-agents-with-ragas-and-llm-as-a-judge/)

## 한 줄 요약

오늘 ingest한 [eval framework 비교 raw](raw/articles/2026-05-01-agent-eval-frameworks-2026.md)에 **Inspect AI · Langfuse · RAGAS**의 자세한 결정 기준을 추가. 6개 프레임워크의 **에이전트 trajectory 평가 능력**과 **OTel/오픈소스 정도**를 실제 결정에 쓸 수 있게 정리.

## 6개 프레임워크 풀 비교

| | **DeepEval** | **LangSmith** | **Braintrust** | **Langfuse** | **Inspect AI** | **RAGAS** |
|--|------------|---------------|----------------|--------------|----------------|-----------|
| 라이선스 | Apache 2.0 | SaaS (free + paid) | SaaS | **MIT** (셀프호스팅) | MIT | Apache 2.0 |
| 셀프호스팅 | OK | 제한적 | 제한적 | **Docker/K8s 1급** | OK | OK |
| 강점 | pytest 통합 + 50 metric | LangGraph trajectory | 실험 비교 | **OTel + judge + 라벨링 큐** | UK AISI 보안 평가 출신 | RAG·retrieval 평가 |
| Agent trajectory | OK (multi-step) | **네이티브** | OK | OK | OK | **부분** (RAG 중심) |
| LLM-as-judge | OK | OK | OK | OK | OK | OK |
| 인간 라벨링 큐 | 부족 | OK | OK | **OK (강점)** | 부분 | 없음 |
| OTel 호환 | 부분 | LangChain native | 부분 | **OTel 1급** | 부분 | 없음 (라이브러리만) |
| RAG 메트릭 | OK | OK | OK | OK | 부분 | **표준** (정답) |
| 통합 | pytest | LangGraph | 광범위 SDK | OpenAI/Anthropic/LangChain/LlamaIndex/LiteLLM + OTel | 다양 | LangChain/LlamaIndex/Langfuse/LangSmith/Phoenix 안에 통합 |

## 결정 가이드 (확장)

```
1. RAG 중심? (retrieval 품질이 핵심)
   Yes → RAGAS (다른 플랫폼의 component로 박아 쓰기)

2. LangChain/LangGraph 네이티브 + 엔터프라이즈?
   Yes → LangSmith

3. 셀프호스팅 + OTel + 라벨링 큐 + 무료?
   Yes → Langfuse (Docker 1줄로 띄우기)

4. Python pytest 스타일 + 광범위 metric?
   Yes → DeepEval

5. 보안 평가 / red-teaming 중심? (UK AISI 출신)
   Yes → Inspect AI

6. 실험 플랫폼 SaaS + 풍부 UI?
   Yes → Braintrust
```

## 3가지 평가 전략 (전 프레임워크 공통)

| 전략 | 무엇을 보는가 | 비유 | 어디에 강한가 |
|------|--------------|------|--------------|
| **Final Response Eval** | 사용자 입력 + 최종 답만 | 시험지 결과만 채점 | 최종 품질 회귀 |
| **Trajectory Eval** | 도구 호출 순서·중간 결정 | 풀이 과정 채점 | 디버깅, **에이전트의 핵심** |
| **Single Step Eval** | 각 결정 단계를 격리해서 | 한 문제씩 분해 채점 | 회귀의 원인 위치 찾기 |

→ **에이전트는 Final Response만 보면 안 된다**. 결과는 같아도 **trajectory가 망가졌으면** 다음 turn에서 폭발한다.

## OTel 시맨틱 컨벤션과의 그림 (다시)

오늘 오전 ingest한 [OTel AI Agent Observability raw](raw/articles/2026-05-01-otel-ai-agent-observability.md)의 컨벤션이 진화하면:

- 트레이스를 표준 OTel 포맷으로 남김
- eval framework들은 같은 트레이스를 **lock-in 없이** 소비 가능
- → eval framework lock-in이 약해지고 **트레이스 lock-in**(OTel)만 남음
- 이는 [[concepts/gen-ai-observability]] 의 핵심 메시지

## Langfuse가 강조되는 이유 (오늘 추가 발견)

- **MIT + Docker** 셀프호스팅 디폴트 — 1인 개발자/규제 팀에 매력
- **OTel 1급 지원** + **judge + 라벨링 큐** 한 곳에
- OpenAI/Anthropic/LangChain/LlamaIndex/LiteLLM SDK 모두 통합
- → 위키 [[concepts/gen-ai-observability]] 에서 **자유 + 통합** 축에서 가장 강한 선택지

## 위키 매핑

- 새 페이지 후보: `comparisons/agent-eval-frameworks` — 위 6개 프레임워크 비교 표 + 결정 가이드 + trajectory eval 강조
- 보강 후보: [[concepts/llm-evaluation]] — trajectory eval 3전략 표 + RAGAS 통합 패턴
- 보강 후보: [[concepts/gen-ai-observability]] — Langfuse 자세한 위치 메모

confidence: high (다수 출처 일치, 단 시장 변동성 큼 — 6개월마다 갱신 권장)
