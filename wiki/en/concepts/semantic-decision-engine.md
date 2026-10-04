---
title: "Semantic Decision Engine"
category: concepts
tags: [semantic-decision-engine, jev, typesafeai, non-generative, routing, classification, decisions-api, openai]
created: 2026-09-27
updated: 2026-10-03
sources:
  - "raw/articles/2026-09-27-jevs-semantic-decision-engine.md"
  - "raw/articles/2026-10-02-decision-models-clef-decider-2b.md"
  - "raw/articles/2026-10-03-openai-decisions-api-devday.md"
related:
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: medium
---

# Semantic Decision Engine

## Start here

**Analogy**: instead of asking a novelist to pick a number from 1–10 (and worrying they'll invent 11), you hand the job to a referee who only knows the numbers 1–10.

| Term | Meaning |
|------|---------|
| **Semantic Decision Engine** | A decision-only engine for fixed-option tasks — understands natural language but **never generates text** |
| **Jev** | TypeSafeAI's product built on this principle |

## One-line definition

A narrow, **non-generative** decision engine for triage, classification, and routing — where generation would be a liability, the engine refuses to generate at all.

## The announcement (2026-09-27, TypeSafeAI via PR Newswire)

- **Jev**: a "Semantic Decision Engine" that understands natural language but never generates text — optimized for **fixed-option** triage, classification, and routing
- "Language generation is the wrong interface when code already knows the possible answers" — **when the options are known, generation is the liability**
- **Structural anti-hallucination**: since outputs are confined to preset options, the failure mode "inventing options that don't exist" is removed by construction
- Target: enterprise agent orchestration (route the right request to the right sub-agent)

## Why it matters (solo-developer view)

1. **A new cost axis** ([[patterns/ai-cost-management]]): beyond routing to cheaper models, **"don't generate at all"** — structurally cheaper than any model call
2. **A new reliability pattern**: classifier-vs-generator as an explicit architecture choice — put a decision engine where generation is the failure mode, not the value
3. **The category question**: is this a distinct product category ("decision engines") or a feature of orchestration frameworks? Watch whether Jev stays a product or gets absorbed into router benchmarks like RouterArena

## Limits (stated explicitly)

- **Single vendor announcement** — TypeSafeAI's own claims, no independent verification
- No public benchmark, no pricing, no API detail in the announcement
- The "anti-hallucination" claim is structural (plausible by design) but unverified in deployment

## 2026-10-02 Update — the decision-model wave: Clef + Strands Decider 2B

Five days after Jev's claim, the "no-generation decision engine" is a product wave. Models that return **probabilities over fixed choices** — not free text — keep arriving as open source.

### Cloudflare — Clef + Clef-flash

- Two open-source models optimized for "decisions." They return probabilities over pre-set answers instead of sentences.
- An **RL fine-tuning service on Workers AI** added on top — bundled infrastructure to tune the decision model to your workload.
- Uses: agent routing, guardrails, tool selection — lower latency and cost than a full LLM call.
- Weights under Apache 2.0 (press reports: 27B/9B-parameter-class pair — company test figures).

### Strands (AWS) Labs — Decider 2B

- A 2B-parameter open decision model. Weights and training scripts published, **runnable locally**.
- Returns a confidence-scored choice in tens to hundreds of milliseconds.
- Suggested pattern: **gate with a local decider before the LLM acts** ("is this tool call grounded?") — cost savings + tool-call safety.

### Meaning

- The hybrid agent architecture — peeling always-on classification/routing/approve-reject decisions off expensive LLM calls — is moving into standard practice. This page's "why it matters" #3 (generation LLM + decision engine) is now a product.
- On the guardrail axis, it pairs with [[patterns/agent-safety-runtime]]'s runtime enforcement: the runtime blocks, the decision model chooses.

### Limits (stated explicitly)

- Performance and latency figures are each vendor's **own test results** — independent verification pending. Confidence **low → medium** (two vendors shipping the same direction — the concept's reality is confirmed, the numbers are pending).

## 2026-10-03 Update — OpenAI Decisions API: the big lab ships a decision model

At DevDay (10/3), OpenAI announced the **Decisions API** — Luna-model based, restricted preview.

- Characteristics: fast decision-making, image understanding, multilingual, safety — tuned for **single-choice at extreme speed**, effectively the same concept as this page's Jev.
- The resemblance is so close that TypeSafeAI CEO Diogo Almeida joked about a "clone war" — the textbook pattern of open-source/small vendors leading and big labs following.
- QueryStory demo figures: Jev **$2.94** vs frontier LLM **$372** for the same monitoring task — quantifying the decision model's economics in an era where every action needs watching.
- Meaning: a big-lab (OpenAI) product answers the 10/2 open-source wave (Clef, Decider 2B) — the **decision model hardening into a standard layer**. This page's "Limits" note that "the concept's reality is confirmed" gets one step stronger.
- Also from DevDay: shopping tool expansion, and three security researchers leaving over information-sharing allegations — context only, not this page's direct topic.

## Sources

- [TypeSafeAI launches Jev, a "Semantic Decision Engine" that understands language but never generates](raw/articles/2026-09-27-jevs-semantic-decision-engine.md)
- [OpenAI Decisions API at DevDay (Luna, restricted preview)](raw/articles/2026-10-03-openai-decisions-api-devday.md)