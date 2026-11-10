---
title: "Nace Drex Max v1 — a 27B Decision Model's Open Weights"
category: concepts
tags: [nace, drex, decision-model, open-weights, apple-silicon, agent-routing]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-nace-drex-max-v1-open-weights.md"
related:
  - "[[concepts/semantic-decision-engine]]"
  - "[[concepts/cloudflare-clairic-system-one-extraction]]"
  - "[[concepts/structured-output]]"
status: draft
confidence: medium
---

# Nace Drex Max v1 — a 27B Decision Model's Open Weights

## Start here

**Analogy**: a model that does not write essays but marks a multiple-choice sheet with probabilities — "72% for this option." Judgment, not generation, is its job.

| Term | Meaning |
|------|---------|
| **Decision model** | A model that returns a probability for every option instead of generating text |
| **Forward pass** | A single pass through the network producing an output — no repeated token generation |
| **GGUF quantization** | A file format that shrinks weights for local inference. Q8_0 and Q4 are precision levels |

## One-line definition

Released by Nace AI on 2026-11-01: open weights for Drex Max v1, a dense 27B decision model that returns option probabilities in a single forward pass instead of generating text.

## Key facts

- **Architecture**: dense 27B, 64 layers — 48 Gated DeltaNet linear-attention layers plus 16 full-attention layers. Context window 262,144 tokens (16,384 by default), up to 255 options per question, up to 16 questions per request.
- **Local paths**: bf16 needs H100-class GPUs; Q8_0 GGUF runs on 48 GB Macs; affine Q4 runs on Apple Silicon Macs with 24 GB or more. Mac and CPU paths are text-only for now; image input needs the Python implementation on Nvidia GPUs.
- **Performance (self-reported)**: 67.52 on the public Decision Index 0.4, ahead of Drex v2.0 (61.25) and Jev 1.13.0 (57.96). InfographicVQA 97.3, Tools area 81.9.
- **Use**: agent routing, classification, policy checks, and guardrails run locally. The API went generally available October 19; this release is the weights themselves, under the Nace.AI Open RAIL-M licence.
- **Lineage**: Drex 1.0 (September 24) → 1.5 (September 28) → 2.0 (October 6) → Max API (October 19) → Max weights (November 1).

## Why it matters (solo-developer view)

1. **Judgment is cheaper than generation**: routing, classification, and policy checks do not need a generated sentence. A probability-only model cuts cost, latency, and parsing errors at once.
2. **Local judgment is now possible**: a decision model that runs on a 24 GB Mac lets the judgment layer — routers, guardrails — live on your own machine, without an API round trip for sensitive classification.
3. **The agent stack is splitting**: generation on frontier models, judgment on small decision models. Alongside Jev and Clairic, "decision-only" is becoming its own axis.

## Limitations (stated)

- All performance figures are self-reported by Nace, with no independent verification.
- Training data and base-model disclosure are not separately specified. Open weights are not full open source.
- Some coverage (Artiverse) was sponsored by Nace.
