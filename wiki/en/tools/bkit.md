---
title: "bkit"
category: tools
tags: [claude-code-plugin, bkit, pdca, ai-native, development-os]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/superpowers]]"
  - "[[tools/codex-plugin]]"
  - "[[tools/gstack]]"
  - "[[comparisons/claude-code-plugins]]"
  - "[[concepts/ai-orchestration]]"
status: active
confidence: medium
---

# bkit (Vibecoding Kit)

## Easy Read

**Analogy**: A **plugin** that fits directly inside **Claude Code**. Instead of "vibecoding by pure intuition," it enforces a structured flow of **Plan $\to$ Design $\to$ Do $\to$ Check $\to$ Act** together with the AI. Similar to how an academic portal provides a **predefined report template + submission deadline** to keep projects from derailing.

| Term | Explanation |
|------|------|
| **PDCA** | The continuous **iteration** of Plan, Do, Check, and Act |
| **Plugin** | A modular **add-on extension** plugged into a base program |
| **AI-Native** | A development paradigm designed assuming **AI co-authorship** from day one |

## One-Line Definition

A specialized Claude Code plugin developed by *popup-studio-ai*, acting as a PDCA-methodology-driven "AI-Native Development OS."

## Core Philosophy

"Injecting strict engineering discipline into Vibecoding." Allows developers to generate code at rapid speeds via AI, but regulates quality using a continuous Plan-Do-Check-Act loop. Rather than acting as a simple text generator, it aims to **systematically structure the entire software development lifecycle**.

## Key Features

### The PDCA Cycle
Manages every phase of development through structured markdown templates and deterministic validation steps:

```
Plan (Requirements) → Design (Architecture) → Do (Implementation) → Check (Validation) → Act (Refinement)
```

- `/pdca plan` — Requirements analysis, feature scope definition.
- `/pdca design` — Technical specifications, API design.
- `/pdca do` — Implementation walkthrough guides.
- `/pdca analyze` — Semantic Gap Analysis (measuring design vs. implementation alignment).
- `/pdca iterate` — Automated refinement if design-implementation Match Rate is under 90%.
- `/pdca report` — Final completion report.

### The 9-Stage Development Pipeline

```
Schema → Convention → Mockup → API → Design System
→ UI Integration → SEO/Security → Review → Deployment
```

Eliminates the cognitive drag of asking: "What code should I write next?"

### Agent Team (32 Specialized Agents)
An expert agent swarm orchestrated by a virtual Chief Technology Officer (CTO) lead:

| Agent Role | Functional Scope |
|----------|------|
| **cto-lead** | Handoff coordination, overall technical direction |
| **product-manager** | Requirement scoping, priority management |
| **frontend-architect** | UI/UX architecture validation |
| **code-analyzer** | Code quality metrics review |
| **gap-detector** | Semantic design-implementation divergence tracking |
| **qa-strategist** | Automated test engineering |
| **security-architect** | Security audit and vulnerability scanning |

### 50+ Specialized Skills
Includes PM scoping (`/pdca pm`), mobile-app engineering (`/mobile-app`), desktop-app scaffolding (`/desktop-app`), zero-script QA (`/zero-script-qa`), and more.

### Project Scaling Tiers

| Scaling Tier | Target Complexity | Example |
|------|------|------|
| **Starter** | Static web pages, beginner repos | Portfolio repos, landing pages |
| **Dynamic** | Full-stack WebApps, BaaS integration | User auth WebApps |
| **Enterprise** | Microservices, Kubernetes orchestration | Scaled enterprise platforms |

## Installation

```bash
/plugin marketplace add popup-studio-ai/bkit-claude-code
/plugin install bkit
```

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Imposes strict software engineering discipline on AI vibecoding | Broad skill/agent surface triggers a learning curve |
| 9-stage pipeline provides extremely clear execution guidance | Demands high context token consumption |
| Spans the entire lifecycle from PM scoping to deployment | Highly coupled to the Claude Code runtime environment |
| Exceptional localized support and UX conventions | Can be over-engineered for simple codebase edits |
| Agent Team handles expert tasks via parallel pipelines | Long-running sessions require proactive memory pruning |

## Significance in the AI-Native Era

bkit represents a concrete implementation of the **Orchestrator-Workers pattern** within [[concepts/ai-orchestration|AI Orchestration]]. The CTO agent functions as the primary orchestrator, delegating sub-tasks to specialized worker agents. It heavily leverages [[concepts/context-engineering|Context Engineering]] by utilizing `CLAUDE.md` to programmatically configure the LLM's workspace context.

## Related Tools

- [[tools/claude-code]] — The underlying base terminal CLI extended by bkit
- [[tools/superpowers]] — A similar structured workflow tool, focused heavily on TDD loops
- [[tools/codex-plugin]] — Can be combined for cross-model code review
- [[tools/gstack]] — Can be combined to provide role-based review steps

## References

- [GitHub: popup-studio-ai/bkit-claude-code](https://github.com/popup-studio-ai/bkit-claude-code)
- [bkamp.ai Showcases](https://bkamp.ai/en/showcases/55c58fa9-0a35-4504-bfa9-1d8b5a630eea)
