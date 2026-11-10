---
title: "Google, TPU 8tx·TPU 8i Max 공개 — 기밀 추론·대규모 멀티 에이전트용 8세대 TPU (11-09)"
source_url: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/?ref=thehype.news"
source_type: "news"
authors: ["Google", "Google Cloud"]
published: 2026-11-09
fetched: 2026-11-10
tags: [google, tpu, confidential-computing, inference, amd]
status: raw
---

# Google, TPU 8tx·TPU 8i Max 공개 — 기밀 추론·대규모 멀티 에이전트용 8세대 TPU (11-09)

> Google이 11-09 8세대 TPU 패밀리의 4번째 시스템 2종을 공개했다. TPU 8tx는 기밀 추론·소규모 학습용, TPU 8i Max는 8i 칩 2개를 한 패키지에 넣어 대규모 컨텍스트·멀티 에이전트 추론용이다. 가격·지역·GA 일정은 미공개이며 Bloomberg는 내년 출시로 보도했다.

## 내용

- **TPU 8tx**: 8t와 같은 실리콘에 5세대 AMD EPYC 호스트를 결합했다. 하드웨어 기밀 컴퓨팅(confidential computing)을 갖춰, 민감 데이터를 다루는 추론을 암호화된 격리 환경에서 실행한다. 8t 대비 최대 2배 낮은 지연(latency)을 주장한다. 용도는 기밀 추론과 소규모 학습이다.
- **TPU 8i Max**: 8i 칩 2개를 하나의 패키지에 담아 8i 대비 연산 2배·SRAM 2배·HBM 대역폭 2배를 제공한다. 대규모 컨텍스트와 멀티 에이전트 추론이 타깃이다. 메모리 벽이 기업 에이전트 배포의 병목이라는 점에서, 메모리·대역폭을 늘린 설계다.
- **맥락**: 8세대 TPU 패밀리는 1년 안에 4개 시스템을 냈다. AMD EPYC 호스트 채택은 AMD의 승리로, 발표 당일 AMD 주가는 +13.26% 급등해 $508.58을 기록했다(6개월 만 최대 일일 상승, Oppenheimer의 Outperform 상향·목표가 $600도 함께 작용). 같은 날 NVDA는 보드 조사 소식에 −4.27% 하락했다.
- **주의**: 가격·제공 지역·정식 출시(GA) 일정이 공개되지 않았다. 성능 수치는 Google 주장으로 독립 검증이 없다. 8i Max의 2배 수치는 칩 2개 패키징에 따른 것으로, 실제 워크로드에서의 선형 확장은 별도 검증이 필요하다.

## 맥락

- [[concepts/openai-google-tpu-purchase-plan]] — OpenAI의 Google TPU 구매 검토 보도, Nvidia 의존 완화 시도 (2026-10-28)
- [[concepts/oracle-vera-rubin-multi-gigawatt-tpu-cerebras]] — Oracle Vera Rubin 멀티 기가와트 확대 + Google TPU·Cerebras 첫 제공 (2026-10-28)
- [[concepts/google-agent-compute-engine]] — Google Cloud Agent Compute Engine, 에이전트 세션마다 하드웨어 격리 microVM — 샌드박스 자격증명 제로 (2026-10-23)
- [[concepts/microsoft-maia-300]] — Microsoft Maia 300 3세대 자체 AI 칩, TSMC 칩렛·랙당 96칩·내년 100만 개 배치 (2026-10-12)
