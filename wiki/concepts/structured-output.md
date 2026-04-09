---
title: "Structured Output"
category: concepts
tags: [structured-output, json-mode, function-calling, schema]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-structured-output.md"
related:
  - "[[concepts/tool-use]]"
  - "[[concepts/harness-engineering]]"
status: active
confidence: high
---

# Structured Output

## 한줄 정의

LLM이 특정 스키마(보통 JSON)에 정확히 맞는 출력을 생성하도록 강제하는 기술. **2026년 프로덕션 LLM 앱의 필수 기능**.

## 왜 필요한가

- 파싱 실패 제거 (regex로 JSON 추출하는 끔찍한 시절 끝)
- 타입 안전성
- 후속 처리 신뢰성
- 에러 핸들링 단순화

## 3가지 접근법

### 1. JSON Mode (Legacy)
- 출력이 valid JSON임만 보장
- 스키마는 따르지 않을 수 있음
- **사용하지 말 것** — Structured Outputs로 대체

### 2. Function Calling / [[concepts/tool-use|Tool Use]]
- 도구 정의를 통해 스키마 강제
- Anthropic/Claude의 기본 접근법
- 도구 호출을 구조화 출력으로 활용

### 3. Structured Outputs (Recommended)
- **스키마 100% 준수 보장**
- 타입 안전성
- 2026 표준

## 언제 무엇을 쓸까

| 목적 | 사용할 것 |
|------|---------|
| AI가 **어떤 도구를 쓸지 선택** | Function Calling |
| **출력 포맷이 고정** | Structured Outputs |
| 데이터 추출/분류 | Structured Outputs |
| 여러 액션 중 선택 | Function Calling |

## Provider별 구현

### OpenAI
```python
from pydantic import BaseModel

class Person(BaseModel):
    name: str
    age: int
    email: str

response = client.chat.completions.parse(
    model="gpt-5",
    messages=[...],
    response_format=Person
)
person = response.choices[0].message.parsed
```

### Anthropic Claude
Tool-based 접근. 2026년 Structured Outputs 기능 추가로 스키마 강제 보장.

## 실전 예시

### 데이터 추출
```python
class Invoice(BaseModel):
    invoice_number: str
    date: date
    total: float
    items: list[LineItem]

# "From: John\nTotal: $250..."에서 추출
```

### 분류
```python
class Classification(BaseModel):
    category: Literal["bug", "feature", "question"]
    priority: Literal["low", "medium", "high"]
    summary: str
```

### 복잡한 워크플로우
중첩 모델, enum, 리스트 모두 지원. Pydantic의 모든 기능 활용 가능.

## Best Practices

1. **강제 가능한 제약 사용**: enum, Literal, 숫자 범위
2. **description 필드 활용**: 각 필드의 의미 설명
3. **required vs optional 명확히**
4. **nested models**: 복잡한 구조도 타입 안전
5. **검증 레이어**: 스키마 통과해도 비즈니스 로직 검증 별도

## [[concepts/harness-engineering|Harness Engineering]]에서의 위치

Structured Output은 Harness의 **Guardrail** 역할. AI가 예측 가능한 포맷으로만 응답하도록 강제하여 시스템 안정성 보장.

## 참고 소스

- [Structured Output 리서치](raw/notes/2026-04-09-structured-output.md)
- [Guide to Structured Outputs (Agenta)](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)
- [When to use function calling vs structured outputs (Vellum)](https://vellum.ai/blog/when-should-i-use-function-calling-structured-outputs-or-json-mode)
