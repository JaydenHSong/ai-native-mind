---
title: "Google Gemini Decisions API — gemini-decision-1, a Single-Forward-Pass Judgment Model (Nov 11)"
category: concepts
tags: [google, gemini, gemini-decision-1, decisions-api, agent-routing, evaluation]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-google-gemini-decisions-api.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/tool-use]]"
status: draft
confidence: high
---

# Google Gemini Decisions API — gemini-decision-1, a Single-Forward-Pass Judgment Model (Nov 11)

## Start here

**Analogy**: until now, every judgment call meant asking the model to write an essay. Now there is a dedicated grader that just circles answers on a multiple-choice sheet: "use this tool or not" — 1,000 questions graded in one pass, returning only probabilities. Faster and cheaper than the essay.

| Term | Meaning |
|------|------|
| **Forward pass** | One computation pass from input to output — a generative model repeats it per token, a decision model finishes in one |
| **Rubric** | A scoring criteria sheet — a question asking "how many points is this answer worth against criteria 1–5" |
| **ECE** | Expected Calibration Error — measures whether a model that says "90% confident" is actually right 90% of the time |
| **Routing** | Deciding, based on a query or task, which model or tool should handle it |

## One-line definition

On 2026-11-11, Google introduced the Decisions API, powered by `gemini-decision-1`, a dedicated model that scores candidate options in a single forward pass without generating text. It evaluates up to 1,000 yes/no, choice or rubric questions at once, at $0.10 per million input tokens with zero output charge. It turns agent routing, verification and policy gates into probability-based calls instead of LLM generation.

## Key facts

- **The model**: `gemini-decision-1` is a non-generative model that evaluates up to 1,000 yes/no, choice (2–255 options) or rubric questions against one shared multimodal input (text, image, audio, video, PDF) in a single forward pass, returning probabilities and confidence. Output tokens: zero.
- **Performance and price**: median model compute 50–100 ms, end-to-end latency 150–250 ms, nearly flat from 1 to 100 questions. Price is $0.10 per million input tokens, $0 for output. Google claims it is about 5× cheaper than Gemini 3.5 Flash-Lite.
- **Uses**: tool selection, policy checks, model routing, context grading. Gemini Notebook uses it as a real-time router and says it cut latency on general queries by up to 40%. It also serves as a safety layer for MCP tools in Search.
- **Benchmarks — first-party vs independent index disagree**: on Google's own benchmark, JevBench public split, it scores 92.2%, ahead of GPT-6 Luna (90.9%) and Jev 1.14 (90.0%), with the lowest calibration error (top-1 ECE 0.0250). On the independent Artificial Analysis Decision Index v2.1, however, it ranks 9th of 18 (65.98), behind Drex Max v1.1 (72.62). The same "decision" ability ranks differently depending on the measurement frame.
- **Availability**: available on the Gemini API (v1beta, `/v1beta/decisions`); Vertex AI is "coming soon." A Google Cloud launch is still undecided (near term).

## Why it matters (solo-developer view)

1. **A new atom for agent architecture — judgment**: routing, verification and policy checks used to be delegated to an expensive generative model via prompts. A dedicated model that scores 1,000 questions in 150–250 ms for $0.10/MTok changes harness cost structure. The two-tier "expensive planner + cheap executor" gains a third layer: a nearly free judge.
2. **Probabilities become the interface**: the output is not tokens but probabilities and confidence. That makes it possible to branch on thresholds and hand off to a human when confidence is low — a numeric HITL gate. It is the natural verification engine for a Plan-Then-Verify pattern.
3. **A textbook case in reading benchmarks**: first-party #1 vs independent #9 shows that "decision" ability is not a single number — it depends on which questions and which distribution are measured. The only valid comparison is to measure it on your own harness's actual question distribution.

## Limitations (stated)

- Most figures are Google's first-party claims with no independent verification. The JevBench score is Google's own benchmark; the independent index ranks it 9th.
- The context limit is disputed across secondary reports (16K vs 256K tokens) and needs confirmation against the original post.
- Vertex AI and Google Cloud launches are undecided, so enterprise adoption is limited to the Gemini API (v1beta) path for now.

## Related concepts

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' internal testing, the Gemini 4 checkpoint line (2026-10-10)
- [[concepts/llm-evaluation]] — A methodology for systematically testing LLM output (evals)
- [[concepts/ai-orchestration]] — Six patterns for coordinating multiple AI agents
- [[concepts/tool-use]] — The mechanism by which LLMs call external functions and APIs

## Sources

- [Gemini Decisions API source](raw/articles/2026-11-12-google-gemini-decisions-api.md)
