---
title: "Anthropic Message Threads 공개 베타 — 장시간 에이전트 세션 지연 35% 절감 (Anthropic, 11-02)"
source_url: "https://claude.com/resources/articles/message-threads?ref=anyfeeds"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-02
fetched: 2026-11-04
tags: [anthropic, claude, messages-api, latency, agents]
status: raw
---

# Anthropic Message Threads 공개 베타 — 장시간 에이전트 세션 지연 35% 절감 (Anthropic, 11-02)

> Anthropic이 11-02 Claude Messages API에 Message Threads 공개 베타를 내놨다. 매 턴마다 전체 대화 기록을 다시 보내지 않고 새로 생긴 메시지와 이전 응답 ID만 보내면 돼, 장시간 에이전트 세션의 첫 토큰 지연이 줄어든다. 11-03 보도로 확산된 11-02 발표 건의 따라잡기 수집이다. (Anthropic 원문 기준)

## 내용

- **방식**: Messages API 요청에 thread 파라미터를 추가한다. 첫 요청이 전체 대화를 보내 스레드를 시작하고, 이후 요청은 새 메시지와 이전 응답 ID만 보낸다. 직접 API 사용 시 베타 헤더 message-threads-2026-08-12가 필요하다.
- **효과**: 50만~100만 토큰 요청에서 첫 토큰까지 시간(TTFT) 중앙값이 약 35% 감소한다. 대부분의 Claude Code 사용자에게 기본 켜짐 상태다.
- **아닌 것**: Claude는 매 턴 전체 대화를 여전히 읽기 때문에 토큰 사용량·요금·속도 제한은 그대로다. 지연 감소는 재전송 오버헤드를 없앤 효과다.
- **수명**: 스레드는 메모리에 암호화 상태로 유지되며 디스크에 기록되지 않는다. 마지막 요청 후 5분이면 만료되고, 만료 시 클라이언트가 전체 대화를 다시 보내 새 스레드를 시작해야 한다. 마지막 사용 후 1시간 이내에 삭제된다.
- **범위**: 네이티브 Claude Platform, AWS의 Claude Platform, Microsoft Foundry의 Claude, Google Cloud의 Anthropic 관리 Claude 모델에서 공개 베타. 제로 데이터 보존·HIPAA 구성은 제외된다.
- **적합한 용도**: 지연이 중요한 활성 세션 — 장시간 코딩 에이전트, 컴퓨터 사용 에이전트, 문서·이미지 중심 워크플로우.

## 맥락

- [[concepts/anthropic-claude-cowork-enterprise-unified]] — 통합 Claude Enterprise, 상시 에이전트와 세션 지속성
- [[concepts/context-engineering]] — AI 정보 환경 설계, 장시간 세션의 컨텍스트 비용
- [[concepts/claude-duet-proactive-agent]] — Claude Duet 상시 대기 에이전트 리서치 프리뷰
