---
title: "llama.cpp and ggml v1.0.0 — a Stable Public API Promise for Local AI Inference (Nov 13)"
category: concepts
tags: [llama-cpp, ggml, local-ai, inference, open-source]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-llama-cpp-1-0.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[concepts/nvidia-cosmos-3-nano-open-models]]"
status: draft
confidence: high
---

# llama.cpp and ggml v1.0.0 — a Stable Public API Promise for Local AI Inference (Nov 13)

## Start here

**Analogy**: a blueprint that used to change a little every day has now become an official drawing with a promise attached: "this part will not change." A house (an app) built from this drawing is less likely to collapse when the drawing is updated later.

| Term | Meaning |
|------|------|
| **llama.cpp** | The open-source C/C++ engine that runs LLMs on laptops, phones, and servers |
| **ggml** | The tensor library underneath llama.cpp, handling the number-crunching |
| **Semantic versioning** | A rule where the version number itself says what changed. Major = compatibility broken, minor = features added, patch = bug fix |
| **Public API** | The official set of functions other programs call. When it changes, the apps using it break |
| **Speculative decoding** | A speed technique where a small model drafts an answer first and a large model checks it |
| **KV cache** | Stored computation that lets a model remember earlier conversation. The bigger it gets, the more memory it uses |
| **FP8** | A way of storing numbers in 8 bits (one byte), saving memory and time |

## One-line definition

On 2026-11-13, the ggml-org team released llama.cpp v1.0.0 and its underlying tensor library ggml v1.0.0. It is the first 1.0 release, three and a half years after the project started (2023-03-10). The point is not speed but a promise: from now on, a breaking change to the public C API will only arrive with a major-version bump.

## Key facts

- **The versioning promise**: both libraries now use semantic versioning. A MAJOR bump means a breaking change to the public C API (the headers under `./include`); MINOR means a backward-compatible feature, backend update, model-support addition, or API addition; PATCH means a bug fix with no API change. Until now the project used raw commit numbers (like b12359) as versions, and the interface could change at any time.
- **The cleanup**: 35 deprecated public functions were removed, along with the warmup setter and the defragmentation-threshold option. The NextN speculative-decoding API was promoted from the extension header (llama-ext.h) into the main public header (llama.h). ggml 1.0 removes deprecated APIs and legacy DIAG_MASK operations, and adds configurable YaRN truncation and FP8 support.
- **Features**: FP8 key-value (KV) caches were added. On Qwen2.5-7B, a full 32,768-token KV payload falls from 1,792 MiB to 896 MiB (a calculated figure). A host-memory MoE expert cache and a new web UI were also included. llama-server was hardened against SSRF, DNS rebinding, and MCP tool cancellation.
- **Scale**: the project supports more than 150 model-architecture variants. The GitHub repository has about 135,000 stars and is MIT-licensed. The ggml-org team has maintained the project from Hugging Face since February 2026. v1.0.0 matches build b12359, and newer builds have already been published. The release notes run to more than 29,000 characters.

## Why it matters (solo-developer view)

1. **The foundation for local AI apps is now stable**: when I build an app that runs models on my Mac or PC, the risk that the llama.cpp API changes without warning has shrunk. With the promise that 1.x keeps the public API, it can be chosen as the foundation library for a long-term project.
2. **Long conversations on small machines got cheaper**: FP8 KV caches halve the memory cost of a 32K-token conversation. That is a felt improvement when running agents locally for a long time on a Mac mini or a laptop.
3. **Security defaults went up**: llama-server's SSRF and DNS-rebinding defences close holes that appear when a local server is exposed to a network. These are items to check when opening my harness's local inference server.

## Limitations (stated)

- Neither the announcement nor the release notes give before-and-after speed numbers. The performance work is described but not given as a percentage.
- The v1.0.0 promise covers only the public C API. Internal behaviour and non-public interfaces can still change.

## Related concepts

- [[concepts/agent-residence]] — the residence forms of agents: local models vs cloud computers, where the local inference stack sits (2026-10-04)
- [[concepts/nvidia-cosmos-3-nano-open-models]] — NVIDIA Cosmos 3 Nano open weights, another axis of the open-model ecosystem (2026-11-07)

## Sources

- [llama.cpp and ggml v1.0.0 release — source](raw/articles/2026-11-15-llama-cpp-1-0.md)