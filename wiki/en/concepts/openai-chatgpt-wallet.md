---
title: "OpenAI ChatGPT Wallet — Agents Pay Without Seeing Card Details (Nov 13)"
category: concepts
tags: [openai, chatgpt, wallet, agents, payments, commerce]
created: 2026-11-14
updated: 2026-11-14
sources:
  - "raw/articles/2026-11-14-openai-chatgpt-wallet.md"
related:
  - "[[concepts/sierra-poppy-1-0]]"
  - "[[concepts/openai-dots-email-2fa-codes]]"
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/us-banks-block-ai-agents]]"
  - "[[concepts/mcp]]"
status: draft
confidence: high
---

# OpenAI ChatGPT Wallet — Agents Pay Without Seeing Card Details (Nov 13)

## Start here

**Analogy**: instead of handing the agent your whole wallet, you hand it a single-use payment pass stamped with your fingerprint at the checkout. The agent pays the money but never learns the card number.

| Term | Meaning |
| **Tokenization** | Paying with a one-time substitute number instead of the real card number |
| **Biometric approval** | The user confirming each payment directly with Face ID or a fingerprint |
| **dots** | OpenAI's always-on agents — Wallet only works inside a dot conversation |
| **Debit and virtual cards** | Card types Wallet does not support — credit cards only |

## One-line definition

On 2026-11-13, OpenAI launched ChatGPT Wallet. The always-on 'dots' agent completes a payment on the user's behalf, but neither the agent nor the merchant ever sees the real card number. The user must approve every payment with biometric authentication.

## Key facts

- **How it works**: after the user checks the item, total, and card and approves with Face ID or a fingerprint, the payment network issues a tokenized substitute card number. The agent and the merchant never see the real card details.
- **Partners**: built jointly with American Express, Mastercard, and Visa. Fraud detection comes from Forter, Riskified, Sardine, and Signifyd; payment processing from Adyen, Checkout.com, and Stripe.
- **Launch scope**: US ChatGPT Pro subscribers, 18+, with an eligible US-issued credit card (Amex, Chase, Mastercard, Visa) only. Debit and virtual cards are not supported. It works only inside a dot conversation, not in Chat, Work, or Codex.
- **Fees**: 0% OpenAI fee at launch. A future feature is planned to let users delegate spending within per-category, per-period limits.
- **Scale**: OpenAI says ChatGPT has 1.2 billion weekly users.
- **The opposite direction**: United Airlines changed its contract of carriage on 2026-11-11 to ban unauthorised AI agents from buying tickets. Payment works, but merchant permission is a separate fight.

## Why it matters (solo-developer view)

1. **Payment — the last bottleneck of agent commerce — is now closed**: if Poppy is the entrance, Wallet is the checkout. The flow of an agent choosing a product and actually paying for it is technically complete.
2. **'Biometric approval every time' is the canonical permission model**: hand the agent money, but keep a human at the gate for every single transaction. My own harness should structure money actions the same way — automatic execution plus per-transaction approval.
3. **Merchant permission is a separate fight**: as United's ban shows, the technology working does not mean the terms allow it. My own service needs a policy on whether it accepts agent payments, and on what terms.

## Limitations (stated)

- Limited to US Pro subscribers, credit cards, and dot conversations — a narrow scope so far.
- The 1.2 billion weekly users figure is OpenAI's own announcement.
- The spending-limit delegation feature is still at the planning stage.

## Related concepts

- [[concepts/sierra-poppy-1-0]] — Sierra Poppy 1.0, launched the same day, the agent entry standard (2026-11-13)
- [[concepts/openai-dots-email-2fa-codes]] — OpenAI Dots, the always-on agent inside which payment works (2026-11-09)
- [[patterns/agentic-commerce]] — the paradigm of agents choosing products and paying for them
- [[concepts/us-banks-block-ai-agents]] — US banks blocking AI agents from accounts, contrasted with this approval-based payment path (2026-10-24)
- [[concepts/mcp]] — the agent-to-tool connection standard, the foundation of payment agents (2026-04)

## Sources

- [OpenAI ChatGPT Wallet launch source](raw/articles/2026-11-14-openai-chatgpt-wallet.md)
