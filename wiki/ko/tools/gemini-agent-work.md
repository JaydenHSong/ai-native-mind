---
title: "Gemini Agent for Work — Google Cloud의 기업용 범용 에이전트"
category: tools
tags: [google-cloud, gemini, ai-agents, enterprise, thomas-kurian, mcp, smart-routing, sub-agents]
created: 2026-10-09
updated: 2026-10-09
sources:
  - "raw/articles/2026-10-09-google-cloud-gemini-agent-work.md"
related:
  - "[[tools/claude-google-workspace]]"
  - "[[patterns/agent-authority-model]]"
  - "[[patterns/ai-cost-management]]"
status: draft
confidence: medium
---

# Gemini Agent for Work — Google Cloud의 기업용 범용 에이전트

## 쉽게 읽기

**비유**: 지금까지 AI 비서는 "채팅창 안에" 있었다. 이건 회사 시스템(Gmail·Drive·Salesforce·Slack) 곳곳에 손을 뻗어 일을 대신 처리하는 "디지털 직원"이다. 게다가 일마다 가장 잘하는 모델을 골라 쓰고(Gemini든 Claude든), 돈이 얼마나 드는지 실시간으로 보여준다.

## 한줄 설명

Google Cloud의 기업용 범용 AI 에이전트 (2026-10-08 'Gemini at Work 2026' 발표) — 단일 프롬프트창에서 지식 업무·문답·미디어 생성·코드 작성/실행을 처리하고, 작업마다 최적 모델을 자동 선택하는 멀티모델 라우팅 에이전트.

## 핵심 내용

- 발표: 2026-10-08, 'Gemini at Work 2026' 행사 (Thomas Kurian CEO 키노트 + 블로그 포스트).
- 기능: 단일 프롬프트창에서 지식 업무·문답·이미지/미디어 생성·코드 작성과 실행. Gmail·Drive·Docs·Sheets·Chat·Calendar·Slack·Microsoft 365·CLI에서 동작. MCP 서버·Salesforce·ServiceNow·Snowflake 등 기업 시스템 연결.
- 멀티모델 라우팅: 작업마다 최적 모델 자동 선택 — Gemini 계열뿐 아니라 **Anthropic Claude도 사용** (향후 다른 모델 추가 예정). 모델 중립적 오케스트레이션 선언.
- 비용 통제: Smart Routing·실시간 지출 상한(spend caps) 내장 — 에이전트 비용의 기업 통제 요구에 대한 직접 대응.
- 장기 작업: sub-agent로 수시간~수일에 걸친 작업 지원.
- 업종 특화: 금융·법률 전용 에이전트는 프리뷰 중, 정부·헬스케어·리테일용은 출시 예정.
- 채택 주장: Fortune 100의 90%가 Gemini Enterprise 사용 중 (Google 주장).

## 왜 중요한가

- Claude for Google Workspace 공개 베타(10/6, [[tools/claude-google-workspace]]) 이틀 만의 맞불 — Anthropic이 Workspace 홈그라운드에 들어오자 Google이 기업 에이전트로 반격. 엔터프라이즈 에이전트 전선이 "앱 내장" 대 "플랫폼 오케스트레이션"의 구도로.
- 모델 중립 라우팅의 선언: Google이 자사 모델이 아닌 Claude를 에이전트에 태운 것은 "최고 모델 독점"에서 "최적 모델 조합"으로의 전략 전환 신호 — [[patterns/ai-cost-management]]의 라우팅이 제품 기능으로 내장되는 흐름.
- [[patterns/agent-authority-model]]의 권한 5단계가 지출 상한·승인 모드 같은 기업 통제로 구현되는 사례.

## 관련 도구

- [[tools/claude-google-workspace]] — 이틀 먼저 나온 Anthropic의 Workspace 공세, 앱 내장형 vs 플랫폼형 대결 구도
- [[patterns/agent-authority-model]] — 지출 상한·승인 모드가 권한 프레임워크의 구현체
- [[patterns/ai-cost-management]] — Smart Routing·spend caps가 라우팅·비용 전략의 제품화

## 참고 소스

- [Google Cloud, 기업용 범용 AI 에이전트 'Gemini agent' 공개 (9to5google/PYMNTS, 10/8)](raw/articles/2026-10-09-google-cloud-gemini-agent-work.md)