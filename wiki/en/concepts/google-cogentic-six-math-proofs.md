---
title: "Google Cogentic Produces Six Math Proofs in a Day — Including an Unconditional Subexponential Factoring Bound"
category: concepts
tags: [google, cogentic, gemini-4, math, factoring, multi-agent, lean]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-google-cogentic-six-math-proofs.md"
related:
  - "[[concepts/openai-math-manuscripts-omega-9-4]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agent-scientific-discovery]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# Google Cogentic Produces Six Math Proofs in a Day — Including an Unconditional Subexponential Factoring Bound

## Start here

**Analogy**: Imagine a team of mathematicians writing proofs while another team checks them adversarially, hunting for mistakes, and only the steps that pass get written into a ledger. That process produced six math papers in a single day. One of them sets a new speed limit for factoring large numbers into primes — the problem behind internet encryption (RSA). News of it spread as "did the encryption break?" It did not. The result is not that factoring got faster; it is the first proof of a ceiling: "no matter what, it can be done within this much time." Other mathematicians have not yet checked whether the proofs are correct.

| Term | Meaning |
|------|------|
| **Factoring** | Splitting a large number into a product of primes. RSA encryption relies on this being hard |
| **Subexponential** | A speed between polynomial time and exponential time — slower than polynomial, faster than exponential |
| **Unconditional** | Proven without relying on any unproven assumption |
| **Bound** | A limit such as "it can be done within this much time" |
| **Lean 4** | A tool and language for writing proofs in a form a computer can check |
| **Adversarial verification** | Checking by deliberately trying to find errors |

## One-line definition

Six papers (274 pages total) produced by Cogentic, Google Research's multi-agent math-proof harness, published on November 25, 2026, including an unconditional subexponential-time bound for factoring; each paper states it was "created entirely by Cogentic with no human involvement beyond the initial prompt." This does not break RSA.

## Key points

- **What Cogentic is**: a multi-agent proof-discovery harness from Google Research and DeepMind. Several agents attempt proofs, other agents verify them adversarially, and only verified steps are recorded in a ledger. The base model is Gemini 4. It was introduced in a September 30, 2026 arXiv paper (Cogentic: Multi-Agent Orchestration for Automated Proof Discovery).
- **The six papers (November 25 commit, google-research repository)**: unconditional factoring L_N[1/3, O(1)] (randomized, 54 pages), unconditional deterministic subexponential factoring (59 pages), fixed-characteristic finite-field discrete log in quasi-polynomial time (36 pages), a polynomial-time algorithm for 1/5-approximate Nash equilibrium (41 pages), breaking the square-root barrier for the log-rank conjecture (37 pages), and edge reconstruction of linearly dense simple graphs (47 pages).
- **The factoring bound**: the randomized version claims a zero-error Las Vegas algorithm that completely factors every integer N in expected time L_N[1/3, 105]. The deterministic version claims a subexponential bound around exp(3 (ln N)^{3/4}). Both are claimed to be 'unconditional' results with no unproven assumptions.
- **RSA is not broken**: the bound is subexponential, not polynomial time, and the constant 105 is far larger than the general number field sieve's (GNFS) ~1.923. Scott Aaronson summed it up: "None of them breaks anything." The rumor that 'factoring was solved in polynomial time' is a separate, unconfirmed rumor.
- **Verification status**: at publication time, the repository contained zero Lean 4 formalization files. The README only says "we will release Lean 4 formalizations of all proofs in follow-up submissions." No independent verification by outside mathematicians yet.

## Why it matters (solo-developer lens)

1. **The verification pipeline is the product**: Cogentic's core is not the model but the 'attempt–adversarial verification–ledger' structure. When you hand a hard job to agents, what makes the result trustworthy is a verification device, not a bigger model.
2. **AI math has moved up a level**: alongside OpenAI's nine math manuscripts the same week, AI's math work is shifting from 'producing results' to 'bounds and lower bounds on open problems.' Both cases share one thing: no independent verification yet.
3. **A filter for hype**: a separate rumor about polynomial-time factoring was circulating. Checking the kind of bound (polynomial / subexponential / exponential) and its constants is the first filter for exaggerated AI news.

## Limitations (stated)

- Zero Lean 4 formalization files, so computer verification is not yet possible, and no independent verification by outside mathematicians.
- The constant 105 is far larger than practical algorithms (GNFS ~1.923), so there is no impact on cryptography or practice.
- All six papers are Google Research's published claims, relying on the repository README's description.
- Confidence is medium — Google's official publication cross-checked with expert commentary from Scott Aaronson and others, but with no independent verification at all.

## Related concepts

- [[concepts/openai-math-manuscripts-omega-9-4]] — OpenAI's nine math manuscripts from the same week; the other half of the AI-math-proof week (2026-11-26)
- [[concepts/ai-orchestration]] — patterns for coordinating multiple agents; Cogentic's adversarial-verification and ledger structure (2026-11-26)
- [[concepts/agent-scientific-discovery]] — research-grade agent discovery pipelines; math proof discovery follows the same trend (2026-11-26)
- [[concepts/llm-evaluation]] — evaluation standards for unverified claims; the absence of Lean formalization and outside verification (2026-11-26)

## Sources

- [Google Cogentic Produces Six Math Proofs in a Day — Including an Unconditional Subexponential Factoring Bound (munderdiffl.in, Nov 25)](raw/articles/2026-11-26-google-cogentic-six-math-proofs.md)
