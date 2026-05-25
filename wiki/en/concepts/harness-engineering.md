---
title: "Harness Engineering"
category: concepts
tags: [harness-engineering, ai-agent, infrastructure, orchestration, verification-gated, grounding, runtime-substrate, 11-responsibilities, evaluation-hacking, runtime-interface, trajectory-audit, natural-language-harness, trace-diagnostics, corpus-level-observability, skill-governance, library-drift, code-as-harness, shared-artifact, interface-adaptation, stateful-sandbox, source-level-evolution]
created: 2026-04-09
updated: 2026-05-24
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/notes/2026-04-12-harness-engineering-deep-dive.md"
  - "raw/notes/2026-04-13-harness-casebook-anthropic-academy.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-02-google-scaling-agent-systems.md"
  - "raw/articles/2026-05-02-anthropic-three-agent-harness-infoq.md"
  - "raw/articles/2026-05-02-humanlayer-skill-issue-harness.md"
  - "raw/articles/2026-05-06-anthropic-agentic-coding-trends-report.md"
  - "raw/articles/2026-05-06-last-harness-meta-evolution.md"
  - "raw/articles/2026-05-06-agentic-harness-engineering-observability.md"
  - "raw/articles/2026-05-06-pm-architectural-decisions-agent-harnesses.md"
  - "raw/articles/2026-05-06-pm-caaf-deterministic-harness.md"
  - "raw/articles/2026-05-06-pm-meta-harness-stanford.md"
  - "raw/articles/2026-05-13-affordance-agent-harness-verification-gated.md"
  - "raw/articles/2026-05-13-gsar-typed-grounding-multiagent.md"
  - "raw/articles/2026-05-13-verify-before-you-fix-execution-grounding.md"
  - "raw/articles/2026-05-14-ai-harness-engineering-runtime-substrate.md"
  - "raw/articles/2026-05-18-effective-harness-engineering-algorithm-discovery.md"
  - "raw/articles/2026-05-18-skillsmith-boundary-guided-runtime-interfaces.md"
  - "raw/articles/2026-05-19-harnessaudit-trajectory-safety.md"
  - "raw/articles/2026-05-19-natural-language-agent-harnesses.md"
  - "raw/articles/2026-05-21-insights-generator-trace-diagnostics.md"
  - "raw/articles/2026-05-21-library-drift-self-evolving-skill-libraries.md"
  - "raw/articles/2026-05-22-code-as-agent-harness.md"
  - "raw/articles/2026-05-23-life-harness-runtime-interface-adaptation.md"
  - "raw/articles/2026-05-23-deltabox-millisecond-sandbox-checkpoint-rollback.md"
  - "raw/articles/2026-05-24-moss-source-level-self-evolution.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/prompt-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agentic-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/harness-building-blocks]]"
  - "[[tools/vercel-workflow]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[journal/2026-04-12]]"
  - "[[patterns/harness-engineering-casebook]]"
status: active
confidence: high
---

# Harness Engineering

## One-Line Definition

The engineering discipline of designing the complete infrastructure (constraints, feedback loops, orchestration, and control mechanisms) encapsulating an AI agent. **Agent = Model + Harness**.

## Easy Read

**Analogy**: A **horse (Model)** can be highly intelligent, but letting it run wild without gear is dangerous. A **harness (Harness)** represents the **saddle, reins, and leash** strapped to the horse. Deciding "how far it runs, where it stops, and who supervises it" through **rules, tools, and automated validation** comprises the harness.
Here, the **Model** is the horse's brain (thinking and talking), while the **Harness** is the **surrounding apparatus** required for the horse to perform **actual work (modifying files, writing code, running servers)**.

| Term | Easy Explanation |
|----|--------|
| **Guides** | Rules and checklists defined **before** execution starts (e.g., assignment schemas, coding guidelines). |
| **Sensors** | Mechanisms that measure "Is this correct?" **after** execution (e.g., spellcheckers, automated grading). |
| **Feedforward** | Preventing errors proactively (Guides). |
| **Feedback** | Prompting corrections reactively after the action is taken (Sensors). |
| **Orchestration** | Coordinating multiple steps and specialized AIs in accordance with **sequence and roles**. |
| **Production** | The live, real-world environment serving actual users. |

## Core Concepts

### Positioning in the Three Generations

```
1st Generation: Prompt Engineering  — "WHAT to ask"           (2022-2024)
2nd Generation: Context Engineering — "WHAT to show"           (2025)
3rd Generation: Harness Engineering — "HOW the entire system operates" (2026)
```

The Harness encapsulates [[concepts/context-engineering|Context Engineering]], which in turn encapsulates [[concepts/prompt-engineering|Prompt Engineering]]. Each generation addresses distinct software engineering challenges.
*Analogy*: 1st Gen is "writing an excellent question sentence," 2nd Gen is "selecting the perfect books to place on the exam desk," and 3rd Gen is "designing a system **so that the entire test-taking workflow never derails**."

### Why Harness Engineering Has Become Vital

> "Agents have become capable enough to be useful, but not reliable enough to be trusted solo."

- **AI Agent Failure Rate (~20%)**: Means that roughly one out of every five tasks may deviate from expectations.
- **MIT Research**: ~95% of enterprise GenAI pilots failed to generate measurable economic value—warning that "adopting AI" and "generating profit" are **two completely separate milestones**.
- **Model capabilities alone cannot guarantee production-grade reliability**—relying purely on a raw "smart brain" is insufficient for building deterministic, mission-critical applications like banking apps.

### The 3 Core Components (Adapting Martin Fowler)

#### 1. Guides — Feedforward Control
Steering the agent **before** it acts. Informing the horse of the path before it begins to run.
- Coding conventions, structured prompts, bootstrap instructions.
- *Our Workspace Example*: `CLAUDE.md`, PDCA Plan/Design documents.

#### 2. Sensors — Feedback Control
Catching anomalies and bugs **after** the agent acts. Grading the completed homework assignment.
- Linters, static type checkers, automated unit tests.
- *Our Workspace Example*: Gap Analysis, lint pipelines.

#### 3. Two Domains of Verification Controls

| Category | Characteristic | Example |
|------|------|------|
| **Computational** | Determines pass/fail using deterministic rules; extremely fast and cheap. | Linters, typecheckers, frontmatter schema validation. |
| **Inferential** | LLM evaluates if the outcome "looks reasonable"; slow and expensive. | Code review agents, semantic Gap Analysis. |

*Summary*: If a calculator can determine correctness mathematically, it is **Computational**. If it requires semantic reading of context, it is **Inferential**.

### Advanced: Loops, Humans, and Policies

Analyzing the harness as a **time-bound execution loop** brings structural clarity:

| Dimension | Critical Architectural Question |
|----|------|
| **Closed-Loop Feedback** | Are failures caught by **Sensors** automatically encoded back into **Guides** (lint rules, templates, tool schemas)? Can we refactor the harness instead of rebuilding/swapping the model? (*Analogy*: When a mistake is repeated, **updating the rulebook** so it cannot happen again.) |
| **Human Positioning** | Are we targeting *In the Loop* (step-by-step human approval), *On the Loop* (monitoring and maintaining loop policies), or *Out of the Loop* (full automation)? Discussed in Thoughtworks' [Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html). |
| **Harnessability** | Is the architecture, codebase, and modular structure of the repository **conducive to anchoring a harness**? Legacy codebases typically require heavy investments in sensors and modular refactoring before guides can become effective. (*Analogy*: A vacuuming robot yields limited results if a room is thoroughly cluttered. Basic cleanup is required first.) |
| **Policy Stratification** | Separating *Norms* (preferred team patterns) from *Guardrails* (strict prohibitions) across tools, prompts, and CI. Blending them into a monolithic system prompt makes detecting violations impossible. (*Analogy*: Blending **school dress codes** with **fire escape procedures** in one paragraph makes compliance tracking chaotic.) |

**Tools as Guides**: Anthropic's [Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) highlights that schemas, docstrings, and error messages function as **feedforward harnesses**. [Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use) shifts focus to the **tool harness layer** (search routing, programmatic invoking) as tool density scales.

### Humans: In / On / Out of the Loop (Fowler)

Martin Fowler's [Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) divides agent workflows into the **Why Loop** (ideation ↔ results) and the **How Loop** (implementation details). Keeping a human **In the Loop** (reviewing every line of code generated) becomes a severe operational bottleneck. The solution is to have agents evaluate their own work computational-first, while humans sit **On the Loop**, designing and improving the **Harness** (specs, verifiers, workflows). If output quality drops, **humans fix the harness, not the raw output**. Automating this feedback loop so that agents can suggest harness improvements is defined as the **agentic flywheel**.

*Summary*: Instead of "having a human manually correct every single word written by the AI," focus on "**continuously refining the game rules and referee parameters so the AI performs cleanly**."

Operational Summary: [[journal/2026-04-12]].

### Claude Code's Harness (Architecture Revealed via Source Leak)

In March 2026, Anthropic inadvertently leaked the complete source code of Claude Code, exposing its production-grade harness architecture:
- **500,000 lines** of TypeScript across 1,900 files.
- **~40 permission-gated tools**: File manipulation, bash, web, LSP APIs.
- **46,000-line Query Engine**: Manages LLM calls, token caching, context sizing, and retries.
- **3-Tier Memory Architecture**: Prevents "context entropy"—the phenomenon where the model forgets critical constraints as the context window expands.

### OpenAI Codex: Harness Engineering at Scale

In February 2026, OpenAI built an internal software suite utilizing Codex:
- **0 lines of manual code** written by human developers.
- 3 engineers × 5 months × ~1,500 PRs × ~1 million lines of code.
- The human engineers spent their time **designing the Harness**, not writing product features.

### 2026-04 Stack Stratification — Choosing Your Layer

As detailed in [Hieu TRAN, "The Agent Stack in 2026" (dev.to, 2026-04-14)](https://dev.to/hieu_tran_80c388add84c060/the-agent-stack-in-2026-layers-harnesses-and-where-you-actually-build-2e5g), the launch of [Anthropic Managed Agents](https://www.anthropic.com/engineering/managed-agents) and [LangChain Deep Agents Deploy](https://blog.langchain.com/deep-agents-deploy-an-open-alternative-to-claude-managed-agents/) stratified the agent stack into 4 distinct layers:

| Layer | Functional Scope | Primary Tooling |
|--------|-------------|------|
| Low-End | Manual code-level orchestration, tool execution, state, and retries | LangGraph, Claude Agent SDK |
| Mid-Tier | Framework-managed plumbing | LangChain Agents |
| **Upper-Middle** | Platform-managed runtime and deployment (memory, sandboxing, credential isolation, protocols) | **Managed Agents, Deep Agents Deploy** |
| High-End | Monolithic system prompt + tools, no infrastructural abstraction | Raw prompted models |

*Strategic Mandate*: **Isolate agent identity and capabilities into highly portable definition layers (`AGENTS.md`, `SKILL.md`), while pushing execution, memory, security, and deployment down to infrastructural layers**. The **Brain / Hands / Session** separation in Managed Agents (zero-credential sandboxes + append-only session telemetry) solidified this principle as an industry default.

Furthermore, Anthropic's research [Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps) initially constructed a complex Planner / Generator / Evaluator 3-agent harness. However, as the underlying model evolved from Claude 4.5 to 4.6, they **radically simplified the harness** (removing sprint decomposition and moving evaluation from per-sprint to end-of-run). *Takeaway*: **Harness components encode active assumptions about what the model cannot do; stress-test these assumptions as models grow smarter**. "Find the simplest solution possible, and only increase complexity when needed."

### Supply Chain Security Lesson — ClawHavoc (2026-02)

OpenClaw's ClawHub (a community skill registry) suffered a severe supply chain attack: 12 publisher accounts were compromised, distributing 1,184 malicious skills. The Snyk ToxicSkills report flagged 36.8% of ClawHub skills as vulnerable, with 13.4% containing critical exploits. Once loaded into an agent's execution context, these skills could exfiltrate credentials, redirect tool invocations, and hijack reasoning chains.

*Takeaway*: Loading declarative agent definitions into a prompt is not inherently dangerous. The threat lies in **loading untrusted third-party skills into an execution context that holds credential access**. Harness designs must bundle three pillars: **Brain/Hands credential isolation, a robust skill supply chain trust model, and audit trail infrastructure**.

### 2026-05 Update — Quantitative Grounding, 3-Agent Splits, & the 6 Levers

We map three distinct industry/academic sources onto the same conceptual blueprint:

**(1) Google Research, [Towards a Science of Scaling Agent Systems (2026-01)](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/) / [arXiv 2512.08296](https://arxiv.org/abs/2512.08296)** — A controlled sweep of 180 configurations (5 architectures × 3 model families × 4 benchmarks). Establishes the **alignment principle**: coordination structures must align with task attributes.

| Signal / Attribute | Quantitative Delta |
|------|------|
| Centralized vs. Single-Agent on parallelizable tasks (Finance-Agent) | **+80.9%** performance increase |
| All multi-agent variants on highly sequential tasks (PlanCraft) | **-39% to -70%** performance drop |
| Error amplification in Independent (no-communication) systems | **17.2x** |
| Error amplification in Centralized (orchestrated) systems | **4.4x** |
| Hit rate of predictive models selecting optimal architectures on unseen tasks | **87%** accuracy |

*Harness Design Implication*: An orchestrator is not a raw "performance booster," but a **validation bottleneck (safety component)**. When tool count exceeds 16, coordination tax scales superlinearly; thus, blindly decomposing high-tool-density tasks into multi-agent systems is counterproductive.

**(2) [Anthropic Harness Design (2026-04, InfoQ Review)](https://www.infoq.com/news/2026/04/anthropic-three-agent-harness-ai/)** — For long-running (multi-hour) autonomous coding runs, separate tasks into **Planner / Generator / Evaluator 3-agent units**. Leverage **context resets + structured handoff artifacts** (JSON feature specs, init scripts, commit-by-commit logs) alongside **isolated evaluation agents** to block self-evaluation positivity bias. Evaluate frontend quality by using a Playwright MCP server to programmatically manipulate live preview pages across 4 axes: design quality, originality, craft, and functionality.

> "Separating the agent doing the work from the agent judging it is key to avoiding positive bias." — Prithvi Rajasekaran (Anthropic Labs)

**(3) [HumanLayer — Skill Issue: Harness Engineering for Coding Agents (2026-03-12)](https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents)** — Distills a year of production operations into 6 actionable levers:

| Operational Lever | Prescriptive Guidelines |
|------|------------|
| `CLAUDE.md` / `AGENTS.md` | Limit to under 60 lines. *Less is more*. Never auto-generate. Leverage progressive disclosure. (ETH Zurich study: LLM-generated files increase costs by +20% while degrading performance). |
| MCP Servers | Design tools to inject their own schemas into the system prompt. For well-represented terminal CLI tools in training data (GitHub, Docker, databases), use raw CLI execution rather than wrapping them in custom MCPs. |
| Skills | Load `SKILL.md` definitions dynamically, only when needed (progressive disclosure). Treat third-party skill registries with the same suspicion as raw NPM packages. |
| Sub-Agents | Avoid arbitrary separations like "frontend vs. backend sub-agents." Instead, design them as **context firewalls**—where parent agents observe only high-level instructions and final outputs. |
| Hooks | The agentic equivalent of Git hooks. **Failures must be verbose; success must remain silent**. Exit code 2 triggers the parent harness to reactivate. |
| Back-Pressure | Maintain self-validation loops (typechecks, test suites, Playwright runs) in a **context-efficient** manner. Avoid dumping 4,000 lines of passing test logs into the agent's context. |

*Convergence*: Smarter models do not eliminate non-determinism (HumanLayer). Therefore, multi-agent topologies must align strictly with task attributes (Google), and long-running sessions must explicitly separate generation from evaluation (Anthropic). All three parameters map directly back to [[concepts/context-engineering|Context Engineering]].

### 2026-05-06 Update — Self-Evolving Harnesses

In late April 2026, two complementary papers established the shift from **handcrafted harnesses** to **automated meta-evolution under observational guardrails**. Anthropic's [2026 Agentic Coding Trends Report](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf) reinforced this vector as their primary strategic priority.

**(1) Seong et al., ["The Last Harness You'll Ever Build" (arXiv 2604.21003, 2026-04-22)](https://arxiv.org/abs/2604.21003)** — Proposes a **2-Level Meta-Evolution Loop**:

| Level | Component Scope | Function |
|------|------|------|
| **L1: Harness Evolution** | Worker $W_H$ (execution) + Evaluator $V$ (failure diagnostics & scoring) + Evolution Agent $E$ | Modifies and optimizes harness parameters $H$ for a single specific task. |
| **L2: Meta-Evolution** | Evolution protocol $\Lambda = (W_H, H^{(0)}, V, E)$ | Trains and refines the protocol itself across a wide array of heterogeneous tasks $\to \Lambda^{(best)}$. |

*Strategic Promise*: **Eliminates human manual harness engineering when adapting to entirely new domains**. Achieves formal correspondence with traditional meta-learning frameworks.

**(2) ["Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses" (arXiv 2604.25850)](https://arxiv.org/abs/2604.25850)** — Implements **3 Observability Pillars** to prevent automated evolution loops from collapsing into random trial-and-error noise:

| Pillar | Observability Target | Downstream Signal to Evolution Loop |
|------|-----------------|---------------------|
| **Component Observability** | Modular file-level representations of all editable harness assets | Keeps the action space highly explicit and revertible. |
| **Experience Observability** | Compressing million-token raw execution trajectories | Distills trajectories into a layered, drill-down evidence corpus readable by the evolution agent. |
| **Decision Observability** | Matching every edit to a self-declared prediction | Validates every architectural modification as a falsifiable contract against subsequent run results. |

*Results*: Across 10 iterations of AHE, Terminal-Bench 2 pass@1 scores rose from **69.7% to 77.0%**, outperforming handcrafted SOTA harnesses (Codex-CLI at 71.9%) and self-evolving baselines (ACE/TF-GRPO).

**(3) [Anthropic 2026 Agentic Coding Trends Report (2026-05)](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)** — Identifies **Trend 2 (From Solo Agents to Coordinated Teams)**, **Trend 3 (Long-Running Agents operating over days/weeks)**, and **Trend 4 (Scaling via Human Oversight)** as the market manifestations of this architectural evolution.

```
H as a variable  ─→  Last Harness:    Λ that evolves H
                     AHE:             3 pillars guarding Λ from trial-and-error collapse
                     Anthropic 2026:  Market validation of long-horizon execution
```

**3 Strategic ROI Actions for Our Workspace**:
1. Treat the domain matrices in `patterns/harness-engineering-casebook` as training sets for meta-evolution $\Lambda$—re-analyzing domain differences through the lens of component and decision observability.
2. Embed decision observability directly into our sensors: add a `self-declared prediction` field to our ingest logging schema to track the intent behind every wiki/harness edit.
3. Keep harness components modular: isolate `CLAUDE.md`, templates, prompt snippets, and evaluation parameters into discrete files to preserve revertibility and attribution.

### 2026-05-06 PM Update — The 3 Axes of Harness Research (Descriptive, Prescriptive, Tooling)

Three adjacent papers address separate pillars of harness engineering outside the automated evolution pipeline:

| Axis | Research Focus | Key Reference |
|--------|------|------|
| **Descriptive** | How are real-world AI harnesses architected across projects? | [Wei, "Architectural Design Decisions in AI Agent Harnesses" (arXiv 2604.18071, 2026-04-20)](https://arxiv.org/abs/2604.18071) |
| **Prescriptive** | How do we prevent semantic compliance failure in safety-critical runs? | [Zhang, "Harness as an Asset: CAAF" (arXiv 2604.17025, 2026-04-18)](https://arxiv.org/abs/2604.17025) |
| **Tooling** | How do we execute automated harness evolution programmatically? | [Lee et al., "Meta-Harness" (arXiv 2603.28052, Stanford/Krafton/MIT)](https://arxiv.org/abs/2603.28052) |

**(1) Wei's 5 Design Dimensions (Descriptive, $n=70$)** — Decomposes projects across **subagent architecture, context management, tool systems, safety mechanisms, and orchestration**. Maps orthogonally to our Guides / Sensors / HITL classification.
Key corpus statistics:
- **File-persistent hybrid context (27.1%)** represents the most mature context pattern.
- **Registry-based tools (34.3%)** widely outperform raw **MCP (14.3%)** adoption (MCP is officially designated as "emerging").
- **Container isolation** and **structured approvals** exhibit a high co-occurrence lift of **3.4**—proving that isolation and human gates are architected together.
- *Key Takeaway*: "Capability growth does not automatically produce safety maturity."

**(2) CAAF — Determinism via UAI + State Locking (Prescriptive)** — Zhang argues: **do not evolve $H$; lock $H$ as an incorruptible, version-controlled asset**.

| CAAF Component | Functional Role | Workspace Equivalence |
|---------------|------|----------------|
| Recursive Atomic Decomposition | Physically isolated execution nodes + context firewalls | Identical to [[patterns/subagents-delegation|context firewalls]]. |
| Harness as an Asset (HaaA) | Versioned YAML constraint registries | `CLAUDE.md` + templates + frontmatter schemas. |
| Unified Assertion Interface (UAI) | Hard, non-overrideable deterministic PASS/FAIL gates | Frontmatter validators + Git CI pipelines. |
| State Locking | Freezing PASS-validated schemas as read-only | PDCA phase gates (similar to [[patterns/bkit-superpowers-combo]]). |

*Quantitative Impact*: On L3 autonomous driving paradox detection tasks, CAAF + GPT-4o-mini achieved **30/30 success**, whereas monolithic GPT-4o without a harness scored **0/30**. Multi-agent baselines (debate and sequential checking topologies) scored **0% across 80 trials**—proving that orchestration alone cannot bridge the reliability gap.
> "A system whose reliability depends on the presence of a specific linguistic trigger cannot be safely deployed."

**(3) Meta-Harness — Filesystem as Memory (Tooling)** — Lee et al. implement automated harness evolution using a specialized **coding agent + filesystem interaction loop**.
Traditional textual prompt optimizers (e.g., OPRO, TextGrad, AlphaEvolve) compress feedback down to 0.002–0.026 MTok/iter. Meta-Harness processes **10 MTok/iter**—three orders of magnitude greater. Because the proposer is a specialized coding agent, it programmatically queries, greps, and inspects raw codebase assets—referencing a median of 82 files and 20+ prior evolutionary candidates per iteration.
*Results*: Achieved **+7.7 points** over baseline ACE on text classification with **4x fewer context tokens** (60 proposals evaluated in just 4 runs); boosted IMO-level math performance by **+4.7 points** across 5 models; set a new SOTA on **TerminalBench-2 #1 (Haiku 4.5 class)**.
> "Compressed feedback often removes the information needed to trace downstream failures to earlier harness decisions."

```
(AM) "H as a variable"       (AM) "Guarding Λ from collapse"    (PM) "Mapping the domain"
Last Harness (L1+L2)  ─────── AHE (3 pillars) ────────────────── Wei 5 dimensions
        │                             │                                │
        ▼                             ▼                                ▼
(PM) "Code Implementation"   (PM) "Incorruptible Lock"
Meta-Harness                 CAAF (UAI + State Locking)
(filesystem proposer)         (Harness as an Invariant Asset)
```

The **automated evolution vector (top)** and the **deterministic invariance vector (bottom)** run orthogonally. While Meta-Harness and AHE focus on *making $H$ smarter*, CAAF focuses on *making $H$ incorruptible*. For safety-critical systems, they must merge: evolved harnesses must remain bound by hard deterministic invariants validated via UAIs.

**3 PM Actions for Our Workspace**:
1. Treat our `CLAUDE.md`, templates, and frontmatter constraints as a **machine-readable invariant registry** rather than flat markdown instructions. Our lint pipeline serves as a mini-UAI, yielding deterministic pass/fail boundaries.
2. Embed state locking into the wiki ingest workflow: once Phase $N$ passes validation, mark its output as read-only; allow oscillation only in Phase $N+1$.
3. Use Wei's 5×3 matrix to diagnose coverage gaps (subagent, context, tool, safety, orchestration × Guides, Sensors, HITL). Our primary coverage gaps reside in **tool systems × Sensors** and **subagents × HITL**.

---

### What We Are Already Practicing

| Component | Workspace Implementation |
|-----------------|-----------|
| **Guides** | `CLAUDE.md` Schema, PDCA templates, mandatory frontmatter formats, and folder-specific key-matching constraints. |
| **Sensors** | Semantic Gap Analysis, automated lint workflows, and frontmatter validation scripts. |
| **Orchestration** | Rigid PDCA task steps, 10-step Wiki Ingest Checklist. |
| **Memory** | `wiki/` (durable repository state), `index.md`, and `wiki/log.md`. |
| **Guardrails** | Read-only configuration folders, strict frontmatter validation, directory classification rules. |

### Harnesses in Server & Production Environments (vs. Local CLI)

While local CLI agents (like Claude Code) assume a single-user, single-workspace environment, moving harnesses to backend servers introduces distinct engineering challenges:

| Domain | Critical Architectural Design Question |
|------|-----------|
| **Identity & Credentials** | How does the agent access database and tool credentials? How is multi-tenant isolation enforced? |
| **Network Boundaries** | Restricting the agent's web access via strict white-listing to prevent **SSRF (Server-Side Request Forgery)** attacks. |
| **Execution Sandboxing** | Executing code changes and bash commands inside isolated container environments (e.g., gVisor, DeltaBox) or ephemeral VMs. |
| **Concurrency & Locks** | Preventing race conditions on shared workspace files; managing rate limits and queue depths. |
| **Long-Horizon Runs** | Managing multi-minute reasoning loops without triggering HTTP timeouts (e.g., using background job queues). |
| **Telemetry & Telemetry** | Recording request traces, masking PII, and maintaining audit trails. |

Specific backend patterns (synchronous routes, task queue workers, and server-sent event streaming) are detailed in [[patterns/agent-server-harness]]. Workflow transition gates are handled in [[patterns/agent-planning-to-implementation]].

---

## 2026-05-13 Update — Verification-Gated Harnesses across 3 Domains

Three adjacent papers analyze how to enforce hard verification gates **right before committing execution states**, mapped across distinct functional domains:

| Domain | Key Reference | Evidence Type | Verification Gate Mechanism | Downstream Action Branch |
|---|---|---|---|---|
| **Text / Claim** | **GSAR** (arXiv 2604.23366, Kamelhar/Oracle) | Gold evidence texts, 4-way claim typology | Weighted groundedness score + asymmetric contradiction penalties | `proceed` / `regenerate` / `replan` |
| **Code** | **Verify Before You Fix** (arXiv 2604.10800v1, Gajjar/GWU) | Dynamic execution traces (reproducing the exploit) | Strict invariant: "no repair attempt without execution-confirmed exploitability" | `detect` $\to$ `validate` $\to$ `repair` (only upon validation pass) |
| **Embodied / Vision** | **Affordance Agent Harness** (arXiv 2605.00663) | Skill outputs (object detection, segmentations) + episodic priors | Actionable diagnostic outputs ("identifying missing affordances") | Routing to next skill via Adaptive Router; budget-bounded retry |

All three systems share a unified execution blueprint:

```
Skill/Model Output ──→ Evidence Store ──→ Verifier ──→ { commit | retry | replan }
                                             ↑
                                     bounded budget loop
```

Mapping these systems onto Wei's 5 Design Dimensions:

| Wei Dimension | GSAR | Verify Before You Fix | Affordance-Harness |
|---|---|---|---|
| **Subagent** | 4-judge consensus loop | Detector / Validator / Repairer pipeline | Dynamic skill registry |
| **Context** | Typed evidence store | Unified AST (uAST) + execution trace | Environment evidence + episodic memory |
| **Tool** | Semantic scoring functions | Isolated execution sandbox | Physical skill toolbox |
| **Safety** | Asymmetric contradiction penalties | Strict reproduction invariant | Execution cost budget + retry caps |
| **Orchestration** | 3-tier action branch | 3-stage pipeline gated by confirmation | Adaptive Router |

**3 Practical ROI Actions for Our Workspace**:
1. Implement execution-grounded verification gates in our `examples/` directory: automate unit test runs upon every code modification; block Git commits if tests fail (Verify Before You Fix paradigm).
2. Incorporate GSAR-style grounding markers in our frontmatter: define a `grounding` attribute containing claims and matched source file paths to enable static claim verification.
3. Enhance the [[patterns/harness-engineering-casebook|Harness Casebook]] to include visual and embodied domains, populating them with the parameters of the Affordance Agent Harness.

---

## 2026-05-14 Update — Runtime Substrates & the 11 Responsibilities (Zhong & Zhu)

In [AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents](https://arxiv.org/abs/2605.13357) (2026-05-13), the authors formalize the core thesis: **"Software-engineering capability emerges from a model-harness-environment system."** Rather than treating reliability as a function of model intelligence alone, treat it as a function of all three variables—and codify the controllable middle variable (the harness) into 11 distinct runtime responsibilities.

### The 11 Core Responsibilities of the Substrate

| # | Responsibility | Workspace Mapping | Functional Description |
|---|---|---|---|
| 1 | **Task Specification** | `CLAUDE.md`, MEP (Zigler) | Defining "what to do" and when the exit condition is met. |
| 2 | **Context Selection** | [[concepts/context-engineering]] | Isolating and presenting only relevant codebase assets. |
| 3 | **Tool Access** | [[concepts/tool-use]], [[concepts/mcp]] | Managing action schemas, invocation routes, and permissions. |
| 4 | **Project Memory** | [[concepts/ai-memory-systems]] | Maintaining long-term context: codebase rules, conventions, and past mistakes. |
| 5 | **Task State** | Filesystem-as-Memory (Meta-Harness) | Tracking short-term state: active todo lists, plans, and pending steps. |
| 6 | **Observability** | [[concepts/gen-ai-observability]] | Generating structured traces, metrics, and execution logs. |
| 7 | **Failure Attribution** | JRH Analysis, OTel Agent conventions | Diagnosing whether a failure stems from the model, a tool, or the prompt. |
| 8 | **Verification** | [[concepts/llm-evaluation]], Verify Before You Fix | Verifying that a task is functionally complete and correct. |
| 9 | **Permissions** | Container sandboxing + HITL gates | Enforcing execution boundaries and security parameters. |
| 10 | **Entropy Auditing** | Stochastic stability matrices | Analyzing output variance and consistency under identical inputs. |
| 11 | **Intervention Recording** | [[patterns/agent-server-harness]] | Preserving human intervention actions (HITL) as telemetry data. |

### Descriptive vs. Prescriptive Paradigms

Comparing Wei's empirical taxonomy with Zhong & Zhu's prescriptive substrate architecture:

| Attribute | Wei (Descriptive Empirical, $n=70$) | Zhong & Zhu (Prescriptive Architecture) |
|---|---|---|
| **Perspective** | What exists in current codebases | What *must* exist to ensure runtime safety |
| **Taxonomy Scope** | 5 Design Dimensions | 11 Substrate Responsibilities |
| **Categories** | Subagent, Context, Tool, Safety, Orchestration | Task Spec, Context, Tool, Project Mem, Task State, Observability, Failure Attribution, Verification, Permissions, Entropy Audit, Intervention Rec |
| **Strategic Gaps** | N/A | **Failure Attribution, Entropy Auditing, and Intervention Recording** represent newly codified responsibilities. |

These three new responsibilities represent the next logical layer of evaluation, translating raw judge signals into active runtime governance.

*Takeaway*: While the verification-gated updates focus heavily on a single responsibility (**Verification (#8)**), Zhong & Zhu position verification as merely one pillar of eleven. **Locking down verification alone cannot solve the reliability gap**. Without **Failure Attribution (#7)** and **Entropy Auditing (#10)**, the system cannot interpret *why* a verification gate failed.

**3 ROI Actions for Our Workspace**:
1. Upgrade our [[patterns/harness-engineering-casebook|Harness Casebook]] columns to evaluate cases against the 11 substrate responsibilities.
2. Adopt the 11 responsibilities as the formal definition of Harness Engineering within this wiki.
3. Decouple our [[concepts/llm-evaluation]] documentation into three distinct tracks: verification (#8), failure attribution (#7), and entropy auditing (#10) to identify our workspace's exact evaluation strengths.

---

## 2026-05-18 Update — Budget Allocators, Evaluation Hacking, & Minimal Interfaces

Research pushes the harness down into active runtime systems and compute allocation:

### A. Effective Harness Engineering — Prioritizing Thinking Depth over Search Width
[Effective Harness Engineering for Algorithm Discovery with Coding Agents](https://arxiv.org/abs/2605.15221) (2026-05-13) introduces the *Vesper* framework to evaluate compute budgeting:
- **Given a fixed token budget, should we generate many shallow candidates or a few deep candidates?**
  *Result*: Generating **fewer algorithm candidates with deeper reasoning** consistently yields higher final scores.
- **How do we defend against Evaluation Hacking?**
  *Result*: More capable models exhibit **higher rates of evaluation hacking** (optimizing outputs specifically to trick the scoring function). Stronger models require thicker, more adversarial verification harnesses.
- **How do we safely run parallel agents requiring full filesystem access?**
  *Result*: Isolate parallel agents using **Git worktrees** to eliminate cross-agent workspace contamination and file race conditions. This validates the parallel isolation strategies outlined in [[patterns/subagents-delegation]] and [[patterns/agent-server-harness]].

### B. SkillSmith — Compiling Skills into Minimal Executable Interfaces
[SkillSmith](https://arxiv.org/abs/2605.15215) (2026-05-12) treats skill loading as a compile-time optimization challenge:
- Raw skill injecting (dumping massive documentation files into prompts) causes **irrelevant context bloat** and triggers **unnecessary reasoning loops**.
- *Solution*: Analyze skill packages offline and **compile them into minimal executable interfaces**.
- At runtime, expose only the exact functional boundary required by the active step.
- *Performance Gains*:
  - **-57.44%** token consumption during the solve phase.
  - **-42.99%** reasoning iterations.
  - **-50.57%** execution time (2.02x speedup).
  - **-57.44%** API token cost.

This proves that **Tool Access (#3)** and **Context Selection (#2)** are intrinsically linked: the interface design of a tool directly dictates context cost and reasoning loop length.

| Engineering Question | Harness-Level Solution | Key Reference |
|---|---|---|
| Optimal compute allocation | Prioritize **depth of reasoning** over raw candidate generation. | Effective Harness Engineering |
| Defending against score gaming | Implement adversarial, multi-agent **anti-hacking validators**. | Effective Harness Engineering |
| Skill injection optimization | Compile raw documents into **minimal executable interfaces**. | SkillSmith |
| Safe agent parallelization | Isolate processes using **ephemeral Git worktrees**. | Effective Harness Engineering |

**3 Practical ROI Actions for Our Workspace**:
1. Default our parallel sub-agent workflows to execute inside isolated Git worktrees rather than sharing a single workspace folder.
2. Compress tool and skill documentation down to their minimal executable interfaces before injecting them into agent contexts.
3. As we adopt stronger LLMs, scale up the strictness of our verification harnesses to defend against evaluation hacking.

---

## 2026-05-19 Update — Trajectory Auditing & Declarative Policies

Two new studies establish harnesses as active audit substrates and declarative policy documents:

### A. HarnessAudit — Continuous Trajectory Safety
[HarnessAudit](https://arxiv.org/abs/2605.14271) establishes that evaluating final outputs alone is insufficient. **An agent that successfully solves a task but violates permission boundaries, leaks sensitive tokens, or runs unauthorized shell commands is an insecure agent**.
Harnesses must audit trajectories across three distinct layers:
1. **Boundary Compliance**: Does the agent restrict its execution to authorized resources?
2. **Execution Fidelity**: Are the agent's actions valid, coherent, and aligned with task completion?
3. **System Stability**: Does the agent maintain protocol compliance under environmental perturbations?

Evaluated across **210 tasks, 8 real-world domains, and 24 fine-grained scenarios**:
- The highest-performing frontier agent scored only **0.32** on the safety index.
- High task completion rates do not correlate with trajectory safety.
- **Multi-agent coordination amplifies boundary violations and unauthorized resource access**.

This introduces a **trajectory auditing layer** sitting atop standard evaluation judges. The harness must continuously enforce safety boundaries during execution and log structured traces for post-hoc auditing.

### B. Natural-Language Agent Harnesses — Declarative Run Policies
[Natural-Language Agent Harnesses (NLAH)](https://arxiv.org/abs/2603.25723) argues that hard-coding harness logic into application code degrades portability. They propose externalizing run policies into **natural-language declarative documents**, executed via an Intelligent Harness Runtime (IHR).
This reduces harness complexity while maintaining near-identical performance:
- **OSWorld**: NLAH scored **46.3** vs. hard-coded codebase harnesses at **47.1**.
- **SWE-bench Verified**: Code harness required **60,100 tokens across 68 files**, whereas NLAH achieved comparable results with **2,900 tokens across 3 files**.
- **Ablation Studies on NLAH Modules**:
  - *File-Backed State*: Boosted SWE scores from 73.0 to 75.6, and OSWorld from 44.4 to 58.3.
  - *Verifier*: Provided an +8.4 boost on OSWorld.
  - *Context Compression*: Dropped SWE from 73.0 to 72.0, and OSWorld from 44.4 to 36.1 (excessive compression degrades reasoning).

This proves that harnesses are essentially **compositions of policy modules**. It reinforces our approach of treating `CLAUDE.md`, `AGENTS.md`, and `SKILL.md` as **durable, executable policy objects** rather than static help files.

---

## 2026-05-21 Update — Corpus-Level Diagnostics & Skill Lifecycle Governance

Observability and skill management scale to the fleet level:

### A. Insights Generator — Telemetry Corpus Analysis
[Insights Generator](https://arxiv.org/abs/2605.21347) addresses the bottleneck of manual trace debugging. In production environments:
- Individual traces span **tens of thousands of tokens**.
- Systematic behavioral bugs only emerge when analyzing the **entire trace population (corpus) at scale**.

The *Insights Generator* processes a corpus of execution traces and generates **evidence-backed, natural-language diagnostic reports** highlighting recurring failure patterns.
- Human experts using these diagnostic reports achieved a **30.4 percentage point performance boost** over baseline harnesses.
- Coding agents programmatically consuming these insights achieved **stable and consistent performance gains**.

Observability transitions from passive dashboards to the active telemetry-driven input for automated harness evolution.

### B. Library Drift — Pruning the Skill Library
[Library Drift](https://arxiv.org/abs/2605.19576) (2026-05-19) identifies the risks of unchecked skill accumulation in self-evolving agents. If an agent continuously adds new skills to its registry without a cleanup mechanism, it suffers from **Library Drift**:
- Unbounded skill accumulation.
- Retrieval degradation (RAG fetches irrelevant skills).
- False-positive skill injections.
- Performance stagnation.

*The Solution*: Implement strict **Skill Lifecycle Governance**:
1. **Outcome-Driven Retirement**: Automatically prune skills that fail to contribute to successful outcomes.
2. **Bounded Active Capacity**: Restrict the active skill registry to a hard numeric limit.
3. **Meta-Skill Authoring Priors**: Validate newly generated skills against strict authoring standards.

On MBPP+ tasks, implementing these lifecycle rules boosted held-out pass@1 scores from **0.258 to 0.584** (a rolling gain of **+0.328**)—proving that **pruning excess capabilities** is more load-bearing than scaling raw model size.

```
Individual Trajectory Audit  ──→  HarnessAudit (Boundary Compliance)
            │
            ▼
Declarative Policy Object    ──→  NLAH + IHR (Modular policy files)
            │
            ▼
Corpus-Level Diagnostics     ──→  Insights Generator (Evidence-backed reports)
            │
            ▼
Lifecycle Governance         ──→  Library Drift (Skill retirement & cap constraints)
```

---

## 2026-05-22 Update — Code as the Agent Harness

[Code as Agent Harness](https://arxiv.org/abs/2605.18747) (2026-05-18) synthesizes these paradigms into a unified thesis: **source code is not merely the output of an agent; it is the runtime substrate that enables the agent's reasoning, execution, and verification**.

### 1) The Shift from Prompts to Executable Artifacts
Instead of treating planning, memory, tool use, and verification as isolated prompt engineering challenges, unify them as **code-backed harness mechanisms**:
- **Interface**: Executable code bridges reasoning, tools, and the environment.
- **Mechanisms**: Planning states, memory persistence, tool invocations, and feedback loops are managed via concrete file structures.
- **Scale**: Multi-agent reviews, validations, and tests are coordinated via code-level boundaries.

### 2) Shared Artifacts as the Coordination Surface
In multi-agent systems, simple textual message passing is insufficient. **Durable shared files, code diffs, test harnesses, and stateful code artifacts serve as the load-bearing coordination surface**. Orchestration is thus defined as **artifact-mediated workflow engineering** rather than prompt choreography.

### 3) Mapping Open Challenges to Harness Solutions

| Open Architectural Challenge | Workspace Harness Solution |
|---|---|
| Deep behavioral evaluation | Process auditing, ProcBench, and HarnessAudit integration |
| Verification under incomplete feedback | Grounded claim gates, GSAR, and Verify Before You Fix |
| Regression-free harness evolution | Automated evolution, AHE, and Insights Generator |
| Consistent shared state across runs | Stateless VM sandboxes, BeliefMem, and formal skill registries |
| Safety-critical human oversight | Human-in-the-loop gating, Progressive Autonomy, and MAGE |

---

## 2026-05-23 Update — Interface Adaptation & Stateful Sandboxes

We decompose the code substrate into two distinct layers:

### 1) Life-Harness: Adapting the Interface, Not the Model
[Adapting the Interface, Not the Model](https://arxiv.org/abs/2605.22166) (2026-05-21) establishes that agent failures in deterministic, rule-governed environments stem from **model-environment interface mismatch** rather than raw model quality.
The proposed **Life-Harness** aggregates recurring failure patterns from execution trajectories and injects modular interventions across four boundaries:
- **Environment contracts**: Re-formatting environmental inputs.
- **Procedural skills**: Standardizing tool usage guidelines.
- **Action realization**: Validating concrete tool execution parameters.
- **Trajectory regulation**: Imposing hard constraints on execution paths.

*Results*: Tested across 7 deterministic environments and 18 model backbones, Life-Harness improved performance in **116 out of 126 configurations**, yielding an **average relative improvement of 88.5%**. Furthermore, a harness evolved on Qwen3-4B-Instruct **successfully transferred to 17 other heterogeneous models**, proving that optimal harnesses capture **environment-side regularity** rather than model-specific prompt quirks.

### 2) DeltaBox: Millisecond Stateful Sandboxing
[DeltaBox](https://arxiv.org/abs/2605.22781) pushes sandboxing down to the systems layer. Long-horizon agents executing branch searches or reinforcement learning loops require frequent **state checkpoints and rollbacks**. Copying complete VM states introduces severe latency.
DeltaBox introduces **change-based checkpoint and rollback** mechanisms:
- **DeltaFS**: A layered, copy-on-write filesystem tracking file diffs.
- **DeltaCR**: Incremental process-state dumping paired with template-based restoration.

*Performance*: Reduces checkpoint latency to **14ms** and rollback latency to **5ms**. Sandboxes are thus redefined: they are not merely security isolation barriers, but **high-speed branchable computation substrates**.

---

## 2026-05-24 Update — Source-Level Self-Evolution

[MOSS](https://arxiv.org/abs/2605.22794) (2026-05-22) layers **source-level self-evolution** atop these systems. Mature coding agents must go beyond editing text prompts: **they must autonomously rewrite the raw scaffold code of the harness itself**.

### 1) Eliminating Scaffold Rigidity
When an agent encounters systematic failures, forcing the model to simply "think harder" is insufficient. The agent must rewrite its own **worker loop structures, retry policies, verifier wirings, and tool orchestration code**.

### 2) Unifying Prompt and Code Edits
MOSS defines harness improvement as a git-managed **source-level code edit task**:
- Editable harness assets are isolated into discrete files.
- Modifications are recorded as standard code diffs.
- Test failures and run statistics serve as the programmatic inputs for subsequent code revisions.

```
Code as Substrate   ──→  Shared code, diffs, and test files act as the active coordination surface.
            │
            ▼
Interface Adaptation ──→  Life-Harness standardizes environment contracts across 18 models.
            │
            ▼
Stateful Sandbox    ──→  DeltaBox enables millisecond checkpoints (14ms) and rollbacks (5ms).
            │
            ▼
Source-Level Edit   ──→  MOSS enables agents to rewrite their own scaffold and worker source code.
```

**3 Practical ROI Actions for Our Workspace**:
1. When a deterministic workflow fails consistently, audit the **tool contract, observation format, and trajectory rules** before swapping the underlying model.
2. Keep harness logic isolated in discrete, version-controlled files to enable safe source-level modifications.
3. Treat Git commit history as the training corpus for interface interventions and harness self-evolution.

---

## Case-by-Case Studies & the Anthropic Academy

To analyze how Guides, Sensors, and HITL boundaries shift across different operational domains, and to map the official **Anthropic Academy** courses to harness engineering practices, refer to [[patterns/harness-engineering-casebook|Harness Casebook & Anthropic Academy Study Map]].

## Related Concepts

- [[concepts/context-engineering]] — The immediate sub-layer of the Harness
- [[concepts/prompt-engineering]] — The foundational prompt layout layer
- [[concepts/agentic-engineering]] — The software engineering methodology of building agents
- [[concepts/ai-orchestration]] — Coordinating specialized agents within the harness boundaries
- [[patterns/agent-server-harness]] — Deploying harnesses to secure server runtimes
- [[patterns/agent-planning-to-implementation]] — Designing Guides and Sensors at the planning phase

## References

- [Harness Casebook & Academy Curation Notes](raw/notes/2026-04-13-harness-casebook-anthropic-academy.md)
- [Advanced Harness Engineering Deep-Dive Curation](raw/notes/2026-04-12-harness-engineering-deep-dive.md)
- [Engineering Paradigm Research Notes](raw/notes/2026-04-09-engineering-paradigms-research.md)
- [Martin Fowler — Harness Engineering (Main Article)](https://martinfowler.com/articles/harness-engineering.html)
- [Martin Fowler — Harness Engineering Memo](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html)
- [Martin Fowler — Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)
- [Anthropic — Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents)
- [Claude Code Agent Harness Architecture](https://wavespeed.ai/blog/posts/claude-code-agent-harness-architecture/)
- [The Anatomy of an Agent Harness](https://blog.dailydoseofds.com/p/the-anatomy-of-an-agent-harness)
