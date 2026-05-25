---
title: "Superpowers"
category: tools
tags: [claude-code-plugin, superpowers, tdd, subagent, planning]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/bkit]]"
  - "[[tools/codex-plugin]]"
  - "[[tools/gstack]]"
  - "[[comparisons/claude-code-plugins]]"
  - "[[concepts/ai-orchestration]]"
status: active
confidence: medium
---

# Superpowers

## Easy Read

**Analogy**: An **open-source plugin** designed for Claude Code. Instead of letting the AI jump "straight into coding lines," it packages **elite senior developer habits** directly into skill files—forcing a rigorous sequence of **Brainstorming $\to$ Detailed Planning $\to$ Test Writing $\to$ Parallel Execution**.

| Term | Explanation |
|------|------|
| **Skill** | A structured bundle of **rules, workflows, and checklists** targeting specific tasks |
| **TDD (Test-Driven Development)** | Authoring failing unit tests *first*, then writing the minimum code needed to **make them pass** |
| **Brainstorming** | Extensively exploring requirements, assumptions, and edge risks *prior* to implementation |

## One-Line Definition

An open-source agentic skills framework developed by Jesse Vincent (obra) for Claude Code, custom-designed to enforce senior software engineering disciplines and TDD habits onto the AI runtime.

## Core Philosophy

"Think before you code; verify after you compile." Enforces a strict 3-stage loop: Brainstorm $\to$ Plan $\to$ Execute, governed by strict TDD (Test-Driven Development) boundaries. The strategic target is to graduate Claude Code from a simple text-generation assistant into a **highly systematic software engineer**.

## Key Features

### The 3-Stage Workarea Flow

```
Brainstorm (Socratic Refinement)
  ──→ Plan (Decompose into 2-5 min atomic tasks)
        ──→ Execute (Parallel Sub-agent Dispatch + 2-Tier Audit)
```

### 1. Socratic Brainstorming (`/superpowers:brainstorm`)
Refines operational requirements using strict **Socratic prompt cues** prior to drafting code:
- "Who is the primary end-user of this specific feature?"
- "What are the exact failure modes of this architectural approach?"
- "Is there a simpler, zero-dependency alternative?"

Saves the conversational synthesis into a workspace design artifact to lock in requirements.

### 2. Task Planning (`/superpowers:write-plan`)
Decomposes the approved design document into atomic, actionable task blocks:
- Limits each task size to 2-5 minutes of execution time.
- Specifies explicit file paths, code snippets, and verification tests.
- Defines clear dependencies between tasks.

### 3. Execution (`/superpowers:execute-plan`)
**Subagent-Driven Development**—spawns sandboxed sub-agents in parallel:
- Dispatches independent agents to handle parallelizable tasks.
- Implements a 2-tier review gate: (1) specification compliance audit, (2) raw code quality check.
- Protects the production codebase by executing changes in isolated Git worktrees.

### 4. Enforced TDD Loops
Strictly enforces the Red-Green-Refactor sequence:
1. **Red**: Draft a failing unit test first.
2. **Green**: Write the absolute minimum implementation code to make that test pass.
3. **Refactor**: Clean up the resulting code structure.

The execution runner blocks implementation tasks until a corresponding failing test is registered.

### 5. Systematic Debugging
Enforces a 4-step diagnostic protocol:
1. **Symptom Gathering**: Collecting error outputs, traces, and environment state.
2. **Hypothesis Formulation**: Isolating potential root causes.
3. **Root Cause Analysis**: Querying the codebase to verify hypotheses.
4. **Fix & Verify**: Deploying patches and verifying test passes.

### 6. Code Review (`/superpowers:review`)
Audits target PRs for codebase compatibility, ensuring specifications are met and code quality matches project styles.

## Installation

```bash
# Adding and running the plugin inside Claude Code
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

Primary commands exposed: `/superpowers:brainstorm`, `/superpowers:write-plan`, `/superpowers:execute-plan`.

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Completely free (MIT licensed) | Introduces 10-20 mins of brainstorming/planning planning overhead |
| Enforced TDD guarantees highly robust codebase quality | Demands high active context window management |
| Spawning parallel sub-agents accelerates complex features | Over-engineered for minor scripts or rapid line changes |
| Multi-tier review gates prevent code drifts | Features a steep operator learning curve |
| Capable of long, multi-hour autonomous executions | Hard to apply on legacy codebases lacking test setups |

## Significance in the AI-Native Era

Superpowers leverages the **Parallelization pattern** within [[concepts/ai-orchestration|AI Orchestration]]. A master orchestrator divides a plan into atomic sub-tasks, dispatches parallel sub-agents to execute them, and aggregates the results through review gates. Its core flow ("Think $\to$ Plan $\to$ Execute $\to$ Verify") shares identical architectural DNA with [[tools/bkit|bkit]]'s PDCA engine.

## Related Tools

- [[tools/claude-code]] — The terminal CLI extended by the Superpowers plugin
- [[tools/bkit]] — Similar structured PDCA workflow (broader project management scope)
- [[tools/codex-plugin]] — Enhances verification with cross-model peer reviews
- [[tools/gstack]] — Role-playing-based command wrapper

## References

- [GitHub: obra/superpowers](https://github.com/obra/superpowers)
- [Superpowers for Claude Code: Complete Guide 2026](https://www.pasqualepillitteri.it/en/news/215/superpowers-claude-code-complete-guide)
- [How I am using coding agents (Jesse Vincent FSCK Blog)](https://blog.fsck.com/2025/10/09/superpowers/)
