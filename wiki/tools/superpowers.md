---
title: "Superpowers"
category: tools
tags: [claude-code-plugin, superpowers, tdd, subagent, planning]
created: 2026-04-09
updated: 2026-04-09
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/bkit]]"
  - "[[tools/codex-plugin]]"
  - "[[tools/gstack]]"
  - "[[comparisons/claude-code-plugins]]"
  - "[[concepts/ai-orchestration]]"
status: active
confidence: medium
---

# Superpowers

## 한줄 설명

Jesse Vincent(obra)가 만든 오픈소스 Claude Code 플러그인으로, "시니어 개발자의 작업 습관"을 AI에 강제하는 agentic skills 프레임워크.

## 핵심 철학

"코딩 전에 생각하고, 코딩 후에 검증하라." Brainstorm → Plan → Execute의 3단계를 반드시 거치며, TDD(Test-Driven Development)를 엄격하게 적용한다. Claude Code를 단순 코드 생성기에서 **체계적 소프트웨어 엔지니어**로 전환하는 것이 목표.

## 핵심 기능

### 3단계 워크플로우

```
Brainstorm (소크라테스식 탐구)
  → Plan (2~5분 단위 태스크 분해)
    → Execute (Subagent 병렬 실행 + 2단계 리뷰)
```

### 1. Brainstorming (`/superpowers:brainstorm`)

코드 작성 전 **소크라테스식 질문**으로 요구사항을 정제:
- "이 기능의 실제 사용자는 누구인가?"
- "이 접근법의 실패 모드는?"
- "더 단순한 대안은 없는가?"

결과를 설계 문서로 저장하여 컨텍스트 유지.

### 2. Plan 작성 (`/superpowers:write-plan`)

승인된 설계를 실행 가능한 세부 태스크로 분해:
- 각 태스크 2~5분 단위
- 파일 경로, 코드 스니펫, 검증 단계까지 명시
- 의존 관계 정의

### 3. Plan 실행 (`/superpowers:execute-plan`)

**Subagent-driven Development** — 태스크별 독립 subagent 디스패치:
- 병렬 실행으로 효율 극대화
- 2단계 리뷰: ① Spec 준수 확인, ② 코드 품질 검토
- Git worktree로 격리하여 메인 브랜치 보호

### 4. TDD 강제

Red-Green-Refactor 사이클 엄격 적용:
1. **Red**: 실패하는 테스트 먼저 작성
2. **Green**: 테스트를 통과하는 최소 코드 작성
3. **Refactor**: 코드 정리

테스트가 실패해야만 구현 단계로 진행 가능.

### 5. Systematic Debugging

4단계 디버깅 방법론:
1. 증상 수집
2. 가설 수립
3. 근본 원인 조사
4. 검증 후 수정

### 6. Code Review (`/superpowers:review`)

기술적 코드 리뷰 수행. spec 준수 여부 + 코드 품질 동시 검증.

## 설치

```bash
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

슬래시 커맨드: `/superpowers:brainstorm`, `/superpowers:write-plan`, `/superpowers:execute-plan`

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 무료 MIT 라이선스 | brainstorming/planning에 10~20분 오버헤드 |
| TDD 강제로 품질 보장 | 대규모 context window 관리 부담 |
| Subagent 병렬로 효율적 | 단순/긴급 작업에는 과도함 |
| 검증 게이트로 코드 일탈 방지 | 학습 곡선 존재 |
| 수시간 자율 작업 가능 | 비-TDD 프로젝트에 맞지 않을 수 있음 |

## AI 네이티브 관점에서의 의미

Superpowers는 [[concepts/ai-orchestration|AI 오케스트레이션]]의 **Parallelization 패턴**을 활용한다. Plan의 각 태스크를 독립 subagent가 병렬로 처리하고, 결과를 aggregation하여 리뷰한다. 또한 "생각 → 계획 → 실행 → 검증"의 순환은 [[tools/bkit|bkit]]의 PDCA와 본질적으로 같은 구조다.

## 관련 도구

- [[tools/claude-code]] — Superpowers가 확장하는 베이스 도구
- [[tools/bkit]] — 유사한 구조화, PDCA 중심 (더 넓은 범위)
- [[tools/codex-plugin]] — 크로스-모델 리뷰 보완
- [[tools/gstack]] — 역할 기반 접근

## 참고 소스

- [GitHub: obra/superpowers](https://github.com/obra/superpowers)
- [Superpowers for Claude Code: Complete Guide 2026](https://www.pasqualepillitteri.it/en/news/215/superpowers-claude-code-complete-guide)
- [How I'm using coding agents (Jesse Vincent)](https://blog.fsck.com/2025/10/09/superpowers/)
