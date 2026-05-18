---
source_url: "https://agents.md"
title: "AGENTS.md — A simple, open format for guiding coding agents"
publisher: "AGENTS.md / Agentic AI Foundation (Linux Foundation)"
ingested: 2026-05-01
related_urls:
  - "https://github.com/agentsmd/agents.md"
  - "https://aaif.io"
---

# AGENTS.md — 60k+ 저장소가 채택한 오픈 표준

> 출처: [agents.md 공식 사이트](https://agents.md) · [GitHub](https://github.com/agentsmd/agents.md) · 거버넌스: [Agentic AI Foundation](https://aaif.io) (Linux Foundation 산하)

## 한 줄 요약

`AGENTS.md` = **에이전트용 README**. 사람용 README와 분리해 **빌드/테스트 명령, 코드 스타일, 보안 주의사항** 같이 에이전트에게 필요한 컨텍스트를 한 곳에 모은다. **60,000개 이상의 오픈소스 저장소**가 이미 채택했고, OpenAI Codex 자체 저장소만 88개의 `AGENTS.md` 파일을 트리에 둔다.

## 왜 README와 분리하는가

- **README**는 사람용 — quick start, 프로젝트 설명, 컨트리뷰션 가이드
- **AGENTS.md**는 에이전트용 — 빌드 단계, 테스트, 컨벤션 등 사람 컨트리뷰터에겐 너무 잡다한 정보
- 둘을 섞지 않고 분리하는 이유: 에이전트에게 **명확하고 예측 가능한 위치**를 주고, README는 **사람용으로 간결**하게 유지

## 형식

- **YAML frontmatter도 필수 필드도 없다** — 그냥 표준 markdown
- 어떤 헤더든 자유롭게 사용
- 자주 쓰이는 섹션: Project overview / Build and test commands / Code style / Testing instructions / Security considerations / PR conventions
- **모노레포는 nested AGENTS.md** — 가장 가까운 파일이 우선 (closest-wins)

## 호환 도구 (2026 채택 현황 일부)

OpenAI Codex, Amp, Jules (Google), Cursor, Factory, Aider, goose, opencode, Zed, Warp, VS Code, Devin (Cognition), UiPath Autopilot, Junie (JetBrains), RooCode, Gemini CLI, Kilo Code, Phoenix, Semgrep, GitHub Copilot coding agent, Ona, Windsurf, Augment Code 등.

→ 의미: **한 파일로 여러 에이전트 호환**. 위키의 [[tools/claude-code]] 사용자도 [[tools/codex-plugin]] 사용자도 같은 파일을 읽음.

## 거버넌스

> "AGENTS.md is now stewarded by the Agentic AI Foundation under the Linux Foundation."

OpenAI, Anthropic, Google, Cursor, Factory 등 다수 벤더의 협업 결과 → **Linux Foundation 산하 Agentic AI Foundation**으로 이관. MCP가 표준이 된 경로와 같음.

## 충돌 시 우선순위

> "The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything."

→ 이 우선순위는 **하네스 설계의 정책 층**과 정확히 같다 ([[concepts/harness-engineering]]의 Norms vs Guardrails 구분). 가장 가까운 가이드가 우선, 사용자 명시 지시가 모든 것을 override.

## AGENTS.md vs SKILL.md 비교

| | AGENTS.md | SKILL.md (Anthropic) |
|--|-----------|---------------------|
| 위치 | 저장소/디렉토리 루트 | skills 폴더 내부 |
| 적용 범위 | **그 디렉토리에서 일하는 모든 에이전트** | **특정 태스크**에 호출될 때만 |
| frontmatter | 없음 | name·description 필수 |
| 발견 방식 | 가장 가까운 파일 자동 로드 | startup에 name·description만, lazy load |
| 거버넌스 | Linux Foundation (Agentic AI Foundation) | Anthropic + 표준화 진행 중 (agentskills.io) |
| 비유 | 회사의 **사규** (모두에게 적용) | 회사의 **업무 매뉴얼** (필요할 때 펼침) |

→ 두 표준은 **상호 보완**. AGENTS.md가 "여기 환경의 규칙", SKILL.md가 "여기서 X 작업할 때 매뉴얼".

## 실증 데이터 (atlan.com 정리)

> 사람이 직접 쓴 `AGENTS.md`는 태스크 성공률을 약 **4%↑**, 에이전트 생성 버그를 **35~55%↓**.  
> 단, **LLM이 자동 생성한** 컨텍스트 파일은 138개 실제 저장소 분석에서 **태스크 성공률을 떨어뜨리고** 추론 비용을 **20%+ 증가**.

→ 시사점: AGENTS.md는 **사람이 직접 쓰고 큐레이션**해야 효과. 자동화는 신중히.

## 위키 매핑

- 새 페이지 후보: `patterns/agents-md-skill-md` (두 포맷의 협업 설계 패턴)
- 보강: [[patterns/claude-md-guide]] (CLAUDE.md는 더 협소한 Claude 전용; AGENTS.md는 멀티 에이전트 표준; 두 파일을 같이 둘 때 어떻게 쓸지 실용 가이드 추가 후보)
- 보강: [[concepts/harness-engineering]] (정책 층 — closest-wins 룰)

confidence: high (공식 사이트 + Linux Foundation 등록)
