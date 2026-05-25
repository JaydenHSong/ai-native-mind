---
title: "Claude Managed Agents vs LangChain Deep Agents Deploy"
category: comparisons
tags: [managed-agents, deep-agents, comparison, agent-platform, harness, vendor-lock-in]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-managed-agents-launch.md"
  - "raw/articles/2026-05-01-langchain-deep-agents-skills.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
related:
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/agentic-engineering]]"
  - "[[comparisons/agent-frameworks]]"
status: active
confidence: high
---

# Claude Managed Agents vs LangChain Deep Agents Deploy

## 쉽게 읽기

**비유 한 줄**: Managed Agents = "**Anthropic이 운영해 주는 공유 주방**", Deep Agents Deploy = "**오픈 키친 키트**". 같은 수준의 인프라를 **클라우드로 빌릴지** vs **자기 건물에 깔지**의 선택. 출시 시점만 보면 비슷한 자리에 있지만, **lock-in과 자유도의 무게가 정확히 반대**.

## 핵심 차이 (한 줄)

**Managed Agents는 Claude만 쓰는 대신 인프라를 공짜로 얻고**, **Deep Agents Deploy는 어떤 모델이든 쓰는 대신 인프라를 직접 안고 간다**.

## 비교표

| 기준 | Claude Managed Agents | LangChain Deep Agents Deploy |
|------|----------------------|-----------------------------|
| 출시 | 2026-04-08 public beta | 오픈 소스, 2025년 말~2026 4월 활발 진화 |
| 모델 | **Claude 전용** (Opus/Sonnet/Haiku) | **모델 무관** (OpenAI/Anthropic/Google/Ollama) |
| 호스팅 | Anthropic 클라우드만 | 셀프 호스팅 가능 (Daytona/Runloop/Modal) |
| 라이선스 | 클로즈드, SaaS | MIT, 오픈 소스 |
| 가격 | 토큰 + **$0.08/세션-시간** | 인프라 자체 부담 (모델 비용만) |
| 자격증명 격리 | **Brain/Hands 분리 디폴트** | sandbox provider 추상화로 디폴트 |
| 메모리 | append-only 세션 로그 (+ 2026-04-23 persistent memory) | 파일시스템 백엔드, AGENTS.md 표준 |
| 정의 형식 | YAML 또는 자연어 (Console·CLI) | **AGENTS.md + SKILL.md** (markdown) |
| 멀티 프로토콜 | MCP·A2A·Agent Protocol 내장 | MCP·A2A·Agent Protocol 내장 |
| 트레이싱·관측 | Claude Console 통합 | LangSmith 네이티브 통합 |
| 멀티에이전트 조정 | research preview | subagent spawning 정식 |
| 모델 업그레이드 내성 | Brain/Hands 분리로 보장 | 모델 swap 자유 |
| 디버깅 가시성 | append-only 로그 — 복구 strong, 검사 약함 | LangSmith 트레이스 + 그래프 시각화 |
| 라우팅 fine-grained 제어 | 일부 포기 (플랫폼 모델 따름) | 자유 (LangGraph 노드·에지 직접) |
| 셋업 난이도 | 며칠 (Console + CLI) | 더 무거움 (sandbox provider 선택·운영) |
| 사례 | Notion, Rakuten, Asana, Sentry, Atlassian, Vibecode 등 | Cisco × LangChain 파일럿 (디버깅 93%↓) 등 |

## 언제 Managed Agents를 쓸까

- **MVP·1인 창업 초기**: 인프라 일주일 작업을 며칠로 줄이고 싶을 때 → 시간이 가장 비싼 자원
- **보안·자격증명 격리가 요구사항**: Brain/Hands 분리가 디폴트라 미리 한 번 해 둔 일
- **Claude 메인 모델 + 운영팀 작음**: lock-in 비용보다 운영 부담 절감 가치가 큼
- **Notion·Asana 같은 SaaS에 임베드**: 사용자가 토큰만 내면 되고, 무한 확장 가능
- **outcome-driven 워크플로**: success criteria만 정의하면 self-evaluate (research preview)

## 언제 Deep Agents Deploy를 쓸까

- **다중 벤더 모델 병행 필요**: 예) advisor만 Claude, 메인은 GPT-4o-mini로 비용 절감
- **on-prem / 정부 / 금융**: 데이터·트래픽이 외부 클라우드 못 나감
- **라우팅·메모리 정책 fine-grained 제어**: 도메인이 매우 특수하거나 감사 요구사항 강함
- **LangChain·LangGraph·LangSmith 이미 사용 중**: 통합·트레이싱·eval이 한 자리
- **빌더 자체가 인프라**: 다른 사람이 위에서 에이전트를 띄우는 플랫폼을 만들 때

## 하이브리드 — 실제로 가장 흥미로운 케이스

> [Hieu TRAN, "The Agent Stack in 2026"](https://dev.to/hieu_tran_80c388add84c060/the-agent-stack-in-2026-layers-harnesses-and-where-you-actually-build-2e5g) 분석에 따르면, **`deepagents deploy`가 커스텀 LangGraph 백엔드를 fronting**하는 구성이 가능하다. 즉 **저수준 LangGraph 오케스트레이션은 자기가 짜고, 표준 엔드포인트·메모리 관리·sandbox는 deepagents에 위임**.

이 패턴이 의미 있는 이유: **자유도와 운영 부담의 80/20 절충**. 라우팅은 직접 짜되 (가치 있음), MCP·A2A·sandbox 같은 plumbing은 표준화된 디폴트로 (가치 낮음).

→ Managed Agents는 같은 하이브리드를 못 한다 (실행 모델이 고정).

## 비용 변곡점 (대략적 모델, 검증 필요)

| 시점 | 권장 |
|------|------|
| 0~100명 사용자, MVP | **Managed Agents** — 시간 절약 가치 큼 |
| 100~1,000명, 단일 워크플로 | 둘 다 viable, 비용·lock-in 비교 |
| 1,000명+ , long-lived 다수 세션 | **Deep Agents Deploy로 마이그레이션 검토** — 세션 단가 누적 부담 |
| 정부·on-prem·다중 벤더 | 처음부터 **Deep Agents Deploy** |

→ 이 변곡점은 [[patterns/ai-cost-management]] 와 [[patterns/solo-product-strategy]]에서 더 정밀하게 다룰 후보.

## 같은 개념, 다른 그림 — Brain/Hands ≈ AIOS

학계의 **AIOS** (Rutgers, COLM 2025)와 매핑:

| AIOS 컴포넌트 | Managed Agents | Deep Agents Deploy |
|--------------|----------------|-------------------|
| Agent Scheduler + Context Manager | Brain | LangGraph 노드 그래프 |
| Memory Manager + Storage Manager | Session (append-only) | Filesystem 백엔드 |
| Tool Manager + Access Manager | Hands (자격증명 0) | Sandbox provider |

→ 두 플랫폼은 **같은 추상화에 도달했지만, 패키징과 운영 모델이 정반대**.

## 결론

- **Lock-in을 명시적으로 받아들이고 시간을 벌기**: Managed Agents
- **Lock-in을 명시적으로 거부하고 자유를 사기**: Deep Agents Deploy
- **둘 사이의 정답은 트래픽·팀 크기·규제 환경**에 따라 다르다
- **위키의 [[concepts/harness-engineering]] 원칙**: "**모델이 좋아지면 하네스를 줄여라**"는 양쪽 모두에 적용 — Managed는 Anthropic이 알아서 하네스를 줄여 주고, Deep Agents는 사용자가 직접 줄인다

## 참고 소스

- [에이전트 스택 stratification 정리](raw/articles/2026-05-01-agent-stack-2026-layers.md)
- [Managed Agents 출시 raw](raw/articles/2026-05-01-anthropic-managed-agents-launch.md)
- [Deep Agents + Skills raw](raw/articles/2026-05-01-langchain-deep-agents-skills.md)
- [Anthropic 공식 발표](https://claude.com/blog/claude-managed-agents)
- [Deep Agents GitHub](https://github.com/langchain-ai/deepagents)
- [Deep Agents Deploy 출시 (LangChain)](https://blog.langchain.com/deep-agents-deploy-an-open-alternative-to-claude-managed-agents/)
