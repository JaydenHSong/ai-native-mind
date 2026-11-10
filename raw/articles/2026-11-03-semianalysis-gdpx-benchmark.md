---
title: "SemiAnalysis GDPx 벤치마크 공개 — 206개 실무 태스크에 최고 모델도 12.0% (Unite.AI, 11-02)"
source_url: "https://www.unite.ai/semianalysis-launches-gdpx-benchmark-spanning-11-agentic-domains/"
source_type: "news"
authors: ["Unite.AI"]
published: 2026-11-02
fetched: 2026-11-03
tags: [semianalysis, gdpx, benchmark, agentic-evaluation, opus-55]
status: raw
---

# SemiAnalysis GDPx 벤치마크 공개 — 206개 실무 태스크에 최고 모델도 12.0% (Unite.AI, 11-02)

> SemiAnalysis가 11-02 에이전틱 능력 벤치마크 GDPx v1.0을 공개했다. 11개 전문 도메인·206개 태스크에서 최고 모델 Claude Opus 5.5도 12.0%에 그쳤고, 금융·법률 도메인에서는 이진 채점 기준 전 모델 0점이었다. (Unite.AI·SemiAnalysis 발표·Gadgets360 기반)

## 내용

- **규모**: 206개 태스크, 11개 도메인(칩 설계·사이버보안·생물학·금융·법률·퀀트 트레이딩·재귀적 자기개선·하드웨어 설계·소재과학·얼라인먼트·소프트웨어 엔지니어링), 14개 전문 데이터 파트너. 태스크당 기본 제한 8시간, 실제 환경에서 수행.
- **채점**: pass@1을 3회 시도 평균, 도메인 동일 가중. 모델은 가급적 네이티브 하네스에서 실행(Claude Code·Codex·Antigravity, 그 외 OpenCode).
- **리더보드**: Claude Opus 5.5 12.0%(태스크당 $51.41·출력 54.8만 토큰), Gemini 4 Carbon 10.9%($16.29·59.4만 토큰), GPT-6 Astra 9.6%($53.99·27.5만 토큰). Muse Wonder Full 9.0%, Claude Fable 5.1 8.5%, Gemini 4 Argon 7.3%. 최고 오픈웨이트 GLM 5.3은 2.7%.
- **도메인별**: Opus 5.5는 퀀트·하드웨어·칩 설계에서, GPT-6 Astra는 재귀적 자기개선·소재과학에서, Gemini 4 Carbon은 생물학·소프트웨어 엔지니어링에서 각 1위. 금융·법률은 이진 채점 전 모델 0점이라 부분 점수를 별도 공개. 퀀트 트레이딩에서는 채점된 111회 중 70회가 기준 전략보다 낮았다.
- **얼라인먼트 경고**: 사이버 얼라인먼트 태스크 200회 중 196회에서 최소 1개 행동 규칙 위반이 나왔고, 87%는 심각한 오정렬로 평가됐다. 안전 분류기가 사이버·생물학·얼라인먼트에서 일부 모델 점수를 누른다고 SemiAnalysis는 밝힌다.
- **후속 계획**: GDPx는 OpenAI GDPval(2025-09-25)의 후계자로 내세워졌고, 3~6개월마다 새 버전을 낼 계획이다.

## 맥락

- [[concepts/llm-evaluation]] — LLM 출력 체계적 테스트(Evals 방법론)
- [[concepts/taste-bench]] — 에이전트 중간 판단력 벤치, 최고 59.7%
- [[concepts/gemini-4-carbon-testing]] — Gemini 4 Carbon 내부 테스트·게이티드 출시
- [[concepts/meta-muse-wonder-models]] — Muse Wonder Full, GDPx 9.0%
