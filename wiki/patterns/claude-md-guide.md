---
title: "CLAUDE.md 작성 가이드"
category: patterns
tags: [claude-md, harness-engineering, context-engineering, best-practices, grounding-md]
created: 2026-04-09
updated: 2026-05-12
sources:
  - "raw/notes/2026-04-09-claude-md-best-practices.md"
  - "raw/articles/2026-05-01-agents-md-spec.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-12-grounding-md-epistemic-agentic.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/context-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/llm-wiki]]"
  - "[[concepts/agent-supply-chain-security]]"
status: active
confidence: high
---

# CLAUDE.md 작성 가이드

## 쉽게 읽기

`CLAUDE.md`는 Claude Code가 **매번 먼저 읽는** 프로젝트 설명서다. “우리 폴더 구조, 금지 사항, 테스트 명령”을 짧게 적어 두면, AI가 **같은 실수를 덜** 한다. 너무 길면 **중요한 줄이 묻힌다**는 점이 핵심이다.

| 용어 | 풀이 |
|------|------|
| **Harness** | AI 행동을 묶는 **규칙·경계** |
| **소음** | 정보량이 많아 **진짜 규칙이 안 보이는 것** |
| **프로젝트 루트** | 저장소 **맨 위 폴더** |

## 한줄 설명

Claude Code가 매 세션마다 읽는 프로젝트 설정 파일. [[concepts/harness-engineering|Harness Engineering]]의 가장 실전적인 구현체.

## 핵심 원칙

### 짧고 명확하게

> CLAUDE.md가 너무 길면 Claude가 절반을 무시한다. 중요한 규칙이 소음에 묻힌다.

- **200줄 미만** 유지
- 보편적으로 적용되는 규칙만 포함
- 2-3주마다 리뷰하여 불필요한 것 제거

### 필수 포함 섹션

| # | 섹션 | 설명 | 예시 |
|---|------|------|------|
| 1 | **프로젝트 컨텍스트** | 한 줄 설명 | "Next.js e-commerce with Stripe" |
| 2 | **기술 스택** | 프레임워크, 언어, 라이브러리 | Next.js 15, TypeScript, Tailwind |
| 3 | **프로젝트 구조** | 코드베이스 맵 | 디렉토리 트리 |
| 4 | **코딩 컨벤션** | 네이밍, 포매팅 | camelCase, 2-space indent |
| 5 | **명령어** | 빌드, 테스트, 배포 | `npm run build`, `npm test` |
| 6 | **환경 변수** | 필요한 env 목록 | `.env.local` 가이드 |
| 7 | **금지 사항** | 하면 안 되는 것 | "console.log 남기지 마" |
| 8 | **선호 패턴** | 이런 식으로 써줘 | "서버 컴포넌트 우선" |
| 9 | **의존성 규칙** | 라이브러리 선택 | "date-fns 사용, moment 금지" |
| 10 | **참고 문서** | 링크 | Design doc, API spec |

### 계층 구조

```
~/.claude/CLAUDE.md          → 전역 (모든 프로젝트)
프로젝트/CLAUDE.md           → 프로젝트별
프로젝트/서브폴더/CLAUDE.md  → 서브폴더별 (하위가 상위 오버라이드)
```

## 빠른 시작

터미널에서 `/init` 실행 → 프로젝트 구조와 기술 스택 기반으로 초안 자동 생성.

## Harness Engineering 관점에서

CLAUDE.md는 Martin Fowler가 말한 **Guide (피드포워드 제어)**의 핵심 구현체:

| Harness 요소 | CLAUDE.md에서의 역할 |
|-------------|-------------------|
| Guide | 코딩 컨벤션, 프로젝트 구조, 선호 패턴 |
| Guardrail | 금지 사항, 의존성 규칙 |
| Context | 프로젝트 설명, 기술 스택, 환경 변수 |

## CLAUDE.md ↔ AGENTS.md ↔ SKILL.md (2026-05 정리)

같은 가족의 세 파일.

| 파일 | 누가 읽나 | 적용 범위 | frontmatter |
|------|---------|---------|-------------|
| **CLAUDE.md** | Claude Code · Claude 계열 | 그 디렉토리에서 Claude가 일할 때 | 없음 (자유 markdown) |
| **AGENTS.md** | [60k+ 저장소 채택 표준](https://agents.md) — Codex, Cursor, Windsurf, Aider, Devin, Junie, Gemini CLI, Claude Code(호환) 등 | 그 디렉토리에서 일하는 **모든** 에이전트 | 없음 |
| **SKILL.md** | Claude Skills, Deep Agents, agentskills.io 호환 도구 | **특정 태스크**에 호출될 때만 (lazy load) | name·description **필수** |

### 셋의 관계

- **CLAUDE.md ⊂ AGENTS.md**: AGENTS.md가 더 넓은 표준. Claude Code도 AGENTS.md를 읽을 수 있음. 둘이 다 있으면 가장 가까운 파일 우선 — 단, 명시적 user 지시가 모든 것을 override.
- **AGENTS.md ↔ SKILL.md**: AGENTS.md는 "여기 환경의 사규", SKILL.md는 "여기서 X 작업할 때 매뉴얼". **상호 보완**.
- **거버넌스**: AGENTS.md는 [Linux Foundation 산하 Agentic AI Foundation](https://aaif.io)으로 이관. MCP가 표준화된 경로와 같음.

### 실증 데이터 (atlan.com 정리)

- 사람이 직접 쓴 AGENTS.md → 태스크 성공률 **약 4%↑**, 에이전트 생성 버그 **35~55%↓**
- LLM이 자동 생성한 컨텍스트 파일 → 태스크 성공률 **떨어뜨리고** 추론 비용 **20%+ 증가**

→ 시사점: **사람이 직접 쓰고 큐레이션**해야 효과. CLAUDE.md도 마찬가지.

### 충돌 시 우선순위 (AGENTS.md 공식)

> The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.

→ [[concepts/harness-engineering]]의 정책 층(Norms vs Guardrails)과 같은 결.

### 본 위키 운영에서

- 우리는 `CLAUDE.md`를 **위키 Schema**로 쓴다 (전통적 코딩 프로젝트와 다름)
- 향후 `tools/`·`patterns/` 폴더에 AGENTS.md를 분리해 둘지 검토 후보 — 다만 위키는 코드 저장소가 아니므로 우선순위 낮음

## 우리 위키의 CLAUDE.md

이 위키(`ai-native-mind`)의 CLAUDE.md는 일반 코딩 프로젝트와 다르게 **위키 운영 Schema**로 사용:
- Identity (위키 주제, 목적)
- Directory Structure (3-Layer)
- Conventions (frontmatter, 파일명, wikilink, 언어)
- Workflows (Ingest, Query, Lint)
- Current State (위키 현황)

## 2026-05-12 보강 — GROUNDING.md (Field-Scoped Epistemic Grounding)

> 출처: Palmblad, Ragland, Neely, "Agentic AI-assisted coding offers a unique opportunity to instill epistemic grounding during software development" (arXiv:2604.21744)

CLAUDE.md / AGENTS.md / Skills는 **project-scope / method-scope**다. 그 위에 한 층 — **field-scope, community-governed** 문서 `GROUNDING.md`가 제안됐다. 도메인 비전문가가 *best practices baked in*된 코드를 생성할 수 있도록 도메인 전문가가 큐레이션한다.

### Scope 계층

| Scope | 문서 | 거버넌스 | 예 |
|---|---|---|---|
| Project | **CLAUDE.md / AGENTS.md** | 프로젝트 팀 | 이 위키의 CLAUDE.md |
| Method | **Skills / Plugin** | 도구 작성자 | [[tools/superpowers]], [[tools/bkit]] |
| **Field** | **GROUNDING.md (신규)** | 도메인 **커뮤니티** | proteomics 전체 분야 |

### GROUNDING.md 두 부분

- **Hard Constraints** — non-negotiable validity invariants. *Empirically required for scientific correctness*. **사용자 prompt를 override한다** — 사용자가 prompt에서 다른 걸 요구해도 강제 적용.
- **Convention Parameters** — community-agreed defaults. 변경 가능, 기본값 명시.

### 우선순위 충돌 — 갱신된 우선순위 (제안)

기존 AGENTS.md 공식:

> The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.

GROUNDING.md가 들어오면 다음과 같이 *역전*된다:

> Field-level **Hard Constraints in GROUNDING.md override user chat prompts**. Convention Parameters in GROUNDING.md fall back to project-level AGENTS/CLAUDE.md, which fall back to user prompt.

이 역전은 [[concepts/agent-supply-chain-security]]의 dual-LLM/CaMeL과 [[journal/2026-05-06-pm|CAAF의 incorruptible asset]] 정신과 정확히 평행 — 둘 다 "agent의 자율 결정을 어디서 멈춰야 하는가"에 대한 답이지만, GROUNDING.md는 *보안이 아니라 도메인 무결성* 목적.

### 본 위키 적용 후보

우리 위키 자체에도 GROUNDING.md 패턴을 적용 가능. 후보 Hard Constraints:

- `raw/` 파일의 frontmatter 키 임의 변경 금지 (이미 CLAUDE.md Conventions에 있음)
- 기존 본문 통째 교체 금지 — 추가만 (이미 ingest workflow에 있음)
- frontmatter 필수 필드(title/category/tags/created/updated/sources/status) 누락 금지

사실 우리 CLAUDE.md의 일부 규칙(특히 raw/ 별도 표준 섹션)이 이미 GROUNDING.md 스타일 — *user 요청과 충돌 시 schema가 이긴다*. 다만 *field-scope*는 아니고 *vault-scope*. 미래에 다른 ai-native-mind 위키가 생기면 그때 field-scope GROUNDING.md로 분리.

> 자세히: [GROUNDING.md 원본 노트](raw/articles/2026-05-12-grounding-md-epistemic-agentic.md).

## 참고 소스

- [CLAUDE.md 리서치](raw/notes/2026-04-09-claude-md-best-practices.md)
- [Writing a Good CLAUDE.md (HumanLayer)](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [CLAUDE.md Guide (Builder.io)](https://www.builder.io/blog/claude-md-guide)
- [CLAUDE.md Best Practices (UX Planet)](https://uxplanet.org/claude-md-best-practices-1ef4f861ce7c)
- [GROUNDING.md (Palmblad et al., arXiv:2604.21744)](https://arxiv.org/abs/2604.21744)
