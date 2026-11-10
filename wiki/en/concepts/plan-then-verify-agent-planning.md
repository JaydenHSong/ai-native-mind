---
title: "Plan-Then-Verify — Verifier-First Planning for LLM Agent Systems"
category: concepts
tags: [plan-then-verify, agent-planning, verifier, benchmark, core-60, safe-abstention]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-plan-then-verify-agent-planning.md"
related:
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# Plan-Then-Verify — Verifier-First Planning for LLM Agent Systems

## Start here

**Analogy**: getting blueprints structurally reviewed before construction, fixing only what can be fixed once, and saying "we cannot build this" rather than improvising on site. Failures are blocked at planning time, not cleaned up after execution.

| Term | Meaning |
|------|---------|
| **Task graph** | A plan structured as steps, dependencies, and artifacts |
| **Deterministic verifier** | A rule-based module (not an LLM) that checks functions, artifacts, and ordering constraints |
| **Safe abstention** | Refusing to execute an unsupported request instead of inventing capability |

## One-line definition

Published in MDPI Applied Sciences on 2026-11-01: Plan-Then-Verify (PTV), an agent planning pattern in which a deterministic verifier checks a planner's structured task graph against a documented knowledge base before execution, allows one bounded repair pass, and abstains safely on unsupported workflows.

## Key facts

- **Pipeline**: planner → deterministic verifier (functions, artifacts, ordering constraints) → one bounded repair pass → execute only when the verifier's issue set is empty, otherwise abstain safely.
- **Core-60 benchmark**: a public 60-task benchmark spanning supported, multi-step, repair-sensitive, and unsupported requests. Benchmark, knowledge-base snapshots, implementation, analysis materials, and paper sources are public on GitLab.
- **Results**: PTV substantially improved static conformance scores over Plan-and-Execute across several model families (Gemma, Devstral, DeepSeek) while staying close to Plan-and-Execute in token cost. GPT-OSS and GLM showed near-zero effects where structured outputs collapsed under the tested serving stack.
- **Design point**: the verifier's ground is a documented operational knowledge base. What the verifier does not know cannot pass, so the knowledge base's quality caps the pattern.

## Why it matters (solo-developer view)

1. **A pre-execution gate is a solo developer's safety net**: verifying a plan before an agent touches tools, payments, or external systems prevents failures more cheaply than any rollback.
2. **Abstention is a feature**: saying "cannot do this" beats inventing a plausible plan. PTV treats abstention as a designed behavior, not a failure mode.
3. **The verifier need not be an LLM**: rule-based verification is reproducible and cheap. "Separate planning from verification" is a pattern applicable to harness design right away.

## Limitations (stated)

- The primary benchmark is static and invokes no real tools. Only an auxiliary sandbox replay executed stored plans against mock tools.
- The reported score is a conformance score (supported-task success plus correct abstention), not a real-execution success rate.
- A single paper source, with no independent reproduction or secondary coverage yet.
