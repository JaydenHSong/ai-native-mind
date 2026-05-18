---
title: "Harness as an Asset: Enforcing Determinism via the Convergent AI Agent Framework (CAAF) (arXiv 2604.17025)"
source_url: "https://arxiv.org/abs/2604.17025"
source_type: "arxiv-paper"
authors: ["Tianbao Zhang"]
published: 2026-04-18
fetched: 2026-05-06
tags: [harness-engineering, determinism, safety-critical, control-theory, paradox-detection, arxiv]
status: ingested
---

# Harness as an Asset: Enforcing Determinism via CAAF

> arXiv:2604.17025v1 [cs.AI], 2026-04-18. Tianbao Zhang (Independent). Closed-loop "Fail-Safe Determinism"으로 LLM의 sycophantic compliance를 제거.

## 메타

- **Title**: Harness as an Asset: Enforcing Determinism via the Convergent AI Agent Framework (CAAF)
- **Authors**: Tianbao Zhang (tianbao.zhang@yahoo.com)
- **arXiv**: <https://arxiv.org/abs/2604.17025>
- **Submitted**: 2026-04-18
- **Domain**: safety-critical engineering (L3 autonomous driving, pharmaceutical formulation)

## Abstract (verbatim)

> "Large Language Models (LLMs) produce a controllability gap in safety-critical engineering: even low rates of undetected constraint violations render a system undeployable. Current orchestration paradigms suffer from sycophantic compliance, context attention decay (Liu et al., 2024), and stochastic oscillation during self-correction (Huang et al., 2024). We introduce the Convergent AI Agent Framework (CAAF), which transitions agentic workflows from open-loop generation to closed-loop Fail-Safe Determinism via three pillars: (1) Recursive Atomic Decomposition with physical context firewalls; (2) Harness as an Asset, formalizing domain invariants into machine-readable registries enforced by a deterministic Unified Assertion Interface (UAI); and (3) Structured Semantic Gradients with State Locking for monotonic convergence."

## 풀고자 하는 문제 — "Compliant Hallucinations"

LLM이 **문법은 맞지만 물리적으로 모순되는** 출력을 내는 3가지 실패 모드:

| 실패 모드 | 메커니즘 |
|-----------|----------|
| Sycophantic Compliance | 모델이 사용자 기대에 맞춰 강제로 답을 만든다(infeasibility 선언 못 함) |
| Context Rot | 긴 문서에서 초기 안전 제약의 attention weight가 감쇠 (Liu et al., 2024) |
| Stochastic Oscillation | self-correction 루프에서 A 고치면 B 깨고, B 고치면 A 깨는 것 무한반복 |

**Determinism의 의미**: 시스템이 (a) 모든 formal constraint를 통과하거나, (b) reconcile 불가능을 신뢰성 있게 검출해 사람에게 escalate. **Incorruptible constraint enforcement**.

## 핵심 컴포넌트

| Component | Role |
|-----------|------|
| **Recursive Atomic Decomposition (RAD)** | physically isolated executor nodes + context firewalls, deterministic DAG routing |
| **Harness as an Asset (HaaA)** | 도메인 invariant를 versioned YAML constraint registry로 형식화, deterministic UAI validator로 강제 |
| **Unified Assertion Interface (UAI)** | Python assertion engine — incorruptible PASS/FAIL + 정확한 error trace. LLM이 override 불가 |
| **Structured Semantic Gradients** | feedback signal = 물리 UAI failure 앵커 + (deterministic boundary) + (LLM-inferred magnitude hint) |
| **State Locking** | constraint가 PASS되면 해당 schema를 read_only로 잠금 → monotonic convergence 보장 |
| **Semantic Reviewer** | UAI failure 해석 → Root-Cause + gradient + locking 결정. paradox면 Strategic Negotiation으로 escalate |
| **Strategic Resolution Menu** | constraint reconcile 불가 시 정량화된 trade-off 옵션 제시 |

## 핵심 결과 (정량)

1. **L3 Autonomous Driving — 100% Paradox Detection**: CAAF-all-GPT-4o-mini → 30/30. monolithic GPT-4o no-hint → 0/30, with-hint → 90%. *작고 싼 모델이 CAAF 안에서 SOTA를 능가*.
2. **Pharmaceutical 7-constraint nonlinear paradox** (ICH 규제 포함, Arrhenius interactions): CAAF → 20/20 (100%). monolithic GPT-4o-mini no-hint → 0%. Mono+UAI(ReAct ablation) → 95%.
3. **Multi-agent baseline 전부 실패**: Debate (2 agents, 3 rounds) 와 Sequential Checker (3 retries) 둘 다 80 trial 동안 0%. **오케스트레이션만으로는 reliability gap이 안 닫힌다**. UAI + State Locking이 있어야 닫힌다.

## "Self-Evolving Harness"와의 관계 — 보완적

| | Last Harness (2604.21003) | CAAF (2604.17025) |
|---|---------------------------|---------------------|
| What evolves | harness `H` 자체와 진화 프로토콜 `Λ` | nothing — `H`는 **고정·검증된 invariant** |
| When | offline meta-learning | inference-time enforcement |
| Failure mode 가정 | 도메인 적응 부족 | 같은 도메인 안에서 stochastic noise |
| 비유 | "더 나은 컴파일러를 학습한다" | "타입 시스템이 거짓말 못 하게 한다" |

CAAF는 **deterministic grounding layer** — Last Harness가 무엇을 진화시키든, CAAF는 그 결과를 production-safe하게 만든다. Last Harness optimizes what CAAF enforces. **두 논문은 서로 직교하는 질문**: "제약을 어떻게 진화시키는가" vs "제약 준수를 어떻게 보장하는가".

## 인용 (≤25 words each)

> "A system whose reliability depends on the presence of a specific linguistic trigger cannot be safely deployed in production environments."

> "CAAF operates as a closed-loop Cybernetic Controller, providing deterministic pathway to force stochastic LLM toward monotonic convergence."

> "Without a mechanism to lock confirmed constraint boundaries, the model oscillates indefinitely between fixing one constraint and breaking another."

## 1인 개발자 함의

- **`H = Asset`이라는 framing** — 우리 `CLAUDE.md`·템플릿·lint 룰을 단순 prompt가 아니라 **검증 가능한 invariant registry**로 다시 보면, frontmatter validation이 사실은 mini-UAI다.
- **State Locking**: ingest 워크플로우의 단계별 PASS를 **앞 단계 결과 잠그기**로 운용하면, 단계 건너뛰기/되돌이 oscillation이 사라진다 ([[patterns/bkit-superpowers-combo]]가 같은 냄새).
- **Multi-agent 단독으로는 안 된다**의 두 번째 정량 근거 (첫 번째는 Google 2026-05-02 논문). CAAF 결과는 더 거칠다 — debate/sequential 모두 0%.

## 위키와의 연결

- [[concepts/harness-engineering]] — `H`를 "asset"으로 보는 framing은 Fowler의 Guides/Sensors와 양립. Sensors가 "값 측정"이면 UAI는 **incorruptible** sensor.
- [[concepts/agent-supply-chain-security]] — UAI는 LLM-output을 신뢰하지 않는다는 점에서 dual-LLM/CaMeL 라인과 동일 가족.
- [[patterns/owasp-llm-typescript-mitigations]] — TypeScript 타입 시스템과의 자연 매핑(컴파일 시 PASS/FAIL).
- [[concepts/ai-orchestration]] — multi-agent baseline 0% 결과는 orchestration이 booster가 아니라 *validation bottleneck*임을 다시 확인.

## 이 논문이 보강한 위키 (수술적)

- `concepts/harness-engineering.md` — "2026-05-06 PM 보강" 섹션의 (2) prescriptive enforcement.
