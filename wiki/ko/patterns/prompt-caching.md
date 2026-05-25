---
title: "Prompt Caching 전략"
category: patterns
tags: [prompt-caching, cost-optimization, anthropic, llm]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-prompt-caching.md"
related:
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/context-engineering]]"
  - "[[tools/claude-code]]"
status: active
confidence: high
---

# Prompt Caching 전략

## 쉽게 읽기

**비유**: 매 수업마다 교과서 **전체를 베끼는 대신**, 교과서는 한 번만 사 두고(캐시에 저장) 질문지만 바꾼다. 같은 **앞부분(시스템 설명·긴 문서)** 이 반복될 때 특히 요금이 줄어든다.

| 용어 | 풀이 |
|------|------|
| **prefix** | 프롬프트 **앞쪽**에 붙는 고정 설명·문서 |
| **Cache read / write** | 저장해 두고 읽기 vs 처음 저장하기(쓰기는 보통 더 비쌈) |
| **TTL** | 캐시가 **얼마 동안** 유효한지(시간 제한) |

## 한줄 설명

반복되는 프롬프트 prefix를 캐시에 저장·재사용하여 AI 비용을 **70-90% 절감**하는 기법.

## 핵심 내용

### 비용 구조 (Anthropic)

| 항목 | 가격 (기본 input 대비) |
|------|---------------------|
| **Cache write (5분 TTL)** | 1.25x |
| **Cache write (1시간 TTL)** | 2x |
| **Cache read** | **0.1x** (90% 절감) |

**손익분기**:
- 5분 TTL: **1회 read**만 해도 비용 회수
- 1시간 TTL: 2회 read만 해도 비용 회수

### 실전 수치

> "월 $720 → $72, 아무것도 바꾸지 않고 90% 절감"

[[patterns/ai-cost-management|Batch API]](50% 할인)와 결합 시 **최대 95% 절감**.

## 핵심 전략

### 1. Cache Breakpoint 배치

변하지 않는 prefix의 **마지막 블록**에 breakpoint 설정:

```
[System prompt]       ← 캐시 대상
[Large document]      ← 캐시 대상
[Code context]        ← 캐시 대상
[Tool definitions]    ← 캐시 대상
━━━━━ breakpoint ━━━━━
[User message]        ← 매번 변함
```

### 2. 프롬프트 구조

```
캐시 대상 (고정):
- System prompt
- 대량 문서
- 코드베이스 컨텍스트
- 도구 정의

캐시 대상 X (매번 변함):
- 사용자 질문
- 최근 대화
```

### 3. 최소 토큰

**1,024 토큰 미만은 캐시되지 않음.** 작은 프롬프트는 혜택 없음.

### 4. TTL 선택

| TTL | 적합 |
|-----|------|
| **5분** (기본) | 연속 대화, 빠른 반복 작업 |
| **1시간** | 긴 세션, 간헐적 접근 |

## 유스케이스

### 대화형 에이전트
긴 시스템 프롬프트 + 업로드 문서를 모든 턴에서 재사용.

### 코딩 어시스턴트
관련 코드베이스를 프롬프트에 포함, 세션 내내 재사용. **Claude Code가 내부적으로 활용**.

### 대량 문서 처리
긴 문서(이미지 포함)를 한 번 캐시 → 여러 질문에 재사용.

## [[concepts/context-engineering|Context Engineering]]과의 관계

Context Engineering의 "정보 환경 설계"에서 **비용 효율성**을 담당하는 핵심 기법. 좋은 컨텍스트 설계는 좋은 캐싱 전략과 함께 가야 함.

## 2026 업데이트

- 2026.2.5부터 **workspace 수준 격리** (기존: organization 수준)
- 동일 조직 내 workspace 간 데이터 분리 보장

## 참고 소스

- [Prompt Caching 리서치](raw/notes/2026-04-09-prompt-caching.md)
- [Prompt Caching (Anthropic)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Prompt Caching 10x cheaper (ngrok)](https://ngrok.com/blog/prompt-caching)
