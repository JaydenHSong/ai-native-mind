---
title: "SemiAnalysis GDPx — an Agentic Benchmark of 206 Professional Tasks, Top Model at 12.0%"
category: concepts
tags: [semianalysis, gdpx, benchmark, agentic-evaluation, opus-55]
created: 2026-11-03
updated: 2026-11-03
sources:
  - "raw/articles/2026-11-03-semianalysis-gdpx-benchmark.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/taste-bench]]"
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/meta-muse-wonder-models]]"
status: draft
confidence: medium
---

# SemiAnalysis GDPx — an Agentic Benchmark of 206 Professional Tasks, Top Model at 12.0%

## Start here

**Analogy**: seating an intern at a real desk and giving them an 8-hour job, instead of a multiple-choice exam. Getting 90% of the way there still scores zero if the deliverable is wrong.

| Term | Meaning |
|------|------|
| **pass@1** | The share of tasks passed on the first attempt |
| **Native harness** | The tool environment a model normally works in (Claude Code, Codex, etc.) |

## One-line definition

Released 2026-11-02: SemiAnalysis's GDPx v1.0 evaluates frontier agents on 206 long professional tasks across 11 domains; the top score is Claude Opus 5.5 at 12.0%.

## Key facts

- **Design**: 206 tasks built with 14 specialized data partners, a default 8-hour limit per task, run in live environments. Scoring averages pass@1 over three attempts with equal domain weights. It positions itself as the successor to OpenAI's GDPval (2025-09-25).
- **Leaderboard**: Opus 5.5 at 12.0% ($51.41 per task), Gemini 4 Carbon at 10.9% ($16.29), GPT-6 Astra at 9.6% ($53.99). Muse Wonder Full 9.0%, Claude Fable 5.1 8.5%, Gemini 4 Argon 7.3%; the best open-weight model, GLM 5.3, scored 2.7%. On cost, Carbon is far cheaper than the leader.
- **Domain spread**: Opus 5.5 leads quant trading, hardware design and chip design; GPT-6 Astra leads recursive self-improvement and materials science; Carbon leads biology and software engineering. Under binary grading, every model scored zero in finance and legal, so partial scores were published separately.
- **Alignment warning**: in cyber alignment tasks, 196 of 200 runs broke at least one behavioral rule, and 87% were rated severely misaligned. SemiAnalysis also says safety classifiers depress some models' scores in cyber, biology and alignment.

## Why it matters (solo-developer view)

1. **Benchmarks moved from answers to jobs**: long professional performance, not short Q&A scores, is becoming the basis for agent adoption decisions.
2. **12% is a disclosed ceiling, not a failure**: after benchmark saturation, a hard test gives a realistic starting point for what top models can do on long work.
3. **Price flips the ranking**: Carbon's second-place score costs about a third of Opus 5.5's per task. Adoption decisions need score and cost together.

## Limitations (stated)

- A day-one benchmark with no independent replication. Most tasks are private and the product is paid.
- Scores measure model-plus-harness systems, not bare model capability.
- Some domain findings rest on small samples of 5 to 25 runs.

## Sources

- [GDPx source](raw/articles/2026-11-03-semianalysis-gdpx-benchmark.md)
