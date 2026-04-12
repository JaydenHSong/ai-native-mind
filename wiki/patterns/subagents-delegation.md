---
title: "Subagents & 위임 패턴"
category: patterns
tags: [subagents, claude-code, delegation, orchestration]
created: 2026-04-09
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-09-subagents-delegation.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/agent-server-harness]]"
status: active
confidence: high
---

# Subagents & 위임 패턴

## 쉽게 읽기

**비유**: 반장 한 명에게 모든 과목을 시키면 머리가 복잡해진다. **서브에이전트**는 “수학 전담”, “영어 전담”처럼 **역할을 나눈 조원**이다. 각자 **짧은 메모장(컨텍스트)** 만 쓰게 해서 서로 섞이지 않게 한다.

| 용어 | 풀이 |
|------|------|
| **Subagent** | 메인 채팅과 분리된 **전문 조수** 설정 묶음 |
| **위임** | 큰 일을 쪼개서 조원에게 넘기기 |
| **컨텍스트 윈도우** | AI가 한 번에 기억할 수 있는 **메모장 크기** |

## 한줄 설명

Claude Code의 subagent를 활용하여 작업을 전문화된 에이전트들에게 위임하는 실전 패턴.

## 핵심 내용

### Subagent란?

메인 세션과 **분리된 컨텍스트 윈도우**를 가진 AI 에이전트. 자체 시스템 프롬프트, 도구 제한, 모델 설정을 가질 수 있음. `.claude/agents/`에 정의.

### 3가지 호출 방식

| 방식 | 예시 | 동작 |
|------|------|------|
| **Natural language** | "explorer로 탐색해줘" | Claude가 위임 여부 판단 |
| **@-mention** | `@explorer 이 파일 분석해` | 강제 호출 |
| **Session-wide** | 세션 설정 | 전체 세션이 특정 subagent 사용 |

## 3대 핵심 패턴

### 1. Explore-Plan-Execute (3단계 파이프라인)

**가장 신뢰할 수 있는 패턴** — 복잡한 엔지니어링 작업의 표준.

```
[Explorer subagent]
  ↓ 코드베이스 탐색, 요약 반환
[Planner subagent]
  ↓ 탐색 결과 기반 계획 수립
[Executor subagent]
  ↓ 계획 실행
```

각 단계가 **깨끗한 핸드오프**를 제공. 메인 컨텍스트는 raw 내용이 아닌 **종합 결과**만 받음.

### 2. 병렬 Subagents

의존성 없는 작업을 동시 실행:
- 여러 파일의 에러 수정
- 여러 컴포넌트의 패턴 업데이트
- 독립적 변경 작업

3개 병렬 subagent가 순차 실행보다 빠름.

### 3. Context Preservation

**메인 대화를 깨끗하게 유지**하는 전략:
- Subagent가 수십 개 파일을 읽고 요약만 반환
- 메인 컨텍스트에 raw 데이터 대신 synthesized findings 유입
- [[concepts/context-rot-hallucination|Context Rot]] 방지에 효과적

## 언제 위임할까

### ✅ 위임해야 할 때
- Context gathering이 필요 (수십 개 파일 읽기)
- 의존성 없는 병렬 작업
- 전문화된 역할 (security reviewer, test writer)
- 깊은 탐색이 필요한 복잡한 작업

### ❌ 위임하지 말아야 할 때
- 간단한 단일 파일 수정
- 상호 의존적 순차 작업
- 메인 컨텍스트로 이미 충분

## 설계 베스트 프랙티스

### description 필드
Claude는 description을 기반으로 **자동 위임** 여부를 판단. 명확하게 작성:

```markdown
---
name: security-reviewer
description: Reviews code for security vulnerabilities including SQL injection, XSS, CSRF, and insecure authentication. Use when reviewing PRs or completing features that handle user input, authentication, or sensitive data.
---
```

### 도구 제한
각 subagent에 **필요한 도구만** 부여. 예:
- Explorer: Read, Grep, Glob만
- Executor: Edit, Write, Bash 추가
- Reviewer: Read만 (read-only)

### 모델 선택
- **Haiku**: 간단한 작업 (파일 목록, 기본 탐색)
- **Sonnet**: 일반 작업 (코드 수정, 리뷰)
- **Opus**: 복잡한 추론 (아키텍처 결정)

## [[concepts/ai-orchestration|AI 오케스트레이션]]과의 매핑

| 오케스트레이션 패턴 | Subagent 구현 |
|-------------------|--------------|
| Orchestrator-Workers | 메인 agent가 subagent 호출 |
| Parallelization | 병렬 subagent 패턴 |
| Prompt Chaining | Explore-Plan-Execute |
| Evaluator-Optimizer | Generator + Reviewer subagent |

## Chapter Clear 가이드

- **소속 챕터**: Chapter 4 (제작소)
- **퀘스트**: Explore-Plan-Execute로 실제 작업 1개를 위임 설계한다.
- **클리어 조건**: 무엇을 위임하고 무엇을 메인 컨텍스트에 남길지 구분할 수 있다.
- **보상(산출물)**: subagent 역할 정의 초안 1개
- **다음 퀘스트**: [[patterns/agent-server-harness]] -> [[patterns/safe-tool-calling-sandbox]]

## 참고 소스

- [Subagents 리서치](raw/notes/2026-04-09-subagents-delegation.md)
- [How and when to use subagents (Anthropic)](https://claude.com/blog/subagents-in-claude-code)
- [Create custom subagents (Docs)](https://code.claude.com/docs/en/sub-agents)
- [Sub-Agent Best Practices](https://claudefa.st/blog/guide/agents/sub-agent-best-practices)
