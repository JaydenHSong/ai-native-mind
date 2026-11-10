---
title: "MiniMax M3.1 Flash — 태스크당 $0.22의 에이전트용 고속 MoE 모델"
category: concepts
tags: [minimax, m3-1-flash, agent-model, moe, pricing, benchmark, open-weights, deepseek, dual-use]
created: 2026-10-20
updated: 2026-10-20
sources:
  - "raw/articles/2026-10-20-minimax-m3-1-flash.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[comparisons/frontier-lab-economics]]"
  - "[[concepts/reflection-open-weight]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# MiniMax M3.1 Flash — 태스크당 $0.22의 에이전트용 고속 MoE 모델

## 쉽게 읽기

**비유**: 에이전트를 "직원"으로 쓴다고 치자. 지금까지는 유능한 직원이 비쌌다 (프론티어 모델 = 고액 연봉자). M3.1 Flash는 "빠르고 싼데 일도 꽤 잘하는" 계약직이다 — 태스크당 22센트. 428B짜리 거대한 두뇌에서 매번 23B만 깨워서 쓰는 구조라 빠르고 싸다. 단, 이 계약직은 "자물쇠 따는 법"도 꽤 안다 (CyberGym 82%) — 싸고 빠른 게 항상 좋은 것만은 아니다.

| 용어 | 풀이 |
|------|------|
| **MoE (Mixture of Experts)** | 거대 모델 안에 여러 "전문가"를 두고, 입력마다 필요한 전문가만 깨워서 쓰는 구조 — 전체는 크지만 실제 쓰는 건 작음 |
| **태스크당 비용** | 에이전트가 하나의 작업을 끝내는 데 든 API 비용 — 에이전트 대량 실행의 단위 경제 |
| **AA Intelligence Index** | Artificial Analysis의 종합 지능 지수 — 여러 벤치를 합친 점수 |
| **CyberGym** | 사이버보안 작업 벤치 — 높을수록 해킹 관련 작업도 잘한다는 뜻 (dual-use) |

## 한줄 정의

MiniMax가 2026-10-19 출시한 에이전트용 고속 모델 — 428B 중 23B만 활성화하는 MoE, 태스크당 약 $0.22, AA 지수 42. 10/23 오픈 웨이트 예정. CyberGym 82%의 dual-use 측면 주의.

## 핵심 내용

- **스펙**: 428B total / 23B active MoE (공격적 추론 희소성). 1M 토큰 컨텍스트, 텍스트+이미지+비디오. 항상 켜진 추론 + 사고 노력 선택. 희소 어텐션 업그레이드.
- **가격**: 입력 $0.15 / 출력 $0.60 per 1M 토큰 (캐시 입력 $0.015). 회사 주장 **에이전트 작업 비용 70%↓**. Oossa 추산 **태스크당 약 $0.22**.
- **벤치**: AA Intelligence Index 42 (M3 대비 +13). DeepSWE v1.1 73.7% (DeepSeek V4.1 Flash 77%에는 뒤짐). HLE 48% (DeepSeek V4.1 Flash 43%, GLM-5.3-Flash 상회). AA-Omniscience 56%. OSWorld V2 61.7, BankerToolBench 76.2, **CyberGym ~82%**.
- **속도**: 회사 주장 3배 빠름 — 피크 >200 tok/s, 중앙값 >170 tok/s. AA 실측은 120 tps, TTFT 1.08초.
- **오픈 웨이트**: "곧 공개" (AA는 그때까지 proprietary 분류, 커뮤니티 예상 10/23). Space Bunny는 스텔스 프리뷰 빌드 — OpenRouter에서 **200조 토큰** 처리.
- **출시 형태**: API·M Plan·MiniMax Code — 코딩·컴퓨터 사용·엔터프라이즈 워크플로 타깃.
- **독립 테스트 주의**: VentureBeat 독립 테스트에서 사실 신뢰성 문제 지적 — 불확실한 상황에서 환각 답변.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 단위 경제의 새 기준선**: 태스크당 $0.22는 "에이전트를 수천 번 돌려도 되는가"의 답을 바꾼다. 10/18 위키의 "AI 부채 붐 균열"(돈줄 조임)과 같은 날 나온 반대편 데이터 — 인프라 비용은 떨어지고 있다. 하네스 설계 시 "비싼 모델 1회" vs "싼 모델 N회+검증"의 트레이드오프가 $0.22 기준으로 재계산됨.
2. **중국 오픈 모델의 추격 속도**: DeepSeek V4.1 Flash (10/17 위키)와 M3.1 Flash가 같은 주에 나란히 — DeepSWE에서 77% vs 73.7%로 엎치락뒤치락. 10/23 오픈 웨이트가 나오면 로컬 에이전트 스택의 선택지가 하나 더 늚. "미국산 오픈웨이트"(Reflection AI, 10/12 위키) 대항마 구도에 중국 진영이 두 모델째.
3. **싸고 빠른 모델의 그림자**: CyberGym 82% + 컴퓨터 사용 타깃 + 10/23 오픈 웨이트 — 오늘 위키의 Cairn 해킹 사건(오픈소스 에이전트 플랫폼으로 100+ 기업 침해)과 같은 날 보도됐다. "에이전트 비용 70%↓"는 공격자의 비용도 70%↓라는 뜻. 모델 릴리스를 볼 때 벤치 점수만큼 dual-use 표면도 함께 기록해야 함.
4. **주장 vs 실측**: 회사는 200+ tps라 했지만 AA 실측은 120 tps — 벤더 수치는 항상 독립 측정과 함께 봐야 한다는 사례. 에이전트 인프라를 고를 때 "광고 스펙"이 아니라 "실측 스펙"으로 비교하는 습관.

## 한계 (명시)

- 벤치 수치(DeepSWE 73.7%, HLE 48%, CyberGym 82%)는 MiniMax 자체 보고 — AA Index 42·속도 120 tps는 제3자 실측. 회사 보고와 독립 측정을 구분 표기.
- "태스크당 $0.22"는 Oossa의 추산, "70%↓"는 회사 주장 — 태스크 정의에 따라 달라짐.
- Reuters 원보는 윈도우 시작 100분 전(10/19 12:24 UTC) — Towards AI (14:32 UTC) 등 인윈도우 보도로 경계 규칙 포함.
- VentureBeat의 사실 신뢰성 지적은 단일 독립 테스트 — 재현 데이터 없음.
