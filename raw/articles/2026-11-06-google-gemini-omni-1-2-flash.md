---
title: "Google Gemini Omni 1.2 Flash 정식 출시 — 15초 영상·30% 가격 인하, 멀티턴 편집 (11-05)"
source_url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/?ref=explainx"
source_type: "news"
authors: ["Google DeepMind"]
published: 2026-11-05
fetched: 2026-11-06
tags: [google, gemini, omni, video-generation, veo]
status: raw
---

# Google Gemini Omni 1.2 Flash 정식 출시 — 15초 영상·30% 가격 인하, 멀티턴 편집 (11-05)

> Google이 11-05 Gemini Omni 1.2 Flash를 Gemini API·Google Cloud에 정식 출시했다. 네이티브 15초 영상 생성·편집, 멀티턴 대화 편집, 720p 기준 초당 $0.07로 30% 가격 인하가 핵심이다. 모델 ID는 gemini-omni-1-2-flash다.

## 내용

- **발표**: 11-05 Google DeepMind 블로그 "Gemini Omni 1.2 Flash: 15-second video and lower pricing". Gemini API와 Gemini for business에 정식 출시(GA)됐고, Google Cloud Vertex AI(Provisioned Throughput 포함)·Flow·Google Vids·Google Ads·Gemini 앱에도 적용된다.
- **길이**: 네이티브 15초 영상 생성·편집이 가능해졌다(Omni 1.1은 10초). 3~15초를 1초 단위로 지정할 수 있다. 첫 프레임과 마지막 프레임 사이 보간(3~10초)이나 턴마다 3~10초씩 연장해 최대 30초까지 늘릴 수 있다. 출력은 360p·720p·1080p·4K, 24 FPS다.
- **편집**: 멀티턴 대화 편집 — 같은 클립을 처음부터 다시 생성하지 않고 후속 대화로 세부 내용을 수정한다. 최대 6개 참조 이미지로 캐릭터 일관성을 강화한다. 360p·720p로 초안을 만들고 선택한 클립만 1080p·4K로 업스케일하는 흐름을 권장한다.
- **가격**: 720p 기준 초당 $0.07로, Omni 1.1 대비 30% 인하됐다(1.1은 초당 약 $0.10). 영상 출력 토큰은 백만 개당 $12.00(1.1은 $17.50)이며, 720p는 초당 5,792토큰을 쓴다. 15초 클립 한 개는 약 $1.04~1.05다. 무료 티어는 없다. 유료 티어 속도 제한이 2배로 늘었다. 12-03부터 Omni 1.1 호출은 자동으로 1.2로 라우팅되어 1.2 요금이 적용된다.
- **기타**: 모든 출력에 SynthID 워터마크가 들어간다. Google Vids에서는 Google 계정·Workspace 사용자당 월 3회까지 15초 무료 생성을 제공한다. Gemini 앱의 15초 영상은 Google AI Ultra 구독자부터 순차 롤아웃된다.
- **한계**: 일관성 개선 주장은 Google 자체 데모 기준이며, 제3자 독립 품질 테스트는 아직 없다. 모델 카드는 기존 영상 속 인물의 말을 바꾸는(스피치 수정) 능력이 있다고 확인했으나, Google은 현재 해당 기능을 제한하고 있다.

## 맥락

- [[concepts/google-genie-4-native-audio-world-model]] — Google Genie 4, 네이티브 오디오를 품은 실시간 월드 모델
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon, 자체 벤치 vs 독립 지수 괴리 + gated release
- [[concepts/openai-chatgpt-images-2-6]] — OpenAI ChatGPT Images 2.6, GIF·SVG·저장 참조 이미지·Flare·Sunburst
