---
title: "Meta FAIR, 로봇 월드모델 'RoboJEPA 8B' + 다중 실시체 스케일링 법칙 공개 (10/8)"
source_url: "https://aiweekly.co/alerts/meta-fair-ships-8b-robojepa-with-multi-embodiment-scaling-laws"
source_type: "news"
authors: ["aiweekly.co"]
published: 2026-10-08
fetched: 2026-10-09
tags: [meta, fair, robojepa, world-model, robotics, scaling-laws, open-source, embodiment]
status: raw
---

# Meta FAIR, 로봇 월드모델 'RoboJEPA 8B' + 다중 실시체 스케일링 법칙 공개 (10/8)

> Meta FAIR가 로봇 월드모델 RoboJEPA 8B를 공개. 12개 실시체(로봇 플랫폼)·23개 조작 데이터셋·15,022시간의 비디오로 학습한 현존 최대 JEPA 예측 모델. 상상(imagination) 오차가 2차 멱법칙을 따른다는 스케일링 법칙을 실제 로봇 데이터로 처음 수립했고, 8B 체크포인트 전량을 학습·배포 코드와 함께 오픈소스 공개.

## 내용

- 규모: 8B 파라미터, 12개 로봇 실시체, 23개 조작 데이터셋, 15,022시간 비디오 학습. 현존 최대 JEPA(예측) 모델.
- 스케일링 법칙: imagination error가 2차 멱법칙 L(C) = E + A·C^(α − γ ln C)를 따름. 22M~2B 파라미터로 피팅한 곡선이 4B·8B 홀드아웃 런에 정확히 외삽 (DROID 홀드아웃 외삽 오차 0.6×10⁻³). 실제 로봇 데이터로 학습한 다중 실시체 로봇 월드모델의 스케일링 법칙 최초 수립을 자평.
- 능력 임계값: 3D 리칭 ~10^20 FLOPs, 장애물 회피 ~10^21, 미세 물체 조작 ~10^22에서 출현. 하류 로봇 계획 성능이 연산량에 따라 예측 가능하게 향상.
- 대리지표: imagination error가 실제 로봇 평가의 신뢰 가능한 대리(proxy) 지표라고 보고 — 비싼 실로봇 평가 없이 모델 품질 추정 가능.
- 공개: 8B 체크포인트 전량 + 학습·로봇 배포 코드를 오픈소스 공개.

## 맥락

- concepts/amd-world-labs-physical-ai (AMD World Labs $8.2B 인수, 9/30 수집)와 연결: physical AI·월드모델 축에 Meta의 오픈소스 월드모델이 합류 — 하드웨어(AMD/Nvidia) vs 오픈 모델(Meta)의 양극.
- LLM 스케일링 법칙(Kaplan·Chinchilla)의 로봇 실시체 버전 — '예측 가능성'이 로봇 학습에도 성립한다는 선언.
- 교차검증: aiweekly.co alert + ainews.malone.gr(10/8 다이제스트) — 규모·법칙·공개 범위 일치.
