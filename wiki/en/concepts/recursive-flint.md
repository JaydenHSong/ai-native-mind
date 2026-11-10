---
title: "Recursive Flint — 40B MoE Open-Weight Coding Model Built by 'Eureka Machine'"
category: concepts
tags: [recursive, flint, open-weight, coding-model, moe, rsi, eureka-machine, richard-socher, swe-bench]
created: 2026-10-22
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-22-recursive-flint.md"
related:
  - "[[concepts/self-improving-ai-risk]]"
  - "[[concepts/nvidia-nemotron-3-5-bolt]]"
  - "[[concepts/meta-muse-spark-open]]"
status: draft
confidence: high
---

# Recursive Flint — 40B MoE Open-Weight Coding Model Built by 'Eureka Machine'

## TL;DR

Richard Socher's startup Recursive released Flint (2026-10-21), a 40B MoE open-weight coding model (39.8B total, ~2.5B active per token, 512K context / 256K recommended, Apache 2.0 on Hugging Face). Vendor-measured benchmarks: SWE-bench Verified 74.2%, SWE-bench Pro v2 89.7%, Terminal-Bench 2.1 54.9% — top tier among sub-50B MoE. ~131 tokens/sec on an M4 Pro MacBook Pro. Per the company, its automated research system "Eureka Machine" drove most of the process (architecture search, training methods, GPU kernel tuning), completed by a small team in under four months. Recursive exited stealth in May, raised $650M (GV, Nvidia, AMD Ventures) at a $4.65B valuation. Claimed as the first public demonstration of RSI — AI performing most of an AI research pipeline.

## Key facts

- **Model**: Flint — 39.8B MoE (~2.5B active per token), 512K context (256K recommended), Apache 2.0, public on Hugging Face.
- **Performance claims** (vendor-measured, no independent verification): SWE-bench Verified 74.2%, SWE-bench Pro v2 89.7%, Terminal-Bench 2.1 54.9%.
- **Local inference**: ~131 tok/s on an M4 Pro MacBook Pro — practical speed on a high-end laptop/workstation.
- **Build process**: "Eureka Machine" drove architecture search, training methods, and GPU kernel tuning — completed by a small team in under four months (company claim).
- **Company**: exited stealth in May. $650M raised (GV, Nvidia, AMD Ventures), $4.65B valuation.
- **Significance**: claimed first public RSI demonstration — "AI performed most of the AI research pipeline" presented as a product for the first time.

## Why it matters

1. **RSI moves from paper to product**: the wiki's self-improving-ai-risk page (09-30) framed RSI as a control-loss risk. Flint is counter-evidence on the other side — RSI first appearing as a practical research-acceleration tool. The risk debate now includes "it's already running."
2. **A new axis for local coding models**: following Nemotron 3.5 Bolt (RTX Spark, 10-14) and Muse Spark Open (816B, 10-16), open-weight coding models are converging on "notebook-class inference." More options for a solo developer's local agent stack — Apache 2.0 keeps commercial use free.
3. **Benchmark-reading caution**: 74.2% is vendor-measured — SWE-bench Verified is harness-dependent, so equal scores can feel different in real use. Per the wiki's llm-evaluation methodology: measurement conditions are part of the conclusion.

## Limitations (explicit)

- All performance numbers are vendor-measured — no independent verification.
- "Eureka Machine drove the whole process" is a company claim — actual automation scope (human involvement) undisclosed.
- Long-context quality at 512K not covered by the benchmarks.