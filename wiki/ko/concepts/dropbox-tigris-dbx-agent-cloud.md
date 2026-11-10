---
title: "Dropbox, Tigris Data를 약 $350M에 인수하고 DBX Agent Cloud 출범 — 에이전트용 스토리지 인프라로 전환"
category: concepts
tags: [dropbox, tigris, agent-cloud, storage, infrastructure]
created: 2026-11-08
updated: 2026-11-08
sources:
  - "raw/articles/2026-11-08-dropbox-tigris-dbx-agent-cloud.md"
related:
  - "[[concepts/google-agent-compute-engine]]"
  - "[[concepts/llm-d-1-0-pytorch-conference]]"
  - "[[concepts/nvidia-dsx-pod-modular-ai-factories]]"
  - "[[concepts/mastercard-agent-pay-machines-developer-access]]"
status: draft
confidence: high
---

# Dropbox, Tigris Data를 약 $350M에 인수하고 DBX Agent Cloud 출범 — 에이전트용 스토리지 인프라로 전환

## 쉽게 읽기

**비유**: 파일 보관함 회사(Dropbox)가 "AI 비서들이 일할 때 파일을 꺼내고 저장하는 창고"를 새로 짓기로 했다. 창고를 빨리 짓기 위해 이미 창고를 잘 짓는 작은 회사(Tigris)를 통째로 샀다. 아직 창고 문은 안 열었고, 가격표도 없다.

| 용어 | 풀이 |
|------|------|
| **오브젝트 스토리지** | 파일을 덩어리(오브젝트) 단위로 저장하는 방식 — S3가 대표적. 에이전트가 대량의 파일을 다루기 좋다 |
| **송신료(egress fee)** | 클라우드에서 데이터를 밖으로 꺼낼 때 내는 요금 — Tigris는 이를 안 받는다 |
| **DBX Agent Cloud** | Dropbox의 신규 인프라 사업 — 에이전트가 쓰는 스토리지·데이터 계층 |

## 한줄 정의

2026-11-05 — Dropbox가 Q3 실적과 함께 클라우드 스토리지 스타트업 Tigris Data를 현금 약 $350M에 인수하는 확정 계약을 체결했고, AI 애플리케이션·에이전트 개발자용 인프라 사업 DBX Agent Cloud를 출범시켰다. 계약은 11-03 체결됐고, 2026년 4분기 마감이 예상된다. TechCrunch는 Dropbox 사상 최대 규모 인수일 가능성이 있다고 전했다.

## 핵심 내용

- **거래 조건**: 8-K에 따르면 Dropbox는 11-03 Tigris Data Inc.의 전 지분을 현금 약 $350M에 사는 확정 계약을 맺었다. 통상적 조건 충족 시 2026년 4분기 마감 예정이며, 가격은 조정될 수 있다. Tigris의 사전 누적 투자금은 Crunchbase 기준 약 $31.9M이다. 인수로 인한 인력 감축 계획은 없다고 Dropbox는 밝혔다.
- **Tigris란**: 전 Uber 스토리지 아키텍트들이 설립한 글로벌 분산 오브젝트 스토리지 플랫폼. Amazon S3와 호환되고 송신료가 없으며, 메타데이터를 FoundationDB에 둔다. Dropbox는 수년간 대부분의 사용자 데이터를 S3에서 자체 인프라로 옮겨 온 회사다.
- **DBX Agent Cloud**: AI 애플리케이션·에이전트를 만드는 기업·개발자용 신규 인프라 사업. 첫 제품은 독립 구매 가능한 S3 호환 오브젝트 스토리지로, 기존 S3용 도구·앱과 그대로 연동된다. 이후 파일시스템 기능과 문서·이미지·오디오·비디오용 콘텐츠 처리 기능을 더해, 에이전트가 파일을 관리하고 작업·세션 간 연속성을 유지하도록 돕는다는 구상이다. 출시일·가격·SLA는 아직 공개되지 않았다.
- **Dropbox의 계산**: 여유 스토리지 용량을 활용해 AI 네이티브 플랫폼에 엑사바이트급 인프라를 제공하는 것이 목적이다. Tigris 제품·S3 호환 API·가격·지원 채널은 거래 진행 중 그대로 유지된다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 인프라가 "컴퓨트" 다음으로 "스토리지"로 넓어진다**: 지금까지 에이전트 인프라는 모델·컴퓨트·샌드박스 얘기가 중심이었다. Dropbox는 에이전트가 파일을 어디에 두고, 세션 간 맥락을 어떻게 이어갈지를 상품으로 만들려 한다. 에이전트의 "기억"이 메모리 시스템을 넘어 스토리지 계층으로 확장되는 흐름이다.
2. **파일 동기화 회사의 생존 전략이다**: Dropbox의 본업(파일 공유)은 성장 정체 상태다. 여유 용량 + Tigris 인수로 AI 인프라 사업에 뛰어드는 것은, 기존 자산을 새 시장에 얹는 전환 시도다. 성공 여부는 Agent Cloud의 실제 매출이 말해줄 것이다.
3. **아직 살 수 있는 게 없다**: 출시일·가격·SLA가 모두 미정이다. 지금은 방향 선언이지 제품이 아니다. 1인 개발자가 당장 쓸 수 있는 건 기존 Tigris 서비스뿐이다.

## 한계 (명시)

- 거래는 아직 마감되지 않았다. Tigris의 매출·고객 수, Agent Cloud의 예상 매출은 공개되지 않아 사업성을 평가할 수 없다.
- $350M은 2019년 HelloSign 인수액 $230M보다 약 52% 많지만, Dropbox 사상 최대 규모라는 평가는 TechCrunch의 표현이다.

## 참고 소스

- [Dropbox Tigris 인수·DBX Agent Cloud 원본](raw/articles/2026-11-08-dropbox-tigris-dbx-agent-cloud.md)
