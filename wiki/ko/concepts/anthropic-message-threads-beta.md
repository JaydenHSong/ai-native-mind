---
title: "Anthropic Message Threads — 장시간 에이전트 세션의 지연 절감 베타"
category: concepts
tags: [anthropic, claude, messages-api, latency, agents]
created: 2026-11-04
updated: 2026-11-04
sources:
  - "raw/articles/2026-11-04-anthropic-message-threads-beta.md"
related:
  - "[[concepts/anthropic-claude-cowork-enterprise-unified]]"
  - "[[concepts/context-engineering]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: high
---

# Anthropic Message Threads — 장시간 에이전트 세션의 지연 절감 베타

## 쉽게 읽기

**비유**: 매번 긴 회의록 전부를 다시 들고 오는 대신, "지난번 이어서"라고 말하고 새로 생긴 부분만 건네는 방식이다. 읽는 양은 같지만 들고 오는 수고가 줄어서 답이 빨리 시작된다.

| 용어 | 풀이 |
|------|------|
| **TTFT** | 첫 토큰까지 걸리는 시간(Time To First Token) |
| **Messages API** | Claude와 대화를 주고받는 Anthropic의 API |

## 한줄 정의

2026-11-02 공개 베타 — Anthropic의 Message Threads가 매 턴 전체 대화 기록을 재전송하지 않고 새 메시지와 이전 응답 ID만 보내게 해, 50만~100만 토큰 요청의 TTFT 중앙값을 약 35% 줄인다.

## 핵심 내용

- **방식**: Messages API 요청에 thread 파라미터를 추가한다. 첫 요청이 전체 대화를 보내 스레드를 시작하고, 이후 요청은 새 메시지와 이전 응답 ID만 보낸다. 직접 API 사용 시 베타 헤더 message-threads-2026-08-12가 필요하다.
- **효과**: 50만~100만 토큰 요청에서 TTFT 중앙값 약 35% 감소. 대부분의 Claude Code 사용자에게 기본 켜짐이다.
- **아닌 것**: Claude는 매 턴 전체 대화를 여전히 읽으므로 토큰 사용량·요금·속도 제한은 그대로다. 절감되는 것은 재전송 오버헤드뿐이다.
- **수명**: 스레드는 메모리에 암호화 상태로 유지되고 디스크에 기록되지 않는다. 마지막 요청 후 5분이면 만료되고, 만료 시 클라이언트가 전체 대화를 다시 보내야 한다. 마지막 사용 후 1시간 이내 삭제된다.
- **범위**: 네이티브 Claude Platform, AWS의 Claude Platform, Microsoft Foundry의 Claude, Google Cloud의 Anthropic 관리 Claude 모델에서 공개 베타. 제로 데이터 보존·HIPAA 구성은 제외된다.
- **적합한 용도**: 지연이 중요한 활성 세션 — 장시간 코딩 에이전트, 컴퓨터 사용 에이전트, 문서·이미지 중심 워크플로우.

## 왜 중요한가 (1인 개발자 관점)

1. **장시간 에이전트의 병목이 전송에서 드러났다**: 컨텍스트가 길어질수록 재전송 비용이 응답 지연의 주범이 된다. 하네스 설계 시 세션 유지 방식을 API 기능으로 위임할 수 있게 됐다.
2. **비용 절감이 아니라 체감 속도 개선이다**: 토큰 요금이 그대로이므로, 이 기능은 마진이 아니라 사용자 경험을 위한 선택이다. 비용 최적화와 지연 최적화를 헷갈리면 안 된다.
3. **5분 만료가 설계 제약이다**: 스레드는 저장소가 아니라 전송 최적화다. 앱은 자체 대화 기록을 계속 들고 있어야 하며, 만료 시 전체 재전송 폴백을 구현해야 한다.

## 한계 (명시)

- 35% 수치는 Anthropic 자체 측정이며 독립 검증이 없다. 50만~100만 토큰 구간에만 해당한다.
- 공개 베타 단계라 정식 출시 일정·범위 변경 가능성이 있다.

## 참고 소스

- [Message Threads 원본](raw/articles/2026-11-04-anthropic-message-threads-beta.md)
