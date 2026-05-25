---
title: "Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents (arXiv 2605.21347)"
source_url: "https://arxiv.org/abs/2605.21347"
source_type: "arxiv-paper"
authors: ["Manglik, Akshay", "Shanker, Apaar", "Deshpande, Kaustubh", "Qin, Jason", "Maurya, Yash", "Chatrath, Veronica", "Kalmath, Vijay S.", "Lentz, Levi", "Yuan, Xue"]
published: 2026-05-20
fetched: 2026-05-21
tags: [harness-engineering, evaluation, observability, trace-diagnostics, multi-agent, scaffold-improvement, production-corpora, arxiv]
status: ingested
---

# Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents

> arXiv:2605.21347. 개별 trace 몇 개를 손으로 읽는 대신, **trace 집합 전체에서 반복 패턴을 뽑아 근거와 함께 설명하는 진단 하네스**를 제안한다.

## 메타

- **Title**: Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents
- **Authors**: Akshay Manglik · Apaar Shanker · Kaustubh Deshpande · Jason Qin · Yash Maurya · Veronica Chatrath · Vijay S. Kalmath · Levi Lentz · Xue Yuan
- **Link**: <https://arxiv.org/abs/2605.21347>
- **Focus**: corpus-level trace diagnostics, grounded natural-language insights, scaffold improvement, evidence-backed reports

## 한 줄 요약

**"에이전트 실패 진단은 trace 몇 개를 읽고 감으로 고치는 단계에서, trace 코퍼스 전체를 가설-검증해 근거 있는 개선 리포트를 만드는 단계로 올라가고 있다."**

## 핵심 주장

### 1) trace 몇 개 수동 점검으로는 production-scale 패턴을 못 본다

논문이 겨냥하는 기존 실무는 이렇다.

- 운영자가 실행 trace 일부만 읽는다
- 임의 가설을 세운다
- 프롬프트나 scaffold를 손본다
- 다시 몇 개만 확인한다

문제는 다음 두 가지다.

- 패턴이 **trace population 전체** 에서만 보일 수 있다
- production trace는 **수만 토큰** 길이라 사람이 샘플 몇 개만 봐서는 놓친다

즉 진단 자체가 이미 병목이다.

### 2) 문제를 corpus-level trace diagnostics로 정식화한다

IG가 푸는 문제 정의:

- 입력: execution trace들의 **corpus**
- 출력: trace group 전반의 **systematic behavioral pattern** 을 설명하는
  - grounded natural-language insight
  - supporting evidence 링크
  - 개선 가능한 보고서

핵심은 로그 분석 결과를 숫자 대시보드 하나가 아니라 **근거가 달린 자연어 진단 리포트** 로 만든다는 점이다.

### 3) IG는 hypothesis-driven multi-agent diagnosis를 한다

논문에 따르면 IG는 diagnostic question에 대해

- 가설을 세우고
- trace corpus 전반에서 그 가설을 시험하고
- 근거를 모아
- evidence-backed insights report를 생성한다

구조적으로는 **scout-investigator architecture** 가 중심이다.

즉 단순 summarizer가 아니라, trace 코퍼스를 상대로 **"무슨 패턴이 반복되는가"를 탐사하는 multi-agent 분석기** 에 가깝다.

### 4) 실제 scaffold 개선으로 이어진다

가장 중요한 정량은 이 부분이다.

- human expert가 IG report를 사용하면
- **unmodified baseline scaffold 대비 30.4 percentage points 성능 개선**
- coding agent가 IG-derived insight를 활용해도 **consistent and stable gains**

즉 진단 리포트가 보기 좋은 분석에서 끝나지 않고, **하네스 개선 루프의 입력** 으로 작동한다.

### 5) 단순 탐지율이 아니라 깊이와 근거 품질에서 강하다

논문 요약상 IG는

- competing approach와 비교해 detection coverage가 비슷한 수준이면서도
- domain expert 평가에서 **depth** 와 **evidence quality** 가 선도적이었다

이건 "오류를 몇 개 찾았나"보다 **왜 그 오류가 반복되는지 설명할 수 있는가** 가 중요해지는 흐름과 맞닿는다.

## 실무적 시사점

- trace observability는 저장만으로 끝나지 않고 **corpus-level diagnosis layer** 가 붙어야 가치가 커진다
- prompt/scaffold 수정을 감으로 하지 말고, **가설-근거-개선안** 형식으로 축적하는 편이 낫다
- production agent 운영에서는 샘플 trace 수동 읽기보다 **집단 패턴 분석 도구** 의 ROI가 빠르게 커질 수 있다
- 운영 회고 문서를 숫자 dashboard 하나가 아니라 **evidence-backed insight memo** 로 남기면 harness iteration 품질이 올라간다

## 기존 지식과의 연결

- [[concepts/harness-engineering]] — observability가 단순 로그 적재가 아니라 **하네스 진화 입력** 이어야 한다는 흐름의 최신 근거
- [[concepts/llm-evaluation]] — 최종 점수보다 **failure taxonomy와 corpus-level pattern** 이 더 실무적인 평가 신호가 될 수 있다는 보강
- [[concepts/gen-ai-observability]] — trace를 저장하는 것과 trace에서 개선 신호를 추출하는 것은 다른 층임을 보여 줌
- [[raw/articles/2026-05-19-harnessaudit-trajectory-safety.md|HarnessAudit]] 와 연결 — HarnessAudit가 trajectory를 감사했다면, IG는 여러 trajectory를 모아 **반복 패턴을 설명** 한다

## 남는 질문 / 한계

- abstract 기준으로는 어떤 benchmark들에서 coverage를 비교했는지와 구체적인 report rubric은 추가 확인이 필요하다
- IG가 낸 insight가 얼마나 일반화 가능한지, 과잉설명 위험은 없는지 후속 검증이 필요하다
- 자연어 리포트 품질이 좋아도, 이를 실제 수정 규칙으로 번역하는 운영 discipline이 없으면 효과가 반감될 수 있다
