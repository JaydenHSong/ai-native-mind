---
title: "OpenAI's Chief Scientist Proposes a Perplexity Metric — Pacing Limits Near Log-Perplexity 0.68–0.70"
category: concepts
tags: [openai, perplexity, scaling, safety, pacing, governance]
created: 2026-11-23
updated: 2026-11-23
sources:
  - "raw/articles/2026-11-23-openai-pachocki-perplexity-intelligence-pause.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/nadella-emergency-brake]]"
  - "[[concepts/white-house-ai-accord]]"
  - "[[concepts/openai-gpt-6-2-astra-sol]]"
  - "[[concepts/gen-ai-observability]]"
status: draft
confidence: medium
---

# OpenAI's Chief Scientist Proposes a Perplexity Metric — Pacing Limits Near Log-Perplexity 0.68–0.70

## TL;DR

On November 22, 2026, OpenAI chief scientist Jakub Pachocki published "Perplexity and Intelligence," disclosing his lab's internal log-perplexity figures for the first time — GPT-3.5 around 0.99, GPT-4 around 0.91, recent models below 0.8 — and proposing that perplexity become a shared cross-lab metric, with agreed pacing limits that are not crossed until monitoring capability catches up. He expects transformative capabilities to appear in the 0.68–0.70 range. This is a proposal: no lab has agreed to any cap.

## Key facts

- **Disclosed figures** (log-perplexity on OpenAI's main held-out evaluation dataset): GPT-3.5 around 0.99 (fluent conversation, the basis of the original ChatGPT), GPT-4 around 0.91 (productive chain-of-thought reasoning, leading into modern reasoning models), recent models below 0.8 (transformative capabilities emerging in cybersecurity and mathematics).
- **The 0.76 point**: Pachocki writes that a model at that level began producing breakthrough results on public mathematics problems "in a single Slack thread, one after another" — his evidence that transformative capability is already appearing below 0.8.
- **Forecast**: entering the 0.68–0.70 range should bring another transformative capability, though he states explicitly that it is unknown what it will be and that it may not be testable by today's standards.
- **Proposal**: adopt perplexity (equivalently, cross-entropy loss on a held-out dataset) as a shared cross-lab metric, and agree on shared limits not to cross until the ability to understand and monitor AI behavior reaches concrete milestones (for example, a successor to CoT monitors). The proposal contemplates a first limit and then a sequence of pacing limits; no agreed numerical cap exists.
- **Other points**: AI could begin contributing to fundamental pre-training advances as early as 2027. Pachocki also acknowledges the limits: labs use different datasets and mixtures, so comparisons are hard; perplexity does not capture post-training gains such as CoT; and the loss floor (entropy) is unknown.
- **Coverage**: secondary coverage, including TechTimes, was also confirmed on November 23.

## Why it matters

1. **The yardstick moves from test scores to a loss metric**: where [[concepts/llm-evaluation]] centers on benchmarks and evals, this proposal would make a more fundamental number — how well the model predicts the next token — the shared language. Benchmarks saturate and face contamination debates; loss directly shows a model's internal progress.
2. **Pacing limits framed as a measurable agreement, not regulation**: in the same family as [[concepts/nadella-emergency-brake]] and [[concepts/white-house-ai-accord]], but distinct in pinning down "at which number do we stop." Once a number is fixed, development roadmaps and investment decisions move around it.
3. **The 0.68–0.70 range sets a clock**: the next transformation is presented not as a distant future but as a numbered interval. Developers using frontier models should watch how safety tooling and monitoring requirements change around that interval.

## Limitations (explicit)

- This is a proposal, and no lab has agreed to it — it is a call to agree on a cap, not an agreed cap. Do not report it as if a limit has been set.
- The figures come from OpenAI's own held-out dataset, so direct cross-lab comparison is difficult. Pachocki acknowledges that labs differ in datasets and mixtures.
- Perplexity does not capture post-training gains such as CoT, and the loss floor (entropy) is unknown — the metric's blind spots are stated in the piece itself.
- The mathematics results at the 0.76 level and the 2027 pre-training forecast are OpenAI's account and outlook, with no independent verification.
- Confidence is medium — the OpenAI primary post cross-checked against TechTimes secondary coverage, but the figures rest on an internal dataset with no external reproduction.

## Related concepts

- [[concepts/llm-evaluation]] — the shift from benchmark- and eval-centered assessment toward a loss metric (2026-11-23)
- [[concepts/nadella-emergency-brake]] — pacing limits and emergency brakes in the same governance family (2026-11-23)
- [[concepts/white-house-ai-accord]] — voluntary-pact frontier governance (2026-11-23)
- [[concepts/openai-gpt-6-2-astra-sol]] — the adjacent safety axis of CoT monitoring and reasoning-chain locking (2026-11-23)
- [[concepts/gen-ai-observability]] — the observability infrastructure behind "the ability to understand and monitor AI behavior" (2026-11-23)

## Sources

- [OpenAI chief scientist discloses log-perplexity figures and proposes industry pacing limits — transformative capability expected in the 0.68–0.70 range (OpenAI, 11-22)](raw/articles/2026-11-23-openai-pachocki-perplexity-intelligence-pause.md)
- [Perplexity and Intelligence (OpenAI)](https://openai.com/index/perplexity-and-intelligence/)
