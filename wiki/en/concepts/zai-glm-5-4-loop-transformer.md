---
title: "Z.ai GLM-5.4 — Loop Transformer, 750B Layers Run Twice, Claimed 2–3T-Class Intelligence"
category: concepts
tags: [z-ai, glm, loop-transformer, coding-model, open-models, china]
created: 2026-11-23
updated: 2026-11-23
sources:
  - "raw/articles/2026-11-23-zai-glm-5-4-loop-transformer.md"
related:
  - "[[concepts/thinking-machines-inkling-2-mini]]"
  - "[[concepts/thinking-machines-inkling-2-small]]"
  - "[[concepts/alibaba-qwen4-max]]"
  - "[[concepts/blackwell-fingerprints-chinese-models]]"
  - "[[concepts/moonshot-kimi-k31-pro]]"
status: draft
confidence: medium
---

# Z.ai GLM-5.4 — Loop Transformer, 750B Layers Run Twice, Claimed 2–3T-Class Intelligence

## TL;DR

On November 23, 2026, Z.ai released GLM-5.4, its first Loop Transformer flagship. The 28 layers of the roughly 750B-parameter GLM-5 base run twice with the same weights, deepening reasoning without adding parameters, and Z.ai claims intelligence comparable to 2–3T-parameter models, with a 1M-token context and vision input. There are no official benchmarks yet, so the performance claim is unverified.

## Key facts

- **Announcement**: November 23, 04:18 UTC — Z.ai lead Zixuan Li announced it on X and the official @Zai_org account reposted. No separate blog post was confirmed.
- **Architecture**: Loop Transformer — the 28 layers of the GLM-5 base (about 750B scale) run a second, deeper time with weights reused. Reasoning depth grows without adding parameters.
- **Claimed performance**: intelligence comparable to 2T–3T-parameter models, a 1M-token context, and vision input (visual coding through screenshots and images) — the first for a mainline flagship.
- **Availability**: immediately available to all GLM Coding Plan subscribers (`glm-5.4[1m]` in Claude Code, `glm-5.4` elsewhere). Also usable in ZCode, Z.ai Chat, Trae, Qoder, AutoClaw, WorkBuddy, CatPaw, and Qingyan. Weekly quota up 50% over GLM-5.3, credit multipliers lowered (input 4.6 / cache 1.1 / output 16, vs 6.9 / 1.7 / 24 for GLM-5.3).
- **Claimed speed**: up to 200 tokens per second off-peak, 70–80 tokens per second under peak load.
- **Positioning**: "Generalized Coding" — code as the basis for video, games, 3D shaders, and CAD. Demos include a music video, a FreeCAD 6-axis robot arm, a full game, and interactive 3D scenes.
- **Not yet disclosed**: no official benchmark scores for GLM-5.4 itself (to be published later). The usage-based API is pending a safety evaluation (price undecided). Open weights are planned after safety hardening (no date or license yet).

## Why it matters

1. **An alternative scaling axis**: strengthening reasoning by reusing layers instead of growing parameters is the same family as [[concepts/thinking-machines-inkling-2-mini]] and [[concepts/thinking-machines-inkling-2-small]]. "Deeper, not bigger" is now confirmed as a second scaling axis in a Chinese flagship.
2. **The middle of the Chinese coding-model race**: GLM, Kimi, and Qwen are competing head-on in the coding-agent market. GLM-5.4 also competes on price (lower credit multipliers) and quota (up 50%) to win real users.
3. **Vision input is becoming the coding-model default**: visual coding — writing code from a screenshot — has entered the flagship standard feature set. That will show up in UI-clone and design-to-code workflows.

## Limitations (explicit)

- "2–3T-class intelligence" is Z.ai's claim with no official benchmarks yet, so it cannot be verified. Treat it as a claim until independent measurements or official scores appear.
- The speed figure (up to 200 tokens per second) is also a company claim, stated with load conditions (off-peak vs peak) — real-world experience may differ.
- Open weights have no date or license, and the usage-based API has no price — do not confuse "planned" with "released."
- The launch was announced on X alone, with no separate blog post — the primary source for the details is a social-media post.
- Confidence is medium — the Z.ai announcement cross-checked against TestingCatalog coverage, but the performance claims are unverified.

## Related concepts

- [[concepts/thinking-machines-inkling-2-mini]] — the same Loop Transformer family, open weights that run on a 32GB Mac (2026-11-23)
- [[concepts/thinking-machines-inkling-2-small]] — the larger Inkling 2, a loop-transformer comparison axis (2026-11-23)
- [[concepts/alibaba-qwen4-max]] — the competing Chinese flagship axis, a 2.4T MoE (2026-11-23)
- [[concepts/moonshot-kimi-k31-pro]] — the competing Chinese open-weights axis, Kimi K3.1 Pro (2026-11-23)
- [[concepts/blackwell-fingerprints-chinese-models]] — the GPU and export-control context for Chinese frontier models (2026-11-23)

## Sources

- [Z.ai launches Loop Transformer GLM-5.4 — 750B layers run twice for claimed 2–3T-class intelligence, 1M context (Z.ai, TestingCatalog, 11-23)](raw/articles/2026-11-23-zai-glm-5-4-loop-transformer.md)
