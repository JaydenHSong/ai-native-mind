---
title: "AI 오케스트레이션"
category: concepts
tags: [ai-orchestration, multi-agent, patterns, anthropic]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
related:
  - "[[concepts/ai-native-programmer]]"
  - "[[concepts/context-engineering]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[tools/claude-code]]"
status: active
confidence: medium
---

# AI 오케스트레이션

## 한줄 정의

여러 AI 에이전트를 역할별로 배치하고 조율하여 복잡한 작업을 수행하는 기술.

## 핵심 내용

### Anthropic의 핵심 원칙

Anthropic이 수십 개 팀과 협업하며 발견한 것: 가장 성공적인 구현은 **복잡한 프레임워크가 아니라 단순하고 조합 가능한 패턴**을 사용한다.

> "간단한 프롬프트로 시작 → 평가로 최적화 → 간단한 솔루션이 안될 때만 멀티에이전트"

### 6대 오케스트레이션 패턴

#### 1. Prompt Chaining (순차 체이닝)
작업을 고정된 단계로 분해하여 순서대로 실행.
- A의 출력 → B의 입력 → C의 입력
- 중간에 검증 게이트 추가 가능
- **적합**: 명확한 단계가 있는 작업 (번역 → 검증 → 포맷팅)

#### 2. Routing (라우팅)
입력을 분류하여 전문화된 에이전트로 전달.
- 고객 문의 유형별 다른 에이전트 배정
- 각 에이전트가 도메인 특화 프롬프트 보유
- **적합**: 입력 카테고리가 명확히 구분되는 작업

#### 3. Parallelization (병렬화)
독립적인 하위 작업을 동시 실행.
- **Sectioning**: 작업을 나눠서 각 에이전트에 배분
- **Voting**: 같은 작업을 여러 에이전트가 수행, 결과 종합
- **적합**: 속도가 중요하거나 신뢰성 향상이 필요한 작업

#### 4. Orchestrator-Workers (오케스트레이터-워커)
중앙 오케스트레이터가 작업을 **동적으로** 분해하고 위임.
- 복잡도가 예측 불가능한 작업에 적합
- Anthropic의 코딩 에이전트가 이 패턴 사용
- **적합**: GitHub 이슈 처리, 코드 리팩토링

#### 5. Evaluator-Optimizer (평가자-최적화자)
하나의 에이전트가 생성, 다른 에이전트가 평가. 반복적 품질 개선.
- **우리가 쓰는 예**: PDCA의 Gap Analysis → Iterate
- **적합**: 문학 번역, 코드 리뷰, 콘텐츠 품질 관리

#### 6. Autonomous Agent (자율 에이전트)
에이전트가 스스로 도구 사용과 의사결정.
- 환경에서 피드백을 받아 다음 행동 결정
- 가장 강력하지만 비용과 에러 누적 위험
- **적합**: 복잡한 open-ended 문제

### 실무 고려사항

| 고려사항 | 내용 |
|----------|------|
| **토큰 비용** | 멀티에이전트는 싱글 대비 10-15x 토큰 사용 |
| **시작점** | 대부분 단일 에이전트 + 좋은 프롬프트가 더 효율적 |
| **프레임워크** | LangGraph(안정적), CrewAI(빠른 프로토타입), OpenAI Agents SDK |
| **시장** | Gartner: 멀티에이전트 문의 1,445% 증가 (2024→2025) |

## 왜 중요한가

AI 네이티브 프로그래머의 **핵심 역량**이다. 혼자서 팀 규모의 결과를 내려면, 여러 AI를 잘 조율하는 능력이 필수. 하지만 Anthropic의 조언대로, **복잡하게 시작하지 말고 단순한 패턴부터** 마스터하는 게 중요하다.

## 관련 개념

- [[concepts/ai-native-programmer]] — 오케스트레이션은 핵심 역량 중 하나
- [[concepts/context-engineering]] — 오케스트레이션의 기반 스킬
- [[tools/claude-code]] — 오케스트레이터-워커 패턴의 실제 구현체

## 참고 소스

- [AI Orchestration 리서치](raw/notes/2026-04-09-ai-orchestration-research.md)
- [Building Effective Agents (Anthropic)](https://www.anthropic.com/research/building-effective-agents)
- [Context Engineering (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
