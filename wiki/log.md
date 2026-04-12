---
title: "Wiki Log"
category: meta
tags: [log, history]
created: 2026-04-06
updated: 2026-04-12
sources: []
status: active
---

# ai-native-mind Wiki Log

> 시간순 작업 기록. `grep "^## \[" wiki/log.md`로 파싱 가능.

## 쉽게 읽기

날짜별로 **무엇을 바꿨는지**만 적어 둔다. 개념 설명은 `wiki/concepts/` 등 본문 페이지를 보면 된다.

- 월드맵 허브: [[wiki/campaign-map|Campaign Map]]
- 진행 가이드: [[wiki/overview|Overview]]
- 전체 도감: [[wiki/index|Index]]

## [2026-04-12] update | Chapter Clear 월드맵 허브 연결

- **Pages created**: `wiki/campaign-map.md`
- **Pages updated**: `wiki/overview.md`, `wiki/index.md`, `wiki/log.md`
- **Notes**: 위키를 게임형 학습 동선으로 재구성. 챕터별 클리어 조건/산출물/트래커를 추가하고, 메타 문서(overview/index/log)를 월드맵 허브로 연결.

## [2026-04-12] update | Chapter 0~2 문서 퀘스트 가이드 통일

- **Pages updated**: `patterns/llm-wiki.md`, `tools/obsidian.md`, `tools/claude-code.md`, `concepts/ai-native-programmer.md`, `concepts/ai-native-architecture.md`, `concepts/prompt-engineering.md`, `concepts/context-engineering.md`, `concepts/context-vs-prompt-practice.md`, `wiki/campaign-map.md`
- **Notes**: 각 문서 하단에 `Chapter Clear 가이드`를 추가하여 퀘스트/클리어 조건/보상/다음 퀘스트를 통일. 월드맵과 개별 문서 간 진행 흐름을 양방향으로 맞춤.

## [2026-04-12] update | Chapter 3~7 문서 퀘스트 가이드 확장

- **Pages updated**: `concepts/ai-orchestration.md`, `patterns/orchestration-patterns-practice.md`, `patterns/agent-planning-to-implementation.md`, `patterns/subagents-delegation.md`, `patterns/agent-server-harness.md`, `patterns/safe-tool-calling-sandbox.md`, `patterns/owasp-llm-typescript-mitigations.md`, `concepts/llm-evaluation.md`, `concepts/gen-ai-observability.md`, `patterns/git-ai-workflow.md`, `patterns/ai-code-review.md`, `patterns/ai-cost-management.md`, `wiki/campaign-map.md`
- **Notes**: Chapter 3~7 핵심 문서에도 동일한 `Chapter Clear 가이드` 형식을 적용하여, 문서 단위에서 챕터 진행이 끊기지 않게 연결. 각 문서의 "다음 퀘스트" 링크를 통해 월드맵 순환 루프를 완성.

## [2026-04-11] create | 에이전트 커리큘럼 프랙티스 6편 + raw 메타

- **Sources**: `raw/notes/2026-04-12-practice-curriculum.md`
- **Pages created**: `concepts/context-vs-prompt-practice.md`, `patterns/preventing-context-rot.md`, `patterns/harness-building-blocks.md`, `patterns/safe-tool-calling-sandbox.md`, `patterns/orchestration-patterns-practice.md`, `patterns/my-first-agentic-service.md`
- **Pages updated**: `index.md`, `overview.md`, `log.md` (각 페이지에 **쉽게 읽기**·`sources` 정리)
- **Notes**: 중학교 커리큘럼 톤 실습 트랙. 읽기 순서는 `wiki/index` 커리큘럼 절 참고.

## [2026-04-11] update | 공개 저장소 보안 장치 (Gitleaks·Dependabot·SECURITY)

- **Other**: `SECURITY.md`, `.gitleaks.toml`, `.github/workflows/gitleaks.yml`, `dependency-review.yml`, `dependabot.yml`, PR 템플릿(비밀 체크리스트), `.gitignore` 보강, `CLAUDE.md` 보안 한 줄
- **Notes**: 푸시·PR마다 비밀 스캔, PR마다 의존성 리뷰, 주간 Dependabot. 실제 키는 GitHub Secrets에만.

## [2026-04-11] update | 전 위키 가독성 패스 (쉽게 읽기 + 용어 표)

- **Pages updated**: concepts·tools·patterns·comparisons 전 페이지(메타 `overview`/`index` 포함), `harness-engineering`·`owasp-llm-typescript-mitigations`·`agent-server-harness`·`journal/2026-04-12`의 `updated` 정리
- **Notes**: 각 본문 상단에 **「쉽게 읽기」**(비유 + 짧은 용어 표). index 인용줄 안내. (이전에 agent-server·저널에만 넣었던 설명은 이번에 전 페이지로 확장.)

## [2026-04-12] create | 저널·OWASP×TS 패턴·papers·예제 스케치

- **Sources**: `raw/notes/2026-04-12-security-typescript-corpus.md`, `raw/notes/2026-04-12-harness-engineering-deep-dive.md`, `raw/papers/owasp-genai-2025-llm-top-10.md`
- **Pages created**: `wiki/journal/2026-04-12.md`, `wiki/patterns/owasp-llm-typescript-mitigations.md`
- **Other**: `examples/agent-safety-sketch/README.md`, `raw/papers/owasp-genai-2025-llm-top-10.md`
- **Pages updated**: `concepts/harness-engineering.md`, `patterns/agent-server-harness.md`, `index.md`, `overview.md`, `log.md`, `CLAUDE.md`
- **Notes**: Fowler Humans/Agents 요약을 저널·하네스 페이지에 연결. OWASP LLM01/06/10 ↔ TS·AI SDK 완화 패턴 위키화. 실행용 최소 README 스케치.

## [2026-04-12] collect | 보안 × TypeScript 큐레이션 (②)

- **Sources**: `raw/notes/2026-04-12-security-typescript-corpus.md`
- **Pages updated**: `raw/notes/2026-04-12-ai-native-learning-corpus.md` (5c 링크), `log.md`, `overview.md`, `CLAUDE.md`
- **Notes**: OWASP GenAI LLM Top 10, MCP Authorization 튜토리얼·스펙, AI SDK 구조화 출력·도구·MCP·미들웨어·테스트·텔레메트리, TS strict·Zod, 위협↔TS 완화 표.

## [2026-04-12] update | Harness Engineering 심화 (개념 보강 + 큐레이션 노트)

- **Sources**: `raw/notes/2026-04-12-harness-engineering-deep-dive.md`
- **Pages updated**: `concepts/harness-engineering.md`, `log.md`, `overview.md`, `CLAUDE.md`
- **Notes**: 루프·인간 in/on/out·Harnessability·Norms/Guardrails 표 추가. Fowler memo / Humans and Agents, Anthropic 도구 글 링크. 심화 읽기 리스트 raw에 정리.

## [2026-04-12] collect | AI 네이티브 학습 외부 자료 큐레이션

- **Sources**: `raw/notes/2026-04-12-ai-native-learning-corpus.md`
- **Pages updated**: `log.md`, `CLAUDE.md`
- **Notes**: Anthropic 엔지니어링·OpenAI Cookbook·HF Agents Course·DeepLearning Agentic AI·MCP·OTel·Simon Willison·실습 순서 권장안 링크 모음 (ingest 전 raw 풀).

## [2026-04-11] ingest | AI SDK(streamText/Agent) + Workflow DurableAgent 리서치

- **Sources**: `raw/notes/2026-04-11-ai-sdk-durable-agent-workflow-research.md` (useworkflow.dev 공식 가이드)
- **Pages updated**: `tools/vercel-workflow.md`, `patterns/agent-server-harness.md`, `log.md`, `CLAUDE.md`, `overview.md`
- **Notes**: `Agent`가 `streamText` 래퍼임, `DurableAgent`·`getWritable`·`start`·`run.readable`·도구 `"use step"`·`npx workflow web`·flight-booking 예제 브랜치 정리.

## [2026-04-11] ingest | Vercel Workflow + OpenTelemetry GenAI 관측 리서치

- **Sources**: `raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md` (웹 1차 출처: Vercel 블로그, useworkflow.dev, OTel 스펙·블로그·SIG)
- **Pages created**: `tools/vercel-workflow.md`, `concepts/gen-ai-observability.md`
- **Pages updated**: `patterns/agent-server-harness.md`, `concepts/harness-engineering.md`, `concepts/llm-evaluation.md`, `index.md`, `overview.md`, `log.md`, `CLAUDE.md`
- **Notes**: WDK의 `use workflow`/`use step`·Webhook·Worlds·내장 관측 요약. OTel GenAI semconv·에이전트 앱/프레임워크 컨벤션·계측 두 갈래 정리.

## [2026-04-11] update | 오케스트레이션·하네스 서버 보강 + 패턴 2종

- **Sources**: `raw/notes/2026-04-11-orchestration-harness-server-supplement.md`
- **Pages created**: `patterns/agent-planning-to-implementation.md`, `patterns/agent-server-harness.md`
- **Pages updated**: `concepts/ai-orchestration.md`, `concepts/harness-engineering.md`, `concepts/agentic-engineering.md`, `index.md`, `overview.md`, `log.md`, `CLAUDE.md`
- **Notes**: 6대 패턴 위에 런타임(상태·멱등·HITL·관측) 정리, Harness에 서버·프로덕션 경계 추가. 기획→코드 산출물 체인·HITL, 동기/비동기/SSE 백엔드 패턴 문서화.

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
