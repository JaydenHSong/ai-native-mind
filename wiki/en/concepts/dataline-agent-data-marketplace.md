---
title: "Dataline Agent Data Marketplace — x402 Pay-Per-Call Data as a Routing Layer"
category: concepts
tags: [dataline, agent-data, x402, agent-payments, funding]
created: 2026-11-02
updated: 2026-11-02
sources:
  - "raw/articles/2026-11-02-dataline-agent-data-marketplace.md"
related:
  - "[[concepts/mastercard-agent-pay-machines-developer-access]]"
  - "[[concepts/openai-agent-sepolia-wallet]]"
  - "[[concepts/deepseek-dsh-superagent-prototype]]"
status: draft
confidence: medium
---

# Dataline Agent Data Marketplace — x402 Pay-Per-Call Data as a Routing Layer

## Start here

**Analogy**: instead of negotiating an API contract every time an agent needs data, it pays per call at a vending machine — and the data arrives with a trust score attached. Anyone can stock the machine with a feed.

| Term | Meaning |
|------|---------|
| **x402** | An HTTP payment protocol for paying per API call |
| **AI confidence score** | A data-quality score based on source reliability, freshness, and consistency |
| **Schema normalization** | Aligning different feeds into one structure so agents can use them directly |

## One-line definition

Funding announcement from 2026-11-01: Dataline raised $10.6M to expand a decentralized agent data marketplace where anyone can publish a feed and any agent can pay per call via x402.

## Key facts

- **Funding**: $10.6M, co-led by Lattice and Samsung-backed Dispersion Capital, with Symbolic Capital participating.
- **Structure**: a two-sided marketplace plus a routing layer. API responses carry an AI confidence score based on source reliability, freshness, and consistency.
- **Data**: schema-normalized feeds for prices, funding, positions, and prediction markets, aimed at agent-native execution.
- **Scale (company-reported)**: 19.4 million on-chain transactions and a community of more than 300,000. An initial cohort of AI Data Launch partners was organized, with free access for builders on Base and Robinhood Chain.

## Why it matters (solo-developer view)

1. **The agent economy's payment layer is spreading to data**: payment (x402) is moving beyond model calls into data feeds. "Data cost" becomes a line item in agent operating costs.
2. **A trust score is a filter**: scoring sources on reliability, freshness, and consistency is an attempt to solve "bad data," not just hallucinations, through a market mechanism. Whether the scoring formula is transparent is the key question.
3. **A supplier path for solo developers**: because anyone can publish a feed, a niche dataset holder can become a supplier in the agent economy. The scale figures, however, are company-reported and unverified.

## Limitations (stated)

- Press-release-based news; transaction and community figures lack independent verification.
- The confidence score's formula and weights are not public.
- Real agent adoption (the share of paid calls) was not reported.

## Sources

- [Dataline source](raw/articles/2026-11-02-dataline-agent-data-marketplace.md)
