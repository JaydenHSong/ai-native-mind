---
title: "Anthropic, Claude Mythos 5가 양자회로 설계 8개 과제 중 7개에서 기존 최고 기록 경신 — 최대 17배 게이트 감소"
source_url: "https://particle.news/story/claude-mythos-5-designs-quantum-circuits-that-cut-gate-counts-up-to-17"
source_type: "news"
authors: ["Particle News", "Crypto Briefing", "Anthropic"]
published: 2026-10-16
fetched: 2026-10-17
tags: [anthropic, claude-mythos-5, quantum-computing, scientific-discovery, evaluator-loop]
status: raw
---

# Anthropic, Claude Mythos 5가 양자회로 설계 8개 과제 중 7개에서 기존 최고 기록 경신 — 최대 17배 게이트 감소

> Anthropic이 2026-10-16 발표 (Particle News 페이지 스탬프 2026-10-16T17:29:00Z, Crypto Briefing이 Anthropic 발표 인용) — Claude Mythos 5가 53시간 closed-loop 실험에서 양자회로를 자율 설계·정제. 실험 리드: Andi Gu (STEM Fellows), Harvard Quantum Initiative·QuEra Computing 협력. 프리프린트 2026-10-15.

## 내용

- 실험: 53시간 closed-loop, 8개 양자회로 primitive (화학·최적화·시뮬레이션·정수론·수치 계산).
- 결과: 8개 중 **7개에서 기존 최고(best published) 경신** — Toffoli 게이트 수와 큐비트 수 기준.
- 대표 수치: 타원곡선 모듈러 인버전 — Toffoli 게이트 **약 17배 감소(7000만 → 400만)** , 큐비트는 +12% (838 → 935). Reed-Solomon 디코더(Decoded Quantum Interferometry용) — Google 이전 기록 대비 **약 12배 게이트 감소**, 403M 샘플 디코딩.
- 방법: generator–judge 루프 + 자동 평가자 (점수 = Toffoli 수 × 피크 큐비트 수). 시뮬레이션 + Lean 형식 증명으로 검증.
- 범위 명시: **자원 추정치**에 불과 — 실제 하드웨어에서 실행한 것도, 배치된 암호를 공격할 수 있는 것도 아님.
- 발표 주체: Anthropic 자사 수치 — 독립 검증 대기.

## 맥락

- [[patterns/agent-scientific-discovery]] — ART 발견(생물학, 9월)에 이은 두 번째 자율 과학 발견 정량 사례. generator–judge evaluator 루프의 반복 적용.
- 53시간 closed-loop = \"발견\"을 파이프라인(문헌 접지→in-silico 가설→검증)으로 돌리는 구조의 재현.
- 주의: 자사 발표 수치. ART의 provenance 논란([[concepts/claude-art-discovery-controversy]])처럼 독립성·재현성 검증이 남음.
