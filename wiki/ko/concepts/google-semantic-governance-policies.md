---
title: "구글 Semantic 거버넌스 정책 — 에이전트 도구 호출마다 실행 전 검사 (11-20)"
category: concepts
tags: [google, gemini, agents, governance, security, prompt-injection]
created: 2026-11-21
updated: 2026-11-21
sources:
  - "raw/articles/2026-11-21-google-semantic-governance-policies.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/plan-then-verify-agent-planning]]"
  - "[[concepts/websites-block-ai-agents]]"
status: draft
confidence: low
---

# 구글 Semantic 거버넌스 정책 — 에이전트 도구 호출마다 실행 전 검사 (11-20)

## 쉽게 읽기

**비유**: AI 비서에게 "이메일 보내줘"라고 시켰는데, 비서가 이상한 지시를 받고 엉뚱한 돈을 보내려 한다면? 구글의 새 기능은 비서가 행동하기 직전에 "이 행동이 규칙에 맞나, 원래 시킨 일과 맞나"를 따로 검사하는 검문소를 둔다. 검문소를 못 통과한 행동은 아예 실행되지 않고, "안 된다"는 답만 돌아간다.

| 용어 | 풀이 |
|------|------|
| **도구 호출** | 에이전트가 이메일 보내기·파일 삭제 같은 외부 행동을 실행하는 것 |
| **LLM 판정자** | 규칙에 맞는지 판단하는 또 하나의 AI — 심판 역할 |
| **간접 프롬프트 인젝션** | 에이전트가 읽은 문서·웹페이지 안에 숨겨진 악성 지시가 에이전트를 조종하는 공격 |
| **Agent Gateway** | 에이전트의 도구 호출이 지나가는 구글의 관문 |
| **방어의 깊이(defence-in-depth)** | 한 겹이 뚫려도 다음 겹이 막도록 여러 겹으로 쌓는 보안 방식 |

## 한줄 정의

구글이 2026년 11월 20일 Gemini 플랫폼에 Semantic 거버넌스 정책을 프리뷰로 공개했다. Agent Gateway를 통해 에이전트가 제안하는 모든 도구 호출을 LLM 판정자가 실행 전에 검사한다. 간접 프롬프트 인젝션과 소셜 엔지니어링으로 휘둘린 도구 호출을 실행 전에 막는 것이 목표다.

## 핵심 내용

- **방식**: Agent Gateway에서 LLM 판정자가 에이전트의 각 도구 호출을 실행 전에 평가한다. 판단 기준은 두 가지 — 법무·컴플라이언스 팀이 평문으로 쓴 정책과 사용자의 원래 의도.
- **실패 시**: 기준에 맞지 않는 호출은 설정 가능한 거부 메시지로 대체되고 절대 실행되지 않는다. 모든 판정과 근거는 Cloud Logging에 기록된다.
- **지원 모델**: Gemini뿐 아니라 Anthropic, OpenAI 호환 모델도 지원.
- **위치**: IAM, Model Armor, Agent Anomaly Detection과 함께 다층 방어(defence-in-depth)로 포지셔닝. 간접 프롬프트 인젝션·소셜 엔지니어링 대응이 명시적 목표.
- **동반 발표**: 같은 날 Agent Anomaly Detection(Private Preview)을 Google Cloud 밖 에이전트(AWS Lambda, Microsoft Foundry 등)까지 OpenTelemetry 트레이스·로그로 확장하는 글도 함께 공개됐다.

## 왜 중요한가 (1인 개발자 관점)

1. **"실행 전 검사"가 실전 패턴이 되고 있다**: [[concepts/plan-then-verify-agent-planning]]의 "실행 전 결정적 검증" 아이디어와 같은 방향이지만, 이번에는 검증 주체가 규칙 기반이 아니라 LLM 판정자다. 에이전트 보안의 핵심 미해결 문제 — 주입되거나 의도에서 벗어난 도구 호출 — 를 실행 전에 막는 구현 사례다.
2. **정책을 평문으로 쓴다는 게 포인트다**: 법무·컴플라이언스 팀이 코드가 아니라 일상어로 정책을 쓰면, 그 정책이 곧바로 검문소 규칙이 된다. 정책 작성자와 실행 시스템 사이의 간격이 줄어든다.
3. **판정자도 LLM이라는 아이러니**: 검사하는 쪽도 LLM이라, 판정자 자체가 속임수에 넘어갈 수 있다는 질문이 남는다. "누가 감시자를 감시하나"는 후속 검증 과제다 — 프리뷰 단계라 실전 효과는 아직 입증되지 않았다.

## 한계 (명시)

- Google Developers Blog 단일 출처이며 프리뷰 단계다. 실전 차단 효과·오탐율·지연에 대한 독립 측정은 아직 없다.
- LLM 판정자 자체의 강건성(판정자가 주입에 넘어가는지)은 이 발표에서 다루지 않았다.
- confidence는 low — 단일 출처의 벤더 발표이며 프리뷰 단계.

## 관련 개념

- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델, 실행 전 검사의 상위 개념 (2026-09-25)
- [[concepts/plan-then-verify-agent-planning]] — 실행 전 결정적 검증·1회 수리·안전 기권 패턴, 같은 문제의 규칙 기반 접근 (2026-11-01)
- [[concepts/websites-block-ai-agents]] — 플랫폼의 에이전트 차단 흐름, 접근 통제의 또 다른 축 (2026-10-18)

## 참고 소스

- [구글, Semantic 거버넌스 정책 프리뷰 — 에이전트 도구 호출마다 실행 전 검사 (Google Developers Blog, 11-20)](raw/articles/2026-11-21-google-semantic-governance-policies.md)
