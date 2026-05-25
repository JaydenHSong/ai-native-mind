---
title: "gstack"
category: tools
tags: [claude-code-plugin, gstack, garry-tan, role-based, startup]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[tools/codex-plugin]]"
  - "[[comparisons/claude-code-plugins]]"
status: active
confidence: medium
---

# gstack

## Easy Read

**Analogy**: A pre-packaged set of **role-playing prompts**. It instructs the same underlying AI to dynamically swap its **communication tone and code checklist** (e.g., "now act as QA," "now act as a designer"). Under the hood, it is a curated bundle of **`CLAUDE.md` rules and custom terminal slash commands**.

| Term | Explanation |
|------|------|
| **Persona** | A structural **role mask** applied to guide an AI's behavior and focus |
| **Slash Command** | A terminal shortcut (`/cmd`) that triggers pre-configured scripts |
| **Skill Pack** | A file-based bundle of roles, instructions, and schemas |

## One-Line Definition

A specialized Claude Code skill pack open-sourced by Y Combinator CEO Garry Tan, acting as a framework that transforms a single AI model into a **collaborative team of specialized roles** (CEO, designer, engineer, QA, etc.).

## Core Philosophy

"Applying explicit roles to AI significantly boosts performance." Instead of prompting a single AI as a generic coder, gstack assigns distinct personas to audit the codebase from highly targeted angles. Written as a structured bundle of **`CLAUDE.md` workspace rules and slash commands**, Garry Tan reported utilizing this exact setup to author 10,000 lines of code across 100 PRs weekly over a 50-day period.

## Key Features

### The 5 Core Slash Commands

| Command | Assigned Persona | Functional Scope |
|--------|------|------|
| `/plan-ceo-review` | CEO | Product viability review — "Are we building the *right* thing?" |
| `/plan-eng-review` | Engineering Manager | Architectural audit — Diagrams, failure states, test coverage |
| `/review` | Senior Engineer | Deep code audit — Race conditions, N+1 queries, security boundaries |
| `/ship` | Release Manager | One-command deployment — Main branch sync, testing, pushing, PR creation |
| `/qa` | QA Engineer | Automated diff-based browser end-to-end testing |

### Browser Automation
Uses a Playwright-based Bun binary to execute headless browser QA runs. The `/qa` command automatically spins up browser tests to visually verify modifications.

### Dangerous Command Auditing
Automatically intercepts and flags high-risk terminal commands (e.g., `rm -rf`, `DROP TABLE`).

### Natural Language Routing
In addition to slash commands, it supports natural language triggers:
- "Run a security audit" $\to$ Triggers engineering security review.
- "Can we deploy this?" $\to$ Guides the operator through the `/ship` pipeline.

## Installation

**Prerequisites**: Claude Code, Git, Bun v1.0+.

```bash
# Clone the repository directly into Claude Code's skills folder
git clone --single-branch --depth 1 \
  https://github.com/garrytan/gstack.git \
  ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup
```

Takes under 30 seconds to configure. Requires zero Docker containers, heavy cloud backends, or secondary API keys.

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Persona routing yields highly diverse audit perspectives | Critics argue "it is simply a collection of prompts" |
| Super-fast, 30-second single-command installation | Difficult to retrofit cleanly into existing complex codebases |
| Markdown-based prompts offer complete operational transparency | Consumes 10K+ tokens per command invocation |
| Out-of-the-box browser automation is highly convenient | Unsuitable for heavily regulated, mission-critical systems |
| Streamlines workflow from staging to deploy via `/ship` | Lacks robust multi-stage system architecture planning |

## Controversy

- YC CEO Garry Tan's massive social presence led some industry critics to argue the tool received **excessive hype relative to its technical complexity**.
- TechCrunch highlighted this polarization, reporting on the split developer opinions ([Article](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/)).
- In practice, while it is structurally a simple prompt wrapper rather than a complex agent engine, it serves as a powerful demonstration of the utility of highly structured prompt engineering.

## Significance in the AI-Native Era

gstack provides a practical demonstration of **persona prompting** within [[concepts/ai-orchestration|AI Orchestration]]. Instructing the same model to audit from "a CEO's perspective" versus "a security engineer's perspective" yields radically different, highly specialized outputs. It serves as a textbook example of [[concepts/context-engineering|Context Engineering]] in production—steering the model's active reasoning patterns purely using structured workspace contexts.

## Related Tools

- [[tools/claude-code]] — The terminal CLI extended by gstack
- [[tools/bkit]] — Offers a much broader, end-to-end software development lifecycle framework
- [[tools/superpowers]] — Employs deeper, TDD-driven system planning loops
- [[tools/codex-plugin]] — Provides cross-model evaluation gates

## References

- [GitHub: garrytan/gstack](https://github.com/garrytan/gstack)
- [gstacks.org Official Portal](https://gstacks.org/)
- [TechCrunch: The Garry Tan gstack Polarization Debate](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/)
