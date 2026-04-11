---
title: "Wiki Index"
category: meta
tags: [index, catalog]
created: 2026-04-06
updated: 2026-04-11
total_pages: 41
sources: []
status: active
---

# ai-native-mind Wiki Index

> 전체 41개 페이지 | 최종 업데이트: 2026-04-11 — 대부분 페이지에 **쉽게 읽기** 블록 있음

## 쉽게 읽기

링크만 모아 둔 **목차**다. 주제가 낯설면 해당 페이지로 들어가서 맨 위 **「쉽게 읽기」**부터 읽으면 된다.

## Concepts (15개)

### 성장 맵 & 철학
- [[concepts/ai-native-programmer]] — AI를 팀원으로 활용하여 1인이 팀 규모 결과를 내는 개발자, 성장 맵
- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴 (Anthropic 가이드 기반)
- [[concepts/ai-native-architecture]] — AI 전제로 소프트웨어를 설계하는 4대 원칙

### Engineering 3세대 진화
- [[concepts/prompt-engineering]] — LLM에게 효과적으로 지시하는 기술 (1세대)
- [[concepts/context-engineering]] — AI 정보 환경 설계, Prompt Engineering의 진화 (2세대)
- [[concepts/harness-engineering]] — AI 에이전트의 완전한 인프라 설계, Agent = Model + Harness (3세대)
- [[concepts/agentic-engineering]] — Vibe Coding의 성숙 진화, 구조화된 AI 감독 하의 개발

### 핵심 기술
- [[concepts/tool-use]] — LLM이 외부 함수/API를 호출하는 메커니즘
- [[concepts/mcp]] — Model Context Protocol, AI와 외부 도구를 연결하는 오픈 표준 ("AI의 USB-C")
- [[concepts/structured-output]] — LLM이 특정 스키마에 맞는 출력을 생성하도록 강제
- [[concepts/vector-db-embeddings]] — Vector DB와 임베딩, RAG의 기반 인프라
- [[concepts/ai-memory-systems]] — Short/Long-term 메모리, Episodic/Semantic/Procedural 모달리티
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
- [[concepts/rag]] — RAG(Retrieval-Augmented Generation), LLM의 외부 지식 검색·활용 패턴

### 운영·관측
- [[concepts/gen-ai-observability]] — OpenTelemetry GenAI·에이전트 시맨틱 컨벤션, 트레이스·표준 계측

### AI의 어두운 면
- [[concepts/context-rot-hallucination]] — Context Rot, Hallucination, Error 누적 등 5대 실패 패턴
- [[concepts/cognitive-debt]] — Technical Debt의 AI 버전, 개발자의 머릿속에 쌓이는 부채

## Tools (7개)

- [[tools/claude-code]] — Anthropic의 CLI 기반 AI 코딩 도구, 위키 유지보수 LLM
- [[tools/obsidian]] — 로컬 마크다운 기반 노트 앱, 위키 브라우저/IDE
- [[tools/bkit]] — PDCA 방법론 기반 AI Native Development OS (Claude Code 플러그인)
- [[tools/superpowers]] — TDD + subagent 병렬 실행 agentic skills 프레임워크 (Claude Code 플러그인)
- [[tools/codex-plugin]] — OpenAI의 크로스-모델 코드 리뷰 도구 (Claude Code 플러그인)
- [[tools/gstack]] — 역할 기반 AI 팀 시뮬레이션 스킬 팩 (Claude Code 플러그인)
- [[tools/vercel-workflow]] — Workflow DevKit, TypeScript 내구 워크플로·Webhook·에이전트 장기 실행

## Patterns (13개)

### LLM-Wiki & 메타 패턴
- [[patterns/llm-wiki]] — LLM이 유지보수하는 개인 지식 위키 패턴 (Tobi Lütke)
- [[patterns/bkit-superpowers-combo]] — bkit PDCA + Superpowers TDD 조합으로 단계 건너뛰기 방지

### AI 개발 실전 패턴
- [[patterns/agent-planning-to-implementation]] — 기획·스펙·태스크→코드까지 에이전트 파이프라인과 HITL 게이트
- [[patterns/agent-server-harness]] — HTTP·큐·SSE 뒤의 에이전트 백엔드·상태·보안 하네스
- [[patterns/owasp-llm-typescript-mitigations]] — OWASP LLM Top 10 중 LLM01/06/10을 TS·AI SDK로 완화하는 패턴
- [[patterns/claude-md-guide]] — CLAUDE.md 작성 가이드, Harness Engineering의 실전 구현체
- [[patterns/subagents-delegation]] — Claude Code Subagents 위임 패턴 (Explore-Plan-Execute)
- [[patterns/prompt-caching]] — 반복 prompt prefix 캐싱으로 비용 90% 절감
- [[patterns/ai-code-review]] — 1인 개발자를 위한 AI 기반 코드 리뷰 워크플로우
- [[patterns/git-ai-workflow]] — Claude Code의 Git 통합, 커밋/PR/브랜치 자동화
- [[patterns/ai-cost-management]] — Model routing + caching + batch로 95% 비용 절감

### 제품 전략 & 안티패턴
- [[patterns/solo-product-strategy]] — 1인 개발자 제품 전략, 마이크로 SaaS 기획·출시
- [[patterns/vibe-coding-antipatterns]] — Vibe Coding의 7대 안티패턴과 회피법

## Journal (1개)

- [[journal/2026-04-12]] — Fowler Humans/Agents·on the loop·OWASP×TS 정리 일지

## Comparisons (5개)

- [[comparisons/rag-vs-llm-wiki]] — RAG와 LLM-Wiki 방식 비교: 재발견 vs 축적
- [[comparisons/claude-code-plugins]] — Claude Code 플러그인 4종 비교 + 조합 전략
- [[comparisons/ai-coding-tools]] — AI 코딩 도구 비교: Claude Code vs Cursor vs Copilot vs Windsurf
- [[comparisons/agent-frameworks]] — AI Agent 프레임워크 비교: LangGraph vs CrewAI vs OpenAI SDK
- [[comparisons/fine-tuning-vs-prompting]] — Fine-tuning vs Prompting 결정 가이드, 하이브리드 패턴

## Meta

- [[wiki/overview]] — 위키 전체 종합 현황
- [[wiki/log]] — 시간순 작업 기록
