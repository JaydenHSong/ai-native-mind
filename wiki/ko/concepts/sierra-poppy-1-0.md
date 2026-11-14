---
title: "Sierra Poppy 1.0 — 개인 에이전트 프로토콜, Shopify 전 상점 자동 적용 (11-13)"
category: concepts
tags: [sierra, poppy, agent-protocol, mcp, shopify, meta, commerce]
created: 2026-11-14
updated: 2026-11-14
sources:
  - "raw/articles/2026-11-14-sierra-poppy-1-0.md"
related:
  - "[[concepts/openai-chatgpt-wallet]]"
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
  - "[[patterns/agentic-commerce]]"
status: draft
confidence: high
---

# Sierra Poppy 1.0 — 개인 에이전트 프로토콜, Shopify 전 상점 자동 적용 (11-13)

## 쉽게 읽기

**비유**: 에이전트가 상점에 들어갈 때 "손님입니다, 이 정도까지만 할게요"라고 먼저 인사하고 허락을 받는 입장권 같은 것이다. 문을 부수고 들어가는 게 아니라, 상점 쪽이 미리 내준 안내문을 읽고 허용된 범위 안에서만 움직인다.

| 용어 | 풀이 |
| **Personal Agent Protocol (Poppy)** | 개인 에이전트가 기업·상점을 발견하고 허용된 행동을 협상하는 표준 |
| **poppy.json** | 상점이 게시하는 Poppy 안내 파일 — 에이전트가 무엇을 할 수 있는지 적혀 있다 |
| **UCP (Universal Commerce Protocol)** | Shopify의 상거래 프로토콜 — 검색·장바구니·결제를 맡는다 |
| **OAuth** | 사용자가 에이전트에게 권한을 주고 통제·관리하는 인증 방식 |
| **디자인 파트너** | 스펙을 함께 만들고 실제 도입을 검증하는 협력 기업 |

## 한줄 정의

2026-11-13 — Sierra가 Personal Agent Protocol(Poppy) 1.0을 출시했다. 개인 에이전트가 기업을 발견하고 허용된 행동을 협상하는 표준으로, Shopify 전 상점이 별도 설정 없이 poppy.json을 자동 게시하고, Meta의 Muse 에이전트는 방문하는 모든 사이트에서 Poppy를 먼저 찾는다.

## 핵심 내용

- **프로토콜**: 개인 에이전트가 기업의 비즈니스 에이전트·웹사이트·API를 통해 상호작용하는 방식을 정의한다. MCP·OpenAPI·Shopify UCP 등 기존 표준 위에 구축됐고, OAuth 인증으로 사용자가 에이전트 권한을 통제·관리한다.
- **Shopify**: 175개국 이상 상점 전체가 기본적으로 UCP를 지원하고, 이제 모든 상점이 poppy.json 파일을 자동 게시한다. 상인 추가 구현이 필요 없다. UCP가 쇼핑(검색·장바구니·결제)을 맡고, Poppy는 그 전에 에이전트가 신원을 밝히고 허용 범위를 파악하는 단계를 맡는다. 상거래 확장은 Shopify와 공동 작성했다.
- **Meta Muse**: Muse를 쓰는 모든 사용자에게 Poppy가 켜졌다. 방문하는 모든 사이트에서 기본적으로 Poppy를 먼저 찾는다.
- **규모**: 신규 디자인 파트너 60곳(Cisco·Delta·Intuit·Salesforce·Twilio·Zoom 등)이 합류해 총 100곳을 돌파했다. 실제 가동 사례: Mercury(잔액·거래 조회, 승인 정책 하 결제·이체 개시), Synchrony(금융·리워드 연계 쇼핑), Turkish Airlines(운임·예약 조회, 마일리지 비즈니스 업그레이드).
- **주의**: Sierra는 v1.0이라 부르지만 스펙은 여전히 draft 1.0으로 표기돼 파괴적 변경이 가능하다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 상거래의 '입구'가 표준화됐다**: 내 에이전트가 상점을 만날 때 협상 방식을 직접 구현하지 않아도 된다. Poppy가 있으면 에이전트는 상점의 안내문을 읽고 허용 범위 안에서 움직인다.
2. **Shopify 자동 게시 = 배포 마찰 제로**: 상인 추가 구현이 필요 없다. 내 서비스도 poppy.json 하나면 에이전트 손님을 맞을 준비가 되는 구조다.
3. **Meta Muse의 기본 탐색 = 에이전트가 웹을 만나는 첫 단계가 'Poppy 있나?'가 됐다**: 내 사이트·서비스가 에이전트에게 보이려면 이 파일을 의식해야 한다.

## 한계 (명시)

- 스펙이 draft 1.0 표기라 파괴적 변경이 가능하다 — v1.0이라는 이름과 실제 안정성은 다르다.
- 실제 가동 사례는 3곳만 공개됐다. 100곳 디자인 파트너 중 나머지의 도입 단계는 미공개다.

## 관련 개념

- [[concepts/openai-chatgpt-wallet]] — 같은 날 출시된 ChatGPT Wallet, 에이전트 결제 해결 (2026-11-13)
- [[concepts/mcp]] — Poppy가 기반 삼는 에이전트-도구 연결 표준 (2026-04)
- [[concepts/a2a-protocol]] — 에이전트 간 협력 표준, Poppy와 나란한 프로토콜 축 (2026-04)
- [[concepts/meta-sierra-poppy-protocol]] — 10-13 Poppy 프로토콜 첫 소개, 이번 1.0의 전 단계 (2026-10-13)
- [[patterns/agentic-commerce]] — 에이전트가 상품을 고르고 결제하는 패러다임

## 참고 소스

- [Sierra Poppy 1.0 출시 원본](raw/articles/2026-11-14-sierra-poppy-1-0.md)
