---
title: "Meta Muse Spark Open — 816B Open-Weight Agent Model, Local on Mac Studio"
category: concepts
tags: [meta, muse-spark, open-weights, moe, agents, coding, apple, mac-studio, mlx, distribution]
created: 2026-10-16
updated: 2026-10-16
sources:
  - "raw/articles/2026-10-16-meta-muse-spark-open.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/meta-muse-wonder-models]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: high
---

# Meta Muse Spark Open — 816B Open-Weight Agent Model, Local on Mac Studio

## One-line definition

Meta's 2026-10-15 release of **Muse Spark Open, an 816B-parameter (42B active) MoE multimodal open-weight model** — 1M context, specialized for coding and agent workloads, demonstrated running locally on two M5 Ultra Mac Studios (MLX, 1TB unified memory) in an Apple collaboration: "the most capable open-weight model in the U.S." (Meta's claim).

## Core content (TechCrunch, MacRumors, 10/15)

- **Specs**: 816B parameters with 42B active in an MoE architecture. 1M-token context. Specialized for coding and agent workloads.
- **Benchmarks**: GPQA Diamond 89.0, Terminal-Bench 2.1 76.4. But the independent index (Artificial Analysis intelligence index) scores 39 — below the Chinese open models GLM 5.3 and Kimi K3. A gap between in-house benchmarks and the independent index.
- **Apple collaboration**: local execution demonstrated on two M5 Ultra Mac Studios (MLX, 1TB unified memory) — workstation-class local, not consumer hardware.
- **Distribution**: weights on HuggingFace, AWS SageMaker, Google Cloud, and Microsoft Foundry. API through Baseten, Fireworks, Groq, Modal, Nebius, OpenRouter, and Together.
- **License boundary**: services with over $20M in annual revenue need a separate agreement — "open," but large commercial use is billed.

## Why it matters

1. **The return of the open strategy — but in agents, not the frontier**: the 10/13 update ([[concepts/meta-muse-wonder-models]]) read "open strategy ≠ frontier strategy" (the Muse Wonder closed pivot), yet open weights return a day later. It looks contradictory but the targets differ — Wonder is the closed frontier, Spark Open is an **agent-specialized open model**. Not "open = frontier" but **"open = distribution (the agent deployment channel)"** — consistent with the 10/8 update's Nous Research enterprise logic.
2. **The "local" spectrum extends upward**: through [[concepts/agent-residence]]'s axis — August 2026's Meta 30B (one consumer GPU) vs October's Muse Spark (816B, two Mac Studios, 1TB unified memory). "Local residence" stretches from a single GPU to workstation class. After the OS-embedded vector (10/8 update, Surface Ultra), the Apple hardware × Meta model pairing — the platform (OS) × model (open weights) intersection.
3. **The license boundary of open weights, made explicit**: a separate agreement above $20M in revenue — an exception clause to the "open = cheap" equation. In [[comparisons/frontier-lab-economics]] framing: once open becomes the distribution channel, revenue from large services is recovered at the license boundary.

## Explicit limitations

- "Most capable in the U.S." is Meta's claim — the independent index score of 39 sits below GLM 5.3 and Kimi K3 (China). The in-house-benchmark vs independent-measurement gap repeats the Gemini 4 Argon (10/1) and Muse Wonder (10/13) pattern.
- Direct comparisons with the Chinese open models rest on the single AA index source.
- Confidence stays **high** — an official Meta announcement cross-checked by two outlets; specs, distribution, and license terms are factual.

## Related concepts

- [[concepts/agent-residence]] — local execution on Mac Studio; the upward extension of the "local residence" spectrum
- [[comparisons/frontier-lab-economics]] — the economics of open weights: open as distribution channel plus the $20M license boundary
- [[concepts/meta-muse-wonder-models]] — the dual strategy: closed frontier (Wonder) vs open agent model (Spark)
- [[concepts/reflection-open-weight]] — the "U.S.-built open weights" competitive frame

## Sources

- [Meta launches an open-weight model that runs on Macs (TechCrunch, MacRumors, 10/15)](raw/articles/2026-10-16-meta-muse-spark-open.md)
