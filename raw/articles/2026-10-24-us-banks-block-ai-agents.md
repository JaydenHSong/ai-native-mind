---
title: "미 대형은행, 제3자 AI 에이전트의 계좌 로그인·거래 차단 — '누가 지시했는지 모른다'가 핵심"
source_url: "https://www.usatoday.com/story/money/2026/10/23/banks-move-to-limit-ai-agent-access/92385119007/"
source_type: "news"
authors: ["Axios", "USA TODAY", "Reuters", "Daily Caller", "Palo Alto Networks", "Ping Identity"]
published: 2026-10-23
fetched: 2026-10-24
tags: [banks, ai-agents, account-access, authentication, open-banking, agent-authority, fintech]
status: raw
---

# 미 대형은행, 제3자 AI 에이전트의 계좌 로그인·거래 차단 — '누가 지시했는지 모른다'가 핵심

> Axios 10-22 최초 보도 뒤 USA TODAY 10-23 확인. JPMorgan Chase·Bank of America·Wells Fargo·Citi·Morgan Stanley·Charles Schwab 등이 제3자 AI 에이전트의 계좌 로그인·직접 거래를 제한. 시티는 "제3자 AI 에이전트나 어시스턴트가 고객 계정에 로그인하거나 디지털 뱅킹 플랫폼 내에서 직접 거래하는 것을 허용하지 않는다"고 공식 확인, 다만 승인된 오픈뱅킹 제공업체 경유의 제한적 읽기 전용 접근은 유지. 핵심 쟁점은 자격증명은 확인되지만 그 뒤의 행위가 이용자 지시인지 에이전트 독단인지 은행이 판별할 수 없다는 점. (Axios·USA TODAY·Reuters·Daily Caller 교차)

## 내용

- **차단 범위**: 고객 아이디·비밀번호로 로그인하는 브라우저·Computer Use·OpenClaw류 에이전트의 계좌 접근·거래. 계좌 소유자 본인 로그인 의무 위반이라는 정책 근거.
- **은행별**: 시티 — 로그인·직접 거래 불허, 승인 오픈뱅킹 경유 읽기 전용은 허용. 웰스파고 — 무단 에이전트 접근 차단 조치 확인. 모건스탠리 — "rogue 에이전트" 관측 사례는 없다고 밝히면서도 예방적 차단. 찰스 슈왑 — 무단 에이전트 차단하되 시도 건수는 적다고 언급.
- **판별 문제**: 은행은 어떤 자격증명으로 로그인했는지는 알지만, 그 행위가 이용자의 직접 지시인지, 에이전트가 이용자가 명시적으로 승인하지 않은 방식으로 해석한 결과인지 구분이 어려움. JPMorgan CEO 제이미 다이먼의 "수천 개 rogue 에이전트" 발언은 CNBC의 실적 콜 전언으로, 은행별 확인 수치와는 별개로 다뤄야 함.
- **조사 수치**: 금융·소프트웨어 CISO의 3분의 2가 에이전틱 AI를 상위 3대 사이버보안 위험으로, 3분의 1 이상이 최우선 우려로 지목(Palo Alto Networks 2026 연구). Ping 10월 조사 — 소비자 71%가 에이전트가 자신의 성격·가치를 왜곡할 수 있다고 우려, 금융 거래에 AI를 전혀 신뢰하지 않는다는 응답은 22%.
- **중간 지대**: 대부분 은행이 읽기 전용 접근은 열어두는 방향 — "볼 수는 있지만 움직일 수는 없는" 에이전트가 당분간 표준 형태가 될 가능성.
- **주의**: "차단 후에도 미검증 에이전트가 일부 계좌에 도달한다"는 10-24 후속 보도는 Axios 원문 전체를 직접 검증하지 못했다고 스스로 밝혀, 확정 사실이 아닌 후속 보도 수준 주장으로 다룸.

## 맥락

- [[concepts/websites-block-ai-agents]] — Yelp·Delta·은행의 AI 에이전트 차단, 에이전틱 웹의 접근 재량 전환 (2026-10-18) — 5일 만의 금융권 확산.
- [[concepts/mastercard-agent-pay-machines-developer-access]] — Mastercard Agent Pay for Machines, x402 프로토콜 에이전트 결제 API (2026-10-21) — 차단과 결제 인프라 개방의 양면.
- [[patterns/agent-authority-model]] — 업무별 에이전트 권한 5단계 프레임워크, LEA AI Agent Authority Model (2026-10-05) — "누가, 어디까지" 권한 모델의 실전 시험대.
