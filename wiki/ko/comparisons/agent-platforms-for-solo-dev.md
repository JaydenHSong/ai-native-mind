---
title: "1인 개발자 관점 — 에이전트 플랫폼 4종 비교"
category: comparisons
tags: [solo-developer, comparison, managed-agents, deep-agents, openai-agents-sdk, langgraph, mvp]
created: 2026-05-01
updated: 2026-05-26
sources:
  - "raw/articles/2026-05-01-1-person-saas-cost-deep.md"
  - "raw/articles/2026-05-01-managed-vs-selfhost-breakeven.md"
  - "raw/articles/2026-05-01-mvp-stack-tools-2026.md"
  - "raw/articles/2026-05-01-anthropic-managed-agents-launch.md"
  - "raw/articles/2026-05-01-langchain-deep-agents-skills.md"
related:
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/agent-frameworks]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[patterns/agent-mvp-stack-2026]]"
  - "[[patterns/solo-product-strategy]]"
status: active
confidence: medium
---

# 1인 개발자 관점 — 에이전트 플랫폼 4종 비교

## 쉽게 읽기

[[comparisons/agent-frameworks]]는 **프레임워크 수준** 비교(LangGraph vs CrewAI vs OpenAI SDK), [[comparisons/managed-vs-deep-agents]]는 **매니지드 두 종** 비교. 본 페이지는 **1인 개발자 관점**에서 4가지 옵션을 한 표에 — 시간·돈·자유도·운영 부담의 트레이드오프.

## 핵심 차이 (한 줄)

**시간을 살래, 자유를 살래, 가벼움을 살래, 자율성을 살래.**

## 비교표

| 기준 | **Managed Agents** | **Deep Agents Deploy** | **OpenAI Agents SDK** | **LangGraph 직접** |
|------|---|---|---|---|
| 위치 (스택) | upper-middle | upper-middle | middle | low |
| 모델 | Claude 전용 | 모델 무관 | OpenAI 100+ LLM | 모델 무관 |
| 라이선스 | 클로즈드 SaaS | MIT | Apache 2.0 (SDK) | MIT |
| 호스팅 | Anthropic 클라우드 | 셀프 가능 | 자체 인프라 | 자체 인프라 |
| 가격 | 토큰 + $0.08/세션-시간 | 인프라비 + 토큰 | 인프라비 + 토큰 (~OpenAI) | 인프라비 + 토큰 |
| 셋업 시간 | **수일** (가장 빠름) | 수일~1주 | 수시간 (코드만) | 1주~ (모든 것 본인) |
| 자격증명 격리 | Brain/Hands 디폴트 | sandbox provider 추상화 | 직접 구현 | 직접 구현 |
| 멀티 프로토콜 | MCP·A2A·Agent Protocol 내장 | MCP·A2A·Agent Protocol 내장 | MCP 일부 | 직접 통합 |
| 메모리 | append-only + persistent (2026-04-23) | filesystem + AGENTS.md | 직접 구현 | 직접 구현 |
| Subagent | research preview | 정식 | handoff 패턴 | 직접 그래프 |
| 관측 | Console 통합 | LangSmith 네이티브 | 내장 트레이싱 | LangSmith / Langfuse |
| 학습 곡선 | 매우 낮음 | 중간 | **매우 낮음** (OpenAI 코드만 알면) | 높음 (그래프 사고) |
| 실패 시 디버깅 | append-only 로그 | LangSmith trace | 트레이싱 OK | 그래프 시각화 |
| 1인 fit | 검증 + MVP 단계 ⭐ | 단계 2~3 변곡점 이후 | 빠른 프로토타입, OpenAI 친화 | 매우 특수한 도메인만 |

## 4가지 옵션 — 한 줄 캐릭터

- **Managed Agents** — "**Anthropic이 운영해 주는 공유 주방**". 며칠 안에 배포. Claude lock-in을 받아들이고 시간을 산다.
- **Deep Agents Deploy** — "**오픈 키친 키트**". 같은 수준의 인프라를 자기 건물에 깔 수 있게 패키징. lock-in을 거부하는 대신 운영 부담.
- **OpenAI Agents SDK** — "**가벼운 코드 패키지**". 100줄 미만으로 핸드오프 패턴 구성. 인프라는 본인 책임이지만 코드는 제일 간단.
- **LangGraph 직접** — "**직접 짓기**". 그래프·상태·체크포인팅 모두 직접 설계. 도메인 특수·금융 같은 정밀 통제용.

## 언제 무엇을 쓸까 (1인 관점)

### Managed Agents — 검증 + MVP 단계 (⭐ 디폴트)

- **단계 0~1** ([[patterns/agent-mvp-stack-2026]]의 검증·MVP)
- 사용자 < 100명, 트래픽 < 100 req/일
- 평균 세션 시간 < 20분
- Claude로 가도 OK, lock-in 일단 수용
- 며칠 안에 첫 데모 → 사용자 피드백 → 빠른 iter

**왜**: 1인의 **시간이 가장 비싼 자원**. Brain/Hands 격리·세션·MCP·A2A를 직접 짤 시간을 채널·고객 대화에 쓴다.

### Deep Agents Deploy — 단계 2~3 변곡점 이후

- 사용자 > 100~500명, [[#변곡점]] 도달
- 모델 무관성 필요 (advisor만 Claude, 메인 GPT-4o-mini)
- 셀프 호스팅 / 데이터 외부 클라우드 안 됨

**왜**: Managed Agents의 세션 단가($0.08/시간)가 누적 부담이 되는 시점. AGENTS.md/SKILL.md 표준 채택으로 자유도도 확보.

### OpenAI Agents SDK — OpenAI 친화 + 빠른 프로토타입

- OpenAI를 메인 모델로 이미 사용
- 핸드오프 패턴이 단순한 워크플로
- 100줄 미만의 코드로 시작

**왜**: 학습 곡선이 가장 낮음. 단 자격증명 격리·관측은 본인이 더 짜야 함. 1인의 첫 옵션은 아니고 **이미 OpenAI 코드가 있는 경우**의 자연 연장.

### LangGraph 직접 — 매우 특수한 도메인만

- 도메인 특수 라우팅 (금융·법률 정밀 통제)
- 감사 요구사항이 강한 산업
- 본인이 인프라 자체를 만드는 빌더

**왜**: 1인 디폴트는 아님. 그러나 **차후 자기 인프라를 다른 사람에게 제공할 계획**이라면 LangGraph가 정답.

## 변곡점

[Managed vs Self-host 변곡점 raw](raw/articles/2026-05-01-managed-vs-selfhost-breakeven.md) 정밀 모델:

```
T (req/일) × S (분/req) = 25 × F (self-host 인프라비 $/월)
```

| Self-host 비용 F | 변곡점 (T × S) | 의미 |
|---------------|--------------|------|
| $80/월 | 2,000 | 100 req/일 × 20분, 또는 200 req/일 × 10분 |
| $200/월 | 5,000 | 500 req/일 × 10분 |
| $500/월 | 12,500 | 매우 높은 트래픽까지 Managed 우위 |

→ **[비용 시뮬레이터 widget](../../examples/cost-simulator/index.html)** 에서 슬라이더로 본인 시나리오 확인.

## 1인 mover 추천 경로

```
[검증]   Managed Agents 또는 직접 LLM 호출
   ↓
[MVP]    Managed Agents (디폴트)
   ↓     평가: 변곡점 도달했나?
   ↓
[초기]   Managed 유지 OR Deep Agents Deploy 평가
   ↓     기준: T×S, 모델 무관성 필요, 운영 시간
   ↓
[운영]   Deep Agents Deploy 셀프 호스팅
```

→ 대부분의 1인은 **검증 → MVP → 초기 → 운영** 4단계를 모두 가더라도, **단계 1까지 Managed**, **단계 2 평가**, **단계 3 Self-host**의 자연 흐름.

## 1인이 흔히 하는 실수

- **단계 0(검증)에서 Managed Agents 가입**: 직접 LLM 호출이면 충분. 인프라 조기 도입은 비용·복잡도만 누적.
- **단계 1에서 LangGraph 직접 짜기**: 시간 날린다. Managed로 며칠에 배포하고 채널에 시간 쓰기.
- **변곡점 미달인데 Self-host로 이전**: 인프라 운영 시간이 더 비싸진다.
- **변곡점 한참 지났는데 Managed 유지**: 세션 단가 누적 → 수익률 악화.

## 결론

**1인의 디폴트 답은 "Managed Agents → 변곡점 도달 시 Deep Agents Deploy 이전"**.

OpenAI Agents SDK는 **OpenAI 친화 도메인의 보조**, LangGraph 직접은 **빌더·특수 도메인 전용**. 보통의 1인 SaaS 흐름엔 Managed → Deep Agents 두 단계가 자연스럽다.

## 관련 페이지

- [[patterns/agent-mvp-stack-2026]] — 단계별 5대 영역 도구
- [[comparisons/managed-vs-deep-agents]] — 두 매니지드 깊이 비교
- [[comparisons/agent-frameworks]] — 프레임워크 수준 비교 (LangGraph 등)
- [[patterns/ai-cost-management]] — 모델 비용 최적화
- [[patterns/solo-product-strategy]] — 제품 전략 위·아래

## 참고 소스

- [1인 SaaS 비용 정밀 raw](raw/articles/2026-05-01-1-person-saas-cost-deep.md)
- [Managed vs Self-host 변곡점](raw/articles/2026-05-01-managed-vs-selfhost-breakeven.md)
- [MVP Stack 도구 매트릭스](raw/articles/2026-05-01-mvp-stack-tools-2026.md)
- [Managed Agents 출시 (Anthropic)](raw/articles/2026-05-01-anthropic-managed-agents-launch.md)
- [Deep Agents + Skills (LangChain)](raw/articles/2026-05-01-langchain-deep-agents-skills.md)
