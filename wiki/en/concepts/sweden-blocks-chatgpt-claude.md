---
title: "Sweden Blocks ChatGPT and Claude on Government PCs — Uncontracted Use as an Information-Security Issue"
category: concepts
tags: [sweden, government, chatgpt, claude, copilot, ai-governance, procurement, information-security]
created: 2026-10-25
updated: 2026-10-25
sources:
  - "raw/articles/2026-10-25-sweden-blocks-chatgpt-claude.md"
related:
  - "[[concepts/us-banks-block-ai-agents]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/texas-sues-openai-altman]]"
status: draft
confidence: high
---

# Sweden Blocks ChatGPT and Claude on Government PCs — Uncontracted Use as an Information-Security Issue

## TL;DR

Sweden's Government Offices (Regeringskansliet) will block ChatGPT and Claude on staff work computers from Monday 2026-10-26, leaving Microsoft Copilot as the only approved assistant after a security review and tightened settings. The original report came from Sveriges Radio's Ekot on 2026-10-23, with English coverage spreading on 2026-10-24–25. The stated reason is not the models' danger but the absence of a formal contract for their use; some staff keep access to both models through an in-house platform.

## Key facts

- **Measure**: from 2026-10-26, browser access to ChatGPT and Claude ends on staff work computers. Personal phones and home PCs are outside the reported scope. Copilot passed after review and undisclosed security hardening.
- **Rationale**: digitalisation director Mikael Wettercrantz wrote on the staff intranet that using AI services without an agreement can have "consequences for our information security," citing cases of sensitive information entered into open services and mishandled AI outputs. The possibility of US-law compelled disclosure from external servers is part of the background.
- **Exception path**: some employees retain both models via an internal AI-assistant platform (reported as Intric); who and how many, and under what guardrails, is undisclosed.
- **Spread**: DeepSeek was already restricted. The Tax Agency (Skatteverket) and the National Board of Institutional Care (SiS) imposed similar bans; the Enforcement Authority (Kronofogden) is preparing a decision. A Transport Administration audit found roughly 10 open AI services in "widespread and risky" use.

## Why it matters

1. **Governance is about contracts, not models**: the approval test is the contract and configuration, not which model — the key checklist for anyone selling into institutions.
2. **Approved paths are a product opportunity**: the block leaves an internal-platform path open — "deliver models through a contracted path" is itself a business model.
3. **The public sector moves first**: the same gate grammar as the banks' agent blocks is spreading to government — approved path, contract, exception route as an emerging standard pattern.

## Limitations (explicit)

- Copilot's hardening details and the exception path's headcount and guardrails are undisclosed, so effectiveness cannot be verified.
- Personal devices and home PCs are out of scope, leaving a bypass route.
- Whether Sweden's Copilot instance has Claude models enabled is unconfirmed.
