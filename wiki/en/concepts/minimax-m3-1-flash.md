---
title: "MiniMax M3.1 Flash — $0.22-per-Task Agent MoE Model at 428B/23B"
category: concepts
tags: [minimax, m3-1-flash, agent-model, moe, pricing, benchmark, open-weights, deepseek, dual-use]
created: 2026-10-20
updated: 2026-10-20
sources:
  - "raw/articles/2026-10-20-minimax-m3-1-flash.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/reflection-open-weight]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# MiniMax M3.1 Flash — $0.22-per-Task Agent MoE Model at 428B/23B

## TL;DR

MiniMax released M3.1 Flash on 2026-10-19, a high-speed agent model: 428B parameters with only 23B active (MoE). Pricing at $0.15 input / $0.60 output per 1M tokens works out to roughly $0.22 per agent task (Oossa estimate; the company claims 70% lower agent-task costs). AA Intelligence Index 42 (+13 vs M3), DeepSWE v1.1 73.7%, HLE 48%, CyberGym ~82%. Open weights promised "soon" (community expectation: Oct 23, 2026). Verified across Reuters, Oossa, Wccftech, Towards AI, and ai-tldr.dev. Note the window edge: the Reuters original broke at 12:24 UTC Oct 19, ~100 minutes before the collection window; in-window coverage (Towards AI 14:32 UTC and others) qualifies it under the edge rule.

## Key facts

- **Spec**: 428B total / 23B active MoE (aggressive inference sparsity). 1M-token context, text+image+video input. Always-on reasoning with selectable effort. Upgraded sparse attention.
- **Pricing**: $0.15 input / $0.60 output per 1M tokens (cached input $0.015). Company claims **70% lower agent-task costs**; Oossa estimates **~$0.22 per task**.
- **Benchmarks**: AA Intelligence Index 42 (+13 vs M3). DeepSWE v1.1 73.7% (behind DeepSeek V4.1 Flash at 77%). HLE 48% (beats DeepSeek V4.1 Flash 43% and GLM-5.3-Flash). AA-Omniscience 56%. OSWorld V2 61.7, BankerToolBench 76.2, **CyberGym ~82%** (cybersecurity-targeted — dual-use note).
- **Speed**: company claims 3× faster — peak >200 tok/s, median >170 tok/s. Artificial Analysis measured 120 tps with 1.08s TTFT.
- **Open weights**: "to be released" (Artificial Analysis lists it as proprietary until then; community date Oct 23). "Space Bunny" was a stealth preview build — **200 trillion tokens** processed on OpenRouter.
- **Release surface**: API, M Plan, MiniMax Code — targeting coding, computer use, enterprise workflows. HTTP/Anthropic/OpenAI SDK support.
- **Independent-test caution**: VentureBeat's independent testing flagged factual-reliability issues — hallucinated answers under uncertainty.

## Why it matters

1. **A new unit-economics baseline for agents**: $0.22 per task changes the answer to "can I run agents thousands of times?" — the opposite-side data point to the 10/18 wiki story on the AI debt boom cracking (money tightening while infra costs fall). Recalculates the "one expensive model call vs N cheap calls + verification" tradeoff for harness design.
2. **The pace of the Chinese open-model chase**: DeepSeek V4.1 Flash (10/17 wiki) and M3.1 Flash landed in the same week, trading blows on DeepSWE (77% vs 73.7%). The Oct 23 open weights add another option to local agent stacks — a second Chinese entry against the "American open-weight" camp (Reflection AI, 10/12 wiki).
3. **The shadow of cheap, fast models**: CyberGym 82% + computer-use targeting + Oct 23 open weights — reported the same day as the wiki's Cairn hacking story (100+ companies breached via an open-source agent platform). "70% lower agent costs" means 70% lower attacker costs too. Model releases should be logged with their dual-use surface alongside benchmark scores.
4. **Claims vs measurements**: 200+ tps claimed vs 120 tps measured — a case study in reading vendor numbers alongside independent measurements when choosing agent infra.

## Limitations (explicit)

- Benchmark figures (DeepSWE 73.7%, HLE 48%, CyberGym 82%) are MiniMax's own reports; AA Index 42 and 120 tps are third-party measurements — keep the two labeled separately.
- "$0.22 per task" is Oossa's estimate and "70% lower" is the company's claim — both depend on task definition.
- VentureBeat's factual-reliability flag is a single independent test — no replication data.
