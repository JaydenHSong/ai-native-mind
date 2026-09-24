---
title: "AI Memory Systems"
category: concepts
tags: [memory, agent, long-term, short-term, context, multi-party, group-memory, benchmark, probabilistic-memory, partial-observability, forgetting, consolidation, safety-memory, taxonomy, virtual-memory, token-budget, scalability, usable-scale-boundary]
created: 2026-04-09
updated: 2026-05-22
sources:
  - "raw/notes/2026-04-09-ai-memory-systems.md"
  - "raw/articles/2026-05-03-zenbrain-7-layer-memory.md"
  - "raw/articles/2026-05-15-groupmembench-multi-party-memory.md"
  - "raw/articles/2026-05-17-belief-memory-partial-observability.md"
  - "raw/articles/2026-05-17-human-inspired-memory-architecture.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md"
  - "raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/vector-db-embeddings]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
  - "[[comparisons/agent-memory-taxonomy]]"
status: active
confidence: high
---

# AI Memory Systems

## Start here

**Analogy**: humans separate a **working desk** from a **journal archive**. AI does something similar. **Short-term memory** lives inside the current context window. **Long-term memory** lives outside it in files, databases, or vector stores.

| Term | Plain meaning |
|---|---|
| **Context window** | the maximum amount the model can see at once |
| **Semantic memory** | long-term memory that retrieves by meaning similarity |
| **RAG** | retrieving documents when needed and attaching them back into short-term memory |

## One-line definition

A persistent memory system that goes beyond the LLM context window. In 2026 it is a core architectural component for AI agents.

## Fast split — stop calling all of this just “memory”

Recent sources in the wiki suggest that memory now needs at least four separate questions.

| Question | Representative concept | Main page to read |
|---|---|---|
| Where is it stored? | short-term / episodic / semantic / procedural / layered memory | this page |
| What do we believe, and with what confidence? | **belief memory** | BeliefMem section on this page |
| When do we compress, forget, and reinforce? | **lifecycle memory** | Human-Inspired Memory section on this page |
| What must not be forgotten to prevent risk? | **safety memory** | MAGE section in [[concepts/agent-supply-chain-security]] |

For the higher-level comparison table, see [[comparisons/agent-memory-taxonomy]]. This page focuses on the **basic structure of memory systems** and the **internal evolution of memory design**.

## Core content

### Short-term memory

Comparable to human working memory. It lives **inside the model’s context window**.

Includes:
- recent conversation history
- system prompt
- tool outputs
- reasoning steps

Management pattern: because tokens are limited, it behaves like a FIFO queue where old information gets pushed out by new information.

### Long-term memory

A **persistent store** that remains after the session ends. Knowledge accumulates across sessions.

## Three modalities of long-term memory

### 1. Episodic
Memory of **specific events and experiences**.
- “The user asked for X on 2026-04-09.”
- includes time information
- in this wiki, `wiki/log.md` plays this role

### 2. Semantic
Memory of **facts and concepts**.
- “The user’s name is Jayden.”
- “The project is built with Next.js.”
- not tied to time
- in this wiki, `wiki/concepts/` plays this role

### 3. Procedural
Memory of **how-to knowledge and skills**.
- “This project builds with `pnpm build`.”
- “The 10-step wiki ingest checklist.”
- in this wiki, `CLAUDE.md` plays this role

## Memory transition: short → long

Compression from short-term into long-term usually involves:
- **cognitive compression**
- separating high-signal facts from conversational noise
- an LLM deciding whether something is worth remembering

## Major frameworks

| Framework | Characteristic | Best fit |
|---|---|---|
| **Mem0** | open source, automatic extraction and storage | general-purpose |
| **Zep** | knowledge-graph integration | relationship reasoning |
| **LangChain Memory** | many memory classes | LangChain ecosystem |
| **AWS AgentCore** | enterprise-oriented | AWS integration |
| **Redis for Memory** | fast reads and writes | high-performance setups |

## 2026 trends

### Layered systems

```text
L1: conversation context (ultra-short)
L2: session summary (short)
L3: vector DB (mid-term)
L4: knowledge graph (long-term)
```

### Shared memory for multi-agent systems
Several agents access the same memory. This becomes important in team-style collaboration setups.

### Beyond fact storage
The field is moving past raw fact storage toward intent tracking, forgetting policy, and memory lifecycle design.

## Relationship to [[concepts/context-engineering|Context Engineering]]

Memory/State is one of the five layers of Context Engineering, and this wiki is already a practical implementation.

| Layer | Implementation in this wiki |
|---|---|
| **Semantic Memory** | `wiki/concepts/`, `wiki/patterns/` |
| **Episodic Memory** | `wiki/log.md` |
| **Procedural Memory** | `CLAUDE.md` |
| **Short-term** | Claude Code session context |

## Implementation concerns

- **Forgetting policy**: what gets deleted, and when?
- **Retrieval policy**: how do we load only relevant memory?
- **Privacy**: how is PII handled?
- **Cost**: vector DB and storage overhead

## 2026-05-03 update — ZenBrain: 7-layer memory + predictive memory

[ZenBrain](https://arxiv.org/abs/2604.23878) argues that long-running autonomous agents need a richer memory design inspired by neuroscience: **7 layers + 9 algorithms + 6 PMA (Predictive Memory Architecture) components**.

It adds two important axes on top of the older episodic/semantic/procedural framing.

| Added layer | Role | Relation to the current wiki |
|---|---|---|
| **Sensory** | short window over raw tool-response streams | a sub-layer of short-term memory |
| **Working** | active variables in the current turn | the core of short-term memory |
| **Autobiographical / Self** | persona, commitments, long-term goals | new layer for preventing “personality drift” |
| **Predictive (PMA)** | forward model of likely next input | new layer that can reduce retrieval calls |

Three key takeaways:
1. **Memory is not just storage.** Encoding, reinforcement, forgetting, and prediction all matter.
2. **Forgetting is a feature.** If nothing is ever forgotten, retrieval turns into noise. That links directly to [[concepts/context-rot-hallucination]].
3. **Predictive memory matters.** If the system can anticipate likely next inputs, it can use tokens more efficiently and reduce hallucination pressure.

For a solo developer, the practical checklist becomes:
- Is there an explicit **forgetting policy**?
- Is **self/persona** stored persistently?
- Can a **predictive layer** reduce unnecessary retrieval?

## 2026-05-15 update — GroupMemBench: measuring multi-party memory

[GroupMemBench](https://arxiv.org/abs/2605.14498) argues that most memory benchmarks assume **dyadic (1:1)** interaction and therefore miss three properties common in real deployment: **group dynamics**, **speaker-grounded belief tracking**, and **audience-adapted language**.

| Finding | Number |
|---|---|
| strongest memory system average accuracy | **46.0%** |
| knowledge update | **27.1%** |
| term ambiguity | **37.7%** |
| simple **BM25 baseline** | matched or beat many memory systems |

Main implication: in multi-party settings, automatic memory ingestion often **compresses away the group structure and lexical cues** that actually matter.

This gives a new evaluation axis for memory systems: the **dyadic gap**.

## 2026-05-17 update — BeliefMem: treat memory as a belief state under partial observability

[BeliefMem](https://arxiv.org/abs/2605.05583) argues that deterministic memory systems often store a **single conclusion** from each observation, which can harden early mistakes into long-term memory.

| Deterministic memory | BeliefMem |
|---|---|
| observation → one conclusion | observation → multiple candidate conclusions |
| uncertainty discarded | uncertainty preserved |
| hard to revise later | confidence updated with new evidence |
| encourages self-reinforcing error | keeps alternative hypotheses visible |

Core mechanism:
- store **candidate conclusions** separately
- assign each a **probability**
- update them with new observations using **Noisy-OR**
- surface all candidates plus their probabilities at retrieval time

The important shift is this: memory stops pretending to represent **what is true**, and instead represents **what is currently believed, and how strongly**.

This pairs naturally with GroupMemBench:
- GroupMemBench measures **what gets erased** in multi-party memory
- BeliefMem prescribes **how to store with less premature compression** under uncertainty

## 2026-05-17 update — Human-Inspired Memory: design consolidation and forgetting too

The Human-Inspired Memory line reframes long-term memory not as “store more” but as a question of **how to compress, forget, and reconsolidate**.

That means memory design becomes an **operational pipeline**, not just a retrieval database.

The shift matters because the bottleneck may not be the model itself, but the **maintenance policy** that keeps memory healthy over time.

## 2026-05-22 update — usable scale boundary

The latest additions suggest that memory discussions need one more question on top of type and role:

> **How large can the memory context grow before it stops being practically usable?**

This is the **usable-scale boundary** question.

Even a well-designed task, belief, lifecycle, or safety memory system can fail if irrelevant sessions accumulate faster than useful evidence can be surfaced. That is why [[comparisons/agent-memory-taxonomy]] now overlays memory roles with **scale boundary**, **runtime enforcement**, and **action-time safety checks**.

## Related pages

- [[comparisons/agent-memory-taxonomy]] — higher-level naming layer across memory roles
- [[concepts/agent-supply-chain-security]] — safety memory and the MAGE shadow-memory line
- [[concepts/harness-engineering]] — runtime and operational framing around memory
