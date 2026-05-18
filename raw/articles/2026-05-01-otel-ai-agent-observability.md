---
source_url: "https://opentelemetry.io/blog/2025/ai-agent-observability/"
title: "AI Agent Observability - Evolving Standards and Best Practices"
authors: ["Guangya Liu (IBM)", "Sujay Solomon (Google)"]
published: 2025-03-06
ingested: 2026-05-01
---

# AI Agent Observability — Evolving Standards and Best Practices (OpenTelemetry blog)

> 출처: [OpenTelemetry Blog (2025-03-06)](https://opentelemetry.io/blog/2025/ai-agent-observability/)
> 저자: Guangya Liu (IBM), Sujay Solomon (Google)

## 한 줄 요약

에이전트는 비결정적이라 텔레메트리가 **장애 대응을 넘어 품질 평가의 피드백 루프 입력**으로 쓰인다. 이를 가능하게 하려면 **벤더·프레임워크 중립적 시맨틱 컨벤션**이 필요하고, OpenTelemetry GenAI observability 프로젝트가 그 합의를 만들고 있다.

## AI 에이전트 ≠ AI 에이전트 프레임워크

핵심 구분:

- **AI agent application**: 자율적으로 특정 태스크를 수행하는 개별 AI 엔티티
- **AI agent framework**: 에이전트를 만들고/관리하고/배포할 인프라 — 예: IBM Bee AI, IBM wxFlow, CrewAI, AutoGen, Semantic Kernel, LangGraph, PydanticAI

→ 시맨틱 컨벤션도 두 층으로 나뉜다.

## OTel가 표준화 중인 컨벤션 (3개 층)

1. **Agent application semantic convention** — Google AI Agent whitepaper 기반 초안 [확정됨](https://github.com/open-telemetry/semantic-conventions/issues/1732). 개별 에이전트 엔티티 관측의 기초.
2. **Agent framework semantic convention** — IBM Bee/wxFlow, CrewAI, AutoGen, LangGraph 등 공통 표면 + 벤더 확장 ([issue #1530](https://github.com/open-telemetry/semantic-conventions/issues/1530)).
3. **GenAI semantic conventions (모델 호출 등)** — 이미 [실험 컨벤션 존재](https://opentelemetry.io/docs/specs/semconv/gen-ai/).

## 계측 두 갈래 — 현장 의사결정 가이드

### Option 1: Baked-in instrumentation (예: CrewAI)

프레임워크가 OTel semconv로 텔레메트리를 native 출력.

- **Pros**: 사용자에게 "관측 켜짐" 디폴트, 신기능과 동시에 계측 출시 가능
- **Cons**: 관측 안 쓰는 사용자에게 bloat, 프레임워크의 OTel 버전이 lock-in 위험, 고급 사용자에게 유연성 부족, 프레임워크 측이 best practice/컨벤션을 추적 못 하면 instrumentation이 뒤처짐
- **Best practice**: 켜고/끄는 설정 노출, 외부 instrumentation과 충돌 회피, OTel 레지스트리에 등록

### Option 2: 외부 OTel instrumentation 패키지

- **2a**: 자체 repo (Traceloop, Langtrace 등)
- **2b**: OpenTelemetry repo 내부 (`instrumentation-genai` python contrib 등) — Traceloop는 [기증 진행 중](https://github.com/open-telemetry/community/issues/2571)

장기적으로는 OTel-owned repo로 호스팅하는 것이 권장 방향.

## 텔레메트리가 단순 모니터링이 아닌 이유

- 에이전트는 비결정적 → 같은 입력에 다른 출력 가능 → "장애만" 보는 게 아니라 **품질 회귀**도 추적해야 함
- 텔레메트리 → eval 파이프라인 입력 (트레이스에 붙은 `trace_id`·세션 ID로 eval 데이터셋과 join 가능)
- 프레임워크 포맷이 제각각이면 A/B 테스트·비용·지연 분석이 통합 불가능에 가까움

## 위키 매핑 (수집 시점 메모)

- `concepts/gen-ai-observability` — 이 페이지가 이미 같은 주제. 본 글의 **agent app vs framework 구분**과 **baked-in vs 외부 패키지 의사결정 가이드**를 보강 후보.
- `concepts/llm-evaluation` — 트레이스·eval 데이터셋 join은 evaluation 페이지의 워크플로 보강 후보.
- `patterns/agent-server-harness` — Sensors 층에 OTel 스팬·span 속성 정책 일관화의 실무 체크리스트.

confidence: high (OTel 공식 블로그)

## 추가 참고 (article 본문 링크)

- [GenAI semantic conventions 스펙](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [Building Effective Agents — Anthropic](https://www.anthropic.com/research/building-effective-agents)
- [Google AI Agent whitepaper](https://www.kaggle.com/whitepaper-agents)
- [What are AI agents? — IBM](https://www.ibm.com/think/topics/ai-agents)
