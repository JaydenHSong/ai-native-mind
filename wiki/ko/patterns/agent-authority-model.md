---
title: "Agent Authority Model — 업무별 에이전트 권한 등급화 (Logistics Reply LEA)"
category: patterns
tags: [agent-authority, governance, guardrails, autonomy-levels, logistics-reply, lea, operations]
created: 2026-10-05
updated: 2026-10-05
sources:
  - "raw/articles/2026-10-05-lea-ai-agent-authority-model.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: low
---

# Agent Authority Model — 업무별 에이전트 권한 등급화

## 한줄 정의

AI 에이전트에게 "최대 자율성"이 아니라 "업무에 맞는 권한"을 부여하는 거버넌스 프레임워크 — Logistics Reply의 LEA AI Agent Authority Model: 조직 성숙도 4단계 × 권한 5단계(Inform → Recommend → Act → Coordinate → Governed Autonomy).

## 핵심 내용

- 2026-10-05 발표 (Business Wire 프레스 릴리즈): Logistics Reply(Reply 그룹의 공급망·창고관리 전문사)가 LEA Reply Dynamic Intelligence와 함께 공개.
- 두 축:
  - 조직 AI 성숙도 4단계 (초기 도입 → 성숙)
  - 에이전트 권한 5단계: Inform(알림) → Recommend(추천) → Act(실행) → Coordinate(조정) → Governed Autonomy(거버넌스 하 자율)
- 핵심 원칙: "행동할 수 있다는 능력이, 행동할 권한을 정당화하지는 않는다 (the ability to act does not, on its own, justify permission to do so)."
- 적용: 유스케이스·맥락·리스크에 따라 에이전트가 무엇을, 어디서, 어떤 가드레일 아래 할지 결정. 운영 증거와 신뢰가 쌓이면 권한을 확장.
- 실용 연결: LEA Dynamic Intelligence가 프리빌트 에이전트 + 에이전트 빌더 제공 — 권한 가이드와 창고 운영 실제를 연결.

## 어떻게 쓰는가

1. 에이전트를 실운영에 투입하기 전, 각 태스크를 5단계 중 하나에 매핑한다 (예: 재고 조회 → Inform, 발주 제안 → Recommend, 표준 피킹 지시 → Act).
2. 조직의 성숙도 단계에 따라 허용 가능한 최대 권한을 제한한다 (초기 도입 단계에서는 Act 이상 금지 등).
3. 운영 로그·사고율 같은 증거가 쌓이면 태스크별 권한을 한 단계씩 올린다 — 권한 확장을 "신뢰의 함수"로 만든다.
4. 런타임 가드레일([[patterns/agent-safety-runtime]])과 결합: 설계 시점의 권한 등급 + 실행 시점의 차단이 2중 잠금.

## 왜 중요한가

에이전트 거버넌스가 "원칙 선언"에서 "등급표 상품"으로 넘어가는 지점이다. 1인 개발자가 에이전트 서비스를 만들 때도 같은 질문이 온다: "이 에이전트에게 어디까지 맡길 것인가." 답을 5단계 표로 미리 정해두면, 고객·감사·사고 대응에서 "왜 이 권한이었는가"에 답할 수 있다. [[concepts/ai-orchestration]]의 조율 구조와 결합하면 '누가(조율) + 어디까지(권한)'의 완전한 운영 설계가 된다.

## 관련 개념

- [[patterns/agent-safety-runtime]] — 실행시점 차단 (NVIDIA OpenShell/Sentry), 권한 등급의 런타임 집행
- [[concepts/ai-orchestration]] — 에이전트 조율 6대 패턴, 권한 등급과 결합
- [[concepts/agent-attribution]] — 권한 등급이 사고 시 책임 귀속의 기준이 됨

## 참고 소스

- [Logistics Reply Introduces the LEA AI Agent Authority Model (Business Wire)](raw/articles/2026-10-05-lea-ai-agent-authority-model.md)
