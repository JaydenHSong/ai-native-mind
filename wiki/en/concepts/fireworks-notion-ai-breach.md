---
title: "Fireworks AI Breach Exposes Notion AI Chat Records — API Keys Revoked Nov 11 (Advisory Nov 9)"
category: concepts
tags: [notion, fireworks-ai, data-breach, supply-chain, ai-privacy, api-key]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-fireworks-notion-ai-breach.md"
related:
  - "[[concepts/malbear-operation-snowball-deepseek-telecom]]"
  - "[[concepts/openai-codex-npm-prompt-injection]]"
  - "[[concepts/australia-ai-regulator-agent-breach]]"
status: draft
confidence: high
---

# Fireworks AI Breach Exposes Notion AI Chat Records — API Keys Revoked Nov 11 (Advisory Nov 9)

## Start here

**Analogy**: the safe was never robbed — but the copy shop (Fireworks AI) holding the owner's copies was. The shop had promised to "throw copies away immediately," yet it kept them for sorting. The owner (Notion) is now hunting through the copies and revoking the keys (API keys) mixed into them.

| Term | Meaning |
|------|------|
| **Zero data retention** | A contractual promise that a vendor stores no data and deletes it immediately after processing |
| **Insights** | A Notion AI feature that classifies and uses chat records to produce insights |
| **Unattributable** | A state where records carry no author or workspace information, so they cannot be tied to anyone |
| **Supply-chain risk** | The risk that a vulnerability in a vendor, component or library you use transfers to you, even when your own system is untouched |

## One-line definition

On 2026-11-09, Notion disclosed in a security advisory that a Fireworks AI breach had exposed Notion AI chat records, and on 2026-11-11 it revoked Notion API keys found in those chats. It is a textbook case of AI-feature supply-chain privacy risk: "our system was not breached" is not the same as "our prompts were not stored at a vendor."

## Key facts

- **The incident**: a Fireworks AI breach (Oct 23–24, via a third-party cloud R&D machine) exposed Notion AI chat records — classification data for the Insights feature. The affected share is under 1% of all workspaces.
- **What was exposed**: most records are "unattributable" (no author or workspace labels) and contain no tool-call results. But secrets pasted into chat bodies (keys, contracts) were exposed as-is. The total number of exposed records is undisclosed.
- **Response timeline**: on Nov 3, Notion cut the Fireworks connection, deleted data, disabled Insights and stopped serving open-weight models through Fireworks. Customer notification went out Nov 9; **on Nov 11, Notion API keys found in the chats were revoked** — the new development inside the window.
- **The point of contention**: Fireworks had contractually promised "zero data retention," yet Insights data was retained. It shows the limits of a zero-retention promise.
- **The meaning**: when AI features are outsourced to a vendor, prompts and chat records live on vendor infrastructure — a structural risk. The boundary of responsibility for a security incident widens from 'our system' to 'wherever our data rested.'

## Why it matters (solo-developer view)

1. **Prompts are data — chat records are an exposure asset**: pasting API keys, contracts or internal information into an AI chat creates a leak path the moment that chat rests on vendor infrastructure. The rule is not to paste secrets into AI chats; if you did, revoking the key is part of the response.
2. **'Zero retention' is a claim to verify, not a contract phrase to trust**: check whether a vendor actually honours its data-handling promise. When your own harness calls an external model API, verify in both the contract and the actual behaviour where prompts live and for how long.
3. **The supply chain has widened**: if the Codex npm chain (same day) is the supply chain of code, this incident is the supply chain of data. In the agent era, the supply chain must be read across code, models and data together.

## Limitations (stated)

- The total number of exposed records is undisclosed. The "under 1%" scope is Notion's own statement.
- Most records are unattributable, so even Notion could not pin down the exact damage.
- There is no independent verification yet of Fireworks' account of how the breach happened or how far it reached.

## Related concepts

- [[concepts/malbear-operation-snowball-deepseek-telecom]] — A jailbroken DeepSeek agent inside a European telecom (2026-11-11)
- [[concepts/openai-codex-npm-prompt-injection]] — Codex npm pipeline prompt injection, supply-chain security (2026-11-12)
- [[concepts/australia-ai-regulator-agent-breach]] — Australia creates an AI regulator after an OpenAI agent's Medicare breach (2026-11-10)

## Sources

- [Fireworks AI breach and Notion AI chat records source](raw/articles/2026-11-12-fireworks-notion-ai-breach.md)
