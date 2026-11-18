---
title: "Agentic Commerce Goes Mainstream — Gemini Tasks Free with Calling and Payments, Plus Klarna's Assistant"
category: concepts
tags: [google, gemini-tasks, agentic-commerce, klarna, agent-payments]
created: 2026-11-18
updated: 2026-11-18
sources:
  - "raw/articles/2026-11-18-agentic-commerce-gemini-tasks-klarna.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/openai-chatgpt-wallet]]"
  - "[[concepts/tool-use]]"
  - "[[concepts/mcp]]"
status: draft
confidence: medium
---

# Agentic Commerce Goes Mainstream — Gemini Tasks Free with Calling and Payments, Plus Klarna's Assistant

## Start here

**Analogy**: now you can tell an AI assistant "find the cheapest place and buy it for me," and the assistant will call the store itself to ask the price, then pay with your money. It used to be a $20-a-month paid feature; now it is free. On the same day, Klarna released an assistant inside chat apps that shops, books, and runs errands for you. Agents spending money is no longer a demo — it is a mass-market product.

| Term | Meaning |
|------|------|
| **Agentic commerce** | AI agents finding, buying, and booking things on a person's behalf |
| **Gemini Tasks** | Google's agent mode — it investigates and plans in the background to get work done |
| **AP2 (Agent Payments Protocol)** | The agreed rules (protocol) agents use when paying — setting limits and approvals |
| **Token (payments)** | A one-time stand-in number used instead of the real card number — if it leaks, the card is not compromised |

## One-line definition

Google made its agent mode Gemini Tasks free and added calling and payment features, and on the same day Klarna announced an AI assistant inside WhatsApp and iMessage that shops, books, and runs errands for you. Agents directly calling to check prices and stock and spending money have become a **free mass-market product**, not a demo.

## Key points

- **Gemini Tasks goes free**: on 2026-11-17, Tasks — which previously required a $19.99/month AI Pro subscription — became free in the U.S., Japan, Korea, Canada, Australia, and India. It runs on the new Gemini 4 Hydrogen model (the model itself launched November 12 and is outside the scope of this item).
- **Calling**: first in the U.S., Tasks calls local businesses in parallel to check prices, stock, and bookings. It identifies itself as AI on the call, and businesses can opt out of receiving calls. Not available in IN, LA, MN, MT, or NE.
- **Payments**: checkout and payment via Google Pay. Built on the Agent Payments Protocol (AP2), with Visa and Mastercard token support (Amex coming soon). Users set a spending limit (up to $1,000, within 14 days). Receipts are stored in Google Wallet (Wallet is expanding to iOS).
- **Input**: create tasks by text, or forward an email to gemini@google.com to create a task. An agent mode that investigates and plans in the background.
- **Klarna assistant**: on the same day, Klarna announced a concierge-style AI assistant — finding the best products and prices, buying, handling returns, booking restaurants, and running everyday errands. It works inside WhatsApp, iMessage, and the Klarna app. Live for a small set of early users, with a public waitlist opened. Framed with the control message "you don't pay until it arrives." Announced with Q3 results: revenue above $1B for the fourth straight quarter (+12% YoY), net loss $65M, GMV $36.1B (+10%). It extends the 2024 OpenAI-based customer-service assistant (which handled 80% of service chats in 2025).

## Why it matters (solo-developer lens)

1. **Agents expand from APIs to real-world tools**: [[concepts/tool-use]] has moved from API calls to phone calls and payments. "An AI that makes phone calls" is now a default feature of a free product, not a capability. The design is already colliding with reality — businesses can refuse calls, and some states are excluded.
2. **Control mechanisms are part of the design now**: spending limits (up to $1,000, within 14 days), Klarna's "you don't pay until it arrives" framing, receipts stored in Wallet — from an [[concepts/ai-orchestration]] angle, mass-market agents are now judged as much by "how safely they are fenced" as by "how well they perform."
3. **Payment protocols become infrastructure**: agent payment protocols such as AP2 are emerging as an axis of agent infrastructure alongside [[concepts/mcp]]. The next chapter of [[patterns/agentic-commerce]] is "which protocol becomes the standard."
4. **Chat apps become the shopping front door**: Klarna's assistant works inside WhatsApp and iMessage — users call the agent from chats they already use instead of installing a new app. It is a different branch of the same direction as [[concepts/openai-chatgpt-wallet]]'s in-ChatGPT payments.
5. **What free means**: with the $19.99/month barrier gone, the Tasks user base grows. The bottleneck for agentic commerce moves from "does the feature exist" to "how many people use it every day."

## Limits (stated explicitly)

- Calling is U.S.-first and unavailable in five states (IN, LA, MN, MT, NE) — do not confuse the free rollout in Korea with the calling feature's coverage.
- The Klarna assistant is live for a small set of early users plus a public waitlist — not yet a mass launch.
- Klarna's Q3 figures (revenue above $1B, net loss $65M, GMV $36.1B) are company-reported.
- The Gemini 4 Hydrogen model itself launched November 12 and is outside the scope of this item.
- confidence is medium — Google and Klarna official announcements crossed, but no real-use verification of the calling and payment features yet.

## Related concepts

- [[patterns/agentic-commerce]] — the agentic-commerce pattern; this free rollout and payment expansion is its next chapter (2026-10-13)
- [[concepts/openai-chatgpt-wallet]] — OpenAI's ChatGPT Wallet, agent payments with tokenized cards and per-purchase biometric approval (2026-11-13)
- [[concepts/tool-use]] — agents expanding to real-world tools such as phone calls and payments
- [[concepts/mcp]] — agent payment protocols such as AP2 emerging as an axis of agent infrastructure

## Sources

- [Agentic commerce goes mainstream — Gemini Tasks free with calling and payments, plus Klarna's assistant (Google, 11-17)](raw/articles/2026-11-18-agentic-commerce-gemini-tasks-klarna.md)
