---
title: "OpenAI and Ligo's BioBasicsBench — 100 Real Wet-Lab Tasks to Test Agents, GPT-6 Astra at 66.7%"
category: concepts
tags: [openai, biobasicsbench, wet-lab, agent-evaluation, ligo]
created: 2026-11-07
updated: 2026-11-07
sources:
  - "raw/articles/2026-11-07-openai-biobasicsbench-wet-lab-agents.md"
related:
  - "[[concepts/openai-gpt6-rosalind-research-biology]]"
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/openai-ai-science-three-discoveries]]"
status: draft
confidence: high
---

# OpenAI and Ligo's BioBasicsBench — 100 Real Wet-Lab Tasks to Test Agents, GPT-6 Astra at 66.7%

## Start here

**Analogy**: instead of textbook diagrams, this exam hands the model a stained gel photo and a handwritten lab note and asks, "what went wrong in this experiment?" It separates students who memorize answers from students who can read evidence and say "this cannot support a conclusion." The top scorer got 67 out of 100.

| Term | Meaning |
|------|------|
| **Wet-lab** | Laboratory work with real biological samples, reagents and instruments (as opposed to dry, computational work) |
| **Mean reward** | The average rubric credit with partial credit — not the share of tasks fully solved |
| **xhigh** | The highest reasoning-effort setting applied to all models in this evaluation |

## One-line definition

OpenAI's post "Measuring how AI agents handle everyday wet-lab science" (2026-11-06), built with enzyme-design company Ligo, introduces BioBasicsBench: 100 tasks that ask models to read raw evidence from real laboratories — gel images, microscope photos, instrument readouts — catch errors, and hold back when the evidence is too weak to support a conclusion. At the highest reasoning setting (xhigh), GPT-6 Astra earned an average of 66.7% of available rubric credit. All seven models tested are OpenAI's own, and no human baseline or dataset was released with the announcement.

## Key facts

- **Task mix**: 100 tasks across five areas of routine bench work — protein methods, imaging and cytometry, quantification and assays, nucleic acid methods, and molecular cloning. Inputs include gel and blot images (31 tasks), protocols, notes and specs (27), tables and instrument exports (20), and microscopy (14); evidence types overlap, so the counts do not sum to 100. Ligo scientists built the tasks from data in their own experiments, paired each with an expert-written rubric, and had each reviewed by another Ligo scientist and an external wet-lab PhD.
- **Evaluation scale**: seven models across 37 model-and-reasoning-effort combinations, five attempts per task, for 18,500 scored responses. Scores are mean rubric reward with partial credit, not the share of tasks fully solved.
- **Results (xhigh)**: GPT-6 Astra 66.7% (95% CI 60.3–73.1%, 4,704 output tokens per task), GPT-6.1 Sol 62.0%, GPT-5.6 Sol 43.8%, GPT-6 Luna 38.3%, GPT-5.5 35.4%, GPT-5.4 33.2%, GPT-5.2 31.2%. Astra scored higher than GPT-5.6 Sol while using about half the output tokens.
- **OpenAI's caveat**: "Higher benchmark scores do not yet mean models can make reliable judgments in the lab." The benchmark is framed as a target, not a verdict.
- **Limits**: all seven models are OpenAI's own, so the leaderboard says nothing about rivals. At announcement time there was no link to a paper, dataset, full rubrics, evaluation code or raw results. One hundred tasks cannot represent every instrument, sample, experimental context or decision a laboratory might face.

## Why it matters (solo-developer view)

1. **Agent evaluation moved from clean problems to messy evidence**: existing benchmarks ask questions with right answers. BioBasicsBench measures the ability to read ambiguous, error-laden real data. In real work, what an agent needs is not answering correctly but saying "I don't know" and catching errors. This benchmark is a reference point for that direction.
2. **The generational gap is large**: Astra at 66.7% against GPT-5.6 Sol at 43.8% — nearly 23 points in one generation, with about half the tokens. Model selection is shifting from "is it the newest" to "how efficient is it at this job."
3. **Life-science agents are becoming a measurable product area**: after Rosalind (a vertical model for approved labs), there is now a public benchmark to measure that capability. Science agents are moving from laboratory curiosity to an evaluable product domain — with OpenAI's own caveat that a score is not field reliability.

## Limitations (stated)

- All seven models are OpenAI's own, so no comparison with rival models is possible. Scores are OpenAI's own reports.
- No dataset, rubrics or evaluation code was released at announcement time, so independent reproduction is impossible.
- The 66.7% is a partial-credit average, not a full-solution rate, and there is no human baseline to judge the absolute level.

## Sources

- [OpenAI and Ligo's BioBasicsBench source](raw/articles/2026-11-07-openai-biobasicsbench-wet-lab-agents.md)