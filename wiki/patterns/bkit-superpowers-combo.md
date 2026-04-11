---
title: "bkit + Superpowers 조합 패턴"
category: patterns
tags: [bkit, superpowers, pdca, tdd, process-discipline, claude-code-plugin]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[comparisons/claude-code-plugins]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/llm-wiki]]"
status: active
confidence: medium
---

# bkit + Superpowers 조합 패턴

## 쉽게 읽기

**bkit**은 “무엇을 언제 할지” **PDCA 같은 큰 순서**를 잡아 주는 플러그인에 가깝다. **Superpowers**는 “코드 짜기 전에 생각·테스트 먼저” 같은 **작은 습관**을 강하게 박아 둔다. 둘을 같이 쓰면 **큰 그림과 실행 규율**이 동시에 생긴다.

| 용어 | 풀이 |
|------|------|
| **PDCA** | 계획→실행→점검→개선 **반복 사이클** |
| **TDD** | 테스트를 **먼저** 적고 코드를 맞추는 방식 |
| **스킬(skill)** | 특정 상황에서 AI가 따라야 할 **미리 적힌 규칙 묶음** |

## 한줄 설명

bkit의 PDCA 프로세스 뼈대 위에 Superpowers의 실행 규율을 얹어, "단계 건너뛰기"를 구조적으로 방지하는 AI 네이티브 개발 패턴.

## 문제: PDCA 건너뛰기

bkit은 Plan → Design → Do → Check → Act의 PDCA 사이클을 제공하지만, 실제로는:

```
이상적: Plan → Design → Do → Check → Act
현실:   "이거 만들어줘" → Do → (가끔) Check
```

Plan과 Design을 건너뛰는 이유:
- 빨리 결과를 보고 싶은 심리
- "간단한 기능이니까 바로 해도 되겠지" 판단
- 문서 작성이 귀찮음
- bkit이 권장은 하지만 **강제하지 않음**

## 해결: Superpowers의 구조적 강제

[[tools/superpowers|Superpowers]]는 brainstorm → plan → execute를 **물리적으로 강제**한다:

```
/superpowers:brainstorm  ─── 안 거치면 ──▶ plan 작성 불가
/superpowers:write-plan  ─── 안 거치면 ──▶ execute 불가
/superpowers:execute-plan ── 비로소 코딩 시작
```

## 조합 워크플로우

### Phase 1: 계획 (Plan)

```
1. /pdca plan {feature}         ← bkit이 문서 구조 제공
2. /superpowers:brainstorm      ← Superpowers가 소크라테스식 질문으로 정제
   - "이 기능의 실제 사용자는?"
   - "실패 모드는?"
   - "더 단순한 대안은?"
3. brainstorm 결과를 Plan 문서에 반영
```

### Phase 2: 설계 (Design)

```
4. /pdca design {feature}       ← bkit이 기술 명세 구조 제공
5. /superpowers:write-plan      ← Superpowers가 2~5분 단위 태스크로 분해
   - 파일 경로, 코드 스니펫, 검증 단계 명시
   - 의존 관계 정의
6. Plan 문서에 태스크 목록 반영
```

### Phase 3: 구현 (Do)

```
7. /superpowers:execute-plan    ← Subagent 병렬 실행 + TDD 강제
   - Red: 실패 테스트 먼저
   - Green: 최소 구현
   - Refactor: 정리
8. Git worktree에서 격리 작업
```

### Phase 4: 검증 (Check)

```
9. /pdca analyze {feature}      ← bkit gap-detector로 설계-구현 일치 확인
10. Match Rate < 90% → /pdca iterate (자동 개선)
11. Match Rate ≥ 90% → /pdca report (완료 보고서)
```

## 역할 분담

| 관점 | bkit 담당 | Superpowers 담당 |
|------|----------|-----------------|
| **프로세스** | PDCA 사이클 정의 + 문서 구조 | 각 단계 진입 조건 강제 |
| **계획** | Plan 문서 템플릿 | 소크라테스식 요구사항 정제 |
| **설계** | 기술 명세 구조 | 실행 가능한 태스크 분해 |
| **구현** | 파이프라인 가이드 | TDD + subagent 병렬 |
| **검증** | Gap Analysis + 자동 개선 | 2단계 리뷰 (spec + 품질) |
| **비유** | 건축 설계도 | 현장 감독관 |

## 언제 이 조합을 쓸까

| 상황 | 접근법 |
|------|--------|
| 간단한 버그 수정 | bkit만 (PDCA 가볍게) |
| 새 기능 추가 (중간 규모) | **bkit + Superpowers** (이 패턴) |
| 보안 중요 코드 | bkit + Superpowers + Codex (리뷰 강화) |
| 빠른 프로토타입 | gstack만 (가볍고 빠름) |

## 주의사항

- **토큰 비용**: 두 플러그인 동시 사용 시 컨텍스트 소비가 큼
- **오버헤드**: brainstorm + plan에 10~20분 추가 소요
- **단순 작업**: 5분이면 끝나는 작업에 이 패턴은 과도함
- **균형점**: "이 기능이 30분 이상 걸릴 것 같다" → 이 패턴 적용

## AI 오케스트레이션 관점

이 조합은 [[concepts/ai-orchestration|AI 오케스트레이션]]의 두 패턴을 결합한다:

- **bkit**: Orchestrator-Workers (CTO 에이전트 → 전문 에이전트)
- **Superpowers**: Parallelization (Plan → subagent 병렬 처리)

두 패턴의 조합으로, 계획의 체계성(bkit)과 실행의 효율성(Superpowers)을 동시에 확보.

## 참고 소스

- [[tools/bkit]] — PDCA 프로세스 상세
- [[tools/superpowers]] — TDD + subagent 상세
- [[comparisons/claude-code-plugins]] — 4종 비교 + 조합 전략
