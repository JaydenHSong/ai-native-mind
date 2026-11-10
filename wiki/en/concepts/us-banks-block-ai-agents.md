---
title: "US Banks Block AI Agents — 'We Cannot Tell Who Directed It' Is the Core Problem"
category: concepts
tags: [banks, ai-agents, account-access, authentication, open-banking, agent-authority, fintech]
created: 2026-10-24
updated: 2026-10-24
sources:
  - "raw/articles/2026-10-24-us-banks-block-ai-agents.md"
related:
  - "[[concepts/websites-block-ai-agents]]"
  - "[[concepts/mastercard-agent-pay-machines-developer-access]]"
  - "[[patterns/agent-authority-model]]"
status: draft
confidence: high
---

# US Banks Block AI Agents — 'We Cannot Tell Who Directed It' Is the Core Problem

## TL;DR

First reported by Axios on 2026-10-22 and confirmed on 2026-10-23, major US banks — JPMorgan Chase, Bank of America, Wells Fargo, Citi, Morgan Stanley, Charles Schwab — are restricting third-party AI agents from logging into customer accounts or transacting directly. Citi confirmed it does not permit third-party AI agents or assistants to log in or transact within its digital banking platforms, while keeping limited read-only access via Citi-approved open banking providers. The core issue is an authentication gap: banks can verify which credentials logged in, but not whether the activity behind them was user-directed or an agent's own interpretation. Read-only access is emerging as the interim standard.

## Key facts

- **Scope of the block**: agents logging in with customer usernames and passwords via browsers, Computer Use tools, or OpenClaw-style agents. Bank policy generally requires the account holder to log in personally.
- **Bank-by-bank**: Citi — login and direct transactions barred, approved open-banking read-only access kept. Wells Fargo — steps taken to block unauthorized agents, confirmed. Morgan Stanley — says it has not observed "rogue AI agents" on its platforms, yet blocks as a precaution. Schwab — blocks unauthorized agents, says attempts are few.
- **The attribution problem**: banks know the credential, not the instruction. An agent acting beyond what the user explicitly approved is indistinguishable from a user-directed login at the credential layer. JPMorgan CEO Jamie Dimon's reported "thousands of rogue agents" remark comes via CNBC's earnings-call account, distinct from bank-confirmed figures.
- **Survey numbers**: two-thirds of financial-services and software CISOs rank agentic AI among their top three cybersecurity risks, more than one-third as their top concern (Palo Alto Networks 2026 study). Ping's October survey: 71% of consumers worry an agent could misrepresent their personality or values; only 22% say they trust AI with no financial transaction at all.
- **The middle ground**: most banks are moving toward read-only agent access — agents that can look but not move money.

## Why it matters

1. **Missing agent identity shows up at money's door**: without a standard proving on whose behalf, and to what extent, an agent acts, finance stays closed to agents. Agent identity and delegation credentials are the next design problem.
2. **Read-only is the near-term answer**: agent finance products should start with read-only views, analysis, and alerts — that is the door banks left open.
3. **The fork in agent commerce**: Mastercard's AP4M opens a payment API while banks block password logins — "official delegation path" vs "credential sharing" is the dividing line.

## Limitations (explicit)

- A 2026-10-24 follow-up claiming unverified agents still reach some accounts admits it did not verify the full Axios original — treat as a follow-up-level claim, not established fact.
- Banks' technical detection methods are undisclosed — the effective scope of the blocks is unverified.
- Some figures (e.g., the Dimon remark) are secondhand or estimates and must stay distinct from bank-confirmed numbers.
