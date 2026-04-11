# 리서치: Vercel Workflow DevKit + OpenTelemetry GenAI/에이전트 관측

**날짜**: 2026-04-11  
**목적**: 에이전트 서버 하네스 보강 아이디어(내구 워크플로 + 표준 관측)에 대한 1차 출처 정리.

---

## 1. Vercel Workflow Development Kit (WDK)

### 요약

- 오픈소스 **TypeScript** 프레임워크. `async`/`await`를 그대로 쓰되, **`"use workflow"`** / **`"use step"`** 지시어로 **내구성(durability)**·재시도·영속화를 언어 수준에서 표현.
- 각 step은 **격리된 API Route**로 컴파일되고, 입출력이 기록되어 배포·크래시 후 **결정적 재생(deterministic replay)** 가능.
- 워크플로는 step 동안 **리소스를 소비하지 않고 suspend** 가능. `sleep("3d")`처럼 장기 대기도 “큐를 직접 깔지 않고” 표현하는 것이 목표에 가깝다.
- **Webhook**으로 외부 이벤트(결제 확인, 사용자 승인 등)까지 기다렸다가 같은 지점에서 재개하는 패턴이 문서화되어 있음 → **HITL**·외부 시스템 연동에 직접적으로 맞음.
- **관측**: 실행 전 구간의 step·입력·출력·pause·에러가 이벤트 로그로 남고, **추가 코드 없이** CLI·Web UI에서 추적 가능하다고 명시.
- **Worlds**: 로컬(Local World)과 프로덕션(Vercel World의 FdI 등)에서 동일 코드 이식. Postgres World 레퍼런스·서드파티 World 존재 → 벤더 락인 완화를 공식 스토리로 내세움.

### 에이전트와의 연결 (위키 관점)

- 긴 LLM 호출 체인, RAG 배치, “사용자 확인까지 며칠” 같은 **[[patterns/agent-server-harness]]** 의 **B 패턴(비동기 잡)** 을 직접 큐+DB로 짜는 대신, WDK가 오케스트레이션·영속화 층을 대신할 수 있음.
- 단, 런타임·과금·리전은 Vercel(또는 선택한 World) 정책에 종속 → **하네스 설계**에서 여전히 timeout·비용·시크릿은 앱 책임.

### 출처

- Vercel 블로그 (2025-10-23): [Built-in durability: Introducing Workflow Development Kit](https://vercel.com/blog/introducing-workflow)
- 공식 사이트: [useworkflow.dev](https://useworkflow.dev/)
- GitHub: [vercel/workflow](https://github.com/vercel/workflow)

---

## 2. OpenTelemetry · GenAI · AI 에이전트 관측

### 요약

- **GenAI semantic conventions** (OTel 스펙): 모델 호출·도구·벡터 DB 등 생성형 AI 시스템용 **표준 속성·스팬** 정의. URL: [Semantic conventions for generative AI systems](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- OpenTelemetry 블로그(2025): 에이전트는 **비결정적**이라 관측이 단순 장애 대응을 넘어 **eval·품질 루프의 입력**이 되기도 함. 벤더·프레임워크별 포맷 난립을 막기 위해 **표준 시맨틱 컨벤션**이 필요하다는 논지.
- **두 축**: (1) **에이전트 애플리케이션** 시맨틱 컨벤션 초안 — Google AI Agent 백서 등을 기반으로 SIG에서 논의. (2) **에이전트 프레임워크** 공통 컨벤션 — LangGraph, CrewAI, AutoGen 등에 걸친 상호운용.
- **계측 방식**: 프레임워크에 **내장 instrumentation** vs **OTel contrib·외부 패키지**로 주입. 장단이 블로그에 정리됨(유지보수·의존성·유연성).
- 장기적으로는 OTel이 소유하는 `instrumentation-genai` 등으로 수렴·기부 논의(Traceloop/OpenLLMetry 등 언급).

### 에이전트 서버와의 연결

- [[patterns/agent-server-harness]] 에서 말한 **관측(run_id, 단계 로그)** 을 “팀 나름의 JSON”이 아니라 **OTel 스팬**으로내면, 이후 벤더(Datadog 등)가 GenAI 컨벤션을 네이티브 지원하는 경우 **락인 완화**에 유리.
- 스펙은 **진화 중(experimental 포함)** — 버전·`OTEL_SEMCONV_STABILITY_OPT_IN` 류 옵션은 배포 시 확인 필요.

### 출처

- OpenTelemetry 스펙: [Gen AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- OpenTelemetry 블로그 (2025): [AI Agent Observability - Evolving Standards and Best Practices](https://opentelemetry.io/blog/2025/ai-agent-observability/)
- GenAI 프로젝트(커뮤니티): [gen-ai.md (OpenTelemetry community)](https://github.com/open-telemetry/community/blob/main/projects/gen-ai.md)

---

## 3. 위키 반영 계획 (실행 시)

- `wiki/tools/vercel-workflow.md` — WDK 요약·에이전트 적합성·한계
- `wiki/concepts/gen-ai-observability.md` — OTel GenAI·에이전트 관측 개념·실무 체크리스트
- `wiki/patterns/agent-server-harness.md` — 위 두 페이지로 링크 보강
