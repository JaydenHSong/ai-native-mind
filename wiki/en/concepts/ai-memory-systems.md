---
title: "AI Memory Systems"
category: concepts
tags: [memory, agent, long-term, short-term, context, multi-party, group-memory, benchmark, probabilistic-memory, partial-observability, forgetting, consolidation, safety-memory, taxonomy, virtual-memory, token-budget, scalability, usable-scale-boundary]
created: 2026-04-09
updated: 2026-05-22
sources:
  - "raw/notes/2026-04-09-ai-memory-systems.md"
  - "raw/articles/2026-05-03-zenbrain-7-layer-memory.md"
  - "raw/articles/2026-05-15-groupmembench-multi-party-memory.md"
  - "raw/articles/2026-05-17-belief-memory-partial-observability.md"
  - "raw/articles/2026-05-17-human-inspired-memory-architecture.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md"
  - "raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/vector-db-embeddings]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
  - "[[comparisons/agent-memory-taxonomy]]"
status: active
confidence: high
---

# AI Memory Systems

## Easy Read

**Analogy**: Humans divide memory into **working memory** (what is currently on the desk) and a **journal** (retained long-term). AI **short-term memory** resides directly inside the active conversation window, while **long-term memory** is maintained in external storage outside the window, such as databases, files, or vector DBs.

| Term | Explanation |
|------|------|
| **Context Window** | The **maximum length** of tokens a model can observe at a single time |
| **Semantic Memory** | A style of **long-term memory** retrieved based on "similarity of meaning" |
| **RAG** | A pattern of **retrieving** relevant documents and appending them to the short-term memory when needed |

## One-Line Definition

A persistent memory system designed to transcend the constraints of the LLM's context window. It represents a core architectural component of AI agents in 2026.

## Quick Taxonomy — Avoiding the Monolithic "Memory" Label

Synthesizing recent papers incorporated into the wiki, memory is now classified across at least four distinct dimensions:

| Dimension | Representative Concept | Primary Reference Page |
|---|---|---|
| Where to store? | Short-term / episodic / semantic / procedural / layered memory | This page |
| What and how much to trust? | **Belief memory** | The *BeliefMem* section of this page |
| When to compress, forget, or reconsolidate? | **Lifecycle memory** | The *Human-Inspired Memory* section of this page |
| What must not be forgotten to prevent risk? | **Safety memory** | The *MAGE* section in [[concepts/agent-supply-chain-security]] |

→ Detailed comparisons are compiled in [[comparisons/agent-memory-taxonomy]]. This page handles the **basic architecture and internal transitions of memory**, while the taxonomy page focuses on **functional specialization**.

## Core Concepts

### Short-term Memory

Analogous to human working memory. Stored **within the active context window of the model**.

**Includes**:
- Recent dialogue history
- System prompts
- Tool outputs
- Reasoning steps (thinking trace)

**Management**: Governed by FIFO (First-In, First-Out) queues due to token limits—older tokens are pruned as new information enters.

### Long-term Memory

A persistent **long-term storage** that survives session terminations. Accumulates knowledge across multiple sessions.

## Three Modalities of Long-Term Memory

### 1. Episodic
Memory of **specific events and experiences**.
- "User requested X on 2026-04-09."
- Contains temporal (time-based) information.
- **`wiki/log.md` in our workspace serves this role.**

### 2. Semantic
Memory of **facts and concepts**.
- "The user's name is Jayden."
- "The project is written in Next.js."
- Time-independent information.
- **`wiki/concepts/` in our workspace serves this role.**

### 3. Procedural
Memory of **rules and skills**.
- "To build this project, run `pnpm build`."
- "10-step checklist for Wiki ingestion."
- **`CLAUDE.md` in our workspace serves this role.**

## Memory Transition (Short → Long)

The compression process from short-term to long-term:
- "**Cognitive compression**"
- Distilling signal from conversational noise.
- Evaluated by the LLM: "Is this piece of information worth remembering?"

## Major Frameworks

| Framework | Key Characteristics | Best Fit |
|----------|------|------|
| **Mem0** | Open-source, automatic extraction and storage | General-purpose |
| **Zep** | Integrated knowledge graphs | Relationship reasoning |
| **LangChain Memory** | A wide variety of memory classes | LangChain ecosystem |
| **AWS AgentCore** | Enterprise-grade scalability | AWS native integrations |
| **Redis for Memory** | Low-latency reads and writes | High-performance requirements |

## 2026 Trends

### Hierarchical Systems
```
L1: Conversation Context (Ultra short-term)
L2: Session Summarization (Short-term)
L3: Vector DB (Medium-term)
L4: Knowledge Graph (Long-term)
```

### Shared Memory for Multi-Agent Swarms
Multiple agents accessing the same memory substrate. Essential for simulating team collaborations.

### Emotional & Contextual Awareness
Tracking user intent and sentiment over time, moving beyond simple factual cache systems.

## Relationship with Context Engineering

Belongs to the **Memory/State** layer of the 5 elements of [[concepts/context-engineering|Context Engineering]]. Our workspace wiki serves as a complete manual implementation of this:

| Element | Workspace Implementation |
|------|------|
| **Semantic Memory** | `wiki/concepts/`, `wiki/patterns/` |
| **Episodic Memory** | `wiki/log.md` |
| **Procedural Memory** | `CLAUDE.md` |
| **Short-term Memory** | Claude Code active session context |

## Implementation Considerations

- **Forgetting Strategies**: When and what should be pruned.
- **Retrieval Strategies**: Loading only highly relevant memories to prevent context noise.
- **Privacy**: Anonymization of Personally Identifiable Information (PII).
- **Cost**: Vector DB compute overhead and storage costs.

## 2026-05-03 Update — ZenBrain 7-Layer + Predictive Memory (arXiv 2604.23878)

[ZenBrain](https://arxiv.org/abs/2604.23878) (2026-04-26 arXiv preprint) proposes solving **long-term autonomous operations** using neuroscience-defined memory architectures: **7 layers + 9 algorithms + 6 PMA (Predictive Memory Architecture) components**. This introduces two new axes to the traditional three-modality classification (Episodic/Semantic/Procedural):

| Additional Layer | Role | Relationship with Existing Wiki |
|-----------|------|-------------------|
| **Sensory** | Brief window of raw tool response streams | Sub-layer of short-term memory |
| **Working** | Active variables of the current turn | Core of short-term memory |
| **Autobiographical / Self** | Persona, commitments, long-term goals | New — Prevents "persona drift" |
| **Predictive (PMA)** | Forward model of the next expected inputs | New — Minimizes redundant retrieval calls |

Three Core Insights:
1. **Memory ≠ Store**: An active system combining encoding, consolidation, forgetting, and prediction. Vector databases alone are partial solutions.
2. **Forgetting is a Feature**: Intentional forgetting is a first-class citizen—retaining everything unconditionally degrades retrieval quality with noise. [[concepts/context-rot-hallucination|Context Rot]] is ultimately a failure of consolidation/forgetting policies.
3. **Predictive Memory**: By modeling the next input, the system only processes incoming data as *prediction error*, improving both token efficiency and hallucination rates.

Implications for Solo Developers:
- There is no need to implement all 7 layers. Treat **three questions** as a design checklist: (1) Is a **forgetting policy** explicitly defined? (2) Is the **self/persona** persistently stored? (3) Does a **predictive model** reduce redundant retrieval calls?
- The three-tier model (working, episodic, long-term) in [[patterns/preventing-context-rot]] is a subset of ZenBrain; adding **Self & Predictive** layers is the natural next step.
- Further reading: *Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers* ([arXiv 2603.07670](https://arxiv.org/html/2603.07670v1), 2026-03) is highly useful for industrial cases and evaluation metrics.

## 2026-05-15 Update — GroupMemBench: Multi-Party Memory Evaluation (arXiv 2605.14498)

[Yang et al.](https://arxiv.org/abs/2605.14498) (2026-05) point out that existing memory benchmarks are confined to a **dyadic (1:1)** assumption, failing to evaluate three critical properties of real-world deployments (Slack, Discord, group chats, meeting transcripts): (i) **group dynamics**, (ii) **speaker-grounded belief tracking**, and (iii) **audience-adapted language** (Theory-of-Mind).

| Metric | Accuracy / Score |
|---|---|
| Strongest memory system average accuracy | **46.0%** |
| Knowledge update accuracy | **27.1%** |
| Term ambiguity handling | **37.7%** |
| Simple **BM25 baseline** | **Matches or outperforms most agent memory systems** |

→ A new evaluation axis called the *dyadic gap* is attached to the [[#major-frameworks|frameworks table]]. In multi-party scenarios, automated memory ingestion pipelines strip out structural and vocabulary signals of the group, causing them to fall behind simple keyword search (BM25).

**6 Question Categories** (bound to adversarial queries and specific askers): multi-hop reasoning, knowledge update, term ambiguity, user-implicit reasoning, temporal reasoning, and abstention.

**Pairing with ZenBrain**: The *Autobiographical/Self* layer of ZenBrain maps directly to (ii) speaker-grounded belief tracking in GroupMemBench—where ZenBrain is the *prescription* (architecture) and GroupMemBench is the *measurement* of systems lacking it.

**3 ROI Actions for Solo Developers**:
1. This workspace wiki manually implements multi-party-grade memory by separating *Episodic (log) / Semantic (concepts) / Procedural (CLAUDE.md)*. The BM25-equivalence results suggest that our *natural language search* (Obsidian grep) may perform better than naive automatic memory systems, validating the [[patterns/llm-wiki]] design.
2. When adopting memory frameworks, ask how they handle group/channel environments if the vendor demo only shows 1:1 interactions. If untested, defer adoption.
3. *Knowledge update (27.1%)* is the weakest area. Isolating highly dynamic facts (e.g., active tools in the [[tools/]] directory) into **page-level** files bypasses this weakness.

## 2026-05-17 Update — BeliefMem: Representing Memory as Belief State under Partial Observability (arXiv 2605.05583)

[Liao et al.](https://arxiv.org/abs/2605.05583) (2026-05-07) argue that traditional agent memory systems commit to a **single deterministic conclusion** for every observation, solidifying their own errors into long-term memory. E.g., if a transient network glitch is cached as "API X failed," the agent acts on this premise and recursively reinforces this incorrect conclusion.

### Core Paradigm Shift — Memory as Belief State, Not Fact Cache

| Traditional Deterministic Memory | BeliefMem |
|---|---|
| observation → single conclusion | observation → multiple candidate conclusions |
| discards uncertainty | preserves uncertainty |
| difficult to correct post-hoc | updates confidence with new evidence |
| risk of self-reinforcing errors | continually surfaces alternative hypotheses |

The implementation is simple yet profound:
- Store **candidate conclusions** as separate entries.
- Assign **probabilities** to each entry.
- Update probabilities using the **Noisy-OR** rule when new observations are made.
- Surface all candidate hypotheses and their probabilities during retrieval.

→ Memory no longer declares absolute "facts" but rather expresses "how much it believes something and with what confidence."

### Connection with GroupMemBench
While [[#2026-05-15-update-groupmembench-multi-party-memory-evaluation-arxiv-2605-14498|GroupMemBench]] highlighted that ingestion systems strip out key structural cues in group chats, BeliefMem addresses a similar root issue: **memory systems compress conversational uncertainty far too early**.
- GroupMemBench = Measures *what gets erased* in multi-party contexts.
- BeliefMem = Prescribes *how to store data* to minimize premature erasure under partial observability.

One is **measurement**, and the other is **prescription**.

### Benchmark Performance
- Evaluated on **LoCoMo & ALFWorld**.
- Achieves **best average performance** even under highly constrained data environments.
- Exhibits **remarkable outperformance** over well-known baselines.

The key message: **deterministic memory is structurally disadvantaged in partially observable environments.**

### Pairing with ZenBrain
If ZenBrain expands memory into a **7-layer architecture**, BeliefMem rewrites the **representation rules** within those layers.
- ZenBrain: An **architecture** spanning forgetting, self, and predictive components.
- BeliefMem: An **update rule** treating observations as probabilistic beliefs rather than singular facts.

Memory design now branches into three key questions:
1. **Where to store?** (layers)
2. **What to store?** (content)
3. **How much to trust?** (belief/uncertainty)

### 3 ROI Actions for Solo Developers
1. When summarizing debugging logs or agent memory entries, record at least **two alternative hypotheses alongside their confidence levels** to prevent cognitive lock-in.
2. When evaluating memory frameworks, ask **"How does it represent uncertainty?"** rather than just debating "vector DB vs. knowledge graph."
3. In this workspace's journal/log, phrase unverified hypotheses using soft confidence vocabulary ("hypothesized with medium confidence") to align with the BeliefMem philosophy.

## 2026-05-17 Update — Human-Inspired Memory: Designing Consolidation and Forgetting (arXiv 2605.08538)

[Kerestecioglu et al.](https://arxiv.org/abs/2605.08538) (2026-05-08) shift the focus of long-term memory from "retaining more data" to **how to compress, forget, and reconsolidate information**. This paper treats memory not as a passive retrieval database, but as an **operational pipeline**.

### Six Cognitive Mechanisms
1. **Sleep-phase consolidation**
2. **Interference-based forgetting**
3. **Engram maturation**
4. **Reconsolidation upon retrieval**
5. **Entity knowledge graphs**
6. **Hybrid multi-cue retrieval**

While ZenBrain looks at **layers** and BeliefMem looks at **representations**, this research frames memory in terms of **lifecycle operations**.

### Why It Matters — Memory Failure as Management Failure
The research targets four common "naive accumulation" failures:
- Redundant memories accumulating to increase retrieval noise.
- **Interference** between stale and fresh memories.
- Stale memories freezing due to a lack of active reorganization upon retrieval.
- Weak entity relationships blurring connections between people, issues, and events.

*Takeaway*: Memory quality is determined less by the presence of a vector DB and more by active **consolidation, forgetting, and reconsolidation policies**.

### Quantitative Results — Shrinking While Retaining
- **VSCode issue-tracking** (13K issues / 120K events): Dedup-based consolidation yields **97.2% retention precision**, a **58% storage reduction**, and a **+21.8 pp** improvement over the baseline.
- **LongMemEval** (475 sessions / ~540K unique turns): Under a strict **200K-token budget**, raw retrieval scores 71.2% while the pipeline scores 70.1% (with 95% CI overlap).
- **LongMemEval S-tier** (50 sessions): Preference recall increases by **+13.3 pp**.

The core message: **A well-managed memory pipeline achieves equivalent accuracy without requiring bloated storage capacity.**

### Relationship with ZenBrain, GroupMemBench, and BeliefMem

| Dimension | Contribution of This Research |
|---|---|
| [[#2026-05-03-update-zenbrain-7-layer-predictive-memory-arxiv-260423878|ZenBrain]] | Layers on top of a **maintenance policy** |
| [[#2026-05-15-update-groupmembench-multi-party-memory-evaluation-arxiv-2605-14498|GroupMemBench]] | Provides concrete **store-size/accuracy trade-off** metrics |
| [[#2026-05-17-update-belief-mem-representing-memory-as-belief-state-under-partial-observability-arxiv-2605-05583|BeliefMem]] | Complements uncertainty representation with **when-to-rewrite policies** |

Memory design now incorporates a fourth dimension:
1. **Where to store?** (layers)
2. **What to store?** (content)
3. **How much to trust?** (belief)
4. **When to compress, forget, or reconsolidate?** (lifecycle)

### 3 ROI Actions for Solo Developers
1. Instead of accumulating project logs indefinitely, schedule a periodic **deduplication and consolidation** step to boost retrieval quality.
2. When evaluating memory systems, track the **accuracy retention relative to storage reduction** alongside raw accuracy.
3. As `wiki/log.md` and journals grow, implement a mini-consolidation step separating "recent summaries" from "raw logs."

## 2026-05-19 Update — ClawVM: Memory as a Runtime Contract rather than just Storage (arXiv 2604.10352)

[ClawVM](https://arxiv.org/abs/2604.10352) (2026-04-11) drags memory down to the system layer. It adds a fifth critical question to our memory taxonomy:
> **Who enforces memory consistency, across what lifecycle boundaries, and under what invariant contracts?**

### Redefining the Problem — Memory Errors as Lifecycle Failures
The paper identifies three recurring lifecycle errors:
- **Lost state** following compaction steps.
- **Flush bypass** during reset routines.
- Incorrect **destructive writebacks** that overwrite vital history.

Memory errors are often failures of **preservation and commit execution** rather than retrieval.

### Core Architecture of ClawVM
- State isolation using **typed pages**.
- Assigning **minimum-fidelity invariants** to each page.
- Selecting **multi-resolution representations** within token budgets.
- Executing **validated writebacks** at lifecycle boundaries (compaction, reset, save).

This treats memory as a **virtual memory contract** rather than a database plugin.

### Key Classifications in the Taxonomy

| Dimension | Key Reference | Core Focus |
|---|---|---|
| How much to trust? | BeliefMem | Belief representation |
| When to compress/forget? | Human-Inspired Memory | Lifecycle policy |
| What must not be forgotten? | MAGE | Safety memory |
| **How to prevent state loss?** | **ClawVM** | **Runtime enforcement** |

### Quantitative Performance
- Evaluated on **12 real-session traces** + adversarial stress tests.
- Reaches **100% success** on task replay under a budget of 180 tokens (vs. 76.7% for baseline).
- Policy-engine overhead: **median 18–44μs/turn**, p95 **< 60μs**.

*Takeaway*: Minimizing state-loss failures is achievable with negligible runtime latency.

### 3 ROI Actions for Solo Developers
1. Before adding a bloated vector DB, explicitly define **flush, reset, and save boundaries** for agent states.
2. Do not treat memory as a monolithic summary block; separate it into **"pages to preserve strictly"** vs **"pages to compress dynamically."**
3. Track **writeback correctness, compaction faults, and reset safety** alongside traditional retrieval accuracy.

## 2026-05-22 Update — Scale-Conditioned Memory Evaluation: When Stored Evidence Stops Being Usable (arXiv 2605.07313)

[When Stored Evidence Stops Being Usable](https://arxiv.org/abs/2605.07313) (2026-05-08) evaluates **how usability changes as the memory store grows**. It moves back from representation and operations to evaluate whether stored evidence remains accessible when buried under irrelevant history.

### Growth Constraints over Snapshot Accuracy
Traditional memory benchmarks focus on snapshot accuracy. Production memory, however, continuously accumulates **irrelevant sessions**. This research fixes target task evidence while scaling irrelevant session count to observe performance degradation.
- Traditional: "Can we find it now?"
- Scale-conditioned: **"Can we still extract target evidence within token/compute budgets as historical noise grows?"**

### Four Diagnostic Metrics

| Metric | Core Evaluation |
|---|---|
| **Budget-compliant reliability** | Can we reach the correct answer within strict invocation budgets? |
| **Tail memory-call burden** | How long does memory retrieval drag out on complex edge cases? |
| **Failure-regime decomposition** | Is failure caused by retrieval miss, budget overflow, or interface failure? |
| **Usable-scale boundary** | At what database volume does reliability drop below target thresholds? |

These metrics shift memory evaluation from a simple accuracy percentage to an **operational diagnostics tool**.

### Integration with Memory Taxonomy

| Dimension | Reference |
|---|---|
| How much to trust? | BeliefMem |
| When to forget? | Human-Inspired Memory |
| What is critical for safety? | MAGE |
| How to guarantee preservation? | ClawVM |
| **How scalable is its usability?** | **Scale-Conditioned Evaluation** |

### Quantitative Performance
- On LongMemEval, **HippoRAG** maintains a two-call budget, but its **budget-compliant reliability drops by 16 to 20 percentage points** as irrelevant session counts scale.
- **LiCoMemory** exhibits heavy agent-model dependency:
  - Qwen3-8B exceeds budget limits.
  - Qwen3-32B & Qwen3-235B remain relatively stable within tested scales.

*Takeaway*: Memory system capabilities must be stated conditionally: **Agent × Interface × Scale Range × Budget**.

### 3 ROI Actions for Solo Developers
1. When selecting memory architectures, ask how latency and accuracy scale when the history database grows **by 10x**.
2. Design custom memory tests that **scale irrelevant noise** while keeping target evidence constant.
3. Audit long-term logs to ensure you can efficiently retrieve evidence within practical token and performance budgets.

## References

- [AI Memory Systems Research](raw/notes/2026-04-09-ai-memory-systems.md)
- [State of AI Agent Memory 2026 (Mem0)](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [AI Agent Memory Architecture (Redis)](https://redis.io/blog/ai-agent-memory-stateful-systems/)
- [ZenBrain 7-Layer Memory Architecture (arXiv 2604.23878, 2026-04)](https://arxiv.org/abs/2604.23878)
- [Memory for Autonomous LLM Agents — Survey (arXiv 2603.07670, 2026-03)](https://arxiv.org/html/2603.07670v1)
- [GroupMemBench: Multi-Party Memory (arXiv 2605.14498, 2026-05)](https://arxiv.org/abs/2605.14498)
- [Human-Inspired Memory Architecture for LLM Agents (arXiv 2605.08538, 2026-05)](https://arxiv.org/abs/2605.08538)
- [When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory (arXiv 2605.07313, 2026-05)](https://arxiv.org/abs/2605.07313)
