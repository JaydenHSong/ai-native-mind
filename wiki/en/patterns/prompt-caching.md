---
title: "Prompt Caching Strategy"
category: patterns
tags: [prompt-caching, cost-optimization, anthropic, llm]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-prompt-caching.md"
related:
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/context-engineering]]"
  - "[[tools/claude-code]]"
status: active
confidence: high
---

# Prompt Caching Strategy

## Easy Read

**Analogy**: Instead of **transcribing an entire textbook from scratch** for every single classroom question, you buy a copy of the textbook once (saving it to cache) and simply refer to it while asking different questions. When the **beginning portion of your prompt (system rules, massive codebase files)** remains identical across multiple calls, caching it yields massive cost savings.

| Term | Explanation |
|------|------|
| **Prefix** | The static, repeating blocks positioned at the top of a prompt |
| **Cache Read vs. Write** | Retrieving pre-saved data (very cheap) vs. indexing new data (more expensive) |
| **TTL (Time to Live)** | The duration the cached data remains valid before expiring |

## One-Line Definition

An optimization technique that stores repeating prompt prefixes in the model's server-side memory to reduce active API input costs **by 70% to 90%**.

---

## Cost Structure (Anthropic Specs)

| Execution State | Pricing (Ratio to baseline input fees) |
|------|---------------------|
| **Cache Write (5-minute TTL)** | 1.25x |
| **Cache Write (1-hour TTL)** | 2.00x |
| **Cache Read** | **0.10x** (90% savings) |

**Break-even Invariant**:
- **5-minute TTL**: Costs are recovered with just **1 read hit**.
- **1-hour TTL**: Costs are recovered with **2 read hits**.

### Empirical Savings

> "Monthly bill slashed from $720 to $72—retaining the exact same features without making changes to application code."

Combining this with the [[patterns/ai-cost-management|Batch API]] (50% discount) yields a **95% total cost reduction**.

---

## Core Implementation Blueprint

### 1. Positioning Cache Breakpoints
Set cache breakpoints immediately after the final static block of your prompt:

```
[ System Prompt ]        ──→ Target Cache Prefix
[ Large Document ]       ──→ Target Cache Prefix
[ Code Context ]         ──→ Target Cache Prefix
[ Tool Schema Specs ]    ──→ Target Cache Prefix
  ━━━━━━━ [ CACHE BREAKPOINT ] ━━━━━━━
[ Active User Message ]  ──→ Changes on every call
```

### 2. Prompt Architecture
- **Must-Cache Areas (Static)**: System prompts, comprehensive instructions, technical documentation files, codebase indexes, and MCP tool schemas.
- **Do-Not-Cache Areas (Dynamic)**: Active user queries, real-time logs, and the most recent conversational replies.

### 3. Minimum Token Ceiling
**Anthropic only caches prompts exceeding 1,024 tokens.** Trivial, short prompts will not trigger cache hits.

### 4. Choosing the Right TTL

| TTL Configuration | Best Suited For |
|-----|------|
| **5-minute TTL** (Default) | Continuous real-time chat sessions, fast compiler debugging loops |
| **1-hour TTL** | Long analytical sessions, periodic automated batch requests |

---

## Production Use Cases

- **Interactive Customer Assistants**: Caches a large corporate ruleset and FAQ base across multi-turn chats.
- **Autonomous Coding Agents**: Caches codebase schemas and standard imports across the entire workspace run. **This is natively leveraged by Claude Code**.
- **Document Analysis Engines**: Caches massive PDF books or source manuals once, and runs multiple distinct analytical queries against them.

---

## Interfacing with [[concepts/context-engineering|Context Engineering]]

Within the scope of Context Engineering, Prompt Caching is the primary driver of **economic viability**. High-performance prompt design must be coupled with efficient caching structures to remain viable at scale.

## 2026 Platform Updates

- As of **2026-02-05**, Anthropic enforces **workspace-level isolation** for prompt caching (migrated from organization-wide caching).
- This guarantees data security and strict division between individual client workspaces inside the same parent organization.

## References

- [Prompt Caching Curation Research Notes](raw/notes/2026-04-09-prompt-caching.md)
- [Prompt Caching Developer Guides (Anthropic)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Making Prompts 10x Cheaper with Caching (ngrok)](https://ngrok.com/blog/prompt-caching)
