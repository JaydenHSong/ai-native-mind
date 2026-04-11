---
title: "Wiki Overview"
category: meta
tags: [overview, summary]
created: 2026-04-06
updated: 2026-04-11
sources: []
status: active
---

# ai-native-mind Wiki Overview

> AI 네이티브 코딩 프로그래머로 성장하기 위한 개인 지식 위키.

## 쉽게 읽기

이 문서는 위키 **목차 겸 상태판**이다. 아래 링크들은 “무엇을 배웠는지”가 아니라 **나중에 다시 찾을 주제 이름**이다. 어려운 글은 각 페이지 맨 위 **「쉽게 읽기」**에서 비유와 용어부터 보면 된다.

## 현재 상태

- **총 페이지**: 47개
- **카테고리**: concepts(16), tools(7), patterns(18), journal(1), comparisons(5)
- **시작일**: 2026-04-06
- **소스**: raw 노트·papers 누적 (커리큘럼 메타: `raw/notes/2026-04-12-practice-curriculum.md` 포함)

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
