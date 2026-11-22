---
title: "Riemann Hypothesis Proof Claimed — 6 Weeks with Claude, Lean and Mathlib Verify Independently"
category: concepts
tags: [anthropic, claude, mathematics, formal-verification, lean, riemann, research]
created: 2026-11-22
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-22-riemann-hypothesis-proof-claude-lean-verification.md"
related:
  - "[[concepts/openai-ai-science-three-discoveries]]"
  - "[[concepts/deepmind-alphaproof-code-signal]]"
  - "[[concepts/google-antigravity-teamwork]]"
status: draft
confidence: medium
---

# Riemann Hypothesis Proof Claimed — 6 Weeks with Claude, Lean and Mathlib Verify Independently

## Start here

**Analogy**: a mathematician worked with an AI for six weeks on the most famous unsolved problem in mathematics — a puzzle posed in 1859 that nobody has cracked in 167 years — and announced a proof. The proof was released not as a paper a person can read but as about 17.4 million lines of code that a computer can check. A math-checking program confirmed "no errors." Even so, it cannot yet be called solved: the prover himself says he does not fully understand parts of it, and the institute that offers the $1 million prize still lists the problem as unsolved.

| Term | Meaning |
|------|------|
| **Riemann hypothesis** | A claim from 1859 about how prime numbers (2, 3, 5, 7, ...) are distributed — the most famous unsolved problem in mathematics |
| **Lean** | A language for writing math proofs as code a computer can check |
| **Mathlib** | A library of mathematics built in Lean — a kind of math library |
| **Formal verification** | Having a computer check a proof line by line to confirm it is logically correct |
| **Clay Institute** | The math institute that named the Riemann hypothesis one of its seven Millennium Problems, with a $1 million prize |

## One-line definition

Anthropic mathematician Levent Alpöge announced on November 20, 2026 that he had found a proof of the Riemann hypothesis — including the generalized Riemann hypothesis (GRH) — after about six weeks of work with Claude. The proof was released only as about 17.4 million lines of Lean code, not as a paper, and on November 21 the Lean FRO and the Mathlib Initiative independently certified that both the statement and the proof are correct. The Clay Mathematics Institute still lists the problem as unsolved.

## Key points

- **The claim**: Alpöge announced it on November 20 on his personal website, with a four-page outline. He claims to have solved not only the Riemann hypothesis but also the generalized Riemann hypothesis (GRH). The work ran from October 6 to November 16, about six weeks.
- **Scale**: about 17.4 million lines of Lean code across 175,187 files — about 7.6 times the size of all of Mathlib. 47% of it sits in folders about abelian varieties.
- **Verification**: on November 21 the Lean FRO and the Mathlib Initiative issued a joint statement certifying that "both the statement and the proof are correct." Independent researchers including MIT's Andrew Sutherland recompiled it themselves — all 175,187 modules with zero errors, using only three standard axioms. A comparator run also checked for symbol redefinitions and kernel exploits.
- **Limits**: Alpöge himself admits he does not fully understand parts of the proof. The Clay Institute requires at least two years of verification after publication before judging the $1 million prize, and keeps the problem listed as unsolved. A separate human-only proof claim (Alessandro Masullo) appeared the same day.
- **Timing**: the announcement came the day after Anthropic's listing (November 19, $81.3B raised), which drew questions about the timing. Anthropic has made no official comment.

## Why it matters (solo-developer lens)

1. **Formal verification changes what "proof" means**: a proof no human has read was verified by a machine within hours. It follows [[concepts/deepmind-alphaproof-code-signal]] (Signal protocol verification, 6.5 million lines of Lean) and [[concepts/google-antigravity-teamwork]] (formalizing the Weil conjectures, 1.8 million lines of Lean) — a new chapter for mathematics in the AI era. "Understanding" and "verifying" are splitting apart.
2. **Agents now work at a six-week, 17-million-line scale**: on the same line as the AI science discoveries in [[concepts/openai-ai-science-three-discoveries]] — models have moved past "producing answers" to "mass-producing verifiable artifacts."
3. **Consensus moves slower than verification**: machine certification is done, yet mathematical consensus is not. The bottleneck is now on the receiving side — the verification and trust structures that accept AI-produced work — not on the production side.

## Limits (stated explicitly)

- This is "claimed and machine-verified," not "proven" in the consensus sense. The Clay Institute still lists the problem as unsolved, and prize judging needs at least two years of verification after publication.
- The certified scope of the GRH claim, and how different reports describe the GRH certification status, still need separate confirmation — reports on the same event describe it differently.
- Alpöge himself admits he does not fully understand parts of the proof — what "verification without understanding" means is an open discussion in mathematics.
- confidence is medium — Lean and Mathlib independently certified it, but there is no mathematical consensus yet, and the prover's own limits of understanding are stated explicitly.

## Related concepts

- [[concepts/openai-ai-science-three-discoveries]] — OpenAI's three AI science discoveries, the earlier flow of AI findings in mathematics, computer science, and physics (2026-10-27)
- [[concepts/deepmind-alphaproof-code-signal]] — DeepMind AlphaProof Code, machine-level verification of the Signal crypto protocol, 6.5 million lines of Lean (2026-11-10)
- [[concepts/google-antigravity-teamwork]] — Google Antigravity /teamwork, an agent team's formalization of the Weil conjectures, 1.8 million lines of Lean (2026-11-13)

## Sources

- [Claude-assisted Riemann hypothesis proof passes independent Lean and Mathlib verification — mathematical consensus still pending (Scientific American, 11-21)](raw/articles/2026-11-22-riemann-hypothesis-proof-claude-lean-verification.md)
