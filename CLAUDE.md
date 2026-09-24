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
├── wiki/               # Layer 2: LLM이 관리하는 이중언어 위키
│   ├── ko/             # 한국어 정본 (source of truth)
│   │   ├── index.md
│   │   ├── log.md
│   │   ├── overview.md
│   │   ├── campaign-map.md
│   │   ├── concepts/
│   │   ├── tools/
│   │   ├── patterns/
│   │   ├── journal/
│   │   └── comparisons/
│   └── en/             # 영어 번역본/파생본
│       ├── index.md
│       ├── log.md
│       ├── overview.md
│       ├── campaign-map.md
│       ├── concepts/
│       ├── tools/
│       ├── patterns/
│       ├── journal/
│       └── comparisons/
└── templates/          # 위키 페이지 템플릿
```

### Bilingual 운영 원칙

- `wiki/ko/`가 **정본(source of truth)** 이다. 새 지식은 먼저 한국어 위키에 반영한다.
- `wiki/en/`은 **번역본/파생본** 이다. 영어판은 한국어판을 기준으로 동기화한다.
- 가능하면 `ko`와 `en`은 **같은 slug / 같은 카테고리 경로**를 유지한다.
- 평일 유지보수/ingest는 기본적으로 `wiki/ko/`만 대상으로 한다.
- 영어판은 배치 동기화가 기본이며, 특히 `concepts/`, `tools/`, `patterns/`, `comparisons/`, `journal/`, `index.md`, `overview.md`, `campaign-map.md`를 우선 관리한다.
- `wiki/en/`에도 `log.md`를 둘 수 있다. 한국어 `wiki/ko/log.md`가 canonical 운영 기록이지만, 영어판에는 이를 번역/요약한 대응 `wiki/en/log.md`를 유지할 수 있다.
- `journal/`은 학습 과정의 1차 기록이지만 영어판에서도 대응 문서를 유지한다. 기본 원칙은 한국어 원문을 먼저 쓰고, 영어판은 배치 동기화한다.

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

**Obsidian과 실제 경로 (`wiki/ko`, `wiki/en`)**: 기본 작업공간은 한국어 정본 `wiki/ko/` 이다. 따라서 일반적인 wikilink는 계속 `[[concepts/페이지명]]` 형태를 유지하고, Obsidian에서는 이를 `wiki/ko/concepts/…`로 해석하도록 맞춘다. 영어판은 `wiki/en/...`에 실제 파일을 두되, 번역/동기화 작업에서 같은 상대 경로(slug)를 유지한다. 필요하면 언어별 워크스페이스/루트 매핑을 별도로 두되, 본문 안 링크 규칙 자체는 복잡하게 늘리지 않는다.

### 위키 포함/제외 규칙

#### 위키에 들어가는 것

- `wiki/**/*.md` — 정제된 지식 페이지, 일지, 메타 문서
- `raw/**/*.md` — 원본 캡처·논문·노트 (읽기전용 source layer)
- `templates/*.md` — 새 페이지 생성 템플릿
- `CLAUDE.md` — 위키 운영 규칙 자체

#### 위키에 들어가지 않는 것

- `examples/` — 코드 스케치, widget, JSON trace 예시. **위키 본문이 아니라 보조 artifact**다.
- `web/` — Vercel 배포용 독립 웹 앱 루트. 위키 본문/카탈로그 대상이 아니다.
- `.obsidian/` — 볼트 앱 설정. 위키 지식이 아니라 뷰어/에디터 설정이다.
- `.claude/`, `.bkit/` — 에이전트/도구 로컬 상태
- `raw/assets/`의 바이너리 첨부 — source supporting asset이지 위키 본문이 아니다
- `.git/`, OS 잡파일 (`.DS_Store` 등)

#### Git에 올리는 것

- 지식 본체: `wiki/`, `raw/`, `templates/`, `CLAUDE.md`
- 독립 앱/코드: `web/` (Vercel 배포용 웹 소스)
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

- `wiki/ko/` 본문: **한국어**
- `wiki/en/` 본문: **자연스러운 기술 영어**
- 기술 용어: 영어 그대로 유지 (RAG, LLM, fine-tuning, prompt 등)
- 한국어 문서에서 처음 등장 시 한국어 설명 병기: "RAG(Retrieval-Augmented Generation, 검색 증강 생성)"
- 영어 문서는 한국어 정본의 의미를 충실히 번역하되, 새 주장·새 근거·새 결론을 임의로 추가하지 않는다.
- 코드, 명령어: 영어 그대로

## Workflows

### Ingest 워크플로우

사용자가 `raw/`에 새 소스를 추가하고 "ingest 해줘"라고 요청하면:

1. 소스 파일 전체 읽기
2. 핵심 개념, 주장, 데이터 추출
3. 사용자에게 요약 + 핵심 포인트 공유하고 피드백 받기
4. 기존 위키 페이지와 겹치는 내용 확인
5. 새 페이지 생성 또는 기존 페이지 업데이트 (`wiki/ko/` 기준)
6. 모든 관련 페이지에 교차참조(wikilink) 추가
7. frontmatter 완성 (모든 필수 필드)
8. `wiki/ko/index.md`에 새 페이지 등록
9. `wiki/ko/log.md`에 ingest 기록 추가
10. 모순되는 기존 내용 있으면 플래그하고 사용자에게 알림

**변경된 파일 목록을 반드시 보고한다.**

**중요**: ingest 단계에서는 영어판을 즉시 수정하지 않아도 된다. 영어판 반영은 별도 번역/동기화 사이클에서 처리한다.

### EN Sync 워크플로우

사용자가 영어판 번역/동기화를 요청하거나 정기 금요일 배치 작업을 돌릴 때:

1. `wiki/ko/`와 `wiki/en/`의 대응 경로를 비교한다.
2. 영어판에 없는 문서, 한국어판보다 `updated`가 뒤처진 문서, 메타 문서 차이를 찾는다.
3. 우선순위는 `concepts/`, `tools/`, `patterns/`, `comparisons/`, `journal/`, `en/index.md`, `en/log.md`, `en/overview.md`, `en/campaign-map.md` 이다.
4. 대응 영어 문서가 없으면 새로 만들고, 있으면 한국어 정본에 맞춰 갱신한다.
5. `journal/` 날짜 문서는 한국어판과 같은 파일명/slug를 유지하면서 영어로 번역한다.
6. `ko/log.md`도 영어판에 대응 문서를 유지한다. `wiki/en/log.md`를 한국어 정본 기준으로 번역/동기화한다.
7. 번역 후 관련 메타 문서(`en/index.md`, `en/log.md`, 필요시 `en/overview.md`, `en/campaign-map.md`)도 함께 정리한다.
8. 최종 보고에는 생성/수정한 영어 파일 목록과 아직 남은 번역 공백을 함께 적는다.

### Query 워크플로우

사용자가 질문하면:

1. 기본적으로 `wiki/ko/index.md` 읽어서 관련 페이지 탐색
2. 관련 위키 페이지들 읽기
3. 필요시 `raw/` 소스도 참조
4. 답변에 근거 위키 페이지 인용: `> 참조: [[concepts/페이지]]`
5. 질문이 영어판 기준인지 명확하면 `wiki/en/`도 함께 확인한다.
6. 위키에 없는 내용은 명시: "위키에 아직 이 주제 페이지가 없습니다"
7. 좋은 분석/비교가 나오면 사용자에게 위키 저장 제안

### Lint 워크플로우

사용자가 "lint 해줘"라고 요청하면:

1. 전체 위키 페이지 스캔 (`wiki/ko`, `wiki/en` 모두)
2. 체크 항목:
   - 깨진 wikilink (대상 파일 없음)
   - 고아 페이지 (언어별 index.md에 미등록)
   - frontmatter 누락/불일치
   - 페이지 간 모순되는 내용
   - 오래된 정보 (updated가 6개월 이상 전)
   - 빈 카테고리 폴더
   - confidence: low인데 관련 소스가 여러 개인 페이지
   - ko/en 대응 문서 간 누락 또는 과도한 드리프트
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

- **위키 구조**: `wiki/ko`(한국어 정본) + `wiki/en`(영어 번역본) 이중언어 운영
- **페이지 수**: `wiki/ko` 81개 / `wiki/en` 61개
- **카테고리 현황**: ko = concepts(20), tools(9), patterns(20), comparisons(9), journal(19), meta(4) / en = concepts(20), tools(9), patterns(20), comparisons(9), meta(3, `log.md` 없음)
- **소스 수**: 49개 (raw 노트 + papers; 2026-05-17 추가분 3편 포함)
- **최근 활동**: 2026-05-17 **일요 데일리 ingest + weekly review follow-up** — arXiv 2510.25445 *Mohamad Abou Ali · Fadi Dornaika* "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions" (2025-10-29) **PRISMA 90-study** review, dual paradigm **Symbolic/Classical vs Neural/Generative**, healthcare↔symbolic / finance↔neural, **hybrid neuro-symbolic** 필요 + arXiv 2605.05583 *Liao et al.* "Belief Memory: Agent Memory Under Partial Observability" (2026-05-07) **candidate conclusion + probability**, **Noisy-OR**, LoCoMo·ALFWorld에서 best average performance, deterministic memory의 self-reinforcing error 비판 + arXiv 2605.03228 *Wang et al.* "MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory" (2026-05-04) **Memory As Guardrail Enforcement**, safety-focused **shadow memory**, AgentDojo Banking/Slack, detection accuracy 향상·majority early-stage detection·utility overhead 미미 + late follow-up 3편(Human-Inspired Memory / FeatureBench / LITMUS) 반영. **후속 정리**: `comparisons/agent-memory-taxonomy.md` 신설로 memory를 **task/productivity / belief / lifecycle / safety** 네 층으로 재분류. **결론**: 2026-05-14에 생긴 2x3 좌표계(descriptive/prescriptive/tooling × 학습/정형화/측정)가 2026-05-15의 6/9에서 오늘 **9/9 완성**됐고, 그 위에서 memory taxonomy까지 한 번 더 압축됨. 이전: 2026-05-17 hygiene-review(운영 경계 정리), 2026-05-15 금요 데일리+주간 리뷰(ACDL·Constraint Decay·GroupMemBench), 2026-05-14 Above-the-Model Layer(Zhang/Zhong-Zhu/WildClawBench).
- **다음 할 일**: Anthropic 코스 이수 노트를 `journal/`에 남기기, 케이스북에서 본인 프로젝트 행만 골라 Guides/Sensors 적용. 후속 후보: (1) 새 [[comparisons/agent-memory-taxonomy]] 를 바탕으로 `[[concepts/ai-memory-systems]]` 본문에 productivity/task memory까지 포함한 정식 taxonomy 표 승격, (2) Zhong/Zhu 11 책임 본문 정독 후 [[patterns/harness-engineering-casebook]] 30 case를 11 책임 column으로 lint, (3) Zhang JSON schema를 `examples/`에 1 trace 1 JSON mini-sketch, (4) 다음 weekly review에서 framework AI-friendliness guide prediction과 harness-as-variable prediction 검증.
- **보안**: `SECURITY.md`, `.gitleaks.toml`, GitHub Actions(Gitleaks·dependency review), Dependabot, 강화된 `.gitignore` — 비밀·키·`.env` 실값은 커밋 금지.
