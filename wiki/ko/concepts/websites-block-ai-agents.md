---
title: "플랫폼의 에이전트 차단 — Yelp·Delta·은행이 에이전트 접근을 막기 시작하다"
category: concepts
tags: [ai-agents, blocking, yelp, delta, banks, data-licensing, agentic-web, charles-schwab, jpmorgan]
created: 2026-10-18
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-18-websites-block-ai-agents.md"
related:
  - "[[patterns/agentic-commerce]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/meta-sierra-poppy-protocol]]"
  - "[[concepts/cert-in-ai-agents-attack-vectors]]"
  - "[[concepts/tencent-rogue-agents]]"
status: draft
confidence: high
---

# 플랫폼의 에이전트 차단 — Yelp·Delta·은행이 에이전트 접근을 막기 시작하다

## 쉽게 읽기

**비유**: AI 에이전트가 "손님 대신 심부름하는 대리인"이라면, 가게들은 이제 "대리인은 출입 금지, 본인만 오세요" 팻말을 걸기 시작했다. Yelp는 "돈 내고 데이터 라이선스 사면 들어와", 은행은 "돈 움직이는 건 절대 안 돼", Delta는 "우리랑 제휴 안 했으면 예약도 안 돼". 에이전트 시대의 웹은 **사람에겐 열려 있고 소프트웨어에겐 닫히는** 방향으로 갈라지고 있다.

| 용어 | 풀이 |
|------|------|
| **Data licensing** | Yelp의 조건 — AI 에이전트는 유료 데이터 라이선스를 사야 접근 가능 |
| **Credential-based blocking** | Schwab·JPMorgan의 방식 — 고객 로그인 자격 증명을 쓰는 에이전트는 원천 차단 |
| **Authorized agent** | Meta의 반론 — "개인 에이전트를 외면하는 건 그 뒤의 고객을 외면하는 것" |

## 한줄 정의

2026-10-17 The Verge(Emma Roth) 보도로 확인된 플랫폼의 에이전트 차단 확산 — Yelp·Delta·JPMorgan·Schwab·Cars.com·Amtrak이 OpenAI·Meta·xAI 에이전트의 접근을 제한, **에이전틱 웹의 "누가 들어올 수 있는가"가 플랫폼의 재량으로** 넘어가는 전환점.

## 핵심 내용

- **Yelp**: AI 에이전트는 **유료 데이터 라이선스 프로그램**을 통해서만 접근 — TechCrunch 확인. 라이선스 없는 접근 거부.
- **Delta**: 서드파티 에이전트의 항공권 검색·예약 파트너십이 "현재 없음", 계속 평가 중. 권한 없는 자동화 차단 조치 진행. 공식 금지 선언은 아님(완곡).
- **Charles Schwab CEO Rick Wurster** (10/15 투자자 콜): "에이전트가 고객 대신 사이트에 로그인하는 건 안전하지 않다. 허용하지 않을 것."
- **JPMorgan**: Jamie Dimon (10/13 실적 콜) — "외부 에이전트가 회사 안에 들어오는 걸 허용하지 않을 것, 고객과 JPMorgan에 너무 위험하다." 대변인: 외부 AI 에이전트의 고객 작업 수행 차단.
- **Amazon×Perplexity**: 법원이 처음엔 Perplexity의 에이전트 구매 금지 명령 → 8월 항소법원이 뒤집음 → Amazon 수정 소송. 사법 판단도 요동 중.
- **Meta 반론**: "개인 에이전트를 외면하는 건 그 뒤의 고객을 외면하는 것." Walmart·Gap·Sephora·Best Buy와 파트너십 — Muse 구매 가능. Shopify도 네트워크 개방.

## 왜 중요한가 (1인 개발자 관점)

1. **"에이전트가 누구 편인가"의 다음 장**: [[patterns/agentic-commerce]]의 스티어링(에이전트 유인)이 안 통하자 플랫폼이 **입구 자체를 잠그기** 시작. 스티어링 → 차단의 에스컬레이션.
2. **권한 모델의 실전 압축**: [[patterns/agent-authority-model]]의 5단계 등급이 현실에서는 "은행 = 미허가 행위자" 한 줄로 압축됨. Poppy의 view-only/change 협상([[concepts/meta-sierra-poppy-protocol]])이 **유일한 합법 통로**가 될 수 있음.
3. **사업 기회와 리스크**: 차단된 사이트를 대신 쓰는 에이전트를 만들면 **ToS 위반 리스크**. 반대로 플랫폼의 "공식 에이전트 통로"(라이선스·파트너십)가 새 유통 채널 — "어디서 막히는지" 지도가 곧 시장 지도.

## 한계 (명시)

- Amtrak·Cars.com의 차단은 사용자 보고 기반 — 미검증(rrtechpulse 명시).
- Delta는 공식 금지가 아닌 "파트너십 없음 + 평가 중" — 해석의 여지.
- The Verge 원문 URL은 verbatim 미확보 — mylistingo·techbuzz·inshorts의 2차 보도로 교차확인.
