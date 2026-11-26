---
title: "PrismML Ternary Bonsai 2.5 27B — SWE-bench 75.6 in 5.93GB, Ternary Quantization for Local Agents"
category: concepts
tags: [prismml, bonsai, ternary, qwen, open-weight, local-models, agents, quantization]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-prismml-ternary-bonsai-2-5-27b.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: low
---

# PrismML Ternary Bonsai 2.5 27B — SWE-bench 75.6 in 5.93GB, Ternary Quantization for Local Agents

## Start here

**Analogy**: An AI model is made of billions of numbers (weights). Storing each number precisely usually makes the file tens of gigabytes. PrismML reduced every number to just three values: "-1, 0, +1." Like a drawing made with only three colors, the file shrank to one-ninth its size (5.93GB) — yet it still claims 94% of the original's score on a real coding test (SWE-bench). The claim is that a 27B-class coding agent can now run on a Mac or an ordinary PC. The catch: the scores were measured by the company itself, and nobody has reproduced them independently.

| Term | Meaning |
|------|------|
| **Quantization** | Shrinking a model by storing its numbers in fewer bits |
| **Ternary** | Limiting weights to the three values -1, 0, +1 |
| **SWE-bench** | A coding test measuring the ability to fix real software issues |
| **Open-weight** | A model whose weights are public, so anyone can download and use it |
| **GGUF** | The model file format used by llama.cpp |
| **MTP** | A technique that predicts several next tokens at once to speed up generation |

## One-line definition

Ternary Bonsai 2.5 27B, released by PrismML on November 24, 2026, is a ternary model that reduces all weights of Qwen3.8-27B to the three values -1, 0, +1, and claims SWE-bench Verified 75.6 in a 5.93GB file. Apache 2.0 license.

## Key points

- **Compression method**: all language-model weights are limited to the ternary values {-1, 0, +1}, with one FP16 scale per group of 128 weights, giving 1.76 bits per weight. The total is 5.93GB, about one-ninth of the FP16 original (53.8GB).
- **Performance (PrismML's own measurements)**: SWE-bench Verified 75.6 (up 14.8 from Bonsai 2's 60.8; 94% of the FP16 original's 80.6). DeepSWE 0→27.0, Terminal-Bench 2.1 52.8→60.1, AppWorld 51.2→90.5. The five tool-calling average is 77.2, effectively equal to FP16 (77.7). The three agent-coding average is about 90% of FP16.
- **Runtime**: runs on llama.cpp (CUDA, Metal, CPU) and Apple MLX (Mac, iPhone, iPad). 262K context. 291 tokens per second on an H100 with MTP. Three GGUF variants (PTQ1_0 at 5.93GB, etc.) distributed on Hugging Face.
- **Caveat**: all figures are PrismML's own benchmarks, with no independent reproduction yet. PrismML itself acknowledges that compressed models can accumulate errors over long tasks and drift off course, and says this version improves tool-feedback use and failure recovery.

## Why it matters (solo-developer lens)

1. **The bar for local agents drops**: if a 27B-class coding agent runs from a 6GB file on a Mac, you can keep an agent resident on your own machine and cut cloud cost, latency, and privacy worries.
2. **The cost of compression shows up in long tasks**: short test scores reach 94% of the original, but PrismML itself acknowledges error accumulation over long tasks. For local agent use, start with short tasks and verify with failure-recovery patterns.
3. **The vendor-number trap**: every figure is self-measured. Until you measure on your own work, do not take the 75.6 score at face value.

## Limitations (stated)

- All figures are PrismML's own benchmarks, with no independent reproduction yet.
- PrismML itself acknowledges the risk of error accumulation and drift on long tasks.
- It is a Qwen3.8-based open-weight model, which connects it to the Chinese open-model ecosystem.
- Confidence is low — vendor numbers only, with no independent verification at all.

## Related concepts

- [[concepts/agent-residence]] — where agents live: local models vs cloud computers; the possibility of a 27B local agent (2026-11-26)
- [[concepts/llm-evaluation]] — evaluation standards for vendor benchmarks; how to treat numbers without independent reproduction (2026-11-26)

## Sources

- [PrismML Ternary Bonsai 2.5 27B — SWE-bench 75.6 in 5.93GB, Ternary Quantization for Local Agents (PrismML, Nov 24)](raw/articles/2026-11-26-prismml-ternary-bonsai-2-5-27b.md)
