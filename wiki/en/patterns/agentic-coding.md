---
title: "Agentic Coding"
category: patterns
tags: [agentic-coding, fuzz-testing, reliability, code-quality, benchmarks, prompt-quality, supervision]
created: 2026-09-24
updated: 2026-09-24
sources:
  - "raw/articles/2026-09-24-agents-rewrite-linux-utilities-fuzz-testing.md"
related:
  - "[[patterns/ai-code-review]]"
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/preventing-context-rot]]"
status: draft
confidence: low
---

# Agentic Coding

## Start here

**Analogy**: ten junior developers were asked to reimplement ten classic Linux utilities from scratch. Their output was checked with fuzz testing (hammering programs with random inputs) — and it was **indistinguishable from the human originals, sometimes less crashy**. What separated the results wasn't developer skill but **instruction (prompt) quality and how closely someone watched**.

| Term | Meaning |
|------|---------|
| **Fuzz testing** | Throwing massive volumes of random/mutated inputs to find crashes |
| **AFL++** | The de-facto standard for coverage-guided fuzz testing |

## One-line summary

The development style where AI agents write code end to end — with the core thesis that reliability is a property of the **workflow (prompt quality + human supervision)**, not of the model.

## Problem

The folk belief "AI-written code is low quality" blocks production adoption. But that belief was rarely tested against an objective yardstick.

## Solution

A study published 2026-09-16: ten release-quality Linux utilities reimplemented from scratch with a standard agentic coding workflow, then compared against the originals with AFL++-based black-box + coverage-guided fuzz testing.

- The AI versions were as stable as the human originals, and often **more stable**
- The variance came not from the model but from **prompt quality and how closely each run was supervised**

## Example application

Teams shipping agentic coding in production invest in **workflow, prompts, and supervision systems** rather than model swaps. Example: let agents take utility-grade (well-specified) code first, and merge only what passes objective gates like fuzz testing.

## Trade-offs

| Strengths | Limits |
|-----------|--------|
| An objective yardstick (fuzz testing) rebuts the "AI code = low quality" folk belief | Targets were utility-grade (clearly specified) code — complex domain logic unverified |
| Investment priorities become clear (workflow over model) | Findings reached via secondary coverage (LinkedIn) — original paper needs checking |

## Related patterns

- [[patterns/ai-code-review|AI Code Review Workflow]] — the production routine for filtering agent output through standardized review stages
- [[patterns/preventing-context-rot|Preventing Context Rot]] — memory management that stops quality from decaying across long coding sessions

## Sources

- [Ten AI agents reimplement ten classic Linux utilities; fuzz testing can't tell the difference](raw/articles/2026-09-24-agents-rewrite-linux-utilities-fuzz-testing.md)
