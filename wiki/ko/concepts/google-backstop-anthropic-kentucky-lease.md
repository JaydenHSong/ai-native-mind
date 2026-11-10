---
title: "Google, Anthropic의 켄터키 $19B 데이터센터 임대료 보증 — TeraWulf 8-K, 채무불이행 시 임대 승계 또는 지분 취득 가능"
category: concepts
tags: [google, anthropic, terawulf, data-center, kentucky, infrastructure]
created: 2026-11-08
updated: 2026-11-08
sources:
  - "raw/articles/2026-11-08-google-backstop-anthropic-kentucky-lease.md"
related:
  - "[[concepts/anthropic-s1a-q3-revenue-commitments]]"
  - "[[concepts/oracle-vera-rubin-multi-gigawatt-tpu-cerebras]]"
  - "[[concepts/openai-google-tpu-purchase-plan]]"
  - "[[concepts/ai-debt-boom-cracking]]"
status: draft
confidence: high
---

# Google, Anthropic의 켄터키 $19B 데이터센터 임대료 보증 — TeraWulf 8-K, 채무불이행 시 임대 승계 또는 지분 취득 가능

## 쉽게 읽기

**비유**: Anthropic이 20년짜리 큰 건물 임대차 계약을 맺는데, 건물주는 "네가 월세를 못 내면 어쩌지?"라고 걱정한다. 그래서 돈 많은 이웃 Google이 "걱정 마, 얘가 못 내면 내가 내줄게. 대신 못 내면 내가 그 건물에 들어갈 수도 있어"라고 보증서를 써 줬다. 이 보증서 덕분에 건물주는 은행에서 돈을 빌리기 쉬워졌다.

| 용어 | 풀이 |
|------|------|
| **신용지원(credit support) 계약** | 제3자가 임차인의 지급 의무를 보증하는 계약 — 임차인이 못 내면 보증인이 대신 낸다 |
| **401MW** | 데이터센터의 전력 규모 — 40만 가구가 쓸 만한 전력에 해당한다 |
| **프로젝트 파이낸싱** | 건물·설비 자체를 담보로 빌리는 방식 — 임차인의 신용이 좋아야 금리가 낮아진다 |

## 한줄 정의

2026-11-04 — TeraWulf가 제출한 8-K에 따르면 Google은 Anthropic이 켄터키주 호스빌의 Justified Data Campus에서 20년간 임차하는 약 401MW 규모의 컴퓨트 용량에 대한 임대료 지급 의무를 보증하는 신용지원 계약 3건(CB-1·CB-2·CB-3)을 체결했다. 계약상 임대 약정 총액은 약 $19B이다. Anthropic이 채무를 이행하지 못하면 Google은 임대를 승계하거나 해지 수수료를 내고 프로젝트 자회사의 지분을 취득할 수 있다.

## 핵심 내용

- **계약 구조**: 계약 당사자는 임대인 Raylan Data(TeraWulf 자회사), 마스터 임대인 Justified DataPower, 임대 보증인 TeraWulf, 임차인 Anthropic, Google 5곳. 임대차는 2026년 7월 6일 체결된 20년 계약으로, 데이터홀(CB-1·CB-2·CB-3) 인도 시점부터 임대료 지급 의무가 시작된다. 용량 인도는 2027년 말부터 2028년 2분기까지 단계적으로 이뤄질 예정이다.
- **보증의 효력**: 각 보증은 해당 임대차의 마지막 데이터홀 인도일부터 효력이 생기고, Anthropic(또는 보증 계열사)이 투자등급 신용등급을 3개월 이상 유지하면 종료된다. Google의 보증은 프로젝트 파이낸싱 조달을 돕는 목적이며, Alphabet의 선순위 무담보 채무 등급은 S&P AA+·Moody's Aa2이다.
- **디폴트 시나리오**: Anthropic이 임대료를 내지 못하거나 파산하면 Google은 임차인 지위를 승계하거나, 일정 조건 하에 해지 수수료를 내는 대가로 프로젝트 자회사의 비례 지분을 취득할 수 있다. 보증 효력 발생 후 첫 6년간은 해지보다 임대 승계가 원칙이다(CoinDesk 보도).
- **건설**: TeraWulf는 Fluor Enterprises와 3개 건물에 대한 확정 EPC(설계·조달·시공) 계약도 체결했다. 다만 프로젝트 차입금은 아직 확정되지 않았고, Fluor의 상한 가격도 확정 중이다.

## 왜 중요한가 (1인 개발자 관점)

1. **AI 인프라 자금조달의 새 패턴이다**: 랩이 직접 돈을 빌리는 게 아니라, 빅테크가 임대료를 보증해 주는 구조다. Anthropic의 $895.4B 컴퓨트 약정(S-1/A)이 이런 방식으로 뒷받침된다는 뜻이다. "누가 AI 인프라 대금을 실제로 떠안는가"를 볼 때, 보증인까지 봐야 한다.
2. **Google이 Anthropic의 리스크를 떠안는다**: 경쟁 관계인 Google이 Anthropic의 임대료를 보증한다는 것은, 그 대가로 무언가를 얻는 구조일 가능성이 높다. 한 분석은 계약서 §2.k가 임차인에게 Google 승인 TPU만 쓰도록 묶는다고 읽었다 — 확인되지 않은 독해지만, 보증의 대가가 실리콘 선택권일 수 있다는 가설은 눈여겨볼 만하다.
3. **디폴트 시나리오가 이미 계약서에 있다**: Google이 지분을 취득할 수 있다는 조항은, 이 보증이 단순한 호의가 아니라 "실패하면 내가 가져간다"는 옵션이라는 뜻이다. AI 인프라 금융의 리스크 분담 구조를 이해하는 실례다.

## 한계 (명시)

- 한 분석(Mosaic Singularity)은 신용지원 계약서 §2.k가 임차인에게 임대 기간 내내 Google이 승인한 TPU만 쓰도록 묶는다고 읽었다. 이는 단일 분석의 독해이며, 8-K 본문·보도자료에는 TPU 조건이 직접 언급되지 않는다. 별도 확인이 필요하다.
- 프로젝트 차입금은 아직 확정되지 않았고, Fluor의 상한 가격도 확정 중이다. 임대료도 데이터홀 인도 전에는 발생하지 않는다.

## 참고 소스

- [Google의 Anthropic 켄터키 임대 보증 원본](raw/articles/2026-11-08-google-backstop-anthropic-kentucky-lease.md)
