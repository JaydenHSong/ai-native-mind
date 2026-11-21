---
title: "Thinking Machines Inkling 2 Mini — The Open-Weights Loop Transformer That Runs on a Laptop (Nov 20)"
category: concepts
tags: [thinking-machines, inkling, open-weight, agents, coding]
created: 2026-11-21
updated: 2026-11-21
sources:
  - "raw/articles/2026-11-21-thinking-machines-inkling-2-mini.md"
related:
  - "[[concepts/thinking-machines-inkling-2-small]]"
  - "[[concepts/nace-drex-max-v1-open-weights]]"
status: draft
confidence: medium
---

# Thinking Machines Inkling 2 Mini — The Open-Weights Loop Transformer That Runs on a Laptop (Nov 20)

## Start here

**Analogy**: instead of writing longer answers, this small AI model thinks more deeply by re-reading the same problem three times in its head. It is small enough to fit on a laptop, yet its makers say it stands shoulder to shoulder with much bigger open models on agentic coding work. Its weights are published for free, so it can run on your own computer right away.

| Term | Meaning |
|------|------|
| **Open weights** | The model's weights (its learned numbers) are published, so anyone can download and run them |
| **MoE** | Mixture-of-Experts — only some experts (parameters) activate for each token |
| **Loop transformer** | A design that repeats the same layers several times to reason more deeply without generating more text |
| **Apache 2.0** | A permissive open-source license that allows commercial use |
| **Context** | How much text a model can hold in mind at once — 1M tokens is hundreds of books' worth |

## One-line definition

Thinking Machines Lab released Inkling 2 Mini as Apache 2.0 open weights on November 20, 2026. A loop transformer that repeats the middle 12 of its 24 layers three times per token to "think" longer, its roughly 20GB checkpoint runs on a 32GB Mac or a single Nvidia DGX Spark. Its makers claim it leads open models under 100B parameters on agentic coding benchmarks.

## Key points

- **Architecture**: 26.4B total parameters / 3.4B active (5.4B effective per token) MoE. The middle 12 layers loop 3 times per token, deepening reasoning without generating more text.
- **Runtime**: about a 20GB checkpoint, 1M-token context, text and image input. Runs on a 32GB Mac or a single DGX Spark.
- **Self-reported performance**: Artificial Analysis Intelligence Index 20 (tied with Qwen3.8-27B), DeepSWE v1.1 48.2%, SWE-bench Verified 79.2%, BrowseComp 79.0%, DeepSearchQA 85.3% — claimed leadership among open models under 100B parameters on agentic coding.
- **Cost and speed**: about 6x cheaper and about 4x faster per task than Qwen3.8-27B ($0.59 vs $3.53 on Intelligence Index tasks).
- **What follows**: the larger Inkling 2 Small stays private until next week, pending external safety testing and red-teaming (see [[concepts/thinking-machines-inkling-2-small]]).

## Why it matters (solo-developer lens)

1. **Local agentic coding has reached the laptop**: a model that runs on a 32GB Mac claims 79.2% on SWE-bench Verified. Agentic coding can run on your own computer without sending code to the cloud — directly relevant to a Mac-based development and local agent stack.
2. **"Repeat more," not "grow bigger"**: the design buys reasoning depth through looping (repeated compute) rather than more parameters. It is the latest case on the open-model efficiency frontier — winning on architecture, not size.
3. **Price is adoption**: $0.59 vs $3.53 per task — about 6x cheaper and 4x faster, if the claim holds, changes the running cost of an agent doing the same work by a wide margin. But the figures come from the company and Artificial Analysis, so independent replication is still needed.

## Limits (stated explicitly)

- The performance and cost figures are self-reported by Thinking Machines Lab and Artificial Analysis, with no independent replication yet.
- The Inkling 2 Small weights release is a conditional "next week" schedule, depending on safety testing finishing, and could slip.
- confidence is medium — Artificial Analysis measurement cross-checks the claim, but the benchmarks are largely self-reported.

## Related concepts

- [[concepts/thinking-machines-inkling-2-small]] — the bigger sibling in the same Inkling 2 generation, 594B MoE, 31 on the AI Index, weights promised next week (2026-11-06)
- [[concepts/nace-drex-max-v1-open-weights]] — an open-weights decision model that runs on a 24GB Mac, another case of local execution (2026-11-01)

## Sources

- [Thinking Machines releases Inkling 2 Mini — the open-weights loop transformer that runs on a laptop (Artificial Analysis, Thinking Machines Lab, 11-20)](raw/articles/2026-11-21-thinking-machines-inkling-2-mini.md)
