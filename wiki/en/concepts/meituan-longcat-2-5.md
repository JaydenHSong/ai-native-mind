---
title: "Meituan Releases LongCat-2.5 Weights — a 1.6-Trillion-Parameter Agent Model Built Without Nvidia GPUs (Nov 15)"
category: concepts
tags: [meituan, longcat, open-weights, huawei, agents, china]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-meituan-longcat-2-5.md"
related:
  - "[[concepts/blackwell-fingerprints-chinese-models]]"
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/minimax-m3-1-flash]]"
status: draft
confidence: high
---

# Meituan Releases LongCat-2.5 Weights — a 1.6-Trillion-Parameter Agent Model Built Without Nvidia GPUs (Nov 15)

## Start here

**Analogy**: like opening a library of 1.6 trillion pages to the public. Each time you read, you only pull the shelves you need (about 48 billion pages), so a huge library does not cost as much as its size suggests. And this library was built, the company says, using Chinese chips only — no American ones.

| Term | Meaning |
|------|------|
| **MoE (mixture of experts)** | A model split into specialist blocks, where only the experts a token needs are activated |
| **Active parameters** | The part of the total parameters actually used to process one token. It decides the running cost |
| **Quantization** | Shortening numbers (for example to 4 bits) to save memory and compute |
| **MIT licence** | The most permissive open-source licence: commercial use, modification, and redistribution are allowed |
| **Terminal Bench** | A benchmark for how well agents solve tasks from the command line |
| **Open weights** | Publishing the model's weights (the learned numbers). Training data and code are not necessarily published too |

## One-line definition

On 2026-11-15, Meituan's LongCat team released the weights of LongCat-2.5, a 1.6-trillion-parameter agent model, under the MIT licence. The model was unveiled on Nov 2 and the weights followed on Nov 10. By the company's account it was trained entirely on Chinese hardware, and its self-hosting guide targets Huawei Ascend accelerators. There is no guidance for Nvidia GPUs.

## Key facts

- **The model**: a native multimodal MoE model. Out of 1.6 trillion total parameters, roughly 48 billion are active per token. It adds image understanding to its predecessor LongCat-2.0 and was reinforced for long, multi-step coding and office tasks that agents handle autonomously.
- **The release**: weights are distributed on Hugging Face under the MIT licence (commercial use, modification, and redistribution allowed; trademark and patent rights excluded). The BF16 checkpoint is about 3.56 TB and the 4-bit compressed package about 1.34 TB. A chat interface is available at longcat.ai.
- **Performance claims**: Meituan's own measurements put LongCat-2.5 at 88.4 on Terminal Bench v2.1, close to Claude Opus 5 at 89.1. But the company itself calls the scores "indicative only", and no independent verification has been published.
- **Hardware**: expert weights and activations are quantized to 4-bit precision, which the company says Chinese chips process natively. The self-hosting guide's sample setup is a cluster of 194 Huawei Ascend Atlas A2 accelerators (2 for image processing, 64 for prompt ingestion, 128 for response generation). There is no guidance for Nvidia GPUs. The company says the predecessor LongCat-2.0 was trained on a cluster of more than 50,000 Chinese AI chips.
- **Pricing**: a limited-time promotional API price of roughly €0.27 per million input tokens and €1.07 per million output tokens.

## Why it matters (solo-developer view)

1. **The premise that "you cannot do it without American chips" is wobbling**: a 1.6-trillion-parameter agent model trained and served on Chinese chips alone shows hardware dependence is not absolute. When choosing open-weight models, hardware requirements become a selection criterion.
2. **Price competition for agent models is deepening**: Terminal Bench performance in the high 80s at about €0.27 per million input tokens changes the cost structure of running coding agents. It adds a "cheap and good at long tasks" axis to my harness's model choices.
3. **Verification starts with open weights**: the benchmarks are the vendor's own measurements and hard to trust on their own, but the weights are public, so anyone can run the model and check. The value of open weights is not the claim — it is that you can run it yourself.

## Limitations (stated)

- "Trained without Nvidia" is the company's claim, and the company's own posts do not name the chip vendor for the training run ("domestic" or "Chinese-made accelerators"). The Huawei name appears in the deployment guide.
- Performance figures are Meituan's own measurements with no independent verification. The company itself calls them indicative only.
- Weights are public, but the training data and the full pipeline are not. At 3.56 TB for the BF16 checkpoint, running it needs a cluster, not a workstation.

## Related concepts

- [[concepts/blackwell-fingerprints-chinese-models]] — the Unemployment Labs report from the same period, showing the opposite direction: the newest models of four Chinese labs carry Blackwell fingerprints (2026-11-12)
- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro, another axis of Chinese open-weight agent models (2026-10-24)
- [[concepts/minimax-m3-1-flash]] — MiniMax M3.1 Flash, a low-cost agent model at $0.22 per task (2026-10-20)

## Sources

- [Meituan LongCat-2.5 weights release — source](raw/articles/2026-11-15-meituan-longcat-2-5.md)