---
title: "MiniMax M3.1 Flash — 428B MoE 에이전트 모델 출시, 태스크당 ~$0.22… AA 지수 42"
source_url: "https://oossa.com/en/minimax-releases-m3-1-flash-model-at-about-0-22-per-task"
source_type: "news"
authors: ["Oossa", "Reuters", "Wccftech", "ai-tldr.dev", "Towards AI", "LapaasVoice"]
published: 2026-10-19
fetched: 2026-10-20
tags: [minimax, m3-1-flash, agent-model, moe, pricing, benchmark, open-weights, dual-use]
status: raw
---

# MiniMax M3.1 Flash — 428B MoE 에이전트 모델 출시, 태스크당 ~$0.22… AA 지수 42

> MiniMax가 10/19 에이전트용 고속 모델 M3.1 Flash를 출시 — 428B 파라미터 중 23B만 활성화하는 MoE. 입력 $0.15/출력 $0.60 per 1M 토큰, 태스크당 비용 약 $0.22 (회사 주장 에이전트 작업 비용 70%↓). AA Intelligence Index 42(M3 대비 +13), DeepSWE v1.1 73.7%, HLE 48%, CyberGym ~82%. 오픈 웨이트는 10/23 예정. (Reuters·Oossa·Wccftech·Towards AI·ai-tldr.dev 교차)

## 내용

- **스펙**: 428B total / 23B active MoE (공격적 추론 희소성). 1M 토큰 컨텍스트, 텍스트+이미지+비디오 입력. 항상 켜진 추론(always-on reasoning) + 사고 노력 선택. 희소 어텐션 업그레이드.
- **가격**: 입력 $0.15 / 출력 $0.60 per 1M 토큰 (캐시 입력 $0.015). 회사 주장 **에이전트 작업 비용 70%↓**. Oossa 추산 **태스크당 약 $0.22**.
- **벤치**: AA Intelligence Index 42 (M3 대비 +13점). DeepSWE v1.1 73.7% (DeepSeek V4.1 Flash 77%에는 뒤짐). HLE 48% (DeepSeek V4.1 Flash 43%, GLM-5.3-Flash 상회). AA-Omniscience 56%. OSWorld V2 61.7, BankerToolBench 76.2, **CyberGym ~82%** (사이버보안 타깃 — dual-use 주의).
- **속도**: 회사 주장 3배 빠른 추론 — 피크 >200 tok/s, 중앙값 >170 tok/s. AA 실측은 120 tps, TTFT 1.08초 (주장과 실측의 괴리).
- **오픈 웨이트**: "곧 공개 예정" (Artificial Analysis는 그때까지 proprietary로 분류, 커뮤니티 예상 10/23). Space Bunny는 M3.1 Flash의 스텔스 프리뷰 빌드 — OpenRouter에서 **200조 토큰** 처리.
- **출시 형태**: API·M Plan·MiniMax Code — 코딩·컴퓨터 사용·엔터프라이즈 워크플로 타깃. HTTP/Anthropic/OpenAI SDK 지원.
- **독립 테스트 주의**: VentureBeat 독립 테스트에서 사실 신뢰성 문제 지적 — 불확실한 상황에서 환각 답변.

## 윈도우 경계

- Reuters 원보가 10/19 12:24 UTC — 수집 윈도우(14:00 UTC)보다 약 100분 앞섬. Towards AI (14:32 UTC)·groundtruth.day·digitechbytes의 인윈도우 보도가 있어 경계 규칙으로 포함.

## 맥락

- [[concepts/llm-evaluation]] — DeepSWE·AA-Omniscience·HLE·OSWorld·CyberGym의 에이전트 벤치 5종 스코어카드 추가 후보. 회사 보고 수치 vs AA 실측(120 tps) 괴리는 "주장/실측" 이중 표기 사례.
- [[comparisons/frontier-lab-economics]] — 태스크당 $0.22의 단위 경제 — 에이전트 대량 실행의 비용 기준선. 10/18 "AI 부채 붐 균열" 스토리의 반대편(비용 하락) 데이터.
- [[concepts/reflection-open-weight]] — 10/23 오픈 웨이트 — 중국 오픈 모델(MiniMax·DeepSeek·Qwen·GLM)의 프론티어 추격 구도 보강. CyberGym 82%의 dual-use 측면은 [[concepts/agent-supply-chain-security]]와 연결.
