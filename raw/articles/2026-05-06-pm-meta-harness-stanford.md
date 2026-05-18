---
title: "Meta-Harness: End-to-End Optimization of Model Harnesses (arXiv 2603.28052)"
source_url: "https://arxiv.org/abs/2603.28052"
source_type: "arxiv-paper"
authors: ["Yoonho Lee", "Roshen Nair", "Qizheng Zhang", "Kangwook Lee", "Omar Khattab", "Chelsea Finn"]
affiliations: ["Stanford", "KRAFTON", "MIT"]
published: 2026-03-30
fetched: 2026-05-06
tags: [harness-engineering, meta-learning, agentic-coding, terminal-bench, filesystem-memory, arxiv]
status: ingested
---

# Meta-Harness: End-to-End Optimization of Model Harnesses

> arXiv:2603.28052v1 [cs.AI], 2026-03-30. Stanford·KRAFTON·MIT. **filesystem-based agentic proposer**가 prior 후보의 source code·trace·score를 grep/cat으로 직접 읽으며 새 harness를 제안. TerminalBench-2 #1 (Haiku 4.5 부문).

## 메타

- **Title**: Meta-Harness: End-to-End Optimization of Model Harnesses
- **Authors**: Yoonho Lee, Roshen Nair, Qizheng Zhang (Stanford); Kangwook Lee (KRAFTON); Omar Khattab (MIT); Chelsea Finn (Stanford)
- **arXiv**: <https://arxiv.org/abs/2603.28052>
- **Submitted**: 2026-03-30
- **Code**: <https://github.com/stanford-iris-lab/meta-harness-tbench2-artifact>
- **Project page**: <https://yoonholee.com/meta-harness/>

## Abstract (verbatim)

> "The performance of large language model (LLM) systems depends not only on model weights, but also on their harness: the code that determines what information to store, retrieve, and present to the model. Yet harnesses are still designed largely by hand, and existing text optimizers are poorly matched to this setting because they compress feedback too aggressively: they are memoryless, condition only on scalar scores, or restrict feedback to short templates or summaries. We introduce Meta-Harness, an outer-loop system that searches over harness code for LLM applications. It uses an agentic proposer that accesses the source code, scores, and execution traces of all prior candidates through a filesystem."

## 핵심 아이디어 — Filesystem as Memory

기존 text optimizer (OPRO/TextGrad/AlphaEvolve/GEPA/Feedback Descent)는 feedback을 너무 빡세게 압축한다 (~0.002–0.026 MTok/iter). Meta-Harness는 **10 MTok/iter**, 즉 **3 orders of magnitude 더 많은 컨텍스트**.

핵심 메커니즘:

1. 모든 prior 후보의 **source code · execution trace · score**를 디렉터리 트리로 저장.
2. proposer는 **coding agent** (raw LLM이 아님) — `grep`·`cat` 같은 표준 도구로 *선택적*으로 inspect.
3. 한 evaluation이 최대 10,000,000 토큰의 진단 정보를 만든다. proposer가 이 중 **median 82개 파일/iter**을 읽고 **20+개 prior 후보**를 참조 (가장 demanding setting).

```
[evaluation] → [filesystem: source + trace + score] → [coding-agent proposer]
                       ↑                                       │
                       └────── new harness candidate ──────────┘
```

## Text optimizer와의 차이 (Table 1 재구성)

| Method | History | Log content | MTok/iter |
|--------|---------|-------------|-----------|
| OPRO | Window | (solution, score) pairs | 0.002 |
| TextGrad | Last | textual feedback on current artifact | 0.015 |
| AlphaEvolve | Window | program DB + scores | 0.022 |
| GEPA | Summary | reflective feedback from rollout | 0.008 |
| Feedback Descent | Summary | comparison + textual feedback | 0.012 |
| TTT-Discover | Window | prev. solution fragment | 0.026 |
| **Meta-Harness** | **Full** | **all logs and scores** | **10.0** |

핵심 주장: harness는 long horizon 효과가 강해서, 압축된 feedback에서는 **early decision → late failure** trace가 사라진다.

## 벤치마크 결과

1. **Online text classification** — Agentic Context Engineering (ACE, Zhang et al.) 대비 **+7.7 points**, 그것도 **4× fewer context tokens**. 다음 best optimizer가 60 proposal에서 도달한 정확도를 Meta-Harness는 **4 evaluation**으로 도달.
2. **Retrieval-augmented math reasoning** — 200 IMO-level 문제, 5개 held-out 모델 평균 **+4.7 points** (single discovered harness, transfer evidence).
3. **Agentic coding (TerminalBench-2)** — Terminus-KIRA 능가, **Haiku 4.5 부문 #1**. (cf. AHE 2604.25850은 같은 벤치에서 69.7%→77.0%로 보고 — 두 논문 모두 TerminalBench-2가 새로운 표준 기준임을 확인.)

## "Self-Evolving Harness" 라인 안에서의 위치

| | Meta-Harness (2603.28052) | Last Harness (2604.21003) | AHE (2604.25850) |
|---|---------------------------|---------------------------|------------------|
| 핵심 추상화 | Filesystem-based **history** access by coding agent | 2-Level meta-evolution: `H`와 `Λ` 둘 다 학습 | **3 observability pillars** for evolution loop |
| 단위 | 한 task 안에서 outer-loop search | task 간 메타-러닝 | 한 task 안에서 evolution + 관측 |
| 새로움 | 압축 안 된 feedback이 가능하게 한 **agent 프로포저** + 표준 도구 | `Λ` 자체를 학습 객체로 격상 | 자동 진화가 trial-and-error 안 되게 하는 결정적 가드레일 |
| 한 줄 비유 | "git blame on the optimizer" | "learning to learn the optimizer" | "OpenTelemetry for the optimizer" |

세 논문이 같은 라인이지만 **무엇을 학습할 것인가**(filesystem-mediated raw history vs. evolution protocol vs. observability invariants)에서 분기한다.

## 인용 (≤25 words each)

> "The harness — the code that determines what to store, retrieve, and show to the model — often matters as much as the model itself."

> "Compressed feedback often removes the information needed to trace downstream failures to earlier harness decisions."

> "Richer access to prior experience can enable automated harness engineering."

## 1인 개발자 함의

- **filesystem-as-memory 패턴이 우리 위키 자체와 isomorphic** — `wiki/` 가 prior 후보, `log.md`가 score-trace, `index.md`가 인덱스. Meta-Harness가 코드에서 한 일을 우리는 **개념 위키에서 이미 하고 있다**.
- **proposer = coding agent** insight: "raw LLM이 prompt로 history를 받는 것"보다 "agent가 grep으로 history를 *선택*하는 것"이 메모리 압축의 정답이라는 시그널. 우리가 Claude Code를 통해 wiki에 접근하는 패턴과 정확히 일치 → AHE의 *experience observability*와도 같은 방향.
- **TerminalBench-2가 새로운 SOTA 기준점** — Codex-CLI 71.9% / AHE 77.0% / Meta-Harness #1(Haiku 4.5). Anthropic 모델로 재현 가능한 벤치 — `examples/` 하네스를 평가할 때 이 벤치마크 라이트를 참조 가능.

## 위키와의 연결

- [[concepts/harness-engineering]] — Self-evolving harness 라인의 세 번째 데이터 포인트.
- [[patterns/llm-wiki]] — Meta-Harness의 filesystem-history와 LLM-Wiki 패턴의 동형성.
- [[patterns/harness-engineering-casebook]] — 우리 케이스북 = 사람 손 Λ. 이걸 코드로 옮기면 Meta-Harness 비슷해진다.
- [[concepts/gen-ai-observability]] — execution trace를 1차 시민으로 다루는 점에서 OTel GenAI semconv와 자연 결합.

## 이 논문이 보강한 위키 (수술적)

- `concepts/harness-engineering.md` — "2026-05-06 PM 보강" 섹션의 (3) tooling implementation.
