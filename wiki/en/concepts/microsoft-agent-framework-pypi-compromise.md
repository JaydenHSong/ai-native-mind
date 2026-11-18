---
title: "Microsoft Agent Framework Compromised on PyPI — Malicious 1.26.1 and 1.26.2 Steal Cloud Credentials"
category: concepts
tags: [microsoft, agent-framework, pypi, supply-chain, security, credentials]
created: 2026-11-18
updated: 2026-11-18
sources:
  - "raw/articles/2026-11-18-microsoft-agent-framework-pypi-compromise.md"
related:
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/google-threat-tracker-exploit-agent]]"
  - "[[concepts/anthropic-anvil-automated-red-teaming]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
status: draft
confidence: medium
---

# Microsoft Agent Framework Compromised on PyPI — Malicious 1.26.1 and 1.26.2 Steal Cloud Credentials

## Start here

**Analogy**: a fake product pretending to be Microsoft's official AI tool was uploaded to the warehouse (PyPI) where programmers download code. Installing it secretly stole passwords and tokens whenever the computer started — without even running the program. It was removed after about an hour, but anyone who installed it in that window has to change their passwords. It is the first major case of an agent framework itself becoming a supply-chain target.

| Term | Meaning |
|------|------|
| **PyPI** | The official warehouse where Python programmers download libraries (code parts) |
| **.pth file** | A settings file that runs automatically when Python starts — abused, it executes code on install alone |
| **OIDC token** | A one-time key proving "who I am" to a cloud service (Azure, GitHub, and others) |
| **Credentials** | All secret proof of identity: passwords, API keys, tokens |
| **Supply-chain attack** | An attack on the path software travels — the warehouse and release pipeline — to deliver malware to users |

## One-line definition

Malicious versions **1.26.1** (20:35 UTC) and **1.26.2** (21:08 UTC) of Microsoft's official AI agent framework Python package `agent-framework` were uploaded to PyPI on November 17. Both used a Python startup hook (`.pth`) to collect Azure and GitHub Actions OIDC tokens and other credentials and exfiltrate them to webhook.site, and were removed about an hour later, around 21:30 UTC. **The first major case of an agent framework itself becoming a supply-chain attack target.**

## Key points

- **Timeline (UTC)**: 2026-11-17 20:35 malicious 1.26.1 uploaded, 21:08 1.26.2 uploaded, ~21:30 both removed from PyPI. Exposure window about 45–55 minutes. The Socket Research Team analyzed it first, and eight security firms — Aikido, Chainguard, Endor Labs, OX Security, SafeDep, StepSecurity, Wiz, and others — flagged it within hours.
- **How it works**: on install it plants a `.pth` file (`agent_framework_meta.pth` / `af_runtime_diag.pth`) in site-packages. Python executes the import directives in `.pth` files every time the interpreter starts, so the stealer runs whenever Python starts even if `agent-framework` is never imported. After collecting, it forks into a detached session and runs in the background.
- **What it steals**: credential-related environment variables (TOKEN, SECRET, PASSWORD, KEY, AZURE, AWS, GITHUB, OPENAI, HF_, FOUNDRY, and others), credential files (Azure CLI, .npmrc, pip.conf, .netrc, .git-credentials, Docker, Hugging Face, .env, and others), Azure DevOps OIDC tokens, Azure managed-identity tokens and instance metadata, and in 1.26.2, GitHub Actions OIDC tokens additionally. Collected data was compressed, Base64-encoded, and POSTed to a webhook.site endpoint.
- **Scale of damage**: the exfiltration endpoint was on a free tier, so Wiz could only confirm and analyze up to 50 stored requests. The actual number of installs and victims is undisclosed. The package gets about 41,000 downloads a week (per Wiz) and about 190,000 a month.
- **Root cause (unconfirmed → update)**: 1.26.1 ships as a wheel only, with no sdist unlike normal releases, and there is no matching tag or release on GitHub. Per Wiz's November 18, 14:00 UTC update, the attacker appears to have stolen a client certificate and private key for Microsoft's ESRP (Engineering System Release Pipeline), and the attack tooling itself turned out to be "Cairn," an open-source AI penetration-testing framework. Microsoft has not yet published an official root-cause analysis (postmortem) as of November 18.
- **Response**: the latest safe version is 1.26.0. Environments that installed or updated during the window (11-17 20:35–21:30 UTC) should assume credentials leaked and rotate them, and restore from a clean environment rather than cleaning the compromised one. The GitHub repositories microsoft/agent-framework and microsoft/onnxruntime returned 404 on November 18, though the connection to the PyPI incident is unconfirmed.
- **Precedent**: earlier this year, another Microsoft Python package, durabletask, was also compromised through PyPI token theft.

## Why it matters (solo-developer lens)

1. **`.pth` runs without an import**: most malware triggers "when you use the library." This one runs whenever Python starts — every Python execution in an environment that installed it was exposed. It re-confirms the [[concepts/agent-supply-chain-security]] trust-model point that "installation" itself is execution.
2. **The agent framework became the target**: the next chapter after [[concepts/litellm-pypi-supply-chain-compromise]] (10-22, the same .pth technique), and the first major case targeting an agent framework itself. Because agents carry cloud credentials ([[concepts/anthropic-anvil-automated-red-teaming]]'s threat model), the theft value is higher than for an ordinary library.
3. **It pairs with the same day's attack automation**: the patch→exploit automation reported the day before by [[concepts/google-threat-tracker-exploit-agent]] and this supply-chain compromise are two branches of the same flow — "attacks are automated, and the distribution path is breached."
4. **The irony of the root cause**: the attack tooling itself turned out to be "Cairn," an open-source AI penetration-testing framework — the same tool family as the Cairn campaign in [[concepts/cairn-norforge-ai-agent-hacking-spree]] (10-20). An AI penetration-testing tool was used to target an AI agent framework.
5. **Practical response**: if you installed or updated `agent-framework` between 11-17 20:35 and 21:30 UTC, assume credentials leaked, rotate them, and restore from a clean environment instead of cleaning the compromised one. The safe version is 1.26.0.

## Limits (stated explicitly)

- The actual number of installs and victims is undisclosed. Wiz could confirm at most 50 requests because of the endpoint's free tier — that does not mean "only 50 victims."
- The root cause (ESRP client certificate and private key theft) is at the "appears to be" level per Wiz's November 18 update, and Microsoft has not published an official postmortem yet.
- The connection between the GitHub repository 404 observations and the PyPI incident is unconfirmed.
- confidence is medium — Socket's first analysis crossed with eight security firms' flags plus the Wiz update, but the damage scale and root cause are unconfirmed.

## Related concepts

- [[concepts/litellm-pypi-supply-chain-compromise]] — the LiteLLM 1.107.0 PyPI supply-chain compromise, the same .pth persistence backdoor technique (2026-10-22)
- [[concepts/google-threat-tracker-exploit-agent]] — the reality that patches lead straight to attacks, and a supply-chain attack on the same day (2026-11-16)
- [[concepts/anthropic-anvil-automated-red-teaming]] — the threat model that assumes agents carry cloud credentials (2026-11-12)
- [[concepts/agent-supply-chain-security]] — the trust model for external tools, skills, and agents, plus dual-LLM/CaMeL and tier ratings
- [[concepts/cairn-norforge-ai-agent-hacking-spree]] — the Cairn hacking campaign; the attack tooling itself is the Cairn AI penetration-testing framework (2026-10-20)

## Sources

- [Microsoft Agent Framework compromised on PyPI — malicious 1.26.1 and 1.26.2 steal cloud credentials (Socket Research Team, 11-17)](raw/articles/2026-11-18-microsoft-agent-framework-pypi-compromise.md)
