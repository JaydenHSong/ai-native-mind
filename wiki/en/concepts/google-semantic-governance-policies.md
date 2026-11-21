---
title: "Google Semantic Governance Policies — Every Agent Tool Call Checked Before It Runs (Nov 20)"
category: concepts
tags: [google, gemini, agents, governance, security, prompt-injection]
created: 2026-11-21
updated: 2026-11-21
sources:
  - "raw/articles/2026-11-21-google-semantic-governance-policies.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/plan-then-verify-agent-planning]]"
  - "[[concepts/websites-block-ai-agents]]"
status: draft
confidence: low
---

# Google Semantic Governance Policies — Every Agent Tool Call Checked Before It Runs (Nov 20)

## Start here

**Analogy**: suppose you asked your AI assistant to send an email, but it picked up a hidden instruction and tried to send money somewhere strange instead. Google's new feature puts a checkpoint in front of every action: before the assistant acts, a separate check asks "does this action follow the rules, and does it match what was originally asked?" An action that fails the checkpoint never runs at all — it just gets a "no" back.

| Term | Meaning |
|------|------|
| **Tool call** | An agent executing an outside action, such as sending an email or deleting a file |
| **LLM judge** | Another AI that judges whether something follows the rules — the referee |
| **Indirect prompt injection** | An attack in which a hidden malicious instruction inside a document or web page the agent reads hijacks the agent |
| **Agent Gateway** | Google's gateway through which an agent's tool calls pass |
| **Defence in depth** | A security approach that stacks several layers, so if one layer is breached the next one still blocks |

## One-line definition

On November 20, 2026, Google released Semantic governance policies in preview on the Gemini platform. Through Agent Gateway, an LLM judge checks every tool call an agent proposes before it executes. The goal is to block tool calls hijacked by indirect prompt injection and social engineering before they run.

## Key points

- **How it works**: in Agent Gateway, an LLM judge evaluates each of the agent's tool calls before execution. It judges against two things — policies written in plain language by legal and compliance teams, and the user's original intent.
- **On failure**: a call that does not meet the criteria is replaced with a configurable denial message and never executes. Every judgement and its reasoning is recorded in Cloud Logging.
- **Supported models**: not only Gemini but also Anthropic and OpenAI-compatible models.
- **Positioning**: placed alongside IAM, Model Armor, and Agent Anomaly Detection as defence in depth. Indirect prompt injection and social engineering are the explicit targets.
- **Companion announcement**: the same day, Google also published a post extending Agent Anomaly Detection (Private Preview) to agents outside Google Cloud — AWS Lambda, Microsoft Foundry, and others — via OpenTelemetry traces and logs.

## Why it matters (solo-developer lens)

1. **"Check before executing" is becoming a production pattern**: it points the same way as [[concepts/plan-then-verify-agent-planning]]'s "deterministic verification before execution," except here the verifier is an LLM judge rather than a rules engine. It is a working implementation for the agent-security core problem — stopping injected or off-intent tool calls before they run.
2. **Policies written in plain language are the point**: when legal and compliance teams write policy in everyday words and that policy becomes the checkpoint's rule directly, the gap between the policy writer and the enforcement system shrinks.
3. **The judge is also an LLM — the irony**: because the checker is itself an LLM, the question remains whether the judge can be tricked. "Who watches the watchers" is a follow-up verification task — and as a preview, real-world effectiveness is not yet proven.

## Limits (stated explicitly)

- A single source (Google Developers Blog) and a preview stage. No independent measurement of real-world blocking effectiveness, false-positive rates, or latency yet.
- The announcement does not address the robustness of the LLM judge itself (whether the judge can be fooled by injection).
- confidence is low — a single-source vendor announcement at preview stage.

## Related concepts

- [[concepts/agent-supply-chain-security]] — trust models for external tools, skills, and agents, the broader concept behind pre-execution checks (2026-09-25)
- [[concepts/plan-then-verify-agent-planning]] — deterministic verification before execution, one repair, and safe abstention — a rules-based approach to the same problem (2026-11-01)
- [[concepts/websites-block-ai-agents]] — the platform agent-blocking flow, another axis of access control (2026-10-18)

## Sources

- [Google releases Semantic governance policies in preview — every agent tool call checked before it runs (Google Developers Blog, 11-20)](raw/articles/2026-11-21-google-semantic-governance-policies.md)
