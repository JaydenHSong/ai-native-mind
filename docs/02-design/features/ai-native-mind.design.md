# ai-native-mind Design Document

> **Summary**: LLM-Wiki 패턴 기반 개인 지식 위키 — Clean Architecture 설계
>
> **Project**: ai-native-mind
> **Author**: Jayden Song
> **Date**: 2026-04-06
> **Status**: Draft
> **Architecture**: Option B — Clean Architecture

---

## Context Anchor

| Key | Value |
|-----|-------|
| **WHY** | 학습한 지식이 축적되지 않고 흩어져서 반복 학습하게 됨 |
| **WHO** | Jayden Song — AI 네이티브 코딩 프로그래머로 성장하려는 개발자 |
| **RISK** | 초기 Schema 설계가 부실하면 위키가 혼잡해져 유지보수 포기 가능 |
| **SUCCESS** | 30개 소스 Ingest 후에도 위키가 체계적이고 탐색 가능한 상태 유지 |
| **SCOPE** | Phase 1: 구조+Schema → Phase 2: 첫 Ingest → Phase 3: 운영 |

---

## 1. Overview

### 1.1 설계 목표

LLM-Wiki 패턴을 Obsidian + Claude Code 환경에 최적화하여 구현한다.
Clean Architecture를 선택하여 초기부터 체계적인 구조를 갖추고, 위키가 성장해도 탐색성과 일관성을 유지한다.

### 1.2 설계 원칙

1. **LLM이 모든 위키 쓰기를 담당** — 사용자는 raw/에만 파일 추가
2. **Schema가 진실의 원천** — CLAUDE.md에 모든 규칙을 명시
3. **Obsidian 네이티브 활용** — wikilink, frontmatter, graph view, Dataview
4. **점진적 성장** — 구조는 체계적이되, 콘텐츠는 점진적으로

---

## 2. Directory Structure

```
ai-native-mind/
│
├── CLAUDE.md                    # Layer 3: Schema (위키 운영 규칙)
│
├── raw/                         # Layer 1: 원본 소스 (불변, LLM 읽기전용)
│   ├── articles/                # Web Clipper로 수집한 웹 글
│   ├── papers/                  # 논문, 기술 문서, 공식 문서
│   ├── notes/                   # 개인 메모, 대화 기록, 아이디어
│   └── assets/                  # 이미지, 첨부파일 (Obsidian 다운로드)
│
├── wiki/                        # Layer 2: LLM이 관리하는 위키
│   ├── index.md                 # 전체 페이지 카탈로그 (카테고리별)
│   ├── log.md                   # 시간순 작업 기록
│   ├── overview.md              # 위키 전체 종합·현황
│   │
│   ├── concepts/                # AI/프로그래밍 개념 (what)
│   │   └── .gitkeep
│   ├── tools/                   # 도구, 프레임워크, 서비스 (with what)
│   │   └── .gitkeep
│   ├── patterns/                # 코딩 패턴, 아키텍처, 방법론 (how)
│   │   └── .gitkeep
│   ├── journal/                 # 학습 일지, 주간 회고, 인사이트 (when)
│   │   └── .gitkeep
│   └── comparisons/             # 비교 분석 (A vs B)
│       └── .gitkeep
│
├── templates/                   # 위키 페이지 템플릿
│   ├── concept.md
│   ├── tool.md
│   ├── pattern.md
│   ├── journal.md
│   └── comparison.md
│
├── docs/                        # PDCA 문서 (bkit)
│   ├── 01-plan/
│   └── 02-design/
│
└── llm-wiki.md                  # 원본 패턴 문서 (참고용)
```

### 2.1 카테고리 분류 기준

| 카테고리 | 질문 | 예시 |
|----------|------|------|
| **concepts/** | "이것은 무엇인가?" | RAG, Fine-tuning, Prompt Engineering, Transformer |
| **tools/** | "이것으로 무엇을 하는가?" | Claude Code, Obsidian, Cursor, Vercel AI SDK |
| **patterns/** | "어떻게 하는가?" | LLM-Wiki 패턴, PDCA, AI 페어 프로그래밍 |
| **journal/** | "언제, 무엇을 배웠는가?" | 주간 회고, 학습 기록, 실험 결과 |
| **comparisons/** | "A와 B는 어떻게 다른가?" | RAG vs Wiki, Claude vs GPT, Cursor vs Claude Code |

**분류 애매할 때**: concepts/가 기본값. 나중에 옮길 수 있으니 고민하지 말고 일단 생성.

---

## 3. Schema Design (CLAUDE.md)

### 3.1 CLAUDE.md 구조

```markdown
# ai-native-mind Wiki Schema

## Identity
- 이 위키의 주제와 목적

## Directory Structure
- 3-Layer 설명 (raw/wiki/schema)
- 카테고리 분류 기준

## Conventions
- Frontmatter 규칙
- 파일 명명 규칙
- Wikilink 규칙
- 언어 규칙

## Workflows
- Ingest 워크플로우
- Query 워크플로우
- Lint 워크플로우

## Templates
- 각 카테고리별 페이지 구조

## Current State
- 현재 위키 규모, 최근 활동 요약
```

### 3.2 Frontmatter 규칙

```yaml
---
title: "페이지 제목"
category: concepts | tools | patterns | journal | comparison
tags: [tag1, tag2, tag3]
created: 2026-04-06
updated: 2026-04-06
sources:
  - "raw/articles/2026-04-04-llm-wiki.md"
related:
  - "[[concepts/related-page]]"
status: draft | active | archived
confidence: high | medium | low    # 내용 신뢰도
---
```

| 필드 | 필수 | 설명 |
|------|:----:|------|
| title | O | 페이지 제목 |
| category | O | 카테고리 (폴더와 일치) |
| tags | O | 검색용 태그 (최소 1개) |
| created | O | 생성일 |
| updated | O | 최종 수정일 |
| sources | O | 참조한 원본 소스 경로 |
| related | - | 관련 위키 페이지 (wikilink) |
| status | O | 페이지 상태 |
| confidence | - | 내용 신뢰도 (출처가 하나면 low, 교차검증되면 high) |

### 3.3 파일 명명 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| 위키 페이지 | `kebab-case.md` | `prompt-engineering.md` |
| 소스 (articles) | `YYYY-MM-DD-제목-slug.md` | `2026-04-04-llm-wiki-pattern.md` |
| 소스 (papers) | `저자-연도-제목-slug.md` | `vaswani-2017-attention-is-all-you-need.md` |
| 소스 (notes) | `YYYY-MM-DD-주제.md` | `2026-04-06-claude-code-tips.md` |
| 이미지 | 원본 이름 유지 | `diagram.png` |
| 학습 일지 | `YYYY-MM-DD.md` | `2026-04-06.md` |

### 3.4 Wikilink 규칙

- 형식: `[[카테고리/페이지명]]` (예: `[[concepts/prompt-engineering]]`)
- 표시 텍스트: `[[concepts/prompt-engineering|프롬프트 엔지니어링]]`
- 섹션 내 첫 등장만 링크, 반복 생략
- 존재하지 않는 페이지도 링크 가능 (Obsidian 빨간 링크 → 생성 트리거)
- 소스 참조: `[출처: LLM-Wiki Pattern](raw/articles/2026-04-04-llm-wiki-pattern.md)`

### 3.5 언어 규칙

- 본문: 한국어
- 기술 용어: 영어 그대로 (RAG, LLM, fine-tuning, prompt 등)
- 처음 등장 시 한국어 설명 병기: "RAG(Retrieval-Augmented Generation, 검색 증강 생성)"
- 코드, 명령어: 영어 그대로

---

## 4. Workflow Design

### 4.1 Ingest 워크플로우

```
사용자                          Claude Code
  │                                │
  ├─ 1. raw/에 소스 추가 ──────────>│
  │    (Web Clipper 또는 수동)       │
  │                                │
  ├─ 2. "이거 ingest 해줘" ────────>│
  │                                ├─ 3. 소스 읽기
  │                                ├─ 4. 핵심 내용 파악
  │<─ 5. 요약 + 핵심 포인트 공유 ───┤
  │                                │
  ├─ 6. 피드백/강조점 전달 ────────>│
  │                                ├─ 7. 위키 페이지 생성/수정
  │                                │    - 새 페이지 생성 (해당 카테고리)
  │                                │    - 기존 페이지 업데이트 (교차참조)
  │                                │    - index.md 업데이트
  │                                │    - log.md 엔트리 추가
  │                                │    - overview.md 업데이트 (필요시)
  │<─ 8. 변경 사항 보고 ────────────┤
  │                                │
  └─ 9. Obsidian에서 결과 확인 ─────┘
```

**Ingest 체크리스트** (Claude Code가 매번 따름):

1. [ ] 소스 파일 전체 읽기
2. [ ] 핵심 개념, 주장, 데이터 추출
3. [ ] 기존 위키 페이지와 겹치는 내용 확인
4. [ ] 새 페이지 생성 또는 기존 페이지 업데이트
5. [ ] 모든 관련 페이지에 교차참조(wikilink) 추가
6. [ ] frontmatter 완성 (모든 필수 필드)
7. [ ] index.md에 새 페이지 등록
8. [ ] log.md에 ingest 기록 추가
9. [ ] 모순되는 기존 내용 있으면 플래그
10. [ ] 변경된 파일 목록 보고

### 4.2 Query 워크플로우

```
사용자                          Claude Code
  │                                │
  ├─ 1. 질문 ─────────────────────>│
  │                                ├─ 2. index.md 읽기 (관련 페이지 탐색)
  │                                ├─ 3. 관련 위키 페이지들 읽기
  │                                ├─ 4. 필요시 raw/ 소스도 참조
  │<─ 5. 답변 (위키 페이지 인용) ───┤
  │                                │
  ├─ 6. "이거 위키에 저장해줘" ────>│  (선택)
  │                                ├─ 7. 답변을 위키 페이지로 변환
  │                                ├─ 8. index.md, log.md 업데이트
  │<─ 9. 저장 완료 보고 ────────────┤
  └────────────────────────────────┘
```

**Query 규칙**:
- 답변에 근거 위키 페이지 인용: `> 참조: [[concepts/rag]]`
- 위키에 없는 내용은 명시: "위키에 아직 이 주제 페이지가 없습니다"
- 좋은 분석/비교는 사용자에게 위키 저장 제안

### 4.3 Lint 워크플로우

```
사용자                          Claude Code
  │                                │
  ├─ "위키 lint 해줘" ────────────>│
  │                                ├─ 1. 전체 위키 페이지 스캔
  │                                ├─ 2. 체크 항목:
  │                                │    □ 깨진 wikilink
  │                                │    □ 고아 페이지 (index에 없음)
  │                                │    □ frontmatter 누락/불일치
  │                                │    □ 페이지 간 모순
  │                                │    □ 오래된 정보 (updated 6개월+)
  │                                │    □ 빈 카테고리
  │                                │    □ 소스 없는 페이지 (confidence 체크)
  │<─ 3. 건강 보고서 ──────────────┤
  │                                │
  ├─ 4. "수정해줘" ───────────────>│
  │                                ├─ 5. 자동 수정 가능한 것 수정
  │                                ├─ 6. 수동 필요한 것 목록화
  │<─ 7. 수정 결과 보고 ────────────┤
  └────────────────────────────────┘
```

---

## 5. Template Design

### 5.1 Concept Template (`templates/concept.md`)

```markdown
---
title: "{제목}"
category: concepts
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
related: []
status: draft
confidence: low
---

# {제목}

## 한줄 정의

{이 개념을 한 문장으로 설명}

## 핵심 내용

{개념의 상세 설명}

## 왜 중요한가

{AI 네이티브 프로그래머에게 이 개념이 왜 중요한지}

## 관련 개념

- [[concepts/관련1]] — {관계 설명}
- [[concepts/관련2]] — {관계 설명}

## 참고 소스

- [소스 제목](raw/경로)
```

### 5.2 Tool Template (`templates/tool.md`)

```markdown
---
title: "{도구명}"
category: tools
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
related: []
status: draft
confidence: low
---

# {도구명}

## 한줄 설명

{이 도구가 무엇인지 한 문장으로}

## 핵심 기능

- {기능 1}
- {기능 2}

## 사용법 요약

{가장 중요한 사용 패턴}

## 장점과 한계

| 장점 | 한계 |
|------|------|
| {장점1} | {한계1} |

## 관련 도구

- [[tools/관련도구]] — {비교 포인트}

## 참고 소스

- [소스 제목](raw/경로)
```

### 5.3 Pattern Template (`templates/pattern.md`)

```markdown
---
title: "{패턴명}"
category: patterns
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
related: []
status: draft
confidence: low
---

# {패턴명}

## 한줄 설명

{이 패턴이 무엇인지}

## 문제 상황

{어떤 문제를 해결하는가}

## 해결 방법

{패턴의 핵심 구조/접근법}

## 적용 예시

{실제 적용 사례}

## 장단점

| 장점 | 단점 |
|------|------|
| {장점1} | {단점1} |

## 관련 패턴

- [[patterns/관련패턴]] — {관계}

## 참고 소스

- [소스 제목](raw/경로)
```

### 5.4 Journal Template (`templates/journal.md`)

```markdown
---
title: "{날짜} 학습 일지"
category: journal
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
related: []
status: active
---

# {날짜} 학습 일지

## 오늘 배운 것

- {학습 내용 1}
- {학습 내용 2}

## 인사이트

{새롭게 깨달은 것, 연결된 아이디어}

## 다음에 탐구할 것

- {후속 질문/주제}

## 관련 페이지

- [[concepts/관련]] — {어떤 연결}
```

### 5.5 Comparison Template (`templates/comparison.md`)

```markdown
---
title: "{A} vs {B}"
category: comparison
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
related: []
status: draft
confidence: low
---

# {A} vs {B}

## 핵심 차이

{가장 중요한 차이점 한 문장}

## 비교표

| 기준 | {A} | {B} |
|------|-----|-----|
| {기준1} | | |
| {기준2} | | |

## 언제 {A}를 쓸까

{A가 더 나은 상황}

## 언제 {B}를 쓸까

{B가 더 나은 상황}

## 결론

{종합 판단}

## 참고 소스

- [소스 제목](raw/경로)
```

---

## 6. Index & Log Design

### 6.1 index.md 구조

```markdown
---
title: "Wiki Index"
updated: YYYY-MM-DD
total_pages: N
---

# ai-native-mind Wiki Index

> 전체 {N}개 페이지 | 최종 업데이트: YYYY-MM-DD

## Concepts ({N}개)

- [[concepts/rag]] — 검색 증강 생성, LLM의 외부 지식 활용 패턴
- [[concepts/prompt-engineering]] — LLM에게 효과적으로 지시하는 기법

## Tools ({N}개)

- [[tools/claude-code]] — Anthropic의 CLI 기반 AI 코딩 도구
- [[tools/obsidian]] — 로컬 마크다운 기반 노트 앱

## Patterns ({N}개)

- [[patterns/llm-wiki]] — LLM이 유지보수하는 개인 지식 위키 패턴

## Journal ({N}개)

- [[journal/2026-04-06]] — 첫 Ingest, LLM-Wiki 패턴 정리

## Comparisons ({N}개)

- [[comparisons/rag-vs-wiki]] — RAG와 Wiki 방식 비교
```

### 6.2 log.md 구조

```markdown
---
title: "Wiki Log"
---

# ai-native-mind Wiki Log

## [2026-04-06] ingest | LLM-Wiki Pattern

- **Source**: `raw/articles/2026-04-04-llm-wiki-pattern.md`
- **Pages created**: `patterns/llm-wiki.md`, `concepts/rag.md`
- **Pages updated**: `index.md`
- **Notes**: 첫 번째 Ingest. 위키 패턴 자체를 기록.
```

**log.md 엔트리 형식**:
```
## [YYYY-MM-DD] {type} | {title}
```
- type: `ingest`, `query`, `lint`, `update`
- `grep "^## \[" wiki/log.md` 로 파싱 가능

---

## 7. Obsidian Settings Guide

### 7.1 Vault 설정

- **Vault 경로**: `~/Projects/ai-native-mind` 전체를 Vault로 열기
- **Files and links → Attachment folder**: `raw/assets/`
- **Files and links → New link format**: `Relative path to file`
- **Files and links → Use [[Wikilinks]]**: ON

### 7.2 권장 플러그인

| 플러그인 | 용도 | 필수 |
|----------|------|:----:|
| **Dataview** | frontmatter 기반 동적 쿼리 | O |
| **Graph View** (내장) | 위키 구조 시각화 | O |
| **Web Clipper** (브라우저) | 웹 글 마크다운 변환 | O |
| **Calendar** | journal/ 탐색 | - |
| **Templater** | 페이지 생성 시 템플릿 자동 적용 | - |

### 7.3 Dataview 활용 예시

**최근 업데이트된 페이지**:
```dataview
TABLE updated, category, tags
FROM "wiki"
WHERE status = "active"
SORT updated DESC
LIMIT 10
```

**소스 없는 페이지 (Lint 보조)**:
```dataview
LIST
FROM "wiki"
WHERE length(sources) = 0 AND file.name != "index" AND file.name != "log"
```

---

## 8. Test Plan

| 시나리오 | 검증 방법 | 성공 기준 |
|----------|-----------|-----------|
| 디렉토리 구조 생성 | `ls -R` 확인 | 모든 폴더/파일 존재 |
| CLAUDE.md Schema | 내용 검토 | 모든 규칙 포함 |
| 첫 Ingest (llm-wiki.md) | Ingest 워크플로우 실행 | 위키 페이지 생성 + index/log 업데이트 |
| Obsidian에서 열기 | Vault 열기 | 그래프 뷰에 노드/링크 표시 |
| Wikilink 유효성 | Obsidian 확인 | 빨간 링크 없음 |
| Frontmatter 일관성 | Dataview 쿼리 | 모든 필수 필드 존재 |

---

## 9. Risk Mitigation

| Risk | Mitigation | 구현 방법 |
|------|------------|-----------|
| Schema가 복잡해서 Ingest 느림 | Ingest 체크리스트 10단계로 정형화 | CLAUDE.md에 체크리스트 포함 |
| 카테고리 분류 혼란 | "질문 기반 분류 기준" + concepts/ 기본값 | §2.1 테이블 CLAUDE.md에 포함 |
| LLM이 규칙 안 지킴 | CLAUDE.md에 명시적 규칙 + 예시 | 모든 규칙에 예시 포함 |
| 위키 성장 시 탐색 한계 | index.md + Dataview 쿼리 | 100+ 페이지 시 qmd 도입 검토 |

---

## 10. Dependencies

| 항목 | 상태 | 비고 |
|------|------|------|
| Obsidian | 구매 예정 | 무료 버전도 가능하나 Sync/Publish 시 유료 |
| Obsidian Web Clipper | 설치 필요 | 브라우저 확장 (무료) |
| Dataview 플러그인 | 설치 필요 | 커뮤니티 플러그인 (무료) |
| Git | 이미 사용 중 | 버전 관리 |
| Claude Code | 이미 사용 중 | 위키 유지보수 LLM |

---

## 11. Implementation Guide

### 11.1 구현 순서

| 순서 | 작업 | 산출물 | 예상 시간 |
|:----:|------|--------|:---------:|
| 1 | 디렉토리 구조 생성 | 폴더 + .gitkeep | 2분 |
| 2 | CLAUDE.md Schema 작성 | CLAUDE.md | 10분 |
| 3 | 템플릿 파일 생성 | templates/*.md | 3분 |
| 4 | index.md, log.md 초기화 | wiki/index.md, wiki/log.md | 2분 |
| 5 | overview.md 초기화 | wiki/overview.md | 2분 |
| 6 | llm-wiki.md 첫 Ingest | wiki/ 페이지들 | 10분 |
| 7 | Obsidian 설정 확인 | Vault 열기 + 검증 | 5분 |

### 11.2 Module Map

| Module | 내용 | 파일 수 |
|--------|------|:-------:|
| **module-1** | 디렉토리 구조 + .gitkeep | ~15 |
| **module-2** | CLAUDE.md Schema | 1 |
| **module-3** | 템플릿 파일들 | 5 |
| **module-4** | 초기 위키 파일 (index, log, overview) | 3 |
| **module-5** | 첫 Ingest (llm-wiki.md) | ~5 |

### 11.3 Session Guide

**권장: 1세션에 전체 완료 가능** (약 35분)

module-1~4는 구조 생성이라 한 번에 진행하고, module-5(첫 Ingest)는 대화형으로 진행.

```
Session 1: /pdca do ai-native-mind
  → module-1~4: 구조 생성 (자동, ~5분)
  → module-5: 첫 Ingest (대화형, ~15분)
  → Obsidian 열어서 확인
```

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-04-06 | Initial draft — Clean Architecture | Jayden Song |
