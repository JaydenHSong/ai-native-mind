---
title: "OWASP LLM Top 10 × TypeScript 완화 패턴"
category: patterns
tags: [security, owasp, typescript, agents, zod, ai-sdk]
created: 2026-04-12
updated: 2026-05-26
sources:
  - "raw/notes/2026-04-12-security-typescript-corpus.md"
  - "raw/papers/owasp-genai-2025-llm-top-10.md"
  - "raw/articles/2026-05-01-prompt-injection-defense-2026.md"
  - "raw/articles/2026-05-01-dual-llm-camel-pattern.md"
  - "raw/articles/2026-05-01-owasp-asi-2026.md"
related:
  - "[[concepts/mcp]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/structured-output]]"
  - "[[tools/vercel-workflow]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
status: active
confidence: medium
---

# OWASP LLM Top 10 × TypeScript 완화 패턴

## 한줄 정의

[OWASP LLM Top 10 (GenAI)](https://genai.owasp.org/llm-top-10/) 중에서도, **TypeScript 런타임**에서 바로 손대는 항목만 뽑아 **도구 스키마·실행 상한·관측**으로 연결한 실무 체크리스트.

## 쉽게 읽기

**OWASP**은 보안 쪽에서 자주 쓰는 “위험 목록 체크표” 같은 이름이다. 여기서는 그중 **세 가지**만 고른다.  
**Zod**는 “데이터가 이 모양일 때만 통과”라는 **틀**을 TypeScript로 적어 두는 도구다. LLM이 말을 조금 틀려도, **틀을 통과한 것만** 앱 안으로 들어가게 한다.

| 말 | 아주 짧은 뜻 |
|----|----------------|
| **Prompt Injection** | 사용자 말에 속아서, AI가 **원래 하면 안 되는 행동**(비밀 출력, 위험한 명령)을 하게 만드는 공격. |
| **Excessive Agency** | AI에게 **너무 많은 권한·너무 많은 단계**를 준 것. |
| **Unbounded Consumption** | **요금·서버**가 무한정 쓰이게 만드는 것 (악의적이든 실수든). |
| **HITL** | Human-in-the-loop. 위험한 버튼을 누르기 전에 **사람이 한 번 확인**하는 단계. |

## 왜 세 가지만 먼저 다루나

전 항목을 한 번에 도입하기 어렵다. 에이전트 서버를 TS로 짤 때 **가장 자주 깨지는 축**이 아래 셋이다.

| ID | 항목 | 한 줄 |
|----|------|--------|
| **LLM01** | Prompt Injection | 사용자·RAG 텍스트가 **시스템 지시·셸·SQL**로 새는 것 (비유: 칠판의 “선생 지시문”을 몰래 바꿔서 반장이 엉뚱한 일을 하게 만들기) |
| **LLM06** | Excessive Agency | 모델에게 허용된 **도구·스텝·권한**이 과도한 것 (비유: 청소 로봇에게 **집 열쇠·금고 비번**까지 주는 느낌) |
| **LLM10** | Unbounded Consumption | **토큰·요청·동시 실행** 무제한으로 비용·DoS (비유: 수도꼭지를 **끝까지 틀어** 놓기) |

나머지(공급망, 데이터 오염, 출력 처리 등)는 [공식 가이드](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)와 [[concepts/gen-ai-observability|관측]]·배포 파이프라인에서 확장한다.

## LLM01 — TS에서의 완화

**한 줄 요약**: “사용자가 준 말”이 곧바로 “컴퓨터가 실행하는 명령”이 되지 않게 **중간에 틀(Zod)·분리(역할)** 를 둔다.

- **메시지 분리**: 시스템·개발자·유저·도구 결과를 타입으로 구분 (`CoreMessage` 등). 문자열 한 덩어리로 이어붙이지 않기.  
- **구조화 출력**: [AI SDK — Generating Structured Data](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data)의 `Output.object` + **Zod**로 “앱이 소비할 객체”만 통과. `Output.json()`은 스키마가 없어 **신뢰 경계 밖**으로 취급.  
- **도구 인자**: `tool({ inputSchema: z.object({...}) })` 로 **허용 필드·길이·enum**을 최대한 좁힌다. [[concepts/structured-output]] 참고.  
- **셸/SQL 금지 패턴**: LLM 출력 문자열을 `exec`/`spawn`에 그대로 넣지 않기. 파일 경로는 `path.resolve` 후 **루트 jail** 검사 등.

## LLM06 — TS에서의 완화

**한 줄 요약**: “몇 번까지 도구를 쓸 수 있는지”, “어떤 도구만 쓸 수 있는지”를 **숫자와 목록**으로 제한한다.

- **`stopWhen` / `maxSteps`**: [Tools and Tool Calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling) 문서의 step 제한을 기본값으로 건다.  
- **도구 allowlist**: 런타임에 등록 가능한 `tools` 객체 키를 **상수**로 고정하거나 환경별 맵으로 제한.  
- **HITL**: 결제·삭제·프로덕션 배포는 워크플로 Webhook·승인 URL로 분리. [[tools/vercel-workflow]], [[patterns/agent-planning-to-implementation]].  
- **MCP**: 원격 서버는 [Authorization 튜토리얼](https://modelcontextprotocol.io/docs/tutorials/security/authorization)에 맞춰 토큰·audience 검증. [[concepts/mcp]].

## LLM10 — TS에서의 완화

**한 줄 요약**: “한 사람이 무한히 누르지 못하게” **요청 횟수·토큰**에 상한을 건다.

- **미들웨어 rate limit**: Next/Vercel Route, Hono, Express 등에서 **IP·API 키·유저** 단위 제한. (비유: 놀이공원 입장권에 **하루 탑승 횟수**가 있는 것과 비슷.)  
- **모델 호출 budget**: `maxTokens` / 워크플로 단계별 timeout.  
- **관측**: [AI SDK Telemetry](https://ai-sdk.dev/docs/ai-sdk-core/telemetry) + [[concepts/gen-ai-observability|OTel GenAI]]로 스팬 단위 비용 추적.

## 2026-05 agentic 확장 — OWASP **ASI** 매핑 + dual-LLM/CaMeL

기존 LLM01/06/10은 **단일 LLM 호출** 가정의 1차 방어다. 에이전트(장기 실행, 도구, 메모리, A2A) 위협은 **OWASP Top 10 for Agentic Applications 2026** ([공식 발표 2025-12-09](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/))에 ASI01~ASI10으로 정리됨.

### ASI 항목 매핑 (TS·하네스 관점)

| ASI | 이름 | 본 문서 어디서 + agentic 보강 |
|-----|------|----------------------------|
| **ASI01** | Goal Hijack | LLM01 확장 — **dual-LLM/CaMeL**로 plan 격리 |
| **ASI02** | Tool Misuse | LLM06 + 도구 schema 좁히기 + [[patterns/safe-tool-calling-sandbox]] |
| **ASI03** | Identity·Privilege Abuse | non-human identity 수명·권한 — Brain/Hands 격리 (Managed Agents 디폴트) |
| **ASI04** | Dynamic Runtime Composition | **공급망 위험** — [[concepts/agent-supply-chain-security]] 본 문서 |
| **ASI05** | Memory·State Manipulation | 장기 메모리 도입 시점부터 — Tier 3 untrusted로 다루기 |
| **ASI06** | Inter-Agent Trust | A2A 메시지를 untrusted로 — Q-LLM 영역 |
| **ASI07** | Resource Hijacking | LLM10 확장 + 인프라 rate limit + cost guardrails |
| **ASI08** | Cascading Failures | sandbox·격리로 폭발 반경 제한 |
| **ASI09** | Human-Agent Trust Exploit | UX에서 검증 단계를 명시 (anthropomorphism 경계) |
| **ASI10** | Rogue Agents | 행동 drift 모니터링 — eval framework로 회귀 감지 |

### 6층 Defense in Depth (TokenMix·SwarmSignal 종합)

위 ASI들을 **단일 기법으로 못 막는다는 합의** 하의 layered 방어. 단일 layer로 끝내면 안 됨.

| 층 | 기법 | TS·하네스 구현 위치 |
|----|------|------------------|
| 1 | Structured prompt format + output validation | [[concepts/structured-output]] · Zod `Output.object` |
| 2 | Input filtering + rate limiting | Edge 미들웨어 + `@upstash/ratelimit` |
| 3 | Advanced detection | PromptArmor (ICLR 2026) — false rate <1% (AgentDojo) |
| 4 | **Architectural separation — dual-LLM / CaMeL** | 아래 ⬇ |
| 5 | Tool sandboxing + privilege separation | [[patterns/safe-tool-calling-sandbox]], [[tools/managed-agents]] (Brain/Hands) |
| 6 | HITL for sensitive operations | sensitive 액션(메일·결제·삭제)에만 — fatigue 회피 |

### Dual-LLM / CaMeL 패턴 (architectural 답)

자세한 raw: [Dual LLM + CaMeL 패턴](raw/articles/2026-05-01-dual-llm-camel-pattern.md). 위키 [[concepts/agent-supply-chain-security]] 의 Tier 3 untrusted를 architectural로 격리하는 답.

```
사용자 instruction → P-LLM (도구 사용 가능)
                       │
                       └─ "$ref-1을 사용자에게 보여 줘"
                       │
untrusted data ────→ Q-LLM (도구 0)
                       │
                       └─ ref-1에 결과 채움
```

**핵심**: 악성 토큰이 P-LLM에 도달하는 경로 자체가 없다. CaMeL은 여기에 **capability 메타데이터** + **locked-down Python 인터프리터**를 더해 **information flow integrity 증명 가능** (AgentDojo: 77% 태스크 provable security).

### 1인 개발자 minimal TS 적용

현 [examples/agent-safety-sketch](../../examples/agent-safety-sketch/README.md)에 dual-LLM 최소 sketch 추가. 핵심 idea: `Output.object`의 schema에 **plan 단계와 untrusted-data 처리 단계를 분리**.

```typescript
// P-LLM: 사용자 instruction만 본다, plan 생성
const plan = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: userInstruction,  // trusted
  output: Output.object({
    schema: z.object({
      action: z.enum(["fetch_email", "summarize", "send_reply"]),
      ref: z.string(),  // Q-LLM 결과의 reference만
    }),
  }),
});

// Q-LLM: untrusted data 처리, 도구 호출 없음
const summary = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: `Summarize: ${untrustedEmail}`,  // untrusted
  // tools 없음
  output: Output.object({
    schema: z.object({ summary: z.string().max(500) }),
  }),
});
// summary.output.summary는 P-LLM에 직접 전달되지 않고 ref로만 매핑
```

전체 코드는 [examples/agent-safety-sketch/dual-llm.ts](../../examples/agent-safety-sketch/dual-llm.ts).

## 하네스에 넣을 위치

| OWASP 축 | Harness [[concepts/harness-engineering]] |
|-----------|-------------------------------------------|
| LLM01 | **Guides** (스키마·메시지 계약) + **Sensors** (검증 실패 로그) |
| LLM06 | **Guides** (허용 도구·스텝) + 필요 시 HITL |
| LLM10 | **Sensors** (메트릭·알람) + 인프라 rate limit |

## 관련 개념

- [[patterns/agent-server-harness]] — HTTP·큐·SSE 뒤에서의 경계  
- [[concepts/mcp]] — 도구 연결 보안  
- [[concepts/gen-ai-observability]] — 운영 센서

## Chapter Clear 가이드

- **소속 챕터**: Chapter 5 (안전 던전)
- **퀘스트**: LLM01/06/10 중 현재 프로젝트에 가장 위험한 항목 1개를 선택해 완화안을 작성한다.
- **클리어 조건**: 스키마/권한/상한/관측 중 최소 2개 제어를 코드 레벨로 명시할 수 있다.
- **보상(산출물)**: OWASP 우선 대응표 1개
- **다음 퀘스트**: [[concepts/llm-evaluation]] -> [[concepts/gen-ai-observability]]

## 참고 소스

- [보안×TS 큐레이션](raw/notes/2026-04-12-security-typescript-corpus.md)
- [OWASP LLM Top 10 요약 (papers)](raw/papers/owasp-genai-2025-llm-top-10.md)
- [Prompt Injection Defense 2026 raw](raw/articles/2026-05-01-prompt-injection-defense-2026.md)
- [Dual LLM + CaMeL raw](raw/articles/2026-05-01-dual-llm-camel-pattern.md)
- [OWASP ASI 2026 raw](raw/articles/2026-05-01-owasp-asi-2026.md)
- [OWASP GenAI — LLM Top 10](https://genai.owasp.org/llm-top-10/)
- [OWASP — Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Simon Willison — Design Patterns for Securing LLM Agents](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/)
- [DeepMind CaMeL — arXiv](https://arxiv.org/abs/2503.18813)
- [examples/agent-safety-sketch/README.md](../../examples/agent-safety-sketch/README.md)
- [examples/agent-safety-sketch/dual-llm.ts](../../examples/agent-safety-sketch/dual-llm.ts)
