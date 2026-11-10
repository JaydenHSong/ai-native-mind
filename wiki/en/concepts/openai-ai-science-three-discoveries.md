---
title: "OpenAI's Three AI Science Discoveries in Math, Computer Science, and Physics"
category: concepts
tags: [openai, ai-science, mathematics, complexity-theory, physics, lean, verification]
created: 2026-10-27
updated: 2026-10-27
sources:
  - "raw/articles/2026-10-27-openai-ai-science-three-discoveries.md"
related:
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/claude-quantum-circuit-discovery]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: high
---

# OpenAI's Three AI Science Discoveries in Math, Computer Science, and Physics

## TL;DR

On 2026-10-26 OpenAI announced three results produced by its internal models: a proof of the local smoothing conjecture in every dimension, a disproof of the Exponential Time Hypothesis, and an existence proof for certain four-dimensional quantum field theories including quantum chromodynamics and pure Yang-Mills theory. OpenAI calls the AI-written manuscripts "raw research data," not finished science. None of the three claims has been peer-reviewed or independently verified, and each field follows a different release strategy.

## Key facts

- **Mathematics**: a proof of the local smoothing conjecture in every dimension (proposed 1991 by Christopher Sogge; the two-dimensional case was proved in 2019 by Guth, Wang, and Zhang), built on a novel auxiliary partial differential equation, claimed to also resolve the Kakeya and Stein restriction conjectures. AI output dated 2026-10-18, Lean formalization 2026-10-19. The mathematics output was published outright, leaving researchers to organize their own explanatory work.
- **Computer science**: a disproof of the Exponential Time Hypothesis (ETH) — the claim that 3-SAT cannot be solved in subexponential time, proposed by Impagliazzo, Paturi, and Zane and used as a premise in hundreds of conditional-hardness papers. AI output 2026-10-16, Lean formalization 2026-10-17. An external group led by Russell Impagliazzo, Ramamohan Paturi (UC San Diego), and Ryan Williams (MIT) will examine it, with the AI output published immediately.
- **Physics**: a mathematically rigorous existence proof for certain interacting quantum field theories in four dimensions, including quantum chromodynamics and pure Yang-Mills theory, plus a claimed unified completion of the Standard Model. Yang-Mills proof dated 2026-09-09, QCD 2026-09-18, Yang-Mills Lean formalization 2026-10-16 (no QCD formalization mentioned). A group led by Nobel laureate David Gross will shepherd the work, and at the group's request the AI artifacts are withheld so researchers can write the work up themselves.
- **Release experiment**: the three shepherds recommended three different approaches and OpenAI followed each. Participants are unpaid volunteers with no NDAs, and OpenAI says it does not seek academic credit for the discoveries. An earlier mathematics output release on 2026-10-06 was the precedent.

## Why it matters

1. **Verification is the product**: as AI "produces" results, value shifts from generation speed to verification structure — Lean formalization plus external expert groups.
2. **Domain-specific trust grammars**: mathematics publishes outright, computer science collaborates, physics withholds — the same technology needs different release norms per field.
3. **Agent scientific discovery reaches theory**: the wiki's agent-scientific-discovery pipeline extends from labs and benchmarks into pure theory and proof.

## Limitations (explicit)

- All three claims are unverified and unreviewed; OpenAI's announcement and secondary coverage are the main sources.
- Disproving ETH would not settle P vs NP or make everyday software faster.
- Pure Yang-Mills existence alone does not meet the Clay Millennium Prize's mass-gap requirement, so it is not a prize result.
- Whether the QCD proof has a Lean formalization was not stated in the announcement.
