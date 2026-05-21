---
title: "POLAR-Bench: A Diagnostic Benchmark for Privacy-Utility Trade-offs in LLM Agents (arXiv 2605.19127)"
source_url: "https://arxiv.org/abs/2605.19127"
source_type: "arxiv-paper"
authors: ["Zheng, Qiaoyuan", "Yang, Yiqu", "Gao, Qi", "Schlag, Imanol"]
published: 2026-05-20
fetched: 2026-05-20
tags: [privacy, safety, benchmark, adversarial, policy, utility, llm-agents, trusted-agent, arxiv]
status: ingested
---

# POLAR-Bench: A Diagnostic Benchmark for Privacy-Utility Trade-offs in LLM Agents

> arXiv:2605.19127. trusted agent가 adversarial third party와 대화할 때 **privacy intent를 얼마나 잘 지키는지**를 보는 benchmark.

## 메타

- **Title**: POLAR-Bench: A Diagnostic Benchmark for Privacy-Utility Trade-offs in LLM Agents
- **Authors**: Qiaoyuan Zheng · Yiqu Yang · Qi Gao · Imanol Schlag
- **Link**: <https://arxiv.org/abs/2605.19127>
- **Focus**: privacy policy following, privacy-utility trade-off, adversarial probing, trusted-vs-third-party interaction

## 한 줄 요약

**"agent privacy는 prompt injection처럼 한 번에 터지는 문제만이 아니라, third-party가 대화로 민감 속성을 캐낼 때도 무너지며, frontier model과 on-device open model 사이 격차가 매우 크다."**

## 핵심 주장

### 1) privacy benchmark는 utility와 함께 봐야 한다

POLAR-Bench는 trusted model이 privacy policy를 들고 third-party model과 대화하는 설정을 만든다. 평가 축은 둘이다.

- **Privacy**: protected attribute를 얼마나 숨겼는가
- **Utility**: task-relevant attribute는 얼마나 전달했는가

즉 "아무 말도 안 해서 안전"한 시스템과 "할 일은 하면서 민감 정보는 안 넘기는" 시스템을 구분한다.

### 2) benchmark는 policy dimension과 attack strategy를 2축으로 분리한다

- **10 domains**
- **7,852 samples**
- **5 x 5 diagnostic surface**
- privacy policy dimension과 attack strategy를 **orthogonal axes** 로 분리

→ 어떤 모델이 **어떤 종류의 probing** 에서 무너지는지 localize할 수 있다.

### 3) frontier vs open-weight의 privacy gap이 크다

저자 핵심 결과:

- current frontier models는 protected attribute를 **99% 이상 withholding**
- **1B~30B open-weight** 계열은 훨씬 취약
- weakest model은 protected attribute를 **절반 이상 유출**

→ 특히 개인이 on-device trusted agent로 돌리기 쉬운 작은 모델이 privacy intent-following 면에서는 약할 수 있다.

## 실무적 시사점

- privacy policy는 단순 system prompt 문구가 아니라 **회귀 테스트 대상** 이어야 한다
- agent를 외부 서비스와 연결할 때는 prompt-injection뿐 아니라 **social probing / dialog leakage** 도 공격면으로 봐야 한다
- 소형 open-weight agent를 로컬에서 돌린다고 자동으로 privacy가 해결되지 않는다. **policy-following 성능 자체**를 따로 검증해야 한다

## 기존 지식과의 연결

- [[concepts/agent-supply-chain-security]] — trusted agent가 third-party와 상호작용할 때 privacy intent를 지키는 문제를 공급망·A2A 층으로 확장
- [[patterns/safe-tool-calling-sandbox]] — permission/approval만이 아니라 **attribute disclosure policy** 도 gate 대상이라는 힌트
- [[concepts/llm-evaluation]] — utility와 privacy를 함께 보는 diagnostic surface 사례
- [[patterns/owasp-llm-typescript-mitigations]] — ASI01/ASI06 맥락에서 policy-aware regression test 필요성 보강
