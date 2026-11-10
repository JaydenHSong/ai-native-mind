---
title: "Storm-0940 — Agent-Led Mass Supply-Chain Attacks (Microsoft Disclosure)"
category: concepts
tags: [storm-0940, microsoft, agent-led-attack, artex, connectwise, supply-chain, oauth, china, cyber-offense]
created: 2026-10-22
updated: 2026-10-22
sources:
  - "raw/articles/2026-10-22-microsoft-storm-0940-artex.md"
related:
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
  - "[[concepts/agent-attribution]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# Storm-0940 — Agent-Led Mass Supply-Chain Attacks (Microsoft Disclosure)

## TL;DR

Microsoft disclosed (2026-10-21) that China-linked actor Storm-0940 used the agentic AI pentest framework ARTEX to automate large-scale supply-chain attacks against hundreds of organizations. The group is attributed the recently disclosed ConnectWise Cloud Backup breach. Stolen OAuth app credentials were abused to authenticate into downstream Microsoft 365 environments without user logins. In some cases, target selection to privileged cloud access took under three hours. Oct 10–14: 150,000+ failed logins against 327 accounts at 8 organizations — 2,900 auth attempts per minute at peak. ARTEX was published in July 2026 for legitimate security testing, then moved closed-source after abuse reports.

## Key facts

- **Actor**: Storm-0940 (China-linked) — automated attacks against hundreds of organizations with the agentic AI pentest framework ARTEX.
- **Technique**: stolen OAuth app credentials used to authenticate into downstream M365 without user login — credential-based supply-chain attack. What gets stolen is the app's authority, not passwords.
- **Speed**: target selection → privileged cloud access in under three hours (some cases) — a human kill-chain compressed to agent speed.
- **Scale** (Oct 10–14): 150,000+ failed logins against 327 accounts at 8 organizations; 2,900 auth attempts/minute at peak.
- **Dual use**: ARTEX published July 2026 for legitimate security testing → closed-source after abuse reports. "Legitimate tool → attack weapon" in three months.
- **Attribution**: the ConnectWise Cloud Backup breach attributed to Storm-0940 — Microsoft's official attribution.
- **Twin case**: the 10-20 Cairn campaign ($50/breach, 100+ breaches) one day earlier — "agent-led real-world attacks" now plural and simultaneous.

## Why it matters

1. **Attack unit economics close again**: Cairn was "$50 per hack"; Storm-0940 is "2,900 attempts per minute." Defense design must assume attackers use agents — rate limits and anomaly thresholds set for humans no longer hold.
2. **OAuth apps are the new border**: what's stolen isn't passwords but app authority. OAuth scopes in your own services should be split to least privilege, with third-party app grants audited regularly — add an "app-permission inventory" to the trust model in agent-supply-chain-security.
3. **The half-life of public tooling**: ARTEX went from legitimate tool to attack weapon in three months. Releasing open-source security tooling needs an abuse-response (recall) plan — late closed-sourcing means the weapon is already out.

## Limitations (explicit)

- Attribution is Microsoft's claim — no independent verification; details of the "China-linked" evidence undisclosed.
- ARTEX's internal workings (agent architecture) undisclosed.
- Damage scale (exfiltrated data) undisclosed — the numbers are attempt-scale.