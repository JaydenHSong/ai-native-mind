---
title: "에이전트 서버 하네스"
category: patterns
tags: [agents, server, backend, sse, queue, harness, production]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
  - "raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/tool-use]]"
  - "[[concepts/mcp]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[comparisons/agent-frameworks]]"
  - "[[tools/vercel-workflow]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
status: active
confidence: medium
---

# 에이전트 서버 하네스

## 한줄 정의

LLM 에이전트를 **HTTP·큐·스트림** 뒤에 올릴 때, 신뢰성·비용·보안을 위해 필요한 **백엔드·런타임 배치 패턴**을 한곳에 모은 것.

## 쉽게 읽기

**HTTP**는 브라우저·앱이 서버에 “한 번 질문하고 한 번 답” 받는 통로다. **큐(Queue)** 는 “지금 처리 못 하니 **번호표** 받고 기다리기”다. **스트림(Stream)** 은 답이 길 때 **한 글자씩** 계속 보내 주는 방식이다.  
**SSE**는 그중 하나로, 웹에서 진행 상황을 밀어 줄 때 자주 쓴다. **Cold start**는 서버가 잠들어 있다가 깰 때 **첫 반응이 느린 것**을 말한다.

## 3가지 배치 패턴

### A. 동기 오케스트레이션 (요청–응답)

클라이언트 → API 라우트 → (도구 호출 포함) 에이전트 실행 → JSON 응답.  
**비유**: 편의점에서 **바로 계산**하고 나오는 줄. 줄이 길면(생각이 오래 걸리면) 뒷사람이 기다린다.

- **적합**: 짧은 체인, 라우팅·단순 tool 호출, 내부 대시보드
- **주의**: 게이트웨이·리버스 프록시 **타임아웃**, cold start, LLM 지연
- **하네스**: 요청당 budget(최대 step·토큰), 취소 토큰 전파(가능하면)

### B. 비동기 잡 (큐 + 워커)

클라이언트 → API가 `job_id` 반환 → 워커가 장기 실행 → 결과를 DB·오브젝트 스토어에 저장 → 폴링 또는 웹훅.  
**비유**: 병원에서 **접수 번호**만 받고, 검사는 뒤에서 돌아가고, 나중에 **문자로 결과** 오는 방식.

- **적합**: 리서치·코드 생성·다단계 Orchestrator-Workers
- **하네스**: 멱등 consumer, 재시도 정책(dead letter), 동시 실행 상한
- **상태**: `queued` / `running` / `needs_input`(HITL) / `succeeded` / `failed`

### C. 스트리밍 (SSE 등)

토큰이나 **단계 이벤트**(tool_call 시작/종료)를 스트림으로 푸시.  
**비유**: 유튜브가 로딩되는 동안 화질이 **점점 선명해지는 것**처럼, 답을 한 번에 주지 않고 **조금씩** 보여 준다.

- **적합**: 챗 UX, 진행 상황 표시
- **주의**: 중간 끊김 시 서버·클라이언트 정리, 부분 저장 전략

실무에서는 **B + C** 조합이 흔하다(잡으로 본 실행, SSE로 진행만).

## 상태는 어디에 두나

| 저장소 | 쓰임 |
|--------|------|
| **관계형 DB** | 잡 상태, 사용자별 quota, 감사 로그 메타 |
| **Redis 등** | rate limit, 짧은 TTL 캐시, 분산 락 |
| **오브젝트 스토리지** | 대형 산출물(리포트, diff zip) |

에이전트의 “대화 메모리”를 서버에 두면 **PII·보존 기간·테넌트 격리**를 정책으로 박아야 한다. [[concepts/ai-memory-systems|AI 메모리 시스템]]과 연결해 설계한다.

## 외부 도구·MCP

서버에서 MCP·[[concepts/tool-use|tool use]]를 열면 **네트워크 출구**가 생긴다.

- 호출 가능 URL/호스트 **화이트리스트**
- 서비스 계정·키는 **런타임 주입**, 로그에 원문 마스킹
- 도구별 timeout·동시 실행 제한

## 서버리스 vs 롱러닝 워커

| | 서버리스 함수 (짧은 요청) | 상시 워커·VM |
|--|---------------------------|----------------|
| **강점** | 운영 단순, 스파이크 대응 | 긴 루프, 웹소켓, 무거운 샌드박스 |
| **약점** | 실행 시간·CPU 상한 | 비용·패치·스케일링 직접 관리 |
| **에이전트** | A 패턴, 얇은 래퍼 | B 패턴, 샌드박스 내 Bash 실행 |

“에이전트 = 한 요청에 다 끝낸다”가 성립하지 않으면 **B로 빨리 내리는 것**이 하네스 설계의 핵심 결정이다.

## 플랫폼 런타임 예: 내구 워크플로

큐·상태 테이블을 직접 운영하기 전에, **언어 수준 내구 워크플로**를 쓰는 선택지가 있다. Vercel의 **Workflow DevKit**은 `"use workflow"` / `"use step"`·Webhook·장기 suspend 스토리를 제공한다. HITL·외부 결제 확인처럼 **이벤트로 재개**해야 하는 구간과 잘 맞는다. **AI SDK** 챗 앱이면 `Agent`/`streamText` 기반을 **`DurableAgent` + `start()` + `run.readable`** 로 옮기는 공식 경로가 문서화되어 있다. 요약은 [[tools/vercel-workflow|Vercel Workflow]].

## 표준 관측: OpenTelemetry GenAI

HTTP 라우트 로그만으로는 모델·도구·에이전트 **단계 비용**을 나누기 어렵다. **OpenTelemetry GenAI semantic conventions**에 맞춘 트레이싱은 [[concepts/gen-ai-observability|GenAI·에이전트 관측]]에서 정리한다. 플랫폼 내장 워크플로 UI(예: WDK)와 **OTel export**를 병행할지는 한 번 결정해 두는 것이 좋다.

## 프레임워크 선택 힌트

LangGraph, OpenAI Agents SDK 등은 그래프·상태·재시도를 표준화한다. [[comparisons/agent-frameworks|프레임워크 비교]]를 본 뒤, **팀이 유지할 수 있는 최소 구조**부터 쓰는 편이 [[concepts/ai-orchestration|오케스트레이션]] 원칙과 맞는다.

## 관련 개념

- [[concepts/harness-engineering]] — Guides/Sensors를 서버에 확장
- [[concepts/ai-orchestration]] — 패턴과 런타임 조각(멱등·HITL)
- [[patterns/agent-planning-to-implementation]] — 서버에 올리기 전 문서 단계
- [[concepts/mcp]] — 도구 연결 표준과 보안 고려
- [[tools/vercel-workflow]] — 내구 워크플로·Webhook
- [[concepts/gen-ai-observability]] — OTel·GenAI 스팬

## 참고 소스

- [보강 메모](raw/notes/2026-04-11-orchestration-harness-server-supplement.md)
- [AI Orchestration 리서치](raw/notes/2026-04-09-ai-orchestration-research.md)
- [WDK·OTel 리서치](raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md)
