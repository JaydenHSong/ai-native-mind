---
title: "AI 실패 패턴 (Context Rot & Hallucination)"
category: concepts
tags: [failure, hallucination, context-rot, error, reliability, grounding]
created: 2026-04-09
updated: 2026-05-13
sources:
  - "raw/notes/2026-04-09-llm-failure-modes.md"
  - "raw/articles/2026-05-13-gsar-typed-grounding-multiagent.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/subagents-delegation]]"
status: active
confidence: high
---

# AI 실패 패턴 (Context Rot & Hallucination)

## 쉽게 읽기

**환각(Hallucination)** 은 “없는 사실을 아주 그럴듯하게 말함”이다. **Context rot**는 메모장이 너무 길어져 **앞 내용을 흐리게 기억**하거나 엉뚽하게 이어 붙이는 현상에 가깝다. 둘 다 “AI가 틀렸다”가 아니라 **설계·맥락·검증** 문제로 다루는 편이 낫다.

| 용어 | 풀이 |
|------|------|
| **Hallucination** | 근거 없는 주장을 **확신 톤**으로 생성 |
| **Context rot** | 긴 대화·긴 문서 속에서 **집중이 흐트러짐** |
| **Tool hallucination** | 실제로는 없는 도구 호출·파일을 **있다고 말함** |

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

## 2026-05-13 보강 — Typed Grounding (GSAR)

[GSAR (arXiv 2604.23366)](https://arxiv.org/abs/2604.23366), Kamelhar/Oracle, 2026-04-25. Multi-agent operational-incident 보고서의 hallucination을 **binary가 아닌 4-way claim typology**로 분류해 게이트로 만든다.

| Claim 타입 | 의미 | 점수 기여 |
|---|---|---|
| **Grounded** | Evidence가 claim을 직접 support | + (정상) |
| **Ungrounded** | Evidence 없음/무관 | 0 |
| **Contradicted** | Evidence와 정면 충돌 | **−(비대칭 큰 페널티)** |
| **Complementary** | Evidence가 일부만 보조 | 부분 + |

게이트 액션은 단일 점수가 아니라 **3-tier decision**: `proceed | regenerate | replan`. Bounded outer loop + 명시적 compute budget.

**FEVER + gold Wikipedia evidence, 4 judge(gpt-5.4 / sonnet-4-6 / opus-4-7 / gemini-2.5-pro) 결과**:

- GSAR default 100 proceed vs binary baseline 35 → **+185%** grounded-output rate
- Weighted approach: proceed rate 16/50 → 18/50 (+4pp)
- **Ablation**: contradiction penalty 제거 시 contradicted claim 포함 보고서가 advance — asymmetric penalty의 존재 이유 입증

위키 위치 함의: 본 페이지의 1번 Hallucination 섹션은 "Zero hallucination은 불가능 / 불확실성 관리에 집중"이라는 입장이었다. GSAR는 **그 불확실성을 typed gate로 측정하고 출력 직전에 막는** 구체 메커니즘이다. 어제 [[journal/2026-05-12|JRH]]가 "judge가 universally reliable하지 않다"였다면, GSAR는 "그 unreliable한 judge들을 4-way typology + 4-judge 합의로 어떻게 묶어 게이트로 만드나"의 짝. 같은 날 [[concepts/harness-engineering#2026-05-13 보강 — Verification-Gated Harness, 3-도메인 매핑|Verification-Gated Harness 3-도메인]] 보강의 *text* 칸을 채운다.

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
