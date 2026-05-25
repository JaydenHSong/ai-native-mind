---
title: "Campaign Map"
category: meta
tags: [map, campaign, navigation]
created: 2026-04-12
updated: 2026-04-13
sources:
 - "wiki/overview.md"
 - "wiki/index.md"
 - "wiki/log.md"
status: active
confidence: high
---

# ai-native-mind Campaign Map

> A world map to navigate the entire wiki like a "Chapter Clear Game."

## Easy Read

This is not a document to read from beginning to end. Choose the chapter that matches your current experience level, and aim to accomplish the **Clear Condition + Deliverable**.

## World Map Hub

- Starting Village: [[wiki/overview|Overview]]
- Catalog (Complete List): [[wiki/index|Index]]
- Quest Record: [[wiki/log|Log]]
- Play Log: [[journal/2026-04-12|Journal Sample]]

## Main Quest Line (Recommended)

### Chapter 0 - Tutorial
- Readings: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- Clear Condition: Explain the ingest/query/lint flow in 3 sentences
- Deliverable: Personal wiki usage rules memo

### Chapter 1 - Worldview
- Readings: [[concepts/ai-native-programmer]], [[concepts/ai-native-architecture]]
- Clear Condition: Summarize in 5 sentences why the AI-native approach is needed
- Deliverable: Before/After notes on my development methodology

### Chapter 2 - Basic Combat
- Readings: [[concepts/context-engineering]], [[concepts/prompt-engineering]], [[concepts/context-vs-prompt-practice]]
- Clear Condition: Classify development issues as prompt vs. context-driven
- Deliverable: My custom context sources inventory

### Chapter 3 - Party Orchestration
- Readings: [[concepts/ai-orchestration]], [[patterns/orchestration-patterns-practice]]
- Clear Condition: Classify your current development tasks into the 6 core patterns
- Deliverable: Draft your own workflow diagram (text format accepted)

### Chapter 4 - Plan & Build
- Readings: [[patterns/agent-planning-to-implementation]], [[patterns/subagents-delegation]]
- Clear Condition: Decompose one feature into Plan -> Specs -> Implementation -> Verification
- Deliverable: Checklists for a single implemented feature

### Chapter 5 - Sandbox & Harness
- Readings: [[patterns/agent-server-harness]], [[patterns/safe-tool-calling-sandbox]], [[patterns/owasp-llm-typescript-mitigations]]
- Clear Condition: Find at least one missing permission/validation/logging/retry spot in your server
- Deliverable: Security guidelines checklist v1

### Chapter 6 - Boss Fight (Evals & Observability)
- Readings: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]]
- Clear Condition: Set up 2 quality metrics + 2 observability metrics for your app
- Deliverable: Metrics card dashboard draft (dashboard mock)

### Chapter 7 - Endgame
- Readings: [[patterns/git-ai-workflow]], [[patterns/ai-code-review]], [[patterns/ai-cost-management]]
- Clear Condition: Automate and standardize at least one highly repetitive workflow
- Deliverable: Your own custom 1-page AI development playbook

## Sub-Quest Lines (Optional)

- **Advanced Harness & Official Study**: [[patterns/harness-engineering-casebook]] (30-case matrix + Anthropic Academy map)
- **Security Track**: [[patterns/owasp-llm-typescript-mitigations]] -> [[patterns/safe-tool-calling-sandbox]] -> [[concepts/context-rot-hallucination]]
- **Tool Comparison**: [[comparisons/claude-code-plugins]] -> [[comparisons/ai-coding-tools]] -> [[comparisons/agent-frameworks]]
- **Cost & Efficiency**: [[patterns/prompt-caching]] -> [[patterns/ai-cost-management]] -> [[concepts/structured-output]]

## Progress Tracker

- [ ] Chapter 0 Cleared
- [ ] Chapter 1 Cleared
- [ ] Chapter 2 Cleared
- [ ] Chapter 3 Cleared
- [ ] Chapter 4 Cleared
- [ ] Chapter 5 Cleared
- [ ] Chapter 6 Cleared
- [ ] Chapter 7 Cleared

## Play Rules

1. Clear only one chapter per day.
2. Focus on producing deliverables rather than just reading passively.
3. If you get stuck, go back to the previous chapter and try again.
4. Record your clear evidence in `wiki/journal/` or inside your project notes.

## Patch Notes

- 2026-04-12: Added a `Chapter Clear Guide` section to core documents in Chapters 0~2 to prevent quest flow interruptions.
- 2026-04-12: Expanded `Chapter Clear Guide` to Chapters 3~7 core documents to ensure sequential continuity.
- 2026-04-13: Added [[patterns/harness-engineering-casebook]] — featuring 30 harness domain cases + Anthropic Academy study map, connected to sub-quests.
