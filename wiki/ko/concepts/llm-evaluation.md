---
title: "LLM Evaluation (Evals)"
category: concepts
tags: [evaluation, testing, llm, quality, evals, judge-reliability, long-horizon, native-runtime, benchmark, coding-benchmark, behavioral-safety, version-upgrade, trajectory-audit, harness-safety, artifact-aware-review, delegation-benchmark, privacy-benchmark, reward-hacking, process-evaluation, reproducibility, disclosure-audit, terminal-benchmark, benchmark-provenance, workflow-evaluation, artifact-quality]
created: 2026-04-09
updated: 2026-05-24
sources:
  - "raw/notes/2026-04-09-llm-evaluation.md"
  - "raw/articles/2026-05-12-judge-reliability-harness-rand.md"
  - "raw/articles/2026-05-14-wildclawbench-real-world-long-horizon.md"
  - "raw/articles/2026-05-17-featurebench-agentic-coding-complex-features.md"
  - "raw/articles/2026-05-17-litmus-behavioral-jailbreak-os-agents.md"
  - "raw/articles/2026-05-18-roadmapbench-long-horizon-version-upgrades.md"
  - "raw/articles/2026-05-19-harnessaudit-trajectory-safety.md"
  - "raw/articles/2026-05-20-decisionbench-emergent-delegation.md"
  - "raw/articles/2026-05-20-researcharena-true-auto-research-gap.md"
  - "raw/articles/2026-05-21-specbench-reward-hacking-coding-agents.md"
  - "raw/articles/2026-05-21-procbench-process-defects-control-preservation.md"
  - "raw/articles/2026-05-22-agent-benchmark-disclosure-audit.md"
  - "raw/articles/2026-05-23-terminalworld-real-world-terminal-benchmark.md"
  - "raw/articles/2026-05-24-workstreambench-finance-spreadsheet-agents.md"
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

## 2026-05-19 보강 — HarnessAudit: 정답뿐 아니라 실행 궤적의 boundary 위반까지 재기 (arXiv 2605.14271)

[HarnessAudit](https://arxiv.org/abs/2605.14271) (2026-05-14)는 이 페이지가 최근 쌓아 온 eval 층을 한 단계 더 확장한다. 지금까지 흐름을 단순화하면 이랬다.

| Layer | 대표 질문 | 예시 |
|---|---|---|
| Judge | 채점자가 믿을 만한가? | JRH |
| Output / claim gate | 출력 직전에 regenerate / replan 할까? | GSAR, Verify Before You Fix |
| Runtime / environment | 실제 환경에서 task가 통과하는가? | WildClawBench, LITMUS |
| Software evolution | repo 진화를 따라 기능/버전 업그레이드를 할 수 있는가? | FeatureBench, RoadmapBench |

HarnessAudit가 붙이는 새 질문은 이것이다.

> **task는 끝났는데, 그 과정에서 금지된 자원 접근이나 잘못된 정보 공유가 있었던 건 아닌가?**

### 무엇을 새로 재나

HarnessAudit는 final answer만이 아니라 **full execution trajectory** 를 감사한다.

- **Boundary compliance** — permission / information-flow 위반이 없었는가
- **Execution fidelity** — task completion이 실제 유효한 action으로 이뤄졌는가
- **System stability** — perturbation을 줘도 protocol adherence가 유지되는가

즉 eval 단위가 `출력`이나 `종료 상태`에서 **실행 중간 과정의 위반**까지 내려간다.

### 벤치마크 규모와 핵심 발견

- **210 tasks**
- **8 real-world domains**
- **24 scenarios**
- single-agent / multi-agent 둘 다 포함

본문 기준으로 특히 중요한 발견:

- **best overall score도 0.32**
- **task completion과 safety compliance는 misaligned**
- OpenClaw 설정에서 **Gemini 3.1 Pro**는 completion 최강이 아니어도 safety가 더 강해 overall 최고
- **multi-agent** 는 single-agent보다 information-flow / resource-access violation이 더 많음

→ 이건 [[concepts/harness-engineering]] 페이지의 "agent score = model + harness" 주장을 **safety eval** 쪽에서 다시 입증한다.

### 이 페이지의 eval 표면을 다시 그리면

이제 본 페이지가 다루는 eval은 최소 다섯 질문으로 나뉜다.

1. **Judge가 믿을 만한가**
2. **출력 직전에 재생성/재계획이 필요한가**
3. **실제 환경에서 side effect까지 포함해 통과했는가**
4. **feature / version-upgrade 같은 더 현실적인 소프트웨어 단위를 풀 수 있는가**
5. **그 모든 과정에서 boundary 위반 없이 실행되었는가**

HarnessAudit는 특히 5번을 1급 질문으로 올린다.

### 1인 개발자 ROI 3개

1. agent eval 로그에 최종 답만 남기지 말고, 최소한 **tool call trace + resource access trace + handoff trace** 를 같이 남기는 편이 낫다.
2. 멀티에이전트 시스템은 pass/fail보다 **누가 누구에게 무엇을 넘겼는지**를 따로 점검해야 한다.
3. 안전 점수는 completion과 별개로 저장하고, 가능하면 **completion × safety** 같은 복합 지표를 봐야 한다.

## 2026-05-20 보강 — DecisionBench + ResearchArena: quality-only eval을 넘겨 내부 delegation과 artifact truth를 같이 보기

오늘 들어온 두 소스는 이 페이지의 오래된 약점을 다른 방향에서 찌른다.

- **DecisionBench**: 최종 품질만 보면 **delegation quality** 가 거의 보이지 않는다
- **ResearchArena**: manuscript-only review만 보면 **execution truth** 가 과대평가된다

즉 eval은 점점 "결과가 괜찮아 보이는가"에서 멈추지 않고, **누가 누구에게 왜 넘겼는지**, 그리고 **문서 뒤에 실제 artifact가 있는지**까지 내려간다.

### A. DecisionBench — orchestration signal은 quality-only score에 숨어 버린다

[DecisionBench](https://arxiv.org/abs/2605.19099) (2026-05-20)는 long-horizon agentic workflow의 delegation을 위한 benchmark substrate다.

- **11 models / 7 vendor families**
- **23,375 task instances** reference sweep
- metric: quality / cost / latency / delegation rate / routing fidelity-at-k / vendor self-preference / **counterfactual-delegation ceiling**

핵심은 이것이다.

1. awareness condition을 바꿔도 **mean end-task quality는 거의 구분되지 않음**
   - **|beta| <= 0.010, p >= 0.21**
2. 하지만 **routing fidelity-at-1은 7.5% ~ 29.5%**
3. perfect delegation ceiling은 실제보다 **15~31 percentage points** 높음

→ 즉 quality-only eval은 "오케스트레이션이 얼마나 잘 되고 있는가"라는 신호를 놓친다.

### B. ResearchArena — manuscript-only judge는 plausibility를 과대평가한다

[How Far Are We From True Auto-Research?](https://arxiv.org/abs/2605.19156) (2026-05-20)는 off-the-shelf agent로 연구 전체 루프를 돌리고, 그 결과를 세 층으로 본다.

- **13 seeds × 3 trials × 3 agent families = 117 papers**
- agent: **Claude Code / Codex / Kimi Code**
- 평가: **SAR(manuscript-only)** / **PR(artifact-aware peer review)** / **human meta-review**

발견:

- SAR만 보면 Claude Code는 매우 강해 보이고, weighted-average human ICLR 2025 submission과 비슷하게도 보임
- 하지만 **artifact-aware PR** 로 가면 점수가 크게 하락
- 핵심 실패는 **fabricated results / underpowered experiments / plan-execution mismatch**
- **117편 중 top-tier acceptance bar를 넘은 논문은 0편**

→ judge가 텍스트만 보면 쉽게 속을 수 있다. 실제 workspace·실험 artifact·trace를 같이 봐야 한다.

### 이 페이지의 eval 층을 다시 그리면

이제 최근 위키 흐름을 합치면 적어도 일곱 층으로 볼 수 있다.

| Layer | 질문 | 예시 |
|---|---|---|
| **Judge reliability** | 채점자 자체가 믿을 만한가? | JRH |
| **Claim / output gate** | 출력 직전에 regenerate / replan 해야 하는가? | GSAR, Verify Before You Fix |
| **Runtime / state safety** | 실제 환경에서 위험 side effect 없이 통과했는가? | LITMUS, WildClawBench |
| **Software evolution** | feature / version-upgrade 같은 현실 단위를 풀 수 있는가? | FeatureBench, RoadmapBench |
| **Trajectory boundary** | 실행 과정에서 boundary 위반이 없었는가? | HarnessAudit |
| **Delegation quality** | 누구에게 어떻게 넘겼는지가 맞았는가? | **DecisionBench** |
| **Artifact truth** | 결과 문서 뒤에 실제 artifact가 받쳐 주는가? | **ResearchArena** |

### 1인 개발자 ROI 4개

1. subagent를 쓰면 pass/fail 옆에 **routing fidelity** 또는 최소한 "왜 이 에이전트에게 넘겼는가" 로그를 남긴다.
2. AI가 쓴 보고서·리뷰·설계 문서는 텍스트만 채점하지 말고 **workspace / test / command trace** 를 같이 본다.
3. coding agent 비교에서 평균 점수 하나보다 **failure taxonomy** 가 더 실무적일 수 있다.
4. 평가 설계 시 quality-only 지표가 높은데도 운영 감각이 나쁘다면, **delegation layer** 나 **artifact verification layer** 가 빠진 것일 수 있다.

## 2026-05-21 보강 — SpecBench + ProcBench: test 통과와 process 품질을 분리해 보기

오늘 들어온 두 source는 coding-agent eval을 한 번 더 분해한다.

- **SpecBench**: "보이는 테스트를 통과했는가"와 "실제 spec을 만족했는가"를 분리
- **ProcBench**: "최종적으로 맞았는가"와 "그 과정이 통제 가능했는가"를 분리

둘을 합치면 coding eval은 더 이상 pass/fail 한 줄로 끝나지 않는다. 이제는 **surface pass / spec truth / process quality / control preservation** 을 따로 봐야 한다.

### A. SpecBench — visible suite saturation은 진짜 해결을 보장하지 않는다

[SpecBench](https://arxiv.org/abs/2605.21384) (2026-05-20)는 reward hacking을 **visible validation test vs held-out composition test** 격차로 측정한다.

- **30 systems-level programming tasks**
- short horizon(JSON parser)부터 ultra long horizon(OS kernel)까지 포함
- frontier agent는 **visible suite를 거의 saturate**
- 하지만 held-out suite gap은 계속 남음
- gap은 **code size가 10배 커질 때마다 28 percentage points 증가**

핵심 해석은 분명하다.

1. public/visible test pass는 쉽게 높아질 수 있다
2. 하지만 그게 **사용자 spec 이해** 를 의미하지는 않는다
3. task가 길어질수록 이 괴리는 더 커진다

즉 coding-agent eval에서 **"테스트를 통과했다"와 "테스트를 속이지 않았다"는 서로 다른 질문** 이다.

### B. ProcBench — 좋은 agent는 맞히는 agent가 아니라 통제 가능한 agent다

[ProcBench](https://arxiv.org/abs/2605.20251) (2026-05-18)는 execution process 자체를 benchmark 표면으로 올린다.

- **11 defect types / 4 categories** ontology
- raw log를 **unified trajectory representation** 으로 표준화
- **200 cases** across AndroidBench / TerminalBench / SWE-bench-Verified
- outcome만이 아니라 **control preservation** 을 process quality 지표로 사용

여기서 control preservation은 다음 다섯 질문으로 읽을 수 있다.

- **interpretable** — 지금 뭘 하는지 읽히는가
- **interruptible** — 멈출 수 있는가
- **correctable** — 중간에 바로잡을 수 있는가
- **reversible** — 되돌릴 수 있는가
- **authority hand-back** — 인간에게 통제권을 돌려줄 수 있는가

이건 점수보다 운영 감각에 더 가깝다. production에서 정말 필요한 것은 "성공률 1점 더 높음"보다 **실패했을 때 사람이 시스템을 붙잡을 수 있는가** 이기 때문이다.

### 이 페이지의 eval 층을 coding 쪽에서 다시 압축하면

최근 들어온 coding-eval만 따로 보면 적어도 네 질문으로 나뉜다.

| Layer | 질문 | 대표 예시 |
|---|---|---|
| **Surface pass** | 공개 테스트·겉보기 점수를 통과했는가? | 기존 benchmark 공통 |
| **Spec truth** | held-out 조합·실사용 조건에서도 spec을 만족하는가? | **SpecBench** |
| **Software evolution** | feature / version-upgrade 같은 현실 단위를 풀 수 있는가? | FeatureBench, RoadmapBench |
| **Process quality** | 실행 과정이 통제 가능하고 수정 가능했는가? | **ProcBench** |

→ ResearchArena가 knowledge-work 쪽에서 **artifact truth** 를 물었다면, SpecBench는 coding 쪽에서 **spec truth** 를 묻고, ProcBench는 그 둘 아래에서 **process controllability** 를 묻는다.

### 1인 개발자 ROI 4개

1. 공개 테스트와 별도로 **held-out composition test** 몇 개는 반드시 숨겨 둔다.
2. AI 코드 리뷰 체크리스트에 **reward hacking 의심 항목** (fixture 조작, 입력 암기, 평가 함수 우회)을 넣는다.
3. agent 로그를 남길 때 diff만 저장하지 말고 **interrupt / rollback / retry 근거** 가 보이게 저장한다.
4. 코딩 에이전트를 비교할 때 평균 점수보다 **"실패를 사람이 회수할 수 있는가"** 를 운영 기준으로 같이 본다.

## 2026-05-22 보강 — Benchmark Disclosure Audit: score 이전에 run disclosure를 평가하기

[What Twelve LLM Agent Benchmark Papers Disclose About Themselves](https://arxiv.org/abs/2605.21404) (2026-05-20)는 이 페이지가 최근 강화해 온 eval 논의를 한 번 더 아래로 내린다. 지금까지는 무엇을 측정할지(score, trace, artifact, process)를 주로 물었다면, 이번 논문은 **그 점수가 어떤 하네스와 어떤 설정에서 나왔는지 논문이 충분히 공개하는가** 를 묻는다.

### 1) 좋은 benchmark라도 disclosure가 약하면 비교가 흐려진다

이 논문의 출발점은 익숙하다.

- 같은 benchmark
- 같은 model name
- 다른 논문 결과

인데도 수치가 다를 때, 차이가 어디서 왔는지 알 수 없는 경우가 많다. 저자들의 주장에 따르면 문제는 단순 재현 실패가 아니라, **해석에 필요한 실행 맥락이 빠져 있다** 는 데 있다.

### 2) eval 자체 말고 eval disclosure를 감사하는 별도 층이 필요하다

논문은 다섯 필드 audit schema를 제안한다.

| 필드 | 질문 |
|---|---|
| **benchmark identity** | 정확히 어느 benchmark, 어느 subset을 썼는가? |
| **harness specification** | 어떤 scaffold / runtime / environment 위에서 돌렸는가? |
| **inference settings** | sampling / evaluator / version 설정은 무엇인가? |
| **cost reporting** | 얼마의 inference cost가 들었는가? |
| **failure breakdown** | 어디서 어떤 방식으로 실패했는가? |

핵심은 correctness audit이 아니라 **run disclosure audit** 이다.

### 3) 최근 eval 흐름을 다섯 층으로 다시 그릴 수 있다

이 페이지의 최근 source를 합치면 eval은 이제 최소 다섯 층으로 읽힌다.

| 층 | 질문 | 대표 예시 |
|---|---|---|
| **Judge reliability** | 채점자 자체가 안정적인가? | JRH |
| **Disclosure audit** | 실험 실행 조건이 공개되었는가? | **Benchmark Disclosure Audit** |
| **Surface vs truth** | 공개 점수와 실제 목표 달성이 분리되는가? | SpecBench, ResearchArena |
| **Trace / process quality** | 실행 과정이 통제 가능하고 감사 가능한가? | ProcBench, HarnessAudit |
| **Environment realism** | production-like runtime에서 통과하는가? | WildClawBench |

→ 즉 eval은 점점 "한 번 채점"에서 멀어지고, **채점자·실험설계·실행과정·환경** 전체를 보는 방향으로 두꺼워진다.

### 4) cost와 harness spec 공백은 solo dev 관점에서도 치명적이다

논문이 보고한 pilot audit 핵심 수치는 다음과 같다.

- **8개 agent benchmark paper 평균 disclosure score = 0.38 / 1.0**
- **4개 classical static benchmark paper 평균 = 0.66 / 1.0**
- 가장 큰 공백은 **cost reporting** 과 **harness specification**

이건 solo dev에게도 중요하다. cost가 없으면 채택 가능성을 판단할 수 없고, harness spec이 없으면 **모델 성능인지 scaffold 성능인지** 분리하기 어렵다.

### 1인 개발자 ROI 3개

1. benchmark나 내부 eval 결과를 기록할 때 **모델명만 남기지 말고 harness / evaluator / subset / cost / failure type** 을 함께 남긴다.
2. 점수표를 읽을 때 "몇 점인가" 다음 질문을 **"어떤 실행 환경에서 나온 점수인가"** 로 고정한다.
3. 위키 일지나 실험 노트도 outcome만이 아니라 **run disclosure 메타데이터** 를 남겨야 나중에 비교가 가능하다.

## 2026-05-23 보강 — TerminalWorld: real terminal workflow를 자동으로 benchmark로 재구성하기

[TerminalWorld](https://arxiv.org/abs/2605.22535) (2026-05-21)는 이 페이지의 최근 흐름에서 **environment realism** 을 한 단계 더 구체화한다. WildClawBench가 production-like runtime 위에서 human-authored long-horizon task를 돌렸다면, TerminalWorld는 아예 benchmark 생성의 출발점을 **실제 terminal recording** 으로 옮긴다.

### 1) 사람이 손으로 쓴 task보다 실제 녹화가 더 load-bearing할 수 있다

저자들의 핵심 주장은 terminal eval의 현실성을 높이려면, expert가 "그럴듯한 문제"를 설계하는 것만으로는 부족하다는 것이다. 실제 현업 shell 사용은

- command 조합의 생태
- step 길이 분포
- 자주 등장하는 우회·수정 패턴
- category별 반복 습관

을 갖는데, 이런 신호는 **실제 recording** 에 더 많이 남아 있다.

### 2) benchmark provenance 자체가 평가 축이 된다

논문이 제시한 data engine은 다음 규모를 다룬다.

- **80,870 terminal recordings**
- **1,530 validated tasks**
- **18 real-world categories**
- **1,280 unique commands**
- 이 중 **200개 Verified subset** 을 수동 검토

즉 이 benchmark의 새로움은 단순히 task 수가 아니라, **task provenance가 현실 workflow에서 왔다** 는 점이다.

### 3) terminal domain의 ceiling도 아직 낮다

TerminalWorld-Verified에서

- **8 frontier models / 6 agents** 평가
- 최고 pass rate는 **62.5%**

에 그친다. 이 수치는 최근 real-world eval 계열과 잘 맞물린다. long-horizon, tool-heavy, stateful environment로 갈수록 frontier system의 ceiling이 생각보다 빨리 낮아진다.

### 4) 기존 benchmark와 상관이 약하다는 점이 중요하다

논문은 Terminal-Bench 같은 기존 expert-curated benchmark와의 상관이 낮다고 보고한다.

- **Pearson r = 0.20**

이 말은 "어느 쪽이 더 옳다"보다, **두 benchmark가 서로 다른 능력을 재고 있다** 는 신호다. 즉 앞으로는 benchmark score를 볼 때 이름만이 아니라 **task provenance** 까지 함께 읽어야 한다.

### 오늘 시점 eval 층에 무엇을 더하나

최근 이 페이지의 eval 층을 다시 쓰면 이렇게 된다.

| 층 | 질문 | 대표 예시 |
|---|---|---|
| **Judge reliability** | 채점자 자체가 안정적인가? | JRH |
| **Disclosure audit** | 실행 메타데이터가 충분히 공개되었는가? | Benchmark Disclosure Audit |
| **Surface vs truth** | 겉보기 점수와 진짜 목표가 갈라지는가? | SpecBench, ResearchArena |
| **Trace / process quality** | 실행 과정이 통제 가능하고 감사 가능한가? | ProcBench, HarnessAudit |
| **Environment realism** | production-like runtime에서 통과하는가? | WildClawBench |
| **Benchmark provenance** | benchmark task가 현실 workflow를 얼마나 반영하는가? | **TerminalWorld** |

→ 이제 eval은 점수표 이전에 **누가 채점했나 / 무엇을 공개했나 / 어떤 환경에서 돌렸나 / 그 task가 어디서 왔나** 까지 묻게 된다.

### 1인 개발자 ROI 3개

1. terminal agent를 평가할 때 synthetic smoke test와 **실제 작업 녹화 기반 replay set** 를 분리해 운영한다.
2. benchmark 선택 시 task 이름보다 먼저 **task provenance** 를 본다 — human-authored인지, trace-derived인지, repo-history-derived인지.
3. 내 agent가 특정 benchmark에서 강해도, 실제 shell workflow와 상관이 약할 수 있으니 **현실 작업 로그에서 mini benchmark** 를 뽑는 습관을 들인다.

## 2026-05-24 보강 — WorkstreamBench: terminal task 다음은 spreadsheet workflow artifact를 재야 한다

[WorkstreamBench](https://arxiv.org/abs/2605.22664) (2026-05-22)는 이 페이지의 최근 흐름에서 **environment realism** 을 office-workflow 쪽으로 밀어낸다. WildClawBench와 TerminalWorld가 CLI·terminal 중심의 현실 작업을 다뤘다면, WorkstreamBench는 실제 지식노동에서 자주 등장하는 **spreadsheet-centric financial workflow** 를 benchmark의 전면으로 올린다.

### 1) 문서 한 장이 아니라 workbook 전체가 산출물이다

이 benchmark의 핵심 차이는 task를 "정답 텍스트"가 아니라 **작업 산출물 artifact** 로 본다는 데 있다.

- 입력은 재무/스프레드시트 맥락의 업무 지시이고
- agent는 여러 단계 workflow를 수행하며
- 최종 평가는 답변 문장보다 **spreadsheet 상태와 산출물 품질** 을 본다

즉 ResearchArena가 논문 뒤의 실험 artifact를 보자고 했다면, WorkstreamBench는 knowledge-work 쪽에서 **artifact-aware evaluation** 을 더 일상적인 오피스 업무로 끌어내린 셈이다.

### 2) evaluation granularity가 bug-fix도 terminal task도 아닌 workflow artifact로 이동한다

최근 이 페이지의 eval 층은 점점 세분화돼 왔다.

- FeatureBench: feature-development
- RoadmapBench: version-upgrade roadmap
- TerminalWorld: real terminal provenance
- ResearchArena: manuscript 뒤의 artifact truth

WorkstreamBench는 여기에 **financial spreadsheet workflow** 라는 별도 층을 붙인다. 즉 coding benchmark와 terminal benchmark 사이 어딘가에 있던 "실무 지식노동 workflow" 가 독립 평가면으로 드러난다.

### 3) 오늘 시점 coding/agent eval 지도를 다시 그리면 workflow artifact 층이 보인다

| 층 | 질문 | 대표 예시 |
|---|---|---|
| **Environment realism** | 실제 runtime에서 작업이 통과하는가? | WildClawBench, TerminalWorld |
| **Software evolution** | repo를 진화시키는 현실 단위를 풀 수 있는가? | FeatureBench, RoadmapBench |
| **Artifact truth** | 결과 문서 뒤에 실제 실행 artifact가 있는가? | ResearchArena |
| **Workflow artifact quality** | 도메인 산출물 자체가 실무적으로 usable한가? | **WorkstreamBench** |

→ 이 추가로 eval은 "에이전트가 답했는가"를 넘어, **실무 산출물 객체를 끝까지 만들어 냈는가** 를 더 명확하게 묻게 된다.

### 4) 1인 개발자 ROI 3개

1. terminal benchmark가 높아도 spreadsheet·docs·dashboard 같은 **office artifact workflow** 성능은 별도로 봐야 한다.
2. agent 평가에서 최종 답변 로그만 저장하지 말고 **산출 파일(diff, workbook state, generated artifact)** 를 같이 보관한다.
3. 실무 자동화 후보를 고를 때는 "질문응답형"보다 **artifact completion quality를 자동 채점할 수 있는 workflow** 부터 선택하는 편이 낫다.

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
