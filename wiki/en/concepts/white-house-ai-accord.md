---
title: "White House Accord on Superintelligence"
category: concepts
tags: [white-house, accord, superintelligence, governance, regulation, self-regulation, audit, trump, ai-policy]
created: 2026-09-30
updated: 2026-10-01
sources:
  - "raw/articles/2026-09-29-white-house-ai-accord-outcome.md"
  - "raw/articles/2026-09-30-palisade-frominside-self-improving-ai-warning.md"
  - "raw/articles/2026-10-01-ftc-probe-openai-anthropic.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/self-improving-ai-risk]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[journal/2026-09-29]]"
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

## References

- [White House AI meeting outcome — Accord signed](raw/articles/2026-09-29-white-house-ai-accord-outcome.md)
- [FTC opens probe into AI labs](raw/articles/2026-10-01-ftc-probe-openai-anthropic.md)
