---
title: "Thinking Machines Inkling 2 Mini — 노트북에서 도는 오픈웨이트 루프 트랜스포머 (11-20)"
category: concepts
tags: [thinking-machines, inkling, open-weight, agents, coding]
created: 2026-11-21
updated: 2026-11-21
sources:
  - "raw/articles/2026-11-21-thinking-machines-inkling-2-mini.md"
related:
  - "[[concepts/thinking-machines-inkling-2-small]]"
  - "[[concepts/nace-drex-max-v1-open-weights]]"
status: draft
confidence: medium
---

# Thinking Machines Inkling 2 Mini — 노트북에서 도는 오픈웨이트 루프 트랜스포머 (11-20)

## 쉽게 읽기

**비유**: 답을 더 길게 쓰는 대신, 같은 문제를 머릿속에서 세 번 되씹어 더 깊이 생각하는 작은 AI 모델이다. 크기는 노트북에 들어갈 만큼 작지만, 코딩 에이전트 일에서는 덩치 큰 오픈 모델들과 어깨를 나란히 한다고 한다. 가중치가 무료로 공개돼 내 컴퓨터에서 바로 돌릴 수 있다.

| 용어 | 풀이 |
|------|------|
| **오픈웨이트** | 모델의 가중치(학습된 숫자들)가 공개돼 누구나 내려받아 쓸 수 있는 형태 |
| **MoE** | Mixture-of-Experts — 토큰마다 일부 전문가(파라미터)만 활성화하는 구조 |
| **루프 트랜스포머** | 같은 레이어를 여러 번 반복해 텍스트를 더 늘리지 않고도 추론을 깊게 하는 설계 |
| **Apache 2.0** | 상업 이용까지 허용하는 관대한 오픈소스 라이선스 |
| **컨텍스트** | 모델이 한 번에 기억하고 참고할 수 있는 글의 양 — 1M 토큰은 책 수백 권 분량 |

## 한줄 정의

Thinking Machines Lab이 2026년 11월 20일 Inkling 2 Mini를 Apache 2.0 오픈웨이트로 공개했다. 24개 레이어 중 가운데 12개를 토큰마다 3번 반복해 더 오래 "생각"하는 루프 트랜스포머로, 약 20GB 체크포인트가 32GB Mac이나 단일 Nvidia DGX Spark에서 돈다. 에이전트 코딩 벤치에서 100B 미만 오픈 모델 중 선두를 주장했다.

## 핵심 내용

- **구조**: 총 26.4B 파라미터 / 활성 3.4B(토큰당 실효 5.4B) MoE. 가운데 12개 레이어를 토큰당 3회 반복(loop)해 텍스트를 더 생성하지 않고도 추론을 깊게 한다.
- **실행 환경**: 약 20GB 체크포인트, 1M 토큰 컨텍스트, 텍스트+이미지 입력. 32GB Mac 또는 단일 DGX Spark에서 구동.
- **자체 보고 성능**: Artificial Analysis Intelligence Index 20점(Qwen3.8-27B와 동점), DeepSWE v1.1 48.2%, SWE-bench Verified 79.2%, BrowseComp 79.0%, DeepSearchQA 85.3% — 100B 미만 오픈 모델 중 에이전트 코딩 선두 주장.
- **비용·속도**: 태스크당 Qwen3.8-27B 대비 약 6배 저렴, 약 4배 빠름(Intelligence Index 태스크 기준 $0.59 vs $3.53).
- **후속**: 더 큰 Inkling 2 Small은 외부 안전 테스트·레드팀이 끝나는 다음 주까지 비공개 유지([[concepts/thinking-machines-inkling-2-small]] 참조).

## 왜 중요한가 (1인 개발자 관점)

1. **로컬 에이전트 코딩이 노트북으로 내려왔다**: 32GB Mac에서 도는 모델이 SWE-bench Verified 79.2%를 주장한다. 클라우드에 코드를 보내지 않고 내 컴퓨터에서 에이전트 코딩을 돌릴 수 있다는 뜻이다 — Mac 기반 개발·로컬 에이전트 스택과 직결된다.
2. **"더 크게"가 아니라 "더 반복해서"**: 파라미터를 늘리지 않고 루프(반복 연산)로 추론 깊이를 확보하는 설계다. 오픈 모델 효율 프론티어의 최신 사례 — 크기가 아니라 구조로 승부하는 방향이다.
3. **가격이 곧 채택이다**: 태스크당 $0.59 vs $3.53 — 6배 저렴하고 4배 빠르다는 주장이 맞다면, 같은 일을 하는 에이전트의 러닝코스트가 크게 달라진다. 다만 수치는 회사 측·Artificial Analysis 기준이라 독립 재현이 필요하다.

## 한계 (명시)

- 성능·비용 수치는 Thinking Machines Lab과 Artificial Analysis의 자체 보고 기준이며 독립 재현이 아직 없다.
- Inkling 2 Small의 가중치 공개는 "다음 주"라는 조건부 일정으로, 안전 테스트 완료 여부에 따라 연기될 수 있다.
- confidence는 medium — AA 측정 교차이나 벤치마크는 자체 보고 성격이 강하다.

## 관련 개념

- [[concepts/thinking-machines-inkling-2-small]] — 같은 Inkling 2세대의 큰 형, 594B MoE·AA 지수 31점·가중치는 다음 주 공개 예정 (2026-11-06)
- [[concepts/nace-drex-max-v1-open-weights]] — 24GB Mac에서 도는 오픈웨이트 결정 모델, 로컬 실행의 또 다른 사례 (2026-11-01)

## 참고 소스

- [Thinking Machines, Inkling 2 Mini 공개 — 노트북에서 도는 오픈웨이트 루프 트랜스포머 (Artificial Analysis·Thinking Machines Lab, 11-20)](raw/articles/2026-11-21-thinking-machines-inkling-2-mini.md)
