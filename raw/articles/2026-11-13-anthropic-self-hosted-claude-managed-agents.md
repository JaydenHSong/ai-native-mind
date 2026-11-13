---
title: "Anthropic 셀프호스팅 Claude Managed Agents 프라이빗 베타 — 하네스는 내 클라우드에, 모델 호출은 외부로 (11-12)"
source_url: "https://claude.com/resources/articles/self-hosted-claude-managed-agents"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-12
fetched: 2026-11-13
tags: [anthropic, claude-managed-agents, self-hosted, enterprise, agents]
status: raw
---

# Anthropic 셀프호스팅 Claude Managed Agents 프라이빗 베타 — 하네스는 내 클라우드에, 모델 호출은 외부로 (11-12)

> Anthropic이 11-12 셀프호스팅 Claude Managed Agents 프라이빗 베타를 열었다. 기업이 Managed Agents 서비스 전체 — 에이전트 하네스/API 서버, 세션·이력 데이터베이스, 샌드박스 워커 — 를 자기 클라우드나 온프레미스에서 돌릴 수 있다. 단, 모델 자체는 옮기지 않는다.

## 내용

- **구조**: 고객이 cma-server(에이전트 하네스/API), PostgreSQL 16+ 데이터베이스(에이전트·세션·이력 보관), 샌드박스 워커(셸·파일 도구 실행)를 직접 운영한다. Anthropic은 셀프호스팅 서버나 그 로그에 원격 접근이 없다고 밝혔다.
- **모델은 외부**: 모델 호출은 고객이 선택한 제공자로 계속 나간다 — 기본 Anthropic, 또는 Amazon Bedrock, Google Agent Platform, Microsoft Foundry, 고객 자체 게이트웨이.
- **접근 조건**: 계정 팀을 통한 적격 조직만 참여하는 게이트 방식. 가격·대상 국가 목록·GA 일정은 미공개다.
- **안전 라이선스**: 같은 날 발효된 서버 라이선스는 안전 통지 후 8시간 이내 롤백, 1영업일 이내 안전 업데이트를 의무화한다.
- **빠진 기능**: 호스팅 버전의 7개 기능이 셀프호스팅에는 없다 — 클라우드 환경, Files API, 웹훅, 예약 배포, dreams(에이전트 메모리 오프라인 정리) 등. 에이전트·스킬·자격증명·이력은 마이그레이션되지 않고 처음부터 다시 구축해야 한다.

## 맥락

- [[concepts/anthropic-agent-memory-dreaming]] — Anthropic 에이전트 메모리 'dreaming', 세션 사이 오프라인 정리 (2026-11-07)
- [[concepts/ai-orchestration]] — 여러 AI 에이전트 조율 6대 패턴 (Anthropic 가이드 기반)
- [[concepts/anthropic-worse-together-multi-agent]] — 멀티에이전트 팀은 단일 코디네이터에 진다, MAMUBench (2026-11-12)
