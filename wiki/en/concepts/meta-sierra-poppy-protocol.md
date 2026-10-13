---
title: "Meta×Sierra Poppy — Personal Agent Protocol draft 0.1 (2026-10-09)"
category: concepts
tags: [meta, sierra, poppy, personal-agent-protocol, agentic-commerce, oauth, agent-identity]
created: 2026-10-13
updated: 2026-10-13
sources:
  - "raw/articles/2026-10-13-meta-sierra-poppy-protocol.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: medium
---

# Meta×Sierra Poppy — Personal Agent Protocol draft 0.1 (2026-10-09)

## One-line definition

An open standard defining how a person's AI agent logs in to and transacts with businesses — co-led by Meta and Sierra (co-founder Bret Taylor); draft 0.1 was published 2026-10-09 under Apache 2.0.

## Key points

- **Release**: Sierra published Personal Agent Protocol (PAP, aka Poppy) draft 0.1 under Apache 2.0 on 2026-10-09. Discovery document `/.well-known/poppy.json`, sessions OAuth 2.0-based.
- **Permission model**: customers grant agents view-only vs change access; businesses set limits on what agents can do — a third option between "block" and "full delegation."
- **Partners**: launch partners Genesys, Instinct, NiCE, Rocket, Shopify, Stripe, Walmart. 35 design partners including OpenAI, Visa, Mastercard, PayPal, Bank of America, Target, United Airlines.
- **Demo**: a Meta Muse agent used the protocol to locate Rocket's agent and issue a mortgage pre-approval letter for a Rocket executive "in moments."
- **Background**: Amazon blocked an unidentified Meta Muse agent in September (PYMNTS 9/21). Only 23% of merchants can clearly identify AI-driven traffic (PYMNTS Intelligence).

## Why it matters

For the AI-native programmer, Poppy is **the identity-and-permissions rail for agent commerce**. Alongside "whose side is the agent on" (agentic-commerce's core question), "can the agent prove who it is" is added. Practically, it means a third option breaking the "block vs. full delegation" binary for agents that touch payments and accounts — businesses can now granularly design the permissions agents receive. The view-only vs change distinction reads like [[concepts/agent-authority-model]]'s five-level authority framework realized as an actual standard. It is draft 0.1, so the spec can change, but OpenAI, Visa, and Stripe signing on as design partners is the market's bet that "this rail will actually be used."

## Related concepts

- [[patterns/agentic-commerce]] — the identity-and-permissions rail for agent commerce. Identity proof added to "whose side is the agent on."
- [[concepts/agent-authority-model]] — view-only vs change access is the working implementation of the five-level authority framework.
- [[concepts/agent-attribution]] — standardization of agent identity is the precondition for security-incident attribution.
- [[concepts/a2a-protocol]] — the division of labor between the agent-to-agent collaboration standard and Poppy (the agent-to-business transaction standard).
- [[concepts/google-workspace-mcp-agentic-oauth]] — the parallel move the same week: the identity-infrastructure standardization race.

## Sources

- [PYMNTS (original coverage)](https://www.pymnts.com/news/artificial-intelligence/2026/meta-sierra-poppy-lets-customers-set-limits-ai-agents/)
- Source capture: [raw/articles/2026-10-13-meta-sierra-poppy-protocol.md](raw/articles/2026-10-13-meta-sierra-poppy-protocol.md)
