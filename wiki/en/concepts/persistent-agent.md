---
title: "Persistent Agent"
category: concepts
tags: [agent, persistent-agent, openai, devday, proactive-agent, dots, chatgpt-space, workspace]
created: 2026-09-27
updated: 2026-10-02
sources:
  - "raw/articles/2026-09-27-openai-persistent-agent-o.md"
  - "raw/articles/2026-09-28-openai-devday-o-leak-update.md"
  - "raw/articles/2026-09-29-openai-spaces-workspace-rumor.md"
  - "raw/articles/2026-09-29-openai-devday-2026-keynote-confirmed.md"
  - "raw/articles/2026-10-02-openai-dots-always-on-agents.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: medium
---

# Persistent Agent

## Start here

**Analogy**: a secretary who keeps their own notebook, remembers your habits, and greets you in the morning before you say a word — instead of a temp you re-brief from scratch every day.

| Term | Meaning |
|------|---------|
| **Persistent agent** | An agent that runs continuously and proactively with its own persistent identity and memory |
| **"O"** | The persistent always-on agent OpenAI is reportedly set to announce at DevDay 2026 |

## One-line definition

A persistent agent is an **"assistant you live with"** that keeps its own schedule, stores what you say for later use, and acts on its own — as opposed to a session-bound agent that resets when the conversation ends.

## The leak (2026-09-27, TestingCatalog internal source, via PANews)

- OpenAI is set to announce the persistent always-on agent **"O"** at DevDay 2026 (9/29)
- **Custom personality, persistent memory, proactive behavior, multi-channel deployment** (chat, voice, XR, email)
- Has its **own schedule and identity**, acts as an **account manager / personal agent / digital twin**
- The article frames this as "the transition from tools to digital identities" — when many agents persist, society may need to "accommodate digital personalities"

## Why it matters (solo-developer view)

1. **The evaluation axis shifts**: for a persistent agent, the relevant question is not per-run task success but **long-term trust accumulation and failure-amplification** — one bad decision persists across time.
2. **Security surface expands**: persistent memory = a permanent attack surface. A prompt-injection lodged in long-term memory repeats every day — the [[concepts/agent-supply-chain-security]] tier model needs a "time axis" (memory poisoning, context rot).
3. **Attribution becomes time-bound**: [[concepts/agent-attribution]] asks "which agent, under whose responsibility" — for persistent agents, "the agent's continuity" itself becomes an attribution object (which version, since when).

## Limits (stated explicitly)

- **Single internal-source leak** — an unreleased-product rumor, not a confirmed announcement
- The "digital identity" framing is the article's rhetoric, not a verified product design
- **Verification point: DevDay 2026 (9/29)** — if "O" is announced, promote this page from rumor to product page; if not, delete or refile as "unconfirmed"

## 2026-09-28 Update — DevDay eve: "o, your always-on assistant" spotted

One day before DevDay (9/29), more leaks — the silhouette is sharper, but pricing is still unconfirmed.

- **New clue**: on 9/26 the ChatGPT Pro upgrade page briefly showed "o, your always-on assistant" before being removed within hours. The config still carries the display name "O" + email suffix "-o".
- **Expected lineup**: 12+ products — "O", GPT-6 Cyber (app-only Daybreak Red tier), Managed Agents for long-running tasks.
- **Competition**: Anthropic Conway / Claude Managed Agents, Meta Muse, xAI Grok Bot (9/5), Google Gemini Spark — always-on agents becoming the platform battleground.
- **Excluded**: rumor-grade aggregator details (63 languages, Cerebras fast mode) with no primary source.
- **If confirmed at tomorrow's (9/29) keynote**, promote this page; if not, archive. Confidence stays **low**.

## 2026-09-29 Update — "Spaces": where the resident agent lives

- **The "Spaces" rumor** (tokenpost, 9/28): a collaborative workspace where people and AI agents co-create and co-edit documents and artifacts in one shared environment — observed as a merge of Canvas co-editing + shared projects (task context) + workspace agents (long-running work).
- Product name, timeline, and pricing all unconfirmed — rumor grade; confidence stays **low**.
- "O" (the resident agent) and "Spaces" (the resident agent's home) are the same thread: the **identity (O)** and the **workspace (Spaces)** of the agent that left the chat window are arriving as a pair.
- **If confirmed at today's (9/29) 10am PT DevDay keynote**, promote this page — check "O" confirmation/denial, Spaces disclosure, and any Astra-replacement announcement together.

## 2026-09-29 Update — DevDay keynote: "O" confirmed as Dots

The "O" rumor was confirmed at the keynote as **"Dots"** (Fort Mason, 9/29 10am PT). The promote-or-retire decision is **promote**.

- **Spec**: each Dot gets its own cloud computer and browser, works toward a goal in the background, then checks back in. 4,000+ app connections, learns from feedback. Users message their Dots inside ChatGPT, Slack, and Teams (texting coming soon). Powered by GPT-6 Astra.
- **Availability**: at launch, ChatGPT Pro, Business Premium, and Enterprise — price segmentation against Meta's free Muse.
- **The "Spaces" rumor is also confirmed** — the real name is **"ChatGPT Space"**: a shared workspace where teammates and Dot agents work together. **"Pages"** (co-created human+agent documents — images, writing, charts, visualizations) launched alongside. The identity (O) + workspace (Spaces) pair materialized exactly as paired.
- **Competition settled into a bracket**: OpenAI Dots vs Meta Muse vs Anthropic Conway / Claude Managed Agents vs xAI Grok Bot vs Google Gemini Spark — always-on agents as the platform battleground.
- Confidence **low → medium** (multiple on-site reports; the official recap cited via third parties — upgrade to high once the primary recap is confirmed).

## 2026-10-02 Update — Dots official launch specs + pricing (post-DevDay reporting)

The "O" → "Dots" confirmation at DevDay (9/29) is now a launched product with published pricing (memeburn, 10/2). A "remarkably capable, always-on" agent that proactively works on the user's behalf.

### Pricing (first disclosure)

- The first dot is included at **no extra cost with ChatGPT Pro and Business Premium**.
- Conversations with a dot don't count against the usage allowance — but work a dot starts and manages (inside Codex and ChatGPT Work) does. OpenAI calls the allowance "for deeper work," more generous in the first month.
- Paid tiers for additional dots, speed, and monthly work volume are planned — prices not disclosed.
- Plan reshuffle alongside: new **Pro 500 ($500/mo)** — includes the Ultrafast speed mode, 25× the Plus allowance. New Pro 200 sign-ups get a lower usage allowance than before (existing subscribers keep theirs until 10/29) — subscription terms with a **time dependency**.

### Co-launch — GPT-6.1 Sol

- GPT-6.1 Sol: "near-Astra intelligence at 1/5 of Astra's standard token price" ($2/$10 per 1M). For an always-on agent, cost per hour matters as much as raw capability — whether Dots runs on Sol is undisclosed (memeburn's reading).
- Dots was announced on GPT-6 Astra at the keynote, but Astra was pulled the same morning → Sol is effectively the substitute. See [[patterns/ai-cost-management]]'s 2026-10-02 update.

### Parallel context

- **"Sign in with ChatGPT"** — token-based login, leveraging 1.2B weekly users as an ecosystem entry point.
- **MCP Apps** — ThursdAI calls it the fourth "App Store" attempt, this time on MCP Apps.
- Fortune: collaboration features are the foundation of a Google Workspace challenge — dots are "the first tenants of a building" open to 1.2B users.

### Competition (AP)

- Head-on competition with Meta's personal agent **Muse** (surging after last week's Meta conference).
- Altman dodged on-stage questions about the pulled Astra model — "AI is not a cog in a giant machine but gives people more power" (the Renaissance analogy).

### In this page's context

- Leak (9/27) → confirmation (9/29) → launch + pricing (10/2): rumor-to-product-to-billing in five days.
- The billing axis for resident agents moves from "per call" to "residency + work volume" — the same current as [[patterns/ai-cost-management]]'s two-axis subscription.
- Confidence stays **medium** (multiple on-site reports; official recap via third parties).

## Sources

- [OpenAI DevDay leak: persistent always-on agent "O" with custom personality and multi-channel deployment](raw/articles/2026-09-27-openai-persistent-agent-o.md)