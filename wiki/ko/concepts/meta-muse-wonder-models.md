---
title: "Meta Muse Wonder·Wonder Full — 클로즈드 프론티어 에이전트 모델 (2026-10-12)"
category: concepts
tags: [meta, muse-wonder, frontier-model, agents, api-pricing, llama, superintelligence-labs]
created: 2026-10-13
updated: 2026-10-13
sources:
  - "raw/articles/2026-10-13-meta-muse-wonder-models.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
status: draft
confidence: high
---

# Meta Muse Wonder·Wonder Full — 클로즈드 프론티어 에이전트 모델 (2026-10-12)

## 한줄 정의

Meta Superintelligence Labs가 2026-10-12 출시한 클로즈드 프론티어 모델 2종 — Llama 4 이후 첫 프론티어, 에이전트 특화 기능(Active Memory·Active Focus)과 유료 API로 오픈 전략에서 전환.

## 핵심 내용

- **출시**: 2026-10-12. Meta Superintelligence Labs의 첫 프론티어 모델. Muse Spark 기반, Ohio의 Prometheus 데이터센터에서 훈련.
- **라인업**: Muse Wonder — Meta Model API + Muse Code에서 즉시 사용 가능. Muse Wonder Full (대형) — Muse Code 구독자 한정.
- **가격**: API $4.00 / 1M 입력 토큰, $20.00 / 1M 출력 토큰 — Claude Opus 5.5와 동일 정가.
- **에이전트 특화**: Active Memory(대화 간 사용자 컨텍스트 유지), Active Focus(장시간 멀티스텝 작업 지속, 중대한 행동 전 체크인), 1M 토큰 컨텍스트 윈도우.
- **벤치 주장**: Harvey's Legal Agent Benchmark, FocusBench, SWE-Marathon 등 에이전트·코딩 벤치에서 SOTA 주장 — 단 전체 안전성 평가 보고서는 미공개(발표 예정).
- **독립 검증**: Artificial Analysis Intelligence Index — Wonder Full 56점 (Claude Opus 5.5 58, GPT-6 Astra 53).
- **시장 반응**: 발표 후 Meta 주가 약 3~4% 상승 (Reuters).

## 왜 중요한가

AI 네이티브 프로그래머에게 Muse Wonder는 **프론티어 모델의 비즈니스 모델이 "오픈 가중치"에서 "유료 에이전트 인프라"로 이동하고 있다**는 신호다. Meta는 Llama로 오픈 생태계를 키웠지만, 정작 프론티어에선 Opus 5.5와 같은 정가를 받는 클로즈드 API로 돌아섰다. 에이전트 하네스 설계 관점에서는 Active Memory·Active Focus 같은 "에이전트 지속성" 기능이 모델 단에서 상품화되기 시작했다는 점이 핵심 — 세션 간 컨텍스트 유지를 하네스에서 직접 구현할지, 모델의 내장 기능을 쓸지의 트레이드오프가 생긴다. 단, 안전성 평가 보고서 미공개는 Gemini 4 Argon 때 본 "자사 주장 vs 독립 지수 괴리" 패턴의 재현이므로, Wonder Full의 56점(3위권)을 냉정하게 볼 것.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — 오픈 Llama 시대에서 클로즈드·유료 에이전트 인프라로. "가격 결정력"의 정면 사례.
- [[concepts/persistent-agent]] — Active Memory·Active Focus는 상시 가동형 에이전트의 상품화된 형태.
- [[concepts/gpt-61-sol-ultrafast]] — Ultrafast(6배 프리미엄)와 Wonder(정가 동급)의 가격 포지셔닝 대비.
- [[concepts/gemini-4-argon]] — 벤치 주장 vs 독립 지수 괴리: Wonder Full도 같은 패턴 (자사 주장 SOTA vs 독립 지수 3위권).

## 참고 소스

- [ResultSense (원문 전문)](https://www.resultsense.com/news/2026-10-13-meta-muse-wonder-frontier-models-agents/)
- [Reuters/Yonhap (sedaily)](https://en.sedaily.com/international/2026/10/13/meta-launches-paid-ai-model-muse-wonder-to-speed)
- 원본 캡처: [raw/articles/2026-10-13-meta-muse-wonder-models.md](raw/articles/2026-10-13-meta-muse-wonder-models.md)