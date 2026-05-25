---
title: "Formal Skill: Programmable Runtime Skills for Efficient and Accurate LLM Agents (arXiv 2605.19604)"
source_url: "https://arxiv.org/abs/2605.19604"
source_type: "arxiv-paper"
authors: ["Zhang, Xi", "Gao, Meijun", "Zhao, Yuntian", "Tan, Xinyu", "Yao, Yilun", "Wang, Feiyu", "Wang, Yanshu", "Dingsiyi", "Yang, Tong"]
published: 2026-05-19
fetched: 2026-05-21
tags: [tool-use, skills, runtime-interface, formal-skill, mcp, policy-hooks, fairyclaw, arxiv]
status: ingested
---

# Formal Skill: Programmable Runtime Skills for Efficient and Accurate LLM Agents

> arXiv:2605.19604. 긴 Markdown skill 문서를 넘기는 방식 대신, **JSON metadata + action schema + executor + hook logic + skill-local state** 를 갖춘 runtime-native skill abstraction을 제안한다.

## 메타

- **Title**: Formal Skill: Programmable Runtime Skills for Efficient and Accurate LLM Agents
- **Authors**: Xi Zhang · Meijun Gao · Yuntian Zhao · Xinyu Tan · Yilun Yao · Feiyu Wang · Yanshu Wang · Dingsiyi · Tong Yang
- **Link**: <https://arxiv.org/abs/2605.19604>
- **Focus**: runtime-native skills, executable state machine, hook-governed policies, token efficiency

## 한 줄 요약

**"skill은 설명 문서가 아니라, 상태와 훅과 실행기를 가진 작은 런타임 객체가 되어야 한다."**

## 핵심 주장

### 1) 기존 skill은 너무 비형식적이다

논문은 현재 agent skill 생태계를 이렇게 비판한다.

- Markdown skill / instruction pack은 절차를 **긴 자연어 문서** 로 담는다
- function calling, MCP server, framework tool은 **개별 action** 만 구조화한다
- workflow state, policy enforcement, completion discipline은 여전히 skill 밖에 남는다

즉 reusable capability가 문서와 함수 사이 어딘가에 흩어져 있다.

### 2) Formal Skill은 runtime-native abstraction이다

저자들이 제안하는 Formal Skill의 구성은 다음과 같다.

- **JSON metadata**
- **action schemas**
- **reliable Python executors**
- **hook-governed control logic**
- **Formal Skill routing**
- **skill-local runtime state**

핵심은 procedure를 prompt text에서 떼어내 **executable state machine + policy object** 로 내린다는 점이다.

### 3) enforceable control surface를 제공한다

Formal Skill은 reusable procedure를

- repeated prompt text
- ad-hoc instruction following

대신

- executable transitions
- hook-based policy enforcement
- local state transitions

으로 바꾼다. 그래서 skill이 단순 설명서가 아니라 **실행 가능하고 감사 가능한 제어 표면** 이 된다.

### 4) FairyClaw runtime으로 구현했고, Harness-Bench에서 강하다

논문은 이 추상을 **FairyClaw** 라는 event-driven runtime으로 구현했다고 말한다.

- executable
- observable
- composable

한 Formal Skill을 조합 가능하게 만들고, Harness-Bench에서 **competitive average score + substantially fewer tokens** 를 보고한다. 특히 Formal Skill의 역할이 큰 task에서 더 강하다고 주장한다.

## 기여점

1. skill을 문서형 지식이 아니라 **runtime-native executable abstraction** 으로 재정의
2. schema와 executor 사이에 **hook policy + local state** 를 집어넣어 completion discipline을 skill 안으로 끌어들임
3. skill-local state를 명시해 workflow 상태를 prompt 밖 구조로 다룸
4. FairyClaw를 통해 executable·observable·composable runtime으로 구현

## 실무적 시사점

### 1) `SKILL.md`를 전부 읽히는 방식은 점점 한계가 크다

반복 절차는 prose보다 **state machine + schema + hook** 으로 옮길수록 token 낭비와 해석 오차를 줄일 수 있다.

### 2) tool과 skill 사이 중간층이 필요하다

함수 하나는 너무 작고, 긴 지침 문서는 너무 크다. Formal Skill은 그 중간에 있는 **작업 단위 capability object** 를 제시한다.

### 3) runtime state를 skill 안에 두면 장기 작업이 쉬워진다

completion discipline, policy enforcement, local progress tracking을 skill 내부로 가져오면, 상위 orchestrator prompt가 매번 모든 절차를 기억하지 않아도 된다.

## 기존 지식과의 연결

- [[concepts/tool-use]]: SkillSmith가 skill을 **compiled boundary interface** 로 압축했다면, Formal Skill은 그것을 한 단계 더 밀어 **stateful executable skill object** 로 만든다.
- [[concepts/harness-engineering]]: 하네스의 policy·state·observability 책임 일부가 개별 skill 객체 안으로 내려올 수 있음을 보여 준다.
- [[concepts/mcp]]: MCP가 tool transport 표준이라면, Formal Skill은 그 위에서 **절차와 상태를 가진 상위 capability layer** 로 읽을 수 있다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- Harness-Bench의 정확한 task 분포와 토큰 절감 폭은 abstract만으로 확인되지 않는다.
- 후속 정독 시 FairyClaw의 hook 모델이 기존 MCP / function-calling stack과 어떻게 결합되는지 확인 필요.
