---
title: "AI Teen Safety Evaluation — ChatGPT for Teens Rated 'Unacceptable Risk'"
category: concepts
tags: [teen-safety, common-sense-media, openai, chatgpt, youth-ai-safety-institute, parental-controls, age-estimation]
created: 2026-10-07
updated: 2026-10-15
sources:
  - "raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md"
  - "raw/articles/2026-10-15-states-sue-openai-child-safety.md"
related:
  - "[[concepts/nyc-ai-hearing]]"
  - "[[concepts/ai-text-watermarking]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/character-ai-bankruptcy]]"
  - "[[concepts/eight-states-openai-child-safety-lawsuit]]"
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

## 2026-10-14 update — the 'Unacceptable Risk' verdict becomes a public call for a teen block (Axios, 10/13)

Common Sense Media publicly called on OpenAI to **block teen access to ChatGPT** (Axios, 10/13) — the Youth AI Safety Institute's 'Unacceptable Risk' rating moves from evaluation to public pressure. The demand this page recorded on 10/7 (block teen access until independently verified) now has a public advocate.

- The full arc in one week: independent quantification (this page, 10/7) → public call for blocking (10/13) → and the courtroom-and-balance-sheet end of the same failure class: [[concepts/character-ai-bankruptcy]] shows what happens when teen-safety claims meet litigation. "Protections that work as advertised" is now simultaneously a testing standard, a public demand, and a legal exposure surface.

## 2026-10-15 update — the eight state AG suits: the evaluate→demand→sue chain completes

azcentral's original reporting (10/14): Arizona AG Kris Mayes sues OpenAI in Maricopa County Superior Court. Seven more states — Arkansas, Idaho, Montana, Iowa, Kansas, West Virginia, Nebraska — filed separate suits in their own courts the same day: **eight parallel complaints, not a joint action**.

- Allegations: ChatGPT was designed to maximize compulsive use by minors — "manipulative design tactics" and sycophantic alignment. Cited harms: degraded critical thinking, paranoia and delusions, unlicensed medical advice, self-harm facilitation. All allegations are **claims, not court findings**.
- The Arizona complaint is 87 pages. Demands: an order changing how ChatGPT operates plus up to **$10,000 per willful violation** under consumer-fraud theories. Other states demand disgorgement of revenue earned during the minors' exposure period and injunctions against safety claims.
- OpenAI's rebuttal (spokesperson Drew Pusateri): parental controls, break reminders, and age-appropriate model safeguards exist; disputes the facts.
- Parallel front: Bloomberg Law — a separate 10/13 class action (collecting children's data without parental consent). Background: the June 2026 Florida AG suit, June multi-state subpoenas. Per the AI Lawsuit Tracker, **about 51** OpenAI-related cases are pending.
- Read through this page's framing: CSM's 'Unacceptable Risk' verdict (10/7) → Common Sense Media's public block-demand (10/14 update) → **direct suits by state attorneys general (10/15)** — the evaluate→demand→sue chain completes within a single week. This page's measurement work (4,000+ prompts) is now the evidentiary literature for the legal demands.
- Where [[concepts/character-ai-bankruptcy]] was the corporate-risk path ("litigation → bankruptcy"), this is the **"litigation → order changing how it operates"** path of direct judicial intervention — a precedent forming for courts ordering changes to an AI product's design itself. For the solo developer: UI/response patterns readable as "addictive design" (sycophantic alignment, etc.) are immediately legal exposure.
- Details: [[concepts/eight-states-openai-child-safety-lawsuit]]

## Related concepts

- [[concepts/nyc-ai-hearing]] — NYC AI hearing and the youth-protection bill package
- [[concepts/ai-text-watermarking]] — the EU AI Act track, regulation implemented technically
- [[patterns/agent-authority-model]] — the authority framework whose identification premise this case breaks
- [[concepts/character-ai-bankruptcy]] — the first major case of teen-safety litigation ending in bankruptcy
- [[concepts/eight-states-openai-child-safety-lawsuit]] — the eight-state AG suits completing the evaluate→demand→sue chain

## Sources

- [Common Sense Media rates ChatGPT for Teens 'Unacceptable Risk' (10/7)](raw/articles/2026-10-07-chatgpt-teens-unacceptable-risk.md)
