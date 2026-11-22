---
title: "Dragos Canary-Token Study — 3 AI Hosting Providers Breached, Prompt Leaks Proven"
category: concepts
tags: [security, supply-chain, ai-hosting, canary-tokens, dragos]
created: 2026-11-20
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-20-dragos-canary-tokens-ai-supply-chain.md"
  - "raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md"
related:
  - "[[concepts/together-ai-prompt-leak-openrouter-providers-dropped]]"
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/ai-memory-systems]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: medium
---

# Dragos Canary-Token Study — 3 AI Hosting Providers Breached, Prompt Leaks Proven

## Start here

**Analogy**: an experiment that marks letters invisibly and watches where the marks show up. Industrial-security firm Dragos planted hidden markers (canary tokens) in 2 million questions sent to AI services. The markers turned up in the wrong places — at least 3 AI hosting providers were leaking customer questions, and none of them knew they had been breached until Dragos told them. Even the promise "we do not store your data" did not help.

| Term | Meaning |
|------|------|
| **Canary token** | A unique marker planted to trace leaks — a fake URL or fake cloud key that proves a leak when it appears somewhere |
| **AI hosting provider** | A company that runs someone else's AI model for them — it takes a question, feeds it to the model, and returns the answer |
| **Zero Data Retention** | A promise or setting: "we will not store customer data" |
| **Inference marketplace** | A market that brokers access to many AI models — resellers in the middle rent out the models |
| **Prompt** | The question or instruction a user sends to an AI |

## One-line definition

Industrial-security company Dragos published a study that planted unique canary tokens (URLs and AWS keys) in about 2 million prompts sent to AI services over five months (July–November 2026) and tracked where they surfaced. Evidence of data exposure was confirmed at a minimum of **3 AI hosting providers**, and all three were unaware of the breach until Dragos notified them.

## Key points

- **Method**: unique canary tokens planted in about 2 million prompts sent to AI services, then tracked to see where the tokens appeared.
- **Breach evidence**: data-exposure evidence confirmed at a minimum of 3 AI hosting providers. Decoy AWS keys were used in tens of thousands of the attacker's AWS API calls. The largest single breach saw all roughly 200 AWS keys stolen over a few days in late October.
- **Reseller access**: resellers on AI inference marketplaces could view and store customer prompts using only standard logging features.
- **Zero Data Retention defeated**: prompts leaked even with Zero Data Retention set; in one case a prompt was posted in a Feishu chat 24 days later. A case was also confirmed in which a prompt reached a Chinese AI organization.
- **Source note**: a primary study on Dragos's official blog (lead researcher HD Moore). An active experiment by security researchers, so the breached providers are not named.

## Why it matters (solo-developer lens)

1. **"We don't store it" does not reach the hosting layer**: separate from the model provider's Zero Data Retention setting, prompts were viewed and stored at the intermediate hosting and reseller stage. The sender cannot see how far the data travels — the same structure as the problem in [[concepts/ai-memory-systems]].
2. **Canary tokens are a working tracing tool**: a way to measure leaks, not trust promises. Planting fake secrets such as API keys or URLs captures the leak path as evidence. The same check can be applied to a supply chain when your own service uses external AI.
3. **Supply-chain breaches are chaining up**: alongside this week's Microsoft Agent Framework PyPI compromise (in the [[concepts/litellm-pypi-supply-chain-compromise]] context), the "middle steps" of AI infrastructure are becoming the attack surface. Time to revisit the trust model in [[concepts/agent-supply-chain-security]].

## 2026-11-22 update — Together AI leak and OpenRouter's removal of 3 providers: the canary becomes real evidence

- **Follow-on fallout**: in Together AI's prompt-leak notice of November 21, five of the credentials inside the leaked samples were Dragos's experimental canary tokens. The next day OpenRouter removed three related providers and excluded 125 endpoints from ZDR eligibility.
- **Meaning**: the study has moved from "an experiment showing leaks are possible" to "evidence behind an actual leak and removal." Canary tokens went from tracing tool to the basis for enforcement action. See [[concepts/together-ai-prompt-leak-openrouter-providers-dropped]] for details.

## Limits (stated explicitly)

- A single primary Dragos study, with breached providers unnamed, so independent cross-checking is difficult.
- The specific path by which a prompt "reached a Chinese AI organization" is not disclosed in the study.
- confidence is medium — the primary study is a direct experiment, but unnamed providers and a single source limit cross-verification.

## Related concepts

- [[concepts/together-ai-prompt-leak-openrouter-providers-dropped]] — the Together AI prompt leak, where five credentials in the leaked samples were this study's canary tokens — OpenRouter removes 3 providers (2026-11-21–22)
- [[concepts/litellm-pypi-supply-chain-compromise]] — the Microsoft Agent Framework PyPI compromise in the same week, making AI supply-chain security a chaining issue (2026-10-22)
- [[concepts/google-threat-tracker-exploit-agent]] — the widening attack surface on AI services and agent infrastructure (2026-11-16)
- [[concepts/ai-memory-systems]] — the structural problem of prompts and conversation records remaining on third-party infrastructure
- [[concepts/agent-supply-chain-security]] — trust models for external tools, skills, and agents; the baseline for responding to supply-chain breaches

## Sources

- [Dragos canary-token study — 3 AI hosting providers breached, prompt leaks proven (Dragos official blog, 11-19)](raw/articles/2026-11-20-dragos-canary-tokens-ai-supply-chain.md)
- [Together AI prompt leak — OpenRouter drops 3 providers (Together AI, OpenRouter, 11-21–22)](raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md)
