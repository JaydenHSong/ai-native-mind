---
title: "Persistent Agent"
category: concepts
tags: [agent, persistent-agent, openai, devday, proactive-agent]
created: 2026-09-27
updated: 2026-09-27
sources:
  - "raw/articles/2026-09-27-openai-persistent-agent-o.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: low
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

## Sources

- [OpenAI DevDay leak: persistent always-on agent "O" with custom personality and multi-channel deployment](raw/articles/2026-09-27-openai-persistent-agent-o.md)