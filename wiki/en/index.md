---
title: "Wiki Index"
category: meta
tags: [index, catalog]
created: 2026-04-06
updated: 2026-05-24
sources: []
status: active
confidence: high
---

# ai-native-mind Wiki Index

> Overall Knowledge Index | Last Updated: 2026-05-25 (Dual-Language Update)

## Easy Read

This is the **Table of Contents** for the entire knowledge base. If a topic is unfamiliar, open its page and read the **"Easy Read Summary"** at the very top.

## Chapter Clear Starting Points

To navigate the curriculum like a game roadmap, open the [[wiki/campaign-map|Campaign Map]] first, and consult the [[wiki/overview|Overview]] for high-level context as needed.

- **Tutorial (Chapter 0)**: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- **Fundamentals (Chapter 1~2)**: [[concepts/ai-native-programmer]], [[concepts/context-engineering]]
- **Practice (Chapter 3~5)**: [[concepts/ai-orchestration]], [[patterns/agent-planning-to-implementation]], [[patterns/agent-server-harness]]
- **Endgame (Chapter 6~7)**: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]], [[patterns/git-ai-workflow]]

## Concepts

### Growth Map & Philosophy
- [[concepts/ai-native-programmer]] — Leveraging AI as a full team member to produce team-scale output as a solo developer, with a career growth map.
- [[concepts/ai-orchestration]] — 6 core patterns for orchestrating multiple AI agents (based on Anthropic guides).
- [[concepts/ai-native-architecture]] — 4 core design principles for writing software under the premise of AI agents.

### 3rd-Gen Engineering Evolution
- [[concepts/prompt-engineering]] — Techniques for effectively instructing LLMs (1st Generation).
- [[concepts/context-engineering]] — Designing the information environment for AI, evolution of Prompt Engineering (2nd Generation).
- [[concepts/harness-engineering]] — Complete infrastructure design for AI agents: Agent = Model + Harness (3rd Generation).
- [[concepts/agentic-engineering]] — The mature evolution of Vibe Coding; development under structured AI supervision.

### Curriculum & Labs (Beginner Track)
- [[concepts/context-vs-prompt-practice]] — Prompt vs. Context, explained through an exam study analogy (Curriculum 1).

### Core Technologies
- [[concepts/tool-use]] — The mechanism by which LLMs invoke external functions/APIs.
- [[concepts/mcp]] — Model Context Protocol, the open standard connecting AI and external tools ("The USB-C of AI").
- [[concepts/a2a-protocol]] — Agent-to-Agent protocol, a standard for cross-agent collaboration (Linux Foundation).
- [[concepts/structured-output]] — Forcing LLMs to generate outputs that strictly match specific schemas.
- [[concepts/vector-db-embeddings]] — Vector databases and embeddings: the underlying infrastructure of RAG.
- [[concepts/ai-memory-systems]] — Short/Long-term memory, episodic/semantic/procedural modalities.
- [[concepts/llm-evaluation]] — Evals methodology for systematically testing LLM outputs.
- [[concepts/rag]] — Retrieval-Augmented Generation: search patterns for feeding external knowledge to LLMs.

### Operations & Observability
- [[concepts/gen-ai-observability]] — OpenTelemetry GenAI & Agent Semantic Conventions, tracing and standard instrumentation.

### The Dark Side of AI
- [[concepts/context-rot-hallucination]] — Context Rot, Hallucination, Error accumulation: the 5 major failure patterns.
- [[concepts/cognitive-debt]] — The AI version of Technical Debt: the cognitive load accumulating in the developer's head.
- [[concepts/agent-supply-chain-security]] — Trust models for external tools, skills, and agents + dual-LLM/CaMeL + Tier ratings.

## Tools

- [[tools/claude-code]] — Anthropic's CLI-based AI coding tool, the primary wiki maintenance assistant.
- [[tools/obsidian]] — Local markdown-based notebook app, serving as the wiki browser and IDE.
- [[tools/bkit]] — AI-Native Development OS based on the PDCA methodology (Claude Code plugin).
- [[tools/superpowers]] — Agentic skills framework for parallel subagent execution and TDD loops (Claude Code plugin).
- [[tools/codex-plugin]] — OpenAI's cross-model code review tool (Claude Code plugin).
- [[tools/gstack]] — Role-based AI team simulation skill pack (Claude Code plugin).
- [[tools/vercel-workflow]] — Workflow DevKit: TypeScript durable workflows, webhooks, and long-running agent executors.
- [[tools/managed-agents]] — Anthropic's cloud-hosted agent infrastructure.
- [[tools/deep-agents-deploy]] — LangChain open-source agent harness & deployment tools (model-agnostic, MIT).

## Patterns

### Curriculum & Labs (Recommended Reading: 2→6)
- [[patterns/preventing-context-rot]] — Context Rot & 3-layer memory systems (Curriculum 2).
- [[patterns/harness-building-blocks]] — Guides & Sensors harness implementation (Curriculum 3).
- [[patterns/safe-tool-calling-sandbox]] — Secure tools, sandboxing, and Human-in-the-loop (Curriculum 4).
- [[patterns/orchestration-patterns-practice]] — Chaining, parallel execution, and Evaluator-Optimizer workflows (Curriculum 5).
- [[patterns/my-first-agentic-service]] — Capstone: Building a complete agentic service (Curriculum 6).

### LLM-Wiki & Meta-Patterns
- [[patterns/llm-wiki]] — The personal knowledge wiki pattern maintained by AI (pioneered by Tobi Lütke).
- [[patterns/bkit-superpowers-combo]] — bkit PDCA + Superpowers TDD combination to prevent skipping specs/validation.

### Practical AI Development Patterns
- [[patterns/harness-engineering-casebook]] — 30-case domain matrix + Anthropic Academy study map.
- [[patterns/agent-planning-to-implementation]] — Agent pipeline & HITL gates from planning/specs/tasks to code.
- [[patterns/agent-server-harness]] — Agent backends, states, and security harnesses behind HTTP, queues, and SSE.
- [[patterns/owasp-llm-typescript-mitigations]] — Mitigating OWASP LLM Top 10 (LLM01/06/10) using TS & AI SDKs.
- [[patterns/claude-md-guide]] — CLAUDE.md writing guide, a practical implementation of Harness Engineering.
- [[patterns/subagents-delegation]] — Claude Code Subagents delegation pattern (Explore-Plan-Execute).
- [[patterns/prompt-caching]] — Reducing API costs by up to 90% via repeating prompt prefix caching.
- [[patterns/ai-code-review]] — AI-driven code review workflows optimized for solo developers.
- [[patterns/git-ai-workflow]] — Git integration with Claude Code: automating commits, PRs, and branching.
- [[patterns/ai-cost-management]] — Cutting costs by up to 95% using model routing, caching, and batching.

### Product Strategy & Antipatterns
- [[patterns/solo-product-strategy]] — Product strategies for solo developers: planning and launching micro-SaaS.
- [[patterns/agent-mvp-stack-2026]] — 1-person MVP Stack: 5 domains × 4 stages + decision trees (May 2026).
- [[patterns/vibe-coding-antipatterns]] — 7 major antipatterns of Vibe Coding and how to avoid them.

## Journal

*(Note: English versions of daily logs are compiled dynamically or fall back to Korean journals for detailed technical entries)*

- [[journal/2026-05-24]] — Sunday Daily: MOSS (source-level harness evolution) + WorkstreamBench (spreadsheet workflow eval) + ActiveGraph (log-first runtime)
- [[journal/2026-05-23]] — Saturday Daily: Life-Harness (interface adaptation) + TerminalWorld (benchmark provenance) + HarnessAPI (single-source MCP/HTTP capability) + DeltaBox (branchable sandbox runtime)
- [[journal/2026-05-22]] — Friday Daily & Weekly Review: Code as Agent Harness + Scale-Conditioned Memory Eval + Benchmark Disclosure Audit + Boundary compression memo
- [[journal/2026-05-21]] — Thursday Daily: SpecBench (reward hacking gap) + ProcBench (process controllability) + Insights Generator (corpus-level trace diagnostics) + Handoff Interface + Progressive Autonomy + Library Drift + Formal Skill (runtime capability object)
- [[journal/2026-05-20]] — Wednesday Daily: DecisionBench (delegation fidelity) + POLAR-Bench (privacy-utility diagnostic) + ResearchArena (artifact-aware auto-research eval)

## Comparisons

- [[comparisons/rag-vs-llm-wiki]] — Comparing RAG vs. LLM-Wiki: discovery vs. structured accumulation.
- [[comparisons/claude-code-plugins]] — Review of 4 core Claude Code plugins and combo strategies.
- [[comparisons/ai-coding-tools]] — AI Coding tools showdown: Claude Code vs. Cursor vs. Copilot vs. Windsurf.
- [[comparisons/agent-frameworks]] — Comparing Agent frameworks: LangGraph vs. CrewAI vs. OpenAI SDK (+ 2 managed options).
- [[comparisons/fine-tuning-vs-prompting]] — Fine-tuning vs. Prompting decision guide & hybrid patterns.
- [[comparisons/managed-vs-deep-agents]] — Claude Managed Agents vs. LangChain Deep Agents Deploy: lock-in vs. custom control.
- [[comparisons/agent-eval-frameworks]] — Comparing 6 major evaluation engines (DeepEval, LangSmith, Braintrust, Langfuse, Inspect AI, RAGAS).
- [[comparisons/agent-platforms-for-solo-dev]] — Evaluating 4 platforms from a solo developer perspective.
- [[comparisons/agent-memory-taxonomy]] — Classifying task/productivity vs belief vs lifecycle vs safety memory + scale boundary / runtime enforcement overlays.

## Meta

- [[wiki/index]] — Complete page catalog (this document)
- [[wiki/campaign-map]] — Chapter clear roadmap (main campaign hub)
- [[wiki/overview]] — Wiki comprehensive status and dashboard overview
- [[wiki/log]] — Chronological workspace journal
