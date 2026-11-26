---
title: "OpenAI's Nine Math Manuscripts — Matrix Multiplication Exponent 9/4 Lower Bound, Smale Problem 9 and Hirsch Conjecture Disproof Claims"
category: concepts
tags: [openai, math, matrix-multiplication, lean, complexity, hirsch, smale]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-openai-math-manuscripts-omega-9-4.md"
related:
  - "[[concepts/google-cogentic-six-math-proofs]]"
  - "[[concepts/agent-scientific-discovery]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# OpenAI's Nine Math Manuscripts — Matrix Multiplication Exponent 9/4 Lower Bound, Smale Problem 9 and Hirsch Conjecture Disproof Claims

## Start here

**Analogy**: Finding the fastest way to multiply two matrices has been an open problem since 1969. The hope was that the cost grows only quadratically (exponent 2). Manuscripts produced by OpenAI's AI now claim "no matter how clever you are, you can only get down to 2.25 (9/4). 2 is impossible." In other words, they draw a lower bound — "the answer stops here." But these are raw research outputs from an AI, not polished papers, and no outside expert has checked them yet.

| Term | Meaning |
|------|------|
| **Matrix multiplication exponent ω (omega)** | The power to which n grows for multiplying n×n matrices. Smaller means faster |
| **Lower bound** | A minimum limit: no method can do better than this |
| **Upper bound** | An achievable limit: this much is known to be possible |
| **Strongly polynomial** | An algorithm whose step count depends only on the number of inputs, not on how large the numbers are |
| **Lean** | A tool and language for writing proofs in a form a computer can check |
| **Galactic** | A term for algorithms whose constants are astronomically large, so they are unusable in practice |

## One-line definition

Nine math manuscripts posted by OpenAI to the openai/math repository on the evening of November 24, 2026, whose central claim is a lower bound showing the matrix multiplication exponent ω is exactly 9/4 (=2.25), plus a strongly polynomial linear programming algorithm and a disproof of the polynomial Hirsch conjecture. All are unverified claims.

## Key points

- **Scale**: 9 manuscripts by history.md, in two families — #379 Euclidean tensor geometry (7 papers) and #380 strongly polynomial linear programming (2 papers). According to the repository description, the manuscripts are "raw research data" produced by "an unnamed OpenAI internal model," not polished academic papers.
- **Matrix multiplication exponent ω=9/4**: the 111-page preprint "The matrix multiplication exponent is nine fourths" claims the optimal exponent for n×n matrix multiplication is 9/4 over every field. The upper bound (9/4 is achievable) already appeared in an October 2 manuscript; what's new is the lower bound — a formal arithmetic circuit needs at least ⌈n^{9/4}/2⌉ multiplication and division gates. If the claim holds, ω=2, hoped for over decades, is impossible.
- **Other claims in the same bundle**: a strongly polynomial linear programming algorithm (presented as an answer to Smale's 9th problem) and a disproof of the polynomial Hirsch conjecture via a superpolynomial graph diameter for simple polytopes.
- **Verification status**: Lean formalization exists only in part. As of November 25, no review by a named expert had been confirmed. OpenAI's Sebastien Bubeck called it shocking because "nothing was known about the lower bound," and Scott Aaronson wrote that the bigger shock is "that an AI proved a lower bound of the form ω>2 at all."
- **Scope caution**: the claims are limited to the formal arithmetic circuit model (a model that counts symbolic operations), not lower bounds for Word RAM or bit-level algorithms. The constants are astronomically large, so these are not practical algorithms ('galactic'). Outside authors have re-proven half of the upper bound in their own way (Shpilka ECCC, Pass arXiv).

## Why it matters (solo-developer lens)

1. **AI math has moved up a level**: following the November 23 VP≠VNP manuscript, AI's math work is shifting from 'results a model produced' to 'lower bounds on open problems.' It should be read alongside Google's Cogentic the same week.
2. **Separate 'claim' from 'proof'**: the manuscripts are raw research data. Checking first whether a lower bound holds and which model (arithmetic circuits) it applies to is the habit that filters exaggerated headlines.
3. **The rarity of lower bounds**: lower bounds ("this cannot be done") are far harder than upper bounds ("here is how to do it"). An AI producing a lower bound signals a change in how research is done — if verification follows.

## Limitations (stated)

- All are unverified claims; as of November 25, no review by a named expert had been confirmed.
- Lean formalization exists only in part.
- The claims are limited to the formal arithmetic circuit model and do not apply to Word RAM or bit-level algorithms.
- The constants are astronomically large, so these are not practical algorithms.
- Confidence is medium — the OpenAI repository source cross-checked with commentary from Bubeck and Aaronson, but with no independent verification.

## Related concepts

- [[concepts/google-cogentic-six-math-proofs]] — Google's six math proofs from the same week; the other half of the AI-math-proof week (2026-11-26)
- [[concepts/agent-scientific-discovery]] — research-grade agent discovery pipelines; AI's approach to open problems (2026-11-26)
- [[concepts/llm-evaluation]] — evaluation standards for unverified claims; the absence of Lean formalization and expert review (2026-11-26)

## Sources

- [OpenAI's Nine Math Manuscripts — Matrix Multiplication Exponent 9/4 Lower Bound, Smale Problem 9 and Hirsch Conjecture Disproof Claims (dev.to, Nov 24)](raw/articles/2026-11-26-openai-math-manuscripts-omega-9-4.md)
