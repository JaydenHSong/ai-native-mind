---
title: "Judge Reliability Harness: Stress Testing the Reliability of LLM Judges (arXiv 2603.05399)"
source_url: "https://arxiv.org/abs/2603.05399"
source_type: "arxiv-paper"
authors: ["Sunishchal Dev", "Andrew Sloan", "Joshua Kavner", "Nicholas Kong", "Morgan Sandler (RAND Corporation)"]
published: 2026-03-05
fetched: 2026-05-12
tags: [evaluation, llm-judge, reliability, stress-testing, benchmarks, rand, arxiv]
status: ingested
---

# Judge Reliability Harness: Stress Testing the Reliability of LLM Judges

> arXiv:2603.05399v1 [cs.AI], 2026-03-05. Dev et al. (RAND Corporation, Santa Monica, CA). License: CC BY 4.0. Code: <https://github.com/RANDCorporation/judge-reliability-harness>

## 메타

- **Title**: Judge Reliability Harness: Stress Testing the Reliability of LLM Judges
- **Authors**: Sunishchal Dev, Andrew Sloan, Joshua Kavner, Nicholas Kong, Morgan Sandler
- **Affiliation**: RAND Corporation
- **arXiv**: <https://arxiv.org/abs/2603.05399>
- **HTML**: <https://arxiv.org/html/2603.05399v1>
- **PDF**: <https://arxiv.org/pdf/2603.05399v1>
- **Code**: <https://github.com/RANDCorporation/judge-reliability-harness>

## 한 줄 요약

**"LLM-as-judge는 task-dependent하게 무너진다"** — 4개 frontier judge × 4개 benchmark × 8개 perturbation으로 stress test. **어떤 judge도 universally reliable하지 않다.** 의외 결과: 작은 오픈 모델(Llama 4 Maverick 17B)이 premium 모델만큼 reliable이면서 cost는 분의 1.

## 핵심 주장

### 1) 평가의 평가 = 측정되지 않는 위험

- LLM-as-judge가 modern benchmarking의 core element가 됐음에도 reliability는 "rarely evaluated systematically"
- Point estimate of human-rater agreement on small validation sets ≠ realistic input variation에 대한 robustness
- **"이 gap이 evaluation 결과에 얼마나 confidence를 둘지 결정 불가능하게 만든다"**

### 2) JRH 5개 perturbation family

| Family | 설명 | 기대 동작 |
|---|---|---|
| **Label flip** (discriminative) | rubric을 위반하도록 응답을 다시 씀, 토픽·구조 보존 | judge 결정이 *뒤집혀야* 함 |
| **Format invariance** | 시각 레이아웃만 변경 (빈 줄, 공백, 인덴트) | 점수가 *불변*이어야 함 |
| **Semantic paraphrase** | 의미·사실 보존, 단어·구조만 변경 | 점수가 *동일*해야 함 |
| **Verbosity bias** | 동일 내용으로 짧고/긴 변형 | 점수가 *동일*해야 함 (verbosity로 over-reward 금지) |
| **Stochastic stability** | 동일 입력 반복 샘플링 | 점수가 *일관*해야 함 |

추가: **Synthetic Ordinal** (multi-class scoring 용 temperature ramping + few-shot + cosine similarity validator), **Agentic Mode** (Inspect AI eval files ingest → transcript 변형으로 rubric 위반/충족 시나리오 생성, HITL UI 포함).

### 3) 4개 benchmark × 4개 judge

- **Benchmarks**: FORTRESS (national security misuse), HarmBench (안전 정책 위반 binary), PERSUADE (6th-12th학년 essay ordinal 1–6), AgentHarm (multi-step agent transcript)
- **Judges**: GPT-4o, Claude Sonnet 4.5 (AgentHarm에서는 Opus 4.5 — 자연어 추론과 구조화 점수 inconsistency 관찰), Llama 4 Maverick 17B (AWS Bedrock), Gemini 2.5 Pro
- **Response model**: GPT-4o mini (benchmark response 생성), Gemini 3 Pro (perturbation validator)

## 정량 데이터

### Persuade (ordinal 1–6 가장 fragile)

| Judge | Mean | Std Dev | Min | Max |
|---|---|---|---|---|
| Claude Sonnet 4.5 | 37.26% | **17.18%** | 20% | 60% |
| GPT-4o | 48.43% | 16.61% | 30% | 77.42% |
| Gemini 2.5 Pro | 53.20% | **11.10%** | 40% | 70% |
| LLama 4 Maverick | 52.62% | 15.05% | 30% | 70.97% |

- **Pearson ρ vs ground truth ordinal**: Sonnet 0.901, GPT-4o 0.960, Gemini 0.935, Llama 0.953
- **MAE**: Sonnet 0.48, GPT-4o 0.23, Gemini 0.34, Llama 0.29
- **semantic_paraphrase**: Gemini 2.5 Pro **40% floor** (worst), Sonnet 0.327 ρ (worst)

### HarmBench (binary 가장 stable)

| Judge | Mean | Std Dev |
|---|---|---|
| Claude Sonnet 4.5 | 60.50% | 11.13% (lowest volatility) |
| GPT-4o | 62.33% | 14.88% |
| Gemini 2.5 Pro | 62.33% | **17.17%** (highest) |
| LLama 4 Maverick | **73.92%** (highest mean) | 16.33% |

→ **inverse volatility pattern** between Persuade and HarmBench — Claude는 binary에서 안정, ordinal에서 불안정 / Gemini는 정반대. **Reliability는 model property가 아니라 task × model property**.

### AgentHarm (agentic mode)

| Model | Accuracy | FPR | FNR |
|---|---|---|---|
| GPT-4o | **0.906** | 0.063 | 0.125 |
| Claude Opus 4.5 | 0.813 | 0.063 | **0.313** (high FN — subtle violation 누락) |
| Gemini 2.5 Pro | 0.813 | **0.250** (high FP — corrected transcript을 위반으로 오판) |  0.125 |
| Llama 4 Maverick 17B | **0.906** | 0.063 | 0.125 |
| Best Trio Ensemble | 0.906 | 0.063 | 0.125 |

→ **asymmetric failure modes** in agentic settings — Free-response judge 성능이 agentic으로 generalize되지 않음.

### Cost Efficiency ($ per accuracy point, ↓ better)

| Benchmark | Llama 4 Maverick 17B | Claude Sonnet 4.5 | GPT-4o | Gemini 2.5 Pro |
|---|---|---|---|---|
| Fortress | **0.0016** | 0.0230 | 0.0150 | 0.0108 |
| Persuade | **0.0008** | 0.0260 | 0.0430 | 0.0073 |
| HarmBench | **0.0015** | 0.0352 | 0.0190 | 0.0132 |
| AgentHarm | **0.0001** | 0.0050 | 0.0013 | 0.0007 |
| **Overall** | **0.0010** | 0.0223 | 0.0196 | 0.0080 |

Llama 4 Maverick 17B input $0.24/1M, output $0.97/1M vs Claude Opus 4.5 $5/$25, GPT-4o $2.50/$10.

## 5대 결론 (저자 Discussion)

1. **Judge robustness는 task-dependent** — binary에 stable한 judge가 ordinal에 무너짐
2. **Formatting perturbation > semantic perturbation** drop — **format이 의미보다 더 큰 영향**. typos/whitespace가 downstream benchmark leaderboard에 instability 주입.
3. **Agentic mode는 qualitatively 다른 failure** — Opus 4.5 high-FN (subtle violation miss), Gemini 2.5 Pro high-FP (corrected transcript 오판)
4. **Cost-reliability nontrivial** — "strongest = best judge" 가정 무너짐. Llama 4 Maverick이 premium과 매치하면서 1/10 cost.
5. **모든 4 judge가 어느 benchmark에서도 uniformly reliable 아님** — pre-deployment reliability test가 필수.

## 위키 연결

- **[[concepts/llm-evaluation]]** — Evals 페이지의 LLM-as-Judge 섹션에 직접 보강. "judge가 채점할 수 있다" → "judge도 채점되어야 한다"로 한 단계 진전.
- **[[comparisons/agent-eval-frameworks]]** — DeepEval/LangSmith/Braintrust/Langfuse/Inspect AI/RAGAS 6대장 비교에 *meta-eval* 한 줄 추가 후보 — 이들 모두 LLM-judge를 호스팅하지만 reliability 측정은 별도 필요.
- **[[concepts/gen-ai-observability]]** — Datadog 1,000+ trace 사실(2026-05-03)과 함께 reliability gap 정량 근거 추가.
- **[[concepts/context-rot-hallucination]]** — judge도 5대 실패 패턴에서 자유롭지 않음. format-invariance 실패가 새로운 failure mode 카테고리.

## 메모

이 논문은 **3월 5일 출간**이라 5월 12일 ingest 기준으로 *recent but not breaking news*. 그러나 위키에 LLM-as-judge 자체에 대한 reliability 측정 페이지가 없음 — 우리 [[concepts/llm-evaluation]]은 "LLM이 채점한다"만 다루고 *그 채점이 reliable한지*는 비어 있음. 이 gap을 채워야 한다.

핵심 함의 — 우리가 [[comparisons/agent-eval-frameworks]]에서 6 프레임워크를 다뤘는데, 이들 모두 LLM-judge 백엔드를 쓰면서 judge 자체의 reliability는 도구마다 다르게 다룬다(혹은 안 다룬다). JRH는 *프레임워크 비교의 한 layer 아래*에 있는 도구 — "evaluator의 evaluator".

또 하나: **Llama 4 Maverick 17B가 cost-reliability sweet spot**. 우리 [[patterns/ai-cost-management]]의 model routing 디시전 트리에 "judge용은 cheap & reliable open model"이라는 분기 추가 가능. 즉효 ROI: 우리 위키의 어떤 eval 시나리오에서도 *judge model을 1차로 Llama 4 Maverick으로 검증* → cost budget 90%+ 절감 가능성.

Limitation: down-sampling 10 samples per benchmark (cost 제약). Stratified sampling으로 representativeness는 확보했지만 통계 power는 제한. Persuade ordinal의 multi-class scoring 어려움은 명시적 future work로 남김.
