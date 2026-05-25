---
title: "Git + AI Workflow"
category: patterns
tags: [git, workflow, claude-code, commits, pr]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-git-ai-workflow.md"
related:
  - "[[patterns/ai-code-review]]"
  - "[[patterns/claude-md-guide]]"
  - "[[tools/claude-code]]"
  - "[[patterns/subagents-delegation]]"
status: active
confidence: high
---

# Git + AI Workflow

## Easy Read

**Analogy**: **Git** acts as a comprehensive **time machine and cloud backup** for your software code. A **Commit** represents saving a snapshot at a specific point in time, and a **PR (Pull Request)** is a request to merge your changes back into the main codebase after verification. This page details how to leverage Claude Code to handle these operations **using simple single-command shortcuts**.

| Term | Explanation |
|------|------|
| **diff** | A clean printout highlighting exactly which lines of code changed |
| **Staging** | Adding modified files to the **commit basket** before saving |
| **Conventional Commits** | A structured naming convention using prefix tags like `fix:` or `feat:` in commit titles |

## One-Line Definition

A highly optimized Git-AI integration workflow using Claude Code to automate commit messages, PR drafts, and parallel workspace branches.

---

## Core Slash Commands

### `/commit`
```
1. Audits the active workspace diff.
2. Stages files related to the modification.
3. Authors a highly descriptive, semantic commit message.
4. Saves the commit upon human verification.
```
Natively supports the *Conventional Commits* formatting standard.

### `/pr`
```
1. Analyzes all active commits in the current branch.
2. Automatically drafts a clear PR title and markdown description.
3. Spawns `gh pr create` under the hood to open the PR on GitHub.
```

### `/commit-push-pr` (Custom Command Chain)

Configured in `.claude/commands/commit-push-pr.md`:
```markdown
1. Audits the active change-set.
2. Stages the impacted files.
3. Generates a descriptive commit message and commits.
4. Pushes the branch to the origin repository.
5. Instantly spawns a PR detailing a summary of the changes.
```

---

## Crafting Elite Commit Messages

```
feat(auth): add OAuth2 refresh token handling

- Add refresh token rotation logic to AuthService
- Update token storage to encrypt refresh tokens
- Add tests for token expiration scenarios

Closes #123
```

### Automated Generation Invariants
- Enforce standard **Conventional Commits** prefixes (`feat`, `fix`, `refactor`, `docs`, `chore`).
- Document **Why the change was made, not just What lines changed**.
- Link related tracking issues.
- Explicitly flag any Breaking Changes.

---

## GitHub Actions Continuous Integration

```yaml
name: Claude PR Review
on: pull_request

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          trigger: pull_request
          prompt: |
            Review this PR for:
            - Structural correctness
            - Potential security vulnerabilities
            - Unhandled edge cases and exceptions
            - Latency or performance issues
```

**Execution Pipeline**:
1. Human publishes or updates a GitHub PR.
2. Claude Action parses the diff.
3. Claude publishes precise, context-aware inline reviews.
4. Claude posts a consolidated summary review.
5. Human developer reviews an annotated, pre-audited code workspace.

---

## Branching Strategies for the AI Era

### The Micro-Branch Invariant
- Because models generate code extremely fast, maintain **highly isolated micro-branches**.
- Restrict PR sizes to **under ~200 lines of code (LoC)**.
- Ensure change-sets remain small enough to be easily audited.

### Isolated Git Worktrees for Parallel Runs
Establish dedicated worktrees to spin up concurrent agent tasks safely:

```bash
git worktree add ../project-feature-a feature-a
git worktree add ../project-feature-b feature-b
```

- Run multiple Claude Code CLI processes concurrently in separate terminals.
- Each branch runs in its own isolated filesystem folder.
- Eliminates merge conflicts.
- Integrates seamlessly with the [[patterns/subagents-delegation|Parallel Sub-agents Pattern]].

---

## The Solo Developer's Git Routine

### Starting a Task
```
1. Run: git checkout -b feature/target-name
2. Boot: Claude Code CLI
3. Execute: Plan ──→ Design ──→ Implement
4. Run: /commit (frequently on small atomic steps)
5. Run: /pr
6. Run: Review → Merge
```

### Commit Frequency
- **Commit early, commit often**.
- Group commits by **cognitive milestones**, not arbitrary chunks.
- Ask yourself: *"Can I cleanly revert this single commit in isolation if it breaks?"*

### Review Disciplines
- Manually **read and audit** all AI-generated commit messages before hitting enter.
- Verify PR descriptions are accurate.
- Programmatically **run and verify** generated test suites on your machine.

---

## Git Hooks + AI

### Pre-commit
```bash
#!/bin/sh
# Audit the staging area before committing
claude-code review-staged
```

### Commit-msg
```bash
#!/bin/sh
# Ensure the commit message matches quality standards
claude-code validate-commit-msg $1
```

---

## Distributing Slash Commands Across Teams

Commit your `.claude/commands/` directory directly to **git version control** $\to$ Distributes your workflow shortcuts across the entire development team.

## Documenting Git Conventions in CLAUDE.md

```markdown
## Git Conventions
- Enforce Conventional Commits formatting.
- Squash-merge to master exclusively.
- Branch names: type/issue-ID-description (e.g., feat/123-oauth).
- Restrict Pull Requests to a maximum of 200 LoC.
```

---

## Crisis Recovery

- **Rollbacks**: If the agent commits a breaking regression, run `git revert`.
- **Accidental Force-Push**: Recover states using `git reflog`.
- **Agent Recovery**: Ask the agent directly: *"Recover our previous clean state using git reflog."*

## Chapter Clear Guide

- **Chapter**: Chapter 7 (The End Game — Release Operations)
- **Quest**: Document your local development sequence tracing the path: `branch -> commit -> pr -> review`.
- **Clear Condition**: Execute a full micro-commit cycle, pushing changes and drafting a PR description using Claude Code commands.
- **Reward (Deliverable)**: 1 Git+AI Workflow Reference Card.
- **Next Quest**: [[patterns/ai-code-review]] $\to$ [[patterns/ai-cost-management]]

## Community Tooling Recommendation

### `0xkaz/claude-auto-commit`
An open-source CLI utility:
- Leverages the Claude Code SDK directly.
- Generates descriptive, semantic commit messages.
- Supports multi-language setups.
- Enforces staging area conventions and project rules.

## References

- [Git + AI Workflow Curation Research Notes](raw/notes/2026-04-09-git-ai-workflow.md)
- [Claude Code Git Integration Reference](https://claudefa.st/blog/guide/development/git-integration)
- [Claude Code GitHub Actions Documentation](https://code.claude.com/docs/en/github-actions)
- [Leveraging GitHub Actions PR Reviews (MarkAI)](https://markaicode.com/claude-code-github-actions-pr-reviews/)
