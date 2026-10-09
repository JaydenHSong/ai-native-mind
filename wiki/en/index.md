---
title: "Wiki Index"
category: meta
tags: [index, catalog]
created: 2026-04-06
updated: 2026-10-09
total_pages: 136
sources: []
status: active
---

# ai-native-mind Wiki Index

> 136 managed pages total | Last updated: 2026-10-09 (daily ingest: 6 AI news sources collected + ko/en wiki refinement) — most pages include a **Start here** block.

## Start here

This is a **catalog** of links. If a topic feels unfamiliar, open the target page and read the **“Start here”** section at the top first.

## Chapter Clear entry points

If you want to move through the wiki like a game, open [[campaign-map|Campaign Map]] first and use [[overview|Overview]] as supporting guidance when needed.

- **Tutorial (Chapter 0)**: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- **Fundamentals (Chapters 1–2)**: [[concepts/ai-native-programmer]], [[concepts/context-engineering]]
- **Practice (Chapters 3–5)**: [[concepts/ai-orchestration]], [[patterns/agent-planning-to-implementation]], [[patterns/agent-server-harness]]
- **Endgame (Chapters 6–7)**: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]], [[patterns/git-ai-workflow]]

## Concepts (44)

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
- [[concepts/amd-world-labs-physical-ai]] — AMD's $8.2B World Labs acquisition: the physical-AI/world-model hardware axis (2026-09-30)
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon: self-reported vs independent benchmark gap + gated release (2026-10-01)
- [[concepts/agent-residence]] — agent residence forms: local models vs cloud computers (2026-10-04)
- [[concepts/shutdown-evasion]] — the formal record of shutdown-evasion consideration, self-preservation CoT (2026-10-04)
- [[concepts/gpt-synopsys-eda]] — OpenAI × Synopsys GPT-Synopsys, a domain-specialized model that operates EDA tools (2026-10-04)
- [[concepts/reflection-open-weight]] — Nvidia-backed Reflection AI open-weight model, the U.S. answer to DeepSeek/Qwen (imminent, 2026-10-05)
- [[concepts/mistral-large-4]] — Mistral Large 4 (Le Chonk), claimed cyber edge over Chinese open models, open-weight release Oct 27 (2026-10-06)
- [[concepts/ai-text-watermarking]] — OpenAI textGrain, EU AI Act-driven text watermarking (2026-10-06)
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5: the lightest, cheapest 5.5-series model, up to 90% API price cut + effort setting (2026-10-08)
- [[concepts/gpt-6-intelligent-ui]] — GPT-6 Intelligent UI: answers become charts, forms, and buttons — adaptive UI, Free/Go expansion (2026-10-09)
- [[concepts/robojepa-robot-scaling-laws]] — Meta RoboJEPA 8B: scaling laws for robot world models + capability-threshold map (2026-10-09)

### Operations & observability
- [[concepts/gen-ai-observability]] — OpenTelemetry GenAI and agent semantic conventions, traces, and standard instrumentation
- [[concepts/ai-talent-bottleneck]] — the AI adoption bottleneck shifting from models to people, Anthropic Frontier Academy $100M (2026-10-03)

### The darker side of AI
- [[concepts/context-rot-hallucination]] — five major failure patterns including context rot, hallucination, and error accumulation
- [[concepts/cognitive-debt]] — the AI-native version of technical debt: debt that piles up in the developer’s head
- [[concepts/agent-supply-chain-security]] — trust models for external tools, skills, and agents + dual-LLM/CaMeL + tier grading
- [[concepts/agent-attribution]] — attribution of agent security incidents: actor, responsibility, disclosure timing (2026-09-25)
- [[concepts/agent-data-leakage]] — outbound data leakage of training/eval agents: OpenAI's 53 leaked user images (2026-09-26)
- [[concepts/multi-agent-dialect]] — spontaneous agent "dialects" and interpretability loss (2026-09-26)
- [[concepts/persistent-agent]] — persistent agents: own schedule and identity, OpenAI "O" leak (2026-09-27)
- [[concepts/semantic-decision-engine]] — non-generative decision engine for fixed-option tasks, Jev (2026-09-27)
- [[concepts/self-improving-ai-risk]] — loss-of-control risk of self-improving AI, frominside.ai testimony + intelligence explosion paper (2026-09-30)
- [[concepts/white-house-ai-accord]] — White House Accord on Superintelligence: voluntary pact + follow-up details (2026-09-30)
- [[concepts/reasoning-extraction-attack]] — extraction attacks on models' hidden reasoning processes, Moonshot-AI-linked blocking (2026-10-02)
- [[concepts/nyc-ai-hearing]] — NYC Council AI hearing, first sworn testimony from major AI companies + kill-switch bills (2026-10-05)
- [[concepts/super-intelligence-force]] — Trump administration's Super Intelligence Force, federal coordination under the AI czar + DOJ 'super intelligence' terminology memo (2026-10-05/07)
- [[concepts/ai-doom-loop]] — the AI doom loop: self-destructive feedback in the content supply chain, NYT lawsuit unsealed docs (2026-10-07)
- [[concepts/ai-teen-safety-evaluation]] — ChatGPT for Teens rated 'Unacceptable Risk', 4,000+ prompt independent evaluation (2026-10-07)
- [[concepts/openai-safety-researcher-firings]] — OpenAI fires three safety researchers: trust breach vs safety culture dispute (2026-10-09)

## Tools (15)

- [[tools/claude-code]] — Anthropic’s CLI-based AI coding tool; the wiki maintenance LLM
- [[tools/obsidian]] — local markdown note app; wiki browser and IDE
- [[tools/bkit]] — AI Native Development OS based on the PDCA method (Claude Code plugin)
- [[tools/superpowers]] — agentic skills framework for TDD + parallel subagent execution (Claude Code plugin)
- [[tools/codex-plugin]] — OpenAI’s cross-model code review tool (Claude Code plugin)
- [[tools/gstack]] — role-based AI team simulation skill pack (Claude Code plugin)
- [[tools/vercel-workflow]] — Workflow DevKit for durable workflows, webhooks, and long-running agent jobs in TypeScript
- [[tools/managed-agents]] — Anthropic’s cloud-hosted agent infrastructure (public beta, 2026-04-08)
- [[tools/deep-agents-deploy]] — LangChain’s open-source agent harness and deployment tooling (model-agnostic, MIT)
- [[tools/alibaba-agentcore]] — Alibaba’s enterprise agent platform + agentic cloud roadmap (2026-09-24)
- [[tools/claude-marketplace]] — Claude connector/plugin marketplace with 2,000+ listings (2026-09-24)
- [[tools/codex-security]] — OpenAI security agent bundling detect→patch→fix into one loop (research preview, 2026-09-24)
- [[tools/zoho-zia]] — Zoho's in-house LLM + 40 agents + MCP server, India-built right-sized models (2026-10-05)
- [[tools/claude-google-workspace]] — Claude for Google Workspace public beta, direct Docs/Sheets/Slides editing (2026-10-07)
- [[tools/gemini-agent-work]] — Google Cloud's enterprise general agent 'Gemini agent': multi-model routing + spend caps (2026-10-09)

## Patterns (30)

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
- [[patterns/ai-cost-management]] — reducing costs up to 95% through model routing, caching, and batching (+ 2026-09-26: demand-side cost visibility & the accessibility token tax)
- [[patterns/agent-safety-runtime]] — agent safety runtime: NVIDIA OpenShell/Sentry enforcement (2026-09-28)
- [[patterns/mid-tier-performance-inversion]] — mid-tier models outperforming flagships, the Sonnet 5.5 case (2026-09-29)
- [[patterns/agentic-finance]] — productizing agents that handle real money, Robinhood Agents in production (2026-10-01)
- [[patterns/agent-authority-model]] — five-level agent authority framework by task, LEA AI Agent Authority Model (2026-10-05)
- [[patterns/agentic-coding]] — agents writing code end to end; reliability as a workflow property (2026-09-24)
- [[patterns/agentic-commerce]] — agents picking and paying for products; "whose side is the agent on" + voice channel + accessibility backlog (2026-09-24/25/26)
- [[patterns/agent-scientific-discovery]] — the research-grade discovery pipeline: literature grounding → in-silico hypothesis → wet-lab validation + Paper2Agent's 45-min/$14 agentification (2026-09-25/26)
- [[patterns/shared-agent-canvas]] — a shared human-agent canvas for co-edited collaboration (LM Studio, 2026-09-25)

### Product strategy & anti-patterns
- [[patterns/solo-product-strategy]] — product strategy for solo developers; planning and launching micro SaaS
- [[patterns/agent-mvp-stack-2026]] — solo MVP stack: 5 areas × 4 stages + decision tree (2026-05)
- [[patterns/vibe-coding-antipatterns]] — seven major anti-patterns in vibe coding and how to avoid them

## Journal (35)

- [[journal/2026-10-09]] — Friday daily: OpenAI researcher firings · GPT-6 Intelligent UI · Manus $500M · Gemini agent · USA TODAY suit · RoboJEPA

- [[journal/2026-10-08]] — Thursday daily: Haiku 5.5 · Surface Ultra · OpenAI's 722 math manuscripts · DeepSeek $12B · Nous $1.5B · PolicyLM-1.7B

- [[journal/2026-10-07]] — Wednesday daily: OpenAI's 377 math results · Claude Workspace · AI doom loop · Underdog · ChatGPT for Teens · DOJ terminology memo

- [[journal/2026-10-06]] — Tuesday daily: Reflection Beam · Mistral Large 4 · textGrain watermarking · MCP protocol pivoting · TikTok commerce · a16z Top 100

- [[journal/2026-10-05]] — Monday daily: AI czar · Super Intelligence Force · NYC hearing · Zoho Zia LLM · Reflection open weights · LEA authority model

- [[journal/2026-10-04]] — Sunday daily: GPT-Synopsys · OpenAI misalignment reports · agent residence forms · triple permission clampdown · C1 LLM Gateway

- [[journal/2026-10-03]] — Saturday daily: Joint Commitment · California AG subpoena · DeepSeek first external funding · Apple permission controls · Frontier Academy · Decisions API

- [[journal/2026-10-02]] — Friday daily: Dots official launch · DIVD autonomous breach · Moonshot reasoning-extraction block · decision-model wave · DeepSeek × Huawei · Copilot computer use

- [[journal/2026-10-01]] — Thursday daily: Gemini 4 Argon · FTC probe · Transluce disclosure · Robinhood Agents · Anthropic IPO prospectus · Axios detection scale

- [[journal/2026-09-30]] — Wednesday daily: frominside.ai warning · AMD World Labs acquisition · GLM-5.3 cyber analysis · Accord follow-up · price war · NVIDIA partners

- [[journal/2026-09-29]] — Tuesday daily: Astra pullback · Sonnet 5.5 · Pro $200 reopen · Spaces rumor · DNS sandbox escape · White House AI meeting

- [[journal/2026-09-28]] — Monday daily: NVIDIA safety runtime · DevDay-eve "O" leak · UN scans via The Verge · Agoda developer report · governance cluster · Manifold skill scams

- [[journal/2026-09-27]] — Sunday daily: OpenAI "O" persistent-agent leak · training halt · Jev · Saaras V4 · KT AutoModelRouter · Gates remarks

- [[journal/2026-09-26]] — Saturday daily: OpenAI misaligned review · Paper2Agent · multi-agent dialect · AudioEye accessibility · Copilot revamp · Dataiku governance

- [[journal/2026-09-25]] — Friday daily: OpenAI Australia attribution · Muse filesystem leak · Claude ART enzyme · Gemini voice commerce · Liner routing · LM Studio Canvas

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

## Comparisons (11)

- [[comparisons/rag-vs-llm-wiki]] — comparing RAG and LLM-Wiki: rediscovery vs accumulation
- [[comparisons/claude-code-plugins]] — four Claude Code plugins + combination strategy
- [[comparisons/ai-coding-tools]] — AI coding tools: Claude Code vs Cursor vs Copilot vs Windsurf (+ Copilot "Code"/Autopilot, 2026-09-26 · computer use preview, 2026-10-02)
- [[comparisons/agent-frameworks]] — AI agent frameworks: LangGraph vs CrewAI vs OpenAI SDK (+ two managed platforms)
- [[comparisons/fine-tuning-vs-prompting]] — fine-tuning vs prompting decision guide and hybrid patterns
- [[comparisons/managed-vs-deep-agents]] — Claude Managed Agents vs LangChain Deep Agents Deploy: lock-in vs freedom
- [[comparisons/agent-eval-frameworks]] — DeepEval/LangSmith/Braintrust/Langfuse/Inspect AI/RAGAS comparison
- [[comparisons/agent-platforms-for-solo-dev]] — four-way comparison from a solo-developer perspective
- [[comparisons/agent-memory-taxonomy]] — task/productivity vs belief vs lifecycle vs safety memory + scale/runtime/safety overlay
- [[comparisons/frontier-lab-economics]] — low-cost disruptor vs pricing-power infrastructure, the DeepSeek case (2026-09-24 · DeepSeek × Huawei Ascend, 2026-10-02)
- [[comparisons/consumer-ai-adoption]] — a16z Top 100 consumer AI apps, ChatGPT leads, Claude #3 on web (2026-10-06)

## Meta

- [[index]] — full page catalog (this page)
- [[campaign-map]] — Chapter Clear world map (main hub)
- [[overview]] — comprehensive wiki status
- [[log]] — chronological work log
