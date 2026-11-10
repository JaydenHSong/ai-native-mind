---
title: "DeepSeek V4.1-Flash-1017 — MIT-Licensed Open Weights, Frontier-Grade Coding and Agent Model at 1/42 the Price"
category: concepts
tags: [deepseek, open-weights, frontier-model, mit-license, benchmarks, api-pricing, moev4, search-api]
created: 2026-10-18
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-18-deepseek-v41-flash-1017.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
  - "[[concepts/meta-muse-spark-open]]"
  - "[[concepts/china-ai-export-controls]]"
status: draft
confidence: high
---

# DeepSeek V4.1-Flash-1017 — MIT-Licensed Open Weights, Frontier-Grade Coding and Agent Model at 1/42 the Price

## TL;DR

DeepSeek announced V4.1-Flash-1017 on 2026-10-17 (via X) — a minor update to September's V4.1-Flash. MIT-licensed weights are on Hugging Face and ModelScope; live on DeepSeek's website, app, and API. The vendor claims Terminal-Bench 4.0 31.2 → 42.3 and DeepSWE v1.1 74.2 → 77.0 (vendor-measured, not independently reproduced), per-task cost under $0.2 (down from $0.5), and off-peak API output pricing of $0.6/1M tokens — roughly 1/42 of Claude Opus 5's $25. A new Search and Fetch tool API opened at $0.75 per 1,000 successful calls.

## Key facts

- **Release**: 2026-10-17, 14:05 IST announcement on X. 763B-parameter MoE, 16B active on generation / 8B on prefill, 1M context, 256K+ max output (per HF model card).
- **Benchmarks (vendor's own, independent reproduction pending)**: Terminal-Bench 4.0 31.2 → 42.3, DeepSWE v1.1 74.2 → 77.0, Automation-Bench 60.5, Agents' Last Exam 35.4, HLE (no tools) 42.6. Claims to beat GPT-5.6 Sol and Claude Opus 5 on 4 of 11 tests (per DeepSeek's own table).
- **Pricing**: per-task cost $0.5 → under $0.2 (per DeepSeek's chart, −60%). API output $0.6/1M tokens (off-peak) vs GPT-5.6 Sol $20 and Claude Opus 5 $25.
- **New tool APIs**: Search and Fetch at $0.75 per 1,000 successful requests (empty results and failures free). Server-side calls via DeepSeek Harness, Claude Code, or Codex free until 2026-10-31 16:00 UTC.
- **Hugging Face co-founder and CSO Thomas Wolf** on X: "'small-scale update' is truly funny (Terminal-Bench 31.2 → 42.3)… I am curious whether this figure will hold outside the internal evaluation environment."

## Why it matters

1. **The price collapse, quantified**: 1/42 is not rhetoric — it redefines coding-agent unit economics as a per-task number ($0.2), adding "open-weight substitution" as a fourth lever beside routing, caching, and spend caps.
2. **Speed beats paper**: HN observers note users reach for DeepSeek over "smarter-on-paper" Claude or Gemini because speed and token efficiency change how the model feels to work with — perceived quality = speed × cost.
3. **Tooling commodification**: opening Search/Fetch APIs means selling agent infrastructure, not just the model — while China drafts AI export controls (10/16 draft) that could cover model weights.

## Limitations (explicit)

- Benchmark scores are **vendor-measured**; independent reproduction pending. Wolf himself questioned whether they hold outside internal evaluation.
- The "leads on 4 of 11" claim is per DeepSeek's table — the same table shows Claude Opus 5 leading six.
- Interaction with China's export-control draft (≥2T-parameter threshold — V4.1 is 763B, below it) is unconfirmed.
