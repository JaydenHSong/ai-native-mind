---
title: "WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation (arXiv 2605.10912)"
source_url: "https://arxiv.org/abs/2605.10912v1"
source_type: "arxiv-paper"
authors: ["InternLM team"]
published: 2026-05-11
fetched: 2026-05-14
tags: [benchmark, evaluation, long-horizon, multimodal, bilingual, docker, openclaw, native-runtime, arxiv]
status: ingested
---

# WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation

> arXiv:2605.10912v1, 2026-05-11. InternLM. **Native-runtime** benchmark: 60 human-authored bilingual multimodal tasks, real CLI agent harnesses (OpenClaw / Claude Code / Codex / Hermes Agent), Docker container per task. Code: <https://github.com/InternLM/WildClawBench>.

## 메타

- **Title**: WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation
- **Authors**: InternLM team
- **arXiv**: <https://arxiv.org/abs/2605.10912v1> | HTML: <https://arxiv.org/html/2605.10912v1>
- **GitHub**: <https://github.com/InternLM/WildClawBench>
- **Domain**: 코딩·실무 작업 전반. CLI agent harness가 실제 운영되는 *runtime* 안에서 평가.

## 한 줄 요약

**"기존 benchmark는 sandbox·short-horizon·mock-API·final-answer check라 production을 못 비춘다 — 60개 human-authored task를 Docker로 격리, 실제 agent harness(OpenClaw/Claude Code/Codex/Hermes)로 돌려 보니 19개 frontier 모델 중 *최고 Opus 4.7도 62.2%*, 나머지는 모두 60% 미만이다."**

## 핵심 주장

### 1) "Native runtime"이라는 슬로건

기존 benchmark의 4 가정과 그 한계:

| 기존 가정 | 한계 | WildClawBench의 대응 |
|---|---|---|
| **Synthetic sandbox** (가짜 OS) | 실세계 side effect 없음 | Real Docker container, real shell |
| **Short-horizon** (수 분 미만) | 멀티 스텝 누적 오류 못 잡음 | 평균 ~8분, 20+ tool calls/task |
| **Mock-service APIs** | 실 API의 latency·error mode 미반영 | Real tools (실 CLI, real network에 한해) |
| **Final-answer check** | 과정 오류 무시 | Hybrid grading (rule + state audit + LLM/VLM judge) |

### 2) 60 task의 구성

- **언어**: 36 English + 24 Chinese (bilingual)
- **모달리티**: 26 multimodal + 34 pure-text
- **6 thematic categories** (이름 본문 확인 필요; abstract 수준으론 "thematic" 표기만 확보)
- **평균 작업 길이**: 8분 wall-clock, 20+ tool calls
- **Harness 선택**: OpenClaw / Claude Code / Codex / Hermes Agent 중 하나로 task별 격리 실행

### 3) Hybrid grading

| 구성 | 무엇을 잡나 |
|---|---|
| **Deterministic rule-based check** | 파일 생성, 정확한 출력 형식, exit code 등 |
| **Environment-state auditing** | side effect (FS, network, sandbox 외부 영향) |
| **LLM/VLM judge** | semantic verification — 결과의 *의미* 평가 |

→ 어제(2026-05-13) GSAR/VBYF/A-Harness의 *output-gate 3 도메인*이 single task 단위였다면, WildClawBench는 **trace 전체에 같은 3 신호를 합쳐서 한 task를 채점**한다.

### 4) 정량 결과

- **19 frontier model 평가**
- **Best: Claude Opus 4.7 → 62.2%** (overall, OpenClaw harness)
- **다른 모든 모델 < 60%**
- 모델 capability 곡선이 *real-world long-horizon*에서 평탄 — abstract 안에는 "ceiling이 낮다"는 강한 주장.

> 이 정량 — 19 model × ≤62.2% 천장 — 은 모델 capability만으로 benchmark가 안 채워진다는 *경험적* 증거. Zhong/Zhu의 "capability emerges from model–harness–environment" thesis와 자연스럽게 짝.

## 본 위키 함의

- [[concepts/llm-evaluation]] — 본 위키의 eval 페이지가 *judge·dataset·CI* 위주였다면, WildClawBench는 *환경 자체*가 eval의 일부라는 한 layer. JRH(judge fragility)와 짝지으면: "judge도 약하고 환경도 약하니 둘 다 측정해라".
- [[concepts/harness-engineering]] — 이 benchmark는 *harness 4종(OpenClaw/Claude Code/Codex/Hermes)*을 task별로 바꿔 가며 채점 가능 → harness 자체를 종속변수로 측정하는 첫 공개 framework 후보.
- [[patterns/harness-engineering-casebook]] — 30 case matrix에서 "코딩 도메인" 칸의 정량 데이터로 직접 인용 가능 (Opus 4.7 62.2% / 19 모델 < 60%).
- [[concepts/context-rot-hallucination]] — long-horizon에서 누적 오류가 어떻게 score를 끌어내리는지 정량으로 짝 (어제 GSAR의 4-way claim typology 재료).

## 한계 / 주의

- **본 위키는 abstract + search-engine snippet 수준만 확보**. 6 thematic category의 *이름*, 정확한 모델 19종, 점수 분포 detail은 본문 확인 필요.
- "Opus 4.7"이라는 model 표기는 일부 sources(Anthropic news, llm-stats, Vellum)의 latest naming과 일치. 본 위키의 [[journal/2026-05-13]] GSAR 4-judge에서도 같은 "opus-4-7" 표기를 썼다 — 일관 유지.
- Benchmark는 May 11 release → 60 task가 "frozen"인지, 추후 leakage 우려가 있는지 본문 확인 필요. 1인 개발자 ROI 산정 시 *내 워크플로의 작업 길이 분포*가 8분/20-tool calls와 닮았는지 먼저 비교.

## 참고

- 원문: <https://arxiv.org/abs/2605.10912v1>
- HTML 본문: <https://arxiv.org/html/2605.10912v1>
- 코드 / 데이터: <https://github.com/InternLM/WildClawBench>
- InternLM 조직: <https://github.com/InternLM>
- Opus 4.7 spec 참고: <https://www.anthropic.com/news/claude-opus-4-7>
