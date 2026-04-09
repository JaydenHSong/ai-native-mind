---
title: "Harness Engineering"
category: concepts
tags: [harness-engineering, ai-agent, infrastructure, orchestration]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/prompt-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agentic-engineering]]"
  - "[[tools/claude-code]]"
status: active
confidence: high
---

# Harness Engineering

## 한줄 정의

AI 에이전트를 감싸는 완전한 인프라(제약, 피드백 루프, 오케스트레이션, 제어 메커니즘)를 설계하는 기술. **Agent = Model + Harness**.

## 핵심 내용

### 3세대 진화에서의 위치

```
1세대: Prompt Engineering  — "무엇을 질문하는가"     (2022-2024)
2세대: Context Engineering — "무엇을 보여주는가"     (2025)
3세대: Harness Engineering — "전체가 어떻게 작동하는가" (2026)
```

하네스가 [[concepts/context-engineering|Context Engineering]]을 포함하고, 컨텍스트가 [[concepts/prompt-engineering|Prompt Engineering]]을 포함한다. 각 세대가 해결하는 문제가 완전히 다르다.

### 왜 Harness가 필요해졌나

> "에이전트가 유용할 만큼 좋아졌지만, 혼자 믿을 만큼 신뢰할 수는 없다"

- AI 에이전트 실패율 약 20%
- MIT 연구: 대기업 GenAI 파일럿의 ~95%가 측정 가능한 수익 미달성
- 모델만으로는 프로덕션 수준의 신뢰성 확보 불가

### 3대 구성요소 (Martin Fowler 정의)

#### 1. Guides (가이드) — 피드포워드 제어
에이전트가 **행동하기 전에** 조향하는 제어.
- 코딩 컨벤션, 구조화된 프롬프트, 부트스트랩 지시
- 우리의 예: `CLAUDE.md`, PDCA Plan/Design 문서

#### 2. Sensors (센서) — 피드백 제어
에이전트가 **행동한 후에** 문제를 잡는 제어.
- 린터, 타입 체커, 테스트 스위트
- 우리의 예: Gap Analysis, Lint 워크플로우

#### 3. 제어의 두 종류

| 종류 | 특징 | 예시 |
|------|------|------|
| **Computational** | 결정적, 빠름, 저렴 | 린터, 타입체크, frontmatter 검증 |
| **Inferential** | AI 기반, 느림, 비쌈 | 코드 리뷰 에이전트, Gap Analysis |

### Claude Code의 Harness (소스코드 유출로 밝혀진 구조)

2026년 3월 Anthropic이 실수로 Claude Code 전체 소스를 공개하면서, 실제 Harness 구조가 드러남:

- **500,000줄** TypeScript, 1,900개 파일
- **~40개 권한 제어 도구**: 파일, bash, 웹, LSP
- **46,000줄 쿼리 엔진**: LLM API, 토큰 캐싱, 컨텍스트 관리, 재시도
- **3계층 메모리**: "context entropy" (에이전트가 점점 맥락을 잃는 현상) 방지

### OpenAI Codex의 Harness Engineering 사례

2026년 2월 OpenAI가 내부 소프트웨어 제품을 Codex로 구축:
- **수동 코드 0줄** — 모든 코드를 에이전트가 작성
- 3명 엔지니어 × 5개월 × ~1,500 PR × ~100만 줄
- 핵심은 코드를 쓴 게 아니라 **Harness를 설계**한 것

## 우리가 이미 하고 있는 것

| Harness 구성요소 | 우리의 구현 |
|-----------------|-----------|
| Guides (피드포워드) | CLAUDE.md Schema, PDCA Plan/Design 문서, 템플릿 |
| Sensors (피드백) | Gap Analysis, Lint 워크플로우, frontmatter 검증 |
| Orchestration | PDCA 사이클, Ingest 10단계 체크리스트 |
| Memory | wiki/ (누적 지식), index.md, log.md |
| Guardrails | raw/ 읽기전용, frontmatter 필수, 분류 규칙 |

## 왜 중요한가

AI 네이티브 프로그래머에게 Harness Engineering은 **가장 실전적인 스킬**이다. 모델은 바꿀 수 없지만, Harness는 설계할 수 있다. 좋은 Harness = 신뢰할 수 있는 에이전트.

## 관련 개념

- [[concepts/context-engineering]] — Harness의 하위 계층
- [[concepts/prompt-engineering]] — 가장 기초적인 계층
- [[concepts/agentic-engineering]] — Harness Engineering의 실행 방법론
- [[concepts/ai-orchestration]] — Harness 안에서의 에이전트 조율

## 참고 소스

- [Engineering 패러다임 리서치](raw/notes/2026-04-09-engineering-paradigms-research.md)
- [Martin Fowler - Harness Engineering](https://martinfowler.com/articles/harness-engineering.html)
- [Claude Code Agent Harness Architecture](https://wavespeed.ai/blog/posts/claude-code-agent-harness-architecture/)
- [The Anatomy of an Agent Harness](https://blog.dailydoseofds.com/p/the-anatomy-of-an-agent-harness)
