---
title: "Thinking Machines Inkling 2 Small — 594B MoE, 31 on the AI Index, Apache 2.0 Weights Next Week"
category: concepts
tags: [thinking-machines, inkling, open-weights, moe, tinker]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-thinking-machines-inkling-2-small.md"
related:
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/meta-muse-spark-open]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: high
---

# Thinking Machines Inkling 2 Small — 594B MoE, 31 on the AI Index, Apache 2.0 Weights Next Week

## Start here

**Analogy**: a chef who promises to publish the recipe "next week" and opens tastings first. The flavor (benchmark scores) is public and the price has dropped — but the recipe (the weights) is not in your hands yet, and whether the promise holds is next week's question.

| Term | Meaning |
|------|------|
| **MoE** | Mixture-of-Experts — only some experts (parameters) activate for each token |
| **Tinker** | Thinking Machines' platform for hosting and fine-tuning its models |
| **Apache 2.0** | A permissive open-source license that allows commercial use |

## One-line definition

Announced 2026-11-05: Thinking Machines Lab, led by Mira Murati, released Inkling 2 Small, the first model of its second Inkling generation. A 594B MoE with 17B active parameters, it scores 31 on the Artificial Analysis Intelligence Index and is available only on Tinker for now; the full weights are promised under Apache 2.0 "next week," after external safety testing and red-teaming.

## Key facts

- **Scale**: 594B total parameters, 17B active per token. Text and image input, text output, native vision (292M-parameter vision encoder). Context up to 1M tokens. Trained on 12T tokens in 68 hours on GB300s. Built for agentic coding, long-horizon autonomous work, vision and knowledge tasks.
- **Performance**: 31 on the Artificial Analysis Intelligence Index v5.0.1, up 18 points from the first generation's 13 (some outlets report 12). 86.3% on SWE-bench Pro Hard. Artificial Analysis says that once the weights land, it would be the highest-scoring open-weights model developed outside China.
- **Access**: available only on the Tinker platform for now. Tinker Playground offers inference-only access; Tinker supports inference and fine-tuning. The weights are closed at launch, with the full release under Apache 2.0 promised "next week" once external safety testing and red-teaming finish — no fixed date, and conditional. Artificial Analysis lists the model as proprietary at launch.
- **Price**: on Tinker, $0.30 per million input tokens and $1.00 per million output tokens, $0.03 for cached input. Output pricing is about 75% lower than the first generation's Xhigh setting ($1.00/$4.05).
- **Business context**: Business Insider reports the lab is raising about $5B at a roughly $40B pre-money valuation, though the round is not final. The lab follows its July 31, 2026 staged-release framework and has stressed that publishing weights is irreversible.

## Why it matters (solo-developer view)

1. **The promise and the delivery split here**: the day after Kimi published its weights on the promised date, Inkling offered a conditional "next week." In the open-weights race, keeping the promise is itself the trust signal.
2. **Price is half the story**: output pricing down 75% means the second generation is not just "stronger" but "cheaper for the same work." For a solo developer, the price list matters as much as the benchmark.
3. **68 hours of training**: 12T tokens on GB300s in 68 hours shows frontier-scale training now runs in days, not weeks. Training speed has become release speed.

## Limitations (stated)

- The weights are not public yet, and the "next week" release is conditional on safety testing finishing. The date is unconfirmed and could slip.
- Benchmark figures are Artificial Analysis scores on a company-supplied model; no independent replication exists yet.
- The fundraising report ($40B valuation, $5B round) is unconfirmed press reporting, not a company statement.

## Sources

- [Inkling 2 Small source](raw/articles/2026-11-06-thinking-machines-inkling-2-small.md)
