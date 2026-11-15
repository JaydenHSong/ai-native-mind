---
title: "Blackwell GPU Fingerprints Found in Six Chinese Frontier Models — Evidence of Export-Controlled Chip Use (Nov 12)"
category: concepts
tags: [blackwell, china, deepseek, kimi, minimax, export-controls, forensics]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-blackwell-fingerprints-chinese-models.md"
related:
  - "[[concepts/nvidia-huang-ousted-ceo]]"
  - "[[concepts/meituan-longcat-2-5]]"
  - "[[concepts/moonshot-kimi-k31-pro]]"
status: draft
confidence: high
---

# Blackwell GPU Fingerprints Found in Six Chinese Frontier Models — Evidence of Export-Controlled Chip Use (Nov 12)

## Start here

**Analogy**: like knife marks left on a cutting board while cooking, the chip used to build an AI model leaves traces inside the model. Each chip leaves a different pattern, so opening a model up lets you guess which chip made it. This report says the marks in six recent Chinese models match Blackwell, the newest chip the United States bars from export to China.

| Term | Meaning |
|------|------|
| **Blackwell** | NVIDIA's newest AI chip generation. B200/B300 and GB200/GB300 belong to it |
| **SM (streaming multiprocessor)** | A unit of workers inside a GPU that split up computation. Each chip has a different count (Hopper 132, B200/B300 148, GB200/GB300 152) |
| **Philox** | The random-number method that creates a model's initial values. The same seed and the same worker count produce the same numbers |
| **Sigma (σ)** | A unit for how unlikely a result is by chance. Bigger means it is not chance |
| **Hopper** | The NVIDIA AI chip generation before Blackwell (H100, H200, H800) |
| **Export controls** | US rules that require a licence to send certain advanced chips to China |
| **Checkpoint forensics** | Analysing published model weights to recover traces of the training process |

## One-line definition

On 2026-11-12, Will DePue of Unemployment Labs published a checkpoint-forensics report: the newest models from four Chinese labs (DeepSeek, Moonshot AI, MiniMax, Ant Group) — six models in total — carry NVIDIA Blackwell GPU initialisation fingerprints in their published weights, technical evidence that they accessed export-controlled chips to build their newest models. The report is explicit that it does not prove where the chips were, how they were obtained, or whether any law was broken.

## Key facts

- **The method**: when PyTorch fills a model's initial weights with the Philox random-number generator, it splits the work across as many threads as the GPU has SMs. With a different SM count, the same seed produces a different arrangement of weights. Rows of weights that training never changed still hold their starting arrangement, which identifies the chip the model started on.
- **The six models**: DeepSeek-V4-Flash (B200/B300), DeepSeek-V4-Pro (GB200/GB300), Kimi K3 (GB200/GB300), Kimi K3.1-Pro (GB200/GB300), MiniMax-M3 (B200/B300), and Ant Group's Ling-3.1-flash (GB200/GB300). All released since April 2026. The same companies' earlier models (DeepSeek-V3, Kimi K2/K2.5, MiniMax-M2.7, Ling-3.0-flash) show Hopper fingerprints.
- **Confidence**: the evidence for each of the six models ranges from 49 to 1,385 sigma. Searching roughly 6 trillion seed-and-layout combinations, the strongest chance match would reach only about 8 sigma, so the report argues this is not chance. DeepSeek-V4-Flash and Kimi K3 were confirmed directly against physical Blackwell chips. Applied to 24 models whose hardware is publicly disclosed, the method agreed with every disclosure.
- **Scale estimates**: Kimi K3 at about 4,500 Blackwell GPUs and DeepSeek-V4-Pro at about 3,000, with five training runs totalling about 12,000 Blackwell GPUs (range 7,000–22,000) over 50–100 days. The largest cluster is estimated at roughly $200–300 million, and the five together at more than $500 million. But these rest on assumptions about efficiency, token counts, and run lengths, and the author states he is not confident in them.
- **Labs that have not switched**: the newest models from Alibaba (Qwen), Zhipu (GLM), Tencent, Xiaomi, and StepFun still read as Hopper-trained. Meituan says LongCat-2.0 was trained entirely on "AI ASIC superpods", and its published weights show no NVIDIA fingerprint.
- **Reception**: TechCrunch covered it on Nov 13, and engineer Peter Liu open-sourced a CPU-only reproduction script that recovers the same SM peaks and seeds. The author noted that now the method is public, labs can erase many of these signatures.

## Why it matters (solo-developer view)

1. **Weights do not lie**: unlike press claims, this is technical evidence read directly from published weights, and it is verifiable. It also means the training environment of a model I publish can be read the same way.
2. **The export-control debate has moved to numbers**: if the premise that China cannot use Blackwell wobbles, the frame for reading chip-supply, pricing, and geopolitics news changes. It is background to watch alongside NVIDIA earnings on Nov 17.
3. **The method itself is reusable**: the Philox initialisation trace is a forensic tool that applies to other models too. When choosing an open-weight model, "where and on what was it built" becomes a new verification axis.

## Limitations (stated)

- A fingerprint points to the hardware that created the weights; it does not show whether all training ran on that chip, where the chips were, how they were obtained, or whether export controls were violated.
- The scale estimates (about 12,000 GPUs, more than $500 million) depend on assumptions about efficiency, token counts, and run lengths, and the author states he is not confident in them. The draft estimate (2,000–3,000 GPUs) was revised upward on Nov 12.
- Finding no fingerprint in DeepSeek-V4.1-Flash is a null result, not evidence of Ascend use.
- Specially configured AMD hardware is mentioned as an alternative, but the report excludes it for DeepSeek-V4-Flash and calls it "very unlikely" for the other five — that exclusion is the report's own judgement.

## Related concepts

- [[concepts/nvidia-huang-ousted-ceo]] — the NVIDIA CEO resignation and board investigation, the political and market context around Blackwell supply (2026-11-12)
- [[concepts/meituan-longcat-2-5]] — Meituan LongCat-2.5 from the same day, the opposite case of training on Chinese chips only (2026-11-15)
- [[concepts/moonshot-kimi-k31-pro]] — the Kimi K3.1 Pro preview, the model family this fingerprint confirms (2026-10-24)

## Sources

- [Blackwell GPU fingerprints in six Chinese frontier models — source](raw/articles/2026-11-15-blackwell-fingerprints-chinese-models.md)