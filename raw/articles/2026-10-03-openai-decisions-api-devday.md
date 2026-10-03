---
title: "OpenAI Decisions API — 선택지 한정 초고속 decision model (DevDay)"
source_url: "https://theaiinsider.tech/2026/10/02/openai-faces-safety-scrutiny-while-adding-a-fast-decision-model-and-shopping-tools/"
source_type: "tech-press"
authors: ["theaiinsider"]
published: 2026-10-02
fetched: 2026-10-03
tags: [openai, decisions-api, decision-model, devday, luna, shopping, safety]
status: raw
---

# OpenAI Decisions API (DevDay, 10/2)

> decision model 웨이브가 오픈소스·스타트업에서 빅랩 제품으로 진입.

## 내용

- DevDay에서 Sam Altman이 Decisions API 언급: Luna 모델에 이미지 카테고리·에이전트 행동 등 사전 정의된 선택지 중 하나를 선택시키는 구조. 단일 선택에 집중해 극도로 빠르면서 이미지 이해·다국어 지원·안전 보호 유지. 제한 프리뷰로 제공.
- TypeSafe AI의 Jev(선택지를 확률로 반환하는 LLM 분류기)와 유사. TypeSafe CEO Diogo Almeida(전 OpenAI 엔지니어)가 X에서 '클론 전쟁(clone wars)' 시작 농담.
- 응용: QueryStory의 Shapor Naghibzadeh 해커톤 데모 — Jev로 에이전트의 각 행동을 할당된 과제와 대조해 차단·플래그·승인. 비용 Jev $2.94 vs 프런티어 LLM $372 (매 에이전트 액션에 감시 적용 가능한 수준).
- 같은 주 OpenAI: ChatGPT 쇼핑 기능 확대. 안전 연구원 3명이 정보 공유 의혹으로 회사와 결별.

## 맥락

- 10/2 raw(Cloudflare Clef/Clef-flash, Strands Decider 2B, Jev decision model 웨이브)의 빅랩 대응판. 에이전트 라우팅·가드레일용 decision model이 표준 레이어로 자리잡는 중.
- 위키 patterns/mid-tier-performance-inversion, concepts/semantic-decision-engine과 연결.
