---
title: "Wells Fargo AI Agent Liability Clause — Bank Terms Say 'Your Agent Is Your Responsibility'"
category: concepts
tags: [wells-fargo, banking, ai-agents, liability, regulation, governance, agent-pay]
created: 2026-11-25
updated: 2026-11-25
sources:
  - "raw/articles/2026-11-25-wells-fargo-ai-agent-liability.md"
related:
  - "[[concepts/websites-block-ai-agents]]"
  - "[[concepts/mastercard-agent-pay-machines-developer-access]]"
  - "[[concepts/anthropic-siren-sandbox-escape]]"
status: draft
confidence: low
---

# Wells Fargo AI Agent Liability Clause — Bank Terms Say "Your Agent Is Your Responsibility"

## Start here

**Analogy**: AI agents have started spending your money — buying things and making payments for you. Now the bank has written into its terms: "Whatever your AI does with your money, that is your responsibility. You watch it, and you stop it if something looks wrong." Citi issued a similar warning, and JPMorgan said flatly, "Other people's AI cannot come inside our bank." The technology has reached "AI will buy it for you," but responsibility still sits with "the person pays." The more you use an agent, the more it matters who watches it.

| Term | Meaning |
|------|------|
| **Online access agreement** | The rules you accept when using a bank's app or website; what is written there carries legal weight |
| **AI agent** | An AI that judges and acts on a person's behalf, handling payments, purchases, and bookings itself |
| **AT YOUR OWN RISK** | "At your own responsibility" — if something goes wrong, the customer, not the bank, carries it |
| **Revoke (authorization)** | Taking back an access permission previously granted to an agent |
| **Rogue agents** | Agents that slip out of control and act on their own — a phrase used by JPMorgan's CEO |

## One-line definition

Wells Fargo's November 24, 2026 update to its online access agreement adds a clause making customers solely responsible for their AI agents' actions — the latest case of banks drawing the liability line in their terms as agents begin to move real money through payments and purchases.

## Key points

- **The clause**: customers are solely responsible for monitoring the activity of AI agents acting on their behalf and "maintaining appropriate safeguards," and for making sure agents operate "within the scope of authority you have granted to it or in your best interest." Customers are also responsible for "properly and timely revoking any authorization provided to an AI agent" and stopping its activities.
- **The bank's rights**: Wells Fargo retains the right to update its security rules for AI agents, including requiring users to register their agents with the bank and placing limits on agents' access when needed.
- **Industry pattern**: Citi recently updated its online user agreement to warn customers against using outside AI agents with the bank's platforms and to say customers are responsible for those agents' actions. JPMorganChase CEO Jamie Dimon has warned of "rogue agents" and said third-party agents would not be allowed inside the bank. Charles Schwab CEO Rick Wurster said the brokerage blocks unauthorized AI agents "in the tens and 20s" per week.
- **Background**: agents are starting to act where real money moves — for example, OpenAI's ChatGPT Wallet, built with American Express, Mastercard, and Visa — so banks are drawing the liability boundary in their terms.

## Why it matters (for a solo developer)

1. **Agent governance now extends into contracts**: until now governance meant technical controls — sandboxes, approval gates. Now legal and contractual allocation of responsibility joins it. When connecting your agent to someone else's system, check both the technical permission and the contractual liability.
2. **The duty to watch lands on the user**: the bank says "you watch it." When you give an agent authority over money, you must equip yourself with the means to watch and stop it — alerts, limits, and an instant kill switch.
3. **Blocking is giving way to registration**: Wells Fargo reserving the right to require agent registration signals a future where agents, too, show ID and register. It is the same direction as Workspace MCP's identity requirement.

## Limitations (stated)

- The primary evidence is a single PYMNTS report; the agreement text itself was not directly verified. The Citi, JPMorgan, and Schwab statements are quotations inside the same report.
- How the clause will apply in an actual dispute is unknown. How far "customer responsibility" will be recognized in court will only become clear as cases accumulate.
- Confidence is low — single-report basis, agreement text unverified.

## Related concepts

- [[concepts/websites-block-ai-agents]] — Yelp, Delta, and banks blocking AI agents (2026-10-18). This clause is the next step after blocking: putting liability in writing (2026-11-25)
- [[concepts/mastercard-agent-pay-machines-developer-access]] — agent payment infrastructure; where money is touched, liability follows (2026-11-25)
- [[concepts/anthropic-siren-sandbox-escape]] — the technical side of agent control and boundaries; the clause is the legal side (2026-11-25)

## Sources

- [Wells Fargo Tells Customers They're Responsible for AI Agents (PYMNTS, Nov 24)](raw/articles/2026-11-25-wells-fargo-ai-agent-liability.md)
