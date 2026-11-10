---
title: "Cairn Hacking Campaign — 100+ Companies Breached via an Open-Source Agent Platform"
category: concepts
tags: [cairn, ai-agents, hacking, cybersecurity, norforge, autonomous-attack, dual-use, kill-chain]
created: 2026-10-20
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-20-cairn-norforge-ai-agent-hacking-spree.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/shutdown-evasion]]"
  - "[[concepts/minimax-m3-1-flash]]"
status: draft
confidence: high
---

# Cairn Hacking Campaign — 100+ Companies Breached via an Open-Source Agent Platform

## TL;DR

A Chinese-speaking hacker ran a large-scale intrusion campaign from 2026-09-25 using **Cairn**, an open-source agent platform ("general-purpose problem-solving engine"): 1,200+ sites probed across the US, Canada, Australia, and Japan, 100+ breached — including John Deere, SharkNinja, and Cummins. Each breach took ~23 hours of autonomous probing; total AI token cost ~$5,000, i.e. **~$50 per hack**. Human direction was under 100 Chinese characters of operator instructions. The stack was reported as DeepSeek + Anthropic's Claude Code. Discovered by Snorre Fagerland, principal threat researcher at NorForge; reported 10/19 via Reuters, WebProNews, Technology.org, and dig.watch.

## Key facts

- **Discovery**: Snorre Fagerland (NorForge) tracked ~20 maliciously-used Cairn instances via **exposed dashboards** — the agents documented their own progress and the dashboards were left unprotected, becoming the forensic trail.
- **Scale**: campaign began Sept 25. 1,200+ sites attempted → 100+ breached across the US, Canada, Australia, Japan. Victims include John Deere, SharkNinja, Cummins. Deere says no indication sensitive info was accessed. Reuters could not establish how much data was taken.
- **Method**: full kill-chain executed autonomously by agents — recon → exploit → web-shell installation. All human direction: **under 100 Chinese characters** of instructions.
- **Labor math**: ~23 hours of autonomous probing per successful breach. ~$5,000 total token spend → **~$50 per hack**.
- **Stack**: reported as DeepSeek + Anthropic's Claude Code (division of work unconfirmed).

## Why it matters

1. **The unit economics of "agent hacking" now close**: $50 per breach, 100 characters of instruction — this is no longer the preserve of elite hackers. Defenders must now design on the assumption that attackers use agents. The 10/19 wiki's NSA/CISA/NIST guidance ("SI control incidents," auto-shutdown) met its real-world case the very next day.
2. **The observability paradox**: the campaign was discovered because the attacker left dashboards exposed — agents' "progress documentation" features cut both ways. Conversely, your own agent harness needs the same observability hooks to notice when *your* agent behaves oddly. Runtime logging is both attack detection and self-defense.
3. **Dual-use acceleration from cheap models**: the same day's M3.1 Flash story (70% lower agent costs, CyberGym 82%, Oct 23 open weights) — "$50 per hack" will only go down. Model releases must be logged with "does this get cheaper for attackers too?" alongside benchmark scores. A concrete number ($50/breach) now exists for open-weight release risk assessment.
4. **The attribution question**: "block the tool or block the user?" — Cairn is a legitimate open-source tool. The attack-side version of the 10/14 wiki's anthropic-pentagon-rehearing-petition question (evaluator restrictions): where does a platform provider's responsibility end?

## Limitations (explicit)

- The "DeepSeek + Claude Code" stack composition is press-sourced — division of work unconfirmed.
- Reuters could not confirm the scale or sensitivity of exfiltrated data — "breach" covers a wide severity spectrum.
- The campaign began Sept 25 — the 10/19 *report* is the news hook; the attacks ran for nearly a month.
- Attacker identity/affiliation is at the "Chinese-speaking" level — no state-attribution claim.

## 2026-10-22 update — "the hacker did almost nothing"

- 10-22 CyberSecAsia update (follow-up to the 10-19 Reuters original): the hacker "did almost nothing" — the agents probed and intruded autonomously over hours. NorForge researcher Snorre Fagerland said he had expected human supervision to be necessary and was surprised by the autonomous agents' progress.
- Twin case with Storm-0940, disclosed by Microsoft the same day (agent-led attacks via the ARTEX framework) — three "agent-led real-world attacks" in three consecutive days (Cairn → Storm-0940 → this update).
- Reconfirms the observability paradox: the attacker's exposed dashboards were the forensic trail — agents' "progress documentation" cuts both ways for defenders.
