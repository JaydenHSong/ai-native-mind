---
title: "WorkstreamBench: Evaluating LLM Agents on End-to-End Spreadsheet Tasks in Finance (arXiv 2605.22664)"
source_url: "https://arxiv.org/abs/2605.22664"
source_type: "arxiv-paper"
authors: ["Thomson Yen", "Julian Poeltl", "Harshith Srinivas Gear", "Yilin Meng", "Joshua Fan", "Adam Shen", "Yili Liu", "Ali Bauyrzhan", "Siri Du", "Haoyang Liu", "Daniel Guetta", "Hongseok Namkoong"]
published: 2026-05-21
fetched: 2026-05-24
tags: [evaluation, benchmark, spreadsheet, finance, workflow, artifact-quality, long-horizon, agentic-coding, arxiv]
status: ingested
---

# WorkstreamBench: Evaluating LLM Agents on End-to-End Spreadsheet Tasks in Finance

> arXiv:2605.22664. spreadsheet QA나 single-formula edit가 아니라, **재무 모델링·forecasting·scenario analysis 같은 end-to-end spreadsheet workflow** 를 agent가 얼마나 professional하게 수행하는지 재는 benchmark.

## 메타

- **Title**: WorkstreamBench: Evaluating LLM Agents on End-to-End Spreadsheet Tasks in Finance
- **Authors**: Thomson Yen · Julian Poeltl · Harshith Srinivas Gear · Yilin Meng · Joshua Fan · Adam Shen · Yili Liu · Ali Bauyrzhan · Siri Du · Haoyang Liu · Daniel Guetta · Hongseok Namkoong
- **Link**: <https://arxiv.org/abs/2605.22664>
- **Published**: 2026-05-21
- **Subjects**: Artificial Intelligence (cs.AI)

## 한 줄 요약

**"agent가 스프레드시트를 만든다는 말은 셀 하나 맞추는 게 아니라, 사람이 읽고 고치고 재사용할 수 있는 금융 산출물을 끝까지 만든다는 뜻이다."**

## 핵심 주장

### 1) 기존 spreadsheet benchmark는 너무 국소적이다

논문은 기존 spreadsheet benchmark가 주로 다음에 머문다고 본다.

- question-answering
- single-formula edit
- 국소 cell manipulation

하지만 실제 finance workflow에서는

- financial modeling
- forecasting
- scenario analysis
- stakeholder review / revision

처럼 **artifact 전체 구조** 가 중요하다.

### 2) spreadsheet quality는 단일 accuracy 점수로 안 끝난다

재무 스프레드시트는 정답 셀만 맞추면 끝나는 산출물이 아니다. 이후 사람이 검토·수정·확장해야 하므로, 논문은 평가 taxonomy를 세 축으로 잡는다.

- **Accuracy** — 계산과 결과가 맞는가
- **Formula** — 수식이 적절하고 유지보수 가능하게 구성됐는가
- **Format** — 가독성, 구조, professional presentation이 갖춰졌는가

즉 benchmark가 정답률을 넘어 **artifact professionalism** 을 측정하려고 한다.

### 3) 강한 모델도 professional finance 수준에는 아직 못 미친다

abstract 기준 핵심 관찰은 다음이다.

- Claude family가 benchmark를 선도
- qualitative review에서도 가장 professional-looking output 생성
- 그래도 strongest agent조차 **professional finance standard** 에 자주 미달
- difficulty가 **few chained calculations** 를 넘으면 급격히 성능 저하

핵심 메시지는 모델 순위보다 더 선명하다.

> **실제 업무형 스프레드시트는 단순 계산 문제보다 훨씬 더 긴 구조적 품질을 요구한다.**

## 기여점

1. spreadsheet eval을 **cell-level correctness** 에서 **workflow artifact quality** 로 확장
2. finance domain처럼 경제적 중요도가 큰 workflow를 benchmark 중심으로 끌어옴
3. output quality를 **Accuracy / Formula / Format** 의 다차원 rubric로 나눔

## 실무적 시사점

1. business workflow agent를 재려면, pass/fail 하나보다 **정확도 + 구조 + 가독성** 을 분리해야 한다.
2. end-to-end artifact domain에서는 "정답을 냈는가"보다 **사람이 이어서 쓸 수 있는가** 가 benchmark 핵심이 된다.
3. coding agent와 달리 spreadsheet·docs·slides 같은 artifact agent는 앞으로 **professional review rubric** 이 eval의 큰 축이 될 가능성이 높다.

## 기존 지식과의 연결

- [[concepts/llm-evaluation]] — FeatureBench가 bug-fix를 넘어 feature-development를 측정했다면, WorkstreamBench는 code 바깥의 **business artifact workflow eval** 을 추가한다.
- [[concepts/harness-engineering]] — high-level instruction → complete artifact 생산은 하네스가 intermediate checks를 어디에 둘지 다시 묻게 만든다.
- [[patterns/ai-code-review]] — structural review가 code에만 필요한 게 아니라 spreadsheet artifact에도 필요하다는 힌트가 된다.
- [출처](raw/articles/2026-05-23-terminalworld-real-world-terminal-benchmark.md) — TerminalWorld가 terminal provenance를 강조했다면, WorkstreamBench는 **artifact professionalism rubric** 을 강조한다.

## 한계 / 메모

- abstract만으로는 task 수, agent 수, 세부 score breakdown이 제한적이다.
- finance domain 특화라 일반 office workflow로의 외삽은 조심해야 한다.
- 다만 "few chained calculations를 넘으면 급락" 이라는 관찰만으로도 workflow complexity ceiling 신호는 충분히 강하다.

## 참고

- arXiv abs: <https://arxiv.org/abs/2605.22664>
