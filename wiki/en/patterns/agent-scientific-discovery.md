---
title: "Agent Scientific Discovery"
category: patterns
tags: [agentic-research, scientific-discovery, evaluation, anthropic, claude, claims]
created: 2026-09-25
updated: 2026-09-26
sources:
  - "raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md"
  - "raw/articles/2026-09-26-stanford-paper2agent.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/mcp]]"
status: draft
confidence: medium
---

# Agent Scientific Discovery

## Start here

**Analogy**: 950 grad students were given a one-line instruction — "find interesting reverse transcriptases in this pile of viral DNA" — and 21 hours. They surfaced an enzyme system nobody had characterized. That's what Anthropic's Claude agents did with a CRISPR-like enzyme (ART). The phrase "AI discovered it" is half true — **the agents produced the hypothesis; the lab and peer review still own the verification**.

| Term | Meaning |
|------|---------|
| **In-silico** | Experiments and analyses done purely inside a computer (the opposite of wet-lab) |
| **ART** | Array-associated Reverse Transcriptases — the name of the enzyme system found this time |

## One-line summary

The research-grade agent discovery pipeline — **literature grounding → in-silico hypothesis → wet-lab validation** — where the agents own the discovery but a claim only becomes knowledge after passing the verification pipeline.

## Problem

Every "AI discovers X" headline replays the same argument.

- **Expectation**: agents automate scientific discovery
- **Reality**: discovery claims stall at the pre-print/blog level and dissolve into debates over reproducibility and autonomy framing
- This case's HN thread (566 pts): (a) the RT itself was already known — only the arrangement around it is new, (b) a blog post is not a refereed paper, (c) weak reproducibility of LLM-driven searches, (d) overstated autonomy

## Solution — the 3-stage discovery template

### 1. Literature grounding

The agents didn't dig blindly. Claude agents collected 200,000 reverse transcriptases, narrowed them to 3,500 candidate systems, and wrote 20 reports — checking each stage against the literature to filter out "already known."

### 2. In-silico hypothesis

One agent's log: "The DNA next to the RT is spectacular: I can see by eye a tandem repeat array ... that's a CRISPR-like ... repeat array?!"

What the agent then did:

1. Counted the repeats and measured their spacing
2. Compared the layout against known RT systems
3. Searched the literature for any prior report of the pattern
4. Escalated it as a report for human review

→ "Discovery" is not one inference — it's the output of a **measure → compare → literature-check → report** pipeline.

### 3. Wet-lab validation

- Follow-up analysis and experiments in Anthropic's wet lab — confirmed the array is expressed as distinct short RNAs (the basis for the CRISPR-guide-RNA analogy)
- ART's **function is still unknown** — no claim that it is programmable
- Feng Zhang (MIT·Broad), after reviewing the pre-print: "genuinely intriguing"
- No peer review yet — Anthropic itself called the announcement "admittedly premature"

### 2026-09-26 — Paper2Agent: from paper to working agent in ~45 minutes, ~$14

- Stanford's Paper2Agent (Nature, 2026-09-16; Miao, Davis, Zhang, Pritchard, Zou) turns a computational-biology paper into a working **MCP-based agent** in about 45 minutes for roughly **$14** per paper.
- 74 of 100 papers successfully "agentified"; 593 validated tools; on AlphaGenome benchmarks the agent reached **98.7% vs. 82.7%** for the direct-repo baseline; 91.2% average across benchmarks.
- The upgrade over this page's template: **literature grounding is upgraded into callable tools** — the paper's methods become MCP tools the agent actually invokes ("virtual corresponding author").
- The 26 failures double as a **reproducibility audit** — papers that couldn't become agents often couldn't be reproduced at all.
- Open questions: author consent for agentification, and generalization beyond computational biology.

## Example application

A checklist for handing "discovery" to agents:

1. **Narrow the search space with literature first** — make explicit what counts as "new"
2. **Hypotheses as reports** — including measurements, comparisons, and prior-work checks
3. **Separate the verifier** — the discovering agent ≠ the validating party (wet lab, peer review)
4. **Grade claim strength by stage** — hypothesis / in-silico support / lab confirmation / peer passage

## Trade-offs

| Strengths | Limits |
|-----------|--------|
| Analysis that takes an expert weeks-to-months, done in 21 hours | Human involvement was "initial prompt + wet lab" — the prompt design's contribution is opaque |
| The scale of 950 parallel searching agents | 210M tokens — not a cheap run |
| The discovery process is logged and auditable | Weak reproducibility — re-running the search may not reproduce the result |

## Related patterns

- [[concepts/llm-evaluation|LLM Evaluation]] — the evaluation frame for "AI discovers X" claims (stage-graded verification)
- [[concepts/harness-engineering|Harness Engineering]] — the harness orchestrating 950 agents' search is itself the key infrastructure

## Sources

- [Claude agents identify a CRISPR-like enzyme system (ART) — 950 agents, 21 hours, 210M tokens](raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md)