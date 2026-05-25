---
title: "MCP (Model Context Protocol)"
category: concepts
tags: [mcp, anthropic, protocol, tools, integration]
created: 2026-04-09
updated: 2026-05-01
sources:
  - "raw/notes/2026-04-09-mcp-research.md"
  - "raw/articles/2026-05-01-a2a-protocol-spec.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[concepts/a2a-protocol]]"
status: active
confidence: high
---

# MCP (Model Context Protocol)

## Easy Read

**Analogy**: In the past, every electronic device had its own proprietary charging cable. **MCP** functions as the **universal port (like USB-C)** when AI applications connect to external systems (GitHub, databases, Slack, etc.). Once integrated, any new tool can be attached instantly as long as it adheres to this port standard.

| Term | Explanation |
|------|------|
| **MCP Client** | The AI application side (the component issuing queries and commands) |
| **MCP Server** | The system hosting the actual data and execution capabilities |
| **Tools / Resources / Prompts** | Functions the AI can run, data it can read, and pre-configured prompt templates |

## One-Line Definition

An open-standard protocol for cleanly connecting AI models to external tools and data sources. "USB-C for AI."

## Core Concepts

### The Problem It Solves

- **Before MCP**: Each data source required a custom API integration $\to$ unsustainable scaling overhead and isolated data silos.
- **With MCP**: **A single unified standard** links any AI to any tool or dataset.

### Architecture

```
MCP Client (AI App)  ←→  MCP Server (Tools/Data)
  e.g., Claude Code         e.g., GitHub, Slack, DB
```

### The 3 Core Primitives

| Primitive | Managing Actor | Functional Role | Example |
|-----------|----------|------|------|
| **Tools** | Model | Executing functions | File reading, DB queries, external API calls |
| **Resources** | Application | Accessing data | System documents, configurations, state logs |
| **Prompts** | User | Prompt templates | Pre-configured task patterns |

### Major MCP Servers (Production-Ready)

| Category | Target Servers |
|----------|------|
| **Development** | GitHub, Git, Postgres, Puppeteer |
| **Productivity** | Google Drive, Slack, Gmail, Google Calendar |
| **Design** | Figma, Notion |
| **Data** | Supabase, various SQL/NoSQL databases |

### Historical Timeline

- **November 2024**: Anthropic introduces the Model Context Protocol.
- **December 2025**: MCP is donated to the Linux Foundation (under AAIF), co-sponsored by Anthropic, Block, and OpenAI.
- **2026**: Becomes the de facto industry standard.

## Positioning in [[concepts/context-engineering|Context Engineering]]

MCP standardizes the **"Tool Access" layer** within Context Engineering:

```
Context Engineering (5 Pillars):
├── System Prompt  → CLAUDE.md
├── Task Decomposition → PDCA cycle
├── Memory/State → wiki/
├── Tools/API → ★ MCP standardizes this layer ★
└── Guardrails → Hard rule constraints, authorization
```

## Positioning in [[concepts/harness-engineering|Harness Engineering]]

MCP serves as core infrastructure for the Harness, providing a **unified, standard interface** through which agents securely interact with the physical world.

## Why It Matters

For solo developers, MCP **drastically slashes tool integration costs**. Rather than engineering custom API integrations, simply spinning up an MCP server immediately grants the AI full, safe access to the tool.

## MCP's Sister Standard — A2A (Agent-to-Agent)

In 2026, the sister [[concepts/a2a-protocol|A2A Protocol]] was established under the Linux Foundation, forming the two pillars of AI standard protocols.

| Attribute | MCP | A2A |
|---|-----|-----|
| **Target Integration** | Agent $\leftrightarrow$ **Tools, Data, and Systems** | Agent $\leftrightarrow$ **Other Agents** |
| **Analogy** | USB-C (Hardware $\leftrightarrow$ Auxiliary Tools) | HTTP (Service $\leftrightarrow$ Service) |
| **Discovery** | Tools / Resources / Prompts metadata | Capability discovery schemas |
| **Governance** | Anthropic $\to$ Open Standards | Google $\to$ Linux Foundation |

**Synergy over Competition**: An agent discovered via the A2A protocol can be cleanly wrapped as an **MCP tool** (the exact design pattern deployed in Cisco's 2026 pilots). Utilizing both protocols together is the recommended architectural pattern in [[concepts/agentic-engineering]].

## References

- [MCP Research Notes](raw/notes/2026-04-09-mcp-research.md)
- [A2A Protocol Specification Review (2026-05-01)](raw/articles/2026-05-01-a2a-protocol-spec.md)
- [Introducing MCP (Anthropic)](https://www.anthropic.com/news/model-context-protocol)
- [MCP Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Code Execution with MCP (Anthropic)](https://www.anthropic.com/engineering/code-execution-with-mcp)
