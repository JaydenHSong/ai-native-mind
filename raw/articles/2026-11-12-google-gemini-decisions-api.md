---
title: "Google Gemini Decisions API — gemini-decision-1, 단일 forward pass 판단 모델 (11-11)"
source_url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"
source_type: "news"
authors: ["Google"]
published: 2026-11-11
fetched: 2026-11-12
tags: [google, gemini, gemini-decision-1, decisions-api, agent-routing, evaluation]
status: raw
---

# Google Gemini Decisions API — gemini-decision-1, 단일 forward pass 판단 모델 (11-11)

> Google이 텍스트를 생성하지 않고 후보 옵션을 단일 forward pass로 점수화하는 전용 모델 `gemini-decision-1` 기반의 Decisions API를 공개했다. 에이전트의 라우팅·검증·정책 게이트를 LLM 생성 없이 확률 기반으로 처리하는 '판단 원자'의 상품화다.

## 내용

- **모델**: `gemini-decision-1`은 비생성(non-generative) 모델로, yes/no·선택(2~255개 옵션)·루브릭 문항 최대 1,000개를 하나의 공유 멀티모달 입력(텍스트·이미지·오디오·비디오·PDF)에 대해 단일 forward pass로 평가해 확률과 신뢰도를 반환한다. 출력 토큰은 0개다.
- **성능·가격**: 모델 연산 중앙값 50~100ms, 종단 간 지연 150~250ms로, 1~100문항까지 거의 일정하다. 가격은 입력 100만 토큰당 $0.10, 출력 과금 $0. Google 주장으로는 Gemini 3.5 Flash-Lite 대비 약 5배 저렴하다.
- **용도**: 도구 선택, 정책 검사, 모델 라우팅, 컨텍스트 등급 평가. Gemini Notebook이 실시간 라우터로 사용해 일반 쿼리 지연시간을 최대 40% 단축했다고 한다. Search의 MCP 도구 안전 계층으로도 쓰인다.
- **벤치마크(주의)**: Google 자체 벤치에서 JevBench 공개 분할 92.2%로 GPT-6 Luna 90.9%, Jev 1.14 90.0%를 앞섰고, 보정 오차(top-1 ECE 0.0250)도 가장 낮았다고 한다. 다만 독립 지수 Artificial Analysis Decision Index v2.1에서는 18개 중 9위(65.98), Drex Max v1.1(72.62)보다 뒤처진다. 자체 벤치와 독립 지수가 엇갈린다.
- **가용성**: Gemini API(v1beta, `/v1beta/decisions`)에서 제공, Vertex AI는 "coming soon". Google Cloud 출시는 아직 미정(near term)이다.
- **주의**: 컨텍스트 상한은 2차 보도 간 16K 토큰과 256K 토큰으로 엇갈려 원문 확인이 필요하다. 수치 대부분은 Google 1차 주장으로 독립 검증이 없다.

## 맥락

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' 내부 테스트, Gemini 4 계열 체크포인트 (2026-10-10)
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴
- [[concepts/tool-use]] — LLM이 외부 함수/API를 호출하는 메커니즘
