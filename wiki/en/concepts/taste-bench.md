---
title: "Taste-Bench — Measuring Agents' Mid-Task Judgment on Long-Horizon Work; Best Model at 59.7%"
category: concepts
tags: [taste-bench, agent-evaluation, long-horizon, decision-making, microsoft, benchmark, swe-bench]
created: 2026-10-19
updated: 2026-10-19
sources:
  - "raw/articles/2026-10-19-taste-bench.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/shutdown-evasion]]"
status: draft
confidence: high
---

# Taste-Bench — Measuring Agents' Mid-Task Judgment on Long-Horizon Work; Best Model at 59.7%

## TL;DR

Microsoft and City University of Hong Kong researchers built Taste-Bench, a benchmark for the quality of decisions agents make mid-task — not whether they finish, but whether they take the smart route or a lucky one. 502 binary "decision forks" mined automatically from scored agent runs. Best of 14 frontier models: GPT-5.6 Sol at 59.7% (chance is 25% under the both-directions scoring). Accuracy collapses to 21% when the deciding evidence appears only after extensive later work. Paper "The Tasteful Agent" (September arXiv); press wave 10/18; code and dataset public.

## Key facts

- **Authors**: Wenbo Pan et al. (9 authors, City University of Hong Kong + Microsoft). Code: github.com/wbopan/tastebench; dataset: huggingface.co/datasets/wenbopan/taste-bench.
- **Construction**: 502 binary decision-fork questions mined automatically (no human annotation) from thousands of scored agent runs on coding and AI-research tasks, including SWE-bench Pro and METR's MALT transcripts.
- **Two fork types**: "parallel" (two independent attempts diverge) and "detour" (the agent corrects itself mid-run — tests spotting the mistake earlier). The model is frozen at the fork and picks the better path without seeing what follows.
- **Scoring**: each question asked twice with flipped option order; correct only if both agree — random baseline 25% (aidailypost's "a coin flip beats the best model" is wrong; The Decoder's correction is right).
- **Results**: GPT-5.6 Sol 59.7%, GPT-5.5 59.5%; detour forks consistently harder than parallel.
- **Evidence-timing effect**: 62.3% mean accuracy when the deciding clue is already visible; **21%** when it emerges only after extensive later work — near random.
- **Reasoning budget doesn't help**: three reasoning settings on two models barely moved accuracy; models burned the most reasoning tokens on the questions they missed most.
- **Taste is trainable**: distilling a teacher's hindsight judgment into Qwen3.6-27B lifted unseen-task judgment 30% → 47.9%; injecting that advice into task context raised held-out SWE-bench Pro success 14.6% → 33.7% (vs. 39% ceiling with perfect advice).

## Why it matters

1. **A new eval layer**: "did it finish" (SWE-bench) vs "how did it get there" (Taste-Bench) are different scoreboards. Evaluating agent products on success rate alone mistakes lucky agents for smart ones; long-running agents need mid-task judgment measurement.
2. **The limit of "think longer"**: bigger reasoning budgets don't improve mid-task judgment — the fix is injecting better decision criteria (distillation, advice), not burning more tokens. Harness implication: good branching heuristics in prompt/context beat more thinking.
3. **The 21% warning**: a quantitative risk figure for delegating hard-to-reverse decisions to agents in long tasks — the basis for placing checkpoints and human-in-the-loop gates.

## Limitations (explicit)

- The paper is a September preprint — the 10/18 press wave is the news hook, not a fresh paper.
- Per-model detail (GPT-5.6 Sol/Luna, Qwen3.6-27B) is press-sourced — treat as coverage-sourced until checked against the paper.
