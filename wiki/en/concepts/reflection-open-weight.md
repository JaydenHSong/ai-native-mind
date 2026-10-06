---
title: "Reflection AI 'Beam' — Nvidia-Backed Open-Weight Model, the U.S. Answer to DeepSeek/Qwen (Launched)"
category: concepts
tags: [reflection-ai, open-weights, nvidia, deepseek, qwen, open-source-models]
created: 2026-10-05
updated: 2026-10-06
sources:
  - "raw/articles/2026-10-05-reflection-ai-open-weight-imminent.md"
  - "raw/articles/2026-10-06-reflection-ai-beam-launch.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/mid-tier-performance-inversion]]"
status: draft
confidence: medium
---

# Reflection AI Open-Weight Model (Imminent)

## One-line definition

The first open-weight foundation model from Reflection AI — a startup founded by two former Google DeepMind researchers and backed by Nvidia — launched as "Beam" on 2026-10-05: framed as the U.S. answer to DeepSeek and Qwen.

## Core content

- Axios scoop (2026-10-04, citing sources): Reflection AI is about to release its first open-weight model. Public release expected this month.
- Positioning: "the U.S. answer" to China's DeepSeek and Qwen, which currently lead open-weight leaderboards in coding, math, and cost efficiency.
- Scale: reported $7B+ (approx. 10 trillion KRW) in compute committed through 2029.
- Enterprises are expected to be able to download and customize it with private data after release.
- **Follow-up confirmed (10/5)**: the caveat above is resolved by the Beam launch — model name Beam, Apache 2.0 license, benchmarks published. The initial-quality expectation ("compete with leading Chinese open models") is claimed met on self-reported numbers (no independent verification).

## 2026-10-05 Update — 'Beam' launch: first specs disclosed

The actual launch behind the 10/4 Axios imminence scoop (TechCrunch, 10/5).

- **Beam**: text-only MoE. 501B total / 23B active parameters, pretrained on 23.8T tokens, 1M-token context (cf. Z.ai GLM-5.2 at ~744B/40B active).
- Self-reported benchmarks: on par with GLM-5.2 on advanced reasoning, "3–4x less inference compute" than leading Western open models. Per tech-insider: 80.9 SWE-Bench Verified, 80.1 Terminal-Bench 2.1, 97.8 AIME 2026 — not independently verified.
- Weights + technical report under Apache 2.0 later in October. Early access via waitlist during red-teaming.
- Company scale confirmed: ~$4.7B raised (PitchBook; Nvidia, Sequoia, Lightspeed), last round ~$25B pre-money. Compute deals: $6.3B with SpaceX (GB300 at Colossus 2) + $1B with Nebius. Testing a "sovereign AI factory" partnership with Shinsegae Group in Korea.

## Why it matters

This is the moment a new U.S. entrant joins the fight where open weights = distribution-channel dominance (the 10/4 observation of DeepSeek's Vercel AI Gateway open-weight share rising 54%→62%). The $7B+ compute commitment shows open weights have become a capital-intensive game. Once the actual release, license, and benchmarks land, [[comparisons/frontier-lab-economics]]'s "low-cost disruptor vs pricing-power infrastructure" axis needs a U.S. open-weight row.

## Related concepts

- [[comparisons/frontier-lab-economics]] — low-cost disruptors vs pricing-power infrastructure, the DeepSeek case
- [[patterns/mid-tier-performance-inversion]] — the mid-tier flagship-performance inversion trend and its relation to open weights

## Sources

- [Reflection AI Open-Weight Model: What We Know (Axios via explainx, Oct 2026)](raw/articles/2026-10-05-reflection-ai-open-weight-imminent.md)
