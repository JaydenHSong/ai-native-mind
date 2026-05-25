---
title: "bkit + Superpowers Combo Pattern"
category: patterns
tags: [bkit, superpowers, pdca, tdd, process-discipline, claude-code-plugin]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[comparisons/claude-code-plugins]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/llm-wiki]]"
status: active
confidence: medium
---

# bkit + Superpowers Combo Pattern

## Easy Read

**Analogy**: **bkit** behaves like a project manager providing a **high-level structural roadmap** (PDCA cycle). **Superpowers** acts like a strict QA supervisor enforcing **micro-level disciplines** (e.g., "don't write code before drafting a test case"). Stacking both together provides both a **broad system roadmap and strict execution rules**.

| Term | Explanation |
|------|------|
| **PDCA** | Plan $\to$ Do $\to$ Check $\to$ Act **iterative lifecycle** |
| **TDD** | Authoring failing unit tests **before** writing implementation code |
| **Skill** | A pre-configured set of rules guiding an AI's operational scope |

## One-Line Definition

An AI-native development pattern that layers the execution disciplines of Superpowers on top of the PDCA framework of bkit, programmatically preventing the model from skipping design steps.

## The Problem: Bypassing PDCA

While bkit defines a systematic Plan $\to$ Design $\to$ Do $\to$ Check $\to$ Act loop, human operators and models often compromise the process:

```
Ideal Loop:  Plan ──→ Design ──→ Do ──→ Check ──→ Act
Real Loop:   "Implement this feature" ──→ Do ──→ (Occasional) Check
```

**Why developers bypass Plan and Design phases**:
- Impatience to see functional code quickly.
- Rationalizing that "this is a trivial feature that doesn't need planning."
- The friction of manually writing documentation.
- bkit recommends the steps but **does not programmatically block execution** if they are skipped.

## The Solution: Superpowers Gatekeepers

[[tools/superpowers|Superpowers]] **programmatically blocks transitions** until milestone prerequisites are met:

```
/superpowers:brainstorm  ─── Require Pass ──▶ Plan Generation
/superpowers:write-plan  ─── Require Pass ──▶ Task Execution
/superpowers:execute-plan ─── Code Generation Begins
```

---

## Combined Workflow

### Phase 1: Planning (Plan)

```
1. /pdca plan {feature}         ← bkit scaffolds the plan document structure.
2. /superpowers:brainstorm      ← Superpowers refines requirements via Socratic queries:
   - "Who is the primary end user?"
   - "What are the core failure modes?"
   - "Is there a simpler design path?"
3. Write the brainstorm summary directly into the PDCA Plan document.
```

### Phase 2: Design (Design)

```
4. /pdca design {feature}       ← bkit scaffolds the technical interface blueprint.
5. /superpowers:write-plan      ← Superpowers decomposes the design into 2-5 min tasks:
   - Identifies paths, targets, code blocks, and test cases.
   - Maps out chronological task dependencies.
6. Write the decomposed task list directly into the PDCA Design document.
```

### Phase 3: Execution (Do)

```
7. /superpowers:execute-plan    ← Dispatches parallel sub-agents and enforces TDD:
   - Red: Write the failing test.
   - Green: Write minimum code to pass.
   - Refactor: Clean architecture.
8. Protect codebase stability by executing changes inside isolated Git worktrees.
```

### Phase 4: Audit & Review (Check)

```
9.  /pdca analyze {feature}     ← bkit gap-detector verifies code-to-design alignment.
10. Match Rate < 90%  ──→ /pdca iterate (Auto-resolve deviations)
11. Match Rate ≥ 90%  ──→ /pdca report (Generate completion metrics)
```

---

## Division of Labor

| Core Task | bkit Responsibility | Superpowers Responsibility |
|------|----------|-----------------|
| **Process Definition** | Defines high-level PDCA milestones and file templates | Programmatically blocks step entry until prerequisites pass |
| **Planning** | Scaffolds Plan template structures | Refines requirements via Socratic query loops |
| **Design** | Scaffolds Technical Interface templates | Decomposes architecture into atomic, chronological tasks |
| **Execution** | Guides code integration pipelines | Enforces TDD and coordinates parallel sub-agents |
| **Audit** | Performs Gap Analysis and drives auto-refactoring | Audits code quality and matches implementation to specs |
| **Analogy** | Architectural Blueprint | On-site Construction Inspector |

---

## Operational Selection Matrix

| Project Profile | Recommended Strategy |
|------|--------|
| Trivial bug patch | **bkit-only** (Execute a lightweight, rapid PDCA loop) |
| Multi-file feature addition | **bkit + Superpowers Combo** (This Pattern) |
| High-risk/Security critical modules | **bkit + Superpowers + Codex** (Maximum review gates) |
| Fast prototype sandbox | **gstack-only** (Lightweight, rapid role-play) |

## Operational Caveats

- **Token Cost**: Running both plugins simultaneously rapidly consumes model context windows.
- **Upfront Friction**: The brainstorming and planning phases add 10-20 minutes of overhead before any code is generated.
- **Trivial Tasks**: Over-engineered for simple 5-minute scripting adjustments.
- **Rule of Thumb**: *If a task takes longer than 30 minutes of human effort, apply this combo pattern.*

## AI Orchestration Footprint

This combination integrates two powerful concepts from [[concepts/ai-orchestration|AI Orchestration]]:
- **bkit**: Implements the *Orchestrator-Workers* pattern (routing tasks from high-level orchestrators to specialized sub-agents).
- **Superpowers**: Implements the *Parallelization* pattern (decomposing plans to execute parallel sub-agent workers).

Synthesizing both patterns yields structural process planning (bkit) alongside reliable execution (Superpowers).

## Related Pages

- [[tools/bkit]] — Deep dive into PDCA workflows
- [[tools/superpowers]] — Deep dive into TDD and sub-agent coordination
- [[comparisons/claude-code-plugins]] — Plugin comparison matrices
