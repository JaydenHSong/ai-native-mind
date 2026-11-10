---
title: "Google Genie 4 — 네이티브 오디오를 품은 실시간 월드 모델"
source_url: "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
source_type: "news"
authors: ["Google DeepMind", "TechCrunch", "SiliconANGLE", "Softonic"]
published: 2026-10-27
fetched: 2026-10-28
tags: [google, deepmind, genie, world-model, gemini, audio, agents]
status: raw
---

# Google Genie 4 — 네이티브 오디오를 품은 실시간 월드 모델

> Google DeepMind가 10-27 Genie 4를 발표했다. 실시간 월드 모델 최초로 음악·환경음·대화 같은 오디오를 영상과 같은 패스에서 네이티브로 생성한다. 현재는 신뢰 테스터 대상 리서치 프리뷰이며, 이후 Google AI Ultra 구독자의 Project Genie와 Gemini API·AI Studio 얼리 액세스 파트너로 확대된다. (DeepMind 블로그·TechCrunch·SiliconANGLE 교차)

## 내용

- **네이티브 오디오**: 음악·환경음·캐릭터 대화가 영상 위에 얹는 후처리가 아니라 세계 생성과 동시에 같은 모델 상태에서 나온다. 바람 소리·파도·캐릭터의 실시간 대화가 장면 사건과 인과적으로 묶인다.
- **루프 안의 Gemini**: Gemini Omni가 시뮬레이션의 실제 외관·행동을 고정하고, Gemini 3.8 Flash가 루프 안 가이딩 에이전트로 프레임을 관찰하며 목표를 단계로 쪼개고 진행을 검증·조정한다. Genie 3의 SIMA 2(세계 안 에이전트)와 달리 Gemini가 생성 자체를 이끄는 구조다.
- **실시간 조종**: 키보드 이동 + 자연어 프롬프트로 진행 중 세계를 바꾼다 — 날씨 변경, 카메라 이동, 인물·사물 추가 — 재시작 없이 장면이 이어진다. 사건을 시작하면 세계가 그 다음을 시뮬레이션한다.
- **일관성 2분**: 일관된 장면 지속 시간이 약 2분으로 Genie 3(약 1분)의 2배(TechCrunch 보도). 물리도 강화됐다 — 충돌·공기역학, 더 자연스러운 인물 움직임이 DeepMind가 꼽은 최대 도약이다.
- **공개 범위와 표시**: 리서치 프리뷰는 신뢰 테스터 한정. 이후 Project Genie의 Google AI Ultra 구독자, Gemini API·AI Studio 얼리 액세스 파트너 순으로 확대되며, 생성되는 모든 영상·오디오에 SynthID 워터마크가 들어간다.
- **한계(DeepMind 자체 고지)**: 긴 세션에서의 드리프트·객체 영속성 흔들림·읽을 수 없는 텍스트·오디오 정확도. 해상도·프레임률·API 가격·최대 세션 길이는 미공개다. Genie 3는 2025년 8월 발표, 720p·24fps였다.

## 맥락

- [[concepts/gemini-4-argon-minecraft]] — Gemini 4 Argon 에이전트의 마인크래프트 27시간 완주, 월드 시뮬레이션의 에이전트 훈련장 쓰임새
- [[concepts/robojepa-robot-scaling-laws]] — 로봇 월드모델 스케일링 법칙, 시뮬레이션이 로봇 훈련 데이터가 되는 흐름
- [[concepts/amd-world-labs-physical-ai]] — World Labs 인수로 본 피지컬 AI·월드모델 경쟁 축
