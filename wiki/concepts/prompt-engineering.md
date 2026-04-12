---
title: "Prompt Engineering"
category: concepts
tags: [prompt-engineering, llm, basics]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# Prompt Engineering

## 쉽게 읽기

**한 번의 질문**을 어떻게 쓰면 답이 좋아지는지 다룬다. 역할을 주기, 예시를 넣기, 출력 형식을 정하기 같은 **말솜씨 기술**이다. [[concepts/context-engineering|Context Engineering]]은 이걸 넘어 **도구·메모리·규칙 전체**까지 설계한다.

| 용어 | 풀이 |
|------|------|
| **프롬프트** | 모델에게 보내는 **입력 텍스트** |
| **Few-shot** | 예시 몇 개를 **붙여서** 패턴을 가르치기 |
| **System vs User** | 전역 규칙 vs 이번 질문 **본문** |

## 한줄 정의

LLM에게 효과적으로 지시하여 원하는 출력을 얻는 기술. AI Engineering의 **1세대** (2022-2024).

## 핵심 내용

### "무엇을 질문하는가" (What to Ask)

한 번의 입력을 최적화하여 한 번의 좋은 출력을 얻는 것.

### 주요 기법

| 기법 | 설명 |
|------|------|
| **Zero-shot** | 예시 없이 바로 지시 |
| **Few-shot** | 몇 개의 예시를 함께 제공 |
| **Chain-of-Thought** | "단계별로 생각해봐"로 추론 유도 |
| **Role-playing** | "너는 시니어 개발자야"로 역할 부여 |
| **System Prompt** | 전체 대화에 적용되는 기본 지시 |

### 한계

- 단일 대화 턴에 한정 — 복잡한 멀티스텝 작업에 부족
- 맥락 관리 없음 — 세션이 바뀌면 처음부터
- 도구 사용 없음 — 텍스트 생성만 가능
- 이 한계를 극복하기 위해 [[concepts/context-engineering|Context Engineering]]이 등장

## 3세대 진화에서의 위치

```
Prompt Engineering  ← 이 단계
  → Context Engineering
    → Harness Engineering
```

Prompt Engineering은 사라지지 않았다. [[concepts/harness-engineering|Harness Engineering]] 안에 **내포**되어 있다. 좋은 프롬프트는 여전히 좋은 Harness의 기초.

## 관련 개념

- [[concepts/context-engineering]] — 2세대 진화
- [[concepts/harness-engineering]] — 3세대 진화

## Chapter Clear 가이드

- **소속 챕터**: Chapter 2 (기본 전투)
- **퀘스트**: 최근 AI 요청 1개를 골라 prompt 요소(역할/지시/출력형식)를 분해해 본다.
- **클리어 조건**: prompt 최적화만으로 해결 안 되는 한계를 2개 이상 설명할 수 있다.
- **보상(산출물)**: "좋은 프롬프트 체크리스트" 초안 1개
- **다음 퀘스트**: [[concepts/context-engineering]] -> [[concepts/context-vs-prompt-practice]]

## 참고 소스

- [Engineering 패러다임 리서치](raw/notes/2026-04-09-engineering-paradigms-research.md)
