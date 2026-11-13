---
title: "DeepMind's AlphaProof Code Verifies Signal's Encryption at Machine-Code Level — 6.5M Lines of Lean (Nov 10)"
category: concepts
tags: [deepmind, alphaproof, formal-verification, signal, lean, gemini-carbon]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-deepmind-alphaproof-code-signal.md"
related:
  - "[[concepts/google-gemini-4-carbon-launch]]"
  - "[[concepts/deepmind-rsa-1024-agent-cryptanalysis]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: high
---

# DeepMind's AlphaProof Code Verifies Signal's Encryption at Machine-Code Level — 6.5M Lines of Lean (Nov 10)

## Start here

**Analogy**: checking whether a cipher is safe used to mean a mathematician spending years verifying the blueprint. Now a team of AI agents has inspected the finished building itself — the compiled code — in four weeks, and written a 6.5-million-line certificate saying "this pillar holds this load." Humans read only about 1% of it; a proof-checking machine, Lean, stamped the rest.

| Term | Meaning |
|------|------|
| **Formal verification** | Proving mathematically that code satisfies a specification |
| **Lean** | A language and checker for writing proofs a machine can verify |
| **PQXDH / Triple Ratchet** | Signal's post-quantum handshake and its message-key renewal mechanism |
| **AlphaProof Code** | DeepMind's multi-LLM agentic framework for formal verification |

## One-line definition

On 2026-11-10, Google DeepMind introduced AlphaProof Code. Agents powered by Gemini Carbon formally verified that the compiled code of Signal's cryptographic protocol (libsignal) satisfies key security properties, generating about 6.5 million lines of Lean proofs in four weeks. DeepMind calls it the first AI-assisted formal verification of a widely deployed cryptographic protocol at this depth.

## Key facts

- **Scope**: the PQXDH handshake and the Triple Ratchet, two components of libsignal, were verified for four properties — forward secrecy, authentication, post-compromise security and handshake secrecy — at the level of compiled AArch64 machine code. The same code sits under Signal, Google Messages and WhatsApp. Most protocol verification stops at the design level; the core claim here is that the implementation itself was verified.
- **Method**: human experts decide what to prove and review every specification; a group of AI agents does the proving. Agents generate Lean proofs, and Lean's kernel mechanically checks them. Humans reviewed about 1% of the codebase; Lean checked the rest. About 18,000 lines of specification form the trusted base.
- **Scale and time**: about 6.5 million lines of Lean proofs by the paper's count (about 5.3M lines of binary proofs, about 860k of computational proofs, about 350k of symbolic proofs). DeepMind's blog says "over six million lines" in the body, while its page metadata still says "over three million" — an outdated figure, so quote the paper's number with its source. An independent count of the published repository found 7,528,293 lines across all .lean files, with zero `sorry` in the headline proofs. The work took four weeks, against years for expert teams historically.
- **Checking the checker**: DeepMind reintroduced two previously fixed bugs into an isolated copy of Signal's code, and in both cases the system produced a machine-checked proof that the buggy version was insecure. The specifications, proof artifacts and a technical paper were published.
- **Limits**: the result does not certify the whole app, the operating system, hardware, metadata handling or behaviour outside the specification. Timing leakage and hardware faults are outside the guarantee unless explicitly modelled. Byte-level secrecy of cryptographic primitives is assumed. The AlphaProof Code framework itself has not been released as a general-purpose package.

## Why it matters (solo-developer view)

1. **Agents produced machine-checkable results at scale, not plausible-looking output**: 6.5 million lines of proof is beyond human reading, but Lean's kernel verifies it. The trust standard for agent work is moving from "a human read it" to "a machine checked it."
2. **The bottleneck in formal verification moves from writing proofs to writing specifications**: agents write the proofs; deciding what to prove and reviewing the specification stays human work. That changes the cost structure of assurance for security-critical software.
3. **It pairs with the Fermat formalisation as a "proof agent" trend**: on November 9, Anthropic claimed 1,000 Fable 5.2 agents formalised Fermat's Last Theorem; on November 10, DeepMind verified Signal. In domains with right answers — mathematics, cryptography — machine-checkable agent output is arriving in sequence.

## Limitations (stated)

- DeepMind's own pages give the proof size as 3M, 6M and 6.5M lines in different places. Quote the paper's figure of about 6.5M lines and cite the source.
- The verification covers two libsignal components and four properties; the whole app, OS, hardware and metadata are outside the guarantee.
- The framework is not released as a general-purpose package, so it cannot be applied to your own code today.

## Related concepts

- [[concepts/google-gemini-4-carbon-launch]] — Google Gemini 4 Carbon broad availability, the model behind AlphaProof Code's agents (2026-11-10)
- [[concepts/deepmind-rsa-1024-agent-cryptanalysis]] — DeepMind agents found two weaknesses in legacy 1024-bit RSA (2026-11-06)
- [[concepts/openai-gpt6-cyber]] — OpenAI GPT-6 Cyber, a cybersecurity-specialised model (2026-11-05)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 1,000 Fable 5.2 agents formalised Fermat's Last Theorem in Lean, Anthropic's claim (2026-11-09)

## Sources

- [DeepMind AlphaProof Code Signal verification source](raw/articles/2026-11-11-deepmind-alphaproof-code-signal.md)