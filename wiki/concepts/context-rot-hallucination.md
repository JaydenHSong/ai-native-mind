---
title: "AI 실패 패턴 (Context Rot & Hallucination)"
category: concepts
tags: [failure, hallucination, context-rot, error, reliability]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-llm-failure-modes.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/subagents-delegation]]"
status: active
confidence: high
---

# AI 실패 패턴 (Context Rot & Hallucination)

## 한줄 정의

AI 에이전트가 실패하는 주요 메커니즘들 — Hallucination, Context Rot, Error 누적, Tool Hallucination, Reasoning Trap.

## 핵심 실패 패턴

### 1. Hallucination (환각)

**정의**: 모델이 사실이 아닌 정보를 확신에 차서 생성.

**2026 관점**:
- Zero hallucination은 **불가능**하다고 인정
- "불확실성 관리"에 집중
- 시스템적 인센티브 문제 (모델이 "모른다"보다 "뭔가 말하기"로 훈련됨)
- 투명한 uncertainty가 신뢰의 핵심

### 2. Context Rot (컨텍스트 부패) ⭐ 가장 중요

**정의**: 입력 길이가 증가할수록 LLM 성능이 측정 가능하게 저하.

**Chroma 연구 (2026)**:
- 18개 frontier 모델 테스트 → **모두** 성능 저하
- **코딩 에이전트의 주요 실패 모드**

**U자 곡선 패턴**:
- 모델은 컨텍스트의 **시작과 끝**에 강한 주의
- **중간 부분은 무시**
- 20개 문서 QA에서 관련 문서가 위치 5-15에 있으면 정확도 **30% 하락**

### 3. Error 누적 (Error Cascading)

에이전트 특화 문제:
- 한 단계 오류 → 다음 단계 전파
- 멀티스텝에서 **기하급수적 악화**
- "한 번 틀리면 복구 어려움"

### 4. Tool Hallucination

**정의**: 존재하지 않는 도구를 호출하려 시도.

**충격적 발견 (2026)**:
> "추론 능력 강화가 도구 환각을 증폭시킨다"

"똑똑해질수록 거짓말도 정교해짐"

### 5. The Reasoning Trap

추론 체인이 길어질수록 오류 가능성 증가. Chain-of-thought의 어두운 면.

## 핵심 연결: Hallucination과 Context Rot

> **"환각은 종종 Context Rot의 하류 증상이다."**

- 컨텍스트가 저하 → 불확실성 증가
- 모델이 통계적으로 가능한 답으로 빈 곳 채움
- **원인은 모델이 아니라 컨텍스트 관리**

## AI Agent 특화 위험

- 모델이 파일 수정, 코드 실행, 데스크톱 조작 가능
- 환각이 "잘못된 텍스트"를 넘어 **구체적 실패**로
- 보안 위협 확장 (untrusted 컨텐츠 섭취)

## 완화 전략

### Context Rot 방지
- **긴 컨텍스트 사용 최소화**
- 관련 정보만 선택적 로드
- **[[patterns/subagents-delegation|Subagent]]로 컨텍스트 격리**
- Summarization으로 정보 압축

### Hallucination 방지
- [[concepts/rag|RAG]]로 grounded 답변 강제
- [[concepts/structured-output|Structured Output]]으로 제약
- [[concepts/llm-evaluation|LLM-as-Judge]]로 검증
- Uncertainty 표현 장려

### Error 누적 방지
- 매 단계 **검증 게이트**
- Early stopping 조건
- Rollback 메커니즘
- Human-in-the-loop 체크포인트

## Claude Code의 대응

소스코드 유출로 확인된 구조:
- **3계층 메모리 아키텍처**: Context entropy 방지가 명시적 목표
- 컨텍스트 자동 압축
- 토큰 버짓 관리
- 재시도 로직

## [[concepts/harness-engineering|Harness Engineering]]과의 관계

실패 패턴을 이해하면 **Harness의 Sensor(피드백)** 설계가 가능:
- Context 길이 모니터링
- Hallucination 감지
- Error 누적 체크
- Tool 호출 검증

## 참고 소스

- [AI 실패 패턴 리서치](raw/notes/2026-04-09-llm-failure-modes.md)
- [Context Rot (Morph)](https://www.morphllm.com/context-rot)
- [LLM Hallucinations (Lakera)](https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models)
- [Defeating Context Rot (Harness)](https://www.harness.io/blog/defeating-context-rot-mastering-the-flow-of-ai-sessions)
