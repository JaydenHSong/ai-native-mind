---
title: "Sierra Poppy 1.0 출시 — 개인 에이전트 프로토콜, Shopify 전 상점 자동 적용 (11-13)"
source_url: "https://sierra.ai/blog/releasing-poppy"
source_type: "news"
authors: ["Sierra"]
published: 2026-11-13
fetched: 2026-11-14
tags: [sierra, poppy, agent-protocol, mcp, shopify, meta, commerce]
status: raw
---

# Sierra Poppy 1.0 출시 — 개인 에이전트 프로토콜, Shopify 전 상점 자동 적용 (11-13)

> Sierra가 11-13 Personal Agent Protocol(Poppy) 1.0을 출시했다. 개인 에이전트가 기업을 발견하고 허용된 행동을 협상하는 표준이다. Shopify 전 상점이 별도 설정 없이 poppy.json을 자동 게시하고, Meta의 Muse 에이전트는 방문하는 모든 사이트에서 Poppy를 먼저 찾는다.

## 내용

- **프로토콜**: 개인 에이전트가 기업의 비즈니스 에이전트·웹사이트·API를 통해 상호작용하는 방식을 정의. MCP·OpenAPI·Shopify Universal Commerce Protocol(UCP) 등 기존 표준 위에 구축. OAuth 인증으로 사용자가 에이전트 권한을 통제·관리한다.
- **Shopify**: 175개국 이상 상점 전체가 기본적으로 UCP를 지원하고, 이제 모든 상점이 poppy.json 파일을 자동 게시한다. 상인 추가 구현 불필요. UCP가 쇼핑(검색·장바구니·결제)을 맡고, Poppy는 그 전에 에이전트가 신원을 밝히고 허용 범위를 파악하는 단계를 맡는다. 상거래 확장은 Shopify와 공동 작성.
- **Meta Muse**: Muse를 쓰는 모든 사용자에게 Poppy가 켜졌다. 방문하는 모든 사이트에서 기본적으로 Poppy를 먼저 찾는다.
- **규모**: 신규 디자인 파트너 60곳(Cisco·Delta·Intuit·Salesforce·Twilio·Zoom 등) 합류, 총 100곳 돌파. 실제 가동: Mercury(잔액·거래 조회, 승인 정책 하 결제·이체 개시), Synchrony(금융·리워드 연계 쇼핑), Turkish Airlines(운임·예약 조회, 마일리지 비즈니스 업그레이드).
- **주의**: Sierra는 v1.0이라 부르지만 스펙은 여전히 draft 1.0으로 표기돼 파괴적 변경이 가능하다.

## 맥락

- [[concepts/openai-chatgpt-wallet]] — 같은 날 OpenAI ChatGPT Wallet 출시, 에이전트 결제 해결 (2026-11-13)
- [[concepts/mcp]] — Poppy가 기반 삼는 에이전트-도구 연결 표준 (2026-04)
- [[concepts/a2a-protocol]] — 에이전트 간 협력 표준, Poppy와 나란한 프로토콜 축 (2026-04)
