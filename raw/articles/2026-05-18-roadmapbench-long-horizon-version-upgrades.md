---
title: "RoadmapBench: Evaluating Long-Horizon Agentic Software Development Across Version Upgrades (arXiv 2605.15846)"
source_url: "https://arxiv.org/abs/2605.15846"
source_type: "arxiv-paper"
authors: ["Xu, Xinbo", "Yang, Ruihan", "Shen, Haiyang", "Xu, Wendong", "Gao, Bofei", "Wu, Ruoyu", "Shi, Kean", "Xie, Weichu"]
published: 2026-05-15
fetched: 2026-05-18
tags: [evaluation, coding-benchmark, long-horizon, version-upgrade, roadmapbench, software-development, scaffold-sensitivity, arxiv]
status: ingested
---

# RoadmapBench: Evaluating Long-Horizon Agentic Software Development Across Version Upgrades

> arXiv:2605.15846, 2026-05-15. 기존 bug-fix benchmark가 놓치는 **실제 소프트웨어 버전 업그레이드형 장기 개발**을 측정하기 위해 만든 long-horizon coding benchmark.

## 메타

- **Title**: RoadmapBench: Evaluating Long-Horizon Agentic Software Development Across Version Upgrades
- **Authors**: Xu, Xinbo · Yang, Ruihan · Shen, Haiyang · Xu, Wendong · Gao, Bofei · Wu, Ruoyu · Shi, Kean · Xie, Weichu
- **arXiv**: <https://arxiv.org/abs/2605.15846> | HTML: <https://arxiv.org/html/2605.15846v1>
- **Focus**: long-horizon, multi-target software evolution, version-upgrade grounded evaluation

## 한 줄 요약

**"실제 기능 개발은 bug 하나 고치는 일이 아니라, 버전 사이에 흩어진 여러 변경을 roadmap 단위로 따라잡는 일이다."**

## 핵심 주장

### 1) 기존 coding benchmark는 실제 장기 개발 규모를 과소평가한다

논문은 기존 benchmark가 주로 다음에 치우쳐 있다고 비판한다.

- **single-issue bug fix**
- Python 중심 repository
- coarse pass/fail outcome

이런 설정은 실제 장기 개발, 특히 **version upgrade에 수반되는 multi-target implementation** 을 충분히 반영하지 못한다.

### 2) RoadmapBench는 실제 버전 업그레이드를 task로 삼는다

RoadmapBench 구성:

- **115 long-horizon coding tasks**
- **17 repositories**
- **5 programming languages**
- source-version snapshot에서 시작
- target version에 새로 들어간 기능을 **multi-target roadmap instruction** 으로 구현
- **median 3,700 lines** 변경
- **median 51 files** 수정

→ FeatureBench가 "complex feature development" 였다면, RoadmapBench는 한 단계 더 나아가 **release-to-release software evolution** 을 측정한다.

### 3) 최고 frontier model도 아직 절반을 못 넘는다

논문 abstract 기준 핵심 수치:

- **13 frontier models** 평가
- 최고 성능 **Claude Opus 4.7 = 39.1% resolved**
- 최저 성능 **5.2%**

→ long-horizon software development는 아직 **largely unsolved** problem이라는 결론.

### 4) 성능은 model만이 아니라 scaffold에도 민감하다

HTML 본문 목차/스니펫 기준으로 논문은 **scaffold sensitivity** 를 별도 분석하며,

- top model은 scaffold에 비교적 robust
- **OpenHands가 대부분 모델에서 더 높은 성능**
- 일부 모델은 다른 scaffold에서 더 잘함

→ benchmark 해석에서 **model score = model alone** 로 읽으면 안 되고, scaffold/harness도 함께 변수로 봐야 한다.

## 실무적 시사점

1. 장기 코딩 성능을 보려면 bug-fix benchmark 하나로 충분하지 않다.
2. feature 단위보다 더 긴 작업은 **roadmap / release / upgrade** 수준 eval이 필요하다.
3. benchmark 결과를 읽을 때는 모델뿐 아니라 **scaffold(OpenHands 등)** 를 같이 봐야 한다.
4. 실제 제품 개발에서 수십 파일·수천 줄 변경이 흔하다면, 현재 frontier agent의 ceiling을 과대평가하면 안 된다.

## 본 위키와의 짝

- [[concepts/llm-evaluation]] — long-horizon coding eval layer 확장
- [[patterns/ai-code-review]] — PR/bug-fix 중심 검증만으로는 release-scale 변경을 놓칠 수 있음
- [[concepts/harness-engineering]] — scaffold가 성능 변수라는 증거
- [[journal/2026-05-17]] — FeatureBench 다음 단계의 long-horizon coding benchmark로 연결 가능

## 메모

- 현재 확보한 핵심은 abstract + HTML snippet 기반
- 세부 실패 모드, target-level analysis는 후속 정독 후보
- 오늘 시점 메시지는 충분히 강하다: **bug-fix → feature-dev → version-upgrade** 로 eval granularity를 올려야 한다
