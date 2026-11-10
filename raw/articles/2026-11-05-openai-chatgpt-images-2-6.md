---
title: "OpenAI ChatGPT Images 2.6 출시 — GIF·SVG·저장 참조 이미지, API는 Flare·Sunburst 2종 (11-04)"
source_url: "https://www.neowin.net/news/openais-chatgpt-images-26-is-50-faster-and-can-now-create-animated-gifs/"
source_type: "news"
authors: ["Neowin"]
published: 2026-11-04
fetched: 2026-11-05
tags: [openai, image-generation, gpt-image, api]
status: raw
---

# OpenAI ChatGPT Images 2.6 출시 — GIF·SVG·저장 참조 이미지, API는 Flare·Sunburst 2종 (11-04)

> OpenAI가 11-04 ChatGPT Images 2.6을 ChatGPT·Codex·API에 전 세계 전 티어(무료 포함)로 출시했다. 2.5 출시 두 달 만이다. 애니메이션 GIF 생성, SVG 내보내기, 저장된 참조 이미지 재사용이 새로 들어갔고, API에는 gpt-image-2.6-flare와 gpt-image-2.6-sunburst 두 모델이 추가됐다.

## 내용

- **속도 주장**: OpenAI는 이미지 생성 속도가 이전보다 50% 빨라졌다고 밝혔다(자체 주장, 독립 검증 없음). Flare는 저품질 설정에서 6초 만에 이미지를 반환할 수 있다. 2.5 출시 때도 2.0 대비 50% 개선을 주장한 바 있다.
- **새 기능**: 스케치·사진을 애니메이션 GIF로 변환, 정적 SVG 내보내기, API의 마크업 유도 편집, 렌더링 전 계획량을 조절하는 complexity 설정. ChatGPT에서는 사진을 이름으로 저장해두고 이후 대화에서 @이름으로 다시 불러올 수 있다.
- **API 모델**: gpt-image-2.6-flare(빠른 반복)와 gpt-image-2.6-sunburst(세밀한 시각 작업). 토큰 요금은 2.5와 동일 — 텍스트 입력 $5, 이미지 입력 $8, 이미지 출력 $30(백만 토큰당). 다만 저품질 1024×1024 이미지의 출력 토큰 사용량이 약 4.2배 늘어, 장당 약 $0.006에서 $0.025 수준으로 오른다. 고품질 이상은 장당 $0.053으로 변동 없음.
- **규모**: OpenAI는 ChatGPT·Codex·API를 합쳐 주당 약 40억 장의 이미지가 생성된다고 밝혔다. 9월 발표 때는 주당 30억 장이었다.
- **안전**: 시스템 카드에 따르면 GIF 전용 모더레이션은 표적 정책 위반 GIF 세트의 77.7%를 잡아냈으며, 움직임 관련 위반 탐지는 여전히 어렵다고 인정했다. GIF 생성은 롤아웃 중이라 전 계정에 도달하지 않았을 수 있다.

## 맥락

- [[concepts/openai-gpt61-terra-half-price]] — 같은 GPT-6.1 세대의 가격·제품 확장 맥락
- [[concepts/google-genie-4-native-audio-world-model]] — 멀티모달 생성 모델 경쟁축
- [[concepts/ai-training-opt-out-robots-txt]] — 이미지 학습 거부와 생성 모델의 권리 맥락
