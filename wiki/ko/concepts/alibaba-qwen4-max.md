---
title: "Alibaba Qwen4-Max 정식 출시 — 2.4조 MoE 플래그십, DeepSWE 75.7점 주장 (11-16)"
category: concepts
tags: [qwen4-max, alibaba, flagship-model, moe, coding-benchmark, api-pricing]
created: 2026-11-16
updated: 2026-11-16
sources:
  - "raw/articles/2026-11-16-alibaba-qwen4-max.md"
related:
  - "[[concepts/moonshot-kimi-k31-pro]]"
  - "[[concepts/deepseek-v41-flash-1017]]"
  - "[[concepts/gemini-4-hydrogen]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: high
---

# Alibaba Qwen4-Max 정식 출시 — 2.4조 MoE 플래그십, DeepSWE 75.7점 주장 (11-16)

## 쉽게 읽기

**비유**: 요리사가 2,400명의 조수(전문가)를 거느린 거대한 주방을 열었다고 생각해 보자. 주문이 들어올 때마다 필요한 조수 71명만 불러서 요리하니, 주방은 크지만 한 번 요리할 때 드는 힘은 그만큼이다. 이 주방은 코딩 시험에서 세계 최고 수준이라고 스스로 자랑하는데, 시험 채점은 자기들이 했다.

| 용어 | 풀이 |
| **MoE (전문가 혼합)** | 모델을 여러 전문가 블록으로 나누고, 토큰마다 필요한 전문가만 작동시키는 구조 |
| **파라미터** | 모델이 학습하며 저장한 숫자의 개수. 클수록 모델이 더 많은 것을 기억할 수 있다 |
| **활성 파라미터** | 전체 파라미터 중 토큰 하나를 처리할 때 실제로 쓰이는 부분. 비용을 결정한다 |
| **컨텍스트** | 모델이 한 번에 읽고 기억할 수 있는 글의 길이. 1M 토큰은 책 수백 권 분량 |
| **DeepSWE** | AI가 실제 소프트웨어 문제를 얼마나 잘 푸는지 재는 코딩 벤치마크 |
| **API 전용** | 모델 가중치를 공개하지 않고, 인터넷 API로만 쓸 수 있는 형태 |

## 한줄 정의

2026-11-16 — Alibaba의 Qwen 팀이 Qwen4 패밀리 플래그십 Qwen4-Max를 퍼블릭 API로 정식 출시했다. 11-11 Token Plan 전용 프리뷰에서 닷새 만의 전환이다. 스파스 MoE 총 2.4조 파라미터(토큰당 활성 71B), 네이티브 비전, 1M 토큰 컨텍스트, 가격은 전작 대비 약 25% 인하됐다.

## 핵심 내용

- **출시**: 11-11 Token Plan 전용 프리뷰(`qwen4-max-preview`, 11-25 종료 예정) 후 11-16 퍼블릭 API 정식 출시. 모델 ID `qwen4-max`, QwenCloud·Qwen Studio·QwenWork·Qoder에서 이용 가능. OpenAI·Anthropic 프로토콜 호환 API 제공.
- **구조**: 스파스 MoE, 총 2.4조 파라미터·토큰당 약 71B 활성화, 네이티브 비전(이미지·비디오 입력), 1M 토큰 컨텍스트. 328B 규모의 N-gram 임베딩 파라미터 추가 보도도 있다.
- **가격**: 입력 $1.50 / 출력 $4.50 per 1M 토큰, 캐시 입력 $0.075. 전작 Qwen3.8-Max($2/$6) 대비 약 25% 인하. Alibaba 자체 평가 기준 작업당 평균 비용 $1.67(전작 $4.43 대비 약 62% 감소), 고추론 모드 토큰 사용량 약 35~50% 감소 주장.
- **벤치(모두 Alibaba 자체 발표 수치)**: DeepSWE v1.1 코딩 벤치 75.7점 — Claude Opus 5.5(74.2), Kimi K3.1(75.5)을 앞섰다고 주장. Artificial Analysis Intelligence Index 43점(전작 대비 +9, Kimi K3.1 Pro 46점보다 3점 낮음). Work360 52.69점(전작 47.74). Reuters는 독립 검증 데이터가 부족하다고 지적했다.
- **공개 여부**: 플래그십 자체는 API 전용·가중치 비공개 유지. 소형 Qwen4 모델만 향후 오픈웨이트 예정이며 날짜·규모·라이선스는 미정.

## 왜 중요한가 (1인 개발자 관점)

1. **코딩 에이전트의 가격표가 다시 쓰인다**: DeepSWE 75점대 성능에 입력 $1.50이면, 코딩 에이전트의 실행 비용 구조가 바뀐다. 내 하네스의 모델 선택지에서 "플래그십급 코딩을 더 싸게" 축이 생겼다.
2. **중국 플래그십의 맞대결이 본격화된다**: Kimi K3.1 Pro와 같은 날 경쟁 구도가 선명해졌다. 가격·벤치·공개 여부를 함께 비교하는 습관이 모델 선택의 기본이 된다.
3. **벤치는 주장일 뿐이다**: DeepSWE 1위 주장은 Alibaba 자체 수치라 독립 검증이 필요하다. 새 모델을 고를 때는 내 태스크로 직접 돌려보는 것이 벤치보다 믿을 만하다.

## 한계 (명시)

- 파라미터 수 2.4조는 Qwen 공식 발표·보도 기준이며, QwenCloud 문서에는 파라미터 수가 기재돼 있지 않다.
- 벤치마크 수치는 모두 Alibaba 자체 평가·발표 수치로, 독립 검증이 없다. Reuters는 독립 검증 데이터가 부족하다고 지적했다.
- 플래그십은 API 전용·가중치 비공개라 직접 돌려볼 수 없고, 소형 모델의 오픈웨이트 일정도 미정이다.

## 관련 개념

- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro와 코딩 벤치·가격 경쟁, 중국 플래그십 모델의 맞대결 (2026-10-24)
- [[concepts/deepseek-v41-flash-1017]] — 중국 저가·오픈 모델 축, Qwen4-Max의 가격 인하와 같은 흐름 (2026-10-18)
- [[concepts/gemini-4-hydrogen]] — 실행형 코딩 에이전트 모델, 코딩 벤치가 곧 에이전트 성능 지표가 되는 시대 (2026-11-12)
- [[concepts/claude-fable-5-2-mythos-5-2]] — 비교 대상 Claude Opus 5.5가 속한 Claude 5.2 세대 (2026-11-09)

## 참고 소스

- [Alibaba Qwen4-Max 정식 출시 원본](raw/articles/2026-11-16-alibaba-qwen4-max.md)
