---
title: "Claude Code's 'Don't Ask Again' Saved Approved Commands with Secrets in Plain Text, Leaking into 1,122 Public GitHub Files — Apiiro Research, 2,539 Secrets in Total"
category: concepts
tags: [claude-code, security, secrets, github, agent-safety]
created: 2026-11-08
updated: 2026-11-08
sources:
  - "raw/articles/2026-11-08-claude-code-dont-ask-again-secret-leak.md"
related:
  - "[[concepts/opencode-key-breach]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/wiz-black-october-ai-platform-breaches]]"
status: draft
confidence: high
---

# Claude Code's "Don't Ask Again" Saved Approved Commands with Secrets in Plain Text, Leaking into 1,122 Public GitHub Files — Apiiro Research, 2,539 Secrets in Total

## Start here

**Analogy**: telling an assistant "don't ask me again" once led it to leave a note with the password on it sitting on the desk. Then 1,122 people published the whole filing cabinet (repository) containing that note. Deleting the note later does not help — old copies of the cabinet still hold it.

| Term | Meaning |
|------|------|
| **settings.local.json** | Claude Code's local settings file, where commands approved with "don't ask again" are stored — it is meant to stay on the developer's machine |
| **gitleaks / TruffleHog** | Scanners that find secrets (keys, passwords) in code — in this study they missed about one in five cases |
| **Allow rule** | A setting that lets the agent run the same command again without asking |

## One-line definition

On 2026-11-05, security firm Apiiro reported that approving a command in Claude Code with "Yes, and don't ask again" saves the entire command — password or API key included — in plain text in the project's `.claude/settings.local.json`. Of 104,185 public copies of that file on GitHub, 1,122 (1.1%) held a real secret; counting history, shared settings and saved agent chat logs, the total reaches 2,539 secrets across 1,994 repositories.

## Key facts

- **The mechanism**: when Claude Code proposes a command to check a database or call an API, the command carries the secret straight from the user's config file. Choosing "Yes, and don't ask again" at the confirmation prompt saves that command as an allow rule in `.claude/settings.local.json`. The documentation says the file is added to the global git exclude list on first write, yet 104,185 public copies exist on GitHub. Apiiro reproduced the behavior with Opus 5.5 and Fable 5.1, calling it "Claude Code's own behavior, not the model's."
- **The scale**: based on GitHub code search from November 1–3, 2026, 1,122 of 104,185 public `.claude/settings.local.json` files (across 103,617 repositories) held a real secret. Examples include a database vendor's own admin-level cloud key, a production Azure Postgres password, a Square production token, and the owner password of a medical-records app's database. 63 organizations are affected. One confirmed its key had been live.
- **The full count**: 1,160 more secrets in older versions of the file, 298 in the shared `.claude/settings.json` that teams commit deliberately (out of 76,011 public copies), and secrets in saved agent chat logs bring the total to 2,539 secrets in 1,994 repositories. In 539 of the 1,105 traced leaking repositories, a commit co-authored by Claude touched the file. The median leaking file had been present for 217 days at the snapshot date.
- **The scanner blind spot**: of the 1,122 files, gitleaks flagged 564 and TruffleHog 643; 215 (about one in five) were flagged by neither, because the secret is a plain-text password inside a command rather than a key in a recognizable format. By type, database passwords lead at 379, followed by AI model API keys (149), Supabase service-role keys (122), Google API keys (110) and AWS keys (23).
- **The warning history**: users reported the behavior in GitHub issues (#5544, #11982, #13106, #91270) starting in August 2025, but according to Apiiro there was no reply from Anthropic, and three were auto-closed as inactive or duplicates. As of November 8, no public reply from Anthropic has been confirmed.

## Why it matters (solo-developer view)

1. **A convenience feature became a leak path**: "don't ask again" removes the friction of repeated confirmations, but at the price of freezing secrets in a plain-text file. It is a lesson in how an agent's convenience features widen the security boundary. The practical next step is checking whether `.claude/settings.local.json` is committed in my own repositories.
2. **Scanners cannot be trusted here**: gitleaks and TruffleHog both missed about one in five. A plain-text password inside a command does not look like a "key format." Passing a scanner is not the same as being safe.
3. **The agent wrote its own leak**: in nearly half of the traced repositories, a commit co-authored by Claude touched the file. An agent can write the secret into a file and commit it while no human looks. Checking `git status` after agent work is mandatory, not optional.

## Limitations (stated)

- Apiiro sells security products for coding agents, so it has a stake in the topic. It did not test any keys, so "real secret" means a key-format match or a password next to a public host, not a confirmed-valid credential. The 2,539 count partly rests on an LLM reviewer's judgment.
- Only public repositories were surveyed; private repositories and developers' machines are out of scope. The history count is a minimum.

## Sources

- [Claude Code secret-leak Apiiro research source](raw/articles/2026-11-08-claude-code-dont-ask-again-secret-leak.md)
