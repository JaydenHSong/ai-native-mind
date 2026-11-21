---
title: "구글, Semantic 거버넌스 정책 프리뷰 — 에이전트 도구 호출마다 실행 전 검사 (11-20)"
source_url: "https://developers.googleblog.com/check-what-your-ai-agents-do-before-they-do-it-with-semantic-governance-policies/"
source_type: "news"
authors: ["Google Developers Blog"]
published: 2026-11-20
fetched: 2026-11-21
tags: [google, gemini, agents, governance, security, prompt-injection]
status: raw
---

# 구글, Semantic 거버넌스 정책 프리뷰 — 에이전트 도구 호출마다 실행 전 검사 (11-20)

> 구글이 11월 20일 Gemini 플랫폼에 Semantic 거버넌스 정책을 프리뷰로 공개했다. Agent Gateway를 통해 에이전트가 제안하는 모든 도구 호출을 LLM 판정자가 실행 전에 검사한다. 간접 프롬프트 인젝션과 소셜 엔지니어링으로 휘둘린 도구 호출을 실행 전에 막는 것이 목표다.

## 내용

- **방식**: Agent Gateway에서 LLM 판정자가 에이전트의 각 도구 호출을 실행 전에 평가한다. 판단 기준은 두 가지 — 법무·컴플라이언스 팀이 평문으로 쓴 정책과 사용자의 원래 의도.
- **실패 시**: 기준에 맞지 않는 호출은 설정 가능한 거부 메시지로 대체되고 절대 실행되지 않는다. 모든 판정과 근거는 Cloud Logging에 기록된다.
- **지원 모델**: Gemini뿐 아니라 Anthropic, OpenAI 호환 모델도 지원.
- **위치**: IAM, Model Armor, Agent Anomaly Detection과 함께 다층 방어(defence-in-depth)로 포지셔닝. 간접 프롬프트 인젝션·소셜 엔지니어링 대응이 명시적 목표.
- **동반 발표**: 같은 날 Agent Anomaly Detection(Private Preview)을 Google Cloud 밖 에이전트(AWS Lambda, Microsoft Foundry 등)까지 OpenTelemetry 트레이스·로그로 확장하는 글도 함께 공개됐다.

## 맥락

- 에이전트 시스템의 핵심 미해결 문제 — 프롬프트에 주입되거나 의도에서 벗어난 도구 호출을 실행 전에 막는 실전 패턴
- 위키의 에이전트 보안·프롬프트 인젝션 페이지와 직접 연결되는 최신 구현 사례
