---
title: "Google Gemini 4 Neon — Carbon-Level Performance, 2x Speed, $3/$15"
category: concepts
tags: [google, gemini, gemini-4-neon, model-release]
created: 2026-11-19
updated: 2026-11-20
sources:
  - "raw/articles/2026-11-19-google-gemini-4-neon.md"
  - "raw/articles/2026-11-20-gemini-4-neon-benchmarks-followup.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/google-antigravity-teamwork]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# Google Gemini 4 Neon — Carbon-Level Performance, 2x Speed, $3/$15

## Start here

**Analogy**: Google's new AI model Neon is "as smart as the heavy older sibling (Carbon), but finishes work twice as fast and costs less." It sits in the middle, between the fast younger sibling (Hydrogen) and the heavyweight. One catch: the price advantage only starts in December — through the end of November, the older sibling is on sale and actually cheaper.

| Term | Meaning |
|------|------|
| **Thinking level** | How deeply the model thinks before answering — low, medium, high, xhigh; higher is smarter but slower and pricier |
| **Intelligence Index** | The overall intelligence score given by Artificial Analysis, an independent benchmarking firm |
| **Coding Agent Index** | A measure of skill as a coding agent |
| **Context** | How much text a model can read at once — 1 million tokens is dozens of long books |
| **Cached input** | A discounted rate for reusing text the model has already read |

## One-line definition

**Gemini 4 Neon**, released by Google on November 18, 2026, is the fourth Gemini 4 model in about seven weeks (after Argon, Carbon, and Hydrogen) — the mid-tier model between the fast Hydrogen and the heavyweight Carbon. Adapted from Carbon, it costs **$3** per million input tokens and **$15** per million output tokens, with a **1-million-token** context window. Google's claim: Carbon-level intelligence at about twice the speed and a lower cost per task.

## Key points

- **Pricing**: $3 input / $15 output per million tokens, $0.15 cached input (a 95% discount). 1-million-token context; text, image, audio, video, and PDF input; text-only output. Knowledge cutoff March 2026. Four thinking levels (low/medium/high/xhigh).
- **Independent scores (Artificial Analysis)**: Intelligence Index 61 at xhigh, 3rd overall (behind Claude Fable 5.2 at 65 and GPT-6.2 Astra at 62); 60 at the default high setting, tied with Carbon. Coding Agent Index 59 (via the Antigravity CLI, ahead of Opus 5.5 and Fable 5.2 at 58). Vals Index 70.9%, 2nd of 42 models (just ahead of Carbon).
- **Speed and cost**: output speed of about 110 tokens per second, roughly twice Carbon's ~57. Average task time about 21 minutes vs about 36 for Carbon. Google claims cost per task is 32% lower than Carbon at the default high setting.
- **The price catch — December 1 is the turning point**: Carbon is $2/$10 on an introductory rate through November 30, rising to $4/$20 on December 1. Neon only becomes 25% cheaper than Carbon per token from December 1. During November, Neon is actually more expensive than Carbon's introductory rate.
- **Google's own benchmark claims**: Terminal-Bench 4.1 at 65.2%, FrontierCode 2.0 at 46.2% (default high), Terminal-Bench Science 70.5%, RiemannBench 84.0%, HLE-Diamond 71.3% — best in class. AutoBaxBench hard tier 76% (state of the art), WebExploitBench v1.2 at 51.26% (state of the art). Most of these are figures Google selected and presented; there is no independent reproduction.
- **Use and rollout**: complex coding, analysis, and enterprise work; long-running agent workflows. Google also presents a setup where Neon acts as a fast, high-judgment orchestrator directing parallel Hydrogen subagents in Antigravity. Available in the Gemini API (AI Studio), Gemini for business, and for AI Pro and Ultra subscribers in Antigravity and the Gemini app.
- **Caution**: scores vary widely by harness. The same model scored 12.8% on a coding test with a standard harness and 39.0% inside Google's own Antigravity environment (per Google's citation). "Which harness was used" matters as much as the model score.

## Independent benchmark follow-up (2026-11-19)

- **CAAC Go real-world agent test** (150 customer messages × 5 models, two independent AI judges): Neon scored 135/150, the best ever, statistically tied with Claude Opus 5.5 (133, p=0.72) and ahead of Gemini 4 Carbon (125, p=0.02).
- **More Artificial Analysis scores**: Intelligence Index 61, 3rd in the world (behind Claude Fable 5.2 at 65 and GPT-6.2 Astra at 62). Coding Agent Index 58.6, 1st; Vending Bench 2nd, Zapier Automation Bench 1st, Pareto Frontier 2nd.
- **The downsides**: average response time of 9.3 seconds (more than twice Opus 5.5's), cost of $28.80 per 1,000 requests (vs Opus 5.5's $21.65). Despite the launch claim of "fast and cheap," Neon trails Opus 5.5 on response speed and per-request cost.
- **Re-checking the speed claim — '3x faster' vs about 40% in independent measurement**: Google's claim of '3x faster than Carbon' contrasts with independent measurements of about 40% faster on task time (21 vs 36 minutes). This page's "about 110 tokens per second, roughly twice Carbon's ~57" is a token-speed figure; "3x" is a separate Google claim; "40%" is a task-time figure — different measures give different numbers. See the Limits section below.
- **Price re-check**: Neon costs $3 input / $15 output per million tokens. Carbon is $2/$10 on an introductory rate through November 30, so Neon is currently more expensive per token. Neon only becomes 25% cheaper than Carbon per token after Carbon rises to $4/$20 on December 1 — consistent with this page's December 1 turning point.

## Why it matters (solo-developer lens)

1. **Model choice has become a price war**: within 72 hours, OpenAI cut Astra's price by 20%, Google shipped Neon, and Microsoft priced MAI Code 2 at $0.50/$2.50. The cost per task for the same job now differs several-fold by model. "Which model is smartest" matters less in practice than "which model finishes this job at this price."
2. **Thinking level is now a budget decision**: Neon runs from low ($0.75 per task) to xhigh ($6.44 per task) across four levels. Easy work on low, hard work only on xhigh — that dial is cost management. From an [[concepts/llm-evaluation]] angle, the habit to build is reading "score" together with "cost and time per task."
3. **The orchestrator pattern**: Neon as a smart conductor with several fast Hydrogen workers follows the multi-agent flow in [[concepts/google-antigravity-teamwork]]. A "smart conductor + fast workers" setup is increasingly cheaper and faster than one expensive model.

## Limits (stated explicitly)

- Most benchmark figures are Google's own selections; the independently confirmed ones are mainly the Artificial Analysis scores (61, 3rd; Coding Agent 59) and the Vals Index.
- The price advantage only fully holds after Carbon's December price rise. In November, Neon costs more than Carbon's introductory rate.
- Harness variance (12.8% vs 39.0%) is large, so scores must be read with their measurement conditions.
- confidence is medium — Google's official announcement crossed with independent Artificial Analysis scores, but the self-reported benchmarks are unverified.
- **Speed-figure caution (contradiction flag)**: '3x faster than Carbon' (Google's claim), 'about 2x token speed' (110 vs 57), and 'about 40% shorter task time' (21 vs 36 minutes) are numbers on different measures. No single one of them can be quoted alone as "how many times faster Neon is."

## Related concepts

- [[concepts/gemini-4-carbon-testing]] — Carbon ties Neon at 60 but runs half as fast; the next step in the Gemini 4 price war (2026-10-10)
- [[concepts/gemini-4-argon]] — Neon takes over the code-and-analysis position Argon used to hold (2026-10-01)
- [[concepts/google-antigravity-teamwork]] — in Antigravity, Neon orchestrates while Hydrogen subagents do the work (2026-11-15)
- [[concepts/llm-evaluation]] — the evaluation lens of reading model scores together with cost and time per task

## Sources

- [Google launches Gemini 4 Neon — Carbon-level performance, 2x speed, $3/$15 (Google, 11-18)](raw/articles/2026-11-19-google-gemini-4-neon.md)
- [Gemini 4 Neon benchmark follow-up — CAAC Go agent test best ever, beats Carbon (CAAC Go, Crescendo Lab, 11-19)](raw/articles/2026-11-20-gemini-4-neon-benchmarks-followup.md)