---
source_url: "https://dev.to/hieu_tran_80c388add84c060/the-agent-stack-in-2026-layers-harnesses-and-where-you-actually-build-2e5g"
title: "The Agent Stack in 2026: Layers, Harnesses, and Where You Actually Build"
author: "Hieu TRAN"
published: 2026-04-14
ingested: 2026-05-01
---

# The Agent Stack in 2026: Layers, Harnesses, and Where You Actually Build

> 출처: [dev.to (Hieu TRAN, 2026-04-14)](https://dev.to/hieu_tran_80c388add84c060/the-agent-stack-in-2026-layers-harnesses-and-where-you-actually-build-2e5g)

## 한 줄 요약

2026년 4월 Anthropic Managed Agents와 LangChain Deep Agents Deploy 출시를 계기로, 에이전트 스택이 "직접 짜기 ↔ 설정만 하기" 스펙트럼으로 stratify되었음을 정리한 글. **에이전트의 정체성·능력은 이식 가능한 정의 레이어로**, **실행·메모리·보안·배포는 그 아래 인프라로** 분리하라는 아키텍처 원칙이 핵심.

## Anthropic의 에이전트 복잡도 3단계

[Building Effective Agents (Anthropic Research)](https://www.anthropic.com/research/building-effective-agents) 기반:

- **Level 1: Augmented LLM** — 단일 LLM + retrieval/tools/memory. 대부분의 "잘 되는" 에이전트는 여기서 산다.
- **Level 2: Workflows** — 사전 정의 코드 경로로 LLM·도구를 오케스트레이션. 5가지 패턴: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.
- **Level 3: Agents** — LLM이 동적으로 자신의 프로세스·도구 사용을 결정.

**핵심 원칙**: 가장 낮은 레벨에서 시작하고, 측정 가능한 성능 향상이 있을 때만 복잡도를 추가하라.

## 에이전트 스택의 4 레이어 (스펙트럼)

| 레이어 | 무엇을 하는가 | 도구 |
|--------|-------------|------|
| **Low end** | 코드로 직접 오케스트레이션·툴 실행·상태·재시도 작성 | LangGraph, Claude Agent SDK, raw API |
| **Middle** | 프레임워크가 plumbing(에이전트·체인·메모리 추상화) 처리 | LangChain agents |
| **Upper-middle** | 플랫폼이 배포·런타임 소유 (메모리, 샌드박스, 자격증명 격리, 프로토콜) | Claude Managed Agents, Deep Agents Deploy |
| **High end** | 시스템 프롬프트 + 도구만, 커스텀 인프라 없음 | 잘 프롬프트된 모델 + tools |

2026 신규 플랫폼 두 개는 upper-middle에 위치 — 코드를 완전 제거하지는 않지만, "자격증명 격리 샌드박스 + append-only 세션 로그 + MCP/A2A/Agent Protocol 서버"를 한 주짜리 인프라 작업이 아니라 디폴트로 만들었다.

## Managed Agents vs Deep Agents Deploy 핵심 차이

**Anthropic Managed Agents** (April 8 public beta):
- **Brain**: Claude + 컨트롤러 로직, stateless·교체 가능
- **Hands**: 자격증명 접근 0인 일회용 샌드박스 컨테이너
- **Session**: append-only 이벤트 로그가 곧 외부 메모리. Brain이 죽어도 마지막 이벤트부터 새 인스턴스가 이어받음
- 가격: $0.08/세션-시간 + 토큰 비용
- 약점: vendor lock-in (Claude 전용)

**LangChain Deep Agents Deploy**:
- `AGENTS.md` — 에이전트 정체성·동작·지식을 plain markdown으로
- `SKILL.md` — 모듈식 지식, on demand 로드 (토큰 절감)
- `deepagents deploy` 한 명령으로 메모리(파일시스템 백엔드)·샌드박스(Daytona/Runloop/Modal)·MCP+A2A+Agent Protocol 서버 제공
- 어떤 모델이든 (OpenAI/Anthropic/Google/Ollama), 셀프호스트 가능, MIT 라이선스

## Anthropic의 Harness Design 교훈

[Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps):
- 3-에이전트 하네스: **Planner / Generator / Evaluator (Playwright 기반)**
- Claude 4.5→4.6로 모델이 좋아지자 **하네스를 단순화**: sprint decomposition 제거, evaluator를 per-sprint→end-of-run으로 이동
- 인용 (단일 짧은 인용): "find the simplest solution possible, and only increase complexity when needed."
- 시사점: 모델이 좋아지면 하네스를 **늘리는 게 아니라 줄이는** 게 자연스러운 응답. **하네스 컴포넌트는 모델이 못 하는 것에 대한 가정의 인코딩**이므로, 모델이 발전하면 그 가정을 stress-test해야 한다.

## ClawHavoc — 컨텍스트 레벨 정의의 보안 위험

2026년 2월 OpenClaw의 ClawHub(커뮤니티 스킬 레지스트리) 공급망 공격:
- 12개 publisher 계정 침해, 1,184개 악성 스킬 배포
- 한번 에이전트 컨텍스트에 로드되면 자격증명 유출, 도구 호출 리다이렉트, 추론 오염 가능
- Snyk ToxicSkills 보고서: ClawHub 스킬 36.8%가 어떤 형태든 취약, 13.4%는 critical

**교훈**: 컨텍스트 레벨 에이전트 정의 자체가 위험한 게 아니라, **신뢰할 수 없는 publisher의 스킬을 자격증명 접근 가능한 실행 컨텍스트에 로드하는 것**이 위험하다. 패턴은 보안 실패와 분리 가능하지만, 인프라 측에서 위협을 진지하게 다뤄야만 그렇다.

| | Supply chain | Credential isolation | Skill source |
|--|------|------|------|
| OpenClaw | Open community (ClawHub) | 미강제 | 미감사 publisher의 런타임 로드 |
| Deep Agents Deploy | 사용자가 통제 | Sandbox 추상화 | 로컬 `SKILL.md` |
| Managed Agents | 플랫폼 검증·폐쇄 | Brain/Hands 분리 | 플랫폼 내 구성 |

## AgentOS — 학계의 수렴

**AIOS** (Rutgers, COLM 2025): 에이전트용 OS의 첫 peer-reviewed 구현. Agent Scheduler, Context Manager, Memory Manager, Storage Manager, Tool Manager, Access Manager.

매핑: Brain ≈ Scheduler+Context, Session ≈ Memory+Storage, Hands ≈ Tool+Access. **AgenticOS 2026 Workshop** (ASPLOS 2026 공동 개최)도 같은 방향.

## 어디서 빌드할까 — 두 축

**Q1. 어떤 툴/플랫폼?** (스펙트럼 위치)

- Low-level (LangGraph/Agent SDK): 라우팅 로직이 도메인 특수, 상태 전이 정밀 통제 필요(금융·감사), 인프라 자체를 만드는 경우
- Managed (Managed Agents/Deep Agents Deploy): 잘 정의된 목적, 보안·자격증명 격리가 요구사항, 멀티 프로토콜 필요, 배포·운영이 병목

**Q2. 얼마나 많은 오케스트레이션이 필요한가?** (Anthropic 3 레벨, 별도 축)

기본 답: **Level 1에서 시작, 측정 가능한 향상이 있을 때만 복잡도 추가**. 두 축은 직교 — 매니지드 플랫폼이 Level 1 에이전트를 돌릴 수 있고, 커스텀 LangGraph 하네스가 Level 3 패턴을 구현할 수 있다.

**가장 흥미로운 케이스는 하이브리드**: LangGraph 위 커스텀 실행 로직 + Deep Agents Deploy의 표준 엔드포인트·메모리 관리. `deepagents deploy`가 커스텀 LangGraph 백엔드를 fronts할 수 있음.

## 변하지 않은 것

- **모델 품질이 여전히 dominant**. 강한 모델 위 약한 하네스 > 약한 모델 위 강한 하네스.
- **태스크 분해는 여전히 사람의 몫**. `AGENTS.md`도 그 안에 들어간 사고만큼만 유용.
- **Eval은 여전히 당신 책임**. 세션 로그/LangSmith 통합은 있지만, "옳은 일을 했는가"의 판단은 사람이.
- **하네스 복잡도는 모델 능력을 추적**해야 — 모델이 좋아지면 하네스를 줄여라.

## 추가 출처 (article 본문 인용)

- [Scaling Managed Agents — Anthropic Engineering](https://www.anthropic.com/engineering/managed-agents)
- [Harness Design for Long-Running Application Development — Anthropic Engineering](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Effective Harnesses for Long-Running Agents — Anthropic Engineering](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Deep Agents Deploy — LangChain Blog](https://blog.langchain.com/deep-agents-deploy-an-open-alternative-to-claude-managed-agents/)
- [Harness engineering for coding agent users — Martin Fowler](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)
- [Harness Engineering — OpenAI](https://openai.com/index/harness-engineering/)
- [AIOS: LLM Agent Operating System — arXiv](https://arxiv.org/abs/2403.16971)
- [AgenticOS 2026 Workshop](https://os-for-agent.github.io/)
- [2025 Was Agents. 2026 Is Agent Harnesses — Aakash Gupta](https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e)

## 위키 매핑 (수집 시점 메모)

- `concepts/harness-engineering` — 3-레이어 스펙트럼·하네스 단순화 원칙·ClawHavoc 보안 교훈을 추가
- `concepts/ai-orchestration` — 스펙트럼 vs 3 레벨이 직교한다는 점 보강
- `comparisons/agent-frameworks` — Managed Agents/Deep Agents Deploy 행 추가 후보
- `patterns/agent-server-harness` — Brain/Hands/Session 분리 패턴은 같은 그림의 매니지드 변형

confidence: high (Anthropic·LangChain 공식 출처 다수 교차)
