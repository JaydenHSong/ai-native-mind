---
title: "DataDome Q3 2026 AI 트래픽 보고서 — 분기 250억 에이전트 요청, Muse 미신고 99.3%"
source_url: "https://datadome.co/threat-research/ai-traffic-report-q3-2026/"
source_type: "report"
authors: ["DataDome", "PPC Land"]
published: 2026-10-15
fetched: 2026-10-16
tags: [datadome, ai-traffic, agents, meta-muse, agentic-browser, cloud-infrastructure, crawler]
status: raw
---

# DataDome Q3 2026 AI 트래픽 보고서 — 분기 250억 에이전트 요청, Muse 미신고 99.3%

> 2026-10-15 DataDome 공식 보고서·PPC Land 교차 확인. Q3 2026 AI 에이전트 트래픽 정량 보고서.

## 내용

- 규모: 분기 AI 에이전트 요청 250억 건 — 전분기 177억 대비 +41.5%.
- 에이전틱 브라우저: 트래픽이 9월 한 달 4.7배 급증 (1,250만 → 5,820만).
- Meta Muse: 9/22~10/3 출시 12일 만에 2,910만 요청. 그중 99.3%가 클라우드 인프라에서 발생 — 미신고(unidentified) 상태.
- 민감 엔드포인트: Muse 요청의 8.9%가 로그인·결제·장바구니 등 민감 엔드포인트에 도달.
- Meta 비중: 전체 AI 에이전트 트래픽 중 Meta 비중 51.5% → 49.7%.
- Claude 크롤러: 159% 급증.

## 맥락

- [[patterns/agentic-commerce]] — 10/13 보강(Poppy — 신원·권한 레일, "신원 미표시 에이전트 차단")의 정량 근거. Amazon이 9월 차단한 "신원 미표시 Muse 에이전트"가 12일 만에 2,910만 요청 규모로 실전 확인. "에이전트가 누구인지 증명하는가" eval 축의 첫 대규모 수치.
- [[concepts/meta-sierra-poppy-protocol]] — Poppy의 Discovery(`/.well-known/poppy.json`)·신원 부여가 풀어야 할 문제의 규모감.
- [[patterns/agentic-finance]] — 민감 엔드포인트 8.9%(로그인·결제·장바구니): 돈을 만지는 에이전트 트래픽의 실측.
- [[comparisons/frontier-lab-economics]] — 에이전트 트래픽 자체가 인프라 경제의 새 수요 축 (+41.5%/분기).
