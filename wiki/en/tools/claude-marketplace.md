---
title: "Claude Marketplace"
category: tools
tags: [anthropic, claude, marketplace, connectors, plugins, amazon, seller-central, enterprise]
created: 2026-09-24
updated: 2026-09-24
sources:
  - "raw/articles/2026-09-24-anthropic-claude-marketplace.md"
related:
  - "[[concepts/mcp]]"
  - "[[tools/managed-agents]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: low
---

# Claude Marketplace

## Start here

**Analogy**: before smartphones had app stores, you installed every app by hand. **Claude Marketplace** is the **app store for agents** — 2,000+ connectors and plugins with discovery, payment, and governance in one place.

| Term | Meaning |
|------|---------|
| **Connector** | A link from Claude into external systems (inventory, pricing, listings, etc.) |
| **Committed spend** | AI budget pre-committed to Anthropic — now usable for third-party software purchases |

## One-line summary

Anthropic's marketplace for Claude connectors and plugins, launched 2026-09-23 — 2,000+ listings, with a billing model that lets committed spend flow into third-party software.

## Key features

- **2,000+ connectors and plugins**: an attempt to standardize discovery, payment, and governance — the layer after MCP
- **Committed spend for third-party software**: a signal that enterprise AI budgets are expanding from model tokens to the whole agent stack
- **Amazon Seller Central opened to Claude**: sellers manage inventory, pricing, and listings through Claude without opening Amazon's console — agents entering real business systems with **write access**
- The same day, Amazon launched its own seller agent service "workflows" — continuously monitoring rating drops and prices on seller prompts

## Usage summary

Pick connectors within your organization's Claude committed spend. For a solo developer, searching the marketplace for ready-made connectors is faster than building an MCP server from scratch.

## Strengths and limits

| Strengths | Limits |
|-----------|--------|
| Standardized connector discovery, payment, and governance | Tied to the Anthropic ecosystem |
| Reuses existing committed spend — no new budget approval | Quality-verified share of the 2,000 listings is unknown |
| Real write-access cases (Seller Central) starting validation | Opening a whole seller console to agents also carries permission-delegation risk |

## Related tools

- [[concepts/mcp|MCP]] — the technical foundation of connectors; the marketplace is the "distribution, payment, and governance" layer above MCP
- [[tools/managed-agents|Managed Agents]] — same Anthropic stack; attaching marketplace connectors to Managed Agents' Hands is the natural combination
- [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] — the trust model and tier grading to read alongside third-party connectors

## Sources

- [Anthropic launches Claude Marketplace with 2,000+ connectors and plugins](raw/articles/2026-09-24-anthropic-claude-marketplace.md)
