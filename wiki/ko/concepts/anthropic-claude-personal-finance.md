---
title: "Anthropic Claude Personal Finance — Plaid 경유 읽기 전용 은행 연결, 돈은 못 움직이는 Claude"
category: concepts
tags: [anthropic, claude, personal-finance, plaid, banking]
created: 2026-11-06
updated: 2026-11-06
sources:
  - "raw/articles/2026-11-06-anthropic-claude-personal-finance.md"
related:
  - "[[patterns/agentic-finance]]"
  - "[[concepts/us-banks-block-ai-agents]]"
  - "[[concepts/anthropic-claude-cowork-enterprise-unified]]"
status: draft
confidence: high
---

# Anthropic Claude Personal Finance — Plaid 경유 읽기 전용 은행 연결, 돈은 못 움직이는 Claude

## 쉽게 읽기

**비유**: 은행 통장을 Claude에게 "읽기만" 보여주는 것이다. 지출 내역을 보고 "이번 달 돈이 어디로 갔어?"라고 물으면 답해주지만, 송금·결제·투자는 손도 못 댄다. 열쇠를 맡기는 게 아니라 장부를 보여주는 셈이다.

| 용어 | 풀이 |
|------|------|
| **Plaid** | 앱과 은행을 연결해 주는 핀테크 중개 서비스 — 사용자가 자기 은행에 직접 로그인한다 |
| **읽기 전용** | 잔액·거래 내역은 읽되 송금·결제·투자 같은 변경은 일절 불가한 접근 |

## 한줄 정의

2026-11-05 — Anthropic이 Claude에 Personal Finance를 베타로 출시했다. Plaid를 통해 은행·카드·대출·투자 계좌를 연결하면 Claude가 잔액과 최대 24개월 거래 내역을 읽고 돈에 관한 질문에 답한다. 접근은 읽기 전용이며, 미국 Pro·Max·Ultra 구독자부터 순차 롤아웃된다.

## 핵심 내용

- **범위**: Claude 사이드바의 Personal Finance 허브에서 계좌를 연결하면 잔액·지출·청구서를 평문으로 묻고 답을 받는다. 베타로, 미국 개인 Pro·Max·Ultra 구독자 대상이며 이번 주부터 순차 롤아웃된다. Free·Team·Enterprise는 제외되고, 미국 외 지역에서는 페이지 자체가 나타나지 않는다(VPN 경유도 동일). 웹·데스크톱·iOS·Android에서 동작한다.
- **연결**: Plaid 경유. 사용자가 자기 은행에 직접 로그인하고, Claude는 은행 비밀번호를 묻지도 보지도 않는다. 계좌당 Claude가 보는 것은 은행명·계좌명·종류·뒷 4자리, 잔액·신용한도, 최대 24개월 거래 내역이다. 최대 16개 은행까지 연결할 수 있다. 투자·대출·카드 계좌는 잔액과 한도만 읽고, 보유 종목·거래·금리·대출 조건은 읽지 않는다.
- **읽기 전용**: "can't move, manage, or invest your money" — 송금·청구서 결제·구독 취소·투자는 할 수 없다. 투자 조언을 위한 기능이 아니라고 명시했고, 광고나 스폰서 추천이 없으며 자사 신용카드·대출·예금 상품도 없다.
- **프라이버시**: Personal Finance 허브 안의 대화는 모델 학습에 사용하지 않는다(허브 밖 대화는 일반 프라이버시 설정이 적용된다). 연결 해제는 Claude에서 은행 연결을 끊거나 my.plaid.com에서 Claude 연결을 끊는 방식이다. 단, 해제를 해도 이미 대화에 사용된 정보가 지워지지는 않는다.
- **주의점**: Anthropic 자체 경고는 "Claude can make mistakes in its answers, so ask which transactions are behind a number, and check important figures with your bank."이다. 헬프센터가 밝힌 오차 요인: 잔액이 1~2일 지연될 수 있고, 같은 계좌를 두 개 로그인으로 연결하면 이중 집계될 수 있으며, Claude가 읽지 못한 은행의 지출은 합계에서 빠져 급여 전 잔액이 실제보다 크게 보일 수 있다.
- **경쟁 맥락**: ChatGPT Finances가 2026-05-15 Plaid 경유로 먼저 출시됐다. Claude는 약 6개월 뒤 같은 연결 방식으로 합류한 셈이다. Anthropic은 향후 은행·자산운용사·금융서비스 기업과 협업해 더 큰 의사결정을 지원하는 방향을 검토 중이라고 밝혔다.

## 왜 중요한가 (1인 개발자 관점)

1. **"읽기 전용"이 신뢰 설계의 핵심이 됐다**: 에이전트에게 돈을 맡기는 상품화(agentic-finance) 흐름에서, Anthropic은 반대로 "못 움직이는 것"을 첫 버전의 안전 경계로 삼았다. 권한을 줄이는 것이 곧 출시 조건이다.
2. **금융 데이터가 에이전트의 컨텍스트가 됐다**: 24개월 거래 내역·16개 은행이라는 구체적 범위는, 개인 금융이 이제 에이전트의 장기 메모리와 같은 입력이 됐음을 보여준다. 범위를 명시하는 것 자체가 제품 스펙이다.
3. **은행 차단과 정반대 길**: 미국 대형은행들이 에이전트 계좌 접근을 차단하는 와중에(2026-10-24 페이지), Plaid 경유 읽기 전용이라는 "은행이 허락한 통로"로 들어가는 방식이 정착하고 있다. 어떤 통로로 들어가느냐가 관건이다.

## 한계 (명시)

- 베타 초기라 실제 정확도·지연·이중 집계 빈도는 독립 검증이 없다. Anthropic의 시연 수치($4,309.37 등)는 회사 시연 예시일 뿐이다.
- 미국 외 지역·Free·Team·Enterprise 출시 일정은 발표되지 않았다.
- 허브 밖 대화는 일반 프라이버시 설정이 적용되므로, 학습 제외 범위는 허브 안에 한정된다.

## 참고 소스

- [Claude Personal Finance 원본](raw/articles/2026-11-06-anthropic-claude-personal-finance.md)
