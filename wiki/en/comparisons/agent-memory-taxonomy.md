---
title: "Agent Memory Taxonomy — Task vs Belief vs Lifecycle vs Safety"
category: comparisons
tags: [memory, taxonomy, belief-memory, safety-memory, lifecycle-memory, agent, virtual-memory, usable-scale-boundary]
created: 2026-05-17
updated: 2026-05-22
sources:
  - "raw/articles/2026-05-03-zenbrain-7-layer-memory.md"
  - "raw/articles/2026-05-15-groupmembench-multi-party-memory.md"
  - "raw/articles/2026-05-17-belief-memory-partial-observability.md"
  - "raw/articles/2026-05-17-human-inspired-memory-architecture.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md"
  - "raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md"
related:
  - "[[concepts/ai-memory-systems]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
status: active
confidence: high
---

# Agent Memory Taxonomy — Task vs Belief vs Lifecycle vs Safety

## Start here

If we call everything “memory,” multiple design questions get mixed together. The recent papers accumulated in this wiki suggest at least four layers:

1. **task / productivity memory** — memory that helps the agent keep doing the work
2. **belief memory** — memory that preserves what the agent believes, and with what confidence
3. **lifecycle memory** — memory that governs when to compress, forget, and reinforce
4. **safety memory** — memory that preserves what must not be forgotten in order to block risky behavior

## Core difference

Even if all of them are called “memory,” their objective functions differ:
- productivity memory tries to help the agent finish work faster and with less context loss
- belief memory tries to preserve uncertainty instead of collapsing too early
- lifecycle memory tries to keep the store healthy over time
- safety memory tries to stop dangerous actions

## Comparison table

| Category | task / productivity memory | belief memory | lifecycle memory | safety memory |
|---|---|---|---|---|
| Core question | What is needed to continue the current work? | What do we currently believe, and how strongly? | When should we compress, forget, or reinforce? | Is taking this action now risky? |
| Representative source | ZenBrain, GroupMemBench | BeliefMem | Human-Inspired Memory | MAGE |
| Storage unit | summaries, facts, state, recall candidates | candidate conclusion + probability | consolidated trace, deduped memory, entity link | safety-critical signal, prohibited pattern, risk cue |
| Failure mode | context rot, retrieval noise, stale summary | self-reinforcing error, premature commitment | store bloat, interference, stale-memory fixation | long-horizon threat accumulation, delayed attack, unsafe action |
| Good design | separate working / episodic / semantic / procedural memory | do not discard uncertainty | treat forgetting and reconsolidation as policy | keep separate shadow memory from normal task memory |
| Benchmark / evidence | GroupMemBench 46.0%, BM25 matched or beat many systems | best average performance on LoCoMo / ALFWorld | 97.2% retention precision + 58% store reduction | AgentDojo Banking / Slack with stronger early-stage detection |
| Main wiki page | [[concepts/ai-memory-systems]] | [[concepts/ai-memory-systems]] | [[concepts/ai-memory-systems]] | [[concepts/agent-supply-chain-security]] |

## 1. Task / productivity memory

This is the broadest bucket. The traditional short-term / long-term and episodic / semantic / procedural splits live here.

- the basic structure in [[concepts/ai-memory-systems]]
- ZenBrain’s 7-layer memory
- the limitations exposed by GroupMemBench for multi-party settings

The key question is not “how much do we store?” but **“does this memory help the agent continue the work?”** GroupMemBench showed that automatic systems can compress away the very group structure signals that matter for productivity.

## 2. Belief memory

This layer is what BeliefMem makes explicit.

- deterministic memory: observation → one conclusion
- belief memory: observation → multiple candidate conclusions + probability

The key principle is **do not discard uncertainty**. Under partial observability, “current hypothesis set” can be a more honest representation than “stored fact.”

This matters when:
- logs are incomplete
- multiple agents produce conflicting observations
- the debugging story has not hardened into one root cause yet

## 3. Lifecycle memory

This is the layer added by the Human-Inspired Memory line. Memory is treated not as a retrieval database but as an **operational pipeline**.

- sleep-phase consolidation
- interference-based forgetting
- engram maturation
- reconsolidation upon retrieval
- entity knowledge graph
- hybrid multi-cue retrieval

The main point is that **good memory is not just well-stored memory; it is well-maintained memory**. If you can reduce storage volume while keeping accuracy, the bottleneck may be maintenance policy rather than model capability.

## 4. Safety memory

This is the layer added by MAGE. Instead of mixing everything into normal task memory, it keeps a separate **shadow memory** specialized for risk signals.

This matters when:
- outputs from external tools, skills, or agents accumulate over a long trajectory
- single-shot filtering is not enough and a trajectory-level guardrail is needed
- a long-running agent needs a risk re-check right before action

Its purpose is different from productivity memory. Productivity memory helps the agent **do more**. Safety memory helps it **refuse what it should not do**.

## 2026-05-22 update — add boundary questions on top of the role taxonomy

Re-reading this week’s sources together suggests that the recent overlap in memory discussions comes from mixing two different tables:
1. a table that names **memory roles**
2. a table that asks **when those roles break down**

This page provides the **role taxonomy**. To make recent pages line up better, add these **boundary questions** on top.

| Boundary question | Representative source | How to read it in this taxonomy |
|---|---|---|
| **How large can memory grow before it stops being practically usable?** | Scale-Conditioned Evaluation | not just a task-memory issue; any memory system must keep surfacing usable evidence even as irrelevant sessions accumulate |
| **Is memory actually enforced at runtime so it is not silently lost?** | ClawVM | independent of belief/lifecycle/safety distinctions; this is a question about who owns writeback, flush, and reset |
| **Does the memory that notices risk actually block actions?** | MAGE + LITMUS | safety memory is incomplete unless it is paired with pre-action re-checks and state-audited evaluation |

So recent memory work compresses into two axes:
1. **Role axis** — task / belief / lifecycle / safety
2. **Boundary axis** — scale boundary / runtime enforcement / action-time safety check

That makes the page layout clearer:
- [[concepts/ai-memory-systems]] = basic memory structure + belief/lifecycle/productivity
- [[concepts/agent-supply-chain-security]] = safety memory + actual attack surface
- [[concepts/llm-evaluation]] = where and how memory gets measured
- this page = the **higher naming layer** that connects the three

## What this integrates, and what it leaves in place

This taxonomy does not delete existing pages. It **re-arranges them by role**.

- ZenBrain, GroupMemBench, BeliefMem, and Human-Inspired Memory stay in [[concepts/ai-memory-systems]]
- MAGE stays in [[concepts/agent-supply-chain-security]]
- this page sits above them as a comparison layer

So the problem “memory-related content is scattered across several pages” is compressed not by deletion, but by **naming and linking**.

## Solo developer design checklist

1. Is this memory for **helping the work** or for **blocking risk**?
2. Does this memory represent **probabilities / alternative hypotheses**?
3. Does this memory have a policy for **when to forget**?
4. Does this memory include a **pre-action safety check** separate from normal recall?

If even one answer differs, then even if the label is still “memory,” it is actually a **different subsystem**.

## Conclusion

Memory is no longer a single feature. It is no longer enough to ask only about **where memory is stored**. We now need to separate **uncertainty representation (belief)**, **maintenance policy (lifecycle)**, and **risk defense (safety)** as first-class design questions.
