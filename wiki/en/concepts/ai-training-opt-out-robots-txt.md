---
title: "A Single robots.txt Token to Opt Out of AI Training — Four Labs Agree, IETF Individual Draft"
category: concepts
tags: [robots-txt, ai-training, opt-out, copyright, openai, google, microsoft, anthropic]
created: 2026-10-31
updated: 2026-11-23
sources:
  - "raw/articles/2026-10-31-ai-training-opt-out-robots-txt.md"
  - "raw/articles/2026-11-23-google-maps-robots-txt-41-ai-crawlers.md"
related:
  - "[[concepts/wikimedia-amicus-nyt-openai]]"
  - "[[concepts/publishers-ai-covert-use]]"
  - "[[concepts/meta-commercial-terms-delay]]"
  - "[[concepts/websites-block-ai-agents]]"
  - "[[concepts/ireland-dpc-ai-supervision]]"
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

## 2026-11-22 update — Google blocks 41 AI crawlers from its own Maps

- **The change**: Google added a `User-agent: __usage_ai-training` group to google.com/robots.txt, blocking 41 AI-training crawlers from its Maps service. PPC Land reported it on the evening of November 22. The group carries 182 rules (154 Disallow, 28 Allow). The file grew from about 6,700 to about 12,500 characters; `User-agent:` lines from 6 to 49, groups from 4 to 5.
- **Maps is the only new restriction**: the 54 existing Maps-related default rules (37 Allow + 17 Disallow) were replaced by a single `Disallow: /maps` — covering place pages, search, directions, contributor profiles, saved maps, and the Maps sitemap. Search (`/search`) and the `/goto?` redirect were already blocked for all crawlers, so they are not new.
- **Asymmetry**: Google added its own control token `Google-Extended` to the default group (`*`, `Google-Extended`, Yandex), keeping Maps open for Gemini training and grounding while closing it to the 41 external crawlers. A "shared token honored, own model exempt" structure — in tension with the spirit of the October 30 agreement.
- **The 41 named crawlers**: AI2Bot, Ai2Bot-Dolma, Amazonbot, Applebot-Extended, bedrockbot, Bytespider, CCBot, ChatGLM-Spider, ClaudeBot, cohere-training-data-crawler, Cotoyogi, DeepSeekBot, Diffbot, ElevenlabsCrawler, ExaSearchBot, FacebookBot, FriendlyCrawler, GPTBot, Grok, HySpider, ICC-Crawler, ImagesiftBot, img2dataset, KimiBot, LCC, Meta-ExternalAgent, MistralAI-Training, MistralBot, MoonshotBot, NagetBot, omgili, omgilibot, QwenBot, recraft-image-dataset, Reflectionbot, SBIntuitionsBot, Timpibot, VelenPublicWebCrawler, web-image-collection-research, Webzio-Extended, YiBot.
- **Not on the list**: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Applebot, Bingbot, Googlebot, and others continue under the default rules. No SEO-tool crawlers either.
- **Background**: the `__usage_ai-training` token is the shared AI-training opt-out token Google, Microsoft, OpenAI, and Anthropic pledged to honor on October 30, 2026 — this is its first large-scale practical application.
- **Date and reliability cautions**: the first tip-off X post landed at 14:03 UTC on November 22, 57 minutes before the reporting window opened (15:00 UTC), but the PPC Land story was written after 19:30 UTC the same day, inside the window. The robots.txt edit itself is undated (the Wayback copy from 02:04 UTC on November 17 has no new group; it appears by November 22). PPC Land's requests between 19:00 and 19:30 UTC still returned the old file, so the rollout may have been uneven or partly rolled back.

## Limitations

- Anthropic's participation is reported, not confirmed by its own announcement: no Anthropic announcement exists, and support rests on a post by the draft's author.
- Timelines are company statements, not verified enforcement.
- Whether the signal carries legal force varies by jurisdiction and litigation; that is a separate question from technical adoption.
