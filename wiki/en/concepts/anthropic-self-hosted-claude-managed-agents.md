---
title: "Anthropic Self-Hosted Claude Managed Agents — the Harness in My Cloud, Model Calls Still External (Nov 12)"
category: concepts
tags: [anthropic, claude-managed-agents, self-hosted, enterprise, agents]
created: 2026-11-13
updated: 2026-11-13
sources:
  - "raw/articles/2026-11-13-anthropic-self-hosted-claude-managed-agents.md"
related:
  - "[[concepts/anthropic-agent-memory-dreaming]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/anthropic-worse-together-multi-agent]]"
status: draft
confidence: high
---

# Anthropic Self-Hosted Claude Managed Agents — the Harness in My Cloud, Model Calls Still External (Nov 12)

## Start here

**Analogy**: moving laundry from a cloud laundromat to a washing machine at home. The washing machine (harness, database, sandbox) sits at home, but the detergent (the model) is still bought outside. The point is that the laundry (agent history and credentials) never leaves the house.

| Term | Meaning |
|------|------|
| **cma-server** | The Claude Managed Agents harness and API server — operated by the customer |
| **Sandbox worker** | An isolated workspace where an agent runs shell and file tools |
| **dreams** | A feature that consolidates agent memory offline between sessions — absent from self-hosting |
| **Gated access** | A limited release where only qualified organisations join through their account team |
| **PostgreSQL 16+** | The database storing agents, sessions and history — running on customer infrastructure |

## One-line definition

On 2026-11-12, Anthropic opened a private beta of self-hosted Claude Managed Agents. Enterprises can run the whole Managed Agents service — the agent harness/API server, the session and history database, and sandbox workers — in their own cloud or on-premises. Only the model itself is not moved; calls still go to external providers.

## Key facts

- **Structure**: customers operate cma-server (agent harness/API), a PostgreSQL 16+ database (agent, session and history storage), and sandbox workers (shell and file tool execution) themselves. Anthropic says it has no remote access to self-hosted servers or their logs.
- **Models stay external**: model calls continue to a provider of the customer's choice — Anthropic by default, or Amazon Bedrock, Google Agent Platform, Microsoft Foundry, or the customer's own gateway.
- **Access**: gated to qualified organisations through their account team. Pricing, the country list and the GA schedule are undisclosed.
- **Safety licence**: a server licence that took effect the same day requires rollback within 8 hours of a safety notice and a safety update within 1 business day.
- **Missing features**: 7 hosted features are absent from self-hosting — cloud environments, Files API, webhooks, scheduled deployments, dreams (offline agent-memory consolidation), and others. Agents, skills, credentials and history do not migrate; they must be rebuilt from scratch.

## Why it matters (solo-developer view)

1. **Data sovereignty has reached agents**: agent history, credentials and sessions stay in my infrastructure. The condition for enterprises to adopt agents is shifting from 'model performance' to 'where the data stays'.
2. **The harness–model split is now official**: the model is rented via API and execution runs locally. This is the wiki's third-generation definition — Agent = Model + Harness — appearing as product structure. If I own the harness, the model is swappable.
3. **No migration is itself a design signal**: if self-hosting is not planned from the start, you cannot move later. Harness choice is a hard-to-reverse decision.

## Limitations (stated)

- 7 hosted features are missing — without dreams, offline agent-memory consolidation cannot be used in self-hosting.
- Pricing, GA schedule and eligible countries are undisclosed, so adoption cost cannot be estimated.
- Model calls still go to external providers, so it is not fully offline.

## Related concepts

- [[concepts/anthropic-agent-memory-dreaming]] — Anthropic agent memory 'dreaming', a feature missing from self-hosting (2026-11-07)
- [[concepts/ai-orchestration]] — Six patterns for coordinating multiple AI agents, the reference for harness design (based on Anthropic's guide)
- [[concepts/anthropic-worse-together-multi-agent]] — Multi-agent teams lose to a single coordinator, MAMUBench (2026-11-12)

## Sources

- [Anthropic self-hosted Managed Agents source](raw/articles/2026-11-13-anthropic-self-hosted-claude-managed-agents.md)
