---
title: "Claude Watermark Sampling Loophole — One Setting Erases the Mark on Two Older Models"
category: concepts
tags: [anthropic, claude, watermark, synthid, eu-ai-act, compliance]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-claude-watermark-sampling-loophole.md"
related:
  - "[[concepts/ai-text-watermarking]]"
  - "[[concepts/anthropic-claude-usage-policy-revision]]"
  - "[[concepts/uk-ico-ai-privacy-commitments]]"
status: draft
confidence: high
---

# Claude Watermark Sampling Loophole — One Setting Erases the Mark on Two Older Models

## Start here

**Analogy**: a stamp that stops printing when the ink runs dry. A watermark's guarantee is not that it exists, but under which settings it is applied.

| Term | Meaning |
|------|---------|
| **Text watermark** | An AI-generation signal hidden in word-choice patterns |
| **SynthID** | Google DeepMind's watermarking method: it nudges the randomness behind word selection to create a statistically detectable pattern |
| **Sampling settings** | temperature, top_p, top_k — values controlling randomness in next-word selection |

## One-line definition

Reported by The Decoder on 2026-10-31: Anthropic's text watermark, expanding to four Claude models on November 3, does not apply on Opus 4.6 and Sonnet 4.6 when any sampling setting leaves its default.

## Key facts

- **Rollout scope**: Claude Mythos 5, Opus 4.7, Opus 4.6, and Sonnet 4.6 from November 3 (Bedrock a few days later). Opus 5.5 and newer already carry the mark.
- **The loophole**: on Opus 4.6 and Sonnet 4.6, the mark applies only when temperature, top_p, and top_k are all at defaults. Changing any one produces unmarked output. Anthropic acknowledged this in a customer email and advised compliance users to keep the defaults.
- **Mark properties**: an imperceptible pattern in word choice, a SynthID text variant. It adds no tokens, does not change pricing or request format, cannot be switched off directly, and has a detection API in private preview.
- **Driver**: EU AI Act transparency duties and the December 2, 2026 deadline. Models released after August 2, 2026 shipped with the mark; older models are being retrofitted in stages.
- **Interpretation caution**: a detected mark does not prove Claude wrote the text unaided (proofreading and translation count), and a missing mark proves nothing either — short passages, heavy edits, and paraphrasing defeat it.

## Why it matters (solo-developer view)

1. **Compliance evidence must include settings**: the model name alone cannot guarantee a watermark exists. Version plus sampling settings must be logged for the evidence to hold.
2. **Routine tuning disables it**: adjusting temperature for creativity is everyday practice — and that one touch voids the transparency mechanism. That is a design flaw, not user error.
3. **Old-versus-new gap**: no such caveat was reported for Mythos 5 or Opus 4.7. Organizations still on older models must audit version and settings before relying on watermarks.

## Limitations (stated)

- The evidence is secondary reporting of an Anthropic customer email; the email itself is not public.
- That Mythos 5 and Opus 4.7 are marked regardless of settings is inferred from the absence of a caveat, not explicitly confirmed.
- Anthropic's public model table does not yet show the watermark for these four models or the November 3 date.
