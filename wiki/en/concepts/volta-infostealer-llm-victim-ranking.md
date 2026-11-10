---
title: "VOLTA Infostealer — an LLM That Ranks Victims by Monetizable Value"
category: concepts
tags: [volta, infostealer, talos, llm, malware, openrouter, credential-theft]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-volta-infostealer-llm-victim-ranking.md"
related:
  - "[[concepts/wiz-black-october-ai-platform-breaches]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
status: draft
confidence: high
---

# VOLTA Infostealer — an LLM That Ranks Victims by Monetizable Value

## Start here

**Analogy**: a burglar who, after ransacking a house, hands the inventory to an appraiser and asks which house to hit next. The LLM is used not to break in, but to triage what was stolen.

| Term | Meaning |
|------|---------|
| **Infostealer** | Malware that steals credentials, cookies, and wallet data |
| **Triage** | Sorting victims or assets by value |
| **OpenRouter** | A broker API that routes requests to multiple LLM providers |

## One-line definition

Disclosed by Cisco Talos on 2026-10-31: VOLTA-AUTODOXER, a Windows infostealer that sends stolen credentials and sessions to an LLM for an assessment of each victim's monetizable value and OPSEC.

## Key facts

- **Theft scope**: browser credentials, cookies, and payment cards; crypto wallet seeds; OAuth tokens; SSH and cloud keys; messenger and gaming sessions; screenshots. A second sweep enriches the picture from central accounts' receipts and order history.
- **AI assessment stage**: the evidence bundle is POSTed to OpenRouter's chat-completions endpoint under a 240-word "forensic intelligence analyst" prompt requesting WHAT THEY'RE WORTH (low/medium/high) and THEIR OPSEC sections. The result is saved as AI_Analysis.txt and bundled into the exfiltration archive.
- **Fallback chain**: Claude Opus 4.6 by default, then Moonshot Kimi K2, then Google Gemini 2.5 Flash when refusal phrases are detected. Temperature 0.2. Without an API key, the AI stage is skipped and the stealer still works.
- **Discovery**: surfaced through Talos's CAIRN research effort; the analysed sample was first seen 2026-10-11. Self-deleting; all observed infrastructure is third-party owned.
- **Unconfirmed**: victim counts, real-world use, and any model-vendor response are not reported. Only one sample hash is public.

## Why it matters (solo-developer view)

1. **The LLM became the attacker's analyst**: the model does not help break in — it prioritizes loot already stolen. Defense must shift from intrusion detection toward credential lifetime management.
2. **Refusal is not a defense line**: a fallback chain engineered around refusals shows that per-model guardrails do not stop this use. A leaked API key turns LLM calls themselves into attacker assets.
3. **One key cascades**: browser, cloud, and messenger keys stolen together, plus automated victim profiling, multiply the damage of a single compromise. Short-lived, scoped keys shrink the blast radius.

## Limitations (stated)

- The Talos post was confirmed through secondary coverage; first-hand verification of its figures remains.
- Spread is unconfirmed. A single-sample analysis must not be inflated into a campaign.
- Whether any model complied with or refused the requests is not reported.
