---
title: "Tool Use (Function Calling)"
category: concepts
tags: [tool-use, function-calling, llm, api]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-tool-use-function-calling.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/structured-output]]"
status: active
confidence: high
---

# Tool Use (Function Calling)

## 쉽게 읽기

AI가 글만 쓰는 게 아니라, “이 함수 실행해 줘”라고 **프로그램에 주문**하는 방식이다. 날씨 API, DB 조회, 파일 읽기처럼 **정해진 이름·인자**만 허용하면 안전하게 쓸 수 있다.

| 용어 | 풀이 |
|------|------|
| **Function calling** | 호출 가능한 함수 목록을 주고 **이름 고르기** |
| **스키마** | 함수 이름, 인자 타입을 적은 **설명서** |
| **MCP** | 도구 연결을 **표준 포트**로 통일한 프로토콜 |

## 한줄 정의

LLM이 외부 함수/API를 호출하는 메커니즘. 텍스트 생성을 넘어 실제 세계와 상호작용.

## 핵심 내용

### 작동 원리

```
1. 개발자: 도구 정의 (name, description, input schema)
2. 사용자: 요청
3. Claude: 도구 필요 판단 + tool_use 블록 반환
4. 앱: 도구 실행 → tool_result 블록으로 응답
5. Claude: 결과 기반 최종 응답 생성
```

### [[concepts/mcp|MCP]]와의 관계

MCP는 Tool Use의 **표준화된 프로토콜**. 커스텀 도구 정의 대신 MCP 서버로 제공하면 재사용 가능.

## Best Practices

### 1. 명확한 에러 처리
```json
{
  "type": "tool_result",
  "tool_use_id": "toolu_xxx",
  "content": "File not found: /path/to/file",
  "is_error": true
}
```
Claude가 왜 실패했는지 이해하고 재시도 가능.

### 2. 입력 검증
실행 전 파라미터가 스키마와 맞는지 검증. 잘못된 API 호출 방지.

### 3. 결과 포맷팅
LLM이 파싱하기 쉬운 구조화 JSON으로 반환.

### 4. Strict Mode
`strict: true`로 tool call이 스키마를 정확히 따르도록 강제.

## 고급 기술

### Programmatic Tool Calling
Claude가 **코드 실행 컨테이너 안에서** 도구를 직접 호출:
- 매 도구 호출마다 모델 라운드트립 불필요
- 멀티툴 워크플로우 지연 감소
- 토큰 소비 감소

### Tool Search
수천 개 도구에 접근하되 컨텍스트 윈도우 소비 없음. 검색으로 필요한 도구만 동적 로드.

## 실전 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| **단일 도구** | 단순 작업 | 날씨, 계산기 |
| **도구 체인** | A 결과 → B 입력 | DB 쿼리 → 이메일 발송 |
| **병렬 도구** | 독립 도구 동시 호출 | 여러 API 동시 조회 |
| **조건부 도구** | 상황별 도구 선택 | 분류 → 해당 도구 |

## 관련 개념

- [[concepts/mcp]] — Tool Use의 표준화
- [[concepts/structured-output]] — Tool Use 기반 구조화 출력
- [[concepts/ai-orchestration]] — Tool Use 기반 오케스트레이션
- [[concepts/harness-engineering]] — Tool이 Harness의 핵심 요소

## 참고 소스

- [Tool Use 리서치](raw/notes/2026-04-09-tool-use-function-calling.md)
- [Tool use with Claude (Anthropic)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- [Advanced Tool Use (Anthropic)](https://www.anthropic.com/engineering/advanced-tool-use)
