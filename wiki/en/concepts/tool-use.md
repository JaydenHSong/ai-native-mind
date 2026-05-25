---
title: "Tool Use (Function Calling)"
category: concepts
tags: [tool-use, function-calling, llm, api, runtime-interface, skills, strict-schema, formal-skill, skill-state, policy-hooks, mcp-tooling, skill-first-api]
created: 2026-04-09
updated: 2026-05-23
sources:
  - "raw/notes/2026-04-09-tool-use-function-calling.md"
  - "raw/articles/2026-05-18-skillsmith-boundary-guided-runtime-interfaces.md"
  - "raw/articles/2026-05-21-formal-skill-programmable-runtime-skills.md"
  - "raw/articles/2026-05-23-harnessapi-skill-first-unified-mcp-http.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/structured-output]]"
  - "[[concepts/agent-supply-chain-security]]"
status: active
confidence: high
---

# Tool Use (Function Calling)

## Easy Read

**Analogy**: Instead of merely generating prose, the AI orders a external program to run a specific command via "**Hey, run this function with these exact arguments**." By exposing only explicit function names and type schemas (e.g., weather API, SQL DB query, local file read), the AI can interact with the external world safely and predictably.

| Term | Explanation |
|------|------|
| **Function Calling** | Providing the model a list of callable functions, letting it **select the target function** |
| **Schema** | A **manual** defining function names, parameter names, and data types |
| **MCP** | An open protocol that standardizes tool integration as a **universal port** |

## One-Line Definition

The foundational mechanism through which an LLM evaluates, selects, and invokes external functions/APIs, extending beyond pure text generation to interact dynamically with the physical world.

## Core Concepts

### Core Workflow Sequence

```
1. Developer: Defines tool parameters (name, description, input schema)
2. User: Issues a runtime prompt query
3. Model (Claude): Decides tool execution is required + returns tool_use block
4. Client Application: Executes the tool locally → returns tool_result block
5. Model (Claude): Synthesizes tool_result to generate the final response
```

### Positioning alongside [[concepts/mcp|MCP]]

MCP standardizes Tool Use into a **unified protocol layer**. Exposing tools via an MCP server makes them instantly reusable across all compliant client runtimes without custom wiring.

## Best Practices

### 1. Robust, Non-Interruptive Error Telemetry
```json
{
  "type": "tool_result",
  "tool_use_id": "toolu_xxx",
  "content": "File not found: /path/to/file",
  "is_error": true
}
```
Explicit error formats allow the model to interpret exactly *why* a tool call failed and programmatically plan a retry.

### 2. Computational Schema Validation
Always validate parameters against the JSON Schema on the client side *prior* to executing the actual API. Blocks broken or hallucinated arguments immediately.

### 3. Parsing-Friendly Structured Output
Ensure tool responses are formatted as clean, structured JSON so the model can digest semantic results efficiently.

### 4. Enforce Strict Schemas
Enable strict parsing modes (`strict: true`) to force the model to adhere exactly to the defined JSON schemas.

## Advanced Architectures

### Programmatic Tool Calling
Allowing the model to invoke tools directly **within its sandbox execution container**:
- Eliminates model API roundtrips for every sequential tool call.
- Drastically slashes latency in multi-tool workflows.
- Substantially reduces API token consumption.

### Dynamic Tool Search & Loading
Enables access to thousands of tools without exhausting the model's active context window. Implements semantic search to dynamically load only the subset of tool definitions required by the current step.

---

## 2026-05-18 Update — SkillSmith: Compiling Skills into Minimal Interfaces

[SkillSmith](https://arxiv.org/abs/2605.15215) (2026-05-12) challenges a core assumption of traditional skill frameworks. Typically, when a skill matches a runtime task, **the entire, verbose documentation guide** is injected directly into the reasoning loop. The study identifies two structural inefficiencies in this approach:
1. **Irrelevant Context Injection**: Prompt windows are cluttered with functional details unrelated to the active sub-task.
2. **Repeated Reasoning**: The model is forced to re-analyze and re-plan the skill mechanics on every sequential tool call.

### Offline Skill Compilation
SkillSmith introduces a **boundary-first compiler-runtime framework**:
- Analyzes skill packages **offline**.
- Extracts **fine-grained operational boundaries** from the skill code.
- Compiles these boundaries into **minimal executable interfaces**.
- Dynamically loads and targets only the necessary interfaces at runtime.

This compresses tool descriptions from prose guides into **highly dense, executable schema boundaries**:

| Metric | Quantitative Delta |
|---|---|
| Solve-Phase Token Volume | **-57.44%** |
| Reasoning Iterations | **-42.99%** |
| Wall-Clock Solve Time | **-50.57% (2.02x speedup)** |
| Total API Run Cost | **-57.44%** |

*Strategic Takeaway*: Optimal tool use is not merely a function of how many tools are exposed, but rather **how efficiently tool boundaries are compiled and exposed to the model at runtime**.

**3 Actionable ROI Actions for Solo Developers**:
1. Do not dump complete `SKILL.md` guides into system prompts. Compress them into **dense, single-line invocation contracts** matching the active step.
2. Leverage frontier models offline as **skill compilers** to generate minimal schemas, and deploy lightweight models at runtime to execute the compiled schemas.
3. Keep tool schema `description` values hyper-focused on **action boundaries** and hard type constraints rather than loose prose.

---

## 2026-05-21 Update — Formal Skills: Stateful Capability Objects

[Formal Skill](https://arxiv.org/abs/2605.19604) (2026-05-19) redefines the core abstraction unit of tool execution. While standard tool use focuses on stateless `name + description + input schema` interfaces, long-horizon agents require a more durable unit.
The paper notes the current ecosystem splits into two highly inefficient extremes:
- **Markdown-Based Instruction Packs**: Rich in procedures but verbose, unstructured, and non-enforceable.
- **Stateless Function Calling (MCP)**: Structurally clean but leaves workflow state and execution policies entirely outside the model boundary.

*The Solution*: Architect a **stateful, enforceable capability layer** sitting between the model and raw tools.

### The Formal Skill Schema
A *Formal Skill* is defined as a unified programmatic bundle:
- **JSON Metadata**: Operational definitions.
- **Action Schema**: Stateless tool interfaces.
- **Reliable Python Executor**: The physical runtime handler.
- **Hook-Governed Control Logic**: Interception rules (policies).
- **Skill-Local Runtime State**: Internal persistent variables.
- **Routing Support**: Inter-agent routing definitions.

Tools are thus elevated from single-use functions to **lightweight, stateful runtime objects governed by execution policies**.

### Compilation vs. Statefulness

- **SkillSmith (2026-05-18)**: Compresses raw markdown instructions into **compiled runtime interfaces**.
- **Formal Skill (2026-05-19)**: Enriches compiled interfaces into **stateful, executable capability objects**.

The unified maturity vector:
```
Markdown Instructions ──→ Compiled Interfaces ──→ Stateful Capability Objects
                                                     (State + Hooks + Executors)
```

By packaging tools as stateful state machines, we eliminate the need to repeatedly prompt the model with procedural steps. Tested on a *FairyClaw* runtime, this framework yielded competitive accuracy scores while drastically reducing token consumption.

**3 Actionable ROI Actions for Solo Developers**:
1. Replace verbose procedural text in `SKILL.md` files with structured **state variables, execution hooks, and exit conditions**.
2. When writing tool definitions, include parameters specifying **exit state criteria** and **post-failure recovery hooks**.
3. Treat MCP as the transport protocol, and position Formal Skills as the **work-unit abstraction layer** sitting directly on top.

---

## 2026-05-23 Update — HarnessAPI: Deployable Dual-Surface Capabilities

[HarnessAPI](https://arxiv.org/abs/2605.22733) (2026-05-21) pushes tool definitions to the operations layer. In actual production systems, a single business capability must expose **two distinct surfaces**:
- **An HTTP API**: Consumed by human operators, CI/CD runners, and standard microservices.
- **An MCP Tool**: Consumed programmatically by autonomous agent runtimes.

Maintaining separate routing, validation, serialization, and schema engines for these twin surfaces inevitably triggers **schema drift** and ballooning maintenance overhead.

### Skill-First Single Source of Truth
HarnessAPI solves this by establishing a unified strategic mandate: **Author a single, typed skill definition, and programmatically generate both the HTTP and MCP surfaces from it**.

A single HarnessAPI skill artifact automatically compiles and exposes:
1. **Server-Sent Events (SSE) Streaming Endpoints**.
2. **OpenAPI Speclists and Swagger UIs**.
3. **Zero-Configuration, Compliant MCP Tools**.

```
Single Source of Truth (Typed Skill Folder)
├── SSE Stream Endpoint
├── OpenAPI / Swagger UI
└── Zero-Configuration MCP Tool
```

This unified framing synthesizes our entire tool use roadmap:
1. **Compress** verbose documentation into minimal boundaries (SkillSmith).
2. **Enrich** boundaries with local state and execution hooks (Formal Skill).
3. **Expose** the resulting capability across both HTTP and MCP layers without boilerplate drift (HarnessAPI).

*Quantitative Impact*: Across 6 representative enterprise skillsets, HarnessAPI reduced framework-facing boilerplate code by **74%** compared to manual dual-stack (FastAPI + FastMCP) configurations.

**3 Actionable ROI Actions for Solo Developers**:
1. When designing new microservices, do not treat MCP as a separate codebase; architect it as an **alternative transport surface** sharing identical FastAPI/Pydantic schemas.
2. Prioritize **strict schemas and shared handler logic** over verbose, text-based descriptions.
3. Build a **single-source capability registry** to prevent agent interfaces and human APIs from drifting out of sync.

---

## Tool Execution Patterns

| Pattern | Functional Description | Production Example |
|------|------|------|
| **Single Tool** | Single invocation of a stateless capability | Querying real-time weather metrics |
| **Tool Chain** | Sequential pipeline where Output A $\to$ Input B | DB Query $\to$ E-mail draft serialization |
| **Parallel Execution** | Concurrent invocation of independent tools | Scanning multiple independent search APIs |
| **Conditional Routing** | Dynamic tool selection based on classification | Classifying intent $\to$ Routing to domain tool |

## Related Concepts

- [[concepts/mcp]] — The protocol standardizing tool interaction layers
- [[concepts/structured-output]] — Generating deterministic schemas via tool definitions
- [[concepts/ai-orchestration]] — Coordinating multi-agent systems via tool execution
- [[concepts/harness-engineering]] — Position of tools within the substrate harness

## References

- [Tool Use & Function Calling Curation Research Notes](raw/notes/2026-04-09-tool-use-function-calling.md)
- [Tool Use with Claude Official Guide (Anthropic)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- [Advanced Tool Use Best Practices (Anthropic)](https://www.anthropic.com/engineering/advanced-tool-use)
