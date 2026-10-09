---
title: "RoboJEPA Scaling Laws — Predictability for Robot World Models"
category: concepts
tags: [meta, fair, robojepa, world-model, robotics, scaling-laws, open-source, embodiment]
created: 2026-10-09
updated: 2026-10-09
sources:
  - "raw/articles/2026-10-09-meta-robojepa-8b-scaling-laws.md"
related:
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[concepts/llm-evaluation]]"
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

## Related concepts

- [[concepts/amd-world-labs-physical-ai]] — the physical-AI hardware axis, two poles against Meta's open world model
- [[concepts/llm-evaluation]] — evaluation methodology; the idea of using imagination error as a proxy

## Sources

- [Meta FAIR ships robot world model 'RoboJEPA 8B' + multi-embodiment scaling laws (aiweekly.co, 10/8)](raw/articles/2026-10-09-meta-robojepa-8b-scaling-laws.md)