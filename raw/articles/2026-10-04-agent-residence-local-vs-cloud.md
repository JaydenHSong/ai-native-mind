---
title: "에이전트는 어디에 사는가 — Meta의 30B 로컬 모델 vs xAI·OpenAI의 클라우드 컴퓨터 (Where Should an Agent Live)"
source_url: "https://www.linkedin.com/pulse/agent-just-stopped-living-chat-window-david-p%C3%A9rez-caparr%C3%B3s-1oqhe"
source_type: "analysis"
authors: ["david-perez-caparros"]
published: 2026-10-03
fetched: 2026-10-04
tags: [agent-residence, local-model, open-weights, meta, xai, openai, privacy]
status: raw
---

# "The Agent Just Stopped Living in the Chat Window" (10/3, David Pérez Caparrós)

> 채팅창 뒤에 살던 시대의 끝. 질문이 '똑똑한가'에서 '어디에 상주하는가'로 이동.

## 내용

- 2026년 8월, Meta는 30B 파라미터 open-weight 모델을 출하: 소비자급 GPU 1장으로 로컬 실행, 네트워크 연결 없이 에이전트 동작. (8/11 xAI의 '클라우드 속 컴퓨터를 가진 에이전트'와 정반대 베팅.)
- 몇 주 뒤 OpenAI도 클라우드 기반 에이전트 방향으로 합류 (9/29 DevDay Dots = always-on cloud agent).
- 세 가지가 같은 제품의 변형이 아님: 'AI 에이전트는 어디에 살아야 하는가'에 대한 세 개의 서로 다른 답.
  - Meta: 모델을 사용자의 하드웨어 쪽으로 (데이터가 밖으로 안 나감)
  - xAI·OpenAI: 에이전트에게 클라우드 속 자기 컴퓨터를 줘서 노트북을 닫아도 계속 일함
- 채팅 시대 에이전트는 채팅창 뒤에 살았고, 탭을 닫으면 상호작용이 끝났다. 이제 두 축: 로컬 상주(개인 데이터·프라이버시·오프라인) vs 클라우드 상주(장시간 작업·지속성).

## 맥락

- 위키 concepts/persistent-agent(OpenAI "O" 리크 9/27)의 확장: persistent가 '어떤 상주 형태'인지 분기.
- 항상-켜짐 에이전트 경쟁(7주 6발표, 10/4 stochastic-parrot audit)과 정면 대응: 지속성의 가격표가 '어디에 사는가'로 드러남.
- 접근 게이트: OpenAI·xAI·Anthropic은 유료, Microsoft는 private preview, Meta는 무료+사용량 제한(CNBC) — 가격 모델도 상주 형태에 따라 갈림.
- AI 네이티브 프로그래머 관점: 로컬 에이전트 = 개인 개발 환경의 비서, 클라우드 에이전트 = 밤새 도는 백그라운드 워커. 둘을 아키텍처로 분리해 쓰는 패턴이 필요.