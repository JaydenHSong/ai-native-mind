---
title: "Apple, Siri를 에이전트처럼 — Ternus CEO가 Federighi에 AI 로드맵 가속 요구, 2027년 목표"
category: concepts
tags: [apple, siri, agent, ternus, federighi, ios]
created: 2026-11-09
updated: 2026-11-09
sources:
  - "raw/articles/2026-11-09-apple-agentic-siri-ternus-push.md"
related:
  - "[[concepts/apple-siri-27-2-five-languages-recall]]"
  - "[[concepts/apple-10k-ai-agent-risk]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: medium
---

# Apple, Siri를 에이전트처럼 — Ternus CEO가 Federighi에 AI 로드맵 가속 요구, 2027년 목표

## 쉽게 읽기

**비유**: 지금까지 Siri는 "물어보면 답하는" 점원이었다. Apple이 원하는 건 "목표를 맡기면 알아서 해치우는" 비서다. CEO가 직접 "빨리 바꾸라"고 한 건, 점원으로는 경쟁이 안 된다는 판단이다.

| 용어 | 풀이 |
|------|------|
| **에이전트형 비서** | 목표를 기억하고 스스로 다음 단계를 정해 계속 수행하는 AI — 매번 지시하지 않아도 된다 |
| **Power On** | Bloomberg Mark Gurman의 주간 뉴스레터 — Apple 내부 소식이 자주 나온다 |
| **App Intents** | 앱이 자신의 기능을 Siri에 노출하는 Apple의 프레임워크 |

## 한줄 정의

2026-11-08 — Bloomberg의 Mark Gurman이 Power On 뉴스레터에서 보도한 바에 따르면, Apple CEO John Ternus가 최근 비공개 회의에서 소프트웨어 책임자 Craig Federighi에게 Siri의 점진적 개선을 넘어서는 AI 로드맵 가속을 요구했다. 목표는 사용자가 매번 지시하지 않아도 목표를 추적하고 계속 수행하는 에이전트형 Siri로, Gurman은 이르면 2027년으로 본다. Apple은 공식 확인하지 않았다.

## 핵심 내용

- **회의**: 최근 수 주 내 비공개 회의에서 Ternus가 Federighi에게 소프트웨어 로드맵 "가속"을 요구했다. Federighi는 개인정보·보안·사회적·고용 리스크에 대한 우려를 표명해 온 것으로 전해진다. Federighi의 거취 변동 징후는 없다고 Gurman은 덧붙였다. Siri 엔지니어링을 이끄는 Mike Rockwell은 내년 퇴임을 검토 중이라는 보도도 함께 나왔다.
- **에이전트형 Siri란**: 목표를 기억하고 스스로 다음 단계를 정해 계속 수행하는 비서 — Gurman은 OpenAI의 Dots, Meta의 Muse, xAI의 Grok을 비교 사례로 들었다. 단순히 더 잘 답하는 음성 비서가 아니라, 백그라운드에서 일을 이어가는 형태다.
- **단계별 일정**: iOS 27.3(12월 예상)에 자사 앱에 대한 세밀한 제어(예: Photos에서 이미지 자르기, Safari 탭 정리), 2027년 봄에 타사 앱 연동(예: Grubhub 주문, OpenTable 예약)이 예상된다. Siri AI는 iOS 27(9-14)과 함께 베타로 출시됐고, 27.2에서 5개 언어가 추가됐다. 11-03에는 개발자 프리뷰로 App Intents를 통한 Siri 연동이 열렸다.
- **개발 프로세스 변화**: iOS 28·macOS 28 개발 사이클을 바꿔 엔지니어의 코딩·탐색 시간을 50% 늘리는 파이프라인을 테스트 중이라는 보도도 있다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 경쟁이 OS 비서로 번졌다**: Dots·Muse·Grok이 "목표를 맡기면 알아서 하는" 에이전트로 가는 동안, Siri는 아직 "물어보면 답하는" 단계에 머물러 있다. Apple이 에이전트화를 CEO 지시로 밀어붙인다는 것은, 비서의 정의 자체가 바뀌고 있다는 뜻이다.
2. **개인정보 우려와 속도의 충돌**: Federighi의 우려(개인정보·보안·사회적·고용 리스크)는 Apple의 오랜 입장이다. 에이전트형 Siri는 기기 안 데이터에 깊이 접근해야 하므로, Apple의 개인정보 원칙과 에이전트의 자율성이 정면으로 부딪히는 첫 사례가 될 수 있다.
3. **개발자 관점의 관전 포인트**: 타사 앱 연동이 2027년 봄에 열린다면, App Intents를 통한 Siri 연동이 새로운 유통 채널이 된다. "예약·주문 같은 작업을 Siri가 대신한다"는 흐름은 앱의 진입점을 바꾼다.

## 한계 (명시)

- Apple은 미확인이며, 보도는 Gurman의 소식통에 기반한다. AppleInsider는 보도에 모순되는 대목이 있다며 신중히 보라고 지적했다.
- 2025년에도 약속한 Siri 기능이 연기된 전례가 있다. 2027년은 Gurman의 전망이지 Apple의 약속이 아니다.
- "에이전트형"의 구체적 구현(온디바이스 vs 클라우드, 권한 범위)은 아직 알려지지 않았다.

## 관련 개념

- [[concepts/apple-siri-27-2-five-languages-recall]] — Apple 27.2 Siri AI, 5개 언어 추가와 대화 회상
- [[concepts/apple-10k-ai-agent-risk]] — Apple 10-K, AI 에이전트 무단 행동을 사업 리스크로 명시
- [[concepts/persistent-agent]] — 상시 가동형 에이전트, 자체 스케줄·아이덴티티
- [[concepts/claude-duet-proactive-agent]] — Anthropic Claude Duet, 상시 대기 에이전트 리서치 프리뷰

## 참고 소스

- [Apple 에이전트형 Siri 추진 원본](raw/articles/2026-11-09-apple-agentic-siri-ternus-push.md)
