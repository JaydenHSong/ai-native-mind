---
title: "Sierra Poppy 1.0 — Personal Agent Protocol, Auto-Published Across All Shopify Stores (Nov 13)"
category: concepts
tags: [sierra, poppy, agent-protocol, mcp, shopify, meta, commerce]
created: 2026-11-14
updated: 2026-11-14
sources:
  - "raw/articles/2026-11-14-sierra-poppy-1-0.md"
related:
  - "[[concepts/openai-chatgpt-wallet]]"
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
  - "[[patterns/agentic-commerce]]"
status: draft
confidence: high
---

# Sierra Poppy 1.0 — Personal Agent Protocol, Auto-Published Across All Shopify Stores (Nov 13)

## Start here

**Analogy**: like a ticket of admission an agent shows when entering a store — "I'm a guest, I'll only do this much" — greeting the shop and asking permission first, instead of breaking the door down. The shop posts its guide in advance, and the agent only moves within the allowed scope.

| Term | Meaning |
|------|------|
| **Personal Agent Protocol (Poppy)** | The standard for a personal agent to discover a business and negotiate the actions it is allowed to take |
| **poppy.json** | The Poppy guide file a store publishes — it says what an agent may do there |
| **UCP (Universal Commerce Protocol)** | Shopify's commerce protocol — it handles search, cart, and checkout |
| **OAuth** | The authentication method by which a user grants, controls, and manages an agent's permissions |
| **Design partner** | A company that co-builds the spec and validates a real deployment |

## One-line definition

On 2026-11-13, Sierra launched Personal Agent Protocol (Poppy) 1.0. It is the standard by which a personal agent discovers a business and negotiates the actions it is allowed to take: every Shopify store now auto-publishes a poppy.json with no extra setup, and Meta's Muse agent looks for Poppy first on every site it visits.

## Key facts

- **The protocol**: defines how a personal agent interacts with a business through its business agent, website, and API. It is built on existing standards — MCP, OpenAPI, Shopify UCP — and OAuth authentication lets the user control and manage what the agent may do.
- **Shopify**: all stores in 175+ countries already support UCP by default, and now every store auto-publishes a poppy.json file. No extra implementation is needed from merchants. UCP handles shopping (search, cart, checkout), while Poppy handles the earlier step — the agent identifying itself and learning the allowed scope. The commerce extension was co-written with Shopify.
- **Meta Muse**: Poppy is switched on for everyone using Muse. It looks for Poppy first, by default, on every site it visits.
- **Scale**: 60 new design partners (including Cisco, Delta, Intuit, Salesforce, Twilio, and Zoom) joined, passing 100 in total. Live deployments: Mercury (balance and transaction lookups, payments and transfers initiated under an approval policy), Synchrony (finance- and rewards-linked shopping), and Turkish Airlines (fare and booking lookups, mileage business upgrades).
- **Caveat**: Sierra calls it v1.0, but the spec is still labelled draft 1.0, so breaking changes are possible.

## Why it matters (solo-developer view)

1. **The 'entrance' to agent commerce is now standardised**: my agent no longer needs a custom implementation for negotiating with each store. With Poppy, the agent reads the store's guide and moves within the allowed scope.
2. **Shopify's auto-publishing means zero deployment friction**: no extra implementation from merchants. For my own service, a single poppy.json is the structure that prepares it to receive agent visitors.
3. **Meta Muse checking first means the agent's first step on the web is now 'is there a Poppy?'**: for my site or service to be visible to agents, this file has to be on my mind.

## Limitations (stated)

- The spec is labelled draft 1.0, so breaking changes are possible — the v1.0 name and actual stability are different things.
- Only three live deployments have been disclosed. The deployment stage of the remaining design partners is undisclosed.

## Related concepts

- [[concepts/openai-chatgpt-wallet]] — ChatGPT Wallet, launched the same day, solves agent payments (2026-11-13)
- [[concepts/mcp]] — the agent-to-tool connection standard Poppy builds on (2026-04)
- [[concepts/a2a-protocol]] — the agent-to-agent collaboration standard, the parallel protocol axis to Poppy (2026-04)
- [[concepts/meta-sierra-poppy-protocol]] — the first Poppy introduction on 2026-10-13, the step before this 1.0 (2026-10-13)
- [[patterns/agentic-commerce]] — the paradigm of agents choosing products and paying for them

## Sources

- [Sierra Poppy 1.0 launch source](raw/articles/2026-11-14-sierra-poppy-1-0.md)
