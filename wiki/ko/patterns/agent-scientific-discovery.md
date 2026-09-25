---
title: "Agent Scientific Discovery"
category: patterns
tags: [agentic-research, scientific-discovery, evaluation, anthropic, claude, claims]
created: 2026-09-25
updated: 2026-09-25
sources:
  - "raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/harness-engineering]]"
status: draft
confidence: medium
---

# Agent Scientific Discovery

## 쉽게 읽기

**비유**: 대학원생 950명에게 "바이러스 DNA 더미에서 재미있는 역전사효소를 찾아 봐"라는 한 줄 지시만 주고 21시간을 줬더니, 아무도 몰랐던 효소 시스템을 찾아냈다. Anthropic의 Claude 에이전트가 CRISPR 닮은 효소(ART)를 찾은 사건이다. "AI가 발견했다"는 말은 반만 맞다 — **가설은 에이전트가 냈고, 검증은 아직 lab과 peer review 차례**다.

| 용어 | 풀이 |
|------|------|
| **In-silico** | 컴퓨터 안에서만 수행되는 실험·분석 (wet-lab의 반대) |
| **ART** | Array-associated Reverse Transcriptases — 이번에 찾은 효소 시스템 이름 |

## 한줄 설명

연구급 에이전트의 발견 파이프라인 — **문헌 접지(literature grounding) → in-silico 가설 → wet-lab 검증** — "발견"의 주체는 에이전트였지만, 주장이 지식이 되려면 검증 파이프라인을 통과해야 한다.

## 문제 상황

"AI가 X를 발견했다"는 헤드라인이 나올 때마다 같은 논쟁이 반복된다.

- **기대**: 에이전트가 과학적 발견을 자동화
- **현실**: 발견 주장이 pre-print·블로그 수준에서 멈추고, 재현성·자율성 프레이밍 논쟁으로 번짐
- 이번 사건의 HN 토론(566 pts): (a) RT 자체는 알려진 것 — 새로운 건 주변 배열 (b) 블로그 발표는 심사 논문 아님 (c) LLM 탐색의 재현성 약함 (d) 자율성 과장

## 해결 방법 — 3단계 발견 템플릿

### 1. Literature grounding (문헌 접지)

에이전트는 막무가내로 뒤지지 않는다. Claude 에이전트들은 20만 개 reverse transcriptase를 수집하고, 3,500개 후보로 좁히고, 20개 보고서를 만들었다 — 각 단계에서 기존 문헌과 대조해 "이미 알려진 것"을 걸렀다.

### 2. In-silico hypothesis (계산 가설)

한 에이전트의 로그: "DNA next to the RT is spectacular: I can see by eye a tandem repeat array ... that's a CRISPR-like ... repeat array?!"

그 뒤 에이전트가 한 일:

1. 반복 수·간격 측정
2. 알려진 RT 시스템과 레이아웃 비교
3. 문헌에 같은 패턴의 선행 보고가 있는지 검색
4. human review용 보고서로 에스컬레이션

→ 즉 "발견"은 한 번의 추론이 아니라 **측정→비교→문헌대조→보고**의 파이프라인 산출물.

### 3. Wet-lab validation (실험 검증)

- Anthropic wet-lab에서 후속 분석·실험 — 어레이가 짧은 RNA로 발현되는 것 확인 (CRISPR guide RNA 유추의 근거)
- ART의 **기능은 아직 미지** — 프로그래머블하다는 주장 없음
- Feng Zhang(MIT·Broad): pre-print 리뷰 후 "genuinely intriguing"
- peer review는 아직 — Anthropic 스스로 "admittedly premature"(시기상조 인정)

## 적용 예시

에이전트에게 "발견"을 맡길 때의 체크리스트:

1. **탐색 범위를 문헌으로 먼저 좁힌다** — "새로운 것"의 기준을 명시
2. **가설은 보고서 형태로** — 측정값·비교·선행연구 대조를 포함
3. **검증 주체를 분리** — 발견 에이전트 ≠ 검증 주체 (wet-lab·peer review)
4. **주장의 강도를 단계별로 표기** — 가설 / in-silico 지지 / lab 확인 / peer 통과

## 장단점

| 장점 | 단점 |
|------|------|
| 전문가가 몇 주~몇 달 걸릴 분석을 21시간에 | 인간 개입 "초기 프롬프트 + wet-lab" — 프롬프트 설계의 기여도 불투명 |
| 950개 에이전트 병렬 탐색의 스케일 | 210M 토큰 — 비용이 만만치 않음 |
| 발견 과정이 로그로 남아 감사 가능 | 재현성 약함 — 같은 탐색을 다시 돌리면 같은 결과가 나올지 미보장 |

## 관련 패턴

- [[concepts/llm-evaluation|LLM Evaluation]] — "AI discovers X" 주장에 대한 평가 프레임 (주장 강도 단계별 검증)
- [[concepts/harness-engineering|Harness Engineering]] — 950개 에이전트의 탐색을 지휘한 하네스 자체가 핵심 인프라

## 참고 소스

- [Claude agents identify a CRISPR-like enzyme system (ART) — 950 agents, 21 hours, 210M tokens](raw/articles/2026-09-25-anthropic-claude-crispr-art-enzyme.md)