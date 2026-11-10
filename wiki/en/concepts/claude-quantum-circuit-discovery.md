---
title: "Claude Mythos 5's Quantum Circuit Design — Beating Prior Bests on 7 of 8 Tasks"
category: concepts
tags: [anthropic, claude-mythos-5, quantum-computing, scientific-discovery, evaluator-loop, stem-fellows]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-claude-mythos5-quantum-circuits.md"
related:
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/claude-art-discovery-controversy]]"
status: draft
confidence: high
---

# Claude Mythos 5's Quantum Circuit Design — Beating Prior Bests on 7 of 8 Tasks

## Start here

**Analogy**: quantum-circuit design is an "electrical wiring optimization" problem with hundreds of thousands of gates. Working with an automated judge for 53 hours, Claude Mythos 5 found designs that do the same job with up to 17x fewer wires than the best human records.

| Term | Meaning |
|------|------|
| **Toffoli gate** | A key quantum-circuit gate — its count is the core cost (circuit size) metric |
| **Generator–judge loop** | A loop where a generator agent designs and an automated evaluator scores (score = Toffoli count × peak qubit count) |
| **Lean formal proof** | Formal verification with the Lean proof assistant — mathematical proof on top of simulation |

## One-line definition

A quantified autonomous-scientific-discovery case: an autonomous agent (Claude Mythos 5) designed and refined quantum circuits through a generator–judge evaluator loop, **beating the best published human records on 7 of 8 tasks** — a rare case where "discovery" is measured in gate counts.

## Key points

- **Experiment** (Anthropic, announced 2026-10-16): a 53-hour closed loop over 8 quantum-circuit primitives (chemistry, optimization, simulation, number theory, numerical computing). Led by Andi Gu (STEM Fellows), with the Harvard Quantum Initiative and QuEra Computing.
- **Result**: **7 of 8 beat the best published records** — measured in Toffoli gate counts and qubit counts.
- **Headline numbers**:
  - Elliptic-curve modular inversion: Toffoli gates **~17x fewer (70M → 4M)**, qubits +12% (838 → 935) — the gate-vs-qubit tradeoff recorded as numbers.
  - Reed-Solomon decoder (for Decoded Quantum Interferometry): **~12x fewer gates** than Google's prior record, 403M sample decodings.
- **Method**: generator–judge loop with an automated evaluator (score = Toffoli count × peak qubit count). Validated by simulation plus Lean formal proofs.
- **Scope note**: **resource estimates only** — not run on real hardware, and not an attack on deployed cryptography.
- **Preprint**: 2026-10-15. **Anthropic's own numbers** — independent verification pending.

## Why it matters (solo-developer lens)

1. **A quantified case of "AI discovered X"**: ART (the enzyme discovery, September) was a qualitative "it existed / it didn't" finding; this is measured in **17x and 12x** — the evaluator-loop's finished form, where a discovery pipeline's output is evaluated as quantitative metrics.
2. **The evaluator's design is the key**: the score function (Toffoli count × peak qubit count) steered the discovery — on this page's framing, "who designs the evaluator decides the result" (the "evaluation asymmetry" axis of [[patterns/agent-scientific-discovery]]).
3. **A model for stating scope**: "resource estimates only, not a crypto attack" was stated in the announcement itself — an applied case of the pattern of marking claim strength in stages.

## Limits (stated explicitly)

- **Anthropic's own reported numbers** — independent reproduction and verification pending (the same verification task as ART's provenance dispute, [[concepts/claude-art-discovery-controversy]]).
- Not run on real hardware. 1 of 8 tasks failed to beat the prior best — the failed task is undisclosed.

## Related concepts

- [[patterns/agent-scientific-discovery]] — the fifth application case of the discovery pipeline: the quantum-circuit edition of literature grounding → in-silico hypothesis → validation.
- [[concepts/claude-art-discovery-controversy]] — the same "Anthropic discovery claim" verification task: provenance for ART, independent reproduction here.
- [[patterns/llm-evaluation]] — the structure where the evaluator loop's design (the score function) determines the discovery.

## Sources

- [Claude Mythos 5 beats prior bests on 7 of 8 quantum circuit tasks (Particle News, Crypto Briefing, Anthropic, 10/16)](raw/articles/2026-10-17-claude-mythos5-quantum-circuits.md)
