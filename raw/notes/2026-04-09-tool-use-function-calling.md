# Tool Use / Function Calling 리서치 (2026-04-09)

## 출처
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
- https://www.anthropic.com/engineering/advanced-tool-use
- https://composio.dev/content/claude-function-calling-tools
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling

## Tool Use란?
LLM이 외부 함수/API를 호출하는 메커니즘. 텍스트 생성을 넘어 실제 세계와 상호작용.

## 작동 원리
1. 개발자가 도구 정의 (name, description, input schema)
2. 사용자 요청 → Claude가 도구 필요 판단
3. Claude가 구조화된 tool_use 블록 반환
4. 앱이 도구 실행 → 결과를 tool_result 블록으로 반환
5. Claude가 결과 기반 최종 응답 생성

## Best Practices

### 1. 명확한 에러 처리
```json
{
  "type": "tool_result",
  "tool_use_id": "...",
  "content": "File not found: /path/to/file",
  "is_error": true
}
```
Claude가 왜 실패했는지 이해하고 재시도 가능.

### 2. 입력 검증
Claude의 파라미터가 스키마와 맞는지 실행 전 검증.
잘못된 API 호출, 예기치 않은 동작 방지.

### 3. 결과 포맷팅
LLM이 파싱하기 쉬운 형태로 결과 반환 (구조화 JSON 선호).

### 4. Strict Mode
`strict: true` 옵션으로 tool call이 스키마를 정확히 따르도록 강제.

## 고급 기술

### Programmatic Tool Calling
Claude가 **코드 실행 컨테이너 안에서** 도구를 직접 호출하는 코드를 작성.
- 매 도구 호출마다 모델 라운드트립 불필요
- 멀티툴 워크플로우에서 지연 감소
- 토큰 소비 감소

### Tool Search
Claude가 수천 개 도구에 접근 가능하되 컨텍스트 윈도우 소비 없음.
검색으로 필요한 도구만 동적으로 로드.

## MCP와의 관계
MCP는 Tool Use의 **표준화된 프로토콜**.
커스텀 도구 정의 대신 MCP 서버로 도구를 제공하면 재사용 가능.

## 실전 패턴
- **단일 도구**: 단순 작업 (날씨, 계산기)
- **도구 체인**: A 결과를 B의 입력으로
- **병렬 도구**: 독립적 도구 동시 호출
- **조건부 도구**: 상황에 따라 다른 도구 선택
