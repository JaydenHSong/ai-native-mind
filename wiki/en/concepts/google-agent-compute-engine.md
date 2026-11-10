---
title: "Google Cloud Agent Compute Engine — Hardware-Isolated microVM per Agent Session"
category: concepts
tags: [google-cloud, agent-compute-engine, microvm, agent-sandbox, credential-isolation, agent-substrate, agntcon]
created: 2026-10-23
updated: 2026-10-23
sources:
  - "raw/articles/2026-10-23-google-agent-compute-engine.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/nvidia-openshell-reference-architecture]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
status: draft
confidence: high
---

# Google Cloud Agent Compute Engine — Hardware-Isolated microVM per Agent Session

## TL;DR

Google Cloud unveiled Agent Compute Engine (ACE) on 10-22 at AGNTCon+MCPCon: a purpose-built compute service that gives every AI agent session its own hardware-isolated microVM. The harness ("brain," calls the model) runs fully outside the sandbox; the sandbox ("hands," runs code/shell/browser) holds zero credentials — service tokens, API keys, and access secrets are injected onto the wire by a separate hardware layer the agent can never reach. Runs on Titan silicon + Titanium IPU with dm-verity stateless hosts; open-source sibling Agent Substrate runs the same architecture on any Kubernetes cluster (200,000 agents, <500ms suspend/resume). Customer preview "in the coming months"; no pricing.

## Key facts

- **Per-session microVM**: own guest kernel, root access, Hyperdisk storage. No standard network interface, no default gateway, no direct VPC access — all traffic via virtio-vsock to a local proxy, then an external gateway.
- **Credential separation**: the sandbox contains zero credentials by design; a separate hardware layer injects tokens onto the wire. The agent cannot reach the injection layer.
- **Four identities** per agent workload: User, Delegated on-behalf-of, Agent Workload Identity, Agent Workforce Identity.
- **Hardware**: Google-managed hosts, Titan silicon + Titanium IPU, stateless appliances with dm-verity-enforced read-only root filesystems; attestation keys live outside the guest.
- **Agent Substrate** (open source, any K8s): 500 activations/s, <500ms suspend/resume at 200,000 agents, ~10x density vs traditional compute (Substrate figures, not ACE).
- **Already in use**: Gemini as an agent for work tasks, Antigravity, internal eval and RL pipelines.
- **Industry convergence**: per TechTimes, the fourth cloud this year to converge on microVM isolation for agent compute — "containers are the wrong primitive for agents that handle untrusted content."

## Why it matters

1. **The strongest shipped answer to "how do you sandbox a code-executing agent"**: the harness-outside / sandbox-inside / no-credentials split is the design template for anyone deploying Claude Code, OpenClaw, or Hermes-class agents as services.
2. **Credential hygiene becomes architecture**: putting API keys in environment variables is an architecture violation under this model. The harness–sandbox–injection-layer split is becoming agent-security basics.
3. **The economics of idleness**: checkpointed microVMs drop to zero active resources and resume in <500ms — the infrastructure premise for the "patrolling agent" era (Duet-class always-on agents at 200k scale).

## Limitations (explicit)

- Customer preview "in the coming months" — no pricing, boot times, or SLA disclosed.
- The 10x density / 500 act/s figures are Agent Substrate numbers, not ACE's own published benchmarks.
- The "fourth cloud" convergence claim is TechTimes' framing; the other three were not comparatively documented.