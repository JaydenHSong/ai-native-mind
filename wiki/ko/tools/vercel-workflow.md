---
title: "Vercel Workflow (Workflow DevKit)"
category: tools
tags: [vercel, workflow, durable, typescript, agents, serverless]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md"
  - "raw/notes/2026-04-11-ai-sdk-durable-agent-workflow-research.md"
related:
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/agent-planning-to-implementation]]"
status: active
confidence: high
---

# Vercel Workflow (Workflow DevKit)

## 쉽게 읽기

**비유**: 보통 비동기 작업은 서버가 꺼지면 **반쯤만 하고 끊길** 수 있다. 워크플로 키트(WDK)는 진행을 **노트에 적듯 저장**해 두었다가 나중에 이어 받거나, 사람 승인을 기다렸다가 다시 깨운다. `"use workflow"` / `"use step"` 은 “이 부분은 **단계로 나눠 저장해도 된다**”고 표시하는 주석에 가깝다.

| 용어 | 풀이 |
|------|------|
| **내구성(durability)** | 꺼졌다 켜져도 **어디까지 했는지** 기억함 |
| **Suspend** | 그때는 CPU 안 쓰고 **줄 서서 기다림** |
| **Webhook** | 밖에서 “됐어” 신호가 오면 그때 **재개** |

## 한줄 설명

TypeScript에서 **`"use workflow"`** / **`"use step"`** 로 비동기 로직을 **내구성 있는 워크플로**로 바꿔 주는 **Workflow Development Kit(WDK)**. 공식 스토리는 “큐·스케줄러·영속 레이어를 직접 깔기 전에” 언어 수준에서 신뢰성을 얻는 것.

## 핵심 개념

| 요소 | 역할 |
|------|------|
| **`"use workflow"`** | 워크플로 함수 표시. 여러 step을 순서대로 오케스트레이션. |
| **`"use step"`** | 단위 작업. 실패 시 재시도, 진행 상황 영속화. 컴파일 시 **격리된 API Route**로 분리된다는 설명이 공식 블로그에 있음. |
| **Suspend** | step 실행 중 워크플로는 리소스를 쓰지 않고 대기. 장기 LLM 체인·외부 승인 대기에 맞음. |
| **Webhook** | 외부 시스템이 콜백하면 그 시점에서 워크플로 재개 (폴링·자체 큐 최소화). |
| **Worlds** | Local / Vercel / Postgres 등 **실행·오케스트레이션·영속화** 환경 추상화. 같은 코드를 환경에 옮긴다는 포지셔닝. |

## Vercel AI SDK와 엮기 (`streamText` / `Agent` → `DurableAgent`)

공식 가이드 [Building Durable AI Agents](https://useworkflow.dev/docs/ai)는 **Next.js + AI SDK + 챗 UI**를 전제로, “일반 에이전트”를 “내구 에이전트”로 바꾸는 경로를 단계별로 보여 준다.

### AI SDK에서 출발하는 지점

- AI SDK의 **`Agent`**(`Experimental_Agent`)는 문서상 **`streamText`를 감싼 래퍼**다.
- 전형적 API 라우트: `agent.stream({ messages })` → `createUIMessageStreamResponse` + 클라이언트 `useChat`.

### WDK를 얹으면 무엇이 바뀌나

1. **`npm i workflow @workflow/ai`** 후 `next.config`에 **`withWorkflow`** (`workflow/next`).
2. 에이전트 로직을 **`"use workflow"`** 함수로 옮긴다 (예: `chatWorkflow(messages)`).
3. **`Agent` → `DurableAgent`** (`@workflow/ai/agent`). 문서: LLM 호출이 **워크플로 step**으로 실행되고 결과가 워크플로 컨텍스트에 집계된다.
4. 스트림: **`getWritable<UIMessageChunk>()`** 로 writable을 얻고 `await agent.stream({ messages, writable })`. 이 스트림은 **지속**되며, API는 **run의 어느 시점에서든** 읽을 수 있다고 설명한다.
5. 라우트에서는 **`start(chatWorkflow, [modelMessages])`** 로 실행하고, 응답은 **`run.readable`** 을 `createUIMessageStreamResponse`에 넘긴다.
6. 도구 `execute` 쪽 구현에 **`"use step"`** — 프로덕션에서는 step마다 **별도 워커**, 실패 시 **기본 최대 3회 재시도**, 관측 UI에서 step 단위로 보인다.

### 로컬에서 눈으로 확인

- **`npx workflow web`** — run 목록·트레이스(재시도, 스텝 간 데이터).

### 예제 저장소

- 따라하기: GitHub `vercel/workflow-examples` 의 **plain-ai-sdk** 브랜치 → `flight-booking-app`.
- HITL·재개 스트림 등 “다음 단계”까지 포함한 완성 예: 같은 앱의 **main** 브랜치.

### 공식이 말하는 “한 스택”의 의미

에이전트를 **워크플로**, 도구를 **step**으로 모델링해, 세션·스트림·승인까지 한 번에 다루겠다는 이야기다. [[concepts/gen-ai-observability|OTel]]로 벤더 중립 관측을 얹을지, WDK 대시보드에 머무를지는 별도 결정.

## 에이전트 백엔드에 쓸 때

- [[patterns/agent-server-harness]] 의 **비동기 잡(B)** 패턴을 “직접 `job_id` 테이블 + 워커”로 구현하는 대신, WDK가 **상태·재시도·재개** 층을 담당할 수 있음.
- **HITL**: Webhook·sleep 등으로 “사람이 끼는 구간”을 워크플로 안에 명시하기 쉽다. [[patterns/agent-planning-to-implementation]] 과도 잘 맞는다.
- **관측**: 공식 글에 따르면 step·입출력·pause·에러가 로그에 쌓이고 CLI·Web UI로 본다 — 이는 [[concepts/gen-ai-observability|GenAI 관측]]과 **병행**할지(OTel로 export)·**대체**할지는 아키텍처 선택.

## 장점과 한계

| 장점 | 한계 |
|------|------|
| async/await 친숙, YAML 상태머신 없이 표현 가능 | 채택 시 World·배포 타깃(Vercel 등) 이해 필요 |
| 배포·크래시 후 재개 스토리가 분명 | 모든 LLM 벤더 특화 기능을 커버한다기보다 **오케스트레이션 런타임**에 가깝다 |
| Webhook 기반 외부 이벤트와 잘 맞음 | 비용·콜드스타트·실행 상한은 여전히 플랫폼 정책에 좌우 |

## 시작점

- **AI SDK 연동**: [Building Durable AI Agents](https://useworkflow.dev/docs/ai)
- [DurableAgent API](https://useworkflow.dev/docs/api-reference/workflow-ai/durable-agent)
- 문서·블로그: [Introducing Workflow (Vercel Blog)](https://vercel.com/blog/introducing-workflow)
- 사이트: [useworkflow.dev](https://useworkflow.dev/)
- 저장소: [github.com/vercel/workflow](https://github.com/vercel/workflow)

## 관련 개념

- [[patterns/agent-server-harness]] — 동기/비동기/SSE 하네스 패턴
- [[concepts/harness-engineering]] — Guides/Sensors와 런타임 경계
- [[concepts/ai-orchestration]] — 패턴 선택과 멱등·HITL

## 참고 소스

- [리서치 노트 — WDK·OTel](raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md)
- [리서치 노트 — AI SDK·DurableAgent](raw/notes/2026-04-11-ai-sdk-durable-agent-workflow-research.md)
- [Vercel — Built-in durability: Introducing Workflow Development Kit](https://vercel.com/blog/introducing-workflow)
- [useworkflow.dev — Building Durable AI Agents](https://useworkflow.dev/docs/ai)
