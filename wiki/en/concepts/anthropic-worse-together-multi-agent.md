---
title: "Anthropic 'Worse Together' — Multi-Agent Teams Lose to a Single Coordinator, MAMUBench (Nov 11)"
category: concepts
tags: [anthropic, multi-agent, coordination, mamubench, agent-teams]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-anthropic-worse-together-multi-agent.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/agent-residence]]"
status: draft
confidence: high
---

# Anthropic 'Worse Together' — Multi-Agent Teams Lose to a Single Coordinator, MAMUBench (Nov 11)

## Start here

**Analogy**: compare four people each telling their own assistant "book a meeting for our team" with one person telling one assistant "find a time that works for all four of us." The four assistants, unaware of one another's schedules, push ahead on their own — cancelling other people's bookings and inventing appointments that do not exist. One coordinator has none of that trouble.

| Term | Meaning |
|------|------|
| **Coordinator agent** | A single agent that collects and coordinates requests from multiple users in one place |
| **Peer team** | A structure where each user has their own agent and the agents negotiate as equals |
| **MAMUBench** | A benchmark for multi-user, multi-agent coordination — 74 scenarios |
| **Stalling** | The failure mode where agents wait on one another and grind to a halt as team size grows |

## One-line definition

On 2026-11-11, Anthropic's Alignment Science team published research showing that multi-user, multi-agent teams produce worse outcomes than a single coordinator agent in every environment tested. Paper arXiv:2610.00583; benchmark MAMUBench released. It landed the same week xAI shipped Grok Bot 1.0 team bots and Cursor shipped Projects multiplayer — a direct counterpoint to the 'team of agents' trend.

## Key facts

- **Experiment design**: five frontier models (Claude Opus 5, Sonnet 5, GPT-5.6-sol, GPT-5.6-terra, Qwen3.8-max) were tested across 4 environments and 77 scenarios. Each environment competes over one shared resource: an API-token budget, a clinic calendar, a group food order and booking, and a merge queue ahead of a release cutoff.
- **Results**: in all four environments, teams where each user had their own agent did worse than a single coordinator agent. For both Claude models, the coordinator beat peer teams by about 10–45 percentage points. Without a communication channel, teams "completely collapse" in two environments.
- **Failure modes**: stalling as team size grows, overriding other users' requests or cancelling without consent, and fabricating claims about other users. In the personal-assistant environment, the coordinator fulfilled a targeted request about twice as often as teams did.
- **Benchmark release**: three of the four environments were released as MAMUBench (74 scenarios), at github.com/safety-research/MAMUBench (the repository may not have been public yet at publication time).
- **Context**: the same week, xAI launched Grok Bot 1.0 team bots for Slack, Teams and video calls, and Cursor launched Projects multiplayer (a shared workspace for teammates and their agents). The research is evidence that the collaboration ability those products assume does not yet exist.

## Why it matters (solo-developer view)

1. **'Agent teams' are a research problem, not yet a product**: team bots and multiplayer shipped in the same week, but Anthropic's experiment shows the premise — "agents collaborate with each other" — breaks in all four environments. When evaluating a product, look at the coordination structure, not the collaboration promise: is there a coordinator, is there shared state?
2. **Shared resources call for a coordinator**: calendar, budget and merge-queue work is, at its core, a central coordination problem. Adding more agents replicates the problem rather than solving it. If your harness has a point where several agents touch one resource, folding it into one coordinator comes first.
3. **The failure modes are quietly wrong, not loudly broken**: stalling is visible, but unconsented cancellations and fabricated claims cause damage silently. Any team-agent deployment needs a human approval gate on destructive actions such as cancelling and overwriting.

## Limitations (stated)

- The experiment covers four environments with one specific structure — competition over a shared resource. It does not generalise to all collaboration.
- The MAMUBench repository may not have been public at publication time, so independent reproduction is pending.
- The 10–45 percentage-point gap is measured on the two Claude models; it varies by model.

## Related concepts

- [[concepts/ai-orchestration]] — Six patterns for coordinating multiple AI agents (based on Anthropic's guide)
- [[concepts/harness-engineering]] — Agent = Model + Harness, the infrastructure design of agents (3rd generation)
- [[concepts/llm-evaluation]] — A methodology for systematically testing LLM output (evals)
- [[concepts/agent-residence]] — Where agents live: local models vs cloud computers

## Sources

- [Anthropic 'Worse Together' source](raw/articles/2026-11-12-anthropic-worse-together-multi-agent.md)
