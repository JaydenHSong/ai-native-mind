---
title: "Claude 워터마크 샘플링 구멍 — 구형 2개 모델은 설정 하나로 표시가 사라진다"
category: concepts
tags: [anthropic, claude, watermark, synthid, eu-ai-act, compliance]
created: 2026-11-01
updated: 2026-11-01
sources:
  - "raw/articles/2026-11-01-claude-watermark-sampling-loophole.md"
related:
  - "[[concepts/ai-text-watermarking]]"
  - "[[concepts/anthropic-claude-usage-policy-revision]]"
  - "[[concepts/uk-ico-ai-privacy-commitments]]"
status: draft
confidence: high
---

# Claude 워터마크 샘플링 구멍 — 구형 2개 모델은 설정 하나로 표시가 사라진다

## 쉽게 읽기

**비유**: 도장에 잉크가 마르면 찍히지 않는 셈이다. 워터마크는 '찍힌다'는 사실이 아니라, 어떤 설정에서 찍히는지가 보증의 전부다.

| 용어 | 풀이 |
|------|------|
| **텍스트 워터마크** | 단어 선택 패턴에 숨긴 AI 생성 표시 |
| **SynthID** | Google DeepMind의 워터마킹 방식. 단어 선택의 무작위성을 미세 조정해 통계적으로 탐지 가능한 패턴을 만든다 |
| **샘플링 설정** | temperature·top_p·top_k 등 다음 단어 선택의 무작위성을 정하는 값 |

## 한줄 정의

2026-10-31 The Decoder 보도 — Anthropic이 11-03부터 4개 Claude 모델에 확대하는 텍스트 워터마크가 Opus 4.6·Sonnet 4.6에서는 샘플링 설정 변경 시 적용되지 않는 한계.

## 핵심 내용

- **확대 범위**: Claude Mythos 5·Opus 4.7·Opus 4.6·Sonnet 4.6에 신규 적용, 11-03 시행(Bedrock은 수일 지연 가능). Opus 5.5 이상은 이미 탑재돼 있다.
- **구멍**: Opus 4.6·Sonnet 4.6은 temperature·top_p·top_k가 모두 기본값일 때만 표시가 붙는다. 하나라도 바꾸면 표시 없는 출력이 나온다. Anthropic은 고객 이메일에서 이를 인정하고 컴플라이언스 용도라면 기본값 유지를 권고했다.
- **표시 성격**: 단어 선택에 새겨지는 비가시 패턴. 토큰·가격·요청 형식을 바꾸지 않고, 고객이 직접 끌 수 없으며, 탐지 API는 프라이빗 프리뷰 중이다.
- **동기**: EU AI Act 투명성 의무와 2026-12-02 마감. 2026-08-02 이후 출시 모델은 출시일부터 표시를 달았고, 구형은 소급 적용 중이다.
- **해석 주의**: 표시가 있다고 단독 작성을 뜻하지 않고, 표시가 없다고 AI 미사용을 증명하지도 못한다. 짧은 문장·대폭 편집·바꿔쓰기에도 약하다.

## 왜 중요한가 (1인 개발자 관점)

1. **컴플라이언스 증거는 설정까지 포함해야 한다**: 모델명만으로는 워터마크 존재를 보증할 수 없다. 사용 모델 버전과 샘플링 설정이 함께 기록돼야 감사 증거가 된다.
2. **일상적 튜닝이 표시를 끈다**: 창의성·다양성을 위해 temperature를 만지는 건 흔한 작업이다. 그 손길 하나가 투명성 장치를 무력화한다는 점이 설계 결함이다.
3. **신형과 구형의 격차**: Mythos 5·Opus 4.7에는 같은 단서가 언급되지 않았다. 구형 모델을 계속 쓰는 조직은 워터마크 의존 전에 버전·설정 감사를 먼저 해야 한다.

## 한계 (명시)

- 근거는 Anthropic 고객 이메일의 2차 보도(The Decoder)이며, 이메일 원문은 공개되지 않았다.
- Mythos 5·Opus 4.7이 설정과 무관하게 표시된다는 점은 명시적 확인이 아니라 단서 부재에 따른 추론이다.
- Anthropic 공개 모델표에는 아직 4개 모델의 워터마크와 11-03 일정이 반영되지 않았다.
