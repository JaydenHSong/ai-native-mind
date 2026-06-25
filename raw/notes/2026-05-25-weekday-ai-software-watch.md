 Weekday AI software watch — 2026-05-25

**Written**: 2026-05-25  
**Goal**: 평일 저녁 위키 유지보수와 함께, 실제 software workflow에 영향을 주는 단기 AI software 변화를 공식 release/source 기준으로 빠르게 훑는다.  
**Primary sources**: [Cline v3.85.0 release](https://github.com/cline/cline/releases/tag/v3.85.0), [browser-use 0.12.8 release](https://github.com/browser-use/browser-use/releases/tag/0.12.8), [LangGraph 1.2.1 release](https://github.com/langchain-ai/langgraph/releases/tag/1.2.1), [Langfuse v3.175.0 release](https://github.com/langfuse/langfuse/releases/tag/v3.175.0), [Anthropic — Project Glasswing: An initial update](https://www.anthropic.com/research/glasswing-initial-update).

## Selection rule

- 포함: release notes / docs / official news 중에서 **coding agents / operator runtime / evals / observability / security control** 에 바로 연결되는 변화
- 제외: 단순 모델 화제, 투자/규제 일반론, 재현 경로 없는 데모, workflow impact가 약한 provider catalog churn

## Shortlist

### 1) Cline v3.85.0 (2026-05-25)
- Source: <https://github.com/cline/cline/releases/tag/v3.85.0>
- Notable:
  - `/lg-task` URI webhook integration added for LG dashboard flows
  - Gemini 3.5 Flash / DeepSeek V4 Flash & Pro / SAP AI Core GPT-5.5 support added
  - Vertex AI global endpoint handling for Claude fixed
- Why it matters:
  - 단순 모델 추가보다, **dashboard↔agent handoff surface** 와 provider routing 안정성이 실무 workflow에 직접 연결됨

### 2) browser-use 0.12.8 (2026-05-23)
- Source: <https://github.com/browser-use/browser-use/releases/tag/0.12.8>
- Notable:
  - daemon unix socket file owner-only access로 제한
  - prompt/history packaging 관련 정리: per-step metadata tail block 이동, user request ordering 조정
  - OpenRouter pricing fallback, Gemini recommendation update
- Why it matters:
  - self-hosted browser agent에서는 **local control-plane security** 와 **prompt packing stability** 가 중요함

### 3) LangGraph 1.2.1 (2026-05-21)
- Source: <https://github.com/langchain-ai/langgraph/releases/tag/1.2.1>
- Notable:
  - `before_builtins` opt-in for stream transformers
  - tool results leaking into v3 messages fix
- Why it matters:
  - stream shaping / message hygiene는 long-running agent graph에서 tracing·UI·downstream parser 안정성에 영향

### 4) Langfuse v3.175.0 (2026-05-21)
- Source: <https://github.com/langfuse/langfuse/releases/tag/v3.175.0>
- Notable:
  - public API에 `trace_context` field group 노출
  - trace download endpoint 추가
  - observations available via MCP
  - production monitoring evaluator templates / monitors schema 작업
- Why it matters:
  - observability가 passive logging에서 **downloadable trace artifact + MCP-readable control surface + monitor/eval workflow** 쪽으로 이동 중

## Deferred / watch-only

### Anthropic Project Glasswing update (2026-05-22)
- Source: <https://www.anthropic.com/research/glasswing-initial-update>
- Early signal:
  - Claude Mythos Preview와 partner 네트워크로 critical/high severity vulnerability 대량 탐지
  - 병목이 “찾기”에서 “검증·공개·패치”로 이동했다고 명시
- Why deferred:
  - software work 관점에서는 중요하지만, 오늘 시점에는 **직접 사용 가능한 product/API/workflow change** 보다는 security program update에 가까움
  - 추후 coding/security workflow에 구체 기능·tooling 형태로 연결될 때 위키 본문 반영 검토
