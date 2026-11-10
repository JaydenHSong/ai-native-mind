---
title: "NVIDIA Cosmos 3 Nano: Four Open-Weight Models for Interactive World Simulation in Driving and Robotics, 16B, Commercial License"
category: concepts
tags: [nvidia, cosmos-3, world-model, physical-ai, open-weights]
created: 2026-11-07
updated: 2026-11-07
sources:
  - "raw/articles/2026-11-07-nvidia-cosmos-3-nano-open-models.md"
related:
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
  - "[[concepts/mecka-robot-motion-data]]"
  - "[[concepts/nvidia-autonomy-stack]]"
status: draft
confidence: high
---

# NVIDIA Cosmos 3 Nano: Four Open-Weight Models for Interactive World Simulation in Driving and Robotics, 16B, Commercial License

## Start here

**Analogy**: four models that build "virtual worlds" for robots and self-driving cars to practice in before they go out on real roads. One films driving scenes while changing the weather, one shows the matching video live as the wheel turns, and one predicts what the video looks like when a robot arm moves. All four are free to download and use — though running one needs a workstation-class graphics card.

| Term | Meaning |
|------|------|
| **World model** | A model that has learned how the world moves, and predicts or generates the next scene for a given action |
| **Open weights** | A model whose trained weights are published so anyone can download and use them |
| **OpenMDW1.1** | NVIDIA's open-model license permitting commercial and non-commercial use |

## One-line definition

On 2026-11-05, NVIDIA published four open-weight checkpoints in the Cosmos 3 world-model family via a Hugging Face blog. All four are post-trained versions of Cosmos 3 Nano for specific tasks, each with 16 billion trainable parameters, under the OpenMDW1.1 license permitting commercial and non-commercial use. This is a catch-up item missed in the previous run.

## Key facts

- **Four checkpoints**: Cosmos3-Nano-Transfer-Auto (generates multi-view driving data in batches, varying weather, lighting and time of day — up to 11 camera views including fisheye, with joint RGB and LiDAR generation), Cosmos3-Nano-Sim-Auto (streams synchronized camera and LiDAR observations as driving controls change — a causally distilled streaming variant), Cosmos3-Nano-Sim-Transfer (turns physics-simulator controls and a text prompt into photorealistic RGB video), Cosmos3-Nano-Sim-Bimanual (predicts video from robot or camera actions, supporting interactive two-arm simulation for YAM and AgiBot embodiments).
- **License and scale**: all four have 16B trainable parameters under OpenMDW1.1 (commercial and non-commercial use permitted, under its terms). It is the largest expansion of the Cosmos 3 family since the main launch at GTC Taipei/Computex on May 31, 2026. NVIDIA's technical blog (November 2, Pranjali Joshi and colleagues) frames the platform as serving physical AI across autonomous vehicles, robotics and smart infrastructure.
- **Workflow split**: Transfer-Auto is for offline synthetic driving data; Sim-Auto is for closed-loop simulation, connecting a policy to study how its decisions unfold over a rollout; Sim-Transfer bridges the domain gap between simulation and real-world distributions; Sim-Bimanual is for action-to-vision closed-loop prediction in two-arm manipulation tasks.
- **Cautions**: open weights alone do not prove performance on a particular task or fitness for deployment. One report says running the 16B Nano needs at least 96GB of VRAM, calling for workstation-class RTX PRO 6000 setups or multi-GPU configurations. NVIDIA says task-specific evaluation is needed.

## Why it matters (solo-developer view)

1. **The "data factory" for physical AI is open**: the bottleneck for robots and self-driving is real driving and manipulation data. Transfer-Auto, which films synthetic data while varying weather, lighting and time of day, eases that bottleneck. If Genie 4 (Google's world model) is the simulation, Cosmos 3 is the tool that adapts that simulation to my sensors and my robot.
2. **Open weights plus a commercial license widen the field**: a 16B open-weight world model usable commercially means even a small team can put a world model in its own pipeline. The 96GB VRAM requirement shows the real threshold behind "download and run it."
3. **It aims at the sim-to-real gap**: Sim-Transfer turns simulator controls into photorealistic video — a bridge so policies learned in simulation also work in reality. Whether that bridge is sturdy decides whether robot policy learning succeeds.

## Limitations (stated)

- An open-weight release is not a performance verification. Whether a checkpoint fits a given task, sensor rig or robot needs task-specific evaluation, as NVIDIA also states.
- The 96GB VRAM figure comes from press coverage; actual requirements vary with quantization and optimization.
- How faithfully the generated simulation supports policy learning and evaluation remains a measurement task.

## Sources

- [NVIDIA Cosmos 3 Nano open models source](raw/articles/2026-11-07-nvidia-cosmos-3-nano-open-models.md)