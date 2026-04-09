---
title: "Context Engineering"
category: concepts
tags: [context-engineering, prompt-engineering, ai-orchestration]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
  - "raw/notes/2026-04-09-solo-dev-ai-research.md"
related:
  - "[[concepts/prompt-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/ai-native-programmer]]"
  - "[[concepts/ai-native-architecture]]"
  - "[[concepts/rag]]"
status: active
confidence: medium
---

# Context Engineering

## 한줄 정의

AI가 작동하는 전체 정보 환경을 설계하는 학문 — Prompt Engineering의 진화형.

## 핵심 내용

### Prompt Engineering → Context Engineering

| | Prompt Engineering | Context Engineering |
|--|-------------------|-------------------|
| **범위** | 한 번의 질문을 잘하기 | 전체 정보 환경 설계 |
| **대상** | 프롬프트 한 줄 | 시스템 프롬프트 + 메모리 + 도구 + 가드레일 |
| **목표** | 좋은 답변 | 반복 가능하고 신뢰할 수 있는 AI 행동 |
| **비유** | 질문 잘하기 | 교실 전체를 설계하기 |

> "Context engineering이 AI를 반복 가능하게 만든다 — 인상적이 아니라 **신뢰할 수 있게**"

### 5대 구성 요소

#### 1. System Prompt (시스템 프롬프트)
AI의 역할, 성격, 행동 규칙 정의.
- 우리의 예: `CLAUDE.md`

#### 2. Task Decomposition (작업 분해)
큰 작업을 AI가 수행 가능한 단위로 쪼개기.
- 우리의 예: PDCA Plan → Design → Do → Check

#### 3. Memory/State (메모리/상태 관리)
대화와 세션 간 컨텍스트 유지.
- 우리의 예: `wiki/` (지속적 지식), `wiki/log.md` (작업 기록)

#### 4. Tools/API (도구 접근)
AI가 사용할 수 있는 도구와 자원 설계.
- 우리의 예: 파일 읽기/쓰기, 웹 검색, 서브에이전트

#### 5. Guardrails (가드레일)
AI가 하면 안 되는 것 정의.
- 우리의 예: "raw/는 읽기전용", "위키 페이지는 반드시 frontmatter 포함"

### 우리가 이미 하고 있는 것

이 위키(ai-native-mind) 자체가 Context Engineering의 실제 적용이다:

| 구성 요소 | 우리의 구현 |
|-----------|-----------|
| System Prompt | CLAUDE.md Schema |
| Task Decomposition | PDCA 사이클, Ingest 10단계 체크리스트 |
| Memory | wiki/ (누적 지식), index.md, log.md |
| Tools | Claude Code의 파일 읽기/쓰기 |
| Guardrails | frontmatter 필수, raw/ 읽기전용, 분류 규칙 |

## 왜 중요한가

Sequoia Capital이 "agentic leverage"를 투자 심사에 반영할 정도로, 이 스킬이 **1인 개발자의 경쟁력**을 결정한다. Context Engineering을 잘하면:

- AI가 **일관되게** 좋은 결과를 내놓음 (운이 아니라 구조)
- 세션이 바뀌어도 **컨텍스트가 유지**됨 (CLAUDE.md, wiki)
- 복잡한 작업도 **체계적으로 분해**되어 AI가 처리 가능

## 3세대 진화에서의 위치

```
Prompt Engineering   ← 1세대: 무엇을 질문하는가
  → Context Engineering  ← 이 단계 (2세대): 무엇을 보여주는가
    → Harness Engineering  ← 3세대: 전체가 어떻게 작동하는가
```

Context Engineering은 [[concepts/prompt-engineering|Prompt Engineering]]의 진화이며, [[concepts/harness-engineering|Harness Engineering]]의 핵심 하위 계층이다.

## 관련 개념

- [[concepts/prompt-engineering]] — 1세대, Context Engineering의 기초
- [[concepts/harness-engineering]] — 3세대, Context Engineering을 포함하는 상위 계층
- [[concepts/ai-orchestration]] — Context Engineering이 기반이 되는 실행 기술
- [[concepts/ai-native-programmer]] — Context Engineering을 핵심 스킬로 가진 사람
- [[concepts/rag]] — 컨텍스트를 제공하는 기존 방식 (매번 재검색)

## 참고 소스

- [AI Orchestration 리서치](raw/notes/2026-04-09-ai-orchestration-research.md)
- [1인 개발자 AI 활용 리서치](raw/notes/2026-04-09-solo-dev-ai-research.md)
- [Effective Context Engineering (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
