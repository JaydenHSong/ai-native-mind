---
title: "에이전트 커머스, 주류로 — Gemini Tasks 무료화·전화·결제 + Klarna 어시스턴트"
category: concepts
tags: [google, gemini-tasks, agentic-commerce, klarna, agent-payments]
created: 2026-11-18
updated: 2026-11-18
sources:
  - "raw/articles/2026-11-18-agentic-commerce-gemini-tasks-klarna.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/openai-chatgpt-wallet]]"
  - "[[concepts/tool-use]]"
  - "[[concepts/mcp]]"
status: draft
confidence: medium
---

# 에이전트 커머스, 주류로 — Gemini Tasks 무료화·전화·결제 + Klarna 어시스턴트

## 쉽게 읽기

**비유**: 이제 AI 비서에게 "이거 제일 싼 데 찾아서 사 줘"라고 하면, 비서가 직접 가게에 전화를 걸어 가격을 물어보고, 내 돈으로 결제까지 한다. 예전에는 월 20달러짜리 유료 기능이었는데, 이제 무료가 됐다. 같은 날 Klarna도 채팅 앱 안에서 쇼핑·예약·심부름을 대신하는 비서를 내놨다. 에이전트가 돈을 쓰는 일이 데모가 아니라 대중 제품이 됐다.

| 용어 | 풀이 |
|------|------|
| **에이전트 커머스** | AI 에이전트가 사람을 대신해 물건을 찾고·사고·예약하는 것 |
| **Gemini Tasks** | Google의 에이전트 모드 — 백그라운드에서 조사·계획을 수행하며 일을 처리한다 |
| **AP2 (Agent Payments Protocol)** | 에이전트가 결제할 때 쓰는 약속(프로토콜) — 한도·승인 방식을 정한다 |
| **토큰 (결제)** | 진짜 카드번호 대신 쓰는 일회용 대역 번호 — 유출돼도 카드가 털리지 않는다 |

## 한줄 정의

Google이 에이전트 모드 Gemini Tasks를 무료로 풀고 전화·결제 기능을 붙였고, 같은 날 Klarna도 WhatsApp·iMessage 안에서 쇼핑·예약·심부름을 대신하는 AI 어시스턴트를 발표했다. 에이전트가 직접 전화를 걸어 가격·재고를 확인하고 돈을 쓰는 일이, 데모가 아니라 **무료 대중 제품**이 됐다.

## 핵심 내용

- **Gemini Tasks 무료화**: 2026-11-17, 기존 월 $19.99 AI Pro 구독이 필요했던 Tasks를 미국·일본·한국·캐나다·호주·인도에서 무료 제공. 새 모델 Gemini 4 Hydrogen 기반(모델 자체는 11월 12일 출시로 이번 건의 범위가 아님).
- **전화**: 미국에서 먼저, Tasks가 현지 업체에 병렬로 전화를 걸어 가격·재고·예약을 확인. AI임을 밝히고 통화하며, 업체는 수신 거부 가능. IN·LA·MN·MT·NE 주에서는 불가.
- **결제**: Google Pay 경유로 체크아웃·결제. Agent Payments Protocol(AP2) 기반, Visa·Mastercard 토큰 지원(Amex 곧 추가). 사용자가 지출 한도 설정(최대 $1,000, 기한 14일 이내). 영수증은 Google Wallet에 저장(Wallet이 iOS로 확대 중).
- **입력**: 텍스트로 작업을 만들거나 gemini@google.com으로 이메일을 전달해 작업을 생성할 수 있음. 백그라운드에서 조사·계획을 수행하는 에이전트 모드.
- **Klarna 어시스턴트**: 같은 날 Klarna가 컨시어지형 AI 어시스턴트 발표 — 최적 상품·가격 탐색, 구매, 반품 처리, 식당·예약, 일상 행정 대행. WhatsApp·iMessage와 Klarna 앱 안에서 동작. 소수 조기 사용자 대상 라이브, 공개 대기자 명단 개설. "도착하기 전에는 결제하지 않는다"는 통제 프레이밍. Q3 실적과 함께 발표: 매출 4분기 연속 $1B 초과(+12% YoY), 순손실 $65M, GMV $36.1B(+10%). 2024년 OpenAI 기반 고객 서비스 어시스턴트(2025년 서비스 채팅의 80% 처리)의 연장선.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트가 현실 세계 도구를 쓰는 단계로 확장**: [[concepts/tool-use]]가 API 호출에서 전화·결제로 넘어갔다. "전화를 거는 AI"는 이제 기능이 아니라 무료 제품의 기본값이다. 업체가 수신을 거부할 수 있다는 점, 일부 주에서 불가하다는 점까지 포함해 설계가 현실과 부딪히기 시작했다.
2. **통제 장치가 설계의 일부가 됐다**: 지출 한도(최대 $1,000, 14일 이내), "도착 전에는 결제하지 않는다"는 Klarna의 프레이밍, 영수증의 Wallet 저장 — [[concepts/ai-orchestration]] 관점에서 대중용 에이전트는 이제 "얼마나 잘하느냐"만큼 "얼마나 안전하게 막느냐"로 평가받는다.
3. **결제 프로토콜이 인프라가 된다**: AP2 같은 에이전트 결제 프로토콜이 [[concepts/mcp]]와 나란히 에이전트 인프라의 한 축으로 등장했다. [[patterns/agentic-commerce]]의 다음 장은 "어떤 프로토콜이 표준이 되느냐"다.
4. **채팅 앱이 쇼핑의 입구가 된다**: Klarna 어시스턴트가 WhatsApp·iMessage 안에서 동작한다는 점 — 사용자가 앱을 새로 깔지 않고 이미 쓰는 채팅에서 에이전트를 부른다. [[concepts/openai-chatgpt-wallet]]의 ChatGPT 내 결제와 같은 방향의 다른 갈래다.
5. **무료화의 의미**: 월 $19.99 장벽이 사라지면서 Tasks의 사용자 규모가 커진다. 에이전트 커머스의 병목이 "기능이 있느냐"에서 "얼마나 많은 사람이 매일 쓰느냐"로 이동한다.

## 한계 (명시)

- 전화 기능은 미국에서 먼저이며 5개 주(IN·LA·MN·MT·NE)에서는 불가 — 한국 무료 제공과 전화 기능의 지역 범위를 혼동하지 말 것.
- Klarna 어시스턴트는 소수 조기 사용자 대상 라이브 + 공개 대기자 명단 단계 — 아직 대중 출시가 아니다.
- Klarna Q3 수치(매출 $1B 초과·순손실 $65M·GMV $36.1B)는 회사 발표 기준.
- Gemini 4 Hydrogen 모델 자체는 11월 12일 출시로 이번 건의 범위가 아니다.
- confidence는 medium — Google·Klarna 공식 발표 1차 출처 교차이나, 전화·결제 기능의 실사용 검증은 아직 없음.

## 관련 개념

- [[patterns/agentic-commerce]] — 에이전트 커머스의 패턴 축, 이번 무료화·결제 확장이 그 다음 장 (2026-10-13)
- [[concepts/openai-chatgpt-wallet]] — OpenAI ChatGPT Wallet, 에이전트 결제·토큰화 카드·매 건 생체 승인 (2026-11-13)
- [[concepts/tool-use]] — 에이전트가 전화·결제 같은 현실 세계 도구를 쓰는 단계로 확장
- [[concepts/mcp]] — AP2 같은 에이전트 결제 프로토콜이 에이전트 인프라의 한 축으로 등장

## 참고 소스

- [에이전트 커머스, 주류로 — Gemini Tasks 무료화·전화·결제 + Klarna 어시스턴트 (Google, 11-17)](raw/articles/2026-11-18-agentic-commerce-gemini-tasks-klarna.md)
