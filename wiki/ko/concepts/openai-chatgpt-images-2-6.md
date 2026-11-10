---
title: "OpenAI ChatGPT Images 2.6 — GIF·SVG·저장 참조 이미지, API는 Flare·Sunburst 2종"
category: concepts
tags: [openai, image-generation, gpt-image, api]
created: 2026-11-05
updated: 2026-11-05
sources:
  - "raw/articles/2026-11-05-openai-chatgpt-images-2-6.md"
related:
  - "[[concepts/openai-gpt61-terra-half-price]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
status: draft
confidence: high
---

# OpenAI ChatGPT Images 2.6 — GIF·SVG·저장 참조 이미지, API는 Flare·Sunburst 2종

## 쉽게 읽기

**비유**: 사진기가 동영상 GIF까지 찍고, 자주 쓰는 피사체를 이름표 붙여 저장해 두는 카메라로 진화한 것이다. 개발자용으로는 빠른 모델과 정밀한 모델 두 대의 카메라가 따로 나왔다.

| 용어 | 풀이 |
|------|------|
| **Flare / Sunburst** | GPT-Image-2.6의 두 API 모델 — Flare는 속도, Sunburst는 정밀도 |
| **complexity** | 렌더링 전 모델이 계획에 들이는 정도를 조절하는 새 설정 |

## 한줄 정의

2026-11-04 출시된 OpenAI ChatGPT Images 2.6 — 애니메이션 GIF 생성·SVG 내보내기·저장 참조 이미지 재사용이 새로 들어갔고, API에는 gpt-image-2.6-flare와 gpt-image-2.6-sunburst 두 모델이 추가됐다. 2.5 출시 두 달 만이다.

## 핵심 내용

- **속도 주장**: OpenAI는 이미지 생성 속도가 이전보다 50% 빨라졌다고 밝혔다(자체 주장, 독립 검증 없음). Flare는 저품질 설정에서 6초 만에 이미지를 반환할 수 있다. 2.5 출시 때도 2.0 대비 50% 개선을 주장한 바 있다.
- **새 기능**: 스케치·사진을 애니메이션 GIF로 변환, 정적 SVG 내보내기, API의 마크업 유도 편집, 렌더링 전 계획량을 조절하는 complexity 설정. ChatGPT에서는 사진을 이름으로 저장해두고 이후 대화에서 @이름으로 다시 불러올 수 있다.
- **API 모델**: gpt-image-2.6-flare(빠른 반복)와 gpt-image-2.6-sunburst(세밀한 시각 작업). 토큰 요금은 2.5와 동일 — 텍스트 입력 $5, 이미지 입력 $8, 이미지 출력 $30(백만 토큰당). 다만 저품질 1024×1024 이미지의 출력 토큰 사용량이 약 4.2배 늘어, 장당 약 $0.006에서 $0.025 수준으로 오른다. 고품질 이상은 장당 $0.053으로 변동 없음.
- **규모**: OpenAI는 ChatGPT·Codex·API를 합쳐 주당 약 40억 장의 이미지가 생성된다고 밝혔다. 9월 발표 때는 주당 30억 장이었다.
- **안전**: 시스템 카드에 따르면 GIF 전용 모더레이션은 표적 정책 위반 GIF 세트의 77.7%를 잡아냈으며, 움직임 관련 위반 탐지는 여전히 어렵다고 인정했다. GIF 생성은 롤아웃 중이라 전 계정에 도달하지 않았을 수 있다.

## 왜 중요한가 (1인 개발자 관점)

1. **이미지 생성이 '움직이는' 매체로 넘어갔다**: GIF는 정적 이미지와 비디오 사이의 새 출력 형태다. 에이전트가 만드는 산출물에 움직임이 들어오면 모더레이션·비용 계산이 달라진다.
2. **요금표는 같아도 실비용은 올랐다**: 토큰 단가는 그대로인데 저품질 이미지의 토큰 사용량이 4.2배 — 가격표만 보고 예산을 짜면 틀린다. 출력 토큰량을 직접 재야 한다.
3. **참조 이미지는 지속성의 한 형태다**: 이름을 붙여 저장해 재사용하는 기능은, 이미지 생성에도 메모리·상태가 들어오고 있음을 보여준다. 에이전트의 맥락 관리와 같은 문제다.

## 한계 (명시)

- 50% 속도 개선은 OpenAI 자체 주장으로, 측정 기준·품질 설정·작업량이 공개되지 않았다.
- GIF 모더레이션 77.7%는 표적 세트 기준이며, 일반 트래픽에서의 실효 탐지율이 아니다.

## 참고 소스

- [ChatGPT Images 2.6 원본](raw/articles/2026-11-05-openai-chatgpt-images-2-6.md)
