---
title: "Dropbox, Tigris Data를 약 $350M에 인수하고 DBX Agent Cloud 출범 — 에이전트용 스토리지 인프라로 전환 (11-05)"
source_url: "https://techcrunch.com/2026/11/05/dropbox-acquires-tigris-data-for-350m-to-bolster-its-ai-iinfrastructure/"
source_type: "news"
authors: ["TechCrunch", "Dropbox"]
published: 2026-11-05
fetched: 2026-11-08
tags: [dropbox, tigris, agent-cloud, storage, infrastructure]
status: raw
---

# Dropbox, Tigris Data를 약 $350M에 인수하고 DBX Agent Cloud 출범 — 에이전트용 스토리지 인프라로 전환 (11-05)

> Dropbox가 11-05 발표한 Q3 실적과 함께 클라우드 스토리지 스타트업 Tigris Data를 현금 약 $350M에 인수하는 확정 계약을 체결했고, AI 애플리케이션·에이전트 개발자용 인프라 사업 DBX Agent Cloud를 출범시켰다. 계약은 11-03 체결됐고, 2026년 4분기 마감이 예상된다. TechCrunch는 Dropbox 사상 최대 규모 인수일 가능성이 있다고 전했다.

## 내용

- **거래 조건**: 8-K에 따르면 Dropbox는 11-03 Tigris Data Inc.의 전 지분을 현금 약 $350M에 사는 확정 계약을 맺었다. 통상적 조건 충족 시 2026년 4분기 마감 예정이며, 가격은 조정될 수 있다. Tigris의 사전 누적 투자금은 Crunchbase 기준 약 $31.9M이다. 인수로 인한 인력 감축 계획은 없다고 Dropbox는 밝혔다.
- **Tigris란**: 전 Uber 스토리지 아키텍트들이 설립한 글로벌 분산 오브젝트 스토리지 플랫폼. Amazon S3와 호환되고 송신료(egress fee)가 없으며, 메타데이터를 FoundationDB에 둔다. Dropbox는 수년간 대부분의 사용자 데이터를 S3에서 자체 인프라로 옮겨 온 회사다.
- **DBX Agent Cloud**: AI 애플리케이션·에이전트를 만드는 기업·개발자용 신규 인프라 사업. 첫 제품은 독립 구매 가능한 S3 호환 오브젝트 스토리지로, 기존 S3용 도구·앱과 그대로 연동된다. 이후 파일시스템 기능과 문서·이미지·오디오·비디오용 콘텐츠 처리 기능을 더해, 에이전트가 파일을 관리하고 작업·세션 간 연속성을 유지하도록 돕는다는 구상이다. 출시일·가격·SLA는 아직 공개되지 않았다.
- **Dropbox의 계산**: 여유 스토리지 용량을 활용해 AI 네이티브 플랫폼에 엑사바이트급 인프라를 제공하는 것이 목적이다. Tigris 제품·S3 호환 API·가격·지원 채널은 거래 진행 중 그대로 유지된다.
- **수치의 한계**: 거래는 아직 마감되지 않았다. Tigris의 매출·고객 수, Agent Cloud의 예상 매출은 공개되지 않아 사업성을 평가할 수 없다. $350M은 2019년 HelloSign 인수액 $230M보다 약 52% 많다.

## 맥락

- [[concepts/google-agent-compute-engine]] — Google Cloud Agent Compute Engine, 에이전트 세션마다 하드웨어 격리 microVM (2026-10-23)
- [[concepts/llm-d-1-0-pytorch-conference]] — llm-d 1.0, 에이전트용 세션 어웨어 라우팅 분산 추론 스택 (2026-10-20)
- [[concepts/nvidia-dsx-pod-modular-ai-factories]] — NVIDIA DSX POD, 14일 배치 주장의 모듈형 AI 팩토리 (2026-10-21)
- [[concepts/mastercard-agent-pay-machines-developer-access]] — Mastercard Agent Pay for Machines, x402 프로토콜 에이전트 결제 API (2026-10-21)
