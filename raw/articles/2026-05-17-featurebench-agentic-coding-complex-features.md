---
title: "FeatureBench: Benchmarking Agentic Coding for Complex Feature Development (arXiv 2602.10975)"
source_url: "https://arxiv.org/abs/2602.10975"
source_type: "arxiv-paper"
authors: ["Qixing Zhou", "Jiacheng Zhang", "Haiyang Wang", "Rui Hao", "Jiahe Wang", "Minghao Han", "Yuxue Yang", "Shuzhe Wu", "Feiyang Pan", "Lue Fan", "Dandan Tu", "Zhaoxiang Zhang"]
published: 2026-02-11
fetched: 2026-05-17
tags: [agentic-coding, coding-benchmark, evaluation, feature-development, execution-based-eval, swe-bench, repository-mining, arxiv]
status: ingested
---

# FeatureBench: Benchmarking Agentic Coding for Complex Feature Development

> arXiv:2602.10975, 2026-02-11. 기존 agentic coding benchmark가 주로 "PR 하나 안의 bug fix"에 머무르는 한계를 넘어서, **end-to-end feature development**를 실행 가능한 형태로 측정하는 benchmark.

## 메타

- **Title**: FeatureBench: Benchmarking Agentic Coding for Complex Feature Development
- **Authors**: Qixing Zhou, Jiacheng Zhang, Haiyang Wang, Rui Hao, Jiahe Wang, Minghao Han, Yuxue Yang, Shuzhe Wu, Feiyang Pan, Lue Fan, Dandan Tu, Zhaoxiang Zhang
- **arXiv**: <https://arxiv.org/abs/2602.10975> | PDF: <https://arxiv.org/pdf/2602.10975>
- **Focus**: agentic coding benchmark, feature-oriented development, execution-based evaluation

## 한 줄 요약

**"SWE-bench에서 잘하는 모델도 실제 feature 개발로 가면 급격히 무너진다 — FeatureBench는 bug-fix 중심 eval을 feature-development 중심 eval로 올린다."**

## 핵심 주장

### 1) 문제 — 기존 coding benchmark는 task scope가 너무 좁다

논문은 기존 benchmark의 한계를 세 가지로 본다.

- task scope가 **single PR bug-fix**에 치우침
- 평가가 **non-executable** 이거나
- benchmark coverage를 계속 갱신할 **자동 수집 방법**이 없음

즉 agent가 "한 파일 수정"은 해도, 실제 제품 기능을 여러 커밋 맥락 속에서 추가할 수 있는지는 거의 측정되지 않았다.

### 2) 제안 — FeatureBench

FeatureBench의 설계 포인트:

- **execution-based evaluation**
- **test-driven task derivation**
- unit test에서 dependency graph를 따라 올라가며
- 여러 commit / PR에 걸친 **feature-level task**를 추출
- 다른 기능이 깨지지 않도록 separation을 검증

→ 핵심은 사람이 일일이 task를 쓰는 benchmark가 아니라, **repository에서 feature task를 자동 발굴**한다는 점이다.

### 3) 첫 버전 규모

- **200 challenging tasks**
- **3,825 executable environments**
- **24 open-source repositories**

이 수치는 "feature development를 reproducible하게 eval하는 환경" 자체가 하나의 artifact라는 뜻이다.

### 4) 정량 결과 — SWE-bench 성적이 그대로 안 이어진다

abstract 기준 대표 수치:

- Claude 4.5 Opus가 **SWE-bench 74.4% resolved rate**를 기록해도
- FeatureBench에서는 **11.0% task success**에 그침

→ feature-level work는 단순 bug-fix보다 **맥락 길이·구조 의존성·회귀 위험**이 훨씬 크다.

## 실무적 시사점

1. **"SWE-bench 높음 = 실제 제품 기능 개발도 잘함"이라는 등식이 깨진다.**
2. PR 단위 eval만으로는 부족하고, 기능 추가 뒤 **기존 기능 생존 여부**까지 포함한 실행형 eval이 필요하다.
3. agentic coding workflow는 model 비교보다 먼저 **task granularity**를 맞춰야 한다.

## 본 위키와의 짝

| 본 위키 페이지 | FeatureBench와의 관계 |
|---|---|
| [[concepts/llm-evaluation]] | single-output / long-horizon 다음에 **feature-development eval** 축을 추가 |
| [[patterns/ai-code-review]] | 코드 리뷰가 correctness를 보더라도, 최종 평가는 **실행 가능한 기능 단위**여야 함 |
| [[concepts/harness-engineering]] | benchmark가 model이 아니라 **agent + harness + repo context**를 함께 측정한다는 증거 |
| [[journal/2026-05-15]] | Constraint Decay가 "제약이 많아지면 무너진다"를 보였다면, FeatureBench는 "task가 feature 수준으로 커지면 무너진다"를 보임 |

## 2x3 좌표계에서의 위치

- **Tooling × 측정** 쪽에 가깝다.
- WildClawBench가 real-world long-horizon general task를 봤다면, FeatureBench는 그 중 **software feature development** 도메인을 깊게 판 benchmark다.

## 한계

- abstract만으로는 200 task의 세부 분포, baseline 전체 표, harness 차이까지는 확인 불가
- repository selection bias와 task extraction heuristic의 영향은 본문 정독 필요

## 기억할 문장

> **"Bug-fix benchmark에서의 성과는 feature-development benchmark에서의 성과를 보장하지 않는다."**
