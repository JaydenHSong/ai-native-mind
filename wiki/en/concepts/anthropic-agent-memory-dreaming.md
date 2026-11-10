---
title: "Anthropic's Agent Memory 'Dreaming' — Offline Consolidation Between Sessions That Fixes Wrong Notes and Builds Wikis"
category: concepts
tags: [anthropic, claude, agent-memory, dreaming, sleep-time-compute]
created: 2026-11-07
updated: 2026-11-07
sources:
  - "raw/articles/2026-11-07-anthropic-agent-memory-dreaming.md"
related:
  - "[[concepts/ai-memory-systems]]"
  - "[[patterns/llm-wiki]]"
  - "[[concepts/meta-muse-wonder-models]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: high
---

# Anthropic's Agent Memory "Dreaming" — Offline Consolidation Between Sessions That Fixes Wrong Notes and Builds Wikis

## Start here

**Analogy**: like a person consolidating memories during sleep, Claude uses the time between sessions to re-read its own logs. It corrects wrong notes, weaves scattered notes into a wiki, and picks which notes to leave on the desk for the next morning. It studies while it sleeps — though sleeping still costs electricity.

| Term | Meaning |
|------|------|
| **Dreaming** | The offline process between sessions in which an agent reviews logs, corrects notes and organizes knowledge |
| **Sleep-time compute** | The research idea of using a model's idle time between interactions to reorganize existing context (Letta and UC Berkeley) |
| **CL-Bench** | Continual Learning Bench — a benchmark for measuring the ability to keep learning |

## One-line definition

Anthropic's engineering blog "The components of agent memory" (Lance Martin, 2026-11-06) describes how Claude keeps knowledge between sessions. The centerpiece is "dreaming": in offline time between sessions, Claude re-reads its own logs, corrects notes that turned out to be wrong, writes new notes, builds linked wiki pages, and decides which facts get loaded into the next session. The idea borrows from how human sleep consolidates memory, citing sleep-time compute research from Letta and UC Berkeley.

## Key facts

- **Definition**: Anthropic defines agent memory narrowly as knowledge Claude gains from experience, retained between sessions as files it can read later. It excludes weight changes, in-context learning inside one conversation, and compaction (summaries that replace older turns).
- **Four layers**: (1) transcripts — conversations and activity logs preserved as-is; (2) memory notes — lessons, rules, goals and plans Claude chooses to record; (3) memory representations — organized knowledge structures such as wikis; (4) injected context — a small memory layer preloaded at the start of every session. Dreaming operates between these layers.
- **Design rule**: the central rule is "tell Claude what memory is for, but not how to use it." Telling strong models to record only failures weakened them. Claude Code's auto memory loads only the first 200 lines or 25 KB of MEMORY.md as an index. The always-loaded layer must stay small.
- **Test results**: on the Continual Learning Bench (CL-Bench) 1.0 database task, memory raised scores from 0.655 to 0.838 for Opus 5.5, 0.644 to 0.833 for Sonnet 5.5, and 0.564 to 0.828 for Opus 5. In Pokémon Red, Sonnet 3.7 left 413 files across 225 folders (about 978,000 characters) and earned one badge, while Fable 5 kept nine files plus one dashboard (about 43,400 characters) and earned four badges. In one run, a wrong note about a PokéCenter's location near Mt. Moon sent Claude repeatedly over a one-way ledge; after dreaming corrected the note against the transcript, it re-entered the cave and reached Cerulean City.
- **Wiki experiment**: using about 350,000 internal files (roughly 420 million tokens) from Stainless, a software company Anthropic says it acquired in May, Opus 5 agents ran 128 dreaming sessions to build a wiki. The share of graded criteria met on 25 evaluation questions rose from 13% to 48%; search plus wiki reached 61% against 53% for search alone. The wiki did not always help.
- **Scope**: the post describes research setups on Managed Agents and Claude Code's auto memory; it does not announce dreaming as a general product feature. Memory maintenance costs compute, and the right cadence is still an open question. All evaluations are Anthropic's own, with no independent verification.

## Why it matters (solo-developer view)

1. **This wiki's approach is close to the validated one**: this wiki (ai-native-mind) collects raw sources and has an LLM refine them into a wiki. Anthropic's experiment confirms exactly that structure with its own data — weaving logs into a wiki lifted question-answering from 13% to 48%. Building a wiki is one of the canonical ways to design memory.
2. **Quality beats quantity in memory**: the model that left 413 files did worse than the one that kept nine. Memory is not about recording more — it is about correcting what is wrong and loading only what is needed. For my own agent's MEMORY.md, pruning matters more than accumulating.
3. **State the purpose, leave the method open**: telling strong models exactly how to record weakened them — a harness-design lesson. Set the purpose and the boundaries, and let the model find the method. That matches the harness-engineering principle of "guides, not scripts."

## Limitations (stated)

- This is a research write-up, not a product launch. When or how dreaming reaches general Claude products is undisclosed.
- All evaluations are Anthropic's own measurements, with no independent reproduction or external verification.
- The wiki experiment used one company's internal files, so generalization to other domains is untested. The compute cost of memory maintenance and the right cadence are open questions.

## Sources

- [Anthropic's agent memory 'dreaming' source](raw/articles/2026-11-07-anthropic-agent-memory-dreaming.md)