---
title: "OpenAI ChatGPT Wallet — 에이전트가 카드 정보 없이 결제 (11-13)"
category: concepts
tags: [openai, chatgpt, wallet, agents, payments, commerce]
created: 2026-11-14
updated: 2026-11-14
sources:
  - "raw/articles/2026-11-14-openai-chatgpt-wallet.md"
related:
  - "[[concepts/sierra-poppy-1-0]]"
  - "[[concepts/openai-dots-email-2fa-codes]]"
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/us-banks-block-ai-agents]]"
  - "[[concepts/mcp]]"
status: draft
confidence: high
---

# OpenAI ChatGPT Wallet — 에이전트가 카드 정보 없이 결제 (11-13)

## 쉽게 읽기

**비유**: 에이전트에게 지갑을 통째로 맡기는 게 아니라, 계산대에서 내가 지문으로 찍어주는 일회용 결제권을 건네는 것이다. 에이전트는 돈은 내지만 카드 번호는 끝까지 모른다.

| 용어 | 풀이 |
| **토큰화(tokenization)** | 실제 카드 번호 대신 일회용 대체 번호를 발급해 결제하는 방식 |
| **생체 승인** | Face ID·지문으로 사용자가 매 건을 직접 확인하는 절차 |
| **dots** | OpenAI의 상시 가동 에이전트 — Wallet은 dot 대화 안에서만 동작한다 |
| **직불·가상카드** | Wallet이 지원하지 않는 카드 종류 — 신용카드만 가능 |

## 한줄 정의

2026-11-13 — OpenAI가 ChatGPT Wallet을 출시했다. 상시 가동 'dots' 에이전트가 사용자 대신 결제를 완료하는데, 에이전트도 가맹점도 실제 카드 번호를 보지 못한다. 매 건마다 사용자가 생체 인증으로 승인해야 한다.

## 핵심 내용

- **방식**: 사용자가 상품·총액·카드를 확인한 뒤 Face ID/지문으로 승인하면, 결제 네트워크가 토큰화된 대체 카드 번호를 발급한다. 에이전트와 가맹점은 실제 카드 정보를 보지 못한다.
- **파트너**: American Express, Mastercard, Visa와 공동 구축했다. 사기 탐지는 Forter·Riskified·Sardine·Signifyd, 결제 처리는 Adyen·Checkout.com·Stripe가 맡는다.
- **출시 범위**: 미국 ChatGPT Pro 구독자, 18세 이상, 적격 미국 발급 신용카드(Amex·Chase·Mastercard·Visa)만 해당한다. 직불·가상카드는 미지원이다. dot 대화 안에서만 동작하고 Chat·Work·Codex에서는 안 된다.
- **수수료**: 출시 시 OpenAI 수수료 0%. 향후 카테고리·기간별 지출 한도 안에서 위임하는 기능을 계획하고 있다.
- **규모**: OpenAI는 ChatGPT 주간 사용자가 12억 명이라고 밝혔다.
- **반대 방향**: United Airlines는 11-11 운송약관을 바꿔 무단 AI 에이전트의 티켓 구매를 금지했다. 결제는 되지만 가맹점 허가는 별개 싸움이다.

## 왜 중요한가 (1인 개발자 관점)

1. **결제 = 에이전트 상거래의 마지막 병목이 풀렸다**: Poppy가 입구라면 Wallet은 계산대다. 에이전트가 상품을 고르고 실제 돈까지 내는 흐름이 기술적으로 닫혔다.
2. **'매 건 생체 승인'은 권한 모델의 정석이다**: 에이전트에게 돈을 맡기되, 한 건 한 건 사람이 게이트를 지킨다. 내 하네스의 돈 관련 동작도 같은 구조 — 자동 실행 + 건별 승인 — 로 짜야 한다.
3. **가맹점 허가는 별개 싸움이다**: United의 금지 조항처럼 기술이 돼도 약관이 막는다. 내 서비스도 에이전트 결제를 받을지, 어떤 조건으로 받을지 정책을 정해야 한다.

## 한계 (명시)

- 미국 Pro 구독자·신용카드·dot 대화 한정 — 아직 좁은 범위다.
- 주간 사용자 12억 명은 OpenAI 발표 수치다.
- 향후 지출 한도 위임 기능은 계획 단계다.

## 관련 개념

- [[concepts/sierra-poppy-1-0]] — 같은 날 출시된 Sierra Poppy 1.0, 에이전트 진입 표준 (2026-11-13)
- [[concepts/openai-dots-email-2fa-codes]] — OpenAI Dots, 결제가 동작하는 상시 가동 에이전트 (2026-11-09)
- [[patterns/agentic-commerce]] — 에이전트가 상품을 고르고 결제하는 패러다임
- [[concepts/us-banks-block-ai-agents]] — 미 대형은행의 AI 에이전트 계좌 차단과 대조되는, 건별 사용자 승인 기반 결제 경로 (2026-10-24)
- [[concepts/mcp]] — 에이전트-도구 연결 표준, 결제 에이전트의 기반 (2026-04)

## 참고 소스

- [OpenAI ChatGPT Wallet 출시 원본](raw/articles/2026-11-14-openai-chatgpt-wallet.md)
