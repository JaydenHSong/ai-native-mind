---
title: "Microsoft Ignite 2026 — 자체 코딩 모델 MAI Code 2 공개, Copilot Autopilot·Agent 365 5,000만 개 (11-17)"
source_url: "https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/"
source_type: "news"
authors: ["Microsoft"]
published: 2026-11-17
fetched: 2026-11-18
tags: [microsoft, mai-code-2, github-copilot, ignite, coding-agent]
status: raw
---

# Microsoft Ignite 2026 — 자체 코딩 모델 MAI Code 2 공개, Copilot Autopilot·Agent 365 5,000만 개 (11-17)

> Microsoft가 Ignite 2026 키노트에서 7개 자체 MAI 모델을 공개했다. 코딩 모델 MAI Code 2는 GitHub Copilot에서 정식 출시됐고, Microsoft는 자체 하네스 기준 Claude Opus 5.5 대비 96% 성능을 5% 비용으로, GPT-6.1 Sol 대비 98% 성능을 40% 비용으로 제공한다고 주장했다. Copilot은 Chat·Cowork·Code·Autopilot 4개 모드로 재편됐고, 24시간 상주하는 Autopilot 에이전트와 Agent 365에 등록된 에이전트 5,000만 개 돌파가 함께 발표됐다.

## 내용

- **MAI Code 2**: 자체 코딩 모델, GitHub Copilot에서 GA. Copilot Pro/Pro+/Max/Business/Enterprise에서 사용 가능. 약 2.8T 전체 파라미터 / 77B 활성 파라미터. Microsoft 주장(자체 내부 하네스, 독립 재현 없음): DeepSWE 1.1, TerminalBench 2.1, SWE-Atlas, FrontierCode 1.1 평균 기준 Claude Opus 5.5 대비 96% 성능을 5% 비용으로, GPT-6.1 Sol 대비 98% 성능을 40% 비용으로 제공. 비용은 50% 프로모션 가격 기준(Code 2 프로모션 $0.50/$2.50, 2027년 5월 17일까지).
- **MAI Code 2 Flash**: 약 398B 전체 / 12B 활성 파라미터. Copilot Free/Student 포함 전 플랜에서 사용 가능, Foundry에서는 제한 프리뷰. 7개 MAI 라인업에는 Cyber 2 Flash, Image 2.7, Realtime 1, Decision 1.1도 포함.
- **한계**: Microsoft는 Code 2가 기초 과학이나 초장기 에이전트 작업 같은 "더 어려운 문제"에는 아직 맞춰지지 않았다고 밝혔다.
- **Copilot 재편**: Chat·Cowork·Code·Autopilot 4개 모드. 24시간 상주하는 Autopilot 에이전트와 자연어 앱 생성기 Copilot Code는 Frontier 고객 대상으로 롤아웃 중. Agent 365에 등록된 에이전트는 5,000만 개를 넘었다.
- **Maia 300**: 자체 AI 칩 공개. 선도 GPU 대비 와트당 토큰 40%↑ 주장(자체 기준).
- **MAI Licensed Weights**: 신뢰 고객에게 모델 가중치를 제공하는 프로그램도 함께 발표 — 에이전트 커스터마이징 맥락에서 중요.
- **주의**: 성능·가격 수치는 모두 Microsoft 자체 주장이며 독립 검증이 없다. 프로모션 가격이 끝난 뒤의 실효 비용도 별개다.

## 맥락

- [[concepts/tool-use]] — 코딩 에이전트의 가격 경쟁이 모델 선택의 기준을 바꾸는 흐름
- [[concepts/ai-orchestration]] — 상주형 매니저 에이전트(Autopilot)가 기업용 Copilot의 기본 UX가 되는 전환
- [[concepts/mcp]] — Agent 365의 5,000만 개 에이전트 등록이 의미하는 에이전트 생태계 규모
