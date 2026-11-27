---
title: "Samsung SPAC — A Private Cloud for Galaxy AI (Found in One UI 9.5 Code)"
category: concepts
tags: [samsung, galaxy-ai, spac, private-cloud-compute, privacy, confidential-computing, one-ui, agents]
created: 2026-11-27
updated: 2026-11-27
sources:
  - "raw/articles/2026-11-27-samsung-spac-private-ai-cloud.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[concepts/openai-private-inference-alpha-trials]]"
status: draft
confidence: low
---

# Samsung SPAC — A Private Cloud for Galaxy AI (Found in One UI 9.5 Code)

## Start here

**Analogy**: When your phone asks a hard question of a "smart friend" (a cloud server), the friend usually also learns who asked. SPAC hands the question to a middleman (a relay) first, so the server sees what was asked but not who asked it. Like putting a letter in an envelope and handing it to a courier — the contents are visible, but the sender is not.

| Term | Meaning |
|------|------|
| **SPAC** | Samsung's private-cloud AI framework — not officially announced, found only in code |
| **Private cloud compute** | A design where the cloud server does the computing without linking the request to who sent it (Apple introduced it first in 2024) |
| **Attestation** | The phone verifying that the server's software has not been tampered with — checking the server's "certificate of trustworthiness" |
| **Relay** | An intermediary server that forwards requests, hiding the sender's identity |

## One-line definition

Samsung's private-cloud AI framework "SPAC", discovered in code analysis of One UI 9.5 Beta 1 (Galaxy S26 Ultra) on 2026-11-26 — the same design as Apple Private Cloud Compute, aimed at anonymizing Galaxy AI cloud features. Samsung has not announced it; it is disabled in the beta.

## Key points

- **Where it was found**: the SPAC SDK exists inside four apps in One UI 9.5 Beta 1 — Photo Editor, IntelliVoiceService (voice and language services), Smart Capture, and PhotoRemasterService. The server-side gateway is named "Arcane", and separate token, identity, and fraud-detection services are mentioned.
- **Privacy design (code-based)**: (1) requests pass through a third-party relay, so Samsung can see what was asked but not who asked it. (2) The phone verifies the server software has not been tampered with (attestation). (3) Server behavior is recorded in a public log that cannot be quietly changed. (4) Devices authenticate with anonymous one-time passes, without revealing the user. An "unattested" mode that skips some checks also exists but appears to be for internal testing.
- **Models mentioned**: Google Gemma 4, Alibaba Qwen 3.6, Black Forest Labs FLUX.2 klein 4B, and Samsung's own Gauss. These are code references only; actual use is unconfirmed.
- **Connected features**: much of Galaxy AI's cloud functionality — AI Select, cloud photo erase and upscale, real-time translation, Writing Tools, Now Brief, Daily Briefing, Bixby Work, and more.
- **Status**: disabled in the beta, with no user-facing settings or consent screens. Backend preparation is underway: SPAC server addresses have been updated in the public certificate log and a US relay has been added. November 27 update: Android Authority succeeded in getting SPAC to run in a limited way alongside AI Select on the Galaxy S26 Ultra.

## Why it matters

1. **Convergence on private compute**: together with OpenAI's Private Inference alpha the same week ([[concepts/openai-private-inference-alpha-trials]]), the on-device vs cloud dichotomy is being resolved into a third option — the "anonymous cloud" — converging across Samsung, OpenAI, and Apple. It adds an "anonymous cloud" row to the residence axis in [[concepts/agent-residence]].
2. **Adoption of a proven recipe**: the design is assessed as following Apple Private Cloud Compute (2024, iOS 18) almost exactly — a port of a verified design rather than Samsung's own invention. For privacy design, following a publicly verified approach is the industry's fast path.
3. **A hint about the model supply chain**: Gemma, Qwen, FLUX.2, and Gauss are mentioned together in the code — suggesting Samsung may source Galaxy AI's cloud models from multiple suppliers rather than one company. These are code references only; actual use is unconfirmed.

## Limitations (explicit)

- Samsung has not announced it — everything rests on One UI 9.5 beta code analysis (a single source, Android Authority). The official name, launch date, and scope are all unconfirmed.
- The mentioned models (Gemma 4, Qwen 3.6, FLUX.2 klein 4B, Gauss) are code references only; actual use is unconfirmed.
- The "unattested" mode appears to be for internal testing, but whether verification can be bypassed in the real product is unconfirmed.
- The November 27 update — SPAC running with AI Select — is Android Authority's limited experiment, not an official feature.

## Related concepts

- [[concepts/agent-residence]] — agent residence forms; the anonymous cloud is a third option between local and cloud
- [[concepts/openai-private-inference-alpha-trials]] — OpenAI's private inference alpha the same week; convergence on private compute

## Sources

- [Samsung preparing private cloud 'SPAC' for Galaxy AI — found in One UI 9.5 code (Android Authority, Nov 26)](raw/articles/2026-11-27-samsung-spac-private-ai-cloud.md)
