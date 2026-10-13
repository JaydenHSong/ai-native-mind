---
title: "Google Workspace MCP + Agentic OAuth — Mandatory AI Agent Identity Classification (2026-10-12)"
category: concepts
tags: [google, workspace, mcp, oauth, agentic, is_agentic, agent-identity]
created: 2026-10-13
updated: 2026-10-13
sources:
  - "raw/articles/2026-10-13-google-workspace-mcp-agentic-oauth.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
status: draft
confidence: high
---

# Google Workspace MCP + Agentic OAuth — Mandatory AI Agent Identity Classification (2026-10-12)

## One-line definition

Google's official identity classification (is_agentic) for AI agents, introduced on OAuth clients ahead of the Workspace MCP server — from 2026-11-11, Workspace MCP calls are blocked without the agentic designation.

## Key points

- **Timeline (three steps)**: from 10/12, existing and new OAuth clients can be marked agentic in the Cloud console → from 11/11, Workspace MCP server calls from unmarked clients are rejected (error: "the client isn't marked as an AI agent") → from 11/12 the setting is permanently locked (any later change requires a new OAuth Client ID).
- **Scope**: the Google Workspace MCP server — live access to productivity tools including Gmail, Drive, and Calendar. Apps using plain REST APIs (Gmail/Drive API) need no action.
- **Affected projects**: the two named in Google's notification email — `hermes-chat-test`, `tahoe-503917`.
- **Official doc guidance**: use separate standard client IDs for human interaction and agentic client IDs for AI agents. Some Google MCP endpoints (Workspace tools) accept only agentic client IDs.
- **Stated limits**: the agentic designation grants no additional scopes or permissions. Standard OAuth 2.0 security requirements (user consent, app verification) are unchanged.

## Why it matters

For the AI-native programmer, this is **the first case of an identity layer of the MCP standard being actually enforced by a first party**. Until now, agent tool access was controlled by "which scopes it has," not "who is calling." Google now separates "agent traffic" as its own identity and makes its MCP servers require that identity. The practical harness-design implications are direct: if you build an agent integrating Workspace, separate an agentic client ID before 11/11, and designing monitoring and policy separately for human/API traffic vs agent traffic is now the officially recommended pattern. If Poppy (Meta×Sierra) standardizes identity on the commerce side, this is the platform-enforced version on the productivity-tool side.

## Related concepts

- [[concepts/mcp]] — the first case of the MCP standard's identity layer being enforced by a first party.
- [[concepts/a2a-protocol]] — an era in which platforms vouch for "who an agent is," alongside the agent-to-agent collaboration standard.
- [[concepts/meta-sierra-poppy-protocol]] — the parallel move the same week: the identity-infrastructure standardization race (commerce vs productivity tools).
- [[concepts/agent-supply-chain-security]] — agent traffic separation and monitoring delivered as an official mechanism.

## Sources

- [Google Cloud official docs — Manage OAuth Clients (agentic setting)](https://support.google.com/cloud/answer/15549257?hl=en)
- [ASTIG coverage](https://astig.ph/google-workspace-oauth-agentic-setting-mcp-servers-2026/)
- Google Workspace Team notification email (received 2026-10-12 11:59 PDT)
- Source capture: [raw/articles/2026-10-13-google-workspace-mcp-agentic-oauth.md](raw/articles/2026-10-13-google-workspace-mcp-agentic-oauth.md)
