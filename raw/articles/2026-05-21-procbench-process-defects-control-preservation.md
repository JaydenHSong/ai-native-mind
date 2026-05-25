---
title: "ProcBench: Evaluating Process-Level Defects and Control Preservation in LLM Coding Agents (arXiv 2605.20251)"
source_url: "https://arxiv.org/abs/2605.20251"
source_type: "arxiv-paper"
authors: ["He, Jiawei", "Jia, Jie", "Liu, Chenbo", "Xue, Chaoyi", "Song, Yapeng", "Yang, Xikai", "Sun, Dong"]
published: 2026-05-18
fetched: 2026-05-21
tags: [evaluation, coding-agents, process-evaluation, trajectory, control-preservation, benchmark, terminalbench, swe-bench, arxiv]
status: ingested
---

# ProcBench: Evaluating Process-Level Defects and Control Preservation in LLM Coding Agents

> arXiv:2605.20251. final outcome만 보던 coding-agent eval을 **실행 과정 품질**과 **통제권 보존(control preservation)** 질문으로 끌어내린 benchmark.

## 메타

- **Title**: ProcBench: Evaluating Process-Level Defects and Control Preservation in LLM Coding Agents
- **Authors**: Jiawei He · Jie Jia · Chenbo Liu · Chaoyi Xue · Yapeng Song · Xikai Yang · Dong Sun
- **Link**: <https://arxiv.org/abs/2605.20251>
- **Focus**: process-level defects, unified trajectory representation, control preservation, execution-process evaluation

## 한 줄 요약

**"코딩 에이전트는 최종적으로 맞았는지뿐 아니라, 그 과정이 해석 가능하고 멈출 수 있고 되돌릴 수 있고 사람에게 통제권을 돌려줄 수 있는지도 함께 평가해야 한다."**

## 핵심 주장

### 1) outcome-only benchmark는 실행 중 결함을 충분히 못 본다

기존 benchmark는 대체로 다음 질문에 집중한다.

- 최종 테스트를 통과했는가
- 최종 패치가 정답인가

하지만 ProcBench는 그 사이 실행 과정에서 생기는 결함을 별도 문제로 본다.

- 실행이 비정상적으로 꼬였는가
- agent가 통제 불가능한 상태로 미끄러졌는가
- 사람이 개입하거나 되돌리기 어려운 흐름이 되었는가

즉 **결과 correctness** 와 **process quality** 를 분리한다.

### 2) 반복적으로 나타나는 execution defect를 ontology로 묶는다

ProcBench는 recurrent defect를 재사용 가능한 ontology로 정리한다.

- **11 defect types**
- **4 categories**

핵심은 defect를 ad-hoc하게 읽는 대신, 서로 다른 agent 비교에 재사용 가능한 어휘로 바꿨다는 점이다.

### 3) heterogeneous agent를 unified trajectory representation으로 비교한다

서로 다른 도구·로그 포맷·프레임워크를 쓰는 agent들을 비교하려면 raw log 자체로는 어렵다. ProcBench는 이를 위해

- raw logs를
- **unified trajectory representation** 으로 표준화하고
- process evidence 기반 **calibrated scorecard** 를 만든다

이건 benchmark 자체보다도 실무 하네스에 가까운 아이디어다. 운영 로그를 그냥 저장하는 것과, **비교 가능한 사건 표면** 으로 변환하는 것은 완전히 다른 일이다.

### 4) control preservation을 process quality의 핵심 지표로 올린다

ProcBench가 특히 중요한 이유는 **control preservation** 개념 때문이다.

논문은 좋은 실행 과정을 다음 속성으로 본다.

- **interpretable** — 무엇을 왜 하는지 읽을 수 있는가
- **interruptible** — 멈춰 세울 수 있는가
- **correctable** — 중간에 바로잡을 수 있는가
- **reversible** — 되돌릴 수 있는가
- **authority hand-back** — 필요할 때 인간에게 통제권을 돌려줄 수 있는가

이건 단순 성능 metric이 아니라, 실제 production agent 운영에서 **사람이 통제 가능한 시스템인가** 를 묻는 질문이다.

### 5) 세 benchmark에서 process-level 차이를 드러낸다

평가 데이터:

- **200 cases**
- **AndroidBench**
- **TerminalBench**
- **SWE-bench-Verified**

논문의 주장에 따르면 ProcBench는

- useful reliability로 instantiation 가능하고
- direct thresholding보다 **더 안정적인 semantics** 를 제공하며
- outcome-based evaluation이 놓치던 execution quality 차이를 드러낸다

즉 같은 점수처럼 보이는 agent도 **과정 품질** 에서는 크게 다를 수 있다.

## 실무적 시사점

- coding agent 로그는 최종 diff만이 아니라 **trajectory evidence** 로 남겨야 한다
- 운영 평가표에 success rate 옆으로 **interruptibility / reversibility / hand-back readiness** 같은 항목을 둘 가치가 있다
- 멀티스텝 agent를 고를 때는 정답률보다 **수정 가능한 실패를 하는가** 도 중요하다
- production harness는 raw log 저장보다 **표준화된 event schema** 설계가 먼저일 수 있다

## 기존 지식과의 연결

- [[concepts/llm-evaluation]] — output·runtime score 다음에 **execution-process quality** 층을 추가하는 근거
- [[patterns/ai-code-review]] — 리뷰를 "맞았는가"에서 "통제 가능한 수정 과정이었는가"로 넓혀 줌
- [[concepts/harness-engineering]] — 좋은 하네스는 capability boost만이 아니라 **interruptible / reversible / hand-backable** execution substrate여야 한다는 근거
- [[raw/articles/2026-05-19-harnessaudit-trajectory-safety.md|HarnessAudit]] 와 짝 — HarnessAudit가 safety boundary를 감사했다면, ProcBench는 coding agent의 **process defect + control preservation** 을 감사한다

## 남는 질문 / 한계

- abstract만으로는 11 defect type의 세부 taxonomy와 calibrated score 계산 방식은 추가 확인이 필요하다
- control preservation이 실제 production incident 감소와 얼마나 강하게 연결되는지는 후속 검증이 필요하다
- AndroidBench/TerminalBench/SWE-bench-Verified 세 도메인 차이가 큰 만큼, domain-specific defect prior를 따로 보는 것이 더 유익할 수 있다
