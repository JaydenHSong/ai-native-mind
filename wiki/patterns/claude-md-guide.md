---
title: "CLAUDE.md 작성 가이드"
category: patterns
tags: [claude-md, harness-engineering, context-engineering, best-practices]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-claude-md-best-practices.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/context-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/llm-wiki]]"
status: active
confidence: high
---

# CLAUDE.md 작성 가이드

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

## 우리 위키의 CLAUDE.md

이 위키(`ai-native-mind`)의 CLAUDE.md는 일반 코딩 프로젝트와 다르게 **위키 운영 Schema**로 사용:
- Identity (위키 주제, 목적)
- Directory Structure (3-Layer)
- Conventions (frontmatter, 파일명, wikilink, 언어)
- Workflows (Ingest, Query, Lint)
- Current State (위키 현황)

## 참고 소스

- [CLAUDE.md 리서치](raw/notes/2026-04-09-claude-md-best-practices.md)
- [Writing a Good CLAUDE.md (HumanLayer)](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [CLAUDE.md Guide (Builder.io)](https://www.builder.io/blog/claude-md-guide)
- [CLAUDE.md Best Practices (UX Planet)](https://uxplanet.org/claude-md-best-practices-1ef4f861ce7c)
