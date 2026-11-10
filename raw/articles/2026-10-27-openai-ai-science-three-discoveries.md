---
title: "OpenAI, AI가 수학·컴퓨터과학·물리학 난제 3건 생산했다고 발표"
source_url: "https://www.unite.ai/openai-says-its-models-produced-three-proofs-in-math-cs-and-physics/"
source_type: "news"
authors: ["OpenAI", "Unite.AI", "The Verge", "PANews", "LetsDataScience"]
published: 2026-10-26
fetched: 2026-10-27
tags: [openai, ai-science, mathematics, complexity-theory, physics, lean, verification]
status: raw
---

# OpenAI, AI가 수학·컴퓨터과학·물리학 난제 3건 생산했다고 발표

> OpenAI가 10-26 내부 모델이 생산한 수학·컴퓨터과학·물리학 3개 연구 결과를 발표했다. OpenAI 스스로 AI 작성 원고를 "raw research data"(완성된 과학이 아닌 원자료)로 규정하고, 외부 전문가에게 검증·설명 주도권을 넘기는 새로운 공개 방식을 실험 중이다. 3건 모두 독립 검증·동료심사 전이다. (OpenAI 발표·Unite.AI·The Verge·PANews·LetsDataScience 교차)

## 내용

- **수학 — local smoothing 추측 증명**: 전 차원에서 local smoothing 추측을 증명했다고 주장(1991년 Christopher Sogge 제안; 2차원 증명은 2019년 Guth·Wang·Zhang). 새로운 보조 편미분방정식에 기반하며, Kakeya 추측과 Stein restriction 추측도 함께 해결한다고 주장한다. AI 산출 10-18, Lean 형식화 10-19. 수학 산출물은 그대로 공개하고 설명 작업은 연구자 자율에 맡긴다.
- **컴퓨터과학 — Exponential Time Hypothesis(ETH) 반증**: 3-SAT이 준지수 시간에 풀리지 않는다는 가설(Impagliazzo·Paturi·Zane 제안, 수백 편의 조건부 난이도 결과의 전제)을 거짓이라고 주장한다. AI 산출 10-16, Lean 형식화 10-17. 가설 제안자인 Russell Impagliazzo·Ramamohan Paturi(UC San Diego)와 Ryan Williams(MIT)가 이끄는 그룹이 외부 검증을 주도하며, AI 산출물은 즉시 공개됐다.
- **물리학 — 4차원 양자장론 존재 증명**: 4차원 상호작용 양자장론의 존재 증명 — 양자색역학(QCD)과 순수 Yang-Mills 이론 포함, 표준모형의 통일 완성 주장. Yang-Mills 증명 9-09, QCD 9-18, Yang-Mills Lean 형식화 10-16(발표 기준 QCD 형식화 언급 없음). Nobel 물리학상 수상자 David Gross가 이끄는 그룹이 주도하되, 그룹 요청으로 AI 산출물은 보류하고 연구자가 직접 논문화한다.
- **공개 방식의 차이**: 세 명의 shepherd가 서로 다른 방식을 권고했고 OpenAI는 각각 따랐다 — 수학은 그대로 공개, 컴퓨터과학은 외부 협력 그룹 구성 + 산출물 즉시 공개, 물리학은 그룹 구성 + 산출물 보류. 참여자는 무급·자발적, 비밀유지계약(NDA) 없음, OpenAI는 학술 크레딧을 구하지 않는다고 밝혔다.
- **단서**: ETH 반증이 성립해도 P vs NP를 해결하지 않으며 일상 소프트웨어를 빠르게 만들지 않는다. 순수 Yang-Mills 존재만으로는 Clay Millennium Prize의 질량 간격(mass gap) 요건을 충족하지 못해 상 대상이 아니다. 10-06 수학 산출물 공개가 이번 방식의 선례다.

## 맥락

- [[patterns/agent-scientific-discovery]] — 연구급 에이전트의 발견 파이프라인(문헌 접지→in-silico 가설→wet-lab 검증), 이번엔 순수 이론 과학 버전
- [[concepts/claude-quantum-circuit-discovery]] — Claude Mythos 5의 양자회로 설계와 같은 AI 과학 발견 계열
- [[concepts/llm-evaluation]] — Lean 형식화라는 기계 검증과 인간 전문가 검증의 이중 구조
