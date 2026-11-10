---
title: "Grok Voice 3.0 — #1 Speech-to-Speech at a Frozen Price"
category: concepts
tags: [xai, grok, voice-ai, speech-to-speech, model-release, pricing, voice-agents]
created: 2026-10-15
updated: 2026-10-15
sources:
  - "raw/articles/2026-10-15-xai-grok-voice-3.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
status: draft
confidence: medium
---

# Grok Voice 3.0 — #1 Speech-to-Speech at a Frozen Price

## One-line definition

xAI's real-time speech-to-speech model, launched 2026-10-14 on the Voice Agent API — #1 on the independent benchmark (Artificial Analysis, 86.9) while the price stays **frozen at $0.08/min**. A voice-axis case of "performance up, price flat."

## Core content (Unite.AI original, 10/14, citing xAI's announcement; Artificial Analysis measurements)

- **Launch**: Grok Voice 3.0, available immediately on the Voice Agent API. The `grok-voice-latest` alias switches automatically; Voice 2.0 is deprecated (no retirement date). No endpoint, session-parameter, or event changes.
- **Price**: **$0.08/min = $4.80/hour**, identical to 2.0 — frozen despite higher performance.
- **Independent benchmark**: Artificial Analysis (measured 10/13, cited by xAI) Speech-to-Speech Index **86.9, ranked #1** — above OpenAI GPT-Live-1 (Astra, Medium) at 83.2 and Google Gemini 3.8 Live at 82.6. Voice 2.0 was 81.3.
- **xAI's claimed component scores**: Big Bench Audio voice reasoning 98.5%, Speech Agent Arena Elo 1070, task success rate 94.8%, Full Duplex Bench 97.0%. tau-Voice task completion 71.6% (up from 56.5% on 2.0). Cost per task $0.025 vs $0.030 (GPT-Live-1), $0.055 (GPT-Realtime-2.1). ServiceNow EVA-Bench (enterprise voice agents) at 74% accuracy, #1.
- **Deployment claims** (xAI, unverified): millions of daily conversations across Tesla vehicles and SpaceX, ~70% of Starlink's 20,000 daily call-center calls resolved with no humans, 1 in 4 sales calls converting.

## Why it matters

1. **The frozen-price strategy**: the mirror image of Ultrafast's 6x premium (10/11 update) — "we won't raise prices even as performance rises" as a share-capture signal. In the pricing-power infrastructure of [[comparisons/frontier-lab-economics]], the opposite direction of DeepSeek's "no churn after the hike": pricing power from holding the line. Follows xAI's The X Subscription bundling (10/14 update) on the voice axis.
2. **Voice agents' production numbers**: ~70% of Starlink's 20,000 daily calls resolved with no humans is the "whose side is the agent on" pattern ([[patterns/agentic-commerce]]) proven with production figures on the voice channel — vendor-claimed, not independently verified.
3. **An independently measured #1**: xAI cited it, but Artificial Analysis (10/13) did the measuring — a clean case of the vendor-claim vs independent-measurement boundary. The reading habit: ask "who measured" for every benchmark score.

## Explicit limitations

- Component scores and deployment figures are vendor claims — only the Artificial Analysis measurement is independent.
- Confidence **medium** — independent measurement + secondary-press cross-checks; component details unverified.

## Related concepts

- [[comparisons/frontier-lab-economics]] — higher performance + frozen price; the voice-axis price strategy after bundling
- [[patterns/agentic-commerce]] — voice agents extending the "whose side is the agent on" pattern to the voice channel
- [[concepts/gpt-61-sol-ultrafast]] — the opposite of Ultrafast's 6x premium: "performance up, price flat"

## Sources

- [xAI launches Grok Voice 3.0 — #1 speech-to-speech at a frozen price (Unite.AI, xAI, Artificial Analysis, 10/14)](raw/articles/2026-10-15-xai-grok-voice-3.md)
