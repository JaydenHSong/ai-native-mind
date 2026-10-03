---
title: "Reasoning Extraction Attack"
category: concepts
tags: [reasoning-extraction, model-theft, distillation, moonshot-ai, openai, ip-security, china]
created: 2026-10-02
updated: 2026-10-02
sources:
  - "raw/articles/2026-10-02-openai-moonshot-reasoning-extraction.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/agent-attribution]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Reasoning Extraction Attack

## 쉽게 읽기

**비유**: 지금까지 모델 도둑질은 "설계도를 훔치는 것"(가중치 탈취)이었다. 이제는 **"설계자의 생각하는 방식을 훔치는 것"** — 모델이 문제를 풀 때 거치는 숨겨진 추론 과정을 빼내 자기 모델에 이식하는 공격.

| 용어 | 풀이 |
|------|------|
| **Hidden reasoning** | 모델이 최종 답변을 내놓기 전에 거치는 **내부 추론 과정** (체인과정, 중간 단계) |
| **Reasoning extraction** | 이 숨겨진 추론 과정을 **추출·수집**해 증류(distillation)나 복제에 쓰는 공격 |

## 한줄 정의

모델 가중치가 아니라 모델의 **숨겨진 추론 과정(reasoning trace)** 자체를 표적으로 삼는 추출 공격 — "모델을 만드는 경쟁이 아니라, 모델이 어떻게 생각하는지를 지키는 경쟁".

## 핵심 내용 (2026-10-02, OpenAI 공개)

- OpenAI가 모델의 숨겨진 추론 과정 추출을 노린 **조직적 시도**를 차단했다고 공개.
- 활동의 일부 요소가 **Moonshot AI와 연관된 개인들**과 연결됨.
- 추론 과정(reasoning trace)은 모델 가중치만큼이나 핵심 IP — distillation/추출 공격의 표적이 되는 "생각의 방식" 자체.
- 중국 랩(Moonshot) 연관 귀속은 지정학적 기술 경쟁 구도와 맞물림. 공개된 세부 기법·규모는 제한적.

## 왜 중요한가 (1인 개발자 관점)

1. **IP의 경계 이동**: 지키는 대상이 "가중치 파일"에서 "추론 과정"으로 확장. API로 노출되는 reasoning summary·chain-of-thought 흔적도 유출 표면.
2. **증류 공격의 고도화**: 단순 출력 모방이 아니라 **추론 패턴 자체의 이식** — 방어 측면에서 "답을 안 주는 것"만으로는 부족.
3. **지정학적 귀속**: [[concepts/agent-attribution]]의 "전술 일치 ≠ 귀속 확정" 원칙과 같은 렌즈로 봐야 함 — OpenAI의 귀속 주장도 독립 검증 전에는 단정 금지.

## 한계 (명시)

- OpenAI 공개 기반 — 세부 기법·규모·독립 검증 미공개 → confidence **medium**.
- Sonnet 5.5의 "reasoning-extraction(증류 공격) 차단 분류기"(9/29)와 같은 위협을 겨냥 — 클로즈드 랩들이 동시에 같은 전선을 보고 있다는 신호.

## 관련 개념

- [[concepts/agent-supply-chain-security]] — 지식·추론의 공급망: 9/30 GLM-5.3 추론 선채움 붕괴와 같은 "추론 과정" 공격 표면
- [[concepts/agent-attribution]] — Moonshot 연관 귀속 주장의 검증 원칙
- [[comparisons/frontier-lab-economics]] — 중국 랩과의 기술 경쟁 구도

## 참고 소스

- [OpenAI, Moonshot AI 연관 세력의 모델 추론 추출 시도 차단](raw/articles/2026-10-02-openai-moonshot-reasoning-extraction.md)
