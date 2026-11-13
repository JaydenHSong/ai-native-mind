---
title: "DeepMind Introduces Gemini Robotics 2.5 — Apollo 2 Hits 96% Kitting on a Real Mercedes Line (Nov 10)"
category: concepts
tags: [deepmind, gemini-robotics, vla, humanoid, apptronik, mercedes, asimov]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-deepmind-gemini-robotics-2-5.md"
related:
  - "[[concepts/nvidia-cosmos-3-nano-open-models]]"
  - "[[concepts/robojepa-robot-scaling-laws]]"
  - "[[concepts/gemini-4-argon]]"
status: draft
confidence: medium
---

# DeepMind Introduces Gemini Robotics 2.5 — Apollo 2 Hits 96% Kitting on a Real Mercedes Line (Nov 10)

## Start here

**Analogy**: until now, robots practised picking things up in a lab — the practice room. Now one has stood on a real car factory line, picking a different part for each passing car and placing it in a tray. It scored 96% — but DeepMind did not say how many attempts that covers. Without knowing how many tests were taken, it is hard to tell how impressive 96% is.

| Term | Meaning |
|------|------|
| **VLA** | vision-language-action — a model that takes camera images and an instruction and outputs robot motion |
| **Kitting** | Sorting parts from bulk bins into trays in the exact order each vehicle on the line needs |
| **ASIMOV-Jailbreak** | An open benchmark for whether a robot AI can be tricked into unsafe actions |
| **Apollo 2** | Apptronik's humanoid robot, with a five-finger SharpaWave hand and 22 degrees of freedom |

## One-line definition

On 2026-11-10, Google DeepMind introduced Gemini Robotics 2.5, its most capable vision-language-action (VLA) model to date. Apptronik's Apollo 2 humanoid, running the model, picked and packed automotive parts on active Mercedes-Benz production lines with a 96% success rate. DeepMind also released ASIMOV-Jailbreak, an open robot-safety benchmark.

## Key facts

- **Model**: Gemini Robotics 2.5 is a VLA model trained to generalise across robot bodies. It runs on Apptronik's Apollo 2 (five-finger SharpaWave hand, 22 degrees of freedom) and on the Franka Duo platform with two-finger grippers. DeepMind reports success rates 30% to 100% higher than previous baselines across more than 200 tasks, depending on task type, and tasks finished 20% to 30% faster.
- **Mercedes pilot**: at active production lines in Kecskemét, Hungary, and Sindelfingen, Germany, Apollo 2 performed automotive kitting — sorting individual parts from bulk bins into trays in the exact order each vehicle needs — at a 96% success rate. A Gemini Robotics ER model tracked the workflow while 2.5 controlled the hands and arms. DeepMind itself calls it a proof of concept.
- **Reading the number with care**: the trial count, the definition of success and the number of human interventions are not disclosed. Twenty-four successes in 25 attempts and 960 in 1,000 both round to 96%, but their confidence intervals differ sharply. Mercedes has issued no separate statement confirming the 96% figure, and there is no schedule for moving from pilot to production.
- **ASIMOV-Jailbreak**: an open-source benchmark on Hugging Face whose hundreds of prompts disguise unsafe requests across dozens of scenes to test whether a robot AI can be tricked. But the 99.5% resistance score belongs to Gemini 4 Argon, a general-purpose physical reasoning model (up from 82% for the previous baseline, Gemini Robotics ER 2) — the announcement gives no ASIMOV-Jailbreak score for Robotics 2.5 itself.
- **Access**: the model is rolling out to DeepMind's robotics partners (Agile, Apptronik, Boston Dynamics and 100+ trusted testers). There is no public API, price or general-availability date. DeepMind credits Gemini 4 Argon with accelerating the development of 2.5 through simulation.

## Why it matters (solo-developer view)

1. **Humanoids have moved from lab demos to a real production line**: it is a pilot — one task, two plants, under partner supervision — but the proof is shifting from "can it do it" to "how far can it go." It is a yardstick for how fast physical AI is commercialising.
2. **The next gate for physical AI is "can it be tricked safely"**: releasing a safety benchmark with the model matters. From January 20, 2027, the EU Machinery Regulation (Regulation (EU) 2023/1230) applies, and safety evidence for robot AI becomes a regulatory requirement.
3. **Ask for the denominator**: a 96% figure without a trial count, intervention count or failure definition sits somewhere between a demo statistic and a production statistic. Do not judge production readiness from the headline alone.

## Limitations (stated)

- The trial count, success definition and human-intervention count behind the 96% figure are undisclosed, and there is no Mercedes confirmation or independent verification.
- The 99.5% robot jailbreak-resistance score is Gemini 4 Argon's figure; no ASIMOV-Jailbreak score for Gemini Robotics 2.5 itself appears in the announcement.
- There is no public API, price or GA date, so developers outside the partner group cannot use it today.

## Related concepts

- [[concepts/nvidia-cosmos-3-nano-open-models]] — NVIDIA Cosmos 3 Nano open weights, world simulation for driving and robotics (2026-11-07)
- [[concepts/amd-world-labs-physical-ai]] — AMD's $8.2B World Labs acquisition, the physical-AI and world-model hardware axis (2026-09-30)
- [[concepts/robojepa-robot-scaling-laws]] — Meta RoboJEPA 8B, robot world-model scaling laws (2026-10-09)
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon, the model behind the 99.5% robot-safety score (2026-10-01)
- [[concepts/mecka-robot-motion-data]] — Mecka AI $60M Series B, human motion-data infrastructure (2026-10-10)

## Sources

- [DeepMind Gemini Robotics 2.5 announcement source](raw/articles/2026-11-11-deepmind-gemini-robotics-2-5.md)