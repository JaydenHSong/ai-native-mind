---
title: "MCP Turns Two — Skills over MCP in Beta, Tasks and Elicitation Generally Available"
category: concepts
tags: [anthropic, mcp, claude, agent-skills, tasks, elicitation, protocol]
created: 2026-11-25
updated: 2026-11-25
sources:
  - "raw/articles/2026-11-25-anthropic-mcp-skills-tasks-elicitation.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/anthropic-agent-skills-foundation]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/google-workspace-mcp-cli-ga]]"
status: draft
confidence: medium
---

# MCP Turns Two — Skills over MCP in Beta, Tasks and Elicitation Generally Available

## Start here

**Analogy**: MCP is the "USB-C" that connects AI apps to external tools and data. For two years it only shared a list of tools. Now it does four more things. First, a server can hand over the *method* of doing a job (a skill) along with the tools. Second, long jobs run in the background and hand back a result later. Third, before anything that costs money, the server pauses and asks the person, "may I?" Fourth, files travel straight to the server without passing through the chat (coming soon). In short, the connection rule grew from "a tool list" into "how to work together."

| Term | Meaning |
|------|------|
| **MCP (Model Context Protocol)** | An open standard connecting AI apps to external tools and data — "USB-C for AI" |
| **Skill** | A written method for doing a task, step by step, in SKILL.md form |
| **Tasks** | A way to run a long job in the background and collect the result later |
| **Elicitation** | A server pausing mid-task to ask the user for information or approval |
| **File Uploads** | Sending files straight to a server without routing them through the model's context |

## One-line definition

Announced by Anthropic on November 24, 2026, for MCP's second anniversary, the extension brings Skills over MCP (public beta), Tasks and Elicitation (generally available), and File Uploads (coming soon) to Claude and Claude Code, extending MCP from a tool-connection protocol into a standard for delegating and orchestrating work between agents.

## Key points

- **Skills over MCP (public beta)**: an MCP server publishes SKILL.md-based skills beside its tools — procedures and operational knowledge for multi-step work. Claude loads a skill only when needed. On by default for Pro, Max, and Ultra; Team needs an admin to enable it; Enterprise is coming soon.
- **Tasks (GA)**: a server runs a long operation or a full agent loop in the background and returns a task handle. Claude keeps working on other things and picks up the result when it is ready. Available for Pro, Max, and Ultra, rolling out to Team and Enterprise.
- **Elicitation (GA)**: a server pauses mid-call to ask the user for information or approval through a form or a link — for example before spending money or deleting data. Same plan coverage as Tasks.
- **File Uploads (coming soon)**: Claude sends PDFs, spreadsheets, and images to a server out of band, without passing them through the context window. An experimental extension with no date given.
- **MCP's scale**: more than 700 million monthly SDK downloads, according to Anthropic, two years after launch. As an open standard with an extension system, a supporting server should work in any compatible client.
- **Label caution**: Claude's "GA" label and the MCP extension's own maturity stage are not always the same word. The announcement carries no independent evaluation data on performance, latency, reliability, or security.

## Why it matters (for a solo developer)

1. **Skills move from "installed" to "delivered"**: until now a skill was a file you installed yourself. Now the server hands over the method along with the tool, so connecting a service brings its way of working with it. When you attach an external service to your harness, expect "tool list + skill" to arrive as one bundle.
2. **Async becomes the default**: Tasks turns AI from "wait for it" into "hand it off and do other work." An agent that takes long jobs should return a handle and collect results later, instead of holding a long context hostage.
3. **Approval points become protocol**: Elicitation lifts "ask a human before spending money" from a harness habit to a protocol guarantee. When your agent spends money, design the ask step so the protocol, not just your code, enforces it.

## Limitations (stated)

- Every number is Anthropic's own (vendor-reported); there is no independent evaluation data on performance, latency, reliability, or security.
- Enterprise support is still "coming soon," and Team plans need an admin to enable Skills over MCP — the experience varies by plan and organization.
- File Uploads is an undated experimental extension, so its spec may still change.
- Confidence is medium — Anthropic's announcement cross-checked by multiple secondary reports, but no hands-on verification.

## Related concepts

- [[concepts/mcp]] — the base concept of MCP and its starting point two years ago; this extension is a layer on top (2026-11-25)
- [[concepts/anthropic-agent-skills-foundation]] — the donation of Agent Skills to the Linux Foundation (2026-10-23), the previous step in standardizing skills (2026-11-25)
- [[concepts/ai-orchestration]] — patterns for coordinating multiple agents; Tasks adds delegation to a server as a new axis (2026-11-25)
- [[concepts/google-workspace-mcp-cli-ga]] — Google's Workspace MCP general availability the same day; the other axis of the agent-infrastructure standards race (2026-11-25)

## Sources

- [Anthropic, MCP Turns Two — Skills over MCP in Beta, Tasks and Elicitation Generally Available (Agentpedia, Nov 24)](raw/articles/2026-11-25-anthropic-mcp-skills-tasks-elicitation.md)
- [Anthropic Brings Server-Supplied Skills and Background Tasks to Claude (Unite.AI)](https://www.unite.ai/anthropic-brings-server-supplied-skills-and-background-tasks-to-claude/)
