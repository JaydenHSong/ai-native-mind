---
title: "Wiki Index"
category: meta
tags: [index, catalog]
created: 2026-04-06
updated: 2026-07-08
total_pages: 84
sources: []
status: active
---

# ai-native-mind Wiki Index

> 전체 84개 페이지 | 최종 업데이트: 2026-07-08 (weekday maintenance: 한국어 정본 정합성 재검사, 신규 ingest 없음) — 대부분 페이지에 **쉽게 읽기** 블록 있음

## 쉽게 읽기

링크만 모아 둔 **목차**다. 주제가 낯설면 해당 페이지로 들어가서 맨 위 **「쉽게 읽기」**부터 읽으면 된다.

## Chapter Clear 시작점

게임처럼 순서대로 가고 싶다면 먼저 [[campaign-map|Campaign Map]]을 열고, 필요할 때 [[overview|Overview]]로 보조 설명을 본다.

- **튜토리얼(Chapter 0)**: [[patterns/llm-wiki]], [[tools/obsidian]], [[tools/claude-code]]
- **기본기(Chapter 1~2)**: [[concepts/ai-native-programmer]], [[concepts/context-engineering]]
- **실전(Chapter 3~5)**: [[concepts/ai-orchestration]], [[patterns/agent-planning-to-implementation]], [[patterns/agent-server-harness]]
- **엔드게임(Chapter 6~7)**: [[concepts/llm-evaluation]], [[concepts/gen-ai-observability]], [[patterns/git-ai-workflow]]

## Concepts (20개)

### 성장 맵 & 철학
- [[concepts/ai-native-programmer]] — AI를 팀원으로 활용하여 1인이 팀 규모 결과를 내는 개발자, 성장 맵
- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴 (Anthropic 가이드 기반)
- [[concepts/ai-native-architecture]] — AI 전제로 소프트웨어를 설계하는 4대 원칙

### Engineering 3세대 진화
- [[concepts/prompt-engineering]] — LLM에게 효과적으로 지시하는 기술 (1세대)
- [[concepts/context-engineering]] — AI 정보 환경 설계, Prompt Engineering의 진화 (2세대)
- [[concepts/harness-engineering]] — AI 에이전트의 완전한 인프라 설계, Agent = Model + Harness (3세대)
- [[concepts/agentic-engineering]] — Vibe Coding의 성숙 진화, 구조화된 AI 감독 하의 개발

### 커리큘럼·실습 (입문 트랙)
- [[concepts/context-vs-prompt-practice]] — 프롬프트 vs 컨텍스트, 시험공부 비유 (커리큘럼 1)

### 핵심 기술
- [[concepts/tool-use]] — LLM이 외부 함수/API를 호출하는 메커니즘
- [[concepts/mcp]] — Model Context Protocol, AI와 외부 도구를 연결하는 오픈 표준 ("AI의 USB-C")
- [[concepts/a2a-protocol]] — Agent-to-Agent 프로토콜, 서로 다른 에이전트의 협력 표준 (Linux Foundation)
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
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급

## Tools (9개)

- [[tools/claude-code]] — Anthropic의 CLI 기반 AI 코딩 도구, 위키 유지보수 LLM
- [[tools/obsidian]] — 로컬 마크다운 기반 노트 앱, 위키 브라우저/IDE
- [[tools/bkit]] — PDCA 방법론 기반 AI Native Development OS (Claude Code 플러그인)
- [[tools/superpowers]] — TDD + subagent 병렬 실행 agentic skills 프레임워크 (Claude Code 플러그인)
- [[tools/codex-plugin]] — OpenAI의 크로스-모델 코드 리뷰 도구 (Claude Code 플러그인)
- [[tools/gstack]] — 역할 기반 AI 팀 시뮬레이션 스킬 팩 (Claude Code 플러그인)
- [[tools/vercel-workflow]] — Workflow DevKit, TypeScript 내구 워크플로·Webhook·에이전트 장기 실행
- [[tools/managed-agents]] — Anthropic의 클라우드 호스팅 에이전트 인프라 (2026-04-08 public beta)
- [[tools/deep-agents-deploy]] — LangChain 오픈 소스 에이전트 하네스 + 배포 도구 (모델 무관, MIT)

## Patterns (22개)

### 커리큘럼·실습 (읽기 순서 2→6)
- [[patterns/preventing-context-rot]] — Context Rot·3계층 메모리 (커리큘럼 2)
- [[patterns/harness-building-blocks]] — Guides/Sensors 하네스 실전 (커리큘럼 3)
- [[patterns/safe-tool-calling-sandbox]] — 안전한 툴·샌드박스·HITL (커리큘럼 4)
- [[patterns/orchestration-patterns-practice]] — 체이닝·병렬·Evaluator-Optimizer (커리큘럼 5)
- [[patterns/my-first-agentic-service]] — Capstone: 에이전틱 서비스 한 바퀴 (커리큘럼 6)

### LLM-Wiki & 메타 패턴
- [[patterns/llm-wiki]] — LLM이 유지보수하는 개인 지식 위키 패턴 (Tobi Lütke)
- [[patterns/bkit-superpowers-combo]] — bkit PDCA + Superpowers TDD 조합으로 단계 건너뛰기 방지
- [[patterns/agents-md-skill-md]] — repo-scope `AGENTS.md` 와 task-scope `SKILL.md` 를 분리해 portability와 progressive disclosure를 같이 얻는 패턴

### AI 개발 실전 패턴
- [[patterns/ai-news-scouting-taxonomy]] — HN 중심 흐름을 frontier/open/coding-agent/runtime/eval 레이어로 재편하는 AI 뉴스 스카우팅 분류안
- [[patterns/harness-engineering-casebook]] — 도메인 30케이스 매트릭스 + Anthropic Academy 스터디 맵
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
- [[patterns/agent-mvp-stack-2026]] — 1인 MVP 스택 5대 영역 × 4 단계 + 의사결정 트리 (2026-05)
- [[patterns/vibe-coding-antipatterns]] — Vibe Coding의 7대 안티패턴과 회피법

## Journal (20개)

- [[journal/2026-05-25]] — weekday watch kick-off: Cline / browser-use / LangGraph / Langfuse를 통해 integration surface · operator control · trace artifact화 우선순위 재확인
- [[journal/2026-05-24]] — 일요 데일리: MOSS(source-level harness evolution) + WorkstreamBench(spreadsheet workflow eval) + ActiveGraph(log-first runtime)
- [[journal/2026-05-23]] — 토요 데일리: Life-Harness(interface adaptation) + TerminalWorld(benchmark provenance) + HarnessAPI(single-source MCP/HTTP capability) + DeltaBox(branchable sandbox runtime)
- [[journal/2026-05-22]] — 금요 데일리 + 주간 리뷰: Code as Agent Harness(code substrate) + Scale-Conditioned Memory Eval(usable-scale boundary) + Benchmark Disclosure Audit(run disclosure quality) + boundary-compression 메모
- [[journal/2026-05-21]] — 목요 데일리: SpecBench(reward hacking gap) + ProcBench(process controllability) + Insights Generator(corpus-level trace diagnostics) + Learning to Hand Off(handoff interface) + Progressive Autonomy(trust-calibrated HITL) + Library Drift(skill lifecycle governance) + Formal Skill(runtime capability object)
- [[journal/2026-05-20]] — 수요 데일리: DecisionBench(delegation fidelity) + POLAR-Bench(privacy-utility diagnostic) + ResearchArena(artifact-aware auto-research eval)
- [[journal/2026-05-19]] — 화요 데일리: HarnessAudit(trajectory boundary audit) + ClawVM(virtual memory contract) + Natural-Language Agent Harnesses(CLAUDE.md를 policy object로 보기)
- [[journal/2026-05-18]] — 월요 데일리: Effective Harness Engineering(Vesper·evaluation hack·worktree) + SkillSmith(compiled runtime interface) + RoadmapBench(version-upgrade eval)

- [[journal/2026-04-12]] — Fowler Humans/Agents·on the loop·OWASP×TS 정리 일지
- [[journal/2026-05-01]] — 오전 자동 인제스트 (스택 stratification·OTel·Cisco) + 금요 회고
- [[journal/2026-05-01-backfill]] — 오후 빅 백필: Theme A 딥다이브(Managed/Deep Agents·SKILL.md·AGENTS.md) + B/C/D 백필
- [[journal/2026-05-02]] — 토요 데일리: 멀티 에이전트 정량 한계(Google) + 3-에이전트 분리(Anthropic) + 6 레버(HumanLayer)
- [[journal/2026-05-03]] — 일요 데일리: MS Agent Framework 1.0(5 패턴) + Datadog 1,000+ 트레이스 + ZenBrain 7-계층 메모리
- [[journal/2026-05-06]] — 수요 데일리: 자동 하네스 진화 2편(Last Harness·AHE) + Anthropic 2026 Agentic Coding Trends
- [[journal/2026-05-06-pm]] — 수요 PM 후속: 하네스 연구 3좌표축 — Wei taxonomy(70 proj) + CAAF determinism + Stanford Meta-Harness
- [[journal/2026-05-12]] — 화요 데일리: 모델 아래 세 레버 — MEP preparation(Zigler) + JRH judge reliability(RAND) + GROUNDING.md field-scope(Palmblad)
- [[journal/2026-05-13]] — 수요 데일리: 출력 직전 게이트 (verification-gated) 3-도메인 — GSAR(text) + Verify Before You Fix(code) + Affordance Agent Harness(embodied)
- [[journal/2026-05-14]] — 목요 데일리: Above-the-Model Layer — Zhang RL orchestration traces + Zhong/Zhu 11 책임 runtime substrate + WildClawBench long-horizon 천장(Opus 4.7 62.2%)
- [[journal/2026-05-17]] — 일요 데일리: Agentic AI Survey(symbolic vs neural) + BeliefMem(probabilistic memory) + MAGE(shadow memory guardrail) + 늦은 추가 3편(Human-Inspired Memory · FeatureBench · LITMUS)
- [[journal/2026-05-15]] — 금요 데일리+주간 리뷰: ACDL(context 표기) + Constraint Decay(백엔드 −30점) + GroupMemBench(memory 46%) — 4일 *layer 사다리* 합치기

## Comparisons (9개)

- [[comparisons/rag-vs-llm-wiki]] — RAG와 LLM-Wiki 방식 비교: 재발견 vs 축적
- [[comparisons/claude-code-plugins]] — Claude Code 플러그인 4종 비교 + 조합 전략
- [[comparisons/ai-coding-tools]] — AI 코딩 도구 비교: Claude Code vs Cursor vs Copilot vs Windsurf
- [[comparisons/agent-frameworks]] — AI Agent 프레임워크 비교: LangGraph vs CrewAI vs OpenAI SDK (+ 매니지드 두 종)
- [[comparisons/fine-tuning-vs-prompting]] — Fine-tuning vs Prompting 결정 가이드, 하이브리드 패턴
- [[comparisons/managed-vs-deep-agents]] — Claude Managed Agents vs LangChain Deep Agents Deploy: lock-in vs 자유도
- [[comparisons/agent-eval-frameworks]] — DeepEval/LangSmith/Braintrust/Langfuse/Inspect AI/RAGAS 6대장
- [[comparisons/agent-platforms-for-solo-dev]] — 1인 개발자 관점 4종 비교 (Managed/Deep Agents/Agents SDK/LangGraph 직접)
- [[comparisons/agent-memory-taxonomy]] — task/productivity vs belief vs lifecycle vs safety memory 분류 + scale boundary / runtime enforcement overlay

## Meta

- [[index]] — 전체 페이지 카탈로그 (현재 문서)
- [[campaign-map]] — 챕터 클리어 월드맵 (메인 허브)
- [[overview]] — 위키 전체 종합 현황
- [[log]] — 시간순 작업 기록
