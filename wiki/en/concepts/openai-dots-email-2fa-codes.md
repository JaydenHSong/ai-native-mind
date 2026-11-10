---
title: "OpenAI's Dots Start Pulling Login Codes from a Connected Inbox — 2FA Handled by the Agent"
category: concepts
tags: [openai, dots, agent, 2fa, email, authentication, persistent-agent]
created: 2026-11-09
updated: 2026-11-09
sources:
  - "raw/articles/2026-11-09-openai-dots-email-2fa-codes.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/openai-gpt6-astra-safety-underperformance]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: medium
---

# OpenAI's Dots Start Pulling Login Codes from a Connected Inbox — 2FA Handled by the Agent

## Start here

**Analogy**: until now, an agent that hit a six-digit login code had to ask a human. Now it opens the mailbox, takes the code and types it in itself. More convenient — and one fewer "a human checks this" step in the chain.

| Term | Meaning |
|------|------|
| **Dots** | OpenAI's always-on agents — they keep working in the cloud after the user logs off |
| **2FA** | Two-factor authentication: a one-time code sent by email or app, checked in addition to a password |
| **Auto-review** | A separate system that checks a Dot's planned step before it runs |

## One-line definition

On 2026-11-07, Crypto Briefing reported that OpenAI's always-on agents, Dots, can now fetch sign-up and login verification codes from a user's connected email inbox and enter them. It works only when the user has granted permission. Early user feedback says Dots sometimes hesitate before entering a code even with access. OpenAI has not yet listed the feature in its public release notes.

## Key facts

- **The feature**: during a sign-up or login flow, a Dot fetches the six-digit code sent to a connected inbox and enters it on the site asking for it. The option started appearing in ChatGPT over the weekend, and screenshots were shared on Saturday. Using a saved login for a new sign-in still needs the user to confirm.
- **Preconditions**: the user must connect an inbox and grant permission. Dots run on GPT-6 Astra inside isolated cloud computers and connect to more than 4,000 applications through plugins. They launched at DevDay on September 29, 2026.
- **Safeguards**: Auto-review checks the planned step before execution, and Custom Rules set task-authorization rules. High-risk actions such as transaction confirmations and changes to sensitive data are restricted. The "hesitation" in early feedback appears to come from built-in security configurations.
- **Access**: ChatGPT Pro and Business Premium subscribers (one Dot included in qualifying subscriptions), plus an Enterprise beta. Pro starts at $100 a month.

## Why it matters (solo-developer view)

1. **One more "human hand" removed from the agent loop**: a 2FA code is the core of a "a human verifies this" step. When the agent fetches and enters it, the identity check of logging in is itself automated. What remains as a defense is OpenAI's high-risk action blocking.
2. **Permission design is security design**: the feature rests on "a connected inbox plus user permission." Which inbox to connect and what the agent may use codes for is the user's permission decision — scoping agent permissions is the security work here.
3. **The "hesitation" is informative**: Dots pausing before entering codes shows the safety configuration actually constrains model behavior — though the exact cause has not been confirmed.

## Limitations (stated)

- This is based on reporting and user feedback, not an OpenAI announcement. It is not in the public release notes yet, and the exact cause of the "hesitation" is unconfirmed.
- No independent assessment exists yet of the security risk of agents handling 2FA codes.

## Related concepts

- [[concepts/persistent-agent]] — Always-on agents with their own schedules and identities
- [[concepts/agent-supply-chain-security]] — Trust model for external tools, skills and agents
- [[concepts/openai-gpt6-astra-safety-underperformance]] — GPT-6 Astra's quiet safety underperformance — the model Dots run on
- [[concepts/claude-duet-proactive-agent]] — Anthropic's Claude Duet, a proactive agent research preview

## Sources

- [OpenAI Dots email 2FA codes source](raw/articles/2026-11-09-openai-dots-email-2fa-codes.md)
