---
title: "CLAUDE.md Construction Guide"
category: patterns
tags: [claude-md, harness-engineering, context-engineering, best-practices, grounding-md, natural-language-harness, agents-md]
created: 2026-04-09
updated: 2026-05-19
sources:
  - "raw/notes/2026-04-09-claude-md-best-practices.md"
  - "raw/articles/2026-05-01-agents-md-spec.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-12-grounding-md-epistemic-agentic.md"
  - "raw/articles/2026-05-19-natural-language-agent-harnesses.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/context-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/llm-wiki]]"
  - "[[concepts/agent-supply-chain-security]]"
status: active
confidence: high
---

# CLAUDE.md Construction Guide

## Easy Read

**Analogy**: Think of `CLAUDE.md` as the official employee handbook that Claude Code **reads immediately upon starting every session**. Keeping this file updated with your folder layouts, coding style preferences, and build command scripts programmatically prevents the AI from **making the same mistakes over and over again**. The critical trick is to keep it highly concise; otherwise, **your most important rules will be lost in the noise**.

| Term | Explanation |
|------|------|
| **Harness** | The bundle of rules, constraint barriers, and tests governing agent actions |
| **Noise** | Excessive information that dilutes the visibility of core project rules |
| **Project Root** | The top-level directory of a repository |

## One-Line Definition

The primary project configuration file parsed by Claude Code at the start of every session, serving as the most practical direct implementation of [[concepts/harness-engineering|Harness Engineering]].

---

## Core Guidelines

### Keep It Lean and Dry

> If `CLAUDE.md` grows too verbose, the model will ignore portions of it. Crucial constraints will be drowned in noise.

- Keep the file **strictly under 200 lines**.
- Document only universally applicable project rules.
- Review and prune the file every 2-3 weeks to discard obsolete rules.

### Essential Structure

| ID | Section | Description | Real-World Example |
|---|---|---|---|
| 1 | **Project Context** | One-line mission statement | "Next.js e-commerce store backed by Stripe billing" |
| 2 | **Tech Stack** | Primary languages, runtimes, frameworks | Next.js 15, TypeScript, Tailwind CSS |
| 3 | **Workspace Structure** | High-level codebase mapping | Clean directory layout tree |
| 4 | **Coding Conventions** | General syntax preferences | camelCase variables, 2-space indents |
| 5 | **Active CLI Commands** | Command strings for builds/tests | `npm run build`, `npm test` |
| 6 | **Environment Variables** | Configuration targets | Schema mapping guide for `.env.local` |
| 7 | **Strict Prohibitions** | Absolute "must-not" blocks | "Do not leave active console.log statements in PRs" |
| 8 | **Preferred Idioms** | High-priority design patterns | "Default to React Server Components unless interactive" |
| 9 | **Dependency Constraints** | Third-party library lock-ins | "Utilize date-fns exclusively; do not import moment" |
| 10 | **Developer Docs** | Key references | Curated design specs, OpenAPI endpoints |

### Hierarchy Resolution

```
~/.claude/CLAUDE.md          ──→ Global Rule (Applies across all projects)
project/CLAUDE.md            ──→ Project-level Rule (Standard project constraints)
project/subdir/CLAUDE.md     ──→ Subdirectory-level Rule (Overrides parent rules)
```

## Quick Start

Initialize your setup by executing `/init` inside your terminal $\to$ The runner will automatically scan your file structures and dependencies to generate a custom draft.

---

## Interfacing with Harness Engineering

Within [[concepts/harness-engineering|Harness Engineering]], `CLAUDE.md` serves as a core manifestation of **Feedforward Control (Guides)**:

| Harness Dimension | Operational Mapping in `CLAUDE.md` |
|-------------|-------------------|
| **Guide** | Coding conventions, directory mappings, preferred idioms |
| **Guardrail** | Strict prohibitions, library constraints |
| **Context** | Project descriptions, environment schemas, tech stack mappings |

---

## CLAUDE.md vs. AGENTS.md vs. SKILL.md (2026-05 Taxonomy)

These files form a unified family of natural language configuration standards:

| Document | Primary Target | Structural Scope | Frontmatter Schema |
|------|---------|---------|-------------|
| **`CLAUDE.md`** | Claude Code family | Workspace execution boundary | Free markdown formatting |
| **`AGENTS.md`** | [Adopted by 60k+ repositories](https://agents.md) — Codex, Cursor, Windsurf, Aider, Devin, Junie, Gemini CLI, Claude Code | Global tool-agnostic workspaces | No frontmatter required |
| **`SKILL.md`** | Claude Skills, Deep Agents, agentskills.io runtimes | Task-specific lazy loading | Mandatory `name` and `description` |

### Architectural Relationships

- **`CLAUDE.md ⊂ AGENTS.md`**: `AGENTS.md` functions as the broader, tool-agnostic standard. Claude Code is fully backwards-compatible with `AGENTS.md`. When both files exist, the nearest file in the directory tree takes precedence—though explicit user prompts always override.
- **`AGENTS.md` $\leftrightarrow$ `SKILL.md`**: `AGENTS.md` acts as the global workspace policy ("company bylaws"), whereas `SKILL.md` acts as a lazy-loaded method manual ("machine operating guide"). They are highly complementary.
- **Open Standards**: Governance of `AGENTS.md` has been transferred to the **[Agentic AI Foundation (Linux Foundation)](https://aaif.io)**, aligning it with the standardisation trajectory of MCP.

### Empirical Field Performance (Source: atlan.com)

- Human-curated `AGENTS.md` files $\to$ Boost task completion rates **by ~4%** and decrease generated syntax bugs **by 35-55%**.
- Automated LLM-generated context files $\to$ **Degrade** task success rates and increase computational inference overhead **by 20%+**.

*Takeaway*: **Rules must be manually curated and polished by humans to remain effective**. The same holds true for `CLAUDE.md`.

### Conflict Priority (AGENTS.md Core Specification)

> The closest `AGENTS.md` to the edited file wins; explicit user chat prompts override everything.

Directly maps to the hierarchy of policies (Norms vs. Guardrails) defined in [[concepts/harness-engineering|Harness Engineering]].

### Vault Application
Within this wiki (`ai-native-mind`), we utilize `CLAUDE.md` as our **Wiki Schema Definition** rather than a traditional software coding rule document.

---

## 2026-05-12 Update — GROUNDING.md (Field-Scoped Grounding)

> Source: Palmblad, Ragland, and Neely, "Agentic AI-assisted coding offers a unique opportunity to instill epistemic grounding during software development" (arXiv:2604.21744).

While `CLAUDE.md` and `AGENTS.md` operate at a project scope and `SKILL.md` operates at a task scope, the authors propose a third tier: **`GROUNDING.md`—a field-scoped, community-governed policy document**. This allows domain specialists to bake domain conventions and validation rules directly into codebases, ensuring non-specialists can generate valid, domain-compliant code.

### The Scope Hierarchy

| Scope Tier | Target Document | Governance Tier | Example |
|---|---|---|---|
| **Project** | `CLAUDE.md` / `AGENTS.md` | Core engineering team | This wiki's `CLAUDE.md` |
| **Method** | `SKILL.md` / Plugins | Tool author / provider | [[tools/superpowers]], [[tools/bkit]] |
| **Field** | **`GROUNDING.md` (New)** | **Domain Community** | Global Proteomics field standard |

### The Two Core Dimensions of `GROUNDING.md`

- **Hard Constraints**: Immutable validity invariants required for scientific or domain-level correctness. **These programmatically override explicit user chat prompts**—preventing the model from violating core domain logic even if requested by a user.
- **Convention Parameters**: Community-agreed styling and structure defaults (can be modified by project-level overrides).

### Resolution Priority Shift (Proposed)

AGENTS.md standard resolution:
> The closest `AGENTS.md` to the edited file wins; explicit user chat prompts override everything.

With the addition of `GROUNDING.md`, the priority is **inverted**:

> Field-level **Hard Constraints in `GROUNDING.md` override user chat prompts**. Convention Parameters in `GROUNDING.md` fall back to project-level `AGENTS.md` / `CLAUDE.md` definitions, which in turn fall back to user prompts.

This inversion aligns perfectly with the dual-LLM/CaMeL security architectures of [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] and the incorruptible asset structures of CAAF. Both address the question: "At what boundaries must an agent's autonomous decisions be overridden?" However, `GROUNDING.md` focuses on **epistemic domain integrity** rather than raw cyber security.

### Application Candidate for Our Wiki
We can adapt the `GROUNDING.md` pattern to enforce hard vault schema rules:
- Prohibit arbitrary key modifications to `raw/` frontmatter templates.
- Enforce append-only structures on ingest operations.
- Enforce the inclusion of mandatory frontmatter parameters (`title`, `category`, `tags`, etc.).

*Vault-Scope Grounding*: Several rules inside our `CLAUDE.md` already function as grounding rules—the vault schema takes absolute precedence over user chat prompts if they conflict.

> Detailed reference: [GROUNDING.md Research Notes](raw/articles/2026-05-12-grounding-md-epistemic-agentic.md).

---

## 2026-05-19 Update — Natural-Language Agent Harnesses: Policies as Objects

> Source: Pan et al., "Natural-Language Agent Harnesses" (arXiv:2603.25723).

This wiki treats `CLAUDE.md` as an executable policy document rather than a simple scratchpad. "Natural-Language Agent Harnesses" formalizes this approach:

- **NLAH (Natural-Language Agent Harness)**: A clean natural-language document detailing run-level execution policy constraints.
- **IHR (Interpretable Harness Runtime)**: An execution runtime that reads the NLAH policy to enforce state checks, validation gates, and artifact contracts.

The core insight is that **the portable, reusable dimensions of an agent harness are its natural language policies, not its compiler code**.

### Decoupling Logic from Code

Hardcoding harness logic into application code makes systems difficult to manage:
1. **Auditing**: Parsing code to understand active safety policies is highly inefficient.
2. **Comparisons**: Comparing differences between distinct safety setups is highly difficult.
3. **Portability**: Transferring policies across different runtime systems requires extensive refactoring.

Writing policies as plain markdown documents (such as `CLAUDE.md`) completely resolves these limitations.

### Empirical Benchmarks (Pan et al.)

Evaluating natural language harnesses (NLAH) against traditional code-based harnesses yields excellent results:
- **OSWorld**: NLAH scored **46.3** vs. Code Harness **47.1**.
- **SWE Verified Live-SWE**: Code Harness used **60.1K tokens across 68 files** vs. NLAH using **2.9K tokens across 3 files**.
- **TB2 MHTBA**: Code Harness used **10.5K tokens across 3 files** vs. NLAH using **0.8K tokens across 1 file**.

Extracting policies into natural language documents preserves agent performance while dramatically reducing complexity.

### Modern Taxonomy Mapping

| Document | Classical Meaning | NLAH-Era Meaning |
|---|---|---|
| **`CLAUDE.md`** | Project handbook | **Project-scoped natural-language harness policy** |
| **`AGENTS.md`** | Standard agent README | **Cross-tool portable harness policy** |
| **`SKILL.md`** | Task operating manual | **Method-scoped policy module** |

*Design Rule*: To be parsed effectively by the runtime engine, `CLAUDE.md` must avoid vague generalizations and focus on **explicit constraints, boundary conditions, and artifact contracts**.

## References

- [CLAUDE.md Curation Research Notes](raw/notes/2026-04-09-claude-md-best-practices.md)
- [Writing a Good CLAUDE.md (HumanLayer)](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [The CLAUDE.md Construction Guide (Builder.io)](https://www.builder.io/blog/claude-md-guide)
- [CLAUDE.md Best Practices in Production (UX Planet)](https://uxplanet.org/claude-md-best-practices-1ef4f861ce7c)
- [GROUNDING.md: Epistemic Grounding in Agentic Software Engineering (Palmblad et al., arXiv:2604.21744)](https://arxiv.org/abs/2604.21744)
