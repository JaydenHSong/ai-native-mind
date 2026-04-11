# AI 네이티브 학습 자료 큐레이션 (외부 링크 모음)

**작성**: 2026-04-12  
**용도**: 위키 `ingest` 전 **1차 소스 풀** — 관심 축별로 골라 읽고, `raw/articles/` 클립 또는 요약 노트로 정리한 뒤 위키 페이지와 연결하면 좋음.

---

## 1. 철학·에이전트 설계 (읽을 거리)

| 자료 | 왜 볼지 |
|------|---------|
| [Anthropic — Building effective agents](https://www.anthropic.com/research/building-effective-agents) | 오케스트레이션 패턴·단순함 우선의 기준점. 위키 [[concepts/ai-orchestration]]과 직결. |
| [Anthropic Engineering (목록)](https://www.anthropic.com/engineering) | 컨텍스트 엔지니어링·도구 설계 등 최신 글 허브. |
| [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | JIT 로딩·메모리·도구 설계. [[concepts/context-engineering]] 심화. |
| [Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) | 에이전트용 도구 API·스키마 설계. |
| [Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use) | 도구 검색·프로그래매틱 호출 등 고급 패턴. |
| [Martin Fowler — Harness engineering](https://martinfowler.com/articles/harness-engineering.html) | Agent = Model + Harness. 위키 [[concepts/harness-engineering]] 원전. |

---

## 2. 실무·산업 동향 (넓게 보기)

| 자료 | 왜 볼지 |
|------|---------|
| [Simon Willison — 2025: The year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) | 코딩 에이전트·MCP·스킬 생태계 등 한 해 압축. |
| [Simon Willison — LLM predictions for 2026](https://simonwillison.net/2026/Jan/8/llm-predictions-for-2026/) | 샌드박스·에이전트 운영 쪽 전망. |
| [Google Cloud — What are AI agents?](https://cloud.google.com/discover/what-are-ai-agents) | OTel·백서와 맞물리는 “에이전트” 정의 참고. |

---

## 3. 코드·API·에이전트 구현 (따라 하기)

| 자료 | 왜 볼지 |
|------|---------|
| [OpenAI Cookbook — Agents 토픽](https://developers.openai.com/cookbook/topic/agents) | 공식 예제·패턴. |
| [OpenAI — Function calling 가이드](https://developers.openai.com/api/docs/guides/function-calling) | tool 호출 기초. [[concepts/tool-use]] 보강. |
| [OpenAI Cookbook — Reasoning + function calls 예제](https://developers.openai.com/cookbook/examples/reasoning_function_calls) | 추론 모델 + 도구 루프. |
| [openai-cookbook (GitHub)](https://github.com/openai/openai-cookbook) | 노트북·코드 검색용. |
| [Vercel AI SDK 문서](https://ai-sdk.dev/docs) | `streamText`, UI, provider. |
| [useworkflow.dev — Building Durable AI Agents](https://useworkflow.dev/docs/ai) | AI SDK + WDK `DurableAgent`. [[tools/vercel-workflow]]와 연결. |
| [Hugging Face — Agents Course](https://huggingface.co/agents-course) | 무료·모듈형·smolagents/LangGraph 등 (Python 중심). |
| [DeepLearning.AI — Agentic AI](https://learn.deeplearning.ai/courses/agentic-ai/information) | Reflection·Tool use·Planning·Multi-agent 개론 (Andrew Ng, 중급). |

---

## 4. MCP·표준·관측

| 자료 | 왜 볼지 |
|------|---------|
| [Model Context Protocol — 소개](https://modelcontextprotocol.io/docs/getting-started/intro) | MCP 입문. |
| [MCP Specification](https://modelcontextprotocol.io/specification/2025-03-26) | 스펙 버전은 문서 상단에서 최신 확인. |
| [OpenTelemetry — Gen AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | [[concepts/gen-ai-observability]] 원전. |
| [OpenTelemetry Blog — AI agent observability](https://opentelemetry.io/blog/2025/ai-agent-observability/) | 프레임워크 vs 앱 계측 논의. |

---

## 5. 제품·운영·LLM-Wiki 메타

| 자료 | 왜 볼지 |
|------|---------|
| [Tobi Lütke — My LLM coding workflow (YouTube)](https://www.youtube.com/watch?v=z93WgDDMTzs) | LLM-Wiki 패턴 원천 아이디어 (영상). |
| [Tobi Lütke — My LLM coding workflow (transcript/노션 정리는 웹 검색으로 보조)](https://www.youtube.com/watch?v=z93WgDDMTzs) | 위키 [[patterns/llm-wiki]] 맥락. |

*(동일 영상 — 클립 노트로 `raw/articles/`에 저장해도 좋음.)*

---

## 5b. Harness Engineering만 깊게

- 전용 노트: [`2026-04-12-harness-engineering-deep-dive.md`](2026-04-12-harness-engineering-deep-dive.md) — Fowler Humans-and-Agents, Anthropic 도구 글, 운영 센서(OTel) 연결.

## 5c. 보안 × TypeScript만

- 전용 노트: [`2026-04-12-security-typescript-corpus.md`](2026-04-12-security-typescript-corpus.md) — OWASP LLM Top 10, MCP 인가, AI SDK(Zod·도구·MCP·미들웨어)와 매핑.

## 6. 권장 읽기 순서 (이 위키 기준 짧은 코스)

1. Anthropic **Building effective agents** → 위키 오케스트레이션 페이지와 대조.  
2. **Context engineering** 글 → JIT·도구와 연결해 메모.  
3. OpenAI **Cookbook Agents** 중 1~2개 노트만 실행.  
4. **MCP intro + spec** 목차 훑기 → [[concepts/mcp]]에 빠진 각도 메모.  
5. Simon Willison **Year in LLMs**로 한 번 정리 → `journal/`에 주간 회고 한 편.  
6. (선택) HF **Agents Course** 유닛 1~2 또는 DeepLearning **Agentic AI** 1주차.

---

## 다음 액션 (선택)

- 링크 하나 골라 `raw/articles/2026-04-12-제목-slug.md`로 Web Clipper 저장 후 **ingest** 요청.  
- 실습만 하고 싶으면 `wiki/journal/2026-04-12.md`에 5줄 로그만 남겨도 축적 가치 있음.
