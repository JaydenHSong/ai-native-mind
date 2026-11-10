---
title: "OpenAI GPT-6.1 Terra: Computer Use at Half the Price"
category: concepts
tags: [openai, gpt-6-1-terra, computer-use, api-pricing, codex]
created: 2026-10-27
updated: 2026-10-27
sources:
  - "raw/articles/2026-10-27-openai-gpt61-terra-half-price.md"
related:
  - "[[concepts/gpt-61-sol-ultrafast]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/openai-enterprise-discounts-anthropic]]"
status: draft
confidence: high
---

# OpenAI GPT-6.1 Terra: Computer Use at Half the Price

## TL;DR

On 2026-10-26 OpenAI launched GPT-6.1 Terra, a computer-use model for ChatGPT Work, Codex, and the API. Standard API pricing is $1 per million input tokens, $0.05 cached input, and $5 output — half of GPT-6.1 Sol and one-tenth of GPT-6 Astra. OpenAI claims it matches Astra on agent tasks at one-tenth the token price and runs more than 3x faster on average.

## Key facts

- **Pricing**: $1 / $0.05 / $5 per million input / cached input / output tokens. Sol is $2 / $10, Astra $10 / $50, and the previous Terra $2 / $12. Batch pricing halves the standard rate again; the Ultrafast tier does not include Terra.
- **Availability**: ChatGPT Work and Codex for Plus, Pro, Enterprise, and Edu users; API model ID gpt-6.1-terra; Codex CLI 0.159.0 or later. It is not in the general Chat path, and plan usage limits are unchanged — OpenAI's claim is that the same allowance now covers more tasks.
- **Performance (OpenAI's claims)**: 60.0% on Agents' Last Exam at max effort, $1.01 per task. Sharply lower factual-error rates on an internal error-inducing test: 4.3% at higher effort, 16.7% at low effort — not independently reproduced.
- **Independent evaluation**: Artificial Analysis scores Terra 48 on its index (previous Terra 42, Sol 54, Opus 5.5 58, Argon/Astra 53). Cost per task fell from $1.40 to $0.40, and the guess rate on unanswerable questions fell from 88% to 38%. OpenAI's own charts still rank Sol higher for command-line coding and desktop computer use.
- **Safety and constraints**: Terra meets the Critical threshold in cybersecurity under OpenAI's Preparedness Framework and keeps Astra's safeguards, with a 36-page system card addendum. UAE inference residency is not supported; requests over 272,000 tokens carry a surcharge, and Fast mode costs twice the standard rate.

## Why it matters

1. **A completed price ladder**: flagship, Sol, Terra, Luna — routing work to the right tier is now the cost strategy itself.
2. **The mid-tier price war**: after the discount offensive, the list price itself halved — a practical alternative to flagship dependence for solo developers.
3. **Speed as throughput**: 3x faster means 3x more agent work in the same window, not just convenience.

## Limitations (explicit)

- Much of the performance and error-rate evidence is OpenAI's own measurement, without independent reproduction yet.
- Sol and Astra remain stronger for the hardest coding and computer-use work — Terra is not a universal replacement.
- UAE residency and tier restrictions require a pre-build check for teams with data-governance requirements.
