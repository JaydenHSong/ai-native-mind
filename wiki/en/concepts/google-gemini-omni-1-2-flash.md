---
title: "Google Gemini Omni 1.2 Flash — 15-Second Video, 30% Cheaper, Multi-Turn Editing"
category: concepts
tags: [google, gemini, omni, video-generation, veo]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-google-gemini-omni-1-2-flash.md"
related:
  - "[[concepts/google-genie-4-native-audio-world-model]]"
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/openai-chatgpt-images-2-6]]"
status: draft
confidence: high
---

# Google Gemini Omni 1.2 Flash — 15-Second Video, 30% Cheaper, Multi-Turn Editing

## Start here

**Analogy**: a camera that used to take stills now shoots short films. Clips grew from 10 seconds to 15, a scene can be fixed in conversation instead of re-shot from scratch, and the price fell 30% — about $1 per clip.

| Term | Meaning |
|------|------|
| **Omni** | Google's multimodal video generation and editing model family (successor to the Veo line) |
| **Multi-turn editing** | Refining the same clip through follow-up conversation instead of regenerating it |
| **SynthID** | Google's watermarking technology for AI-generated content |

## One-line definition

Announced 2026-11-05: Google made Gemini Omni 1.2 Flash generally available on the Gemini API and Google Cloud. Native 15-second video creation and editing, multi-turn conversational editing, and a 30% price cut to $0.07 per second for 720p video.

## Key facts

- **Length**: native 15-second video generation and editing (Omni 1.1 stopped at 10 seconds). Durations from 3 to 15 seconds in one-second steps. Interpolate between a first and last frame (3–10 s) or extend a clip by 3–10 s per turn, up to 30 s in total. Output at 360p, 720p, 1080p or 4K, 24 FPS.
- **Editing**: multi-turn conversational editing — refine the same clip with follow-up prompts instead of regenerating from scratch. Up to 6 reference images strengthen character consistency. The recommended flow is drafting at 360p or 720p, then upscaling selected clips to 1080p or 4K.
- **Price**: $0.07 per second for 720p, 30% below Omni 1.1 (about $0.10 per second). Video output tokens cost $12.00 per million (1.1 was $17.50); 720p uses 5,792 tokens per second, so a full 15-second clip costs about $1.04–$1.05. No free tier. Paid-tier rate limits doubled. From December 3, 2026, Omni 1.1 calls route automatically to 1.2 and are billed at 1.2 rates.
- **Availability**: Gemini API, Google Cloud Vertex AI (with Provisioned Throughput), Flow, Google Vids, Google Ads and the Gemini app. Every output carries a SynthID watermark. Google Vids offers up to three free 15-second generations per month for Google account and Workspace users. In the Gemini app, 15-second video rolls out first to Google AI Ultra subscribers.
- **Limits**: consistency claims rest on Google's own demos; no third-party independent quality tests exist yet. The model card confirms the model can modify a person's speech in existing video, though Google currently restricts that capability.

## Why it matters (solo-developer view)

1. **Video became an editable medium**: multi-turn editing turns video generation from a one-shot roll into iterative work — the same direction as Images 2.6's GIF and SVG flow. Generative models are shifting from "making tools" to "refining tools."
2. **The price list is the usage**: at about $1 per 15-second clip, generating short ads and social clips through the API is now in realistic budget range. But pricing is per token, so real cost must be computed from token counts, not seconds alone.
3. **The race is now about length**: with ByteDance's Seedance 2.5 generating 30-second clips, 15 seconds is still half that. Models are splitting on three axes — length, price, and editing.

## Limitations (stated)

- Consistency and quality claims rest on Google's own demos, with no independent tests. Only the 720p rate is published, so real upscaling costs for 1080p and 4K are unconfirmed.
- In the Gemini app, 15-second video rolls out to Ultra subscribers first, so general users may not have it yet.
- Speech modification is confirmed in the model card but currently restricted, so its actual availability is unclear.

## Sources

- [Gemini Omni 1.2 Flash source](raw/articles/2026-11-06-google-gemini-omni-1-2-flash.md)
