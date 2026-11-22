---
title: "Together AI Prompt Leak — a Key Committed by a Coding Agent, OpenRouter Drops 3 Providers"
category: concepts
tags: [security, prompt-leak, together-ai, openrouter, coding-agents, zero-data-retention, supply-chain]
created: 2026-11-22
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md"
related:
  - "[[concepts/dragos-canary-tokens-ai-supply-chain]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/agent-data-leakage]]"
  - "[[concepts/fireworks-notion-ai-breach]]"
status: draft
confidence: medium
---

# Together AI Prompt Leak — a Key Committed by a Coding Agent, OpenRouter Drops 3 Providers

## Start here

**Analogy**: an AI coding helper accidentally dropped a house key on the street, and someone used it to walk into a storage room and take all the questions customers had sent to the AI. More surprising still, mixed in with the stolen questions were markers secretly planted to say "this is a fake key." The security company that planted them reported "customer questions are leaking," and within a day a broker site threw out three companies involved.

| Term | Meaning |
|------|------|
| **Coding agent** | An AI that writes and fixes code on a developer's behalf |
| **Credential** | Information such as a password or key that grants access to someone else's storage |
| **Prompt** | The question or instruction a user sends to an AI |
| **Canary token** | A unique marker planted to trace leaks — a fake URL or fake key that proves a leak when it appears somewhere |
| **Zero Data Retention (ZDR)** | A promise or setting: "we will not store customer data" |

## One-line definition

Together AI said in an official security notice on November 21, 2026 that customer prompt samples had leaked because of credentials an AI coding agent had accidentally committed. Five of the credentials inside the leaked samples were canary tokens planted by Dragos. The next day OpenRouter removed three related providers and excluded 125 endpoints from Zero Data Retention eligibility.

## Key points

- **The Together AI leak**: while developing the public GitHub repository `xorl`, an AI coding agent committed credentials for access to a private Hugging Face repository. Automated scanning caught and reverted it, but during the exposure window an unauthorized third party downloaded all the stored prompt samples.
- **Leak scope**: prompt samples collected for routine testing from MiniMax M3, GLM-5.2, and Kimi K2.6 requests (mostly 2026-06-24, 07-04, 07-08, 07-14). The intruder looked for other services' credentials inside the samples and tested whether they worked; five of them were Dragos's experimental canaries. Whether real credentials leaked is still under review.
- **Four countermeasures**: scoped short-lived credentials and keyless access, credential scanning on every pull request, Zero Data Retention by default for new accounts, and revised development processes for coding-agent use.
- **OpenRouter's action (11-22)**: three providers removed (names not disclosed) and 125 endpoints excluded from ZDR eligibility (some precautionary). All potentially affected customers notified. OpenRouter says it was not itself breached. Novita separately disclosed possible third-party access to MiniMax-routed requests from 05-28 to 11-11.
- **Background**: the follow-on fallout from Dragos's (HD Moore) canary-token study — unique URLs and credentials planted in about 2 million prompts from July to November, disclosed on November 20. Cases were confirmed where prompts were stored and passed on despite a ZDR label, raising the question of whether "ZDR was a label, not a guarantee."

## Why it matters (solo-developer lens)

1. **A first-of-its-kind case: "an agent committed the secret"**: until now, secret leaks were human mistakes. This time a coding agent wrote credentials into the development process. It pairs with [[concepts/claude-code-dont-ask-again-secret-leak]] — "permissions a person waved through without thinking" — as the agent-era pattern of secret-management failure.
2. **ZDR was a label, not a guarantee**: prompts were stored and passed on even on paths marked "we do not store." The same structure as [[concepts/fireworks-notion-ai-breach]] — the promise ends at the provider, and does not hold at the intermediate hosting and reseller stages. When your own service uses external AI, "how far does it travel" is something to measure, not to trust.
3. **Canary tokens turned "belief" into "evidence"**: without the markers Dragos planted, this leak would have stayed an incident where "nobody knows who took it." The study in [[concepts/dragos-canary-tokens-ai-supply-chain]] became the basis for actual provider removals within a day — a working tracing tool proving its force in practice.

## Limits (stated explicitly)

- Whether real credentials inside the leaked samples actually leaked is still under review — not an established fact.
- The three removed providers are unnamed, limiting independent cross-verification.
- confidence is medium — official notices from Together AI and OpenRouter cross-checked, but the providers are unnamed and the real-credential question is unresolved.

## Related concepts

- [[concepts/dragos-canary-tokens-ai-supply-chain]] — the Dragos canary-token study, the very experiment behind this leak — five of the credentials in the samples were its markers (2026-11-19)
- [[concepts/agent-supply-chain-security]] — trust models for external tools, skills, and agents; the baseline for responding to supply-chain breaches
- [[concepts/agent-data-leakage]] — user data leaking from agents in training and evaluation environments, the OpenAI 53-image incident (2026-09-26)
- [[concepts/fireworks-notion-ai-breach]] — the Fireworks AI breach exposing Notion AI chat records, stored despite a zero-retention promise (2026-11-09, 11-11)

## Sources

- [Together AI prompt leak from a key committed by a coding agent — OpenRouter drops 3 providers (Together AI, OpenRouter, 11-21–22)](raw/articles/2026-11-22-together-ai-prompt-leak-openrouter-providers-dropped.md)
