---
title: "GenAI·에이전트 관측 가능성 (OpenTelemetry)"
category: concepts
tags: [observability, opentelemetry, genai, agents, tracing, semconv, event-sourcing, runtime-audit]
created: 2026-04-11
updated: 2026-05-24
sources:
  - "raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md"
  - "raw/articles/2026-05-01-otel-ai-agent-observability.md"
  - "raw/articles/2026-05-03-datadog-state-of-ai-engineering-2026.md"
  - "raw/articles/2026-05-06-agentic-harness-engineering-observability.md"
  - "raw/articles/2026-05-24-activegraph-log-is-the-agent.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/mcp]]"
status: active
confidence: high
---

# GenAI·에이전트 관측 가능성 (OpenTelemetry)

## 쉽게 읽기

**비유**: 앱이 길게 돌 때 **블랙박스**처럼 “어디서 멈췄는지, 누가 뭘 불렀는지”를 남기는 것이 관측이다. **OpenTelemetry(OTel)** 는 여러 도구가 서로 다른 말을 쓰지 않게 **이름표 규칙**을 맞추려는 공개 표준이다. **GenAI semantic conventions**는 그중에서도 “LLM 호출·도구 호출” 같은 AI 전용 이름표다.

| 용어 | 풀이 |
|------|------|
| **트레이스** | 한 요청이 시스템을 지나며 남긴 **발자국 묶음** |
| **스팬(span)** | 발자국 한 칸(예: 모델 호출 한 번) |
| **메트릭·로그** | 숫자(건수·시간·비용)와 글자 로그 |

## 한줄 정의

생성형 AI·에이전트 앱에서 나오는 **트레이스·메트릭·로그**를 **OpenTelemetry(OTel)** 의 **GenAI semantic conventions** 쪽으로 맞춰, 벤더·프레임워크에 덜 묶이게 관측하는 접근.

## 왜 “그냥 로그”가 아닌가

- 에이전트는 **비결정적**이라, 관측 데이터가 장애 대응을 넘어 **품질·eval 피드백 루프**로 쓰이기도 한다 (OTel 블로그 논지).
- 프레임워크마다 다른 포맷이면, A/B 테스트·비용·지연 분석이 **통합 불가**에 가깝다.

## OpenTelemetry가 다루는 층

| 층 | 설명 |
|----|------|
| **GenAI semantic conventions** | 모델 호출, 도구 사용, 벡터 DB 등 **속성·스팬 이름**을 표준화. [공식 스펙 문서](https://opentelemetry.io/docs/specs/semconv/gen-ai/) |
| **에이전트 애플리케이션 컨벤션** | 개별 에이전트 엔티티 관측. 초안·SIG 논의 진행 중. |
| **에이전트 프레임워크 컨벤션** | LangGraph, CrewAI 등 **공통** 표면 + 벤더 확장. |

스펙은 **진화 중**이므로, 배포 시점의 버전·실험 플래그(예: stability opt-in)를 릴리즈 노트와 함께 고정하는 것이 하네스의 일부다.

## 계측 두 갈래 (요약)

1. **프레임워크 내장 instrumentation** — 도입 쉬움, OTel 버전·컨벤션 따라가기 책임은 프레임워크 측.  
2. **외부 OTel instrumentation 패키지** — 유연, 다만 패키지 조합·파편화 리스크.

어느 쪽이든 **에이전트 프레임워크 시맨틱 컨벤션에 맞출 것**이 상호운용의 전제로 강조된다 (OTel 블로그).

### 두 갈래 의사결정 가이드 (2026-05-01 추가)

OTel 공식 블로그 [AI Agent Observability — Evolving Standards and Best Practices (Liu·Solomon, 2025-03-06)](https://opentelemetry.io/blog/2025/ai-agent-observability/)의 트레이드오프를 표로 정리.

| 항목 | Baked-in (예: CrewAI) | 외부 OTel 패키지 (Traceloop, Langtrace, [`instrumentation-genai`](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation-genai)) |
|------|------|------|
| 사용자 디폴트 | 켜져 있음 | 별도 추가 |
| 신기능 동시 계측 | 쉽다 | 패키지 사이클 별도 |
| Bloat | 관측 안 쓰는 사용자에게 부담 | 없음 |
| OTel 버전 lock-in | 위험 (프레임워크가 따라가야 함) | 패키지 단위로 갱신 |
| 고급 사용자 유연성 | 낮음 | 높음 |
| OTel 컨벤션 추적 | 프레임워크 책임 | 커뮤니티 검토 가능 |

**Baked-in 측 best practice**: 토글 설정, 외부 패키지와 충돌 회피, [OTel registry](https://opentelemetry.io/ecosystem/registry/) 등록.

**장기 방향**: 외부 instrumentation도 자체 repo → OTel-owned repo로 이전(예: Traceloop의 [기증 진행](https://github.com/open-telemetry/community/issues/2571))이 권장된다.

### AI agent application ≠ AI agent framework

OTel 글의 핵심 구분:

- **AI agent application**: 자율적으로 특정 태스크를 수행하는 개별 AI 엔티티
- **AI agent framework**: 에이전트를 만들고/관리하고/배포할 인프라 — IBM Bee AI, IBM wxFlow, CrewAI, AutoGen, Semantic Kernel, LangGraph, PydanticAI 등

→ 시맨틱 컨벤션도 **app convention**과 **framework convention**으로 나뉘며 ([app issue #1732](https://github.com/open-telemetry/semantic-conventions/issues/1732), [framework issue #1530](https://github.com/open-telemetry/semantic-conventions/issues/1530)), 프레임워크는 공통 표준 위에 자체 vendor convention을 얹을 수 있다.

또한 텔레메트리는 단순 모니터링이 아니라 **eval 피드백 루프 입력**이다 — 트레이스의 `trace_id`·세션을 eval 데이터셋과 join하면 프레임워크가 달라도 비용·지연·품질 회귀를 통합 분석할 수 있다.

### 2026-05-03 보강 — Datadog State of AI Engineering 2026 (1,000+ 고객 트레이스)

[Datadog State of AI Engineering 2026](https://www.datadoghq.com/state-of-ai-engineering/) 리포트는 **1,000+ 고객사 LLM 트레이스**로 프로덕션 현실을 정량화. 관측이 옵션이 아니라는 본 페이지 주장에 데이터를 댄다.

| 사실 | 수치 | 함의 |
|------|------|------|
| 모델 다변화 | **70%+ 조직이 3개+ 모델**, 6개+ 운용 비율 거의 2배 | 모델 게이트웨이가 표준 |
| 옛 모델 잔존 | GPT-4o **22%**, Sonnet 4.5 **19%** (2026-03 기준) | "모델 부채"가 거버넌스 문제 |
| 프레임워크 채택 | 1년 만에 **9% → 18%**, 서비스 수도 2배 | sprawl → 깊은 텔레메트리 필수 |
| 시스템 프롬프트 비중 | 입력 토큰의 **69%** | scaffolded agent의 비용 핵심 |
| Prompt caching 활용 | 지원 모델에서 **28%만** cached-read | [[patterns/prompt-caching|prompt caching]]은 여전히 가장 큰 미수확 ROI |
| Top 실패 모드 | rate limit **30~60%** of all errors | backpressure·budget·queue가 1순위 안전 장치 |
| 모놀리식 에이전트 | **59%가 단일 호출**, 3개+ 호출은 **18%** | 멀티 에이전트는 갈 길 멀고, 가는 순간 trace propagation이 필수 |

핵심 메시지(Vercel Guillermo Rauch 인용 요지): "다음 에이전트 실패 물결은 *할 수 없는 것*이 아니라 *팀이 관측할 수 없는 것*에서 온다." 즉, **GenAI semconv → 트레이스 → eval 루프**의 본 페이지 흐름이 관측 사치가 아니라 신뢰성 인프라의 1번지라는 1,000개 회사 분량의 정량 근거다.

운영 권고와의 연결:

- **rate limit이 1위 실패 모드**는 [[patterns/agent-server-harness]]의 "타임아웃·취소·부분 실패" 표를 강화 — backpressure·budget이 nice-to-have가 아니다.
- **system prompt 69% / cache 28%**는 [[patterns/prompt-caching]]의 "90% 절감"이 이론치가 아니라 **대다수 조직이 아직 안 한 것**이라는 데이터 — 캐시 prefix 재사용 가능한 prompt layout이 IDE-level 표준이 되어야.
- **모델 부채**는 [[concepts/cognitive-debt]]의 AI 버전. 옛 모델 retire 정책을 운영 룰북에 명문화 필요.

## 서버 하네스와 연결

- [[patterns/agent-server-harness]] 의 “관측: `run_id`, 단계 로그”를 **표준 스팬**으로 올리면, 이후 APM이 GenAI 컨벤션을 소비할 때 **동일 대시보드**로 모델·도구·에이전트 단계를 잇기 쉽다.
- [[concepts/harness-engineering]] 의 **Sensors**를 “린트만”이 아니라 **분산 트레이스**까지 확장하는 그림.
- [[concepts/llm-evaluation]] 과 짝: 트레이스에 붙은 `trace_id`·세션을 eval 데이터셋과 join하면 회귀 분석이 쉬워진다.

## 2026-05-06 보강 — Agent Design-Level Observability (AHE)

[Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses (arXiv 2604.25850)](https://arxiv.org/abs/2604.25850)는 **인프라 레벨 관측(OTel/Datadog)**과 **agent design 레벨 관측**을 같은 단어 다른 레이어로 분리해 본다. 자동 하네스 진화가 trial-and-error로 붕괴하지 않으려면 셋이 **모두** 필요하다.

| Pillar | OTel/인프라 레벨에 있는 것 | Agent design 레벨에서 추가로 필요한 것 |
|--------|---------------------------|------------------------------------|
| **Component observability** | 서비스·프로세스 토폴로지 | **편집 가능 컴포넌트(`H`의 prompt/tool/eval룰/orchestration 코드) 각각이 file-level로 분리**, revertible |
| **Experience observability** | 트레이스·로그(원시) | 수백만 토큰 trajectory를 **layered drill-down evidence corpus**로 distill (= 진화 에이전트가 실제 소비 가능한 형태) |
| **Decision observability** | 변경 이력(deploy log) | 모든 edit ↔ **self-declared prediction** → 다음 라운드 task 결과로 **falsifiable contract** 검증 |

**정량**: AHE 10 iterations에서 Terminal-Bench 2 pass@1 **69.7% → 77.0%**, 사람이 만든 SOTA harness Codex-CLI(71.9%)와 ACE/TF-GRPO 능가. 즉 **관측 디자인이 잘 된 자동 진화**가 사람의 수공예 SOTA를 넘긴다.

### 우리 위키에 즉시 적용

- 현재 wiki의 **Sensors = lint + frontmatter 검증**은 component observability 만 충족. **decision observability** 가 없다 → ingest log에 *“이 edit이 무엇을 고칠 것이라 주장하는가”* 필드(self-declared prediction) 한 줄 추가하면 falsifiable contract가 생긴다.
- 하네스 컴포넌트(CLAUDE.md, templates/, 프롬프트 스니펫, eval 룰)를 **하나의 큰 문서가 아니라 작은 파일들로** 유지 — revertible성과 attribution이 살아남는 이유는 component observability 정의 그대로다.

### Datadog 정량 진단(2026-05-03)과 짝

위쪽의 **"2026-05-03 보강 — Datadog State of AI Engineering 2026"** 섹션이 **인프라 측 운영 부채**(rate limit·cache 활용 부족)를 보여줬다면, AHE는 **agent design 측 관측 결손**(왜 그 edit이 좋아졌는지 attribute 못 함)을 보여준다. 둘은 같은 "보이지 않으면 못 고친다" 명제의 두 단면.

## 2026-05-24 보강 — ActiveGraph: log를 남기는 것에서 log가 곧 runtime이 되는 것으로

[The Log is the Agent](https://arxiv.org/abs/2605.21997) / ActiveGraph (2026-05-21)는 이 페이지의 관측 논의를 한 단계 더 밀어 올린다. 지금까지는 좋은 관측이란 **실행 후에 trace를 잘 남기는 것** 에 가까웠다. 이 논문이 내미는 전환은 더 급진적이다.

> **log는 사후 기록이 아니라, agent runtime의 중심 데이터 구조가 될 수 있다.**

### 1) traceability를 feature가 아니라 실행 모델로 본다

ActiveGraph의 핵심 직관은 event-sourced system과 닮아 있다.

- action과 state transition이 append-only log에 남고
- 그 log를 기반으로 replay / fork / audit이 가능하며
- 관측과 실행이 서로 다른 부가 기능이 아니라 같은 substrate를 공유한다

즉 "관측 가능한 agent" 를 넘어서 **"관측 구조 위에서 직접 실행되는 agent"** 로 개념을 바꾼다.

### 2) 왜 이게 observability 문서에 중요한가

최근 위키의 관련 흐름을 나란히 놓으면 차이가 잘 보인다.

- **OTel / Datadog** — 실행을 추적하는 표준화된 telemetry surface
- **AHE** — 하네스 edit와 결과를 잇는 decision observability
- **HarnessAudit / ProcBench** — trajectory 전체를 감사하고 process를 해석
- **ActiveGraph** — 아예 log 자체를 branchable runtime substrate로 사용

즉 ActiveGraph는 observability를 dashboard나 postmortem 도구에서 멈추지 않고, **state management / replayability / auditability** 의 핵심 설계 원리로 끌어올린다.

### 3) 오늘 시점 관측 층을 다시 그리면 runtime-audit 축이 선명해진다

| 층 | 질문 | 대표 근거 |
|---|---|---|
| **Telemetry standard** | 무엇을 어떤 이름으로 남길까? | OTel GenAI semconv |
| **Operational diagnosis** | 비용·지연·실패 모드를 어떻게 읽을까? | Datadog |
| **Design observability** | 어떤 하네스 변경이 어떤 결과를 냈는가? | AHE |
| **Runtime auditability** | 실행 기록을 replay / fork / 감사 가능한가? | **ActiveGraph** |

→ 이제 observability는 단순 수집이 아니라, **forkable execution history를 갖는 runtime architecture** 문제로 확장된다.

### 4) 1인 개발자 ROI 3개

1. 중요한 agent workflow는 "로그를 남긴다"보다 **어디까지 replay 가능한가** 를 기준으로 설계하는 편이 낫다.
2. 수동 디버깅 메모보다 **append-only event sequence** 가 남는 구조가 나중에 audit과 재현에 강하다.
3. subagent나 장기 작업을 붙일수록 trace 저장소와 상태 저장소를 따로 보기보다, **동일 history substrate로 합칠 수 있는지** 검토할 가치가 있다.

## 실무 체크리스트 (최소)

- [ ] 모델 호출 스팬에 **요청 메타**(모델 id, 토큰 요약/카운트 정책) 일관 적용  
- [ ] tool/MCP 호출을 **별도 child span**으로 분리  
- [ ] PII는 스팬 속성에 **원문 금지**·마스킹 정책  
- [ ] OTel SDK·semconv **버전 핀** 및 변경 로그 확인  

## 관련 개념

- [[concepts/llm-evaluation]] — 출력 품질 측정; 관측과 결합 시 강함
- [[patterns/agent-server-harness]] — 백엔드 배치와 관측 훅
- [[tools/vercel-workflow]] — 플랫폼 측 워크플로 관측 UI와의 관계 검토
- [[concepts/mcp]] — 도구 경로 관측 시 같이 설계

## Chapter Clear 가이드

- **소속 챕터**: Chapter 6 (운영 보스전)
- **퀘스트**: 모델 호출, 도구 호출, 에러를 각각 하나씩 span으로 추적하는 기준을 정한다.
- **클리어 조건**: trace_id 기준으로 "문제 요청 한 건"을 끝까지 따라갈 수 있다.
- **보상(산출물)**: 관측 지표 카드 1장
- **다음 퀘스트**: [[patterns/git-ai-workflow]] -> [[patterns/ai-code-review]]

## 참고 소스

- [리서치 노트](raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md)
- [OpenTelemetry — Gen AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [OpenTelemetry Blog — AI Agent Observability](https://opentelemetry.io/blog/2025/ai-agent-observability/)
- [OpenTelemetry community — Gen AI project](https://github.com/open-telemetry/community/blob/main/projects/gen-ai.md)
