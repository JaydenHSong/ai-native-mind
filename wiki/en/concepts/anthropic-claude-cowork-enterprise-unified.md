---
title: "Anthropic's Unified Claude for Enterprise — On by Default November 16"
category: concepts
tags: [anthropic, claude, cowork, enterprise, cloud-sandbox, agent]
created: 2026-10-26
updated: 2026-10-26
sources:
  - "raw/articles/2026-10-26-anthropic-claude-cowork-enterprise-unified.md"
related:
  - "[[concepts/claude-duet-proactive-agent]]"
  - "[[concepts/google-workspace-mcp-agentic-oauth]]"
  - "[[tools/gemini-agent-work]]"
status: draft
confidence: high
---

# Anthropic's Unified Claude for Enterprise — On by Default November 16

## TL;DR

Anthropic made its unified Claude chat-and-Cowork experience generally available to Enterprise customers on October 23. Every conversation starts as a chat; when a task needs code execution or file work, Claude continues the same conversation in an isolated Anthropic-managed cloud sandbox, then returns the finished work for review. For existing organizations the capability is off by default and turns on by default on November 16. It extends to Enterprise the unified experience Pro and Max received in September.

## Key facts

- **How it works**: "Every conversation starts as a chat, and when a task needs to run code or work with files, Claude continues the same conversation in an isolated cloud sandbox managed by Anthropic, then returns the finished work for review" (Anthropic support page). No mode to choose up front. The same conversation works across web, desktop, and mobile, and agentic tasks continue in the cloud after the laptop closes.
- **Timeline**: existing organizations have it off by default today; it turns on by default on November 16, 2026, unless an owner keeps it disabled. Early enablement is possible. Both chat and cloud code execution must be enabled.
- **Isolation and permissions**: each agentic conversation gets an isolated virtual machine. For Enterprise, network access from the sandbox is disabled by default, and connector credentials stay outside the sandbox. Existing sign-in and compliance controls (SSO, Compliance API) continue to apply. Existing chats, projects, connectors, skills, and plugins carry over.
- **Cost controls**: usage-based pricing continues. A new Efficient mode restricts the unified experience to Sonnet and Haiku models, giving administrators another spending lever alongside organization, group, and individual limits.
- **Exclusions**: organizations using zero data retention, Anthropic's HIPAA-ready configuration, or customer-managed encryption keys stay on their current setup — not part of the unified rollout.
- **Sequence**: September 16 unified launch for Pro and Max → October 23 Enterprise general availability. The same week's Duet research preview (October 21) extends the 'always-on, cloud agent' lineup on a separate track.

## Why it matters

1. **Execution location moves**: work runs on the provider's cloud, not the user's machine — location becomes the boundary for security, cost, and persistence.
2. **Default flips are policy decisions**: a November 16 default-on is not a choice but a refusal-to-be-made — for enterprise agent adoption, the default date is the decision date.
3. **The chat/work boundary dissolves**: when chat and agent work share one conversation, approval gates (what runs alone, what asks first) must live inside the conversation.

## Limitations (explicit)

- The exclusions matter: zero-retention, HIPAA-ready, and CMEK organizations are not covered — this is not "all of Enterprise."
- Sandbox network is off by default, but actual per-connector egress policy depends on organization settings.
- Usage-based pricing figures are undisclosed — Efficient mode's savings are not quantified.