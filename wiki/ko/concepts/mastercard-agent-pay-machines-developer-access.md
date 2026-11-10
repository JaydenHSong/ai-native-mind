---
title: "Mastercard Agent Pay for Machines — x402 프로토콜 기반 에이전트 결제 레일"
category: concepts
tags: [mastercard, agent-pay, x402, agent-payments, coinbase, bvnik, commerce, protocols, http-402]
created: 2026-10-21
updated: 2026-10-21
sources:
  - "raw/articles/2026-10-21-mastercard-agent-pay-machines-developer-access.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/agentic-finance]]"
  - "[[patterns/agent-server-harness]]"
status: draft
confidence: high
---

# Mastercard Agent Pay for Machines — x402 프로토콜 기반 에이전트 결제 레일

## 쉽게 읽기

**비유**: 에이전트가 API를 쓸 때마다 "계산서"를 내는 게 아니라, HTTP 요청 자체에 "돈을 동봉"하는 방식이다. 편지 봉투에 우표를 붙이듯, API 호출에 결제 바우처를 붙여 보낸다. 받는 쪽은 봉투를 열자마자 돈이 들어 있음을 확인한다 — 별도의 결제 창구를 거칠 필요가 없다. 휴면이었던 HTTP 402 "Payment Required" 코드가 30년 만에 깨어난 이유다.

| 용어 | 풀이 |
|------|------|
| **x402** | 휴면 상태였던 HTTP 402 "Payment Required" 코드를 되살린 오픈 결제 프로토콜 |
| **AP4M** | Agent Pay for Machines — Mastercard의 에이전트 결제 상품 |
| **오프체인 서명 바우처** | 블록체인에 올리지 않고 서명으로 증명하는 결제 증표 — 정산 비용 없이 서브센트 결제 가능 |
| **BVNK** | Mastercard가 2026-08 인수한 업체 — AP4M에서 법정화폐/스테이블코인 양면 정산 담당 |

## 한줄 정의

2026-10-20 Cloudflare Connect 2026에서 Mastercard가 Agent Pay for Machines (AP4M)의 바이어/셀러 양면 API·SDK·샌드박스 얼리 액세스를 개방 — 파일럿 단계. 핵심은 x402 오픈 결제 프로토콜: 오프체인 서명 바우처로 에이전트가 기계 속도로 API 호출 결제. Coinbase가 Base·Solana에서 이미 1억 건 이상 x402 결제를 처리 중.

## 핵심 내용

- **개방**: 2026-10-20 Cloudflare Connect 2026 (샌프란시스코). AP4M 바이어/셀러 양면 API·SDK·샌드박스 얼리 액세스. 파일럿 — 상용 미출시.
- **x402 프로토콜**: 휴면이었던 HTTP 402 코드를 되살린 오픈 결제 프로토콜. 오프체인 서명 바우처로 기계 속도의 API 호출 결제 — 서브센트 결제도 블록체인 정산 비용 없이.
- **프로덕션 베이스라인**: Coinbase Developer Platform이 Base·Solana에서 이미 1억 건 이상 x402 결제 처리 — 파일럿이 아니라 돌아가는 레일 위의 확장.
- **역할 분담**: Coinbase 지갑 인프라 (에이전트 자금) + Base 온체인 정산 + BVNK (2026-08 Mastercard 인수)가 Global Money Platform으로 법정화폐/스테이블코인 양면 정산.
- **파일럿 파트너**: Cloudflare, Ant International, AWS, AIsa, BVNK, Coinbase, Base.
- **데모**: 마케팅 에이전트가 사전 승인된 하나의 예산으로 AIsa·Cloudflare AI Gateway 두 상점에 9회 결제 실행.
- **경쟁 구도**: Visa의 AI 에이전트 파일럿에 이은 카드 네트워크의 에이전트 결제 표준화 경쟁.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 경제의 결제 레이어가 표준화되는 중**: 9-24 위키가 "에이전트가 상품을 고르고 결제하는 패러다임"을 패턴으로 정리했는데, 그 결제 호출이 HTTP 네이티브 프로토콜 (x402)이 되고 있다. 에이전트 서버를 짤 때 "결제는 별도 SDK"가 아니라 "HTTP 헤더/바우처"로 처리하는 설계가 가능해짐.
2. **서브센트 결제의 의미**: API 호출당 몇 센트 이하의 결제가 정산 비용 없이 가능해지면, 에이전트의 "툴 호출 한 번"에 과금하는 마이크로 경제가 열린다. 토큰 가격이 아니라 "행동 가격"의 시대 — 하네스 비용 모델을 다시 짜야 할 수도.
3. **남은 과제**: 한도·취소·신원 (지갑 탈취 시) — 결제 레일이 표준화돼도 "누가 얼마까지 쓸 수 있는가"의 권한 모델은 빌더의 몫. patterns/agent-authority-model (10-05, 업무별 에이전트 권한 5단계)과 연결되는 설계 문제.
4. **아직 파일럿**: 상용 미출시 — 프로덕션 의존은 시기상조. 다만 Coinbase의 1억 건 처리는 프로토콜 자체의 검증을 의미.

## 한계 (명시)

- 파일럿 단계 — 상용 미출시. API 스펙·수수료 구조의 변경 가능성.
- 1억 건 x402 처리는 Coinbase의 Base·Solana 기준 — Mastercard AP4M 자체의 처리량은 아님.
- 한도·취소·분쟁 해결 메커니즘의 구체 내용은 미공개.
- 독립 매체 5곳 교차이나, 모두 발표 보도 — 실제 개발자 사용 후기는 없음.
