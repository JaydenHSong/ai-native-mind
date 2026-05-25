---
title: "Harness Engineering Casebook & Anthropic Academy Study Map"
category: patterns
tags: [harness-engineering, case-studies, anthropic, curriculum, guides, sensors]
created: 2026-04-13
updated: 2026-04-13
sources:
  - "raw/notes/2026-04-13-harness-casebook-anthropic-academy.md"
  - "https://www.anthropic.com/learn"
  - "https://anthropic.skilljar.com/"
related:
  - "[[concepts/harness-engineering]]"
  - "[[patterns/harness-building-blocks]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[concepts/llm-evaluation]]"
  - "[[wiki/campaign-map]]"
status: active
confidence: medium
---

# Harness Engineering Casebook & Anthropic Academy Study Map

## Easy Read

**In a Nutshell**: The optimal layout of an agent harness varies based on **exactly what you are building (your domain context)**. This document provides a quick comparative matrix of Guides, Sensors, and Human-in-the-Loop architectures across various scenarios, and pairs these patterns with the official, free **Anthropic Academy curriculum** to map out a clear educational study path.

| Term | Explanation |
|----|----------|
| **Guides** | Pre-execution rules, templates, and schemas |
| **Sensors** | Post-execution verification linters, unit tests, and metrics |
| **HITL** | Human-in-the-Loop approval gates placed before critical execution points |

> Official Anthropic Learning Hub: [Anthropic Academy / Learn](https://www.anthropic.com/learn). Course registration is managed on the [Skilljar Catalog](https://anthropic.skilljar.com/).

---

## Why We Need a Casebook

While [[concepts/harness-engineering|Harness Engineering]] defines the core equation as **Agent = Model + Harness**, developers in the field often struggle to identify where the harness boundary resides within their specific stack. The matrix below outlines how **Guides, Sensors, and HITL configurations shift across 30 distinct production domains**.

*Design Note*: Quantitative values and ratios in this matrix serve as structural reference points to understand system topology, not rigid execution limits.

---

## Domain & Scenario Topology Matrix

*Reading Guide*: G = Guides (Feedforward), S = Sensors (Feedback), H = Human-in-the-Loop configuration.

| ID | Scenario / Domain | Guides (Feedforward) | Sensors (Feedback) | H / Risk Level Profile |
|---|---|---|---|---|
| 1 | Personal Wiki / Knowledge Base ([[patterns/llm-wiki]]) | Markdown schemas, templating conventions | Link linters, duplicate entry detectors | **HITL-On-the-loop** (Human refines rules) |
| 2 | Solo Developer SaaS CRUD | API schemas, RBAC constraints, design specs | Contract test passes, compile types | **HITL-On-the-loop** (Human signs off schemas) |
| 3 | Customer Support Assistant | Conversation tone rules, banned topics list, escalation paths | User satisfaction metrics, hallucination evaluations | **HITL-In-the-loop** (Human signs off high-risk calls) |
| 4 | Enterprise Retrieval-Augmented Generation (RAG) | Citation enforcement templates, chunking bounds | Citation validity checkers, golden Q&A verification | **HITL-On-the-loop** (Human curates knowledge base) |
| 5 | CI-driven Code Generation | Coding conventions, maximum PR size limits | Local compiler verification, security scans | **HITL-Out-of-the-loop** (Human reviews only on failure) |
| 6 | Dedicated Security Auditing | CWE auditing checklists, read-only system tools | Static application security tests (SAST) | **HITL-In-the-loop** (Human guards merge gate) |
| 7 | Notebook Data Analysis | Strict variable names, output formatting targets | Code reproducibility tests, data boundary checks | **HITL-On-the-loop** (Human owns data interpretation) |
| 8 | Multi-Tenant B2B Cloud | Tenant isolation policies, API key rotation cycles | Audit log monitors, rate quotas | **HITL-On-the-loop** (Human reviews policy changes) |
| 9 | High-Speed Text-Only Chat | Stripped system prompts, minimal system tools | p95 latency monitors, max token ceilings | **HITL-Out-of-the-loop** |
| 10 | Long-Running Offline Research | Multi-stage task templates, periodic summaries | Execution checkpoints, cancellation tokens | **HITL-On-the-loop** (Human adjusts direction) |
| 11 | Transaction Payments & Billing | Immutable business rules, double-check paths | Reconciliation scripts, amount verifiers | **HITL-In-the-loop** (Human approves transactions) |
| 12 | High-Risk Advice (Medical/Legal) | Scope boundary declarations, expert templates | Appeal/Exception tracking logs | **HITL-In-the-loop** (Enforced across almost all steps) |
| 13 | Legacy Codebase Refactoring | Module boundary constraints, banned files list | Regression tests, feature flags | **HITL-On-the-loop** (Low natural codebase harnessability) |
| 14 | Open-Source Contribution | CONTRIBUTING.md guidelines, issue templates | Project CI suites, Codeowner review rules | **HITL-In-the-loop** (Maintainer holds merge rights) |
| 15 | DevOps Runbook Execution | Command whitelists, strict execution directories | Real-time shell outputs, rollback hooks | **HITL-In-the-loop** (Human triggers production run) |
| 16 | Creative Content / Game Dialog | Lore bible constraints, explicit profanity lists | Narrative style consistency evaluators | **HITL-On-the-loop** |
| 17 | Translation & Localization | Curated glossaries, tone guides | Automated BLEU scoring, human sampling | **HITL-On-the-loop** |
| 18 | Docs-as-Code Pipelines | Markdown style rules, cross-reference links | Docusaurus compile passes, link checkers | **HITL-Out-of-the-loop** |
| 19 | Mobile API Backend | Idempotency token schemas, API version limits | Crash log capture, API retry metrics | **HITL-On-the-loop** |
| 20 | Edge / Serverless Functions | Cold-start execution budgets, hard timeouts | 429 rate limit exceptions, token cost triggers | **HITL-Out-of-the-loop** |
| 21 | Batch ETL Data Cleaning | Column schema definitions, batch size boundaries | Data drift monitors, anomaly sample tests | **HITL-On-the-loop** |
| 22 | MCP Internal Tool Integration | Tool schema definitions, OAuth token scopes | System audit trails, rate limit monitors | **HITL-On-the-loop** (Human reviews token rotation) |
| 23 | Simulating Sub-agent Swarms | Role configuration cards, handoff schemas | Collision monitors, conflict detectors | **HITL-On-the-loop** |
| 24 | Evaluator Regression Workflows | Version-locked golden datasets | PR gate evaluation scores | **HITL-Out-of-the-loop** |
| 25 | API Spend Safeguards | Dynamic model routing, prompt caching rules | Spending dashboard counters | **HITL-On-the-loop** |
| 26 | Regulatory PII Compliance | PII masking filters | Data retention rules, delete requests | **HITL-On-the-loop** |
| 27 | Real-Time Voice / Multimodal | Compressed context windows, restricted tools | Audio latency metrics, speech-to-text accuracy | **HITL-In-the-loop** (Hardware setup review) |
| 28 | Single-Repository Copilot | CLAUDE.md guidelines, custom slash commands | Static linters, unit tests | **HITL-On-the-loop** |
| 29 | Browser Automation Agents | DOM extraction selectors, step execution limits | Visual regression screenshots, diff captures | **HITL-In-the-loop** (Human handles auth gates) |
| 30 | Creative Copy A/B Testing | Experiment context structures, user exposure caps | Conversion and click-through analytics | **HITL-On-the-loop** (Human reviews ethics compliance) |

*The Structural Invariant*: The closer a system interfaces with **capital transactions, legal boundaries, production writes, and PII data**, the thicker its **Human-in-the-Loop (HITL-In) gates** and **Feedback Sensors** must be. Trivial document parsing or internal tools shift heavily toward **HITL-Out** and fast **Computational Sensors**.

---

## The Official Anthropic Academy Curriculum Map

This matrix maps courses available on Skilljar directly to core harness development milestones:

| Course (Official English Title) | Targeted Audience | Target Harness Dimension | Registration Path |
|---|---|---|---|
| **AI Capabilities and Limitations** | All roles | Model limit analysis $\to$ Setting Sensor targets | [Registration Portal](https://anthropic.skilljar.com/ai-capabilities-and-limitations) |
| **Claude 101** | General / Non-devs | Guides (Interaction conventions) | [Registration Portal](https://anthropic.skilljar.com/claude-101) |
| **AI Fluency: Framework & Foundations** | All roles | Policy layers (Norms vs. Guardrails) | [Registration Portal](https://anthropic.skilljar.com/ai-fluency-framework-foundations) |
| **AI Fluency for Students** | Students | Context guides & study feedback loops | [Registration Portal](https://anthropic.skilljar.com/ai-fluency-for-students) |
| **AI Fluency for Educators** | Academic staff | Classroom instruction harnesses | [Registration Portal](https://anthropic.skilljar.com/ai-fluency-for-educators) |
| **Teaching AI Fluency** | Instructors | Task evaluation and homework grading harnesses | [Registration Portal](https://anthropic.skilljar.com/teaching-ai-fluency) |
| **AI Fluency for Nonprofits** | Nonprofit roles | Operational impact and alignment guides | [Registration Portal](https://anthropic.skilljar.com/ai-fluency-for-nonprofits) |
| **Building with the Claude API** | Developers | Tool schemas & API exception handles as sensors | [Registration Portal](https://anthropic.skilljar.com/claude-with-the-anthropic-api) |
| **Introduction to Model Context Protocol** | Developers | **Tool Harnessing** foundations | [Registration Portal](https://anthropic.skilljar.com/introduction-to-model-context-protocol) |
| **Model Context Protocol: Advanced Topics** | Developers | Production transport, hosting, and sampling | [Registration Portal](https://anthropic.skilljar.com/model-context-protocol-advanced-topics) |
| **Claude Code 101** | Developers | Local engineering workspace constraints | [Registration Portal](https://anthropic.skilljar.com/claude-code-101) |
| **Claude Code in Action** | Developers | Shared team workflows and integration rules | [Registration Portal](https://anthropic.skilljar.com/claude-code-in-action) |
| **Introduction to Claude Cowork** | Information workers | Research loops, file handling, and workspace skills | [Registration Portal](https://anthropic.skilljar.com/introduction-to-claude-cowork) |
| **Introduction to Subagents** | Developers | **Orchestration & Context Isolation** | [Registration Portal](https://anthropic.skilljar.com/introduction-to-subagents) |
| **Introduction to Agent Skills** | Developers | Packaging reusable Guides and constraint layers | [Registration Portal](https://anthropic.skilljar.com/introduction-to-agent-skills) |
| **Claude with Amazon Bedrock** | Cloud Architects | Enterprise deployment & security harnesses | [Registration Portal](https://anthropic.skilljar.com/claude-in-amazon-bedrock) |
| **Claude with Google Cloud's Vertex AI** | Cloud Architects | Enterprise cloud governance | [Registration Portal](https://anthropic.skilljar.com/claude-with-google-vertex) |

*Supplemental Code Assets*: The official [anthropics/courses GitHub repository](https://github.com/anthropics/courses) contains accompanying Jupyter notebooks for API routing, evaluation setups, and tool calls.

---

## Strategic Learning Paths

### Track A — Developer Core (Primary Track)
1. AI Capabilities and Limitations
2. Building with the Claude API
3. Introduction to Model Context Protocol $\to$ Advanced Topics
4. Introduction to Subagents $\to$ Introduction to Agent Skills
5. Claude Code 101 $\to$ Claude Code in Action
6. *Deep Dive Wiki Integration*: [[patterns/agent-server-harness]], [[concepts/gen-ai-observability]], [[patterns/owasp-llm-typescript-mitigations]]

### Track B — AI Fluency Track (Non-Technical & Educational Roles)
1. AI Fluency: Framework & Foundations
2. Claude 101
3. Select exact functional match: AI Fluency for Students / Educators / Nonprofits / Teaching AI Fluency
4. Run in parallel with Claude 101

### Track C — Cloud Systems Architect
- Complete Track A (Steps 1 through 3)
- Register: Claude with Amazon Bedrock **or** Claude with Google Cloud's Vertex AI (matching your enterprise cloud provider)

### Track D — The 4-Week Accelerated Blueprint

| Week | Anthropic Academy Core | Wiki Cross-Study Matches |
|---|---|---|
| **Week 1** | API + Capabilities & Limitations | [[concepts/context-engineering]], [[concepts/harness-engineering]] |
| **Week 2** | Model Context Protocol (Intro to Advanced) | [[concepts/mcp]], [[patterns/safe-tool-calling-sandbox]] |
| **Week 3** | Claude Code + Subagents + Skills | [[patterns/subagents-delegation]], [[patterns/claude-md-guide]] |
| **Week 4** | Cowork / Enterprise Cloud Modules | [[patterns/agent-server-harness]], [[concepts/gen-ai-observability]] |

---

## Depth Exploration

- [[concepts/harness-engineering]] — Foundational theory, loops, Fowler models, and Anthropic guides.
- [[patterns/harness-building-blocks]] — Hands-on examples of coding Guides and Sensors.
- [[patterns/agent-server-harness]] — Deploying persistent backend runtimes.
- [[patterns/safe-tool-calling-sandbox]] $\leftrightarrow$ [[patterns/owasp-llm-typescript-mitigations]] — Securing the tool harness boundaries.
- [[concepts/gen-ai-observability]] $\leftrightarrow$ [[concepts/llm-evaluation]] — Extending Sensors to trace metrics.

## Chapter Clear Guide

- **Chapter**: Chapter 5 Depth (Elective Quest)
- **Quest**: Review the Scenario Topology Matrix and select the **3 scenarios closest to your active software project**. Fill out the explicit Guides, Sensors, and Human-in-the-Loop choices for your application.
- **Clear Condition**: Complete at least **2 core developer courses** from Track A, and programmatically deploy at least 1 Guide or Sensor in your workspace.
- **Reward (Deliverable)**: 1 Curated Harness Design Blueprint Card.
- **Next Quest**: Review [[concepts/harness-engineering]] $\to$ Proceed to [[patterns/agent-server-harness]].

## References

- [Anthropic Academy Portal](https://www.anthropic.com/learn)
- [Anthropic Skilljar Catalog](https://anthropic.skilljar.com/)
- [Anthropic Courses Jupyter Notebooks GitHub Repository](https://github.com/anthropics/courses)
- [Martin Fowler: Harness Engineering Analysis](https://martinfowler.com/articles/harness-engineering.html)
