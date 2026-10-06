---
title: "Agent Authority Model — Grading Agent Permissions by Task (Logistics Reply LEA)"
category: patterns
tags: [agent-authority, governance, guardrails, autonomy-levels, logistics-reply, lea, operations]
created: 2026-10-05
updated: 2026-10-05
sources:
  - "raw/articles/2026-10-05-lea-ai-agent-authority-model.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: low
---

# Agent Authority Model — Grading Agent Permissions by Task

## One-line definition

A governance framework that grants AI agents not "maximum autonomy" but "the right authority for each task" — Logistics Reply's LEA AI Agent Authority Model: 4 stages of organizational maturity × 5 authority levels (Inform → Recommend → Act → Coordinate → Governed Autonomy).

## Core content

- Announced 2026-10-05 (Business Wire press release): Logistics Reply (the Reply group's supply-chain and warehouse-management specialist) unveiled it alongside LEA Reply Dynamic Intelligence.
- Two axes:
  - 4 stages of organizational AI maturity (early adoption → mature)
  - 5 authority levels: Inform → Recommend → Act → Coordinate → Governed Autonomy
- Core principle: "the ability to act does not, on its own, justify permission to do so."
- Application: decide what agents do, where, and under which guardrails, based on use case, context, and risk. Authority expands as operational evidence and trust develop.
- Practical link: LEA Dynamic Intelligence provides pre-built agents plus an agent builder — connecting the authority guidance to real warehouse operations.

## How to use it

1. Before deploying an agent into live operations, map each task to one of the five levels (e.g., inventory lookup → Inform, order proposal → Recommend, standard picking instruction → Act).
2. Cap the maximum allowable authority by the organization's maturity stage (e.g., no Act-level tasks during early adoption).
3. As evidence accumulates (operation logs, incident rates), raise authority one level at a time per task — make authority expansion a function of trust.
4. Combine with runtime guardrails ([[patterns/agent-safety-runtime]]): design-time authority grading + execution-time blocking as a double lock.

## Why it matters

This is agent governance moving from "principle declarations" to a "graded product." The same question reaches a solo developer building an agent service: "how far do we let this agent go?" Pre-defining the answer as a five-level table means you can answer "why this authority" to customers, auditors, and incident responders. Combined with [[concepts/ai-orchestration]]'s coordination structures, "who (coordination) + how far (authority)" becomes a complete operations design.

## Related concepts

- [[patterns/agent-safety-runtime]] — execution-time blocking (NVIDIA OpenShell/Sentry), the runtime enforcement of authority grades
- [[concepts/ai-orchestration]] — the six agent-coordination patterns, combined with authority grading
- [[concepts/agent-attribution]] — authority grades become the baseline for post-incident responsibility attribution

## Sources

- [Logistics Reply Introduces the LEA AI Agent Authority Model (Business Wire)](raw/articles/2026-10-05-lea-ai-agent-authority-model.md)
