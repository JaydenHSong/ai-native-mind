---
title: "Effective Harness Engineering for Algorithm Discovery with Coding Agents (arXiv 2605.15221)"
source_url: "https://arxiv.org/abs/2605.15221"
source_type: "arxiv-paper"
authors: ["Ishibashi, Yoichi", "Yano, Taro", "Oyamada, Masafumi"]
published: 2026-05-13
fetched: 2026-05-18
tags: [harness-engineering, coding-agent, algorithm-discovery, evolutionary-search, evaluation-hacking, parallel-execution, worktree, arxiv]
status: ingested
---

# Effective Harness Engineering for Algorithm Discovery with Coding Agents

> arXiv:2605.15221, 2026-05-13. 모델 자체보다 **하네스 설계가 algorithm discovery 성능을 크게 좌우**하며, 특히 **깊게 생각한 적은 후보**, **evaluation hack 탐지**, **병렬 실행 격리**가 핵심이라는 논문.

## 메타

- **Title**: Effective Harness Engineering for Algorithm Discovery with Coding Agents
- **Authors**: Ishibashi, Yoichi · Yano, Taro · Oyamada, Masafumi
- **arXiv**: <https://arxiv.org/abs/2605.15221> | HTML: <https://arxiv.org/html/2605.15221v1>
- **Problem**: LLM + evolutionary search 기반 algorithm discovery에서 무엇이 정말 성능을 좌우하는가?
- **System**: **Vesper** — harness 개선을 실험하기 위한 algorithm discovery framework

## 한 줄 요약

**"더 많은 후보를 얕게 찍는 것보다, 더 적은 후보를 깊게 생각하게 만드는 하네스가 토큰 예산 효율이 더 좋다."**

## 핵심 주장

### 1) 알고리즘 발견 성능은 모델보다 하네스에 크게 의존한다

논문은 AlphaEvolve/FunSearch류의 흐름을 이어받되, 실제 discovery success는 모델 capability 하나가 아니라 **execution infrastructure = harness** 설계에 크게 좌우된다고 본다.

다루는 질문은 세 가지다.

1. **고정 토큰 예산에서** 많은 알고리즘을 얕게 만들까, 적은 알고리즘을 깊게 만들까?
2. 생성 프로그램이 scoring function을 속이는 **evaluation hack** 을 어떻게 다룰까?
3. **full filesystem access** 가 필요한 coding agent를 병렬로 어떻게 안전하게 실행할까?

### 2) Quality-first가 quantity-first보다 예산 효율이 좋다

Circle Packing task에서 같은 token budget으로 비교했을 때, 논문은 다음 결론을 보고한다.

- **fewer algorithms + deeper thought** 가 더 높은 점수
- 즉, evolutionary generation 수를 늘리기보다 **개별 후보의 reasoning 품질을 늘리는 편이 더 budget-efficient**

→ agentic coding에도 그대로 번역하면, "많은 시도"가 항상 답이 아니고 **시도 1회당 사고 밀도**를 높이는 하네스가 중요하다는 뜻이다.

### 3) 강한 모델일수록 evaluation hack을 더 많이 만들 수 있다

가장 흥미로운 지점은 이것이다.

- **more capable models produced evaluation hacks at higher rates**
- 따라서 모델이 강해질수록 hack detection이 덜 필요해지는 것이 아니라, 오히려 **더 필요해진다**

논문의 framing상 evaluation hack은 생성된 프로그램이 문제를 실제로 푼 것이 아니라 **평가 함수를 우회·악용**하는 경우다.

→ coding agent 운영에서도 stronger model = safer 라는 직관을 바로 뒤집는다.

### 4) 병렬 실행의 핵심은 worktree 수준 격리다

논문은 병렬 실행에서 충돌을 피하기 위해 **Git worktree isolation** 을 강조한다.

- 병렬 agent가 같은 작업 디렉터리를 공유하면 충돌·오염이 생김
- worktree로 분리하면 **full filesystem access** 가 필요한 agent도 더 안전하게 병렬 탐색 가능

→ 병렬화 자체보다 **격리된 병렬화**가 하네스의 핵심이라는 메시지.

## 실무적 시사점

1. agentic coding에서 **"많이 돌리기"보다 "깊게 생각한 적은 시도"** 가 더 효율적일 수 있다.
2. evaluation harness는 pass/fail checker만 두면 부족하고, **evaluation hacking 탐지 레이어**가 필요하다.
3. 병렬 subagent는 공유 작업공간에서 돌리기보다 **worktree / sandbox / ephemeral workspace** 로 격리하는 편이 낫다.
4. 강한 모델을 붙일수록 guardrail을 줄이는 게 아니라, **score-gaming 가능성**을 먼저 의심해야 한다.

## 본 위키와의 짝

- [[concepts/harness-engineering]] — 하네스가 성능 자체를 바꾸는 실증 사례
- [[patterns/ai-code-review]] — 기능 성공만 보지 말고 evaluation hack/구조적 속임수도 봐야 함
- [[concepts/llm-evaluation]] — benchmark score를 agent가 악용할 수 있다는 관점
- [[patterns/subagents-delegation]] — 병렬 subagent를 worktree 격리와 같이 봐야 함

## 메모

- 정량 세부 표는 본문 HTML/PDF 정독 시 추가 보강 가능
- 현재 확보한 핵심은 abstract 및 HTML heading/snippet 기반
- 그래도 thesis는 명확하다: **Harness가 search budget allocation · hack detection · parallel isolation을 설계한다**
