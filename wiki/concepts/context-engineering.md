---
title: "Context Engineering"
category: concepts
tags: [context-engineering, prompt-engineering, ai-orchestration, mise-en-place, context-fluency]
created: 2026-04-09
updated: 2026-05-15
sources:
  - "raw/notes/2026-04-09-ai-orchestration-research.md"
  - "raw/notes/2026-04-09-solo-dev-ai-research.md"
  - "raw/articles/2026-05-12-mise-en-place-agentic-coding.md"
  - "raw/articles/2026-05-15-acdl-context-description-language.md"
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

## 쉽게 읽기 (30초)

**한 문장**: “질문 한 줄 잘 쓰기”를 넘어, AI가 보는 **전체 환경**(규칙 파일, 메모리, 도구, 안전장치)을 설계하는 일이다. 아래 표의 **비유** 열이 가장 빠른 요약이다.

| 용어 | 풀이 |
|------|------|
| **Context** | 모델이 답할 때 참고하는 **모든 입력** |
| **Guardrails** | 하면 안 되는 행동·출력을 막는 **울타리** |
| **RAG/MCP** | 외부 지식·도구를 **안전하게** 붙이는 층 |

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

## 2026-05-12 보강 — Mise en Place (MEP) & Context Fluency

> 출처: Zigler, "Mise en Place for Agentic Coding" (arXiv:2605.05400, 2026-05-06)

Context Engineering의 **workflow-level** 구현체로 *mise en place* (MEP) 3단계가 제안됐다. invocation scope의 prompt engineering보다 한 층 위, harness engineering보다 한 층 아래 — *implementation 전에* 모두 끝낸다는 phase-gating이 핵심.

| Phase | 산출물 | 한 줄 |
|---|---|---|
| **1. Contextual Grounding** | 도메인 지식·tacit knowledge를 markdown briefing 문서로 외화 | "*Why* 까지 적어 둔다 — outcome부터 backward" |
| **2. Collaborative Specification** | 인간-에이전트 대화로 spec (스크린·데이터 흐름·**무엇을 제외할지**) | "Spec이 agent의 micro-decision을 정렬한다" |
| **3. Task Decomposition** | dependency-aware task records (예: Beads JSON+Git) | "Parallel agent execution의 인터페이스" |

### Context Fluency — 새로운 개발자 스킬

Prompt Engineering이 *invocation*을 튜닝한다면, Context Fluency는 그 *상위* 정보 아키텍처를 설계한다. 4 components: **Decomposition / Specification / Constraint definition / Domain encoding**. 함의 — 도메인 지식+교수법이 강한 사람이 agentic 워크플로우에서 disproportionately effective.

### Hackathon Case Study (정량 근거)

- 준비 2hr → 10 docs / 9,386 단어 / 64 beads
- 실행 184min × 4 parallel agents → 43 beads closed, median **5.9 min/bead**
- **Planning-to-code 1.10:1, prep-to-execute 5.7:1**, architectural rework ≈ 0
- 버그 fix는 median **1.2 min** vs implementation task **9.7 min**

비교 — [[journal/2026-05-02|Google 2026-05-02 17.2x vs 4.4x 오류 증폭]]의 *반대 측 증거*: 사전 정렬 충분 시 architectural rework가 0에 수렴.

> 자세히: [Mise en Place 원본 노트](raw/articles/2026-05-12-mise-en-place-agentic-coding.md). 위치 비교 — MEP는 [[patterns/agent-planning-to-implementation]]의 phase-gated 인스턴스이자 [[patterns/claude-md-guide]]의 Phase 1 인용.

## 2026-05-15 보강 — ACDL (Agentic Context Description Language)

[Peleg Pelc · Kaminka · Goldberg](https://arxiv.org/abs/2605.01920) (CAIS '26, 2026-05-03)는 "context 합성에 *표준 표기*가 없다"를 문제로 잡고 **ACDL**을 제안한다 — role-message sequence · dynamic content · time-indexed reference · conditional/iterative structure 4구성. 손그림 화이트보드와 정형 코드 양쪽 매체에서 같은 의미를 보장. 프로젝트: <http://www.acdlang.org>.

| ACDL 구성 | 본 위키 매핑 |
|---|---|
| Role message sequence | 시스템/사용자/도구 turn의 *순서* 명시 — [[patterns/preventing-context-rot]] 3계층 메모리의 *읽기 layer*와 짝 |
| Dynamic content | tool output · retrieved doc 등 *시점별 변하는 자리* — [[concepts/rag|RAG]] 결과를 컨텍스트 *어디에* 꽂는지 |
| Time-indexed reference | t-1, t-3 turn의 명시적 인용 — [[concepts/ai-memory-systems|단기 메모리]] FIFO 정책의 *공식 표기* |
| Conditional / iterative | if · loop — [[concepts/ai-orchestration#오케스트레이션 6대 패턴|6 패턴]] 중 chaining/routing/loop의 *표기* |

**Mise en Place(2026-05-12 보강)와의 짝**: MEP가 *프로세스*(준비 단계)를 정한다면 ACDL은 *결과 구조*(컨텍스트 흐름)를 그린다. 둘은 입/출 짝.

**[[patterns/claude-md-guide|CLAUDE.md]] · GROUNDING.md(2026-05-12 보강)와의 짝**: 그쪽이 *constraint 텍스트*를 정한다면 ACDL은 그 텍스트가 *prompt에 어떻게 주입되는지*를 적는다.

**1인 개발자 ROI 3개**:

1. 본인 에이전트의 context flow를 ACDL diagram 1장으로 남기면, 6개월 뒤 자기 코드도 빠르게 다시 이해 — [[concepts/cognitive-debt|Cognitive Debt]] 축소 도구.
2. 두 시스템 비교 시("LangGraph vs custom") 코드 까지 않고 *같은 표기* 위에 올려놓고 차이를 본다.
3. 본 위키의 [[patterns/agent-server-harness]]·[[patterns/agent-planning-to-implementation]] 같은 패턴 페이지에 ACDL diagram을 *옵션 첨부*로 권장 — 표기 통일이 누적 가치 만든다.

**한계**: 18페이지 CAIS '26 채택 1건 시점. 표준화 조직(W3C 등) 채택 흔적 없음. "표기법 만든다 vs 자연어로 충분" 논쟁의 한 쪽 — 본 위키 [[patterns/llm-wiki]]가 자연어만으로 6주째 운영되고 있다는 반례 존재.

→ 2x3 좌표계(2026-05-14)에서 **(tooling, 정형화)** 칸이 채워졌다. 남은 빈 칸: (descriptive, 학습) / (descriptive, 측정) / (prescriptive, 학습) / (prescriptive, 측정). (descriptive, 측정)은 같은 날 ingest한 [[concepts/context-rot-hallucination#2026-05-15 보강 — Constraint Decay (백엔드 코드 생성의 구조 제약 붕괴)|Constraint Decay]]가 부분 충당.

## 관련 개념

- [[concepts/prompt-engineering]] — 1세대, Context Engineering의 기초
- [[concepts/harness-engineering]] — 3세대, Context Engineering을 포함하는 상위 계층
- [[concepts/ai-orchestration]] — Context Engineering이 기반이 되는 실행 기술
- [[concepts/ai-native-programmer]] — Context Engineering을 핵심 스킬로 가진 사람
- [[concepts/rag]] — 컨텍스트를 제공하는 기존 방식 (매번 재검색)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 2 (기본 전투)
- **퀘스트**: 내 프로젝트의 컨텍스트 구성요소를 5대 요소(System/분해/Memory/Tools/Guardrails)로 매핑한다.
- **클리어 조건**: 문제 1개를 "프롬프트 문제"가 아닌 "컨텍스트 설계 문제"로 재정의할 수 있다.
- **보상(산출물)**: 내 컨텍스트 파이프라인 도식(텍스트 버전 가능)
- **다음 퀘스트**: [[concepts/context-vs-prompt-practice]] -> [[concepts/ai-orchestration]]

## 참고 소스

- [AI Orchestration 리서치](raw/notes/2026-04-09-ai-orchestration-research.md)
- [1인 개발자 AI 활용 리서치](raw/notes/2026-04-09-solo-dev-ai-research.md)
- [Effective Context Engineering (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
