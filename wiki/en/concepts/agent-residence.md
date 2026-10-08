---
title: "Agent Residence — Local Models vs Cloud Computers"
category: concepts
tags: [agent-residence, local-model, open-weights, privacy, cloud-agent, meta, xai, openai, underdog, claude-workspace, microsoft, windows-agents, surface]
created: 2026-10-04
updated: 2026-10-08
sources:
  - "raw/articles/2026-10-04-agent-residence-local-vs-cloud.md"
  - "raw/articles/2026-10-07-underdog-ondevice-ai-assistant.md"
  - "raw/articles/2026-10-07-claude-google-workspace-beta.md"
  - "raw/articles/2026-10-08-microsoft-surface-ultra-agentic-windows.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[tools/claude-google-workspace]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: medium
---

# Agent Residence — Local Models vs Cloud Computers

## One-line definition

The "place" where an AI agent lives is no longer the chat window — it has split into two: local models resident on the user's hardware vs cloud agents that own a computer in the cloud.

## Core content

In August 2026 Meta shipped a 30B-parameter open-weight model: it runs locally on a single consumer-grade GPU, and agents can operate with no network connection. The opposite bet is the cloud agent from xAI (8/11) and OpenAI (DevDay 9/29 Dots) — even with the laptop closed, work continues on "their own computer" in the cloud.

| Axis | Local residence (Meta 30B) | Cloud residence (xAI, OpenAI) |
|---|---|---|
| Data | Never leaves the device (privacy) | Moves to the cloud |
| Persistence | Stops when the session breaks | Always-on — keeps working with the lid closed |
| Pricing model | Free + usage limits (CNBC) | Paid plans (Pro/Business, etc.) |
| Offline | Possible | Impossible |

Chat-era agents lived behind the chat window and ended when the tab closed. Now the question has moved from "how smart is it" to "where does it reside."

## Why it matters

For the AI-native programmer, the two forms are different tools: the local agent is an assistant inside the personal development environment (sensitive code, local files); the cloud agent is a background worker running overnight (long builds, research). An architectural separation of what goes where is needed — because "where it resides" becomes the boundary of permissions, cost, and trust.

## 2026-10-07 update — polarization goes commercial: Underdog (on-device) vs Claude for Workspace (cloud)

Two products reported on the same day (10/6) commercialize this page's two axes directly:

| | Underdog (Sigil Wen) | Claude for Google Workspace (Anthropic) |
|---|---|---|
| Residence | Fully on-device (Mac/Windows, invite-only beta) | Cloud + in-app sidebar inside Google apps |
| Model | 27B reasoning model fine-tuned from Qwen3.8-27B | Claude (frontier-class) |
| Differentiator | Privacy — data never leaves the device, account keys encrypted | Embedded in work apps — direct Docs/Sheets/Slides editing |
| Engine | Husky (own inference engine, claims minimized CPU↔GPU data movement) | — |
| Target | The privacy alternative to Instinct and Muse | A frontal entry into Gemini's home turf |

- Underdog is the extreme of "local residence" — a step beyond Meta's 30B (2026-08), making privacy itself the product positioning. The small-model + dedicated-inference-engine combo is the pragmatic on-device agent playbook.
- Claude for Workspace is the cloud's penetration into work — see [[tools/claude-google-workspace]]. Where an agent lives is now the competitive front line: local competes on privacy, cloud on workflow embedding.

## 2026-10-08 update — a third vector: OS-embedded (Microsoft Surface Ultra + Agentic Windows)

The local/cloud polarization has gained a third commercial vector — **the OS itself as the agent's home** (10/7, Reuters and multiple outlets):

- **Surface Laptop Ultra**: Nvidia RTX Spark (Blackwell RTX GPU up to 6,144 cores + Grace CPU up to 20 cores), up to 128GB unified memory and 1 petaflop, running 120B+ parameter models locally. From $2,599, shipping 10/16. Dev Box at $5,999 (November).
- **Windows changes**: Copilot 'hybrid intelligence' (local context, local actions, local models, permission-based). Execution Containers GA — agent sandboxing across Windows, macOS, and Linux.
- **Agent security triad**: Containment, Identity, Manageability + an end-to-end agent security platform. OpenAI and Anthropic are already building on Microsoft's security tooling.
- Nadella: "new chapter for Windows" — Agent 365, Microsoft IQ, and Copilot integrated into the core Windows architecture. Agents embedded deep in the OS, not as separate apps.
- Reuters' analytical angle: a bet on shifting costly Azure compute to local machines whose hardware bills customers pay — **residence location is the cost-sharing structure**.

→ A third axis joins this page's two: local (privacy) · cloud (workflow) · **OS-embedded (platform)**. With the OS becoming the enforcer of agent security (Containment, Identity, Manageability), [[patterns/agent-safety-runtime]]'s runtime security hardens into an OS-level standard.

## Related concepts

- [[concepts/persistent-agent]] — the origin of the resident-agent concept (OpenAI "O" leak, 2026-09-27)
- [[patterns/agentic-finance]] — when cloud-resident agents start spending money (Robinhood Agents)
- [[comparisons/managed-vs-deep-agents]] — the hosting choice: lock-in vs freedom

## Sources

- [The Agent Just Stopped Living in the Chat Window](raw/articles/2026-10-04-agent-residence-local-vs-cloud.md)
- [Sigil Wen's Underdog — on-device private AI assistant (TechCrunch, 10/6)](raw/articles/2026-10-07-underdog-ondevice-ai-assistant.md)
- [Anthropic launches Claude for Google Workspace public beta (10/6)](raw/articles/2026-10-07-claude-google-workspace-beta.md)
- [Microsoft x Nvidia Surface Laptop Ultra — 'the OS for agents' (Reuters, 10/7)](raw/articles/2026-10-08-microsoft-surface-ultra-agentic-windows.md)
