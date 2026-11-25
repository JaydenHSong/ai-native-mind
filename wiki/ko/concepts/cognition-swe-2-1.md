---
title: "Cognition SWE-2.1 — Devin의 자체 코딩 모델, Terminal-Bench 2배 상승과 사이버 변형"
category: concepts
tags: [cognition, devin, swe-2-1, coding-model, benchmark, cybersecurity, rl]
created: 2026-11-25
updated: 2026-11-25
sources:
  - "raw/articles/2026-11-25-cognition-swe-2-1-devin.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/anthropic-claude-ship]]"
  - "[[concepts/gpt-6-intelligent-ui]]"
status: draft
confidence: low
---

# Cognition SWE-2.1 — Devin의 자체 코딩 모델, Terminal-Bench 2배 상승과 사이버 변형

## 쉽게 읽기

**비유**: Devin이라는 AI 개발자를 만드는 회사(Cognition)가, 남의 모델을 빌려 쓰지 않고 자기 모델을 직접 키웠다. 재료는 문샷의 Kimi K3이고, 키우는 방법은 순수 강화학습(RL)이다. 새 모델 SWE-2.1은 코딩 시험(Terminal-Bench)에서 전작의 2배가 넘는 점수를 받았다. 그런데 아직 1등은 아니다. Claude Opus 5.5나 Gemini 4 Neon이 더 높다. 대신 속도 빠른 버전(Ultrafast)과 보안 작업용으로 규칙을 느슨하게 푼 버전(Cyber)을 따로 내놨다. 12월 8일까지는 무료로 써 볼 수 있다.

| 용어 | 풀이 |
|------|------|
| **Terminal-Bench** | 터미널에서 실제 작업을 시켜 보는 코딩 벤치마크. 점수가 높을수록 일을 잘 끝낸다 |
| **순수 강화학습 (pure RL)** | 정답을 외우게 가르치는 게 아니라, 시도하고 보상받으며 스스로 배우게 하는 훈련법 |
| **FrontierCode** | Cognition이 만든 자체 코딩 벤치마크. 회사 자기 시험이라 해석에 주의가 필요하다 |
| **Ultrafast / Lightning** | Cerebras 칩으로 빠르게 돌리는 SWE-2.1 버전. 초당 600토큰 생성 |
| **ExploitBench** | 보안 취약점을 찾고 활용하는 능력을 재는 벤치마크. 높을수록 공격·방어 능력이 세다 |

## 한줄 정의

Cognition이 2026-11-24 출시한 Devin의 자체 코딩 모델 SWE-2.1로, 문샷 Kimi K3 위 순수 강화학습으로 훈련해 Terminal-Bench 4.1 점수를 전작 SWE-2의 24.2에서 50.0으로 끌어올렸고, Cerebras 기반 초고속 변형과 보안용 SWE-2.1 Cyber를 함께 제공한다.

## 핵심 내용

- **벤치마크 (Cognition 자체 수치, 독립 검증 없음)**: Terminal-Bench 4.1 50.0(SWE-2 24.2), FrontierCode 2.0 41.3(24.1), ProgramBench 44.0(17.0), SWE Marathon 54.9(32.5). ExploitBench 80.0(36.1), ExploitGym 의도된 익스플로잇 성공률 27.3%(12.1%).
- **상대 위치**: 같은 표에서 Claude Opus 5.5는 Terminal-Bench 65.8·FrontierCode 47.3, Gemini 4 Neon 65.2·46.2, Kimi K3.1 59.7로 SWE-2.1보다 앞섬. 전임 대비 대폭 상승했으나 프론티어 모델에는 아직 못 미침.
- **Ultrafast(Lightning)**: Cerebras 파트너십 기반, 초당 600토큰 생성(표준 60토큰/초의 10배). 입력 $5/백만 토큰, 출력 $25/백만 토큰, 캐시 읽기 $0.50/백만 토큰. 무료 혜택 대상 아님.
- **SWE-2.1 Cyber**: 방어적 보안 작업용으로 안전장치를 완화한 변형, Devin Security에 순차 적용. 일반 모델은 고위험 활동 일부에만 안전장치 적용.
- **가격·제공**: Devin Desktop·Cloud·CLI에서 제공. Devin Pro·Max·Teams 사용자는 2주간 무료(Desktop·CLI는 12월 8일까지 무료), 이후 2027년 1월 30일까지 할인 가격. Cloud 세션은 12월 22일까지 프리뷰.
- **방법론 주의**: 경쟁 모델 수치는 공개·개발자 보고 점수 또는 Cognition 자체 실행. 각 모델은 개발자 선호 하네스(Claude Code, Codex 등)로, SWE 모델은 Devin CLI 하네스로 측정 — 하네스 차이 존재.

## 왜 중요한가 (1인 개발자 관점)

1. **코딩 에이전트의 '자체 모델' 전환**: Devin이 범용 모델을 빌려 쓰던 단계에서 Kimi K3 위에 RL로 특화 모델을 키우는 단계로 갔다. 코딩 에이전트 회사가 모델까지 직접 만드는 흐름은, 앞으로 "어떤 에이전트를 쓰느냐"가 "어떤 모델이 뒤에 있느냐"와 같은 질문이 된다는 뜻이다.
2. **벤치마크는 하네스까지 봐야 한다**: SWE-2.1의 점수는 Devin CLI 하네스에서 나왔다. 같은 모델도 하네스가 바뀌면 점수가 바뀐다. 벤치마크를 볼 때는 점수보다 '무슨 하네스로 쟀는지'를 먼저 확인하는 습관이 필요하다.
3. **사이버 점수의 이중성**: ExploitBench 80점은 방어 도구로도, 공격 도구로도 읽힌다. Cognition이 Cyber 변형을 따로 분리한 건, 능력을 풀되 용도를 가르는 설계다. 내 에이전트에 강력한 도구를 줄 때도 '용도별 분리'를 먼저 생각할 일이다.

## 한계 (명시)

- 모든 벤치마크 수치는 Cognition 자체 보고로, 독립 검증·재현이 없다. 경쟁 모델 수치도 Cognition이 직접 실행했거나 가져온 것이다.
- FrontierCode는 Cognition 자체 벤치마크다. 자기 시험에서 자기 모델이 오르는 구조라 해석에 주의가 필요하다.
- 가격(토큰당)은 Ultrafast만 공개됐고, 기본 SWE-2.1의 토큰 단가는 아직 없다. API도 없고 Devin 플랫폼 안에서만 쓸 수 있다.
- confidence는 low — 1차 근거가 Cognition 발표 하나이고, 모든 수치가 벤더 자체 측정이다.

## 관련 개념

- [[concepts/llm-evaluation]] — 벤치마크·하네스 차이가 점수를 바꾸는 평가 방법론 (2026-11-25)
- [[concepts/anthropic-claude-ship]] — 코딩 에이전트 제품의 다른 축. 리뷰·승인을 맡기는 쪽과 모델 자체를 키우는 쪽 (2026-11-25)
- [[concepts/gpt-6-intelligent-ui]] — GPT-6 계열과 함께 보는 프론티어 경쟁 축 (2026-11-25)

## 참고 소스

- [Cognition, SWE-2.1 출시 — Devin 코딩 모델, Terminal-Bench 2배 이상·사이버 변형 동시 공개 (Unite.AI, 11-24)](raw/articles/2026-11-25-cognition-swe-2-1-devin.md)
- [Cognition releases SWE-2.1 with a claimed 10× faster Cerebras variant (Superpower Daily)](https://superpowerdaily.com/posts/cognition-releases-swe-2-1-with-a-claimed-10-faster-cerebras-variant)
