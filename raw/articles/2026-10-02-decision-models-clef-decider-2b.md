---
title: "Decision Models 웨이브 — Cloudflare Clef 오픈소스 + Strands Decider 2B"
source_url: "https://aiagentstore.ai/ai-agent-news/today"
source_type: "press-digest"
authors: ["aiagentstore", "kimkj"]
published: 2026-10-02
fetched: 2026-10-02
tags: [decision-model, cloudflare, clef, strands, decider-2b, open-source, agent-routing, guardrails, cost]
status: raw
---

# Decision Models 웨이브 (10/2) — 에이전트의 "선택"을 전담하는 소형 모델

> 자유 텍스트가 아닌 **정해진 선택지의 확률**을 반환하는 모델이 잇달아 오픈소스로. 위키 semantic-decision-engine(Jev, 9/27) 카테고리의 제품화 물결.

## Cloudflare — Clef + Clef-flash

- "decision"에 최적화된 오픈소스 모델 2종 공개. 문장 대신 미리 정한 답의 확률 반환.
- Workers AI 위에 RL 파인튜닝 서비스 추가.
- 용도: 에이전트 라우팅, 가드레일, 툴 선택 — 전체 LLM 호출보다 낮은 지연·비용.
- 가중치 Apache 2.0 (석간 보도: 270억/90억 매개변수급 2종 — 회사 시험 결과 기준).

## Strands (AWS) Labs — Strands Decider 2B

- 20억 매개변수 오픈 decision model. 가중치·학습 스크립트 공개, 로컬 실행 가능.
- 신뢰도 점수가 붙은 선택을 수십~수백 ms에 반환.
- 패턴 제안: LLM이 액션을 실행하기 전 로컬 decider로 게이팅 ("이 툴 호출은 grounded한가?") — 비용 절감 + 툴 호출 안전성.

## 의미

- 상시 반복되는 분류·라우팅·승인/거부 결정을 값비싼 LLM 호출에서 떼어내는 하이브리드 에이전트 아키텍처가 실무 표준으로 이동 중.
- 성능·지연 수치는 각 회사 자체 시험 결과 — 독립 검증 필요.
