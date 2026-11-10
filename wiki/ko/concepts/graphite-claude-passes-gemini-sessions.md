---
title: "Graphite 보고서: Claude, 6월부터 Gemini를 제치고 챗봇 세션 2위 — 9월 54.4억 vs 37.2억"
category: concepts
tags: [claude, gemini, chatgpt, adoption, similarweb, graphite, market-share]
created: 2026-11-09
updated: 2026-11-09
sources:
  - "raw/articles/2026-11-09-graphite-claude-passes-gemini-sessions.md"
related:
  - "[[comparisons/consumer-ai-adoption]]"
  - "[[concepts/menlo-enterprise-ai-2026]]"
  - "[[concepts/anthropic-ipo-roadshow-valuation-cut]]"
status: draft
confidence: medium
---

# Graphite 보고서: Claude, 6월부터 Gemini를 제치고 챗봇 세션 2위 — 9월 54.4억 vs 37.2억

## 쉽게 읽기

**비유**: 웹사이트 방문자 수만 보면 Gemini가 2등인데, 앱 사용까지 합치면 Claude가 2등이다. "어디서 많이 쓰이느냐"를 재는 자가 달라지면 순위가 뒤집힌다는 얘기다. 그래도 1등 ChatGPT는 두 자릿수 격차로 멀리 있다.

| 용어 | 풀이 |
|------|------|
| **세션** | 한 번의 연속 사용 단위 — 방문 횟수가 아니라 "얼마나 오래·자주 쓰느냐"를 잰다 |
| **Similarweb** | 웹사이트·앱 트래픽을 패널 데이터로 추정하는 측정 업체 |
| **Graphite** | 리서치·그로스 마케팅 업체 — SEO·AEO 서비스를 판다 |

## 한줄 정의

2026-11-09 — Graphite가 발표한 AI 사용량 보고서(Similarweb 데이터 기반)에 따르면 Anthropic의 Claude는 2026년 6월 월간 챗봇 세션에서 Google Gemini를 앞질렀고 이후 매월 앞서고 있다. 9월 Claude 54.4억 세션 vs Gemini 37.2억 세션. ChatGPT는 613.5억 세션으로 6개 챗봇 합계의 81.2%를 차지했다.

## 핵심 내용

- **추월 시점·수치**: 6월 Claude 40.5억 세션 vs Gemini 37.5억 세션으로 처음 역전했고, 이후 매월 격차가 유지됐다. 9월 Claude 54.4억(전체 약 755억 중 7.2%), Gemini 37.2억, ChatGPT 613.5억(81.2%). 나머지 Grok·Perplexity·DeepSeek는 모두 10% 미만이다.
- **성장률**: Claude 전년 대비 +1,901%(기저가 작음), Gemini +182%, ChatGPT +24%. 6개 챗봇 합계는 9월 약 760억 세션으로 전년 대비 +37%. Claude는 새로 추가된 세션의 26%를 차지했다.
- **방법론·한계**: Similarweb 추정치 기반 웹 방문 + 모바일 앱 세션 합산이다. API 경유 사용은 제외되고, 데스크톱 앱에 대한 신뢰할 만한 데이터가 없어 과소 추정된다. 웹 방문만 보면 8월 Similarweb 기준 Gemini 25.6% vs Claude 9.3%로 Gemini가 여전히 앞선다 — 앱 세션을 합치면 Claude가 앞선다는 것이 보고서의 핵심이다.
- **추천 트래픽**: 7월 기준 AI 추천 트래픽 중 ChatGPT 60%, Gemini 14%, Claude 10%. AI가 웹사이트 트래픽에서 차지하는 비중은 평균 1% 미만이다. 3월판과 달리 이번 보고서는 검색 엔진과의 규모 비교를 하지 않았다 — Google 안드로이드 앱의 검색 사용량을 신뢰성 있게 분리할 수 없어서다.
- **시점**: Anthropic IPO 마케팅 시작일(11-09)과 같은 날 발표됐다. Menlo 보고서의 기업 API 지출(Anthropic 40%·OpenAI 27%·Google 21%)과 함께 읽으면, Claude의 강세가 소비자 앱 세션에서도 확인되는 그림이다.

## 왜 중요한가 (1인 개발자 관점)

1. **"많이 쓰이는 모델"의 기준이 바뀌고 있다**: 웹 방문 기준으로는 Gemini가 2등이지만, 앱 세션을 합치면 Claude가 2등이다. Claude의 강세는 코딩·업무용 앱 사용에 있고, Gemini의 강세는 웹·안드로이드 내장 사용에 있다. 모델 선택의 기준이 "벤치 점수"에서 "어디서, 어떻게 쓰이느냐"로 이동하고 있다.
2. **ChatGPT의 지배력은 여전하다**: 81.2%라는 점유율은 Claude의 추월 소식보다 더 큰 숫자다. 2위 다툼이 뜨거워지는 동안 1위는 그대로다.
3. **측정 방법론을 함께 읽어야 한다**: Similarweb 추정치 + Graphite(SEO·AEO 판매사)의 보고서다. API·데스크톱이 빠진 수치는 "소비자 앱 사용"의 단면이지 AI 사용 전체가 아니다. [[comparisons/consumer-ai-adoption]]의 a16z Top 100과 함께 보면, Claude의 소비자 채택이 웹 3위에서 앱 포함 2위로 올라섰다는 흐름이 된다.

## 한계 (명시)

- Graphite 보고서 원문이 아니라 AIStockWire·Search Engine Journal·Exchange4Media의 보도 경유다. 수치는 Similarweb 패널 추정치이며, Similarweb도 과거 수치를 수정한 전례가 있다.
- API 사용과 데스크톱 앱이 제외돼, 기업·개발자 사용 비중이 큰 Claude의 실제 사용량은 과소 추정될 수 있다. 반대로 Gemini의 안드로이드 내장 사용도 온전히 잡히지 않는다.
- +1,901% 같은 성장률은 기저가 작아서 나온 숫자다. 절대 세션 수(54.4억 vs 613.5억)로 함께 봐야 한다.

## 관련 개념

- [[comparisons/consumer-ai-adoption]] — a16z Top 100 소비자 AI 앱, ChatGPT 선두·Claude 웹 3위
- [[concepts/menlo-enterprise-ai-2026]] — Menlo 기업 AI 보고서, 기업 API 지출에서 Anthropic 40%
- [[concepts/anthropic-ipo-roadshow-valuation-cut]] — Anthropic IPO, 같은 날 마케팅 시작

## 참고 소스

- [Graphite Claude–Gemini 세션 추월 원본](raw/articles/2026-11-09-graphite-claude-passes-gemini-sessions.md)
