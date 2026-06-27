---
title: "Campaign Map"
category: meta
tags: [map, campaign, navigation]
created: 2026-04-12
updated: 2026-06-27
sources:
  - "wiki/overview.md"
  - "wiki/index.md"
  - "wiki/log.md"
status: active
confidence: high
---

# ai-native-mind Campaign Map

> A world map for following the wiki like a “chapter clear” game.

## Start here

This is not a document you read from top to bottom. Pick one chapter that matches your current level, then satisfy only its **clear condition + artifact**.

## World map hub

- Starting village: [[overview|Overview]]
- Full catalog: [[index|Index]]
- Quest log: [[log|Log]]
- Play journal sample: [[journal/2026-04-12|Journal sample]]

## Main quest line

### Chapter 0 — Tutorial
- Docs: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- Clear condition: explain the ingest/query/lint flow in 3 sentences
- Artifact: a personal wiki-usage rule note

### Chapter 1 — Understand the worldview
- Docs: [[concepts/ai-native-programmer]], [[concepts/ai-native-architecture]]
- Clear condition: summarize in 5 sentences why an AI-native way of working matters
- Artifact: a before/after note about your development style

### Chapter 2 — Basic combat
- Docs: [[concepts/context-engineering]], [[concepts/prompt-engineering]], [[concepts/context-vs-prompt-practice]]
- Clear condition: classify a problem as prompt vs context
- Artifact: your context-source list

### Chapter 3 — Party operations
- Docs: [[concepts/ai-orchestration]], [[patterns/orchestration-patterns-practice]]
- Clear condition: classify your current work into one of the six major patterns
- Artifact: a workflow diagram, even in text

### Chapter 4 — Workshop
- Docs: [[patterns/agent-planning-to-implementation]], [[patterns/subagents-delegation]]
- Clear condition: decompose one feature into planning → spec → implementation → verification
- Artifact: a checklist for one feature

### Chapter 5 — Safety dungeon
- Docs: [[patterns/agent-server-harness]], [[patterns/safe-tool-calling-sandbox]], [[patterns/owasp-llm-typescript-mitigations]]
- Clear condition: find at least one missing safeguard among permissions, verification, logging, and retries
- Artifact: Security Checklist v1

### Chapter 6 — Operations boss fight
- Docs: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]]
- Clear condition: define 2 quality metrics + 2 observability metrics
- Artifact: a metric card or dashboard draft

### Chapter 7 — Endgame
- Docs: [[patterns/git-ai-workflow]], [[patterns/ai-code-review]], [[patterns/ai-cost-management]]
- Clear condition: automate or standardize one recurring task
- Artifact: a one-page personal AI development playbook

## Side quest lines

- **Harness deep dive + official study**: [[patterns/harness-engineering-casebook]]
- **Security specialization**: [[patterns/owasp-llm-typescript-mitigations]] → [[patterns/safe-tool-calling-sandbox]] → [[concepts/context-rot-hallucination]]
- **Tool comparisons**: [[comparisons/claude-code-plugins]] → [[comparisons/ai-coding-tools]] → [[comparisons/agent-frameworks]]
- **Cost / efficiency**: [[patterns/prompt-caching]] → [[patterns/ai-cost-management]] → [[concepts/structured-output]]

## Progress tracker

- [ ] Chapter 0 clear
- [ ] Chapter 1 clear
- [ ] Chapter 2 clear
- [ ] Chapter 3 clear
- [ ] Chapter 4 clear
- [ ] Chapter 5 clear
- [ ] Chapter 6 clear
- [ ] Chapter 7 clear

## Play rules

1. Clear only one chapter per day.
2. Leave artifacts, not just reading notes.
3. If you get stuck, go back to an earlier chapter and retry.
4. Leave proof of completion in `wiki/journal/` or in project docs.

## Patch notes

- 2026-04-12: Added a shared `Chapter Clear Guide` section to the core docs for Chapters 0–2 so the quest flow continues at the document level.
- 2026-04-12: Extended the same guide to the core docs for Chapters 3–7 so the whole chapter line stays connected page by page.
- 2026-04-13: Added [[patterns/harness-engineering-casebook]] — 30 harness domain cases + Anthropic Academy study map — and linked it as a side quest.
- 2026-05-24: Synced the English meta hub with the current Korean source-of-truth navigation, including the quest log and full journal line.
- 2026-05-26: Checked during English batch sync; navigation still matches the current Chapter Clear structure while index/overview/log carry the new 2026-05-25/26 updates.
- 2026-06-02: Synced meta navigation links to the actual English root files: [[index]], [[overview]], [[campaign-map]], and [[log]].
- 2026-06-13: Checked during Friday English batch sync; the Chapter Clear route still matches the Korean source-of-truth map while `index`, `overview`, and `log` carry the latest maintenance state.
- 2026-06-20: Checked during Friday English batch sync; no campaign-route drift from the Korean source-of-truth map was found, and `index`, `overview`, and `log` now mirror maintenance through 2026-06-20.
- 2026-06-27: Checked during Friday English batch sync; no campaign-route drift from the Korean source-of-truth map was found, and English meta pages now mirror maintenance through 2026-06-27.
