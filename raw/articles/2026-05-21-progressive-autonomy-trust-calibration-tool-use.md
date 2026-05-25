---
title: "Progressive Autonomy as Preference Learning: A Formalization of Trust Calibration for Agentic Tool Use (arXiv 2605.19151)"
source_url: "https://arxiv.org/abs/2605.19151"
source_type: "arxiv-paper"
authors: ["Ou, Changkun"]
published: 2026-05-18
fetched: 2026-05-21
tags: [tool-use, safety, hitl, trust-calibration, autonomy, preference-learning, policy-gateway, arxiv]
status: ingested
---

# Progressive Autonomy as Preference Learning: A Formalization of Trust Calibration for Agentic Tool Use

> arXiv:2605.19151. agent action을 바로 실행할지, 인간 승인으로 넘길지를 **선호 학습(preference learning)** 문제로 바꿔 trust calibration을 formalize한다.

## 메타

- **Title**: Progressive Autonomy as Preference Learning: A Formalization of Trust Calibration for Agentic Tool Use
- **Author**: Changkun Ou
- **Link**: <https://arxiv.org/abs/2605.19151>
- **Focus**: HITL, trust calibration, allow/block/ask gateway, uncertainty-based escalation

## 한 줄 요약

**"HITL은 모든 위험 행동 앞에서 무조건 사람 버튼을 누르게 하는 것이 아니라, 승인 여부가 가장 불확실한 영역만 사람에게 넘기도록 점진적으로 학습될 수 있다."**

## 핵심 주장

### 1) trust calibration을 preference-learning 문제로 볼 수 있다

논문은 agentic tool use의 핵심 질문을 이렇게 다시 쓴다.

- 어떤 action은 **자율 실행** 가능하다
- 어떤 action은 **항상 차단** 해야 한다
- 어떤 action은 **사람 승인 요청** 이 필요하다

즉 policy gateway의 목적은 단순 분류가 아니라 **allow / block / ask** 세 영역을 배우는 것이다.

### 2) binary approve/deny feedback만으로 latent human risk tolerance를 추정한다

저자 설정에서 gateway는

- 인간의 latent **risk-tolerance function** 에 대한 Gaussian-process posterior를 유지하고
- 인간의 **approve / deny** 피드백을 probit likelihood로 관측한다
- 승인 여부가 가장 **불확실한 지점** 에서만 escalates 한다

이 framing은 HITL을 static rule이 아니라 **uncertainty-aware active learning** 으로 바꾼다.

### 3) Preferential Bayesian Optimization과 구조적으로 연결된다

논문에 따르면 이 문제는 **Preferential Bayesian Optimization** 과 구조적으로 동형이다.

- inference machinery를 재사용할 수 있고
- uncertainty-targeted querying 덕분에 sample-efficient하며
- 목표는 optimum 탐색이 아니라 **행동 공간을 안전 구역으로 분할** 하는 데 있다

즉 tool approval은 UI 버튼이 아니라, preference learning이 붙은 **policy acquisition loop** 가 된다.

## 기여점

1. trust calibration을 추상 윤리 논의가 아니라 **정식화 가능한 학습 문제** 로 내림
2. allow / block / ask 세 영역으로 정책 문제를 재구성
3. 인간 피드백을 무작정 많이 받는 대신 **가장 불확실한 행동만 escalates** 하는 원리 제시
4. HITL을 static guardrail에서 **progressive autonomy** 로 바꾸는 이론적 발판 제공

## 실무적 시사점

### 1) 승인 게이트는 규칙표만이 아니라 학습 가능한 경계면이다

실무에서 "이 명령은 무조건 승인" 식 규칙은 필요하지만, 장기적으로는 action class별 승인 로그를 모아 **risk boundary** 를 업데이트할 수 있다.

### 2) 사람 시간을 가장 애매한 행동에 집중시킬 수 있다

모든 action을 승인받게 하면 병목이 되고, 모두 자동화하면 사고가 난다. 이 논문은 그 중간을 **uncertainty-based escalation** 으로 설명한다.

### 3) 안전한 자율성 확대의 기준을 만들 수 있다

점진적 자율화는 막연한 신뢰가 아니라, 어떤 action 영역이 **충분히 안정적으로 승인되는지** 를 추적하며 확장해야 한다.

## 기존 지식과의 연결

- [[patterns/safe-tool-calling-sandbox]]: 기존 3단계 방어선 중 HITL을 **정적 승인** 에서 **학습형 policy gateway** 로 확장한다.
- [[concepts/tool-use]]: 도구 호출은 스키마만으로 끝나지 않고, 호출 직전 **자율성 수준 결정기** 가 붙을 수 있음을 보여 준다.
- [[concepts/agent-supply-chain-security]]: 위험 action 분류를 allow/block/ask로 나누면 security guardrail과 usability 사이 경계를 더 세밀하게 다룰 수 있다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- abstract만으로는 실제 kernel, feature engineering, 초기 prior 설정의 운영 난이도는 아직 알 수 없다.
- 후속 정독 시 action feature space를 어떻게 정의하는지 확인 필요.
