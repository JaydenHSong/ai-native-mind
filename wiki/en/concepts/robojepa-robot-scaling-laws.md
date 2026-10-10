---
title: "RoboJEPA Scaling Laws — Predictability for Robot World Models"
category: concepts
tags: [meta, fair, robojepa, world-model, robotics, scaling-laws, open-source, embodiment, data-bottleneck]
created: 2026-10-09
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-09-meta-robojepa-8b-scaling-laws.md"
  - "raw/articles/2026-10-10-mecka-ai-60m-series-b.md"
related:
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/mecka-robot-motion-data]]"
status: draft
confidence: medium
---

# RoboJEPA Scaling Laws — Predictability for Robot World Models

## Easy read

**Analogy**: LLMs have a "bigger is smarter" law (scaling laws). Meta just proved the same law holds for robots. The error in a robot's "imagination" of the world follows a precisely predictable curve with compute — so you can know "this much compute buys this much skill" before running expensive real-robot experiments.

## One-line definition

Meta FAIR's scaling laws for multi-embodiment robot world models, established with RoboJEPA 8B — imagination error follows a second-order power law, and downstream robot planning performance improves predictably with compute (published 2026-10-08).

## Key points

- Model: RoboJEPA 8B — trained on 12 robot embodiments, 23 manipulation datasets, 15,022 hours of video. The largest JEPA (predictive) model to date.
- The law: imagination error follows a second-order power law L(C) = E + A·C^(α − γ ln C). Curves fitted on 22M–2B parameters extrapolate exactly to 4B/8B held-out runs (DROID holdout extrapolation error 0.6×10⁻³). Claimed as the first scaling laws established on real-robot data for multi-embodiment robot world models.
- Capability thresholds: 3D reaching emerges at ~1e20 FLOPs, obstacle avoidance at ~1e21, fine object manipulation at ~1e22 — a compute map of capability emergence.
- Proxy metric: imagination error is reported as a reliable proxy for real-robot evaluation — model quality can be estimated without expensive real-robot runs. A structural reduction in evaluation cost.
- Open source: full 8B checkpoints plus training and robot-deployment code released.

## Why it matters (solo-developer view)

1. The robot-embodiment version of LLM scaling laws (Kaplan/Chinchilla) — a declaration that "predictability" now holds for robot learning. A confidence basis for "just scale it" in robotics research.
2. Connects to [[concepts/amd-world-labs-physical-ai]] (AMD's $8.2B World Labs acquisition): Meta's open-source world model joins the physical-AI axis — a hardware (AMD/Nvidia) vs open-models (Meta) two-pole structure.
3. Evaluation lens: securing a proxy metric for real-robot evaluation is the robotics version of [[concepts/llm-evaluation]] — "measurability" decides research velocity.

## 2026-10-10 update — the bottleneck moves: after compute, data (Mecka $60M)

Once RoboJEPA proved "more compute = predictably better," the next bottleneck became **data**, not compute — and capital is flowing to the infrastructure layer betting on that bottleneck:

- Mecka AI, 10/7 **$60M Series B** led by Sequoia ($500M valuation, TechCrunch). NVIDIA, Qualcomm Ventures, Samsung, M12 joined.
- The business: recording everyday human motion with body-sensor wearers and selling the data — "Motion, contact, force and geometry aren't on the internet." Physical-interaction data the web never captured.
- EgoVerse: 1,362 hours, 80,000 episodes, 2,087 demonstrators. Company-claimed $100M+ annualized run-rate (June), $300M year-end target (unverified).
- Competition: XDOF (Series B talks at ~$1.2B valuation), Micro1, Scale AI / Surge / Mercor expanding into robotics — robot training data among AI infrastructure's fastest-growing segments.
- Read through this page's law: the economic corollary of the scaling law is "the industrialization of the data supply chain." If RoboJEPA's 15,022 hours of video are research-grade, Mecka's EgoVerse is commercial-grade — the more the law holds, the higher data's marginal utility.
- Details: [[concepts/mecka-robot-motion-data]]

## Related concepts

- [[concepts/amd-world-labs-physical-ai]] — the physical-AI hardware axis, two poles against Meta's open world model
- [[concepts/llm-evaluation]] — evaluation methodology; the idea of using imagination error as a proxy
- [[concepts/mecka-robot-motion-data]] — the infrastructure bet on the data bottleneck ($60M Series B)

## Sources

- [Meta FAIR ships robot world model 'RoboJEPA 8B' + multi-embodiment scaling laws (aiweekly.co, 10/8)](raw/articles/2026-10-09-meta-robojepa-8b-scaling-laws.md)
- [Mecka AI raises $60M Series B led by Sequoia — human-motion data for robot training (TechCrunch 10/7, FT 10/10)](raw/articles/2026-10-10-mecka-ai-60m-series-b.md)