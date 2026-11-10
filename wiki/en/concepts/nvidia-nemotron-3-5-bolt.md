---
title: "NVIDIA Nemotron 3.5 Bolt — the Open-Weight Agentic Model for RTX Spark"
category: concepts
tags: [nvidia, nemotron, bolt, open-weights, agentic-ai, rtx-spark, edge-ai, quantization, mcp, pair]
created: 2026-10-14
updated: 2026-10-14
sources:
  - "raw/articles/2026-10-14-nvidia-nemotron-3-5-bolt-rtx-spark.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: medium
---

# NVIDIA Nemotron 3.5 Bolt — the Open-Weight Agentic Model for RTX Spark

## Start here

**Analogy**: an open-source model born to do nothing but agent work, fitting entirely on a single gaming GPU (24GB). Model → executor → notebook from one company: the opening shot of the "agent-PC era."

| Term | Meaning |
|------|---------|
| **74B-A9B (MoE)** | 74B total parameters with only 9B active per token — Mixture of Experts structure |
| **2-bit quantization-aware training** | Trained from the start assuming 2-bit compression — the secret behind the 24GB footprint |
| **PAIR** | Personal AI Router — a free, open-source router distributing AI workloads across PCs on a LAN |

## One-line definition

NVIDIA's 2026-10-13 launch of the agentic-AI-focused open-weight model **Nemotron 3.5 Bolt** (74B-A9B) plus the RTX Spark launch-week software stack — a "local-agent" model fitting in 24GB via 2-bit quantization, coupled with edge execution infrastructure.

## Key content (2026-10-13 announcement)

### Nemotron 3.5 Bolt — specs

- **74B-parameter MoE, 9B active per token** — 2-bit quantization-aware training → **24GB footprint**.
- Purpose: **purpose-built for agentic AI**. **Fully open source** — weights, training data, and recipe all public.
- Release: **10/15** — via llama.cpp, vLLM, Ollama, Unsloth, LM Studio; access through Hermes and OpenClaw.
- The smaller **Nemotron 3.5 Bolt E4B** (for conversational agents and game NPCs) follows on **10/23**.

### PAIR — out of beta

- **Personal AI Router** graduates from beta. **Free and open source**.
- Distributes workloads across PCs on a LAN. Adds **llama.cpp + Hugging Face download** support.

### RTX Spark hardware + MCP

- **RTX Spark laptops** go on sale 10/16 — Grace CPU + Blackwell GPU, **up to 128GB unified memory**, **~1 petaflop** AI compute.
- **Broadcast 2.3** ships with a built-in MCP server. NVIDIA provides MCP servers for its own **apps, Broadcast, PAIR, RTX Remix, and Omniverse** directly — standardization of its software stack on MCP.

## Why it matters

1. **The finished form of the open-weight agent stack**: one company supplies everything — model (Nemotron) → router (PAIR) → hardware (RTX Spark) → protocol (MCP servers). The Western, consumer version of [[comparisons/frontier-lab-economics]]'s "hardware vertical integration" (DeepSeek-Ascend stage 3).
2. **24GB = the consumer-GPU entry line**: a 74B-class agent model on a single gaming GPU — the practical threshold for local agents drops. The moment [[concepts/agent-residence]]'s "local residence" axis gets a physical form.
3. **The platformization of MCP**: NVIDIA builds MCP servers into all of its own apps — "the USB-C of AI" begins to become default spec for hardware vendors. Overlaps the same week with the 10/13 reinforcement of [[concepts/mcp]] (Workspace MCP).
4. **The runtime boundary expands**: when a fully open-source agentic model spreads onto consumer hardware, the enforcement target of [[patterns/agent-safety-runtime]] widens from data centers to the edge — the same problem space as the day's AI-worm research.

## Limitations (explicit)

- The core products are **unreleased** (10/15 model, 10/16 laptop, 10/23 E4B) — specs and schedule are as announced.
- Sources are secondhand media (Tech Times, Gadget Pilipinas) — the primary NVIDIA announcement needs direct confirmation.
- confidence **medium** retained.

## Related concepts

- [[comparisons/frontier-lab-economics]] — open-weight distribution capture + the Western version of hardware vertical integration
- [[patterns/agent-safety-runtime]] — the widening enforcement target as open agentic models spread to the edge

## References

- [NVIDIA RTX Spark launch week — Nemotron 3.5 Bolt announcement (Tech Times, Gadget Pilipinas, 10/13)](raw/articles/2026-10-14-nvidia-nemotron-3-5-bolt-rtx-spark.md)
