---
title: "AI 뉴스 스카우팅 taxonomy"
category: patterns
tags: [ai-news, taxonomy, scouting, curation, agents]
created: 2026-05-25
updated: 2026-06-23
sources:
  - "raw/notes/2026-05-25-weekday-ai-software-watch.md"
related:
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
  - "[[patterns/solo-product-strategy]]"
status: draft
confidence: medium
---

# AI 뉴스 스카우팅 taxonomy

## 쉽게 읽기

해커뉴스 한 소스만 보는 대신, **AI 소프트웨어 업계의 중요한 변화가 어디서 발생하는지** 를 몇 개 레이어로 나눠 추적하는 분류안이다. 핵심은 하드웨어/투자 잡음을 줄이고, **실제로 오늘부터 써먹을 수 있는 모델·제품·코딩 에이전트·오픈모델 런타임·운영 레이어 변화** 에 집중하는 것이다.

## 한줄 설명

HN 중심의 일반 개발자 화제 추적을, **AI software work를 수행하는 모델·도구·에이전트·런타임 뉴스** 중심 구조로 재편하는 큐레이션 taxonomy.

## 왜 이 분류가 필요한가

기존 HN 중심 흐름은 다음을 잘 잡는다.

- 데모와 화제성
- 개발자 반응
- 논쟁거리
- 유명 글/쇼케이스

하지만 다음은 자주 놓친다.

- 공식 릴리스 노트
- API 계약 변화
- 가격/속도/컨텍스트 변화
- 실제 제품 기능 출시
- 오픈모델의 배포/추론 생태계 안착 신호
- 코딩 에이전트와 operator 툴의 운영상 변화

따라서 소스 추가보다 먼저, **어떤 종류의 뉴스를 봐야 하는가** 를 구조화할 필요가 있다.

## 상위 원칙

1. **모델 자체보다 사용 가능성** 을 우선 본다.
2. **하드웨어 뉴스는 제외** 하되, 소프트웨어 사용성에 직접 영향 주면 예외로 포함한다.
3. **공식 블로그 / docs / release notes / GitHub releases** 를 1차 소스로 우선한다.
4. **벤더별 섹션보다 카테고리별 섹션** 이 읽기 좋다.
5. 단순 성능 경쟁보다 **workflow impact** 를 본다.

## v1 taxonomy

### 1. Frontier 모델·제품

대상:
- Anthropic Claude / Opus / Sonnet
- OpenAI GPT / Codex / ChatGPT 제품군
- Google Gemini / AI Studio / Workspace 연동

주요 질문:
- 새 모델이 나왔는가?
- 가격 / 속도 / context window / multimodality가 어떻게 바뀌었는가?
- 앱/웹 제품에서 실제로 어떤 기능이 열렸는가?
- API나 tool-use 계약이 바뀌었는가?

주요 신호:
- 공식 blog
- release notes
- API docs / changelog
- system card / policy update

### 2. Open/free 모델 생태계

대상:
- Qwen
- Gemma
- Llama 계열
- Mistral / Mixtral
- Hugging Face Hub 기반 파생 모델

주요 질문:
- 새 모델이 강한가보다 **실제로 잘 굴러가는가**?
- 라이선스는 어떤가?
- 로컬 추론/양자화/GGUF 경로가 빨리 붙는가?
- 다국어·코드·추론·에이전트 적합성이 어떤가?

주요 신호:
- HF Blog / Hub trending / model cards
- Qwen / Gemma / Llama 공식 발표
- 커뮤니티 파생 릴리스

### 3. 코딩 에이전트 / AI coding software

대상:
- Claude Code
- Codex 계열
- GitHub Copilot 계열
- Cursor
- Aider / Continue / Cline / Cody / Replit 계열

주요 질문:
- IDE assistant인가, CLI operator인가, cloud agent인가?
- repo 읽기/수정/테스트/PR 생성 능력이 실제로 나아졌는가?
- benchmark보다 실사용 루프(test, debug, review) 품질이 어떤가?
- approval / sandbox / secrets 처리 모델은 어떤가?

주요 신호:
- 제품 블로그
- changelog
- GitHub releases
- maintainer demo / usage report

### 4. Agent engineering / operator software

대상:
- Hermes
- OpenHands / OpenDevin 류
- computer-use / browser-use / terminal-use operator
- self-hosted agent shells

주요 질문:
- 자율성이 실제 업무 단위로 확장되는가?
- browser / terminal / filesystem / git orchestration이 안정적인가?
- 로컬/원격 실행, sandbox, rollback, approval 설계가 어떤가?
- 폐쇄형 agent와 비교해 통제권·재현성이 어느 정도인가?

주요 신호:
- 공식 docs / repo / release notes
- examples / benchmark harness
- issue tracker에서 반복되는 문제

### 5. Runtime / orchestration / workflow layer

대상:
- LangGraph
- AutoGen
- CrewAI
- Temporal / Prefect / Dagster / Trigger.dev 류
- agent job runner / long-running workflow / event-driven runtime

주요 질문:
- 장기 실행과 실패 복구를 어떻게 다루는가?
- retry / checkpoint / audit trail / HITL이 있는가?
- 단순 체이닝이 아니라 실제 production workflow에 들어가는가?

주요 신호:
- release notes
- architecture post
- production pattern write-up

### 6. Evals / observability / safety controls

대상:
- SWE-bench / terminal/web task 계열 benchmark
- Langfuse / Braintrust / Helicone / W&B 류 observability
- policy / sandbox / permission / auditability tooling

주요 질문:
- benchmark가 현실성과 재현성을 갖는가?
- regression을 잡을 수 있는가?
- 에이전트 시스템을 관측하고 통제할 수 있는가?
- 엔터프라이즈 도입에 필요한 safety layer가 있는가?

주요 신호:
- benchmark release
- eval methodology post
- tracing / observability release
- security / approval model update

## 권장 편집 순서

주간 다이제스트에서는 아래 순서가 안정적이다.

1. **이번 주 가장 큰 제품/모델 변화**
2. **오픈모델 실사용성 변화**
3. **코딩 에이전트 업데이트**
4. **agent engineering / runtime 변화**
5. **eval / observability / policy 변화**

즉, 독자 입장에서는 “누가 최고인가”보다 **이번 주에 내 작업 방식이 어디서 바뀌는가** 순으로 읽게 한다.

## 제외 규칙

다음은 기본적으로 제외한다.

- 단순 GPU/칩 성능 뉴스
- 투자/인수 루머 중심 기사
- 제품과 연결되지 않은 일반 AI 규제 소식
- 데모는 강하지만 재현 경로가 없는 과장성 바이럴 포스트

다만 아래는 포함 가능하다.

- context window / latency / pricing에 직접 영향 주는 인프라 변경
- 실제 API 계약이나 제품 기능 변화로 이어지는 정책 변화
- 오픈모델 사용성에 직접 영향 주는 배포/런타임 발표

## 최소 추적 소스 세트

### Frontier
- Anthropic News / Docs
- OpenAI Blog / Platform docs / release notes
- Google DeepMind Blog / AI Studio / Workspace updates

### Open/free
- Hugging Face Blog / Hub / model cards
- Qwen blog
- Gemma official pages
- Llama/Mistral official release channels

### Coding / agent tools
- GitHub AI/ML blog
- Cursor / Replit / Sourcegraph / Aider / Continue / OpenHands release channels
- Hermes / operator tool repos and docs

### Runtime / evals
- LangGraph / AutoGen / CrewAI updates
- Temporal / Prefect / Trigger.dev engineering blogs
- Langfuse / Braintrust / Helicone / W&B release notes

## 운영 메모

이 taxonomy는 **벤더 카탈로그** 가 아니라 **변화가 발생하는 층위 지도**다. 따라서 나중에 실제 뉴스 수집 시스템을 만들 때도,

- 벤더명 기준 inbox
- 카테고리 기준 digest

를 분리하는 편이 좋다.

## 다음 단계

- 카테고리별 실제 소스 리스트 확정
- RSS / 블로그 / GitHub release 입력면 설계
- 금요일 주간 요약 포맷에 이 taxonomy 반영
- ai-native-mind 안에서 뉴스와 위키 인제스트의 연결 규칙 정의
