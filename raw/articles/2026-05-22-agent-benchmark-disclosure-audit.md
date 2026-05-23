---
title: "What Twelve LLM Agent Benchmark Papers Disclose About Themselves: A Pilot Audit and an Open Scoring Schema (arXiv 2605.21404)"
source_url: "https://arxiv.org/abs/2605.21404"
source_type: "arxiv-paper"
authors: ["Moghadasi, Mahdi Naser", "Ghaderi, Faezeh"]
published: 2026-05-20
fetched: 2026-05-22
tags: [evaluation, benchmark, disclosure, reproducibility, harness-specification, cost-reporting, observability, audit-schema, arxiv]
status: ingested
---

# What Twelve LLM Agent Benchmark Papers Disclose About Themselves: A Pilot Audit and an Open Scoring Schema

> arXiv:2605.21404. 같은 benchmark·같은 model name인데 결과가 왜 다르게 나오는지 설명할 정보가 논문에 거의 없다는 문제를, **benchmark identity / harness specification / inference settings / cost reporting / failure breakdown** 다섯 축 감사로 다룬다.

## 메타

- **Title**: What Twelve LLM Agent Benchmark Papers Disclose About Themselves: A Pilot Audit and an Open Scoring Schema
- **Authors**: Mahdi Naser Moghadasi · Faezeh Ghaderi
- **Link**: <https://arxiv.org/abs/2605.21404>
- **Focus**: disclosure audit, benchmark reproducibility, harness specification, cost transparency, failure breakdown

## 한 줄 요약

**"에이전트 벤치마크의 점수보다 먼저, 그 점수가 어떤 하네스와 어떤 설정에서 나왔는지를 논문이 얼마나 공개하는지 감사해야 한다."**

## 핵심 주장

### 1) agent benchmark 결과는 자주 비교 불가능하다

논문이 출발하는 문제의식은 익숙하다.

- 같은 benchmark
- 같은 model name
- 서로 다른 논문

인데도 결과가 다르다. 문제는 단순 오차가 아니라, **왜 다른지 설명할 scaffold / sampling / subset / evaluator 정보가 빠져 있는 경우가 많다** 는 점이다.

### 2) disclosure audit schema를 제안한다

저자들은 다섯 필드 schema로 papers를 감사한다.

1. **benchmark identity**
2. **harness specification**
3. **inference settings**
4. **cost reporting**
5. **failure breakdown**

핵심은 benchmark 결과의 correctness를 판정하는 게 아니라, **평가 실행을 재구성할 단서가 공개되었는가** 를 보는 데 있다.

### 3) agent benchmark paper의 disclosure score가 낮다

pilot audit 결과:

- **8개 agent benchmark paper 평균 점수 = 0.38 / 1.0**
- **4개 classical static benchmark paper 평균 = 0.66 / 1.0**

가장 큰 격차는 다음 둘이다.

- **cost reporting**: 8개 agent benchmark paper 중 어느 것도 inference cost를 공개하지 않음
- **harness specification**: evaluation environment의 **content-addressed container image** 를 완전히 공개한 논문이 없음

즉 modern agent eval은 task 자체보다도 **runtime disclosure** 가 가장 약한 층이다.

### 4) harness spec이 없으면 재현보다 해석이 먼저 막힌다

이 논문의 중요한 포인트는 reproducibility를 단순 "코드 공개 여부" 로 보지 않는다는 점이다.

- 어떤 scaffold였는가
- 어떤 sampling setting이었는가
- evaluator version이 무엇이었는가
- failure가 어떤 종류였는가
- 비용이 어느 정도였는가

를 모르면, 결과를 재현하기 전에 **결과를 해석하는 일 자체가 막힌다**.

## 기여점

1. agent benchmark paper를 위한 **open disclosure schema** 제안
2. benchmark correctness가 아니라 **run disclosure quality** 를 측정하는 별도 audit layer 제시
3. cost / harness specification / failure breakdown의 심각한 공백을 정량화
4. JSON Schema + codebook + raw scoring sheet 공개 방향 제안

## 실무적 시사점

### 1) benchmark 점수는 하네스 메타데이터 없이는 절반짜리 정보다

모델 이름만 적힌 leaderboard는 실제 운영 의사결정에 너무 약하다. 최소한 harness / evaluator / subset / cost를 함께 봐야 한다.

### 2) 비용 미공개 벤치마크는 실전 판단에 직접 쓰기 어렵다

성능만 공개하고 inference cost가 없으면, solo dev나 production 팀 입장에서는 채택 가능성을 판단하기 어렵다.

### 3) failure breakdown이 없으면 개선 루프가 막힌다

평균 점수만 있고 실패 양상이 없으면, 어떤 센서나 가이드가 필요한지 역으로 설계하기 어렵다.

## 기존 지식과의 연결

- [[concepts/llm-evaluation]]: eval을 scorecard에서 **disclosure audit** 층까지 확장한다.
- [[concepts/harness-engineering]]: benchmark 결과도 결국 특정 harness 위 실행된 것이므로, harness specification 자체가 측정 대상이 된다.
- [[concepts/gen-ai-observability]]: observability가 서비스 런타임뿐 아니라 **benchmark artifact disclosure** 로도 이어져야 함을 시사한다.
- [[patterns/ai-code-review]]: 코드 리뷰에서도 정답 여부만이 아니라 **왜 그렇게 됐는지 복기 가능한 evidence** 를 남겨야 한다는 최근 흐름과 닿아 있다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- single-auditor one-pass scoring이므로 multi-rater reliability는 후속 검증이 필요하다.
- audit schema의 실제 필드 정의와 boundary case는 원문 appendix/codebook 확인 시 더 잘 정리할 수 있다.
