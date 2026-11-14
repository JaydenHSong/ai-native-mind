---
title: "DeepSeek 앱 기능 API 개방 — deepseek-flash(V4.1-Flash-1017) 중심 (11-13)"
source_url: "https://cryptobriefing.com/deepseek-opens-app-features-developers-api/"
source_type: "news"
authors: ["Crypto Briefing"]
published: 2026-11-13
fetched: 2026-11-14
tags: [deepseek, api, deepseek-flash, tools, search]
status: raw
---

# DeepSeek 앱 기능 API 개방 — deepseek-flash(V4.1-Flash-1017) 중심 (11-13)

> DeepSeek가 11-13 공식 API 변경 로그를 통해 자사 소비자 앱의 기능을 개발자 API로 개방했다. 웹 검색·파일 입력·URL 읽기·음성 상호작용 등을 서버 쪽에서 처리한다. 중심 모델 deepseek-flash는 V4.1-Flash-1017을 가리킨다.

## 내용

- **개방 기능**: 인용 포함 웹 검색(심층 사고 검색 모드 포함), 이미지 검색, 파일 입력(PDF·Office·이미지), URL 읽기, 음성 상호작용, 안전 검사. 도구 호출과 컨텍스트 조립은 서버 쪽에서 처리한다.
- **모델**: deepseek-flash가 이제 V4.1-Flash-1017을 가리킨다. 9월 V4.1-Flash 릴리스의 날짜 갱신판이며 API 방식과 토큰 가격은 그대로다. Messages·Responses·Chat Completions API에서 지원.
- **별도 API 가격**: Search·Fetch 1,000건당 $0.75, OCR 1,000페이지당 $0.225, ASR·TTS는 출시 50% 할인. 토큰 단위로 추가 과금된다.
- **토큰 가격**: deepseek-flash는 비피크 시간 100만 토큰당 입력 $0.15 / 출력 $0.60, 피크 시간 2배.
- **조건**: API 기반 공개 앱은 안전 검사를 반드시 켜야 한다. 오픈소스 데모 채팅 클라이언트도 함께 공개됐다.

## 맥락

- [[concepts/tool-use]] — LLM의 외부 도구 호출, 서버 쪽 도구 호출의 기반 (2026-04)
- [[concepts/gemini-4-hydrogen]] — Google Gemini 4 Hydrogen, 실행 지향 코딩 에이전트 모델 (2026-11-12)
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, 경량·저가 API 모델, 가격 경쟁 축 (2026-10-08)
