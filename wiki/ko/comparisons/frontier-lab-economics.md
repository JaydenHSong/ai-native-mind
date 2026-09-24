---
title: "저가 파괴자 vs 가격 결정력 인프라"
category: comparisons
tags: [deepseek, revenue, fundraising, api-pricing, open-weights, llm-business, china]
created: 2026-09-24
updated: 2026-09-24
sources:
  - "raw/articles/2026-09-24-deepseek-1b-annualized-revenue.md"
related:
  - "[[patterns/ai-cost-management]]"
status: draft
confidence: low
---

# 저가 파괴자 vs 가격 결정력 인프라

## 핵심 차이

DeepSeek는 "저가로 시장을 깨는 파괴자"에서 "가격을 올려도 고객이 남는 인프라"로 전환했다 — 오픈 웨이트 전략이 수익성까지 확보한 첫 대형 사례.

## 비교표

| 기준 | 저가 파괴자 (과거 포지션) | 가격 결정력 인프라 (현재) |
|------|------|------|
| 가격 전략 | 경쟁자 대비 파격적 저가 | **API 요금 2.3~4.5배 인상** (2026-08) |
| 고객 반응 | 가격으로 유입 | 인상 후에도 **이탈 없음** — 수요의 가격 비탄력성 실증 |
| 매출 | 성장 중 | **연간 run-rate 10억 달러** 돌파 |
| 밸류에이션 | 모델 회사 | **~740억 달러** — "AI 인프라 회사"로 평가받기 시작 |
| 펀딩 | — | **~75억 달러** 투자 유치 마무리 단계 (2026년 최대급) |

## 언제 "저가 파괴자" 프레이밍이 맞을까

시장 진입기, 고객의 전환 비용이 낮을 때, 점유율 확보가 우선일 때. 2024~2025년의 DeepSeek가 여기에 해당했다.

## 언제 "가격 결정력" 프레이밍으로 바꿔야 할까

API 요금 인상이 통한 2026-08 이후. 전환 비용(파인튜닝·통합·워크플로)이 충분히 쌓이면 모델 선택의 **고착화(lock-in)** 가 가격보다 강해진다 — 이때부터는 인프라 프레이밍이 맞다.

## 결론

오픈 웨이트 = 저가라는 등식이 깨졌다. 1인 개발자 관점의 함의:

1. **모델 가격을 고정 변수로 보지 말 것** — 오늘 싼 모델이 내일 4배가 될 수 있다. [[patterns/ai-cost-management|AI Cost Management]]의 라우팅·캐싱 전략이 더 중요해진다.
2. **전환 비용이 진짜 비용** — 파인튜닝·통합·워크플로를 한 모델에 묶기 전에, 옮길 때 드는 비용을 먼저 계산한다.
3. "모델 회사"가 "인프라 회사"로 재평가받는 흐름은 [[tools/alibaba-agentcore|AgentCore]] 같은 에이전트 인프라 판매 흐름과 같은 방향이다.

## 참고 소스

- [DeepSeek hits $1B annualized revenue, finalizing ~$7.5B raise at ~$74B valuation](raw/articles/2026-09-24-deepseek-1b-annualized-revenue.md)
