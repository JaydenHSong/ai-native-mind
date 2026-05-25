---
title: "OWASP LLM Top 10 × TypeScript Mitigation Patterns"
category: patterns
tags: [security, owasp, typescript, agents, zod, ai-sdk]
created: 2026-04-12
updated: 2026-05-01
sources:
  - "raw/notes/2026-04-12-security-typescript-corpus.md"
  - "raw/papers/owasp-genai-2025-llm-top-10.md"
  - "raw/articles/2026-05-01-prompt-injection-defense-2026.md"
  - "raw/articles/2026-05-01-dual-llm-camel-pattern.md"
  - "raw/articles/2026-05-01-owasp-asi-2026.md"
related:
  - "[[concepts/mcp]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/structured-output]]"
  - "[[tools/vercel-workflow]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
status: active
confidence: medium
---

# OWASP LLM Top 10 × TypeScript Mitigation Patterns

## One-Line Definition

A highly actionable, production-ready security checklist targeting key TypeScript runtime concerns from the **[OWASP LLM Top 10 (GenAI)](https://genai.owasp.org/llm-top-10/)** framework—combining tool schemas, execution limits, and strict system telemetry.

## Easy Read

**Analogy**: Think of **OWASP** as the official security task force detailing the most common hazard scenarios. Out of the global list, we focus heavily on **three critical items** here.  
**Zod** acts as a strict **verification template** written in TypeScript. Even if the LLM makes minor formatting errors, **only data matching the template** is allowed to enter your application's execution core.

| Term | Explanation |
|------|------|
| **Prompt Injection** | An exploit where malicious input tricks the model into bypassing its system prompt constraints (e.g., executing arbitrary code or exposing keys) |
| **Excessive Agency** | Giving the agent **excessive tool access, broad privileges, or long execution steps** |
| **Unbounded Consumption** | Allowing an agent to execute **unrestricted API runs** or compile infinite loops, triggering massive bills or Denial of Service (DoS) |
| **HITL** | Human-in-the-loop: Programmatically blocking sensitive actions until a human reviews and clicks "Approve" |

---

## Why Target These Three Vectors First?

Implementing the complete security index from day one can stall development velocity. When drafting agent backends in TypeScript, **these three vulnerabilities represent the most frequent points of failure**:

| Vulnerability ID | OWASP Target | In a Nutshell |
|----|------|--------|
| **LLM01** | Prompt Injection | Malicious user or RAG inputs bleed directly into **system prompts, shell runners, or SQL executions** |
| **LLM06** | Excessive Agency | The agent is granted **broad systems access or tool permissions** without boundary constraints |
| **LLM10** | Unbounded Consumption | **Uncapped token usage, API queries, or execution runs** trigger DoS or massive API expenses |

Remaining vulnerabilities (supply chain threats, training set poisoning, insecure output handling) are handled at the deployment CI/CD pipeline and via [[concepts/gen-ai-observability|System Telemetry]].

---

## LLM01 — TypeScript Mitigations

**Core Principle**: Never allow raw, unfiltered user input to interface directly with active OS commands. Implement strict schema layers (Zod) and decoupled model roles.

- **Message Segregation**: Segment system prompts, developer profiles, user prompts, and tool return payloads using strongly-typed messaging blocks (e.g., `CoreMessage` schemas). Never concatenate variables into a single flat prompt string.
- **Structured Data Pipelines**: Enforce structured outputs using tools like [Vercel AI SDK Object Generation (`generateObject`)](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data) coupled with **Zod validation schemas**. Relying on raw `generateText` parsing is unsafe. Refer to [[concepts/structured-output]].
- **Constraining Tool Inputs**: Restrict parameters within `tool({ inputSchema: z.object({...}) })` using strict type matches, strict length ceilings, and explicit enums.
- **Banning Arbitrary Evaluators**: Do not pass raw model outputs directly into shell executors like `exec` or `spawn`. Resolve and validate absolute file paths using `path.resolve` and verify jail boundaries.

---

## LLM06 — TypeScript Mitigations

**Core Principle**: Restrict the number of tool iterations and tightly define allowed tool suites.

- **`maxSteps` / `stopWhen` Bounds**: Set hard step limits within [Vercel AI SDK Tool Calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling) configurations to prevent runaway recursive calls.
- **Strict Tool Allowlists**: Define allowed tool directories as read-only constants in code. Do not dynamically map tool keys based on runtime payloads.
- **Human-in-the-Loop (HITL) Checkpoints**: Require manual approval hooks for transactions like database mutations, email dispatches, and key updates. Refer to [[tools/vercel-workflow]] and [[patterns/agent-planning-to-implementation]].
- **Secure Model Context Protocol (MCP)**: Enforce token validation and verify request origins according to the [MCP Authorization Spec](https://modelcontextprotocol.io/docs/tutorials/security/authorization). Refer to [[concepts/mcp]].

---

## LLM10 — TypeScript Mitigations

**Core Principle**: Set strict token budgets and configure middleware rate limiting to prevent runaways.

- **Edge Middleware Rate Limiting**: Implement strict IP, user account, or API key limits at the routing gateway (using packages like Upstash Rate Limit).
- **Hard Execution Budgets**: Enforce strict `maxTokens` ceilings and set tight connection timeouts on database hooks.
- **Telemetry Auditing**: Implement [Vercel AI SDK Telemetry](https://ai-sdk.dev/docs/ai-sdk-core/telemetry) paired with OpenTelemetry (OTel) to track per-request token costs and alert on spikes. Refer to [[concepts/gen-ai-observability]].

---

## 2026 Agentic Expansion: The OWASP ASI Taxonomy & CaMeL

The traditional LLM01/06/10 framework focuses primarily on single-call models. Autonomous, long-running agent workflows are governed by the **OWASP Top 10 for Agentic Applications 2026 (ASI01 to ASI10)**.

### Mapping ASI Vulnerabilities to TypeScript Harnesses

| ASI Target | Vulnerability Vector | Practical Mitigation |
|-----|------|----------------------------|
| **ASI01** | Goal Hijacking | Extend LLM01 $\to$ Isolate planning phases using **dual-LLM / CaMeL** architectures |
| **ASI02** | Tool Misuse | Strict Zod schemas $\to$ Sandbox runtimes via [[patterns/safe-tool-calling-sandbox]] |
| **ASI03** | Identity & Privilege Abuse | Brain/Hands segregation $\to$ Separate agent permissions (default in Managed Agents) |
| **ASI04** | Dynamic Runtime Composition | Supply Chain Security $\to$ Refer to [[concepts/agent-supply-chain-security]] |
| **ASI05** | Memory & State Manipulation | Untrusted Memory $\to$ Treat long-term memory inputs as untrusted payloads |
| **ASI06** | Inter-Agent Trust | Agent-to-Agent Security $\to$ Treat external agent communications as unauthenticated inputs |
| **ASI07** | Resource Hijacking | Unbounded runs $\to$ Deploy runtime cost guards and auto-compaction rules |
| **ASI08** | Cascading Failures | Runaway loops $\to$ Enforce ephemeral execution sandboxes with failure thresholds |
| **ASI09** | Human-Agent Trust Exploits | UX Transparency $\to$ Design clear visual verification steps (avoid anthropomorphism) |
| **ASI10** | Rogue Agents | Behavioral Drift $\to$ Track agent metrics and run automated regression evaluations |

---

## Layered Defense-in-Depth

Relying on a single security layer is insufficient. Securing complex agent swarms requires deploying a multi-layered defense stack:

```
┌────────────────────────────────────────────────────────┐
│  Layer 1: Structured schemas & Zod object validations  │
├────────────────────────────────────────────────────────┤
│  Layer 2: Edge middleware rate limits (e.g. Upstash)   │
├────────────────────────────────────────────────────────┤
│  Layer 3: Injection classification (PromptArmor)      │
├────────────────────────────────────────────────────────┤
│  Layer 4: Dual-LLM & CaMeL architectural segregation   │
├────────────────────────────────────────────────────────┤
│  Layer 5: Sandboxed execution (safe-tool-sandbox)      │
├────────────────────────────────────────────────────────┤
│  Layer 6: Human-in-the-Loop approval gates             │
└────────────────────────────────────────────────────────┘
```

---

## Architectural Segregation: The Dual-LLM / CaMeL Pattern

To secure the untrusted data tier defined in [[concepts/agent-supply-chain-security|Agent Supply Chain Security]], deploy a **Dual-LLM / CaMeL** architecture:

```
                            [ USER TRUSTED INPUT ]
                                      │
                                      ▼
                        ┌──────────────────────────┐
                        │   Primary Planner (P)    │  ← Has Tool Access
                        │   (OpenAI GPT-4o / Opus)  │
                        └─────────────┬────────────┘
                                      │
                                      │ Passes safe ref-id
                                      ▼
┌──────────────────────────┐    ┌─────────────┴────────────┐
│   Untrusted Source RAG   ├─-─▶│   Worker Evaluator (Q)   │  ← ZERO Tool Access
│   (Unfiltered Email/Web) │    │   (Haiku 4.5 / Flash)    │
└──────────────────────────┘    └──────────────────────────┘
```

- **P-LLM (Primary Planner)**: Interacts exclusively with trusted user instructions and orchestrates tool executions. It never directly digests unfiltered RAG contents or external email payloads.
- **Q-LLM (Worker Evaluator)**: Lacks tool-calling capabilities. It parses untrusted text inputs and maps the results to a structured `ref-id` dictionary.

*Security Guarantee*: This architecture mathematically cuts the pathway for prompt injection. Combining this segregation with a locked-down interpreter provides **provably secure execution** (averaging 77% task security success on AgentDojo).

### Minimal TypeScript Sketch

This sketch maps how to implement a minimal Dual-LLM pattern in TypeScript:

```typescript
import { generateText, Output } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

// P-LLM: Reads trusted user instruction only, outputs structured plan
const plan = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: userInstruction, // Trusted user input
  output: Output.object({
    schema: z.object({
      action: z.enum(["fetch_email", "summarize", "send_reply"]),
      ref: z.string(), // References target payload
    }),
  }),
});

// Q-LLM: Parses untrusted external data, has NO tool execution access
const parsedResult = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: `Summarize this external email payload: ${untrustedEmailContent}`, // Untrusted data
  output: Output.object({
    schema: z.object({
      summary: z.string().max(500),
    }),
  }),
});

// The untrusted payload summary is mapped by ref-id and is never parsed directly as executable code by P-LLM
```

For the complete implementation, refer to `examples/agent-safety-sketch/dual-llm.ts`.

---

## Interfacing with Harness Engineering

| Security Vulnerability | Harness Dimension [[concepts/harness-engineering]] |
|-----------|-------------------------------------------|
| **LLM01 / Injection** | **Guides** (Zod structures) + **Sensors** (Input filters) |
| **LLM06 / Agency** | **Guides** (Allowed toolsets) + **HITL** approval gates |
| **LLM10 / Consumption** | **Sensors** (Token metrics) + Edge rate limiters |

## Related Concepts

- [[patterns/agent-server-harness]] — Running secure background queues.
- [[concepts/mcp]] — Securing the tool execution boundary.
- [[concepts/gen-ai-observability]] — Tracking systems telemetry and performance.

## Chapter Clear Guide

- **Chapter**: Chapter 5 (The Secure Crypt)
- **Quest**: Identify the highest-risk vulnerability (LLM01, LLM06, or LLM10) inside your active backend application and write a mitigation blueprint.
- **Clear Condition**: Programmatically implement at least two concrete security controls (e.g., Zod schemas, step ceilings, or rate limiters) at the code level.
- **Reward (Deliverable)**: 1 Curated OWASP Security Mitigation Matrix.
- **Next Quest**: [[concepts/llm-evaluation]] $\to$ [[concepts/gen-ai-observability]].

## References

- [Security in TypeScript Curation Research Notes](raw/notes/2026-04-12-security-typescript-corpus.md)
- [OWASP LLM Top 10 Specification Papers](raw/papers/owasp-genai-2025-llm-top-10.md)
- [Prompt Injection Defense 2026 Analyses](raw/articles/2026-05-01-prompt-injection-defense-2026.md)
- [The Dual-LLM + CaMeL Structural Architecture Pattern](raw/articles/2026-05-01-dual-llm-camel-pattern.md)
- [OWASP ASI 2026 Specifications](raw/articles/2026-05-01-owasp-asi-2026.md)
- [OWASP GenAI Community Portal](https://genai.owasp.org/llm-top-10/)
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Simon Willison: Design Patterns for Securing LLM Agents](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/)
- [DeepMind CaMeL Paper (arXiv:2503.18813)](https://arxiv.org/abs/2503.18813)
- [Agent Safety Sketch Implementation Guide (examples/agent-safety-sketch/README.md)](../../examples/agent-safety-sketch/README.md)
- [Dual-LLM Implementation (examples/agent-safety-sketch/dual-llm.ts)](../../examples/agent-safety-sketch/dual-llm.ts)
