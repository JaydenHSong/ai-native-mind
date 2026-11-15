---
title: "Google's Antigravity /teamwork Results — Agent Teams Formalizing Math Conjectures and Rewriting Software (Nov 13)"
category: concepts
tags: [google, antigravity, teamwork, multi-agent, lean, formal-verification]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-google-antigravity-teamwork.md"
related:
  - "[[concepts/gemini-4-carbon-launch]]"
  - "[[concepts/gemini-4-hydrogen]]"
  - "[[concepts/anthropic-worse-together-multi-agent]]"
status: draft
confidence: medium
---

# Google's Antigravity /teamwork Results — Agent Teams Formalizing Math Conjectures and Rewriting Software (Nov 13)

## Start here

**Analogy**: a team of specialists dividing up a hard math problem, with a checker (the Lean proof checker) verifying every answer one by one. Because a machine judges each answer right or wrong immediately, agents that go down a wrong path can turn back quickly.

| Term | Meaning |
|------|------|
| **/teamwork** | The multi-agent feature inside Antigravity. A team of specialist agents splits up long work |
| **Lean 4** | A tool for writing math proofs in a language a computer can check. The machine judges whether a proof is correct |
| **Formalization** | Translating a human-written proof into a machine language like Lean so a computer can verify it |
| **Weil conjectures** | A landmark set of math results about counting solutions of polynomial equations over finite fields. Proved by Pierre Deligne in 1974 |
| **Falsifier** | An automatic checker that finds what is wrong in an agent's answer (a proof checker, a test suite, and so on) |
| **Subagent** | A subordinate agent handling a detail inside a larger assignment |

## One-line definition

On 2026-11-13, Google Research published results from /teamwork, the multi-agent feature in Antigravity. Teams of specialist agents built on Gemini 4 models worked with human experts on open problems in mathematics, chemistry, and systems software. The results include a machine-checked formalization of the Weil conjectures, a formalization of the Courtade–Kumar conjecture proof, and Rust rewrites of a kernel and a codec.

## Key facts

- **The approach**: /teamwork pairs teams of specialist subagents with automated "falsifiers" such as the Lean 4 proof checker, existing test suites, and simulators. Workflows are expressed as declarative self-improving natural-language patterns, and each prompt is dynamically routed to the best-suited pattern. Gemini 4 Argon, Carbon, and Hydrogen are the underlying models.
- **Mathematics**: /teamwork-LEAP is said to have fully autonomously produced an end-to-end, machine-checked formalization of the Weil conjectures (the landmark results on counting solutions of polynomial equations over finite fields, culminating in Pierre Deligne's 1974 proof). The formalization spans about 1.8 million lines of Lean, produced across 28,800 subagent invocations. A full proof of the 2013 Courtade–Kumar conjecture was formalized in Lean 4, producing about 50 million lines (in collaboration with human mathematicians). Also included: the first formalization of a recent proof of Hilbert's tenth problem over general rings of integers (about 919,000 lines), the first formalization of the Birkhoff conjecture (open since 1927), and a gap found and fixed in a recently released proof of the 3D Bochner–Riesz conjecture.
- **Science and software**: 95% top-1 and 100% top-3 accuracy on molecular structure identification from NMR data. A memory-safe Rust rewrite of the Zircon microkernel added about 800,000 lines. A Rust port of libgav1 is said to run 20–30% faster than the C++ original. A 9x9 Go engine was trained from scratch, and fleet-wide memory savings at Google were reported.
- **Availability**: external scientists and developers can use Gemini 4 models with /teamwork and /boost in Antigravity today. Applications are open for 10,000 academic researchers to get six months of free access to the highest usage tier. Updates to the formal-proof pattern were announced as upcoming.

## Why it matters (solo-developer view)

1. **Work with a checker can be handed to agents**: where a machine judges right and wrong — a proof checker, a test suite — agent teams can run tens of thousands of attempts and verify their own way forward. If I set up a checker first in my own work, I can raise an agent's autonomy.
2. **The unit of long-horizon work is growing**: finishing one problem across 28,800 subagent invocations points beyond day-long tasks toward "multi-week research" handed to an agent team.
3. **The success condition for multi-agent work is visible**: where Anthropic's 'Worse Together' showed collaboration failing, /teamwork is the contrasting case of collaboration succeeding when there is a falsifier (a checker). When designing a harness, whether a checker exists decides success or failure.

## Limitations (stated)

- An independent check (sysnote) says the numbers need care. Of the Courtade–Kumar 50 million lines, only about 238,690 lines are readable proof code; the other 99.5% is generated certificate data that the Lean kernel checks.
- The Weil formalization has no published repository, paper, or statement file, so it cannot be checked externally, and Axiom already published its own Weil formalization on Nov 6 under Apache 2.0.
- Most results were produced in close collaboration with human experts, and they are Google's own account, not independently audited figures.
- Even if the Weil formalization is "fully autonomous", it is a narrow domain where a proof checker gives unambiguous pass/fail feedback, far from open-ended real-world tasks.

## Related concepts

- [[concepts/gemini-4-carbon-launch]] — Gemini 4 Carbon, the strongest member among /teamwork's underlying models (2026-11-10)
- [[concepts/gemini-4-hydrogen]] — Gemini 4 Hydrogen, the execution-oriented member with a flat rate across a 1M context (2026-11-12)
- [[concepts/anthropic-worse-together-multi-agent]] — Anthropic's 'Worse Together', the study of multi-agent collaboration limits, as a contrast (2026-11-11)

## Sources

- [Google Antigravity /teamwork results — source](raw/articles/2026-11-15-google-antigravity-teamwork.md)