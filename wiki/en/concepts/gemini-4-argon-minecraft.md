---
title: "Gemini 4 Argon Agents Complete Minecraft — Four Agents, 27 Hours 14 Minutes, Ender Dragon Defeated"
category: concepts
tags: [gemini-4-argon, minecraft, multi-agent, long-horizon, google-deepmind, coordination, mineflayer]
created: 2026-10-19
updated: 2026-10-19
sources:
  - "raw/articles/2026-10-19-gemini-4-argon-minecraft.md"
related:
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/taste-bench]]"
  - "[[concepts/multi-agent-dialect]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: high
---

# Gemini 4 Argon Agents Complete Minecraft — Four Agents, 27 Hours 14 Minutes, Ender Dragon Defeated

## TL;DR

A Google DeepMind paper (10/15 arXiv; press wave 10/18–19) reports four Gemini 4 Argon agents defeating Minecraft's Ender Dragon with zero human intervention: 27 hours 14 minutes, 2,783 self-written JavaScript programs, 229 chat messages, 605 deaths, $520–$1,620 in tokens. No assigned roles, strategies, or human-written game tools — agents self-organized via in-game chat and shared memory. The authors frame it as a long-horizon coding-and-coordination test, not human-style play; single run, easy difficulty.

## Key facts

- **Paper**: "A team of Gemini 4 Argon agents beats Minecraft" (Maxence Faldor, Satinder Singh, Roberta Raileanu). Coverage: Engadget (10/19 09:19 UTC), The Decoder (10/18), explainx.ai, mezha.ua, iaenunminuto.com.
- **Setup**: random seed, Java 1.20.4 survival, easy difficulty, cheats off; no roles, strategies, or game-specific tools assigned.
- **Emergent division of labor**: janesick (tools), gyldenia (food/supplies), auratian (portal lighting), bulicame (Enderman shelters + final blow). Threat warnings, coordinate sharing, item recovery from dead teammates.
- **Numbers**: 27h 14m (~81 in-game days, six server restarts), 2,783 programs (63,313 lines), 229 messages, 605 deaths. Median program ran 33.5 seconds. 1.35 billion input tokens.
- **Cost**: ~$520 to the win at launch API price; full session ~$810 (launch) / ~$1,620 (standard pricing, effective 2027) — the first published price tag for a "27-hour agent workday."
- **Verification**: a fifth "Observer" agent monitored for cheating — none found. Researchers watched a live dashboard and never intervened.
- **Implementation**: open-source Mineflayer library — no pixels, no keyboard input; text game-state access plus a pathfinding plugin.
- **Authors' claim**: first end-to-end autonomous Minecraft completion using only standard Mineflayer, no pre-scouted seeds.
- **With Taste-Bench**: the same day's Taste-Bench measured mid-task judgment across 502 forks; this run demonstrates that judgment across 2,783 programs and 27 hours.

## Why it matters

1. **Proof of long-horizon work**: thousands of dependent steps sustained for 27 hours — the same shape as serious engineering work (large refactors, multi-system integrations). Day-long agent assignments stop being science fiction.
2. **A real price tag**: $520–$1,620 for 27 hours of agent work — directly usable in outsourcing vs automation decisions for solo developers.
3. **Coordination design hints**: emergent role division + shared memory + chat with no orchestrator — evidence that multi-agent systems can self-organize; the 605 deaths show failure tolerance is a prerequisite, not a bug.

## Limitations (explicit)

- **Single run** — no success-rate or reproducibility data.
- Easy difficulty, text game-state access (easier than pixel play), pathfinding plugin, and Minecraft is almost certainly in the training data.
- Human random-seed speedrun record is under 7 minutes — this is a record of endurance, not skill.
- Paper dated 10/15 — collected on 10/18–19 coverage.
