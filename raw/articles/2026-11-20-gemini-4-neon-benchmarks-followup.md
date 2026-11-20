---
title: "Gemini 4 Neon 벤치마크 후속 — CAAC Go 에이전트 테스트 역대 최고, Carbon 제침 (11-19)"
source_url: "https://caacgo.cresclab.com/benchmark/gemini-4-neon-november-2026"
source_type: "news"
authors: ["CAAC Go", "Crescendo Lab", "Geeky Gadgets"]
published: 2026-11-19
fetched: 2026-11-20
tags: [google, gemini, gemini-4-neon, benchmarks, agents]
status: raw
---

# Gemini 4 Neon 벤치마크 후속 — CAAC Go 에이전트 테스트 역대 최고, Carbon 제침 (11-19)

> 11월 18일 출시된 Gemini 4 Neon의 독립 벤치마크 결과가 나왔다. CAAC Go 실전 에이전트 테스트에서 Neon은 150건 중 135건을 해결해 역대 최고 기록을 세웠고, Claude Opus 5.5(133건)와 통계적 동점, Gemini 4 Carbon(125건)을 앞섰다. 다만 응답 속도와 1,000건당 비용에서는 Opus 5.5보다 뒤졌다.

## 내용

- **Artificial Analysis**: Intelligence Index 61점 세계 3위(Claude Fable 5.2 65점, GPT-6.2 Astra 62점 뒤). Coding Agent Index 58.6점 1위, Vending Bench 2·Zapier Automation Bench 1위, Pareto Frontier 2위.
- **CAAC Go 실전 에이전트 테스트**(고객 메시지 150건×5모델, 독립 AI 심사 2명): Neon 135/150 역대 최고, Claude Opus 5.5 133건과 통계적 동점(p=0.72), Gemini 4 Carbon 125건 상회(p=0.02).
- **단점**: 평균 응답 9.3초(Opus 5.5의 2배 이상), 1,000건당 비용 $28.80(Opus 5.5 $21.65보다 비쌈).
- **가격**: Neon 입력 $3/출력 $15 per 1M 토큰. Carbon은 11월 30일까지 도입가 $2/$10이라 현재는 Neon이 토큰당 더 비싸다. Neon이 Carbon보다 토큰 단가에서 25% 저렴해지는 건 12월 1일 Carbon 인상($4/$20) 이후다.
- **수치 불일치 유의**: Google 주장 'Carbon 대비 3배 빠름' vs 독립 측정 약 40% 빠름(작업 시간 21분 vs 36분). Google 자체 벤치마크는 선택·제시한 수치라 독립 재현은 없다.

## 맥락

- [[concepts/gemini-4-carbon-testing]] — Carbon과 동점(60점)이면서 2배 빠른 중위 모델이라는 출시 주장에 독립 테스트가 덧붙은 후속
- [[concepts/gemini-4-argon]] — Argon이 맡았던 코드·분석 포지션을 Neon이 이어받는 흐름
- [[concepts/google-antigravity-teamwork]] — Antigravity에서 Neon이 오케스트레이터, Hydrogen이 서브에이전트로 짝지어지는 구조
