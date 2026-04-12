---
title: "에이전트 기획→구현 파이프라인"
category: patterns
tags: [agents, planning, implementation, pdca, harness, orchestration]
created: 2026-04-11
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/notes/2026-04-09-subagents-delegation.md"
  - "raw/notes/2026-04-09-solo-product-strategy.md"
related:
  - "[[concepts/agentic-engineering]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/subagents-delegation]]"
  - "[[patterns/bkit-superpowers-combo]]"
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/solo-product-strategy]]"
status: active
confidence: medium
---

# 에이전트 기획→구현 파이프라인

## 쉽게 읽기

**비유**: “기획부터 코딩까지 한 번에” 시키면 **중간 산출물이 검증 없이** 쌓인다. 이 패턴은 **레고 설명서 순서**처럼, 의도 → 요구사항 → 설계 → 할 일 목록 → 코드로 **한 단계씩 확인**하고 넘긴다.

| 용어 | 풀이 |
|------|------|
| **검증 가능한 산출물** | “됐다” 말이 아니라 체크리스트·테스트·스크린샷처럼 **증거가 있는 결과물** |
| **하네스(Harness)** | AI가 벗어나지 않게 하는 **규칙·도구·검사** 묶음 |
| **Prompt Chaining** | 프롬프트를 **여러 단계로 이어** 앞 단계 출력이 뒤 단계 입력이 되게 하기 |

## 한줄 정의

에이전트가 **기획·스펙·태스크 분해**까지 담당하더라도, 인간이 방향을 고정하고 단계마다 **검증 가능한 산출물**로 넘기는 실행 패턴.

## 왜 필요한가

에이전트에게 “기획도 짜고 코드도 짜라”고만 하면, [[concepts/cognitive-debt|인지 부채]]가 한 번에 쌓인다. 오케스트레이션의 **Prompt Chaining**·**Evaluator-Optimizer**를 “문서 단위”로 적용하면, [[concepts/harness-engineering|Harness]]의 Guides/Sensors가 설계 단계에서부터 작동한다.

## 산출물 체인 (권장 순서)

의도가 흔들리지 않게 **아래 순서를 어기지 않는 것**이 1차 하네스다. (이름은 프로젝트에 맞게 바꿔도 됨.)

1. **의도·범위** — 무엇을 하지 않을지까지 포함 (한 페이지 이내)
2. **요구·우선순위** — 사용자 가치 기준, MVP 경계 ([[patterns/solo-product-strategy|솔로 제품 전략]]과 연결)
3. **설계·인터페이스** — API·데이터·에러 모델, 비기능(지연·비용)
4. **태스크 리스트** — 각 항목이 **검증 가능**해야 함 (테스트·스크린샷·로그 중 하나)
5. **구현** — [[patterns/subagents-delegation|Explore → Plan → Execute]]로 컨텍스트 폭발 방지
6. **센서** — 린트·타입·최소 테스트·스테이징; 필요 시 별도 리뷰 에이전트

각 단계의 출력은 다음 단계의 **입력 계약**이다. 이전 단계를 덮어쓰지 않고 “보완”만 허용하면 추적이 쉽다.

## 인간 게이트 (HITL) 배치 예

| 게이트 | 막는 것 |
|--------|---------|
| 의도 승인 | 잘못된 제품 방향으로의 구현 가속 |
| 설계 승인 | 나중에 갈아엎는 스키마·API |
| 태스크 승인 | 과도한 범위·모호한 완료 조건 |
| 머지 전 | 회귀·보안·비용 폭증 |

“전부 자동”이 목표가 아니라면, 게이트는 **느리게 만드는 병목**이 아니라 **되돌리기 비용을 줄이는 보험**이다.

## 도구와의 매핑

- **bkit / PDCA 문서** (`docs/01-plan` 등): 위 체인의 1~3을 문서로 고정하는 Guides에 해당한다. [[patterns/bkit-superpowers-combo|bkit + Superpowers]]로 설계·구현 사이를 잇는 편이 안전하다.
- **`CLAUDE.md`·규칙 파일**: 레포 단위 Guides. [[patterns/claude-md-guide|CLAUDE.md 가이드]] 참고.
- **Subagents**: 탐색·계획·실행을 **역할·컨텍스트**로 분리해 Orchestrator-Workers 패턴에 가깝게 만든다.

## 안티패턴

- 기획 없이 바로 “전부 구현해줘” (범위·검증 부재)
- 에이전트가 쓴 긴 문서를 사람이 읽지 않고 승인 (형식적 HITL)
- 태스크에 “완료” 정의 없이 병렬 다발 구현 (부분 실패 시 정리 불가)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 4 (제작소)
- **퀘스트**: 작은 기능 1개를 의도->요구->설계->태스크->구현 체인으로 쪼갠다.
- **클리어 조건**: 각 단계 산출물이 다음 단계 입력 계약이라는 점을 실제 예시로 설명할 수 있다.
- **보상(산출물)**: 기능 1개용 단계별 체크리스트
- **다음 퀘스트**: [[patterns/subagents-delegation]] -> [[patterns/agent-server-harness]]

## 관련 개념

- [[concepts/agentic-engineering]] — 감독 하 에이전트 개발의 큰 틀
- [[concepts/harness-engineering]] — Guides/Sensors/오케스트레이션
- [[concepts/ai-orchestration]] — 단계·워커 구조
- [[patterns/agent-server-harness]] — 기획·실행을 서버에 올릴 때의 런타임

## 참고 소스

- [보강 메모](raw/notes/2026-04-11-orchestration-harness-server-supplement.md)
- [Subagents 리서치](raw/notes/2026-04-09-subagents-delegation.md)
- [솔로 제품 전략 리서치](raw/notes/2026-04-09-solo-product-strategy.md)
