---
title: "Wiki Log"
category: meta
tags: [log, history]
created: 2026-04-06
updated: 2026-04-09
sources: []
status: active
---

# ai-native-mind Wiki Log

> 시간순 작업 기록. `grep "^## \[" wiki/log.md`로 파싱 가능.

## [2026-04-09] ingest | 14개 주제 대규모 리서치 (실전 기술·개념·어두운 면·실무)

- **Sources**: `raw/notes/2026-04-09-subagents-delegation.md`, `raw/notes/2026-04-09-tool-use-function-calling.md`, `raw/notes/2026-04-09-prompt-caching.md`, `raw/notes/2026-04-09-llm-evaluation.md`, `raw/notes/2026-04-09-vector-db-embeddings.md`, `raw/notes/2026-04-09-structured-output.md`, `raw/notes/2026-04-09-ai-memory-systems.md`, `raw/notes/2026-04-09-fine-tuning-vs-prompting.md`, `raw/notes/2026-04-09-llm-failure-modes.md`, `raw/notes/2026-04-09-cognitive-debt-deep.md`, `raw/notes/2026-04-09-vibe-coding-antipatterns.md`, `raw/notes/2026-04-09-ai-code-review.md`, `raw/notes/2026-04-09-git-ai-workflow.md`, `raw/notes/2026-04-09-ai-cost-management.md`
- **Pages created**: `patterns/subagents-delegation.md`, `concepts/tool-use.md`, `patterns/prompt-caching.md`, `concepts/llm-evaluation.md`, `concepts/vector-db-embeddings.md`, `concepts/structured-output.md`, `concepts/ai-memory-systems.md`, `comparisons/fine-tuning-vs-prompting.md`, `concepts/context-rot-hallucination.md`, `concepts/cognitive-debt.md`, `patterns/vibe-coding-antipatterns.md`, `patterns/ai-code-review.md`, `patterns/git-ai-workflow.md`, `patterns/ai-cost-management.md`
- **Pages updated**: `index.md`, `overview.md`, `CLAUDE.md`
- **Notes**: 4개 배치로 리서치 진행. Batch 1(실전기술: subagents/tool-use/caching/evals), Batch 2(개념심화: vector-db/structured-output/memory/fine-tuning), Batch 3(어두운면: failure-modes/cognitive-debt/vibe-antipatterns), Batch 4(실무: code-review/git-workflow/cost-management). 14개 원본 소스 + 14개 위키 페이지 생성. 위키 18 → 32 페이지로 성장.

## [2026-04-09] ingest | 5개 주제 일괄 리서치 (도구·프레임워크·전략)

- **Sources**: `raw/notes/2026-04-09-claude-md-best-practices.md`, `raw/notes/2026-04-09-ai-coding-tools-comparison.md`, `raw/notes/2026-04-09-mcp-research.md`, `raw/notes/2026-04-09-agent-frameworks-comparison.md`, `raw/notes/2026-04-09-solo-product-strategy.md`
- **Pages created**: `patterns/claude-md-guide.md`, `comparisons/ai-coding-tools.md`, `concepts/mcp.md`, `comparisons/agent-frameworks.md`, `patterns/solo-product-strategy.md`
- **Pages updated**: `index.md`, `log.md`
- **Notes**: CLAUDE.md 작성법(10섹션+계층구조), AI 코딩 도구 4종 비교(가격·컨텍스트·조합전략), MCP 프로토콜(3대 프리미티브+Linux Foundation 이관), Agent 프레임워크 3종 비교(LangGraph/CrewAI/OpenAI SDK), 1인 개발자 제품 전략(Rob Walling 5기준+유망니치).

## [2026-04-09] create | bkit + Superpowers 조합 패턴

- **Pages created**: `patterns/bkit-superpowers-combo.md`
- **Pages updated**: `index.md`
- **Notes**: PDCA 단계 건너뛰기 문제를 해결하기 위한 bkit + Superpowers 조합 패턴 정리. bkit이 프로세스 뼈대, Superpowers가 실행 규율 담당. 4단계 워크플로우, 역할 분담, 적용 기준 포함.

## [2026-04-09] ingest | AI Engineering 패러다임 3세대 진화 리서치

- **Sources**: `raw/notes/2026-04-09-engineering-paradigms-research.md`
- **Pages created**: `concepts/harness-engineering.md`, `concepts/prompt-engineering.md`, `concepts/agentic-engineering.md`
- **Pages updated**: `concepts/context-engineering.md`, `index.md`, `overview.md`
- **Notes**: Prompt → Context → Harness 3세대 진화 정리. Martin Fowler의 Harness 3요소(Guides/Sensors/Controls), Claude Code 소스코드 유출 사건으로 밝혀진 실제 Harness 구조, Vibe Coding → Agentic Engineering 진화, Cognitive Debt 새 용어.

## [2026-04-09] ingest | Claude Code 플러그인 4종 리서치

- **Sources**: 웹 리서치 (GitHub, 기술 블로그, 커뮤니티)
- **Pages created**: `tools/bkit.md`, `tools/superpowers.md`, `tools/codex-plugin.md`, `tools/gstack.md`, `comparisons/claude-code-plugins.md`
- **Pages updated**: `index.md`, `overview.md`, `log.md`
- **Notes**: Claude Code 플러그인 생태계 4종(bkit, Superpowers, Codex Plugin, gstack) 심층 조사. 각 도구의 핵심 철학, 기능, AI 오케스트레이션 패턴 매핑, PDCA 단계별 조합 전략 정리. 기존 concepts/ai-orchestration, concepts/context-engineering과 교차참조.

## [2026-04-09] ingest | AI 네이티브 성장 맵 리서치 (3개 주제)

- **Sources**: `raw/notes/2026-04-09-ai-orchestration-research.md`, `raw/notes/2026-04-09-ai-native-architecture-research.md`, `raw/notes/2026-04-09-solo-dev-ai-research.md`
- **Pages created**: `concepts/ai-native-programmer.md`, `concepts/ai-orchestration.md`, `concepts/ai-native-architecture.md`, `concepts/context-engineering.md`
- **Pages updated**: `index.md`, `overview.md`, `tools/claude-code.md`
- **Notes**: 웹 리서치 기반. AI 오케스트레이션 6대 패턴(Anthropic), AI 네이티브 아키텍처 4대 원칙, 1인 개발자 성공 사례, Context Engineering 개념 정리. 기존 RAG 페이지와 교차참조.

## [2026-04-06] ingest | LLM-Wiki Pattern (Tobi Lütke)

- **Source**: `raw/articles/2026-04-04-llm-wiki-pattern.md`
- **Pages created**: `patterns/llm-wiki.md`, `concepts/rag.md`, `tools/obsidian.md`, `tools/claude-code.md`, `comparisons/rag-vs-llm-wiki.md`
- **Pages updated**: `index.md`, `overview.md`
- **Notes**: 첫 번째 Ingest. LLM-Wiki 패턴 자체를 위키에 기록. 3-Layer 아키텍처, Ingest/Query/Lint 워크플로우, RAG와의 비교를 정리.
