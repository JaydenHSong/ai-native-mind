---
title: "GroupMemBench: Benchmarking LLM Agent Memory in Multi-Party Conversations (arXiv 2605.14498)"
source_url: "https://arxiv.org/abs/2605.14498"
source_type: "arxiv-paper"
authors: ["Jingbo Yang", "et al. (5 others)"]
published: 2026-05 (approx)
fetched: 2026-05-15
tags: [memory, benchmark, multi-party, theory-of-mind, bm25-baseline, ai-memory-systems, arxiv]
status: ingested
---

# GroupMemBench: Benchmarking LLM Agent Memory in Multi-Party Conversations

> arXiv:2605.14498, May 2026. Yang et al. (6 authors). **6-category adversarial query pipeline** × **multi-party conversation**. **Strongest memory system = 46.0%**, **BM25 baseline matches or exceeds most agent memory systems**.

## 메타

- **Title**: GroupMemBench: Benchmarking LLM Agent Memory in Multi-Party Conversations
- **Authors**: Jingbo Yang et al. (총 6명, 본문 확인 필요)
- **arXiv**: <https://arxiv.org/abs/2605.14498>
- **Domain**: LLM 에이전트의 *long-running multi-party 대화* 메모리 — 단일 사용자 가정을 깬다.

## 한 줄 요약

**"메모리 시스템들이 *1:1 setup*만 가정해 왔다 — group/channel을 도입하면 (i) group dynamics, (ii) speaker-grounded belief tracking, (iii) audience-adapted language 세 속성이 측정되지 못한다. 측정해 보니: 최강 시스템도 46.0%, knowledge update 27.1%, term ambiguity 37.7% — 단순 BM25가 대부분의 agent memory system을 *따라잡거나 능가*한다."**

## 핵심 주장

### 1) 문제 — 메모리 benchmark가 dyadic(1:1)이라 *group 속성*이 사라진다

기존 benchmark (MemoryAgentBench, EverMemBench 등)는 사용자 1명 ↔ 에이전트 1명 가정. 실제 deployment는 **Slack 채널, Discord 서버, 그룹 채팅, 회의록**에서 *다수 사용자가 서로* 그리고 *에이전트와* 대화한다.

세 속성이 dyadic에서 사라진다:

| 속성 | 의미 |
|---|---|
| (i) **Group dynamics** | 단순 1:1 대화 concat ≠ 그룹 대화 (turn-taking, address-to-whom) |
| (ii) **Speaker-grounded belief tracking** | "X가 알고 있는 것"과 "Y가 알고 있는 것"이 다를 수 있음 — 사용자별 belief 모델링 |
| (iii) **Audience-adapted language** | Theory-of-Mind shift — 같은 사람이 청중에 따라 vocabulary가 바뀐다 (term ambiguity) |

### 2) Benchmark 구조

- **Graph-grounded synthesis pipeline**: multi-party 대화를 controllable reply structure로 생성, 각 메시지는 per-user persona + target audience에 conditioned.
- **Adversarial query pipeline**: 모든 question을 *specific asker*에게 binding — "X가 묻는다면 답이 다를 수 있다".
- **6 categories of question**:
  1. Multi-hop reasoning
  2. Knowledge update
  3. Term ambiguity
  4. User-implicit reasoning
  5. Temporal reasoning
  6. Abstention

### 3) 측정 결과 — 메모리는 *아직 풀린 문제가 아니다*

| 항목 | 정량 |
|---|---|
| 최강 메모리 시스템 average accuracy | **46.0%** |
| Knowledge update | **27.1%** |
| Term ambiguity | **37.7%** |
| 단순 BM25 baseline | **대부분의 agent memory system 매치 또는 능가** |

→ 저자 결론(인용): "current memory ingestion erases the structural and lexical features group memory depends on, leaving multi-user memory far from solved."

### 4) "BM25가 따라잡는다" 의 의미

복잡한 자동 추출 · 임베딩 · 그래프 메모리 (Mem0, Zep, LangChain Memory, …) 가 단순 **BM25 키워드 검색**과 *동일 또는 열등*. 즉 현 메모리 시스템들이 **group context의 *언어적·구조적 신호*를 ingest 단계에서 압축해서 버린다**.

## 본 위키와의 짝

| 본 위키 페이지 | GroupMemBench와의 관계 |
|---|---|
| [[concepts/ai-memory-systems]] | "주요 프레임워크" 표(Mem0 / Zep / LangChain Memory / AWS AgentCore / Redis)가 *dyadic gap*을 갖는다는 첫 정량 — Friday weekly review 갱신 후보 |
| [[concepts/llm-evaluation]] | WildClawBench(2026-05-14 통합) 옆에 *memory-specific 측정*을 가져옴 — eval 3 layer 표(judge / single output / trace)에 *memory layer* 한 줄 추가 후보 |
| [[concepts/context-rot-hallucination]] | "Knowledge update 27.1%"는 *Rot의 메모리 버전* — 시간에 따라 update된 사실을 못 따라간다 |
| [[patterns/llm-wiki]] | 본 위키 자체가 *Episodic(log)/Semantic(concepts)/Procedural(CLAUDE.md)* 분리로 group-grade memory 구조를 *수동* 구현 중. GroupMemBench의 BM25-comparable 결과는 본 위키의 *자연어 검색*(Obsidian)이 자동 메모리 시스템보다 *덜 손해 보지 않을 수 있음*을 시사 |

## 2x3 좌표계에서의 위치

- **Tooling × 측정** 칸. WildClawBench(2026-05-14)와 같은 칸이지만 *서브 도메인*(memory)을 별도로 측정 — 같은 칸 안에 여러 점을 찍을 수 있다는 신호. 6 question category × adversarial asker × multi-party 대화는 WildClawBench의 60-task production-like와 *직교*하는 측정 표면.

## 한계 (추정 — 본문 미독)

- 6명 저자 명단 본문 확인 필요 (Yang 제외 5명).
- "Strongest memory system"이 *어떤 시스템*인지 본문 명시 필요 (Mem0 / Zep / 둘 다 / 다른 것).
- Graph-grounded synthesis는 *합성 데이터* — 실 deployment의 noise 분포와 다를 수 있음 (typo, off-topic 등).
- BM25-equivalence 주장은 retrieval 정확도이고, 응답 생성 quality는 별도일 가능성 — abstract만으로 판단 어려움.
- 6 question category의 score breakdown 본문 정독 필요.

## 출처

- arXiv: <https://arxiv.org/abs/2605.14498>
- (코드/dataset 공개 여부 확인 필요)
