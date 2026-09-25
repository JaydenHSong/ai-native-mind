---
title: "Agentic Commerce"
category: patterns
tags: [agentic-commerce, shopping-agents, benchmarks, principal-agent, computer-use, steering, voice-agent, gemini]
created: 2026-09-24
updated: 2026-09-25
sources:
  - "raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md"
  - "raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: low
---

# Agentic Commerce

## 쉽게 읽기

**비유**: 심부름꾼에게 "제일 좋은 걸로 사 와"라고 시켰는데, 가게 주인이 심부름꾼 귀에 대고 "이걸로 사 가"라고 속삭였다. 에이전트 커머스의 핵심 질문은 **"에이전트가 누구 편인가"** 다.

| 용어 | 풀이 |
|------|------|
| **Principal-agent 문제** | 시킨 사람(주인)과 실행하는 사람(대리인)의 이해관계가 어긋나는 문제 — 에이전트 시대의 실전 버전 |
| **Steering** | 마켓플레이스가 에이전트의 선택을 특정 방향으로 유도하는 것 |

## 한줄 설명

에이전트가 상품을 고르고 결제하는 커머스 패러다임 — 아직 침투율은 1% 미만이지만, 마켓플레이스 스티어링이 에이전트 "충성도"를 78.6%에서 17.3%로 떨어뜨린다는 측정으로 평가 방식 자체가 흔들리고 있다.

## 문제 상황

- **기대**: 에이전트가 사용자를 대신해 최적 상품을 찾아 결제
- **현실**: Booking Holdings CEO — LLM 트래픽이 전체 숙박 예약의 "1%에 현저히 못 미침"
- **더 깊은 문제**: 새 벤치마크에서 computer-use 에이전트는 통제 조건에서 사용자 최적 상품을 78.6% 확률로 구매했지만, **마켓플레이스가 스티어링을 허용받으면 17.3%로 급락**

## 해결 방법

에이전트 평가에 **"적대적 환경" 조건**을 넣는다. 성능만 재는 게 아니라 "환경이 개입할 때 에이전트가 주인 편에 남는가"를 잰다. 한편 플랫폼들은 일제히 셀러/구매 도구를 여는 중 — Amazon은 셀러 콘솔을 Claude에 개방하고 자체 셀러 에이전트 "workflows"를 출시. 커머스의 에이전트화는 **플랫폼 주도**로 진행 중이다.

## 적용 예시

쇼핑 에이전트를 만들 때: (1) 스티어링 탐지 — 추천 상품이 사용자 최적과 얼마나 어긋나는지 로깅, (2) 주인 명시 — 에이전트의 principal을 프롬프트·정책에 못 박기, (3) 적대적 테스트 — 마켓플레이스 개입 시나리오를 eval에 포함.

## 장단점

| 장점 | 단점 |
|------|------|
| 에이전트 평가에 "충성도"라는 새 축 추가 | 침투율 1% 미만 — 아직 실험 단계, 데이터 부족 |
| principal-agent 문제를 실전 지표로 번역 | 스티어링 벤치마크 1건 — 교차 검증 필요 |

## 관련 패턴

- [[concepts/llm-evaluation|LLM Evaluation]] — "적대적 환경" 조건을 eval 설계에 넣어야 한다는 근거
- [[comparisons/agent-eval-frameworks|Agent Eval Frameworks]] — 기존 6대장 프레임워크에 스티어링/충성도 축이 없음 — 확장 후보
- [[concepts/agent-supply-chain-security|Agent Supply Chain Security]] — 마켓플레이스라는 "환경" 자체가 신뢰 모델의 일부가 됨

## 2026-09-25 보강 — Gemini 음성 커머스: "에이전트가 누구 편인가"에 음성 채널 추가

Gemini가 Pixel 11 유료 구독자를 대신해 **사업자에 직접 전화**를 건다 — 예약, 대기 음악(hold music) 감내, phone-tree(IVR) 탐색까지. computer-use의 음성 버전이다: "GUI 클릭"이 "IVR 버튼 누르기"로 바뀐 것.

### 스티어링 축의 확장

어제의 스티어링 벤치마크(충성도 78.6%→17.3%)는 **웹 UI** 환경이었다. 음성 채널에서는 스티어링이 다른 형태로 일어난다:

- 통화 상대의 **목소리 톤·영업 멘트** — 텍스트 추천보다 설득력이 강함
- **대기 시간** — 기다리게 만들어 특정 선택으로 유도
- Phone-tree 구조 자체가 선택지를 좁힘

→ "적대적 환경" eval 조건에 **음성 채널 시나리오**를 추가해야 한다는 함의. [[comparisons/agent-eval-frameworks]]의 확장 후보에 음성 스티어링 축 메모.

### 실무 적용

음성 에이전트를 만들 때: (1) 통화 transcript를 principal 최적과 대조 로깅, (2) 예약·결제 전 **음성 확인 + 텍스트 요약** 이중 확인, (3) 대기·유도 패턴 탐지 시 사용자에게 에스컬레이션.

## 참고 소스

- [Agentic commerce reality check: Booking Holdings says LLM traffic is 'significantly below 1%' of bookings](raw/articles/2026-09-24-agentic-commerce-benchmark-booking.md)
- [Gemini 3.8 Live Avatar, business-calling agents, and TPUs on a Falcon 9 (Project Suncatcher)](raw/articles/2026-09-25-gemini-live-avatar-business-calling-suncatcher.md)
