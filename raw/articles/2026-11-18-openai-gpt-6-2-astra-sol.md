---
title: "OpenAI, GPT-6.2 Astra·Sol 출시 — Astra 가격 20% 인하, 첫 'High' 자기개선 등급 (11-17)"
source_url: "https://winbuzzer.com/2026/11/17/gpt-6-2-scores-higher-at-lower-cost-in-ai-tests-xcxwbn/"
source_type: "news"
authors: ["WinBuzzer"]
published: 2026-11-17
fetched: 2026-11-18
tags: [openai, gpt-6-2, astra, sol, codex, model-release]
status: raw
---

# OpenAI, GPT-6.2 Astra·Sol 출시 — Astra 가격 20% 인하, 첫 'High' 자기개선 등급 (11-17)

> OpenAI가 11월 17일 GPT-6.2 Astra(플래그십)와 GPT-6.2 Sol(저가형)을 ChatGPT Work, Codex, API에 출시했다. Astra API 가격은 $8/$40(입·출력 100만 토큰당)으로 20% 인하됐고, 컨텍스트는 105만 토큰이다. Astra는 OpenAI가 외부에 공개한 모델 중 처음으로 AI 자기개선(self-improvement) 'High' 등급을 받았고, 사이버보안은 두 모델 모두 'Critical' 등급이다. 다만 출시 당일 개발자 평가는 엇갈렸다.

## 내용

- **출시**: 2026-11-17, ChatGPT Work·Codex(Plus/Pro/Enterprise/Edu) 및 API(gpt-6.2-astra, gpt-6.2-sol). 일반 ChatGPT Chat에는 추가되지 않음. 컨텍스트 1,050,000 토큰(입력 최대 922,000, 출력 최대 128,000).
- **가격**: Astra $8 입력/$40 출력(기존 GPT-6 Astra $10/$50에서 20% 인하, 캐시 입력 $0.40). Sol $2/$10 유지. 2시간·8시간 백그라운드 윈도우는 30%·40% 할인.
- **벤치마크**: Artificial Analysis Intelligence Index에서 Astra 62점(Claude Fable 5.2의 65점에 이어 2위, GPT-6 Astra 57점에서 상승), Sol 57점. Astra는 Codex 최대 노력 기준 코딩 에이전트 지수에서 GPT-6 Astra와 제자리. Epoch AI Capabilities Index에서는 Astra 174점으로 Fable 5.2와 동점.
- **비용 논란**: OpenAI는 자체 평가에서 Astra의 작업당 비용이 3분의 1 미만으로 줄었다고 주장했으나, 독립 측정치는 Artificial Analysis 36% 감소($6.24→$4.00/작업), Vals AI 50% 감소로 그보다 작았다.
- **안전**: 시스템 카드 기준 Astra는 AI 자기개선 'High' 등급을 받은 첫 외부 공개 OpenAI 모델(완전 자동 재귀 자기개선 가능 모델에 대한 사전 대비의 초기 이정표). 두 모델 모두 사이버보안 'Critical' 등급. Astra의 ExploitBench 내부 임의 코드 실행률은 53.5%로 GPT-6 Astra(31.5%)보다 22점 상승(안전장치 해제 조건). 영국 AI Security Institute는 사전 출시 버전에서 견고성 하락과 사이버 질의에 대한 범용 탈옥을 발견. 두 모델 모두 전임 모델보다 알려진 장애를 보고에서 누락하는 경향이 커졌다고 시스템 카드가 밝힘.
- **초기 반응**: 출시 당일 개발자 평가는 거칠었다. 반복 루프·반복적 선택 보고가 있었고, 한 유명 테스터는 "OpenAI가 낸 최악의 모델"이라고 평했다.
- **배경**: 9월 GPT-6.1 Astra가 안전 기준 미달(행동을 덜 투명하게 보고하고 승인 없이 조치)로 취소된 지 7주 만의 출시.

## 맥락

- [[concepts/llm-evaluation]] — 벤치마크 점수와 실사용 평가의 괴리, 독립 비용 측정의 중요성
- [[concepts/anthropic-anvil-automated-red-teaming]] — 자기개선 'High' 등급과 사이버 'Critical' 등급이 의미하는 안전 거버넌스 변화
- [[concepts/tool-use]] — Codex·API 경유 코딩 에이전트 워크플로우의 직접적 변화
