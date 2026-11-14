---
title: "DeepSeek Opens App Features to the API — deepseek-flash (V4.1-Flash-1017) at the Centre (Nov 13)"
category: concepts
tags: [deepseek, api, deepseek-flash, tools, search]
created: 2026-11-14
updated: 2026-11-14
sources:
  - "raw/articles/2026-11-14-deepseek-api-app-toolkit-flash.md"
related:
  - "[[concepts/tool-use]]"
  - "[[concepts/gemini-4-hydrogen]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/deepseek-v41-flash-1017]]"
status: draft
confidence: high
---

# DeepSeek Opens App Features to the API — deepseek-flash (V4.1-Flash-1017) at the Centre (Nov 13)

## Start here

**Analogy**: the 'hands and feet' that only worked inside the app — web search, file reading, voice — have been taken out through the API so anyone can assemble them into their own agent. The hands and feet move on DeepSeek's servers, and the developer just receives the result.

| Term | Meaning |
| **deepseek-flash** | DeepSeek's lightweight, low-cost model alias — it now points to V4.1-Flash-1017 |
| **V4.1-Flash-1017** | The dated refresh of the September V4.1-Flash release — API behaviour and token prices unchanged |
| **Server-side tool calling** | Tool execution and context assembly handled by DeepSeek's servers instead of the developer |
| **Deep-thinking search** | A search mode that reasons more deeply about results before answering |
| **ASR / TTS** | Automatic speech recognition and text-to-speech — voice input and output |

## One-line definition

On 2026-11-13, DeepSeek opened the features of its consumer app to the developer API through its official API changelog. Web search, file input, URL reading, voice interaction, and more are handled server-side. The central model, deepseek-flash, now points to V4.1-Flash-1017.

## Key facts

- **Opened features**: web search with citations (including a deep-thinking search mode), image search, file input (PDF, Office, images), URL reading, voice interaction, and safety checks. Tool calling and context assembly are handled server-side.
- **Model**: deepseek-flash now points to V4.1-Flash-1017. It is the dated refresh of the September V4.1-Flash release, with the same API behaviour and token prices. Supported on the Messages, Responses, and Chat Completions APIs.
- **Separate API pricing**: Search and Fetch at $0.75 per 1,000 calls, OCR at $0.225 per 1,000 pages, ASR and TTS at a 50% launch discount. Charged on top of tokens.
- **Token pricing**: deepseek-flash costs $0.15 input / $0.60 output per million tokens in off-peak hours, double at peak hours.
- **Conditions**: public apps built on the API must enable safety checks. An open-source demo chat client was released alongside.

## Why it matters (solo-developer view)

1. **'App features become API'**: search, files, and voice can be delegated to the server side instead of assembled in my own harness. The stretch where I don't have to build tool-calling infrastructure myself keeps growing.
2. **Pricing now has two axes**: token prices plus per-call feature prices. Cost design has to watch both — an agent that searches a lot can blow up on per-call charges before tokens.
3. **Another competitor in the cheap execution-model lane**: alongside Hydrogen and Haiku 5.5, DeepSeek flash sits in the same low-cost execution tier. My routing gains one more candidate for the 'cheap and fast' slot.

## Limitations (stated)

- Prices and features are as of the 2026-11-13 changelog. The definition and scope of peak hours are not in the source.
- The mandatory safety check applies to public apps built on the API.
- V4.1-Flash-1017 is a dated refresh, not a performance change to the model itself.

## Related concepts

- [[concepts/tool-use]] — LLM tool calling, the foundation of server-side tool use (2026-04)
- [[concepts/gemini-4-hydrogen]] — Google Gemini 4 Hydrogen, the execution-oriented coding agent model (2026-11-12)
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, the lightweight, low-cost API model, the price-competition axis (2026-10-08)
- [[concepts/deepseek-v41-flash-1017]] — DeepSeek V4.1-Flash-1017, the build the deepseek-flash alias now points to (2026-10-18)

## Sources

- [DeepSeek app-features API source](raw/articles/2026-11-14-deepseek-api-app-toolkit-flash.md)
