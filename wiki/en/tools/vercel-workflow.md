---
title: "Vercel Workflow (Workflow DevKit)"
category: tools
tags: [vercel, workflow, durable, typescript, agents, serverless]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md"
  - "raw/notes/2026-04-11-ai-sdk-durable-agent-workflow-research.md"
related:
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/agent-planning-to-implementation]]"
status: active
confidence: high
---

# Vercel Workflow (Workflow DevKit)

## Easy Read

**Analogy**: Traditional asynchronous background tasks can easily **abort halfway through** if a server unexpectedly reboots or times out. The Vercel Workflow Development Kit (WDK) solves this by **writing progress onto a ledger** at every major execution step. If the runner crashes, it picks up exactly where it paused, or halts resource consumption entirely while waiting for a human approval hook to wake it back up. In this context, `"use workflow"` and `"use step"` are compiler directives signifying: "This section is a checkpoint block that can be safely split and persisted."

| Term | Explanation |
|------|------|
| **Durability** | The capability to **persist execution state** so a function can resume gracefully after crashes |
| **Suspend** | Pausing the runtime loop to consume **zero active CPU cycles** while waiting for external triggers |
| **Webhook** | An external callback signal that **resumes** a suspended workflow |

## One-Line Definition

A Workflow Development Kit (WDK) that leverages typescript compiler annotations (**`"use workflow"`** / **`"use step"`**) to seamlessly convert standard asynchronous functions into highly durable, fault-tolerant execution workflows. Designed to provide language-level reliability without the overhead of manually managing queues, schedulers, and database persistence layers.

## Core Concepts

| Core Architectural Block | Functional Role |
|------|------|
| **`"use workflow"`** | Marks the primary entry point function orchestrating multiple sequential steps. |
| **`"use step"`** | Marks atomic operations. Handles retry configurations, checkpoints, and isolates the block into a **dedicated serverless API Route** at compile time. |
| **Suspend** | Yields execution during long-lived steps (e.g., waiting for LLM responses or human-in-the-loop approvals) without holding active serverless resource timeouts. |
| **Webhook** | Safely resumes a suspended workflow run upon receiving callback payloads, eliminating polling or custom queue architectures. |
| **Worlds** | Environment abstractions (Local, Vercel, Postgres, etc.) separating **execution, orchestration, and persistence**. Allows identical workflow code to be run locally or deployed seamlessly to the cloud. |

## Combining with the Vercel AI SDK (`streamText` / `Agent` → `DurableAgent`)

The official blueprint [Building Durable AI Agents](https://useworkflow.dev/docs/ai) details a step-by-step pathway to graduate a standard chat agent into a durable agent utilizing **Next.js, the AI SDK, and standard chat interfaces**.

### Seamless Integration Path from AI SDK

- The baseline AI SDK **`Agent`** (`experimental_Agent`) functions as a **convenience wrapper around `streamText`**.
- A typical serverless route streams responses via `agent.stream({ messages })` $\to$ processed by `createUIMessageStreamResponse` and consumed by the client-side `useChat` hook.

### The Durable Agent Transformation

1. Install the package via **`npm install workflow @workflow/ai`** and register **`withWorkflow`** (`workflow/next`) in your `next.config`.
2. Wrap your conversational agent logic inside a **`"use workflow"`** function (e.g., `chatWorkflow(messages)`).
3. Replace the standard `Agent` with a **`DurableAgent`** (`@workflow/ai/agent`). This forces all downstream LLM calls to execute as **durable workflow steps**, persisting intermediate tokens and outputs directly into the workflow context.
4. Stream tokens using **`getWritable<UIMessageChunk>()`** to capture a stream sink, executing `await agent.stream({ messages, writable })`. This token stream persists durably, and the active state can be queried or read at **any point in the run lifecycle**.
5. In the API route handler, initialize execution using **`start(chatWorkflow, [modelMessages])`** and feed **`run.readable`** directly to `createUIMessageStreamResponse`.
6. Annotate tool execution handlers with **`"use step"`**—in production, this isolates every tool call to run in a **separate worker container**, automatically retrying up to 3 times on failure and visualising tool metrics in the console.

### Visualizing Workflows Locally

Run **`npx workflow web`** to boot a local diagnostics dashboard displaying running instances, retry counts, and step-to-step data payloads.

### Reference Repositories

- **Starter Template**: The `plain-ai-sdk` branch of the `vercel/workflow-examples` repo (`flight-booking-app`).
- **Complete Blueprint**: The `main` branch of the same repository (covers Human-in-the-Loop, retry streams, and recovery states).

By modeling the agent as a **Workflow** and its tools as individual **Steps**, you gain unified management over session state, streaming tokens, and approval cycles.

## Positioning in the Agent Architecture

- **Replacing Custom Schedulers**: Replaces the custom job tables, queues, and background workers needed for the **Asynchronous Job (Pattern B)** outlined in [[patterns/agent-server-harness]], handling state persistence, retries, and resumes out of the box.
- **Human-in-the-Loop (HITL)**: Easily models human intervention steps using native Webhook triggers or sleeps, aligning perfectly with [[patterns/agent-planning-to-implementation]].
- **Telemetry Choices**: The platform automatically logs step inputs, outputs, pauses, and exceptions to a CLI/Web UI dashboard. Architects can choose to adopt this as their primary telemetry dashboard or export data to external OpenTelemetry collectors using [[concepts/gen-ai-observability|OTel]].

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Familiar async/await coding patterns—no rigid YAML state machines | Requires adopting Vercel's "Worlds" model and deployment constraints |
| Extremely robust, predictable resume-on-failure behaviors | Functions as an **orchestration runtime** rather than a feature-rich LLM framework |
| Seamlessly integrates with external Webhook events | Running times, cold starts, and cost boundaries are ultimately governed by serverless platform limits |

## Developer Resources

- **AI SDK Integration Guide**: [Building Durable AI Agents](https://useworkflow.dev/docs/ai)
- [DurableAgent API Reference](https://useworkflow.dev/docs/api-reference/workflow-ai/durable-agent)
- [Introducing Workflow (Vercel Blog)](https://vercel.com/blog/introducing-workflow)
- [Official Portal (useworkflow.dev)](https://useworkflow.dev/)
- [Vercel Workflow Repository](https://github.com/vercel/workflow)

## Related Concepts

- [[patterns/agent-server-harness]] — Synchronous, Asynchronous, and SSE agent server patterns
- [[concepts/harness-engineering]] — Designing Guides, Sensors, and runtime boundaries
- [[concepts/ai-orchestration]] — Idempotence, routing patterns, and Human-in-the-Loop (HITL) gates

## References

- [Vercel WDK & OTel Research Notes](raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md)
- [AI SDK & DurableAgent Research Notes](raw/notes/2026-04-11-ai-sdk-durable-agent-workflow-research.md)
- [Built-in durability: Introducing Workflow Development Kit (Vercel Blog)](https://vercel.com/blog/introducing-workflow)
- [Building Durable AI Agents Tutorial (useworkflow.dev)](https://useworkflow.dev/docs/ai)
