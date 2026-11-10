---
title: "Taste-Bench — Microsoft·홍콩시티대, 에이전트의 장기 과제 '중간 판단력(taste)' 측정… 최고 모델 59.7%"
source_url: "https://aidailypost.com/news/new-benchmark-shows-ai-agents-fail"
source_type: "paper"
authors: ["Wenbo Pan et al. (CityU Hong Kong, Microsoft)", "aidailypost", "The Decoder", "AI Parabellum"]
published: 2026-10-18
fetched: 2026-10-19
tags: [taste-bench, agent-evaluation, long-horizon, decision-making, microsoft, benchmark]
status: raw
---

# Taste-Bench — Microsoft·홍콩시티대, 에이전트의 장기 과제 '중간 판단력(taste)' 측정… 최고 모델 59.7%

> Wenbo Pan 등(홍콩시티대·Microsoft)이 9월 arXiv에 공개한 프리프린트 "The Tasteful Agent"의 벤치마크 Taste-Bench가 10/18 3개 매체(aidailypost·The Decoder·AI Parabellum)에 동시 보도 — 에이전트가 장기 과제 중간에 내리는 이진 선택의 질을 측정. 14개 프론티어 모델 중 최고는 GPT-5.6 Sol 59.7%. 코드·데이터셋 공개.

## 내용

- **측정 대상**: 에이전트가 긴 작업 중간에 내리는 판단 — "어느 가설을 쫓을 것인가, 어떤 코드를 기반으로 할 것인가". 기존 벤치는 "끝냈는가"만 재고, "똑똑한 경로로 갔는가 vs 운으로 갔는가"는 재지 않음.
- **구성**: 수천 건의 점수 매겨진 에이전트 실행(코딩·AI 연구 과제, SWE-bench Pro·METR MALT 포함)에서 자동 채굴한 502개 이진 "결정 분기(decision fork)" 문항 — 인간 주석 없음.
- **분기 유형 2종**: parallel(같은 과제의 두 독립 시도가 갈라짐), detour(에이전트가 중간에 스스로 수정 — 실수를 더 일찍 알아챘는지를 테스트). 분기 시점에서 모델을 동결하고, 이후 전개를 보여주지 않고 더 나은 경로를 고르게 함.
- **점수**: 14개 프론티어 모델(Claude·GPT·Grok·DeepSeek·GLM·MiniMax·Mistral 계열), 각 문항을 옵션 순서 뒤집어 2회 질문 — 양쪽 다 맞을 때만 정답. **무작위 기준선은 25%** (aidailypost의 "동전 던지기가 최고 모델을 앞선다"는 서술은 오해 — The Decoder 정정이 정확).
- **결과**: 최고 GPT-5.6 Sol 59.7%, GPT-5.5 59.5%. detour 분기가 parallel보다 일관되게 어려움.
- **증거 타이밍 효과**: 결정 단서가 이미 이전 단계에 보이면 전 모델 평균 62.3% — 단서가 뒤의 많은 작업 뒤에야 드러나면 **21%로 붕괴** (무작위 수준).
- **추론 예산 늘리기는 무의미**: 2개 모델·3개 추론 설정에서 정확도 거의 불변 — 가장 많이 틀린 문항에 추론 토큰을 가장 많이 씀.
- **학습 가능성**: 교사의 hindsight 판단을 Qwen3.6-27B에 증류 → 미학습 과제 판단 정확도 30%→47.9%. 학생의 조언을 태스크 컨텍스트에 주입 → SWE-bench Pro 성공률 14.6%→33.7% (완벽한 조언의 상한 39%).
- 코드: github.com/wbopan/tastebench, 데이터셋: huggingface.co/datasets/wenbopan/taste-bench.

## 맥락

- [[concepts/llm-evaluation]] — "끝냈는가"가 아니라 "어떻게 갔는가"를 재는 평가 축 추가. eval 프레임워크에 중간 판단 층.
- [[comparisons/agent-eval-frameworks]] — 기존 6대장(DeepEval·LangSmith·Braintrust·Langfuse·Inspect AI·RAGAS) 비교표에 "taste" 축 추가 후보.
- [[concepts/shutdown-evasion]]·[[patterns/agent-safety-runtime]] — "결정 단서가 늦게 드러나면 21%"는 장기 에이전트 감독 설계의 정량적 근거.
