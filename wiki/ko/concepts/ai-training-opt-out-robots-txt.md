---
title: "AI 학습 거부 단일 robots.txt 토큰 — 4대 랩 합의, IETF 개인 초안"
category: concepts
tags: [robots-txt, ai-training, opt-out, copyright, openai, google, microsoft, anthropic]
created: 2026-10-31
updated: 2026-11-24
sources:
  - "raw/articles/2026-10-31-ai-training-opt-out-robots-txt.md"
  - "raw/articles/2026-11-23-google-maps-robots-txt-41-ai-crawlers.md"
  - "raw/articles/2026-11-24-scrapebench-agents-scraping-compliance.md"
related:
  - "[[concepts/wikimedia-amicus-nyt-openai]]"
  - "[[concepts/publishers-ai-covert-use]]"
  - "[[concepts/meta-commercial-terms-delay]]"
  - "[[concepts/websites-block-ai-agents]]"
  - "[[concepts/ireland-dpc-ai-supervision]]"
  - "[[concepts/scrapebench-agent-scraping-compliance]]"
status: draft
confidence: high
---

# AI 학습 거부 단일 robots.txt 토큰 — 4대 랩 합의, IETF 개인 초안

## 쉽게 읽기

**비유**: 지금까지는 출판사가 "우리 글은 학습하지 마세요"라고 알리려면 랩마다 다른 문패를 달아야 했다. 이제 네 랩이 한 문패를 같이 보기로 했다. 다만 그 문패는 아직 정식 표준이 아니라 초안이고, 문패를 단다고 이미 외운 글을 지워 주지는 않는다.

| 용어 | 풀이 |
|------|------|
| **robots.txt** | 웹사이트가 크롤러에게 접근 허용 범위를 알리는 관례 파일 |
| **IETF 개인 초안** | 개인이 제출한 표준 초안. 채택된 표준이 아니며 IETF 보증도 없음 |
| **그라운딩** | AI가 답변 시점에 실시간 검색 결과를 끌어와 근거로 삼는 방식 |

## 한줄 정의

2026-10-30 합의된 AI 학습 거부 단일 신호 — `User-Agent: __usage_ai-training` + `Disallow: /`, IETF 개인 초안 기반, 4대 랩이 단계적으로 이행.

## 핵심 내용

- **신호**: robots.txt에 `User-Agent: __usage_ai-training`와 `Disallow: /`를 적으면 학습 거부 의사를 표시한다. 크롤러별 개별 opt-out을 하나의 토큰으로 대체하는 것이 목표다.
- **표준 상태**: Anthropic의 Kevin Kelley가 작성한 IETF 개인 초안 `draft-kelley-aipref-training-preference-signal-00`(2027-05-03 만료)이다. 채택된 표준이 아니고, 10-21 AIPREF 회의에서 합의도 선언되지 않았다.
- **이행 일정**: Anthropic 구현 시작, OpenAI 수개월 내, Microsoft 2027-02-01 목표, Google 2027년 초 목표다. Microsoft는 그라운딩용 별도 제어도 추가하고, 2027-03-01 이후에는 NoArchive/NoCache를 학습·그라운딩 선호로 보지 않는다.
- **범위와 한계**: 학습 거부일 뿐 크롤링·검색 색인·AI 답변을 막지 않으며, 이미 데이터셋에 들어갔거나 학습된 콘텐츠는 제거하지 않는다. 단, Google은 이 토큰을 Google-Extended에 매핑해 Gemini 그라운딩에서도 제외한다 — Microsoft와 갈리는 지점이다.
- **예외**: Meta는 지지만 표명하고 이행은 약속하지 않았다. 개별 라이선스 계약은 이 신호보다 우선할 수 있다.

## 왜 중요한가 (1인 개발자 관점)

1. **데이터 권리의 기계판독 전환**: 소송과 정책 논쟁이던 "학습 거부"가 robots.txt 한 줄의 기계 신호로 바뀌었다. 자기 콘텐츠를 지키는 방법이 법률 문서에서 설정 파일로 이동한다.
2. **학습과 그라운딩의 분리**: 같은 토큰도 Google은 그라운딩까지, Microsoft는 학습까지만 막는다. RAG·그라운딩을 만드는 개발자는 랩별 매핑 차이를 코드로 다뤄야 한다.
3. **아직 약속 단계**: 표준도 아니고 이행 시점도 랩마다 다르다. 이 토큰을 "보호된다"고 전제하고 제품을 설계하면 안 된다.

## 2026-11-22 보강 — 구글, 자사 Maps를 AI 크롤러 41개에 차단

- **변경 내용**: 구글이 google.com/robots.txt에 `User-agent: __usage_ai-training` 그룹을 신설해 AI 학습용 크롤러 41개를 자사 Maps에서 차단했다. PPC Land가 11월 22일 저녁 보도했다. 규칙 182개(Disallow 154, Allow 28). 파일 크기 약 6,700자에서 약 12,500자로 증가. `User-agent:` 행 6개에서 49개로, 그룹 4개에서 5개로.
- **유일한 신규 제한은 Maps**: 기존 54개 Maps 관련 기본 규칙(Allow 37 + Disallow 17)이 단일 `Disallow: /maps`로 대체 — 장소 페이지, 검색, 길찾기, 기여자 프로필, 저장된 지도, Maps 사이트맵 포함. 검색(`/search`)과 `/goto?` 리디렉션은 이미 전체 크롤러에 차단돼 있어 신규가 아님.
- **비대칭성**: 구글은 자사 제어 토큰 `Google-Extended`를 기본 그룹(`*`, `Google-Extended`, Yandex)에 추가해 Maps를 Gemini 학습·그라운딩에는 열어두고, 41개 외부 크롤러에만 닫음. "공유 토큰은 지키되 자사 모델은 열어두는" 구조 — 10-30 합의의 취지와 긴장하는 지점이다.
- **41개 명단**: AI2Bot, Ai2Bot-Dolma, Amazonbot, Applebot-Extended, bedrockbot, Bytespider, CCBot, ChatGLM-Spider, ClaudeBot, cohere-training-data-crawler, Cotoyogi, DeepSeekBot, Diffbot, ElevenlabsCrawler, ExaSearchBot, FacebookBot, FriendlyCrawler, GPTBot, Grok, HySpider, ICC-Crawler, ImagesiftBot, img2dataset, KimiBot, LCC, Meta-ExternalAgent, MistralAI-Training, MistralBot, MoonshotBot, NagetBot, omgili, omgilibot, QwenBot, recraft-image-dataset, Reflectionbot, SBIntuitionsBot, Timpibot, VelenPublicWebCrawler, web-image-collection-research, Webzio-Extended, YiBot.
- **명단에 없는 것**: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Applebot, Bingbot, Googlebot 등은 기본 규칙을 그대로 따름. SEO 도구 크롤러도 없음.
- **배경**: `__usage_ai-training` 토큰은 2026년 10월 30일 Google·Microsoft·OpenAI·Anthropic이 준수하기로 약속한 공유 AI 학습 옵트아웃 토큰 — 이번 건은 그 토큰의 첫 대형 실전 적용이다.
- **날짜·신뢰 주의**: 최초 제보 X 포스트는 11월 22일 14:03 UTC로 보도 창구 시작(15:00 UTC) 57분 전이나, PPC Land 보도는 같은 날 19:30 UTC 이후 작성돼 창구 안에 들어감. robots.txt 편집 자체는 날짜 미표기(Wayback 11월 17일 02:04 UTC본에는 새 그룹 없음, 11월 22일까지 반영됨). PPC Land의 19:00~19:30 UTC 요청에는 아직 이전 파일이 반환돼 롤아웃이 불균일하거나 일부 되돌려졌을 가능성 있음.

## 2026-11-24 보강 — ScrapeBench: 에이전트는 robots.txt를 읽고도 안 지킨다

- **결과**: NeurIPS 2026 채택 논문 ScrapeBench(arXiv:2611.11306, 11월 8일 공개)가 1,626개 스크래핑 금지 사이트에서 6종 프론티어 에이전트를 측정한 결과, 중립 프롬프트에서 6종 중 5종의 준수율이 5% 미만이었다. Grok만 11%였다.
- **확인해도 안 지킨다**: 6종 중 4종은 실험의 99~100%에서 robots.txt를 실제로 가져왔는데도 준수율은 낮았다. 위반 사유 1위는 "robots.txt가 허용하니 ToS는 무시"(69.7%).
- **교훈**: 정책 전문을 프롬프트에 직접 넣자 GPT-5.2·Claude Opus 4.6·Gemini 3.1 Pro의 준수율이 70%를 넘었다. 공유 토큰이 있어도, 에이전트 쪽이 규칙을 '찾아서' 지키지 않으면 소용없다 — 규칙을 프롬프트·하네스 수준에서 직접 주입해야 한다. 자세한 내용은 [[concepts/scrapebench-agent-scraping-compliance]] 참조.

## 한계 (명시)

- Anthropic의 참여는 자체 발표가 없고 초안 작성자의 게시물에 근거한다는 지적이 있어 "보도됨" 수준으로 다룬다.
- 이행 일정은 각사 발표이지 실제 강제력이 확인된 바가 아니다.
- 학습 거부 신호가 법적 효력을 갖는지는 국가·소송마다 별개 문제다.
