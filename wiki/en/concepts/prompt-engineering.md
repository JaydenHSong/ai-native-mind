---
title: "Prompt Engineering"
category: concepts
tags: [prompt-engineering, llm, basics]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# Prompt Engineering

## Easy Read

**Analogy**: Focuses on how to structure a **single query** to extract the best possible response. It is a **linguistic craftsmanship** technique involving role assignment, few-shot examples, and formatting instructions. [[concepts/context-engineering|Context Engineering]] extends beyond this to architect the **entire tool, memory, and rule substrate**.

| Term | Explanation |
|------|------|
| **Prompt** | The **input text** transmitted to the model |
| **Few-Shot** | Providing a handful of examples to **demonstrate** desired patterns |
| **System vs. User** | Global operational rules vs. the specific query **body** |

## One-Line Definition

The engineering skill of effectively instructing LLMs to obtain desired output characteristics. The **1st Generation** of AI Engineering (2022-2024).

## Core Concepts

### "What to Ask" (Single-Input Optimization)
Optimizing a single runtime input text to extract a single high-quality model response.

### Primary Techniques

| Technique | Description |
|------|------|
| **Zero-Shot** | Directly instructing the model without providing example inputs. |
| **Few-Shot** | Providing a few illustrative examples to teach by example. |
| **Chain-of-Thought (CoT)** | Guiding reasoning pathways with cues like "Let's think step by step." |
| **Role-Playing** | Setting explicit personas such as "You are a Senior Systems Architect." |
| **System Prompt** | Establishing global foundational rules applied across the entire session. |

### Limitations

- **Bounded to Single Conversational Turns**: Structurally insufficient for complex, multi-step agent actions.
- **No Inherent State/Context Management**: State resets completely across distinct sessions.
- **No Programmatic Tool Usage**: Restricted exclusively to raw text generation.
- To resolve these structural limitations, [[concepts/context-engineering|Context Engineering]] emerged as the next evolution.

## Positioning in the Three Generations

```
Prompt Engineering  ← This Level
  → Context Engineering
    → Harness Engineering
```

Prompt Engineering has not disappeared; it is actively **nested within** [[concepts/harness-engineering|Harness Engineering]]. Drafting optimal prompts remains the foundation of architecting a reliable Harness.

## Related Concepts

- [[concepts/context-engineering]] — The 2nd Generation Evolution
- [[concepts/harness-engineering]] — The 3rd Generation Evolution

## Chapter Clear Guide

- **Chapter**: Chapter 2 (Foundational Combat)
- **Quest**: Select a recent AI request and decompose it into its prompt components (role, instruction, output schema).
- **Clear Condition**: Articulate at least 2 distinct software engineering limitations that prompt engineering alone cannot resolve.
- **Reward (Deliverable)**: 1 Draft "Robust Prompting Checklist".
- **Next Quest**: [[concepts/context-engineering]] $\to$ [[concepts/context-vs-prompt-practice]]

## References

- [Engineering Paradigm Research Notes](raw/notes/2026-04-09-engineering-paradigms-research.md)
