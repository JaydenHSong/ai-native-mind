---
title: "Thinking Machines, Inkling 2 Small 출시 — 594B MoE·AA 지수 31점, Apache 2.0 가중치는 다음 주 (11-05)"
source_url: "https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/"
source_type: "news"
authors: ["Thinking Machines Lab"]
published: 2026-11-05
fetched: 2026-11-06
tags: [thinking-machines, inkling, open-weights, moe, tinker]
status: raw
---

# Thinking Machines, Inkling 2 Small 출시 — 594B MoE·AA 지수 31점, Apache 2.0 가중치는 다음 주 (11-05)

> Mira Murati의 Thinking Machines Lab이 11-05 Inkling 2세대 첫 모델 Inkling 2 Small을 출시했다. 594B MoE(활성 17B)로 Artificial Analysis 지수 31점을 기록했고, 현재는 Tinker 플랫폼에서만 쓸 수 있다. 전체 가중치는 외부 안전 테스트·레드티밍이 끝나면 "다음 주" Apache 2.0으로 공개될 예정이다.

## 내용

- **발표**: 11-05 Thinking Machines Lab, Inkling 2 Small 출시. 전 OpenAI CTO Mira Murati가 이끄는 랩의 2세대 모델 첫 번째다. 1세대 Inkling Small은 2026-07 출시(975B 총·41B 활성)였다.
- **규모**: MoE 594B 총 파라미터, 토큰당 활성 17B. 텍스트·이미지 입력, 텍스트 출력, 네이티브 비전(292M 파라미터 비전 인코더). 컨텍스트 최대 1M 토큰. 12T 토큰을 GB300에서 68시간 학습했다(Soumith Chintala). 에이전틱 코딩·장시간 자율 작업·비전·지식 작업을 목표로 한다.
- **성능**: Artificial Analysis Intelligence Index v5.0.1 기준 31점, 전작 13점(일부 매체는 12점으로 표기)에서 18점 상승. SWEBench Pro Hard 86.3%. Artificial Analysis는 가중치가 공개되면 중국 외 지역 개발사 중 최고 점수의 오픈웨이트 모델이 될 것이라고 평가했다.
- **접근**: 현재는 Tinker 플랫폼에서만 이용 가능하다. Tinker Playground는 추론 전용, Tinker에서 추론·파인튜닝이 가능하다. 가중치는 출시 시점에는 비공개이며, 외부 안전 테스트와 레드티밍이 완료되면 "다음 주" 전체 가중치를 Apache 2.0 라이선스로 공개하겠다는 계획이다. 날짜는 미확정이고 조건부다. Artificial Analysis는 출시 시점을 proprietary로 표기했다.
- **가격**: Tinker 기준 입력 $0.30·출력 $1.00(백만 토큰당), 캐시 입력 $0.03. 1세대 Xhigh 설정($1.00/$4.05) 대비 출력 가격이 약 75% 낮아졌다.
- **사업 맥락**: Business Insider는 랩이 약 $40B 프리머니 밸류에이션으로 약 $50억 조달 중이라고 보도했으나, 라운드는 미확정이다. 랩은 2026-07-31 단계적 출시 프레임워크를 따르고 있으며, 가중치 공개는 되돌릴 수 없다는 점을 강조해 왔다.

## 맥락

- [[concepts/moonshot-kimi-k31-pro]] — Moonshot Kimi K3.1 Pro, 2.8T MoE 오픈웨이트 예고·사이버 능력 의도적 축소
- [[concepts/meta-muse-spark-open]] — Meta Muse Spark Open, 816B(활성 42B) MoE 오픈웨이트·1M 컨텍스트·Mac Studio 로컬 구동
- [[concepts/reflection-open-weight]] — Nvidia 지원 Reflection AI 오픈 웨이트 모델, DeepSeek·Qwen의 미국 대항마
