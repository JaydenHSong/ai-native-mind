---
title: "Vector Database & Embeddings"
category: concepts
tags: [vector-db, embeddings, rag, pinecone, pgvector, chroma]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-vector-db-embeddings.md"
related:
  - "[[concepts/rag]]"
  - "[[concepts/ai-memory-systems]]"
status: active
confidence: high
---

# Vector Database & Embeddings

## Easy Read

**Analogy**: Think of translating text into **numerical coordinates** (embeddings), where sentences with similar meanings are mapped to coordinates physically close to one another. Once a user's question is translated into coordinates, a Vector DB acts as a high-speed warehouse that quickly searches for and returns the **nearest coordinates**. Under this coordinate system, semantic matches like "puppy" and "dog" naturally sit adjacent to one another.

| Term | Explanation |
|------|------|
| **Embedding** | Converting a sentence into a high-dimensional **numerical vector** |
| **Vector DB** | A database optimized for storing millions of vectors and executing **ultra-fast nearest neighbor searches** |
| **ANN (Approximate Nearest Neighbor)** | A family of algorithms that prioritize **high-speed approximate matches** over costly mathematically perfect 1st-place searches |

## One-Line Definition

The engineering stack of converting raw text into high-dimensional vectors (Embeddings) and searching them using semantic similarity (Vector Databases). The baseline infrastructure supporting [[concepts/rag|RAG (Retrieval-Augmented Generation)]].

## Core Concepts

### What Is an Embedding?
Converting text into a **high-dimensional numerical vector** (typically spanning 768 to 3072 dimensions).
- Semantically similar texts = Map adjacent to one another in the vector space.
- "Puppy" and "dog" are mathematically close despite sharing no letters in common.

### Role of a Vector Database
1. **Storage**: High-density storage of millions of high-dimensional embedding vectors.
2. **Search**: High-speed lookup of vectors closest to the query vector (utilizing ANN algorithms).
3. **Filtering**: Combining vector searches with traditional metadata constraints.

### 2026 Market Realities
- Global Market Size: **$3.2B** (as of 2025), growing at 24% CAGR.
- All major vector databases have matured to production-grade reliability.

## Vector Database Comparison Matrix

| Database | Primary Strengths | Weaknesses | Best Suited For |
|----|------|------|------|
| **Pinecone** | Billion-scale elasticity, fully-managed SaaS | Premium cost, vendor lock-in | Large Enterprises |
| **pgvector** | Native Postgres extension, ACID transactions | Slower index builds past 5M vectors | **2026 Default Recommendation** |
| **Chroma** | Zero-setup, lightweight, highly local-friendly | Poor scaling past mid-size datasets | Prototypes, Solo Devs |
| **Weaviate** | Advanced hybrid search, metadata indexing | High setup complexity | Complex enterprise search |
| **Qdrant** | High-performance Rust engine, fast indexing | Relatively young community | Raw performance targets |
| **Milvus** | Distributed architecture for huge scale | High infrastructure complexity | 100M+ vector fleets |

### Chroma Metrics
For a 100K vector dataset: **p50 20ms, p90 90ms latency**. Seamlessly handles millions of vectors on a standard 4-8GB RAM container.

## Solo Developer Selection Guide

```
Prototype Phase        → Chroma (local, free, zero-config)
MVP / Initial Launch   → pgvector (leverages existing Postgres stack)
Scaling Phase          → Pinecone or Qdrant Cloud
```

## Embedding Model Options

| Provider | Model Name | Key Characteristics |
|--------|------|------|
| **OpenAI** | `text-embedding-3-small` | $0.02 / 1M tokens, default starting choice |
| **OpenAI** | `text-embedding-3-large` | Premium quality, supports dimensions pruning |
| **Cohere** | `embed-v3` | Excellent multilingual performance |
| **Voyage AI** | `voyage-3` | Optimized for structured code and technical documents |
| **Local** | `BGE`, `sentence-transformers` | Free, private, offline execution |

## RAG Pipeline Overview

```
[Documents]
    ↓ Chunking (300 - 1,000 characters)
[Chunks]
    ↓ Embedding
[Vectors] → Vector DB
 
[User Query]
    ↓ Embedding
[Query Vector]
    ↓ Similarity Search
[Top-K Chunks]
    ↓ Context Injection
[LLM] → Answer Synthesis
```

## Performance & Cost Tradeoffs

- **Latency under 1 Million Vectors**: Almost all databases respond in single-digit milliseconds.
- **DB latency is dwarfed by Embedding API network latency**.
- Therefore, **Embedding Model selection** frequently impacts accuracy and latency more than DB database selection.

## Related Concepts

- [[concepts/rag]] — The retrieval layer leveraging Vector DB architectures
- [[concepts/ai-memory-systems]] — Storing semantic memories in long-term AI memory substrates

## References

- [Vector DB Curation Research Notes](raw/notes/2026-04-09-vector-db-embeddings.md)
- [Vector DB Comparison 2026 (Encore)](https://encore.dev/articles/best-vector-databases)
- [pgvector vs. Pinecone Performance Review (Encore)](https://encore.dev/articles/pgvector-vs-pinecone)
