---
title: "Thinking Machines, Inkling 2 Mini 공개 — 노트북에서 도는 오픈웨이트 루프 트랜스포머 (11-20)"
source_url: "https://artificialanalysis.ai/articles/inkling-2-mini"
source_type: "news"
authors: ["Artificial Analysis", "Thinking Machines Lab"]
published: 2026-11-20
fetched: 2026-11-21
tags: [thinking-machines, inkling, open-weight, agents, coding]
status: raw
---

# Thinking Machines, Inkling 2 Mini 공개 — 노트북에서 도는 오픈웨이트 루프 트랜스포머 (11-20)

> Thinking Machines Lab이 11월 20일 Inkling 2 Mini를 Apache 2.0 오픈웨이트로 공개했다. 24개 레이어 중 가운데 12개를 토큰마다 3번 반복해 더 오래 "생각"하는 루프 트랜스포머로, 약 20GB 체크포인트가 32GB Mac이나 단일 Nvidia DGX Spark에서 돈다. 에이전트 코딩 벤치에서 100B 미만 오픈 모델 중 선두를 주장했다.

## 내용

- **구조**: 총 26.4B 파라미터 / 활성 3.4B(토큰당 실효 5.4B) MoE. 가운데 12개 레이어를 토큰당 3회 반복(loop)해 텍스트를 더 생성하지 않고도 추론을 깊게 한다.
- **실행 환경**: 약 20GB 체크포인트, 1M 토큰 컨텍스트, 텍스트+이미지 입력. 32GB Mac 또는 단일 DGX Spark에서 구동.
- **자체 보고 성능**: Artificial Analysis Intelligence Index 20점(Qwen3.8-27B와 동점), DeepSWE v1.1 48.2%, SWE-bench Verified 79.2%, BrowseComp 79.0%, DeepSearchQA 85.3% — 100B 미만 오픈 모델 중 에이전트 코딩 선두 주장.
- **비용·속도**: 태스크당 Qwen3.8-27B 대비 약 6배 저렴, 약 4배 빠름(Intelligence Index 태스크 기준 $0.59 vs $3.53).
- **후속**: 더 큰 Inkling 2 Small은 외부 안전 테스트·레드팀이 끝나는 다음 주까지 비공개 유지.

## 맥락

- 로컬·노트북에서 도는 에이전트 코딩 전용 모델이라는 점에서 Mac 기반 개발·로컬 에이전트 스택과 직결된다
- 오픈 모델 효율 프론티어의 최신 사례: 파라미터를 늘리지 않고 루프(반복 연산)로 추론 깊이를 확보하는 설계
