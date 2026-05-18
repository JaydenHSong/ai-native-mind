---
title: "Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses (arXiv 2604.25850)"
source_url: "https://arxiv.org/abs/2604.25850"
author: "AHE authors (arXiv preprint, code: china-qijizhifeng/agentic-harness-engineering)"
published: 2026-04 (approx, v3 latest on arXiv HTML)
collected: 2026-05-06
tags: [arxiv, harness-engineering, observability, terminal-bench, automation, coding-agent, ahe]
status: ingested
---

# Agentic Harness Engineering (AHE) — 캡처 노트

> Harness 자동 진화의 **빈틈**을 셋(component / experience / decision)의 observability로 메운다. 모든 edit이 **falsifiable contract**가 되어, 진화가 trial-and-error로 붕괴하지 않게 한다.

## 한 줄 요약

> "Component / experience / decision observability turn every edit into a falsifiable contract, so harness evolution proceeds autonomously without collapsing into trial-and-error."

## 문제 정의

Harness가 coding-agent 성능의 중심이 됐지만, 자동화는 셋이 막는다:

1. **이질적 액션 스페이스** — 편집 가능한 컴포넌트가 다양 (prompt, tool 정의, orchestration 코드, eval 룰…)
2. **트래젝토리 폭발** — actionable signal이 토큰 수백만에 묻힘
3. **귀인 어려움** — 어느 edit이 어떤 효과를 냈는지 attribute 어려움

## 3 Observability Pillars

| 기둥 | 정의 | 효과 |
|------|------|------|
| **Component observability** | 모든 편집 가능 컴포넌트에 **file-level representation** 부여 | 액션 스페이스가 explicit·revertible — 무엇을 바꿨는지 명시적 |
| **Experience observability** | 수백만 raw trajectory 토큰을 **layered, drill-down evidence corpus**로 distill | evolving agent가 실제로 소비 가능한 신호 |
| **Decision observability** | 모든 edit을 **self-declared prediction**과 짝 → 다음 라운드의 task-level 결과로 검증 | 모든 edit이 **falsifiable contract** |

## 결합 효과

세 기둥이 함께 → harness 진화가 자율적이지만 trial-and-error에 빠지지 않음. 즉, 자동 진화의 **수렴성**을 observability가 보장.

## 정량 결과 (벤치마크)

- **Terminal-Bench 2** 에서 pass@1: **69.7% → 77.0%** (10 AHE iterations).
- 비교군 모두 능가:
  - 사람이 설계한 harness **Codex-CLI**: 71.9%
  - self-evolving baseline **ACE**
  - self-evolving baseline **TF-GRPO**

→ "사람 손으로 만든 SOTA harness"보다 자동 진화가 앞섬, 다만 그것이 **observability 3 기둥** 위에 얹혔을 때만.

## 위키 관점 인사이트

### `concepts/harness-engineering` 와의 합치

- Martin Fowler가 말한 **Guides/Sensors/Controls** 셋이 AHE의 **component observability** 와 정확히 매핑된다 — Sensor가 곧 component-level observable 이다.
- 우리 위키의 [[concepts/gen-ai-observability]] (Datadog 1,000+ 트레이스, OTel GenAI semconv) 가 **인프라 레벨**이라면, AHE는 **agent design 레벨**의 observability — 같은 단어, 다른 레이어.

### `comparisons/agent-eval-frameworks` 와의 짝

- DeepEval/LangSmith/Braintrust/Langfuse/Inspect AI/RAGAS = **결과 평가**.
- AHE의 **decision observability** = **edit 평가**. 위키에 없던 새 축.

### `patterns/preventing-context-rot` 와의 연결

- Experience observability(layered, drill-down evidence corpus)는 [[patterns/preventing-context-rot]]의 **3계층 메모리** 와 같은 문제(원시 로그가 신호를 묻음)를 다른 추상화로 푼다.
- 두 패턴은 **상호 보완** — 실시간 컨텍스트 관리(prevention) vs 사후 evidence 큐레이션(distillation).

### "The Last Harness" (2604.21003) 와의 짝

- Last Harness 논문 = **2-level 메타 진화** (Worker/Evaluator/Evolution + Meta).
- AHE 논문 = **3-pillar observability**가 그 진화를 안전하게 만드는 도구.
- 둘을 함께 읽으면 — **메타-진화 + 관측 가드레일** 한 세트.

## 출처

- arXiv abstract: <https://arxiv.org/abs/2604.25850>
- HTML(v1): <https://arxiv.org/html/2604.25850v1>
- HTML(v3): <https://arxiv.org/html/2604.25850v3>
- alphaXiv 요약: <https://www.alphaxiv.org/resources/2604.25850>
- 코드(공개): <https://github.com/china-qijizhifeng/agentic-harness-engineering>
- 한국어 컨텍스트(추가 읽기): <https://whatap.io/en/blog/harness-engineering-observability>

## 본 캡처 노트의 한계

- abstract + 검색 요약 기반. 본문 정독 시: ten iteration의 시간·비용, ablation(어느 pillar가 가장 기여), Terminal-Bench 2 외 도메인 일반화 여부 보강 필요.
