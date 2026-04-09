# Structured Output 리서치 (2026-04-09)

## 출처
- https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms
- https://dev.to/pockit_tools/llm-structured-output-in-2026-stop-parsing-json-with-regex-and-do-it-right-34pk
- https://towardsdatascience.com/hands-on-with-anthropics-new-structured-output-capabilities/
- https://vellum.ai/blog/when-should-i-use-function-calling-structured-outputs-or-json-mode

## Structured Output이란?
LLM이 특정 스키마(보통 JSON)에 정확히 맞는 출력을 생성하도록 강제.
2026년 프로덕션 LLM 앱의 필수 기능.

## 왜 필요한가
- 파싱 실패 제거 (regex로 JSON 추출하는 끔찍한 시절 끝)
- 타입 안전성
- 후속 처리 신뢰성
- 에러 핸들링 단순화

## 3가지 접근법 비교

### 1. JSON Mode (Legacy)
- 출력이 valid JSON임만 보장
- 스키마는 따르지 않을 수 있음
- OpenAI 초창기 기능

### 2. Function Calling / Tool Use
- 도구 정의를 통해 스키마 강제
- Anthropic/Claude의 기본 접근법
- 도구 호출을 구조화된 출력으로 활용

### 3. Structured Outputs (Recommended)
- 스키마 100% 준수 보장
- 타입 안전성
- 2026 표준

## Provider별 구현

### OpenAI
```python
response = client.chat.completions.parse(
    model="gpt-5",
    messages=[...],
    response_format=MyPydanticModel
)
```

### Anthropic Claude
- Tool-based 접근
- 2026년 Structured Outputs 기능 추가
- 스키마 강제 보장

### 양쪽 공통
- JSON Schema 사용
- Pydantic 모델 지원 (Python)
- Zod 스키마 지원 (TypeScript)

## 언제 무엇을 쓸까

### Function Calling
- AI가 **어떤 도구를 쓸지 선택**해야 할 때
- 여러 가능한 액션이 있을 때
- 외부 시스템과 상호작용

### Structured Outputs
- **출력 포맷이 고정**되어 있을 때
- 데이터 추출 작업
- 분류 작업
- 순수 데이터 반환

### JSON Mode
- 사용하지 말 것
- Structured Outputs로 대체

## 실전 예시

### 데이터 추출
```python
class Person(BaseModel):
    name: str
    age: int
    email: str

response = client.parse(
    messages=[{"role": "user", "content": "Extract from: John, 30, john@example.com"}],
    response_format=Person
)
# response.parsed → Person(name="John", age=30, email="john@example.com")
```

### 분류
```python
class Classification(BaseModel):
    category: Literal["bug", "feature", "question"]
    priority: Literal["low", "medium", "high"]
    summary: str
```

### 복잡한 워크플로우
중첩 모델, enum, 리스트 모두 지원.
Pydantic의 모든 기능 활용 가능.

## Best Practices
1. **강제 가능한 제약 사용**: enum, Literal, 숫자 범위
2. **description 필드 활용**: 각 필드의 의미 설명
3. **required vs optional**: 명확히 구분
4. **nested models**: 복잡한 구조도 타입 안전
5. **검증 레이어**: 스키마 통과해도 비즈니스 로직 검증 별도
