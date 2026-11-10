---
title: "NYT and Three Newspapers Sue Brave — AI Index Sales and Paywall Bypass Alleged"
category: concepts
tags: [nyt, brave, copyright, lawsuit, scraping, paywall]
created: 2026-11-04
updated: 2026-11-04
sources:
  - "raw/articles/2026-11-04-nyt-brave-lawsuit.md"
related:
  - "[[concepts/wikimedia-amicus-nyt-openai]]"
  - "[[concepts/ai-training-opt-out-robots-txt]]"
  - "[[concepts/publishers-ai-covert-use]]"
status: draft
confidence: high
---

# NYT and Three Newspapers Sue Brave — AI Index Sales and Paywall Bypass Alleged

## Start here

**Analogy**: a library accused of secretly copying books, selling the copies to other shops, and handing out keys to the locked reading room. This is still the complaint stage, not a verdict — a court will decide what is true.

| Term | Meaning |
|------|------|
| **RAG** | Retrieval-augmented generation: answering by attaching retrieved documents to a model |
| **DMCA §1201** | The US copyright provision banning circumvention of technical protection measures |

## One-line definition

Filed 2026-11-02: The New York Times and three other newspapers sued Brave in Manhattan federal court, alleging it copied journalism into an index it sells to AI companies and distributed articles through AI answers and a paywall-bypass setting.

## Key facts

- **Cases**: NYT v. Brave, S.D.N.Y. No. 26-cv-9549 (a 72-page complaint), and a second case, No. 26-cv-9554, from the Daily News, Chicago Tribune and Orlando Sentinel. The same firm represents both sets of plaintiffs, both demand a jury trial, and both seek damages and a permanent injunction.
- **The index**: a Brave Index of more than 30 billion pages. The plaintiffs allege Brave scraped billions of pages without identifying its crawler, leaving site operators unable to block it.
- **Three alleged uses**: (1) Ask Brave answers queries with index content via RAG, sometimes including verbatim text — the complaint cites reproducing 400+ words from a paywalled article given only its URL, and returning 1,291 of 1,295 words in one LLM Context query. (2) The Brave Search API and LLM Context endpoint sell real-time content access to AI companies — the complaint names Anthropic, Perplexity, Mistral, xAI and Cohere as customers. (3) The browser's 'Paywall blocker' setting bypasses paywalls, and built-in ad blocking replaces publishers' ads with Brave's own.
- **Claims**: direct, contributory and vicarious copyright infringement, DMCA §1201 anti-circumvention, and New York unjust enrichment — five counts. The Times says it sent a cease-and-desist letter to Brave's CEO on August 11, 2025.
- **Current status**: as of November 3, no public or court response from Brave had been reported. The named AI companies are not defendants.

## Why it matters (solo-developer view)

1. **Data provenance is legal risk**: whichever path content enters through — index, API or RAG — the rights status of the source becomes the product's risk. Provenance and permission records in the data pipeline are essential.
2. **Training and RAG are splitting**: the Wikimedia amicus drew the same line — training may be fair use, RAG must honor licenses. Designs that regurgitate retrieved text are far riskier than training.
3. **Crawler identification is evidence**: failure to identify the crawler is one pillar of the complaint. Robots.txt and crawler identification are not courtesy — they are exhibits in a dispute.

## Limitations (stated)

- All of this is at the plaintiffs' allegation stage, with no court finding. Brave's rebuttal has not been reported.
- This summary relies on complaint-summary reporting and has not been checked against the full complaint text.

## Sources

- [NYT–Brave lawsuit source](raw/articles/2026-11-04-nyt-brave-lawsuit.md)
