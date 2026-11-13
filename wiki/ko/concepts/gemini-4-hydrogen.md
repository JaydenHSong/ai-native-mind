---
title: "Gemini 4 Hydrogen — 코딩 에이전트용 실행형 모델, 1M 컨텍스트·균일 요금 (11-12)"
category: concepts
tags: [google, gemini-4, hydrogen, coding-agent, llm]
created: 2026-11-13
updated: 2026-11-13
sources:
  - "raw/articles/2026-11-13-gemini-4-hydrogen.md"
related:
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/google-gemini-decisions-api]]"
status: draft
confidence: high
---

# Gemini 4 Hydrogen — 코딩 에이전트용 실행형 모델, 1M 컨텍스트·균일 요금 (11-12)

## 쉽게 읽기

**비유**: 프론티어 모델이 경주용 F1 머신이라면, Hydrogen은 매일 타는 출퇴근용 전기차다. 최고 속도는 F1이 빠르지만, 출퇴근은 전기차가 싸고 빠르고 편하다. 코딩 에이전트의 일상 작업 대부분은 '출퇴근'이다 — Hydrogen은 그 구간을 맡는 모델이다.

| 용어 | 풀이 |
| **사고(thinking) 단계** | 모델이 답하기 전에 얼마나 깊게 추론할지 정하는 설정 — low / medium / high(기본) / xhigh |
| **Intelligence Index** | Artificial Analysis의 모델 지능 종합 지수 — Hydrogen은 51점, Argon은 50점 |
| **Terminal-Bench** | 터미널에서 실제 작업을 수행하는 능력을 재는 에이전트 벤치마크 |
| **Orchestrator** | Antigravity의 기능으로, 한 세션 안에서 Carbon과 Hydrogen을 작업 난이도에 따라 자동 전환 |
| **균일 요금** | 컨텍스트 길이에 관계없이 같은 단가 — Hydrogen은 1M 토큰 전 구간에 입력 $1.50/출력 $7.50 |

## 한줄 정의

2026-11-12 — Google이 Gemini 4 Hydrogen을 출시했다. Gemini 4 패밀리의 세 번째 멤버로, Argon·Carbon 아래에서 빠르고 저렴한 일상 코딩·에이전트 작업을 맡는 실행형 모델이다. 1M 토큰 컨텍스트, 사고 4단계, 입·출력 $1.50/$7.50의 균일 요금이 특징이며, Artificial Analysis Intelligence Index에서 Argon을 앞섰다.

## 핵심 내용

- **포지셔닝**: Argon·Carbon이 프론티어급이라면 Hydrogen은 속도·비용 최적화형. AI Studio, Gemini API, Gemini 앱, Google Search(AI Mode·AI Overviews), Gemini for business, Antigravity에 당일 전역 출시됐다.
- **성능**: Artificial Analysis Intelligence Index에서 기본 high 사고 기준 51점으로 Argon(50점)을 앞섰고, 새 xhigh 사고 단계에서는 54점. Gemini 3.8 Flash 대비 작업을 2.5배 빠르게 끝내고 Terminal-Bench 4.1은 57% 대 18.2%로 3배 이상 높다.
- **가격·컨텍스트**: 1M 토큰 컨텍스트 전체 구간에 균일 요금 — 입력 $1.50/출력 $7.50(백만 토큰당). 컨텍스트 길이에 따라 가격이 오르는 계단식 요금이 아니다.
- **사고 단계**: low / medium / high(기본) / xhigh(신규) 4단계. xhigh는 더 깊은 추론이 필요한 작업용이다.
- **Orchestrator**: Antigravity에 함께 출시된 오케스트레이터가 한 세션 안에서 Carbon과 Hydrogen을 동적으로 전환한다. Terminal-Bench 4.0에서 Carbon에 근접한 성공률에 할당량 24% 절감, 완료 속도 19% 향상을 기록했다.
- **안전 주장**: 과도한 개입(overreach) 81% 감소, 정직도 96.7%, 사고 과정(chain-of-thought) 가독성 99.9%를 Google이 제시했다. 독립 검증 수치는 아니다.
- **정정 이력**: 11-12 데일리에서는 'Gemini 4 Hydrogen'을 미확인 루머로 제외한 바 있다. 오늘은 Google 공식 블로그 발표로 확정된 출시라 범위가 다르다 — 루머 단계와 공식 출시를 구분해 기록한다.

## 왜 중요한가 (1인 개발자 관점)

1. **가격-성능 곡선이 일상 작업으로 내려왔다**: 에이전트 작업의 대부분은 프론티어급 추론이 필요 없는 반복·실행 작업이다. Hydrogen급이면 충분한 구간을 구분해두면 토큰 비용이 구조적으로 내려간다. 모델 선택이 곧 예산 설계다.
2. **Orchestrator가 곧 하네스 패턴이다**: 모델을 하나로 고정하지 말고, 작업 난이도별로 강한 모델과 싼 모델을 전환하는 것이 Antigravity의 공식 기능이 됐다. 내 하네스도 같은 라우팅 — 쉬운 작업은 Hydrogen급, 어려운 작업만 Carbon급 — 을 따라야 한다.
3. **추론 깊이를 비용으로 사는 선택지가 생겼다**: xhigh 단계는 '더 생각하게 하기'를 가격으로 사는 옵션이다. 깊이가 필요할 때만 켜는 것이 합리적이다.

## 한계 (명시)

- AA 지수·Terminal-Bench·안전 지표는 모두 Google이 제시한 수치로, 독립 검증이 아직 없다.
- Gemini 3.8 Flash와의 비교는 Google이 고른 과제 기준이다.
- Carbon의 12-01 가격 인상 사례처럼 Hydrogen의 요금도 바뀔 수 있다 — 오늘 수치는 출시일 기준이다.

## 관련 개념

- [[concepts/gemini-4-argon]] — Gemini 4 Argon, 자체 벤치 vs 독립 지수 괴리 + gated release (2026-10-01)
- [[concepts/gemini-4-carbon-testing]] — Gemini 4 'Carbon' 내부 테스트, 코딩 성능 Opus 5.5급 평가 (2026-10-10)
- [[concepts/google-gemini-decisions-api]] — Gemini Decisions API, 판단 원자의 상품화 (2026-11-12)

## 참고 소스

- [Gemini 4 Hydrogen 출시 원본](raw/articles/2026-11-13-gemini-4-hydrogen.md)
