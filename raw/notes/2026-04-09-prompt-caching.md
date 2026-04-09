# Prompt Caching 전략 리서치 (2026-04-09)

## 출처
- https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- https://aicheckerhub.com/anthropic-prompt-caching-2026-cost-latency-guide
- https://medium.com/@labeveryday/prompt-caching-is-a-must-how-i-went-from-spending-720-to-72-monthly-on-api-costs-3086f3635d63
- https://ngrok.com/blog/prompt-caching

## Prompt Caching이란?
반복되는 프롬프트 prefix를 캐시에 저장하여 재사용.
AI 비용을 70-90% 절감할 수 있는 가장 강력한 기법.

## 비용 구조 (Anthropic)
- **Cache write (5분 TTL)**: 기본 input의 1.25x
- **Cache write (1시간 TTL)**: 기본 input의 2x
- **Cache read**: 기본 input의 **0.1x (90% 절감)**
- 5분 TTL: 1회 read만 해도 비용 회수
- 1시간 TTL: 2회 read만 해도 비용 회수

## 실전 수치
- 한 개발자: 월 $720 → $72 (90% 절감)
- Batch API(50% 할인)와 결합 시 최대 95% 절감

## 핵심 전략

### 1. Cache Breakpoint 배치
변하지 않는 prefix의 **마지막 블록**에 breakpoint 설정.
- ❌ 변하는 블록에 배치 (캐시 무효화)
- ✅ 고정된 prefix 끝에 배치

### 2. 프롬프트 구조
```
[캐시 대상: 변하지 않음]
- System prompt
- 대량 문서
- 코드베이스 컨텍스트
- 도구 정의

[캐시 대상 아님: 매번 변함]
- 사용자 질문
- 최근 대화
```

### 3. 최소 토큰
1,024 토큰 미만은 캐시되지 않음. 작은 프롬프트는 혜택 없음.

### 4. TTL 선택
- **5분**: 연속 대화, 빠른 반복 작업 (기본값)
- **1시간**: 긴 작업 세션, 간헐적 접근

## 유스케이스

### 대화형 에이전트
긴 시스템 프롬프트 + 업로드 문서 → 모든 턴에서 재사용

### 코딩 어시스턴트
관련 코드베이스를 프롬프트에 포함 → 세션 내내 재사용
(Claude Code가 내부적으로 활용)

### 대량 문서 처리
긴 문서(이미지 포함)를 한 번 캐시 → 여러 질문에 재사용

## 2026 업데이트
- 2026.2.5부터 workspace 수준 격리 (기존: organization 수준)
- 동일 조직 내 workspace 간 데이터 분리

## 결합 전략
- Prompt Caching (90% 절감) + Batch API (50% 절감) = **최대 95% 절감**
