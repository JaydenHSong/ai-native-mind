---
title: "Claude Duet — Anthropic's Always-On Agent Research Preview"
category: concepts
tags: [anthropic, claude-duet, proactive-agent, opus-5-5, agent-ux, approval-gate, marketplace-connectors, persistent-agent]
created: 2026-10-22
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-22-claude-duet.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agent-authority-model]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[patterns/agentic-commerce]]"
status: draft
confidence: high
---

# Claude Duet — Anthropic's Always-On Agent Research Preview

## TL;DR

Anthropic's Claude Duet research preview (2026-10-21) is a proactive agent built on Claude Opus 5.5: it sends a morning brief summarizing priorities across connected apps, checks apps every few hours, and messages only what needs attention. It connects to 6,000+ Claude Marketplace connectors (Stripe, QuickBooks, Gusto, Shopify, DocuSign). Sending messages, payments, document signing, and deletion require user approval; stock trading and inter-account transfers are blocked outright. It runs on a VM + browser, so work continues while the user's devices are off. Waitlist for US Pro/Max subscribers; background checks consume plan usage. The third big-lab proactive agent in six weeks (after ChatGPT Dots and Meta Muse) — the UX pattern is converging.

## Key facts

- **Launch**: 2026-10-21 Anthropic — Claude Duet research preview, powered by Claude Opus 5.5.
- **Behavior pattern**: daily morning brief (priorities across connected apps) + periodic app checks → messages only what needs attention. From "called when summoned" to "patrolling and reporting."
- **Integrations**: 6,000+ Claude Marketplace connectors — Stripe, QuickBooks, Gusto, Shopify, DocuSign.
- **Approval gates**: user approval required before sending messages, payments, document signing, deletion. Stock trading and inter-account transfers are blocked as a matter of principle.
- **Runtime**: virtual machine + browser — work continues with the user's devices off; a commercial persistent-agent implementation.
- **Access/pricing**: waitlist for US Pro/Max subscribers. Background checks consume plan usage limits.
- **Pattern convergence**: third big-lab proactive agent in six weeks (ChatGPT Dots 10-02, Meta Muse 10-13) — agent UX is converging on "always-on / brief / approval gates."

## Why it matters

1. **The converging agent UX**: three big labs shipped the same shape (brief + patrol + approval gates) in six weeks — this is becoming the standard interface for agent products. Building on this UX grammar means users already know the pattern.
2. **A concrete authority design**: a two-tier structure of "approval gates + principled blocks." Where the LEA Agent Authority Model (10-05) was theory, Duet draws actual lines: ask before money/signature/deletion, block stocks/transfers outright. A reference design for handing agents real money.
3. **Pricing-model signal**: background checks consume plan limits — "patrolling" is metered. The unit economics of always-on agents include work the agent does on its own, not just user-requested work — directly tied to cost governance (the Accenture $29 cap case).

## Limitations (explicit)

- Research preview — US Pro/Max waitlist; GA timing and pricing undisclosed.
- Approval-gate UX (approval fatigue, bypass risk) unvalidated.
- Actual usage consumption of background checks undisclosed.