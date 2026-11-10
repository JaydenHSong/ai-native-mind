---
title: "Anthropic, Claude Personal Finance 베타 출시 — Plaid 경유 읽기 전용 은행 연결, 미국 Pro·Max·Ultra (11-05)"
source_url: "https://cellcog.ai/blog/claude-personal-finance/"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-05
fetched: 2026-11-06
tags: [anthropic, claude, personal-finance, plaid, banking]
status: raw
---

# Anthropic, Claude Personal Finance 베타 출시 — Plaid 경유 읽기 전용 은행 연결, 미국 Pro·Max·Ultra (11-05)

> Anthropic이 11-05 Claude에 Personal Finance를 베타로 출시했다. Plaid를 통해 은행·카드·대출·투자 계좌를 연결하면 Claude가 잔액과 최대 24개월 거래 내역을 읽고 돈에 관한 질문에 답한다. 접근은 읽기 전용이며, 미국 Pro·Max·Ultra 구독자부터 순차 롤아웃된다.

## 내용

- **발표**: 11-05 Anthropic "Introducing Personal Finance in Claude". Claude 사이드바의 Personal Finance 허브에서 계좌를 연결하면 잔액·지출·청구서를 평문으로 묻고 답을 받는다. 베타로, 미국 개인 Pro·Max·Ultra 구독자 대상이며 이번 주부터 순차 롤아웃된다. Free·Team·Enterprise는 제외되고, 미국 외 지역에서는 Personal Finance 페이지 자체가 나타나지 않는다(VPN 경유도 동일). 웹·데스크톱·iOS·Android에서 동작한다.
- **연결**: Plaid 경유. 사용자가 자기 은행에 직접 로그인하고, Claude는 은행 비밀번호를 묻지도 보지도 않는다. 계좌당 Claude가 보는 것은 은행명·계좌명·종류·뒷 4자리, 잔액·신용한도, 최대 24개월 거래 내역(금액·날짜·가맹점·카테고리·은행 설명)이다. 최대 16개 은행까지 연결할 수 있다. 투자·대출·카드 계좌는 잔액과 한도만 읽고, 보유 종목·거래·금리·대출 조건은 읽지 않는다.
- **읽기 전용**: Anthropic의 표현대로 "can't move, manage, or invest your money" — 송금·청구서 결제·구독 취소·투자는 할 수 없다. 투자 조언을 위한 기능이 아니라고 명시했고, 광고나 스폰서 추천이 없으며 자사 신용카드·대출·예금 상품도 없다. Anthropic은 향후 은행·자산운용사·금융서비스 기업과 협업해 더 큰 의사결정을 지원하는 방향을 검토 중이라고 밝혔다.
- **프라이버시**: Personal Finance 허브 안의 대화는 모델 학습에 사용하지 않는다(허브 밖 대화는 일반 프라이버시 설정이 적용된다). 연결 해제는 Claude에서 은행 연결을 끊거나 my.plaid.com에서 Claude 연결을 끊는 방식으로 한다. 단, 해제를 해도 이미 대화에 사용된 정보가 지워지지는 않는다.
- **주의점**: Anthropic 자체 경고는 "Claude can make mistakes in its answers, so ask which transactions are behind a number, and check important figures with your bank."이다. 헬프센터가 밝힌 오차 요인 세 가지: 잔액이 1~2일 지연될 수 있고, 같은 계좌를 두 개 로그인으로 연결하면 이중 집계될 수 있으며, Claude가 읽지 못한 은행의 지출은 합계에서 빠져 급여 전 잔액이 실제보다 크게 보일 수 있다. Anthropic의 시연 예시에서는 한 달 지출 합계 $4,309.37 중 절반 이상이 임대료·공과금, 식음료 $1,024.51, 급여 전 잔액 $1,393.22였다.
- **경쟁 맥락**: ChatGPT Finances가 2026-05-15 Plaid 경유로 먼저 출시됐다. Claude는 약 6개월 뒤 같은 연결 방식으로 합류한 셈이다. 두 제품 모두 은행 피드를 읽고 답하는 역할에 머무른다.

## 맥락

- [[patterns/agentic-finance]] — 에이전트에게 실제 돈을 맡기는 상품화, Robinhood Agents 실전 배치
- [[concepts/us-banks-block-ai-agents]] — 미 대형은행의 AI 에이전트 계좌 차단, 지시 여부 판별 불가
- [[concepts/anthropic-claude-cowork-enterprise-unified]] — 통합 Claude Enterprise 정식 출시, 11-16 기본 켜짐
