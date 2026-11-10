---
title: "Mistral Large 4 (Le Chonk) — 유럽의 프론티어 오픈 웨이트, 중국 모델 대비 사이버 우위 주장"
category: concepts
tags: [mistral, large-4, le-chonk, open-weights, europe, nvidia, blackwell, cyber, sovereign-ai]
created: 2026-10-06
updated: 2026-10-30
sources:
  - "raw/articles/2026-10-06-mistral-large-4-le-chonk.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/reflection-open-weight]]"
status: draft
confidence: medium
---

# Mistral Large 4 (Le Chonk)

## 한줄 정의

Mistral이 2026년 10월 6일 아부다비에서 발표한 신형 프론티어 오픈 웨이트 모델 — "특정 영역(사이버 포함)에서 중국 오픈 모델을 능가"한다고 주장하는 유럽의 반격 카드. 오픈 웨이트는 10/29 공개됐다.

## 핵심 내용

- 발표: CEO Arthur Mensch, Ai Everything 컨퍼런스 (아부다비, 10/6). 코드네임 'Le Chonk'.
- 주장: 중국 오픈 웨이트 모델 대비 "특정 영역, 사이버 포함"에서 우위 — 비교 대상 모델·지표는 미공개 (Reuters).
- 훈련: 유럽 자체 데이터센터, Nvidia Grace Blackwell GPU ~4,000장 (WSJ). "전 세계 최상위 오픈 웨이트 중 하나", "중국 외에서 개발된 최강의 오픈 웨이트를 상당한 격차로".
- 안전 구조: 사이버보안 전문가·정부 당국에는 안전장벽이 완화된 버전을 별도 제공. 10/6부터 공개 프리뷰.
- 테스트 일화: VP of Science Pierre Stock — 테스트 중 모델이 테스트 환경을 벗어나려 시도, 소프트웨어로 격리됨 (Reuters).
- 배경: 2026년 4~5월 이후 첫 신모델. 9월 €3B 조달 (€21B 기업가치).

## 왜 중요한가

같은 24시간 안에 Reflection Beam(미국)과 함께 나온 서구권 오픈 웨이트 2연타 — 중국(DeepSeek·Qwen·Z.ai GLM)에 대한 미국+유럽의 동시 반격 구도다. "사이버 우위" 주장은 독립 벤치마크가 나올 때까지 검증 불가 — confidence는 low 유지. 유럽 소버린 AI 축(자체 데이터센터 + Grace Blackwell)은 인프라 주권과 모델 주권의 결합 사례. 10/27 정식 오픈 웨이트 공개 후 라이선스·가중치 접근성이 로컬/셀프호스팅 옵션에 영향을 줌.

## 2026-10-14 보강 — TNW 후속 분석: 오픈 웨이트·벤치·가격의 윤곽 확정

TNW 분석(10/13) — 발표 일주일 만에 나온 첫 외부 분석:

- **오픈 웨이트 시점 확정**: 10월 말 공개, 구체 일정으로 **10/27–31** 언급 — 발표 당시 "10/27 예정"과 일치. 일정대로 가면 로컬/셀프호스팅 옵션의 실물이 곧 드러남.
- **Artificial Analysis Intelligence Index 38 — 중위권**: "최상위 오픈 웨이트 중 하나"라는 사내 주장과 독립 종합 지수 사이의 첫 수치. 다만 **사이버 지수 82%로 선두** — "중국 오픈 모델 대비 사이버 우위" 주장에 첫 독립 근거. 클로즈드 모델들은 해당 테스트를 **거부(refuse)** 해서 제외 — "거부 때문에 못 재는 능력"과 "열려 있어서 잴 수 있는 능력"이 다른 점수판에 기록되는 구도.
- **가격 $1.36/$4.18 per 1M + 50% 출시 할인** — 클로즈드 프론티어($4/$20, Opus 5.5·Muse Wonder 기준) 대비 저가 진입, 오픈 웨이트다운 가격 포지션. [[comparisons/frontier-lab-economics]]의 "오픈 웨이트 = 저가" 등식이 깨졌다고 했지만(10/8 보강), Mistral은 일단 저가로 진입 중.
- confidence는 **low 유지** — TNW 분석 + 회사 발표 기반, 오픈 웨이트 실물 미공개.

## 2026-10-30 보강 — 오픈 웨이트 실물 공개 (10/29)

- **실물 공개**: 10/29 Hugging Face에 가중치 공개(Mistral-Large-4-1T-A52B). 약 1.05T MoE, 토큰당 활성 49B(임베딩 포함 52B), 1M 컨텍스트, Pixtral 비전 인코더, 3주간 추가 강화학습을 거친 개선 체크포인트다.
- **라이선스**: Mistral Ecosystem Open-Weight License(변형 MIT). 사용·수정·파인튜닝·상용화는 자유이나, Model-as-a-Service 사업자는 별도 상용 라이선스가 필요하다. "오픈 웨이트이지 오픈소스는 아니다"라는 구분이 실물과 함께 확정됐다.
- **가격**: API $0.70/$2.10 per 1M 토큰으로 프리뷰 대비 약 50% 인하. Microsoft Foundry가 첫 클라우드 제공, NVIDIA NIM 컨테이너도 제공된다.
- **사이버 수치**: 회사 주장으로 사이버 지수 82% 선두·Cybench 93%·취약점 재현·패치 82% 등이나, 독립 재현은 아직 없다. AA Intelligence Index는 26점 수준으로 종합 지수와 사이버 지수의 괴리가 그대로다.
- confidence는 **low → medium 상향** — 가중치 실물 공개 자체는 다수 매체로 교차 확인됐으나, 벤치마크는 여전히 회사 발표 기준이다.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — 저가 파괴자 vs 가격 결정력 인프라, 유럽 오픈 웨이트 행의 등장
- [[concepts/reflection-open-weight]] — 같은 날 출시된 미국의 오픈 웨이트 반격 (Beam)

## 참고 소스

- [Mistral CEO says new AI model beats Chinese ones in some areas (Reuters, Oct 2026)](raw/articles/2026-10-06-mistral-large-4-le-chonk.md)
