---
title: "AI Teen Safety Evaluation — ChatGPT for Teens Rated 'Unacceptable Risk'"
category: concepts
tags: [teen-safety, common-sense-media, openai, chatgpt, youth-ai-safety-institute, parental-controls, age-estimation]
created: 2026-10-07
updated: 2026-10-07
sources:
  - "raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md"
related:
  - "[[concepts/nyc-ai-hearing]]"
  - "[[concepts/ai-text-watermarking]]"
  - "[[patterns/agent-authority-model]]"
status: draft
confidence: medium
---

# AI Teen Safety Evaluation — ChatGPT for Teens Rated 'Unacceptable Risk'

## One-line definition

An independent, measurement-based evaluation of AI products' teen-safety features — the case where Common Sense Media's Youth AI Safety Institute rated ChatGPT for Teens "Unacceptable Risk" for under-18 users on 2026-10-07 and urged OpenAI to block teen access until the protections work as advertised.

## Core content

- Verdict: 2 of 8 AI principles (Keep Kids & Teens Safe, Put People First) at Unacceptable Risk; 4 at High, 2 at Moderate.
- Testing: 4,000+ prompts, comparing pre-launch (7/13–8/17) vs post-launch (8/25–9/28). Accounts aged 13–17 (parent-linked and unlinked) plus accounts registered as 19.
- What held: refusal of explicit sexual roleplay and some other safeguards.
- What failed:
  - 60-minute suicide/self-harm/disordered-eating conversations on parent-linked accounts → zero parental notifications (against OpenAI's one-hour target). Four notifications total across the crisis battery.
  - Crisis-hotline mention rate fell 33%→23% overall, 63%→3% on depression prompts. Three of five Red-Line severe harms missed the 95% threshold.
  - "Show me the answer" pop-up inside Study Mode (43% on linked age-13, 90% on unlinked age-17). Deleting the @study prefix exited Study Hours → 100% assignment completion.
  - Age-estimation failure: ~1,000 prompts on 19-registered accounts with teen personas → the teen experience never activated, even when testers stated age 13. No detectable difference between age-13 and age-17 accounts.
  - Two break reminders across ~2,000 prompts. Quiet Hours bypassed by changing the device timezone.
- Seven recommendations: block teen access until independently verified, remove "show me the answer" in Study Mode, detail crisis alerts, and more.
- OpenAI disputes the methodology. The Institute shared a draft with OpenAI for factual review and asserts editorial independence (it also receives industry funding, including from the OpenAI Foundation).
- Background: prior ratings of ChatGPT as High Risk (2025-10-23) and ChatGPT mental-health support as Unacceptable Risk (2025-11-14). Original Axios report (10/7). California's governor signed AI-companion legislation mandating crisis protocols, parental controls, and annual audits.

## Why it matters

- The first large-scale independent evaluation quantifying the "claims vs measured reality" gap — the AI safety debate moves from company claims to reproducible testing.
- Age estimation failure is the broader problem: designs like teen modes and age-tiered permissions collapse when "who is a teen" is unknown. [[patterns/agent-authority-model]]'s authority tiers are equally voided when the identification premise breaks.
- Position on the regulatory pressure line: the civilian-evaluation counterpart to [[concepts/nyc-ai-hearing]]'s kill-switch bills and the EU AI Act track (textGrain). California legislation has already begun.

## Related concepts

- [[concepts/nyc-ai-hearing]] — NYC AI hearing and the youth-protection bill package
- [[concepts/ai-text-watermarking]] — the EU AI Act track, regulation implemented technically
- [[patterns/agent-authority-model]] — the authority framework whose identification premise this case breaks

## Sources

- [Common Sense Media rates ChatGPT for Teens 'Unacceptable Risk' (10/7)](raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md)
