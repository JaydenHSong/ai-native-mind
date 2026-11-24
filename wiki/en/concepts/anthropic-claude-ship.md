---
title: "Anthropic Claude Ship — Agents Take Over Code Review, Fixes, and Approvals"
category: concepts
tags: [anthropic, claude-ship, claude-code, code-review, agents, github, governance]
created: 2026-11-24
updated: 2026-11-24
sources:
  - "raw/articles/2026-11-24-anthropic-claude-ship-code-review-pr-approvals.md"
related:
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/openai-gpt-6-2-astra-sol]]"
status: draft
confidence: medium
---

# Anthropic Claude Ship — Agents Take Over Code Review, Fixes, and Approvals

## Start here

**Analogy**: AI has moved past writing code to judging whether code is ready to merge. Claude Ship hands each pull request to three AI workers in relay. The first reads the code carefully and finds problems, the second fixes failing tests and conflicts, and the third stamps "fine to merge" — but only for routine changes listed in a rulebook the team wrote in advance. Riskier changes still go to a human. Anthropic recommends starting in observe-only mode, where the agent only shows what it *would* have approved.

| Term | Meaning |
|------|------|
| **Pull request (PR)** | A request to merge a code change into the main codebase, reviewed by a colleague before merging |
| **CI checks** | Automated tests and inspections that run before a merge — a failure turns the PR red |
| **CODEOWNERS** | A file that records who must review each file; Claude Approvals is its smarter descendant |
| **Observe-only mode** | A practice mode where the agent shows what it would decide without actually deciding |
| **Branch protection rules** | Rules that set what conditions must be met before code can merge into the main branch |

## One-line definition

Launched by Anthropic on November 23, 2026, Claude Ship bundles the generally available Code Review with two beta agents, PR Steward and Claude Approvals, so that agents carry a GitHub pull request through review, fixes, and approval. It is available on Claude Team and Enterprise plans, and approval authority is defined by a policy file the team writes in the repository.

## Key points

- **Three components**: Code Review (generally available) + PR Steward (beta) + Claude Approvals (beta). Claude Team and Enterprise plans, GitHub repositories only.
- **Code Review**: reviews a PR against the codebase from multiple angles, adversarially verifies and categorizes its findings, and posts them to the PR. Teams choose a Quick, Standard, or Deep review level per repository.
- **PR Steward**: keeps a PR green by resolving failing CI checks, merge conflicts, and review feedback. After every push it comments on what it changed and how to roll it back. It **does not approve or merge** — a deliberate split between fixing and deciding.
- **Claude Approvals**: applies an approval policy the team writes in natural language as a file in the repository. It can approve routine changes on its own when the policy allows, and routes riskier changes to a human. Anthropic calls it "a smarter CODEOWNERS file." The policy can weigh signals such as Code Review findings or the team's own classifiers. It starts when a connected repository has a policy file on its default branch, and an admin can turn it off. Teams can later require Claude Approvals' green light through branch protection.
- **Observe-only mode**: Anthropic recommends most customers first enable approvals in observe-only mode, building confidence in the policy before it carries enforcement weight.
- **The /ship command for individual developers**: running `/ship` in Claude Code pushes the change, opens the PR, reviews it, and works on feedback and failing checks. Rolling out in Claude Code and the desktop app from November 23.
- **Pricing**: usage billed on tokens. Observe-only policies still incur costs when they invoke classifiers or Code Review. Eligible Enterprise customers can claim at least $10,000 in promotional Claude Ship credits (claim by January 15, 2027).
- **Anthropic's own data**: on the Claude Code team, where Claude writes most of the code, merged PRs more than doubled from June to September 2026 while the share of reverted PRs fell by more than 40%. This is Anthropic's own claim with no independent verification.
- **Disclaimer**: Anthropic states that "Claude Ship uses AI and may miss bugs, security vulnerabilities, or other issues."

## Why it matters (solo-developer lens)

1. **The bottleneck moves from 'writing' to 'merging'**: when agents produce code at scale, the next bottleneck is review and approval. Ship hands that bottleneck to agents. Even solo developers using a PR-based workflow can learn the pattern of writing the review standard down as a policy file.
2. **Governance becomes code**: approval authority is not delegated to the model's judgment but to a policy file the team writes. The file lives in version control and can be debated in its own PR — "handing it to AI" and "handing AI the rules humans wrote" are different things. This is [[concepts/ai-orchestration]] extended to approval decisions.
3. **Trust starts in observe-only**: the staged rollout — observe first, enforce later — is a reusable procedure for handing authority to any agent. When bringing agent automation into your own project, follow the same order: observe, then limited execution, then enforcement.

## Limits (stated explicitly)

- The merged-PR doubling and 40%+ revert reduction are Anthropic's own figures with no independent verification, measured inside "a broader process where Claude's review is one layer."
- GitHub repositories only; other Git hosting is not yet supported.
- Observe-only mode is not free: invoking classifiers or Code Review still bills tokens.
- confidence is medium — multiple reports (Reuters, TechCrunch, The Register) cross-check, but the Anthropic announcement itself is the primary source and there is no real-use verification yet.

## Related concepts

- [[tools/claude-code]] — the /ship command's home, the individual developer's entry point to Claude Ship (2026-11-24)
- [[concepts/ai-orchestration]] — orchestration patterns, now extended to approval decisions (2026-11-24)
- [[concepts/llm-evaluation]] — Code Review's adversarial verification and categorization touch evaluation methodology (2026-11-24)
- [[concepts/openai-gpt-6-2-astra-sol]] — the model launch from the same week, the other axis of frontier competition (2026-11-24)

## Sources

- [Anthropic launches Claude Ship — agents take over code review, fixes, and approvals (Reuters, 11-23)](raw/articles/2026-11-24-anthropic-claude-ship-code-review-pr-approvals.md)
- [Anthropic launches Claude Ship (TechCrunch)](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/)
