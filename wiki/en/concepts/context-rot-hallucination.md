---
title: "AI Failure Patterns (Context Rot & Hallucination)"
category: concepts
tags: [failure, hallucination, context-rot, error, reliability, grounding]
created: 2026-04-09
updated: 2026-05-13
sources:
  - "raw/notes/2026-04-09-llm-failure-modes.md"
  - "raw/articles/2026-05-13-gsar-typed-grounding-multiagent.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/subagents-delegation]]"
status: active
confidence: high
---

# AI Failure Patterns (Context Rot & Hallucination)

## Easy Read

**Analogy**: **Hallucination** is akin to "fabricating facts with absolute confidence." **Context rot** is more like a notepad growing too long, causing the model's **memory of earlier details to blur** or patch together incorrectly. Rather than dismissing both simply as "AI bugs," it is far more productive to treat them as **design, context, and verification challenges**.

| Term | Explanation |
|------|------|
| **Hallucination** | Generating groundless claims in an **authoritative tone** |
| **Context Rot** | The **decay in concentration** that occurs as conversations or documents grow too long |
| **Tool Hallucination** | Claiming tool calls or files exist when they **do not** |

## One-Line Definition

The primary failure mechanisms of AI agents—spanning Hallucination, Context Rot, Error Cascades, Tool Hallucinations, and Reasoning Traps.

## Core Failure Patterns

### 1. Hallucination

**Definition**: The model generates incorrect information with high confidence.

**2026 Perspective**:
- Acknowledged that zero hallucination is **impossible**.
- Focus has shifted to "uncertainty management."
- Primarily a systemic incentive issue (models are trained to "say something" rather than say "I don't know").
- Transparent exposure of uncertainty is the key to building user trust.

### 2. Context Rot ⭐ Most Critical

**Definition**: Measurable performance degradation of the LLM as the input length increases.

**Chroma Research (2026)**:
- 18 frontier models evaluated → **all** exhibited performance decay.
- Identified as the **primary failure mode of coding agents**.

**The U-Shaped Curve Pattern**:
- Models pay strong attention to the **beginning and end** of the context.
- **The middle section is frequently ignored**.
- In 20-document QA tests, accuracy **dropped by 30%** when the relevant document was positioned in index 5-15.

### 3. Error Cascading

An agent-specific issue:
- An error in a single step propagates to the next.
- Cascades into **exponential performance degradation** across multi-step execution.
- "Once it stumbles, recovery becomes highly difficult."

### 4. Tool Hallucination

**Definition**: The model attempts to call tools that do not exist in the execution environment.

**Shocking Discovery (2026)**:
> "Enhanced reasoning capabilities amplify tool hallucination."

"As models become smarter, their lies also become more sophisticated."

### 5. The Reasoning Trap

The probability of errors increases as the reasoning chain grows longer—the dark side of chain-of-thought prompting.

## The Core Connection: Hallucination and Context Rot

> **"Hallucination is often a downstream symptom of Context Rot."**

- As context decays, uncertainty surges.
- The model fills the gaps with statistically plausible answers.
- **The root cause lies in context management, not the model itself.**

## Agentic-Specific Risks

- Agents can modify files, execute code, and manipulate desktops.
- Hallucinations translate from "incorrect text" to **concrete execution failures**.
- Expanded security threat surfaces (e.g., swallowing untrusted content).

## Mitigation Strategies

### Defending against Context Rot
- **Minimize long context usage**.
- Selectively load only highly relevant information.
- **Isolate contexts using [[patterns/subagents-delegation|Subagents]]**.
- Compress information via active summarization.

### Defending against Hallucination
- Enforce grounded answers using [[concepts/rag|RAG]].
- Restrain output spaces using [[concepts/structured-output|Structured Output]].
- Validate using [[concepts/llm-evaluation|LLM-as-Judge]].
- Encourage the expression of uncertainty.

### Defending against Error Cascades
- Inject **validation gates** at every single step.
- Establish early stopping conditions.
- Design rollback mechanisms.
- Build human-in-the-loop checkpoints.

## Claude Code's Countermeasures

Structure revealed through source code leaks:
- **3-tier memory architecture**: Explicitly targets the prevention of context entropy.
- Automatic context compression.
- Strict token budget management.
- Robust retry logic.

## 2026-05-13 Update — Typed Grounding (GSAR)

[GSAR (arXiv 2604.23366)](https://arxiv.org/abs/2604.23366), Kamelhar/Oracle, 2026-04-25. Classifies hallucinations in multi-agent operational-incident reports into a **4-way claim typology** rather than a binary format to serve as validation gates.

| Claim Type | Meaning | Score Contribution |
|---|---|---|
| **Grounded** | The evidence directly supports the claim. | + (Normal) |
| **Ungrounded** | No supporting evidence, or evidence is irrelevant. | 0 |
| **Contradicted** | Direct contradiction with the evidence. | **− (Asymmetric heavy penalty)** |
| **Complementary** | The evidence only partially supports the claim. | Partial + |

The gate action is a **3-tier decision**: `proceed | regenerate | replan`. Operates under a bounded outer loop with an explicit compute budget.

**FEVER + gold Wikipedia evidence, 4 judge models (gpt-5.4 / sonnet-4-6 / opus-4-7 / gemini-2.5-pro) results**:
- GSAR default 100 proceed vs. binary baseline 35 → **+185%** grounded-output rate.
- Weighted approach: proceed rate 16/50 → 18/50 (+4pp).
- **Ablation**: When contradiction penalties were removed, contradicted claim-containing reports advanced—proving the utility of asymmetric contradiction penalties.

*Wiki Positioning*: The "Hallucination" section of this page historically took the stance that "Zero hallucination is impossible / focus on uncertainty management." GSAR provides the concrete mechanism to **measure uncertainty using typed gates and intercept it right before output**. It forms the pair to the [[journal/2026-05-12|JRH]] finding that "judges are not universally reliable" by showing how to bundle unreliable judges using a 4-way typology and a 4-judge consensus. Fills the *text* cell of the verification-gated harness in [[concepts/harness-engineering#2026-05-13-update-verification-gated-harness-3-domain-mapping|Verification-Gated Harness 3-Domain Mapping]].

## Relationship with [[concepts/harness-engineering|Harness Engineering]]

Understanding failure patterns enables the design of the **Sensor (feedback)** layer of the Harness:
- Monitoring context length.
- Detecting hallucinations.
- Catching error cascades.
- Verifying tool calls.

## References

- [AI Failure Patterns Research](raw/notes/2026-04-09-llm-failure-modes.md)
- [Context Rot (Morph)](https://www.morphllm.com/context-rot)
- [LLM Hallucinations (Lakera)](https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models)
- [Defeating Context Rot (Harness)](https://www.harness.io/blog/defeating-context-rot-mastering-the-flow-of-ai-sessions)
