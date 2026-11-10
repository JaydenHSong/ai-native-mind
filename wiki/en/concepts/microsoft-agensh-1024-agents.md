---
title: "Microsoft Agensh — A 1,024-Agent Harness Without a Central Orchestrator"
category: concepts
tags: [microsoft, agensh, multi-agent, harness, orchestrator, program-bench, open-source]
created: 2026-10-25
updated: 2026-10-25
sources:
  - "raw/articles/2026-10-25-microsoft-agensh-1024-agents.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/agent-planning-to-implementation]]"
status: draft
confidence: high
---

# Microsoft Agensh — A 1,024-Agent Harness Without a Central Orchestrator

## TL;DR

Microsoft Research open-sourced Agensh on 2026-10-24, a decentralized multi-agent harness in which workers claim sub-tasks, share findings, and merge code into a shared Git repository with no lead agent. Tested from 1 to 1,024 agents on ProgramBench, it raised the five-task mean from 19.31% to 28.78% at 128 agents, and GPT-6.1-sol with 32 agents reached 79.59% on pandoc. The underlying paper dates to 2026-09-22; token costs are undisclosed.

## Key facts

- **Coordination moved to infrastructure**: planning, assignment, and merging live in a shared workspace (proposed/ongoing/completed states), a message interface, and a shared context board — not in a supervisor prompt. Each worker repeats the same five-step loop asynchronously.
- **Scale**: 1 → 1,024 agents across 16 nodes × 64 agents, on Linux with Docker Compose. Per-worker caps: 272,000 input tokens, 128,000 output tokens, 64 GiB memory; 6-hour offline budget per task.
- **Performance**: five-task mean 19.31% (1 agent) → 28.78% (128 agents). Pandoc: 33.89% (1 agent) → 55.06% (1,024 agents, GPT-5.6-sol); 79.59% with GPT-6.1-sol + 32 agents.
- **Speed**: reaching 30% on pandoc took 30 minutes with 128 agents, versus 60 minutes with 32 and 90 minutes with 8 — scale buys speed as well as accuracy.
- **Emergence**: as the organization grew, cooperation evolved from peer coordination to multi-worker integration, standardized workflows, and role specialization.

## Why it matters

1. **Copy the pattern, not the swarm**: 1,024 agents is close to a stunt; the transferable lesson is building claim/verify/merge rules as infrastructure, which applies to small teams too.
2. **The harness is the bottleneck**: the experiments suggest coordination structure, not model quality, sets the ceiling — an argument for fixing supervisor design before prompt design.
3. **Costs are unknown**: with token costs undisclosed, replicating the scale experiment could surprise on billing; measuring unit cost at small scale comes first.

## Limitations (explicit)

- The benchmark covers only five ProgramBench tasks; generalization to general coding work is unverified.
- 1,024 agents is an experimental ceiling, not a recommended operating scale.
- Undisclosed token costs and operational complexity make real-world adoption cost hard to estimate.
