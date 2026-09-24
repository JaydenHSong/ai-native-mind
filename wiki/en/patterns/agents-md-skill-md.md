---
title: "AGENTS.md + SKILL.md Pattern"
category: patterns
tags: [agents-md, skill-md, harness, standards, progressive-disclosure, agent-policy]
created: 2026-05-25
updated: 2026-05-25
sources:
  - "raw/articles/2026-05-01-agents-md-spec.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
related:
  - "[[patterns/claude-md-guide]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[tools/managed-agents]]"
  - "[[concepts/agent-supply-chain-security]]"
status: active
confidence: high
---

# AGENTS.md + SKILL.md Pattern

## Start here

`AGENTS.md` and `SKILL.md` both look like "documents for telling an agent how to work," but they play different roles.

- **AGENTS.md** = shared working rules that apply in this repository or directory.
- **SKILL.md** = a lazy-loaded manual that is pulled in only for a specific task.

In short: one is an **always-on environment policy**, and the other is **task knowledge loaded only when needed**.

## One-line definition

A pattern for separating **always-on repo-scope policy (`AGENTS.md`)** from **lazy-loaded task-scope instruction (`SKILL.md`)** in a coding-agent harness, gaining both portability and token efficiency.

## Why this pattern matters

Long-running agents run into two needs at once.

1. **Common rules must always be available.**
   - build / test commands
   - code style
   - security warnings
   - PR conventions

2. **Detailed task manuals are too large to always load.**
   - deployment runbooks
   - service-specific operations guides
   - domain-specific research routines
   - repeated multi-step procedures

If both are mixed into one file, common policy and rare task knowledge become hard to scan, startup context grows, and the result becomes less portable across agent tools.

The 2026 pattern therefore converges on this split: **environment rules in AGENTS.md**, and **task manuals in SKILL.md**.

## Division of responsibilities

| Axis | `AGENTS.md` | `SKILL.md` |
|---|---|---|
| Basic question | "What rules apply while working here?" | "How do I do this specific task?" |
| Scope | repo / directory scope | task / method scope |
| Loading model | nearest file is loaded by default | name + description first, body lazy-loaded |
| Format | free-form markdown | `name`, `description` frontmatter + markdown |
| Analogy | company policy | work manual |
| Benefit | portability, consistent shared policy | token savings, progressive disclosure |
| Risk | becomes a junk drawer if too long | skill sprawl / supply-chain risk if overused |

## Core structure

### 1. `AGENTS.md` — repo-scope policy surface

`AGENTS.md` contains information an agent can directly use while working, unlike a human-oriented README.

Typical contents:

- build / test / lint commands
- codebase structure
- areas that must not be edited
- security and secret-handling rules
- PR / commit conventions

Its main benefit is **tool portability**. As of 2026, multiple coding-agent tools can read the same `AGENTS.md`, so it becomes a shared work surface that is not tied to one vendor.

In monorepos, a **closest-wins** rule can narrow policy by folder:

> The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.

From the perspective of [[concepts/harness-engineering]], this is a priority system for the policy layer.

### 2. `SKILL.md` — task-scope progressive disclosure

`SKILL.md` does not load all task knowledge up front.

- At startup, only **name / description** are visible.
- The body is read only when that skill is actually needed.

This keeps long procedural knowledge out of the initial context while still making it available at the right moment. It reduces token budget, lowers cognitive load, and modularizes behavioral knowledge without multiplying tool definitions.

## Operating principles when using both

### Principle 1. Put always-needed information in `AGENTS.md`

Use `AGENTS.md` for:

- repository-wide rules
- build / test / verification methods
- forbidden actions
- branch / PR conventions
- security warnings

### Principle 2. Put task-specific information in `SKILL.md`

Use `SKILL.md` for:

- deployment runbooks
- incident-response procedures
- specific external API usage
- research / analysis / documentation routines
- repeated multi-step workflows

### Principle 3. Keep the documents short and human-curated

Empirical notes suggest that **human-written AGENTS.md files** can improve success rate and reduce bugs, while **LLM-generated context files** can degrade performance and increase cost.

So the default should be:

- do not auto-generate long policy files;
- add only repeatedly failed points, compressed into short rules;
- prefer "short and trustworthy" over "large and exhaustive."

## Examples

### Example A. Coding repository

- `AGENTS.md`
  - `pnpm test`, `pnpm lint`, `pnpm build`
  - do not edit `src/generated/`
  - migration-writing rules
- `skills/release/SKILL.md`
  - release checklist
  - changelog review order
  - deploy / rollback procedure

### Example B. Agent platform

Tools such as [[tools/deep-agents-deploy]] productize this pattern directly.

- `AGENTS.md` defines the agent identity and baseline behavior.
- `SKILL.md` lazy-loads domain abilities.
- Sandbox, memory, and protocol servers live in the runtime layer underneath.

The key is to separate the **definition layer** from the **execution layer**.

### Example C. Personal Claude Code workflow

The `CLAUDE.md` described in [[patterns/claude-md-guide]] belongs to the same family as `AGENTS.md`, but is Claude-specific project policy.

A practical mapping is:

- `CLAUDE.md` = Claude-specific project charter
- `AGENTS.md` = portable multi-tool repo charter
- `SKILL.md` = method / task module

## Benefits and limits

| Benefit | Limit |
|---|---|
| Creates a **portable policy surface** across agent tools | More documents also means more maintenance |
| Separates shared rules from task knowledge, reducing context clutter | Poor design makes placement ambiguous |
| `SKILL.md` lazy loading saves token budget | External skill registries introduce supply-chain risk |
| File-level harness policy is easy to review and version | Auto-generated long policy can harm performance |

## Security note

This pattern is convenient, but `SKILL.md` connects directly to [[concepts/agent-supply-chain-security]].

- Do not blindly load external skill registries.
- Separate credential-capable execution environments from skill sources.
- Start unreviewed skills in isolated, least-privilege contexts.

In other words, **policy modularization** and the **trust model** must be designed together.

## Meaning inside this wiki

This wiki is not a code repository, so it does not directly operate `AGENTS.md` / `SKILL.md`, but it already has the same shape.

- `CLAUDE.md` = wiki-wide operating policy
- `templates/` = repeated work structure
- `wiki/` = accumulated knowledge memory

So the value of this pattern is not only knowing a new file standard. It is a decision rule for **what belongs in always-on harness policy and what should become lazy-loaded task knowledge**.

## Related pages

- [[patterns/claude-md-guide]] — practical guide to `CLAUDE.md` as a project-policy file in the same family
- [[concepts/harness-engineering]] — higher-level concept for separating guides, policy, and runtime
- [[tools/deep-agents-deploy]] — an implementation that exposes this pattern as product surface
- [[tools/managed-agents]] — another upper-middle-layer packaging of similar ideas

## Sources

- [AGENTS.md official notes](raw/articles/2026-05-01-agents-md-spec.md)
- [Anthropic Agent Skills notes](raw/articles/2026-05-01-anthropic-agent-skills.md)
- [Agent Stack 2026 notes](raw/articles/2026-05-01-agent-stack-2026-layers.md)
