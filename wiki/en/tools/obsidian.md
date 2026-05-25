---
title: "Obsidian"
category: tools
tags: [obsidian, markdown, note-taking, wiki]
created: 2026-04-06
updated: 2026-04-12
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[patterns/llm-wiki]]"
  - "[[tools/claude-code]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
status: active
confidence: medium
---

# Obsidian

## Easy Read

**Analogy**: A markdown-based note-taking application that **resides entirely on your local computer**. Connecting pages using simple `[[Wikilinks]]` automatically populates a visual **knowledge graph**. This wiki repository (`ai-native-mind`) is custom-designed to be browsed inside Obsidian to unlock visual graphing and instant indexing.

| Term | Explanation |
|------|------|
| **Markdown** | A syntax for writing **formatted text inside plain files** using cues like `# Header` or `- List` |
| **Wikilink** | Linking notes together using `[[Page Name]]` strings |
| **Vault** | A **local folder directory** containing a collection of notes |

## One-Line Definition

A local markdown-based personal knowledge base application specializing in 양방향 (bidirectional) wikilinks and semantic graph visualizers.

## Core Features

- **Wikilinks** (`[[...]]`): Build semantic bidirectional connections across notes, forming a structured knowledge graph.
- **Graph View**: Visually explore the structure of your wiki to identify hubs, orphan notes, and topic clusters.
- **Dataview Plugin**: Run SQL-like queries against frontmatter metadata in your vault dynamically.
- **Web Clipper**: Import web articles directly into clean markdown format via browser extensions.
- **Community Plugins**: Rich community ecosystem offering utilities like Calendar, Templater, and Marp slides.
- **Local File Control**: All notes are stored as flat local markdown files on your drive, eliminating vendor lock-in.

## Operations Summary

In the [[patterns/llm-wiki|LLM-Wiki Pattern]], Obsidian plays a simple, load-bearing role:

> "Obsidian is the IDE; the LLM is the programmer; the Wiki is the codebase."

- Open Obsidian on one side of your screen and Claude Code inside a terminal on the other.
- As the LLM updates the wiki files in the background, Obsidian reflects the changes in real time.
- Navigate the vault visually using the Graph View and follow inline cross-references.

### LLM-Wiki Configurations

- **Attachment Directory**: Configured as `raw/assets/` to store images locally.
- **Wikilinks**: Enabled (ON).
- **Download attachments hotkey**: Automatically localizes images when clipping web articles.

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Local markdown files mean complete, lifetime ownership | Official mobile sync is a paid service (Obsidian Sync) |
| Visual Graph View maps complex knowledge topologies clearly | LLMs cannot read nested local images inside markdown directly |
| Massive, highly extensible community plugin ecosystem | Requires initial workspace configuration overhead |
| Works natively with standard Git version control systems | Native real-time collaboration features are restricted |

## Related Tools

- [[tools/claude-code]] — The terminal LLM managing and pruning the wiki files

## Chapter Clear Guide

- **Chapter**: Chapter 0 (Tutorials)
- **Quest**: Open your Vault directory and identify the functional roles of the `raw/`, `wiki/`, and `templates/` folders.
- **Clear Condition**: Select any wikilink and trace the bidirectional relationship between the linked documents.
- **Reward (Deliverable)**: 1 curated checklist of Obsidian search views and graphs you will monitor.
- **Next Quest**: [[tools/claude-code]] $\to [[concepts/ai-native-programmer]]

## References

- [LLM-Wiki Pattern (Tobi Lütke)](raw/articles/2026-04-04-llm-wiki-pattern.md)
