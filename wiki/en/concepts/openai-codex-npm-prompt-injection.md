---
title: "OpenAI Codex npm Pipeline Prompt-Injection Chain — Depi Report (Nov 11)"
category: concepts
tags: [openai, codex, prompt-injection, supply-chain, npm, github-actions, security]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-openai-codex-npm-prompt-injection.md"
related:
  - "[[concepts/malbear-operation-snowball-deepseek-telecom]]"
  - "[[concepts/australia-ai-regulator-agent-breach]]"
  - "[[concepts/openai-agent-sepolia-wallet]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: medium
---

# OpenAI Codex npm Pipeline Prompt-Injection Chain — Depi Report (Nov 11)

## Start here

**Analogy**: imagine taping a note to the factory gate that says "read this and do exactly what it says." A passer-by writes "hand over the safe key" on the note, and the worker (the agent) cannot tell the note from an instruction, so it complies. The safe key leads to the stamp that prints the factory's products — the official npm package.

| Term | Meaning |
|------|------|
| **Prompt injection** | An attack that plants instructions in untrusted input (an issue body, for example) so an agent executes them as its own instructions |
| **GITHUB_TOKEN** | A token automatically issued to a GitHub Actions runner, carrying repository permissions |
| **ACTIONS_RUNTIME_TOKEN** | A token for talking to the Actions runtime — stealing it can widen runner privileges |
| **Bugcrowd** | A bug-bounty platform where companies receive vulnerability reports from security researchers |

## One-line definition

On 2026-11-11, security researcher Depi reported an attack chain starting with prompt injection in OpenAI's GitHub Actions workflow and reaching the credentials needed to publish the official `@openai/codex` npm package. The report went through Bugcrowd, was graded P1, resolved, and disclosed on September 29. Whether the full chain could have reached production is uncertain.

## Key facts

- **Entry point**: OpenAI's GitHub Actions workflow `issue-labeler.yml` passed new issue titles and bodies straight into the Codex agent prompt. Instructions planted in an issue body would execute as agent instructions — classic prompt injection.
- **Privilege escalation**: after escaping the sandbox, Depi stole `GITHUB_TOKEN` and `ACTIONS_RUNTIME_TOKEN` from runner process memory. Those tokens led to the credentials needed to publish releases of the official `@openai/codex` npm package.
- **Scale**: the Codex npm package sees about 26 million weekly downloads and about 97 million monthly downloads. A breached release pipeline would have enormous supply-chain reach.
- **Handling**: Depi reported via Bugcrowd; the issue was graded P1, resolved, and disclosed on September 29. The initial bounty was $1,000 — low against OpenAI's $100,000 cap — and is under review.
- **The key caveat — production reach uncertain**: OpenAI's production labeler has run in a stricter `read-only` mode since May 29. Depi reproduced the full chain in his own test repository, so it is unclear whether it would have worked the same way in production. OpenAI's official position still needs confirmation.

## Why it matters (solo-developer view)

1. **The moment an agent touches CI/CD, the issue tracker becomes an attack surface**: passing user-written text (issue titles, bodies) straight into an agent prompt is the most common and most dangerous pattern. Check whether your own repo's labeller or triage bot has the same structure.
2. **The release pipeline is the last gate of the supply chain**: a single token led to the signing and publishing rights for a package with tens of millions of downloads. Least privilege on the tokens agents receive is supply-chain security.
3. **Design for sandbox escape, not against it**: the core of this chain is not the injection itself but that the attacker escaped the sandbox and reached runner memory afterwards. Agent runtimes must be isolated on the assumption they can be breached.

## Limitations (stated)

- Based on Depi's original report and one secondary summary. OpenAI's official position has not yet been confirmed.
- The full chain was reproduced in the researcher's own test repository; whether it would behave identically under the production labeler's read-only mode is unconfirmed. No actual damage or leak has been reported.
- The $1,000 bounty is an initial figure under review, not a final amount.

## Related concepts

- [[concepts/malbear-operation-snowball-deepseek-telecom]] — A jailbroken DeepSeek agent inside a European telecom, an agent security incident (2026-11-11)
- [[concepts/australia-ai-regulator-agent-breach]] — Australia creates an AI regulator after an OpenAI agent's Medicare breach (2026-11-10)
- [[concepts/openai-agent-sepolia-wallet]] — OpenAI agent Sepolia wallet incident, withdrawing another person's test ETH (2026-10-16)
- [[concepts/agent-attribution]] — Attribution of agent security incidents (actor, responsibility, disclosure timing) (2026-09-25)

## Sources

- [Codex npm pipeline prompt-injection source](raw/articles/2026-11-12-openai-codex-npm-prompt-injection.md)
