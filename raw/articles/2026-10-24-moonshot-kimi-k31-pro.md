---
title: "Moonshot Kimi K3.1 Pro — 2.8T MoE 오픈웨이트 예고, 사이버 능력은 의도적으로 낮춰 출시"
source_url: "https://www.reuters.com/technology/moonshot-curbs-hacking-ability-new-kimi-model-fears-grow-over-ai-powered-2026-10-24/"
source_type: "news"
authors: ["Reuters", "Moonshot AI", "Artificial Analysis", "MarkTechPost", "Wccftech"]
published: 2026-10-23
fetched: 2026-10-24
tags: [moonshot, kimi, open-weights, moe, cyber-capability, ai-safety, china]
status: raw
---

# Moonshot Kimi K3.1 Pro — 2.8T MoE 오픈웨이트 예고, 사이버 능력은 의도적으로 낮춰 출시

> Moonshot AI가 10-23 Kimi K3.1 Pro를 API·앱으로 출시하고 가중치는 11-04까지 공개 예고. 총 2.8T/활성 104B MoE, 1M 토큰 컨텍스트, API $2/$10(입력/출력, 100만 토큰). 업체 자체 Terminal-Bench 4.0 65.7%(Opus 5.5 66.4%에 근접), 독립 Artificial Analysis 지수 55로 4위. 사이버 관련 데이터를 중간 학습·RL에서 제거해 내부 xdev-bench-hard를 90.5%→81.0%로 낮췄다고 공개 — "오픈웨이트가 사이버 능력의 절대적 프런티어를 확장하지 않겠다"는 원칙. (Reuters·Moonshot·Artificial Analysis·MarkTechPost·Wccftech 교차)

## 내용

- **모델**: 총 2.8T 파라미터, 토큰당 활성 104B MoE. 1M 토큰 컨텍스트. 고속 변형 K3.1 Pro Highspeed 동시 출시(2~3배 속도 주장).
- **가격**: API 입력 $2/출력 $10/캐시 히트 $0.20(100만 토큰 기준). K3 대비 전 구간 약 33% 인하 보도.
- **성능(업체 자체)**: Terminal-Bench 4.0 65.7%(Opus 5.5 66.4%, GPT-6 Astra 58.2%), BenchCAD(도구 사용) 92.7%, Kimi Code Bench 3.0 장기지평 61.2%(K3 55.95%). 독립 지수 Artificial Analysis 55, 4위 — 오픈웨이트 중 선두 예고.
- **사이버 절충**: 중간 학습과 RL 환경에서 사이버 관련 데이터 제거. 내부 xdev-bench-hard(리눅스 커널·Node.js·Exim 익스플로잇) 미필터 체크포인트 90.5% → 출시 모델 81.0%. ExploitBench 74.7%(Opus 5.5 91.0% 보도). 여전히 K3(33.3%)보다 훨씬 높음.
- **공개 일정**: 가중치 11-04까지 공개 예고, 라이선스 미공개 상태. 출시 시점에는 Kimi.ai·Kimi Work·Kimi Code·API로만 이용.
- **한계**: 벤치 수치는 업체 자체 실행·편찬이 주축이며 독립 검증 전. 가중치 공개 후 파인튜닝으로 절충이 유지될지는 미지수 — 공개된 가중치는 회수 불가.

## 맥락

- [[concepts/deepseek-v41-flash-1017]] — DeepSeek V4.1-Flash-1017, MIT 오픈웨이트·태스크당 $0.2 (2026-10-18) — 중국 오픈웨이트 가격 파괴 라인의 연장.
- [[concepts/china-ai-export-controls]] — 중국 AI 수출통제 초안, 모델 가중치·소스코드 첫 규제 대상 (2026-10-17) — 같은 주 중국 거버넌스 축과 대조.
- [[concepts/claude-mythos-5-aisi-postmortem]] — Mythos 5의 AISI 평가 사후분석 (2026-10-24) — 사이버 능력을 둘러싼 같은 날의 다른 답.
