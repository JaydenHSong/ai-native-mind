---
title: "OpenAI's 211-Minute Outage — Two Auth Database Replicas Fail Together, 75% of Requests Fail"
category: concepts
tags: [openai, infrastructure, reliability, outage, postgres, single-point-of-failure]
created: 2026-11-22
updated: 2026-11-22
sources:
  - "raw/articles/2026-11-22-openai-outage-211-minutes-postgres-replicas.md"
related:
  - "[[concepts/gen-ai-observability]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/ai-debt-boom-cracking]]"
status: draft
confidence: medium
---

# OpenAI's 211-Minute Outage — Two Auth Database Replicas Fail Together, 75% of Requests Fail

## Start here

**Analogy**: the AI service the whole world uses stopped for three and a half hours. The cause was surprisingly small — two copies of the database that checks "who are you?" broke at the same time during routine maintenance. Once that one gatekeeper stopped, every service lined up behind it fell too. There were two copies, but they failed together, so the backup did not help.

| Term | Meaning |
|------|------|
| **Postgres read replica** | A copy of a database that shares the reading work, easing the load on the original |
| **Single point of failure** | A spot where one failure stops the whole system |
| **Postmortem** | A report published after an outage explaining the cause and the response |

## One-line definition

From 1:48 PM to 5:21 PM PT on November 21, 2026 — about 211 minutes — failure rates for OpenAI's API and ChatGPT reached as high as 75%. The cause was the simultaneous failure of two Postgres read replicas behind the Primary API service during scheduled maintenance. The single service handling authentication for the whole stack stopped, and the whole stack went down with it. OpenAI published a postmortem the same day.

## Key points

- **Time and scale**: November 21, 13:48–17:21 PT, 211 minutes total (about 3.5 hours). Failure rates hit 75% for both paid and free ChatGPT and the API.
- **Cause**: two Postgres read replicas used by the Primary API service — which handles authentication for the entire stack — failed simultaneously during scheduled maintenance. The replicas were carrying the load on the authentication path: a structural single point of failure.
- **Impact**: the full API surface (Chat Completions, Fine-tuning, Embeddings, Images, Batch, Audio, Moderations, Realtime, Files) and ChatGPT (chat, login, search, file uploads, voice mode).
- **Recovery and verification**: recovered by spinning up two new replicas in the same region; restored on the evening of November 21, all systems normal by the morning of November 22. Switching queries 100% to the primary database confirmed the replicas were the cause.
- **Prevention**: a moratorium on similar maintenance, configuration changes to reduce connection churn, and a feature flag to drain traffic from replicas in percentage steps.
- **Market context**: it landed the day after the Nasdaq-100 fell 5.61%, which amplified the impact. OpenAI is private, so MSFT (−2.8%, $484.52) served as the proxy indicator. Some outlets reported the outage as 213 minutes.

## Why it matters (solo-developer lens)

1. **Two replicas dying together is structure, not coincidence**: the same maintenance, the same configuration, the same region — the same failure arrives together. Your own agent stack needs more than "we have a backup": does the backup die from the same cause? That is a failure-mode design question for [[patterns/agent-server-harness]].
2. **Authentication is the choke point of the whole stack**: it was not the model calls that stopped — it was the service that checks "who you are" — and the entire API surface and ChatGPT fell with it. In agent operations, the auth and permissions path is a single point of failure to check before the model.
3. **The price of depending on one provider**: a stack running on OpenAI alone had no answer for those 211 minutes. A fallback model or a standby provider is not a cost question — it is a question of "can you survive three and a half hours?" It is time to put "how the fallback behaves during a provider outage" into the observability metrics of [[concepts/gen-ai-observability]].

## Limits (stated explicitly)

- The duration is 211 minutes per OpenAI's postmortem, but some outlets reported 213 minutes — a two-minute gap, so read minute-level figures with the source attached.
- The cause and recovery details come from OpenAI's own postmortem (a primary source), with no independent external verification yet.
- confidence is medium — the official OpenAI postmortem plus confirmed recovery, but the duration figures differ across outlets.

## Related concepts

- [[concepts/gen-ai-observability]] — OpenTelemetry GenAI and agent semantic conventions, traces and standard instrumentation — the basis for knowing "what died" during an outage
- [[patterns/agent-server-harness]] — the agent backend behind HTTP, queues, and SSE — where single-point-of-failure and fallback design live
- [[concepts/ai-debt-boom-cracking]] — the cracking of the debt-fueled AI boom — the market context, with the Nasdaq rout landing the day before the outage (2026-10-16)

## Sources

- [OpenAI's 3.5-hour outage — two auth database replicas fail together, 75% of requests fail (AI Agent Update, OpenAI, 11-22)](raw/articles/2026-11-22-openai-outage-211-minutes-postgres-replicas.md)
