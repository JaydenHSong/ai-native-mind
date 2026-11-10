---
title: "METR's Assessment of AI R&D Acceleration at Anthropic — 1.9x Faster, About 80% Due to AI, Key Evidence Redacted"
category: concepts
tags: [metr, anthropic, ai-rd-acceleration, aeci, evaluation]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-metr-anthropic-ai-rd-acceleration.md"
related:
  - "[[concepts/anthropic-s1-ipo-filing]]"
  - "[[concepts/anthropic-workforce-report]]"
  - "[[concepts/self-improving-ai-risk]]"
  - "[[concepts/anthropic-s1a-q3-revenue-commitments]]"
status: draft
confidence: high
---

# METR's Assessment of AI R&D Acceleration at Anthropic — 1.9x Faster, About 80% Due to AI, Key Evidence Redacted

## Start here

**Analogy**: an outside inspector spent 11 weeks inside a kitchen watching a chef cook twice as fast — then published the verdict with the most decisive recipes blacked out. The "faster" conclusion is measurable; the "why" rests on the inspector's word.

| Term | Meaning |
|------|------|
| **METR** | An independent nonprofit that evaluates AI systems |
| **AECI** | Anthropic's version of the Epoch Capabilities Index — one score combining many benchmark results to track model capability |
| **2x Acceleration Threshold** | An early-warning threshold in Anthropic's safety policy: when R&D acceleration reaches 2x, the alarm sounds |

## One-line definition

Published 2026-11-05: METR, an independent AI evaluator, released its assessment of 11 weeks inside Anthropic. Capability progress is now running about 1.9 times faster than before October 2025, with roughly 80% of the acceleration attributed to AI — but Anthropic redacted most of the most informative evidence, so the public cannot audit the case.

## Key facts

- **Headline number**: on AECI, the pace of benchmark progress after a breakpoint around October 7, 2025 is about 1.9 times the earlier rate (95% confidence interval: 1.5x to 2.8x). Annual progress rose from 15 points to 29 points — "roughly two years of historical progress over the last year," about the distance from Claude 2.1 to Sonnet 4.5. METR's overall subjective estimate is also about 2x, though it says it would not be surprised by a true value closer to 1.3x or 3x.
- **Cause**: METR's subjective estimate is that roughly 80% of today's acceleration is due to AI, with the rest from non-AI factors that mattered more in late 2025. METR says it is confident the jump was not caused by faster growth in training compute — though the 80% estimate itself carries substantial uncertainty.
- **Autonomy limits**: AI is "not yet able to make highly significant and fully autonomous contributions to the most important parts of the model training process." Researchers described only "signs of life" that such contributions could come soon. METR found no bottleneck that would stop the acceleration from compounding over the next 12 months, but says its view of bottlenecks changed several times during the assessment.
- **Verification limits**: Anthropic held unilateral redaction rights over non-public information and redacted "a majority of the evidence we found most informative." METR received no sample access to non-public models, and a planned verification of compute allocation was canceled after Anthropic changed scope. Unlike the 1.7x in the Haiku 5.5 system card, METR's figure includes three unreleased models trained since July. The Opus 5.5 system card (September 22) had said its internal measures did not show a sustained twofold acceleration attributable to AI.
- **Safety-threshold dispute**: the same day, METR published a review of the automated-R&D section of Anthropic's August 2026 Risk Report. It agrees the risk from models as of July 15 was low, but says Anthropic's claim not to have crossed the "2x Acceleration Threshold" early warning rests on "contestable judgment calls," that it is "plausible" the threshold had been crossed, and that the public report "overall understates the level of acceleration that was occurring." The 1.9x figure and the threshold judgment use different baselines and evaluation dates, so they are not the same conclusion.

## Why it matters (solo-developer view)

1. **The first measured number on "AI building AI"**: recursive self-improvement had been a claim until now; 1.9x and 80% are the first figures attached to it — both estimates, and both must be read with their caveats.
2. **An unverifiable evaluation is a trust problem**: when most of the decisive evidence is redacted, believing the conclusion means trusting the evaluator's reputation. An independent evaluation is worth only as much as its public auditability, not just its access.
3. **Speed and the safety line collided the same day**: 1.9x sits 0.1x from the 2x threshold, and the evaluator and the company disagree on whether the line was crossed. "How fast" and "how far is allowed" are now tied to the same number.

## Limitations (stated)

- 1.9x is a change in the slope of AECI, a composite benchmark index — not a claim that models became "1.9 times as intelligent." The confidence interval reflects only uncertainty in each model's AECI estimate, not the uncertainty of the method as a whole.
- The 80% attribution is METR's subjective judgment with substantial uncertainty; the public report does not show the concrete mechanism of which stages sped up by how much.
- The assessment window (August 12–October 29) and the threshold judgment's reference date (July 15) differ, so the two conclusions cannot be compared directly.

## Sources

- [METR Anthropic acceleration assessment source](raw/articles/2026-11-06-metr-anthropic-ai-rd-acceleration.md)
