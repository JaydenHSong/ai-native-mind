---
title: "Claude agents identify a CRISPR-like enzyme system (ART) — 950 agents, 21 hours, 210M tokens"
source_url: "https://www.unite.ai/anthropic-says-claude-discovered-a-new-enzyme-system-resembling-crispr/"
source_type: "news-article"
authors: ["Unite.AI", "explainx.ai"]
published: 2026-09-23
fetched: 2026-09-25
tags: [agentic-research, scientific-discovery, anthropic, claude, evaluation, claims, crispr]
status: raw
---

# Claude agents identify a CRISPR-like enzyme system (ART) — 950 agents, 21 hours, 210M tokens

> Anthropic의 950개 Claude 에이전트가 21시간 동안 바이러스 DNA DB를 뒤져 기존에 알려지지 않은 효소 시스템(ART: array-associated reverse transcriptases)을 찾았다. "AI가 발견했다"는 주장에 HN 566포인트 토론이 붙었다.

## 메타

- **Title**: Anthropic Says Claude Discovered a New Enzyme System Resembling CRISPR
- **Source**: Unite.AI / explainx.ai FAQ / Anthropic blog + pre-print (2026-09-23 발표)
- **Link**: <https://www.unite.ai/anthropic-says-claude-discovered-a-new-enzyme-system-resembling-crispr/>
- **Published**: 2026-09-23

## 한 줄 요약

**"연구급 에이전트의 새 템플릿: 문헌 접지 → in-silico 가설 → wet-lab 검증 — '발견'의 주체는 에이전트였지만 주장은 아직 pre-print 수준."
**

## 핵심 내용

1. **ART (array-associated reverse transcriptases)**: 박테리오파지 DNA에서 찾은 미규명 효소 시스템. 3요소: reverse transcriptase + 기능 미상 파트너 유전자 + CRISPR 어레이 닮은 긴 non-coding DNA 반복 어레이.
2. **규모**: 약 950개 에이전트, 21시간, 210M 토큰. 20만 개 reverse transcriptase 수집 → 3,500개 후보 시스템 → 20개 보고서. 인간 개입은 초기 프롬프트 + wet-lab뿐.
3. **발견 순간**: 한 에이전트가 로그에 "DNA next to the RT is spectacular: I can see by eye a tandem repeat array ... that's a CRISPR-like ... repeat array?!" — 반복 수·간격 측정, 문헌 대조 후 human review로 에스컬레이션.
4. **기능은 미지**: 어레이가 짧은 RNA로 발현되는 건 확인 (CRISPR guide RNA 유추) — 프로그래머블하다는 주장은 아직 없음. 몇 개 안 되는 유사 시스템이 모두 절단·복사·붙여넣기 기능을 함.
5. **검증 상태**: pre-print + blog, peer review 아님. MIT·Broad의 Feng Zhang은 pre-print 리뷰 후 "genuinely intriguing" (정말 흥미롭다) 평가.
6. **HN 토론 (566 pts, 588 comments)**: (a) RT 자체는 기존 알려진 것 — 새로운 건 그 주변 배열 (b) 블로그 발표는 심사 논문이 아님 (c) LLM 탐색의 재현성 약함 (d) 자율성 프레이밍 과장. 반론: 작성자들이 도메인 전문가이고 lab 검증은 통과.
7. **Anthropic의 자기 인정**: "admittedly premature" (시기상조임을 인정) — scientists를 lab으로 끌어들이려는 포석이라는 해석도.

## 시사점

- 연구급 에이전트의 검증 템플릿: **문헌 접지(literature grounding) → in-silico 가설 → wet/benchmark 검증** — `[[concepts/llm-evaluation]]`의 "주장 검증" 축에 직접 연결.
- "AI discovers X"는 새로운 하이브리드 역할로 재프레임됨: 데이터 과학 + 도메인 전문성 + 문헌 프로그래밍 접근.
- 1인 개발자 관점: 에이전트의 "발견"도 결국 **보고서 형태의 가설** — 검증 파이프라인(실험·lab·peer)이 없으면 발견이 아님.