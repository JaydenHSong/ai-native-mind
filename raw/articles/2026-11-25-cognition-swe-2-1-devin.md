---
title: "Cognition, SWE-2.1 출시 — Devin 코딩 모델, Terminal-Bench 2배 이상·사이버 변형 동시 공개 (11-24)"
source_url: "https://www.unite.ai/cognition-releases-swe-2-1-with-major-coding-and-cybersecurity-gains/"
source_type: "news"
authors: ["Unite.AI"]
published: 2026-11-24
fetched: 2026-11-25
tags: [cognition, devin, swe-2-1, coding-model, benchmark, cybersecurity]
status: raw
---

# Cognition, SWE-2.1 출시 — Devin 코딩 모델, Terminal-Bench 2배 이상·사이버 변형 동시 공개 (11-24)

> Cognition이 11월 24일 Devin의 코딩 모델 SWE-2.1을 출시했다. SWE-2와 같은 레시피(문샷 Kimi K3 위 순수 강화학습)로 훈련했고, Terminal-Bench 4.1 점수가 24.2에서 50.0으로 2배 이상 올랐다. Cerebras 기반 초고속 변형 Ultrafast(Lightning)와 보안용 SWE-2.1 Cyber도 함께 나왔다.

## 내용

- **벤치마크 (Cognition 자체 수치, 독립 검증 없음)**: Terminal-Bench 4.1 50.0(SWE-2 24.2), FrontierCode 2.0 41.3(24.1), ProgramBench 44.0(17.0), SWE Marathon 54.9(32.5). ExploitBench 80.0(36.1), ExploitGym 의도된 익스플로잇 성공률 27.3%(12.1%).
- **상대 위치**: 같은 표에서 Claude Opus 5.5는 Terminal-Bench 65.8·FrontierCode 47.3, Gemini 4 Neon 65.2·46.2, Kimi K3.1 59.7로 SWE-2.1보다 앞섬. 즉 전임 대비 대폭 상승했으나 프론티어 모델에는 아직 못 미침.
- **Ultrafast(Lightning)**: Cerebras 파트너십 기반, 초당 600토큰 생성(표준 60토큰/초의 10배). 입력 $5/백만 토큰, 출력 $25/백만 토큰, 캐시 읽기 $0.50/백만 토큰. 무료 혜택 대상 아님.
- **SWE-2.1 Cyber**: 방어적 보안 작업용으로 안전장치를 완화한 변형, Devin Security에 순차 적용. 일반 모델은 고위험 활동 일부에만 안전장치 적용.
- **가격·제공**: Devin Desktop·Cloud·CLI에서 제공. Devin Pro·Max·Teams 사용자는 2주간 무료(Desktop·CLI는 12월 8일까지 무료), 이후 2027년 1월 30일까지 할인 가격. Cloud 세션은 12월 22일까지 프리뷰.
- **방법론 주의**: 경쟁 모델 수치는 공개·개발자 보고 점수 또는 Cognition 자체 실행. 각 모델은 개발자 선호 하네스(Claude Code, Codex 등)로, SWE 모델은 Devin CLI 하네스로 측정 — 하네스 차이 존재.

## 맥락

- 코딩 에이전트 모델이 '범용 프론티어 모델을 빌려 쓰는' 단계에서 '자체 RL 모델로 특화'하는 단계로 이동 — Devin의 플랫폼 종속 모델 전략
- 위키의 코딩 에이전트·벤치마크·강화학습 주제와 직결. SWE-2.1의 사이버 점수는 이중용도(dual-use) 논쟁거리
