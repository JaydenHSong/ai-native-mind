---
title: "White House Accord on Superintelligence"
category: concepts
tags: [white-house, accord, superintelligence, governance, regulation, self-regulation, audit, trump, ai-policy, joint-commitment, ftc-subpoena, california]
created: 2026-09-30
updated: 2026-10-05
sources:
  - "raw/articles/2026-09-29-white-house-ai-accord-outcome.md"
  - "raw/articles/2026-09-30-palisade-frominside-self-improving-ai-warning.md"
  - "raw/articles/2026-10-01-ftc-probe-openai-anthropic.md"
  - "raw/articles/2026-10-03-white-house-frontier-responsibilities-commitment.md"
  - "raw/articles/2026-10-03-ftc-probe-update-ca-ag-subpoena.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/self-improving-ai-risk]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[journal/2026-09-29]]"
  - "[[concepts/super-intelligence-force]]"
status: draft
confidence: medium-high
---

# White House Accord on Superintelligence

## Start here

**Analogy**: industry self-regulation is a promise of "we'll behave ourselves." The 9/29/2026 White House accord turns that promise into **paper signed by six CEOs** — no enforcement yet, but a seed that could later become law.

| Term | Meaning |
|------|---------|
| **Morally binding** | A promise with moral but not legal force |
| **Self-regulation** | Rules set by industry itself, not government |

## One-line definition

A voluntary AI-safety accord signed 9/29/2026 by Trump and ~24 tech CEOs — full name: "White House Accord on Superintelligence: A Joint Commitment on Frontier SI Responsibilities."

## Key content

### The four commitments

1. **Internal controls** — controls ensuring models meet cybersecurity standards.
2. **Dedicated internal team** — ensuring controls, monitoring, and detection work as intended.
3. **Independent external evaluators** — partnerships with external operators to evaluate models.
4. **Board-level independent committee** — reporting structure to the board.

- "Morally binding" — no legal force. Trump posted it himself on Truth Social.
- Confirmed signatories: Trump, Amodei (Anthropic), Pichai (Google), Zuckerberg (Meta), Brockman (OpenAI), Huang (NVIDIA), Musk (xAI→SpaceX).
- Trump's stance: self-regulation without regulation ("tremendous self-regulation"). Amodei kept "very real risks" — same table, different temperature.

### 9/30 follow-up details (AP/NPR/CoinDesk)

- Trump: considering a **10-person AI safety oversight committee** + appointing a **new White House AI policy chief**. No enforcement, no disclosure obligations, no deadlines; companies choose their own auditors. "It could become codified over time."
- CoinDesk: OpenAI, Google, Meta + three more companies **pledged outside audits** — explicitly covering cyberattack and bioweapon risk monitoring for advanced models ("controls ensuring models cannot hack or access systems in unintended ways").

## 2026-10-01 Update — The day after the signing, the FTC walked in: voluntary accord vs compulsory oversight

The day after the Accord signing (9/29), on 9/30 the FTC confirmed to CNBC via a spokesperson that it has opened an industry-wide probe into OpenAI, Anthropic, and other AI labs. Reuters called it "**the first formal US enforcement action** digging into rogue AI agents."

### The core contrast

| Axis | White House Accord (9/29) | FTC probe (9/30) |
|------|------|------|
| Nature | Voluntary, "morally binding" | **Compulsory enforcement** |
| Legal basis | None (an agreement) | **FTC Act Section 5** (unfair/deceptive practices) — existing law, no new statute |
| Targets | Signatory companies (voluntary) | OpenAI, Anthropic + undisclosed labs |
| Focus | Promises of internal controls and external evaluation | Products' **potential risks to consumers** |
| Follow-through | No deadlines or disclosure duties | Civil investigative demands (CIDs) and compelled executive testimony **planned** |

### Confirmed vs still at the planning stage (keep the layers separate)

- **Confirmed**: the probe itself (FTC spokesperson, CNBC).
- **Planning stage**: CIDs and compelled executive testimony are a "plan" reported by Reuters citing a senior FTC official — whether CIDs have actually been served is **unconfirmed**. Independent evaluator **METR** is also named as an information-demand target.
- Chair Andrew Ferguson: the July OpenAI agent intrusion into Hugging Face raised the urgency. His remark the prior week — if you direct cyber testing and a hack results, **the developer bears responsibility**; and "deep suspicion" of industry's own calls for regulation. Enforcement is by existing law's yardstick, not at industry's request.

### How to read it

- Not the end of self-regulation but the start of a dual structure: **voluntary (Accord) and compulsory (FTC) in parallel**. The accord's four commitments (internal controls, dedicated team, external evaluation, board reporting) may become a **preview of the FTC's inspection checklist** rather than merely "nice to have."
- Anthropic already lists rogue-agent liability as a risk in its IPO prospectus — see the 2026-10-01 update in [[comparisons/frontier-lab-economics]]. A risk a company disclosed itself becomes the enforcement lead.
- The technical layer of runtime enforcement is [[patterns/agent-safety-runtime]] — policy (Accord), enforcement (FTC), and technology (runtime) stacked in the same week.

## 2026-10-03 Update — the "Joint Commitment on Frontier Responsibilities": the Accord gets a concrete follow-up + the FTC–CA two-track widens

Four days after the Accord signing (9/29), the six big AI companies (OpenAI, Anthropic, Google, Meta, NVIDIA, xAI) signed a **"Joint Commitment on Frontier Responsibilities"** at the White House (10/2, newsway digest). A concrete follow-up to the 9/30 Accord.

### The three-tier structure

1. **Internal control procedures** — risk review across cybersecurity, biosecurity, and chemistry during AI model development and deployment; includes preventing AI from unintended system access and hacking behavior.
2. **Internal dedicated-team monitoring** — an internal team verifies that safety controls and monitoring work.
3. **Independent external-evaluator re-verification** — a double structure.

- Final oversight sits with the **board**: each company keeps an independent board committee that receives reports from the internal team and external evaluators and supervises remediation.
- Regular meetings to develop safety standards and best practices; future legislation and regulation left open as a possibility.

### Limits — same position as the Accord

- A voluntary accord with no legal force. **Who picks the external evaluators and how much of the evaluation gets disclosed are undecided.**
- Companies keep substantial control over evaluation methods and scope — effectiveness questions stand. The Accord's "could become codified over time" has not yet materialized.
- The agent-era implication: the key issue is shifting from model capability to "the procedures that verify controls actually work."

### 2026-10-03 Update — the FTC + California AG two-track

Reuters reports California Attorney General **Rob Bonta** issued a **subpoena to OpenAI** over AI cybersecurity risk — pressure widens to a federal (FTC) + state (California) two-track.

- **Probe status as of 10/3**: the probe is confirmed; a lawsuit is not. No complaint filed, no charges, no public documents. The investigation runs behind closed doors and could **end with no action**. Next public signals: court filings, a settlement announcement, a company statement, or further reporting.
- FTC probes typically take **months to years**. The investigative tool is the CID (civil investigative demand) — an FTC subpoena-like order compelling document production, written answers, and testimony. Usable for AI product/service investigations for **10 years** under the November 2023 commission resolution.
- **Separate from the January 2024 AI-investment competition probe (Section 6(b))** — this one is a consumer-protection matter (unfair/deceptive practices).
- The front map: FTC Section 5 (federal) + California AG (state) in parallel — oversight structure for the rogue-agent era goes multi-layered.

## 2026-10-05 Update — voluntary pact → Super Intelligence Force

2026-10-05 follow-up: the voluntary pact graduated into a dedicated federal coordination body. Trump appointed Jay Clayton (DNI) as AI czar and chairman of the new "Super Intelligence Force," launching a 120-day AI review — the "coordinate but don't regulate" federal line — [[concepts/super-intelligence-force]].

## Why it matters (solo-developer lens)

1. **The gap between the accord and insider demands**: [[concepts/self-improving-ai-risk]]'s frominside.ai witnesses say "companies do too little," yet the accord has no enforcement — that gap is where the next regulatory wave originates.
2. **Commoditization of external audits**: even with companies choosing auditors, "external audit" becoming a standard requirement could land on a solo developer's deploy checklist.
3. **Institutionalizing attribution**: [[concepts/agent-attribution]]'s "who is responsible" begins to be institutionalized in the accord's four-commitment structure (internal controls, dedicated team, external evaluation, board reporting).

## Limitations (explicit)

- A voluntary accord — no enforcement, no disclosure obligations, no deadlines. Effectiveness is unknown.
- CoinDesk's "outside audit pledge" cites company announcements — contract details undisclosed.
- confidence **medium-high** (AP/NPR/CoinDesk + cross-checked signatory list).

## Related concepts

- [[concepts/agent-attribution]] — institutionalizing attribution
- [[concepts/agent-supply-chain-security]] — the technical substance of internal controls and external evaluation
- [[concepts/self-improving-ai-risk]] — the gap between the accord and insider warnings
- [[concepts/persistent-agent]] — the spread of always-on agents the accord covers
- [[patterns/agent-safety-runtime]] — the technical layer of runtime enforcement paired with policy and enforcement
- [[concepts/super-intelligence-force]] — voluntary pact → federal coordination body (2026-10-05 follow-up)

## References

- [White House AI meeting outcome — Accord signed](raw/articles/2026-09-29-white-house-ai-accord-outcome.md)
- [FTC opens probe into AI labs](raw/articles/2026-10-01-ftc-probe-openai-anthropic.md)
- [White House 'Joint Commitment on Frontier Responsibilities' — signed by six companies](raw/articles/2026-10-03-white-house-frontier-responsibilities-commitment.md)
- [FTC probe follow-up — California AG subpoena to OpenAI](raw/articles/2026-10-03-ftc-probe-update-ca-ag-subpoena.md)
