---
title: "Cloudflare Clairic — A System One Extraction Model with Zero Output Tokens"
category: concepts
tags: [cloudflare, clairic, system-one, extraction, non-generative, agent-cost, workers-ai, semantic-decision-engine]
created: 2026-10-20
updated: 2026-10-20
sources:
  - "raw/articles/2026-10-20-cloudflare-clairic-system-one-extraction.md"
related:
  - "[[concepts/semantic-decision-engine]]"
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Cloudflare Clairic — A System One Extraction Model with Zero Output Tokens

## TL;DR

Cloudflare released Clairic on 2026-10-19, its first System One extraction model, in preview on Workers AI (`@cf/cloudflare/clairic` via env.AI.run() or REST). Non-generative: a single forward pass, zero output tokens, input-only billing at $0.10/M. 65,536-token context, a typed-fields API (extract/compute/estimate/forecast), plus vision (up to 4 embedded images). In Cloudflare's own tests, a Clairic + Clef + GLM-5.3 pipeline was 49% cheaper and 3.2× faster than GLM-5.3 alone. It extends System One from decision (Jev, Clef) into extraction and forecasting.

## Key facts

- **Release**: Workers AI preview `@cf/cloudflare/clairic` — env.AI.run() or REST API. Open weights "soon" (no date).
- **Architecture**: non-generative — single forward pass, **zero output tokens**, input-only billing at **$0.10/M tokens**.
- **Spec**: 65,536-token context. Typed-fields API: extract/compute/estimate/forecast. Vision (up to 4 embedded images).
- **Self-reported test numbers**: Clairic + Clef + GLM-5.3 pipeline **49% cheaper, 3.2× faster** than GLM-5.3 alone (19.3s vs 61.7s). Damage-claim extraction: 0.68s vs 38s. TSA screening forecast: 3.3% average error, 17 of 21 predictions inside the 80% interval.
- **Lineage**: TypeSafe's Jev (Sept decision model) → Cloudflare's own Clef (Oct 1) → Clairic — System One expanding from **decision into extraction/forecasting**.
- **Admitted weaknesses**: Cloudflare itself says multi-step arithmetic, calibration, and forecasting are weak.

## Why it matters

1. **The "division of labor" in agent pipelines is hardening into product lines**: the 9/27 wiki's semantic-decision-engine (Jev) was "use cheap specialized models for decisions"; Clairic is "use cheap specialized models for extraction too." Splitting agent workflows into "generation (expensive LLM) + judgment/extraction (cheap specialized models)" is moving from optimization trick to standard architecture — a direct input to harness design.
2. **Billing-model innovation**: "zero output tokens = input-only billing" structurally cheapens the extraction step. A different axis from the 10/19 wiki's "$0.22 per task" model-price story — doing the same work with a different *kind* of model rather than a cheaper one.
3. **The value of honest limitation disclosure**: the company volunteering "multi-step arithmetic and calibration are weak" is the most useful datum for scoping a specialized model — design pattern: hand it extraction, attach verification loops for computation and forecasting.

## Limitations (explicit)

- All figures (49% / 3.2× / 0.68s vs 38s / 3.3% error) are **Cloudflare's own measurements** — no independent verification. The reason for confidence: medium.
- Open weights "soon" has no date — until release, it's Workers AI-dependent.
- Whether the TSA screening forecast case is a real deployment is unclear — treat as demo numbers.
