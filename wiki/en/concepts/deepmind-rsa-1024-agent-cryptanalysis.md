---
title: "Google DeepMind: AI Agents Find Two Weaknesses in Legacy 1024-bit RSA — Signature Forgery and Cheaper Batch Factoring, 2048-bit Safe"
category: concepts
tags: [google-deepmind, rsa, cryptanalysis, ai-agents, cybersecurity]
created: 2026-11-07
updated: 2026-11-07
sources:
  - "raw/articles/2026-11-07-deepmind-rsa-1024-agent-cryptanalysis.md"
related:
  - "[[concepts/openai-gpt6-cyber]]"
  - "[[concepts/google-gemini-4-carbon-cyber-defense]]"
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/openai-ai-science-three-discoveries]]"
status: draft
confidence: medium
---

# Google DeepMind: AI Agents Find Two Weaknesses in Legacy 1024-bit RSA — Signature Forgery and Cheaper Batch Factoring, 2048-bit Safe

## Start here

**Analogy**: human-supervised AI picked at an old lock (1024-bit RSA) and found the keyhole looser than expected. The new locks (2048-bit) are still safe. But the write-up of the lock-picking appeared as a short post on X, not a formal paper — so the numbers deserve one more check before they are taken at face value.

| Term | Meaning |
|------|------|
| **RSA** | The standard public-key cryptosystem — longer keys are harder to break (1024-bit is legacy, 2048-bit and above is current practice) |
| **Signature forgery** | An attack that imitates someone else's signature, faking the guarantee that "this document is genuine" |
| **Batch factoring** | Factoring many keys at once to lower the cost per key |

## One-line definition

On 2026-11-06, Google DeepMind announced that human-supervised AI agents found two weaknesses in legacy 1024-bit RSA encryption: a signature-forgery path and a cheaper batch-factoring method. Modern 2048-bit and larger keys are unaffected, DeepMind said. The announcement came as a post on X by Pushmeet Kohli (DeepMind's VP of Science) plus two technical papers; no separate DeepMind blog post has been confirmed.

## Key facts

- **Form of announcement**: Kohli's X post (November 6) and two technical papers. The work was led by Dj Dvijotham and Abhradeep Thakurta, with cryptographers Nadia Heninger (UC San Diego and Inria) and Emmanuel Thomé (Inria). One verification outlet reported it could not find a DeepMind blog post or official account post, so the figures rest on DeepMind's announcement and secondary reporting.
- **Signature forgery**: in an environment with a chosen-message signing oracle (the PKCS#11 CKM_RSA_PKCS mechanism), if an attacker controls about 65 or more of the 128 bytes in a signing block, padding gives no protection and the problem is no harder than raw, unpadded signing. For a short 32-byte digest (such as SHA-256), a new algorithm is reported to improve on the previous best method by roughly 1,600x — a theoretical, asymptotic estimate, not run at this size. Two agents, with about 20 short messages from a human researcher, reproduced a solved 1024-bit benchmark key in under four days using about 3.5x less CPU time than the academic team. Mid-run the agents found and fixed a 32-bit index overflow that had made the first computed root wrong.
- **Batch factoring**: a new algorithm with better asymptotic complexity cuts the average cost of factoring each additional 1024-bit key by about 30x compared with previous batch methods.
- **Scope**: only 1024-bit RSA is affected. Modern protocols, which almost universally use 2048-bit or larger keys, remain secure, according to DeepMind. NIST has disallowed 1024-bit RSA for generating new signatures since 2013 under SP 800-131A. The papers also state practical constraints — the attack needs about 4 billion direct calls into the signing interface, among other requirements.
- **Prior work**: a September 20, 2026 IACR ePrint paper by Laura Shea, Miro Haller, Adam Suhl, Nadia Heninger and Emmanuel Thomé of UC San Diego and INRIA had already demonstrated 1024-bit RSA signature forgery; this work reproduces and extends that benchmark. That paper used no AI.

## Why it matters (solo-developer view)

1. **AI is entering the stage of finding new mathematics**: the result is not just a fast reproduction of a known attack — it proposes new algorithms (1,600x, 30x). Agents are moving from executors of scientific discovery to explorers. It is the same current as the "three AI science discoveries" of November 2.
2. **The remaining life of legacy crypto gets shorter**: 1024-bit RSA is already deprecated, but it still exists somewhere. Attack costs falling by factors of 30 and 1,600 means the grace period for "we will migrate someday" is shrinking. The practical next step is checking whether any of my systems still hold 1024-bit keys.
3. **The form of the announcement is itself the limit of trust**: a formal blog or proceedings paper did not appear; the primary source is an X post plus technical papers, and the figures are DeepMind's claims without independent verification. "Agents broke cryptography" as a headline and "how much is confirmed" must be read separately.

## Limitations (stated)

- The 1,600x figure is a theoretical, asymptotic estimate, not a result run at that size. The measured result is the 3.5x CPU saving on the benchmark reproduction.
- The primary source is an X post, and one verification outlet could not find a DeepMind blog post. The full scope of the papers' release and any independent reproduction are still unconfirmed.
- 1024-bit RSA is already deprecated, so the practical impact is limited. DeepMind states 2048-bit and larger keys are unaffected.

## Sources

- [DeepMind's 1024-bit RSA findings source](raw/articles/2026-11-07-deepmind-rsa-1024-agent-cryptanalysis.md)