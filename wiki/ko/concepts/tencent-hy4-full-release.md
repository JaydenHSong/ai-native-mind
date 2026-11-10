---
title: "Tencent Hy4 정식 출시 — 비전·컴퓨터 사용 첫 탑재, 가중치는 아직 미공개"
category: concepts
tags: [tencent, hy4, computer-use, multimodal, open-weights]
created: 2026-11-05
updated: 2026-11-05
sources:
  - "raw/articles/2026-11-05-tencent-hy4-full-release.md"
related:
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/openai-gpt61-terra-half-price]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
status: draft
confidence: high
---

# Tencent Hy4 정식 출시 — 비전·컴퓨터 사용 첫 탑재, 가중치는 아직 미공개

## 쉽게 읽기

**비유**: 눈이 없던 모델이 눈을 뜨고, 남의 컴퓨터 화면을 직접 조작하는 손까지 얻은 것이다. 다만 설계도는 아직 공개하지 않아서, 남의 클라우드에서 빌려 쓰는 수밖에 없다.

| 용어 | 풀이 |
|------|------|
| **컴퓨터 사용** | 모델이 CLI·GUI를 직접 조작해 소프트웨어를 다루는 능력 |
| **OSWorld** | 컴퓨터 조작 능력을 재는 벤치마크 |

## 한줄 정의

2026-11-04 Tencent Hunyuan 플래그십 Hy4 정식 출시 — Hunyuan 계열 최초로 비전과 컴퓨터 사용을 탑재했다. MoE 770B 총 파라미터·1M 컨텍스트, 가격은 프리뷰와 동일. 가중치는 "수일 내" 공개 예정으로 아직 미공개다.

## 핵심 내용

- **스펙**: MoE 770B 총 파라미터·활성 49B(프리뷰 기준), 컨텍스트 1M 토큰. Hy3 295B 대비 약 2.6배 규모. 비전은 세밀한 이미지 처리·복잡한 차트 분석·수학 시각 추론을, 컴퓨터 사용은 CLI와 GUI 양쪽 조작을 지원한다. Blender·CAD 등 전문 소프트웨어와 Unreal·Unity·Godot 게임 개발용으로 특화 학습했다.
- **벤치마크(자체 보고)**: Terminal-Bench 4.0 44.4점, Claude Opus 5.5 66.4점·GPT-6.1 Sol 55.5점 대비 뒤처진다. OSWorld 2.1(컴퓨터 조작) 78.9점으로 Claude 81.8점에 근접하고 GPT-6.1 Sol 75.2점을 앞선다. ProgramBench 30.0점 대 Claude 56.5점. 환각률은 프리뷰 15.76%에서 5.45%로 낮아졌다고 한다.
- **가격**: API 표시 가격 프리뷰와 동일 — 입력 100만 토큰당 $0.834, 출력 $2.501, 캐시 $0.042. TokenHub는 12-31까지 50% 할인, WorkBuddy·CodeBuddy는 11-04~11-15 무료 사용 기간.
- **미공개**: 정식 버전 가중치는 아직 Hugging Face에 없고, Tencent는 "수일 내" 시스템 카드와 함께 공개하겠다고 밝혔다. Hy4 Flash(경량·저비용 버전)도 곧 출시 예정이나 날짜 없음. Tencent 스스로 "최강 오픈소스 모델 중 하나"라고 했지만, 가중치가 나올 때까지는 호스팅 전용이다.
- **금융 평가**: 금융 전문가 213명(금융기관 전문가 153명 포함)이 참여한 579개 실무 태스크 평가도 함께 진행했다.

## 왜 중요한가 (1인 개발자 관점)

1. **컴퓨터 사용이 중국 모델에도 표준 장착됐다**: Claude·GPT-6.1에 이어 Hy4까지 GUI·CLI 조작을 내장했다. 에이전트가 OS를 직접 다루는 것이 이제 프런티어의 기본 사양이다.
2. **OSWorld에서 격차가 좁다**: 코딩 벤치에서는 크게 뒤처지지만 컴퓨터 조작에서는 Claude에 근접했다. "무엇을 재느냐"에 따라 순위가 뒤집히는 만큼, 벤치 하나만 보고 모델을 고르면 안 된다.
3. **"오픈"은 약속이지 현실이 아니다**: 가중치 미공개 상태의 Hy4는 사실상 클로즈드 호스팅 모델이다. 오픈웨이트 판단은 다운로드 가능 여부를 기준으로 해야 한다.

## 한계 (명시)

- 벤치 수치는 Tencent 자체 보고이며, 독립 검증이 없다. Terminal-Bench와 ProgramBench의 격차는 크다.
- 가중치·시스템 카드 공개 일정이 "수일 내"라는 말 외에는 확인되지 않았다.

## 참고 소스

- [Tencent Hy4 정식 출시 원본](raw/articles/2026-11-05-tencent-hy4-full-release.md)
