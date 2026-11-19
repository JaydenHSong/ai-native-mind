---
title: "OpenAI 'Research acceleration: The jagged frontier' — Coding Agents Now Finish 46% of 2–4 Hour Tasks Alone"
category: concepts
tags: [openai, research-acceleration, coding-agents, recursive-self-improvement, gpt-6]
created: 2026-11-19
updated: 2026-11-19
sources:
  - "raw/articles/2026-11-19-openai-research-acceleration-jagged-frontier.md"
related:
  - "[[concepts/agent-scientific-discovery]]"
  - "[[concepts/openai-science-blog-gpt6-astra-lattice]]"
  - "[[patterns/agent-planning-to-implementation]]"
status: draft
confidence: medium
---

# OpenAI 'Research acceleration: The jagged frontier' — Coding Agents Now Finish 46% of 2–4 Hour Tasks Alone

## Start here

**Analogy**: OpenAI measured how its own researchers work. Give a coding AI a job that would take a person two to four hours, and it now finishes almost half of them (46%) with no human touching it at all. In March it was one in four. But the numbers vary a lot by job type — "watching a running experiment" succeeds 79% of the time, while "writing server code from scratch" succeeds only 25%. The boundary between what agents can and cannot do is jagged, not smooth.

| Term | Meaning |
|------|------|
| **Zero-intervention success** | The share of delegated tasks an agent finished with no person stepping in |
| **Recursive self-improvement (RSI)** | AI being used to build the next generation of AI, accelerating its own progress |
| **Agent workday** | A unit for how much an agent did in a day, converted into person-days |
| **Agent** | An AI that takes a goal, plans on its own, and uses tools to do the work |

## One-line definition

In its second research-acceleration report, **"Research acceleration: The jagged frontier,"** published November 18, 2026, OpenAI reports that its coding agents now complete 46% of research tasks estimated to take a human two to four hours with zero human intervention — double the 23% recorded in March. But performance varies sharply by task type, which OpenAI itself calls a "jagged" frontier. The report updates its September analysis.

## Key points

- **Core metric (zero-intervention success)**: the share of delegated tasks an agent finished with no recorded human involvement. Two-to-four-hour tasks: 23% → 46% (March → October); four-to-eight-hour tasks: 13% → 35%.
- **Jagged by task type (August 1 – October 18)**: monitoring training runs 79%, answering technical questions 72%, communicating 69%, analyzing 58%, building 43%, launching training runs 35%, setting up evaluation and reinforcement-learning environments 29%, writing code for inference and serving stacks 25%. OpenAI warns the weak categories could become bottlenecks for overall research gains.
- **Scale of use**: median daily agent spending per researcher reached about $2,400 in October at API list prices, up 62% from September; the 90th percentile reached about $23,000, up 105%. Average agent workdays per researcher per day rose about 11-fold, from 0.5 to 5.7 days. By mid-October, more than two-thirds of researchers ran at least 4 agents simultaneously in a day.
- **Survey (101 research staff, late August to early September)**: the median respondent said they would trade 40% of team headcount or 30% of team compute to regain access to frontier coding agents for three months. Documented workweeks in Safety & Alignment grew 77% from January to September — the largest absolute increase of any research area at OpenAI.
- **Policy context**: the report's stated aim is to track indicators relevant to recursive self-improvement (RSI) — AI accelerating the development of future AI systems. OpenAI repeats its September policy ask: labs should be required to track and publicly report RSI indicators, while stressing that sharing the measurements should not be read as an intention to pursue full RSI.

## Why it matters (solo-developer lens)

1. **A measured answer to "how far can I delegate"**: 46% is not a benchmark but an internal record from a real research organization. My own work can be mapped onto the same table — delegate monitoring, analysis, and communication; keep serving-stack builds and environment setup in human hands. The boundary is directly usable for delegation design in [[patterns/agent-planning-to-implementation]].
2. **The bottleneck is visible**: the 25% tasks (inference and serving code) cap the whole pipeline. When only the fast parts get faster, the slow parts bind everything — a textbook bottleneck. In my own workflow, find the slowest stage first.
3. **Spending is dependence**: $2,400 per researcher per day, $23,000 at the top 10%. Willingness to trade 40% of headcount to keep the tools means coding agents are already infrastructure you cannot work without. Cost management has become productivity management.
4. **Material for the RSI debate**: OpenAI demands that all labs publicly report RSI indicators while publishing its own first. These indicators may become the reference point in regulatory debates — a thread to watch with [[concepts/agent-scientific-discovery]].

## Limits (stated explicitly)

- These are internal estimates, not an independent evaluation. As agents grew more capable, researchers changed which tasks they delegated within each duration bucket, so the improvement is not purely a measure of model capability.
- Estimates of how long a skilled person would take on each task need more validation; the survey is small and self-reported, and the interviews cover 10 people.
- $2,400 and $23,000 are API list-price conversions, not actual spending.
- confidence is medium — the OpenAI report crossed with multiple reports, though the full report text was not read line by line.

## Related concepts

- [[concepts/agent-scientific-discovery]] — internal measurements behind the claim that agents accelerate scientific research; the "jagged" unevenness is the point
- [[concepts/openai-science-blog-gpt6-astra-lattice]] — OpenAI's science-research acceleration work from the same week (2026-11-16)
- [[patterns/agent-planning-to-implementation]] — what the agent-does-well vs agent-does-poorly boundary means for harness design

## Sources

- [OpenAI 'Research acceleration: The jagged frontier' — coding agents, 46% zero-intervention success on 2–4 hour tasks (OpenAI, 11-18)](raw/articles/2026-11-19-openai-research-acceleration-jagged-frontier.md)