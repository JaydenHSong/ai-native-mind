---
title: "WeightBench — LLM을 가중치 공간 프로그래머로 평가하는 벤치마크 (11-16)"
source_url: "https://arxivsignals.io/papers/2611.18553"
source_type: "paper"
authors: ["arXiv:2611.18553"]
published: 2026-11-16
fetched: 2026-11-16
tags: [weightbench, benchmark, llm-evaluation, model-weights, arxiv]
status: raw
---

# WeightBench — LLM을 가중치 공간 프로그래머로 평가하는 벤치마크 (11-16)

> arXiv 2611.18553 WeightBench는 LLM이 신경망 가중치를 직접 읽고·고치고·쓰는 능력을 평가하는 벤치마크다. 42개 태스크, 5개 트랙으로 구성되며, 전체 매크로 스코어에서 Claude Opus 5.5(0.535)가 선두, GPT-6.1-sol이 38개 태스크 비교에서 근소하게 앞섰다. 모델이 모델을 고치는 자기개선 시대의 평가 도구다.

## 내용

- **구성**: 42개 태스크, 5개 트랙 — 가중치 읽기·수정·작성, 불가능한 편집 인식, 데이터 없는 압축. LLM의 신경망 가중치 직접 추론 능력을 잰다.
- **결과(전체 42태스크 매크로 스코어)**: Claude Opus 5.5 0.535, Claude Sonnet 5.5 0.466, Claude Haiku 5.5 0.402, DeepSeek v4-flash 0.215.
- **직접 비교(38개 태스크)**: GPT-6.1-sol 0.568 vs Claude Opus 5.5 0.546으로 GPT-6.1-sol이 근소 우위.
- **공개**: 코드 공개됨. arXiv 2611.18553, 2026-11-16 게시.

## 맥락

- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론, WeightBench는 평가 대상을 가중치 공간으로 확장
- [[concepts/semianalysis-gdpx-benchmark]] — SemiAnalysis GDPx, 206개 실무 태스크에 최고 모델도 12.0% (2026-11-03)
- [[concepts/self-improving-ai-risk]] — 자기개선 AI의 통제 상실 리스크, 모델이 가중치를 직접 다룰 수 있다는 능력 자체가 리스크 맥락 (2026-09-30)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 평가 대상 Claude 5.2 세대 (2026-11-09)
