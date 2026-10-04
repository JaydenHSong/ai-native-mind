---
title: "7주 6건의 always-on 에이전트 발표 감사 — Stochastic Parrot audit + DeepSeek open-weight 모델"
source_url: "https://thestochasticparrot.com/audits/always-on-agent-race"
source_type: "analysis"
authors: ["stochastic-parrot"]
published: 2026-10-04
fetched: 2026-10-04
tags: [always-on-agent, agent-race, deepseek, open-weights, pricing, audit]
status: raw
---

# Six Agent Announcements in Seven Weeks, Compared With DeepSeek's Model Release (10/4, The Stochastic Parrot)

> 7주 동안 6개의 always-on 에이전트 발표 vs 1개의 open-weight 모델. 감사는 '사용자에게 무엇을 주었는가'로 본다.

## 내용

- 6건 타임라인: xAI 8/11, Meta 9/8·9/23, Anthropic 9/16, Microsoft 9/25, OpenAI 9/29. 6건 중 5건이 '사용자가 자리를 비운 뒤에도 일이 계속됨'을 약속.
- 접근 게이트 5갈래: OpenAI·xAI·Anthropic = 유료 플랜, Microsoft = private preview, Meta = 무료+사용량 제한(CNBC).
- 가격 혼선: ChatGPT Pro 가격을 두고 The Register는 $200(구가격), CBS·WIRED는 $100, NBC는 $100~500 보도. (10/1 raw의 'Pro $200 재오픈'과 연결 — 가격 정책이 발표마다 요동)
- DeepSeek은 모델 릴리즈: 소비자 에이전트가 아니라 open-weight 모델. Claude Code를 통합 타깃으로 명시. Vercel AI Gateway의 open-weight 점유율이 화~토 54%→62% 상승.
- 방법론 노트: audit는 35개 소스, 40개 span 중 39개 locate, 0 correction — 팩트 체크 과정을 공개한 형태.

## 맥락

- 위키 concepts/persistent-agent(9/27 "O" 리크)의 실전 확정판: 7주 6발표로 always-on이 업계 표준 경쟁이 됨.
- comparisons/frontier-lab-economics(저가 파괴자 vs 가격 결정력)와 직결: DeepSeek open-weight가 Vercel Gateway 점유율을 갉아먹는 구조.
- '사용자가 닫아도 계속 일한다'는 약속이 곧 책임 귀속 문제로 연결: concepts/agent-attribution 클러스터.