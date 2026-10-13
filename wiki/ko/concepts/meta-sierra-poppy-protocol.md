---
title: "Meta×Sierra Poppy — 개인 에이전트 프로토콜 draft 0.1 (2026-10-09)"
category: concepts
tags: [meta, sierra, poppy, personal-agent-protocol, agentic-commerce, oauth, agent-identity]
created: 2026-10-13
updated: 2026-10-13
sources:
  - "raw/articles/2026-10-13-meta-sierra-poppy-protocol.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: medium
---

# Meta×Sierra Poppy — 개인 에이전트 프로토콜 draft 0.1 (2026-10-09)

## 한줄 정의

개인의 AI 에이전트가 기업에 로그인하고 거래하는 방식을 규정한 오픈 표준 — Meta와 Sierra(공동창업자 Bret Taylor) 공동 주도, 2026-10-09 draft 0.1을 Apache 2.0으로 공개.

## 핵심 내용

- **공개**: Sierra가 2026-10-09 Personal Agent Protocol (PAP, 별칭 Poppy) draft 0.1을 Apache 2.0으로 공개. Discovery 문서 `/.well-known/poppy.json`, 세션은 OAuth 2.0 기반.
- **권한 모델**: 고객이 에이전트에게 view-only vs change 접근 권한 부여. 기업은 에이전트가 할 수 있는 일에 한도 설정 — "차단"과 "전권 위임" 사이의 제3 옵션.
- **파트너**: 런치 파트너 Genesys, Instinct, NiCE, Rocket, Shopify, Stripe, Walmart. 35개 디자인 파트너 — OpenAI, Visa, Mastercard, PayPal, Bank of America, Target, United Airlines 포함.
- **데모**: Meta Muse 에이전트가 프로토콜로 Rocket 에이전트를 찾아내 Rocket 임원의 주택담보대출 사전승인 서한을 "몇 순간 만에" 발급.
- **배경**: Amazon이 9월에 신원을 밝히지 않은 Meta Muse 에이전트를 차단 (PYMNTS 9/21). 상인의 23%만이 AI 주도 트래픽을 명확히 식별 가능 (PYMNTS Intelligence).

## 왜 중요한가

AI 네이티브 프로그래머에게 Poppy는 **에이전트 상거래의 신원·권한 레일**이다. "에이전트가 누구 편인가"(agentic-commerce의 핵심 질문)에 "에이전트가 누구인지 증명하는가"가 추가됐다. 실무적으로는 에이전트가 결제·계좌를 만지는 서비스에서 "차단 vs 전권 위임"의 이분법을 깨는 제3 옵션이 생겼다는 의미 — 기업이 에이전트에게 줄 수 있는 권한을 세밀하게 설계할 수 있게 된다. view-only vs change의 구분은 [[concepts/agent-authority-model]]의 5단계 권한 프레임워크가 실제 표준으로 구현되는 모양새다. draft 0.1 단계이므로 스펙은 바뀔 수 있지만, OpenAI·Visa·Stripe가 디자인 파트너로 들어온 것은 "이 레일이 실제로 쓰일 것"이라는 시장의 베팅이다.

## 관련 개념

- [[patterns/agentic-commerce]] — 에이전트 상거래의 신원·권한 레일. "에이전트가 누구 편인가"에 신원 증명이 추가됨.
- [[concepts/agent-authority-model]] — view-only vs change 접근은 권한 5단계 프레임워크의 실제 구현체.
- [[concepts/agent-attribution]] — 에이전트 신원의 표준화는 보안 사건 귀속의 전제 조건.
- [[concepts/a2a-protocol]] — 에이전트 간 협력 표준과 Poppy(에이전트-기업 거래 표준)의 역할 분담.
- [[concepts/google-workspace-mcp-agentic-oauth]] — 같은 주의 평행 움직임: 에이전트 신원 인프라의 표준화 경쟁.

## 참고 소스

- [PYMNTS (원보도)](https://www.pymnts.com/news/artificial-intelligence/2026/meta-sierra-poppy-lets-customers-set-limits-ai-agents/)
- 원본 캡처: [raw/articles/2026-10-13-meta-sierra-poppy-protocol.md](raw/articles/2026-10-13-meta-sierra-poppy-protocol.md)