---
title: "OpenAI GPT-6 Cyber — an Aligned Cybersecurity Model, Daybreak Red Customers Only"
category: concepts
tags: [openai, gpt-6-cyber, cybersecurity, daybreak, exploitgym]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-openai-gpt6-cyber.md"
related:
  - "[[concepts/openai-frontier-misalignment-monitoring]]"
  - "[[concepts/gpt-62-astra-codex-leak]]"
  - "[[concepts/openai-safety-monitor-disabling]]"
  - "[[concepts/php2shell-ai-vulnerability-discovery]]"
status: draft
confidence: high
---

# OpenAI GPT-6 Cyber — an Aligned Cybersecurity Model, Daybreak Red Customers Only

## Start here

**Analogy**: a penetration tester, not a burglar. It finds software weaknesses, proves they are exploitable, and proposes fixes — trained, like an investigator with a warrant, to stay inside the assigned scope and not touch anything outside it.

| Term | Meaning |
|------|------|
| **ExploitGym** | OpenAI's benchmark for whether a model can exploit a specified vulnerability |
| **Daybreak Red** | OpenAI's approved-access tier for offensive security work such as penetration testing and red teaming |
| **Critical rating** | The top cybersecurity tier in OpenAI's Preparedness Framework |

## One-line definition

Announced 2026-11-05: OpenAI released GPT-6 Cyber, a cybersecurity model built on GPT-6 Astra. It scores 48.5% on ExploitGym, well ahead of its predecessor, and is classified Critical in cybersecurity — available only to approved Daybreak Red customers through the API and Codex.

## Key facts

- **Performance**: 48.5% on ExploitGym, up about 16.4 points from GPT-5.6 Cyber's 32.1% — a 51% relative improvement. GPT-6 Astra scores 42.4%. Vulnerability recall in a web penetration-testing evaluation is 40.3%, against 32.0% for Astra. On the new RemoteExploitBench it completed 95% of tasks, while Astra (Daybreak Blue) refused 100%.
- **Staying in scope**: on ExploitGym Honeypot, which leaves out-of-scope services deliberately easy to attack, the model avoided exploiting them in 99.93% of cases without a deployment safety prompt (up from 94.49% for GPT-5.6 Cyber) and in 100% with one. Staying in scope was a central design goal.
- **Research in practice**: in the November 4 study "A thousand fewer paths to root," an autonomous discovery-to-patch pipeline using this model reproduced 1,724 of 2,308 candidate Linux kernel vulnerabilities and wrote working local privilege-escalation exploits for 948 of them — more than five times the 166 GPT-5.6 Sol managed with the same harness. 304 critical findings were disclosed with candidate patches, at a cost of $1,213,430 in API credits ($1,279 per exploit). Researchers also found 81 previously unknown high-severity Firefox vulnerabilities and reassessed the severity of 30 older ones; Mozilla has shipped fixes for many.
- **Rating and price**: classified Critical in cybersecurity under the Preparedness Framework, up from High for GPT-5.6 Cyber — the first cyber model to reach Critical. Priced at $20 per million input tokens and $100 per million output tokens. Security teams at Cisco, Calif and CodeRabbit are already using it, and OpenAI says it relies on the model to find and fix weaknesses in its own infrastructure.
- **Access controls**: identity verification, single sign-on, multi-factor authentication and API IP allowlisting (on by default) are required, with Private Safety Processing for Zero Data Retention API customers. Monitoring blocks high-risk assistance against critical OT/ICS while still allowing authorized testing. OpenAI added a Daybreak Red for Critical Infrastructure track and promised $1 billion in grants for Daybreak for Frontline Defenders. A "Cyber at the Frontier" livestream is scheduled for November 12.

## Why it matters (solo-developer view)

1. **"Aligned offensive capability" is now a product**: finding vulnerabilities and staying inside scope are sold together as the model's defining feature. Agent permission design has become a core security-product spec.
2. **Vulnerability discovery now has a published unit price**: 948 exploits at $1,279 each means the cost of exploit research is public. Defenders and attackers read the same price list.
3. **Access control is the product**: gating a Critical-rated model behind Daybreak Red approval instead of releasing it openly shows that separating capability from deployment — the gated-release pattern — has hardened into standard practice.

## Limitations (stated)

- Every performance figure is OpenAI-reported, with no independent verification. Benchmark scores do not guarantee exploit success rates in real production software.
- The Linux and Firefox results come from a controlled research environment; whether the 948 exploits' candidate patches were actually applied is unconfirmed.
- Pricing and access terms apply to approved Daybreak Red customers; the model is not open to general users yet.

## Sources

- [GPT-6 Cyber source](raw/articles/2026-11-06-openai-gpt6-cyber.md)
