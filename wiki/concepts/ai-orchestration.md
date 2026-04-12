---
title: "AI 오케스트레이션"
category: concepts
tags: [ai-orchestration, multi-agent, patterns, anthropic]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
related:
  - "[[concepts/ai-native-programmer]]"
  - "[[concepts/context-engineering]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[tools/claude-code]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/agent-server-harness]]"
status: active
confidence: medium
---

# AI 오케스트레이션

## 쉽게 읽기

**비유**: 학교 축제에서 **진행 요원·부스 담당·방송**을 나누고, 순서를 맞추는 것이 오케스트레이션이다. AI도 여러 단계·여러 “역할”을 **순서와 조건**에 맞게 이어 준다.

| 용어 | 풀이 |
|------|------|
| **에이전트** | 목표를 위해 스스로 단계를 밟는 AI 실행 단위 |
| **멀티 에이전트** | 역할 다른 AI들을 **나눠 쓰기** |
| **패턴 이름**(Chaining 등) | 자주 쓰는 **진행 순서 템플릿**에 붙은 별명 |

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

### 런타임·구현에서 자주 빠지는 조각

패턴 이름만 알고 있으면, **서버나 CI에 올렸을 때** 바로 막히는 부분이 생긴다. 아래는 오케스트레이션을 “코드·인프라”로 내릴 때 같이 설계할 항목이다.

| 조각 | 질문 | 비고 |
|------|------|------|
| **상태** | 단계 간에 무엇을 저장하는가? (요약, JSON, DB 행) | 재시작·재시도 시 복구에 필요 |
| **멱등성** | 같은 요청이 두 번 오면? | 웹훅·큐 재전달 시 필수 |
| **HITL** | 어디서 사람이 승인/거절하는가? | 비용·위험 큰 단계에 게이트 |
| **타임아웃·취소** | LLM·도구 호출 상한은? | 무한 대기 방지, UX(취소 버튼) |
| **부분 실패** | 한 워커만 실패하면 롤백인가, 재시도인가, 스킵인가? | Orchestrator-Workers와 짝 |
| **관측** | `run_id`, 단계별 로그, 토큰·비용 메트릭 | 디버깅과 비용 통제 |

**프레임워크 vs 직접 구현**: LangGraph 등은 그래프·상태·체크포인트를 표준화해 준다. 반대로 요청-응답 한 번짜리 라우팅은 **라우팅 패턴 + 얇은 오케스트레이터 함수**로 충분한 경우가 많다. “멀티에이전트”가 목표가 아니라 **신뢰 가능한 상태 기계**가 목표인지 먼저 판단하는 편이 낫다.

프로덕션에서 에이전트가 **HTTP 뒤**에 있을 때의 배치·한계는 [[patterns/agent-server-harness|에이전트 서버 하네스]]에서 정리한다.

## 왜 중요한가

AI 네이티브 프로그래머의 **핵심 역량**이다. 혼자서 팀 규모의 결과를 내려면, 여러 AI를 잘 조율하는 능력이 필수. 하지만 Anthropic의 조언대로, **복잡하게 시작하지 말고 단순한 패턴부터** 마스터하는 게 중요하다.

## 관련 개념

- [[concepts/ai-native-programmer]] — 오케스트레이션은 핵심 역량 중 하나
- [[concepts/context-engineering]] — 오케스트레이션의 기반 스킬
- [[tools/claude-code]] — 오케스트레이터-워커 패턴의 실제 구현체
- [[patterns/agent-server-harness]] — HTTP·큐·스트림 위 오케스트레이션
- [[patterns/agent-planning-to-implementation]] — 문서 단계의 체이닝·HITL

## Chapter Clear 가이드

- **소속 챕터**: Chapter 3 (파티 운영)
- **퀘스트**: 현재 진행 중인 작업 하나를 6대 오케스트레이션 패턴 중 하나로 분류한다.
- **클리어 조건**: 왜 해당 패턴이 맞는지 비용/속도/신뢰성 관점에서 설명할 수 있다.
- **보상(산출물)**: 내 작업용 오케스트레이션 선택표 1개
- **다음 퀘스트**: [[patterns/orchestration-patterns-practice]] -> [[patterns/agent-planning-to-implementation]]

## 참고 소스

- [AI Orchestration 리서치](raw/notes/2026-04-09-ai-orchestration-research.md)
- [Building Effective Agents (Anthropic)](https://www.anthropic.com/research/building-effective-agents)
- [Context Engineering (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
