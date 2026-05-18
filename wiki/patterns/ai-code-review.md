---
title: "AI 코드 리뷰 워크플로우"
category: patterns
tags: [code-review, workflow, solo-developer, claude-code, execution-grounding, constraint-decay, framework-sensitivity]
created: 2026-04-09
updated: 2026-05-15
sources:
  - "raw/notes/2026-04-09-ai-code-review.md"
  - "raw/articles/2026-05-13-verify-before-you-fix-execution-grounding.md"
  - "raw/articles/2026-05-15-constraint-decay-backend-code-fragility.md"
related:
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/subagents-delegation]]"
  - "[[concepts/cognitive-debt]]"
  - "[[patterns/git-ai-workflow]]"
status: active
confidence: high
---

# AI 코드 리뷰 워크플로우

## 쉽게 읽기

**비유**: 혼자 코딩할 때 **가상 동료**에게 “이 변경 괜찮아?” 묻는 과정이다. 사람 리뷰어가 없어도, AI가 **버그·보안·엣지 케이스**를 짚어 주도록 습관을 만든다.

| 용어 | 풀이 |
|------|------|
| **PR** | 내 브랜치 변경을 메인에 합치자고 올리는 **검토 요청** |
| **인라인 코멘트** | 특정 줄 옆에 달리는 **쪽지** |
| **Correctness** | 문법보다 **논리가 맞는지**가 중심인 검토 |

## 한줄 설명

1인 개발자가 AI를 활용해 **동료 리뷰 없이도** 코드 품질을 유지하는 실전 워크플로우.

## Claude Code Review (공식)

### 핵심 특징
- GitHub PR 자동 리뷰
- 인라인 코멘트 포스팅
- 전문화된 에이전트가 코드 변경 분석
- **Correctness 중심** (포매팅이 아님)

### 분석 영역
- Logic errors
- Security vulnerabilities
- Broken edge cases
- Subtle regressions
- Full codebase context 활용

## 3가지 핵심 워크플로우

### 1. Plan-Review-Execute 패턴

**핵심 원칙**: 계획 없이 코딩 시작하는 것이 최대 실수.

```
1. Claude A: 계획 작성
2. Claude B: "스태프 엔지니어처럼" 리뷰
3. Claude A: 리뷰 반영 + 실행
```

### 2. Test-First with AI

```
1. 사람: 테스트 작성 (이해 보장)
2. AI: 구현
3. 테스트 실행 → 통과까지 반복
4. AI: 엣지 케이스 추가
```

**효과**: [[concepts/cognitive-debt|Cognitive Debt]] 방지 — 최소한의 이해 유지.

### 3. Two-Phase Review

```
Phase 1: Self-review
  - AI에게 "방금 쓴 코드를 critical하게 리뷰해달라"
  - 다른 관점으로 보기

Phase 2: Human review
  - 사람이 AI 리뷰 결과 + 원본 코드 모두 확인
  - "AI가 놓쳤을 만한 것"에 집중
```

## 핵심 원칙 (Claude Code 제작자 100줄 워크플로우)

### 1. Single Source of Truth
- CLAUDE.md에 모든 규칙
- 2500 토큰 (~100줄) 제한
- 버전 관리 (git)

### 2. 실수는 CLAUDE.md에 기록

> **"Anytime we see Claude do something incorrectly, we add it to CLAUDE.md so it doesn't repeat next time."**

- 주당 여러 번 업데이트
- 같은 실수 반복 금지

### 3. Minimal Code Changes
- 가능한 한 간단한 변경
- 줄을 추가하기보다 **삭제**
- YAGNI 원칙 엄수

### 4. Slash Commands for Repetition
- 하루에 여러 번 하는 작업 = slash command
- Inner loop 워크플로우 자동화

### 5. Treat AI Output as Junior Developer Code
- 매 스니펫을 주니어가 쓴 것처럼 취급
- 읽고, 실행하고, 테스트
- "작동한다"는 말만 믿지 않기

## Addy Osmani의 LLM Workflow (2026)

### Context First
작업 시작 전 관련 파일/문서 로드. **Context가 부족하면 결과도 나쁨**.

### Incremental Changes
한 번에 한 가지만. 작은 커밋으로 진행. 각 단계 검증.

### Test-Driven AI
테스트가 AI를 가이드. Red → AI가 Green → Refactor.

### The 80% Problem Awareness
AI가 80% 해결. **나머지 20%가 진짜 일**. 이 20%에 시간 투자.

## GitHub Actions 통합

```yaml
# .github/workflows/claude-review.yml
name: Claude PR Review
on: pull_request

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          trigger: pull_request
          prompt: "Review for correctness, security, edge cases"
```

**효과**: Claude가 diff 읽고 인라인 코멘트 + 요약 포스팅. 사람은 사전 분류된 PR을 검토.

## 1인 개발자의 구체적 루틴

### 매일
1. CLAUDE.md 확인 (변경 있으면 커밋)
2. 작업 시작 → Plan 먼저
3. 작은 단위로 구현
4. Self-review 후 커밋

### PR 만들 때
1. `/commit` → 커밋 메시지 생성
2. `/pr` → PR 설명 자동 생성
3. Claude Code Review 자동 실행
4. 리뷰 반영 후 머지

### 주간
1. CLAUDE.md 리팩토링 (200줄 이하 유지)
2. 반복 작업 → slash command 추가
3. 실수 패턴 → CLAUDE.md 금지 항목에 추가

## 2026-05-13 보강 — Execution Grounding (Verify Before You Fix)

[Verify Before You Fix (arXiv 2604.10800v1)](https://arxiv.org/abs/2604.10800v1), Gajjar/GWU, 2026-04-12. Cross-language(Java/Python/C++) vulnerability 탐지·수리 파이프라인에 **strict invariant**를 박는다: *"No repair action is taken without execution-based confirmation of exploitability."*

### 3-stage pipeline

```
Stage 1: Hybrid Structural-Semantic Detection
   - uAST (Universal AST: Java/Python/C++ → 공통 schema)
   - GraphSAGE + Qwen2.5-Coder-1.5B embedding, two-way gating fusion

Stage 2: Execution-Grounded Agentic Validation
   - Stage 1 후보를 실행해 exploit 여부 확인
   - 추론만으로 확정 금지

Stage 3: Validation-Aware Iterative Repair
   - Stage 2 confirm된 vulnerability만 repair
   - Repair 결과도 execution으로 verify (loop)
```

학습된 classifier의 출력은 *probabilistic inference*이지 *verified conclusion*이 아니다 — 이 차이를 무시하고 repair로 직진하면 *compounding failure*(단계마다 작은 오탐이 곱해짐)가 누적된다.

### 본 페이지의 "Plan-Review-Execute"와 짝

위 1번 [Plan-Review-Execute 패턴](#1-plan-review-execute-패턴)은 "Claude A 계획 → Claude B 리뷰 → Claude A 실행"이다. Verify Before You Fix는 여기에 **Execute 직전 execution gate**를 추가한다:

```
1. Claude A: 계획
2. Claude B: 리뷰
3. Claude A: Patch 후보 작성
3.5. Verifier: 단위 테스트/exploit 재현 실행 → PASS만 commit  ← 추가
4. (PASS 시) Commit, (FAIL 시) Stage 3 루프
```

1인 개발자 즉시 적용 (over-engineering 없이):

- `pre-commit` hook에 변경 영향 파일의 테스트만 자동 실행
- AI가 제안한 fix에 대해 *exploit 재현 케이스*가 있다면 그 케이스로 회귀 테스트
- Repair budget cap (e.g., 3회 retry) — 발산 방지

### 한계

- **Execution이 가능한 도메인에 한정**: 자연어 답변, 디자인 의사결정 등에는 직접 매핑 불가. Text 도메인은 같은 날 ingest한 [[concepts/context-rot-hallucination#2026-05-13 보강 — Typed Grounding GSAR|GSAR]](typed grounding)가 다른 verifier 형태로 답한다. 셋(GSAR / 본 논문 / Affordance Agent Harness)의 도메인-별 verifier 매핑은 [[concepts/harness-engineering#2026-05-13 보강 — Verification-Gated Harness, 3-도메인 매핑|Verification-Gated Harness 3-도메인 매핑]]에 정리.
- **uAST 정확도가 cross-language 상한**: 세 언어를 잘 normalize 못하면 Stage 1이 무너진다.

## 2026-05-15 보강 — Constraint Decay (Functional + Structural Dual Evaluation)

[Dente · Satriani · Papotti](https://arxiv.org/abs/2605.06445) (EURECOM, 2026-05-07)는 LLM 에이전트가 *기능 정확성*은 잘 풀어도 **구조 제약**(아키텍처 패턴 · DB · ORM)을 *누적*해서 부과하면 capable model도 평균 30점 추락한다는 phenomenon을 *Constraint Decay*로 명명했다 (100 task × 8 web framework, unified API contract).

| 발견 | 정량 |
|---|---|
| 구조 제약 누적 시 capable config | 평균 **−30 points** assertion pass rate |
| 약한 configuration | **≈ 0** 수렴 |
| Framework sensitivity | **Flask** 강함 / **FastAPI · Django** 평균적으로 substantially worse |
| 주된 root cause | **Data-layer defect** — incorrect query composition, ORM runtime violation |

### Plan-Review-Execute에 *Phase 2.5* 끼우기

위의 [3-stage Verify-Before-You-Fix](#2026-05-13-보강-execution-grounding-verify-before-you-fix) 처방이 *exploit 재현*(보안)에 초점이라면, Constraint Decay는 *구조 idiom* — 둘은 같은 layer(Review)에서 *다른 verifier*가 필요함을 보인다.

| Phase | Verifier | 출력 |
|---|---|---|
| 2. AI Review (기존) | LLM 자기 검토 | 코드 의견 |
| **2.5 Structural Verify** ← 신규 | **Static framework idiom checker** (예: ruff + framework-specific rule pack) | "DRF ViewSet 누락" / "FastAPI dependency injection misuse" 등 구조 위반 enum |
| 3. Execute (기존) | 테스트 실행 | pass/fail |

→ 1인 개발자 ROI: AI가 짠 코드의 *PR 거절 사유 1순위*가 "팀 컨벤션 위반"인데, 단일 LLM은 이걸 못 본다. Static idiom rule pack(라이브러리별 lint plugin) 두 줄 추가가 30점 차이를 메운다.

### Framework 선택 기준에 *AI-friendliness* 차원 추가

| Framework | 구조 명시성 | AI 친화도 (논문 추정) |
|---|---|---|
| Flask | minimal, explicit | **상** |
| FastAPI | convention-heavy (DI, Pydantic) | 중·하 |
| Django | convention-heavy (apps, ORM, DRF) | 하 |

→ "*인기 stack*"과 "*AI가 잘 짜는 stack*"이 같지 않다. 1인 개발자가 *AI 페어 코딩 비중 높은* 프로젝트를 시작한다면 framework 선택을 *그 비중* 기준으로 재가중. [[patterns/agent-server-harness]]의 백엔드 선택 가이드에 한 줄 추가 후보.

### 본 위키와의 짝

- [[concepts/context-rot-hallucination]] — Context Rot이 *입력 길이*에서 capability 곡선이 꺾이는 현상이라면, Constraint Decay는 *입력 제약 수*에서 꺾이는 현상. 둘 다 *Capability decay* family.
- [[concepts/llm-evaluation]] — "Functional + Structural" *dual evaluation*은 [[comparisons/agent-eval-frameworks]] 6대장이 아직 표면에 노출하지 않은 메뉴 (2026-05-14 self-declared prediction의 *간접* 후속 증거).
- [[patterns/agent-server-harness]] — 위 framework 표를 옮겨 갈 후보 위치.

### 한계 (추정 — 본문 미독)

- 100 task의 *동일 API contract* 가정이 prod 다양성을 압축할 수 있음.
- 8 framework 중 본문 명시 3개(Flask/FastAPI/Django), 나머지 5는 PDF 정독 후.
- "Configuration"의 모델·prompt·tool 세부는 본문 필요.
- Framework idiom과 학습 corpus 비중 간 confound 분리 어려움.

→ 2x3 좌표계의 **(descriptive, 측정)** 칸을 부분 충당. Wei(descriptive, 정형화)·WildClawBench(tooling, 측정) 사이의 *실태조사면서 정량* 위치.

## Chapter Clear 가이드

- **소속 챕터**: Chapter 7 (엔드게임)
- **퀘스트**: 최근 변경 1개를 self-review와 AI review 두 단계로 점검한다.
- **클리어 조건**: correctness/보안/엣지 케이스 중 최소 1개 개선점을 찾아 반영한다.
- **보상(산출물)**: 내 코드 리뷰 체크리스트 v1
- **다음 퀘스트**: [[patterns/ai-cost-management]] -> [[wiki/campaign-map]]

## 참고 소스

- [AI 코드 리뷰 리서치](raw/notes/2026-04-09-ai-code-review.md)
- [Claude Code Review (Anthropic)](https://claude.com/blog/code-review)
- [Code Review Docs](https://code.claude.com/docs/en/code-review)
- [Addy Osmani LLM Workflow](https://addyosmani.com/blog/ai-coding-workflow/)
- [Claude Code Creator's 100-Line Workflow](https://mindwiredai.com/2026/03/25/claude-code-creator-workflow-claudemd/)
