---
title: "Google Makes Gemini 4 Carbon Broadly Available — Its Strongest Model, Built for Long-Horizon Agents and Cybersecurity (Nov 10)"
category: concepts
tags: [google, gemini-4-carbon, model-launch, cybersecurity, agents, pricing]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-google-gemini-4-carbon-launch.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
  - "[[concepts/meta-muse-ember]]"
status: draft
confidence: high
---

# Google Makes Gemini 4 Carbon Broadly Available — Its Strongest Model, Built for Long-Horizon Agents and Cybersecurity (Nov 10)

## Start here

**Analogy**: imagine one shop selling two computers. Argon is the fast, light laptop you use every day for documents and coding; Carbon is the heavy workstation for jobs that run all day — simulations, security audits, open-ended research. For now they cost the same, but Carbon burns far more electricity (tokens) to do its work.

| Term | Meaning |
|------|------|
| **Carbon** | The top model in the Gemini 4 line, specialised for long-horizon reasoning and cybersecurity |
| **MKA** | A family of benchmarks for agentic work in real workflows — Carbon ranks #2 |
| **Fairwind Program** | Google's gated-access programme for cybersecurity defenders |
| **/swarm** | Antigravity's preview of coordinated multi-agent execution — one prompt becomes a team of agents |

## One-line definition

On 2026-11-10, Google made Gemini 4 Carbon broadly available to paying developers, enterprises, Ultra subscribers and scientists. Announced on October 28, it had been limited to the Fairwind cyber-defender group for two weeks. Google calls it its strongest model, specialised for long-horizon agentic workflows, cybersecurity and scientific reasoning. The introductory price is $2/$10 per MTok through November 30, rising to $4/$20 on December 1.

## Key facts

- **Availability**: the Gemini API (Google AI Studio), Gemini for business on paid tiers, the Gemini app for Ultra subscribers, AI Mode in Search and Antigravity. Antigravity also gained a /swarm preview for coordinating multiple agents. There is no free tier.
- **Positioning — dividing work with Argon**: Argon stays the default for most coding and knowledge work, while Carbon targets hard, long-running tasks that spend many tokens on verification loops (multi-step coding and debugging, architecture work, open-ended science). Google says the main difference is how many thinking tokens each model spends per turn. The two models start at the same price, so the split is made by usage, not by price.
- **Benchmarks (Google's figures)**: 59 points on the Artificial Analysis Intelligence Index (first place at announcement; updated to 60 on November 11). First place on CursorBench 4.0, Perplexity's WANDR and Zapier's AutomationBench, at more than 2× lower cost per task than the next-best external model. Second on the MKA benchmark, at more than 6× lower average cost per task than the top model. On cybersecurity: SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%. On Gray Swan's prompt-injection benchmark, a 0.0% attack success rate (Argon: 0.7%).
- **Pricing**: $2 input / $10 output per MTok through November 30, then $4/$20 from December 1. It also shipped in Devin Desktop and CLI, scoring 40.0% on FrontierCode 2.0.
- **Launch context**: Carbon followed Fable 5.2 and Muse Ember by a day — three labs shipped their top-tier and cheapest agent models within two days. The two weeks from the October 28 announcement to broad availability follow the gated-release pattern: selected defenders first, everyone else later.

## Why it matters (solo-developer view)

1. **Premium reasoning for hard tasks now has a price tag**: Carbon's cost is set by total thinking tokens, not by the headline rate. Whether to route a long-running agent task to Carbon or Argon becomes a question of task difficulty and verification cost, so routing criteria move from the price list to the token budget.
2. **Cybersecurity specialisation is now a model-selection axis**: benchmarks covering the defence lifecycle (SEC-bench, ExploitGym, CWE-bench) are front and centre. Choosing a model for security work needs a different axis from general coding benchmarks.
3. **Multi-agent orchestration has become a product surface**: the Antigravity /swarm preview sells coordination itself — one prompt into a team of agents — as a feature. For a solo developer building harnesses by hand, it is a comparison point.

## Limitations (stated)

- All benchmarks are Google's own, selected figures. The Verge notes that on the benchmarks Google cited at the first announcement, Carbon sits behind Fable 5.2. The AA index rose to 60 on November 11, but it is unclear whether AA re-ran the tests after general availability.
- Because Carbon spends more thinking tokens, the real cost per task can be higher than the headline rate suggests. Claims such as "2× cheaper per task" rest on Google's chosen benchmarks and conditions.
- The figures on the October 10 internal-testing page ([[concepts/gemini-4-carbon-testing]]) were measured at a different time and under different conditions, so they should not be compared directly with the launch figures.

## Related concepts

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 Carbon internal testing, coding performance near Opus 5.5 (2026-10-10)
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon, own benchmarks versus independent index, gated release (2026-10-01)
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2 and Mythos 5.2 launch, AA index #1 at 65 points (2026-11-09)
- [[concepts/meta-muse-ember]] — Meta Muse Ember, ultra-cheap agent model at $0.10/$0.50 (2026-11-09)
- [[concepts/semianalysis-gdpx-benchmark]] — SemiAnalysis GDPx, Carbon 10.9%, Fable 5.2 12.0% (2026-11-02)

## Sources

- [Google Gemini 4 Carbon broad availability source](raw/articles/2026-11-11-google-gemini-4-carbon-launch.md)