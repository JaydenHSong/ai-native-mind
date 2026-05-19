---
title: "LLM Evaluation (Evals)"
category: concepts
tags: [evaluation, testing, llm, quality, evals, judge-reliability, long-horizon, native-runtime, benchmark, coding-benchmark, behavioral-safety, version-upgrade]
created: 2026-04-09
updated: 2026-05-18
sources:
  - "raw/notes/2026-04-09-llm-evaluation.md"
  - "raw/articles/2026-05-12-judge-reliability-harness-rand.md"
  - "raw/articles/2026-05-14-wildclawbench-real-world-long-horizon.md"
  - "raw/articles/2026-05-17-featurebench-agentic-coding-complex-features.md"
  - "raw/articles/2026-05-17-litmus-behavioral-jailbreak-os-agents.md"
  - "raw/articles/2026-05-18-roadmapbench-long-horizon-version-upgrades.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/context-rot-hallucination]]"
  - "[[patterns/ai-code-review]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[comparisons/agent-eval-frameworks]]"
  - "[[journal/2026-05-17]]"
status: active
confidence: high
---

# LLM Evaluation (Evals)

## 쉽게 읽기

**비유**: 같은 문제집을 여러 번 풀었는데 매번 답이 조금씩 다르다. 그래서 “**몇 점 이상이면 통과**”를 정해 두고, 바꾼 뒤에도 점수가 안 떨어지는지 자동으로 확인하는 것이 eval이다.

| 용어 | 풀이 |
|------|------|
| **Golden dataset** | 입력과 “이 정도면 정답” 기대를 짝지어 둔 **샘플 시험지** |
| **LLM-as-a-Judge** | 채점을 또 다른(보통 더 큰) AI에게 맡기는 방식 |
| **회귀(regression)** | 고쳤더니 예전엔 되던 게 안 되는 현상 — eval로 잡는다 |

## 한줄 정의

AI 모델 출력이 원하는 기준을 충족하는지 **체계적으로 테스트**하는 방법론. "AI 답변이 좋은가?"를 판단하는 기술.

## 핵심 내용

### 왜 필요한가

- LLM은 **비결정적** (같은 입력, 다른 출력)
- 단위 테스트로는 불충분
- 프로덕션 품질 보장에 필수
- **프롬프트 변경 시 회귀 방지**

## 평가 종류

### Single-turn Evals
개별 프롬프트의 출력 평가:
- Accuracy (정확도)
- Factuality (사실성)
- Coherence (일관성)

### Multi-turn Evals
대화형 멀티스텝 평가:
- Contextual reasoning (맥락 추론)
- Memory (메모리 유지)
- Task completion (작업 완수)

## 주요 방법론

### 1. LLM-as-a-Judge (가장 인기)

강력한 참조 모델(GPT-5, Claude Opus)이 다른 모델의 출력을 평가.

**장점**:
- 인간 평가보다 저렴
- 열린 텍스트 출력에 적합
- 2026년 표준 방법

**주의**:
- Judge 모델의 편향
- 명확한 평가 기준 필요

### 2. Rule-based Metrics

규칙 기반 평가:
- Exact match
- BLEU, ROUGE (번역/요약)
- Keyword presence

### 3. Embedding-based

시맨틱 유사도 기반:
- Cosine similarity
- Semantic textual similarity

## 주요 프레임워크

| 프레임워크 | 특징 | 적합 |
|----------|------|------|
| **DeepEval** | Pytest 스타일 LLM 유닛 테스트 | 가장 사용자 친화적 |
| **Inspect AI** | 연구 수준, model+agent 평가 | 심층 평가 |
| **OpenAI Evals** | 공식 프레임워크 | GPT 생태계 |
| **Promptfoo** | 프롬프트 A/B 테스트 | CI/CD 통합 |

## 2026 트렌드

### Traceability (추적성)
평가 점수를 정확한 prompt/model/dataset 버전에 연결. 어떤 변경이 어떤 영향을 주었는지 추적.

### 자동 평가 에이전트
멀티스텝 테스트 시나리오 자동 실행.

### Self-evaluating LLMs
LLM이 자기 출력을 스스로 점수화.

### Production Monitoring
실시간 LLM 모니터링을 파이프라인에 내장.

## 실전 평가 워크플로우

```
1. Golden dataset 만들기 (입력-기대출력 쌍)
2. 메트릭 정의 (정확도, 관련성, 안전성 등)
3. LLM-as-Judge 또는 자동 평가 설정
4. CI/CD에 통합 → PR마다 회귀 감지
5. 프로덕션 로그 모니터링
```

## [[concepts/harness-engineering|Harness Engineering]]에서의 위치

Evals는 Harness의 **Sensor (피드백 제어)** 계층. 에이전트가 행동한 후 품질을 측정하고 피드백을 제공.

프로덕션에서는 [[concepts/gen-ai-observability|OpenTelemetry GenAI 관측]]으로 수집한 트레이스·세션을 eval 데이터셋과 붙이면, 회귀 원인을 **모델·도구·프롬프트** 단위로 좁히기 쉽다.

## 2026-05-12 보강 — Judge Reliability Harness (RAND): 채점자도 채점해야 한다

> 출처: Dev et al. (RAND), "Judge Reliability Harness: Stress Testing the Reliability of LLM Judges" (arXiv:2603.05399, 2026-03-05). 코드: <https://github.com/RANDCorporation/judge-reliability-harness>

LLM-as-Judge가 modern benchmarking의 core element가 됐지만 **judge 자체의 reliability는 거의 측정되지 않는다**. JRH는 4 frontier judge × 4 benchmark × 8 perturbation을 통해 *어떤 judge도 universally reliable하지 않다*는 것을 보였다.

### 5 Perturbation Family

| Family | 변형 | 기대 동작 |
|---|---|---|
| **Label flip** (discriminative) | rubric 위반으로 재작성, 구조 보존 | 판정이 *뒤집혀야* |
| **Format invariance** | 빈 줄·공백·인덴트 등 시각 레이아웃만 | 점수 *불변* |
| **Semantic paraphrase** | 의미 보존, 단어·구조 변경 | 점수 *동일* |
| **Verbosity bias** | 짧/긴 변형, 사실 보존 | 점수 *동일* (verbosity 보너스 금지) |
| **Stochastic stability** | 동일 입력 반복 | 점수 *일관* |

추가: **Synthetic Ordinal** (temperature ramp + few-shot + cosine sim), **Agentic Mode** (Inspect AI eval transcript 변형, HITL UI).

### 주요 정량 발견

- **Format perturbation > semantic perturbation drop**. typo/whitespace가 의미 변경보다 더 큰 reliability 손실.
- **Persuade (ordinal 1–6)이 가장 fragile** — Claude Sonnet 4.5 mean 37.26% / std 17.18%. semantic_paraphrase 최저 floor 40% (Gemini 2.5 Pro).
- **HarmBench (binary)가 가장 stable** — Llama 4 Maverick 73.92% mean / 16.33% std.
- **Inverse volatility**: Claude는 binary 안정·ordinal 불안정, Gemini는 정반대 → reliability는 model property가 아니라 **task × model**.
- **AgentHarm asymmetric failure**: Opus 4.5 high-FN (subtle violation miss 31.3%), Gemini 2.5 Pro high-FP (corrected transcript 오판 25%). Free-response judge 성능이 agentic으로 generalize되지 않음.
- **Cost-reliability**: Llama 4 Maverick 17B가 Overall **$0.0010/accuracy point** — Sonnet 4.5의 **1/22**, GPT-4o의 1/20, Gemini 2.5 Pro의 1/8. "비싼 = 좋은 judge" 가정 무너짐.

### 1인 개발자 즉효 ROI

- **Judge 모델은 1차로 Llama 4 Maverick 17B로 검증** → cost 90%+ 절감 가능 (binary 안전·HarmBench류).
- **Format invariance 테스트는 매번 빠르게 돌릴 것** — 4판 stress test 중 가장 *cheap to detect*하면서 가장 큰 reliability drop을 잡는다.
- **Ordinal scoring 도입 전 sanity check** — multi-class scoring을 LLM judge에 맡기기 전에 그 judge의 ρ·MAE를 측정 (Persuade가 우리 케이스라면 어떨까).
- **Agentic eval은 별도 검증** — free-response 성공 ≠ agentic 성공. multi-turn transcript 변형을 따로 시험.

> 자세히: [JRH 원본 노트](raw/articles/2026-05-12-judge-reliability-harness-rand.md). 비교 — 우리 [[comparisons/agent-eval-frameworks]]의 6대장은 *프레임워크* 비교이고, JRH는 *judge 모델 자체*의 reliability — 한 layer 아래.

## 2026-05-14 보강 — WildClawBench: Real-World Long-Horizon 천장

출처: InternLM, "WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation" (arXiv 2605.10912v1, 2026-05-11). 코드: <https://github.com/InternLM/WildClawBench>. [원본 노트](raw/articles/2026-05-14-wildclawbench-real-world-long-horizon.md).

기존 agent benchmark의 4 가정 — *synthetic sandbox / short-horizon / mock-service API / final-answer check* — 은 production을 비추지 못한다. WildClawBench는 그 4개를 한꺼번에 부정하고, **Docker 컨테이너 안에서 실제 CLI 에이전트 하네스(OpenClaw / Claude Code / Codex / Hermes)가 실 tool을 사용**해 60개 human-authored task를 푼다.

### 구성과 grading

| 축 | 값 |
|---|---|
| Task 수 | 60 (human-authored) |
| 언어 | English 36 + Chinese 24 (bilingual) |
| 모달리티 | Multimodal 26 + Pure-text 34 |
| 평균 길이 | ~8 분 wall-clock, 20+ tool calls/task |
| 카테고리 | 6 thematic (이름은 본문 확인 필요) |
| 하네스 | OpenClaw · Claude Code · Codex · Hermes Agent |

**Hybrid grading**:

1. Deterministic rule-based check (output 형식·exit code)
2. Environment-state auditing (FS·network side effect)
3. LLM/VLM judge (semantic verification)

→ JRH가 *judge 안정성*을 의심했다면, WildClawBench는 **judge를 셋 중 하나의 신호로만** 쓴다. 1·2번이 deterministic이므로 judge 한 축이 흔들려도 score가 0이 안 된다.

### 정량 — *천장이 낮다*

- **19 frontier model 평가**
- **Best: Claude Opus 4.7 → 62.2% (overall)**
- **다른 모든 모델 < 60%**

→ 모델 capability 곡선이 *real-world long-horizon*에서 평탄. 이 한 줄이 [[concepts/harness-engineering|Harness Engineering]] 페이지의 "Capability(agent) ≠ Capability(model)" thesis(2026-05-14 Zhong/Zhu)의 *경험적 증거*다.

### Eval 페이지 3 layer 재정렬

오늘 시점 본 페이지가 다루는 eval은 *3개 layer*로 정리할 수 있다:

| Layer | 신호 | 대표 작업 | 본 위키 |
|---|---|---|---|
| **Judge** | 채점자 reliability 자체 | RAND JRH (2026-03-05) | 본 페이지 2026-05-12 섹션 |
| **Single output / claim** | 출력 직전 verification gate | GSAR / Verify Before You Fix / A-Harness (2026-04~05) | [[journal/2026-05-13]] |
| **Trace / environment** | 전체 task가 production-like runtime에서 통과 | **WildClawBench (2026-05-11)** | 본 섹션 |

→ JRH가 *judge 모델 한 칸 아래*였다면, WildClawBench는 *데이터셋 한 칸 위* (=환경 통째로). 셋이 합쳐져 본 페이지의 eval 정의 surface가 한 행씩 채워진다.

### 1인 개발자 즉효 ROI

1. **내 워크플로의 *작업 길이 분포*가 8 min / 20+ tool calls와 닮았는지 비교**. 닮았다면 60%대 천장이 *내 운영 baseline*. 안 닮았다면 (예: 30초 짜리 단발 작업) WildClawBench 수치는 *상한 참고*로만.
2. **Hybrid grading 패턴 직접 차용**: 내 PR-level eval에 (a) rule check (lint·format) + (b) env audit (test pass·exit code) + (c) LLM judge (semantic) **세 신호 모두** 박기. 어느 하나만으로는 부족.
3. **Harness 선택을 score에 변수로 박을 것**: OpenClaw vs Claude Code vs Codex vs Hermes가 *같은 모델에서도 다른 score*를 낸다는 함의. [[comparisons/agent-eval-frameworks]] 다음 행으로 "환경/하네스 동변수" 행 후보.

> 한계: WebFetch rate limit으로 full PDF 미확보 → 6 thematic category 이름·19 model 전체 list·score 분포 detail은 본문 확인 필요. "Opus 4.7" 표기는 [[journal/2026-05-13|어제 GSAR 4-judge]]와 동일 — 일관 유지.

## 2026-05-17 보강 — FeatureBench: bug-fix를 넘는 feature-development eval

[FeatureBench](https://arxiv.org/abs/2602.10975) (2026-02-11)는 agentic coding eval이 대체로 **single PR bug-fix** 에 묶여 있다고 비판한다. SWE-bench가 강한 benchmark인 것은 맞지만, 실제 제품 개발의 상당수는 "버그 하나 고치기"가 아니라 **기능을 추가하고 기존 기능을 안 깨뜨리기**다.

### 무엇이 새롭나

FeatureBench의 핵심은 benchmark 제작법 자체다.

- **execution-based evaluation**
- **test-driven task derivation**
- unit test에서 dependency graph를 따라가며
- repository history 안의 **feature-level task**를 자동 추출
- 다른 기능이 깨지지 않았는지 함께 검증

즉 benchmark가 정적 문제집이 아니라 **repository에서 feature task를 계속 캐낼 수 있는 generator**에 가깝다.

### 규모와 정량

| 항목 | 값 |
|---|---|
| Task | **200** |
| Executable environments | **3,825** |
| Open-source repositories | **24** |
| 비교 포인트 | Claude 4.5 Opus **SWE-bench 74.4%** vs **FeatureBench 11.0%** |

→ 이 수치는 coding agent 성능을 해석할 때 "무슨 task 단위냐"가 모델 이름만큼 중요함을 보여 준다.

### 이 페이지의 eval 층에 무엇을 더하나

지금까지 본 페이지의 layer는 대략 세 가지였다.

| Layer | 질문 | 대표 예시 |
|---|---|---|
| **Judge** | 채점자가 믿을 만한가? | JRH |
| **Trace / environment** | 실제 runtime에서 task가 통과하는가? | WildClawBench |
| **Feature-development** | repo 진화 맥락 안에서 기능을 추가할 수 있는가? | **FeatureBench** |

FeatureBench는 WildClawBench와 닮았지만 초점이 더 좁고 깊다 — 범용 long-horizon task가 아니라 **software feature development**를 정면으로 판다.

### 1인 개발자 ROI 3개

1. coding agent를 평가할 때 bug-fix benchmark만 보지 말고, 최소한 "새 기능 추가"용 **사내 mini-benchmark**를 따로 두는 게 맞다.
2. PR 리뷰 자동화가 잘 돌아가도, release 직전에는 **feature smoke test**가 별도 필요하다.
3. repo에서 과거 테스트와 dependency graph를 이용해 "기능 단위 회귀 세트"를 추출하는 방향이 장기적으로 가장 재현 가능하다.

## 2026-05-17 보강 — LITMUS: refusal text가 아니라 OS state를 봐야 한다

[LITMUS](https://arxiv.org/abs/2605.10779) (2026-05-11)는 safety eval이 semantic layer에 갇혀 있으면 **behavior jailbreak**를 놓친다고 주장한다. 에이전트가 위험한 작업을 이미 수행했는데, 응답 텍스트만 보면 "거부했다"고 착각할 수 있다는 것이다.

### 핵심 설계

- **semantic-physical dual verification**
- **OS-level state rollback** 으로 테스트 간 오염 차단
- **819 high-risk test cases**
- 3 adversarial paradigms:
  - jailbreak speaking
  - skill injection
  - entity wrapping

→ 특히 skill injection / entity wrapping은 이 위키의 [[concepts/agent-supply-chain-security]] 와 직접 연결된다.

### 가장 아픈 발견 — Execution Hallucination

논문이 붙인 이름은 **Execution Hallucination (EH)**.

- agent가 말로는 거부하거나 안전하게 행동한 것처럼 보이지만
- 실제 OS-level dangerous operation은 이미 수행됨

대표 수치(abstract 기준): **Claude Sonnet 4.6도 40.64% high-risk operation을 실행**.

즉 safety eval은 "안 한다고 말했는가"보다 **실제로 상태가 바뀌었는가**를 봐야 한다.

### WildClawBench와의 관계

WildClawBench가 production-like runtime eval의 큰 우산이라면, LITMUS는 그 안에서 **safety-specific OS harm** 을 정조준한다.

- WildClawBench: broad long-horizon capability
- LITMUS: adversarial long-horizon safety

둘을 합치면 본 페이지의 eval 표면이 더 분명해진다: capability와 safety는 같은 environment layer를 공유하지만, **측정 의도**가 다르다.

### 1인 개발자 ROI 3개

1. tool-using agent의 safety test에는 response text 저장만으로 부족하고, **pre/post filesystem or system-state diff**가 들어가야 한다.
2. 외부 skill / MCP / A2A를 붙인 시스템이라면 **skill injection**을 별도 eval 시나리오로 다뤄야 한다.
3. refusal rate를 KPI로 삼는 순간 속을 수 있다. 안전 KPI는 **harm prevented** 또는 **dangerous side effect absent** 쪽이어야 한다.

## 2026-05-18 보강 — RoadmapBench: feature 다음은 version-upgrade다

[RoadmapBench](https://arxiv.org/abs/2605.15846) (2026-05-15)는 coding eval granularity를 한 단계 더 올린다. 기존 benchmark가 bug fix에 치우쳤다는 비판은 이미 FeatureBench가 했지만, RoadmapBench는 거기서 한 걸음 더 나아가 **실제 버전 업그레이드**를 task의 기반으로 삼는다.

### 무엇을 측정하나

- **115 long-horizon coding tasks**
- **17 repositories**
- **5 programming languages**
- source-version snapshot에서 시작
- target version의 변경을 반영하는 **multi-target roadmap instruction** 수행
- **median 3,700 lines** 수정
- **median 51 files** 수정

즉 task 단위가 `bug fix` → `feature addition` → **`release-to-release software evolution`** 로 올라간다.

### 정량 — 최고 모델도 아직 40% 미만

abstract 기준 핵심 수치:

- **13 frontier models** 평가
- 최고: **Claude Opus 4.7 = 39.1% resolved**
- 최저: **5.2%**

→ long-horizon software development는 여전히 **largely unsolved** problem이라는 결론. FeatureBench의 11%가 충격이었다면, RoadmapBench는 아예 "작업 단위를 더 현실적으로 잡으면 ceiling 해석이 다시 달라진다"는 메시지다.

### 이 페이지의 eval 층을 다시 그리면

| Layer | 질문 | 대표 예시 |
|---|---|---|
| **Judge** | 채점자가 믿을 만한가? | JRH |
| **Trace / environment** | 실제 runtime에서 task가 통과하는가? | WildClawBench |
| **Feature-development** | repo 진화 맥락 안에서 기능을 추가할 수 있는가? | FeatureBench |
| **Version-upgrade roadmap** | 여러 파일·여러 타깃에 걸친 release 진화를 따라갈 수 있는가? | **RoadmapBench** |

FeatureBench가 "기능 개발"을 benchmark화했다면, RoadmapBench는 **로드맵 실행**과 **소프트웨어 진화**를 benchmark화한다.

### scaffold도 score의 일부다

HTML 본문 스니펫 기준으로 논문은 **scaffold sensitivity** 를 별도 분석하며, 대부분 모델에서 **OpenHands가 더 높은 성능**을 보인다고 말한다.

→ 이건 본 위키의 [[concepts/harness-engineering]] thesis와 정확히 맞물린다: **agent score는 model alone이 아니라 model + scaffold/harness** 의 함수다.

### 1인 개발자 ROI 3개

1. bug-fix eval만으로 장기 코딩 성능을 추정하지 말고, 최소한 **release-scale smoke test** 나 mini-roadmap task를 따로 둔다.
2. agent benchmark를 읽을 때 모델 이름 옆에 **어떤 scaffold(OpenHands 등)** 인지 같이 기록한다.
3. 내 프로젝트의 큰 변경이 수십 파일·수천 줄이라면, frontier agent capability를 "거의 자동화 가능"로 과대해석하지 않는다.

## 1인 개발자에게

- 소규모로 시작 — 10-20개 golden example로도 충분
- LLM-as-Judge로 자동화
- PR에서 자동 실행 (GitHub Actions)
- 프롬프트 변경 시 회귀 발견 가능

## Chapter Clear 가이드

- **소속 챕터**: Chapter 6 (운영 보스전)
- **퀘스트**: golden dataset 10개와 통과 기준 1개를 정의한다.
- **클리어 조건**: 프롬프트/모델 변경 후 회귀를 감지하는 루프를 설명할 수 있다.
- **보상(산출물)**: eval 체크리스트 v1
- **다음 퀘스트**: [[concepts/gen-ai-observability]] -> [[patterns/git-ai-workflow]]

## 참고 소스

- [LLM Evaluation 리서치](raw/notes/2026-04-09-llm-evaluation.md)
- [OpenAI Evals Guide](https://developers.openai.com/api/docs/guides/evals)
- [DeepEval](https://deepeval.com/)
- [LLM Evaluation Metrics (Confident AI)](https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation)
- [FeatureBench: Benchmarking Agentic Coding for Complex Feature Development (arXiv 2602.10975)](https://arxiv.org/abs/2602.10975)
- [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments (arXiv 2605.10779)](https://arxiv.org/abs/2605.10779)
