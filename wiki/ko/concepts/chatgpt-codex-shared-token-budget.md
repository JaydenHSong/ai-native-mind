---
title: "ChatGPT·Codex 공유 토큰 사용량 — 12월부터 채팅과 코딩이 하나의 예산"
category: concepts
tags: [openai, chatgpt, codex, usage-limits, token-budget, work]
created: 2026-11-02
updated: 2026-11-02
sources:
  - "raw/articles/2026-11-02-chatgpt-codex-shared-token-budget.md"
related:
  - "[[concepts/anthropic-claude-cowork-enterprise-unified]]"
  - "[[concepts/accenture-ai-cost-cap]]"
  - "[[concepts/openai-gpt61-terra-half-price]]"
status: draft
confidence: high
---

# ChatGPT·Codex 공유 토큰 사용량 — 12월부터 채팅과 코딩이 하나의 예산

## 쉽게 읽기

**비유**: 지금까지는 채팅용 카드와 코딩용 카드가 따로 있었다. 12월부터는 하나의 지갑에서 두 곳 모두 결제된다. 오후에 코딩 에이전트를 오래 돌리면 저녁 채팅 예산이 줄어든다.

| 용어 | 풀이 |
|------|------|
| **토큰 사용량** | 모델이 읽고 쓰는 정보량의 단위로 측정한 소비량 |
| **Instant 채팅** | 공유 예산에서 빠지는 가벼운 채팅 모드 |
| **Work** | ChatGPT 안의 에이전트 작업 모드, Codex와 통합되는 방향 |

## 한줄 정의

2026-12월부터 — Plus·Pro·Business 플랜의 ChatGPT와 Codex 사용량이 토큰 기준으로 하나의 공유 예산이 되며, Work의 에이전트 기능이 메인 ChatGPT 경험으로 합쳐지는 OpenAI 정책 변경.

## 핵심 내용

- **공유 범위**: Plus·Pro·Business. 이전에는 채팅과 코딩이 사실상 별도 예산이었다. API 플랫폼 키 과금은 별개로 보도됐다.
- **측정**: 메시지 수가 아니라 토큰. 고성능 모델·복잡한 태스크일수록 빨리 소진된다. 플랜별 총량·추가 크레딧 가격은 미공개다.
- **예외와 확인**: Instant 채팅은 예산에서 빠진다. 남은 사용량·리셋 시각은 Settings → Usage에서 합산 표시된다.
- **한도 도달 시**: 리셋 대기, 플랜 업그레이드, 크레딧 구매 중 선택. OpenAI는 "대부분의 사용자는 지금보다 리셋을 더 자주 기다릴 필요가 없을 것"이라 전망했으나 보장하지 않았다.
- **배경**: Chat·Work 병합 예고의 연장선이며, 최근 상위 플랜 한도가 2배로 늘어난 뒤의 조치다. Anthropic도 Claude에서 채팅과 Cowork를 통합했다.

## 왜 중요한가 (1인 개발자 관점)

1. **예산 계획의 단위가 바뀐다**: 코딩 에이전트 사용량과 채팅 사용량을 따로 관리하던 습관은 12월부터 통하지 않는다. 무거운 에이전트 작업은 채팅 예산을 갉아먹는다.
2. **'무제한' 서사의 종료**: 정액제처럼 느껴지던 Plus 사용이 토큰 미터로 명시화된다. 대시보드(Settings → Usage)를 정기적으로 확인하는 루틴이 필요하다.
3. **Instant는 우회로가 아니라 경량 채널이다**: 가벼운 질의는 Instant로, 무거운 에이전트 작업은 예산을 의식해 배치하는 분업이 실용적이다. 다만 플랜별 총량이 공개되지 않아 12월 대시보드가 뜨기 전에는 정확한 계획이 불가능하다.

## 한계 (명시)

- OpenAI Help Center 문서를 2차 보도로 확인한 것이며, 정확한 시작일·플랜별 총량·크레딧 가격은 미공개다.
- "리셋을 더 자주 기다리지 않을 것"은 OpenAI의 전망이지 실측이 아니다.
- 일부 보도에서 12-31이 관련 한도 구조의 날짜로 언급됐으나, 공식 시작일은 '12월'로만 확인된다.

## 참고 소스

- [ChatGPT·Codex 공유 예산 원본](raw/articles/2026-11-02-chatgpt-codex-shared-token-budget.md)
