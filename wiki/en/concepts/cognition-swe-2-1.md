---
title: "Cognition SWE-2.1 — Devin's Own Coding Model, Terminal-Bench More Than Doubled, Plus a Cyber Variant"
category: concepts
tags: [cognition, devin, swe-2-1, coding-model, benchmark, cybersecurity, rl]
created: 2026-11-25
updated: 2026-11-25
sources:
  - "raw/articles/2026-11-25-cognition-swe-2-1-devin.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/anthropic-claude-ship]]"
  - "[[concepts/gpt-6-intelligent-ui]]"
status: draft
confidence: low
---

# Cognition SWE-2.1 — Devin's Own Coding Model, Terminal-Bench More Than Doubled, Plus a Cyber Variant

## Start here

**Analogy**: Cognition, the company behind the AI developer Devin, stopped renting other companies' models and raised its own. The base is Moonshot's Kimi K3, and the training method is pure reinforcement learning. The new model, SWE-2.1, more than doubled its predecessor's score on the Terminal-Bench coding test. But it is not yet number one — Claude Opus 5.5 and Gemini 4 Neon still score higher. Alongside it come a fast version (Ultrafast) and a security version with looser rules (Cyber). Free to try until December 8.

| Term | Meaning |
|------|------|
| **Terminal-Bench** | A coding benchmark that makes a model do real work in a terminal; a higher score means more tasks finished |
| **Pure reinforcement learning (pure RL)** | Training by trial and reward instead of memorizing correct answers |
| **FrontierCode** | Cognition's own coding benchmark — a company-made test, so read it with care |
| **Ultrafast / Lightning** | The SWE-2.1 variant running on Cerebras hardware, generating 600 tokens per second |
| **ExploitBench** | A benchmark for finding and using security vulnerabilities; higher means stronger offensive and defensive ability |

## One-line definition

Released by Cognition on November 24, 2026, SWE-2.1 is Devin's in-house coding model, trained with pure reinforcement learning on Moonshot's Kimi K3, lifting its Terminal-Bench 4.1 score from 24.2 (SWE-2) to 50.0, and shipping with a Cerebras-backed Ultrafast variant and a security-focused SWE-2.1 Cyber.

## Key points

- **Benchmarks (Cognition's own numbers, no independent verification)**: Terminal-Bench 4.1 50.0 (SWE-2 24.2), FrontierCode 2.0 41.3 (24.1), ProgramBench 44.0 (17.0), SWE Marathon 54.9 (32.5). ExploitBench 80.0 (36.1), ExploitGym intended-exploit success rate 27.3% (12.1%).
- **Relative position**: in the same table, Claude Opus 5.5 scores 65.8 on Terminal-Bench and 47.3 on FrontierCode, Gemini 4 Neon 65.2 and 46.2, Kimi K3.1 59.7 — all ahead of SWE-2.1. A large jump over its predecessor, but still behind the frontier models.
- **Ultrafast (Lightning)**: built on the Cerebras partnership, generating 600 tokens per second (10x the standard 60). Priced at $5 per million input tokens, $25 per million output tokens, $0.50 per million cache reads. Not covered by the free offer.
- **SWE-2.1 Cyber**: a variant with more permissive safeguards for defensive security work, rolling out to Devin Security. The general model keeps safeguards aimed at "a narrow set of high-harm activities."
- **Pricing and availability**: in Devin Desktop, Cloud, and CLI. Free for Devin Pro, Max, and Teams users for two weeks (Desktop and CLI free through December 8, 2026), then discounted through January 30, 2027. Cloud sessions run as a preview through December 22, 2026.
- **Methodology caution**: rival numbers are published or developer-reported scores, or Cognition's own runs. Each model was scored in its developer's preferred harness (Claude Code, Codex, and others); SWE models were tested in the Devin CLI harness — harness differences exist.

## Why it matters (for a solo developer)

1. **Coding agents are growing their own models**: Devin moved from borrowing general models to training a specialized model on Kimi K3 with RL. Which agent you use is becoming the same question as which model sits behind it.
2. **Read the harness, not just the score**: SWE-2.1's numbers came from the Devin CLI harness. The same model scores differently in a different harness, so when reading a benchmark, check "which harness measured it" before the number.
3. **The dual-use split**: an ExploitBench score of 80 reads as both a defense tool and an attack tool. Cognition splitting off a Cyber variant is a design pattern — powerful capability, separated by use case. When giving your agent a powerful tool, split by use case first.

## Limitations (stated)

- Every benchmark number is Cognition's own report, with no independent verification or replication. Rival numbers were also run or collected by Cognition.
- FrontierCode is Cognition's own benchmark — a company testing its own model on its own test needs careful reading.
- Per-token pricing is published only for Ultrafast; the base SWE-2.1 has no published token price. No API exists; it is available only inside the Devin platform.
- Confidence is low — the primary evidence is a single Cognition announcement, and every number is vendor-measured.

## Related concepts

- [[concepts/llm-evaluation]] — evaluation methodology, and how benchmark and harness differences change scores (2026-11-25)
- [[concepts/anthropic-claude-ship]] — the other axis of coding-agent products: handing over review and approval versus growing the model itself (2026-11-25)
- [[concepts/gpt-6-intelligent-ui]] — the frontier race axis, alongside the GPT-6 family (2026-11-25)

## Sources

- [Cognition, SWE-2.1 Released — Devin Coding Model, Terminal-Bench More Than Doubled, Cyber Variant Included (Unite.AI, Nov 24)](raw/articles/2026-11-25-cognition-swe-2-1-devin.md)
- [Cognition releases SWE-2.1 with a claimed 10× faster Cerebras variant (Superpower Daily)](https://superpowerdaily.com/posts/cognition-releases-swe-2-1-with-a-claimed-10-faster-cerebras-variant)
