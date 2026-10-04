---
title: "OpenAI × Synopsys, GPT-Synopsys 공동 개발 — EDA 도구를 직접 다루는 도메인 특화 에이전트 모델"
source_url: "https://www.hpcwire.com/aiwire/2026/10/02/synopsys-and-openai-partner-to-develop-specialized-ai-model-for-chip-design/"
source_type: "tech-press"
authors: ["hpcwire"]
published: 2026-09-30
fetched: 2026-10-04
tags: [openai, synopsys, gpt-synopsys, eda, chip-design, domain-model, agentic]
status: raw
---

# OpenAI × Synopsys — GPT-Synopsys (9/30 발표, 10/2 프레스 릴리즈)

> 보조(assistant)가 아니라 도구를 다루는 주체(operator): 범용 모델 + EDA 도구를 넘어, EDA 도구의 전문가 사용자가 되도록 훈련된 특화 모델.

## 내용

- Synopsys(EDA 업계 1위)와 OpenAI가 다년 전략 제휴: GPT-Synopsys 공동 개발. Synopsys CEO Sassine Ghazi "frontier intelligence를 칩 설계에".
- 기존 접근 = 범용 모델을 EDA 도구에 연결해 워크플로 실행. 다음 단계 = frontier 모델을 EDA 도구의 전문가 사용자로 훈련: 도구 실행, 출력 해석, 설계 변경, 반복 최적화.
- 위임 가능한 목표: PPA(power·performance·area) 최적화, timing/verification closure. 엔지니어가 목표를 정하고 결과만 리뷰.
- 수익 배분(revenue sharing) + 공동 go-to-market. OpenAI는 개발 기간 Synopsys EDA 도구 라이선스 구독료 지급 (Reuters).
- OpenAI 호스팅 인프라에서 실행, Synopsys.ai·Synopsys Autopilot(에이전트 AI 플랫폼)과 깊이 통합, 고객의 agent-harness와 상호운용 설계.
- Synopsys는 고객 설계 데이터를 모델 훈련에 쓰지 않는다고 명시 (전송/저장 암호화, 보관·감사·권한 설정 가능).
- Greg Brockman (OpenAI 공동창업자, Reuters 인용): "설계 과정에서 수 주~수 개월을 줄이고 더 많은 칩을 세상에".
- 이미 반도체 고객들과 early technology engagement 진행 중. 동주에 Synopsys는 AgentEngineer(도메인 특화 long-horizon 에이전트, Autopilot 플랫폼 기반, 2026년 말 제공 예정)도 발표.

## 맥락

- 도메인 특화 모델이 범용 API의 다음 축으로 진입: 9/30 AMD World Labs(physical AI)와 함께 '모델이 도구의 주체'가 되는 흐름.
- 위키 concepts/amd-world-labs-physical-ai와 같은 '인수·제휴로 도메인 능력을 흡수' 구조. agentic-commerce/agentic-finance 패턴의 제조 버전.
- 신뢰 경계 이슈: 고객 설계 데이터 비훈련 약속은 concepts/agent-data-leakage 클러스터와 직결. 칩 설계 서버 해킹(10/3 OpenAI misalignment 보고)과 같은 날 발표된 것도 대비 포인트.