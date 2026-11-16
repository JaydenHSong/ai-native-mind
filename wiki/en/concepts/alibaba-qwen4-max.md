---
title: "Alibaba Qwen4-Max Official Launch — 2.4T MoE Flagship, DeepSWE 75.7 Claimed (Nov 16)"
category: concepts
tags: [qwen4-max, alibaba, flagship-model, moe, coding-benchmark, api-pricing]
created: 2026-11-16
updated: 2026-11-16
sources:
  - "raw/articles/2026-11-16-alibaba-qwen4-max.md"
related:
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/deepseek-v41-flash-1017]]"
  - "[[concepts/gemini-4-hydrogen]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: high
---

# Alibaba Qwen4-Max Official Launch — 2.4T MoE Flagship, DeepSWE 75.7 Claimed (Nov 16)

## Start here

**Analogy**: imagine a giant kitchen with 2,400 assistant chefs (experts). Every time an order comes in, only the 71 assistants needed are called to cook, so the kitchen is huge but each dish costs only that much effort. The kitchen claims to be world-class in a coding exam — but it graded the exam itself.

| Term | Meaning |
|------|------|
| **MoE (Mixture of Experts)** | A model split into many expert blocks, with only the experts needed for each token switched on |
| **Parameter** | A number the model stored while learning. More parameters mean the model can remember more |
| **Active parameters** | The part of all parameters actually used to process one token. This decides the cost |
| **Context** | How much text a model can read and remember at once. 1M tokens is hundreds of books |
| **DeepSWE** | A coding benchmark that measures how well AI solves real software problems |
| **API-only** | A form where the model weights are not released and the model can only be used through an internet API |

## One-line definition

On 2026-11-16, Alibaba's Qwen team officially launched Qwen4-Max, the flagship of the Qwen4 family, as a public API — five days after its Nov 11 Token Plan-only preview. A sparse MoE with 2.4 trillion total parameters (71B active per token), native vision, a 1M-token context, and prices about 25% lower than its predecessor.

## Key facts

- **Launch**: after the Nov 11 Token Plan-only preview (`qwen4-max-preview`, scheduled to end Nov 25), the public API launched on Nov 16. Model ID `qwen4-max`, available on QwenCloud, Qwen Studio, QwenWork, and Qoder, with OpenAI- and Anthropic-compatible APIs.
- **Architecture**: sparse MoE, 2.4 trillion total parameters with about 71B activated per token, native vision (image and video input), 1M-token context. There are also reports of an additional 328B of N-gram embedding parameters.
- **Pricing**: $1.50 input / $4.50 output per 1M tokens, $0.075 cached input. About 25% cheaper than the predecessor Qwen3.8-Max ($2/$6). Alibaba claims an average cost of $1.67 per task by its own evaluation ($4.43 for the predecessor, about 62% lower) and about 35–50% lower token use in high-reasoning mode.
- **Benchmarks (all Alibaba's own reported figures)**: DeepSWE v1.1 coding benchmark 75.7 — ahead of Claude Opus 5.5 (74.2) and Kimi K3.1 (75.5), by Alibaba's claim. Artificial Analysis Intelligence Index 43 (+9 vs the predecessor, 3 points below Kimi K3.1 Pro's 46). Work360 52.69 (predecessor 47.74). Reuters noted the lack of independent verification data.
- **Openness**: the flagship itself stays API-only with weights unreleased. Only smaller Qwen4 models are slated for open weights later, with no date, size, or licence set.

## Why it matters (solo-developer view)

1. **The coding agent's price tag is being rewritten**: flagship-level coding at 75+ on DeepSWE for $1.50 input changes the cost structure of running coding agents. My harness gains a "flagship-grade coding, cheaper" axis for model choice.
2. **The Chinese flagship head-to-head is now real**: Kimi K3.1 Pro and Qwen4-Max arriving as direct rivals on the same day makes comparing price, benchmarks, and openness together the default habit for choosing a model.
3. **A benchmark is only a claim**: the DeepSWE #1 claim is Alibaba's own figure, so it needs independent verification. When choosing a new model, running it on my own tasks is more trustworthy than a benchmark.

## Limitations (stated)

- The 2.4T parameter count is based on Qwen's official announcement and press reports; QwenCloud documentation does not list a parameter count.
- All benchmark figures are Alibaba's own evaluations and announcements, with no independent verification. Reuters noted the lack of independent verification data.
- The flagship is API-only with weights unreleased, so it cannot be run directly, and the open-weight schedule for smaller models is undecided.

## Related concepts

- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro and the coding-benchmark and price rivalry, the Chinese flagship head-to-head (2026-10-24)
- [[concepts/deepseek-v41-flash-1017]] — the Chinese low-cost, open-model axis; the same price-cutting current as Qwen4-Max (2026-10-18)
- [[concepts/gemini-4-hydrogen]] — an execution-style coding agent model, in an era when coding benchmarks are agent performance metrics (2026-11-12)
- [[concepts/claude-fable-5-2-mythos-5-2]] — the Claude 5.2 generation that comparison target Claude Opus 5.5 belongs to (2026-11-09)

## Sources

- [Alibaba Qwen4-Max official launch — source](raw/articles/2026-11-16-alibaba-qwen4-max.md)
