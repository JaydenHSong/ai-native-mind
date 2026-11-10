---
title: "Lava — 32 Export-Controlled B300 Chips Traced to China Telecom-Associated Endpoints"
category: concepts
tags: [lava, b300, export-control, dcgm-exporter, cve-2026-47483, china, gpu-smuggling, telemetry-exposure]
created: 2026-10-23
updated: 2026-10-23
sources:
  - "raw/articles/2026-10-23-lava-b300-export-control-trace.md"
related:
  - "[[concepts/china-ai-export-controls]]"
  - "[[concepts/nvidia-kazakhstan-sovereign-ai]]"
  - "[[concepts/dhs-deepseek-federal-register-ban]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# Lava — 32 Export-Controlled B300 Chips Traced to China Telecom-Associated Endpoints

## TL;DR

On 10-22 Israeli security firm Lava reported that 32 NVIDIA Blackwell Ultra B300 GPUs — barred from sale to China under US export controls — were visible through internet-exposed, unauthenticated NVIDIA DCGM Exporter monitoring endpoints whose geolocated IPs were associated with China Telecom. Lava itself caveats that the finding does not prove an export-control violation (geolocated IP ≠ physical location; the report does not specifically link the units to China Telecom's network). Lava's broader Oct 9 study found ~2,100 exposed hosts with 12,000+ GPUs across ~300 organizations, and disclosed CVE-2026-47483 (CVSS 8.2) in the same tooling. NVIDIA downplayed the finding as "insignificant."

## Key facts

- **Finding**: 32 Blackwell Ultra B300s (China-export-banned) visible via unauthenticated DCGM Exporter endpoints, geolocated to China Telecom-associated IPs.
- **Caveats (Lava's own)**: geolocated IP ≠ physical location (proxies/VPNs possible); the finding does not prove a violation; the report does not specifically tie the units to China Telecom's network — early headlines overstated this.
- **Broader exposure**: Oct 9 study — ~2,100 exposed DCGM Exporter hosts, 12,000+ GPUs (H100/H200/B300/RTX 4090/5090, estimated $100M+ hardware), ~300 organizations.
- **Vulnerability**: CVE-2026-47483, CVSS 8.2 — unauthenticated remote crash of GPU monitoring via the same tooling.
- **Pattern context**: 2025 reporting of ~$10B of NVIDIA AI chips smuggled to China in 3 months; Aug 2026 Taiwan indicted 9 over illegal B300 exports; Supermicro fired staff after a smuggling probe involving Flying Tiget Tech.
- **NVIDIA's response**: "insignificant diversion... less than one half of one percent in recent court cases... smuggling remains a nonfactor."

## Why it matters

1. **Enforcement reality check**: export controls fail at enforcement, not on paper. "Open telemetry endpoints are doing the work of customs seizures" — a new surveillance channel for infrastructure security.
2. **Practical lesson from DCGM exposure**: leaving GPU monitoring endpoints internet-facing without auth broadcasts your chips' location to the world. Binding-address checks on Exporter endpoints are basics for on-prem and cloud GPU operators.
3. **Same-day contrast**: Kazakhstan's 45,000-unit "legal license" vs China's 32-unit "suspected leak" — record the legal and illicit chip-allocation routes as a paired page.

## Limitations (explicit)

- Per Lava's own caveats: no proven violation, IP-geolocation limits, no specific China Telecom network link — "32 B300s are in China" cannot be asserted. Confidence high applies to the reporting facts.
- The Information's original is paywalled — this page relies on secondary reporting's quotes of Lava and NVIDIA.
- NVIDIA's "under 0.5%" claim is a company position — no independent verification.