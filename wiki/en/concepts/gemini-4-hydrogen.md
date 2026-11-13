---
title: "Gemini 4 Hydrogen — Execution Model for Coding Agents, 1M Context · Flat Pricing (Nov 12)"
category: concepts
tags: [google, gemini-4, hydrogen, coding-agent, llm]
created: 2026-11-13
updated: 2026-11-13
sources:
  - "raw/articles/2026-11-13-gemini-4-hydrogen.md"
related:
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/google-gemini-decisions-api]]"
status: draft
confidence: high
---

# Gemini 4 Hydrogen — Execution Model for Coding Agents, 1M Context · Flat Pricing (Nov 12)

## Start here

**Analogy**: if a frontier model is a Formula 1 race car, Hydrogen is the electric commuter car you drive every day. The F1 car is faster at top speed, but the commuter car is cheaper, faster and more convenient for the daily drive. Most of a coding agent's everyday work is 'commuting' — Hydrogen is the model that covers that stretch.

| Term | Meaning |
|------|------|
| **Thinking level** | A setting that decides how deeply the model reasons before answering — low / medium / high (default) / xhigh |
| **Intelligence Index** | Artificial Analysis's composite model-intelligence score — Hydrogen scores 51, Argon 50 |
| **Terminal-Bench** | An agent benchmark measuring the ability to perform real tasks in a terminal |
| **Orchestrator** | An Antigravity feature that automatically switches between Carbon and Hydrogen within one session, based on task difficulty |
| **Flat pricing** | The same unit price regardless of context length — Hydrogen charges $1.50 input / $7.50 output across the full 1M-token range |

## One-line definition

On 2026-11-12, Google launched Gemini 4 Hydrogen. The third member of the Gemini 4 family, it sits below Argon and Carbon as a fast, cheap execution model for everyday coding and agent work. It offers a 1M-token context, four thinking levels, and flat input/output pricing of $1.50/$7.50, and it scored ahead of Argon on the Artificial Analysis Intelligence Index.

## Key facts

- **Positioning**: while Argon and Carbon are frontier-class, Hydrogen is optimised for speed and cost. It launched the same day worldwide in AI Studio, the Gemini API, the Gemini app, Google Search (AI Mode and AI Overviews), Gemini for business, and Antigravity.
- **Performance**: on the Artificial Analysis Intelligence Index it scored 51 at the default high thinking level, ahead of Argon (50), and 54 at the new xhigh thinking level. It finishes tasks 2.5x faster than Gemini 3.8 Flash, and scores 57% vs 18.2% on Terminal-Bench 4.1 — more than 3x higher.
- **Pricing and context**: flat pricing across the full 1M-token context — $1.50 input / $7.50 output per million tokens. No tiered pricing that rises with context length.
- **Thinking levels**: four levels — low / medium / high (default) / xhigh (new). xhigh is for tasks that need deeper reasoning.
- **Orchestrator**: the orchestrator launched alongside Hydrogen in Antigravity dynamically switches between Carbon and Hydrogen within one session. On Terminal-Bench 4.0 it recorded a success rate close to Carbon's, with 24% lower quota usage and 19% faster completion.
- **Safety claims**: Google claims 81% less overreach, 96.7% honesty, and 99.9% chain-of-thought readability. These are not independently verified figures.
- **Correction history**: the 2026-11-12 daily log excluded 'Gemini 4 Hydrogen' as an unconfirmed rumour. Today it is a confirmed launch announced on Google's official blog — a different scope. The rumour stage and the official launch are recorded separately.

## Why it matters (solo-developer view)

1. **The price-performance curve has come down to everyday work**: most agent work is repetitive execution that does not need frontier-level reasoning. Marking off the stretches where a Hydrogen-class model is enough structurally lowers token costs. Model choice is budget design.
2. **The Orchestrator is a harness pattern**: not fixing on one model but switching between a strong model and a cheap one by task difficulty is now an official Antigravity feature. My own harness should follow the same routing — Hydrogen-class for easy tasks, Carbon-class only for hard ones.
3. **Reasoning depth is now a purchasable option**: the xhigh level is an option to buy 'more thinking' at a price. Turning it on only when depth is needed is the rational choice.

## Limitations (stated)

- The AA Index, Terminal-Bench and safety figures are all Google-supplied numbers, with no independent verification yet.
- The comparison with Gemini 3.8 Flash is based on tasks Google chose.
- Like Carbon's price rise on 2026-12-01, Hydrogen's pricing may also change — today's figures are as of launch day.

## Related concepts

- [[concepts/gemini-4-argon]] — Gemini 4 Argon, self-reported vs independent benchmark gap + gated release (2026-10-01)
- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' internal testing, coding performance rated Opus 5.5-class (2026-10-10)
- [[concepts/google-gemini-decisions-api]] — Gemini Decisions API, judgment as a commodity atom (2026-11-12)

## Sources

- [Gemini 4 Hydrogen launch source](raw/articles/2026-11-13-gemini-4-hydrogen.md)
