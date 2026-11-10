---
title: "Anthropic, Agent Skills를 Agentic AI Foundation(Linux Foundation)에 기증"
source_url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation"
source_type: "news"
authors: ["Anthropic", "SiliconReport", "SearchEngineWatch", "dev.to"]
published: 2026-10-22
fetched: 2026-10-23
tags: [anthropic, agent-skills, linux-foundation, agentic-ai-foundation, mcp, skill-security, skill-md]
status: raw
---

# Anthropic, Agent Skills를 Agentic AI Foundation(Linux Foundation)에 기증

> Anthropic이 10-22 에이전트 절차 지식 표준 Agent Skills를 Linux Foundation 산하 Agentic AI Foundation(AAIF)에 기증. 이름·로고·GitHub 조직·agentskills.io 도메인이 재단으로 이전되고, Anthropic·Google·OpenAI 등의 엔지니어가 개인 자격으로 유지보수 (책임자 David Soria Parra·Mahesh Murag). MCP에 이어 에이전트 능력 포맷까지 벤더 중립 인프라로. 보급 수치(벤더 주장): 70+ 플랫폼, 100만 스킬, ~2.8억 설치. 기존 SKILL.md 변경 없음. (Anthropic 공식·SiliconReport·SearchEngineWatch·dev.to 교차)

## 내용

- **기증 범위**: 이름/로고, GitHub 조직, agentskills.io 도메인 — AAIF(Anthropic·Block·OpenAI 공동설립, MCP도 이미 수령)에 이전.
- **유지보수**: Anthropic·Google·OpenAI 등 엔지니어들이 개인 자격으로 참여. 리드 메인테이너 David Soria Parra, Mahesh Murag.
- **보급** (벤더 주장, 미검증): 2025-12 표준 공개 이후 70+ 에이전트 플랫폼 연동 (ChatGPT·Cursor·GitHub Copilot·VS Code), 100만 스킬 게시, ~2.8억 설치.
- **로드맵**: 버전 관리 릴리즈, 정식 제안 프로세스, 명시적 보안 가이드 — Anthropic 자체 가이드: 낯선 스킬의 스크립트/의존성/네트워크 호출은 설치 전 감사할 것 (악성 스킬 리스크: ClawHub 샘플 조사에서 악성 스킬 76건 발견 보고).
- **기원**: Claude Code 업무 (2025-10) — 일반 지식은 잘 다뤘지만 실제 업무의 절차 지식(procedural knowledge)이 부족했던 문제에서 출발.
- **변경 없음**: 기존 SKILL.md 파일은 그대로 유효.

## 맥락

- [[concepts/mcp]] — Model Context Protocol, AI와 외부 도구를 연결하는 오픈 표준 — MCP에 이어 같은 재단이 받은 두 번째 에이전트 인프라 표준.
- [[patterns/agents-md-skill-md]] — AGENTS.md와 SKILL.md 분리 패턴 — SKILL.md가 이제 공식 중립 표준.
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트 신뢰 모델 — 악성 스킬 76건 발견과 보안 가이드 로드맵의 배경.
- [[patterns/llm-wiki]] — LLM이 유지보수하는 개인 지식 위키 패턴 — 위키 자체가 SKILL.md식 절차 지식 축적의 사례.
