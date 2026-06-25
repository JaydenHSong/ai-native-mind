---
title: "GenAI and Agent Observability (OpenTelemetry)"
category: concepts
tags: [observability, opentelemetry, genai, agents, tracing, semconv, event-sourcing, runtime-audit]
created: 2026-04-11
updated: 2026-05-24
sources:
  - "raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md"
  - "raw/articles/2026-05-01-otel-ai-agent-observability.md"
  - "raw/articles/2026-05-03-datadog-state-of-ai-engineering-2026.md"
  - "raw/articles/2026-05-06-agentic-harness-engineering-observability.md"
  - "raw/articles/2026-05-24-activegraph-log-is-the-agent.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/mcp]]"
status: active
confidence: high
---

# GenAI and Agent Observability (OpenTelemetry)

## Start here

**Analogy**: when an app runs for a long time, observability is the **black box recorder** that lets you see where it stopped and who called what. **OpenTelemetry (OTel)** is the public naming standard that prevents each tool from speaking a different telemetry dialect. **GenAI semantic conventions** are the AI-specific labels for things like LLM calls and tool calls.

| Term | Plain meaning |
|---|---|
| **Trace** | the full footprint of one request as it moves through the system |
| **Span** | one step in that footprint, such as a model call |
| **Metrics / logs** | numeric signals and textual event records |

## One-line definition

An approach to observing traces, metrics, and logs from GenAI and agent applications using **OpenTelemetry** and especially the **GenAI semantic conventions**, so the stack is less tied to one vendor or framework.

## Why this is more than “just logs”

- Agents are **non-deterministic**, so observability data is not only for incident response. It also feeds back into **quality loops and eval loops**.
- If every framework emits a different format, cost analysis, latency analysis, and A/B comparisons become hard to unify.

## Layers OpenTelemetry touches

| Layer | Description |
|---|---|
| **GenAI semantic conventions** | standardizes span names and attributes for model calls, tool use, vector DB operations, and more |
| **Agent application conventions** | conventions for observing individual agent entities |
| **Agent framework conventions** | common telemetry surface across frameworks like LangGraph and CrewAI, plus vendor-specific extensions |

Because the spec is still evolving, pinning the deployed version and any experimental flags is itself part of the harness.

## Two instrumentation paths

1. **Framework-baked instrumentation** — easier to adopt, but the framework owns the burden of tracking OTel versions and conventions.
2. **External OTel instrumentation packages** — more flexible, but package composition and fragmentation become risks.

Whichever path you choose, alignment with the **agent framework semantic conventions** is the condition for interoperability.

## 2026-05-01 update — baked-in vs external instrumentation

The OTel blog’s tradeoff can be summarized like this:

| Topic | Baked-in (ex: CrewAI) | External package (Traceloop, Langtrace, `instrumentation-genai`) |
|---|---|---|
| User default | already on | add separately |
| Adopting new framework features | easier | separate package cycle |
| Bloat for non-observability users | higher | lower |
| OTel version lock-in | riskier | easier to update package by package |
| Flexibility for advanced users | lower | higher |
| Tracking OTel conventions | framework burden | community-reviewable |

Best practice on the baked-in side: support toggles, avoid conflicts with external packages, and register with the OTel ecosystem when possible.

## Agent application ≠ agent framework

A central distinction in the OTel discussion is:

- **AI agent application**: an individual autonomous entity performing a task
- **AI agent framework**: the infrastructure used to build, manage, and deploy those agents

The semantic conventions therefore split into **application conventions** and **framework conventions**. Telemetry is not just monitoring; it is also **input for the eval loop**. If traces carry a `trace_id` or session identifier, you can join them back to eval datasets across frameworks.

## 2026-05-03 update — Datadog State of AI Engineering 2026

Datadog’s report, based on **1,000+ customer LLM traces**, gives quantitative backing to the claim that observability is not optional.

| Fact | Number | Implication |
|---|---|---|
| Model diversification | **70%+ of orgs use 3+ models** | model gateways become standard |
| Old-model persistence | GPT-4o **22%**, Sonnet 4.5 **19%** | “model debt” becomes a governance problem |
| Framework adoption | **9% → 18%** in a year | framework sprawl requires deep telemetry |
| System prompt share | **69%** of input tokens | scaffolded agent cost is heavily prompt-driven |
| Prompt caching usage | only **28%** cached-read on supported models | [[patterns/prompt-caching]] remains large uncaptured ROI |
| Top failure mode | rate limits account for **30–60%** of all errors | backpressure, budgets, and queues are first-class safeguards |
| Monolithic agents | **59%** are single-call; only **18%** use 3+ calls | once multi-agent flows appear, trace propagation becomes essential |

The main message: the next wave of agent failures will come less from what the models cannot do and more from what teams **cannot observe well enough to diagnose**.

## Connection to the server harness

- If the `run_id` and step logs from [[patterns/agent-server-harness]] are promoted into standard spans, model, tool, and agent stages can be analyzed on one dashboard.
- This extends the **Sensors** idea in [[concepts/harness-engineering]] beyond linting into **distributed traces**.
- It also pairs directly with [[concepts/llm-evaluation]]: joining traces back to eval datasets makes regression analysis much easier.

## 2026-05-06 update — Agent design-level observability (AHE)

The AHE line separates **infrastructure-level observability** from **agent-design observability**. Automatic harness evolution does not work reliably unless both are present.

| Pillar | What exists at the OTel / infra layer | What must be added at the agent-design layer |
|---|---|---|
| **Component observability** | service and process topology | each editable harness component (`H`) stays file-level, explicit, and revertible |
| **Experience observability** | raw traces and logs | trajectory data distilled into a layered drill-down evidence corpus that an evolving agent can actually consume |
| **Decision observability** | deployment history | each edit linked to a self-declared prediction and then checked against the next-round outcome as a falsifiable contract |

Quantitatively, the paper reports Terminal-Bench 2 pass@1 improving from **69.7% → 77.0%** over 10 iterations, outperforming both a human-built SOTA harness and self-evolving baselines.

Immediate wiki implication:
- current wiki Sensors cover **component observability** reasonably well
- decision observability is thinner
- a simple fix is to record what each edit claimed it would improve, so later results can falsify that claim

## 2026-05-24 update — ActiveGraph: from leaving logs to making logs the runtime

[ActiveGraph / “The Log is the Agent”](https://arxiv.org/abs/2605.21997) pushes the discussion one step further.

> **A log is not only an after-the-fact record. It can become the central data structure of the agent runtime itself.**

### 1) Traceability as an execution model

The design looks similar to event-sourced systems:
- actions and state transitions go into an append-only log
- replay, fork, and audit become possible from that log
- observability and execution stop being separate add-ons and start sharing one substrate

So the concept changes from an **observable agent** to an **agent that runs directly on an observable structure**.

### 2) Why that matters for observability

Recent related lines in this wiki now form a layered picture:
- **OTel / Datadog** — standardized telemetry surfaces for tracing execution
- **AHE** — decision observability linking harness edits to outcomes
- **HarnessAudit / ProcBench** — auditing whole trajectories and processes
- **ActiveGraph** — using the log itself as a branchable runtime substrate

That means observability is no longer just dashboards and postmortems. It becomes a design principle for **state management, replayability, and auditability**.

### 3) The observability stack now has a clearer runtime-audit axis

| Layer | Question | Representative evidence |
|---|---|---|
| **Telemetry standard** | What do we record, and under what names? | OTel GenAI semantic conventions |
| **Operational diagnosis** | How do we read cost, latency, and failure modes? | Datadog |
| **Design observability** | Which harness change produced which result? | AHE |
| **Runtime auditability** | Can execution history be replayed, forked, and audited? | **ActiveGraph** |

### 4) Three practical ROI points for solo developers

1. For important agent workflows, design not just for “logging exists” but for **how far replay is possible**.
2. Append-only event sequences are more useful than ad hoc debugging notes when you later need auditability or reproducibility.
3. As long-running jobs and subagents increase, it is worth asking whether trace storage and state storage can share the **same history substrate**.

## Minimal implementation checklist

- [ ] apply a consistent policy for model-call metadata on spans
- [ ] split tool/MCP calls into separate child spans
- [ ] forbid raw PII in span attributes; use masking
- [ ] pin OTel SDK and semantic-convention versions, and review changes before upgrades

## Related pages

- [[concepts/llm-evaluation]] — quality measurement; stronger when connected to observability
- [[patterns/agent-server-harness]] — backend placement and observability hooks
- [[tools/vercel-workflow]] — platform-side workflow observability UI
- [[concepts/mcp]] — tool-path observability should be designed together
