---
title: "LiteLLM 1.107.0 PyPI Supply-Chain Compromise — .pth Persistent Backdoor"
category: concepts
tags: [litellm, pypi, supply-chain-attack, backdoor, pth-persistence, credential-theft, ai-infra-security, agent-supply-chain]
created: 2026-10-22
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-22-litellm-pypi-compromise.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/opencode-key-breach]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: high
---

# LiteLLM 1.107.0 PyPI Supply-Chain Compromise — .pth Persistent Backdoor

## TL;DR

litellm 1.107.0 was published to PyPI (2026-10-21) carrying a credential stealer and RCE backdoor — exposed for ~2 hours (11:39–13:23 UTC upload→removal; Docker images 11:46–14:20 UTC). All seven wheels carried three planted files; via `cook.pth` (loaded at Python startup) the payload ran on every Python process start without litellm ever being imported. Theft targets: SSH keys, cloud credentials, CI/CD secrets, AI tool tokens (Claude Code, Cursor, Codex), browser passwords, LLM provider keys in LiteLLM proxy DBs. Entry was a lookalike domain, www.litellm[.]dev; attackers used stolen GitHub CLI OAuth tokens from three engineers to abuse the official release pipeline, with the malicious fork `Berri-AI/litellm` (one hyphen off) recorded as the build source. Second LiteLLM supply-chain compromise of 2026 (March 1.82.7/1.82.8, TeamPCP-linked). Safe versions: 1.106.2, 1.107.0rc1/rc2.

## Key facts

- **Incident**: 10-21 litellm 1.107.0 — credential stealer + RCE backdoor on PyPI. ~2-hour window (11:39–13:23 UTC), Docker images (11:46–14:20 UTC). Three files planted in all seven wheels.
- **Persistence**: `cook.pth` — loaded at Python startup; runs on every Python process start without importing litellm. Beyond the reach of "pin your dependencies" advice.
- **Theft scope**: SSH keys, cloud credentials, CI/CD secrets, AI tool tokens (Claude Code, Cursor, Codex), browser passwords, provider keys in proxy DBs — an LLM proxy is "where provider API keys gather," a high-value target.
- **Intrusion path**: stolen GitHub CLI OAuth tokens from three engineers via lookalike domain www.litellm[.]dev → official release pipeline abused. Build source: malicious fork `Berri-AI/litellm`.
- **Repeat**: second of 2026 (March 1.82.7/1.82.8, TeamPCP-linked). Safe versions 1.106.2, 1.107.0rc1/rc2.

## Why it matters

1. **Pinning doesn't stop this**: the standard advice is "pin versions + verify hashes," but this attack poisoned the official release pipeline itself — pinned 1.107.0 *was* the malicious version. Defense moves one level up to release-integrity verification (signatures, provenance). The wiki's agent-supply-chain-security tier model needs a "release-pipeline trust" axis.
2. **`.pth` is a runtime-observability blind spot**: import tracking and dependency scans don't see `cook.pth`. From the agent-safety-runtime view, "what runs at process start" must be inspected too — agent sandboxes need start-of-life verification.
3. **AI tool tokens are the target**: the theft list names Claude Code, Cursor, and Codex tokens — token stores on developer machines (`~/.config`-style) must be treated as vaults. Tokens belong in secret managers, not env files.

## Limitations (explicit)

- Actual infection scale (downloads, victims) undisclosed.
- Attacker attribution (TeamPCP link etc.) unconfirmed — the March-incident connection is speculative.
- `cook.pth` detection/removal guidance is per the Datadog report — environment differences possible.