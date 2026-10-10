---
title: "Prime Intellect, 2,000개 에이전트로 자사 코딩 에이전트 Rust 전면 재작성 (10/9)"
source_url: "https://runtimewire.com/article/prime-intellect-prime-agent-rust-rewrite"
source_type: "news"
authors: ["runtimewire.com"]
published: 2026-10-09
fetched: 2026-10-10
tags: [prime-intellect, dogfooding, agents-building-agents, rust, coding-agent, self-rewrite, scale]
status: raw
---

# Prime Intellect, 2,000개 에이전트로 자사 코딩 에이전트 Rust 전면 재작성 (10/9)

> Prime Intellect이 2,000개 이상의 에이전트와 200B 토큰 이상을 투입해 오픈소스 Prime Agent를 Rust로 전면 재작성했다고 주장. 9개 Rust 크레이트 분리, Windows 지원, 세션 충돌 격리, 데몬 프로토콜 개선. 7월 $1.3억 Series A($10억 밸류) 이후 자사 인프라의 내부 쇼케이스 성격. 단일 출처·회사 주장 기반 — 수치 미검증.

## 내용

- 주장: 2,000개 이상 에이전트 + 200B 토큰 이상 투입으로 오픈소스 코딩 에이전트 'Prime Agent'를 Rust로 재작성.
- 변경: 9개 Rust 크레이트 분리, Windows 지원 추가, 세션 충돌 격리, 데몬 프로토콜 개선.
- 실행 환경: 두 개의 8코어 CPU 노드에서 실행. 컴파일·타입체크·diff 작업은 Prime Sandboxes로 처리.
- 맥락: 7월 발표된 $1.3억 Series A(Radical Ventures 리드, NVIDIA Ventures 등 참여, 기업가치 $10억) 이후 — 자사 인프라의 내부 쇼케이스 성격.
- 에이전트가 에이전트를 만드는 dogfooding의 극단 사례. 다만 "2,000개 에이전트"가 동시 병렬인지 누적 실행인지 등 세부 정의는 불명.

## 맥락

- [[patterns/agentic-coding]] — "에이전트가 코드를 통째로 작성하는 방식, 신뢰성은 워크플로의 속성"의 대규모 실증 주장.
- [[concepts/harness-engineering]] — Agent = Model + Harness. 2,000 에이전트 오케스트레이션 자체가 하네스의 스케일 테스트.
- [[tools/deep-agents-deploy]] — LangChain 오픈소스 에이전트 하네스와의 비교축.
- 주의: runtimewire.com 단일 출처, 회사 주장 기반 PR 성격 — 수치(2,000개·200B 토큰)는 독립 검증 없음. 위키 정제 시 confidence: low.
