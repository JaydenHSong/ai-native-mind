---
title: "Liner launches Liner Model API — per-request routing cuts token spend by over 50%"
source_url: "https://www.globenewswire.com/news-release/2026/09/24/3368253/0/en/liner-launches-liner-model-api-to-cut-enterprise-llm-costs-by-more-than-50.html"
source_type: "press-release"
authors: ["Liner"]
published: 2026-09-24
fetched: 2026-09-25
tags: [cost, model-routing, api, inference, benchmarks, pricing]
status: raw
---

# Liner launches Liner Model API — per-request routing cuts token spend by over 50%

> AI 에이전트 솔루션 기업 Liner가 요청별 최적 모델 자동 라우팅 API를 출시. 자사 내부 토큰 비용은 2026년 상반기 대비 8월에 50% 이상 줄었다고 주장.

## 메타

- **Title**: Liner Launches Liner Model API to Cut Enterprise LLM Costs
- **Source**: GlobeNewswire (Liner 보도자료)
- **Link**: <https://www.globenewswire.com/news-release/2026/09/24/3368253/0/en/liner-launches-liner-model-api-to-cut-enterprise-llm-costs-by-more-than-50.html>
- **Published**: 2026-09-24

## 한 줄 요약

**"프론티어 모델에 모든 쿼리를 보내는 건 기본 산수를 위해 슈퍼컴퓨터를 켜는 것과 같다" — 라우팅이 모델 교체보다 먼저 오는 비용 레버."
**

## 핵심 내용

1. **Liner Model API**: 각 요청의 예상 품질·비용을 평가해 그 요청을 처리할 수 있는 가장 저렴한 모델로 자동 라우팅. 개발자가 직접 모델을 고르고 벤치마크하고 교체할 필요 없음.
2. **자사 검증 수치**: Liner Orchestrator 배포 후 8월 내부 토큰 비용이 2026년 상반기 대비 **50% 이상 감소**.
3. **방식**: 요청마다 단일 모델 선택 (멀티 모델 동시 호출 아님 — 추가 토큰 비용 회피). 실환경 성능 검증 + 통제 벤치마크로 Liner Orchestrator를 다듬음.
4. **가격**: input $1/1M tokens, output $6/1M tokens, cached input $0.10/1M tokens. 동급 성능대 모델 대비 최소 50% 저렴하다고 주장 (트래픽 구성에 따라 변동).
5. **벤치마크 비교 대상**: Claude Sonnet 5, GPT-5.6-Terra. 벤치마크 결과·비용 절감 계산기 공개.
6. CEO Luke Kim: "Routing every query to a frontier model is the equivalent of spinning up a supercomputer just to solve basic arithmetic."

## 시사점

- `[[patterns/ai-cost-management]]`의 Model Routing 전략이 이제 **상품(API)** 으로 나옴 — "작업별 모델 고르기"가 개발자 수작업이 아니라 인프라 레이어로 이동.
- 다만 출처가 보도자료(자기 주장) — 벤치마크 수치의 독립 검증 필요. 비교 대상이 2026 신형 (Sonnet 5, GPT-5.6-Terra)이라는 점은 시의성.
- `[[comparisons/frontier-lab-economics]]`와 연결: 프론티어 랩의 가격 결정력 vs 라우터의 저가 파괴 — AI 비용 축이 "모델 선택"에서 "분배·오케스트레이션"으로 이동.