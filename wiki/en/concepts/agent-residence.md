---
title: "Agent Residence — Local Models vs Cloud Computers"
category: concepts
tags: [agent-residence, local-model, open-weights, privacy, cloud-agent, meta, xai, openai]
created: 2026-10-04
updated: 2026-10-04
sources:
  - "raw/articles/2026-10-04-agent-residence-local-vs-cloud.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/managed-vs-deep-agents]]"
status: draft
confidence: medium
---

# Agent Residence — Local Models vs Cloud Computers

## One-line definition

The "place" where an AI agent lives is no longer the chat window — it has split into two: local models resident on the user's hardware vs cloud agents that own a computer in the cloud.

## Core content

In August 2026 Meta shipped a 30B-parameter open-weight model: it runs locally on a single consumer-grade GPU, and agents can operate with no network connection. The opposite bet is the cloud agent from xAI (8/11) and OpenAI (DevDay 9/29 Dots) — even with the laptop closed, work continues on "their own computer" in the cloud.

| Axis | Local residence (Meta 30B) | Cloud residence (xAI, OpenAI) |
|---|---|---|
| Data | Never leaves the device (privacy) | Moves to the cloud |
| Persistence | Stops when the session breaks | Always-on — keeps working with the lid closed |
| Pricing model | Free + usage limits (CNBC) | Paid plans (Pro/Business, etc.) |
| Offline | Possible | Impossible |

Chat-era agents lived behind the chat window and ended when the tab closed. Now the question has moved from "how smart is it" to "where does it reside."

## Why it matters

For the AI-native programmer, the two forms are different tools: the local agent is an assistant inside the personal development environment (sensitive code, local files); the cloud agent is a background worker running overnight (long builds, research). An architectural separation of what goes where is needed — because "where it resides" becomes the boundary of permissions, cost, and trust.

## Related concepts

- [[concepts/persistent-agent]] — the origin of the resident-agent concept (OpenAI "O" leak, 2026-09-27)
- [[patterns/agentic-finance]] — when cloud-resident agents start spending money (Robinhood Agents)
- [[comparisons/managed-vs-deep-agents]] — the hosting choice: lock-in vs freedom

## Sources

- [The Agent Just Stopped Living in the Chat Window](raw/articles/2026-10-04-agent-residence-local-vs-cloud.md)
