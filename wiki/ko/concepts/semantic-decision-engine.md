---
title: "Semantic Decision Engine"
category: concepts
tags: [semantic-decision-engine, non-generative, model-routing, cost-optimization, llm-evaluation]
created: 2026-09-27
updated: 2026-09-27
sources:
  - "raw/articles/2026-09-27-jevs-semantic-decision-engine.md"
related:
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/structured-output]]"
status: draft
confidence: low
---

# Semantic Decision Engine

## 쉽게 읽기

**비유**: 자판기 버튼이 5개인데 굳이 시를 써서 음료를 고르지 않는다. Jev(TypeSafeAI)는 선택지가 정해진 결정(triage·분류·라우팅) 전용 엔진 — **생성하지 않는다**. "코드가 이미 가능한 답을 알고 있을 때 언어 생성은 잘못된 인터페이스."

| 용어 | 풀이 |
|------|------|
| **Semantic Decision Engine** | 의미 이해는 하되 **언어 생성을 하지 않고** 고정된 선택지 중 결정만 내리는 엔진 |
| **Invented-option failure mode** | 생성형 모델이 존재하지 않는 선택지를 날조하는 실패 — 비생성 구조에서는 원천 차단 |

## 한줄 정의

가능한 답이 고정된 경계 있는 결정 문제에 특화된 **비생성(non-generative) AI 엔진** — 비용·지연 절감과 날조 선택지 제거가 핵심 주장.

## 핵심 내용

- **제품**: TypeSafeAI "Jev" (2026-09)
- **대상**: triage, classification, routing — 선택지가 닫힌 결정
- **주장**: "Language generation is the wrong interface when code already knows the possible answers."
- **효과**: 비용·지연 절감 + invented-option failure mode의 구조적 제거
- **출처 주의**: 벤더 자사 발표, 독립 검증 없음 — confidence **low**

## 왜 중요한가 (1인 개발자 관점)

1. **비용 축의 확장**: [[patterns/ai-cost-management]]의 "싼 모델로 라우팅"을 넘어 "생성 자체를 안 함" — 라우팅 대상 분류기 자체를 Jev류로 교체하는 옵션
2. **Eval 용이성**: 출력 공간이 닫혀 있으면 [[concepts/llm-evaluation]]이 쉬워짐 — 열린 생성의 eval 난이도와 대조
3. **아키텍처 패턴**: "생성 LLM + 결정 엔진"의 하이브리드 — 모든 판단을 거대 모델에 맡기지 않는 설계

## 관련 개념

- [[patterns/ai-cost-management]] — 비생성 결정이 여는 새 비용 최적화 축
- [[concepts/llm-evaluation]] — 닫힌 출력 공간의 평가 용이성
- [[concepts/structured-output]] — 출력 강제 vs 생성 회피의 대조

## 참고 소스

- [Jev: the Semantic Decision Engine that refuses to generate](raw/articles/2026-09-27-jevs-semantic-decision-engine.md)
