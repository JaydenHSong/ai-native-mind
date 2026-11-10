---
title: "Claude Mythos 5의 양자회로 설계 — 8개 과제 중 7개에서 기존 최고 경신"
category: concepts
tags: [anthropic, claude-mythos-5, quantum-computing, scientific-discovery, evaluator-loop, stem-fellows]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-claude-mythos5-quantum-circuits.md"
related:
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/claude-art-discovery-controversy]]"
status: draft
confidence: high
---

# Claude Mythos 5의 양자회로 설계 — 8개 과제 중 7개에서 기존 최고 경신

## 쉽게 읽기

**비유**: 양자회로 설계는 수십만 개의 게이트를 이어 붙이는 "전기 배선 최적화" 문제다. Claude Mythos 5는 53시간 동안 자동 심사관과 짝을 이뤄 기존 인간 기록보다 17배 적은 배선으로 같은 일을 하는 설계를 찾아냈다.

| 용어 | 풀이 |
|------|------|
| **Toffoli gate** | 양자회로의 주요 게이트 — 개수가 비용(회로 크기)의 핵심 지표 |
| **Generator–judge loop** | 생성자 에이전트가 설계하고, 자동 평가자가 점수(Toffoli 수 × 피크 큐비트 수)로 심사하는 루프 |
| **Lean formal proof** | Lean 증명 보조기로 형식 검증 — 시뮬레이션 위에 수학적 증명까지 |

## 한줄 정의

자율 에이전트(Claude Mythos 5)가 generator–judge evaluator 루프로 양자회로를 설계·정제해 **8개 과제 중 7개에서 인간의 기존 최고 기록을 경신**한 정량적 자율 과학 발견 사례 — "발견"의 정도가 게이트 수로 측정된 드문 경우.

## 핵심 내용

- **실험** (Anthropic, 2026-10-16 발표): 53시간 closed-loop, 8개 양자회로 primitive (화학·최적화·시뮬레이션·정수론·수치 계산). 리드: Andi Gu (STEM Fellows), Harvard Quantum Initiative·QuEra Computing 협력.
- **결과**: 8개 중 **7개에서 기존 최고(best published) 경신** — Toffoli 게이트 수와 큐비트 수 기준.
- **대표 수치**:
  - 타원곡선 모듈러 인버전: Toffoli 게이트 **~17배 감소 (7000만 → 400만)**, 큐비트 +12% (838 → 935) — 게이트·큐비트 트레이드오프가 숫자로 기록됨.
  - Reed-Solomon 디코더 (Decoded Quantum Interferometry용): Google 이전 기록 대비 **~12배 게이트 감소**, 403M 샘플 디코딩.
- **방법**: generator–judge 루프 + 자동 평가자 (점수 = Toffoli 수 × 피크 큐비트 수). 시뮬레이션 + Lean 형식 증명으로 검증.
- **범위 명시**: **자원 추정치**에 불과 — 실제 하드웨어에서 실행한 것도, 배치된 암호를 공격할 수 있는 것도 아님.
- **프리프린트**: 2026-10-15. **Anthropic 자사 수치** — 독립 검증 대기.

## 왜 중요한가 (1인 개발자 관점)

1. **"AI가 발견했다"의 정량 사례**: ART(효소 발견, 9월)는 "있었다/없었다"의 질적 발견이었지만, 이건 **17배·12배**라는 숫자로 측정됨 — 발견 파이프라인의 출력이 정량 지표로 평가되는 evaluator-loop의 완성형.
2. **평가자의 설계가 핵심**: 점수 함수(Toffoli 수 × 피크 큐비트 수)가 발견의 방향을 정함 — [[patterns/agent-scientific-discovery]]의 "평가 비대칭" 축: 평가자를 누가 설계하는가가 결과를 좌우.
3. **범위 명시의 모범**: "자원 추정치일 뿐, 암호 공격 아님"을 발표 자체에 명시 — 주장 강도를 단계별로 표기하는 패턴의 적용 사례.

## 한계 (명시)

- **Anthropic 자사 발표 수치** — 독립 재현·검증 대기 (ART의 provenance 논란([[concepts/claude-art-discovery-controversy]])과 같은 검증 과제).
- 실제 하드웨어 실행 아님. 8개 중 1개는 기존 최고 경신 실패 — 어떤 과제였는지 미공개.

## 관련 개념

- [[patterns/agent-scientific-discovery]] — 발견 파이프라인의 다섯 번째 적용 사례: 문헌 접지→in-silico 가설→검증의 양자회로판.
- [[concepts/claude-art-discovery-controversy]] — 같은 "Anthropic의 발견 주장"의 검증 과제: ART는 provenance, 이건 독립 재현.
- [[patterns/llm-evaluation]] — evaluator-loop의 설계(점수 함수)가 발견을 정하는 구조.

## 참고 소스

- [Claude Mythos 5, 양자회로 설계 8개 중 7개 기존 최고 경신 (Particle News·Crypto Briefing·Anthropic, 10/16)](raw/articles/2026-10-17-claude-mythos5-quantum-circuits.md)
