---
title: "Claude Marketplace"
category: tools
tags: [anthropic, claude, marketplace, connectors, plugins, amazon, seller-central, enterprise]
created: 2026-09-24
updated: 2026-09-24
sources:
  - "raw/articles/2026-09-24-anthropic-claude-marketplace.md"
related:
  - "[[concepts/mcp]]"
  - "[[tools/managed-agents]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: low
---

# Claude Marketplace

## 쉽게 읽기

**비유**: 스마트폰에 앱스토어가 생기기 전에는 앱을 하나하나 수동으로 깔아야 했다. **Claude Marketplace**는 에이전트용 **앱스토어**다 — 2,000개 넘는 커넥터·플러그인을 발견·결제·거버넌스까지 한 곳에서 처리한다.

| 용어 | 풀이 |
|------|------|
| **Connector** | Claude를 외부 시스템(재고·가격·리스팅 등)에 잇는 연결 |
| **약정 예산 (committed spend)** | Anthropic에 미리 약정한 AI 예산 — 이제 서드파티 SW 구매에도 사용 가능 |

## 한줄 설명

Anthropic이 2026-09-23 공개한 Claude용 커넥터·플러그인 마켓플레이스 — 2,000개 이상, 약정 예산을 서드파티 소프트웨어 구매에 쓸 수 있는 과금 모델이 핵심.

## 핵심 기능

- **2,000+ 커넥터·플러그인**: 발견·결제·거버넌스를 표준화하려는 시도 — MCP 이후의 다음 레이어
- **약정 예산의 서드파티 SW 전환**: 기업의 AI 예산이 모델 토큰에서 에이전트 스택 전체로 확장되고 있다는 신호
- **Amazon Seller Central 개방**: 셀러가 Amazon 콘솔을 열지 않고 Claude로 재고·가격·리스팅 관리 — 에이전트가 실제 업무 시스템에 **쓰기 권한**으로 들어가는 사례
- 같은 날 Amazon은 자체 셀러용 에이전트 서비스 "workflows"도 공개 — 셀러 프롬프트에 따라 평점 급락 알림·가격 모니터링 등을 상시 수행

## 사용법 요약

조직의 Claude 약정 예산 안에서 필요한 커넥터를 골라 붙이는 방식. 1인 개발자 관점에서는 "내 에이전트에 붙일 수 있는 기성 커넥터가 뭐가 있나"를 먼저 뒤지는 게 직접 MCP 서버를 만드는 것보다 빠르다.

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 커넥터 발견·결제·거버넌스의 표준화 | Anthropic 생태계 종속 |
| 기존 약정 예산을 그대로 활용 — 신규 예산 승인 불필요 | 2,000개 중 실제 품질이 검증된 비율은 미확인 |
| 실전 쓰기 권한 사례(Seller Central)로 검증 시작 | 셀러 콘솔 통째 개방은 권한 위임 모델의 리스크도 동반 |

## 관련 도구

- [[concepts/mcp|MCP]] — 커넥터의 기술적 기반. 마켓플레이스는 MCP 위의 "유통·결제·거버넌스" 레이어
- [[tools/managed-agents|Managed Agents]] — 같은 Anthropic 스택. 마켓플레이스 커넥터를 Managed Agents의 Hands에 붙이는 조합이 자연스러움
- [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] — 서드파티 커넥터를 쓸 때의 신뢰 모델·Tier 등급과 함께 봐야 함

## 참고 소스

- [Anthropic launches Claude Marketplace with 2,000+ connectors and plugins](raw/articles/2026-09-24-anthropic-claude-marketplace.md)
