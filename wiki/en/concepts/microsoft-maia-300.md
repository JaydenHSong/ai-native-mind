---
title: "Microsoft Maia 300 — 3rd-Generation In-House AI Chip (2026-10-12)"
category: concepts
tags: [microsoft, maia-300, ai-chip, tsmc, nvidia, chiplet, azure, inference-cost]
created: 2026-10-12
updated: 2026-10-12
sources:
  - "raw/articles/2026-10-12-microsoft-maia-300-ai-chip.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
status: draft
confidence: high
---

# Microsoft Maia 300 — 3rd-Generation In-House AI Chip (2026-10-12)

## One-line definition

Microsoft's third-generation in-house AI inference chip — targeting 1M+ units deployed next year, built on a TSMC 2nm+3nm chiplet design, claiming better power efficiency than Nvidia's GB300.

## Key points

- **Launch**: 2026-10-12. Purpose: AI compute for coding and complex agentic tasks.
- **Scale**: 1M+ units to be deployed into internal AI services next year ("potentially more than a million") — cost reduction is the stated motive.
- **Chiplet design**: TSMC 2nm chiplets for core compute + 3nm chiplets for data movement — a different design philosophy from Nvidia's single large chip + HBM path.
- **Rack spec**: 96 chips per rack at ~167kW — contrasted with Nvidia's latest GB300 rack (72 GPUs, 142kW).
- **Efficiency claim**: "~40% more effective compute per megawatt vs. leading GPU-based systems" — comparison target undisclosed.
- **Context**: the previous Maia generation already runs Microsoft's own models and OpenAI models on Azure (interview with Rani Borkar, head of Azure hardware).

## Why it matters

For the AI-native programmer, Maia 300 signals that **control over inference cost is moving down into chip design**. While OpenAI attaches a 6x premium to latency via Ultrafast, Microsoft pushes inference unit cost down with in-house silicon — the top and bottom of the price spectrum moving simultaneously. From a harness-design view, "which chip fleet your workload runs on" becomes a new routing variable: the price/latency delta between Azure's Maia fleet and Nvidia GPU fleets changes agent-loop economics. Treat the "40% efficiency" claim as marketing until independent benchmarks arrive, since the comparison target is undisclosed.

## Related

- [[comparisons/frontier-lab-economics]] — low-cost disruptors vs. pricing-power infrastructure. Maia 300 pulls "pricing power" down to the infrastructure layer.
- [[concepts/gpt-61-sol-ultrafast]] — the 6x-priced latency tier. Inference cost structure is being reshaped at the chip layer (Microsoft) and the product layer (OpenAI) at once.
- [[concepts/claude-haiku-5-5]] — Haiku's 90% price cut shows the spectrum's low end being pressed by Microsoft chip efficiency as well.

## Sources

- [Reuters](https://www.reuters.com/business/microsoft-plans-huge-deployment-its-own-ai-chips-with-an-eye-saving-costs-2026-10-12/)
- Source capture: [raw/articles/2026-10-12-microsoft-maia-300-ai-chip.md](raw/articles/2026-10-12-microsoft-maia-300-ai-chip.md)
