---
title: "Agentic Engineering"
category: concepts
tags: [agentic-engineering, vibe-coding, ai-development, karpathy]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/ai-native-programmer]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/agent-server-harness]]"
status: active
confidence: medium
---

# Agentic Engineering

## 쉽게 읽기

**Vibe coding**은 “느낌 가는 대로 AI 출력을 받아들이기”에 가깝다. **Agentic engineering**은 그 대신 **역할·검사·되돌리기**를 정해 두고 AI가 돌게 하는 쪽이다. 즉, **속도만**이 아니라 **통제 가능한 자동화**를 목표로 한다.

| 용어 | 풀이 |
|------|------|
| **Harness** | AI가 벗어나지 않게 하는 **안전 띠·난간** 묶음 |
| **감독** | 사람이 완전히 손에서 놓지 않고 **기준과 승인**을 쥠 |
| **프로덕션** | 실제 사용자에게 나가는 **진짜 서비스** 환경 |

## 한줄 정의

AI 에이전트가 계획·작성·테스트·반복하되, 구조화된 인간 감독 하에 작동하는 개발 방법론. Vibe Coding의 성숙한 진화.

## 핵심 내용

### Vibe Coding → Agentic Engineering

| | Vibe Coding (2025) | Agentic Engineering (2026) |
|--|-------------------|--------------------------|
| **명명자** | Andrej Karpathy (2025년 2월) | Karpathy (2026년 초) |
| **접근** | AI 출력을 diff도 안 읽고 수용 | AI가 자율적으로 작업하되 구조적 감독 |
| **적합** | 해커톤, 프로토타입 | 프로덕션, 대규모 리팩토링, CI/CD |
| **인간 역할** | "vibes에 몸을 맡기기" | 의도 정의 + 가드레일 설정 + 품질 판단 |
| **Harness** | 없거나 최소 | 필수 — Guide + Sensor + Orchestration |

### Vibe Coding이란?

> "vibes에 완전히 몸을 맡기고, 지수적 성장을 수용하고, 코드가 내 이해를 넘어 성장하는 것을 잊는다" — Karpathy

- AI가 생성한 코드를 diff도 안 읽고 수용
- 빠른 프로토타이핑에 효과적
- 프로덕션에서는 **cognitive debt**(인지 부채) 누적

### Cognitive Debt (인지 부채) — 2026년 새 용어

기술 부채(technical debt)의 AI 버전:
- AI 상호작용의 잘못된 관리가 누적
- 컨텍스트 손실, 신뢰할 수 없는 에이전트 행동
- Vibe Coding의 최대 위험

### 2026년 수치

- 미국 개발자 **92%**가 AI 코딩 도구 일상 사용
- 전체 코드의 **41%**가 AI 생성
- Vibe coding 사용자의 **63%**가 비개발자
- Gartner: 2026년 말 기업 앱 **40%**에 AI 에이전트 내장

## 왜 중요한가

Agentic Engineering은 "AI를 쓰는 것"과 "AI로 엔지니어링하는 것"의 경계선이다. [[concepts/ai-native-programmer|AI 네이티브 프로그래머]]는 Vibe Coding이 아니라 Agentic Engineering을 한다 — [[concepts/harness-engineering|Harness]]를 설계하고, 에이전트를 [[concepts/ai-orchestration|오케스트레이션]]하며, 판단력으로 방향을 잡는다.

## 관련 개념

- [[concepts/harness-engineering]] — Agentic Engineering의 인프라
- [[concepts/ai-orchestration]] — 에이전트 조율 패턴
- [[concepts/ai-native-programmer]] — 이 방법론을 실천하는 사람
- [[patterns/agent-planning-to-implementation]] — 기획·계획을 코드로 넘길 때의 감독 구조
- [[patterns/agent-server-harness]] — 서버에 올린 에이전트의 감독·경계

## 참고 소스

- [Engineering 패러다임 리서치](raw/notes/2026-04-09-engineering-paradigms-research.md)
- [From Vibes to Engineering (The New Stack)](https://thenewstack.io/vibe-coding-agentic-engineering/)
- [Agentic Engineering Complete Guide (NxCode)](https://www.nxcode.io/resources/news/agentic-engineering-complete-guide-vibe-coding-ai-agents-2026)
