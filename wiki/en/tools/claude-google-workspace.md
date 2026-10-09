---
title: "Claude for Google Workspace"
category: tools
tags: [anthropic, claude, google-workspace, enterprise, docs, sheets, slides, agent-ui]
created: 2026-10-07
updated: 2026-10-07
sources:
  - "raw/articles/2026-10-07-claude-google-workspace-beta.md"
related:
  - "[[tools/claude-code]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/agent-residence]]"
  - "[[tools/gemini-agent-work]]"
status: draft
confidence: medium
---

# Claude for Google Workspace

## One-line description

Anthropic's first-party Google Workspace integration (public beta, 2026-10-06) — Claude reads, edits, and creates files directly inside Docs, Sheets, and Slides, and conversely handles Google files from within the Claude chat: a two-way agent UI.

## Core features

- Launch: 2026-10-06, public beta, all paid Claude plans (including Enterprise). Installed from the Google Workspace Marketplace.
- Two-way: (1) a Claude sidebar inside Google files — reads the open document, sheet, or deck, recognizes selected text/cells/slides, and edits directly; (2) Docs/Sheets/Slides connectors (beta) inside the Claude chat — paste a file link or create new files and work on them alongside the conversation.
- Docs: targeted edits preserving formatting and heading restyles; larger rewrites arrive as suggestion cards (accept/dismiss).
- Sheets: formula writing, pivot tables, native charts, new tabs, and Python-powered data cleaning/joins with results written back.
- Slides: new slides from existing layouts and themes, with automatic checks for overlapping elements, off-slide content, and readability problems.
- Approval modes: **"Ask before edits"** (default, preview and approve before each change) vs **"Accept all edits"** (applied automatically) — a product-UI implementation of the authority levels in [[patterns/agent-authority-model]].
- Access follows the user's existing Google sharing permissions. Compliance API, customer-managed encryption keys, and OpenTelemetry audit export carry over to the add-on — giving IT admins visibility into AI-assisted workflows.
- Third-party add-ons existed before, but this is Anthropic's first official first-party integration. The earlier Drive connector could access files but could not live-edit them alongside a conversation.

## Why it matters

- The move "from chatbot to an agent that manipulates the applications and artifacts employees already use" — the competitive arena shifts from model quality to **embedding inside work apps**.
- Claude enters Gemini's home turf (Workspace) head-on — the enterprise AI-assistant race intensifies around in-app presence.
- If [[tools/claude-code]] conquers the developer's terminal, this is the same strategy's office-worker version: conquering documents, sheets, and decks.

## Related tools

- [[tools/claude-code]] — same Claude family: CLI agent for developers vs Workspace integration for knowledge workers
- [[patterns/agent-authority-model]] — the "Ask before edits" approval mode implements that framework's authority levels
- [[concepts/agent-residence]] — cloud residence (the opposite vector from on-device Underdog, reported the same day)

## Sources

- [Anthropic launches Claude for Google Workspace public beta (10/6)](raw/articles/2026-10-07-claude-google-workspace-beta.md)
