---
title: "Microsoft Agent Framework Version 1.0"
source_url: "https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/"
author: "Shawn Henry (Principal Group Product Manager, Microsoft)"
published: 2026-04-03
collected: 2026-05-03
tags: [microsoft, agent-framework, orchestration, mcp, a2a, semantic-kernel, autogen]
status: ingested
---

# Microsoft Agent Framework Version 1.0

> 출처: <https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/>
> 발행: 2026-04-03 (Shawn Henry)

## 한 줄 요약

Microsoft Agent Framework이 **.NET·Python 양쪽에서 1.0 GA**에 도달. Semantic Kernel(엔터프라이즈)과 AutoGen(멀티 에이전트 연구)을 **하나의 오픈소스 SDK로 통합**한 결과물.

## 핵심 사실

- **GA 날짜**: 2026-04-03 (RC는 2026-02, 처음 발표는 2025-10)
- **언어**: .NET (`Microsoft.Agents.AI`), Python (`agent-framework`)
- **라이선스**: MIT (Microsoft 직원 Roger Barreto 댓글 확인)
- **모델 커넥터**: Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini, **Ollama**(로컬)
- **프로토콜**: **MCP**(외부 도구 동적 디스커버리)와 **A2A**(에이전트 간 협력, 1.0 곧 출시) 둘 다 1차 지원

## 1.0에 포함된 안정 기능

| 카테고리 | 내용 |
|----------|------|
| **Single Agent** | 코어 추상화 안정. 양 언어 일급 지원 |
| **Middleware Hooks** | 실행 단계마다 가로채기 — 안전 필터·로깅·컴플라이언스를 프롬프트 변경 없이 |
| **Memory & Context Providers** | Foundry Memory, Mem0, Redis, Neo4j 또는 커스텀 백엔드 |
| **Workflows** | 그래프 기반, 분기·팬아웃·체크포인트·hydration(장시간 복구) |
| **Multi-Agent Orchestration** | **5 패턴**: sequential, concurrent, **handoff**, **group chat**, **Magentic-One** — 모두 streaming·HITL 승인·pause/resume 지원 |
| **Declarative YAML** | 에이전트·도구·메모리·오케스트레이션 토폴로지를 YAML로 버전 관리 |
| **Migration Assistants** | Semantic Kernel·AutoGen 코드 자동 분석 + 마이그레이션 플랜 |

## 프리뷰(곧 안정화) 기능

- **DevUI** — 브라우저 로컬 디버거. 메시지 흐름·도구 호출·오케스트레이션 결정을 실시간 시각화
- **Foundry Hosted Agent Integration** — Azure Durable Functions로 매니지드 실행
- **Foundry 관측·평가** — OpenTelemetry 기반 대시보드
- **AG-UI / CopilotKit / ChatKit** — 프론트엔드 스트리밍 어댑터
- **Skills** — 재사용 도메인 능력 패키지 (instructions + scripts + resources)
- **GitHub Copilot SDK / Claude Code SDK as Harness** — Copilot SDK·Claude Code SDK를 Agent Framework 안에서 **에이전트 하네스**로 호출 가능. 자율 루프(planning, tool execution, file edits, session management)는 SDK가 처리하고, MS Agent Framework가 그것을 다른 에이전트(Azure OpenAI, Anthropic 등)와 같은 멀티 에이전트 워크플로에 합류시킴
- **Agent Harness** — 자체 셸·파일시스템·메시징 루프 — 코딩 에이전트·자동화·개인 비서 패턴

## 최소 코드 예시 (.NET)

```csharp
var agent = new AIProjectClient(endpoint:"https://your-project.services.ai.azure.com")
    .GetResponsesClient("gpt-5.3")
    .AsAIAgent(name: "HaikuBot",
               instructions: "You are an upbeat assistant that writes beautifully.");
Console.WriteLine(await agent.RunAsync("Write a haiku about shipping 1.0."));
```

`SequentialBuilder(participants=[writer, reviewer]).build()` 한 줄이면 multi-agent 워크플로 구성.

## 의미 / 위키 연결

- **5 오케스트레이션 패턴**(sequential / concurrent / handoff / group chat / Magentic-One)은 [[concepts/ai-orchestration]]의 6대 패턴(Anthropic) 중 일부와 거의 1:1 매핑된다. **handoff = Routing**, **sequential = Prompt Chaining**, **concurrent = Parallelization**, **group chat = Orchestrator-Workers의 변종**, **Magentic-One = 자율 매니저(Planner)**.
- **Claude Code SDK / Copilot SDK as Harness** 옵션은 [[concepts/harness-engineering]]의 "model + harness" 분리 원칙이 **벤더 SDK 차원에서 표준화**되고 있다는 신호. Anthropic의 3-에이전트 분리 / HumanLayer 6 레버 흐름과 같은 방향이다.
- **MCP·A2A 1차 지원**은 [[concepts/mcp]]·[[concepts/a2a-protocol]]의 산업 채택을 한 칸 더 끌어올린다 — Microsoft 1st-party 프레임워크가 둘 다 채택.
- **DevUI + OpenTelemetry 평가**는 [[concepts/gen-ai-observability]]가 다음 단계로 가고 있음을 보여 준다 — "관측은 옵션이 아니라 IDE에 내장".

## 한계·주의

- 1.0이지만 일부 핵심(Skills, Agent Harness, GitHub Copilot SDK 통합)은 여전히 **프리뷰**. 프로덕션에서 의존하면 향후 API 변경 가능.
- A2A 1.0 자체는 "곧 출시"라고만 명시 — Linux Foundation A2A 사양과 정확한 호환 시점은 별도 추적 필요.
- AutoGen에서 마이그레이션은 자동 도구가 있지만 Magentic-One류 자율 매니저 패턴은 의미 차이가 크다 — 가이드 외에도 직접 검증 필요.

## 더 보기

- 공식 블로그: <https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/>
- GitHub: <https://github.com/microsoft/agent-framework>
- PyPI: <https://pypi.org/project/agent-framework/>
- NuGet: <https://www.nuget.org/packages/Microsoft.Agents.AI/>
- Semantic Kernel 마이그레이션 가이드: <https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel>
- AutoGen 마이그레이션 가이드: <https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen>
