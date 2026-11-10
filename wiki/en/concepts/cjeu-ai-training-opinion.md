---
title: "CJEU's First Generative AI Case — Training AI Is in Principle Allowed; Real-Time Reuse by Chatbots May Infringe"
category: concepts
tags: [eu, copyright, ai-training, gemini, rag, regulation]
created: 2026-11-05
updated: 2026-11-05
sources:
  - "raw/articles/2026-11-05-cjeu-ai-training-opinion.md"
related:
  - "[[concepts/wikimedia-amicus-nyt-openai]]"
  - "[[concepts/ai-training-opt-out-robots-txt]]"
  - "[[concepts/nyt-brave-ai-scraping-lawsuit]]"
  - "[[concepts/rag]]"
status: draft
confidence: high
---

# CJEU's First Generative AI Case — Training AI Is in Principle Allowed; Real-Time Reuse by Chatbots May Infringe

## Start here

**Analogy**: reading books to study is allowed, but copying someone else's newspaper article wholesale into your own answer can be infringement. The EU's top court drew the line not at training time but at answer time.

| Term | Meaning |
|------|------|
| **Advocate General** | An adviser to the CJEU who issues a legal opinion before the court rules — influential but not binding |
| **Text and data mining exception** | The EU copyright provision that permits reproductions for training and analysis purposes |
| **RAG** | A chatbot fetching live web information to ground its answers |

## One-line definition

On 2026-11-03, in the Court of Justice's first generative AI case (C-250/25, Like Company v Google Ireland), Advocate General Maciej Szpunar opined that using protected works to train an LLM is "as a rule, freely permitted" under the text and data mining exception, while a chatbot retrieving and reusing a press article in real time to answer a user may infringe the publisher's rights in certain circumstances.

## Key facts

- **The case**: Hungarian publisher Like Company sued in the Budapest Regional Court, alleging Google used its articles to train Gemini's LLMs and repeatedly reproduced and made them available through the Gemini chatbot between 2023-06-13 and 2024-05-31. The court referred four questions to the CJEU — two on training, two on answers.
- **Training**: the Advocate General advised the Court to declare the two training questions inadmissible. There is no evidence Like Company's articles were used to train Gemini, and training an LLM is not a form of "online use" of press publications. But "for the sake of completeness" he added that using protected works to train an LLM is, as a rule, freely permitted under the text and data mining exception (Article 4, CDSM Directive (EU) 2019/790).
- **Answers**: he advised the Court to focus on the two questions about answers. When an LLM-driven chatbot retrieves a publication from a press publisher's website, reuses it to generate an answer and gives that answer to the user, the publisher's right may be infringed in certain circumstances. The test has two parts: (1) whether the chatbot accessed the publication unlawfully, in particular by circumventing effective technical measures such as a paywall or bot block; and (2) whether the answer reuses the publication's form of expression in a recognisable way, to the point that the reader is "entirely dispensed from accessing the original publication." An answer that merely reports facts is safe.
- **RAG context**: Gemini uses RAG (grounding) to collect live web information and improve answer accuracy. That real-time retrieval and reuse is the core issue. The full opinion also notes that an output identical or near-identical to a work the model was trained on "may, in itself, constitute a reproduction of that work," to be determined case by case (point 89).
- **Effect**: an Advocate General's opinion does not bind the Court. The judges have begun deliberations; judgment comes later. There is no ruling against Google, no fine and no order.

## Why it matters (solo-developer view)

1. **The training/answer boundary is now drawn in law**: "training allowed, real-time reuse risky" — when building a RAG-based agent, how much of a source article you copy verbatim becomes the legal risk metric.
2. **Circumventing a paywall is a trigger**: unlawful access via bypassing technical measures is the first prong of the infringement test. Check for circumvention at the crawling and scraping stage, in design.
3. **"Facts only" is a safe zone**: reporting facts without reusing the original's expression is not infringement. Summarize-and-restructure is itself a compliance strategy.

## Limitations (stated)

- This is an advisory opinion, not a judgment. The CJEU may depart from it, and no judgment date is set.
- The training view is an aside "for the sake of completeness," unrelated to the main proceedings. It is a different legal system from the US NYT and Brave cases.

## Sources

- [CJEU Advocate General opinion source](raw/articles/2026-11-05-cjeu-ai-training-opinion.md)
