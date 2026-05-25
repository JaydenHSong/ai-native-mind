---
title: "A2A Protocol (Agent-to-Agent)"
category: concepts
tags: [a2a, protocol, multi-agent, langchain, google, linux-foundation, interoperability]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
  - "raw/articles/2026-05-01-langchain-deep-agents-skills.md"
  - "raw/articles/2026-05-01-agentic-engineering-cisco-langchain.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/agent-frameworks]]"
status: active
confidence: high
---

# A2A Protocol (Agent-to-Agent)

## Easy Read

**Analogy**: If [[concepts/mcp|MCP]] is the USB-C of **AI ↔ Tool**, **A2A** is the HTTP of **AI ↔ AI**. An open communication standard that allows agents built by different companies, frameworks, or languages to discover and cooperate with each other **without knowing the other's internal details**.

| Term | Explanation |
|------|------|
| **Capability discovery** | Asking "What can you do?" |
| **Modality negotiation** | Agreeing on whether to exchange via text, files, or tables |
| **Opaque agent** | An agent that **does not expose its internal state** (due to company secrets or design necessity) |

## One-Line Definition

An open communication protocol that enables AI agents from different frameworks and vendors to collaborate on tasks **without directly accessing each other's internal state, memory, or tools**. Created by Google and donated to the Linux Foundation.

## 4 Core Capabilities

1. **Capability discovery** — Discovering the capabilities of other agents via metadata.
2. **Modality negotiation** — Agreeing on whether to exchange data via text, files, or structured data.
3. **Collaborative task management** — Enabling multi-agents to cooperate on the same task.
4. **Secure information exchange** — Exchanging information without exposing each other's internal state.

## Standard RPC Methods (Based on LangSmith Agent Server)

| Method | Purpose |
|--------|------|
| `message/send` | Sends a message and receives the complete response |
| `message/stream` | Real-time stream response via SSE |
| `tasks/get` | Retrieves the status/result of a previously created task |

Endpoint standard: `/a2a/{assistant_id}` (LangChain Agent Server implementation). Both [[tools/managed-agents]] and [[tools/deep-agents-deploy]] automatically expose A2A endpoints.

## Relationship with MCP (Common Misconception)

| Dimension | MCP | A2A |
|----|-----|-----|
| Connection Target | Agent ↔ **Tool / Data / System** | Agent ↔ **Other Agent** |
| Analogy | Hardware USB-C | Service HTTP |
| Discovery | Tools/Resources/Prompts | Capability discovery |
| Governance | Anthropic → Standardization in progress | Google → Linux Foundation |

**They are complementary**: Another agent discovered via A2A can be called **like a tool** using an MCP wrapper. This is the pattern used in the Cisco pilot in [[concepts/agentic-engineering]] — connecting an A2A-unsupported IDE coding agent via an MCP adapter to achieve IDE independence.

## Adoption Cases (2026)

- **50+ Tech Partners**: Atlassian, Box, Cohere, Intuit, LangChain, MongoDB, PayPal, Salesforce, SAP, ServiceNow, UKG, Workday, etc.
- **Anthropic Claude Managed Agents** — A2A compatibility for multi-agent coordination (research preview)
- **LangChain Deep Agents Deploy** — Automatically exposed after `deepagents deploy`
- **LangGraph Agent Server** — Standardized `/a2a/{assistant_id}` endpoint

## Why It Matters

Without A2A, multi-agent systems become **vendor-specific silos** — even within the same company, a LangGraph agent, a Claude Code subagent, and an OpenAI Agent SDK cannot call each other. A2A allows **each to do the right thing while cooperating** (just as HTTP did for web services).

A2A is the foundational infrastructure premise for the Worker/Leader control plane of [[concepts/agentic-engineering|Agentic Engineering]] to run in production. It extends the "tool communication" of [[concepts/harness-engineering|Harness Engineering]] to inter-agent communication.

## Related Concepts

- [[concepts/mcp]] — Sister standard (tool communication)
- [[concepts/agentic-engineering]] — The Worker/Leader control plane runs on A2A
- [[concepts/ai-orchestration]] — The communication layer of the orchestrator-workers pattern

## References

- [A2A Protocol Summary (raw)](raw/articles/2026-05-01-a2a-protocol-spec.md)
- [Cisco × LangChain Pilot (Worker/Leader)](raw/articles/2026-05-01-agentic-engineering-cisco-langchain-pilot.md)
- [Official Spec — a2a-protocol.org](https://a2a-protocol.org/latest/specification/)
- [GitHub a2aproject/A2A](https://github.com/a2aproject/A2A)
- [LangSmith A2A endpoint docs](https://docs.langchain.com/langsmith/server-a2a)

## Chapter Clear Guide

- **Chapter**: Chapter 4 (Tool & Communication Standards)
- **Clear Condition**: You can explain the difference between MCP and A2A in one sentence ("MCP is for tools, A2A is for other agents").
- **Next Quest**: Read about how the Worker/Leader pattern in [[concepts/agentic-engineering]] utilizes A2A.
