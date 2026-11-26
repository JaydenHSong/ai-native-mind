---
title: "Claude Artifacts Become Desktop Apps in One Click — 'Install as app' Beta for Mac and Windows"
category: concepts
tags: [anthropic, claude, artifacts, desktop-apps, permissions, security, distribution]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-claude-artifacts-install-as-app.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/anthropic-claude-ship]]"
  - "[[concepts/agent-authority-model]]"
status: draft
confidence: medium
---

# Claude Artifacts Become Desktop Apps in One Click — 'Install as app' Beta for Mac and Windows

## Start here

**Analogy**: A small tool built in a Claude conversation (a calculator, an image editor) used to live only inside the chat window. Now one click turns it into a real app on your computer, with its own icon in the Dock and its own window. But you must decide how much of your computer the app may touch. There are three permission levels: (1) only what a browser can do, (2) app features such as staying on top, global shortcuts, and notifications, and (3) running programs and reading, changing, and deleting files without asking every time. Level 3 is convenient but risky, so it can only be granted to apps you made yourself or that someone in the same organization made.

| Term | Meaning |
|------|------|
| **Artifact** | A small tool, web page, or document built inside a Claude conversation |
| **Install as app** | The feature that installs an Artifact as a desktop app |
| **Permission** | The scope of what an app may do on your computer |
| **Full computer access** | The highest permission: run programs and read, change, and delete files without asking each time |
| **Connector** | A feature connecting Claude to external services such as Gmail and Drive |

## One-line definition

Anthropic released 'Install as app' in beta on November 24, 2026, letting Claude Artifacts be installed as Mac and Windows desktop apps. It turns a tool built in a conversation into a standalone app without packaging or signing, and its core is a three-level permission system that can allow 'full computer access.'

## Key points

- **How to use**: build an Artifact in a Claude conversation, then click "Install as app" in the Share menu. It opens with its own icon and window and appears in the Dock. On Mac it lives in the Claude Apps folder inside Applications. Requires Claude for Mac/Windows v6.28899.0 or later. It only opens while online and signed in.
- **Three permission levels**: (1) Default — only what a browser can do. (2) App permissions — Claude-controllable features such as always-on-top windows, global shortcuts, notifications, and menu-bar items. (3) Full computer access — running programs and reading, changing, and deleting files without asking each time. Permissions apply only to the current version of the app; editing the Artifact re-asks on every update.
- **Security caution**: Anthropic states it does not review apps before installation. Full access can only be granted to apps you made yourself, or apps made by someone in the same organization on Team or Enterprise. Apps can use Claude connectors, and an app's Claude calls count against the plan's usage limits.
- **Availability**: beta on all plans, including Free. On by default for Team (full access off), and owners must enable it for Enterprise. Not supported on Linux, web, or mobile; not supported for HIPAA-configured organizations; Docs, Slides, and Sheets template Artifacts cannot be installed.
- **Anthropic's internal use cases**: Linnet (a layer image editor), Phosphor (a file manager), Sift (folder-cleanup rules), Tern (a terminal with Claude alongside), Vitals (a performance menu-bar app).

## Why it matters (solo-developer lens)

1. **A chatbot's output becomes software**: from a shared document to an app running on your computer. For a solo developer, this is the shortest path from "a tool built in conversation" to deployment.
2. **Permissions are the product**: the three-level system is a miniature of agent-permission governance. When granting full computer access, "who made it" is the only criterion — a reason to design your harness so the source is checked first when granting permissions.
3. **The risk of unreviewed distribution**: Anthropic states it does not review apps before installation. Granting full access to an Artifact app made by someone else is like running unverified code with sudo.

## Limitations (stated)

- Anthropic does not review apps before installation — malicious apps are possible.
- Full computer access is limited to your own or same-organization apps, but once granted, it allows file deletion without asking each time.
- Not supported on Linux, web, or mobile; not supported for HIPAA-configured organizations; Docs, Slides, and Sheets templates cannot be installed.
- Confidence is medium — based on Anthropic's official announcement, but with no hands-on verification or security-incident cases yet.

## Related concepts

- [[concepts/mcp]] — the base concept of MCP; the connection layer behind Artifact apps using Claude connectors (2026-11-26)
- [[concepts/anthropic-claude-ship]] — Anthropic's agent product from the same period; handing over authority on one side, shipping apps on the other (2026-11-26)
- [[concepts/agent-authority-model]] — a five-level agent authority framework by task; the governance view of the three-level permission system (2026-11-26)

## Sources

- [Claude Artifacts Become Desktop Apps in One Click — 'Install as app' Beta for Mac and Windows (Anthropic, Nov 24)](raw/articles/2026-11-26-claude-artifacts-install-as-app.md)
