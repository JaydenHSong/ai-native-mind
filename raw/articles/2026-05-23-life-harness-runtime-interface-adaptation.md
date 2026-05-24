---
title: "Adapting the Interface, Not the Model: Runtime Harness Adaptation for Deterministic LLM Agents (arXiv 2605.22166)"
source_url: "https://arxiv.org/abs/2605.22166"
source_type: "arxiv-paper"
authors: ["Tianshi Xu", "Huifeng Wen", "Meng Li"]
published: 2026-05-21
fetched: 2026-05-23
tags: [harness-engineering, runtime-adaptation, deterministic-agents, lifecycle, trajectory, environment-interface, arxiv]
status: ingested
---

# Adapting the Interface, Not the Model: Runtime Harness Adaptation for Deterministic LLM Agents

> arXiv:2605.22166. deterministic, rule-governed environment에서 agent 실패의 상당수는 모델 자체보다 **model-environment interface mismatch** 에서 오며, 이를 고치기 위해 frozen model 위에서 **lifecycle-aware runtime harness** 를 진화시키자는 논문.

## 메타

- **Title**: Adapting the Interface, Not the Model: Runtime Harness Adaptation for Deterministic LLM Agents
- **Authors**: Tianshi Xu · Huifeng Wen · Meng Li
- **Link**: <https://arxiv.org/abs/2605.22166>
- **Published**: 2026-05-21
- **Subjects**: Artificial Intelligence (cs.AI)

## 한 줄 요약

**"모델을 튜닝하기 전에, 모델과 환경 사이의 하네스 인터페이스를 먼저 고쳐라."**

## 핵심 주장

### 1) 많은 실패는 model quality가 아니라 interface mismatch다

논문은 deterministic domain에서 agent failure를 이렇게 해석한다.

- observation이 환경 규약과 어긋난다
- tool action이 기대 포맷과 안 맞는다
- feedback 해석이 일관되지 않다
- trajectory control이 환경의 진행 규칙과 충돌한다

즉 실패 원인이 항상 모델 파라미터 부족은 아니다. **runtime contract가 어설픈 것** 일 수 있다.

### 2) Life-Harness는 training trajectory에서 reusable intervention을 뽑는다

저자들이 제안하는 Life-Harness는 training run의 recurring failure를 관찰하고, 이를 네 층 intervention으로 바꾼다.

- **environment contracts**
- **procedural skills**
- **action realization**
- **trajectory regulation**

핵심은 모델 weight를 바꾸지 않고, **environment-side structure** 를 하네스 쪽에 고정 자산으로 축적한다는 점이다.

### 3) 작은 모델에서 배운 하네스가 큰 모델에도 옮겨 간다

가장 흥미로운 결과는 transfer 쪽이다.

- **7 deterministic environments**
- **18 model backbones**
- **126 model-environment settings 중 116개 개선**
- **평균 상대 향상 88.5%**
- Qwen3-4B-Instruct trajectory로 진화시킨 harness가 **다른 17개 모델** 로도 전이

즉 하네스가 모델별 trick이 아니라 **환경 일반 규약** 을 캡처할 수 있음을 시사한다.

## 실무적 시사점

1. **모델 업그레이드 전에 interface audit을 먼저 한다**
   - deterministic workflow에서 실패가 계속 나면, prompt나 weight보다 tool contract와 trajectory regulation을 먼저 본다.
2. **싼 모델로 하네스 학습, 큰 모델로 실행** 전략이 가능하다
   - environment-side structure를 배우는 일은 꼭 최고가 모델이 아니어도 될 수 있다.
3. **trajectory log는 단순 디버그 기록이 아니라 하네스 진화 데이터다**
   - recurring failure를 intervention library로 바꾸는 관점이 중요하다.

## 기존 지식과의 연결

- [[concepts/harness-engineering]]
  - 하네스를 static policy가 아니라 **실패 패턴에서 진화하는 interface layer** 로 보게 만든다.
- [[concepts/tool-use]]
  - action realization과 procedural skill을 하네스 개입 지점으로 보면, tool definition은 schema만이 아니라 lifecycle control의 일부가 된다.
- [[concepts/llm-evaluation]]
  - deterministic benchmark 점수는 모델 능력만이 아니라 **runtime interface quality** 를 함께 반영할 수 있다는 해석을 강화한다.

## 한계 / 메모

- abstract 기준 정리라 intervention의 구체 포맷, 환경별 편차, failure taxonomy 상세는 본문 확인이 더 필요하다.
- deterministic, rule-governed domain에서 특히 강한 framing이므로, open-ended creative task에 그대로 일반화하긴 어렵다.
