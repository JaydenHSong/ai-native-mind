---
title: "Wiki Index"
category: meta
tags: [index, catalog]
created: 2026-04-06
updated: 2026-07-18
total_pages: 84
sources: []
status: active
---

# ai-native-mind Wiki Index

> 84 managed pages total | Last updated: 2026-07-18 (weekly EN sync: Korean source-of-truth maintenance log mirrored through 2026-07-18; no new ingest or path-level gap found) — most pages include a **Start here** block.

## Start here

This is a **catalog** of links. If a topic feels unfamiliar, open the target page and read the **“Start here”** section at the top first.

## Chapter Clear entry points

If you want to move through the wiki like a game, open [[campaign-map|Campaign Map]] first and use [[overview|Overview]] as supporting guidance when needed.

- **Tutorial (Chapter 0)**: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- **Fundamentals (Chapters 1–2)**: [[concepts/ai-native-programmer]], [[concepts/context-engineering]]
- **Practice (Chapters 3–5)**: [[concepts/ai-orchestration]], [[patterns/agent-planning-to-implementation]], [[patterns/agent-server-harness]]
- **Endgame (Chapters 6–7)**: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]], [[patterns/git-ai-workflow]]

## Concepts (20)

### Growth map & philosophy
- [[concepts/ai-native-programmer]] — a developer who uses AI as teammates to achieve team-scale outcomes solo; growth map
- [[concepts/ai-orchestration]] — six major patterns for coordinating multiple AI agents
- [[concepts/ai-native-architecture]] — four principles for designing software with AI as a first-class assumption

### Third-generation engineering evolution
- [[concepts/prompt-engineering]] — how to instruct LLMs effectively (1st generation)
- [[concepts/context-engineering]] — designing the AI information environment; evolution of prompt engineering (2nd generation)
- [[concepts/harness-engineering]] — full infrastructure design for AI agents; Agent = Model + Harness (3rd generation)
- [[concepts/agentic-engineering]] — mature evolution beyond vibe coding; development under structured AI supervision

### Curriculum & practice (intro track)
- [[concepts/context-vs-prompt-practice]] — prompt vs context through an exam-study analogy (curriculum 1)

### Core technologies
- [[concepts/tool-use]] — how LLMs call external functions and APIs
- [[concepts/mcp]] — Model Context Protocol, an open standard connecting AI to external tools ("USB-C for AI")
- [[concepts/a2a-protocol]] — Agent-to-Agent protocol, a collaboration standard for heterogeneous agents
- [[concepts/structured-output]] — forcing LLM output to follow a specific schema
- [[concepts/vector-db-embeddings]] — vector databases and embeddings, the infrastructure behind RAG
- [[concepts/ai-memory-systems]] — short/long-term memory plus episodic/semantic/procedural modalities
- [[concepts/llm-evaluation]] — evals for systematically testing LLM outputs
- [[concepts/rag]] — Retrieval-Augmented Generation, the pattern of fetching and using external knowledge

### Operations & observability
- [[concepts/gen-ai-observability]] — OpenTelemetry GenAI and agent semantic conventions, traces, and standard instrumentation

### The darker side of AI
- [[concepts/context-rot-hallucination]] — five major failure patterns including context rot, hallucination, and error accumulation
- [[concepts/cognitive-debt]] — the AI-native version of technical debt: debt that piles up in the developer’s head
- [[concepts/agent-supply-chain-security]] — trust models for external tools, skills, and agents + dual-LLM/CaMeL + tier grading

## Tools (9)

- [[tools/claude-code]] — Anthropic’s CLI-based AI coding tool; the wiki maintenance LLM
- [[tools/obsidian]] — local markdown note app; wiki browser and IDE
- [[tools/bkit]] — AI Native Development OS based on the PDCA method (Claude Code plugin)
- [[tools/superpowers]] — agentic skills framework for TDD + parallel subagent execution (Claude Code plugin)
- [[tools/codex-plugin]] — OpenAI’s cross-model code review tool (Claude Code plugin)
- [[tools/gstack]] — role-based AI team simulation skill pack (Claude Code plugin)
- [[tools/vercel-workflow]] — Workflow DevKit for durable workflows, webhooks, and long-running agent jobs in TypeScript
- [[tools/managed-agents]] — Anthropic’s cloud-hosted agent infrastructure (public beta, 2026-04-08)
- [[tools/deep-agents-deploy]] — LangChain’s open-source agent harness and deployment tooling (model-agnostic, MIT)

## Patterns (22)

### Curriculum & practice (recommended order 2→6)
- [[patterns/preventing-context-rot]] — context rot and three-layer memory (curriculum 2)
- [[patterns/harness-building-blocks]] — hands-on Guides/Sensors harness design (curriculum 3)
- [[patterns/safe-tool-calling-sandbox]] — safe tools, sandboxes, and HITL (curriculum 4)
- [[patterns/orchestration-patterns-practice]] — chaining, parallelization, and evaluator-optimizer in practice (curriculum 5)
- [[patterns/my-first-agentic-service]] — capstone: one full pass through an agentic service (curriculum 6)

### LLM-Wiki & meta patterns
- [[patterns/llm-wiki]] — the personal knowledge wiki pattern maintained by an LLM
- [[patterns/bkit-superpowers-combo]] — combining bkit PDCA and Superpowers TDD to prevent skipping steps
- [[patterns/agents-md-skill-md]] — separating repo-scope `AGENTS.md` and task-scope `SKILL.md` to gain portability and progressive disclosure

### Practical AI development patterns
- [[patterns/ai-news-scouting-taxonomy]] — reframing HN-centered news flow into frontier/open/coding-agent/runtime/eval layers for AI news scouting
- [[patterns/harness-engineering-casebook]] — 30-domain matrix + Anthropic Academy study map
- [[patterns/agent-planning-to-implementation]] — an agent pipeline from planning/spec/tasks to code with HITL gates
- [[patterns/agent-server-harness]] — backend/state/security harnesses for agents behind HTTP, queues, and SSE
- [[patterns/owasp-llm-typescript-mitigations]] — patterns for mitigating OWASP LLM Top 10 items LLM01/06/10 with TypeScript and AI SDKs
- [[patterns/claude-md-guide]] — how to write CLAUDE.md, a practical embodiment of Harness Engineering
- [[patterns/subagents-delegation]] — Claude Code subagent delegation pattern (Explore-Plan-Execute)
- [[patterns/prompt-caching]] — reducing costs up to 90% by caching repeated prompt prefixes
- [[patterns/ai-code-review]] — AI-assisted code review workflow for solo developers
- [[patterns/git-ai-workflow]] — commit/PR/branch automation through Claude Code’s Git integration
- [[patterns/ai-cost-management]] — reducing costs up to 95% through model routing, caching, and batching

### Product strategy & anti-patterns
- [[patterns/solo-product-strategy]] — product strategy for solo developers; planning and launching micro SaaS
- [[patterns/agent-mvp-stack-2026]] — solo MVP stack: 5 areas × 4 stages + decision tree (2026-05)
- [[patterns/vibe-coding-antipatterns]] — seven major anti-patterns in vibe coding and how to avoid them

## Journal (20)

- [[journal/2026-05-25]] — weekday watch kick-off: Cline / browser-use / LangGraph / Langfuse reaffirm integration surface · operator control · trace artifact priorities
- [[journal/2026-05-24]] — Sunday daily: MOSS (source-level harness evolution) + WorkstreamBench (spreadsheet workflow eval) + ActiveGraph (log-first runtime)
- [[journal/2026-05-23]] — Saturday daily: Life-Harness (interface adaptation) + TerminalWorld (benchmark provenance) + HarnessAPI (single-source MCP/HTTP capability) + DeltaBox (branchable sandbox runtime)
- [[journal/2026-05-22]] — Friday daily + weekly review: Code as Agent Harness + Scale-Conditioned Memory Eval + Benchmark Disclosure Audit + boundary-compression note
- [[journal/2026-05-21]] — Thursday daily: SpecBench + ProcBench + Insights Generator + Learning to Hand Off + Progressive Autonomy + Library Drift + Formal Skill
- [[journal/2026-05-20]] — Wednesday daily: DecisionBench + POLAR-Bench + ResearchArena
- [[journal/2026-05-19]] — Tuesday daily: HarnessAudit + ClawVM + Natural-Language Agent Harnesses
- [[journal/2026-05-18]] — Monday daily: Effective Harness Engineering + SkillSmith + RoadmapBench
- [[journal/2026-05-17]] — Sunday daily: Agentic AI Survey + BeliefMem + MAGE + later follow-up on Human-Inspired Memory, FeatureBench, and LITMUS
- [[journal/2026-05-15]] — Friday daily + weekly review: ACDL + Constraint Decay + GroupMemBench, merging four days of above-the-model work
- [[journal/2026-05-14]] — Thursday daily: Above-the-Model Layer — orchestration learning, harness formalization, and long-horizon environment ceiling
- [[journal/2026-05-13]] — Wednesday daily: verification-gated action across text, code, and embodied settings
- [[journal/2026-05-12]] — Tuesday daily: preparation + judge reliability + grounding as three levers below the model
- [[journal/2026-05-06-pm]] — Wednesday PM follow-up: three coordinate axes of harness research
- [[journal/2026-05-06]] — Wednesday daily: two self-evolving harness papers + Anthropic 2026 trends report
- [[journal/2026-05-03]] — Sunday daily: MS Agent Framework 1.0 + Datadog 1,000+ traces + ZenBrain 7-layer memory
- [[journal/2026-05-02]] — Saturday daily: multi-agent quantitative limits + three-agent split + six levers
- [[journal/2026-05-01-backfill]] — afternoon big backfill: Theme A deep dive + B/C/D backfill
- [[journal/2026-05-01]] — morning automatic ingest + Friday review
- [[journal/2026-04-12]] — Fowler Humans/Agents, on-the-loop framing, and OWASP × TypeScript journal

## Comparisons (9)

- [[comparisons/rag-vs-llm-wiki]] — comparing RAG and LLM-Wiki: rediscovery vs accumulation
- [[comparisons/claude-code-plugins]] — four Claude Code plugins + combination strategy
- [[comparisons/ai-coding-tools]] — AI coding tools: Claude Code vs Cursor vs Copilot vs Windsurf
- [[comparisons/agent-frameworks]] — AI agent frameworks: LangGraph vs CrewAI vs OpenAI SDK (+ two managed platforms)
- [[comparisons/fine-tuning-vs-prompting]] — fine-tuning vs prompting decision guide and hybrid patterns
- [[comparisons/managed-vs-deep-agents]] — Claude Managed Agents vs LangChain Deep Agents Deploy: lock-in vs freedom
- [[comparisons/agent-eval-frameworks]] — DeepEval/LangSmith/Braintrust/Langfuse/Inspect AI/RAGAS comparison
- [[comparisons/agent-platforms-for-solo-dev]] — four-way comparison from a solo-developer perspective
- [[comparisons/agent-memory-taxonomy]] — task/productivity vs belief vs lifecycle vs safety memory + scale/runtime/safety overlay

## Meta

- [[index]] — full page catalog (this page)
- [[campaign-map]] — Chapter Clear world map (main hub)
- [[overview]] — comprehensive wiki status
- [[log]] — chronological work log
