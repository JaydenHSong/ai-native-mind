---
title: "Claude Managed Agents"
category: tools
tags: [managed-agents, anthropic, agent-platform, harness, sandbox, brain-hands]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-anthropic-managed-agents-launch.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
related:
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/agentic-engineering]]"
status: active
confidence: high
---

# Claude Managed Agents

## Easy Read

**Analogy**: Building an agent system from scratch is like launching a brand-new restaurant—you must handle the interior design, kitchen plumbing, food safety licenses, and POS billing system yourself. **Managed Agents** behaves like a **fully-serviced shared commercial kitchen**—the plumbing, safety certifications, and card terminals are already set up and operational, meaning you only need to **define your menu** to open for business. However, you must **adhere to the kitchen's rules** (using the Anthropic model family and their specific runtime conventions).

| Term | Explanation |
|------|------|
| **Brain** | Decision planning engine — Stateless Claude models + controller logic |
| **Hands** | Execution sandboxes — Single-use, **credential-free** ephemeral containers |
| **Session** | Bounded state memory — An **append-only event log** acting as a checkpoint |
| **Public Beta** | Ready for public production use, though officially marked as beta |

## One-Line Definition

Anthropic's **cloud-managed agent hosting platform**—integrating secure execution sandboxes, long-running conversational memory, scoped permissions, and end-to-end tracing out of the box, letting developers focus exclusively on **agent prompts, tool configurations, and system guardrails**. Launched in public beta on April 8, 2026.

## Core Architecture — Brain · Hands · Session

```
┌─────────────────────────────┐
│  Brain                      │   Claude + controller logic. Stateless.
│   ↑↓                        │   Seamlessly survives future model upgrades.
│  Session (append-only log)  │   ← External memory. The source of truth for recovery.
│   ↑↓                        │
│  Hands                      │   Sandbox container. Zero persistent credentials.
│   (tools, code execution)   │   Destroyed immediately after execution.
└─────────────────────────────┘
```

**Why Decouple Brain and Hands?**

- **Resilience**: If the Brain container crashes, a fresh instance immediately reads the Session's append-only log to pick up exactly where it left off, allowing **multi-hour sessions** to survive network disconnections.
- **Security**: Because sensitive persistent credentials are never passed down to the Hands container, **even if a prompt injection hijack triggers hostile code execution**, the agent cannot leak structural API keys or database tokens.
- **Model Agility**: Allows upgrading the model family (e.g., from Claude 4.5 to 5.0) without rewriting or re-deploying any of the underlying sandbox infrastructure.

## Key Features

- **Production-Grade Infrastructure**: Secure isolated sandboxes, robust authentication gates, and native tool execution environments configured by default.
- **Long-Running Sessions**: Executes autonomous workflows spanning hours, persisting state safely across connections.
- **Multi-Agent Coordination**: Allows orchestrating agent swarms where a primary agent spawns and directs specialized sub-agents dynamically (Research Preview).
- **Trusted Governance**: Scoped permission management, granular IAM identities, and complete execution traces recorded out of the box.
- **Outcome-Driven Execution**: Define only the raw outcome goals and success metrics, and let the agent self-evaluate and iterate on its plan (Research Preview). Boosted task success rates by **10 percentage points** in internal benchmarks.
- **Persistent Memory Support**: Stores persistent memory state inside workspace files on the container filesystem, easily exported or edited via API or Claude Console (Added April 23, 2026).
- **Unified Telemetry Console**: Scrutinizes tool call sequences, model logic steps, and failure modes in a single visual interface.

## Cost Structure

- **Standard Claude API token rates** (input/output).
- **+ $0.08 per session-hour** (accrued only during active execution).
- Charges map to **active runtime** rather than passive infrastructure provisioning.

Adds a new metric to [[patterns/ai-cost-management|AI Cost Management]]: session duration aggregation.

## Operational Workflow Summary

For details, refer to the [[patterns/agents-md-skill-md|Agent README and Skill Manual standard]] page. The minimal workflow is:

1. Define your agent's behavior, persona, and rules (in plain English or YAML) using the **Claude Console** or **CLI**.
2. Assign tools, safety guardrails, and outcome criteria.
3. Deploy $\to$ The Brain, Hands, and Session infrastructure automatically provisions in the cloud.
4. Audit execution steps in the Console.

Using the latest Claude Code terminal, simply run `"start onboarding for managed agents in Claude API"` to initialize a guided setup.

## Production Case Studies

| Organization | Core Use Case | Measured Impact |
|------|-------|-------------|
| **Notion** | Custom Workspace Agents (Private Alpha) | Executes dozens of planning tasks concurrently |
| **Rakuten** | Departmental Specialist Swarms | Deploys new specialist agents **in 1-week cycles** |
| **Asana** | Autonomous AI Teammates | Drastically accelerated advanced feature releases |
| **Sentry** | Seer Auto-Patching Agents | Slashed integration phase from **months to weeks** |
| **Atlassian** | Jira Auto-Assignment Routing | Cut deployment cycles from **months to weeks** |
| **Vibecode** | Prompt-to-Deploy Runtime | Accelerated client sandbox spin-up times by **10x** |

Other benchmarks report a **97% drop in first-pass errors** and **30% faster document verification pipelines**.

## Pros and Cons

| Advantages | Limitations |
|------|------|
| Secure, credential-isolated sandboxes by default | **Vendor Lock-in**: Hard-coupled to the Claude model ecosystem |
| Native multi-protocol support (MCP, A2A, Agent Protocol) | Yields granular control over routing policies and internal state |
| Immune to future model upgrade breakages | Session fees ($0.08/hr) accumulate for large fleets of long-lived agents |
| Beautiful, visually integrated debugging Console | Append-only event logs are great for recovery but harder to read manually |
| Cuts launch cycles from months to days | Many advanced features remain in research preview (outcome mode, multi-agent) |

## When to Adopt It

**Ideal For**:
- Solo developers aiming for rapid MVP launches, cutting **infrastructure dev time from weeks to days**.
- Applications where strict sandbox isolation and security are **hard requirements**.
- Platforms utilizing multi-protocol endpoints without wanting to build the transport layer from scratch.
- Architectures already optimized for the Claude model family.

**Avoid When**:
- Requiring heterogenous model orchestration (mixing GPT-4o, Gemini, or local models).
- Hard requirements for on-premise or self-hosted execution (regulated enterprise/government).
- Granular, domain-specific custom routing logic is required.
- Running large fleets of active, long-lived idle agents where hourly session costs become prohibitive.

## stacks Matrix

Within the 4-layer agent stack framework defined in [[concepts/harness-engineering|Harness Engineering]], Managed Agents occupies the **Upper-Middle** layer ("Platform owns deployment and runtime"). It bridges the gap between low-level frameworks (LangGraph/Agent SDKs) and high-level behavioral prompts + tools.

## Related Tools

- [[tools/deep-agents-deploy]] — The open-source, self-hosted platform alternative
- [[comparisons/managed-vs-deep-agents]] — Comparative analysis of Managed vs. Deep Agents

## References

- [Anthropic Managed Agents Launch (2026-04-08)](raw/articles/2026-05-01-anthropic-managed-agents-launch.md)
- [The 2026 Agent Stack Stratification Analysis](raw/articles/2026-05-01-agent-stack-2026-layers.md)
- [Anthropic Agent Skills Schema Specifications](raw/articles/2026-05-01-anthropic-agent-skills.md)
- [Claude Managed Agents — Anthropic Blog](https://claude.com/blog/claude-managed-agents)
- [Anthropic Managed Agents Documentation](https://platform.claude.com/docs/en/managed-agents/overview)
- [Anthropic Enterprise Persistent Memory (TestingCatalog)](https://www.testingcatalog.com/anthropic-launches-memory-in-claude-agents-for-enterprise)

## Chapter Clear Guide

- **Chapter**: Chapter 5 (Operations Boss Fight — Deploying Production Agents)
- **Quest**: Create a skeleton agent in the Claude Console, configure 1 custom MCP tool, add 1 outcome success criteria, and run the session.
- **Clear Condition**: Verify the agent successfully executes the tool and self-evaluates the output against your success criteria.
- **Next Quest**: Compare cloud vs. self-hosted options $\to$ Choose between Managed vs. Deep Agents in [[comparisons/managed-vs-deep-agents]].
