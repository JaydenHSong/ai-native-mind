---
title: "Agent Planning to Implementation Pipeline"
category: patterns
tags: [agents, planning, implementation, pdca, harness, orchestration]
created: 2026-04-11
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/notes/2026-04-09-subagents-delegation.md"
  - "raw/notes/2026-04-09-solo-product-strategy.md"
related:
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/subagents-delegation]]"
  - "[[patterns/bkit-superpowers-combo]]"
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/solo-product-strategy]]"
  - "[[patterns/agent-server-harness]]"
status: active
confidence: medium
---

# Agent Planning to Implementation Pipeline

## Easy Read

**Analogy**: Instructing an AI to handle "everything from high-level planning to terminal line coding in a single pass" inevitably piles up **unverified code assets** that are incredibly expensive to refactor. This pattern behaves like **Lego assembly instructions**—guiding execution one step at a time through Intent $\to$ Requirements $\to$ Design $\to$ Task List $\to$ Implementation, checking off verifiable milestones before proceeding.

| Term | Explanation |
|------|------|
| **Verifiable Artifact** | An objective deliverable (e.g., test suite pass, screenshot, schema definition) rather than a loose text assertion |
| **Harness** | The structural bundle of **rules, sensors, and constraint boundaries** that guide agent behaviors |
| **Prompt Chaining** | Sequencing prompts such that **Output A** from the first model step maps as **Input B** for the next |

## One-Line Definition

A structured execution pattern that leverages agents to manage high-level planning, requirements scoping, and task decomposition, while enforcing **verifiable human-in-the-loop (HITL) gates** at every step before writing code.

## Why It Matters

Coordinating agents under a flat "plan and write the code" prompt triggers massive [[concepts/cognitive-debt|Cognitive Debt]] due to context accumulation and logical drifts. Applying **Prompt Chaining** and the **Evaluator-Optimizer pattern** at a document layer ensures the [[concepts/harness-engineering|Harness]] (Guides and Sensors) actively governs the project from its early design stages.

## The Artifact Chain (Recommended Sequence)

To preserve strategic alignment, **never violate the following sequence**. This serves as your primary execution Harness:

1. **Intent & Scope**: Define the core goal—clearly documenting what the feature will *not* do (under 1 page).
2. **Requirements & Priorities**: Map user value and outline strict MVP boundaries (aligns with [[patterns/solo-product-strategy|Solo Product Strategy]]).
3. **Design & Interfaces**: Define data models, APIs, error parameters, and performance boundaries (latency, token costs).
4. **Verifiable Task List**: Break design down into atomic tasks where each item features a **verifiable success criterion** (e.g., test pass, asset check).
5. **Implementation**: Execute tasks utilizing the [[patterns/subagents-delegation|Explore $\to$ Plan $\to$ Execute]] workflow to prevent context explosion.
6. **Sensor Audits**: Run linters, compilers, type checks, and integration tests; route to a dedicated reviewer agent if necessary.

The output of each step serves as the **immutable input contract** for the next. Prohibiting modifications to prior artifacts (only allowing downstream additions) ensures robust, linear execution tracking.

## Human-in-the-Loop (HITL) Gates

Enforcing manual approval gates at key transition milestones blocks errors from cascading down the pipeline:

| Gate Threshold | Primary Target Blocked |
|--------|---------|
| **Intent Approval** | Prevents rapid execution of features aligned in the wrong product direction |
| **Design Approval** | Prevents costly, post-implementation schema and database rewrites |
| **Task List Approval** | Prunes scope creep and vague, non-verifiable completion states |
| **Merge Gate** | Filters regressions, security vulnerabilities, and inefficient token loops |

When operating under tight resource budgets, manual gates are not bottleneck constraints; they are **cost-effective insurance** to minimize backtracking expenses.

## Tooling Integration Matrix

- **bkit / PDCA Docs** (`docs/01-plan/`, etc.): Directly represents the *Guides* that lock down steps 1 to 3 of the artifact chain. Enforcing the [[patterns/bkit-superpowers-combo|bkit + Superpowers Combo]] is highly recommended to bridge design and implementation safely.
- **`CLAUDE.md` Conventions**: Workspace-level *Guides*. Refer to [[patterns/claude-md-guide|CLAUDE.md Guide]].
- **Sub-agents**: Deconstruct exploration, planning, and execution into specialized **personas and context windows**, implementing a clean *Orchestrator-Workers* architecture.

## Anti-Patterns to Avoid

- **Direct Execution**: Prompting "implement this feature" directly without upfront intent and task definitions.
- **Rubber-Stamp Approvals**: Approving verbose agent-generated plans or PRs without executing code reviews (defeating the purpose of HITL).
- **Vague Task Definitions**: Launching parallel task executions without clear, verifiable exit criteria, leading to broken dependencies.

## Related Concepts

- [[concepts/agentic-engineering]] — The structural framework of supervised agent development
- [[concepts/harness-engineering]] — Interfacing Guides, Sensors, and runtime boundaries
- [[concepts/ai-orchestration]] — Task sequencing and sub-agent architectures
- [[patterns/agent-server-harness]] — Deploying planning and execution runtimes to web backends

## References

- [Orchestration, Harness, and Server Supplementary Notes](raw/notes/2026-04-11-orchestration-harness-server-supplement.md)
- [Sub-agents & Context Delegation Research Notes](raw/notes/2026-04-09-subagents-delegation.md)
- [Solo Product Strategy Curation Notes](raw/notes/2026-04-09-solo-product-strategy.md)

## Chapter Clear Guide

- **Chapter**: Chapter 4 (The Forge — Implementing Workflows)
- **Quest**: Pick a minor feature and decompose its development into the exact sequence: Intent $\to$ Requirements $\to$ Design $\to$ Task List $\to$ Implementation.
- **Clear Condition**: Articulate with a concrete example why treating the output of the prior step as an immutable contract prevents logic drifts in the next.
- **Reward (Deliverable)**: 1 step-by-step feature execution checklist.
- **Next Quest**: [[patterns/subagents-delegation]] $\to$ [[patterns/agent-server-harness]]
