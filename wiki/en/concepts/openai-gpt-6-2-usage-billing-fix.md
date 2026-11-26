---
title: "OpenAI Admits GPT-6.2 Usage Was Undercounted — Astra Hits Limits 40% Faster, Sol 25% Faster; ChatGPT and Codex Limits Merge in December"
category: concepts
tags: [openai, gpt-6-2, chatgpt, codex, pricing, usage-limits]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-openai-gpt-6-2-usage-billing-fix.md"
related:
  - "[[concepts/openai-gpt-6-2-astra-sol]]"
  - "[[concepts/chatgpt-codex-shared-token-budget]]"
status: draft
confidence: medium
---

# OpenAI Admits GPT-6.2 Usage Was Undercounted — Astra Hits Limits 40% Faster, Sol 25% Faster; ChatGPT and Codex Limits Merge in December

## Start here

**Analogy**: When GPT-6.2 launched, OpenAI measured usage incorrectly — the same work counted as less than it really was. Once the error was fixed, the same task now burns through the plan limit 40% faster on Astra and 25% faster on Sol. So despite the launch message of "the same work for fewer tokens," the limit you feel is actually smaller. As compensation, every account gets a one-time limit-refresh coupon (a banked reset), and from December, ChatGPT and Codex share a single limit.

| Term | Meaning |
|------|------|
| **Usage limit** | The cap on AI usage in a plan. Once reached, you cannot use it more that week or month |
| **Banked reset** | A one-time limit refresh. It sits in the account until you choose to use it |
| **Retroactive billing** | Charging later for usage already consumed. OpenAI is not doing this |
| **Token-based limit** | Measuring usage in tokens rather than message counts |

## One-line definition

On November 26, 2026, OpenAI admitted and fixed a billing error that undercounted GPT-6.2 usage at launch. The same work now reaches the limit 40% faster on Astra and 25% faster on Sol than the previous week. As compensation, Go, Plus, Pro, and Business accounts each receive one 'banked reset.'

## Key points

- **The announcement**: Thibault Sottiaux (OpenAI's product and platform lead, overseeing ChatGPT, Codex, and the API) posted on X on November 26: "At GPT-6.2 launch, a billing mistake wrongly discounted most users' GPT-6.2 Astra and Sol usage. We fixed it, so the same work now uses more of the plan limit. Compared with last week, you reach the limit 40% faster on Astra and 25% faster on Sol."
- **Scope**: only GPT-6.2 Astra and Sol; other models are unaffected. Past usage differences will not be billed retroactively. The two models have been available in ChatGPT Work, Codex, and the API since November 17, and expanded to the regular Chat tab on November 23.
- **Compensation**: one banked reset added to every Go, Plus, Pro, and Business account. A one-time limit refresh that stays in the account until used. It can only be used once a limit has fallen below 80%. Use it in the web Usage settings or in the desktop app under Settings → Usage & billing.
- **December change preview**: from December, Plus, Pro, and Business users share a single token-measured limit across ChatGPT and Codex (Chat and Work merged). Instant chats are excluded from the limit. Combined remaining balance and reset times are visible in Settings → Usage.

## Why it matters (solo-developer lens)

1. **'Cheaper' and 'limits run out faster' can happen at once**: token prices fell, but once usage counting was corrected, the limit you feel shrank. Measuring with your own usage is more accurate than the price sheet.
2. **December's merged limit affects real work**: with ChatGPT and Codex sharing one limit, a week of heavy Codex coding also eats into Chat headroom. Review your usage split before December.
3. **Save the banked reset**: it is a one-time use, and only usable when a limit is below 80%. Better kept for a deadline week.

## Limitations (stated)

- Based on an X post by OpenAI's product lead; the technical cause of the undercounting was not disclosed.
- The 40% and 25% figures compare limit-reach speed with the previous week; the felt effect varies by personal usage pattern.
- The details of the December limit merger (such as the reset cycle) must be checked in the Settings screen.
- Confidence is medium — OpenAI's official admission cross-checked with Neowin's reporting, but the technical cause and exact counting method are undisclosed.

## Related concepts

- [[concepts/openai-gpt-6-2-astra-sol]] — the GPT-6.2 Astra and Sol launch itself; the correction one week later (2026-11-26)
- [[concepts/chatgpt-codex-shared-token-budget]] — the shared ChatGPT–Codex token budget previewed on November 2; the preview of December's merger (2026-11-26)

## Sources

- [OpenAI Admits GPT-6.2 Usage Was Undercounted — Astra Hits Limits 40% Faster, Sol 25% Faster; ChatGPT and Codex Limits Merge in December (Neowin, Nov 26)](raw/articles/2026-11-26-openai-gpt-6-2-usage-billing-fix.md)
