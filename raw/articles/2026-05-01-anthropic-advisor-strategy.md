---
source_url: "https://claude.com/blog/the-advisor-strategy"
title: "The advisor strategy: Give agents an intelligence boost"
publisher: "Anthropic / Claude blog"
published: 2026-04-09
ingested: 2026-05-01
---

# Anthropic — The Advisor Strategy (2026-04-09)

> 출처: [Claude Blog — The advisor strategy: Give agents an intelligence boost](https://claude.com/blog/the-advisor-strategy) (claude.com/blog 카드 참조; 2026-04-09 게시)

## 한 줄 요약

Managed Agents 출시 다음 날 Anthropic이 발표한 짧은 패턴 글. 핵심 아이디어: **하나의 강한 모델에 모든 일을 시키지 말고, "조언자(advisor)" 역할의 더 똑똑한 모델을 따로 두고, 메인 에이전트가 **불확실하거나 어려운 결정**에서 advisor에게 짧게 컨설팅**받게 하라**. 비용은 advisor에게만 토큰을 쓰고, 메인 에이전트는 빠른/저렴한 모델로 돌릴 수 있어 **비용·지연·품질의 절충**을 다시 잡는다.

## 비유

- 메인 에이전트 = **현장 직원** — 빠르게 일 처리
- Advisor = **상사·전문가** — 어려운 케이스만 짧게 자문
- 매 결정마다 상사를 부르면 비용·지연이 폭발하지만, **막힐 때만** 부르면 직원의 한계를 극복하고 **상사의 시간도 아낀다**

## 어디에 잘 맞는가

- **Long-running session에서 가끔 critical decision**이 필요한 경우 (코딩 에이전트의 아키텍처 선택, 디버깅의 root cause 가설 검증)
- **저렴한 모델 + 비싼 advisor 조합**으로 비용 효율
- [[concepts/ai-orchestration]]의 **orchestrator-workers** 패턴의 사촌 — orchestrator 대신 **on-demand advisor**

## 위키 매핑

- 새 패턴 후보: `patterns/advisor-strategy` (단순 패턴이라 단독 페이지보단 [[concepts/ai-orchestration]]의 한 섹션으로 흡수가 적합)
- 보강: [[concepts/ai-orchestration]] — Anthropic 5대 패턴(prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer)에 **advisor strategy** 보조 패턴 추가
- 보강: [[patterns/ai-cost-management]] — "비싼 모델 + 저렴한 모델" 라우팅 전략의 새 변형으로 등록

confidence: medium (블로그 카드만 참조, 본문 직접 fetch 미실시 — 추후 본문 확인 권장)
