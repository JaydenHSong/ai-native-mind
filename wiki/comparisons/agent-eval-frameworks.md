---
title: "Agent Eval Frameworks 비교 (2026)"
category: comparisons
tags: [eval, agent, langsmith, deepeval, langfuse, ragas, braintrust, inspect-ai, observability]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-agent-eval-frameworks-2026.md"
  - "raw/articles/2026-05-01-eval-frameworks-deep.md"
  - "raw/articles/2026-05-01-otel-ai-agent-observability.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[comparisons/agent-frameworks]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# Agent Eval Frameworks 비교 (2026)

## 쉽게 읽기

**비유**: 학원이 학생 평가하는 도구를 고른다고 보면 된다. **단답형 시험**(final response)만 보는 도구, **풀이 과정**(trajectory)을 보는 도구, **한 문제씩 분해 채점**하는 도구가 따로 있다. 에이전트는 결과만 같아도 풀이가 망가졌으면 다음 회차에서 폭발하니까 **풀이 과정을 보는 도구**가 핵심이다.

| 용어 | 풀이 |
|------|------|
| **Trajectory** | 에이전트의 **풀이 과정** — 도구 호출 순서·중간 결정·reasoning |
| **LLM-as-judge** | 다른 LLM이 **채점자 역할** |
| **Trace** | 한 요청이 시스템을 지나며 남긴 **발자국 묶음** |
| **OTel** | OpenTelemetry — 트레이스 표준 |

## 핵심 차이 (한 줄)

**단일 챔피언 없음**. 6개 프레임워크가 각자 다른 자리에 강하다 — RAG는 RAGAS, LangGraph 네이티브는 LangSmith, 셀프호스팅+라벨링은 Langfuse, pytest 스타일은 DeepEval, 보안 평가는 Inspect AI, 실험 플랫폼은 Braintrust.

## 비교표

| | **DeepEval** | **LangSmith** | **Braintrust** | **Langfuse** | **Inspect AI** | **RAGAS** |
|--|------------|---------------|----------------|--------------|----------------|-----------|
| 라이선스 | Apache 2.0 | SaaS (free + paid) | SaaS | **MIT** | MIT | Apache 2.0 |
| 셀프호스팅 | OK | 제한적 | 제한적 | **Docker/K8s 1급** | OK | OK |
| 강점 | pytest + 50+ metric | LangGraph trajectory | 실험 비교 UI | OTel + judge + 라벨링 큐 | UK AISI 보안 평가 출신 | RAG·retrieval 정답 |
| Agent trajectory | OK (multi-step) | **네이티브 1급** | OK | OK | OK | 부분 (RAG 중심) |
| LLM-as-judge | OK | OK | OK | OK | OK | OK |
| 인간 라벨링 큐 | 부족 | OK | OK | **강점** | 부분 | 없음 |
| OTel 호환 | 부분 | LangChain native | 부분 | **1급** | 부분 | 없음 |
| RAG 메트릭 | OK | OK | OK | OK | 부분 | **표준** |
| 통합 SDK | pytest | LangGraph | 광범위 | OpenAI/Anthropic/LangChain/LlamaIndex/LiteLLM + OTel | 다양 | LangChain/LlamaIndex/Langfuse/LangSmith/Phoenix 안에 |
| 비용 | 무료 (OSS) | tier 기반 | tier 기반 | 무료 (OSS) | 무료 (OSS) | 무료 (OSS) |

## 결정 가이드

```
1. RAG 중심? (retrieval 품질이 핵심 평가축)
   Yes → RAGAS — 다른 플랫폼의 component로

2. LangChain/LangGraph 네이티브 + 엔터프라이즈?
   Yes → LangSmith — multi-turn·trajectory가 디폴트

3. 셀프호스팅 + OTel + 라벨링 큐 + 무료?
   Yes → Langfuse — Docker 1줄, 1인부터 엔터프라이즈까지

4. Python pytest 스타일 + 광범위 metric + OSS?
   Yes → DeepEval — 50+ research-backed

5. 보안 평가 / red-teaming 중심? (UK AISI 출신)
   Yes → Inspect AI — adversarial·jailbreak 평가에 강함

6. 실험 플랫폼 SaaS + 풍부 UI?
   Yes → Braintrust — 비교·반복 자유도
```

## 3가지 평가 전략 (전 프레임워크 공통)

| 전략 | 무엇을 보는가 | 비유 | 어디에 강한가 |
|------|--------------|------|--------------|
| **Final Response** | 사용자 입력 + 최종 답만 | 시험지 결과만 채점 | 최종 품질 회귀 |
| **Trajectory** | 도구 호출 순서·중간 결정 | 풀이 과정 채점 | 디버깅, **에이전트의 핵심** |
| **Single Step** | 각 결정을 격리해서 | 한 문제씩 분해 채점 | 회귀의 원인 위치 찾기 |

→ **에이전트는 Final Response만 보면 안 된다**. 결과는 같아도 trajectory가 망가졌으면 다음 turn에서 폭발한다. 위키 [[concepts/llm-evaluation]]의 다음 단계.

## 언제 무엇을 쓸까

### LangSmith → LangChain/LangGraph 네이티브

- 이미 LangGraph 위에 짠 에이전트라면 디폴트
- LangGraph trajectory를 1급으로 캡처
- Deep Agents Deploy와의 통합도 네이티브
- 약점: LangChain 생태계 밖이면 매력 떨어짐

### Langfuse → 셀프호스팅 + 자유도

- **MIT + Docker** — 1인 개발자/규제 팀에 매력
- OTel 1급 + 라벨링 큐 + judge 한 곳에
- OpenAI/Anthropic/LangChain/LlamaIndex/LiteLLM 모두 통합
- → 위키 [[concepts/gen-ai-observability]]에서 **자유 + 통합** 축에서 가장 강한 선택

### DeepEval → Python pytest 워크플로

- 50+ research-backed metric (G-Eval, hallucination, answer relevancy 등)
- pytest와 통합 → CI에서 **에이전트 회귀 테스트**가 자연
- LLM-as-judge + 로컬 NLP 모델 보조

### RAGAS → RAG의 표준 component

- 단독 플랫폼이 아니라 **scoring 라이브러리**
- LangSmith/Langfuse/Phoenix 안에 박혀 있음
- retrieval quality·context relevance·faithfulness 표준 metric

### Inspect AI → 보안·red-teaming 평가

- UK AISI(AI Safety Institute) 출신 — adversarial 평가 강점
- prompt injection, jailbreak, agent goal hijack 평가에 적합
- [[concepts/agent-supply-chain-security]] 의 6층 defense 검증에 짝

### Braintrust → 실험 플랫폼 SaaS

- 풍부한 UI, 실험 비교·반복 강점
- 다중 모델·프롬프트 버전 비교에 강함
- SaaS — 셀프호스팅 안 됨

## OTel 시맨틱 컨벤션과의 그림

오늘 ingest한 [[concepts/gen-ai-observability]]의 **agent framework semconv**가 진화하면:

- 트레이스를 표준 OTel 포맷으로 남김
- eval framework들은 같은 트레이스를 **lock-in 없이** 소비 가능
- → eval framework lock-in이 약해지고 **트레이스 lock-in**(OTel)만 남음

→ **2026년 권장**: 트레이스는 **OTel로 표준화**, eval은 **상황별 갈아끼움** 가능하도록 설계.

## 실무 권장 조합 (2026 시점)

| 시나리오 | 권장 조합 |
|----------|----------|
| 1인 개발자 MVP | Langfuse (셀프호스팅) + RAGAS 박아 쓰기 |
| LangGraph 기반 팀 | LangSmith 네이티브 |
| 대규모 엔터프라이즈 | LangSmith or Braintrust + Inspect AI for security |
| 규제 산업 (금융·의료·정부) | Langfuse 셀프호스팅 + Inspect AI |
| Python pytest 기반 워크플로 | DeepEval + RAGAS |
| 학술 / red-teaming 중심 | Inspect AI |

## 결론

- **단일 정답 없음**. 6개의 강점이 다르다
- **트레이스를 OTel로 표준화**하면 eval framework 갈아끼움이 가능 → lock-in 최소
- **Trajectory eval이 최소 필수**. Final Response만 보는 평가는 에이전트에 부적합
- 1인부터 엔터프라이즈까지 **Langfuse가 가장 균형** — MIT + OTel + 라벨링 큐

## 관련 페이지

- [[concepts/llm-evaluation]] — eval 기초 + 본 비교의 입문
- [[concepts/gen-ai-observability]] — OTel 시맨틱 컨벤션 + Langfuse 위치
- [[comparisons/agent-frameworks]] — 어떤 프레임워크 위에서 도는가의 짝
- [[concepts/agent-supply-chain-security]] — Inspect AI가 짝이 되는 보안 평가

## 참고 소스

- [Eval Framework 비교 raw (1차)](raw/articles/2026-05-01-agent-eval-frameworks-2026.md)
- [Eval Framework Deep raw (2차, Inspect/Langfuse/RAGAS 추가)](raw/articles/2026-05-01-eval-frameworks-deep.md)
- [OTel AI Agent Observability raw](raw/articles/2026-05-01-otel-ai-agent-observability.md)
- [Best LLM Eval Tools 2026 (Awesome Agents)](https://awesomeagents.ai/tools/best-llm-eval-tools-2026/)
- [DeepEval alternatives 2026 (Braintrust)](https://www.braintrust.dev/articles/deepeval-alternatives-2026)
- [LangSmith Evaluation Docs](https://docs.langchain.com/langsmith/evaluation)
- [Langfuse 공식 — Agent Eval 가이드](https://langfuse.com/guides/cookbook/example_pydantic_ai_mcp_agent_evaluation)
- [LLM Evaluation Landscape (AIMultiple)](https://aimultiple.com/llm-eval-tools)
