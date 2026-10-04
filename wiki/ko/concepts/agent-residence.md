---
title: "에이전트의 상주 형태 — 로컬 모델 vs 클라우드 컴퓨터"
category: concepts
tags: [agent-residence, local-model, open-weights, privacy, cloud-agent, meta, xai, openai]
created: 2026-10-04
updated: 2026-10-04
sources:
  - "raw/articles/2026-10-04-agent-residence-local-vs-cloud.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/managed-vs-deep-agents]]"
status: draft
confidence: medium
---

# 에이전트의 상주 형태 — 로컬 모델 vs 클라우드 컴퓨터

## 한줄 정의

AI 에이전트가 '살 곳'은 채팅창이 아니라 두 군데로 갈라졌다 — 사용자의 하드웨어에 상주하는 로컬 모델 vs 클라우드에 자기 컴퓨터를 가진 클라우드 에이전트.

## 핵심 내용

2026년 8월 Meta가 30B 파라미터 open-weight 모델을 출하했다: 소비자급 GPU 1장으로 로컬 실행, 네트워크 없이도 에이전트 동작. 정반대 베팅은 xAI(8/11)와 OpenAI(9/29 DevDay Dots)의 클라우드 에이전트 — 노트북을 닫아도 클라우드 속 '자기 컴퓨터'에서 일을 계속한다.

| 축 | 로컬 상주 (Meta 30B) | 클라우드 상주 (xAI·OpenAI) |
|---|---|---|
| 데이터 | 기기 밖으로 안 나감 (프라이버시) | 클라우드로 이동 |
| 지속성 | 세션이 끊기면 멈춤 | always-on — 닫아도 계속 일함 |
| 가격 모델 | 무료 + 사용량 제한 (CNBC) | 유료 플랜 (Pro/Business 등) |
| 오프라인 | 가능 | 불가능 |

채팅 시대의 에이전트는 채팅창 뒤에 살았고 탭을 닫으면 끝났다. 이제 질문은 '얼마나 똑똑한가'에서 '어디에 상주하는가'로 이동했다.

## 왜 중요한가

AI 네이티브 프로그래머에게는 두 형태가 다른 도구다: 로컬 에이전트는 개인 개발 환경의 비서(민감한 코드·로컬 파일), 클라우드 에이전트는 밤새 도는 백그라운드 워커(장시간 빌드·리서치). 무엇을 어디에 맡길지의 아키텍처 분리가 필요하다 — "상주 위치"가 곧 권한·비용·신뢰의 경계가 되기 때문.

## 관련 개념

- [[concepts/persistent-agent]] — 상주 에이전트 개념의 원형 (OpenAI "O" 리크, 2026-09-27)
- [[patterns/agentic-finance]] — 클라우드 상주 에이전트가 돈을 쓰기 시작하면 (Robinhood Agents)
- [[comparisons/managed-vs-deep-agents]] — 호스팅 형태 선택의 lock-in vs 자유도

## 참고 소스

- [The Agent Just Stopped Living in the Chat Window](raw/articles/2026-10-04-agent-residence-local-vs-cloud.md)