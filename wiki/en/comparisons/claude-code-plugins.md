---
title: "Comparing 4 Claude Code Plugins"
category: comparisons
tags: [claude-code-plugin, bkit, superpowers, codex, gstack, comparison]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[tools/codex-plugin]]"
  - "[[tools/gstack]]"
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# Comparing 4 Claude Code Plugins

## Easy Read

These are not competing software suites; they are **specialized extension packs** designed to run inside a single parent terminal application (**Claude Code**). Rather than direct replacements, they operate at different layers: structuring pipelines (**bkit**), enforcing software engineering rigor (**Superpowers**), role-based delegation (**gstack**), and external cross-model reviews (**Codex**).

| Plugin | In a Nutshell |
|------|--------|
| **bkit** | Orchestrates the macro software delivery cycle (PDCA blueprint) |
| **Superpowers** | Enforces structured engineering discipline (TDD & specifications) |
| **gstack** | Allocates execution tasks among specialized personas (CEO, designer) |
| **Codex** | Leverages alternative models (e.g., OpenAI) to provide an independent second-opinion audit |

---

## Core Plugin Identities

These four tools address the challenge of "optimizing AI-assisted software engineering" from complementary conceptual angles. They exist in a cooperative, symbiotic ecosystem rather than a competitive one.

---

## Comparison Matrix

| Feature | [[tools/bkit\|bkit]] | [[tools/superpowers\|Superpowers]] | [[tools/codex-plugin\|Codex]] | [[tools/gstack\|gstack]] |
|---|---|---|---|---|
| **Author** | popup-studio-ai (Korea) | Jesse Vincent (obra) | OpenAI (Official) | Garry Tan (YC CEO) |
| **Core Analogy** | "Software Development OS" | "Senior Engineering Partner" | "The Independent Auditor" | "Role-playing Dev Team" |
| **Methodology** | Structured PDCA cycles | TDD + Strict Specifications | Cross-Model logic verification | Persona-based prompt steering |
| **System Scope** | From ideation to deployment | Architectural design to unit tests | Code review exclusively | Task review to deployment |
| **Agent Setup** | 32 specialized agents | Parallel subagent execution | Single Codex worker | Persona-based prompt blocks |
| **External Keys** | None | None | Requires OpenAI account | Bun runtime |
| **Installation** | Plugin Marketplace | Plugin Marketplace | Plugin Marketplace | `git clone` |
| **Korean Support** | Native/Outstanding | English-only | English-only | English-only |
| **Open Source** | Fully open source | MIT | Fully open source | Fully open source |
| **Technical Depth** | High (MCP server + state machine) | High (Subagent orchestration) | Moderate (Standard hook system) | Light (Prompt directory) |

---

## Mapping to [[concepts/ai-orchestration|AI Orchestration Patterns]]

| Plugin | Primary Orchestration Pattern | Practical Execution |
|----------|----------|------|
| **bkit** | **Orchestrator-Workers** | A central coordinator dispatches specialized worker agents to solve atomic tasks |
| **Superpowers** | **Parallelization** | Decomposes high-level specifications into tasks and spins up concurrent subagents |
| **Codex** | **Evaluator-Optimizer** | Creates an adversarial correction loop: Claude writes code, Codex reviews logic |
| **gstack** | **Prompt Routing** | Routes tasks to specialized persona models to collect diverse critique angles |

---

## The Unified Strategy: The PDCA × Plugins Lifecycle

Integrating these four plugins across a standard **PDCA (Plan-Do-Check-Act) development loop** creates a highly optimized workflow:

```
┌────────────────────────────────────────────────────────┐
│               THE UNIFIED PDCA LIFECYCLE               │
│                                                        │
│   ┌───────────┐      ┌───────────┐      ┌───────────┐  │
│   │   PLAN    │─────▶│    DO     │─────▶│   CHECK   │  │
│   │  (bkit)   │      │  (Super-  │      │  (Codex)  │  │
│   │  gstack   │      │  powers)  │      │   bkit    │  │
│   │ persona   │      │ TDD loops │      │   gaps    │  │
│   └───────────┘      └───────────┘      └───────────┘  │
│         ▲                                     │        │
│         │            ┌───────────┐            │        │
│         └────────────│    ACT    │◀───────────┘        │
│                      │  (bkit)   │                     │
│                      │ iterate & │                     │
│                      │  report   │                     │
│                      └───────────┘                     │
└────────────────────────────────────────────────────────┘
```

### PDCA Phase Alignment Matrix

| PDCA Step | Primary Engine | Auxiliary Tooling | Operational Deliverable |
|-----------|----------|----------|--------|
| **Plan** | bkit `/pdca plan` | gstack `/plan-ceo-review`, `/plan-eng-review` | Drafting structural specification sheets and auditing architectural direction |
| **Do** | Superpowers brainstorm & execute | bkit pipeline guides | Writing tests first (TDD) and coordinating parallel subagent runs |
| **Check** | Codex `/codex:review` | bkit `gap-detector` | Executing cross-model reviews and auditing logic alignment |
| **Act** | bkit `/pdca report` & `/pdca iterate` | — | Integrating refactoring fixes and compiling completion reports |

---

## Niche Recommendations

Running all plugins simultaneously can cause high API token costs. Select the optimal tool for your target project scenario:

- **End-to-End Solo Projects**: Deploy **bkit** to cover the entire development lifecycle.
- **Complex Software Refactoring**: Run **Superpowers** to enforce TDD and parallel task execution.
- **Security-Sensitive Environments**: Run **Codex** to leverage multi-model adversarial reviews.
- **Rapid MVP Construction**: Run **gstack** for fast, persona-based design prompts.

---

## Context Engineering Integration

Each plugin maps to a unique facet of [[concepts/context-engineering|Context Engineering]]:

- **bkit**: Encodes the entire development protocol directly into `CLAUDE.md` $\to$ **Persistent Context**.
- **Superpowers**: Saves brainstorm sessions to dedicated specification files $\to$ **Cross-Session Context**.
- **Codex**: Injects an independent model perspective $\to$ **Context Diversity**.
- **gstack**: Pivots model logic using distinct persona configurations $\to$ **Context Framing**.

---

## Summary

These extension plugins represent the premier tools for optimizing your workflow in Claude Code. Each implements a distinct AI orchestration pattern. When combined across a unified PDCA loop, they deliver a highly disciplined, AI-native software engineering workspace.

*Key Takeaway*: **Rigor in process design is far more valuable than the raw tools themselves.** The unifying strategy across these plugins is enforcing process boundaries: preventing the model from writing unchecked lines by routing operations through systematic phases, roles, and validation checks.

## References

- [GStack vs. Competitors in Claude Code Environments (MindStudio)](https://www.mindstudio.ai/blog/gstack-vs-superpowers-vs-hermes-claude-code-frameworks)
