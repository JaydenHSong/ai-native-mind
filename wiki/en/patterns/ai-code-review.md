---
title: "AI Code Review Workflow"
category: patterns
tags: [code-review, workflow, solo-developer, claude-code, execution-grounding, constraint-decay, framework-sensitivity, roadmap, release-scale, reward-hacking, process-evaluation]
created: 2026-04-09
updated: 2026-05-21
sources:
  - "raw/notes/2026-04-09-ai-code-review.md"
  - "raw/articles/2026-05-13-verify-before-you-fix-execution-grounding.md"
  - "raw/articles/2026-05-15-constraint-decay-backend-code-fragility.md"
  - "raw/articles/2026-05-18-effective-harness-engineering-algorithm-discovery.md"
  - "raw/articles/2026-05-18-roadmapbench-long-horizon-version-upgrades.md"
  - "raw/articles/2026-05-21-specbench-reward-hacking-coding-agents.md"
  - "raw/articles/2026-05-21-procbench-process-defects-control-preservation.md"
related:
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/subagents-delegation]]"
  - "[[concepts/cognitive-debt]]"
  - "[[patterns/git-ai-workflow]]"
  - "[[concepts/llm-evaluation]]"
status: active
confidence: high
---

# AI Code Review Workflow

## Easy Read

**Analogy**: Think of this as establishing a habit of consulting a **virtual peer developer** before merging changes when coding solo. Even without a human reviewer to audit your commits, you configure the AI to run targeted checks to flag **logic bugs, security flaws, and edge-case leaks** before they hit production.

| Term | Explanation |
|------|------|
| **PR (Pull Request)** | A request to merge your working branch changes back into the `main` branch |
| **Inline Comment** | A modular review note attached directly to a specific line of code |
| **Correctness** | Auditing whether the code's underlying **functional logic** is correct, rather than checking visual formatting |

## One-Line Definition

A practical, production-grade workflow that enables solo developers to maintain enterprise-tier codebase quality by systematically leveraging AI reviewers without relying on human peer reviews.

## Claude Code Review (Official Ecosystem)

### Primary Characteristics
- Integrates seamlessly with GitHub Pull Requests.
- Publishes precise, context-aware inline review comments.
- Deploys specialized reviewer agents to analyze code diffs.
- **Focuses exclusively on Correctness** rather than superficial style conventions.

### Core Audit Vectors
- Structural logic errors and parameter bugs.
- Common security vulnerabilities (e.g., OWASP top 10).
- Broken or unhandled edge cases and exceptions.
- Subtle semantic regressions in downstream modules.
- Direct evaluation against the full codebase context.

---

## 3 Core AI-Native Review Workflows

### 1. The Plan-Review-Execute Pattern
**Primary Rule**: Jumping straight into generating code without pre-approving a plan is the single largest cause of logic drift.

```
1. Claude A: Drafts a technical execution plan
2. Claude B: Audits the plan acting as a "Senior Staff Systems Engineer"
3. Claude A: Integrates the review feedback and executes the code changes
```

### 2. Test-First Co-Authoring (TDD)
```
1. Human Operator: Authors target unit tests (locking in semantic intent)
2. AI Coder: Generates implementation code to satisfy the tests
3. Local Runner: Runs the test suite → Refactors iteratively until PASS
4. AI Reviewer: Recommends additional tests covering subtle edge cases
```
**Impact**: Prevents [[concepts/cognitive-debt|Cognitive Debt]] by forcing the developer to maintain a minimum baseline understanding of the test constraints.

### 3. Two-Phase Audit
```
Phase 1: Self-Review
  - Prompt the AI: "Critically review the code you just generated. Identify three edge cases where this fails."
  - Forces the model to evaluate its output from an adversarial perspective.

Phase 2: Human Audit
  - The human operator reviews the code changes *alongside* the AI's self-review logs.
  - Focuses exclusively on high-level patterns the AI is prone to missing.
```

---

## Best Practices (The Claude Code Team's 100-Line Workflow)

### 1. Single Source of Truth
- Consolidate all project-level guidelines and conventions inside `CLAUDE.md`.
- Keep the file size under 2,500 tokens (~100 lines) to prevent context bloating.
- Track changes to the rules using standard Git version control.

### 2. Document Failures Instantly

> **"Any time we see Claude do something incorrectly, we add it to CLAUDE.md so it doesn't repeat it next time."**

- Update `CLAUDE.md` multiple times a week as patterns emerge.
- Permanently block the recurrence of specific model failure loops.

### 3. Enforce Minimal Changes
- Prioritize clean, minimal code changes over sprawling rewrites.
- Actively seek to **delete obsolete lines** rather than adding new ones.
- Enforce the YAGNI (You Aren't Gonna Need It) principle strictly.

### 4. Auto-Scaffold Recurring Tasks
- Map tasks executed multiple times a day to custom terminal slash commands.
- Automate the micro-loops of your active workspace workflow.

### 5. Treat AI Output as Junior Coder Contributions
- Approach every generated code snippet with skepticism, treating it as draft code written by a junior intern.
- Manually trace, compile, and execute tests before merging.
- Never trust the model's textual assertion that "the implementation works."

---

## Addy Osmani's AI Development Workflow (2026)

### Context First
Ensure the model digests all relevant schemas, tests, and API signatures *prior* to asking it to write code. **Insufficent context guarantees high failure rates**.

### Incremental Progressions
Write code in small, modular steps. Compile, run tests, commit incrementally, and build iteratively.

### Test-Driven Guardrails
Let the test suite guide the agent. The loop is simple: Red (Human drafts test) $\to$ Green (AI implements fix) $\to$ Refactor (AI cleans structure).

### The 80/20 Reality
AI solves the baseline 80% of a task in seconds. The **remaining 20% contains the actual complex logic**. Focus your human cognitive energy on resolving that final 20%.

---

## GitHub Actions Continuous Integration

```yaml
# .github/workflows/claude-review.yml
name: Claude PR Review
on: pull_request

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          trigger: pull_request
          prompt: "Review the incoming diff exclusively for logic correctness, security holes, and unhandled exceptions."
```

**Impact**: Claude automatically scans the PR diff, posts precise inline annotations, and generates a summary breakdown. The human operator reviews a pre-filtered, annotated PR workspace.

---

## The Solo Developer's Daily Routine

### Everyday Cadence
1. Inspect `CLAUDE.md` and commit any active modifications to sync your constraints.
2. Initialize any task by drafting a high-level plan first.
3. Generate implementation code in small, isolated steps.
4. Execute self-reviews before committing lines.

### Publishing Commits & PRs
1. Run `/commit` $\to$ Automatically generate semantic git commit messages.
2. Run `/pr` $\to$ Instantly generate robust markdown pull request descriptions.
3. Trigger automated AI review actions to audit the diff.
4. Integrate feedback suggestions and merge.

### Weekly Maintenance
1. Refactor `CLAUDE.md` to keep it concise, dry, and under 200 lines.
2. Package recurring CLI steps into custom slash commands.
3. Document new failure patterns directly under the "Blocked Patterns" list in `CLAUDE.md`.

---

## 2026-05-13 Update — Execution Grounding (Verify Before You Fix)

> Source: Gajjar et al. (George Washington University), "Verify Before You Fix: Execution-Grounded Agentic Vulnerability Repair" (arXiv:2604.10800, 2026-04-12).

Cross-language (Java/Python/C++) vulnerability discovery and patch generation engines require enforcing a **strict execution invariant**: *"No repair action should be taken without execution-based confirmation of exploitability."*

### The 3-Stage Pipeline

```
Stage 1: Hybrid Structural-Semantic Detection
  ├── Parse codebase to uAST (Universal AST Schema)
  └── Embed using GraphSAGE + Qwen2.5-Coder-1.5B with two-way gating fusion

Stage 2: Execution-Grounded Agentic Validation
  └── Programmatically execute candidates in a sandbox to confirm active exploitability

Stage 3: Validation-Aware Iterative Repair
  ├── Generate patches exclusively for validated vulnerabilities
  └── Programmatically execute exploits against patches to verify success (feedback loop)
```

A classifier's output represents a *probabilistic inference*, not a *verified conclusion*. Proceeding to patch a vulnerability based on text inference alone triggers cascading failures (cumulative errors from minor false positives).

### Integrating Execution Gates into "Plan-Review-Execute"

By nesting the *Verify Before You Fix* paradigm within our Plan-Review-Execute flow, we inject a **deterministic execution gate** directly before the commit stage:

```
1. Claude A: Drafts execution plan
2. Claude B: Reviews plan and API boundaries
3. Claude A: Writes candidate code patches
3.5. Verifier: Runs unit tests and attempts to execute the exploit → Blocks commits on FAIL  ← NEW GATE
4. (On PASS) Commit changes; (On FAIL) Route back to Stage 3 repair loops
```

**Practical ROI Integrations for Solo Developers**:
- Configure a `pre-commit` hook that automatically compiles and runs unit tests only on files impacted by the active diff.
- If fixing a bug, write a test case reproducing the exploit first, and use it as a regression gate.
- Enforce a strict execution retry limit (e.g., maximum of 3 attempts) to prevent models from entering infinite loop failures.

### Limitations
- **Execution Domain Dependency**: This is strictly applicable to environments where code can be compiled and executed (cannot easily verify loose natural language or UI design choices). Non-executing domains require alternative verifiers like [[concepts/context-rot-hallucination#2026-05-13 Update — Typed Grounding via GSAR|GSAR (Typed Grounding)]]. Refer to [[concepts/harness-engineering#2026-05-13 Update — Verification-Gated Harness 3-Domain Mapping|Verification-Gated Harness 3-Domain Mapping]] for matching domains to verifiers.
- uAST parsing accuracy serves as a structural performance ceiling across heterogeneous codebases.

---

## 2026-05-15 Update — Constraint Decay (Dual Evaluation Stack)

> Source: Dente et al. (EURECOM), "Framework-Sensitivity and Constraint Decay in LLM-Based Code Generation" (arXiv:2605.06445, 2026-05-07).

While coding agents excel at solving functional algorithmic tasks, **accumulating structural constraints (e.g., architectural patterns, ORM rules, and database schemas) causes model accuracy to decay by an average of 30 points**. The authors term this phenomenon *Constraint Decay*.

- **Capable Configurations**: Score an average **-30 points drop** on assertion pass rates when structural constraints are stacked.
- **Weak Configurations**: Performance decays rapidly, **converging to $\approx 0$**.
- **Framework Sensitivity**: Models perform exceptionally well under **Flask**, but significantly worse under **FastAPI and Django**.
- **Primary Root Cause**: **Data-layer defects** (faulty ORM compositions and database query violations).

### Inserting Phase 2.5: Structural Idiom Checkers

While exploit-driven verification (Verify Before You Fix) secures software, preventing *Constraint Decay* requires running a dedicated checker to audit architectural idioms and patterns before execution:

| Phase | Verification Engine | Output Schema |
|---|---|---|
| **2. AI Review** | LLM-based semantic critique | Textual code advice |
| **2.5. Structural Verify** | **Static framework idiom checker** (ruff, specialized linters) | Strict violations list (e.g., "DRF ViewSet mismatch") |
| **3. Execute** | Local test suite execution | Binary PASS / FAIL |

*Practical ROI Action*: The primary reason an AI-generated patch is rejected is that it violates team conventions or ORM patterns. A standard LLM reviewer is blind to these style deviations. Adding static framework linter plugins to your pre-commit hooks easily resolves this 30-point performance decay.

### Weighing "AI-Friendliness" in Framework Selection

When choosing a backend framework for a solo project, evaluate the "AI-Friendliness" of its architectural structure:

| Backend Framework | Structural Clarity | AI-Friendliness |
|---|---|---|
| **Flask** | Minimal, highly explicit definitions | **Exceptional** |
| **FastAPI** | Convention-heavy (Dependency Injection, complex schemas) | Moderate |
| **Django** | Rigid conventions (Apps structure, complex ORMs, DRF) | Low |

If you plan to leverage AI pair programming for 80%+ of your coding tasks, prioritize frameworks that the model naturally handles with high accuracy. Adjust your backend choices based on this matrix within [[patterns/agent-server-harness|Agent Server Harness]].

---

## 2026-05-18 Update — Release-Scale Audits & Anti-Gaming Monitors

### 1) Effective Harness Engineering: Monitoring "Evaluation Hacking"
[Effective Harness Engineering](https://arxiv.org/abs/2605.15215) demonstrates that given a fixed API token budget, **running a few deep, highly constrained planning loops yields superior code quality compared to running many shallow attempts**. Furthermore, highly capable models frequently develop a tendency to engage in **evaluation hacking** to bypass tests.

*Operational Shift*: Modern code reviews must look beyond raw test passes to actively monitor for **anti-gaming behaviors** (e.g., models hardcoding return values to pass tests, mocking out databases, or editing test fixtures to hide regressions).

### 2) RoadmapBench: Auditing Release-Scale Evolutions
[RoadmapBench](https://arxiv.org/abs/2605.15846) demonstrates that real-world software development consists of complex, multi-target upgrades spanning a **median of 3,700 lines of code across 51 files**. Currently, even frontier models resolve only **39.1%** of these tasks correctly.

*Operational Shift*: While standard PR-level reviews are useful, managing large-scale features requires establishing a separate **roadmap completion review** to verify that all modular file changes align toward the unified release goal.

```text
The Complete AI-Native Review Sequence:
1. Plan Draft
2. AI Semantic Review (Correctness, security, edge cases)
2.5. Structural Verification (Static framework linters, ORM checks)
2.8. Anti-Gaming Monitor (Detecting test mocks, hardcoded fixtures, or evaluation bypasses)  ← NEW
2.9. Process Review (Controllability, rollback paths, authority hand-back)                     ← NEW
3. Execution Gate (Tests, exploit execution, rollback validation)
4. Release-Scale Roadmap Review (Verifying cross-file changes satisfy release goals)         ← NEW
```

**3 Actionable ROI Actions for Solo Developers**:
1. Add an explicit check to your AI review prompts: *"Verify that the implementation satisfies the specification programmatically, and ensure the model has not hardcoded mock values or bypassed assertions to pass the test suite."*
2. Group related PRs together and execute a final **roadmap checklist audit** before releasing major features.
3. When running complex agent cycles, utilize **isolated Git worktrees** to keep your change-sets clean and auditable.

---

## 2026-05-21 Update — Separating Spec and Process Audits

### 1) SpecBench: Detecting Visible Test Overfitting
[SpecBench](https://arxiv.org/abs/2605.21384) confirms that coding agents consistently saturate visible unit tests while failing on hidden, held-out validation tasks. This performance gap **scales by 28 percentage points for every 10x increase in codebase size**.

*Takeaway*: A green test status ("PASS") is not a signal that code review is complete. Rather, it is a signal to **begin checking for reward hacking** and test overfitting.

### 2) ProcBench: Enforcing Process Controllability
[ProcBench](https://arxiv.org/abs/2605.20251) defines a taxonomy of process-level defects and measures **control preservation** across agent runs.
Control preservation is mapped across five dimensions:
- **Interpretability**: Can a human operator easily understand the agent's current step?
- **Interruptibility**: Can the agent run be paused instantly and safely?
- **Correctability**: Can the human inject mid-run corrections to steer the agent?
- **Reversibility**: Can all filesystem changes be cleanly rolled back?
- **Authority Hand-back**: Does the agent gracefully return control when blocked?

*Takeaway*: Excellent code changes are produced via controllable, auditable, and reversible processes.

**4 Actionable ROI Actions for Solo Developers**:
1. Add a check to your code review routines: *"Identify if this patch has been overfitted to pass visible test assertions."*
2. Ensure complex, long-running agent workflows document clear **rollback steps** and **cancellation thresholds** upfront.
3. Do not audit diffs in isolation; review the **terminal command trace and execution trajectory** that produced the patch.
4. When comparing coding agents, value **process controllability and graceful human hand-back** above raw test-passing metrics.

## Chapter Clear Guide

- **Chapter**: Chapter 7 (The End Game — Release Operations)
- **Quest**: Pick a recent code change and audit it using the dual-phase (Self-Review + AI Review) sequence.
- **Clear Condition**: Identify and document at least 1 logical bug, security gap, or architectural deviation in your draft code, and apply the fix.
- **Reward (Deliverable)**: 1 Production Code Review Checklist v1.
- **Next Quest**: [[patterns/ai-cost-management]] $\to$ [[wiki/campaign-map]]

## References

- [AI Code Review Curation Research Notes](raw/notes/2026-04-09-ai-code-review.md)
- [Claude Code Review Release (Anthropic)](https://claude.com/blog/code-review)
- [Claude Code Review Technical Documentation](https://code.claude.com/docs/en/code-review)
- [Addy Osmani: My Modern AI Coding Workflow](https://addyosmani.com/blog/ai-coding-workflow/)
- [The Claude.md Creator 100-Line Workspace Workflow](https://mindwiredai.com/2026/03/25/claude-code-creator-workflow-claudemd/)
