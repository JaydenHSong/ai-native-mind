---
title: "Grok Voice 3.0 — speech-to-speech 1위·가격 동결"
category: concepts
tags: [xai, grok, voice-ai, speech-to-speech, model-release, pricing, voice-agents]
created: 2026-10-15
updated: 2026-10-15
sources:
  - "raw/articles/2026-10-15-xai-grok-voice-3.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/gpt-61-sol-ultrafast]]"
status: draft
confidence: medium
---

# Grok Voice 3.0 — speech-to-speech 1위·가격 동결

## 한줄 정의

xAI가 2026-10-14 Voice Agent API에 출시한 실시간 speech-to-speech 모델 — 독립 벤치 1위(Artificial Analysis 86.9)에도 **$0.08/분으로 가격 동결**. "성능↑·가격→" 포지셔닝의 음성 축 사례.

## 핵심 내용 (Unite.AI 10/14 원보도, xAI 발표 인용, Artificial Analysis 측정)

- **출시**: Grok Voice 3.0, Voice Agent API에서 즉시 사용. `grok-voice-latest` 별칭 자동 전환, Voice 2.0은 deprecated(은퇴 일정 미정). 엔드포인트·세션 파라미터·이벤트 변경 없음.
- **가격**: **$0.08/분 = $4.80/시간**, 2.0과 동일 — 성능 상승에도 가격 동결.
- **독립 벤치**: Artificial Analysis(10/13 측정, xAI 인용) Speech-to-Speech Index **86.9로 1위** — OpenAI GPT-Live-1(Astra, Medium) 83.2, Google Gemini 3.8 Live 82.6 상회. Voice 2.0은 81.3.
- **xAI 주장 컴포넌트 점수**: Big Bench Audio 음성 추론 98.5%, Speech Agent Arena Elo 1070, 태스크 성공률 94.8%, Full Duplex Bench 97.0%. tau-Voice 지원 태스크 완수율 71.6%(2.0의 56.5%에서 상승). 태스크당 비용 $0.025 vs GPT-Live-1 $0.030, GPT-Realtime-2.1 $0.055. ServiceNow EVA-Bench(기업 음성 에이전트) 74% 정확도로 1위.
- **배포 주장** (xAI, 미검증): Tesla 차량·SpaceX에서 하루 수백만 대화 구동, Starlink 콜센터 일 20,000콜 중 ~70% 무인 해결, 영업 콜 4건 중 1건 구매 전환.

## 왜 중요한가

1. **가격 동결 전략**: Ultrafast(10/11 보강)의 6배 프리미엄과 정반대 — "성능이 올라도 가격은 안 올린다"가 점유율 확보의 신호. [[comparisons/frontier-lab-economics]]의 가격 결정력 인프라에서 DeepSeek식 "인상 후에도 이탈 없음"과 반대 방향의 가격 결정력. xAI The X Subscription 번들링(10/14 보강)에 이은 음성 축 가격 전략.
2. **음성 에이전트의 실전 수치**: Starlink 콜센터 일 20,000콜 중 ~70% 무인 해결은 [[patterns/agentic-commerce]]의 "에이전트가 누구 편인가" 패턴이 음성 채널에서 실전 수치로 증명되는 사례 — 단, xAI의 자체 주장(미검증).
3. **벤치 1위의 독립 출처**: xAI가 인용했지만 측정은 Artificial Analysis(10/13) — 벤더 주장과 독립 측정의 경계가 명확한 케이스. 벤치 점수의 "누가 쟀는가"를 보는 독법.

## 한계 (명시)

- 컴포넌트 점수·배포 수치는 xAI 주장 기반(벤더 발표) — Artificial Analysis 측정치만 독립.
- confidence **medium** — 독립 측정 + 2차 보도 교차, 컴포넌트 세부 미검증.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — 성능 상승 + 가격 동결, 번들링에 이은 음성 축 가격 전략
- [[patterns/agentic-commerce]] — 음성 에이전트가 "에이전트가 누구 편인가" 패턴의 음성 채널 확장
- [[concepts/gpt-61-sol-ultrafast]] — Ultrafast의 6배 프리미엄과 대비되는 "성능↑·가격→" 포지셔닝

## 참고 소스

- [xAI, Grok Voice 3.0 출시 — speech-to-speech 벤치 1위·가격 동결 (Unite.AI·xAI·Artificial Analysis, 10/14)](raw/articles/2026-10-15-xai-grok-voice-3.md)
