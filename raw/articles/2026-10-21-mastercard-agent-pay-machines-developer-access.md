---
title: "Mastercard Agent Pay for Machines — x402 프로토콜 기반 에이전트 결제 API 개발자 얼리 액세스 개방"
source_url: "https://www.techtimes.com/articles/329316/20261021/mastercard-opens-developer-apis-ai-agent-payments-built-x402-protocol.htm"
source_type: "news"
authors: ["TechTimes", "CoinMarketCap", "TradersUnion", "spendnode", "zubiqo"]
published: 2026-10-20
fetched: 2026-10-21
tags: [mastercard, agent-pay, x402, agent-payments, coinbase, bvnik, commerce, protocols]
status: raw
---

# Mastercard Agent Pay for Machines — x402 프로토콜 기반 에이전트 결제 API 개발자 얼리 액세스 개방

> 2026-10-20 Cloudflare Connect 2026 (샌프란시스코)에서 Mastercard가 Agent Pay for Machines (AP4M)의 바이어/셀러 양면 API·SDK·샌드박스 얼리 액세스를 개방 — 파일럿 단계, 상용 미출시. 핵심은 휴면 상태였던 HTTP 402 "Payment Required" 코드를 되살린 오픈 결제 프로토콜 x402: 오프체인 서명 바우처로 에이전트가 기계 속도로 API 호출 결제 — 서브센트 결제도 블록체인 정산 비용 없이. Coinbase Developer Platform이 이미 Base·Solana에서 1억 건 이상 x402 결제를 처리 (프로덕션 베이스라인). 역할 분담: Coinbase 지갑 인프라(에이전트 자금) + Base 온체인 정산 + Mastercard가 8월 인수한 BVNK가 Global Money Platform으로 법정화폐/스테이블코인 양면 정산. 데모: 마케팅 에이전트가 사전 승인 예산 하나로 AIsa·Cloudflare AI Gateway 두 상점에 9회 결제 실행. (TechTimes·CoinMarketCap·TradersUnion·spendnode·zubiqo 교차)

## 내용

- **개방**: 2026-10-20 Cloudflare Connect 2026. AP4M 바이어/셀러 양면 API·SDK·샌드박스 얼리 액세스. 파일럿 단계 — 상용 미출시.
- **x402 프로토콜**: 휴면이었던 HTTP 402 "Payment Required" 코드를 되살린 오픈 결제 프로토콜. 오프체인 서명 바우처로 에이전트가 기계 속도로 API 호출 결제 — 서브센트 단위 결제도 블록체인 정산 비용 없이 처리.
- **프로덕션 베이스라인**: Coinbase Developer Platform이 Base·Solana에서 이미 1억 건 이상 x402 결제 처리 — 파일럿이 아니라 돌아가는 결제 레일 위에 올라섬.
- **역할 분담**: Coinbase 지갑 인프라 (에이전트 자금) + Base 온체인 정산 + BVNK (Mastercard가 2026-08 인수) 가 Global Money Platform으로 법정화폐/스테이블코인 양면 정산.
- **파일럿 파트너**: Cloudflare, Ant International, AWS, AIsa, BVNK, Coinbase, Base.
- **데모**: 마케팅 에이전트가 사전 승인된 하나의 예산으로 AIsa·Cloudflare AI Gateway 두 상점에 9회 결제 실행.
- **경쟁 구도**: Visa의 AI 에이전트 파일럿에 이은 카드 네트워크의 에이전트 결제 표준화 경쟁.

## 맥락

- [[patterns/agentic-commerce]] — "에이전트가 상품을 고르고 결제하는 패러다임" (9-24/25) — 그 결제 레이어의 첫 카드 네트워크급 개발자향 구현.
- [[concepts/agentic-finance]] — 에이전트에게 실제 돈을 맡기는 상품화, Robinhood Agents 실전 배치 (10-01) — 금융 에이전트의 "지갑" 쪽 인프라 (AP4M은 결제 레일).
- [[patterns/agent-server-harness]] — HTTP·큐·SSE 뒤의 에이전트 백엔드 — x402는 에이전트 서버의 결제 호출을 HTTP 네이티브로 만드는 프로토콜 선택지.
