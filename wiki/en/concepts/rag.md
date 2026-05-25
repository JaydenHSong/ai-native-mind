---
title: "RAG (Retrieval-Augmented Generation)"
category: concepts
tags: [rag, llm, retrieval, knowledge]
created: 2026-04-06
updated: 2026-04-11
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[patterns/llm-wiki]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# RAG (Retrieval-Augmented Generation)

## Easy Read

**Analogy**: Similar to taking an open-book exam with **only a few selected pages torn out and placed on your desk**. The system retrieves paragraphs related to your question from a document repository, appends them to the model's prompt, and generates a response based on that retrieved context. Highly useful for injecting **internal company wikis or real-time articles** that the model was not trained on.

| Term | Explanation |
|------|------|
| **Chunk** | A **small snippet** sliced from a larger document |
| **Top-K** | Selecting only the **K** most relevant document snippets |
| **Embedding** | Converting text into **numerical vectors** to measure semantic closeness |

## One-Line Definition

An architectural pattern where an LLM retrieves relevant information from external document repositories and utilizes it as prompt context to generate highly grounded answers.

## Core Concepts

RAG (Retrieval-Augmented Generation) bypasses the knowledge limits of static LLM training data by executing three steps:

1. **Retrieve**: Queries a document collection to find relevant chunks matching the user's prompt.
2. **Augment**: Injects the retrieved chunks directly into the LLM's active prompt context.
3. **Generate**: Prompts the LLM to synthesize a response grounded purely on the retrieved data.

**Standard Pipeline**: File Ingestion $\to$ Document Chunking $\to$ Vector Embedding $\to$ Vector DB Storage $\to$ Semantic Similarity Search at Query Time $\to$ Context Injection.

**Prominent Examples**: NotebookLM, ChatGPT file uploads, and almost all enterprise "Chat with your PDF" products.

## Why It Matters

While RAG is currently the most popular paradigm for connecting LLMs with external knowledge, understanding its inherent limitations explains why alternative architectures like the [[patterns/llm-wiki|LLM-Wiki Pattern]] are emerging.

**Primary RAG Bottlenecks**:
- **Stateless Comprehension**: The model reads retrieved snippets as if it is seeing them for the first time on every query—there is no durable knowledge accumulation.
- **Fragile Synthesis**: Weak at answering questions requiring synthesis across multiple disjointed files (requires retrieving and fitting all candidate chunks into the prompt context window).
- **Redundant Processing**: Cross-referencing, resolving contradictions, and syntheses are re-computed from scratch on every single run.

## Related Concepts

- [[patterns/llm-wiki]] — The Wiki Pattern as a robust alternative/complement to RAG
- [[comparisons/rag-vs-llm-wiki]] — Comparative architectural analysis of RAG vs. LLM-Wiki

## References

- [LLM-Wiki Pattern (Tobi Lütke)](raw/articles/2026-04-04-llm-wiki-pattern.md)
