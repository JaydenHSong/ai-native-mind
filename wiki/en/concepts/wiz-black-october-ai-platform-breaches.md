---
title: "Wiz 'Black October' — Credential Breaches at Nine AI Developer Platforms and LLMjacking"
category: concepts
tags: [wiz, security, supply-chain, llmjacking, api-keys, agent-security]
created: 2026-10-31
updated: 2026-10-31
sources:
  - "raw/articles/2026-10-31-wiz-black-october-ai-platform-breaches.md"
related:
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/opencode-key-breach]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
status: draft
confidence: high
---

# Wiz 'Black October' — Credential Breaches at Nine AI Developer Platforms and LLMjacking

## TL;DR

Wiz Research's October 30, 2026 "Black October" roundup counts nine AI developer platforms that disclosed credential breaches during October 2026. The common thread is not a shared vulnerability but a shared target: stored environment variables holding customers' AI provider keys, which were validated within 30 minutes and resold as inference (LLMjacking).

## Key facts

- **The nine**: Fireworks AI (Oct 6), Andromeda (Oct 9), Zeabur (Oct 14), Lightning AI (Oct 15), OpenCode (Oct 16–17), Railway (Oct 20), Warp (Oct 23), CommandCode (Oct 28), Northflank (Oct 30).
- **Attack pattern**: Fireworks, OpenCode, and Warp reported signs of an "agent swarm" attack; OpenCode and CommandCode attributed theirs to "distillation" attempts. Root causes differ (credential access, build-infra privilege escalation, a third-party dependency, a legacy system), but every public report describes hunting stored environment variables, especially AI provider keys.
- **Measured downstream abuse**: two enterprise Amazon Bedrock keys were traced — about 800,000 calls in about 30 hours (about 90% success, about three quarters of successful calls on Opus models) and about 1.7 million calls in about 13 hours — over $100,000 at list price combined. Keys were first validated within 30 minutes of the reported credential access.
- **Disclosed blast radius**: Railway said at most 1.85% of workspaces (about 100,000) had environment variables potentially compromised; OpenCode's breach reached a legacy Console system holding keys saved by about 1.4% of Console users. Zeabur announced it will shut down, citing the incident.
- **Resale chain**: Wiz names two resale operations, "momo" and "Xingjiabi," that tested the stolen keys. Wiz does not claim a single actor behind all nine incidents, and the link between the resale infrastructure and the initial compromises is unproven.

## Why it matters

1. **The attack surface is the intermediary, not the model**: in the agent era, the security bottleneck is the platform holding the keys. Long-lived keys sitting in build, deploy, and CI systems are the asset.
2. **The 30-minute rule**: with validation inside 30 minutes of theft, key-compromise response must be automatic revocation, short-lived keys, and scoped permissions — not "rotate later."
3. **LLMjacking economics**: stolen keys are monetized through resale markets, so inference spend is the attacker's revenue. A usage spike alarm doubles as a security detector.

## Limitations

- The Wiz post was confirmed through secondary summaries; figures should be checked against the primary post before being treated as final.
- No platform has published the total number of customer keys taken. Most root causes are still under investigation.
- Grouping the nine as one coordinated campaign contradicts Wiz's position; only Railway used the word "campaign."
