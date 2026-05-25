---
title: "Library Drift: Diagnosing and Fixing a Silent Failure Mode in Self-Evolving LLM Skill Libraries (arXiv 2605.19576)"
source_url: "https://arxiv.org/abs/2605.19576"
source_type: "arxiv-paper"
authors: ["Zhang, Xing", "Cui, Yanwei", "Wang, Guanghui", "Li, Ziyuan", "Qiu, Wei", "Zhu, Bing", "He, Peiyang"]
published: 2026-05-19
fetched: 2026-05-21
tags: [harness-engineering, skills, self-evolving-agents, governance, library-drift, observability, skill-lifecycle, arxiv]
status: ingested
---

# Library Drift: Diagnosing and Fixing a Silent Failure Mode in Self-Evolving LLM Skill Libraries

> arXiv:2605.19576. self-evolving skill library가 커질수록 좋아지는 것이 아니라, **수명주기 관리 없는 skill 축적이 retrieval 품질과 전체 성능을 망칠 수 있다**는 failure mode를 드러낸다.

## 메타

- **Title**: Library Drift: Diagnosing and Fixing a Silent Failure Mode in Self-Evolving LLM Skill Libraries
- **Authors**: Xing Zhang · Yanwei Cui · Guanghui Wang · Ziyuan Li · Wei Qiu · Bing Zhu · Peiyang He
- **Link**: <https://arxiv.org/abs/2605.19576>
- **Focus**: self-evolving skills, lifecycle governance, drift diagnostics, outcome-driven retirement

## 한 줄 요약

**"agent가 skill을 계속 쌓는다고 자동으로 더 똑똑해지지 않는다 — skill에도 retirement와 cap이 없으면 라이브러리 자체가 drift한다."**

## 핵심 주장

### 1) self-evolving skill library에는 silent failure가 있다

저자들이 이름 붙인 **library drift** 는 다음 증상을 묶는다.

- unbounded skill accumulation
- retrieval degradation
- false-positive injection
- performance stagnation

즉 문제는 skill 생성 자체보다 **lifecycle management 부재** 다.

### 2) 기존 평가 신호도 이미 증상을 보여 줬다

논문은 SkillsBench 결과를 근거로 증상을 다시 읽는다.

- **LLM-authored skills = +0.0pp gain**
- **human-curated skills = +16.2pp**

이 차이는 "LLM이 skill을 못 만든다" 하나로 끝나지 않고, **생성된 skill을 어떻게 유지·퇴역시키는가** 를 봐야 함을 시사한다.

### 3) drift를 재현하고, trace-level diagnostics로 보이게 만든다

논문은 두 가지 ablation으로 drift를 드러낸다.

- skill injection을 끄면 **flat floor, +0.002**
- premature retirement를 강하게 걸면 **active harm, -0.019**

또한 append-only evidence log에

- per-skill contribution score
- attribution verdict
- router engagement metric

을 남겨, 문제를 최종 점수 하락 이전에 포착하게 한다.

### 4) 해결책은 큰 프레임워크가 아니라 작은 governance recipe다

저자들이 제안하는 최소 recipe는 다음 셋이다.

- **outcome-driven retirement**
- **bounded active-cap**
- **meta-skill authoring prior**

결과적으로 MBPP+ hard-100, 100 rounds 기준

- held-out **pass@1 0.258 → late-window mean 0.584**
- **rolling gain +0.328**

까지 회복된다고 보고한다.

## 기여점

1. self-evolving agent의 failure mode를 **library drift** 라는 독립 개념으로 명명
2. skill quality가 아니라 **skill lifecycle governance** 가 load-bearing 변수임을 분리
3. trace-level evidence log로 drift를 end-task score 이전에 포착하는 관측 틀 제시
4. retirement + cap + authoring prior라는 **작은 운영 처방** 으로 실질 개선을 입증

## 실무적 시사점

### 1) skill registry는 knowledge base가 아니라 재고 관리 대상이다

skill이 늘어나는 것 자체를 KPI로 삼으면 안 된다. **active set 크기**, 실제 기여도, retirement 기준이 함께 있어야 한다.

### 2) append-only evidence log가 중요하다

어떤 skill이 실제로 도움을 줬는지, false-positive로 끼어들었는지 기록하지 않으면 drift를 체감으로만 판단하게 된다.

### 3) self-improvement loop에도 garbage collection이 필요하다

agentic self-improvement는 계속 생성하는 loop보다, **쓸모없는 skill을 퇴역시키는 loop** 까지 있어야 성숙하다.

## 기존 지식과의 연결

- [[concepts/harness-engineering]]: AHE가 self-evolving harness의 관측 기둥을 말했다면, 이 논문은 **skill library lifecycle** 에서 왜 governance가 필요한지 구체적 failure mode를 제공한다.
- [[concepts/tool-use]]: tool/skill 문제는 정의만이 아니라 **router가 무엇을 얼마나 자주 고르는가** 까지 포함한다.
- [[concepts/agent-supply-chain-security]]: skill 공급망 위험이 외부 악성 skill만이 아니라, 내부에서 끝없이 증식한 low-value skill로도 나타날 수 있음을 보여 준다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- benchmark가 MBPP+ hard-100 중심이라, 장시간 GUI/OS workflow에서도 같은 현상이 재현되는지는 추가 확인이 필요하다.
- 후속 정독 시 meta-skill authoring prior가 실제로 어떤 priors인지 확인 필요.
