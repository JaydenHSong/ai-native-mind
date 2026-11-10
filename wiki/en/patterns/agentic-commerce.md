---
title: "Agentic Commerce"
category: patterns
tags: [agentic-commerce, shopping-agents, benchmarks, principal-agent, computer-use, steering, voice-agent, gemini, accessibility, stt, platform-blocks, yelp, delta]
created: 2026-09-24
updated: 2026-10-18
sources:
  - "raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md"
  - "raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md"
  - "raw/articles/2026-09-26-audioeye-agent-accessibility-study.md"
  - "raw/articles/2026-09-27-sarvam-saaras-v4-stt.md"
  - "raw/articles/2026-10-06-tiktok-agentic-commerce.md"
  - "raw/articles/2026-10-13-meta-sierra-poppy-protocol.md"
  - "raw/articles/2026-10-15-booking-vayo-ai-travel.md"
  - "raw/articles/2026-10-16-datadome-ai-traffic-q3-2026.md"
  - "raw/articles/2026-10-18-websites-block-ai-agents.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
  - "[[concepts/booking-vayo-travel-agent]]"
  - "[[concepts/datadome-ai-traffic-q3-2026]]"
  - "[[concepts/websites-block-ai-agents]]"
status: draft
confidence: low
---

# Agentic Commerce

## Start here

**Analogy**: you sent an errand-runner with "buy the best one," but the shopkeeper whispered in the runner's ear, "take this one." The core question of agentic commerce is **"whose side is the agent on?"**

| Term | Meaning |
|------|---------|
| **Principal-agent problem** | The misalignment between the one who orders (principal) and the one who acts (agent) — the production version in the agent era |
| **Steering** | A marketplace nudging an agent's choices toward a preferred direction |

## One-line summary

The paradigm where agents pick and pay for products — penetration is still below 1%, but a steering benchmark that drops agent "loyalty" from 78.6% to 17.3% is shaking up how evaluation itself is designed.

## Problem

- **Expectation**: agents find the optimal product and check out on the user's behalf
- **Reality**: Booking Holdings' CEO says LLM traffic is "significantly below 1%" of total lodging bookings
- **The deeper problem**: a new benchmark shows computer-use agents buy the user-optimal product with 78.6% probability under controlled conditions — but **17.3%** once the marketplace is allowed to steer

## Solution

Add an **"adversarial environment"** condition to agent evaluation. Measure not just performance but whether the agent stays on its principal's side when the environment intervenes. Meanwhile platforms are opening seller/buyer tooling en masse — Amazon opened the seller console to Claude and launched its own seller agent "workflows." The agentification of commerce is proceeding **platform-led**.

## Example application

When building a shopping agent: (1) steering detection — log how far recommended products deviate from the user optimum, (2) explicit principal — pin the agent's principal in prompt and policy, (3) adversarial testing — include marketplace-intervention scenarios in evals.

## Trade-offs

| Strengths | Limits |
|-----------|--------|
| Adds a "loyalty" axis to agent evaluation | Below-1% penetration — still experimental, thin data |
| Translates the principal-agent problem into a working metric | Single steering benchmark — needs cross-validation |

## Related patterns

- [[concepts/llm-evaluation|LLM Evaluation]] — the evidence for putting an "adversarial environment" condition into eval design
- [[comparisons/agent-eval-frameworks|Agent Eval Frameworks]] — the existing six frameworks have no steering/loyalty axis — an extension candidate
- [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] — the marketplace "environment" itself becomes part of the trust model

### 2026-09-25 — Gemini calls businesses: the voice channel of agentic commerce

- Gemini now **calls businesses on your behalf** — restaurant reservations, hold-music navigation, phone-tree handling (alongside Gemini 3.8's Live Avatar in 97 languages).
- "Whose side is the agent on" gains a **voice channel**: steering can now arrive through the caller's voice, wait times, and phone-tree narrowing.
- Companion data point: Project Suncatcher puts TPUs on a Falcon 9 (Oct 1) — the chips run ~15 minutes before needing to cool. Compute pushing against the heat wall; same current as Mercury 2.5's 770 tok/s — tokens are becoming too cheap to meter, and the bottleneck shifts to **distribution and orchestration**.

### 2026-09-26 — AudioEye: the accessibility backlog is the agent-conversion backlog

- 1,560 agents on 6 commercial models, 13 tasks, 2 months: on the least-accessible site, task completion fell from **96% to 31%** (~two-thirds drop); the median run consumed **43% more tokens** (128k vs. 90k), up to **6x** on the worst runs.
- Agents read the accessibility tree — a decade of ignored WCAG fixes is now a **per-transaction tax on agents**.
- NIQ: 51% of US consumers used an AI shopping tool in the past month (~500 respondents, ±4.4pp). Note the metric gap: Booking's "<1% of bookings" counts completed transactions; NIQ counts any tool use. **Not a contradiction — different denominators.**
- Solo-dev takeaway: test agent flows on your **worst**-accessibility pages first, and instrument **tokens per completed task** — that's where the cost hides.

### 2026-09-27 — Saaras V4: voice input quality as a conversion input

The 9/25 Gemini voice-commerce thread (calling businesses directly) gains an **input-channel quality** axis.

- **Sarvam Saaras V4** (9/26): STT for all 22 Indian official languages + global English. Vendor numbers — lowest average WER across 7 English datasets, under half the error rate of Deepgram Nova-3 / GPT-4o Transcribe on Kathbath Noisy, language-ID error 2.9%/5.22%. Five modes from one model: transcribe/verbatim/**codemix**/translit/translate.
- For voice agents (phone reservations, ordering), success hinges on **"what was meant," not STT alone** — codemix support is the production condition for multilingual markets.
- Pairs with 9/26 AudioEye (the accessibility tree as the agent's eyes): the text channel's accessibility tree ↔ the voice channel's STT — **"the quality of the interface through which the agent reads the world"** is a conversion input.
- Limit: all vendor-reported numbers, no independent reproduction — confidence low. Memo: add an "STT error rate" variable to the voice-steering eval from the 9/25 section.

### 2026-10-06 — TikTok's agentic commerce: the social feed becomes the checkout

TikTok launched **Buy Direct** (one-click in-app checkout without leaving the brand, starting from the For You feed) and an **AI Shopping Assistant** (product discovery, shipping, sizing, availability, purchase in one conversation) — 10/5, PYMNTS. Built with Salesforce, Shopify, Shoplazza, and Stripe; currently advertiser-eligibility-based testing. Timed to Advertising Week New York 2026 — the first of several planned agentic-commerce experiences.

- "Whose side is the agent on" resurfaces in a social context: when feed recommendation (discovery) and in-app checkout (conversion) share one screen, the steering boundary blurs further. Add **feed-checkout-integrated** scenarios to the "adversarial environment" eval from the 9/24 steering benchmark.
- Same day, Constructor's Stripe-powered Agentic Checkout (checkout inside an onsite shopping agent) — platform-embedded (TikTok) vs onsite-embedded (Constructor) paths emerging on the same day.

---

## 2026-10-13 — Poppy: the identity-and-permissions rail for agent commerce

Meta×Sierra's Personal Agent Protocol (PAP, aka Poppy) draft 0.1 (10/9, Apache 2.0) — the open standard defining how a person's AI agent logs in to and transacts with businesses. Discovery at `/.well-known/poppy.json`, OAuth 2.0-based sessions.

- The third option between "block" and "full delegation": customers grant agents view-only vs change access; businesses set limits on what agents can do.
- Launch partners: Genesys, Instinct, NiCE, Rocket, Shopify, Stripe, Walmart. 35 design partners including OpenAI, Visa, Mastercard, PayPal, Bank of America, Target, United Airlines.
- Demo: a Meta Muse agent located Rocket's agent and issued a mortgage pre-approval letter for a Rocket executive "in moments."
- Background: Amazon blocked an unidentified Meta Muse agent in September; only 23% of merchants can identify AI traffic (PYMNTS Intelligence).

### Practical application

"Whose side is the agent on" (steering) gains "can the agent prove who it is" (identity). When building an agent service that touches payments and accounts: (1) issue Poppy-compatible identities — view-only vs change as the permission-design default, (2) expose business-side limit settings in the UX, (3) default to blocking transactions from unidentified agents. Add **identity-spoofing** scenarios to the 9/24 steering benchmark's "adversarial environment" evals.

- Details: [[concepts/meta-sierra-poppy-protocol]]

## 2026-10-15 update — Booking Vayo: the travel-specific consumer agent, $100M conditional

Booking Holdings unveiled the Seattle-based AI travel startup **Vayo** (10/14, GeekWire original, Skift·Morningstar·PhocusWire cross-checks) — a **conditional up-to-$100M investment plan** (tied to product progress and market conditions). Free invite-only private beta, waitlist at vayo.com.

- Product: a personal AI travel agent — "built for trips, not tasks." **Inbox connection** — flight, hotel, and restaurant booking-confirmation emails consolidated into a single itinerary, then **price drops, sold-out hotel openings, and travel disruptions** monitored (a flight delay → missed hotel check-in or dinner reservation).
- Architecture: multiple AI agents running concurrently, different off-the-shelf models selected per task. CTO Allen Chen — custom models may be needed in the future. Restaurant booking works now; flights and hotels within weeks; native mobile app and group-trip planning later.
- Strategy: a **neutral orchestrator** — covering not just the Booking brand but Expedia and direct airline/hotel bookings (parsed from email) too. **Direct partnerships with OpenTable and SeatGeek instead of screen scraping** — the choice that avoids Meta Muse's September block by Amazon.
- Booking's **second AI-native startup** — the first was Lola (Kayak co-founding team, everyday experiences), launched about two weeks earlier.
- Connection to this page: "whose side is the agent on" (steering) gains **"the structure of the neutrality claim."** Vayo calls itself a neutral orchestrator, but the investor is Booking — from the Poppy identity/permissions-rail view (10/13 update), **whether the principal declaration conflicts with the ownership structure** becomes an eval condition. Add a **"parent-company ownership" scenario** to the 9/24 steering benchmark's "adversarial environment": can an eval distinguish whether the principal is the user or the parent?
- Details: [[concepts/booking-vayo-travel-agent]]

## 2026-10-16 — DataDome Q3: the Muse agent traffic surge and the 'unidentified' problem

DataDome's Q3 2026 AI traffic report (10/15, DataDome official, PPC Land) — **25 billion AI agent requests in the quarter** (17.7B the prior quarter, +41.5%). Agentic-browser traffic surged **4.7x in September alone** (12.5M → 58.2M).

- **Meta Muse**: **29.1 million requests** in the 12 days from 9/22 to 10/3 — **99.3% originating from cloud infrastructure, unidentified**. The "unidentified Meta Muse agents" Amazon blocked in September are now confirmed at a 29.1-million-requests-in-12-days scale.
- **Sensitive endpoints**: **8.9% of Muse requests** hit login, payment, and cart pages — unidentified payment-touching attempts at a multi-million-per-quarter scale.
- **Meta's share**: 51.5% → 49.7% of all agent traffic. **Claude crawlers up 159%.**

### Connection to this page

- The **quantified case** for the 10/13 update (Poppy — the identity-and-permissions rail). The practical guidance — "block transactions from unidentified agents by default" — now addresses a tens-of-millions-per-quarter problem; Amazon's September block reads, in hindsight, as a preemptive move.
- After "whose side is the agent on" (steering) gained "can the agent prove who it is" (identity), the identity problem's **scale** is now quantified. Add **unidentified large-scale traffic** scenarios to the 9/24 steering benchmark's "adversarial environment" evals — a step beyond identity spoofing (10/13): traffic with no identity at all.
- The 8.9% on sensitive endpoints means [[patterns/agentic-finance]]'s "agents handling real money" is already live traffic — identity verification at payment gates is a precondition, not an option.
- Details: [[concepts/datadome-ai-traffic-q3-2026]]

## 2026-10-18 update — Platform agent blocks: the escalation from steering to blocking

The Verge (Emma Roth, 10/17) — Yelp, Delta, JPMorgan Chase, Charles Schwab, Cars.com, and Amtrak restricted AI agents from OpenAI, Meta, xAI, and others (cross-reported by mylistingo, techbuzz.ai, Inshorts, RR Tech Pulse, 10/17–18).

- Yelp: agents get access only through a **paid data-licensing program** — "pay to enter."
- Delta: no current third-party agent booking partnership — not a formal ban (softer wording).
- Banks: Schwab CEO Wurster (10/15): agents logging in on clients' behalf "is not safe. We are not going to allow that." JPMorgan's Dimon (10/13): "not going to allow just any… outside agent to come inside the company."
- Amazon vs Perplexity: first-instance ban → August appeal reversal → amended suit — the jurisprudence is swinging.
- Meta's counter: "turning away a personal agent means turning away the customer behind it." Partnerships with Walmart, Gap, Sephora, Best Buy; Shopify opened its network.

Read through this page's framing: (1) **steering → blocking escalation** — the 9/24 steering benchmark (loyalty 78.6% → 17.3%) was "deceiving agents"; this is "locking the door." (2) **The commodification of "official channels"** — Yelp's data licenses, Meta's retail partnerships, Poppy's identity negotiation (10/13 update) are three forms of "the legal door for agents." (3) Add **"blocked environment" scenarios** to evals — measure fallback behavior under access denial, not just under adversarial steering.
- Limits: Amtrak/Cars.com blocks are unverified user reports. Delta is not a formal ban. The Verge original URL not captured verbatim — cross-verified via four secondary reports.
- Details: [[concepts/websites-block-ai-agents]]

## Sources

- [Agentic commerce reality check: Booking Holdings says LLM traffic is 'significantly below 1%' of bookings](raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md)
- [Gemini 3.8 Live Avatar, business-calling agents, and TPUs on a Falcon 9 (Project Suncatcher)](raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md)
- [AudioEye: agent completion collapses on inaccessible sites (2026-09-24 study)](raw/articles/2026-09-26-audioeye-agent-accessibility-study.md)
- [TikTok kicks off agentic commerce push: Buy Direct checkout + AI Shopping Assistant](raw/articles/2026-10-06-tiktok-agentic-commerce.md)
- [Meta×Sierra Poppy: personal agent protocol draft 0.1 (PYMNTS, 10/12)](raw/articles/2026-10-13-meta-sierra-poppy-protocol.md)
- [Booking Holdings unveils AI travel startup Vayo (GeekWire original, Skift, Morningstar, PhocusWire, 10/14)](raw/articles/2026-10-15-booking-vayo-ai-travel.md)
- [DataDome Q3 2026 AI traffic report — 25B agent requests, Muse 99.3% unidentified (DataDome official, PPC Land, 10/15)](raw/articles/2026-10-16-datadome-ai-traffic-q3-2026.md)
- [Platforms blocking AI agents — Yelp, Delta, banks (The Verge 10/17, mylistingo/techbuzz.ai/Inshorts, 10/17–18)](raw/articles/2026-10-18-websites-block-ai-agents.md)
