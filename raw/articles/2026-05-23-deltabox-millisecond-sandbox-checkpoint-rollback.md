---
title: "DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback (arXiv 2605.22781)"
source_url: "https://arxiv.org/abs/2605.22781"
source_type: "arxiv-paper"
authors: ["Yunpeng Dong", "Jingkai He", "Yuze Hou", "Dong Du", "Zhonghu Xu", "Si Yu", "Yubin Xia", "Haibo Chen"]
published: 2026-05-21
fetched: 2026-05-23
tags: [sandbox, checkpoint-rollback, stateful-agents, search, reinforcement-learning, tool-use, systems, arxiv]
status: ingested
---

# DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback

> arXiv:2605.22781. stateful tool-using agent가 deep search와 fan-out을 하려면 sandbox 전체를 빠르게 되돌릴 수 있어야 하며, 이를 위해 **change-based checkpoint/rollback** 을 OS 수준에서 구현하자는 시스템 논문.

## 메타

- **Title**: DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback
- **Authors**: Yunpeng Dong · Jingkai He · Yuze Hou · Dong Du · Zhonghu Xu · Si Yu · Yubin Xia · Haibo Chen
- **Link**: <https://arxiv.org/abs/2605.22781>
- **Published**: 2026-05-21
- **Subjects**: Operating Systems (cs.OS), Artificial Intelligence (cs.AI)

## 한 줄 요약

**"장기 agent가 여러 시도를 병렬 탐색하려면 샌드박스를 통째로 복제하지 말고, 바뀐 것만 저장·되돌려야 한다."**

## 핵심 주장

### 1) stateful agent scaling의 병목은 모델이 아니라 sandbox 복제 속도다

논문은 test-time tree search, reinforcement learning, fan-out exploration 같은 agent scaling 기법이 실제로는 **sandbox state checkpoint/rollback 속도** 에 막힌다고 본다.

기존 방식은

- 파일 상태
- 프로세스 메모리 상태
- 실행 context

를 거의 통째로 복제해 버리기 때문에, checkpoint/rollback마다 **수백 ms~수 초** 가 걸릴 수 있다.

### 2) 연속 checkpoint는 대부분 비슷하므로 delta만 저장하면 된다

핵심 insight는 단순하다.

> 인접한 checkpoint 사이 변화량은 작다.

그래서 전체 상태를 복제하지 말고 **직전 checkpoint 대비 변경분만** 저장하는 DeltaState 추상화를 제안한다.

### 3) 두 개의 OS 메커니즘으로 이를 실현한다

- **DeltaFS**
  - filesystem state를 layer로 조직
  - checkpoint 시 writable layer를 freeze하고 새 layer 삽입
  - file update는 copy-on-write로 처리
  - rollback은 layer switch로 단순화
- **DeltaCR**
  - process state를 incremental dump
  - rollback은 전통적 restore pipeline 대신 frozen template process에서 직접 fork

즉 agent sandbox를 단순 컨테이너가 아니라 **transactional branching substrate** 로 바꾼다.

### 4) 결과는 deep search 예산을 직접 넓혀 준다

논문이 제시한 수치는 다음과 같다.

- checkpoint **14ms**
- rollback **5ms**

평균적 CLI agent loop 관점에서 이는 꽤 큰 차이다. 같은 wall-clock budget 아래 **더 많은 branch 탐색** 이 가능해진다.

## 실무적 시사점

1. **sandbox는 보안 격리 장치이면서 search accelerator이기도 하다**
   - 샌드박스를 안전장치로만 보면 checkpoint/rollback의 전략적 가치가 보이지 않는다.
2. **agent fan-out을 하려면 state reset 비용을 먼저 재야 한다**
   - 모델 성능보다도 branch당 environment reset latency가 throughput을 지배할 수 있다.
3. **tool-use infrastructure와 systems design이 다시 붙는다**
   - long-horizon coding agent는 이제 prompt 기술만이 아니라 filesystem/process state 관리의 문제이기도 하다.

## 기존 지식과의 연결

- [[patterns/safe-tool-calling-sandbox]]
  - 샌드박스를 "가짜 방"에서 한 단계 더 발전시켜 **branchable execution substrate** 로 본다.
- [[concepts/harness-engineering]]
  - 하네스가 prompt+policy 계층뿐 아니라 **runtime systems layer** 까지 내려간다는 증거다.
- [[concepts/llm-evaluation]]
  - search depth와 rollback budget이 평가 성능에 영향을 줄 수 있으므로, 앞으로 coding-agent benchmark는 sandbox reset cost도 암묵 변수로 볼 필요가 있다.

## 한계 / 메모

- abstract 기준 정리라 SWE-bench에서의 최종 성능 향상 폭, baseline 비교, memory overhead는 본문 확인이 더 필요하다.
- OS 수준 구현이므로 일반 애플리케이션 팀이 바로 재현하기보다는, managed sandbox나 specialized infra에 먼저 스며들 가능성이 크다.
