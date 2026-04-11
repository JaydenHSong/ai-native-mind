---
title: "OWASP LLM Top 10 × TypeScript 완화 패턴"
category: patterns
tags: [security, owasp, typescript, agents, zod, ai-sdk]
created: 2026-04-12
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-12-security-typescript-corpus.md"
  - "raw/papers/owasp-genai-2025-llm-top-10.md"
related:
  - "[[concepts/mcp]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/structured-output]]"
  - "[[tools/vercel-workflow]]"
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

## 참고 소스

- [보안×TS 큐레이션](raw/notes/2026-04-12-security-typescript-corpus.md)
- [OWASP LLM Top 10 요약 (papers)](raw/papers/owasp-genai-2025-llm-top-10.md)
- [OWASP GenAI — LLM Top 10](https://genai.owasp.org/llm-top-10/)
- [examples/agent-safety-sketch/README.md](../../examples/agent-safety-sketch/README.md)
