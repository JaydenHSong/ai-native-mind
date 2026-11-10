---
title: "Tencent Hy4 Full Release — Vision and Computer Use Arrive First; Weights Still Pending"
category: concepts
tags: [tencent, hy4, computer-use, multimodal, open-weights]
created: 2026-11-05
updated: 2026-11-05
sources:
  - "raw/articles/2026-11-05-tencent-hy4-full-release.md"
related:
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/openai-gpt61-terra-half-price]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
status: draft
confidence: high
---

# Tencent Hy4 Full Release — Vision and Computer Use Arrive First; Weights Still Pending

## Start here

**Analogy**: a model that had no eyes now sees, and gained hands to operate someone else's computer screen. But the blueprint is not public yet, so it can only be rented from Tencent's cloud.

| Term | Meaning |
|------|------|
| **Computer use** | The model's ability to operate software directly through the command line and graphical interface |
| **OSWorld** | A benchmark for computer-operation ability |

## One-line definition

Released 2026-11-04, Tencent's Hunyuan flagship Hy4 is the first in the Hunyuan line with vision and computer use. A 770B-total-parameter MoE with a 1M-token context, priced the same as the preview; the weights are promised "in the coming days" and are not yet public.

## Key facts

- **Specs**: MoE with 770B total parameters and 49B active (preview figures), 1M-token context. About 2.6x the scale of Hy3's 295B. Vision covers fine-grained image processing, complex chart analysis and mathematical visual reasoning; computer use covers CLI and GUI operation. Targeted training covered professional software such as Blender and CAD, and game development in Unreal Engine, Unity and Godot.
- **Benchmarks (vendor-reported)**: Terminal-Bench 4.0 44.4, behind Claude Opus 5.5 at 66.4 and GPT-6.1 Sol at 55.5. On OSWorld 2.1 (computer operation) it scores 78.9, close to Claude's 81.8 and ahead of GPT-6.1 Sol's 75.2. ProgramBench 30.0 versus Claude's 56.5. Tencent says the hallucination rate fell from 15.76% for the preview to 5.45%.
- **Pricing**: listed API prices unchanged from the preview — $0.834 per million input tokens, $2.501 output, $0.042 cached. TokenHub is 50% off through 2026-12-31; WorkBuddy and CodeBuddy are free from 2026-11-04 to 2026-11-15.
- **Not yet public**: the full-release weights are not on Hugging Face; Tencent says they will be released with a comprehensive system card "in the coming days." A lighter Hy4 Flash is also coming, with no date. Tencent calls Hy4 "among the strongest open-source models," but until the weights land it is hosted-only.
- **Finance evaluation**: Tencent also ran an evaluation with 213 finance professionals (including 153 experts from financial institutions) across 579 real-world tasks.

## Why it matters (solo-developer view)

1. **Computer use is now standard kit for Chinese models too**: after Claude and GPT-6.1, Hy4 also operates GUIs and CLIs natively. Agents operating the OS directly is now a frontier default.
2. **The gap depends on what you measure**: far behind on coding benchmarks but near Claude on computer operation. Ranking models on a single benchmark will mislead.
3. **"Open" is a promise, not a reality, until download works**: Hy4 without weights is effectively a closed hosted model. Judge open weights by whether the download exists.

## Limitations (stated)

- Benchmark figures are Tencent's own reporting, without independent verification. The Terminal-Bench and ProgramBench gaps are large.
- The weights and system card schedule is confirmed only as "in the coming days" — no date.

## Sources

- [Tencent Hy4 full release source](raw/articles/2026-11-05-tencent-hy4-full-release.md)
