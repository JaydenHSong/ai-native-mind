---
title: "Moonshot Kimi K3.1 Pro — 2.8T MoE Open-Weights Preview, Cyber Capability Deliberately Lowered"
category: concepts
tags: [moonshot, kimi, open-weights, moe, cyber-capability, ai-safety, china]
created: 2026-10-24
updated: 2026-11-05
sources:
  - "raw/articles/2026-10-24-moonshot-kimi-k31-pro.md"
  - "raw/articles/2026-11-05-kimi-k31-pro-open-weights.md"
related:
  - "[[concepts/deepseek-v41-flash-1017]]"
  - "[[concepts/china-ai-export-controls]]"
  - "[[concepts/claude-mythos-5-aisi-postmortem]]"
status: draft
confidence: high
---

# Moonshot Kimi K3.1 Pro — 2.8T MoE Open-Weights Preview, Cyber Capability Deliberately Lowered

## TL;DR

Moonshot AI released Kimi K3.1 Pro on 2026-10-23 via API and apps, with full weights promised by 2026-11-04. A 2.8T-total / 104B-active MoE model with a 1M-token context, priced at $2 input / $10 output per million tokens. Moonshot's own Terminal-Bench 4.0 score is 65.7% (Claude Opus 5.5: 66.4%); the independent Artificial Analysis index scores it 55, ranking 4th. Notably, Moonshot removed cyber-related data from mid-training and RL, lowering its internal exploit benchmark from 90.5% to 81.0% — a published, measured capability trade-off made before an open-weights release, under the stated principle of not releasing open weights that extend the absolute frontier of cyber capability.

## Key facts

- **Scale**: 2.8T total parameters, 104B active per token (MoE). 1M-token context. A Highspeed variant (claimed 2–3x faster) launched alongside.
- **Price**: $2 / $10 / $0.20 per million input / output / cache-hit tokens — reported as ~33% below K3 across the board.
- **Performance**: Moonshot's own Terminal-Bench 4.0 65.7% (Opus 5.5 66.4%, GPT-6 Astra 58.2%), BenchCAD 92.7%. Artificial Analysis index 55, 4th overall — set to lead open-weights models once weights publish.
- **Cyber trade-off**: cyber data removed from mid-training and RL environments. Internal xdev-bench-hard (Linux kernel, Node.js, Exim exploits): unfiltered checkpoint 90.5% → shipped model 81.0%. ExploitBench 74.7% (Opus 5.5: 91.0%). Still more than double K3's 33.3%.
- **Weights released (2026-11-04)**: on the promised date, Moonshot published the full weights on Hugging Face (moonshotai/Kimi-K3.1-Pro). 96 files, about 1.56 TB, no access gate. MXFP4 weights with MXFP8 activations (quantization-aware training), 93 layers. vLLM needs eight data-center GPUs (288GB VRAM each). No GGUF build as of 2026-11-04.
- **License**: the Kimi K3.1 Pro License, effectively the same wording as the K3 license. MIT-style freedom to use, modify and sell for most users, but a model-as-a-service business with more than $20M revenue over 12 months must sign a separate agreement with Moonshot before commercial use. Not a standard open-source license.
- **Benchmark update**: in Moonshot's own table, Kimi K3.1 Pro beats Claude Opus 5.5 on 16 of 37 non-internal rows, with leads of at most 5.4 points and gaps of up to 33.5 points where it trails.

## Why it matters

1. **A disclosure template for open weights**: what was removed, and by how much, published as numbers. Future open-model selection will plausibly include a "capability trade-off sheet" next to the performance table.
2. **The next round of price disruption**: near-Opus coding at $2/$10, with weights runnable locally — a reason to re-price agent coding stacks.
3. **China's open-weights two-track**: DeepSeek's ultra-low price and Kimi's disclosed safety trade-off — "cheap" and "responsibly released" as different answers in the same week.

## Limitations (explicit)

- Benchmark figures are mostly Moonshot's own runs and compilations, not independently verified.
- Whether the trade-off survives fine-tuning after weights publish is unknown — published weights cannot be recalled.
- Reports that it was trained on GPT-6 Astra outputs remain unconfirmed. Independent evaluation is only possible now that the weights are public.
