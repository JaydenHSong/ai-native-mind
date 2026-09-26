---
title: "Agentic Commerce"
category: patterns
tags: [agentic-commerce, shopping-agents, benchmarks, principal-agent, computer-use, steering, voice-agent, gemini, accessibility]
created: 2026-09-24
updated: 2026-09-26
sources:
  - "raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md"
  - "raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md"
  - "raw/articles/2026-09-26-audioeye-agent-accessibility-study.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: low
---

# Agentic Commerce

## Start here

**Analogy**: you sent an errand-runner with "buy the best one," but the shopkeeper whispered in the runner's ear, "take this one." The core question of agentic commerce is **"whose side is the agent on?"**

| Term | Meaning |
|------|---------|
| **Principal-agent problem** | The misalignment between the one who orders (principal) and the one who acts (agent) — the production version in the agent era |
| **Steering** | A marketplace nudging an agent's choices toward a preferred direction |

## One-line summary

The paradigm where agents pick and pay for products — penetration is still below 1%, but a steering benchmark that drops agent "loyalty" from 78.6% to 17.3% is shaking up how evaluation itself is designed.

## Problem

- **Expectation**: agents find the optimal product and check out on the user's behalf
- **Reality**: Booking Holdings' CEO says LLM traffic is "significantly below 1%" of total lodging bookings
- **The deeper problem**: a new benchmark shows computer-use agents buy the user-optimal product with 78.6% probability under controlled conditions — but **17.3%** once the marketplace is allowed to steer

## Solution

Add an **"adversarial environment"** condition to agent evaluation. Measure not just performance but whether the agent stays on its principal's side when the environment intervenes. Meanwhile platforms are opening seller/buyer tooling en masse — Amazon opened the seller console to Claude and launched its own seller agent "workflows." The agentification of commerce is proceeding **platform-led**.

## Example application

When building a shopping agent: (1) steering detection — log how far recommended products deviate from the user optimum, (2) explicit principal — pin the agent's principal in prompt and policy, (3) adversarial testing — include marketplace-intervention scenarios in evals.

## Trade-offs

| Strengths | Limits |
|-----------|--------|
| Adds a "loyalty" axis to agent evaluation | Below-1% penetration — still experimental, thin data |
| Translates the principal-agent problem into a working metric | Single steering benchmark — needs cross-validation |

## Related patterns

- [[concepts/llm-evaluation|LLM Evaluation]] — the evidence for putting an "adversarial environment" condition into eval design
- [[comparisons/agent-eval-frameworks|Agent Eval Frameworks]] — the existing six frameworks have no steering/loyalty axis — an extension candidate
- [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] — the marketplace "environment" itself becomes part of the trust model

### 2026-09-25 — Gemini calls businesses: the voice channel of agentic commerce

- Gemini now **calls businesses on your behalf** — restaurant reservations, hold-music navigation, phone-tree handling (alongside Gemini 3.8's Live Avatar in 97 languages).
- "Whose side is the agent on" gains a **voice channel**: steering can now arrive through the caller's voice, wait times, and phone-tree narrowing.
- Companion data point: Project Suncatcher puts TPUs on a Falcon 9 (Oct 1) — the chips run ~15 minutes before needing to cool. Compute pushing against the heat wall; same current as Mercury 2.5's 770 tok/s — tokens are becoming too cheap to meter, and the bottleneck shifts to **distribution and orchestration**.

### 2026-09-26 — AudioEye: the accessibility backlog is the agent-conversion backlog

- 1,560 agents on 6 commercial models, 13 tasks, 2 months: on the least-accessible site, task completion fell from **96% to 31%** (~two-thirds drop); the median run consumed **43% more tokens** (128k vs. 90k), up to **6x** on the worst runs.
- Agents read the accessibility tree — a decade of ignored WCAG fixes is now a **per-transaction tax on agents**.
- NIQ: 51% of US consumers used an AI shopping tool in the past month (~500 respondents, ±4.4pp). Note the metric gap: Booking's "<1% of bookings" counts completed transactions; NIQ counts any tool use. **Not a contradiction — different denominators.**
- Solo-dev takeaway: test agent flows on your **worst**-accessibility pages first, and instrument **tokens per completed task** — that's where the cost hides.

---

## Sources

- [Agentic commerce reality check: Booking Holdings says LLM traffic is 'significantly below 1%' of bookings](raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md)
- [Gemini 3.8 Live Avatar, business-calling agents, and TPUs on a Falcon 9 (Project Suncatcher)](raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md)
- [AudioEye: agent completion collapses on inaccessible sites (2026-09-24 study)](raw/articles/2026-09-26-audioeye-agent-accessibility-study.md)
