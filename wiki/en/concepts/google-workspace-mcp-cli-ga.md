---
title: "Google Workspace MCP and CLI Generally Available — Agents Must Use MCP from February 2027"
category: concepts
tags: [google, workspace, mcp, cli, agent-gateway, enterprise, governance]
created: 2026-11-25
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-25-google-workspace-mcp-cli-ga.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/google-workspace-mcp-agentic-oauth]]"
  - "[[concepts/anthropic-mcp-skills-tasks-elicitation]]"
status: draft
confidence: medium
---

# Google Workspace MCP and CLI Generally Available — Agents Must Use MCP from February 2027

## Start here

**Analogy**: Until now, an AI agent that wanted to use Gmail or Drive knocked on each app's door separately. Google has now opened a dedicated "front gate for AI": MCP servers on eight apps, plus a command-line tool (gwscli) for agents working in a terminal. And from February 1, 2027, the back door closes — "AI may no longer enter through direct REST API calls; use the front gate (MCP) only." At the front gate, identity is checked and admins can manage access. Heavy use starts billing from April 2027.

| Term | Meaning |
|------|------|
| **MCP server** | A standard doorway that lets an AI agent use an app's features |
| **Workspace CLI (gwscli)** | Google's official command-line tool for Workspace, for agents working inside a terminal |
| **Agent Gateway** | A single checkpoint that receives traffic from agents and models, verifies identity, and enforces policy |
| **REST API** | The older way of calling app features directly — a road built for humans that agents borrowed |
| **Standard / Scaled tier** | Usage bands. Standard covers most developers for free; Scaled charges above a daily free allowance |

## One-line definition

Google-hosted Workspace MCP servers and the official Workspace CLI (gwscli), generally available from November 24, 2026, require AI agents to access Workspace data through MCP instead of direct REST API calls from February 1, 2027, with the Google Cloud Agent Gateway providing agent identity and access governance.

## Key points

- **Workspace MCP servers (GA)**: dedicated remote servers for Gmail, Google Drive, Docs, Sheets, Slides, Calendar, Chat, and Tasks. Keep is coming soon; People is in Developer Preview. Any MCP-compatible agent can connect over OAuth 2.0.
- **Workspace CLI (GA, gwscli)**: for local agents, terminal workflows, and automation. Structured JSON output, scoped OAuth sign-in, packaged agent skills, and dynamic command discovery. Connects agents such as Claude Code, Codex, and Antigravity.
- **Google Cloud Agent Gateway**: a protocol-native gateway for LLM, MCP, and Agent2Agent (A2A) traffic that verifies agent identities against an Agent Registry.
- **Enforcement timeline**: under the Workspace AI Tools Addendum, technical enforcement starts February 1, 2027 — AI agents, harnesses, and model-driven tools must use MCP for agentic access. Scaled-tier billing starts April 1, 2027 (Gmail, Calendar, and Drive APIs and the Workspace MCP servers; only usage above the daily free allowance).
- **Security and management**: external AI agents must identify themselves in OAuth, and admins manage agent access in the Admin console the same way they manage traditional apps. Derived embeddings, memory indexes, and org graphs are capped at 30 days of storage.
- **Follow-up details (2026-11-26)**: even after the February 1, 2027 enforcement, direct REST API calls do not disappear entirely — an AI agent's direct REST calls are limited to Standard-tier limits. Agent OAuth clients need the is_agentic designation. Scaled-tier billing starts April 1, 2027. (Google Workspace Updates announcement, November 24, 2026; TechRepublic and InfoSecurity Magazine coverage.)
- **Rollout**: reaching Rapid Release and Scheduled Release domains within about two weeks of the announcement.

## Why it matters (for a solo developer)

1. **Your agent must move to the front gate too**: if your harness touches Gmail or Drive, February 1, 2027 is the deadline. Direct REST calls will be throttled, so switching to the MCP servers or the CLI now is the safe move. The deadline is closer than it looks.
2. **Identity is the permission**: agents must now show ID. The OAuth identity requirement leaves a record of "who, with what authority," which you can apply to your own agent's logging and audit design.
3. **Platforms now sell governed access**: Google is selling not connection but *controlled* connection. The competitive axis for agent infrastructure has moved from features to governance — a reason to build access controls and retention limits into your harness from the start.

## Limitations (stated)

- Vendor-reported (Google's announcement); no hands-on verification or measured pricing yet. Scaled-tier prices are unpublished.
- The Keep MCP server is still "coming soon" and People is in Developer Preview, so completeness varies by app.
- Google's docs warn that CLI commands, parameters, and schemas are discovered at runtime and may change without backward compatibility — do not rely on fixed signatures in static scripts.
- Confidence is medium — Google's official announcement cross-checked by multiple secondary reports, but no hands-on verification.

## Related concepts

- [[concepts/mcp]] — the base concept of MCP; Workspace MCP is Google's hosted implementation of that standard (2026-11-25)
- [[concepts/google-workspace-mcp-agentic-oauth]] — the October 13, 2026 announcement of identity classification; this GA release confirms that preview (2026-11-25)
- [[concepts/anthropic-mcp-skills-tasks-elicitation]] — Anthropic's MCP extension announced the same day; the two axes of the agent-infrastructure standards race (2026-11-25)

## Sources

- [Google, Workspace MCP Servers and CLI Generally Available (Google Cloud Blog, Nov 24)](raw/articles/2026-11-25-google-workspace-mcp-cli-ga.md)
- [Google Workspace MCP Servers, CLI Now Generally Available (Pandromeda)](https://pandromeda.com/software/google-workspace-mcp-servers-and-cli-reach-general-availability)
