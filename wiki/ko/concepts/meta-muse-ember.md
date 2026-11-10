---
title: "Meta, Muse Ember 출시 — Haiku급 성능에 태스크당 비용 1/3의 초저가 에이전트 모델 (11-09)"
category: concepts
tags: [meta, muse, ember, small-model, agent, pricing]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-meta-muse-ember.md"
related:
  - "[[concepts/meta-muse-spark-open]]"
  - "[[concepts/meta-muse-wonder-models]]"
  - "[[concepts/claude-haiku-5-5]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: high
---

# Meta, Muse Ember 출시 — Haiku급 성능에 태스크당 비용 1/3의 초저가 에이전트 모델 (11-09)

## 쉽게 읽기

**비유**: 에이전트 팀에 비싼 전문가 한 명만 두는 대신, 반복 잡일을 도맡는 아르바이트를 여럿 두는 셈이다. 어려운 판단은 큰 모델이 하고, 툴 호출·문서 정리 같은 반복 작업은 시급이 싼 Ember가 처리한다. 같은 일을 하는데 인건비가 1/3로 줄었다.

| 용어 | 풀이 |
|------|------|
| **Muse Ember** | Meta Muse 시리즈의 가장 작고 저렴한 모델 — 에이전트의 반복 작업 전용 실행기 |
| **태스크당 비용** | 벤치마크 한 개 작업을 끝내는 데 드는 실제 비용 — 토큰 단가 × 사용 토큰량 |
| **200k 토큰 임계값** | Ember의 저가 요금이 적용되는 입력 크기 한도 — 넘으면 전체 요청이 3배 요금 |

## 한줄 정의

2026-11-09 — Meta가 Muse 시리즈의 가장 작고 저렴한 모델 Muse Ember(`muse-ember-1.0`)를 출시했다. 에이전트가 반복하는 일(툴 호출·코딩 하위 작업·라우팅·추출·문서 처리) 전용 실행기 모델로, Artificial Analysis Intelligence Index 36점으로 Claude Haiku 5.5와 사실상 동점인데 태스크당 비용은 약 1/3 수준이다.

## 핵심 내용

- **가격**: 입력 $0.10 / 출력 $0.50 per MTok, 캐시 입력 $0.004. 단 입력 200,000 토큰을 넘는 요청은 전체 요청이 3배 요금($0.30/$1.50, 캐시 $0.012)으로 청구된다. 캐시 토큰과 저장된 대화 기록도 임계값 계산에 포함된다. Muse 시리즈 중 최저가로, Wonder $4/$20·Spark $1.25/$4.25와 비교된다.
- **스펙**: 1,048,576 토큰 컨텍스트, 최대 출력 524,288 토큰. 입력은 텍스트·이미지·오디오·비디오·PDF, 출력은 텍스트. 명시적 reasoning 모드 탑재. 가중치는 미공개(API 전용), 파라미터 수 미공개. Meta Model API(Standard 모드만)·Muse Code·OpenRouter·Google Cloud(preview)·Oracle Cloud에서 제공. Muse Code 전 구독 플랜에 포함.
- **벤치마크(Meta 제시·Artificial Analysis)**: Artificial Analysis Intelligence Index 36점(최대 reasoning effort), Haiku 5.5의 36.2/35.8과 사실상 동점, GPT-6 Luna 28점 상회. 태스크당 비용은 Ember 약 $0.136 vs Haiku 5.5 약 $0.411. Terminal-Bench 4.0에서는 Ember 40.9% vs Haiku 39.2%. 단, 가격·성능 수치는 Meta가 제시한 Artificial Analysis v5 비교이며 독립 재현은 아니다.
- **계보**: Muse 시리즈 4번째 모델 — Spark(4월)·Glimmer(8월)·Wonder(10월)에 이어 Ember(11월). 첫 모델로 Muse Wonder Full을 교사 모델로 삼아 학습했다. Meta는 '값싼 실행기 + 큰 플래너' 2계층 에이전트 아키텍처의 하위 계층으로 자리매김하고 있다.
- **주의**: EU 데이터 상주·데이터 처리 계약(DPA)이 API에 제공되지 않는다는 지적이 있다. OpenRouter는 EU 지역 라우팅에서 Ember를 제공하지 않는다. 200k 토큰 임계값을 넘는 장문 작업에서는 요금이 3배가 되므로, 긴 컨텍스트를 자주 쓰는 워크로드에서는 실효 가격이 달라진다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 비용 구조의 하한이 다시 내려갔다**: Haiku급 지능을 태스크당 $0.14에 쓸 수 있다는 것은, 서브에이전트·라우팅·추출 같은 반복 작업을 아끼지 않고 돌릴 수 있다는 뜻이다. '비싼 모델은 판단만, 싼 모델은 실행'이라는 2계층 설계가 현실적인 기본값이 된다.
2. **토큰 단가가 아니라 태스크당 비용으로 봐야 한다**: Ember의 토큰 단가는 Haiku 5.5와 같지만($0.10/$0.50), 태스크를 끝내는 데 쓰는 토큰이 적어 비용이 1/3이 된다. 모델 선택 기준은 단가가 아니라 '같은 일을 끝내는 데 드는 총비용'이다.
3. **200k 임계값은 설계 제약이다**: 긴 문서·대화 기록을 통째로 넘기는 워크로드에서는 3배 요금이 적용된다. Ember를 쓸 때는 컨텍스트를 200k 아래로 유지하는 청킹·요약 설계가 필요하다.

## 한계 (명시)

- 가격·성능 수치는 Meta가 제시한 Artificial Analysis v5 비교이며, 독립 재현은 아니다. 태스크당 비용은 Meta의 가격·토큰 사용량 가정에 따른 추정치다.
- 가중치 미공개(API 전용)라 로컬 구동·미세조정은 불가능하다. Spark Open과 달리 오픈웨이트가 아니다.
- EU 데이터 상주·DPA 미제공은 유럽 고객에게 실무 제약이 된다.

## 관련 개념

- [[concepts/meta-muse-spark-open]] — Meta Muse Spark Open, 오픈웨이트 816B MoE·1M 컨텍스트
- [[concepts/meta-muse-wonder-models]] — Meta Muse Wonder·Wonder Full, 클로즈드 프론티어 에이전트 모델
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, Ember와 비교되는 경량 모델
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2, 같은 날 출시된 플래그십

## 참고 소스

- [Meta Muse Ember 출시 원본](raw/articles/2026-11-10-meta-muse-ember.md)
