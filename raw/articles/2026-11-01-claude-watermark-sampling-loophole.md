---
title: "Anthropic Claude 워터마크 — 구형 2개 모델은 샘플링 설정 하나로 사라진다"
source_url: "https://the-decoder.com/anthropics-watermark-rollout-leaves-a-loophole-on-two-older-claude-models/"
source_type: "news"
authors: ["The Decoder"]
published: 2026-10-31
fetched: 2026-11-01
tags: [anthropic, claude, watermark, synthid, eu-ai-act, compliance]
status: raw
---

# Anthropic Claude 워터마크 — 구형 2개 모델은 샘플링 설정 하나로 사라진다

> Anthropic이 11-03부터 Claude Mythos 5·Opus 4.7·Opus 4.6·Sonnet 4.6에 텍스트 워터마크를 확대한다. 그런데 Opus 4.6과 Sonnet 4.6은 temperature·top_p·top_k 중 하나라도 기본값에서 바꾸면 표시가 붙지 않는다. Anthropic은 고객 이메일에서 이 한계를 직접 인정하고 컴플라이언스 용도라면 기본값 유지를 권고했다. (The Decoder, Anthropic 고객 이메일 기반)

## 내용

- **확대 범위**: Claude Mythos 5, Opus 4.7, Opus 4.6, Sonnet 4.6에 신규 적용. Opus 5.5 이상은 이미 탑재돼 있다. Amazon Bedrock 반영은 수일 늦어질 수 있다.
- **구멍의 구조**: Opus 4.6·Sonnet 4.6에서 워터마크는 temperature·top_p·top_k 세 설정이 모두 기본값일 때만 적용된다. 하나라도 바꾸면 출력에 표시가 없다. Mythos 5·Opus 4.7에는 같은 단서가 이메일에 언급되지 않았다(단, 명시적 확인은 아니다).
- **표시의 성격**: 단어 선택에 새겨지는 비가시 패턴으로, Google DeepMind SynthID 텍스트 방식의 변형이다. 토큰·가격·요청 형식을 바꾸지 않고, 고객이 직접 끌 수 없으며, 탐지 API는 프라이빗 프리뷰 중이다.
- **동기**: EU AI Act 투명성 의무. 2026-08-02 이후 출시 모델은 출시일부터 표시를 달고 나왔고, 구형 모델은 2026-12-02 마감에 맞춰 단계적으로 소급 적용 중이다.
- **한계**: 표시가 있다고 Claude가 단독 작성했다는 뜻은 아니며(교정·번역 용도 가능), 표시가 없다고 AI 미사용을 증명하지도 못한다. 짧은 문장·대폭 편집·바꿔쓰기에도 약하다. Anthropic 공개 모델표에는 아직 4개 모델의 워터마크와 11-03 일정이 반영되지 않았다.

## 맥락

- [[concepts/ai-text-watermarking]] — OpenAI textGrain, EU AI Act 대응 텍스트 워터마킹 (2026-10-06 위키)
- [[concepts/anthropic-claude-usage-policy-revision]] — Anthropic Claude 사용정책 전면 개정, 무기 금지 명문화·감시 강화 (2026-10-11 위키)
- [[concepts/uk-ico-ai-privacy-commitments]] — 영국 ICO, 10개 AI 기업 개인정보 변경 합의, 다음 타깃은 에이전틱 AI (2026-10-10 위키)
