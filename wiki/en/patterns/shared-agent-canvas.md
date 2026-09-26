---
title: "Shared Agent Canvas"
category: patterns
tags: [human-in-the-loop, collaboration, interface, context-engineering, lm-studio]
created: 2026-09-25
updated: 2026-09-25
sources:
  - "raw/articles/2026-09-25-lm-studio-agent-canvas.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[patterns/claude-md-guide]]"
status: draft
confidence: low
---

# Shared Agent Canvas

## Start here

**Analogy**: until now, working with an agent meant "telling it what to do in chat." LM Studio's Agent Canvas is a **shared workbench that both sides can see and edit**. The human sketches a mock-up, and the agent implements it right there. The instruction is no longer words — it's **a drawing edited together**.

| Term | Meaning |
|------|---------|
| **Canvas** | A shared workspace the user and the agent both see and edit |
| **Bionic** | LM Studio's agent — the side that takes on implementation on the canvas |

## One-line summary

The human-agent collaboration interface moves from chat (sequential turns) to a **shared canvas (simultaneous editing space)** — a pattern for handling the design-to-implementation handoff on the same screen.

## Problem

- **Expectation**: hand it to the agent and it figures it out
- **Reality**: chat-based collaboration (1) drops design intent that was only ever spoken, (2) lacks shared context — "what are you even looking at right now?", (3) splits approval (HITL) into a separate gate that breaks the flow

## Solution

### Canvas = shared context surface

- The user and the agent **look at and edit the same artifact** — flowcharts, process maps, system designs, mock-ups
- Workflow: polish the mock-up together, then ask **Bionic to implement** on the same screen
- The "design → implementation handoff" is solved by **sharing space**, not by passing chat messages

### Separating policy from design

- [[patterns/claude-md-guide]] (CLAUDE.md as policy object): policy is pinned in text
- Canvas: design is **co-edited** — "what goes where" is split
  - What's fixed (policy, rules) → text files
  - What's built together (design, mock-ups) → the shared canvas

### Through the context-engineering lens

[[concepts/context-engineering]] talks about "designing the AI's information environment" — now **the human enters that environment too**. The user and the agent looking at the same artifact is the premise of trust and supervision — supervision (HITL) shifts from "reviewing results" to "co-participating in the process."

## Example application

When collaborating with an agent:

1. **Before instructing in chat**, make a shared artifact first (mock-up, diagram, checklist)
2. Verify the agent's work **on that same artifact** (no separate report)
3. Keep policy (hard rules) in text, design (things you change together) on the canvas

## Trade-offs

| Strengths | Limits |
|-----------|--------|
| Structurally reduces the omissions and misunderstandings of "instructing in words" | Newsletter-announcement stage — no real usage experience or independent reviews |
| HITL becomes joint work instead of a review gate | Limited to local execution (LM Studio) — unclear how it applies to cloud agents |

## Related patterns

- [[concepts/context-engineering|Context Engineering]] — the canvas is information-environment design that includes the human
- [[patterns/claude-md-guide|CLAUDE.md Guide]] — fixed policy (text) vs. joint design (canvas)

## Sources

- [LM Studio ships Agent Canvas — an interactive space you and the agent both edit](raw/articles/2026-09-25-lm-studio-agent-canvas.md)