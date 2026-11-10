---
title: "Block Dessa — A Full-Duplex Voice AI Trained on Speech Alone"
category: concepts
tags: [block, dessa, voice-ai, speech-to-speech, full-duplex, local-inference]
created: 2026-10-25
updated: 2026-10-25
sources:
  - "raw/articles/2026-10-25-block-dessa-speech-only-voice.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/tool-use]]"
  - "[[concepts/moonshot-kimi-k31-pro]]"
status: draft
confidence: high
---

# Block Dessa — A Full-Duplex Voice AI Trained on Speech Alone

## TL;DR

Block unveiled Dessa on 2026-10-23, with coverage spreading on 2026-10-24: a speech-to-speech model trained from scratch on human conversation only — no text, no pretrained models — that listens while speaking, handling interruptions, laughter, and backchanneling. Block says it trained on a single NVIDIA GB200 NVL72 system, learned language from "hundreds of times fewer words" than a text LLM, and runs locally on a MacBook Pro with M4 Max or better. It is a research preview behind a waitlist, with no parameter count, API, price, or benchmarks published; the evidence so far is Block's own demo recordings.

## Key facts

- **Architecture**: audio in, audio out, with no transcription step. The design premise is that converting speech to text discards emotion, timing, and tone that text alone cannot carry.
- **Training efficiency claim**: "hundreds of times fewer words" than a text LLM needs, on a single GB200 NVL72 rack — speech carries thousands of times more bytes per word than print, which Block says made training harder, not easier.
- **Execution**: faster-than-real-time inference; local execution claimed on M4 Max MacBook Pro or better. Built by a small Block research lab founded by former members of Toronto startup Dessa, led by Ragavan Thurairatnam and reporting directly to Jack Dorsey, with 8+ years of generative speech work.
- **Availability**: research preview with a waitlist; early access first to a small group of AI safety researchers to surface unforeseen risks. No parameter count, API, pricing, weights, or benchmarks published.
- **Demos and reaction**: unsteered live conversation recordings, including one with OpenAI's GPT-Live-1 (whose developer has not vetted or endorsed Dessa). The Verge found the demos mostly natural but occasionally awkward (one exchange mistakes the speaker for someone named "Ronaldo"). Coverage pairs amazement at the human quality with warnings that such voices could make phone scams harder to detect.

## Why it matters

1. **A separate branch for voice agents**: beyond the text-LLM-plus-TTS formula, a "learn from speech itself" branch now exists — one more architecture choice for voice products.
2. **Local execution changes the shape**: if the M4 Max claim holds, voice agents can process emotion without a cloud round trip — a different deployment and privacy structure.
3. **Scam risk becomes product spec**: the more human the voice, the larger the impersonation risk — voice identity verification and disclosure features become part of the product, not an afterthought.

## Limitations (explicit)

- Evidence is limited to Block's own demo recordings; no independent verification, and no parameters or benchmarks published.
- Research preview only, with no public availability or release date.
- This topic was held back in yesterday's collection as a bare preview; it graduates to a full collection today because of the 2026-10-24 coverage wave plus the local-execution and scam-risk context.
