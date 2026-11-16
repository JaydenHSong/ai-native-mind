---
title: "Tencent Hy4 Flash 출시 — 입력 $0.07의 초저가 티어, Hy4의 저가형 (11-16)"
source_url: "https://casrai.org/news/tencent-hy4-flash-lower-cost-ai-model-launch-2026"
source_type: "news"
authors: ["CASRAI"]
published: 2026-11-16
fetched: 2026-11-16
tags: [tencent, hy4-flash, low-cost-model, api-pricing, multimodal]
status: raw
---

# Tencent Hy4 Flash 출시 — 입력 $0.07의 초저가 티어, Hy4의 저가형 (11-16)

> Tencent가 11-16 Tencent Cloud TokenHub에서 Hy4 Flash를 정식 출시했다. 11-4 출시된 플래그십 Hy4의 저가 티어로, 입력 토큰 100만 개당 $0.07이라는 초저가다. Qwen4-Max 입력가의 약 1/21 수준이다. 성능 주장은 Tencent 자체 블라인드 테스트에만 기대고 있어 독립 검증이 없다.

## 내용

- **출시**: 2026-11-16 Tencent Cloud TokenHub 정식 출시. 11-4 출시된 플래그십 Hy4의 저가 티어다. 모델 ID `hy4-flash`, OpenAI·Anthropic 프로토콜 호환 API 제공.
- **구조**: 총 224B 파라미터, 토큰당 12B 활성화, 1M 토큰 컨텍스트, 네이티브 멀티모달.
- **가격**: 입력 $0.070 / 출력 $0.281 / 캐시 입력 $0.003 per 1M 토큰. 같은 날 출시된 Qwen4-Max 입력가($1.50)의 약 1/21 수준이다. 11-30까지 50% 프로모션 적용 보도도 있다.
- **성능 주장**: Tencent 자체 블라인드 테스트(85명, 259개 실무 과제)에서 만족도 2.79/4점으로 Claude Haiku 5.5(2.81)와 대등하다고 주장. 독립 검증·모델 카드·벤치마크 원본은 공개되지 않았다.
- **공개 여부**: 가중치 미공개. 오픈소스 예정이라 밝혔으나 날짜·라이선스 없음. OpenRouter 탑재도 미정이다.

## 맥락

- [[concepts/tencent-hy4-full-release]] — Hy4 플래그십 정식 출시, 비전·컴퓨터 사용 첫 탑재 (2026-11-05)
- [[concepts/claude-haiku-5-5]] — 비교 대상 Claude Haiku 5.5, 최경량·최저가 5.5 시리즈 (2026-10-08)
- [[concepts/deepseek-v41-flash-1017]] — 저가·오픈 모델 축의 또 다른 사례, 태스크당 $0.2 (2026-10-18)
