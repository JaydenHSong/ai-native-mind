---
title: "Claude Code"
category: tools
tags: [claude-code, llm, ai-tool, cli]
created: 2026-04-06
updated: 2026-04-12
sources:
  - "raw/articles/2026-04-04-llm-wiki-pattern.md"
related:
  - "[[patterns/llm-wiki]]"
  - "[[tools/obsidian]]"
  - "[[comparisons/rag-vs-llm-wiki]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# Claude Code

## 쉽게 읽기

Anthropic의 **터미널용 AI 코딩 도구**다. VS Code 안이 아니라 **검은 창(터미널)** 에서 폴더를 열고, 파일을 읽고 고치고, 명령을 실행하게 시킬 수 있다. “챗봇 한 창”보다 **프로젝트 전체**를 다루기 좋다.

| 용어 | 풀이 |
|------|------|
| **CLI** | 명령줄 인터페이스 — **키보드로만** 조작하는 창 |
| **멀티파일** | 여러 파일을 **한 작업**으로 수정 |
| **Anthropic** | Claude를 만든 **회사 이름** |

## 한줄 설명

Anthropic의 CLI 기반 AI 코딩 도구로, 로컬 파일을 직접 읽고 쓰며 멀티파일 수정이 가능.

## 핵심 기능

- **파일 직접 읽기/쓰기**: 로컬 파일시스템에 직접 접근
- **멀티파일 수정**: 한 번에 여러 파일을 생성·수정·삭제
- **CLAUDE.md 기반 설정**: 프로젝트별 규칙과 컨벤션 정의
- **대화형 작업**: 사용자와 대화하며 작업 진행
- **Agent 시스템**: 복잡한 작업을 서브에이전트에 위임

## 사용법 요약

[[patterns/llm-wiki|LLM-Wiki 패턴]]에서 Claude Code의 역할:

> "LLM은 프로그래머이고, 위키는 코드베이스이다."

- **Ingest**: 소스를 읽고, 위키 페이지 생성/수정, 교차참조 추가, 인덱스 업데이트
- **Query**: 위키를 읽고 질문에 답변, 좋은 답변을 위키에 저장
- **Lint**: 위키 전체를 스캔하여 건강 체크

CLAUDE.md에 Schema(위키 규칙)를 정의하면, Claude Code는 매 세션마다 이 규칙을 읽고 따른다.

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 로컬 파일 직접 조작 — 위키 유지보수에 최적 | 대화 종료 시 컨텍스트 초기화 |
| 멀티파일 한 번에 수정 가능 | 이미지 분석은 별도 단계 필요 |
| CLAUDE.md로 규칙 영속화 | 비용 (대화마다 위키 읽기) |
| 강력한 추론 능력 | 위키가 커지면 컨텍스트 제한 |

## 오케스트레이션 패턴에서의 위치

Claude Code는 [[concepts/ai-orchestration|AI 오케스트레이션]]의 **Orchestrator-Workers 패턴**을 구현한다:
- Claude Code 자체가 오케스트레이터 — 작업을 분석하고 서브에이전트에 위임
- CLAUDE.md가 [[concepts/context-engineering|Context Engineering]]의 구현체

**1인 개발자 도구 조합**에서 Claude Code의 역할:
- **Cursor + Claude Code 콤보**: Cursor로 일상적 코딩, Claude Code로 대규모 변경 (Pieter Levels 추천)
- **Claude Code 단독**: CLAUDE.md로 컨텍스트 관리, 자율적 코딩 위임

## 관련 도구

- [[tools/obsidian]] — 위키 브라우저/뷰어 역할

## Chapter Clear 가이드

- **소속 챕터**: Chapter 0 (튜토리얼)
- **퀘스트**: Claude Code가 Ingest/Query/Lint에서 각각 하는 일을 1줄씩 적는다.
- **클리어 조건**: "대화 기억은 사라져도 문서 기억은 남는다"를 `CLAUDE.md`/`wiki` 기준으로 설명할 수 있다.
- **보상(산출물)**: 내 프로젝트용 최소 운영 규칙 초안 1개
- **다음 퀘스트**: [[concepts/ai-native-programmer]] -> [[concepts/ai-native-architecture]]

## 참고 소스

- [LLM-Wiki Pattern (Tobi Lütke)](raw/articles/2026-04-04-llm-wiki-pattern.md)
