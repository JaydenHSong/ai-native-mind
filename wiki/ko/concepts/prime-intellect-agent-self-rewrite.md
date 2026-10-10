---
title: "Prime Intellect의 에이전트 자기 재작성 — 2,000개 에이전트의 Rust 전환 (주장)"
category: concepts
tags: [prime-intellect, dogfooding, agents-building-agents, rust, coding-agent, self-rewrite, scale, unverified]
created: 2026-10-10
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-10-prime-intellect-agent-rust-rewrite.md"
related:
  - "[[patterns/agentic-coding]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/deep-agents-deploy]]"
status: draft
confidence: low
---

# Prime Intellect의 에이전트 자기 재작성 — 2,000개 에이전트의 Rust 전환 (주장)

## 한줄 정의

Prime Intellect이 2,000개 이상의 에이전트와 200B 토큰 이상을 투입해 오픈소스 코딩 에이전트 'Prime Agent'를 Rust로 전면 재작성했다고 주장 (2026-10-09, runtimewire 단일 출처·회사 주장 기반 — 수치 미검증, confidence low).

## 핵심 내용 (주장 기준)

- 투입: 2,000개 이상 에이전트 + 200B 토큰 이상으로 오픈소스 'Prime Agent' Rust 재작성.
- 변경: 9개 Rust 크레이트 분리, Windows 지원 추가, 세션 충돌 격리, 데몬 프로토콜 개선.
- 실행 환경: 두 개의 8코어 CPU 노드에서 실행. 컴파일·타입체크·diff 작업은 Prime Sandboxes로 처리.
- 맥락: 7월 $1.3억 Series A(Radical Ventures 리드, NVIDIA Ventures 등 참여, $10억 밸류) 이후 — 자사 인프라의 내부 쇼케이스 성격.
- 미정의: "2,000개 에이전트"가 동시 병렬인지 누적 실행인지 등 세부 정의는 불명.

## 왜 중요한가 (검증 전제 하)

- **dogfooding의 극단**: 에이전트 인프라 회사가 자기 제품을 자기 제품으로 재작성 — "에이전트가 코드를 통째로 작성한다"는 [[patterns/agentic-coding]]의 대규모 실증 주장.
- **하네스의 스케일 테스트**: 2,000 에이전트 오케스트레이션 자체가 Agent = Model + Harness의 스케일 증명. 무엇을 쪼개고(9개 크레이트), 무엇을 격리했는지(세션 충돌 격리)가 하네스 설계의 실전 데이터.
- **검증 유보**: 단일 출처·회사 주장. 수치의 독립 검증 전까지는 "가능성의 상한"으로 읽을 것 — 위키 인용 시 confidence low 명시.

## 관련 개념

- [[patterns/agentic-coding]] — "에이전트가 코드를 통째로 작성하는 방식, 신뢰성은 워크플로의 속성"의 대규모 실증 주장.
- [[concepts/harness-engineering]] — 2,000 에이전트 오케스트레이션은 하네스 스케일의 실전 테스트.
- [[tools/deep-agents-deploy]] — LangChain 오픈소스 에이전트 하네스와의 비교축.

## 참고 소스

- [Prime Intellect, 2,000개 에이전트로 자사 코딩 에이전트 Rust 전면 재작성 (runtimewire, 10/9 — 단일 출처)](raw/articles/2026-10-10-prime-intellect-agent-rust-rewrite.md)
