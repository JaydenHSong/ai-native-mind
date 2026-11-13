---
title: "Anthropic 셀프호스팅 Claude Managed Agents — 하네스는 내 클라우드에, 모델 호출은 외부로 (11-12)"
category: concepts
tags: [anthropic, claude-managed-agents, self-hosted, enterprise, agents]
created: 2026-11-13
updated: 2026-11-13
sources:
  - "raw/articles/2026-11-13-anthropic-self-hosted-claude-managed-agents.md"
related:
  - "[[concepts/anthropic-agent-memory-dreaming]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/anthropic-worse-together-multi-agent]]"
status: draft
confidence: high
---

# Anthropic 셀프호스팅 Claude Managed Agents — 하네스는 내 클라우드에, 모델 호출은 외부로 (11-12)

## 쉽게 읽기

**비유**: 클라우드 세탁소에 빨래를 맡기던 것을 집 세탁기로 옮기는 셈이다. 세탁기(하네스·데이터베이스·샌드박스)는 집에 두지만, 세제(모델)는 여전히 밖에서 사 온다. 빨래(에이전트 이력·자격증명)가 집 밖에 나가지 않는다는 게 핵심이다.

| 용어 | 풀이 |
| **cma-server** | Claude Managed Agents의 에이전트 하네스·API 서버 — 고객이 직접 운영 |
| **샌드박스 워커** | 에이전트가 셸·파일 도구를 실행하는 격리된 작업 공간 |
| **dreams** | 에이전트 메모리를 세션 사이 오프라인으로 정리하는 기능 — 셀프호스팅에는 없음 |
| **게이트 방식** | 계정 팀을 통해 적격 조직만 참여하는 제한 공개 |
| **PostgreSQL 16+** | 에이전트·세션·이력을 저장하는 데이터베이스 — 고객 인프라에서 동작 |

## 한줄 정의

2026-11-12 — Anthropic이 셀프호스팅 Claude Managed Agents 프라이빗 베타를 열었다. 기업이 Managed Agents 서비스 전체 — 에이전트 하네스/API 서버, 세션·이력 데이터베이스, 샌드박스 워커 — 를 자기 클라우드나 온프레미스에서 돌릴 수 있다. 단, 모델 자체는 옮기지 않고 호출만 외부 제공자로 나간다.

## 핵심 내용

- **구조**: 고객이 cma-server(에이전트 하네스/API), PostgreSQL 16+ 데이터베이스(에이전트·세션·이력 보관), 샌드박스 워커(셸·파일 도구 실행)를 직접 운영한다. Anthropic은 셀프호스팅 서버나 그 로그에 원격 접근이 없다고 밝혔다.
- **모델은 외부**: 모델 호출은 고객이 선택한 제공자로 계속 나간다 — 기본 Anthropic, 또는 Amazon Bedrock, Google Agent Platform, Microsoft Foundry, 고객 자체 게이트웨이.
- **접근 조건**: 계정 팀을 통한 적격 조직만 참여하는 게이트 방식. 가격·대상 국가 목록·GA 일정은 미공개다.
- **안전 라이선스**: 같은 날 발효된 서버 라이선스는 안전 통지 후 8시간 이내 롤백, 1영업일 이내 안전 업데이트를 의무화한다.
- **빠진 기능**: 호스팅 버전의 7개 기능이 셀프호스팅에는 없다 — 클라우드 환경, Files API, 웹훅, 예약 배포, dreams(에이전트 메모리 오프라인 정리) 등. 에이전트·스킬·자격증명·이력은 마이그레이션되지 않고 처음부터 다시 구축해야 한다.

## 왜 중요한가 (1인 개발자 관점)

1. **데이터 주권이 에이전트까지 내려왔다**: 에이전트의 이력·자격증명·세션이 내 인프라에 남는다. 기업이 에이전트를 들이는 조건이 '모델 성능'에서 '데이터가 어디에 머무는가'로 이동하고 있다.
2. **하네스와 모델의 분리가 공식화됐다**: 모델은 API로 빌리고, 실행은 로컬에서. Agent = Model + Harness라는 위키의 3세대 정의가 제품 구조로 그대로 드러난 사례다. 하네스를 내가 소유하면 모델은 갈아끼울 수 있다.
3. **마이그레이션 없음이 곧 설계 신호다**: 처음부터 셀프호스팅을 염두에 두지 않으면 나중에 옮길 수 없다. 하네스 선택은 되돌리기 어려운 결정이다.

## 한계 (명시)

- 7개 호스팅 기능이 빠져 있다 — dreams가 없어 에이전트 메모리 오프라인 정리도 셀프호스팅에서는 못 쓴다.
- 가격·GA 일정·대상 국가가 미공개라 도입 비용을 가늠할 수 없다.
- 모델 호출이 여전히 외부 제공자로 나가므로 완전 오프라인이 아니다.

## 관련 개념

- [[concepts/anthropic-agent-memory-dreaming]] — Anthropic 에이전트 메모리 'dreaming', 셀프호스팅에 빠진 기능 (2026-11-07)
- [[concepts/ai-orchestration]] — 여러 AI 에이전트 조율 6대 패턴, 하네스 설계의 기준 (Anthropic 가이드 기반)
- [[concepts/anthropic-worse-together-multi-agent]] — 멀티에이전트 팀은 단일 코디네이터에 진다, MAMUBench (2026-11-12)

## 참고 소스

- [Anthropic 셀프호스팅 Managed Agents 원본](raw/articles/2026-11-13-anthropic-self-hosted-claude-managed-agents.md)
