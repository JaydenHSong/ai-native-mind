---
title: "Anthropic Claude Duet — 상시 대기 에이전트 리서치 프리뷰 공개"
source_url: "https://www.pymnts.com/artificial-intelligence-2/2026/anthropic-launches-claude-duet/"
source_type: "news"
authors: ["pymnts.com", "aiweekly.co", "webpronews.com", "teknotum.net", "inc42.com", "pivotnews.ai", "madrobot.blog"]
published: 2026-10-21
fetched: 2026-10-22
tags: [anthropic, claude-duet, proactive-agent, opus-5-5, agent-ux, approval-gate, marketplace-connectors]
status: raw
---

# Anthropic Claude Duet — 상시 대기 에이전트 리서치 프리뷰 공개

> 2026-10-21 Anthropic이 Claude Duet 리서치 프리뷰를 공개. Claude Opus 5.5 기반의 proactive 에이전트로, 매일 아침 연결된 앱의 우선순위를 정리한 모닝 브리프를 보내고 수 시간마다 앱을 확인해 주의가 필요한 건만 메시지로 알린다. Claude Marketplace의 6,000개 이상 커넥터 (Stripe·QuickBooks·Gusto·Shopify·DocuSign 등)와 연동. 메시지 발송·결제·문서 서명·삭제 전에는 반드시 사용자 승인 — 주식 거래와 계좌 간 자금 이동은 승인 없이도 금지. 가상 머신 + 브라우저에서 실행돼 사용자 기기가 꺼져 있어도 작업 계속. 미국 Pro/Max 구독자 대상 대기목록 방식. 백그라운드 점검도 플랜 사용 한도를 소모. (pymnts.com·aiweekly.co·webpronews.com·teknotum.net·inc42.com·pivotnews.ai·madrobot.blog 교차)

## 내용

- **출시**: 2026-10-21 Anthropic — Claude Duet 리서치 프리뷰. Claude Opus 5.5 기반 proactive 에이전트.
- **동작 패턴**: 매일 아침 모닝 브리프 (연결된 앱의 우선순위 정리) + 수 시간마다 앱 확인 후 주의 필요 건만 메시지 알림.
- **연동**: Claude Marketplace의 6,000+ 커넥터 — Stripe·QuickBooks·Gusto·Shopify·DocuSign 등.
- **승인 게이트**: 메시지 발송·결제·문서 서명·삭제 전 사용자 승인 필수. 주식 거래·계좌 간 자금 이동은 사전 승인으로도 금지 (원칙적 차단).
- **실행 환경**: 가상 머신 + 브라우저 — 사용자 기기가 꺼져 있어도 작업 지속 (persistent agent 패턴).
- **접근**: 미국 Pro/Max 구독자 대기목록 방식. 백그라운드 점검도 플랜 사용 한도 소모.
- **패턴 수렴**: ChatGPT Dots (10-02) · Meta Muse (10-13) 에 이어 6주 내 세 번째 빅랩 proactive 에이전트.

## 맥락

- [[concepts/persistent-agent]] — 상시 가동형 에이전트 (OpenAI "O" 리크, 2026-09-27) — Duet은 이 개념의 상용 구현.
- [[patterns/agent-authority-model]] — 업무별 에이전트 권한 5단계 프레임워크 (LEA, 2026-10-05) — Duet의 승인 게이트·원칙적 금지가 권력 위임 설계의 실전 사례.
- [[patterns/agent-safety-runtime]] — 실행시점 에이전트 보안 런타임 — 브리프/백그라운드 점검의 관측·통제 훅과 연결.
