---
title: "Agentic Coding"
category: patterns
tags: [agentic-coding, fuzz-testing, reliability, code-quality, benchmarks, prompt-quality, supervision]
created: 2026-09-24
updated: 2026-09-24
sources:
  - "raw/articles/2026-09-24-agents-rewrite-linux-utilities-fuzz-testing.md"
related:
  - "[[patterns/ai-code-review]]"
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/preventing-context-rot]]"
status: draft
confidence: low
---

# Agentic Coding

## 쉽게 읽기

**비유**: 신입 개발자 10명에게 고전 리눅스 유틸리티 10개를 처음부터 다시 짜게 했다. 결과물을 퍼즈 테스팅(무작위 입력으로 마구 두드려 보는 테스트)으로 검사했더니, **인간 원본과 구분이 안 됐고 오히려 덜 깨졌다**. 차이를 가른 건 개발자 실력이 아니라 **지시(프롬프트)의 품질과 옆에서 본 사람의 밀접도**였다.

| 용어 | 풀이 |
|------|------|
| **Fuzz testing** | 무작위·변형 입력을 대량으로 던져 크래시를 찾는 테스트 |
| **AFL++** | 커버리지 가이드 퍼즈 테스팅의 사실상 표준 도구 |

## 한줄 설명

AI 에이전트가 코드를 통째로 작성하는 개발 방식 — 신뢰성은 모델의 속성이 아니라 **워크플로(프롬프트 품질 + 인간 감독)** 의 속성이라는 것이 핵심 명제.

## 문제 상황

"AI가 짠 코드는 저품질"이라는 통념 때문에 프로덕션 도입이 막힌다. 하지만 이 통념은 객관적 잣대로 검증된 적이 별로 없었다.

## 해결 방법

2026-09-16 공개 연구: 표준 에이전틱 코딩 워크플로로 릴리스 품질의 리눅스 유틸리티 10개를 처음부터 재구현하고, AFL++ 기반 블랙박스 + 커버리지 가이드 퍼즈 테스팅으로 원본과 비교.

- AI 버전은 인간 원본만큼 안정적이었고, 종종 **더 안정적**
- 결과 편차의 원인은 모델이 아니라 **프롬프트 품질과 각 실행에 대한 인간 감독의 밀접도**

## 적용 예시

프로덕션에 에이전틱 코딩을 쓰는 팀은 모델 교체보다 **워크플로·프롬프트·감독 체계**에 투자한다. 예: 유틸리티급(명세가 명확한) 코드부터 에이전트에게 맡기고, 퍼즈 테스팅 같은 객관적 게이트를 통과한 것만 머지.

## 장단점

| 장점 | 단점 |
|------|------|
| 객관적 잣대(퍼즈 테스팅)로 "AI 코드 = 저품질" 통념에 반박 | 대상이 유틸리티급(명세 명확) 코드 — 복잡한 도메인 로직은 미검증 |
| 투자 우선순위가 명확해짐 (모델 < 워크플로) | 연구 결과 공개가 2차 보도(LinkedIn) 경유 — 원문 확인 필요 |

## 관련 패턴

- [[patterns/ai-code-review|AI 코드 리뷰 워크플로우]] — 에이전트 산출물을 표준화된 리뷰 단계로 거르는 실전 루틴
- [[patterns/preventing-context-rot|Preventing Context Rot]] — 긴 코딩 세션에서 품질이 무너지는 것을 막는 메모리 관리

## 참고 소스

- [Ten AI agents reimplement ten classic Linux utilities; fuzz testing can't tell the difference](raw/articles/2026-09-24-agents-rewrite-linux-utilities-fuzz-testing.md)
