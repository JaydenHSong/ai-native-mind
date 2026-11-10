---
title: "DeepSeek Harness Reaches 1.54M Daily Users — Open Agent Framework Pushes a Plugin Marketplace (Nov 5)"
category: concepts
tags: [deepseek, harness, agent-framework, plugins, open-source]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-deepseek-harness-1-54m-dau.md"
related:
  - "[[concepts/deepseek-dsh-superagent-prototype]]"
  - "[[concepts/deepseek-v41-flash-1017]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: medium
---

# DeepSeek Harness Reaches 1.54M Daily Users — Open Agent Framework Pushes a Plugin Marketplace (Nov 5)

## Start here

**Analogy**: turning a coding agent into a smartphone with an app store. The phone itself is free and open source, and users install plugins — apps — to add features. With 1.54 million users in three months, DeepSeek is now opening the official app store (the marketplace).

| Term | Meaning |
|------|------|
| **Harness (dsh)** | DeepSeek's open-source agent framework — the scaffolding that makes a model act as an agent |
| **DAU** | Daily active users — the number of people who used it at least once in a day |
| **everything-is-a-plugin** | A design where built-in features and third-party extensions share the same execution interface |

## One-line definition

On 2026-11-05, DeepSeek's team said its open-source agent framework Harness had reached 1.54 million daily active users and about 92 trillion tokens of daily consumption (reported by SCMP on November 8). About 35,000 third-party plugins have accumulated, and DeepSeek is pushing an official plugin marketplace and a developer support program. The figures are DeepSeek's own, with no independent verification.

## Key facts

- **Scale (DeepSeek's own figures)**: as of November 4, 1.54 million daily active users — counting only users of the official API — and about 92 trillion tokens per day. That is about 5.7× the 271,000 daily users (7-day average) reported for September 30. About 60% of active users have built or installed at least one third-party plugin. The counting methodology has not been disclosed.
- **Timeline**: Harness v0.1 launched on 2026-08-13 (MIT licence, GitHub), with a desktop app on September 29. Release candidate 0.2.2-rc.1 appeared on November 4, adding six more languages, Git worktrees and an experimental subagent_oar plugin that hands tasks to the Codex or Claude CLI. The command is `dsh`, started with `npx @deepseek-ai/dsh web`. The project is still a developer preview and states it has not passed a security audit.
- **Next steps**: an official plugin marketplace (with verified distribution and security vetting) and a developer support program (token incentives, technical exchange, promotion) are planned. No launch dates. Today, installing a plugin means typing a package name manually, so discoverability is low.
- **Architecture**: the "everything-is-a-plugin" design gives built-in capabilities and third-party extensions identical execution interfaces. The community has flagged plugin overload, looping and token overconsumption. The Harness team created its first product division in October 2026, led by Cui Tianyi, formerly of Jane Street.
- **Date note**: the figures first appeared in a DeepSeek team WeChat post on the evening of November 5, were reported by SCMP on November 8, and were re-reported by several outlets on November 9–10. This page is a catch-up collected from the November 9 reporting.

## Why it matters (solo-developer view)

1. **An open agent framework has proven scale**: 1.54M DAU in three months shows closed ecosystems (Claude Code, Codex) are not the only ones that can gather agent users. The combination of an MIT licence and a plugin ecosystem is actually attracting users.
2. **A plugin marketplace is the agent's app store**: an official marketplace with token incentives would make building agent tools and skills a new distribution channel — though security vetting and discoverability design will decide whether it works.
3. **It is still a developer preview**: no security audit has been done and breaking changes are announced in advance. Before using it for production or sensitive-data work, design isolation and permission scopes first.

## Limitations (stated)

- The 1.54M DAU, 92 trillion tokens and 35,000 plugins are all DeepSeek's own figures, with no independent verification. The methodology is undisclosed.
- The marketplace and developer support program are plans, with no launch dates or token-incentive amounts.
- 0.2.2-rc.1 is a release candidate and the project as a whole is a developer preview. It states it has not passed a security audit.

## Related concepts

- [[concepts/deepseek-dsh-superagent-prototype]] — DeepSeek dsh-superagent research prototype, a resident coding agent
- [[concepts/deepseek-v41-flash-1017]] — DeepSeek V4.1-Flash-1017, MIT open-weight at $0.2 per task
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2 and Mythos 5.2, the flagship launched the same week

## Sources

- [DeepSeek Harness 1.54M daily users source](raw/articles/2026-11-10-deepseek-harness-1-54m-dau.md)
