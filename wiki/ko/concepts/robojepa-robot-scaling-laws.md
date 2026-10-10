---
title: "RoboJEPA 스케일링 법칙 — 로봇 월드모델의 예측 가능성"
category: concepts
tags: [meta, fair, robojepa, world-model, robotics, scaling-laws, open-source, embodiment, data-bottleneck]
created: 2026-10-09
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-09-meta-robojepa-8b-scaling-laws.md"
  - "raw/articles/2026-10-10-mecka-ai-60m-series-b.md"
related:
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/mecka-robot-motion-data]]"
status: draft
confidence: medium
---

# RoboJEPA 스케일링 법칙 — 로봇 월드모델의 예측 가능성

## 쉽게 읽기

**비유**: LLM은 "크게 만들수록 똑똑해진다"는 법칙(스케일링 법칙)이 있다. Meta가 로봇에게도 같은 법칙이 통한다는 걸 처음으로 증명했다. 로봇이 세상을 "상상"하는 오차가 연산량에 따라 정확히 예측 가능한 곡선을 그린다 — 즉, 비싼 실로봇 실험 없이도 "이 정도 연산이면 이만큼 잘한다"를 미리 알 수 있게 된 것이다.

## 한줄 정의

Meta FAIR의 로봇 월드모델 RoboJEPA 8B가 수립한 다중 실시체 로봇 월드모델의 스케일링 법칙 — 상상(imagination) 오차가 2차 멱법칙을 따르며, 하류 로봇 계획 성능이 연산량에 따라 예측 가능하게 향상됨 (2026-10-08 공개).

## 핵심 내용

- 모델: RoboJEPA 8B — 12개 로봇 실시체(플랫폼), 23개 조작 데이터셋, 15,022시간 비디오로 학습. 현존 최대 JEPA(예측) 모델.
- 법칙: imagination error가 2차 멱법칙 L(C) = E + A·C^(α − γ ln C)를 따름. 22M~2B 파라미터로 피팅한 곡선이 4B·8B 홀드아웃 런에 정확히 외삽됨 (DROID 홀드아웃 외삽 오차 0.6×10⁻³). 실제 로봇 데이터로 학습한 다중 실시체 로봇 월드모델의 스케일링 법칙 최초 수립을 자평.
- 능력 임계값: 3D 리칭 ~10^20 FLOPs, 장애물 회피 ~10^21, 미세 물체 조작 ~10^22에서 출현 — 연산량 구간별 능력 발현 지도.
- 대리지표: imagination error가 실제 로봇 평가의 신뢰 가능한 대리(proxy) 지표 — 비싼 실로봇 평가 없이 모델 품질 추정 가능. 평가 비용의 구조적 절감.
- 공개: 8B 체크포인트 전량 + 학습·로봇 배포 코드를 오픈소스 공개.

## 왜 중요한가

- LLM 스케일링 법칙(Kaplan·Chinchilla)의 로봇 실시체 버전 — "예측 가능성"이 로봇 학습에도 성립한다는 선언. 로봇 연구의 "크게 만들면 된다"는 확신의 근거.
- [[concepts/amd-world-labs-physical-ai]] (AMD World Labs $8.2B 인수)와 연결: physical AI·월드모델 축에 Meta의 오픈소스 월드모델이 합류 — 하드웨어(AMD/Nvidia) vs 오픈 모델(Meta)의 양극 구도.
- 평가 관점: 실로봇 평가의 대리지표 확보는 [[concepts/llm-evaluation]]의 로봇 버전 — "측정 가능성"이 연구 속도를 결정.

## 2026-10-10 보강 — 스케일링 법칙의 병목 이동: 연산 다음은 데이터 (Mecka $60M)

RoboJEPA가 "연산을 늘리면 성능이 예측 가능하게 오른다"를 증명하자, 다음 병목은 연산이 아니라 **데이터**가 됐다 — 그 병목에 베팅하는 인프라 레이어의 자본 조달:

- Mecka AI, 10/7 Sequoia 주도 **$60M Series B** (밸류 $5억, TechCrunch). NVIDIA·Qualcomm Ventures·Samsung·M12 참여.
- 사업: 바디 센서 착용자의 일상 동작을 기록해 휴먼 모션 데이터 판매 — "Motion, contact, force and geometry aren't on the internet." 웹 스크래핑으로 얻을 수 없는 물리 상호작용 데이터.
- EgoVerse: 1,362시간·80,000 에피소드·2,087명. 회사 주장 연환산 매출 $1억 돌파(6월), 연말 $3억 목표 (미검증).
- 경쟁: XDOF(Series B $12억 밸류 협상 중), Micro1, Scale AI·Surge·Mercor의 로봇 확장 — 로봇 훈련 데이터가 AI 인프라 최고 성장 세그먼트 중 하나.
- 이 페이지의 법칙으로 읽으면: 법칙의 경제적 귀결은 "데이터 공급망의 산업화". RoboJEPA의 15,022시간 비디오가 연구용이라면, Mecka의 EgoVerse는 상업용 — 법칙이 성립할수록 데이터의 한계효용이 올라간다.
- 상세: [[concepts/mecka-robot-motion-data]]

## 관련 개념

- [[concepts/amd-world-labs-physical-ai]] — physical AI 하드웨어 축, Meta 오픈 월드모델과 양극
- [[concepts/llm-evaluation]] — 평가 방법론, imagination error를 대리지표로 쓰는 발상
- [[concepts/mecka-robot-motion-data]] — 데이터 병목의 인프라 베팅 ($60M Series B)

## 참고 소스

- [Meta FAIR, 로봇 월드모델 'RoboJEPA 8B' + 다중 실시체 스케일링 법칙 공개 (aiweekly.co, 10/8)](raw/articles/2026-10-09-meta-robojepa-8b-scaling-laws.md)
- [Mecka AI, Sequoia 주도 $60M 시리즈B — 로봇 훈련용 휴먼 모션 데이터 (TechCrunch 10/7·FT 10/10)](raw/articles/2026-10-10-mecka-ai-60m-series-b.md)