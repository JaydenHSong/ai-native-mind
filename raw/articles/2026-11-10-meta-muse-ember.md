---
title: "Meta, Muse Ember 출시 — Haiku급 성능에 태스크당 비용 1/3의 초저가 에이전트 모델 (11-09)"
source_url: "https://research.meta.ai/blog/muse-ember?ref=explainx"
source_type: "news"
authors: ["Meta", "Meta Superintelligence Labs"]
published: 2026-11-09
fetched: 2026-11-10
tags: [meta, muse, ember, small-model, agent, pricing]
status: raw
---

# Meta, Muse Ember 출시 — Haiku급 성능에 태스크당 비용 1/3의 초저가 에이전트 모델 (11-09)

> Meta가 11-09 Muse 시리즈의 가장 작고 저렴한 모델 Muse Ember(`muse-ember-1.0`)를 출시했다. 에이전트가 반복하는 일(툴 호출·코딩 하위 작업·라우팅·추출·문서 처리) 전용 실행기 모델로, Artificial Analysis Intelligence Index 36점으로 Claude Haiku 5.5와 사실상 동점인데 태스크당 비용은 약 1/3 수준이다.

## 내용

- **가격**: 입력 $0.10 / 출력 $0.50 per MTok, 캐시 입력 $0.004. 단 입력 200,000 토큰을 넘는 요청은 전체 요청이 3배 요금($0.30/$1.50, 캐시 $0.012)으로 청구된다. 캐시 토큰과 저장된 대화 기록도 임계값 계산에 포함된다. Muse 시리즈 중 최저가로, Wonder $4/$20·Spark $1.25/$4.25와 비교된다.
- **스펙**: 1,048,576 토큰 컨텍스트, 최대 출력 524,288 토큰. 입력은 텍스트·이미지·오디오·비디오·PDF, 출력은 텍스트. 명시적 reasoning 모드 탑재. 가중치는 미공개(API 전용), 파라미터 수 미공개. Meta Model API(Standard 모드만)·Muse Code·OpenRouter·Google Cloud(preview)·Oracle Cloud에서 제공. Muse Code 전 구독 플랜에 포함.
- **벤치마크(Meta 제시·Artificial Analysis)**: Artificial Analysis Intelligence Index 36점(최대 reasoning effort), Haiku 5.5의 36.2/35.8과 사실상 동점, GPT-6 Luna 28점 상회. 태스크당 비용은 Ember 약 $0.136 vs Haiku 5.5 약 $0.411. Terminal-Bench 4.0에서는 Ember 40.9% vs Haiku 39.2%. 단, 가격·성능 수치는 Meta가 제시한 Artificial Analysis v5 비교이며 독립 재현은 아니다.
- **계보**: Muse 시리즈 4번째 모델 — Spark(4월)·Glimmer(8월)·Wonder(10월)에 이어 Ember(11월). 첫 모델로 Muse Wonder Full을 교사 모델로 삼아 학습했다. Meta는 '값싼 실행기 + 큰 플래너' 2계층 에이전트 아키텍처의 하위 계층으로 자리매김하고 있다.
- **주의**: EU 데이터 상주·데이터 처리 계약(DPA)이 API에 제공되지 않는다는 지적이 있다. OpenRouter는 EU 지역 라우팅에서 Ember를 제공하지 않는다. 200k 토큰 임계값을 넘는 장문 작업에서는 요금이 3배가 되므로, 긴 컨텍스트를 자주 쓰는 워크로드에서는 실효 가격이 달라진다.

## 맥락

- [[concepts/meta-muse-spark-open]] — Meta Muse Spark Open, 816B(활성 42B) MoE 오픈웨이트·1M 컨텍스트·Mac Studio 로컬 구동 (2026-10-16)
- [[concepts/meta-muse-wonder-models]] — Meta Muse Wonder·Wonder Full, 클로즈드 프론티어 에이전트 모델·Active Memory·API $4/$20 (2026-10-13)
- [[concepts/claude-haiku-5-5]] — Claude Haiku 5.5, 최경량·최저가 5.5 시리즈, API 최대 90% 인하 + effort 설정 (2026-10-08)
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2 출시, 20% 가격 인하·최대 30% 빨라져 (2026-11-09)
