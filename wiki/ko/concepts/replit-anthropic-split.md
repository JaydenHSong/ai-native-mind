---
title: "Replit×Anthropic 결별 논란 — 모델이 교체 가능한 인프라가 되는 순간"
category: concepts
tags: [replit, anthropic, openai, provider-switching, model-economics, vibe-coding, disputed]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-replit-drops-anthropic.md"
related:
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Replit×Anthropic 결별 논란 — 모델이 교체 가능한 인프라가 되는 순간

## 쉽게 읽기

**비유**: 클라우드 서버를 AWS에서 GCP로 옮기는 것과 같다. Replit CEO는 "Anthropic 서버에서 OpenAI 서버로 갈아탔다"고 선언했지만, 내부에서는 "아직 AWS 쓰고 있다"고 반박한다. **모델이 서버처럼 교체 가능한 인프라**가 됐다는 게 핵심 — 그리고 지금 그 교체 현장에서 진실공방이 벌어지고 있다.

| 용어 | 풀이 |
|------|------|
| **VBench** | Replit의 내부 벤치마크 — vibe-coded 앱 빌드 성능 측정 주장 |
| **Provider switching** | 모델 공급자 교체 — 가격·벤치·파트너십 기준 |

## 한줄 정의

코딩 에이전트 제품(Replit)이 **비용·벤치마크·파트너십**을 이유로 모델 공급자를 교체하겠다고 공개 선언한 사건 — 다만 CEO 발언과 내부 반박, 9월 블로그의 Claude 배치 기재가 엇갈리는 **사실관계 논란 중**.

## 핵심 내용

- **발언** (2026-10-16, TechCrunch Disrupt 무대): CEO·공동창업자 Amjad Masad — Replit이 Anthropic과 'no longer working'. 이유 3개: **비용(cost), 파트너십(partnership), 성능(performance)**.
- **인용**: 'I think ChatGPT is better now... consistently, Sol and Astra perform better on building vibe-coded applications from scratch'.
- **근거 주장**: 내부 VBench + 공개 벤치마크.
- **배경**: 2026-08 Replit×OpenAI 파트너십 (Free Mode가 GPT-5.6 Luna 기반).
- **반박**: 익명 내부 인사가 TechCrunch에 파트너십 '여전히 유효(still in place)' — **서로 상충**.
- **배치 모순**: 9월 말 Replit 블로그는 Replit Agent 프로덕션에 **Claude Fable 5/5.1** 명시. Masad는 Replit이 Anthropic의 **상위 5위 고객** 중 하나라고 주장.
- **재무 맥락**: 엔터프라이즈 계약 매출 ~15% (전년 ~2%), B2B 비중 50%+, NRR 400%+.
- TechCrunch는 추가 확인 대기 중.

## 왜 중요한가 (1인 개발자 관점)

1. **모델 = 교체 가능한 인프라**: 모델 선택의 기준이 "브랜드 충성도"가 아니라 **비용·벤치·파트너십의 함수**가 된 선언 — 라우팅 설계([[patterns/ai-cost-management]])가 제품 전략의 정면에 옴.
2. **vibe-coded 앱의 벤치 전쟁**: "처음부터 만드는" 성능이 공급자 선택의 기준 — 코딩 에이전트의 평가 축이 코드 완성도가 아니라 **제품 완성도**로 이동.
3. **발언과 배치의 괴리**: CEO의 선언과 실제 프로덕션(Claude Fable 5/5.1)이 다를 수 있음 — 공급자 선언을 그대로 믿지 말고 실제 라우팅을 확인하는 습관.

## 한계 (명시)

- **FACTS IN DISPUTE** — CEO 발언 vs 내부 반박 vs 9월 블로그 기재가 서로 상충. TechCrunch 추가 확인 대기. 이 페이지는 확정 서술이 아니라 **논란 중인 주장의 기록**이다.
- VBench는 Replit 내부 벤치 — 독립 검증 불가.

## 관련 개념

- [[patterns/agentic-finance]] — "모델 선택권의 상품화"(Robinhood)의 연장선: 코딩 에이전트 제품도 공급자를 교체하는 시대.
- [[comparisons/frontier-lab-economics]] — 가격 결정력 인프라의 역방향: 고객(Replit)이 **공급자를 갈아타는 힘**.
- [[patterns/ai-cost-management]] — 모델 라우팅이 제품 전략이 되는 사례.

## 참고 소스

- [Replit CEO 'Anthropic과 더 이상 협력 안 한다' (TechCrunch·Unite.AI, 10/16) — 논란 중](raw/articles/2026-10-17-replit-drops-anthropic.md)
