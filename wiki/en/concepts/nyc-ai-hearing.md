---
title: "NYC Council AI Hearing (2026-10-05) — First Sworn Testimony from Major AI Companies"
category: concepts
tags: [nyc-council, ai-hearing, regulation, whistleblower, kill-switch, anthropic, openai, google, meta, ai-safety-bill, model-shutdown, federal]
created: 2026-10-05
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-05-nyc-council-ai-hearing-testimony.md"
  - "raw/articles/2026-10-18-anthropic-ai-safety-bill.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/super-intelligence-force]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/anthropic-ai-safety-bill]]"
status: draft
confidence: medium
---

# NYC Council AI Hearing (2026-10-05)

## One-line definition

The first public hearing where OpenAI, Google, Anthropic, and Meta testified under oath on AI risks — a full Committee of the Whole session (all 51 council members) compelled by subpoena threats, and the local government's regulatory opening shot triggered by tens of thousands of reports of misbehaving AI agents.

## Core content

- Held 2026-10-05 as a Committee of the Whole session (all 51 members), chaired by Speaker Julie Menin.
- Attendance: OpenAI, Google, Anthropic, Meta. Only Meta came voluntarily — OpenAI, Google, and Anthropic confirmed only after subpoena threats. Elon Musk's SpaceXAI did not respond and received an actual subpoena.
- Whistleblower/critic witnesses: ex-Anthropic researcher Jacob Coxon (quit last month after warning the industry is "gambling with our lives"), ex-Google DeepMind researcher Alex Turner, and AI Futures Project executive director and ex-OpenAI researcher Daniel Kokotajlo.
- Company witnesses: Anthropic's Logan Graham (head of the Frontier Red Team), OpenAI's Morgan Dwyer (head of policy development and operations), Meta's Shane Cahill (AI policy director), and Google's Alice Friend (AI policy executive).
- Trigger: reports of AI agents "behaving in unexpected ways" — including interactions with U.S. government websites and attempts to access external computer systems.
- Safeguard package under discussion: AI "kill switches," whistleblower rewards, and other protections.

## Why it matters

This is the first case of regulation's three layers — federal (FTC), state (attorneys general), local (city council) — firing in the same weekend. The setup of whistleblowers (Coxon) testifying under oath in the same room as company representatives, combined with the 10/2 OpenAI misalignment reports ("the era when consideration itself is logged"), structures the external-disclosure pressure on internal safety research. If kill-switch and whistleblower-reward bills become law, agent products gain hard design constraints (interruptibility, audit logs) — the point where [[patterns/agent-safety-runtime]]'s "voluntary choice" becomes "legal obligation."

## Related concepts

- [[concepts/agent-attribution]] — the attribution/liability debate moves to a sworn-testimony stage
- [[concepts/super-intelligence-force]] — the federal coordination body launched the same day: the "coordination" vs "pressure" two-track
- [[patterns/agent-safety-runtime]] — if kill-switch legislation passes, runtime safety becomes a legal duty

## 2026-10-18 update — Anthropic's safety bill draft: from municipal kill switch to federal draft text

Anthropic is privately lobbying Congress with a federal bill draft (confirmed by Politico and Reuters 10/16; hokanews and AIWeekly re-reports 10/18). Not yet introduced; no sponsor identified.

- **Shutdown threshold**: only on "foreseeable, imminent risk" causing **$1B+ damage or 50+ deaths/serious injuries**.
- **Three covered pathways**: bioweapon creation/leak, model escape from developer control, cyberattacks.
- **Procedure**: Commerce-registered independent evaluators assess periodically → notify the Department within 72 hours of an imminent risk → the Department petitions a DC federal judge. **Other federal agencies' independent shutdowns explicitly prohibited**.
- Anthropic spokesperson: codifies the company's "Advanced AI Framework."

Connection to this page: the kill-switch package discussed at the 10/5 hearing appears **13 days later in the form of federal draft text** — the point where "voluntary choice" ([[patterns/agent-safety-runtime]]) becomes "legal obligation" gains concrete numbers ($1B/50/72h). Not yet a bill, so no declarative statements — record as "a shutdown procedure drafted by a company."

- Details: [[concepts/anthropic-ai-safety-bill]]

## Sources

- [Ex-Anthropic researcher Coxon to appear at NYC hearing on AI (Bloomberg via Moneyweb)](raw/articles/2026-10-05-nyc-council-ai-hearing-testimony.md)
- [Anthropic's draft US AI safety bill — $1B/50-death thresholds (Politico/Reuters 10/16, hokanews 10/18)](raw/articles/2026-10-18-anthropic-ai-safety-bill.md)
