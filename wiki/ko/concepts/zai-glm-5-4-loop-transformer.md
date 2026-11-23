---
title: "Z.ai GLM-5.4 — Loop Transformer, 750B 레이어 두 번 돌려 2~3T급 지능 주장"
category: concepts
tags: [z-ai, glm, loop-transformer, coding-model, open-models, china]
created: 2026-11-23
updated: 2026-11-23
sources:
  - "raw/articles/2026-11-23-zai-glm-5-4-loop-transformer.md"
related:
  - "[[concepts/thinking-machines-inkling-2-mini]]"
  - "[[concepts/thinking-machines-inkling-2-small]]"
  - "[[concepts/alibaba-qwen4-max]]"
  - "[[concepts/blackwell-fingerprints-chinese-models]]"
  - "[[concepts/moonshot-kimi-k31-pro]]"
status: draft
confidence: medium
---

# Z.ai GLM-5.4 — Loop Transformer, 750B 레이어 두 번 돌려 2~3T급 지능 주장

## 쉽게 읽기

**비유**: 보통 모델을 똑똑하게 만들려면 "뇌를 더 크게" 만든다(파라미터를 늘린다). GLM-5.4는 다른 방법을 썼다. 뇌 크기는 그대로 두고, 같은 부분을 **두 번 돌려서** 더 깊게 생각하게 했다. 마치 같은 문제를 두 번 곱씹어 읽는 것처럼. 회사 주장으로는 이렇게 해서 2~3조 개짜리 모델만큼 똑똑해졌다고 한다. 다만 아직 공식 시험 점수는 없어서, 주장 그대로 믿을 수는 없다.

| 용어 | 풀이 |
|------|------|
| **Loop Transformer (루프 트랜스포머)** | 같은 레이어를 여러 번 반복 실행해 추론을 깊게 만드는 구조. 가중치를 재사용해 파라미터를 늘리지 않는다 |
| **파라미터** | 모델의 "뇌세포 수" 같은 것. 보통 클수록 똑똑하지만, 크기가 전부는 아니다 |
| **MoE** | Mixture of Experts — 문제마다 일부 전문가만 골라 쓰는 구조 |
| **컨텍스트** | 모델이 한 번에 기억하고 처리할 수 있는 글의 길이. 1M 토큰은 책 수백 권 분량 |
| **오픈 웨이트** | 모델 가중치를 공개해 누구나 내려받아 쓸 수 있게 하는 것 |
| **Generalized Coding** | 코드만 짜는 게 아니라 코드로 비디오·게임·3D·CAD까지 만든다는 콘셉트 |

## 한줄 정의

2026-11-23 Z.ai가 출시한 첫 Loop Transformer 플래그십 GLM-5.4 — 약 750B 파라미터 GLM-5 베이스의 28개 레이어를 같은 가중치로 두 번 실행해 파라미터 추가 없이 추론 깊이를 늘리고, 2~3T 파라미터급 모델에 견주는 지능과 1M 토큰 컨텍스트·비전 입력을 주장한다. 공식 벤치마크는 아직 없다.

## 핵심 내용

- **발표**: 11월 23일 04:18 UTC, Z.ai 리드 Zixuan Li가 X에 발표하고 공식 @Zai_org 계정이 리포스트. 별도 블로그 글은 확인되지 않음.
- **아키텍처**: Loop Transformer — GLM-5 베이스(약 750B 규모)의 28개 레이어를 두 번째로 더 깊게 재실행, 가중치 재사용. 파라미터 추가 없이 추론 깊이를 늘리는 방식.
- **주장 성능**: 2T~3T 파라미터 모델에 필적하는 지능, 1M 토큰 컨텍스트, 메인라인 플래그십 최초의 비전 입력(스크린샷·이미지를 통한 비주얼 코딩).
- **제공**: GLM Coding Plan 구독자 전원에게 즉시 제공(Claude Code에서는 `glm-5.4[1m]`, 그 외 `glm-5.4`). ZCode, Z.ai Chat, Trae, Qoder, AutoClaw, WorkBuddy, CatPaw, Qingyan에서도 사용 가능. GLM-5.3 대비 주간 쿼터 50% 증가, 크레딧 배율 인하(입력 4.6/캐시 1.1/출력 16, GLM-5.3은 6.9/1.7/24).
- **속도 주장**: 비피크 시간 최대 200 토큰/초, 피크 부하 시 70~80 토큰/초.
- **포지셔닝**: 'Generalized Coding' — 코드를 기반으로 비디오·게임·3D 셰이더·CAD까지 만든다는 콘셉트. 데모로 뮤직비디오, FreeCAD 6축 로봇 팔, 풀 게임, 인터랙티브 3D 장면 제시.
- **미공개**: GLM-5.4 자체의 공식 벤치마크 점수는 아직 없음(추후 공개 예정). 종량제 API는 안전성 평가 대기 중(가격 미정). 오픈 웨이트는 안전성 강화 후 계획(날짜·라이선스 미정).

## 왜 중요한가 (1인 개발자 관점)

1. **스케일링의 대안 축**: 파라미터를 늘리는 대신 레이어 재사용으로 추론을 강화하는 Loop Transformer는 [[concepts/thinking-machines-inkling-2-mini]]·[[concepts/thinking-machines-inkling-2-small]]과 같은 계열이다. "더 크게" 말고 "더 깊게"라는 두 번째 스케일링 축이 중국 플래그십에서도 확인됐다.
2. **중국 코딩 모델 경쟁의 한복판**: GLM·Kimi·Qwen이 코딩 에이전트 시장에서 정면으로 붙고 있다. GLM-5.4는 가격(크레딧 배율 인하)·쿼터(50% 증가)까지 함께 내세워 실사용자 확보를 노린다.
3. **비전 입력이 코딩 모델의 기본값이 되는 중**: 스크린샷을 보고 코드를 짜는 비주얼 코딩이 플래그십의 표준 기능으로 들어왔다. UI 복제·디자인-투-코드 워크플로에서 체감될 변화다.

## 한계 (명시)

- "2~3T급 지능"은 Z.ai의 주장이며 공식 벤치마크가 아직 없어 검증 불가. 독립 측정·공식 점수가 나올 때까지 주장으로 다룬다.
- 속도(최대 200 토큰/초)도 회사 주장이며 부하 조건이 명시돼 있다(비피크 vs 피크) — 실사용 체감과 다를 수 있다.
- 오픈 웨이트는 날짜·라이선스 모두 미정, 종량제 API는 가격 미정 — "공개 예정"을 "공개됨"으로 혼동하지 말 것.
- 별도 블로그 글 없이 X 발표만으로 출시가 알려진 점 — 세부 스펙의 1차 출처가 소셜 게시물이다.
- confidence는 medium — Z.ai 발표 + TestingCatalog 보도 교차이나, 성능 주장은 미검증.

## 관련 개념

- [[concepts/thinking-machines-inkling-2-mini]] — 같은 Loop Transformer 계열, 32GB Mac에서 도는 오픈웨이트 (2026-11-23)
- [[concepts/thinking-machines-inkling-2-small]] — Inkling 2 대형, 루프 트랜스포머 비교축 (2026-11-23)
- [[concepts/alibaba-qwen4-max]] — 중국 플래그십 경쟁축, 2.4조 MoE (2026-11-23)
- [[concepts/moonshot-kimi-k31-pro]] — 중국 오픈웨이트 경쟁축, Kimi K3.1 Pro (2026-11-23)
- [[concepts/blackwell-fingerprints-chinese-models]] — 중국 프론티어 모델의 GPU·수출통제 맥락 (2026-11-23)

## 참고 소스

- [Z.ai, Loop Transformer GLM-5.4 출시 — 750B 레이어 두 번 돌려 2~3T급 지능 주장, 1M 컨텍스트 (Z.ai·TestingCatalog, 11-23)](raw/articles/2026-11-23-zai-glm-5-4-loop-transformer.md)
