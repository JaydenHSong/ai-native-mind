---
title: "Dataiku launches Agent Management: cross-platform agent inventory, performance and risk flags"
source_url: "https://agilebrandguide.com/yesterdays-martech-ai-cx-news-september-25-2026/"
source_type: "research-news"
authors: ["Dataiku"]
published: 2026-09-24
fetched: 2026-09-26
tags: [agent-governance, observability, enterprise-agents, inventory]
status: raw
---

# Dataiku launches Agent Management: cross-platform agent inventory, performance and risk flags

> Dataiku가 9/24 뉴욕 Succeed 컨퍼런스에서 스탠드얼론 제품 "Agent Management" 출시 — AWS Bedrock, Databricks Agents, Google Vertex, Microsoft Copilot Studio/Azure Foundry, Salesforce Agentforce, Snowflake Cortex 등 플랫폼을 가리지 않고 기업이 운영하는 AI 에이전트를 인벤토리화하고, 비즈니스·기술 성능을 측정하며, 가장 리스크가 큰 에이전트를 플래그.

## 메타

- **Title**: Dataiku Launches Agent Management to Track and Manage Performance of AI Agents Built and Running on Leading Platforms
- **Source**: Agile Brand Guide (Dataiku 2026-09-24 발표 인용, Succeed 컨퍼런스)
- **Link**: <https://agilebrandguide.com/yesterdays-martech-ai-cx-news-september-25-2026/>
- **Published**: 2026-09-24

## 한 줄 요약

**"거버넌스 보드는 마케팅이 Agentforce나 Copilot Studio에 만든 에이전트 목록을 먼저 갖기 전에는 거버넌스할 수 없다" — 에이전트 거버넌스의 0단계는 인벤토리다."
**

## 핵심 내용

1. **제품**: Dataiku "Agent Management" — 에이전트를 만든 플랫폼과 무관하게 기업이 운영하는 모든 AI 에이전트를 인벤토리화하고 비즈니스·기술 성능을 측정하며 리스크가 가장 큰 에이전트를 플래그하는 스탠드얼론 제품.
2. **연결 범위**: AWS Bedrock, Databricks Agents, Google Vertex, Microsoft Copilot Studio + Azure Foundry, Salesforce Agentforce, Snowflake Cortex, Dataiku 자체. 커스텀 환경은 **OpenTelemetry** 지원.
3. **문제 규모**: Dataiku가 인용한 IBM "AI in Motion" 연구 — 완전하고 최신인 AI 시스템 인벤토리를 유지하는 조직은 **5곳 중 1곳 미만**. 같은 주 Dataiku 의뢰 Harris Poll(CIO 685명, 2026-07-09~29)에서는 **10명 중 9명**이 "에이전트를 완전히 추적하고 있다"고 자신 — 자기 인식과 실제 사이의 간극.
4. **맥락**: 섀도 에이전트(shadow agent) 문제의 기업판 — 마케팅·현업이 Agentforce/Copilot Studio에 만든 에이전트가 중앙 가시성 없이 확산되는 구조.
5. **출처 주의**: Dataiku가 자사 제품이 해결하는 문제를 크기 재기 위해 인용한 수치들 — IBM 연구와 Harris Poll은 모집단·정의가 달라 간극 자체는 "시사적이지만 미증명".

## 시사점

- `[[concepts/gen-ai-observability]]`의 엔터프라이즈 확장: OTel GenAI 시맨틱 컨벤션(트레이스 표준)에 더해 **"에이전트 인벤토리"라는 관리 레이어**가 상용 제품으로 등장. 관측(observability) → 관리(governance)로의 축 이동.
- `[[concepts/agent-supply-chain-security]]`와 직결: "외부 도구·스킬·에이전트의 신뢰 모델"은 **무엇이 돌아가고 있는지 아는 것**에서 시작 — 인벤토리 없는 신뢰 모델은 공허함.
- OpenTelemetry 지원은 커스텀 하네스(`[[patterns/agent-server-harness]]`) 운영자에게도 의미 — 표준 계측을 하면 상용 관리 도구와 연동 가능.
- 벤더 수치 한계는 있으나 문제 정의(섀도 에이전트)와 제품 카테고리(크로스 플랫폼 에이전트 관리) 자체는 위키에 둘 가치 — confidence는 **medium**.
