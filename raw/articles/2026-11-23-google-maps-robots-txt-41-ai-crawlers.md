---
title: "구글, 자사 Maps를 AI 크롤러 41개에 차단 — robots.txt에 __usage_ai-training 그룹 신설 (11-22)"
source_url: "https://ppc.land/google-blocks-41-ai-crawlers-from-maps-in-its-own-robots-txt/"
source_type: "news"
authors: ["PPC Land"]
published: 2026-11-22
fetched: 2026-11-23
tags: [google, maps, robots-txt, ai-training, crawlers, data-governance]
status: raw
---

# 구글, 자사 Maps를 AI 크롤러 41개에 차단 — robots.txt에 __usage_ai-training 그룹 신설 (11-22)

> 구글이 google.com/robots.txt에 `__usage_ai-training` 그룹을 신설해 AI 학습용 크롤러 41개를 자사 Maps에서 차단했다. PPC Land가 11월 22일 저녁 보도했다. 유일하게 새로 막힌 것은 Maps이며, 구글 자사 모델(Gemini)용 토큰은 기본 그룹에 남아 있어 비대칭이라는 지적이 나온다.

## 내용

- **변경 내용**: robots.txt에 `User-agent: __usage_ai-training` 그룹 신설, 명명된 크롤러 41개, 규칙 182개(Disallow 154, Allow 28). 파일 크기 약 6,700자에서 약 12,500자로 증가. `User-agent:` 행 6개에서 49개로, 그룹 4개에서 5개로.
- **유일한 신규 제한은 Maps**: 기존 54개 Maps 관련 기본 규칙(Allow 37 + Disallow 17)이 단일 `Disallow: /maps`로 대체 — 장소 페이지, 검색, 길찾기, 기여자 프로필, 저장된 지도, Maps 사이트맵 포함. 검색(`/search`)과 `/goto?` 리디렉션은 이미 전체 크롤러에 차단돼 있어 신규가 아님.
- **비대칭성**: 구글은 자사 제어 토큰 `Google-Extended`를 기본 그룹(`*`, `Google-Extended`, Yandex)에 추가해 Maps를 Gemini 학습·그라운딩에는 열어두고, 41개 외부 크롤러에만 닫음.
- **41개 명단**: AI2Bot, Ai2Bot-Dolma, Amazonbot, Applebot-Extended, bedrockbot, Bytespider, CCBot, ChatGLM-Spider, ClaudeBot, cohere-training-data-crawler, Cotoyogi, DeepSeekBot, Diffbot, ElevenlabsCrawler, ExaSearchBot, FacebookBot, FriendlyCrawler, GPTBot, Grok, HySpider, ICC-Crawler, ImagesiftBot, img2dataset, KimiBot, LCC, Meta-ExternalAgent, MistralAI-Training, MistralBot, MoonshotBot, NagetBot, omgili, omgilibot, QwenBot, recraft-image-dataset, Reflectionbot, SBIntuitionsBot, Timpibot, VelenPublicWebCrawler, web-image-collection-research, Webzio-Extended, YiBot.
- **명단에 없는 것**: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Applebot, Bingbot, Googlebot 등은 기본 규칙을 그대로 따름. SEO 도구 크롤러도 없음.
- **배경**: `__usage_ai-training` 토큰은 2026년 10월 30일 Google·Microsoft·OpenAI·Anthropic이 준수하기로 약속한 공유 AI 학습 옵트아웃 토큰.
- **날짜·신뢰 주의**: 최초 제보 X 포스트는 11월 22일 14:03 UTC로 창구 시작(15:00 UTC) 57분 전이나, PPC Land 보도는 같은 날 19:30 UTC 이후 작성돼 창구 안에 들어감. robots.txt 편집 자체는 날짜 미표기(Wayback 11월 17일 02:04 UTC본에는 새 그룹 없음, 11월 22일까지 반영됨). PPC Land의 19:00~19:30 UTC 요청에는 아직 이전 파일이 반환돼 롤아웃이 불균일하거나 일부 되돌려졌을 가능성 있음.

## 맥락

- AI 학습 데이터 접근 통제 — 플랫폼이 자사 데이터는 지키면서 자사 모델에는 열어두는 비대칭 구조
- 위키의 데이터 거버넌스·AI 학습 데이터·크롤러 옵트아웃 주제와 직결