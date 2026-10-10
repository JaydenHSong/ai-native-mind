---
title: "Gemini 4 Argon"
category: concepts
tags: [google, gemini-4, argon, frontier-model, gated-release, benchmark, hallucination, pricing, carbon, checkpoint]
created: 2026-10-01
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-01-google-gemini-4-argon-launch.md"
  - "raw/articles/2026-10-10-gemini-4-carbon-internal-testing.md"
related:
  - "[[patterns/ai-cost-management]]"
  - "[[patterns/mid-tier-performance-inversion]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/gemini-4-carbon-testing]]"
status: draft
confidence: high
---

# Gemini 4 Argon

## Start here

**Analogy**: a transfer student whose own report card (benchmarks) says top of the class, but who lands mid-pack on the independent placement test — and who, for now, is only introduced to "trusted" students first.

| Term | Meaning |
|------|---------|
| **Gated access** | A staged rollout to vetted users instead of a general release |
| **Artificial Analysis index** | An independent, measured performance index from a third party (Artificial Analysis) |
| **Fairwind Program** | Google's program giving trusted cyber-defense teams first access |

## One-line definition

Google's top Gemini 4 model, announced 2026-09-30 — shipped after months of delay and the cancellation of Gemini 3.5 Pro, carrying both a self-reported benchmark lead claim with a visible gap to independent measurement, and a **gated release**.

## Key content (2026-09-30 announcement)

### Launch context

- Shipped after months of delay. **Gemini 3.5 Pro**, which Pichai had promised for June, was **cancelled** — Argon takes its place.
- A parallel DeepMind reshuffle: co-founder Demis Hassabis stepped down and multiple Gemini leads departed (Reuters). A release amid organizational upheaval.

### Performance — the self-reported vs independent gap (explicit)

| Axis | Google's own numbers | Independent measurement |
|------|------|------|
| Coding | DeepSWE v1.1 **77.9%** | — |
| Cyber | CWE-bench v1 68% (tied #1 on vulnerability patching) | — |
| Automation | AutomationBench 51.3% | — |
| Long context | LVBench 91.7% | — |
| Overall | Ahead of GPT-6 Astra / Claude Opus 5.5 on 12 of its own 18 charts | **AA index 53** — tied with Astra/Fable 5.1, behind Opus 5.5 (58) and Sonnet 5.5 (56) |
| Reliability | — | **Hallucination rate 15%** (vs Astra's 51%) — a standout on the factual-reliability axis |

- Bloomberg: some internal staff judge real-world coding performance below the benchmarks (Google denies it).
- How to read it: the "reclaimed the lead" claim is by **Google's own charts**. On the independent composite index it still sits below Opus 5.5 — but a 15% hallucination rate is an axis you feel in agent practice.

### Specs and internal use

- Output limit raised 64K → **1M tokens** (single response).
- Internal-use claims: C/C++→Rust migrations, a 2.7x faster libgav1 Rust decoder, and a critical hospital-software vulnerability found via Wiz's "Scan for Good."

### Pricing — the third instance of the $2/$10 intro pattern

- Intro price **$2/$10 per 1M** (cached input 95% off) → scheduled to rise to **$4/$20** (level with Opus 5.5, below Astra's $10/$50).
- The intro window is undisclosed — the cost edge is **temporary**. After GPT-6.1 Sol and Sonnet 5.5, $2/$10 is hardening into the industry-standard intro price → see the 2026-10-01 update in [[patterns/ai-cost-management]].

### Access — the gated-access pattern

- No general release. **Fairwind Program** trusted cyber-defense teams first, then paid API customers and Google AI Ultra subscribers.
- Participating in the US government's (voluntary) pre-release model-access process.
- Defense teams get the model with the usual cyber guardrails **lifted** — capability vetting as the basis for access control. After the 9/30 GLM-5.3 demonstration (open-weight guardrail collapse), "who gets it, in what state" has become part of release design.

## Why it matters (solo-developer lens)

1. **Reading benchmarks**: the gap between vendor charts and independent indices (12/18 leads vs AA 53) is now permanent — choose models by independent indices plus your own workload measurements, not vendor charts.
2. **The intro-price trap**: $2/$10 is an entry price with a $4/$20 rise already announced. Hard-coding routing rules to the intro price breaks your cost structure at the hike.
3. **Unguarded models exist by design**: defense-team-only unrestricted access becoming standard widens the gap between "model capability" and "public capability" — directly tied to the trust tiers in [[concepts/agent-supply-chain-security]].

## Limitations (explicit)

- Most performance figures are Google's own — independent verification is limited to the AA index and hallucination rate.
- The internal-staff critique (Bloomberg) is denied by Google — both sides recorded.
- confidence **high** (Reuters, VentureBeat, and Google's official announcement cross-checked; the benchmark read keeps the gap explicit).

## 2026-10-09 update — Carbon and Barium checkpoints: Gemini 4 is not "one model"

Business Insider (10/9): Google is testing an internal Gemini 4-family variant **'Carbon'** on its internal coding platform Jetski. Employee assessment: coding performance "feels like Opus 5.5" — internal acknowledgment of Opus 5.5-level coding.

- Internal documents show **Argon, Barium, and Carbon in parallel testing**. Barium-B is reportedly selected as the upcoming public Argon release.
- Whether Carbon is a separate model or an Argon update is unconfirmed. Google declined to comment.
- Connects to this page's "benchmark gap" reading: beyond Argon's self-reported lead vs AA 53, Carbon's "Opus 5.5-level" is also an employee-felt assessment — a claim until independently verified. Frontier-release performance claims must now be read per checkpoint, as a portfolio.
- Details: [[concepts/gemini-4-carbon-testing]]

## Related concepts

- [[patterns/ai-cost-management]] — the $2/$10 intro-price pattern and where the price war stands
- [[patterns/mid-tier-performance-inversion]] — Argon (flagship) vs Sonnet 5.5 (mid-tier) inverted on the independent index
- [[concepts/agent-supply-chain-security]] — unguarded access and trust tiers
- [[concepts/gemini-4-carbon-testing]] — details of the Carbon internal testing

## References

- [Google Gemini 4 Argon launch](raw/articles/2026-10-01-google-gemini-4-argon-launch.md)
- [Google testing Gemini 4 'Carbon' on internal coding platform — Opus 5.5-level assessment (Business Insider original, 10/9)](raw/articles/2026-10-10-gemini-4-carbon-internal-testing.md)
