---
title: "NYT 등 4개 신문, Brave 제소 — AI용 색인 판매·페이월 우회 혐의 (소장 요약, 11-02)"
source_url: "https://www.copyrightnow.com/news/nyt-v-brave-software-ai-search-paywall-copyright-dmca-complaint-sdny/"
source_type: "news"
authors: ["Copyright Now"]
published: 2026-11-02
fetched: 2026-11-04
tags: [nyt, brave, copyright, lawsuit, scraping, paywall]
status: raw
---

# NYT 등 4개 신문, Brave 제소 — AI용 색인 판매·페이월 우회 혐의 (소장 요약, 11-02)

> 뉴욕타임스(NYT)와 뉴욕 데일리뉴스·시카고 트리뷴·올랜도 센티넬이 11-02 Brave Software를 맨해튼 연방 법원에 제소했다. Brave가 기사를 무단으로 색인해 AI 기업에 팔고, AI 답변과 페이월 우회 설정으로 기사를 유통했다는 혐의다. 아직 법원 판단이 나온 것이 아니라 원고의 주장 단계다. (11-03 정리에서 누락된 11-02 접수 건의 따라잡기 수집)

## 내용

- **소송**: NYT 사건 S.D.N.Y. 26-cv-9549(72쪽 소장), 3개 신문 사건 26-cv-9554. 같은 로펌(Rothwell, Figg, Ernst & Manbeck)이 두 사건을 맡았고 모두 배심 재판을 요구한다. 손해배상과 영구 금지명령을 구한다.
- **핵심 자산**: 300억 페이지 이상 규모의 Brave Index. 원고는 Brave가 크롤러를 밝히지 않고 수십억 페이지를 긁어 색인을 만들었으며, 사이트 운영자가 차단할 수 없었다고 주장한다.
- **세 갈래 이용**: (1) Ask Brave AI 답변이 색인 내용을 RAG로 전달하며 종종 원문을 그대로 포함한다 — 소장은 페이월 기사 URL만 주자 400단어 이상을 그대로 재현한 사례, LLM Context 엔드포인트 질의에서 1,295단어 중 1,291단어를 돌려받은 사례를 든다. (2) Brave Search API·LLM Context 엔드포인트로 AI 기업에 실시간 콘텐츠 접근을 판매한다 — 소장이 지목한 고객은 Anthropic·Perplexity·Mistral·xAI·Cohere. (3) 브라우저의 'Paywall blocker' 설정이 페이월을 우회하고, 내장 광고 차단이 출판사 광고를 Brave 광고로 대체한다.
- **청구**: 직접·기여·대리 저작권 침해, DMCA 17 U.S.C. §1201 우회 금지, 뉴욕주 부당이득 5개 항. NYT는 2025-08-11 CEO에게 중단 요구 서한을 보냈다고 주장한다.
- **반응**: 11-03 기준 Brave의 공개·법정 대응은 보도되지 않았다. 지목된 AI 기업들은 피고가 아니다.

## 맥락

- [[concepts/wikimedia-amicus-nyt-openai]] — 학습은 공정 이용 가능·RAG는 라이선스 준수라는 Wikimedia 아미쿠스
- [[concepts/ai-training-opt-out-robots-txt]] — AI 학습 거부 단일 토큰 합의
- [[concepts/publishers-ai-covert-use]] — 출판사의 은밀한 AI 사용, WIRED 조사
