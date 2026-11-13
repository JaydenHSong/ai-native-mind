---
title: "DeepMind AlphaGenome 2 — Cell-Specific DNA Variant Effect Prediction (Nov 11)"
category: concepts
tags: [deepmind, alphagenome-2, genomics, science-model, dna]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-deepmind-alphagenome-2.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/nvidia-cosmos-3-nano-open-models]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# DeepMind AlphaGenome 2 — Cell-Specific DNA Variant Effect Prediction (Nov 11)

## Start here

**Analogy**: the same gene variant can be silent in a skin cell and disease-causing in a gut cell. AlphaGenome 1 said "on average, this variant does this." Version 2 says "in gut macrophages, this variant does this" — naming the cell. The claim is that it reproduced in about 30 minutes a tracing that took a lab a year and a half.

| Term | Meaning |
|------|------|
| **Variant effect prediction** | Predicting how a one-letter difference in a DNA sequence (a variant) affects gene expression and disease |
| **Single-cell profile** | Measured gene-expression state of individual cells — cell-level resolution instead of a tissue average |
| **Conditional model** | A model that takes a DNA sequence plus a condition ('in which cell') as input and predicts for that condition |
| **Methylation** | A chemical mark on DNA that regulates whether genes are switched on or off — epigenetic information |

## One-line definition

On 2026-11-11, DeepMind released AlphaGenome 2, its second flagship science model within a week after Gemini 4 Carbon and Gemini Robotics 2.5. It is a conditional model that predicts DNA variant effects for a specific cell rather than a tissue average; on TenK10K, causal-variant recall doubled from AlphaGenome 1's 16% to 30%.

## Key facts

- **The model**: a conditional DNA-sequence model that takes a DNA stretch of up to 1 million letters plus one condition (tissue, cell type or state) and predicts variant effects for that cell only. AlphaGenome 1 stopped at tissue-average predictions.
- **Training data**: trained on more than 107 million single-cell profiles across 68 tissues (637 human and 311 mouse cell types), with DNA methylation readouts newly added.
- **Performance**: on TenK10K (28 immune cell types), it recovers 30% of causal expression variants at 90% precision — about double AlphaGenome 1 fine-tuned (16%). Gene-effect direction is right 43% of the time (vs 23%), and median within-tissue expression variance explained is 34% (vs 23%).
- **Case study**: an IBD/ETS2 finding (variant rs2836882, about 290 kb away, localised to gut monocytes and macrophages) that took 1.5 years of lab work was reportedly reproduced in about 30 minutes.
- **Availability**: available now for non-commercial research via the AlphaGenome API; commercial use is in private preview. Research-only, not clinically validated.

## Why it matters (solo-developer view)

1. **The conditional-model design pattern**: 'input + condition' narrowing the output is not specific to genomics. Agent harnesses use the same pattern — 'task + context condition' narrowing model behaviour. Making the condition part of the input is a general way to raise accuracy.
2. **The frontier labs' science-model race is now real**: a second flagship science model in the same week as Gemini 4 Carbon and Robotics 2.5. The next frontier for AI is scientific discovery tooling, not chatbots. For a solo developer building a science-domain agent, the product is the harness that calls these specialised models.
3. **A case study in reading numbers**: '2× improvement' is striking, but the absolute 30% means 7 of 10 causal variants are still missed. Relative gains and absolute levels must be read together.

## Limitations (stated)

- All figures are DeepMind's own (preprint) with no independent replication yet.
- 30% recall is measured at 90% precision; in absolute terms, 7 of 10 causal variants are still missed.
- Research-only and not clinically validated. Commercial use is in private preview with restricted access.

## Related concepts

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' internal testing, the DeepMind flagship release line (2026-10-10)
- [[concepts/nvidia-cosmos-3-nano-open-models]] — NVIDIA Cosmos 3 Nano, a world-simulation model (2026-11-07)
- [[concepts/llm-evaluation]] — A methodology for systematically testing LLM output (evals)

## Sources

- [DeepMind AlphaGenome 2 source](raw/articles/2026-11-12-deepmind-alphagenome-2.md)
