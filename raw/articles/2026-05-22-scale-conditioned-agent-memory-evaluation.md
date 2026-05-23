---
title: "When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory (arXiv 2605.07313)"
source_url: "https://arxiv.org/abs/2605.07313"
source_type: "arxiv-paper"
authors: ["Shao, Jiaqi", "Lu, Yiyi", "Zhang, Yunzhen", "Luo, Bing"]
published: 2026-05-08
fetched: 2026-05-22
tags: [memory, evaluation, agent-memory, longmemeval, locomo, scalability, token-budget, retrieval, observability, arxiv]
status: ingested
---

# When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory

> arXiv:2605.07313. memory 평가를 fixed-snapshot accuracy에서 끌어내려, **irrelevant session이 계속 쌓일 때도 task evidence가 실제로 계속 usable한가** 를 묻는 scale-conditioned protocol을 제안한다.

## 메타

- **Title**: When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory
- **Authors**: Jiaqi Shao · Yiyi Lu · Yunzhen Zhang · Bing Luo
- **Link**: <https://arxiv.org/abs/2605.07313>
- **Focus**: evidence-preserving growth, scale-conditioned memory eval, budget-compliant reliability, usable-scale boundary

## 한 줄 요약

**"메모리는 지금 맞게 찾느냐보다, 쓸모없는 세션이 계속 쌓여도 필요한 증거를 예산 안에서 계속 꺼낼 수 있느냐로 평가해야 한다."**

## 핵심 주장

### 1) 기존 memory eval은 성장 조건을 거의 묻지 않는다

기존 평가는 대체로

- fixed-snapshot accuracy
- retrieval quality

를 본다. 하지만 실제 운영에서는 memory store가 커질수록 **irrelevant session** 이 누적된다. 논문은 바로 이 조건에서 evidence usability가 무너질 수 있다고 지적한다.

### 2) evidence는 고정하고 noise만 늘리는 protocol이 필요하다

제안하는 scale-conditioned evaluation의 아이디어는 간단하다.

- query마다 **task-relevant evidence는 고정**
- 대신 **irrelevant sessions를 점점 추가**
- agent-memory trajectory를 기록
- scale이 커질수록 reliability와 budget burden이 어떻게 바뀌는지 측정

이 설계 덕분에 "증거 자체가 어려워서"인지, "store가 커져서 usable하지 않게 된 것인지"를 분리할 수 있다.

### 3) 네 개의 진단 지표를 제시한다

논문이 강조하는 diagnostics는 다음 네 가지다.

1. **budget-compliant reliability**
2. **tail memory-call burden**
3. **failure-regime decomposition**
4. **usable-scale boundary**

특히 usable-scale boundary는 중요하다. memory 시스템이 "언제까지는 쓸 만하고, 어디서부터는 target reliability 아래로 떨어지는가"를 한 줄로 말하게 해 준다.

### 4) reliability loss는 한 가지 현상이 아니다

LongMemEval과 LoCoMo에 flat / planar / hierarchical memory interface를 적용한 결과, 성능 저하는 단일 원인이 아니다.

- **HippoRAG**: two-call budget은 지키지만 irrelevant session이 늘수록 **budget-compliant reliability 16~20 percentage points 하락**
- **LiCoMemory**: 실패 양상이 agent에 따라 달라짐
  - Qwen3-8B는 budget 초과
  - Qwen3-32B, Qwen3-235B는 시험 범위 내에서 상대적으로 안정적

즉 memory claim은 모델·인터페이스·규모·상호작용 예산을 분리해서 말해야 한다.

## 기여점

1. memory eval을 **fixed snapshot → scale-conditioned growth setting** 으로 이동
2. accuracy만이 아니라 **budget burden / failure regime / usable boundary** 를 함께 측정
3. memory 성능 주장을 **agent × interface × scale range × budget** 조건부 명제로 바꾸는 프레임 제공
4. trajectory logging을 통해 memory 문제를 retrieval miss 하나로 뭉개지 않게 함

## 실무적 시사점

### 1) memory demo는 작은 store에서만 좋을 수 있다

벤더 데모가 잘 보여도, 실제 서비스처럼 irrelevant history가 길어지면 usable evidence retrieval이 급격히 나빠질 수 있다.

### 2) 토큰 예산과 memory 품질은 분리할 수 없다

정확도를 유지하려고 memory call이 계속 늘어나면, 그 시스템은 실전에서 비싸고 느려질 수 있다. **budget-compliant reliability** 는 실무형 지표다.

### 3) memory failure를 "못 찾음" 하나로 보지 말아야 한다

budget 초과, retrieval 순위 저하, 인터페이스 구조 문제처럼 failure regime을 나누어야 개선 포인트가 보인다.

## 기존 지식과의 연결

- [[concepts/ai-memory-systems]]: memory를 저장 방식이 아니라 **규모 증가 아래 usable evidence 유지 문제** 로 확장한다.
- [[comparisons/agent-memory-taxonomy]]: belief / lifecycle / safety memory 옆에, **scale-conditioned evaluation** 이라는 측정 축을 더해 준다.
- [[concepts/llm-evaluation]]: eval이 static score에서 **운영 조건부 reliability** 로 이동한다는 최근 흐름과 정확히 맞닿는다.
- [[concepts/harness-engineering]]: memory interface 자체가 하네스 설계 변수이며, agent trajectory logging이 memory diagnostics의 필수 입력임을 보여 준다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- flat / planar / hierarchical interface 정의와 각 failure regime의 정확한 taxonomy는 본문 정독 시 보강 필요.
- usable-scale boundary를 실제 production KPI와 어떻게 연결할지는 후속 정리 가치가 있다.
