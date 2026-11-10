---
title: "UK CSRB 'AI Agent Loss of Control' Clause — The First Statutory Enforcement Regime Keyed to Agent Behavior"
category: concepts
tags: [uk, csrb, ai-agent, loss-of-control, regulation, enforcement, legislation, kill-switch]
created: 2026-10-20
updated: 2026-10-20
sources:
  - "raw/articles/2026-10-20-uk-csrb-ai-agent-loss-of-control.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/white-house-ai-incident-reporting-mandate]]"
  - "[[concepts/shutdown-evasion]]"
  - "[[concepts/uk-ico-ai-privacy-commitments]]"
status: draft
confidence: high
---

# UK CSRB "AI Agent Loss of Control" Clause — The First Statutory Enforcement Regime Keyed to Agent Behavior

## TL;DR

A new clause tabled 2026-10-19 among 101 government amendments to the UK's Cyber Security and Resilience Bill (CSRB): **"Functions of the Secretary of State: loss of control of artificial intelligence agent."** Where a compromise "is or may be attributable to **loss of oversight or control of an AI agent**" (or the risk thereof), the Secretary of State gains investigatory/enforcement functions — **entry/inspection/search of premises, seizure of documents, compelled testing and interviews, extraterritorial requirements (documents/actions outside the UK), financial penalties**. The definition of 'AI agent' is delegated to regulations (no settled legal definition — DCMS memorandum). Report-stage vote Oct 26. Verified via Yeandel, Telecompaper, MLex, and The Register.

## Key facts

- **The clause**: tabled 10/19 among 101 government amendments — "Functions of the Secretary of State: loss of control of artificial intelligence agent." Regulations under Clause 29(1) give the Secretary of State investigatory/enforcement functions.
- **Trigger**: a compromise "is or may be attributable to loss of oversight or control of an AI agent" (or risk thereof) — the first statutory enforcement regime keyed directly to an agent's *behavior* (loss of control).
- **Powers**: entry/inspection/search of premises, seizure of documents, compelled testing and interviews, **extraterritorial requirements** (documents/actions outside the UK), financial penalties.
- **Delegated definition**: "'AI agent' has the meaning given by regulations made by the Secretary of State" — no settled legal definition (DCMS Supplementary Delegated Powers Memorandum, 10/19). Definitions go through affirmative-resolution procedure (Parliament votes, cannot amend).
- **Reversed posture**: in September AI vendors were explicitly kept outside scope; now enforcement is keyed to agent behavior.
- **Timeline/context**: report stage Oct 26. Peers' amendments (Baroness Harding, Clement-Jones, Kidron) propose a statutory AI Security Institute role instead — competing with the government clause. Same-day cluster: The Register on UK finance watchdogs demanding AI failure/close-call reporting.

## Why it matters

1. **The kill switch becomes a legal defense**: with "loss of control" as the trigger, agent builders face a world where **no shutdown hook and no oversight logs can mean enforcement exposure**. The 9/28 wiki thread on "runtime enforcement" crosses from recommendation to obligation. Harnesses need "how it stops" and "records of stopping" from day one.
2. **Regulatory convergence**: 10/10 White House incident-reporting mandate (US) + 10/19 NSA/CISA/NIST voluntary guidance + 10/20 UK CSRB enforcement clause — the "report → recommend → enforce" ladder assembled on both sides of the Atlantic within 10 days. The map of "what's guidance vs what's mandatory" for agent builders is being drawn now.
3. **Uncertainty from delegated definitions**: delegating the 'AI agent' definition to regulations means **what you're building today could fall inside the definition tomorrow**. Chatbot and workflow builders who think "I don't build agents" should keep the scope question open. With affirmative resolution, the definition fight sits with the executive.
4. **The weight of extraterritoriality**: requirements reaching documents and actions outside the UK — the "which country's law applies" question becomes real for builders running agent infra distributed across clouds.

## Limitations (explicit)

- Still a bill — report stage Oct 26, with parliamentary procedure remaining. The "enforcement regime" describes the tabled clause.
- The 'AI agent' definition is empty — real scope undecided until follow-on regulations.
- Government clause vs peers' amendments (statutory AISI role) still competing — final shape fluid.
- Yeandel is a parliament-watching specialist (primary sources linked: Parliament Bills API, DCMS memo) — legal interpretation cross-checked with MLex.
