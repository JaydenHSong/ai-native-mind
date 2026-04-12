# ai-native-mind Wiki Schema

> AI 네이티브 코딩 프로그래머로 성장하기 위한 개인 지식 위키.
> Tobi Lütke의 LLM-Wiki 패턴을 Obsidian + Claude Code로 구현.

## Identity

이 위키는 **Jayden Song**이 AI 네이티브 프로그래머로 성장하는 과정에서 학습한 지식을 축적하는 개인 지식 베이스입니다.

- **주제**: AI/LLM 기술, 프로그래밍 패턴, 개발 도구, 학습 기록
- **목표**: 학습한 지식이 흩어지지 않고 누적·연결·진화하는 체계 구축
- **운영 원칙**: 사용자는 소스를 큐레이션하고 질문하며, LLM(Claude Code)이 위키의 모든 쓰기와 유지보수를 담당

## Directory Structure

### 3-Layer Architecture

```
ai-native-mind/
├── CLAUDE.md           # Layer 3: Schema (이 파일 - 위키 운영 규칙)
├── raw/                # Layer 1: 원본 소스 (불변, LLM 읽기전용)
│   ├── articles/       # Web Clipper로 수집한 웹 글
│   ├── papers/         # 논문, 기술 문서
│   ├── notes/          # 개인 메모, 대화 기록
│   └── assets/         # 이미지, 첨부파일
├── wiki/               # Layer 2: LLM이 관리하는 위키
│   ├── index.md        # 전체 페이지 카탈로그
│   ├── log.md          # 시간순 작업 기록
│   ├── overview.md     # 위키 전체 종합
│   ├── concepts/       # AI/프로그래밍 개념
│   ├── tools/          # 도구, 프레임워크
│   ├── patterns/       # 코딩 패턴, 방법론
│   ├── journal/        # 학습 일지
│   └── comparisons/    # 비교 분석
└── templates/          # 위키 페이지 템플릿
```

### 카테고리 분류 기준

| 카테고리 | 분류 질문 | 예시 |
|----------|----------|------|
| **concepts/** | "이것은 무엇인가?" | RAG, Fine-tuning, Prompt Engineering |
| **tools/** | "이것으로 무엇을 하는가?" | Claude Code, Obsidian, Cursor |
| **patterns/** | "어떻게 하는가?" | LLM-Wiki 패턴, PDCA, AI 페어 프로그래밍 |
| **journal/** | "언제, 무엇을 배웠는가?" | 학습 일지, 주간 회고 |
| **comparisons/** | "A와 B는 어떻게 다른가?" | RAG vs Wiki, Claude vs GPT |
| **meta** | 위키 시스템 파일 (index, log, overview) | index.md, log.md, overview.md |

**분류 애매할 때**: `concepts/`가 기본값. 나중에 옮길 수 있으니 고민하지 말고 일단 생성.

## Conventions

### Frontmatter 규칙

모든 위키 페이지는 반드시 아래 YAML frontmatter를 포함해야 한다:

```yaml
---
title: "페이지 제목"
category: concepts | tools | patterns | journal | comparisons
tags: [tag1, tag2]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources:
  - "raw/articles/파일명.md"
related:
  - "[[concepts/관련-페이지]]"
status: draft | active | archived
confidence: high | medium | low
---
```

**필수 필드**: title, category, tags, created, updated, sources, status
**선택 필드**: related, confidence

- `confidence`: 출처 1개 = low, 교차검증 = medium, 다수 출처 일치 = high
- `status`: 초안 = draft, 검증됨 = active, 오래됨 = archived

### 파일 명명 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| 위키 페이지 | `kebab-case.md` | `prompt-engineering.md` |
| 소스 (articles) | `YYYY-MM-DD-slug.md` | `2026-04-04-llm-wiki-pattern.md` |
| 소스 (papers) | `저자-연도-slug.md` | `vaswani-2017-attention.md` |
| 소스 (notes) | `YYYY-MM-DD-주제.md` | `2026-04-06-claude-code-tips.md` |
| 학습 일지 | `YYYY-MM-DD.md` | `2026-04-06.md` |

### Wikilink 규칙

- 형식: `[[카테고리/페이지명]]` (예: `[[concepts/prompt-engineering]]`)
- 표시 텍스트: `[[concepts/prompt-engineering|프롬프트 엔지니어링]]`
- 섹션 내 첫 등장만 링크, 반복 생략
- 존재하지 않는 페이지도 링크 가능 (Obsidian이 빨간색 표시 → 추후 생성)
- 소스 참조: `[출처](raw/articles/파일명.md)`

**Obsidian과 실제 경로 (`wiki/…`)**: 위키 파일은 `wiki/concepts/` 등 하위에 있지만, 링크는 `[[concepts/페이지명]]` 형태를 유지한다. 볼트 루트에 **심볼릭 링크** `concepts` → `wiki/concepts`, `patterns` → `wiki/patterns`, `tools` → `wiki/tools`, `comparisons` → `wiki/comparisons`, `journal` → `wiki/journal` 를 두어 Obsidian이 `[[concepts/…]]` 를 실제 파일로 해석하게 한다. (Windows에서는 개발자 모드 등으로 symlink 생성이 필요할 수 있다.)

### 언어 규칙

- 본문: **한국어**
- 기술 용어: 영어 그대로 유지 (RAG, LLM, fine-tuning, prompt 등)
- 처음 등장 시 한국어 설명 병기: "RAG(Retrieval-Augmented Generation, 검색 증강 생성)"
- 코드, 명령어: 영어 그대로

## Workflows

### Ingest 워크플로우

사용자가 `raw/`에 새 소스를 추가하고 "ingest 해줘"라고 요청하면:

1. 소스 파일 전체 읽기
2. 핵심 개념, 주장, 데이터 추출
3. 사용자에게 요약 + 핵심 포인트 공유하고 피드백 받기
4. 기존 위키 페이지와 겹치는 내용 확인
5. 새 페이지 생성 또는 기존 페이지 업데이트
6. 모든 관련 페이지에 교차참조(wikilink) 추가
7. frontmatter 완성 (모든 필수 필드)
8. `wiki/index.md`에 새 페이지 등록
9. `wiki/log.md`에 ingest 기록 추가
10. 모순되는 기존 내용 있으면 플래그하고 사용자에게 알림

**변경된 파일 목록을 반드시 보고한다.**

### Query 워크플로우

사용자가 질문하면:

1. `wiki/index.md` 읽어서 관련 페이지 탐색
2. 관련 위키 페이지들 읽기
3. 필요시 `raw/` 소스도 참조
4. 답변에 근거 위키 페이지 인용: `> 참조: [[concepts/페이지]]`
5. 위키에 없는 내용은 명시: "위키에 아직 이 주제 페이지가 없습니다"
6. 좋은 분석/비교가 나오면 사용자에게 위키 저장 제안

### Lint 워크플로우

사용자가 "lint 해줘"라고 요청하면:

1. 전체 위키 페이지 스캔
2. 체크 항목:
   - 깨진 wikilink (대상 파일 없음)
   - 고아 페이지 (index.md에 미등록)
   - frontmatter 누락/불일치
   - 페이지 간 모순되는 내용
   - 오래된 정보 (updated가 6개월 이상 전)
   - 빈 카테고리 폴더
   - confidence: low인데 관련 소스가 여러 개인 페이지
3. 건강 보고서 출력
4. 요청 시 자동 수정 가능한 것 수정, 수동 필요한 것 목록화

## Templates

각 카테고리별 페이지 생성 시 `templates/` 폴더의 해당 템플릿을 기반으로 작성한다.
템플릿은 최소 구조이며, 내용에 따라 섹션을 추가/생략할 수 있다.

- `templates/concept.md` — 개념 페이지
- `templates/tool.md` — 도구 페이지
- `templates/pattern.md` — 패턴 페이지
- `templates/journal.md` — 학습 일지
- `templates/comparison.md` — 비교 분석

## Current State

- **총 페이지 수**: 49
- **카테고리 현황**: concepts(16), tools(7), patterns(19), journal(1), comparisons(5)
- **소스 수**: 34개 (raw 노트 + papers; `2026-04-13-harness-casebook-anthropic-academy.md` 포함)
- **최근 활동**: 2026-04-13 **Harness 케이스북**(`patterns/harness-engineering-casebook`) — 도메인 30케이스 + Anthropic Academy 코스 맵·4주 트랙. 이전: Chapter Clear 월드맵·`campaign-map`, 2026-04-11 커리큘럼 프랙티스 6편·쉽게 읽기 패스·OWASP×TS·WDK·OTel 보강.
- **다음 할 일**: Anthropic 코스 이수 노트를 `journal/`에 남기기, 케이스북에서 본인 프로젝트 행만 골라 Guides/Sensors 적용
- **보안**: `SECURITY.md`, `.gitleaks.toml`, GitHub Actions(Gitleaks·dependency review), Dependabot, 강화된 `.gitignore` — 비밀·키·`.env` 실값은 커밋 금지.
