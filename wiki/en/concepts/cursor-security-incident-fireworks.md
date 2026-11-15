---
title: "Cursor Security Incident Investigation — Fireworks Key Leak Led to Tampered Claude Code Extension (Nov 14)"
category: concepts
tags: [cursor, fireworks, security, supply-chain, claude-code]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-cursor-security-incident-fireworks.md"
related:
  - "[[concepts/fireworks-notion-ai-breach]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/fbi-artex-ai-agents]]"
status: draft
confidence: high
---

# Cursor Security Incident Investigation — Fireworks Key Leak Led to Tampered Claude Code Extension (Nov 14)

## Start here

**Analogy**: a key entrusted to a partner company leaked, letting a thief open the warehouse (shared storage) with it, steal more keys from inside, and use one of them to place a fake product (a tampered extension) on the shop shelf (the extension marketplace). Anyone who received the fake product opened a back door into their own computer for the thief.

| Term | Meaning |
|------|------|
| **Supply-chain attack** | Attacking not the target directly, but a partner or distribution path the target uses |
| **Marketplace cache** | The temporary store that serves extension files to users. Whatever is placed there is distributed as-is |
| **SSH backdoor** | A remote-access channel planted so an attacker can secretly return later |
| **Privacy Mode** | A Cursor setting that leaves no prompts or code on servers. When on, no traces are stored |
| **Trace** | A record of an agent's work. It can contain prompts, code, and call history |

## One-line definition

On 2026-11-13, Cursor published the results of a two-week investigation. The tampered Claude Code extension that appeared on its marketplace on Oct 29 started with an access key exposed at Fireworks AI, its AI infrastructure provider. The attacker used the key to copy a shared storage bucket, obtained unredacted credentials from it, and worked into internal systems.

## Key facts

- **The way in**: an access key Cursor had issued to Fireworks was exposed on the Fireworks side (Cursor's wording). The attacker used it to copy data from a read-only storage bucket Cursor shared with Fireworks. The bucket held coding-agent traces from around 2025, from sessions that had not enabled Privacy Mode. Some traces contained unredacted API credentials. Fewer than 0.05% of users had traces exposed, and fewer than 0.01% of customers had API credentials exposed.
- **The tampered extension**: using one stolen credential, the attacker placed tampered copies of Anthropic's Claude Code extension (`Anthropic.claude-code` 2.1.312 and 2.1.313, Windows and macOS builds) on the cache serving Cursor's VS Code extension marketplace on Oct 29. They were exposed for about 11 hours (02:27–13:35 Pacific Time), and at most 5,000 users who requested those cached versions may have received the malicious build. The tampered build collected system information and tried to install the attacker's SSH key, enable remote login, and open a reverse tunnel for persistence (BleepingComputer and Microsoft analysis).
- **What was not affected**: Cursor says prompts and code for Privacy Mode users, customer code repositories, production systems, the Cursor app itself, and official updates were not affected. Anthropic's legitimate extension and Open VSX were not compromised. How the attacker could publish under Anthropic's name has not been explained yet.
- **Response**: the last attacker activity observed was on Nov 1, and it was blocked. Cursor deactivated the Fireworks key, rotated and revoked exposed credentials, moved all inference traffic off Fireworks, and cut off Fireworks' access to every shared dataset. Its Oct 30 security notice published indicators of compromise and remediation steps, and users were told to update to 2.1.314 and follow the removal scripts. Cursor warned that uninstalling the extension alone may not be enough.
- **Related incidents**: Fireworks disclosed several breaches of its own in October (exposed API keys and tokens, and access to its development environment through a third-party cloud provider). Uber reported on Nov 10 to the California attorney general that drivers' licence data was stolen through the same Fireworks route. The Notion AI chat-history exposure (collected Nov 12) is another branch of the same Fireworks breach.

## Why it matters (solo-developer view)

1. **A vendor I never used can still breach me**: even if I do not use Cursor, a tool I use may rely on an infrastructure provider like Fireworks, and one of its keys can lead to my traces and credentials. A dependency map has to cover my tools' supply chains, not just my code.
2. **Privacy Mode was not decoration**: Privacy Mode users were safe in this incident. The privacy setting on an agent tool is a defensive line worth switching on now, not later.
3. **Extension updates are also a trust surface**: a single extension from a marketplace can become an SSH backdoor. Check the auto-update and cache path of agent tools, and run the removal scripts when a version looks suspicious.

## Limitations (stated)

- That the key was "exposed by Fireworks" is Cursor's account. Fireworks' own security bulletins (last updated Nov 9) do not mention Cursor.
- Neither Cursor nor Anthropic has yet explained how the attacker could publish the build under Anthropic's name.
- The 5,000 figure is an estimate of users who requested the specific cached versions, not a confirmed installation count.

## Related concepts

- [[concepts/fireworks-notion-ai-breach]] — the Notion AI chat-history exposure from the Fireworks AI breach, another branch of the same supply-chain incident (2026-11-12)
- [[concepts/agent-supply-chain-security]] — the trust model for external tools, skills, and agents; the defensive axis for supply-chain breaches (2026-09)
- [[concepts/fbi-artex-ai-agents]] — the FBI ARTEX warning, security threats to the agent ecosystem landing in the same week (2026-11-13)

## Sources

- [Cursor security incident investigation — source](raw/articles/2026-11-15-cursor-security-incident-fireworks.md)