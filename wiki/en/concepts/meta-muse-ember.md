---
title: "Meta Launches Muse Ember — Haiku-Class Performance at One-Third the Cost per Task (Nov 9)"
category: concepts
tags: [meta, muse, ember, small-model, agent, pricing]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-meta-muse-ember.md"
related:
  - "[[concepts/meta-muse-spark-open]]"
  - "[[concepts/meta-muse-wonder-models]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: high
---

# Meta Launches Muse Ember — Haiku-Class Performance at One-Third the Cost per Task (Nov 9)

## Start here

**Analogy**: instead of keeping one expensive expert on the agent team, you hire several cheap assistants for the repetitive chores. The big model makes the hard calls; Ember handles tool calls and document cleanup. The same work gets done for about a third of the labour cost.

| Term | Meaning |
|------|------|
| **Muse Ember** | Meta's smallest and cheapest Muse model — an executor for the repetitive work agents do all day |
| **Cost per task** | The real cost of finishing one benchmark task — token price × tokens used |
| **200k-token threshold** | The input-size limit for Ember's low price — above it, the whole request bills at 3× |

## One-line definition

On 2026-11-09, Meta released Muse Ember (`muse-ember-1.0`), the smallest and cheapest model in the Muse family. It is an executor model for the work agents repeat — tool calls, coding subtasks, routing, extraction and document processing — scoring 36 on the Artificial Analysis Intelligence Index, effectively tied with Claude Haiku 5.5, at roughly one-third the cost per task.

## Key facts

- **Pricing**: $0.10 input / $0.50 output per MTok, with cached input at $0.004. But any request with more than 200,000 input tokens bills the entire request at 3× ($0.30/$1.50, cached $0.012). Cached tokens and stored conversation history count toward the threshold. It is the cheapest Muse model, against Wonder at $4/$20 and Spark at $1.25/$4.25.
- **Specs**: 1,048,576-token context window, up to 524,288 output tokens. Inputs are text, image, audio, video and PDF; output is text. It has an explicit reasoning mode. Weights are not published (API only) and no parameter count was disclosed. Available on the Meta Model API (Standard mode only), Muse Code, OpenRouter, Google Cloud (preview) and Oracle Cloud. Included in all Muse Code subscription plans.
- **Benchmarks (Meta-presented, Artificial Analysis)**: Artificial Analysis Intelligence Index 36 at maximum reasoning effort, effectively tied with Haiku 5.5 at 36.2/35.8 and ahead of GPT-6 Luna at 28. Cost per task is about $0.136 for Ember versus about $0.411 for Haiku 5.5. On Terminal-Bench 4.0, Ember scored 40.9% versus Haiku's 39.2%. These are Meta-presented Artificial Analysis v5 comparisons, not independent reproductions.
- **Lineage**: the fourth Muse model — Spark (April), Glimmer (August), Wonder (October), then Ember (November). It is the first model trained using Muse Wonder Full as a teacher. Meta positions it as the lower layer of a two-tier agent architecture: cheap executor plus big planner.
- **Caveats**: Meta offers no data processing agreement and no EU data residency for the API, and OpenRouter does not offer Ember through its EU in-region routing. Above the 200k-token threshold the price triples, so workloads that routinely pass long contexts will see a different effective price.

## Why it matters (solo-developer view)

1. **The floor of agent cost dropped again**: Haiku-class intelligence at about $0.14 per task means sub-agents, routing and extraction can run without being rationed. "Expensive model judges, cheap model executes" becomes a realistic default design.
2. **Judge by cost per task, not token price**: Ember's per-token price is identical to Haiku 5.5's ($0.10/$0.50), but it costs a third as much per task because it uses fewer tokens to finish the same job. Model choice should be based on the total cost of finishing a job.
3. **The 200k threshold is a design constraint**: workloads that pass whole long documents or conversation histories trigger the 3× rate. Using Ember well means chunking and summarising to stay under 200k tokens.

## Limitations (stated)

- The pricing and performance figures are Meta-presented Artificial Analysis v5 comparisons, not independent reproductions. Cost per task is an estimate based on Meta's pricing and token-usage assumptions.
- Weights are not published (API only), so local execution and fine-tuning are not possible. Unlike Spark Open, it is not open-weight.
- No EU data residency or DPA is a practical constraint for European customers.

## Related concepts

- [[concepts/meta-muse-spark-open]] — Meta Muse Spark Open, open-weight 816B MoE with 1M context
- [[concepts/meta-muse-wonder-models]] — Meta Muse Wonder and Wonder Full, closed frontier agent models
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, the lightweight model Ember is compared against
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2 and Mythos 5.2, the flagship launched the same day

## Sources

- [Meta Muse Ember launch source](raw/articles/2026-11-10-meta-muse-ember.md)
