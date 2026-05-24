---
title: "Tool Use (Function Calling)"
category: concepts
tags: [tool-use, function-calling, llm, api, runtime-interface, skills, strict-schema, formal-skill, skill-state, policy-hooks, mcp-tooling, skill-first-api]
created: 2026-04-09
updated: 2026-05-23
sources:
  - "raw/notes/2026-04-09-tool-use-function-calling.md"
  - "raw/articles/2026-05-18-skillsmith-boundary-guided-runtime-interfaces.md"
  - "raw/articles/2026-05-21-formal-skill-programmable-runtime-skills.md"
  - "raw/articles/2026-05-23-harnessapi-skill-first-unified-mcp-http.md"
related:
  - "[[concepts/mcp]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/structured-output]]"
  - "[[concepts/agent-supply-chain-security]]"
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

## 2026-05-18 보강 — SkillSmith: skill을 문서가 아니라 runtime interface로 보기

[SkillSmith](https://arxiv.org/abs/2605.15215) (2026-05-12)는 기존 skill framework의 기본 가정을 정면으로 건드린다. 보통 skill은 runtime task와 매칭되면 **긴 설명서/지침** 형태로 reasoning loop 안에 통째로 주입된다. 논문은 이 방식이 두 가지 낭비를 만든다고 본다.

1. **irrelevant context injection** — 지금 task에 필요 없는 skill 내용까지 프롬프트에 들어감
2. **repeated skill-specific reasoning and planning** — 같은 skill을 호출할 때마다 해석과 계획을 다시 함

### skill을 offline에 컴파일하기

SkillSmith의 핵심은 **boundary-first compiler-runtime framework** 다.

- skill package를 **offline** 에서 분석
- skill 안의 **fine-grained operational boundaries** 를 추출
- 이를 **minimal executable interfaces** 로 컴파일
- runtime에서는 필요한 부분만 동적으로 접근·실행

즉 tool/skill을 "읽는 문서"가 아니라 **짧은 실행 인터페이스** 로 바꾸자는 주장이다. 이 관점은 본 페이지의 `name + description + input schema` 정의를 한 단계 더 밀어, **문서형 skill 자체를 schema-like executable boundary로 압축**하자는 제안으로 읽을 수 있다.

### 왜 중요한가

SkillsBench에서 보고된 절감 폭은 꽤 크다.

- **solve-stage token usage -57.44%**
- **thinking iterations -42.99%**
- **solve time -50.57% (2.02x faster)**
- **token-proportional cost -57.44%**

→ tool use 문제는 "도구를 몇 개 붙였나"만이 아니라, **그 도구/skill을 runtime에 어떤 모양으로 싣는가**의 문제다.

### 1인 개발자에게 바로 번역하면

1. `SKILL.md` 나 긴 tool guide는 매 호출마다 통째로 싣지 말고, **짧은 호출 규약**으로 압축하는 편이 낫다.
2. 강한 모델은 매번 실행에 쓰기보다, **skill compiler** 로 한 번 써서 artifact를 만들고 이후엔 저렴한 모델이 재사용하게 할 수 있다.
3. tool schema를 쓸 때도 description을 장문 prose로 늘리기보다, **행동 경계(boundary)** 와 입력·출력 계약을 더 먼저 명시하는 편이 좋다.

## 2026-05-21 보강 — Formal Skill: schema 다음은 stateful capability object다

[Formal Skill](https://arxiv.org/abs/2605.19604) (2026-05-19)는 이 페이지의 기본 단위를 다시 묻는다. 지금까지 Tool Use를 `name + description + input schema` 중심으로 설명했다면, 이 논문은 그 단위가 장기 작업에는 너무 작다고 본다.

### 기존 구도: 문서형 skill vs 함수형 tool

논문이 겨냥하는 현재 생태계는 대략 두 극단이다.

- **Markdown skill / instruction pack** — 절차는 풍부하지만 길고 비형식적이다
- **function calling / MCP tool** — action은 구조화하지만 workflow state와 policy는 바깥에 남는다

저자들의 주장은 이 둘 사이에 **stateful, enforceable capability layer** 가 필요하다는 것이다.

### Formal Skill의 구성

Formal Skill은 다음 조합으로 정의된다.

- **JSON metadata**
- **action schema**
- **reliable Python executor**
- **hook-governed control logic**
- **skill-local runtime state**
- **routing support**

즉 tool은 단발 함수가 아니라, **상태와 훅과 실행기를 가진 작은 런타임 객체** 로 승격된다.

### SkillSmith와의 차이

- [[concepts/tool-use]]의 2026-05-18 보강(SkillSmith) = 긴 skill 문서를 **compiled runtime interface** 로 압축
- 오늘 Formal Skill = 그 interface를 다시 **stateful executable skill object** 로 확장

둘을 합치면 흐름은 이렇게 된다.

1. 문서형 skill을 boundary 중심으로 압축한다
2. 그 경계를 schema로 만든다
3. schema 위에 **state / hook / executor** 를 붙여 재사용 capability로 만든다

### 왜 중요한가

논문은 FairyClaw runtime으로 이를 구현했고, Harness-Bench에서 **competitive score + substantially fewer tokens** 를 보고한다. 수치보다 더 중요한 메시지는 이것이다.

> 절차를 자연어로 반복 설명하는 대신, 절차 자체를 **실행 가능한 상태 기계** 로 올려라.

### 1인 개발자에게 바로 번역하면

1. 반복 절차는 길게 설명하는 `SKILL.md` 대신 **state field + hook + completion condition** 으로 표현하는 편이 낫다.
2. tool 정의 시 입력 스키마만 만들지 말고, **언제 종료인지 / 실패 시 어떤 훅을 태울지** 까지 capability 안에 넣는다.
3. MCP는 transport 표준이고, Formal Skill은 그 위의 **작업 단위 abstraction** 으로 볼 수 있다.

## 2026-05-23 보강 — HarnessAPI: tool은 schema를 넘어 deployable dual-surface capability다

[HarnessAPI](https://arxiv.org/abs/2605.22733) (2026-05-21)는 이 페이지의 기본 정의를 한 단계 더 운영 쪽으로 민다. 지금까지 여기서는 Tool Use를 `name + description + input schema` 중심으로 설명했지만, 실제 서비스에서는 같은 capability가 보통 **두 surface** 를 동시에 가져야 한다.

- 사람·CI가 호출하는 **HTTP API**
- agent runtime이 호출하는 **MCP tool**

문제는 둘이 business logic는 같아도 routing / validation / serialization / streaming / schema maintenance를 따로 유지하면서 drift가 나기 쉽다는 점이다.

### skill-first single source of truth

HarnessAPI의 주장은 간단하다.

> **typed skill folder 하나를 단일 source of truth로 두고, 여기서 HTTP와 MCP surface를 같이 파생하라.**

논문 기준으로 한 skill artifact에서 다음이 동시에 나온다.

1. **SSE streaming endpoint**
2. **OpenAPI / Swagger UI**
3. **zero-configuration MCP tool**

즉 tool을 문서형 description이 아니라 **배포 가능한 capability object** 로 보는 관점이다.

### 왜 중요한가

이 framing은 최근 이 페이지에 들어온 두 source와 자연스럽게 이어진다.

- [[concepts/tool-use]]의 2026-05-18 보강(SkillSmith) = 문서형 skill을 **minimal runtime interface** 로 압축
- 2026-05-21 보강(Formal Skill) = 그 interface 위에 **state / hook / executor** 를 올림
- 오늘 HarnessAPI = 같은 capability를 **HTTP + MCP deployment surface** 로 동시에 노출

세 흐름을 이어 읽으면, tool/skill abstraction은 이렇게 성숙한다.

1. 긴 설명문을 줄인다
2. 실행 경계를 schema로 만든다
3. state와 hook를 붙인다
4. 그 capability를 여러 transport에 **중복 없이 배포** 한다

### 정량 신호

논문은 6개 representative skill 기준으로, 수작업 dual-stack(FastAPI + FastMCP) 대비 **framework-facing boilerplate 74% 감소** 를 보고한다.

수치보다 중요한 메시지는 이것이다.

> MCP와 HTTP를 따로 설계할수록 tool contract drift가 생기고, capability를 한 artifact에서 파생할수록 하네스 유지비가 줄어든다.

### 1인 개발자에게 바로 번역하면

1. 기존 FastAPI endpoint가 있다면, MCP 도입을 "새 서버 하나 더 만들기"가 아니라 **같은 skill contract의 추가 surface** 로 보는 편이 낫다.
2. tool 설명을 prose로 길게 늘리기보다 **typed schema + shared handler** 를 중심에 둔다.
3. agent 전용 인터페이스와 사람 전용 인터페이스가 따로 진화하지 않게, **single-source capability registry** 를 먼저 설계한다.

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
