---
title: "Google AI Mode, 2020년 대선 승자를 답하지 못한 결함 — 발견 하루 만에 수정"
source_url: "https://www.usatoday.com/story/tech/2026/10/29/google-wont-say-who-won-2020-election/92499767007/"
source_type: "news"
authors: ["USA Today", "Google"]
published: 2026-10-29
fetched: 2026-10-30
tags: [google, ai-mode, elections, misinformation, gemini]
status: raw
---

# Google AI Mode, 2020년 대선 승자를 답하지 못한 결함 — 발견 하루 만에 수정

> 10-28 Google AI Mode에 "2020년 대선에서 누가 이겼나"고 묻자 "조 바이든"이라는 답 대신 연방선거위원회(FEC) 인증 보고서로 안내하는 회피 답변이 나왔다. 2016년·2024년은 도널드 트럼프라고 정확히 답했다. Google은 기술적 결함이라며 10-29 수정했고, 같은 결함이 2022년 상원 선거에도 있다고 밝혔다. (USA Today·Google X 교차)

## 내용

- **증상**: 10-28 여러 소셜 계정이 스크린샷과 함께 문제를 제기했다. AI Mode는 2020년 질문에 "공식 결과와 데이터는 FEC가 발행한 인증 보고서를 검토하라"고 답했고, 2016년·2024년 질문에는 당선자 이름을 직접 답했다. Gemini 앱이 아니라 검색의 AI Mode에서만 발생한 문제였다.
- **Google 설명**: 선거 답변 검증 방식의 "기술적 결함"이다. 최근 선거는 뉴스 기사나 AP 데이터로, 오래된 선거는 역사 기록으로 검증하는데, 2020년에 그 연결이 비어 있었다는 설명이다. 2022년 상원 선거에도 같은 결함이 있어 함께 수정 중이라고 밝혔다.
- **시기**: 2026년 중간선거를 1주일도 안 남긴 시점이라 선거 정보 신뢰 논란이 커졌다. 10-20에는 민주당 하원의원 4명이 Alphabet·Anthropic·OpenAI 등에 선거 무결성 보호장치를 촉구하는 서한을 보냈고, 선거·투표 질의에서 챗봇의 높은 오류율을 근거로 들었다.
- **각사 대응**: OpenAI는 선거 '워룸'을 가동하고 AP와 실시간 개표 연동을 진행 중이며, Anthropic은 3개 독립 그룹으로 정치 편향 테스트를 했다고 밝혔다. Brennan Center의 10월 분석에서는 주요 모델 다수가 가짜 선거 문서를 만들어내는 사례도 보고됐다.
- **한계**: Google의 설명은 사후 해명이며, 결함이 왜 2020년만 비어 있었는지, 검증 파이프라인의 다른 연도 공백은 없는지는 독립 검증이 없다. 수정 자체는 10-29 확인됐다.

## 맥락

- [[concepts/convovo-ai-ballot-grok-gpt-partisan]] — 강제 선택에서 Grok 공화당 92%·GPT 민주당 97% (2026-10-26 위키)
- [[concepts/claude-georgia-voter-data-paywall]] — Claude의 조지아주 선거 데이터 토큰 우회 조회 (2026-10-26 위키)
- [[concepts/new-york-ai-chatbot-safety-law-minors]] — 뉴욕 AI 챗봇 안전법, 미성년자 대상 동반자 기능 금지 (2026-10-29 위키)
