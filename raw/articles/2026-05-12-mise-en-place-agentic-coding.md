---
title: "Mise en Place for Agentic Coding: Deliberate Preparation as Context Engineering Methodology (arXiv 2605.05400)"
source_url: "https://arxiv.org/abs/2605.05400"
source_type: "arxiv-paper"
authors: ["Andrew Zigler (LinearB)"]
published: 2026-05-06
fetched: 2026-05-12
tags: [context-engineering, agentic-coding, mise-en-place, vibe-coding, context-fluency, arxiv]
status: ingested
---

# Mise en Place for Agentic Coding: Deliberate Preparation as Context Engineering Methodology

> arXiv:2605.05400v1 [cs.SE], 2026-05-06. Andrew Zigler (LinearB, Los Angeles). 1st International Workshop on Vibe Coding and Vibe Researching (9–12 June 2026, Glasgow). License: CC BY 4.0.

## 메타

- **Title**: Mise en Place for Agentic Coding: Deliberate Preparation as Context Engineering Methodology
- **Author**: Andrew Zigler (andrew.zigler@linearb.io)
- **arXiv**: <https://arxiv.org/abs/2605.05400>
- **HTML**: <https://arxiv.org/html/2605.05400v1>
- **PDF**: <https://arxiv.org/pdf/2605.05400v1>
- **Artifact (Zenodo)**: <https://doi.org/10.5281/zenodo.19868258> — CLAUDE.md, beads schema, planning templates (CC-BY 4.0 data, MIT code)
- **Length**: 6 sections, hackathon case study, 4 contributions, 5 RQs

## 한 줄 요약

**"Vibe coding의 alignment 문제는 사실 preparation 문제다"** — agentic coding 워크플로우에 요리계의 *mise en place* (모든 것을 제자리에) 개념을 적용. 코딩 시작 전 **세 단계 준비**를 phase-gated로 끝내면 parallel agent execution이 가능해지고 architectural rework가 거의 0이 된다.

## 핵심 주장

### 1) Alignment Problem = Preparation Problem

- **GitHub Copilot 생산성**: 21–55% 향상 (Peng 2023)
- **그러나 품질**: Veracode 2025 — AI-generated code의 **45%가 보안 결함** 포함, June 2025까지 보안 findings **10x 급증**
- **병목**: 코드 생성이 아니라 *alignment* (spec compliance / architectural fidelity / corrective-commit ratio)
- **iterative 워크플로우는 alignment 부채를 rework로 후불 지불**한다. MEP는 그것을 사전에 선불 지불한다.

### 2) MEP 3단계 (phase-gated, implementation 전에 모두 완료)

| Phase | 산출물 | 이론 기반 |
|---|---|---|
| **1. Contextual Grounding** | 도메인 지식·tacit knowledge를 markdown briefing 문서로 externalize (경쟁 분석·디자인 철학·outcome 정의) | Polanyi (1958, 1966) tacit knowledge, Wiggins & McTighe (1998) backward design, Nonaka & Takeuchi (1995) SECI |
| **2. Collaborative Specification** | 인간-에이전트 대화로 spec 문서 (스크린·인터랙션·데이터 흐름·**무엇을 제외할지** 포함, *why*까지 인코딩 — agent의 micro-decision 정렬용) | spec-driven development (GitHub Spec Kit), Promptware Engineering (Alomar 2025) |
| **3. Task Decomposition** | dependency-aware task records (예: Beads — JSON + Git, priority + dependency + acceptance criteria). Parallel agent execution을 위한 인터페이스. | Beads (Yegge 2025), beads_rust (Emanuel 2025) |

### 3) Context Fluency = 새로운 개발자 스킬

Prompt engineering의 *상위 레벨* 스킬. 4 components:

- **Decomposition** — 병렬 실행 가능한 경계 task로 분해
- **Specification** — *why*까지 적어 agent micro-decision 정렬
- **Constraint definition** — 무엇을 제외/단순화/지연할지 (scope = first-class)
- **Domain encoding** — tacit knowledge를 외화 (Polanyi externalization)

함의: 교육 커리큘럼, 채용 (도메인 지식·교수법 강한 사람이 disproportionately effective), 도구 설계 (task system·spec framework·context platform이 **infrastructure, not optional**).

## 정량 데이터 (Hackathon Case Study)

- **세팅**: 2026-01, ~12팀, 5시간 빌드, $5K 상금. 출판사 editorial archive + AI 콘텐츠 API 위에서 작업.
- **준비 단계 (이 case)**: ~2시간
  - 10개 planning docs / **9,386 단어**
  - **64개 task record** (Beads, dependency 인코딩)
  - 1명의 dictated pedagogical-design 철학 (20분짜리 tacit knowledge externalization → 도메인 튜터 컴포넌트 iteration 대폭 감소)
- **실행**: 4개 subagent 병렬, 184분 / **43 beads closed**, median **5.9 min/bead**
- **결과물**: 43 TS/TSX 파일 / **8,496 LOC** / production 배포
- **Planning-to-code ratio**: **1.10:1** (9,386 words : 8,496 LOC)
- **Preparation-to-execution ratio**: **5.7:1** (2hr : ~21 min per agent × 4 parallel)
- **Bug-type beads**: median **1.2 min** (mean 1.5) vs 9.7 min for implementation tasks → 병렬 결함이 빠르게 탐지·교정됨
- **Architectural rework**: 거의 0 (배포 단계 버그는 모두 styling·API truncation·favicon — 구조적 misalignment 아님)

### 12-팀 필드 (qualitative)

- workflow style: 절반 *vibe-coding* (T2, T4, T5) — iterative prompting / 나머지 절반 *decomp.* (T1, T7–T12) — 명시적 사전 계획
- 단일-vs-멀티 agent: T12 (이 연구)만 fanned parallel subagents
- 통제 비교는 없음 (single hackathon limitation)

## 위치 (related work)

| 기존 | MEP 차별점 |
|---|---|
| **Prompt engineering** (Brown 2020, Wei 2022, Liu 2023) | invocation scope → MEP는 **workflow scope** |
| **Spec-driven (GitHub Spec Kit)** | spec만 → MEP는 spec **이전** Phase 1 (tacit knowledge externalization) 추가 |
| **Vibe coding** (Karpathy 2025) / Ralph Loop (Huntley 2025) | iteration scope → MEP는 **iteration 비용을 사전에 선불 지불** |
| **RPI Methodology** (Horthy 2025, HumanLayer) | research-plan-implement → MEP는 Phase 1 tacit externalization + phase-gating 추가 |
| **Beads** (Yegge 2025), **beads_rust** (Emanuel 2025) | task records — MEP는 그것을 Phase 3로 흡수 |

## 한계 (저자 자기 고지)

1. **Single hackathon, single case study** — 5시간 경쟁 세팅은 multi-month 개발과 다름
2. **No control group** — 5.7:1 / near-zero rework는 baseline 대비 effect가 아니라 *observation*
3. **Operator expertise confound** — 저자가 교육+SE 이중 배경. 방법론 기여 ≠ operator skill, 분리 불가
4. RQ1–RQ5: comparative (RQ1, 가장 tractable) / saturation (RQ2) / replication (RQ3) / longitudinal (RQ4) / quantitative dataset (RQ5)

## 위키 연결

- **[[concepts/context-engineering]]** — MEP는 context engineering의 workflow-level 구현. "context fluency" 개념 추가 후보.
- **[[patterns/claude-md-guide]]** — Phase 1 (contextual grounding) = CLAUDE.md 작성 가이드. Spec Kit·beads와 같은 layer.
- **[[patterns/agent-planning-to-implementation]]** — MEP의 phase-gating이 정확히 이 pattern의 instance.
- **[[concepts/agentic-engineering]]** — vibe coding ↔ agentic engineering 사이의 *방법론적 다리*.
- **[[patterns/subagents-delegation]]** — 64 beads → 4 parallel subagents는 우리가 이미 보강한 "context firewall" 패턴의 사전 준비 측.
- **[[concepts/harness-engineering]]** — MEP 산출물 (briefing docs / spec / beads)이 harness 자체.

## 메모

저자는 LinearB 소속이지만 논문 자체는 academic framing. Workshop 1st International "Vibe Coding and Vibe Researching" — 2026 흐름이 vibe coding을 학문화하기 시작했음을 보여주는 신호. Karpathy 트윗(2025)이 정식 ACM CCS reference로 인용된다는 점이 시대 상황.

핵심 함의: 우리 위키의 [[patterns/agent-planning-to-implementation]]에서 "기획·스펙·태스크 → 코드"를 이미 다뤘는데, MEP는 그 *세 단계가 모두 implementation 전에 phase-gated로 완료*되어야 한다는 점, 그리고 *Phase 1이 tacit knowledge externalization*이라는 점이 새 contribution. Phase 1 없이 spec만 쓰면 미분된 미분 — agent가 *why*를 모르고 implementation 중 잘못된 micro-decision 누적.

또 다른 흥미점: 이 논문의 1.10:1 planning-to-code ratio는 우리 기존 [[journal/2026-05-02]]의 Google 17.2x vs 4.4x 오류 증폭과 짝을 이룬다 — 후자가 "준비 부족시 오류가 17x로 증폭됨"을 보였다면, MEP는 "준비 충분시 architectural rework가 0에 수렴함"을 case로 보였다. 같은 동전의 양면.
