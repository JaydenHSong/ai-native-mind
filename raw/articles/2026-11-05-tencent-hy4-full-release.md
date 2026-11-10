---
title: "Tencent Hy4 정식 출시 — 비전·컴퓨터 사용 첫 탑재, 가중치는 아직 미공개 (11-04)"
source_url: "https://madrobot.blog/2026/11/04/tencent-hy4-release-computer-use-open-weight/"
source_type: "news"
authors: ["MadRobot"]
published: 2026-11-04
fetched: 2026-11-05
tags: [tencent, hy4, computer-use, multimodal, open-weights]
status: raw
---

# Tencent Hy4 정식 출시 — 비전·컴퓨터 사용 첫 탑재, 가중치는 아직 미공개 (11-04)

> Tencent가 11-04 Hunyuan 플래그십 Hy4 정식 버전을 출시했다. 8월 프리뷰(텍스트 전용) 대비 비전과 컴퓨터 사용이 처음 들어갔다. Tencent Cloud·OpenRouter·Yuanbao·WorkBuddy·CodeBuddy 등에서 호스팅으로 이용 가능하며, 가격은 프리뷰와 동일하다. 가중치는 "수일 내" 공개 예정으로 아직 나와 있지 않다.

## 내용

- **스펙**: MoE 770B 총 파라미터·활성 49B(프리뷰 기준), 컨텍스트 1M 토큰. Hy3 295B 대비 약 2.6배 규모. 비전은 세밀한 이미지 처리·복잡한 차트 분석·수학 시각 추론을, 컴퓨터 사용은 CLI와 GUI 양쪽 조작을 지원한다. Blender·CAD 등 전문 소프트웨어와 Unreal·Unity·Godot 게임 개발용으로 특화 학습했다.
- **벤치마크(자체 보고)**: Terminal-Bench 4.0 44.4점, Claude Opus 5.5 66.4점·GPT-6.1 Sol 55.5점 대비 뒤처진다. OSWorld 2.1(컴퓨터 조작) 78.9점으로 Claude 81.8점에 근접하고 GPT-6.1 Sol 75.2점을 앞선다. ProgramBench 30.0점 대 Claude 56.5점. 환각률은 프리뷰 15.76%에서 5.45%로 낮아졌다고 한다.
- **가격**: API 표시 가격 프리뷰와 동일 — 입력 100만 토큰당 $0.834, 출력 $2.501, 캐시 $0.042. TokenHub는 12-31까지 50% 할인, WorkBuddy·CodeBuddy는 11-04~11-15 무료 사용 기간.
- **미공개**: 정식 버전 가중치는 아직 Hugging Face에 없고, Tencent는 "수일 내" 시스템 카드와 함께 공개하겠다고 밝혔다. Hy4 Flash(경량·저비용 버전)도 곧 출시 예정이나 날짜 없음. Tencent 스스로 "최강 오픈소스 모델 중 하나"라고 했지만, 가중치가 나올 때까지는 호스팅 전용이다.
- **금융 평가**: 금융 전문가 213명(금융기관 전문가 153명 포함)이 참여한 579개 실무 태스크 평가도 함께 진행했다.

## 맥락

- [[concepts/moonshot-kimi-k31-pro]] — 같은 날 가중치를 공개한 중국 오픈웨이트 경쟁 모델
- [[concepts/openai-gpt61-terra-half-price]] — 컴퓨터 사용 모델의 가격·성능 비교축
- [[concepts/google-genie-4-native-audio-world-model]] — 멀티모달 월드 모델 경쟁축
