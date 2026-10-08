---
title: "Claude Haiku 5.5"
category: concepts
tags: [claude, haiku-5-5, anthropic, api-pricing, small-model, agents, effort-setting]
created: 2026-10-08
updated: 2026-10-08
sources:
  - "raw/articles/2026-10-08-anthropic-claude-haiku-5-5.md"
related:
  - "[[patterns/mid-tier-performance-inversion]]"
  - "[[patterns/agent-authority-model]]"
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/semantic-decision-engine]]"
status: draft
confidence: medium
---

# Claude Haiku 5.5

## Easy read

**Analogy**: A kitchen no longer has only the head chef (Opus) — a new prep cook (Haiku) has arrived to handle the repetitive work, at 90% lower cost. With all three 5.5-series models shipped within a month, the default shifted from "one expensive model does everything" to "route each job to the right model."

| Term | Meaning |
|------|---------|
| **Adjustable effort** | New Haiku 5.5 setting that lets the user tune the cost-vs-intelligence tradeoff |
| **Subagent** | A subordinate agent to which a higher-tier agent (Opus/Sonnet) delegates part of a task |

## One-line definition

Anthropic's lightest and cheapest 5.5-series model — for classification, summarization, extraction, live support, voice agents, and in-app assistants, positioned as a subagent for Opus/Sonnet 5.5.

## Key points

- **Launch**: 2026-10-07. All three 5.5-series models (Opus, Sonnet, Haiku) completed within a month. Model string `claude-haiku-5-5`, knowledge cutoff June 2026, text-only.
- **Pricing**: $0.10 input / $0.50 output per 1M tokens (prompts under 100k tokens) — about 75% cheaper than Haiku 4.5. Longer prompts: $0.50/$2.50. VentureBeat reports it as "up to 90% price cut targeting repetitive work, matching GPT-6 Luna."
- **New features**: First Haiku with an adjustable effort setting (cost-intelligence tradeoff control). Built-in safeguards for high-risk cybersecurity requests.
- **Positioning**: classification, summarization, extraction, live support, voice agents, in-app assistants. Pairs with Opus 5.5/Sonnet 5.5 as a subagent on coding work.
- **Context**: Reuters frames it as "lineup expansion ahead of a planned IPO" — completing the model lineup before a November IPO (reported ~$2T valuation).

## Why it matters (solo-developer view)

1. The practical form of [[patterns/mid-tier-performance-inversion]] — small models becoming the economic unit of agent workhorses in a price war. The default architecture is "route each job," not "one expensive model."
2. Changes the cost premise of [[patterns/agent-authority-model]] — when subagent delegation gets 90% cheaper, the economics of permission delegation change. Compute per-tier model costs explicitly when designing delegation structures.
3. The effort setting is a harness control point — a knob for the agent to tune its own cost-intelligence tradeoff is starting to ship inside products.

## Related

- [[patterns/mid-tier-performance-inversion]] — mid-tier models inverting flagship performance (Sonnet 5.5 case)
- [[patterns/agent-authority-model]] — permission and cost structure of subagent delegation
- [[patterns/ai-cost-management]] — model routing and caching cost strategy
- [[concepts/semantic-decision-engine]] — the decision-model wave handling repetitive judgments more cheaply

## Sources

- [Anthropic launches Claude Haiku 5.5 (Reuters, 10/7)](raw/articles/2026-10-08-anthropic-claude-haiku-5-5.md)