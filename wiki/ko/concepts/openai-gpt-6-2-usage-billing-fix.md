---
title: "OpenAI, GPT-6.2 사용량 과소 집계 시인 — Astra 한도 40%·Sol 25% 빨리 소진, 12월부터 ChatGPT·Codex 한도 통합"
category: concepts
tags: [openai, gpt-6-2, chatgpt, codex, pricing, usage-limits]
created: 2026-11-26
updated: 2026-11-26
sources:
  - "raw/articles/2026-11-26-openai-gpt-6-2-usage-billing-fix.md"
related:
  - "[[concepts/openai-gpt-6-2-astra-sol]]"
  - "[[concepts/chatgpt-codex-shared-token-budget]]"
status: draft
confidence: medium
---

# OpenAI, GPT-6.2 사용량 과소 집계 시인 — Astra 한도 40%·Sol 25% 빨리 소진, 12월부터 ChatGPT·Codex 한도 통합

## 쉽게 읽기

**비유**: GPT-6.2가 나왔을 때 OpenAI가 사용량을 잘못 쟀다. 같은 일을 해도 실제보다 적게 쓴 걸로 쳐 준 것이다. 오류를 고치자, 이제 같은 작업을 하면 한도가 Astra는 40%, Sol은 25% 더 빨리 닳는다. "더 적은 토큰으로 같은 일"이라는 출시 메시지와 달리, 체감 한도는 오히려 줄어든 셈이다. 보상으로 한도를 한 번 새로고침할 수 있는 쿠폰(banked reset)을 1회씩 줬고, 12월부터는 ChatGPT와 Codex의 한도가 하나로 합쳐진다.

| 용어 | 풀이 |
|------|------|
| **사용량 한도** | 요금제마다 정해진 AI 사용량 상한. 넘으면 그 주·그 달은 못 쓴다 |
| **banked reset** | 한 번만 쓸 수 있는 한도 새로고침. 계정에 저장해뒀다가 원하는 때 사용 |
| **소급 청구** | 이미 쓴 과거 사용량에 대해 나중에 추가로 돈을 청구하는 것. 이번엔 하지 않음 |
| **토큰 단위 한도** | 사용량을 메시지 개수가 아니라 토큰 수로 재는 방식 |

## 한줄 정의

OpenAI가 2026-11-26 GPT-6.2 출시 때 사용량을 잘못 할인해 집계한 청구 오류를 인정하고 수정했다. 같은 작업을 해도 Astra는 지난주보다 한도에 40%, Sol은 25% 더 빨리 도달한다. 보상으로 Go·Plus·Pro·Business 계정에 'banked reset' 1회를 지급한다.

## 핵심 내용

- **발표**: Thibault Sottiaux(OpenAI 제품·플랫폼 책임자, ChatGPT·Codex·API 총괄)가 11월 26일 X에 게시. "GPT-6.2 출시 때 청구 실수로 대부분 사용자의 GPT-6.2 Astra·Sol 사용량이 잘못 할인됐다. 수정했으니 같은 작업이 요금제 한도를 더 많이 쓴다. 지난주와 비교하면 한도에 Astra 40%, Sol 25% 더 빨리 도달한다."
- **영향 범위**: GPT-6.2 Astra·Sol만 해당, 다른 모델은 영향 없음. 과거 사용량 차액은 소급 청구하지 않음. 두 모델은 11월 17일부터 ChatGPT Work·Codex·API에서 제공됐고, 11월 23일 일반 채팅 탭에도 확대됨.
- **보상**: Go·Plus·Pro·Business 전 계정에 banked reset 1회 추가. 한 번만 쓸 수 있는 한도 새로고침으로, 계정에 저장해뒀다가 원하는 때 사용. 한도 중 하나라도 80% 미만으로 떨어져야 사용 가능. 웹 Usage 설정 또는 데스크톱 앱 Settings → Usage & billing에서 사용.
- **12월 변경 예고**: 12월부터 Plus·Pro·Business는 ChatGPT와 Codex가 토큰 단위로 측정한 하나의 한도를 공유한다(Chat과 Work 통합). 인스턴트 채팅은 한도에서 제외. 합산 잔량과 초기화 시간은 Settings → Usage에서 확인 가능.

## 왜 중요한가 (1인 개발자 관점)

1. **'더 싸다'와 '한도가 빨리 닳는다'는 동시에 일어날 수 있다**: 토큰 단가는 내렸는데 사용량 집계가 바로잡히면 체감 한도는 줄어든다. 내 실제 사용량으로 직접 재는 게 가격표보다 정확하다.
2. **12월 한도 통합이 실무에 미치는 영향**: ChatGPT와 Codex가 하나의 한도를 쓰면, 코딩에 Codex를 많이 쓰는 주는 Chat 쪽 여유가 같이 줄어든다. 12월 전에 사용 패턴을 나눠 보는 게 안전하다.
3. **banked reset은 아껴 쓸 것**: 1회뿐이고 한도가 80% 미만일 때만 쓸 수 있다. 급한 마감 주에 남겨 두는 게 낫다.

## 한계 (명시)

- OpenAI 제품 책임자의 X 게시 기준이며, 과소 집계의 기술적 원인은 공개되지 않았다.
- 40%·25%는 "지난주와 비교한 한도 도달 속도"로, 개인 사용 패턴에 따라 체감이 다르다.
- 12월 한도 통합의 세부 조건(초기화 주기 등)은 Settings 화면에서 확인해야 한다.
- confidence는 medium — OpenAI 공식 인정과 Neowin 보도 교차이나, 기술적 원인·정확한 집계 방식은 미공개다.

## 관련 개념

- [[concepts/openai-gpt-6-2-astra-sol]] — GPT-6.2 Astra·Sol 출시 본편. 출시 일주일 만의 정정 (2026-11-26)
- [[concepts/chatgpt-codex-shared-token-budget]] — 11월 2일 예고된 ChatGPT·Codex 공유 토큰 예산. 12월 통합의 예고편 (2026-11-26)

## 참고 소스

- [OpenAI, GPT-6.2 사용량 과소 집계 시인 — Astra 한도 40%·Sol 25% 빨리 소진, 12월부터 ChatGPT·Codex 한도 통합 (Neowin, 11-26)](raw/articles/2026-11-26-openai-gpt-6-2-usage-billing-fix.md)
