---
title: "Claude Managed Agents"
category: tools
tags: [managed-agents, anthropic, agent-platform, harness, sandbox, brain-hands]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-anthropic-managed-agents-launch.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
related:
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/agentic-engineering]]"
status: active
confidence: high
---

# Claude Managed Agents

## 쉽게 읽기

**비유**: 직접 식당 차리려면 인테리어·주방·위생·결제까지 다 만들어야 한다. **Managed Agents**는 **공유 주방**처럼 — 위생·주방·결제는 다 깔려 있고, **메뉴만 정하면** 영업 시작. 단, **그 주방의 룰**(Anthropic의 정해진 패턴, Claude만 사용)에 맞춰야 한다.

| 용어 | 풀이 |
|------|------|
| **Brain** | 의사결정·계획 — Claude 모델 + 컨트롤러 로직 (stateless) |
| **Hands** | 실제 도구·코드 실행 — **자격증명 0인** 일회용 컨테이너 |
| **Session** | 메모리·체크포인트 역할의 **append-only 이벤트 로그** |
| **Public beta** | 정식 GA는 아니지만 **누구나 사용 가능**한 베타 |

## 한줄 설명

Anthropic의 **클라우드 호스팅 에이전트 인프라** — 자격증명 격리 샌드박스, 장기 세션, scoped permission, end-to-end 트레이싱이 디폴트로 들어 있고, 사용자는 **에이전트 정의·도구·가드레일**만 정하면 된다. 2026-04-08 public beta 출시.

## 핵심 아키텍처 — Brain · Hands · Session

```
┌─────────────────────────────┐
│  Brain                      │   Claude + 컨트롤러. stateless.
│   ↑↓                        │   다음 모델로 갈아끼워도 호환.
│  Session (append-only log)  │   ← 외부 메모리. crash 후 재개의 단서.
│   ↑↓                        │
│  Hands                      │   샌드박스 컨테이너. 자격증명 0.
│   (tools, code execution)   │   사용 후 폐기.
└─────────────────────────────┘
```

**왜 분리하는가**:

- Brain이 죽어도 새 인스턴스가 Session 마지막 이벤트에서 이어받음 → **수 시간짜리 세션**도 disconnect 견딤
- Hands에 자격증명을 안 넘기므로 **prompt injection이 코드 실행에 도달해도** 토큰·키는 못 훔침
- 모델이 4.6 → 다음 세대로 가도 인프라 그대로 → **모델 업그레이드 내성**

## 주요 기능

- **Production-grade agents**: 보안 샌드박스 / 인증 / 도구 실행 디폴트
- **Long-running sessions**: 수 시간 자율 실행, disconnect에도 영속
- **Multi-agent coordination**: 에이전트가 다른 에이전트를 spin up·지휘 (research preview)
- **Trusted governance**: scoped permission, identity management, execution tracing 내장
- **Outcome-driven mode**: outcome + success criteria만 정의하면 self-evaluate·iterate (research preview). 내부 테스트에서 **task 성공률 +10pp**
- **Persistent memory** (2026-04-23 추가): 메모리를 파일시스템 위 파일로 저장, API/Console에서 export·edit
- **Console 통합 트레이싱**: 모든 tool call·결정·실패 모드를 검사 가능

## 가격

- **표준 Claude API 토큰 요금**
- **+ $0.08 per session-hour** (활성 런타임만)
- 인프라가 아니라 **런타임에 비용** 부과

→ [[patterns/ai-cost-management]]에서 다루는 비용 모델에 새 변수: 세션 단가 누적.

## 사용법 (요약)

자세한 흐름은 [[patterns/agents-md-skill-md]] 후보 페이지에서 정리 예정. 최소 흐름:

1. **Claude Console**의 agent quickstart 또는 **CLI**로 에이전트 정의 (자연어 또는 YAML)
2. 도구·가드레일·outcome criteria 추가
3. 배포 → Brain/Hands/Session 인프라 자동 프로비저닝
4. Console에서 트레이스 검사

Claude Code 최신 버전과 `claude-api` 빌트인 Skill로 "start onboarding for managed agents in Claude API"를 입력하면 가이드 시작.

## 도입 사례 (공식 인용 일부)

| 회사 | 사용처 | 보고된 임팩트 |
|------|-------|-------------|
| **Notion** | Custom Agents (private alpha) | 수십 작업 병렬 |
| **Rakuten** | 부서별 specialist 에이전트 | 각 specialist **1주 단위** 배포 |
| **Asana** | AI Teammates | 고급 기능 출시 가속 |
| **Sentry** | Seer + 패치 작성 에이전트 | 통합 **수개월 → 수주** |
| **Atlassian** | Jira 작업 할당 | 기능 배포 **수개월 → 수주** |
| **Vibecode** | 프롬프트→배포 앱 | 사용자 환경 spin-up **10x↑** |

다른 출처: 첫 패스 오류 **97%↓**, 문서 검증 워크플로 **30% 속도↑**.

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 자격증명 격리 샌드박스 디폴트 | **Claude 전용 lock-in** — OpenAI/Google/Ollama로 못 옮김 |
| Multi-protocol 통합 (MCP·A2A·Agent Protocol) | 라우팅·메모리 정책 fine-grained 제어 일부 포기 |
| 모델 업그레이드 내성 | 비용: $0.08/세션-시간 다수 long-lived 에이전트 누적 |
| Console 통합 트레이싱 | append-only 로그 — 복구엔 좋지만 검사엔 덜 readable |
| 며칠 단위 출시 (수개월 → 수주) | research preview 기능 다수 (multi-agent, outcome mode) |

## 언제 쓰는가

**적합**:
- 빠른 MVP·1인 창업자가 **인프라 일주일 작업을 며칠로** 줄이고 싶을 때
- 보안·자격증명 격리가 **요구사항**(nice-to-have 아님)
- 멀티 프로토콜이 필요하지만 직접 구현하기 부담
- Claude를 메인 모델로 이미 사용 중

**부적합**:
- 다른 모델(OpenAI/Google/Ollama) 병행 필요
- on-prem·셀프 호스팅 요구 (정부·금융 일부)
- 라우팅 로직이 매우 도메인 특수
- 트래픽이 매우 큰 long-lived 에이전트가 다수 → 단가 부담

## 비교

[[comparisons/managed-vs-deep-agents]] — 오픈 대안인 LangChain Deep Agents Deploy와의 자세한 비교.

## 위치 (위키 스택 그림 안에서)

[[concepts/harness-engineering]]의 "에이전트 스택 4 레이어" 중 **upper-middle** — "플랫폼이 배포·런타임 소유". Low-level(LangGraph/Agent SDK) ↔ High-end(시스템 프롬프트 + 도구) 사이.

## 참고 소스

- [Anthropic 공식 발표 (2026-04-08)](raw/articles/2026-05-01-anthropic-managed-agents-launch.md)
- [에이전트 스택 stratification 정리](raw/articles/2026-05-01-agent-stack-2026-layers.md)
- [Agent Skills (SKILL.md) 표준](raw/articles/2026-05-01-anthropic-agent-skills.md)
- [Claude Managed Agents — claude.com 블로그](https://claude.com/blog/claude-managed-agents)
- [공식 docs](https://platform.claude.com/docs/en/managed-agents/overview)
- [Memory 추가 보도](https://www.testingcatalog.com/anthropic-launches-memory-in-claude-agents-for-enterprise)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 5 (실전 보스전 — 에이전트 서비스 출시)
- **클리어 조건**: Managed Agents Console에서 빈 에이전트 1개 만들고, MCP 도구 1개·outcome criteria 1개 붙여 1번 돌려보기
- **다음 퀘스트**: [[tools/deep-agents-deploy]] 비교 → [[comparisons/managed-vs-deep-agents]]에서 결정
