---
title: "Context Engineering"
category: concepts
tags: [context-engineering, prompt-engineering, ai-orchestration, mise-en-place, context-fluency]
created: 2026-04-09
updated: 2026-05-15
sources:
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
  - "raw/notes/2026-04-09-solo-dev-ai-research.md"
  - "raw/articles/2026-05-12-mise-en-place-agentic-coding.md"
  - "raw/articles/2026-05-15-acdl-context-description-language.md"
related:
  - "[[concepts/prompt-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/ai-native-programmer]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[concepts/rag]]"
status: active
confidence: medium
---

# Context Engineering

## Easy Read (30 Seconds)

**One-Sentence Summary**: Going beyond "writing a single question well," context engineering is the discipline of designing the **entire information environment** (rule files, memory, tools, and safety guardrails) that the AI observes. The **Analogy** column in the table below is the quickest summary.

| Term | Explanation |
|------|------|
| **Context** | **All inputs** referenced by the model when generating a response |
| **Guardrails** | **Fences** that block disallowed behaviors and outputs |
| **RAG / MCP** | The layers that **safely** hook external knowledge and tools into the agent |

## One-Line Definition

The discipline of designing the entire information environment in which an AI operates—representing the direct evolutionary successor of Prompt Engineering.

## Core Concepts

### Prompt Engineering → Context Engineering

| | Prompt Engineering | Context Engineering |
|---|-------------------|-------------------|
| **Scope** | Crafting a single high-quality question | Designing the entire information environment |
| **Target** | A single line/block of prompt | System prompts + memory + tools + guardrails |
| **Goal** | Obtaining a single good response | Establishing repeatable and reliable AI behavior |
| **Analogy** | Asking a great question | Designing the entire classroom |

> "Context engineering makes AI behavior repeatable—moving it from merely impressive to **thoroughly reliable**."

### 5 Core Components

#### 1. System Prompt
Defining the AI's role, persona, and behavioral rules.
- *Our Workspace Example*: `CLAUDE.md`.

#### 2. Task Decomposition
Breaking down massive tasks into execution-friendly units for the AI.
- *Our Workspace Example*: The PDCA cycle: Plan → Design → Do → Check.

#### 3. Memory/State Management
Maintaining context across conversations and sessions.
- *Our Workspace Example*: `wiki/` (accumulated knowledge), `wiki/log.md` (active task log).

#### 4. Tools/API Access
Designing the tools and resources available to the AI.
- *Our Workspace Example*: File read/write, web search, and sub-agent delegation.

#### 5. Guardrails
Defining explicit constraints on what the AI must not do.
- *Our Workspace Example*: "The `raw/` directory is read-only," "Wiki pages must contain frontmatter."

### What We Are Already Practicing

This workspace wiki (`ai-native-mind`) itself represents a complete, practical application of Context Engineering:

| Component | Workspace Implementation |
|-----------|-----------|
| **System Prompt** | `CLAUDE.md` Schema |
| **Task Decomposition** | PDCA cycle, 10-step Wiki Ingest Checklist |
| **Memory** | `wiki/` (accumulated knowledge), `index.md`, `wiki/log.md` |
| **Tools** | Claude Code's file read/write capabilities |
| **Guardrails** | Mandatory frontmatter, read-only `raw/` directory, strict category rules |

## Why It Matters

Sequoia Capital now incorporates "agentic leverage" into its investment due diligence, highlighting that this skill directly determines a **solo developer's competitive edge**. Sound Context Engineering guarantees that:
- AI delivers **consistently** high-quality outputs (by design, not luck).
- **Context is preserved** even when switching sessions (via `CLAUDE.md` and the `wiki/` structure).
- Complex tasks are **systematically decomposed** and successfully executed by the AI.

## Positioning in the Three Generations

```
Prompt Engineering   ← 1st Gen: WHAT to ask
  → Context Engineering  ← Current Phase (2nd Gen): WHAT to show
    → Harness Engineering  ← 3rd Gen: HOW the entire system operates
```

Context Engineering represents the direct evolution of [[concepts/prompt-engineering|Prompt Engineering]], and serves as the core sub-layer of [[concepts/harness-engineering|Harness Engineering]].

## 2026-05-12 Update — Mise en Place (MEP) & Context Fluency

> Source: Zigler, "Mise en Place for Agentic Coding" (arXiv:2605.05400, 2026-05-06)

As a **workflow-level** implementation of Context Engineering, a 3-stage *mise en place* (MEP) has been proposed. Sitting one tier above invocation-scope prompt engineering and one tier below harness engineering, its core is phase-gating—completing prep work *before beginning implementation*:

| Phase | Deliverable | Core Concept |
|---|---|---|
| **1. Contextual Grounding** | Markdown briefing document externalizing domain and tacit knowledge | "Write down the *Why*—working backward from the outcome." |
| **2. Collaborative Specification** | Human-agent dialogue defining specs (screen layout, data flows, and **what to exclude**) | "Specifications align the agent's micro-decisions." |
| **3. Task Decomposition** | Dependency-aware task records (e.g., Beads JSON + Git) | "The interface for parallel agent execution." |

### Context Fluency — A New Developer Skill
While Prompt Engineering tunes *invocations*, Context Fluency designs the *upper* information architecture. It comprises 4 components: **Decomposition, Specification, Constraint definition, and Domain encoding**. *Implication*: Individuals with strong domain knowledge and educational/pedagogical skills become disproportionately effective in agentic workflows.

### Hackathon Case Study (Empirical Evidence)
- Preparation: 2 hours → 10 documents / 9,386 words / 64 beads.
- Execution: 184 mins × 4 parallel agents → 43 beads closed, median **5.9 mins/bead**.
- **Planning-to-code ratio 1.10:1, prep-to-execute ratio 5.7:1**, architectural rework ≈ 0.
- Bug fixing: median **1.2 mins** vs. implementation task of **9.7 mins**.

*Comparison*: This serves as the *counter-evidence* to the [[journal/2026-05-02|Google 2026-05-02 17.2x vs. 4.4x error amplification]] study: when prior alignment is sufficient, architectural rework converges to zero.

> For details: [Mise en Place Raw Notes](raw/articles/2026-05-12-mise-en-place-agentic-coding.md). Positioning: MEP represents a phase-gated instance of [[patterns/agent-planning-to-implementation]] and is cited in Phase 1 of [[patterns/claude-md-guide]].

## 2026-05-15 Update — ACDL (Agentic Context Description Language)

[Peleg Pelc, Kaminka, & Goldberg](https://arxiv.org/abs/2605.01920) (CAIS '26, 2026-05-03) address the lack of a *standard notation* for context synthesis by proposing **ACDL**—comprising four pillars: role-message sequences, dynamic content, time-indexed references, and conditional/iterative structures. It ensures identical semantics across both whiteboard hand-drawings and formal code representations. Project: <http://www.acdlang.org>.

| ACDL Component | Workspace Mapping |
|---|---|
| Role-message sequence | Explicit sequence of system/user/tool turns—pairs with the *read layer* of [[patterns/preventing-context-rot|3-tier memory]]. |
| Dynamic content | Time-variant slots like tool outputs or retrieved documents—how [[concepts/rag|RAG]] outputs are injected into the context. |
| Time-indexed reference | Explicit citation of turns $t-1, t-3$—formal notation for [[concepts/ai-memory-systems|short-term memory]] FIFO policies. |
| Conditional / iterative | If/loop branches—the notation for chaining/routing/loops in the [[concepts/ai-orchestration#6-core-orchestration-patterns|6 orchestration patterns]]. |

**Pairing with Mise en Place**: While MEP defines the *process* (preparation phase), ACDL diagrams the *resulting structure* (context flow). They form an input-output pair.

**Pairing with CLAUDE.md / GROUNDING.md**: While those files define the *constraint text*, ACDL specifies *how that text is dynamically injected into the prompt*.

**3 ROI Actions for Solo Developers**:
1. Diagramming your agent's context flow using a single ACDL diagram enables rapid re-comprehension 6 months later, serving as a powerful tool to minimize [[concepts/cognitive-debt|Cognitive Debt]].
2. When comparing two orchestration paradigms ("LangGraph vs. custom"), evaluate them on the identical notation layer without diving into raw code.
3. Add ACDL diagrams as optional attachments to pattern pages like [[patterns/agent-server-harness]] and [[patterns/agent-planning-to-implementation]]—unified notation builds cumulative value.

## Related Concepts

- [[concepts/prompt-engineering]] — 1st Generation, the foundation of Context Engineering
- [[concepts/harness-engineering]] — 3rd Generation, the upper layer encapsulating Context Engineering
- [[concepts/ai-orchestration]] — The execution technology built upon Context Engineering
- [[concepts/ai-native-programmer]] — The practitioner utilizing Context Engineering as a core skill
- [[concepts/rag]] — The traditional method of serving context (query-on-demand)

## Chapter Clear Guide

- **Chapter**: Chapter 2 (Basic Combat)
- **Quest**: Map your project's context components into the 5 core elements (System / Decomposition / Memory / Tools / Guardrails).
- **Clear Condition**: Redefine a development bottleneck from a "prompt issue" to a "context design issue."
- **Reward (Deliverable)**: A blueprint/diagram of your context pipeline (text-based formats are acceptable).
- **Next Quest**: [[concepts/context-vs-prompt-practice]] -> [[concepts/ai-orchestration]]

## References

- [AI Orchestration Research](raw/notes/2026-04-09-ai-orchestration-research.md)
- [Solo Developer AI Research](raw/notes/2026-04-09-solo-dev-ai-research.md)
- [Effective Context Engineering (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
