---
title: "OpenAI ChatGPT Images 2.6 — GIFs, SVG Export and Saved Reference Images; Flare and Sunburst for the API"
category: concepts
tags: [openai, image-generation, gpt-image, api]
created: 2026-11-05
updated: 2026-11-05
sources:
  - "raw/articles/2026-11-05-openai-chatgpt-images-2-6.md"
related:
  - "[[concepts/openai-gpt61-terra-half-price]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
status: draft
confidence: high
---

# OpenAI ChatGPT Images 2.6 — GIFs, SVG Export and Saved Reference Images; Flare and Sunburst for the API

## Start here

**Analogy**: a camera that now shoots animated GIFs and keeps a name-tagged copy of a frequent subject to reuse later. For developers, there are two separate cameras — one fast, one precise.

| Term | Meaning |
|------|------|
| **Flare / Sunburst** | The two GPT-Image-2.6 API models — Flare for speed, Sunburst for detail |
| **complexity** | A new setting controlling how much planning the model does before rendering |

## One-line definition

Released 2026-11-04, OpenAI's ChatGPT Images 2.6 adds animated GIF creation, SVG export and reusable saved reference images, with two API models — gpt-image-2.6-flare and gpt-image-2.6-sunburst — two months after Images 2.5.

## Key facts

- **Speed claim**: OpenAI says image generation is 50% faster than before (a vendor claim, not independently verified). Flare can return an image in as little as six seconds at the low-quality setting. Images 2.5 also claimed a 50% speed improvement over 2.0 at launch.
- **New features**: turn a sketch or photo into an animated GIF, export static SVGs, markup-guided edits in the API, and a complexity setting beside the existing quality control. In ChatGPT, a photo can be saved under a name and reused in a later conversation with an @name mention, without uploading it again.
- **API models**: gpt-image-2.6-flare (fast iteration) and gpt-image-2.6-sunburst (detailed visual work). Token prices are unchanged from 2.5 — $5 text input, $8 image input, $30 image output per million tokens. But a low-quality 1024x1024 image now uses about 4.2x the output tokens, so its cost rises from about $0.006 to $0.025. At high quality and above, nothing changes (about $0.053 per image).
- **Scale**: OpenAI says people now create about 4 billion images a week across ChatGPT, Codex and the API, up from 3 billion a week reported in September.
- **Safety**: the system card says GIF-specific moderation caught 77.7% of a targeted set of policy-violating GIFs, and acknowledges motion-related violations remain hard to detect. GIF creation is still rolling out, so not every account has it yet.

## Why it matters (solo-developer view)

1. **Image generation moved into a moving medium**: GIFs sit between still images and video. When agent outputs gain motion, moderation and cost math change with them.
2. **The price card is unchanged but real cost rose**: token rates are the same, yet low-quality images use 4.2x the tokens — budgeting from the price card alone will be wrong. Measure output tokens directly.
3. **Reference images are a form of persistence**: saving a named photo for reuse brings memory and state into image generation — the same problem as context management for agents.

## Limitations (stated)

- The 50% speed improvement is OpenAI's own claim, with no published baseline, quality setting, workload or measurement method.
- The 77.7% GIF moderation figure is measured on a targeted set, not general traffic.

## Sources

- [ChatGPT Images 2.6 source](raw/articles/2026-11-05-openai-chatgpt-images-2-6.md)
