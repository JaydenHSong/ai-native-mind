---
title: "Meta Muse Wonder·Wonder Full — Closed Frontier Agent Models (2026-10-12)"
category: concepts
tags: [meta, muse-wonder, frontier-model, agents, api-pricing, llama, superintelligence-labs]
created: 2026-10-13
updated: 2026-10-13
sources:
  - "raw/articles/2026-10-13-meta-muse-wonder-models.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
status: draft
confidence: high
---

# Meta Muse Wonder·Wonder Full — Closed Frontier Agent Models (2026-10-12)

## One-line definition

Two closed frontier models from Meta Superintelligence Labs, launched 2026-10-12 — the first frontier since Llama 4, with agent-specialized features (Active Memory, Active Focus) and paid API access marking a shift away from the open strategy.

## Key points

- **Launch**: 2026-10-12. Meta Superintelligence Labs' first frontier models. Built on Muse Spark, trained in the Prometheus data center in Ohio.
- **Lineup**: Muse Wonder — available immediately via the Meta Model API + Muse Code. Muse Wonder Full (large) — limited to Muse Code subscribers.
- **Pricing**: API at $4.00 / 1M input tokens, $20.00 / 1M output tokens — the same list price as Claude Opus 5.5.
- **Agent specialization**: Active Memory (user context preserved across conversations), Active Focus (sustained long multi-step work, check-ins before consequential actions), 1M-token context window.
- **Benchmark claims**: SOTA claims on agent and coding benchmarks including Harvey's Legal Agent Benchmark, FocusBench, and SWE-Marathon — but the full safety evaluation report is undisclosed (to be released).
- **Independent verification**: Artificial Analysis Intelligence Index — Wonder Full at 56 (Claude Opus 5.5 at 58, GPT-6 Astra at 53).
- **Market reaction**: Meta shares rose ~3–4% after the announcement (Reuters).

## Why it matters

For the AI-native programmer, Muse Wonder signals that **the frontier model's business model is moving from "open weights" to "paid agent infrastructure."** Meta grew the open ecosystem with Llama, but at the frontier it has pivoted to a closed API priced at Opus 5.5's level. From a harness-design perspective, the key point is that agent-persistence features like Active Memory and Active Focus are now being productized at the model layer — a trade-off opens between implementing cross-session context in the harness and using the model's built-in capabilities. Caveat: the undisclosed safety evaluation report repeats the pattern seen with Gemini 4 Argon ("in-house claims vs. independent index divergence"), so treat Wonder Full's 56 (third tier) with a level head.

## Related concepts

- [[comparisons/frontier-lab-economics]] — from the open-Llama era to closed, paid agent infrastructure. A direct case of "pricing power."
- [[concepts/persistent-agent]] — Active Memory and Active Focus are the productized form of the always-on agent.
- [[concepts/gpt-61-sol-ultrafast]] — price positioning contrast: Ultrafast (6x premium) vs. Wonder (same-list-price peer).

## Sources

- [ResultSense (full original)](https://www.resultsense.com/news/2026-10-13-meta-muse-wonder-frontier-models-agents/)
- [Reuters/Yonhap (sedaily)](https://en.sedaily.com/international/2026/10/13/meta-launches-paid-ai-model-muse-wonder-to-speed)
- Source capture: [raw/articles/2026-10-13-meta-muse-wonder-models.md](raw/articles/2026-10-13-meta-muse-wonder-models.md)
