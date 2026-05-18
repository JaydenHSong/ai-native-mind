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
category: concepts | tools | patterns | journal | comparisons | meta
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

#### raw/ 파일 frontmatter (별도 표준)

`raw/articles/` 파일은 위키 페이지가 아닌 **원본 캡처**이므로 별도 키 셋을 쓴다:

```yaml
---
title: "원본 제목"
source_url: "https://..."
author: "저자 또는 발행처"
published: YYYY-MM-DD          # 원문 게시일 (불명확하면 'YYYY-MM (approx)' 허용)
collected: YYYY-MM-DD          # 위키에 수집한 날
tags: [tag1, tag2]
status: ingested               # 또는 captured (정독 전), reviewed (정독 완료)
---
```

**규칙**: 새 raw 파일을 만들기 전에 **같은 폴더의 가장 최근 파일** 한 개를 열어 frontmatter 키 셋과 비교한다. 키가 다르면 기존 패턴을 따른다 (필드 이름 변경·추가·삭제 금지). 새 키가 정말 필요하면 이 CLAUDE.md를 먼저 업데이트한 뒤 반영한다.

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

### 위키 포함/제외 규칙

#### 위키에 들어가는 것

- `wiki/**/*.md` — 정제된 지식 페이지, 일지, 메타 문서
- `raw/**/*.md` — 원본 캡처·논문·노트 (읽기전용 source layer)
- `templates/*.md` — 새 페이지 생성 템플릿
- `CLAUDE.md` — 위키 운영 규칙 자체

#### 위키에 들어가지 않는 것

- `examples/` — 코드 스케치, widget, JSON trace 예시. **위키 본문이 아니라 보조 artifact**다.
- `.obsidian/` — 볼트 앱 설정. 위키 지식이 아니라 뷰어/에디터 설정이다.
- `.claude/`, `.bkit/` — 에이전트/도구 로컬 상태
- `raw/assets/`의 바이너리 첨부 — source supporting asset이지 위키 본문이 아니다
- `.git/`, OS 잡파일 (`.DS_Store` 등)

#### Git에 올리는 것

- 지식 본체: `wiki/`, `raw/`, `templates/`, `CLAUDE.md`
- 재현 가능한 보조 artifact: `examples/`, `SECURITY.md`, `.gitleaks.toml`, `.github/` 등 저장소 운영 파일
- 공유 가치가 있는 Obsidian 설정만 제한적으로 허용: `app.json`, `appearance.json`, `core-plugins.json`, `community-plugins.json`

#### Git에 올리지 않는 것

- 개인/로컬 상태: `.claude/`, `.bkit/`, `.obsidian/workspace.json`, `.obsidian/graph.json`, `.obsidian/workspace-mobile.json`, `.obsidian/hotkeys.json`
- 설치형 플러그인 산출물: `.obsidian/plugins/`
- 비밀값/환경파일: `.env*`, 키·인증서
- OS/editor 잡파일: `.DS_Store`, `Thumbs.db`, swap, backup

#### 운영 원칙

- `wiki/`에 없는 파일은 **위키 지식으로 index/log에 등록하지 않는다**.
- `examples/`는 위키에서 링크할 수는 있지만 페이지 수(total pages)에 포함하지 않는다.
- 새 파일을 만들 때는 먼저 질문한다: **(1) 지식 본문인가? (2) 원본 source인가? (3) 실행 예시 artifact인가? (4) 로컬 상태인가?** 카테고리가 불명확하면 `raw/`나 `wiki/`에 밀어 넣지 말고 사용자 확인 또는 별도 보조 폴더를 만든다.
- Git 기준은 "다른 기기/다른 시점에 다시 받아도 지식 또는 재현 가치가 있는가"이다. 개인 UI 상태·캐시·플러그인 설치물은 제외한다.

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

- **총 페이지 수**: 74 (콘텐츠 70 + meta 4)
- **카테고리 현황**: concepts(20), tools(9), patterns(20), journal(12), comparisons(9), meta(4) — *index.md 카탈로그가 ground truth*
- **소스 수**: 49개 (raw 노트 + papers; 2026-05-17 추가분 3편 포함)
- **최근 활동**: 2026-05-17 **일요 데일리 ingest + weekly review follow-up** — arXiv 2510.25445 *Mohamad Abou Ali · Fadi Dornaika* "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions" (2025-10-29) **PRISMA 90-study** review, dual paradigm **Symbolic/Classical vs Neural/Generative**, healthcare↔symbolic / finance↔neural, **hybrid neuro-symbolic** 필요 + arXiv 2605.05583 *Liao et al.* "Belief Memory: Agent Memory Under Partial Observability" (2026-05-07) **candidate conclusion + probability**, **Noisy-OR**, LoCoMo·ALFWorld에서 best average performance, deterministic memory의 self-reinforcing error 비판 + arXiv 2605.03228 *Wang et al.* "MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory" (2026-05-04) **Memory As Guardrail Enforcement**, safety-focused **shadow memory**, AgentDojo Banking/Slack, detection accuracy 향상·majority early-stage detection·utility overhead 미미 + late follow-up 3편(Human-Inspired Memory / FeatureBench / LITMUS) 반영. **후속 정리**: `comparisons/agent-memory-taxonomy.md` 신설로 memory를 **task/productivity / belief / lifecycle / safety** 네 층으로 재분류. **결론**: 2026-05-14에 생긴 2x3 좌표계(descriptive/prescriptive/tooling × 학습/정형화/측정)가 2026-05-15의 6/9에서 오늘 **9/9 완성**됐고, 그 위에서 memory taxonomy까지 한 번 더 압축됨. 이전: 2026-05-17 hygiene-review(운영 경계 정리), 2026-05-15 금요 데일리+주간 리뷰(ACDL·Constraint Decay·GroupMemBench), 2026-05-14 Above-the-Model Layer(Zhang/Zhong-Zhu/WildClawBench).
- **다음 할 일**: Anthropic 코스 이수 노트를 `journal/`에 남기기, 케이스북에서 본인 프로젝트 행만 골라 Guides/Sensors 적용. 후속 후보: (1) 새 [[comparisons/agent-memory-taxonomy]] 를 바탕으로 `[[concepts/ai-memory-systems]]` 본문에 productivity/task memory까지 포함한 정식 taxonomy 표 승격, (2) Zhong/Zhu 11 책임 본문 정독 후 [[patterns/harness-engineering-casebook]] 30 case를 11 책임 column으로 lint, (3) Zhang JSON schema를 `examples/`에 1 trace 1 JSON mini-sketch, (4) 다음 weekly review에서 framework AI-friendliness guide prediction과 harness-as-variable prediction 검증.
- **보안**: `SECURITY.md`, `.gitleaks.toml`, GitHub Actions(Gitleaks·dependency review), Dependabot, 강화된 `.gitignore` — 비밀·키·`.env` 실값은 커밋 금지.
