---
title: "Wikimedia's Amicus Brief — Training May Be Fair Use, RAG Must Honor Licenses"
category: concepts
tags: [wikimedia, copyright, fair-use, openai, nyt, rag, lawsuit]
created: 2026-10-30
updated: 2026-10-30
sources:
  - "raw/articles/2026-10-30-wikimedia-amicus-nyt-openai.md"
related:
  - "[[concepts/rag]]"
  - "[[concepts/ai-doom-loop]]"
  - "[[concepts/publishers-ai-covert-use]]"
status: draft
confidence: high
---

# Wikimedia's Amicus Brief — Training May Be Fair Use, RAG Must Honor Licenses

## TL;DR

On October 30, 2026, the Wikimedia Foundation asked the US District Court for the Southern District of New York for leave to file an amicus brief in the consolidated OpenAI copyright litigation, best known as NYT v. OpenAI/Microsoft. Supporting neither party, it argues that pre-training on copyrighted work may qualify as fair use when the resulting model is something new and different — but that retrieval-augmented generation (RAG) and grounding that return source material to users is not fair use and must honor licenses, including Wikipedia's CC BY-SA 4.0.

## Key facts

- **Case**: `In re: OpenAI, Inc. Copyright Infringement Litigation`, consolidating 12 lawsuits against OpenAI. The best-known member, filed by The New York Times in 2023, alleges OpenAI and Microsoft used Times content without permission, including for training. The court will rule on whether AI companies' use of copyrighted content to develop LLMs constitutes fair use.
- **Training**: using copyrighted works in pre-training may be fair use when the model becomes something new and different from the sources, with no licensing requirement. An over-restrictive ruling would inhibit innovation and open-source tools, Wikimedia argues.
- **RAG and grounding**: when a system retrieves material in response to a user question and delivers it while supplanting engagement with the original, the output substitutes for the original rather than transforming it, so it is not fair use and must respect licensing. For Wikipedia that means CC BY-SA 4.0 (attribution plus share-alike).
- **Procedural status**: the filing, dated October 29, 2026 and addressed to Judge Sidney H. Stein, is a letter motion for leave to file, with the proposed 5,831-word brief attached (within the court's 6,000-word limit). It is not yet an accepted brief and not a ruling. Engine Advocacy, Authors Alliance, Public Knowledge, and others joined the amicus wave on October 28–29.
- **Two-sided risk framing**: blanket fair use would push the web closed by weakening the secondary sources that keep it open; over-restriction would stifle open knowledge tools. The position comes from Wikipedia's dual role as both training data and RAG citation target.

## Why it matters

1. **A legal boundary for RAG design**: training and citation-reproduction are different acts in law. Attribution and license compliance in RAG products may become legal requirements, not just features.
2. **The survival condition of open knowledge**: if Wikipedia is absorbed into AI answers without traffic or contributions returning, the next generation of training data dries up. "Free data" has a sustainability problem.
3. **Read amicus filings correctly**: a motion for leave is not a ruling. Whether the court accepts the brief, and how it cites it, is the next thing to watch.

## Limitations

- This is an argument to the court, not a decision; even acceptance of the brief is still pending.
- Fair use is a four-factor, case-by-case test, so this case's outcome will not automatically generalize to all training or RAG uses.
- What counts as an "adaptation" under CC BY-SA 4.0 remains separately debatable.
