---
title: "DataDome Q3 2026 AI 트래픽 보고서 — 250억 에이전트 요청, Muse 미신고 99.3%"
category: concepts
tags: [datadome, ai-traffic, agents, meta-muse, agentic-browser, cloud-infrastructure, unidentified-agents, identity]
created: 2026-10-16
updated: 2026-10-16
sources:
  - "raw/articles/2026-10-16-datadome-ai-traffic-q3-2026.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: high
---

# DataDome Q3 2026 AI 트래픽 보고서 — 250억 에이전트 요청, Muse 미신고 99.3%

## 한줄 정의

DataDome이 2026-10-15 발표한 Q3 AI 트래픽 정량 보고서 — **분기 AI 에이전트 요청 250억 건(전분기 대비 +41.5%)**, Meta Muse가 출시 12일 만에 2,910만 요청을 기록했으나 **99.3%가 클라우드 인프라에서 미신고(unidentified) 상태**로 발생.

## 핵심 내용 (DataDome 공식 보고서·PPC Land, 10/15)

- **규모**: 분기 AI 에이전트 요청 250억 건 — 전분기 177억 대비 +41.5%.
- **에이전틱 브라우저**: 트래픽이 9월 한 달 4.7배 급증 (1,250만 → 5,820만).
- **Meta Muse**: 9/22~10/3 출시 12일 만에 2,910만 요청. 그중 99.3%가 클라우드 인프라에서 발생 — 미신고 상태.
- **민감 엔드포인트**: Muse 요청의 8.9%가 로그인·결제·장바구니 등 민감 엔드포인트에 도달.
- **Meta 비중**: 전체 AI 에이전트 트래픽 중 Meta 비중 51.5% → 49.7%.
- **Claude 크롤러**: 159% 급증.

## 왜 중요한가

1. **Poppy(신원·권한 레일)의 정량 근거**: [[patterns/agentic-commerce]] 10/13 보강이 "신원 미표시 에이전트의 거래는 기본 차단 정책"을 실무 적용으로 제시했는데, 이번 수치는 그 문제의 규모 — Amazon이 9월 차단한 "신원 미표시 Muse 에이전트"가 12일 만에 2,910만 요청. "에이전트가 누구인지 증명하는가" eval 축의 첫 대규모 수치.
2. **민감 엔드포인트 8.9%**: 로그인·결제·장바구니 — [[patterns/agentic-finance]]의 "돈을 만지는 에이전트"가 이미 실전 트래픽. 신원 없는 결제 시도가 분기 수백만 건 규모라는 뜻.
3. **에이전틱 브라우저의 폭발**: 9월 한 달 4.7배 — computer-use 에이전트가 웹의 새 트래픽 주체가 되는 중. [[comparisons/frontier-lab-economics]]의 프레이밍으로는 에이전트 트래픽 자체가 인프라 경제의 새 수요 축 (+41.5%/분기).

## 한계 (명시)

- DataDome은 봇 탐지 벤더 — 자사 관측망 기준 수치, 독립 재현 없음.
- "미신고"의 정의(헤더 부재 vs 의도적 은폐)는 보고서 요약에 미상세.
- Meta 비중 하락(51.5%→49.7%)의 해석(경쟁 심화 vs 분모 확대)은 미상세. confidence는 **high** — 공식 보고서 + 2차 매체 교차, 수치는 보고서 인용.

## 관련 개념

- [[patterns/agentic-commerce]] — 신원·권한 레일의 정량 근거, "누구 편인가"에 "누구인지 증명하는가" 추가
- [[concepts/meta-sierra-poppy-protocol]] — Poppy가 풀어야 할 문제의 규모감
- [[patterns/agentic-finance]] — 민감 엔드포인트 8.9%, 돈을 만지는 에이전트 트래픽의 실측
- [[comparisons/frontier-lab-economics]] — 에이전트 트래픽 자체가 인프라 경제의 새 수요 축

## 참고 소스

- [DataDome Q3 2026 AI 트래픽 보고서 (DataDome 공식·PPC Land, 10/15)](raw/articles/2026-10-16-datadome-ai-traffic-q3-2026.md)
