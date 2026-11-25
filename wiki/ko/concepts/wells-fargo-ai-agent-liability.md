---
title: "Wells Fargo AI 에이전트 책임 조항 — 은행 약관에 '에이전트 행동은 고객 책임' 명문화"
category: concepts
tags: [wells-fargo, banking, ai-agents, liability, regulation, governance, agent-pay]
created: 2026-11-25
updated: 2026-11-25
sources:
  - "raw/articles/2026-11-25-wells-fargo-ai-agent-liability.md"
related:
  - "[[concepts/websites-block-ai-agents]]"
  - "[[concepts/mastercard-agent-pay-machines-developer-access]]"
  - "[[concepts/anthropic-siren-sandbox-escape]]"
status: draft
confidence: low
---

# Wells Fargo AI 에이전트 책임 조항 — 은행 약관에 '에이전트 행동은 고객 책임' 명문화

## 쉽게 읽기

**비유**: AI 에이전트가 내 돈을 갖고 물건을 사고 결제를 하기 시작했다. 그런데 은행이 약관에 이렇게 적었다. "네 AI가 네 돈으로 무슨 짓을 하든, 그건 네 책임이다. 네가 감시하고, 이상하면 네가 멈춰야 한다." Citi도 비슷한 경고를 했고, JPMorgan은 아예 "남의 AI는 우리 은행 안에 못 들어온다"고 했다. 기술이 "AI가 대신 사 줄게"까지 왔는데, 책임은 아직 "사람이 진다"에 머물러 있다. 에이전트를 쓸수록, 그 에이전트를 누가 감시하느냐가 더 중요해진다.

| 용어 | 풀이 |
|------|------|
| **온라인 접근 약관** | 은행 앱·웹을 쓸 때 동의하는 이용 규칙. 여기에 적힌 말이 법적 효력을 가진다 |
| **AI 에이전트** | 사람을 대신해 판단하고 행동하는 AI. 결제·구매·예약까지 스스로 처리한다 |
| **AT YOUR OWN RISK** | "자기 책임"이라는 뜻. 문제가 생기면 은행이 아니라 고객이 책임진다는 선언 |
| **권한 철회 (revoke)** | 에이전트에게 줬던 접근 권한을 도로 거두는 일 |
| **rogue agents** | 통제에서 벗어나 제멋대로 행동하는 에이전트. JPMorgan CEO가 쓴 표현 |

## 한줄 정의

Wells Fargo가 2026-11-24 온라인 접근 약관을 업데이트해 고객의 AI 에이전트 사용에 "전적으로 고객 본인의 책임"이라는 조항을 추가한 사건으로, 에이전트가 결제·구매 등 돈이 오가는 행동을 하기 시작하면서 은행이 책임 경계를 약관으로 긋기 시작한 업계 흐름의 사례다.

## 핵심 내용

- **약관 핵심**: 고객은 자신을 대신해 행동하는 AI 에이전트의 활동을 감시하고 "적절한 안전장치를 유지"할 책임이 있으며, 에이전트가 부여한 권한 범위 내에서, 고객의 최선의 이익에 맞게 동작하는지 확인할 책임이 있음. 부여한 권한을 "제때 철회"하고 에이전트 활동을 중단시키는 것도 고객 책임.
- **은행의 권한**: Wells Fargo는 에이전트 등록 요구, 접근 제한 등 AI 에이전트 관련 보안 규칙을 업데이트할 권리를 보유.
- **업계 흐름**: Citi도 최근 온라인 이용약관을 업데이트해 외부 AI 에이전트 사용을 경고하고 고객 책임을 명시. JPMorganChase의 Jamie Dimon CEO는 "불량 에이전트(rogue agents)"를 경고하며 제3자 에이전트의 은행 내부 접근을 허용하지 않겠다고 밝힘. Charles Schwab의 Rick Wurster CEO는 승인되지 않은 AI 에이전트를 주당 "수십 건" 차단한다고 언급.
- **배경**: AI 에이전트가 결제·구매 등 실제 돈이 오가는 행동을 하기 시작하면서(예: OpenAI ChatGPT Wallet, Amex·Mastercard·Visa 협력) 은행이 책임 경계를 약관으로 긋는 단계.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 거버넌스가 계약으로 확장**: 지금까지 거버넌스는 샌드박스·승인 게이트 같은 기술적 통제였다. 이제 은행 약관처럼 '법적·계약적 책임 분배'가 더해졌다. 내 에이전트를 남의 시스템에 연결할 때는 기술적 허용 여부와 계약상 책임을 함께 확인해야 한다.
2. **'감시 의무'가 사용자에게 온다**: 은행은 "네가 감시해라"고 한다. 에이전트에게 돈이 닿는 권한을 줄 때는, 감시·철회 수단을 사용자가 직접 갖춰야 한다 — 알림, 한도, 즉시 정지 버튼 같은 것들이다.
3. **차단의 다음 단계는 '등록제'**: Wells Fargo가 에이전트 등록 요구 권한을 보유한 건, 앞으로 에이전트도 '신분증'을 내고 등록하는 방향으로 갈 수 있다는 신호다. Workspace MCP의 신원 의무화와 같은 흐름이다.

## 한계 (명시)

- 1차 근거는 PYMNTS 보도 하나이며, 약관 원문을 직접 확인하지는 않았다. Citi·JPMorgan·Schwab 발언도 같은 보도 안의 인용이다.
- 약관이 실제 분쟁에서 어떻게 적용될지는 미지수다. "고객 책임"이 법원에서 어디까지 인정될지는 판례가 쌓여야 안다.
- confidence는 low — 단일 보도 기반이며 약관 원문 미확인.

## 관련 개념

- [[concepts/websites-block-ai-agents]] — Yelp·Delta·은행의 AI 에이전트 차단(2026-10-18). 이번 약관은 차단의 다음 단계, 책임 명문화 (2026-11-25)
- [[concepts/mastercard-agent-pay-machines-developer-access]] — 에이전트 결제 인프라. 돈이 닿는 곳에 책임 문제가 따라붙는 구조 (2026-11-25)
- [[concepts/anthropic-siren-sandbox-escape]] — 에이전트 통제·경계의 기술적 측면. 약관은 그 법적 측면 (2026-11-25)

## 참고 소스

- [Wells Fargo, AI 에이전트 책임을 고객에게 — 은행 약관에 '자기 책임' 명문화 (PYMNTS, 11-24)](raw/articles/2026-11-25-wells-fargo-ai-agent-liability.md)
