# ai-native-mind Planning Document

> **Summary**: AI 네이티브 프로그래머 성장을 위한 LLM-Wiki 기반 개인 지식 위키
>
> **Project**: ai-native-mind
> **Author**: Jayden Song
> **Date**: 2026-04-06
> **Status**: Draft

---

## Executive Summary

| Perspective | Content |
|-------------|---------|
| **Problem** | 개발자로서 학습한 지식이 대화 히스토리, 브라우저 탭, 흩어진 노트에 분산되어 축적되지 않음 |
| **Solution** | LLM-Wiki 패턴 적용 — Claude Code가 유지·관리하는 Obsidian 기반 개인 지식 위키 구축 |
| **Function/UX Effect** | 소스 추가 시 자동 요약·교차참조·인덱싱, 위키 브라우징으로 축적된 지식 탐색 |
| **Core Value** | 학습 지식의 복리 효과 — 매번 재발견이 아닌 누적·연결·진화하는 지식 체계 |

---

## Context Anchor

| Key | Value |
|-----|-------|
| **WHY** | 학습한 지식이 축적되지 않고 흩어져서 반복 학습하게 됨 |
| **WHO** | Jayden Song — AI 네이티브 코딩 프로그래머로 성장하려는 개발자 |
| **RISK** | 초기 Schema 설계가 부실하면 위키가 혼잡해져 유지보수 포기 가능 |
| **SUCCESS** | 30개 소스 Ingest 후에도 위키가 체계적이고 탐색 가능한 상태 유지 |
| **SCOPE** | Phase 1: 디렉토리 구조 + Schema → Phase 2: 첫 Ingest 워크플로우 → Phase 3: 운영 |

---

## 1. Overview

### 1.1 Purpose

AI 네이티브 코딩 프로그래머로 성장하기 위한 개인 지식 위키를 구축한다.
Tobi Lütke의 LLM-Wiki 패턴을 적용하여, Claude Code가 위키의 유지보수(요약, 교차참조, 일관성 유지)를 담당하고, 사용자는 소스 큐레이션과 탐색에 집중한다.

### 1.2 Background

- 기존 학습 방식: 글 읽기 → 대화로 질문 → 대화 끝나면 소실
- LLM-Wiki 패턴은 이 문제를 해결: 학습 내용이 위키에 누적되어 시간이 지날수록 풍부해짐
- Obsidian은 마크다운 기반 노트 앱으로, 그래프 뷰/Dataview/Web Clipper 등 위키 브라우징에 최적

### 1.3 Related Documents

- 원본 패턴: `llm-wiki.md` (Tobi Lütke)

---

## 2. Scope

### 2.1 In Scope

- [ ] 3-Layer 디렉토리 구조 설계 (raw / wiki / schema)
- [ ] CLAUDE.md Schema 작성 (위키 운영 규칙, 컨벤션)
- [ ] 위키 카테고리 구조 설계 (concepts, tools, patterns, journal)
- [ ] index.md, log.md 설계
- [ ] Ingest 워크플로우 정의
- [ ] Query 워크플로우 정의
- [ ] Lint 워크플로우 정의
- [ ] Obsidian 설정 가이드 (Web Clipper, Graph View, Dataview)

### 2.2 Out of Scope

- 검색 엔진 (qmd 등) — 위키가 100+ 페이지 될 때 도입
- 자동 소스 수집 (RSS, API 크롤링 등)
- 멀티 유저 / 팀 위키
- 웹 배포 / 퍼블리싱

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | 3-Layer 디렉토리 구조 (raw/wiki/schema) | High | Pending |
| FR-02 | CLAUDE.md에 위키 운영 Schema 정의 | High | Pending |
| FR-03 | Ingest 워크플로우 — 소스 → 요약 → 위키 통합 → 인덱스 업데이트 | High | Pending |
| FR-04 | 위키 카테고리: concepts/, tools/, patterns/, journal/ | High | Pending |
| FR-05 | index.md — 전체 위키 페이지 카탈로그 (카테고리별 정리) | High | Pending |
| FR-06 | log.md — 시간순 작업 기록 (Ingest, Query, Lint) | Medium | Pending |
| FR-07 | Query 워크플로우 — 위키 기반 질답 → 좋은 답변 위키에 저장 | Medium | Pending |
| FR-08 | Lint 워크플로우 — 위키 건강 체크 (모순, 고아, 누락 링크) | Medium | Pending |
| FR-09 | Obsidian frontmatter 규칙 (tags, date, source, category) | Medium | Pending |
| FR-10 | 위키 페이지 간 `[[wikilink]]` 교차참조 | High | Pending |

### 3.2 Non-Functional Requirements

| Category | Criteria | Measurement Method |
|----------|----------|-------------------|
| 탐색성 | 어떤 주제든 2클릭 이내에 도달 | Obsidian 그래프 뷰 확인 |
| 일관성 | 모든 위키 페이지가 동일한 frontmatter 구조 | Dataview 쿼리로 검증 |
| 유지보수성 | Ingest 1회에 15분 이내 완료 | 실측 |

---

## 4. Success Criteria

### 4.1 Definition of Done

- [ ] 디렉토리 구조 생성 완료 (raw/, wiki/, CLAUDE.md)
- [ ] CLAUDE.md Schema 작성 완료
- [ ] 위키 카테고리 폴더 생성 (concepts, tools, patterns, journal)
- [ ] index.md, log.md 초기 파일 생성
- [ ] 첫 번째 소스 Ingest 성공 (llm-wiki.md 자체를 첫 소스로)
- [ ] Obsidian에서 열어서 그래프 뷰 확인

### 4.2 Quality Criteria

- [ ] 모든 위키 페이지에 YAML frontmatter 존재
- [ ] 고아 페이지 없음 (모든 페이지가 index.md에 등록)
- [ ] Wikilink가 유효 (깨진 링크 없음)

---

## 5. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Schema가 지나치게 복잡해서 Ingest가 느려짐 | High | Medium | 최소한의 규칙으로 시작, 운영하며 점진적 추가 |
| 카테고리 경계가 모호해서 분류 혼란 | Medium | High | 초기에 명확한 분류 기준 문서화, 애매하면 concepts/ 기본값 |
| 위키가 커지면서 index.md만으로 탐색 한계 | Medium | Low | 100+ 페이지 시점에 qmd 검색엔진 도입 |
| Obsidian 설정을 잘못하면 파일 충돌 | Low | Low | Obsidian vault 설정 가이드 포함 |

---

## 6. Impact Analysis

> 신규 프로젝트이므로 기존 코드 영향 없음.

### 6.1 Changed Resources

| Resource | Type | Change Description |
|----------|------|--------------------|
| 프로젝트 디렉토리 전체 | 신규 생성 | raw/, wiki/, CLAUDE.md 구조 신규 |

### 6.2 Current Consumers

없음 (신규 프로젝트)

---

## 7. Architecture Considerations

### 7.1 Project Level Selection

| Level | Characteristics | Selected |
|-------|-----------------|:--------:|
| **Starter** | 마크다운 파일 기반, 코드 없음, Obsidian + Claude Code | ✅ |
| Dynamic | 해당 없음 (앱이 아님) | ☐ |
| Enterprise | 해당 없음 | ☐ |

### 7.2 Key Architectural Decisions

| Decision | Options | Selected | Rationale |
|----------|---------|----------|-----------|
| 위키 도구 | Obsidian / Notion / VS Code | Obsidian | 로컬 마크다운, 그래프 뷰, 플러그인 생태계 |
| LLM 엔진 | Claude Code / Codex / ChatGPT | Claude Code | 파일 직접 읽기/쓰기 가능, 멀티파일 수정 |
| 언어 | 한국어 / 영어 / 혼합 | 한국어 | 개인 위키, 기술 용어는 영어 유지 |
| 소스 수집 | Web Clipper / 수동 / 혼합 | Web Clipper | Obsidian 연동, 빠른 클리핑 |
| 링크 방식 | Wikilink / 상대경로 | Wikilink `[[]]` | Obsidian 네이티브, 그래프 뷰 연동 |
| 버전 관리 | Git / 없음 | Git | 이력 추적, 무료 |

### 7.3 디렉토리 구조

```
ai-native-mind/
├── CLAUDE.md              # Schema — 위키 운영 규칙
├── raw/                   # Layer 1: 원본 소스 (불변)
│   ├── articles/          # 웹 글 (Web Clipper)
│   ├── papers/            # 논문, 기술 문서
│   ├── notes/             # 개인 메모, 대화 기록
│   └── assets/            # 이미지, 첨부파일
├── wiki/                  # Layer 2: LLM이 관리하는 위키
│   ├── index.md           # 전체 페이지 카탈로그
│   ├── log.md             # 시간순 작업 기록
│   ├── overview.md        # 위키 전체 개요/종합
│   ├── concepts/          # AI/프로그래밍 개념
│   ├── tools/             # AI 도구, 프레임워크
│   ├── patterns/          # 코딩 패턴, 아키텍처
│   └── journal/           # 학습 일지, 인사이트
└── docs/                  # PDCA 문서 (bkit용)
    └── 01-plan/
```

---

## 8. Convention Prerequisites

### 8.1 위키 페이지 Frontmatter 규칙

```yaml
---
title: 페이지 제목
category: concepts | tools | patterns | journal
tags: [tag1, tag2]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [소스 파일명 또는 URL]
status: draft | active | archived
---
```

### 8.2 파일 명명 규칙

- 위키 페이지: `kebab-case.md` (예: `prompt-engineering.md`)
- 소스 파일: `YYYY-MM-DD-원본제목.md` (예: `2026-04-04-llm-wiki.md`)
- 영어 기술 용어는 영어 그대로 사용 (예: `RAG`, `prompt`, `fine-tuning`)

### 8.3 Wikilink 규칙

- 카테고리 포함 경로: `[[concepts/prompt-engineering]]`
- 첫 등장 시 링크, 같은 섹션 내 반복 시 생략
- 존재하지 않는 페이지 링크 허용 (Obsidian이 빨간색 표시 → 추후 생성 트리거)

---

## 9. Next Steps

1. [ ] Design 문서 작성 (`/pdca design ai-native-mind`)
   - CLAUDE.md Schema 상세 설계
   - Ingest/Query/Lint 워크플로우 상세
   - Obsidian 설정 가이드
2. [ ] 구현 (디렉토리 생성 + CLAUDE.md + 초기 파일)
3. [ ] llm-wiki.md를 첫 소스로 Ingest하여 검증

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-04-06 | Initial draft | Jayden Song |
