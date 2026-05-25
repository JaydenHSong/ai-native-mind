---
title: "LLM-Wiki Pattern"
category: patterns
tags: [llm, wiki, knowledge-management, obsidian]
created: 2026-04-06
updated: 2026-04-12
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[concepts/rag]]"
  - "[[tools/obsidian]]"
  - "[[tools/claude-code]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# LLM-Wiki Pattern

## Easy Read

**Analogy**: Instead of a human manually drafting and linking every single wiki article, the **LLM handles the structural organization, cross-referencing, and continuous updates** of the workspace. The typical setup involves storing immutable source files in `raw/`, while leaving the `wiki/` directory as the **structurally processed synthesis layer** (governed by the `CLAUDE.md` workspace rules of this repository).

| Term | Explanation |
|------|------|
| **Layer 1 Raw** | The immutable **source input archive** |
| **Layer 2 Wiki** | The synthetically processed **markdown knowledge base** |
| **Ingest** | Reading a raw source file and **synthesizing it into the wiki** |

## One-Line Definition

A personal knowledge management pattern where an LLM dynamically curates, structures, and cross-references a markdown-based wiki vault, allowing personal learning to aggregate and compound over time.

---

## The Problem: Stateless RAG Retrieval

Traditional knowledge retrieval relies on standard [[concepts/rag|RAG (Retrieval-Augmented Generation)]] pipelines—attempting to dynamically rediscover relevant knowledge chunks from a raw archive for every query. This is the underlying architecture of platforms like NotebookLM or standard ChatGPT file uploads. The critical limitations are:
- The system must read input documents from scratch for every session, behaving like a "first-time visitor."
- Answering queries that span multiple documents requires matching scattered fragments in real time.
- Cross-references, semantic contradictions, and holistic summaries are never accumulated or preserved.
- **Knowledge does not compound** over time.

---

## The Solution: A Compiled Knowledge Base

### 3-Layer Architecture

1. **Raw Sources (`raw/`)**: Immutable source documents (articles, transcripts, notes). The LLM reads from this directory but never writes to it.
2. **Wiki (`wiki/`)**: Markdown documents generated and pruned exclusively by the LLM. Contains concept sheets, summaries, comparisons, and index maps.
3. **Schema (`CLAUDE.md`)**: The workspace rules defining formatting conventions, folder hierarchies, and operational workflows. Curated and updated by the human and model in tandem.

```
┌──────────────────────────────────────┐
│  1. RAW SOURCES (raw/)               │  ← Immutable inputs (read-only)
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│  2. WIKI WORKSPACE (wiki/)           │  ← Curated markdown notes
│   (Concepts, Summaries, Indices)     │  ← Dynamically linked & pruned by LLM
└──────────────────▲───────────────────┘
                   │
┌──────────────────┴───────────────────┐
│  3. SCHEMA RULESETS (CLAUDE.md)      │  ← Governs constraints & conventions
└──────────────────────────────────────┘
```

### The 3 Core Operations

- **Ingest**: Process a new raw source file $\to$ LLM summarizes it, creates relevant concept pages, links them to existing wiki articles via wikilinks, and updates global indexes. A single ingest run can update 10 to 15 different wiki files to preserve cross-references.
- **Query**: Run semantic searches against the wiki to answer inquiries. Capturing exceptional answers and saving them back as new wiki files ensures search paths are saved for future recall.
- **Lint**: Maintain workspace health by scanning for semantic contradictions, orphaned files, dead wikilinks, stale assertions, and missing cross-references.

### Core Strategic Insight

> "The wiki acts as a persistent, compounding asset."

Cross-references are permanently mapped, logical inconsistencies are pre-emptively flagged, and summaries consolidate every source ever digested. Every new article ingested makes the entire vault semantically richer.

---

## Targeted Real-World Workloads

- **Personal Evolution**: Tracking goals, fitness indices, and self-improvement goals—synthesizing daily logs, books, and podcasts into a unified personal dashboard.
- **Academic Research**: Digesting academic papers, essays, and reports weekly to compile a dynamic, highly linked thesis workspace.
- **Deep Reading**: Cataloging book chapters, thematic pages, character maps, and plotlines—building a private structural encyclopedia.
- **Business Operations**: Digesting Slack transcripts, meeting logs, and briefs to maintain an evergreen internal corporate wiki.
- **Competitor audits, financial due diligence, vacation mapping, study guides, and hobby deep-dives**.

---

## Recommended Tool Stack

| Core Role | Recommended Tool |
|------|------|
| Wiki Browser & IDE | [[tools/obsidian|Obsidian]] |
| Wiki Curating LLM | [[tools/claude-code|Claude Code]] |
| Asset Capturing | Obsidian Web Clipper extension |
| Large-Scale Search | Local qmd indexing (BM25 + vector search) |
| Version Control | Git |

---

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Knowledge aggregates and compounds automatically | Demands upfront schema engineering and rules design |
| Semantic cross-references and indexes are programmatically kept current | High API token consumption (reading index contexts per request) |
| The human focuses on synthesis while the LLM manages file maintenance | Scaling the database eventually requires setting up local search indexes |
| The asset value grows exponentially over time | Over-engineering the ruleset schema can cripple agent agility |

---

## Historical Paradigm: Bush's Memex

This pattern is a direct implementation of Vannevar Bush's **Memex (1945)** concept—an associative trail-blazing personal knowledge store. Bush's vision centered on personal, active curation where the semantic associations between documents are as valuable as the documents themselves. The LLM solves the core bottleneck that Bush could not resolve in 1945: **who handles the massive labor of cataloging, parsing, and linking files**.

## Related Concepts

- [[concepts/rag]] — The baseline stateless architecture that the LLM-Wiki pattern complements.
- [[comparisons/rag-vs-llm-wiki]] — Deep comparison of both approaches.

## Chapter Clear Guide

- **Chapter**: Chapter 0 (Tutorials)
- **Quest**: Draft a one-sentence operational statement defining how Ingest, Query, and Lint loops will govern your private wiki.
- **Clear Condition**: Articulate with examples how the 3-layer architecture (`raw/` = raw data, `wiki/` = processed knowledge, `schema/` = execution rules) prevents knowledge fragmentation.
- **Reward (Deliverable)**: 1 Curated Wiki Operational Schema Draft.
- **Next Quest**: [[tools/obsidian]] $\to$ [[tools/claude-code]] $\to$ [[concepts/ai-native-programmer]].

## References

- [The LLM-Wiki Pattern (Tobi Lütke Blog Post)](raw/articles/2026-04-04-llm-wiki-pattern.md)
