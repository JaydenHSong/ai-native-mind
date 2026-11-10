---
title: "OpenAI, AI가 수학·컴퓨터과학·물리학 난제 3건 생산했다고 발표"
category: concepts
tags: [openai, ai-science, mathematics, complexity-theory, physics, lean, verification]
created: 2026-10-27
updated: 2026-10-27
sources:
  - "raw/articles/2026-10-27-openai-ai-science-three-discoveries.md"
related:
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/claude-quantum-circuit-discovery]]"
  - "[[concepts/llm-evaluation]]"
status: draft
confidence: high
---

# OpenAI, AI가 수학·컴퓨터과학·물리학 난제 3건 생산했다고 발표

## 쉽게 읽기

**비유**: AI가 논문 세 편을 써냈는데, OpenAI는 "이건 완성된 논문이 아니라 원자료"라고 선을 그었다. 수학은 그대로 공개하고, 컴퓨터과학은 외부 팀과 함께 검증하고, 물리학은 아예 공개를 미뤘다 — 같은 AI 결과물인데 공개 방식이 세 가지로 갈린 이유는, 각 분야가 "검증을 어떻게 신뢰하는가"가 다르기 때문이다.

| 용어 | 풀이 |
|------|------|
| **Lean** | 컴퓨터가 증명을 기계적으로 검사해주는 증명 보조 도구 |
| **ETH** | 3-SAT이 준지수 시간에 풀리지 않는다는 계산 복잡도 가설 |
| **Kakeya 추측** | 모든 방향의 단위 선분을 포함하는 집합의 크기에 관한 조화해석학 문제 |
| **질량 간격** | Yang-Mills 이론에 양의 질량 간격이 존재한다는 Millennium Prize 요건 |

## 한줄 정의

2026-10-26 OpenAI 내부 모델이 생산했다고 발표한 3개 연구 결과 — local smoothing 증명·ETH 반증·4차원 양자장론 존재 증명, 모두 독립 검증 전이며 공개 방식이 분야별로 다름.

## 핵심 내용

- **수학**: 전 차원 local smoothing 추측 증명(1991년 Sogge 제안; 2차원은 2019년 해결). 새로운 보조 편미분방정식에 기반하며 Kakeya·Stein restriction 추측도 함께 해결한다고 주장. AI 산출 10-18, Lean 형식화 10-19. 산출물은 그대로 공개, 설명은 연구자 자율.
- **컴퓨터과학**: ETH 반증 주장 — 3-SAT이 준지수 시간에 풀리지 않는다는 가설(수백 편의 조건부 난이도 결과의 전제)을 거짓이라고 한다. AI 산출 10-16, Lean 형식화 10-17. 가설 제안자 Impagliazzo·Paturi와 Ryan Williams가 이끄는 그룹이 외부 검증을 주도하고, 산출물은 즉시 공개됐다.
- **물리학**: 4차원 상호작용 양자장론 존재 증명 — QCD와 순수 Yang-Mills 포함, 표준모형 통일 완성 주장. Yang-Mills 증명 9-09, QCD 9-18, Yang-Mills Lean 형식화 10-16(QCD 형식화 언급 없음). David Gross 그룹이 주도하되 그룹 요청으로 AI 산출물은 보류하고 연구자가 직접 논문화한다.
- **공개 방식**: 세 shepherd가 서로 다른 방식을 권고했고 OpenAI는 각각 따랐다. 참여자는 무급·자발적, NDA 없음, OpenAI는 학술 크레딧을 구하지 않는다. 10-06 수학 산출물 공개가 이번 방식의 선례다.

## 왜 중요한가 (1인 개발자 관점)

1. **검증이 곧 제품이다**: AI가 결과를 "생산"하는 시대에, 가치는 생성 속도가 아니라 검증 구조(Len 형식화 + 외부 전문가 그룹)에 있다 — 1인 개발자의 AI 활용법도 마찬가지다.
2. **분야별 신뢰 문법**: 수학은 공개, 컴퓨터과학은 협력 검증, 물리학은 보류 — 같은 기술이라도 도메인의 신뢰 관행에 맞춰 공개 방식을 달리해야 한다는 교훈.
3. **에이전트 과학 발견의 정점**: 위키의 agent-scientific-discovery 패턴이 순수 이론 과학까지 확장됐다 — "발견 파이프라인"이 실험실이 아니라 증명·이론으로 들어온 사례.

## 한계 (명시)

- 3건 모두 독립 검증·동료심사 전이며, OpenAI 발표와 2차 보도가 주된 출처다.
- ETH 반증이 성립해도 P vs NP를 해결하지 않으며 일상 소프트웨어를 빠르게 만들지 않는다.
- 순수 Yang-Mills 존재만으로는 Clay Millennium Prize의 질량 간격 요건을 충족하지 못해 상 대상이 아니다.
- QCD 증명의 Lean 형식화 여부는 발표 기준 언급되지 않았다.
