---
title: "OpenAI, ChatGPT Enterprise를 AWS Marketplace로 — 클라우드 약정으로 결제 가능 (11-09)"
category: concepts
tags: [openai, chatgpt-enterprise, aws, marketplace, distribution]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-openai-chatgpt-enterprise-aws-marketplace.md"
related:
  - "[[concepts/openai-enterprise-discounts-anthropic]]"
  - "[[concepts/openai-servicenow-enterprise-workflows]]"
  - "[[concepts/anthropic-claude-enterprise-security-hooks]]"
status: draft
confidence: high
---

# OpenAI, ChatGPT Enterprise를 AWS Marketplace로 — 클라우드 약정으로 결제 가능 (11-09)

## 쉽게 읽기

**비유**: 소프트웨어를 파는 방식이 바뀐 셈이다. 지금까지는 OpenAI 가게에서 직접 샀다면, 이제는 AWS라는 대형 마트 진열대에서도 살 수 있게 됐다. 물건은 똑같고, 계산만 AWS 장부에 찍힌다. 그래서 이미 AWS와 연간 계약을 맺은 회사는 그 계약금으로 ChatGPT를 살 수 있다.

| 용어 | 풀이 |
|------|------|
| **AWS Marketplace** | AWS에서 서드파티 소프트웨어를 사고 파는 장터 — AWS 청구서로 함께 결제 |
| **EDP / PPA** | AWS Enterprise Discount Program·Private Pricing Agreement — 연간 사용량 약정 기반 할인 계약 |
| **private offer** | 공개 정가 없이 고객별로 따로 견적·계약을 맺는 판매 방식 |

## 한줄 정의

2026-11-09 — OpenAI가 ChatGPT Enterprise를 AWS Marketplace에 출시했다. 기업이 기존 AWS 구매·청구 관계를 통해 ChatGPT Enterprise를 사고, 적격 지출을 AWS 약정(EDP/PPA)에 반영할 수 있게 됐다. 기능 변화가 아니라 조달·결제 경로의 변화다.

## 핵심 내용

- **내용**: AWS Marketplace에서 ChatGPT Enterprise를 발견·구매·관리할 수 있다. 번들은 Chat·ChatGPT Work·Codex·dots를 묶은 것으로, 적격 고객은 ChatGPT for Healthcare와 ChatGPT for Financial Services에도 접근할 수 있다. 공개 가격은 없고 private offer(맞춤 견적) 방식이다.
- **약정 반영**: 적격 지출은 AWS Enterprise Discount Program(EDP) 또는 Private Pricing Agreement(PPA) 약정에 반영될 수 있으나, 고객의 AWS 계약 조건에 따라 다르며 자동 적용이 아니다. AWS Marketplace 담당 부사장 Matt Yanchyshyn은 "AWS 계정으로 구매하고 나머지 소프트웨어 지출과 함께 관리하며 평가에서 도입까지 더 빨리 갈 수 있다"고 말했다.
- **동일 제품**: OpenAI는 Marketplace 버전이 직접 구매와 같은 모델·기능·신기능 출시 시점을 제공한다고 밝혔다. 구매는 AWS가, 제품 경험 관리는 OpenAI가 계속 맡는다.
- **데이터 주의**: Marketplace 구매가 모든 고객 데이터가 AWS 인프라에 머무른다는 보장은 아니다. OpenAI가 데이터 처리자이며 AWS를 포함한 서브프로세서를 활용한다. Marketplace 워크스페이스의 추론 상주(inference residency)는 미국 내에서만 선택할 수 있다. 데이터 상주와 추론 상주는 별개 통제다.
- **Bedrock과의 구분**: Amazon Bedrock의 OpenAI 모델은 개발자가 에이전트·앱을 구축하는 용도이고, ChatGPT Enterprise는 팀의 일상 업무용이다. 두 경로는 보완 관계다. 배경으로 2025-11 OpenAI·AWS 다년 $38B 컴퓨트 계약, 2026-04-28 Bedrock에 OpenAI 모델·Codex·Bedrock Managed Agents 한정 프리뷰 확대가 있다.

## 왜 중요한가 (1인 개발자 관점)

1. **기업 AI의 구매 장벽이 낮아진다**: 조달·법무·보안 검토를 AWS 계약으로 우회할 수 있어, 대기업 도입 속도가 빨라진다. 1인 개발자·스타트업에게는 직접적인 변화가 적지만, 고객사의 ChatGPT Enterprise 도입이 빨라지면 연동·워크플로 수요가 늘어난다.
2. **유통이 곧 경쟁력이다**: 모델 성능이 아니라 '어떻게 사는가'가 기업 시장을 가른다. Anthropic도 AWS·Google Cloud·Microsoft를 통해 Claude를 파는 구조라, 양쪽 모두 클라우드 마켓플레이스가 주 전장이 되고 있다.
3. **데이터 상주는 따로 확인해야 한다**: 'AWS에서 샀다'고 해서 데이터가 AWS에 머무는 게 아니다. 규제·보안 요구가 있는 고객은 추론 상주(미국 한정)와 데이터 처리자 조항을 계약 전에 확인해야 한다.

## 한계 (명시)

- 공개 가격이 없어 실제 비용은 private offer로만 알 수 있다. 약정 반영도 고객 계약 조건에 따라 달라 자동이 아니다.
- Marketplace 워크스페이스의 추론 상주는 미국 한정이다. 미국 외 규제 환경에서는 제약이 된다.
- 기능 변화가 없는 조달 경로 변경이라, 모델·에이전트 역량 자체에는 영향이 없다.

## 관련 개념

- [[concepts/openai-enterprise-discounts-anthropic]] — OpenAI 20-40% 할인 공세, 기업 시장 가격 경쟁
- [[concepts/openai-servicenow-enterprise-workflows]] — OpenAI×ServiceNow 확대, 기업 워크플로 연동
- [[concepts/anthropic-claude-enterprise-security-hooks]] — Claude Enterprise 추론 훅 GA·보안 센터 베타

## 참고 소스

- [OpenAI ChatGPT Enterprise AWS Marketplace 출시 원본](raw/articles/2026-11-10-openai-chatgpt-enterprise-aws-marketplace.md)
