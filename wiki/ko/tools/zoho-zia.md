---
title: "Zia LLM — Zoho의 자체 LLM + 에이전트 스택 (인도산 right-sized 모델)"
category: tools
tags: [zoho, zia-llm, llm, agents, mcp, india, nvidia, right-sized-models, privacy]
created: 2026-10-05
updated: 2026-10-05
sources:
  - "raw/articles/2026-10-05-zoho-zia-llm-agents.md"
related:
  - "[[concepts/mcp]]"
  - "[[tools/alibaba-agentcore]]"
status: draft
confidence: low
---

# Zia LLM — Zoho의 자체 LLM + 에이전트 스택

## 한줄 정의

Zoho가 인도에서 Nvidia 플랫폼으로 직접 훈련한 자체 파운데이션 모델(1.3B/2.6B/7B) + 40개 프리빌트 에이전트 + 노코드 빌더 + MCP 서버 — "right-sized 모델을 싸게"라는 수직통합형 에이전틱 AI 전략.

## 핵심 내용

- Zia LLM: 파라미터 1.3B / 2.6B / 7B 세 종의 파운데이션 모델. 전부 인도에서 Nvidia 플랫폼으로 훈련, Zoho 제품 유스케이스(구조화 데이터 추출·요약·RAG·코드 생성)에 최적화. 오픈소스 동급 모델과 경쟁 성능.
- 함께 출시: 40개 프리빌트 Zia Agents, 노코드 에이전트 빌더 Zia Agent Studio, 서드파티 에이전트 연결용 MCP 서버.
- 음성: 영어·힌디어 저컴퓨트 최적화 ASR 모델 2종 — 향후 더 많은 언어 지원.
- 전략: 프라이버시와 가치. Zoho 플랫폼의 제너릭 AI 모델은 소비자 데이터로 훈련하지 않고 고객 정보를 보관하지 않음. CEO Sridhar Vembu(현 Chief Scientist): 내부 파운데이션 AI로 "세계 고객에게 첨단 도구를 더 낮은 비용으로".

## 왜 중요한가

"모델을 빌려 쓰는" SaaS와 "모델을 키우는" SaaS의 분기점이다. Zoho의 선택은 right-sized(작고 용도에 맞는) 모델을 직접 훈련해 비용을 구조적으로 낮추는 것 — 프론티어 랩의 거대 모델 경쟁과 다른 축이다. 1인 개발자 관점의 교훈: 모든 AI 기능에 최대 모델을 쓸 필요가 없다는 것을 제품 전략으로 만든 사례. MCP 서버를 기본 탑재한 점도 주목 — 자사 에이전트 생태계를 외부 에이전트와 연결하는 표준을 처음부터 내장했다.

## 관련 개념

- [[concepts/mcp]] — Zia의 MCP 서버가 채택한 에이전트 연결 표준
- [[tools/alibaba-agentcore]] — 알리바바의 'agentic cloud' 플랫폼 전략과 대비되는 Zoho의 수직통합 전략

## 참고 소스

- [Zoho makes big AI move with launch of Zia LLM, pack of AI agents (Constellation Research)](raw/articles/2026-10-05-zoho-zia-llm-agents.md)
