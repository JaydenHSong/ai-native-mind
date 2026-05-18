---
title: "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions (arXiv 2510.25445)"
source_url: "https://arxiv.org/abs/2510.25445"
source_type: "arxiv-paper"
authors: ["Mohamad Abou Ali", "Fadi Dornaika"]
published: 2025-10-29
fetched: 2026-05-17
tags: [survey, agentic-ai, symbolic-ai, neural-ai, hybrid-architecture, governance, prisma, arxiv]
status: ingested
---

# Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions

> arXiv:2510.25445, 2025-10-29. Mohamad Abou Ali · Fadi Dornaika. **PRISMA 90-study** 리뷰를 통해 Agentic AI를 symbolic/classical vs neural/generative 두 계보로 재정리하고, hybrid 통합을 미래 방향으로 제안.

## 메타

- **Title**: Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions
- **Authors**: Mohamad Abou Ali, Fadi Dornaika
- **arXiv**: <https://arxiv.org/abs/2510.25445> | PDF: <https://arxiv.org/pdf/2510.25445>
- **DOI**: <https://doi.org/10.1007/s10462-025-11422-4>
- **Domain**: survey, agent architectures, symbolic vs neural, governance

## 한 줄 요약

**"Agentic AI를 전부 LLM agent 한 덩어리로 부르면 개념이 흐려진다 — 이 survey는 agentic system을 Symbolic/Classical과 Neural/Generative 두 계보로 나누고, 미래는 어느 한 쪽 승리가 아니라 *의도적 hybrid 통합*이라고 주장한다."**

## 핵심 주장

### 1) 문제 — conceptual retrofitting

저자들은 modern neural system을 예전 symbolic agent 개념에 아무 구분 없이 끼워 넣는 관행을 **conceptual retrofitting**이라 부른다.

→ 결과적으로 "agent"라는 단어는 같아도, 계획 방식·상태 표현·실패 모드·거버넌스 문제가 완전히 다른 시스템이 한 묶음으로 취급된다.

### 2) dual-paradigm framework

| 계보 | 핵심 메커니즘 | 이 논문 표현 |
|---|---|---|
| **Symbolic / Classical** | algorithmic planning, persistent state | 규칙·명시적 상태·고전적 의사결정 |
| **Neural / Generative** | stochastic generation, prompt-driven orchestration | LLM 기반 생성·오케스트레이션 |

→ 이 구분은 "구식 vs 최신"이 아니라 **문제 적합성의 차이**다.

### 3) PRISMA 90-study review

- **2018–2025** 논문 90편 체계적 리뷰
- 분석 축 3개:
  1. 각 paradigm의 이론적 기반과 architecture principle
  2. healthcare / finance / robotics 도메인 적용
  3. ethics / governance challenge

### 4) 전략적 결론 — 도메인이 paradigm을 고른다

abstract 핵심 결론:

- **safety-critical domain** (예: healthcare) 에서는 symbolic 계열 우세
- **adaptive, data-rich environment** (예: finance) 에서는 neural 계열 우세
- 중요한 research gap:
  - symbolic system용 governance model 부족
  - **hybrid neuro-symbolic architecture** 필요

→ 즉 "LLM agent면 다 같은 것"이 아니라, **도메인 제약이 어떤 계보를 더 자연스럽게 부르는지**를 먼저 봐야 한다.

## 본 위키와의 짝

| 본 위키 페이지 | Survey와의 관계 |
|---|---|
| [[concepts/agentic-engineering]] | Worker/Leader, harness, orchestration을 neural/generative lineage 안에 위치시키면서도, symbolic lineage와 섞지 말아야 할 개념 경계를 제공 |
| [[concepts/ai-orchestration]] | multi-agent orchestration이 neural paradigm의 정점이라는 구조화된 자리매김 제공 |
| [[concepts/harness-engineering]] | harness는 단지 LLM tooling이 아니라, hybrid system으로 갈 때 symbolic constraint 층과 neural generation 층을 잇는 substrate로 읽을 수 있음 |
| [[comparisons/agent-frameworks]] | 프레임워크 비교 시 backend 추상화만이 아니라 underlying paradigm까지 물어야 함 |

## 2x3 좌표계에서의 위치

- **Descriptive × 학습** 칸.
- 실제 문헌 90편을 지도처럼 정리해 현재 landscape를 배우게 해 주는 survey이며, 특정 처방보다 **개념 지형도**를 제공한다.

## 한계

- survey라서 직접 실험 artifact는 약함.
- symbolic vs neural 이분법이 실제 hybrid stack의 연속체를 과도하게 단순화할 수 있음.
- 2025-10 시점 컷이라 2026년의 최신 managed-agent 흐름은 부분적으로 후속 보강 필요.

## 출처

- arXiv: <https://arxiv.org/abs/2510.25445>
- PDF: <https://arxiv.org/pdf/2510.25445>
- DOI: <https://doi.org/10.1007/s10462-025-11422-4>
