---
title: "OpenCode Key Exposure — Decommissioned Legacy Console Breach, Potential 3-Provider API Key Leak"
category: concepts
tags: [opencode, api-keys, security-breach, distillation-attack, developer-tools, anomaly-innovations, key-rotation]
created: 2026-10-18
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-18-opencode-key-breach.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[patterns/ai-cost-management]]"
status: draft
confidence: high
---

# OpenCode Key Exposure — Decommissioned Legacy Console Breach, Potential 3-Provider API Key Leak

## TL;DR

Anomaly Innovations (formerly SST, maker of OpenCode) emailed affected users on 2026-10-17 at 22:51 UTC: a legacy console being decommissioned was breached around 10-17 00:30 UTC, potentially exposing stored OpenAI, Anthropic, and Google provider keys. ~1.4% of OpenCode Console users affected. Two misuse reports (one confirmed unauthorized Claude API usage, ~$100 in fraudulent charges). Email-only notification — no status page or changelog post.

## Key facts

- **Timeline**: first exposure identified 10-17 00:30 UTC → first email to victims 10-17 22:51 UTC (~22h gap) → second email just before 10-18 01:00 UTC. No status-page, changelog, or website notice — **email only**.
- **Attack path**: decommissioned legacy console. Workspace-stored keys for three providers exposed. ~**1.4%** of OpenCode Console users.
- **Misuse reports (2)**: one user confirmed unauthorized Claude API usage on the evening of 10-17; another reported ~**$100** in fraudulent charges. Company: misuse unconfirmed.
- **Company's account**: a "large-scale distillation attack"; investigation ongoing; no evidence of other data exfiltration. Working with Anthropic, OpenAI, and Google.
- **Guidance**: revoke and reissue keys in each provider's dashboard; audit usage logs since 10-17. Co-founder Dax Raad (@thdxr) posted on X that his own account was under attack.

## Why it matters

1. **Supply-chain surface expansion**: a new row in the trust-tier model — "a dev tool's workspace is a credential store." The threat model covers not just skills and MCP, but the **vendor's decommissioned assets**.
2. **API keys = cost assets**: $100 in fraudulent charges is small, but it is the minimum unit of "key leak = money leak." Spend caps cover "money I spend"; automated **key rotation** covers "money someone else spends."
3. **Notification asymmetry**: users learn they're victims only by opening email — the vendor's incident-disclosure channel becomes part of observability.

## Limitations (explicit)

- The two misuse reports are user-reported; the company has not confirmed misuse.
- The technical basis for the "distillation attack" characterization is undisclosed.
- Key counts and affected accounts are undisclosed — 1.4% is a user share, not a key count.
