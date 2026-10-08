---
title: "Claude Haiku 5.5"
category: concepts
tags: [claude, haiku-5-5, anthropic, api-pricing, small-model, agents, effort-setting]
created: 2026-10-08
updated: 2026-10-08
sources:
  - "raw/articles/2026-10-08-anthropic-claude-haiku-5-5.md"
related:
  - "[[patterns/mid-tier-performance-inversion]]"
  - "[[patterns/agent-authority-model]]"
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/semantic-decision-engine]]"
status: draft
confidence: medium
---

# Claude Haiku 5.5

## 쉽게 읽기

**비유**: 주방에 메인 셰프(Opus)만 있는 게 아니라, 반복 일을 도맡는 보조 요리사(Haiku)가 새로 왔다 — 그것도 인건비가 90% 싸게. 한 달 만에 5.5 시리즈 3종이 완성되면서 "비싼 모델이 다 한다"가 아니라 "일마다 맞는 모델을 쓴다"가 기본값이 됐다.

| 용어 | 풀이 |
|------|------|
| **Adjustable effort** | 비용 vs 지능의 트레이드오프를 사용자가 조절하는 Haiku 5.5의 신기능 |
| **Subagent** | 상위 에이전트(Opus/Sonnet)가 작업의 일부를 맡기는 하위 에이전트 |

## 한줄 정의

Anthropic의 최경량·최저가 5.5 시리즈 모델 — 분류·요약·추출·실시간 지원·음성 에이전트·인앱 어시스턴트용, Opus/Sonnet 5.5의 서브에이전트로 포지셔닝.

## 핵심 내용

- **출시**: 2026-10-07. 한 달 만에 5.5 시리즈 3종(Opus·Sonnet·Haiku) 완성. 모델 문자열 `claude-haiku-5-5`, 지식 컷오프 2026년 6월, 텍스트 전용.
- **가격**: 입력 $0.10 / 출력 $0.50 per 1M tokens (100k 토큰 미만 프롬프트) — Haiku 4.5 대비 약 75% 인하. 긴 프롬프트는 $0.50/$2.50. VentureBeat는 "반복 작업 겨냥 최대 90% 인하, GPT-6 Luna에 대응"으로 보도.
- **신기능**: Haiku 최초의 adjustable effort 설정 (비용-지능 트레이드오프 조절). 고위험 사이버보안 요청에 대한 내장 세이프가드.
- **용도**: 분류·요약·추출·실시간 지원·voice agents·인앱 어시스턴트. Opus 5.5/Sonnet 5.5와 짝을 이뤄 코딩 작업의 서브에이전트로.
- **배경**: Reuters는 "planned IPO를 앞둔 라인업 확장"으로 프레이밍 — 11월 IPO(~$2T 밸류 보도) 전 모델 라인업 완성 행보.

## 왜 중요한가 (1인 개발자 관점)

1. [[patterns/mid-tier-performance-inversion]]의 실전형 — 경량 모델이 에이전트 워크호스의 경제 단위가 되는 가격 전쟁. "비싼 모델 하나"가 아니라 "일마다 라우팅"이 기본 아키텍처.
2. [[patterns/agent-authority-model]]의 비용 전제 변경 — 서브에이전트 위임이 90% 싸지면 권한 위임의 경제성이 달라진다. 위임 구조 설계 시 모델 티어별 비용을 명시적으로 계산.
3. effort 설정은 하네스 제어점 — 에이전트가 스스로 비용-지능을 조절하는 노브가 제품에 내장되기 시작.

## 관련 개념

- [[patterns/mid-tier-performance-inversion]] — 중급 모델의 플래그십 성능 역전 (Sonnet 5.5 사례)
- [[patterns/agent-authority-model]] — 서브에이전트 위임의 권한·비용 구조
- [[patterns/ai-cost-management]] — 모델 라우팅·캐싱 비용 전략
- [[concepts/semantic-decision-engine]] — 반복 판정을 더 싸게 처리하는 결정 모델 웨이브

## 참고 소스

- [Anthropic, Claude Haiku 5.5 출시 (Reuters, 10/7)](raw/articles/2026-10-08-anthropic-claude-haiku-5-5.md)