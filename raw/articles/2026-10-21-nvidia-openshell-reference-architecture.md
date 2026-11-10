---
title: "NVIDIA OpenShell Reference Architecture — DPU 실리콘 레벨에서 에이전트를 강제하는 안전 아키텍처 발표"
source_url: "https://thecircuitry.to/article/nvidia-openshell-reference-architecture-safe-ai-agents-mvhyk19p"
source_type: "news"
authors: ["The Circuitry", "TeslaNewsWire", "NVIDIA"]
published: 2026-10-21
fetched: 2026-10-21
tags: [nvidia, openshell, agent-safety, runtime, dpu, bluefield, sentry, vera-rubin, gtc-berlin]
status: raw
---

# NVIDIA OpenShell Reference Architecture — DPU 실리콘 레벨에서 에이전트를 강제하는 안전 아키텍처 발표

> 2026-10-21 GTC Berlin에서 젠슨 황이 AI 에이전트용 풀스택 참조 아키텍처 발표 — "생각은 Rubin에서, 행동은 Vera에서, 통제는 BlueField에서 (think on Rubin, act on Vera, be governed on BlueField)". Vera CPU에서 오픈소스 OpenShell 보안 런타임이 에이전트 하네스 경계를 설정하고, BlueField-4 DPU의 NVIDIA Sentry(DOCA 기반)가 대역 외(out-of-band)로 행위를 감시해 실리콘 레벨에서 정책을 강제. 경계를 벗어나려는 에이전트는 밀리초 단위로 격리·중단. 참여사: Anthropic·AWS·Google Cloud·Meta·Microsoft·OpenAI·SpaceX Super Intelligence 등. (The Circuitry 독립 분석·TeslaNewsWire·NVIDIA 보도자료 교차)

## 내용

- **발표**: 2026-10-21, GTC Berlin. AI 에이전트 안전을 위한 풀스택 참조 아키텍처 — 소프트웨어 샌드박스가 아닌 하드웨어 강제 집행을 전면에.
- **3층 구조**: (1) 생각 — Vera Rubin에서 모델 추론 (폐쇄형 + Nemotron 기반 오픈 모델); (2) 행동 — Vera CPU에서 에이전트 하네스·툴 사용, 오픈소스 OpenShell 보안 런타임이 경계 설정; (3) 통제 — BlueField-4 DPU에서 NVIDIA Sentry가 대역 외로 지속 감시, 실리콘 레벨 정책 강제. 위반 시 밀리초 단위 격리·중단.
- **NVIDIA 주장 수치**: Vera Rubin NVL72는 와트당 30배 처리량, Vera CPU는 x86 대비 2배 성능·고효율, Sentry 도입 시 에이전트 수용량 최대 +20%.
- **생태계**: Anthropic, AWS, Cisco, CrowdStrike, Dell, Google Cloud, HPE, IBM, Meta, Microsoft, OpenAI, Palo Alto Networks, Perplexity, SAP, ServiceNow, Siemens, SpaceX Super Intelligence 등 참여. 엣지(RTX Spark·DGX Spark·DGX Station)까지 확장.
- **약점 지적** (The Register 경유 TeslaNewsWire): NVIDIA 하드웨어 종속, OpenShell GitHub의 미해결 보안 이슈, 텔레메트리 기본 수집 (opt-out 필요).

## 맥락

- [[patterns/agent-safety-runtime]] — 실행시점 에이전트 보안 런타임의 "실리콘 레벨 강제" 구현 — 어제(10-20) 보강된 영국 CSRB '통제 상실' 집행 조항과 정면으로 맞닿는 기술 답. "멈추는 방법"의 하드웨어화.
- [[concepts/cairn-norforge-ai-agent-hacking-spree]] — 어제의 Cairn 에이전트 해킹 캠페인 (건당 $50) — Sentry 같은 대역 외 감시가 막으려는 위협 모델의 실증 사례.
- [[concepts/uk-csrb-ai-agent-loss-of-control]] — 영국 CSRB '통제 상실' 조항 (10-19 상정) — 법적 발동 조건("통제 상실")에 대한 기술적 구현 답이 OpenShell/Sentry. 규제-기술의 양면 수렴.
