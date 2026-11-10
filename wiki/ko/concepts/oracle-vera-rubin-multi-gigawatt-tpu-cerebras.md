---
title: "Oracle, Vera Rubin 멀티 기가와트 확대 + Google TPU·Cerebras 첫 제공"
category: concepts
tags: [oracle, nvidia, vera-rubin, google, tpu, cerebras, sambanova, cloud]
created: 2026-10-28
updated: 2026-10-28
sources:
  - "raw/articles/2026-10-28-oracle-vera-rubin-multi-gigawatt-tpu-cerebras.md"
related:
  - "[[concepts/nvidia-kazakhstan-sovereign-ai]]"
  - "[[concepts/microsoft-maia-300]]"
  - "[[concepts/ai-debt-boom-cracking]]"
status: draft
confidence: high
---

# Oracle, Vera Rubin 멀티 기가와트 확대 + Google TPU·Cerebras 첫 제공

## 쉽게 읽기

**비유**: 클라우드 회사가 지금까지는 "Nvidia 칩만 파는 가게"였다면, Oracle은 이제 "여러 칩을 파는 백화점"으로 간판을 바꿨다. 주력인 Vera Rubin은 멀티 기가와트까지 키우면서도, Google TPU·Cerebras·SambaNova를 진열장에 새로 올렸다. 학습은 Nvidia, 추론은 여러 칩 — 워크로드마다 맞는 칩을 고르게 하겠다는 전략이다.

| 용어 | 풀이 |
|------|------|
| **Vera Rubin** | Nvidia의 최신 AI 서버 플랫폼 세대 (Rubin GPU + Vera CPU) |
| **기가와트 규모** | 데이터센터 전력 용량 단위, AI 인프라 규모를 가늠하는 척도 |
| **추론** | 학습된 모델이 실제 요청에 답을 내는 단계 (학습과 달리 칩 선택지가 다양) |
| **Acceleron** | Oracle 자체 네트워킹 칩, Nvidia 네트워킹 일부를 대체 |

## 한줄 정의

2026-10-27 Oracle AI World 발표 — Vera Rubin 멀티 기가와트 확대 + Google TPU·Cerebras·SambaNova의 OCI 첫 제공(2027년부터), 금액 미공개.

## 핵심 내용

- **Vera Rubin 확대**: OCI가 Nvidia 최신 Vera Rubin AI 서버를 멀티 기가와트 규모로 확대. 금액 미공개. Huang은 Vera Rubin 시스템이 기가와트당 Nvidia에 최대 $400억 매출을 낸다고 밝힌 바 있다.
- **OCI 제공 현황**: Vera Rubin NVL72 시스템과 Vera CPU가 OCI에서 정식 제공(GA). 8개 Rubin GPU를 담은 HGX Rubin NVL8이 프런티어 학습·에이전틱 워크로드용으로 계획됐다.
- **자체 네트워킹 침투**: Nvidia 기반 시스템에서도 일부 Nvidia 네트워킹 칩 대신 Oracle 자체 Acceleron 칩을 쓴다. 칩뿐 아니라 네트워킹까지 자사 실리콘 비중을 키우는 수순이다.
- **다변화의 핵심**: Google TPU를 Google 외 하이퍼스케일러 최초로 OCI에서 제공한다 — 학습용 TPU 8t·추론용 TPU 8i로 2027년부터. Cerebras 고속 추론과 SambaNova SambaRack SN50도 2027년에 들어온다.
- **시장 반응**: 발표 당일 Oracle 주가는 약 4~5% 올라 약 $132(MarketFlux). Cerebras CEO는 "다른 사람의 데이터센터에 대규모로 배치"되는 것이라며 1티어 고객 기반 확대를 강조했다.

## 왜 중요한가 (1인 개발자 관점)

1. **추론 시장의 다극화**: 학습은 Nvidia 독점에 가깝지만 추론은 칩 선택지가 늘고 있다. Oracle의 진열장 확대는 추론 단가가 공급자 경쟁으로 내려갈 수 있다는 신호다.
2. **클라우드 선택 기준의 변화**: "어떤 GPU가 있나"에서 "어떤 칩 조합을 고를 수 있나"로 기준이 이동한다. 워크로드별 칩 선택이 가능한 클라우드가 비용 최적화의 도구가 된다.
3. **네트워킹까지의 수직 통합**: Oracle이 네트워킹 칩까지 자체화하면, 클라우드 사업자의 마진 구조와 성능 특성이 달라진다 — 벤치마크 숫자 뒤의 실리콘 구성을 봐야 하는 이유다.

## 한계 (명시)

- 확대 계약의 금액·기가와트 수·인도 시점이 공개되지 않아 규모를 정량화할 수 없다.
- Google TPU·Cerebras·SambaNova 제공은 2027년 예정이라, 당장 쓸 수 있는 선택지는 아니다.
- 주가 반응(약 4~5% 상승)은 MarketFlux 보도 수치이며, 당일 시장 전체 움직임과 분리되지 않았다.
