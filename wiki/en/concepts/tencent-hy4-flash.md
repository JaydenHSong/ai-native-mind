---
title: "Tencent Hy4 Flash Launch — a $0.07-Input Ultra-Cheap Tier, the Low-Cost Hy4 (Nov 16)"
category: concepts
tags: [tencent, hy4-flash, low-cost-model, api-pricing, multimodal]
created: 2026-11-16
updated: 2026-11-16
sources:
  - "raw/articles/2026-11-16-tencent-hy4-flash.md"
related:
  - "[[concepts/tencent-hy4-full-release]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/deepseek-v41-flash-1017]]"
status: draft
confidence: medium
---

# Tencent Hy4 Flash Launch — a $0.07-Input Ultra-Cheap Tier, the Low-Cost Hy4 (Nov 16)

## Start here

**Analogy**: think of it as the small size of a drink sold at the same shop. The big size (the Hy4 flagship) and the small size taste similar, but the small one costs about 1/20 as much. The catch is that "tastes similar" comes from the shop owner asking only 85 of his own customers.

| Term | Meaning |
|------|------|
| **Low-cost tier** | A version in the same model family with slightly lower performance and a much lower price |
| **Blind test** | An evaluation where people grade the quality of answers without knowing which model wrote them |
| **Native multimodal** | A model designed from the start to learn text, images, video, and other kinds of input together |
| **Token** | The unit an AI reads text in. Roughly one English word is one token |

## One-line definition

On 2026-11-16, Tencent officially launched Hy4 Flash on Tencent Cloud TokenHub — the low-cost tier of the flagship Hy4 released Nov 4, at $0.07 per million input tokens, about 1/21 of Qwen4-Max's input price the same day.

## Key facts

- **Launch**: officially launched Nov 16 on Tencent Cloud TokenHub. The low-cost tier of the flagship Hy4 released Nov 4. Model ID `hy4-flash`, with OpenAI- and Anthropic-compatible APIs.
- **Architecture**: 224B total parameters, 12B active per token, 1M-token context, native multimodal.
- **Pricing**: $0.070 input / $0.281 output / $0.003 cached input per 1M tokens — about 1/21 of Qwen4-Max's $1.50 input price the same day. Reports also mention a 50% promotion through Nov 30.
- **Performance claim (Tencent's own announcement)**: in Tencent's own blind test (85 people, 259 real-work tasks), satisfaction of 2.79/4, claimed to be on par with Claude Haiku 5.5 (2.81). No independent verification, model card, or benchmark originals have been released.
- **Openness**: weights unreleased. Open source has been promised, but with no date or licence. An OpenRouter listing is undecided.

## Why it matters (solo-developer view)

1. **The "judgement gets cheaper" current runs deeper**: at $0.07 input, the per-unit cost of classification, summarization, and routing work that needs massive call volume falls to effectively zero. My harness gains a wider set of lightweight judgement-model options.
2. **The price-competition axis has moved from flagships down to low-cost tiers**: a flagship (Qwen4-Max) and a low-cost tier (Hy4 Flash) arriving on the same day means Chinese labs are widening the price front across the whole range.
3. **The performance claim has no verification**: the satisfaction score rests only on Tencent's own blind test, and 85 people and 259 tasks is a small sample. It cannot be called Haiku-class until it is compared directly on my own tasks.

## Limitations (stated)

- The performance claim rests only on Tencent's own blind test, with no independent verification. No model card or benchmark originals have been released.
- Weights are unreleased, and "open source is planned" is only a statement, with no date or licence. An OpenRouter listing is undecided.
- The 50% promotion through Nov 30 is report-based and may differ from the official price list.

## Related concepts

- [[concepts/tencent-hy4-full-release]] — the Hy4 flagship's full release, vision and computer use first (2026-11-05)
- [[concepts/claude-haiku-5-5]] — comparison target Claude Haiku 5.5, the lightest and cheapest of the 5.5 series (2026-10-08)
- [[concepts/deepseek-v41-flash-1017]] — another case on the low-cost, open-model axis, $0.2 per task (2026-10-18)

## Sources

- [Tencent Hy4 Flash launch — source](raw/articles/2026-11-16-tencent-hy4-flash.md)
