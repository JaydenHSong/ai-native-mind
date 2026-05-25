---
title: "Subagents & Delegation Patterns"
category: patterns
tags: [subagents, claude-code, delegation, orchestration]
created: 2026-04-09
updated: 2026-05-02
sources:
  - "raw/notes/2026-04-09-subagents-delegation.md"
  - "raw/articles/2026-05-02-humanlayer-skill-issue-harness.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/agent-server-harness]]"
status: active
confidence: high
---

# Subagents & Delegation Patterns

## Easy Read

**Analogy**: Attempting to force a single class monitor to master and execute every single school subject results in extreme cognitive clutter. **Subagents** behave like specialized **student team members** (e.g., a "Math Specialist" or an "English Specialist"). By keeping their private notes **(isolated context windows)** completely separate, we prevent critical information from getting mixed up.

| Term | Explanation |
|------|------|
| **Subagent** | A specialized assistant configuration running in a separate thread, decoupled from the main chat context |
| **Delegation** | Breaking down a complex task into atomic jobs and handing them off to specialized subagents |
| **Context Window** | The maximum memory buffer size (tokens) a model can parse in a single execution turn |

## One-Line Definition

A system design blueprint utilizing Claude Code's subagent architecture to delegate complex coding tasks to specialized workers while preserving the main thread's context window.

---

## What is a Subagent?

A subagent is a decoupled agent thread running on an **isolated context window** independent of the main session. It can be configured with its own system prompt instructions, tool restrictions, and model parameters. Configured within `.claude/agents/`.

### The Three Execution Modes

| Invocation Mode | Command Example | System Behavior |
|------|------|------|
| **Natural Language** | "Explorer, scan this codebase." | The main orchestrator model decides when to delegate |
| **Explicit Mention** | `@explorer analyze this directory` | Bypasses standard routing; triggers target worker instantly |
| **Session-wide** | Standard session flags | Routes all interactions through a specific subagent configuration |

---

## The Three Core Design Patterns

### 1. Explore-Plan-Execute (Sequential Pipeline)
The standard, most reliable blueprint for long-horizon software engineering tasks.

```
                  [ MAIN CHAT CONTEXT ]
                           │
                           ▼
                 [ Explorer Subagent ]     ← Scans codebase, extracts targets
                           │
                           ▼ Summarized logs passed
                  [ Planner Subagent ]     ← Compiles detailed execution plan
                           │
                           ▼ Step-by-step tasks passed
                 [ Executor Subagent ]     ← Modifies code and compiles files
```

*System Benefit*: Clean handoffs. The parent orchestrator never parses the raw stack traces or search histories; it receives only the **synthesized execution deliverables**.

### 2. Parallel Subagents
Coordinating simultaneous runs to handle independent operations concurrently:
- Modifying multiple decoupled files.
- Patching recurring API versions across multiple subfolders.
- Running parallel refactoring tasks.
Running 3 concurrent subagents yields significant latency savings compared to running a single sequential loop.

### 3. Context Preservation (Context Firewall)
Protecting the parent session's context window from token bloating:
- The subagent digests dozens of verbose files and returns only an atomic summary.
- Raw log data is filtered out, feeding only **synthesized findings** back into the parent prompt.
- Prevents [[concepts/context-rot-hallucination|Context Rot]] and hallucination drifts.

---

## Deciding When to Delegate

### ✅ Ideal Candidates for Delegation
- High-volume data retrieval tasks (scanning dozens of codebase directories).
- Decoupled parallel execution threads.
- Domain-specific reasoning gates (e.g., security audits or test code writing).
- Complex workflows demanding deep exploratory steps.

### ❌ Unsuited for Delegation
- Straightforward single-line file edits.
- Tightly coupled chronological operations where each edit relies on immediate parent model feedback.
- Tasks where the active parent context is already sufficient.

---

## Architectural Rules for Subagents

### Writing Clear Agent Descriptions
Claude relies on the `description` metadata block to trigger **automated routing**. Keep this highly explicit:

```markdown
---
name: security-reviewer
description: Reviews code for security vulnerabilities including SQL injection, XSS, CSRF, and insecure authentication. Use when reviewing PRs or completing features that handle user input, authentication, or sensitive data.
---
```

### Partitioning Tool Permissions
Assign each subagent only the **minimum required tools**:
- **Explorer**: Restricted to `Read`, `Grep`, and `Glob` operations.
- **Executor**: Granted additional access to `Edit`, `Write`, and `Bash`.
- **Reviewer**: Strictly read-only access (restricted to `Read` and compile checkers).

### Selecting the Optimal Model Family
- **Haiku**: Simple workloads (directory indexing, light parsing).
- **Sonnet**: Standard workloads (writing functions, debugging, code review).
- **Opus**: Deep reasoning tasks (system architecture plans, legacy database refactoring).

---

## Context Firewalls: The Critical Value of Subagents

> Source: "Skill Issue: Harness Engineering for Coding Agents" (HumanLayer, 2026-03).

A year-long audit of coding agent operations demonstrates that **organizing subagents by human roles (e.g., "frontend developer" or "data analyst") is ineffective**. The real value of a subagent is its role as a **Context Firewall**:

- **The parent orchestrator context only parses the initial prompt dispatched to the subagent and its final response.** Intermediate shell steps, search attempts, and raw compiler stack traces never bleed into the parent's memory window.
- As confirmed by Chroma's [Context Rot Research](https://research.trychroma.com/context-rot) (evaluating 18 frontier models on needle-in-a-haystack tasks), scaling context length degrades model accuracy. Irrelevant background text (distractors) dramatically accelerates performance decay.
- **Do not treat massive context windows as a silver bullet.** A larger "haystack" simply makes the "needle" harder to find. The optimal approach is **stitching together small, isolated context windows** using modular subagents.
- **Enforce summarized return payloads**: Instruct subagents to return only the core solution alongside precise line references (`filepath:line-number`) or URL tags. This allows the parent model to query deep layers only when required.
- *Rule of Thumb*: **Keep return payloads short; keep code references exact.**

### Optimizing Token Budgets
Deploy Opus for high-level plan orchestrations, and route subagent search tasks to Sonnet or Haiku. This prevents wasting expensive Opus tokens on raw directory scans. This is a core practice within [[patterns/ai-cost-management|AI Cost Management]].

### Counter-productive Patterns (HumanLayer Observations)
- Installing dozens of subagents "just in case"—this increases complexity and fails under load.
- Over-optimizing tool sets per subagent—triggers tool thrashing and degrades performance.
- Designing exclusively for 1-shot success—optimizing the speed of iterative feedback loops yields far better production outcomes.

---

## Interfacing with AI Orchestration

| Classical Orchestration Pattern [[concepts/ai-orchestration]] | Implementation in Subagents |
|-------------------|--------------|
| **Orchestrator-Workers** | Main parent agent coordinates specialized subagents |
| **Parallelization** | Concurrent subagent execution runs |
| **Prompt Chaining** | Explore $\to$ Plan $\to$ Execute sequence loops |
| **Evaluator-Optimizer** | Decoupled Generator and Reviewer subagent loops |

## Chapter Clear Guide

- **Chapter**: Chapter 4 (The Assembly Line)
- **Quest**: Design a custom subagent pipeline tracing the Explore-Plan-Execute sequence for your active software task.
- **Clear Condition**: Explicitly list the specific data payloads that will be passed into the subagent and detail what synthesized summaries will be returned to the parent thread.
- **Reward (Deliverable)**: 1 Specialized Subagent Interface Config Draft.
- **Next Quest**: [[patterns/agent-server-harness]] $\to$ [[patterns/safe-tool-calling-sandbox]].

## References

- [Subagent Coordination Curation Research Notes](raw/notes/2026-04-09-subagents-delegation.md)
- [How and When to Deploy Subagents (Anthropic)](https://claude.com/blog/subagents-in-claude-code)
- [Constructing Custom Subagents Reference (Claude Code Docs)](https://code.claude.com/docs/en/sub-agents)
- [Subagent Engineering Best Practices (Claude Fast)](https://claudefa.st/blog/guide/agents/sub-agent-best-practices)
