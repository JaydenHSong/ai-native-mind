---
title: "AI 코드 리뷰 워크플로우"
category: patterns
tags: [code-review, workflow, solo-developer, claude-code]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-ai-code-review.md"
related:
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/subagents-delegation]]"
  - "[[concepts/cognitive-debt]]"
  - "[[patterns/git-ai-workflow]]"
status: active
confidence: high
---

# AI 코드 리뷰 워크플로우

## 쉽게 읽기

**비유**: 혼자 코딩할 때 **가상 동료**에게 “이 변경 괜찮아?” 묻는 과정이다. 사람 리뷰어가 없어도, AI가 **버그·보안·엣지 케이스**를 짚어 주도록 습관을 만든다.

| 용어 | 풀이 |
|------|------|
| **PR** | 내 브랜치 변경을 메인에 합치자고 올리는 **검토 요청** |
| **인라인 코멘트** | 특정 줄 옆에 달리는 **쪽지** |
| **Correctness** | 문법보다 **논리가 맞는지**가 중심인 검토 |

## 한줄 설명

1인 개발자가 AI를 활용해 **동료 리뷰 없이도** 코드 품질을 유지하는 실전 워크플로우.

## Claude Code Review (공식)

### 핵심 특징
- GitHub PR 자동 리뷰
- 인라인 코멘트 포스팅
- 전문화된 에이전트가 코드 변경 분석
- **Correctness 중심** (포매팅이 아님)

### 분석 영역
- Logic errors
- Security vulnerabilities
- Broken edge cases
- Subtle regressions
- Full codebase context 활용

## 3가지 핵심 워크플로우

### 1. Plan-Review-Execute 패턴

**핵심 원칙**: 계획 없이 코딩 시작하는 것이 최대 실수.

```
1. Claude A: 계획 작성
2. Claude B: "스태프 엔지니어처럼" 리뷰
3. Claude A: 리뷰 반영 + 실행
```

### 2. Test-First with AI

```
1. 사람: 테스트 작성 (이해 보장)
2. AI: 구현
3. 테스트 실행 → 통과까지 반복
4. AI: 엣지 케이스 추가
```

**효과**: [[concepts/cognitive-debt|Cognitive Debt]] 방지 — 최소한의 이해 유지.

### 3. Two-Phase Review

```
Phase 1: Self-review
  - AI에게 "방금 쓴 코드를 critical하게 리뷰해달라"
  - 다른 관점으로 보기

Phase 2: Human review
  - 사람이 AI 리뷰 결과 + 원본 코드 모두 확인
  - "AI가 놓쳤을 만한 것"에 집중
```

## 핵심 원칙 (Claude Code 제작자 100줄 워크플로우)

### 1. Single Source of Truth
- CLAUDE.md에 모든 규칙
- 2500 토큰 (~100줄) 제한
- 버전 관리 (git)

### 2. 실수는 CLAUDE.md에 기록

> **"Anytime we see Claude do something incorrectly, we add it to CLAUDE.md so it doesn't repeat next time."**

- 주당 여러 번 업데이트
- 같은 실수 반복 금지

### 3. Minimal Code Changes
- 가능한 한 간단한 변경
- 줄을 추가하기보다 **삭제**
- YAGNI 원칙 엄수

### 4. Slash Commands for Repetition
- 하루에 여러 번 하는 작업 = slash command
- Inner loop 워크플로우 자동화

### 5. Treat AI Output as Junior Developer Code
- 매 스니펫을 주니어가 쓴 것처럼 취급
- 읽고, 실행하고, 테스트
- "작동한다"는 말만 믿지 않기

## Addy Osmani의 LLM Workflow (2026)

### Context First
작업 시작 전 관련 파일/문서 로드. **Context가 부족하면 결과도 나쁨**.

### Incremental Changes
한 번에 한 가지만. 작은 커밋으로 진행. 각 단계 검증.

### Test-Driven AI
테스트가 AI를 가이드. Red → AI가 Green → Refactor.

### The 80% Problem Awareness
AI가 80% 해결. **나머지 20%가 진짜 일**. 이 20%에 시간 투자.

## GitHub Actions 통합

```yaml
# .github/workflows/claude-review.yml
name: Claude PR Review
on: pull_request

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          trigger: pull_request
          prompt: "Review for correctness, security, edge cases"
```

**효과**: Claude가 diff 읽고 인라인 코멘트 + 요약 포스팅. 사람은 사전 분류된 PR을 검토.

## 1인 개발자의 구체적 루틴

### 매일
1. CLAUDE.md 확인 (변경 있으면 커밋)
2. 작업 시작 → Plan 먼저
3. 작은 단위로 구현
4. Self-review 후 커밋

### PR 만들 때
1. `/commit` → 커밋 메시지 생성
2. `/pr` → PR 설명 자동 생성
3. Claude Code Review 자동 실행
4. 리뷰 반영 후 머지

### 주간
1. CLAUDE.md 리팩토링 (200줄 이하 유지)
2. 반복 작업 → slash command 추가
3. 실수 패턴 → CLAUDE.md 금지 항목에 추가

## Chapter Clear 가이드

- **소속 챕터**: Chapter 7 (엔드게임)
- **퀘스트**: 최근 변경 1개를 self-review와 AI review 두 단계로 점검한다.
- **클리어 조건**: correctness/보안/엣지 케이스 중 최소 1개 개선점을 찾아 반영한다.
- **보상(산출물)**: 내 코드 리뷰 체크리스트 v1
- **다음 퀘스트**: [[patterns/ai-cost-management]] -> [[wiki/campaign-map]]

## 참고 소스

- [AI 코드 리뷰 리서치](raw/notes/2026-04-09-ai-code-review.md)
- [Claude Code Review (Anthropic)](https://claude.com/blog/code-review)
- [Code Review Docs](https://code.claude.com/docs/en/code-review)
- [Addy Osmani LLM Workflow](https://addyosmani.com/blog/ai-coding-workflow/)
- [Claude Code Creator's 100-Line Workflow](https://mindwiredai.com/2026/03/25/claude-code-creator-workflow-claudemd/)
