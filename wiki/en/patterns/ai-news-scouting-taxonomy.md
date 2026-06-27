---
title: "AI News Scouting Taxonomy"
category: patterns
tags: [ai-news, taxonomy, scouting, curation, agents]
created: 2026-05-25
updated: 2026-06-23
sources:
  - "raw/notes/2026-05-25-weekday-ai-software-watch.md"
related:
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
  - "[[patterns/solo-product-strategy]]"
status: draft
confidence: medium
---

# AI News Scouting Taxonomy

## Start here

Instead of watching only Hacker News, this taxonomy divides **where important changes in AI software work appear** into a few layers. The goal is to reduce hardware and investment noise and focus on **models, products, coding agents, open-model runtimes, and operations-layer changes that can affect work immediately**.

## One-line definition

A curation taxonomy that reframes HN-centered general developer news tracking around **models, tools, agents, runtimes, and evaluation/observability changes for AI software work**.

## Why this taxonomy is needed

The existing HN-centered flow is good at capturing:

- demos and buzz;
- developer reactions;
- debates;
- famous posts and showcases.

But it often misses:

- official release notes;
- API contract changes;
- pricing / latency / context-window changes;
- actual product features;
- signs that open-model deployment and inference ecosystems are becoming usable;
- operational changes in coding agents and operator tools.

So before adding more sources, the first step is to structure **what kind of news should be watched**.

## Top-level principles

1. Prioritize **usability** over the model itself.
2. Exclude **hardware news** by default, unless it directly changes software usability.
3. Prefer **official blogs / docs / release notes / GitHub releases** as primary sources.
4. Organize by **category**, not by vendor, for readability.
5. Judge by **workflow impact**, not only benchmark competition.

## v1 taxonomy

### 1. Frontier models and products

Targets:

- Anthropic Claude / Opus / Sonnet
- OpenAI GPT / Codex / ChatGPT product family
- Google Gemini / AI Studio / Workspace integrations

Key questions:

- Was a new model released?
- Did pricing, speed, context window, or multimodality change?
- Which app/web product features actually opened?
- Did the API or tool-use contract change?

Signals:

- official blog
- release notes
- API docs / changelog
- system card / policy update

### 2. Open/free model ecosystem

Targets:

- Qwen
- Gemma
- Llama family
- Mistral / Mixtral
- derivative models on Hugging Face Hub

Key questions:

- Not just “is the new model strong,” but **does it actually run well?**
- What is the license?
- Do local inference, quantization, and GGUF paths arrive quickly?
- How suitable is it for multilingual, code, reasoning, and agent use?

Signals:

- HF Blog / Hub / model cards
- Qwen / Gemma / Llama official announcements
- community derivative releases

### 3. Coding agents / AI coding software

Targets:

- Claude Code
- Codex family
- GitHub Copilot family
- Cursor
- Aider / Continue / Cline / Cody / Replit family

Key questions:

- Is it an IDE assistant, CLI operator, or cloud agent?
- Did repo reading, editing, testing, or PR creation actually improve?
- Beyond benchmarks, what changed in real loops such as test, debug, and review?
- What are the approval, sandbox, and secrets-handling models?

Signals:

- product blogs
- changelogs
- GitHub releases
- maintainer demos / usage reports

### 4. Agent engineering / operator software

Targets:

- Hermes
- OpenHands / OpenDevin-like tools
- computer-use / browser-use / terminal-use operators
- self-hosted agent shells

Key questions:

- Is autonomy expanding to real units of work?
- Are browser / terminal / filesystem / git orchestration stable?
- How are local/remote execution, sandboxing, rollback, and approval designed?
- Compared with closed agents, how much control and reproducibility remain?

Signals:

- official docs / repositories / release notes
- examples / benchmark harnesses
- repeated issues in issue trackers

### 5. Runtime / orchestration / workflow layer

Targets:

- LangGraph
- AutoGen
- CrewAI
- Temporal / Prefect / Dagster / Trigger.dev-like systems
- agent job runners / long-running workflow / event-driven runtime

Key questions:

- How does it handle long-running work and failure recovery?
- Are retry, checkpoint, audit trail, and HITL available?
- Is it entering production workflows rather than staying at simple chaining?

Signals:

- release notes
- architecture posts
- production-pattern write-ups

### 6. Evals / observability / safety controls

Targets:

- SWE-bench / terminal/web-task benchmark families
- Langfuse / Braintrust / Helicone / W&B-like observability tools
- policy / sandbox / permission / auditability tooling

Key questions:

- Does the benchmark have realism and reproducibility?
- Can it catch regressions?
- Can the agent system be observed and controlled?
- Does it provide the safety layer needed for enterprise adoption?

Signals:

- benchmark releases
- eval-methodology posts
- tracing / observability releases
- security / approval-model updates

## Recommended editing order

A weekly digest is usually more stable in this order:

1. **The biggest product/model change of the week**
2. **Open-model usability changes**
3. **Coding-agent updates**
4. **Agent engineering / runtime changes**
5. **Eval / observability / policy changes**

For the reader, the point is not “who is best,” but **where this week changes my working style**.

## Exclusion rules

Exclude by default:

- pure GPU/chip-performance news;
- investment or acquisition rumors;
- general AI regulation news not connected to products;
- viral demos with no reproducible path.

Include only as exceptions:

- infrastructure changes that directly affect context window / latency / pricing;
- policy changes that alter API contracts or product behavior;
- deployment/runtime announcements that directly affect open-model usability.

## Minimal source set to track

### Frontier

- Anthropic News / Docs
- OpenAI Blog / Platform docs / release notes
- Google DeepMind Blog / AI Studio / Workspace updates

### Open/free

- Hugging Face Blog / Hub / model cards
- Qwen blog
- Gemma official pages
- Llama/Mistral official release channels

### Coding / agent tools

- GitHub AI/ML blog
- Cursor / Replit / Sourcegraph / Aider / Continue / OpenHands release channels
- Hermes / operator-tool repos and docs

### Runtime / evals

- LangGraph / AutoGen / CrewAI updates
- Temporal / Prefect / Trigger.dev engineering blogs
- Langfuse / Braintrust / Helicone / W&B release notes

## Operating note

This taxonomy is not a **vendor catalog**. It is a **map of layers where changes happen**. When building an actual news collection system later, it is better to separate:

- vendor-name inboxes;
- category-based digests.

## Next steps

- Finalize source lists for each category.
- Design RSS / blog / GitHub release input surfaces.
- Apply this taxonomy to the Friday weekly-summary format.
- Define how news and wiki ingest connect inside ai-native-mind.
