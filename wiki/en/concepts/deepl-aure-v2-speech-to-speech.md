---
title: "DeepL Aure v2 — Direct Speech-to-Speech Translation, Median Latency Cut by 50%"
category: concepts
tags: [deepl, aure, speech-to-speech, voice-ai, translation, real-time, agents]
created: 2026-11-27
updated: 2026-11-27
sources:
  - "raw/articles/2026-11-27-deepl-aure-v2-speech-to-speech.md"
related:
  - "[[concepts/agent-residence]]"
status: draft
confidence: low
---

# DeepL Aure v2 — Direct Speech-to-Speech Translation, Median Latency Cut by 50%

## Start here

**Analogy**: Old interpretation worked like a three-person relay race — one person listens and transcribes, the next translates, and the last reads it aloud. Aure v2 is one person who hears and immediately speaks in another language. With no handoffs in between, it is much faster and preserves the speaker's vocal feel (rhythm and intonation).

| Term | Meaning |
|------|------|
| **Speech-to-speech** | A method that takes spoken input and turns it directly into translated speech — without a text step in between |
| **End-to-end** | A structure in which a single model handles the whole task from start to finish in one pass, without multiple stages |
| **Median translation latency** | The middle value of how long it takes before the translated speech is heard — half of it arrives within this time |

## One-line definition

DeepL's voice AI translation model Aure v2, launched at the first Unmute Summit in Tokyo on 2026-11-26 — an end-to-end design that turns speech directly into translated speech without the three steps of speech → text → translation → speech, with median translation latency reportedly 50% lower than its predecessor. Available immediately to DeepL Voice customers.

## Key points

- **Structure**: an end-to-end speech-to-speech model plus reinforcement learning. Removing the handoffs between transcription, translation, and speech synthesis cuts latency. The translated speech is said to preserve the speaker's rhythm, intonation, and emphasis.
- **Figures (vendor claims)**: median translation latency down 50% vs the previous Aure. Based on DeepL's internal study (November 2026, 10 language pairs, 1-minute recordings of real speech, human-verified transcripts), half of the translated words are heard within 3.3 seconds. Quality claimed ahead of 6 competing systems across all language pairs — all vendor measurements, no independent verification.
- **Languages**: 6 at launch — English, German, French, Spanish, Japanese, Korean. More to come.
- **Availability**: DeepL Voice for Online Meetings (Teams, Zoom, Meet), Voice for In-Person Conversations, DeepL API for Voice. Enabled automatically in supported languages, with no separate setup. Pricing undisclosed.
- **Pace**: the previous Aure launched November 11 — the follow-up came just 15 days later. DeepL Voice usage in Q3 2026 was up more than 8x in voice minutes and about 7x in translated meeting minutes year over year.

## Why it matters

1. **The "latency" race in voice agents**: the same current as Grok Voice 3.0 and other voice AI — in real-time conversation, latency shapes perceived quality as much as accuracy. Collapsing a three-stage pipeline into a single model is the direction across voice agents.
2. **A 15-day follow-up cycle**: Aure (Nov 11) to Aure v2 (Nov 26) in 15 days — voice-model improvement cycles are shortening to weeks. What matters is checking what changed each time, not the version number.
3. **How to read vendor figures**: a 50% latency cut, 3.3 seconds, ahead of 6 competing systems — all from DeepL's internal study, with no independent verification. Read the relative figure ("vs the predecessor") apart from the absolute figure (3.3 seconds).

## Limitations (explicit)

- All performance figures are DeepL's internal study — no independent verification. The quality lead over 6 competing systems is also a vendor claim.
- Pricing undisclosed. Launch languages limited to 6.
- The follow-up came 15 days after the predecessor, so how durable the v2 improvement is and how it feels in real use are unconfirmed.

## Related concepts

- [[concepts/agent-residence]] — connected to the residence and latency structure of real-time voice agents

## Sources

- [DeepL launches Aure v2, a direct speech-to-speech translation model — latency cut 50% (PR Newswire, Nov 26)](raw/articles/2026-11-27-deepl-aure-v2-speech-to-speech.md)
