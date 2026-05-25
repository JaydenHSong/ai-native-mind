---
title: "Fine-tuning vs Prompting"
category: comparisons
tags: [fine-tuning, prompting, rag, llm, decision-guide]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-fine-tuning-vs-prompting.md"
related:
  - "[[concepts/prompt-engineering]]"
  - "[[concepts/context-engineering]]"
  - "[[concepts/rag]]"
status: active
confidence: high
---

# Fine-tuning vs Prompting

## 쉽게 읽기

**프롬프팅**은 모델 가중치는 건드리지 않고 **말(지시·예시)** 로 행동을 바꾼다. **파인튜닝**은 “시험지 더 풀게 하기”처럼 모델 자체를 **추가 학습**시켜 습관을 박아 넣는 쪽에 가깝다. 보통은 **프롬프트로 한계를 만난 뒤**에만 파인튜닝을 고른다.

| 용어 | 풀이 |
|------|------|
| **Fine-tuning** | 특정 데이터로 모델을 **조금 더 훈련** |
| **Prompting** | 질문·규칙·예시로 **출력 스타일** 조절 |
| **Ceiling** | 프롬프트만으로는 **더 이상 안 오르는 한계** |

## 핵심 원칙

> **"Start with prompting. Fine-tune only when prompting hits a ceiling."**

> "Most people reach for fine-tuning too early."

## 비교표

| 기준 | Prompting | Fine-tuning |
|------|-----------|------------|
| **비용** | 저렴 | 고비용 (GPU, 시간) |
| **속도** | 즉시 | 며칠-주 |
| **유연성** | 높음 | 고정됨 |
| **지식 주입** | 약함 | 강함 |
| **행동 변경** | 약함 | 강함 |
| **데이터 필요** | 없음/적음 | 1000+ 예시 |
| **스케일 경제** | 나쁨 | 좋음 |

## 언제 Prompting만 써도 되나

### ✅ Prompting으로 충분
- 일반적인 작업 (분류, 추출, 요약)
- 도메인 데이터가 적음
- 빠른 반복 필요
- GPU 리소스 없음
- **행동이 아니라 지식 부족이 문제**

### 2026년 Prompting은 강력함
- Few-shot examples
- Chain-of-thought
- Structured system prompts
- Self-consistency
- ReAct reasoning
- → 대부분 fine-tuning보다 더 나은 결과

## 언제 Fine-tuning이 필요한가

### ✅ Fine-tuning이 답
- **일관된 스타일/톤** 필요
- **도메인 특화 추론** (의료, 법률, 금융)
- **특정 커뮤니케이션 패턴**
- **Prompting의 한계 도달**
- 대용량 학습 데이터 보유
- 스케일 경제가 정당화

### 핵심 질문
> "문제가 **행동**(behavior)인가, **지식**(knowledge)인가?"

- 지식 부족 → [[concepts/rag|RAG]] 사용
- 행동 문제 → Fine-tuning

## 결정 트리

```
Q1: 결과가 만족스러운가?
  Yes → Prompting 유지

Q2: 지식/사실 부족인가?
  Yes → RAG 추가
  No → Q3

Q3: 행동/스타일 문제인가?
  Yes → Q4
  No → 프롬프트 개선

Q4: 1000+ 품질 예시 있는가?
  No → 예시부터 수집
  Yes → Q5

Q5: 스케일이 충분한가?
  Yes → Fine-tuning 고려
  No → 프롬프트 + Few-shot
```

## 2026 하이브리드 패턴 (Best Practice)

```
Retrieval (RAG)    → 사실 (Facts)
Fine-tuning        → 스타일, 정책, 의사결정 행동
Prompting          → 작업 지시, 맥락
```

세 가지를 조합하여 사용.

## Fine-tuning 종류

| 방법 | 설명 | 비용 |
|------|------|------|
| **Full fine-tuning** | 모든 파라미터 업데이트 | 매우 비쌈 |
| **LoRA** | 저순위 어댑터만 학습 | 중간 |
| **QLoRA** | 양자화 + LoRA | 저렴 |
| **DPO** | 선호 데이터 기반 | 중간 |

## 경제학 (왜 Fine-tuning이 매력적일 수 있나)

대규모 프로덕션에서:
- Fine-tuned 소형 모델 < 대형 API 모델 (비용)
- 프롬프트 짧아짐 → 토큰 감소
- 스케일에서 수치 역전
- **1일 100만+ 요청 수준에서 고려할 만함**

## 1인 개발자에게

> **대부분 Fine-tuning 불필요.**

- Prompting + RAG + 좋은 CLAUDE.md로 해결 가능
- Fine-tuning은 수요가 검증되고 스케일이 있을 때
- 시간 투자 대비 효과 낮음 (초기 단계)
- 검증 단계에서는 Claude/GPT API면 충분

## 관련 개념

- [[concepts/prompt-engineering]] — 1세대 접근
- [[concepts/context-engineering]] — 2세대 접근
- [[concepts/rag]] — 지식 부족 문제 해결

## 참고 소스

- [Fine-tuning vs Prompting 리서치](raw/notes/2026-04-09-fine-tuning-vs-prompting.md)
- [Fine Tuning AI Models in 2026 (Gauraw)](https://www.gauraw.com/fine-tuning-llm-lora-dpo-guide-2026/)
- [RAG vs Fine-Tuning (Umesh Malik)](https://umesh-malik.com/blog/rag-vs-fine-tuning-llms-2026)
