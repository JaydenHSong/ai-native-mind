---
title: "Agent Scientific Discovery"
category: patterns
tags: [agentic-research, scientific-discovery, evaluation, anthropic, claude, claims, openai, math-discovery, agmai, verification-asymmetry]
created: 2026-09-25
updated: 2026-10-08
sources:
  - "raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md"
  - "raw/articles/2026-09-26-stanford-paper2agent.md"
  - "raw/articles/2026-10-07-openai-377-math-results-github.md"
  - "raw/articles/2026-10-08-openai-722-math-manuscripts.md"
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

### 2026-10-06/07 — OpenAI's 722 math manuscripts on GitHub: peak verification asymmetry

Where Claude's ART case is "agents discovering with wet-lab collaboration," OpenAI's math dump is **"a frontier lab monopolizing discovery with a closed model"** — the discovery pipeline's input (the model) is itself closed. (Correction: yesterday's "377 results" was the early count; the full release is 722 manuscripts / 372 result families.)

- **Scale**: 722 manuscripts = 372 result families released on GitHub on the night of 10/6 — selected from ~4,000 problems posed to the unreleased internal model. Apache-2.0 license. GitHub Issues disabled on the repository.
- **Claims**: a spokesperson says "almost every one of the results" came from handing a single prompt to a single AI agent, averaging ~3 hours of ChatGPT Pro thinking per result. Samples: the quasi-Riemann hypothesis (a weaker form of the Riemann hypothesis), the four-dimensional Kakeya conjecture, the irrationality of Catalan's constant.
- **Verification status**: only 162 manuscripts (~22%) have Lean-formalized main results. Abridged reasoning summaries released for just 10 results. OpenAI warns some unformalized results "could have issues." An arXiv audit of the 8/1 results found no confirmed substantive error (October batch not covered).
- **Mathematicians: "show us the receipts"**: IAS's AGMAI (9/29) recommended disclosing model names, prompts, reasoning summaries, and compute costs. OpenAI released only average compute times and some statistics — no prompts. Spokesperson: OpenAI is "not bound" by the recommendations. MIT's Andrew Sutherland: the single-agent claims stay unverified "until and unless they release the model and people can replicate their results." Terence Tao: problems are being harvested faster than the field can absorb them.
- **Precedent**: at the Navier-Stokes announcement, the NYT reported OpenAI had "swooped in and finished" work another mathematicians' team was doing with AI — the discovery race's academic-ethics problem.
- **Read through this page's template**: the "literature grounding → in-silico hypothesis → validation" pipeline runs, but the **verification-separation principle breaks** because the math community cannot access the model. Results are open (Apache-2.0); the process (model, prompts, Issues) is closed — and with mathematicians now answering through reproducibility norms, **verification asymmetry** has hardened into this pattern's canonical case.

→ Beyond "who discovers," **"how open the discovery tool is"** becomes the new question. AGMAI's demand is effectively a demand for model release in the name of verifiability.

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