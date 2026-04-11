# 리서치: Vercel AI SDK(`streamText`/`Agent`) + Workflow DevKit (`DurableAgent`)

**날짜**: 2026-04-11  
**출처**: [Building Durable AI Agents](https://useworkflow.dev/docs/ai) (useworkflow.dev, 공식)

---

## 1. 배경: 왜 “그냥 streamText”만으로는 부족해지나

공식 문서가 꼽는 **성숙한 에이전트**의 추가 난제:

- **Statefulness** — 세션 영속, LLM·tool 호출을 **잡+워커+큐**로 바꾸는 공학
- **Observability** — 트레이스·메트릭을 메시지·유저 히스토리와 **별도**로 관리
- **Resumability** — 스트림 자체를 저장·파이프해 **끊김 후 재연결** 가능하게
- **Human-in-the-loop** — 클라이언트·API·비동기 오케스트레이션이 승인·웹훅을 **같이** 추적

Workflow SDK 스토리: **에이전트 = 워크플로**, **도구 = step**, 인프라 상호작용은 프레임워크가 처리.

---

## 2. AI SDK 쪽 기준선 (마이그레이션 전)

예제 앱(Flight Booking) 기준:

- API 라우트에서 AI SDK의 **`Experimental_Agent` (`Agent`)** 사용.
- 문서 명시: `Agent`는 **`streamText`를 감싼 얇은 래퍼**다.
- `agent.stream({ messages })` → `createUIMessageStreamResponse` + `useChat` UI.

도구는 `ai` 패키지의 `tool()` + `execute` 함수.

---

## 3. WDK 통합 후 형태 (핵심 API)

### 설치·설정

- `npm i workflow @workflow/ai`
- `next.config.ts`에 `withWorkflow` from `workflow/next`

### 워크플로 함수

- 파일에 **`"use workflow"`** 함수 (예: `chatWorkflow(messages)`).
- `Agent` → **`DurableAgent`** (`@workflow/ai/agent`).
- 출력: **`getWritable<UIMessageChunk>()`** 를 받아 `agent.stream({ messages, writable })`.
- 문서: DurableAgent가 **모든 LLM 호출을 step으로 실행**하고 결과를 워크플로 컨텍스트에 집계.

### API 라우트

- 직접 `agent.stream` 호출 대신 **`start(chatWorkflow, [modelMessages])`** → `Run` 객체.
- 응답: **`createUIMessageStreamResponse({ stream: run.readable })`** — 클라이언트는 기존처럼 UI 스트림 소비.

### 도구를 step으로

- 각 tool의 `execute` 구현체에 **`"use step"`**.
- 효과(문서): 프로덕션에서 step별 **별도 워커**, 실패 시 **기본 최대 3회 재시도**, 관측 도구에서 **디스크리트 step**.

---

## 4. 관측·다음 단계

- 로컬: **`npx workflow web`** — run 목록·트레이스(재시도·스텝 간 데이터).
- 문서의 “Next steps”: 도구에서의 **스트리밍 업데이트**, **재개 가능한 스트림**, sleep/스케줄, **HITL**. 전체 예제는 GitHub `workflow-examples/flight-booking-app` **main 브랜치**.

### 예제 저장소

- 따라하기 시작: `workflow-examples` 저장소 **plain-ai-sdk** 브랜치에서 flight-booking-app 클론.
- 완전본: 같은 경로 **main** 브랜치.

---

## 5. 위키 반영

- `wiki/tools/vercel-workflow.md`에 “AI SDK 연동” 절 추가.
- 본 노트를 `sources`에 연결.
