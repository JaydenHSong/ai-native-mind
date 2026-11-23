---
title: "Anthropic Donates Agent Skills to the Agentic AI Foundation (Linux Foundation)"
category: concepts
tags: [anthropic, agent-skills, linux-foundation, agentic-ai-foundation, mcp, skill-security, skill-md]
created: 2026-10-23
updated: 2026-11-23
sources:
  - "raw/articles/2026-10-23-anthropic-agent-skills-foundation.md"
  - "raw/articles/2026-11-23-agentic-ai-foundation-protocols.md"
related:
  - "[[concepts/mcp]]"
  - "[[patterns/agents-md-skill-md]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/llm-wiki]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/agentic-commerce-gemini-tasks-klarna]]"
  - "[[concepts/us-banks-block-ai-agents]]"
status: draft
confidence: high
---

# Anthropic Donates Agent Skills to the Agentic AI Foundation (Linux Foundation)

## TL;DR

On 10-22 Anthropic donated Agent Skills — the open SKILL.md-based standard that gives agents procedural knowledge and workflows — to the Agentic AI Foundation (AAIF) under the Linux Foundation, the same foundation it co-founded with Block and OpenAI that already received MCP. The donation covers the name/logo, GitHub org, and agentskills.io domain. Maintenance moves to engineers from Anthropic, Google, OpenAI and others acting as individuals (lead maintainers David Soria Parra and Mahesh Murag). Adoption figures are vendor-reported (70+ platforms, 1M skills, ~280M installs); nothing in existing SKILL.md files changes.

## Key facts

- **Scope of donation**: name/logo, GitHub organization, agentskills.io domain → AAIF.
- **Governance**: engineers from Anthropic, Google, OpenAI and others participate as individuals; lead maintainers David Soria Parra and Mahesh Murag.
- **Adoption** (vendor-reported, unverified): 70+ agent platforms (ChatGPT, Cursor, GitHub Copilot, VS Code) since the Dec 2025 publication; 1 million skills; ~280 million installs.
- **Roadmap**: versioned releases, a formal proposal process, and explicit security guidance — Anthropic's own guidance recommends auditing unfamiliar skills' scripts, dependencies, and network calls before installing (backdrop: a reported survey found 76 malicious skills in a ClawHub sample).
- **Origin**: Claude Code work (Oct 2025) — general knowledge was fine, but real business tasks lacked procedural knowledge.

## Why it matters

1. **Skills are now infrastructure**: the SKILL.md folder (name/description required, staged loading) is hardening into "the standard way to package agent knowledge." Package personal-wiki or project knowledge as skills and it becomes reusable across ChatGPT, Cursor, Copilot, and VS Code.
2. **Security guidance is coming**: the 76-malicious-skills finding pushed "security guidance" onto the roadmap. An audit checklist (scripts, dependencies, network) will soon be a standard document — prepare for it now.
3. **The neutral pair**: MCP (connectivity) + Agent Skills (knowledge) now sit under the same foundation. Two "USB-Cs" of agent engineering, both vendor-neutral — you can design the stack without vendor lock-in.

## 2026-11-22 update — competitors join hands to push shared agent protocols

- **The foundation's next step**: CoinDesk reported on November 22 that the AAIF — with OpenAI, Anthropic, Google, Microsoft and others participating — is pushing to build open protocols for autonomous AI agents. The backdrop is a warning that without unified standards, autonomous systems could quickly gridlock the digital world.
- **Donated technology**: Anthropic donated the Model Context Protocol (MCP), already in use on more than 10,000 public servers. OpenAI contributed the AGENTS.md framework, Block contributed goose, and Coinbase contributed the x402 payment protocol — x402 has already processed more than 138 million transactions.
- **Scale forecasts**: Animoca Brands chairman Yat Siu estimates up to 100 billion AI agents will trade online within a few years. Coinbase CEO Brian Armstrong claims agents will drive more than 99.9% of transactions within ten years. Both are forecasts and claims, not facts.
- **Caution**: SingularityNET CEO Ben Goertzel — shared protocols for agent-to-agent communication, identity, and security attestation are positive, but standardizing how agents work internally is not desirable. The distinction — "share the communication protocol, keep the internals autonomous" — is a core question in agent-governance design.
- **Background**: last week, Federal Reserve Governor Michael Barr warned that major banks had encountered AI agents acting inside retail accounts without verifiable customer consent or authenticity. A PYMNTS survey (October report): 63% of consumers allow agents to compare credit products, 49% allow them to fill out and submit applications under final approval.
- **Meaning**: if October's Agent Skills donation was the "neutralization of the knowledge standard," November's move extends the same logic to "communication and payment protocols under the foundation." [[concepts/mcp]], [[concepts/a2a-protocol]], and x402 now meet under one roof — directly connected to the agent-payment flows in [[concepts/agentic-commerce-gemini-tasks-klarna]].

## Limitations (explicit)

- The 70+ platforms / 1M skills / 280M installs figures are Anthropic's vendor claims — no independent verification. Confidence high applies to the donation facts, not the adoption numbers.
- The 76-malicious-skills figure comes from a ClawHub sample survey report; the methodology's representativeness is unconfirmed.
- Whether the foundation will curate a trusted skill registry is undecided — a watch item.