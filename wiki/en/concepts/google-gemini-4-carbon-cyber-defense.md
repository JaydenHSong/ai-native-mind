---
title: "Google Gemini 4 Carbon: Cyber-Defense Frontier Model, Defenders First"
category: concepts
tags: [google, deepmind, gemini, carbon, cybersecurity, frontier-model, fairwind]
created: 2026-10-29
updated: 2026-10-29
sources:
  - "raw/articles/2026-10-29-google-gemini-4-carbon-cyber-defense.md"
related:
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
status: draft
confidence: high
---

# Google Gemini 4 Carbon: Cyber-Defense Frontier Model, Defenders First

## TL;DR

On 2026-10-28 Google DeepMind announced Gemini 4 Carbon, about two weeks after Gemini 4 Argon reached general availability. Carbon is positioned for the full cyber-defense cycle — finding vulnerabilities, validating them, and patching them at the root cause — plus long-horizon engineering work lasting days. It claims first place on the Artificial Analysis Intelligence Index v5.0 with a score of 59, but access starts with a small set of vetted cyber defenders; no public release date has been given.

## Key facts

- **Index lead**: Artificial Analysis Intelligence Index v5.0 score of 59, ahead of Claude Opus 5.5 (58), GPT-6 Astra (57), and Argon (50). WebDev Arena score of 1,768 (+89 Elo, 4th place).
- **Cyber benchmarks (company-reported, unguarded evaluations)**: SEC-bench Pro 88.2% (discovery), ExploitGym 54.8% (validation), CWE-bench 71.0% (patching). Internal secure-code success was more than double Argon's; Chrome team internal testing reported high-quality patch rates more than 10x another large frontier model. All are company evaluations pending independent verification.
- **Long-horizon work as the differentiator**: internal teams watched Carbon persist for days on hard engineering problems, pushing through dead ends to find root causes. Terminal-Bench results also improved sharply over Argon.
- **Staged access (Fairwind Program)**: selected cyber defenders first, then trusted partners, while DeepMind iterates guardrails and participates in voluntary US government pre-release testing. Model ID, context window (reported as 1M tokens in some coverage), and API pricing beyond introductory rates ($2/$10 per 1M input/output tokens, rising later to $4/$20) are not fully confirmed.

## Why it matters

1. **Security work gets cheaper to automate**: discovery, validation, and patching in one model lowers dependence on external security audits — though unattended patching of production systems remains a separate risk.
2. **Access itself is now a safety policy**: the stronger the model, the more "who gets it first" becomes the safety decision. Solo developers should plan on not being in the first wave.
3. **Benchmark literacy**: unguarded scores are a ceiling, not a production guarantee. Carbon's 88.2% is not 88.2% of vulnerabilities in any particular codebase.

## Limitations

- Cyber scores and long-horizon anecdotes come from Google's own evaluations and internal observation; independent verification is pending.
- Context window, model ID, and general availability date are unconfirmed or reported, not announced facts.
- Dual-use risk (offensive use of the same capability) is the reason for staged release, not a risk that has been resolved.
