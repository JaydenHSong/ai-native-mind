---
title: "Mecka AI's Robot Motion Data — 'Scale AI for Robotics' ($60M Series B)"
category: concepts
tags: [mecka-ai, robotics, motion-data, sequoia, series-b, physical-ai, data-infrastructure, egoverse, human-demonstration]
created: 2026-10-10
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-10-mecka-ai-60m-series-b.md"
related:
  - "[[concepts/robojepa-robot-scaling-laws]]"
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Mecka AI's Robot Motion Data — 'Scale AI for Robotics' ($60M Series B)

## Start here

**Analogy**: LLMs got smart by scraping the internet's text. Robots have no internet to scrape for "how a human lifts a cup." Mecka straps body sensors on people, records everyday motion, and sells that data to robotics companies — the data business of the robot era.

| Term | Plain English |
|------|------|
| **Egocentric capture** | recording from the performer's own point of view, instead of teleoperation (remote-controlling a robot) |
| **EgoVerse** | Mecka's human-motion dataset (1,362 hours, 80,000 episodes, 2,087 demonstrators) |

## One-line definition

Toronto robotics-data startup Mecka AI raised a **$60M Series B** led by Sequoia Capital on 2026-10-07 (valued at $500M) — recording everyday human motion with body sensors and selling the data: "Scale AI for robotics" (TechCrunch, FT).

## Key points

- The round: $60M Series B, Sequoia lead, $500M valuation (TechCrunch 10/7). New investors: NVIDIA, Qualcomm Ventures, Samsung, M12. Angels: Tony Xu (DoorDash), Frank Slootman (ex-ServiceNow/Snowflake), Milan Kovac (ex-Tesla Optimus).
- The model: it doesn't build robots. People wearing body sensors + smartphones perform everyday tasks (making coffee, fixing cars, folding laundry) → human-motion data is collected, processed, and sold to humanoid training labs.
- The thesis: "Motion, contact, force and geometry aren't on the internet. You can't scrape them, license them or buy them." — physical-interaction data the web never captured.
- EgoVerse: 1,362 hours of recorded demonstrations, 80,000 episodes, 2,087 demonstrators. Sensors capture joint angles, force, and timing at 200 fps; smartphones add synchronized multi-angle video.
- Financials (company claims, unverified): $100M+ annualized revenue run-rate in June 2026, $300M target by year-end. Fewer than 60 employees.
- Competition: XDOF (Series B talks at ~$1.2B valuation), Micro1 ($500M), Scale AI / Surge / Mercor expanding into robotics — robot training data among AI infrastructure's fastest-growing segments.
- Founders: CEO Josh Gao and three co-founders from fintech and crypto, no robotics background — the origin of the simple "egocentric capture instead of teleoperation" approach.
- FT (10/10): robotics labs collecting data in so-called "robot gyms" — an industry-wide data-infrastructure investment wave.

## Why it matters

- **The bottleneck moves**: once [[concepts/robojepa-robot-scaling-laws]] proves "more compute = predictably better," the next bottleneck is data, not compute. Mecka is the infrastructure-layer bet on that bottleneck — the economic corollary of the scaling law.
- **Physical AI's third axis**: hardware (AMD/Nvidia) vs open models (Meta), now joined by data (Mecka/XDOF) attracting capital — the "Scale AI for robotics" framing replays the LLM data-labeling industry.
- **Data-business unit economics**: sub-60 headcount with a claimed $100M run-rate — the margin structure of data infrastructure vs hardware. A claim until verified.

## Related

- [[concepts/robojepa-robot-scaling-laws]] — if the scaling law holds, the bottleneck is data. Mecka is the infrastructure bet on it.
- [[concepts/amd-world-labs-physical-ai]] — the hardware axis of physical AI (AMD's $8.2B acquisition) vs the data axis (Mecka).
- [[comparisons/frontier-lab-economics]] — capital concentration spreading from agent labs (Manus, Nous) to data infrastructure.

## Sources

- [Mecka AI raises $60M Series B led by Sequoia — human-motion data for robot training (TechCrunch 10/7, FT 10/10)](raw/articles/2026-10-10-mecka-ai-60m-series-b.md)
