---
title: "Google Gemini 4 Neon — Carbon급 성능, 2배 속도, $3/$15"
category: concepts
tags: [google, gemini, gemini-4-neon, model-release]
created: 2026-11-19
updated: 2026-11-20
sources:
  - "raw/articles/2026-11-19-google-gemini-4-neon.md"
  - "raw/articles/2026-11-20-gemini-4-neon-benchmarks-followup.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/google-antigravity-teamwork]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: medium
---

# Google Gemini 4 Neon — Carbon급 성능, 2배 속도, $3/$15

## 쉽게 읽기

**비유**: Google이 내놓은 새 AI 모델 Neon은 "무겁고 똑똑한 맏형(Carbon)만큼 잘하면서, 일은 두 배 빨리 끝내고 값도 더 싸다"는 모델이다. 빠른 동생(Hydrogen)과 무거운 맏형 사이에 낀 중간 자리다. 단, 값싼 이유는 12월부터다 — 11월 말까지는 맏형이 할인 중이라 오히려 맏형이 더 싸다.

| 용어 | 풀이 |
|------|------|
| **사고 수준(thinking level)** | 모델이 답하기 전에 얼마나 깊이 생각할지 정하는 단계 — low/medium/high/xhigh, 높을수록 똑똑하지만 느리고 비싸다 |
| **Intelligence Index** | Artificial Analysis라는 독립 기관이 매기는 종합 지능 점수 |
| **Coding Agent Index** | 코딩 에이전트로서의 실력을 재는 지수 |
| **컨텍스트** | 모델이 한 번에 읽을 수 있는 글의 양 — 100만 토큰은 긴 책 수십 권 분량 |
| **캐시 입력** | 전에 이미 읽은 내용을 다시 쓸 때 깎아 주는 요금 |

## 한줄 정의

Google이 2026년 11월 18일 출시한 **Gemini 4 Neon**은 약 7주 만의 네 번째 Gemini 4 모델(Argon·Carbon·Hydrogen에 이어)로, 빠른 Hydrogen과 무거운 Carbon 사이의 중위 모델이다. Carbon에서 파생됐고, 입력 100만 토큰당 **$3**·출력 **$15**, 컨텍스트 **100만 토큰**이다. Carbon급 지능을 약 2배 속도와 더 낮은 작업당 비용으로 제공한다는 게 Google의 주장이다.

## 핵심 내용

- **가격**: 입력 $3 / 출력 $15(100만 토큰당), 캐시 입력 $0.15(95% 할인). 컨텍스트 100만 토큰, 텍스트·이미지·오디오·비디오·PDF 입력, 텍스트 전용 출력. 지식 기준 2026년 3월. 네 단계 사고 수준(low/medium/high/xhigh).
- **독립 지표(Artificial Analysis)**: Intelligence Index xhigh 기준 61점, 전체 3위(Claude Fable 5.2 65점, GPT-6.2 Astra 62점 다음). 기본 high 기준 60점으로 Carbon과 동점. Coding Agent Index 59점(Antigravity CLI 경유, Opus 5.5·Fable 5.2의 58점 앞섬). Vals Index 70.9%로 42개 모델 중 2위(Carbon 바로 앞).
- **속도·비용**: 출력 속도 약 110토큰/초로 Carbon(약 57)의 약 2배. 평균 작업 시간 약 21분 vs Carbon 약 36분. 기본 high 기준 작업당 비용이 Carbon보다 32% 낮다고 Google은 주장.
- **가격 함정 — 12월 1일이 분기점**: Carbon은 11월 30일까지 도입가 $2/$10, 12월 1일부터 $4/$20으로 오른다. 그래서 Neon이 Carbon보다 토큰 단가에서 25% 저렴해지는 건 12월 1일부터다. 11월 중에는 Neon이 오히려 비싸다.
- **Google 자체 주장 벤치마크**: Terminal-Bench 4.1 65.2%, FrontierCode 2.0 46.2%(기본 high), Terminal-Bench Science 70.5%, RiemannBench 84.0%, HLE-Diamond 71.3%에서 동급 최상. AutoBaxBench 하드 티어 76%(SOTA), WebExploitBench v1.2 51.26%(SOTA). 대부분 Google이 선택·제시한 수치라 독립 재현은 없다.
- **용도·롤아웃**: 복잡한 코딩·분석·기업 업무, 장시간 에이전트 워크플로우. Antigravity에서 빠른 고판단 오케스트레이터로 병렬 Hydrogen 서브에이전트를 지휘하는 구성도 제시. Gemini API(AI Studio), Gemini for business, AI Pro·Ultra 구독자의 Antigravity·Gemini 앱에서 제공.
- **주의**: 하네스에 따른 성능 편차가 크다. 같은 모델이 표준 하네스에서는 코딩 테스트 12.8%, Antigravity 안에서는 39.0%를 기록했다(Google 인용). 모델 점수만큼 "어떤 하네스에서 쟀는지"가 중요하다.

## 독립 벤치마크 후속 (2026-11-19)

- **CAAC Go 실전 에이전트 테스트**(고객 메시지 150건×5모델, 독립 AI 심사 2명): Neon 135/150으로 역대 최고, Claude Opus 5.5(133건)와 통계적 동점(p=0.72), Gemini 4 Carbon(125건) 상회(p=0.02).
- **Artificial Analysis 추가 지수**: Intelligence Index 61점 세계 3위(Claude Fable 5.2 65점, GPT-6.2 Astra 62점 뒤) 유지. Coding Agent Index 58.6점 1위, Vending Bench 2·Zapier Automation Bench 1위, Pareto Frontier 2위.
- **단점**: 평균 응답 9.3초(Opus 5.5의 2배 이상), 1,000건당 비용 $28.80(Opus 5.5 $21.65보다 비쌈). "빠르고 싸다"는 출시 주장과 달리, 응답 속도와 건당 비용에서는 Opus 5.5에 뒤진다.
- **속도 주장 재검토 — '3배 빠름' vs 독립 측정 약 40%**: Google 주장 'Carbon 대비 3배 빠름'과 달리 독립 측정에서는 작업 시간 21분 vs 36분으로 약 40% 빠름에 그쳤다. 본 페이지의 "출력 속도 약 110토큰/초로 Carbon(약 57)의 약 2배"는 토큰 속도 기준, "3배"는 Google의 별도 주장, "40%"는 작업 시간 기준 — 기준이 다르면 숫자도 다르다. 아래 한계 항목 참조.
- **가격 재확인**: Neon 입력 $3/출력 $15 per 1M 토큰. Carbon은 11월 30일까지 도입가 $2/$10이라 현재는 Neon이 토큰당 더 비싸다. Neon이 Carbon보다 토큰 단가에서 25% 저렴해지는 건 12월 1일 Carbon 인상($4/$20) 이후 — 본 페이지의 12월 1일 분기점과 일치한다.

## 왜 중요한가 (1인 개발자 관점)

1. **모델 선택이 가격 전쟁이 됐다**: 72시간 사이에 OpenAI가 Astra 가격을 20% 내리고, Google이 Neon을 내고, Microsoft가 MAI Code 2를 $0.50/$2.50에 내놨다. 같은 일을 시킬 때 모델마다 작업당 비용이 몇 배씩 갈린다. "어느 모델이 제일 똑똑한가"보다 "이 일을 이 가격에 끝내는가"가 실전 기준이 됐다.
2. **사고 수준이 예산 결정이 됐다**: Neon은 low($0.75/작업)부터 xhigh($6.44/작업)까지 네 단계다. 쉬운 일은 low로, 어려운 일만 xhigh로 — 이 조절이 곧 비용 관리다. [[concepts/llm-evaluation]] 관점에서는 "점수"와 "작업당 비용·시간"을 함께 보는 습관이 필요하다.
3. **오케스트레이터 패턴**: Neon이 빠른 판단자로 Hydrogen 여러 개를 지휘하는 구조는 [[concepts/google-antigravity-teamwork]]의 멀티 에이전트 흐름과 이어진다. 비싼 모델 하나보다 "똑똑한 지휘자 + 빠른 일꾼들"이 싸고 빠른 경우가 늘고 있다.

## 한계 (명시)

- 벤치마크 수치 대부분은 Google이 선택·제시한 것이며, 독립적으로 확인된 건 Artificial Analysis 지수(61점·3위, Coding Agent 59점)와 Vals Index 정도다.
- 가격 우위는 Carbon의 12월 인상 이후에야 온전히 성립한다. 11월 중에는 Neon이 Carbon 도입가보다 비싸다.
- 하네스별 편차(12.8% vs 39.0%)가 크므로, 수치 자체보다 측정 조건을 함께 봐야 한다.
- confidence는 medium — Google 공식 발표 + AA 독립 지표 교차이나, 자체 주장 벤치마크는 미검증.
- **속도 수치 기준 주의(모순 플래그)**: 'Carbon 대비 3배 빠름'(Google 주장), '토큰 속도 약 2배'(110 vs 57), '작업 시간 약 40% 단축'(21분 vs 36분)은 서로 다른 기준의 숫자다. 어느 하나만 떼어 "Neon이 몇 배 빠르다"고 읽으면 안 된다.

## 관련 개념

- [[concepts/gemini-4-carbon-testing]] — Carbon과 동점(60점)이면서 2배 빠른 중위 모델의 등장, Gemini 4 가격 전쟁의 다음 단계 (2026-10-10)
- [[concepts/gemini-4-argon]] — Argon이 맡았던 코드·분석 포지션을 Neon이 이어받음 (2026-10-01)
- [[concepts/google-antigravity-teamwork]] — Antigravity에서 Neon이 오케스트레이터, Hydrogen이 서브에이전트로 짝지어지는 구조 (2026-11-15)
- [[concepts/llm-evaluation]] — 모델 점수와 작업당 비용·시간을 함께 보는 평가 관점

## 참고 소스

- [Google Gemini 4 Neon 출시 — Carbon급 성능, 2배 속도, $3/$15 (Google, 11-18)](raw/articles/2026-11-19-google-gemini-4-neon.md)
- [Gemini 4 Neon 벤치마크 후속 — CAAC Go 에이전트 테스트 역대 최고, Carbon 제침 (CAAC Go·Crescendo Lab, 11-19)](raw/articles/2026-11-20-gemini-4-neon-benchmarks-followup.md)