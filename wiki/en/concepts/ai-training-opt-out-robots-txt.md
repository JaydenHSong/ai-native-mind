---
title: "A Single robots.txt Token to Opt Out of AI Training — Four Labs Agree, IETF Individual Draft"
category: concepts
tags: [robots-txt, ai-training, opt-out, copyright, openai, google, microsoft, anthropic]
created: 2026-10-31
updated: 2026-10-31
sources:
  - "raw/articles/2026-10-31-ai-training-opt-out-robots-txt.md"
related:
  - "[[concepts/wikimedia-amicus-nyt-openai]]"
  - "[[concepts/publishers-ai-covert-use]]"
  - "[[concepts/meta-commercial-terms-delay]]"
status: draft
confidence: high
---

# A Single robots.txt Token to Opt Out of AI Training — Four Labs Agree, IETF Individual Draft

## TL;DR

On October 30, 2026, OpenAI, Google, Microsoft, and Anthropic agreed on a single robots.txt policy token for opting out of AI training: `User-Agent: __usage_ai-training` plus `Disallow: /`. The token is defined in an individual IETF Internet-Draft by Anthropic's Kevin Kelley — not an adopted standard — and rollout timelines differ by lab.

## Key facts

- **Signal**: publishers write `User-Agent: __usage_ai-training` with `Disallow: /` in robots.txt to express a training opt-out, replacing separate per-crawler opt-outs.
- **Standard status**: IETF individual draft `draft-kelley-aipref-training-preference-signal-00` (dated October 30, expiring May 3, 2027). It is not an adopted standard and carries no IETF endorsement; no consensus was declared at the October 21 AIPREF meeting.
- **Timelines**: Anthropic says implementation has begun; OpenAI says "in the coming months"; Microsoft targets February 1, 2027; Google targets early 2027 with no firm date. Microsoft is also adding a separate control for AI grounding (live retrieval into answers), and says NoArchive/NoCache will stop counting as a training/grounding preference after March 1, 2027.
- **Scope**: training only. It does not block crawling, search indexing, or AI answers, and it does not remove content already in datasets or trained into models. Google maps the shared token onto Google-Extended, which also withdraws content from Gemini grounding — a divergence from Microsoft's training-only reading.
- **Exceptions**: Meta voiced support but did not commit to honoring the token. Private licensing deals may override the signal.

## Why it matters

1. **Publisher consent becomes machine-readable**: a legal and policy dispute over training data turns into a one-line configuration. Protecting one's own content shifts from legal documents to a settings file.
2. **Training and grounding split**: the same token means different things at Google (grounding excluded) and Microsoft (training only). Developers building RAG or grounding must handle the per-lab mapping in code.
3. **Still a promise, not protection**: it is not yet a standard, and implementation dates differ by lab. Designing a product on the assumption that the token protects content would be premature.

## Limitations

- Anthropic's participation is reported, not confirmed by its own announcement: no Anthropic announcement exists, and support rests on a post by the draft's author.
- Timelines are company statements, not verified enforcement.
- Whether the signal carries legal force varies by jurisdiction and litigation; that is a separate question from technical adoption.
