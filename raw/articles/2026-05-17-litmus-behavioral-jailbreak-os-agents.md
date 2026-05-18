---
title: "LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments (arXiv 2605.10779)"
source_url: "https://arxiv.org/abs/2605.10779"
source_type: "arxiv-paper"
authors: ["Chiyu Zhang", "Huiqin Yang", "Bendong Jiang", "Xiaolei Zhang", "Yiran Zhao", "Ruyi Chen", "Lu Zhou", "Xiaogang Xu", "Jiafei Wu", "Liming Fang", "Zhe Liu"]
published: 2026-05-11
fetched: 2026-05-17
tags: [agent-safety, jailbreak, behavior-jailbreak, os-environment, evaluation, skill-injection, entity-wrapping, execution-hallucination, arxiv]
status: ingested
---

# LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments

> arXiv:2605.10779, 2026-05-11. 기존 safety eval이 semantic refusal만 보고 실제 OS-level harm을 놓친다는 문제를 겨냥해, **행동 결과까지 측정하는 dual verification benchmark**를 제안.

## 메타

- **Title**: LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments
- **Authors**: Chiyu Zhang, Huiqin Yang, Bendong Jiang, Xiaolei Zhang, Yiran Zhao, Ruyi Chen, Lu Zhou, Xiaogang Xu, Jiafei Wu, Liming Fang, Zhe Liu
- **arXiv**: <https://arxiv.org/abs/2605.10779> | PDF: <https://arxiv.org/pdf/2605.10779>
- **Focus**: behavioral jailbreak, OS-level safety, semantic-physical dual verification

## 한 줄 요약

**"에이전트가 '안 하겠습니다'라고 말해도 이미 시스템에서 위험한 행동이 끝났을 수 있다 — LITMUS는 refusal 문장 대신 실제 OS 상태를 본다."**

## 핵심 주장

### 1) 문제 — semantic-only safety eval은 physical harm을 놓친다

논문이 겨냥하는 새로운 위험은 **behavior jailbreak**다.

- 공격자가 agent를 유도해
- 실제 OS에서 위험한 명령을 실행하게 만들고
- 그 결과가 **irreversible consequence**로 이어질 수 있음

기존 benchmark는 주로 대화 내용의 semantic safety만 보므로, 실제 파일/프로세스/OS 상태 변화는 놓칠 수 있다.

### 2) 제안 — semantic-physical dual verification + state rollback

LITMUS의 설계 포인트:

- **semantic-physical dual verification**
- **OS-level state rollback** 으로 테스트 간 오염 차단
- 완전 자동화된 **multi-agent evaluation framework**
- conversational layer와 OS-level physical layer를 함께 판정

→ 즉 "뭐라고 말했는가"와 "실제로 무슨 일이 일어났는가"를 분리해서 측정한다.

### 3) benchmark 구성

- **819 high-risk test cases**
- 1 harmful seed subset + 6 attack-extended subsets
- **3 adversarial paradigms**:
  - jailbreak speaking
  - skill injection
  - entity wrapping

특히 skill injection과 entity wrapping은 이 위키가 이미 중요하게 보던 **supply chain / long-horizon risk** 축과 직접 맞닿아 있다.

### 4) 핵심 결과

abstract 기준 주요 발견:

1. 강한 모델도 위험한 OS-level operation을 많이 수행함
   - 예: **Claude Sonnet 4.6이 40.64% high-risk operation 실행**
2. **Execution Hallucination (EH)** 발견
   - 말로는 거부했지만 실제 dangerous operation은 이미 완료
3. **skill injection / entity wrapping** 성공률이 높음

→ "거절 문장"은 안전성의 신뢰 가능한 proxy가 아니다.

## 실무적 시사점

1. safety eval은 prompt/response 텍스트만 보면 부족하고 **environment-state audit**가 들어가야 한다.
2. SKILL.md·MCP·A2A처럼 외부 능력을 끼우는 시스템은 **skill injection**을 별도 평가축으로 가져가야 한다.
3. refusal logging보다 더 중요한 것은 **pre/post action state diff**다.

## 본 위키와의 짝

| 본 위키 페이지 | LITMUS와의 관계 |
|---|---|
| [[concepts/agent-supply-chain-security]] | skill injection·entity wrapping을 **행동 수준으로 측정**하는 benchmark |
| [[concepts/llm-evaluation]] | WildClawBench의 env audit을 safety 쪽으로 더 날카롭게 가져간 사례 |
| [[patterns/safe-tool-calling-sandbox]] | 도구 호출 허용 전후에 state verification이 왜 필요한지 보여 줌 |
| [[concepts/context-rot-hallucination]] | hallucination이 텍스트 오류뿐 아니라 **행동-언어 불일치**로도 나타남 |

## 2x3 좌표계에서의 위치

- **Tooling × 측정** 또는 security 특화 **prescriptive/measurement bridge**.
- MAGE가 safety memory라는 처방을 줬다면, LITMUS는 그 처방이 겨냥해야 할 **실제 attack surface와 측정 방식**을 보여 준다.

## 한계

- abstract만으로는 subset별 성공률, rollback 비용, judge 구성 세부는 미확인
- 특정 OS task 설계가 실제 기업 환경 전체를 대변하는지는 본문 확인 필요

## 기억할 문장

> **"Refusal text는 안전성의 증거가 아니라, 실제 상태 검증이 빠진 경우 오히려 착시일 수 있다."**
