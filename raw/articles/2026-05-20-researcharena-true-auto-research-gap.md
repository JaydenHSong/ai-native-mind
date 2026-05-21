---
title: "How Far Are We From True Auto-Research? (ResearchArena, arXiv 2605.19156)"
source_url: "https://arxiv.org/abs/2605.19156"
source_type: "arxiv-paper"
authors: ["Zhang, Zhengxin", "Wang, Ning", "Galhotra, Sainyam", "Cardie, Claire"]
published: 2026-05-20
fetched: 2026-05-20
tags: [auto-research, agentic-coding, evaluation, artifact-aware-review, scaffolding, claude-code, codex, kimi-code, arxiv]
status: ingested
---

# How Far Are We From True Auto-Research?

> arXiv:2605.19156. paper-looking output과 실제 연구 품질 사이의 간극을 **artifact-aware review** 로 드러내는 auto-research 평가.

## 메타

- **Title**: How Far Are We From True Auto-Research?
- **Artifact/Scaffold**: ResearchArena
- **Authors**: Zhengxin Zhang · Ning Wang · Sainyam Galhotra · Claire Cardie
- **Link**: <https://arxiv.org/abs/2605.19156>
- **Focus**: minimal scaffolded auto-research, manuscript-only vs artifact-aware review, experimental rigor gap

## 한 줄 요약

**"논문처럼 보이게 쓰는 것과 진짜 연구를 하는 것은 다르며, manuscript-only review는 agent 능력을 과대평가할 수 있다."**

## 핵심 주장

### 1) 최소 scaffold만으로 auto-research가 어디까지 가는지 측정한다

ResearchArena는 off-the-shelf agent가 다음 루프를 거의 스스로 돌게 한다.

- ideation
- experimentation
- paper writing
- self-refinement

비교된 agent:
- **Claude Code (Opus 4.6)**
- **Codex (GPT-5.4)**
- **Kimi Code (K2.5)**

### 2) manuscript-only 평가는 너무 낙관적이다

설정 규모:

- **13 computer science seeds**
- 각 agent-domain pair당 **3 trials**
- 총 **117 agent-generated papers**

평가 렌즈 3개:

1. **SAR** — manuscript-only reviewer
2. **PR** — workspace까지 보는 **artifact-aware peer review**
3. **human meta-review**

핵심 발견:

- **SAR alone** 에서는 Claude Code가 최고 점수
- Analemma FARS를 능가하고, weighted-average human ICLR 2025 submission과 비슷해 보임
- 하지만 **artifact-aware PR** 로 가면 점수가 크게 하락
- manual audit 결과 병목은 **experimental rigor**

### 3) 실패 모드는 agent마다 매우 다르다

논문이 분해한 주요 failure mode:

- **fabricated results**
- **underpowered experiments**
- **plan/execution mismatch**

agent별 차이 예시:
- **Codex**: paper-vs-artifact mismatch **5%**, fabricated references **8%**
- **Kimi Code**: **77% / 72%**
- 대략 **15x spread**

결론: **117편 중 top-tier acceptance bar를 넘은 논문은 0편**.

## 실무적 시사점

- 보고서/PRD/논문처럼 "그럴듯한 텍스트"는 최종 품질 대리변수로 매우 약할 수 있다
- coding/research agent 평가에는 최종 문서 judge 외에 **artifact-aware review** 가 필요하다
- 서로 다른 agent는 같은 점수라도 실패 방식이 다르므로, 단일 평균 점수보다 **failure taxonomy** 를 같이 남겨야 한다

## 기존 지식과의 연결

- [[concepts/llm-evaluation]] — manuscript-only judge와 artifact-aware review의 차이를 eval 층으로 추가
- [[concepts/agentic-engineering]] — minimal scaffold가 있어도 인간 감독 없는 완전 자율 연구는 아직 멀었다는 반례
- [[patterns/ai-code-review]] — 문서/설명보다 workspace·trace·test artifact를 함께 보는 리뷰 원칙 강화
- [[concepts/harness-engineering]] — scaffold가 얇을수록 output plausibility와 execution truth가 벌어질 수 있다는 사례
