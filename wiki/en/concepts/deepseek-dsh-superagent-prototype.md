---
title: "DeepSeek dsh-superagent — an Always-Online Coding Agent Research Prototype (MIT)"
category: concepts
tags: [deepseek, dsh-superagent, coding-agent, open-source, super-agent]
created: 2026-11-02
updated: 2026-11-02
sources:
  - "raw/articles/2026-11-02-deepseek-dsh-superagent-prototype.md"
related:
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[concepts/plan-then-verify-agent-planning]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: high
---

# DeepSeek dsh-superagent — an Always-Online Coding Agent Research Prototype (MIT)

## Start here

**Analogy**: a teammate who lives in the team's chat room, hears "fix this bug," splits the work, works in separate rooms, and returns the result as a pull request. The catch: it is still a research prototype, so isolation is mandatory before any real deployment.

| Term | Meaning |
|------|---------|
| **Router/Worker** | A two-layer structure in which a Router assigns requests to isolated Worker sessions |
| **Watchdog** | A module outside the agent that monitors and controls its work |
| **Feishu** | ByteDance's workplace chat app, similar to Slack |

## One-line definition

Published 2026-10-31: a research prototype on DeepSeek Harness that watches one GitHub repository, takes requests, and answers with pull requests — an always-online, parallel, self-recovering coding agent design.

## Key facts

- **Five-module architecture**: dual-layer Router/Worker design, event-driven design, asynchronous multi-channel interaction, separation of compute, state, and environment, and an external Watchdog.
- **Behavior**: permitted requests from GitHub (optionally Feishu) or team-written rules create work items; Workers run in separate sessions and directories and return results to the original conversation. Merging is controlled by a Delivery requirements prompt; auto-merge under the agent's own account is not the default.
- **Release scale**: a single commit, about 15,200 lines of TypeScript in 110 files, about 790 test cases, and nine design documents. Stars grew from about 4,100 on the morning of November 1 to about 11,400 by November 2, as reported.
- **Self-reported experiment numbers**: median 12.4 minutes on a synthetic test (13.8–20.4 minutes for a single session with a subagent tool), but about 23.2 million cached tokens per run — two to four times more.
- **Requirements**: DeepSeek Harness 0.2.1 alpha, Node.js 22.19+, pnpm, git, tmux, Python 3.8+, GitHub CLI 2.48+, a model provider, and a dedicated GitHub account for the agent.

## Why it matters (solo-developer view)

1. **The agent's working form is changing**: from a tool you summon to a teammate that guards your repository and finds work. For a solo developer, that is a shift from "agents I call" to "agents that watch my repo."
2. **Isolation is part of the design**: Workers can run commands without approval as the operator's OS user, so a separate OS account, agent-only credentials, and a limited repository scope are prerequisites, not options.
3. **Cost shows up in tokens**: behind the faster median sits 23.2 million cached tokens per run. Judged on speed alone, adoption quietly inflates token cost. Combined with PTV-style pre-execution verification, an always-on agent needs a budget gate for "what runs, and how much."

## Limitations (stated)

- The README states it is a research prototype for reference only, not an official product, and the code differs from both the internal version and the design article. Some designs are not fully implemented.
- The experiment numbers come from DeepSeek's own synthetic test, with no independent verification.
- Harness is reported to be unaudited preview software, and a sandbox-escape flaw was reportedly fixed only recently.

## Sources

- [DeepSeek super-agent source](raw/articles/2026-11-02-deepseek-dsh-superagent-prototype.md)
