---
title: "WeightBench — LLM을 가중치 공간 프로그래머로 평가하는 벤치마크 (11-16)"
category: concepts
tags: [weightbench, benchmark, llm-evaluation, model-weights, arxiv]
created: 2026-11-16
updated: 2026-11-16
sources:
  - "raw/articles/2026-11-16-weightbench-llm-weight-space.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/semianalysis-gdpx-benchmark]]"
  - "[[concepts/self-improving-ai-risk]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: medium
---

# WeightBench — LLM을 가중치 공간 프로그래머로 평가하는 벤치마크 (11-16)

## 쉽게 읽기

**비유**: 보통 시험은 학생에게 문제를 풀게 한다. 그런데 이 시험은 학생에게 "선생님의 뇌를 직접 열어 보고, 고장 난 부분을 찾아서 고쳐 보라"고 한다. AI 모델이 다른 AI 모델의 숫자(가중치)를 직접 읽고 고치고 새로 쓸 수 있는지를 재는 시험이다.

| 용어 | 풀이 |
| **가중치** | AI 모델이 학습하며 저장한 거대한 숫자 표. 모델의 지식과 능력이 이 숫자에 들어 있다 |
| **벤치마크** | 모델의 능력을 재는 표준 시험 |
| **매크로 스코어** | 여러 태스크의 점수를 똑같이 나눠 평균낸 점수 |
| **자기개선** | AI가 스스로를 고쳐서 더 똑똑해지는 것. 통제가 어려워질 수 있어 주의가 필요하다 |

## 한줄 정의

2026-11-16 — arXiv 2611.18553 WeightBench는 LLM이 신경망 가중치를 직접 읽고·고치고·쓰는 능력을 평가하는 벤치마크다. 42개 태스크, 5개 트랙으로 구성되며, 전체 매크로 스코어에서 Claude Opus 5.5(0.535)가 선두, GPT-6.1-sol이 38개 태스크 비교에서 근소하게 앞섰다.

## 핵심 내용

- **구성**: 42개 태스크, 5개 트랙 — 가중치 읽기·수정·작성, 불가능한 편집 인식, 데이터 없는 압축. LLM의 신경망 가중치 직접 추론 능력을 잰다.
- **결과(전체 42태스크 매크로 스코어)**: Claude Opus 5.5 0.535, Claude Sonnet 5.5 0.466, Claude Haiku 5.5 0.402, DeepSeek v4-flash 0.215.
- **직접 비교(38개 태스크)**: GPT-6.1-sol 0.568 vs Claude Opus 5.5 0.546으로 GPT-6.1-sol이 근소 우위.
- **공개**: 코드 공개됨. arXiv 2611.18553, 2026-11-16 게시.

## 왜 중요한가 (1인 개발자 관점)

1. **평가의 대상이 답에서 모델 자체로 넓어졌다**: 지금까지 벤치는 "모델이 문제를 잘 푸는가"를 쟀다. WeightBench는 "모델이 모델을 고칠 수 있는가"를 잰다. 평가 대상이 넓어지면, 에이전트가 할 수 있는 일의 범위도 넓어진다.
2. **자기개선 시대의 눈금자다**: 모델이 모델을 고치는 능력이 커지면, 그 능력을 재는 도구가 먼저 필요하다. 이 벤치는 그 눈금자 역할을 한다. 점수가 0.5 언저리라는 것은 아직 갈 길이 멀다는 뜻이기도 하다.
3. **능력 자체가 리스크 맥락이다**: 가중치를 직접 다룰 수 있다는 능력은, 통제·안전 관점에서도 중요하다. 평가 결과와 리스크 논의를 함께 읽어야 한다.

## 한계 (명시)

- 2026-11-16 게시된 arXiv 프리프린트 기준이며, 동료심사 여부는 원본 파일에 언급되지 않았다.
- 점수는 벤치마크 설계에 따라 달라질 수 있다. 전체 42태스크와 38태스크 비교는 태스크 집합이 달라 점수를 직접 나란히 놓고 비교할 수 없다.
- GPT-6.1-sol의 근소 우위는 38개 태스크 비교 기준이며, 전체 매크로 스코어 선두는 Claude Opus 5.5다.

## 관련 개념

- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론, WeightBench는 평가 대상을 가중치 공간으로 확장
- [[concepts/semianalysis-gdpx-benchmark]] — SemiAnalysis GDPx, 206개 실무 태스크에 최고 모델도 12.0% (2026-11-03)
- [[concepts/self-improving-ai-risk]] — 자기개선 AI의 통제 상실 리스크, 모델이 가중치를 직접 다룰 수 있다는 능력 자체가 리스크 맥락 (2026-09-30)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 평가 대상 Claude 5.2 세대 (2026-11-09)

## 참고 소스

- [WeightBench 원본](raw/articles/2026-11-16-weightbench-llm-weight-space.md)
