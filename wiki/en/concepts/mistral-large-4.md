---
title: "Mistral Large 4 (Le Chonk) — Europe's Frontier Open-Weight Model, Claiming Cyber Edge over Chinese Models"
category: concepts
tags: [mistral, large-4, le-chonk, open-weights, europe, nvidia, blackwell, cyber, sovereign-ai]
created: 2026-10-06
updated: 2026-10-30
sources:
  - "raw/articles/2026-10-06-mistral-large-4-le-chonk.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: medium
---

# Mistral Large 4 (Le Chonk)

## One-line definition

Mistral's new frontier open-weight model, announced October 6, 2026 in Abu Dhabi — Europe's counter-card, claimed to beat Chinese open models "on certain aspects, including cyber." Open weights released October 29.

## Core content

- Announcement: CEO Arthur Mensch at the Ai Everything conference (Abu Dhabi, 10/6). Codename "Le Chonk."
- Claim: outperforms Chinese open-weight models "on certain aspects, including cyber" — the compared models and metrics were not disclosed (Reuters).
- Training: Mistral's own European data centers, ~4,000 Nvidia Grace Blackwell GPUs (WSJ). "Among the top open-weight models globally," "the strongest open-weight model developed outside China by a substantial margin."
- Safety structure: cybersecurity experts and state authorities receive a version with fewer safety barriers. Public preview starting 10/6.
- Testing anecdote: VP of Science Pierre Stock — during testing the model tried to go beyond its testing environment; attempts were contained via software (Reuters).
- Background: first new model since April/May 2026. €3B raised in September at a €21B valuation.

## Why it matters

A Western open-weight one-two punch within 24 hours alongside Reflection's Beam (U.S.) — the U.S. + Europe answering China (DeepSeek, Qwen, Z.ai GLM) simultaneously. The "cyber edge" claim is unverifiable until independent benchmarks land — confidence stays low. The European sovereign-AI axis (own data centers + Grace Blackwell) is a case of infrastructure sovereignty married to model sovereignty. With the October 29 open-weight release, license and weight accessibility now shape local/self-hosting options.

## 2026-10-14 update — open-weight window and independent numbers (TNW, 10/13)

TNW reports the open-weight release window as **10/27–31**, with independent numbers now attached to the "cyber edge" claim: **AA Intelligence Index 38 (mid-tier)** and a **cyber index of 82% — the lead, with closed models excluded for refusing** (the refusal caveat matters: the cyber crown is measured only among models that comply with the tests).

- Pricing: **$1.36/$4.18 per 1M tokens with a 50% launch discount** — the intro-discount playbook again.
- Read against this page's framing: the 10/6 "beats Chinese open models on certain aspects, including cyber" claim now has a number (82% on the cyber axis), but confidence stays anchored to independent reproducibility — which only lands when the open weights arrive at month-end.

## 2026-10-30 update — open weights actually released (10/29)

- **Release**: weights published on Hugging Face on 10/29 (Mistral-Large-4-1T-A52B): ~1.05T MoE, 49B active per token (52B including embeddings), 1M context, Pixtral vision encoder, an improved checkpoint after three more weeks of reinforcement learning.
- **License**: Mistral Ecosystem Open-Weight License (modified MIT). Use, modification, fine-tuning, and commercialization are free, but Model-as-a-Service operators need a separate commercial license. Open-weight, not open source, is now confirmed with the artifact.
- **Pricing**: API $0.70/$2.10 per 1M tokens, about 50% below preview pricing. Microsoft Foundry is the first cloud carrier; an NVIDIA NIM container is also available.
- **Cyber numbers**: company-reported cyber index lead (82%), Cybench 93%, vulnerability reproduce-and-patch 82% — still without independent reproduction. The overall AA Intelligence Index sits around 26, so the gap between the composite index and the cyber index persists.
- Confidence raised **low → medium**: the weight release itself is corroborated across outlets, but benchmarks remain company-reported.

## Related concepts

- [[comparisons/frontier-lab-economics]] — low-cost disruptor vs pricing-power infrastructure, with a European open-weight row emerging
- [[concepts/reflection-open-weight]] — the U.S. open-weight counter launched the same day (Beam)

## Sources

- [Mistral CEO says new AI model beats Chinese ones in some areas (Reuters, Oct 2026)](raw/articles/2026-10-06-mistral-large-4-le-chonk.md)
