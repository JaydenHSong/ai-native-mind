---
title: "OpenAI GPT-6.1 Terra — 절반 가격의 컴퓨터 사용 모델"
source_url: "https://www.testingcatalog.com/openai-launches-gpt-6-1-terra-for-precise-computer-use/"
source_type: "news"
authors: ["OpenAI", "TestingCatalog", "Artificial Analysis", "Mobigyaan", "TechFeatured"]
published: 2026-10-26
fetched: 2026-10-27
tags: [openai, gpt-6-1-terra, computer-use, api-pricing, codex]
status: raw
---

# OpenAI GPT-6.1 Terra — 절반 가격의 컴퓨터 사용 모델

> OpenAI가 10-26 GPT-6.1 Terra를 출시했다. ChatGPT Work와 Codex(Plus·Pro·Enterprise·Edu), API(gpt-6.1-terra)에서 사용 가능하며, 컴퓨터 사용·에이전트 업무에 특화된 GPT-5.6 Terra의 후계 모델이다. 표준 API 가격은 입력 $1·캐시 입력 $0.05·출력 $5(백만 토큰당)로, GPT-6.1 Sol의 절반, GPT-6 Astra의 10분의 1 수준이다. (OpenAI 발표·TestingCatalog·Artificial Analysis·Mobigyaan 교차)

## 내용

- **가격**: 입력 $1 / 캐시 입력 $0.05 / 출력 $5(백만 토큰당). Sol($2/$0.10/$10)의 절반, Astra($10/$1/$50)의 10분의 1, 전작 Terra($2/$12)의 절반 이하. 배치 요금은 표준 요금의 절반 추가 할인. Ultrafast 티어에는 포함되지 않음.
- **제공 경로**: ChatGPT Work·Codex의 Plus·Pro·Enterprise·Edu 플랜, API 모델 ID gpt-6.1-terra, Codex CLI 0.159.0 이상. 일반 Chat이 아닌 Work·Codex 경로로 제공되며, 플랜 사용량 한도는 그대로.
- **성능(OpenAI 주장)**: Agents' Last Exam 최대 effort 60.0%, 과제당 $1.01. Astra와 동급 과제 수행을 토큰 가격 10분의 1로, 평균 3배 이상 빠르게 수행. 사실 오류율 대폭 감소 주장 — 내부 유도 테스트 기준 4.3%(저 effort 16.7%)이나 독립 재현은 미확인.
- **독립 평가**: Artificial Analysis 지수 48(전작 Terra 42, Sol 54, Opus 5.5 58, Argon·Astra 53). 과제당 비용 $1.40에서 $0.40으로 감소, 답을 모를 때 추측률 88%에서 38%로 감소. 코딩·컴퓨터 사용 심층 작업에서는 Sol이 여전히 우위라는 OpenAI 자체 평가도 함께 공개됨.
- **안전·제약**: Preparedness Framework 사이버보안 Critical 임계에 도달, GPT-6 Astra용 안전장치를 유지하고 36쪽 시스템 카드 부록을 함께 공개. UAE 추론 레지던시는 미지원. 272,000 토큰 초과 요청에는 전체 요청에 할증, Fast 모드는 표준 요금의 2배라는 부가 조건도 보도됨.

## 맥락

- [[concepts/gpt-61-sol-ultrafast]] — 같은 GPT-6.1 계열의 속도·가격 양극화, Terra는 그 아래 가격대
- [[concepts/claude-haiku-5-5]] — 경량·저가 모델 경쟁의 다른 축, API 최대 90% 인하와 effort 설정
- [[concepts/openai-enterprise-discounts-anthropic]] — 할인 공세와 같은 주간의 가격 전쟁, 이번엔 정가 자체 인하
- [[concepts/ai-debt-boom-cracking]] — 모델 가격 인하와 자본 조달 압박이 동시에 진행되는 국면
