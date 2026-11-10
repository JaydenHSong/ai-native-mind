---
title: "Anthropic Message Threads — Cutting Latency for Long-Running Agent Sessions (Beta)"
category: concepts
tags: [anthropic, claude, messages-api, latency, agents]
created: 2026-11-04
updated: 2026-11-04
sources:
  - "raw/articles/2026-11-04-anthropic-message-threads-beta.md"
related:
  - "[[concepts/anthropic-claude-cowork-enterprise-unified]]"
  - "[[concepts/context-engineering]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: high
---

# Anthropic Message Threads — Cutting Latency for Long-Running Agent Sessions (Beta)

## Start here

**Analogy**: instead of carrying the entire meeting transcript back in every time, you say "continuing from last time" and hand over only what is new. The reading load is the same, but the carrying is lighter, so the answer starts sooner.

| Term | Meaning |
|------|------|
| **TTFT** | Time to first token |
| **Messages API** | Anthropic's API for conversational exchanges with Claude |

## One-line definition

Public beta from 2026-11-02: Anthropic's Message Threads let API clients send only new messages plus the previous response ID instead of the full conversation history each turn, cutting median TTFT by about 35% for 500k–1M token requests.

## Key facts

- **Mechanism**: add the thread parameter to Messages API requests. The first request sends the full conversation and starts a thread; later requests send only new messages and the previous response ID. Direct API use requires the beta header message-threads-2026-08-12.
- **Effect**: median TTFT down about 35% for requests of 500,000 to one million tokens. Enabled by default for most Claude Code users.
- **What it is not**: Claude still reads the full conversation every turn, so token usage, pricing and rate limits are unchanged. Only retransmission overhead is removed.
- **Lifetime**: threads are held encrypted in memory and never written to disk. A thread expires five minutes after its last request, after which the client must resend the full conversation to start a new one. Threads are deleted no more than one hour after last use.
- **Availability**: public beta on the native Claude Platform, Claude Platform on AWS, Claude in Microsoft Foundry, and Anthropic-managed Claude models on Google Cloud. Zero-data-retention and HIPAA configurations are excluded.
- **Best fits**: active sessions where latency matters — long-running coding agents, computer-use agents, and document- or image-heavy workflows.

## Why it matters (solo-developer view)

1. **The long-session bottleneck surfaced in transmission**: as context grows, resending it dominates response delay. Session persistence can now be delegated to an API feature in harness design.
2. **This is a speed win, not a cost win**: token billing is unchanged, so the feature buys user experience, not margin. Do not confuse latency optimization with cost optimization.
3. **The five-minute expiry is a design constraint**: threads are a transmission optimization, not storage. Apps must keep their own conversation history and implement a full-resend fallback on expiry.

## Limitations (stated)

- The 35% figure is Anthropic's own measurement, without independent verification, and applies only to the 500k–1M token band.
- Public beta status means the launch scope and schedule may change.

## Sources

- [Message Threads source](raw/articles/2026-11-04-anthropic-message-threads-beta.md)
