---
title: "Wiki Overview"
category: meta
tags: [overview, summary]
created: 2026-04-06
updated: 2026-04-12
sources: []
status: active
---

# ai-native-mind Wiki Overview

> AI 네이티브 코딩 프로그래머로 성장하기 위한 개인 지식 위키.

## 쉽게 읽기

이 문서는 위키 **목차 겸 학습 지도**다. 아래 링크들은 "다 읽어야 하는 숙제 목록"이 아니라, 현재 필요에 맞춰 꺼내 보는 **참조 지도**다. 어려운 글은 각 페이지 맨 위 **「쉽게 읽기」**부터 보면 된다.

- 월드맵 허브: [[wiki/campaign-map|Campaign Map]]
- 전체 도감: [[wiki/index|Index]]
- 진행 기록: [[wiki/log|Log]]

## 시작 방법 (5분)

1. **캠페인 모드 선언**: "이번 주는 Chapter N까지"만 정한다.
2. **오늘 1챕터만 플레이**: 아래 챕터맵에서 해당 링크만 따라간다.
3. **클리어 증거 저장**: 챕터별 "클리어 조건"을 충족한 산출물을 남긴다.
4. **체크포인트 기록**: `wiki/journal/`에 3줄(배운 점/적용/막힌 점) 기록한다.

## 현재 상태

- **총 페이지**: 48개
- **카테고리**: concepts(16), tools(7), patterns(18), journal(1), comparisons(5)
- **시작일**: 2026-04-06
- **소스**: raw 노트·papers 누적 (커리큘럼 메타: `raw/notes/2026-04-12-practice-curriculum.md` 포함)

## 캠페인 모드: Chapter Clear 로드맵

전체 지도를 한 눈에 보려면 [[wiki/campaign-map|Campaign Map]]을 기준 허브로 사용한다.

### Chapter 0 - 튜토리얼: 지도 읽기
- 읽기: [[patterns/llm-wiki|LLM-Wiki 패턴]], [[tools/obsidian|Obsidian]], [[tools/claude-code|Claude Code]]
- 클리어 조건: 내 프로젝트에서 ingest/query/lint 흐름을 3줄로 설명할 수 있다.
- 보상(산출물): 개인용 "위키 사용 규칙" 메모 1개

### Chapter 1 - 세계관 이해: AI 네이티브 성장 맵
- 읽기: [[concepts/ai-native-programmer|AI 네이티브 프로그래머]], [[concepts/ai-native-architecture|AI 네이티브 아키텍처]]
- 클리어 조건: "왜 AI 네이티브 방식이 필요한가"를 내 말로 5문장 정리
- 보상(산출물): 내 개발 방식의 Before/After 비교 노트

### Chapter 2 - 전투 기본기: Context vs Prompt
- 읽기: [[concepts/context-engineering|Context Engineering]], [[concepts/prompt-engineering|Prompt Engineering]], [[concepts/context-vs-prompt-practice|실습]]
- 클리어 조건: 현재 작업을 prompt 문제/컨텍스트 문제로 구분할 수 있다.
- 보상(산출물): "내 컨텍스트 소스 목록" 1개

### Chapter 3 - 파티 운영: Orchestration
- 읽기: [[concepts/ai-orchestration|AI 오케스트레이션]], [[patterns/orchestration-patterns-practice|실습 패턴]]
- 클리어 조건: 내 작업을 6대 패턴 중 하나로 분류하고 이유를 말할 수 있다.
- 보상(산출물): 작업 흐름 다이어그램(간단 텍스트로도 가능)

### Chapter 4 - 제작소: 기획에서 구현까지
- 읽기: [[patterns/agent-planning-to-implementation|기획→구현 패턴]], [[patterns/subagents-delegation|Subagents 위임]]
- 클리어 조건: 작은 기능 1개를 기획->스펙->구현->검증 단계로 쪼갤 수 있다.
- 보상(산출물): 기능 1개용 체크리스트

### Chapter 5 - 던전 안전장치: Harness + Security
- 읽기: [[patterns/agent-server-harness|서버 하네스]], [[patterns/safe-tool-calling-sandbox|안전한 Tool Calling]], [[patterns/owasp-llm-typescript-mitigations|OWASP x TS]]
- 클리어 조건: 권한/검증/로깅/재시도 중 빠진 안전장치를 찾을 수 있다.
- 보상(산출물): 보안 체크리스트 v1

### Chapter 6 - 보스전: 신뢰 가능한 운영
- 읽기: [[concepts/llm-evaluation|LLM Evaluation]], [[concepts/gen-ai-observability|GenAI Observability]]
- 클리어 조건: 품질 지표 2개 + 관측 지표 2개를 정의한다.
- 보상(산출물): 운영 대시보드 초안(지표 이름만 있어도 됨)

### Chapter 7 - 엔드게임: 나만의 플레이북
- 읽기: [[patterns/git-ai-workflow|Git AI Workflow]], [[patterns/ai-code-review|AI 코드 리뷰]], [[patterns/ai-cost-management|비용 관리]]
- 클리어 조건: 내 반복 작업 1개를 자동화/표준화한다.
- 보상(산출물): "내 AI 개발 플레이북" 1페이지

## 빠른 시작 루트 (취향별)

- **스토리 중심(입문)**: Chapter 0 -> 1 -> 2
- **실전 중심(구현)**: Chapter 2 -> 3 -> 4 -> 5
- **운영 중심(품질)**: Chapter 5 -> 6 -> 7

## 주요 주제

### 핵심 프레임워크: AI 네이티브 프로그래머 성장 맵
[[concepts/ai-native-programmer|AI 네이티브 프로그래머]]로 성장하기 위한 3대 역량:
1. [[concepts/ai-orchestration|AI 오케스트레이션]] — AI를 어떻게 부리는가 (6대 패턴)
2. [[concepts/ai-native-architecture|AI 네이티브 아키텍처]] — AI 전제로 어떻게 설계하는가 (4대 원칙)
3. 판단력 — 뭘 만들 것인가 (AI가 대체 못하는 영역)

### 핵심 개념
- [[concepts/context-engineering|Context Engineering]] — Prompt Engineering의 진화, AI 정보 환경 설계
- [[concepts/rag|RAG]] — 기존 지식 검색 방식, LLM-Wiki와 비교

### 핵심 패턴
이 위키 자체가 [[patterns/llm-wiki|LLM-Wiki 패턴]]을 적용한 것이다.

- [[patterns/agent-planning-to-implementation|에이전트 기획→구현]] — 문서 단계 오케스트레이션과 인간 게이트
- [[patterns/agent-server-harness|에이전트 서버 하네스]] — 프로덕션 백엔드 배치·상태·스트림

### 도구 스택
- [[tools/obsidian|Obsidian]] — 위키 브라우저/IDE
- [[tools/claude-code|Claude Code]] — 위키 유지보수 LLM
- [[tools/vercel-workflow|Vercel Workflow]] — 에이전트·장기 잡용 내구 워크플로 (WDK)

### Claude Code 플러그인 생태계
AI 네이티브 개발을 구조화하는 4대 플러그인 ([[comparisons/claude-code-plugins|비교 분석]]):
- [[tools/bkit|bkit]] — PDCA 기반 개발 OS (전 단계 커버)
- [[tools/superpowers|Superpowers]] — TDD + subagent 병렬 실행
- [[tools/codex-plugin|Codex Plugin]] — 크로스-모델 리뷰 (편향 회피)
- [[tools/gstack|gstack]] — 역할 기반 팀 시뮬레이션

## 7일 챕터 클리어 플랜

- **Day 1**: Chapter 0 클리어 (튜토리얼 + 위키 규칙 메모 작성)
- **Day 2**: Chapter 1 클리어 (AI 네이티브 관점 Before/After 정리)
- **Day 3**: Chapter 2 클리어 (내 컨텍스트 소스 목록 작성)
- **Day 4**: Chapter 3 클리어 (내 작업을 오케스트레이션 패턴으로 분류)
- **Day 5**: Chapter 4 클리어 (작은 기능 1개를 단계별로 분해)
- **Day 6**: Chapter 5 클리어 (보안 체크리스트 v1 작성)
- **Day 7**: Chapter 6 또는 7 클리어 + 주간 회고 (`wiki/journal/`)

## 체크포인트 규칙 (중요)

- **한 번에 1챕터**: 같은 날 여러 챕터를 억지로 밀지 않는다.
- **읽기보다 산출물**: "무엇을 읽었나"보다 "무엇을 만들었나"를 남긴다.
- **막히면 하위 챕터로**: 어려우면 이전 챕터 링크로 돌아가 기초를 다시 본다.
- **완벽주의 금지**: v1 문서/체크리스트를 먼저 만들고 다음 회차에 개선한다.

## 최근 활동

- **2026-04-11**: **에이전트 커리큘럼 프랙티스** — `concepts/context-vs-prompt-practice`, `patterns/preventing-context-rot`, `harness-building-blocks`, `safe-tool-calling-sandbox`, `orchestration-patterns-practice`, `my-first-agentic-service` + `raw/notes/2026-04-12-practice-curriculum.md`, `index`·`overview` 반영
- **2026-04-12**: **일괄 보강** — `wiki/journal/2026-04-12`(Fowler on the loop), `patterns/owasp-llm-typescript-mitigations`, `raw/papers/owasp-genai-2025-llm-top-10`, `examples/agent-safety-sketch/README`
- **2026-04-12**: **보안 × TypeScript** 큐레이션 — `raw/notes/2026-04-12-security-typescript-corpus.md` (OWASP LLM Top 10, MCP 인가, AI SDK·Zod·미들웨어)
- **2026-04-12**: **Harness Engineering 심화** — 위키에 루프·인간 역할·Harnessability 절 추가, Fowler/Anthropic 심화 링크는 `raw/notes/2026-04-12-harness-engineering-deep-dive.md`
- **2026-04-12**: AI 네이티브 학습용 **외부 자료 큐레이션** (`raw/notes/2026-04-12-ai-native-learning-corpus.md` — Anthropic·OpenAI·HF·MCP·OTel 등 링크 + 권장 읽기 순서)
- **2026-04-11**: **AI SDK `Agent`/`streamText` → WDK `DurableAgent`** 연동 리서치 (`useworkflow.dev` 공식 가이드 → `vercel-workflow` 도구 페이지 보강)
- **2026-04-11**: Vercel Workflow(WDK)·OpenTelemetry GenAI 관측 **리서치 반영** (`tools/vercel-workflow`, `concepts/gen-ai-observability`, `agent-server-harness` 링크)
- **2026-04-11**: 오케스트레이션·하네스 **서버·구현** 관점 보강 + 패턴 2종 (`agent-planning-to-implementation`, `agent-server-harness`)
- **2026-04-09**: 14개 주제 대규모 리서치 — 실전 기술, 개념 심화, AI 어두운 면, 1인 개발자 실무
- **2026-04-09**: 5개 주제 리서치 — CLAUDE.md, AI 도구 비교, MCP, Agent 프레임워크, 제품 전략
- **2026-04-09**: 3세대 Engineering 진화 (Prompt→Context→Harness)
- **2026-04-09**: Claude Code 플러그인 4종 리서치
- **2026-04-09**: AI 네이티브 성장 맵 리서치
- **2026-04-06**: 위키 초기 설정 + 첫 Ingest (LLM-Wiki Pattern)
