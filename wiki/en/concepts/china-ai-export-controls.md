---
title: "China's AI Export-Control Draft — Model Weights and Source Code as Regulated Items"
category: concepts
tags: [china, export-control, model-weights, open-source, geopolitics, mofcom, ai-policy]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-china-ai-export-controls-oct16.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: high
---

# China's AI Export-Control Draft — Model Weights and Source Code as Regulated Items

## Start here

**Analogy**: export controls used to ban "the machines that make knives" (chips and equipment). Now "the sharpened knives themselves" (trained model weights) are on the review list. Not the product but **the form of the knowledge** has entered the control catalogue.

| Term | Meaning |
|------|------|
| **Catalogue of Technologies Prohibited or Restricted from Export** | China's export-control technology list — this is the revision draft (Announcement No. 48) |
| **Interim pre-export registration** | Transitional pre-export registration — effective immediately from 10-16, including in-progress transfers |
| **Draft thresholds** | ≥2T parameters, 10^26 FLOPs, or top-10 global ranking as possible licensing triggers |

## One-line definition

China's first formal draft extending the export-control axis from hardware (chips, equipment) to **trained systems (model weights and source code)** — the regulatory object moves from "the ability to build" to "the completed knowledge."

## Key points

- **Announcement** (2026-10-16): MOFCOM (Ministry of Commerce) + MOST (Ministry of Science and Technology), revision draft of the 'Catalogue of Technologies Prohibited or Restricted from Export' — Announcement No. 48. Public consultation 10/16–11/15.
- **Scope**: of 40 technologies, **23 are AI** (12 PV, 5 biomedical). 14 prohibited, 26 restricted.
- **AI set**: LLMs, AI agents, chip designs, computing clusters, information processing. **Model weights and source code enter the regulated scope for the first time** — previously the focus was hardware and equipment.
- **Draft thresholds** (Bloomberg's reading): models with ≥2 trillion parameters, 10^26 FLOPs, or a top-10 global ranking could need an export licence.
- **Exemptions**: API, website, app, and SaaS access are not exports. Already-public open-source and academic research are excluded. **Products made with the technology** are out of scope.
- **Transition**: **pre-export registration** effective immediately from 10-16 — including transfers already in progress.
- **Consultation**: MOFCOM has consulted Alibaba, ByteDance, and Zhipu since summer.

## Why it matters (solo-developer lens)

1. **The licensing risk of the open-weight ecosystem becomes concrete**: "already-public is excluded," but **overseas distribution of weights for new Chinese frontier models** could fall under licensing. Geopolitical risk for stacks depending on Chinese open weights.
2. **Overlap with the DeepSeek arc**: DeepSeek's 10/2 Huawei-Ascend vertical integration plus these export controls — China's "independent stack" takes shape on two faces: domestic accumulation and cross-border gating.
3. **Agents are explicitly listed**: the control target expands from "models" to **agents** — agent technology transfer (licensing, joint ventures) also enters the regulatory field of view.

## Limits (stated explicitly)

- A **draft** — under consultation, contents may change.
- Threshold details and prohibited/restricted classifications rest on Bloomberg's reading — verification against the original announcement is needed.
- No responses (countermeasures) from other countries yet.

## Related concepts

- [[comparisons/frontier-lab-economics]] — layered on DeepSeek's stage 3 (hardware vertical integration): **the border control of knowledge** — the geopolitical axis of pricing power.
- [[concepts/reflection-open-weight]] — contrast with the "U.S.-built open-weights" narrative: Chinese open weights' **distribution risk** is now codified.

## Sources

- [China proposes export controls on 40 technologies, 23 of them AI including model weights (AI Weekly, AI Affairs, Bloomberg, 10/16)](raw/articles/2026-10-17-china-ai-export-controls-oct16.md)
