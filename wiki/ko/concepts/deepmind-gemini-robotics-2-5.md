---
title: "DeepMind, Gemini Robotics 2.5 공개 — 메르세데스 라인에서 Apollo 2 키팅 96% (11-10)"
category: concepts
tags: [deepmind, gemini-robotics, vla, humanoid, apptronik, mercedes, asimov]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-deepmind-gemini-robotics-2-5.md"
related:
  - "[[concepts/nvidia-cosmos-3-nano-open-models]]"
  - "[[concepts/robojepa-robot-scaling-laws]]"
  - "[[concepts/gemini-4-argon]]"
status: draft
confidence: medium
---

# DeepMind, Gemini Robotics 2.5 공개 — 메르세데스 라인에서 Apollo 2 키팅 96% (11-10)

## 쉽게 읽기

**비유**: 지금까지 로봇은 연구실이라는 '연습장'에서 물건을 집는 연습을 했다. 이제 그 로봇이 진짜 자동차 공장의 라인에 서서, 흘러가는 차마다 다른 부품을 골라 담는 일을 했다. 성공률이 96%라는데, 몇 번을 해봤는지는 안 알려 줬다. 시험을 몇 번 봤는지 모르면 96점이 얼마나 대단한지 알기 어렵다.

| 용어 | 풀이 |
|------|------|
| **VLA** | vision-language-action — 카메라 이미지와 지시를 받아 로봇 동작을 내는 모델 |
| **키팅(kitting)** | 벌크 빈에서 부품을 골라 차량별 순서대로 트레이에 담는 자동차 라인 작업 |
| **ASIMOV-Jailbreak** | 로봇 AI를 속여 안전하지 않은 행동을 시킬 수 있는지 재는 오픈 벤치마크 |
| **Apollo 2** | Apptronik의 휴머노이드 로봇 — 5지 SharpaWave 손, 22 자유도 |

## 한줄 정의

2026-11-10 — Google DeepMind가 Gemini Robotics 2.5를 공개했다. 카메라 이미지와 지시를 받아 로봇 동작을 내는 VLA 모델로, 지금까지 가장 유능한 버전이다. Apptronik의 Apollo 2 휴머노이드가 메르세데스-벤츠 실제 생산 라인에서 자동차 부품 키팅을 96% 성공률로 수행했다고 한다. ASIMOV-Jailbreak라는 오픈 로봇 안전 벤치마크도 함께 나왔다.

## 핵심 내용

- **모델**: Gemini Robotics 2.5는 VLA 모델로, 로봇 몸체를 가리지 않고 일반화되도록 학습됐다. Apptronik Apollo 2(5지 SharpaWave 손, 22 자유도)와 Franka Duo(2지 그리퍼)에서 동작한다. 200개 이상 과제에서 이전 베이스라인 대비 성공률 30~100% 향상, 과제 완료 20~30% 빨라졌다고 DeepMind는 밝혔다.
- **메르세데스 파일럿**: 헝가리 케치케메트·독일 진델핑겐의 실제 생산 라인에서 Apollo 2가 벌크 빈에서 자동차 부품을 골라 차량별 순서대로 트레이에 담는 키팅을 수행, 96% 성공률. Gemini Robotics ER 모델이 워크플로를 추적하고 2.5가 손·팔을 제어했다. DeepMind 스스로 proof of concept이라 부른다.
- **수치 해석 주의**: 96%의 분모(시도 횟수)·성공 정의·인간 개입 횟수가 공개되지 않았다. 25회 중 24회와 1,000회 중 960회는 둘 다 96%지만 신뢰구간이 크게 다르다. 메르세데스 측이 96%를 확인하는 별도 성명은 없다. 파일럿에서 양산 전환 일정도 미정이다.
- **ASIMOV-Jailbreak**: 수백 개 프롬프트가 수십 개 장면에서 안전하지 않은 요청을 위장해 로봇 AI를 속일 수 있는지 재는 오픈소스 벤치마크(Hugging Face 공개). 단 99.5% 저항 점수는 Gemini Robotics 2.5가 아니라 범용 물리 추론 모델 Gemini 4 Argon의 수치(이전 ER 2의 82%에서 상승)이며, 2.5 자체의 점수는 발표에 없다.
- **접근**: 로봇 파트너(Agile·Apptronik·Boston Dynamics 등 100+ 신뢰 테스터)에만 롤아웃 중이며, 공개 API·가격·GA 일정은 없다. Gemini 4 Argon이 시뮬레이션을 통해 2.5 개발을 가속했다고 DeepMind는 밝혔다.

## 왜 중요한가 (1인 개발자 관점)

1. **휴머노이드가 연구실 데모를 넘어 실제 생산 라인에 섰다**: 단일 작업·두 개 공장·파트너 감독 하의 파일럿이지만, '할 수 있는가'의 증명이 '어디까지 할 수 있는가'로 넘어가는 지점이다. 물리 AI의 상용화 속도를 가늠하는 잣대가 된다.
2. **물리 AI의 다음 관문은 '속지 않고 안전한가'다**: 안전 벤치마크를 모델과 함께 내놨다는 점이 중요하다. EU 기계규정(Regulation (EU) 2023/1230)이 2027-01-20부터 적용되면, 로봇 AI의 안전 근거가 규제 요건이 된다.
3. **수치의 분모를 묻는 습관이 필요하다**: 96%라는 숫자만으로 양산 가능성을 판단하면 안 된다. 시도 횟수·개입 횟수·실패 정의가 없는 벤치는 데모 통계와 생산 통계 사이 어딘가에 있다.

## 한계 (명시)

- 96% 성공률의 분모·성공 정의·인간 개입 횟수가 미공개이며, 메르세데스 측 확인 성명도 없다. 독립 검증이 없다.
- 99.5% 로봇 탈옥 저항 점수는 Gemini 4 Argon의 수치로, Gemini Robotics 2.5 자체의 ASIMOV-Jailbreak 점수는 발표에 없다.
- 공개 API·가격·GA 일정이 없어, 파트너가 아닌 개발자는 오늘 당장 쓸 수 없다.

## 관련 개념

- [[concepts/nvidia-cosmos-3-nano-open-models]] — NVIDIA Cosmos 3 Nano 오픈 웨이트 4종, 자율주행·로봇용 월드 시뮬레이션 (2026-11-07)
- [[concepts/amd-world-labs-physical-ai]] — AMD의 World Labs $8.2B 인수, physical AI·월드모델 하드웨어 축 (2026-09-30)
- [[concepts/robojepa-robot-scaling-laws]] — Meta RoboJEPA 8B, 로봇 월드모델 스케일링 법칙 (2026-10-09)
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon, 로봇 안전 점수 99.5%의 주인공 (2026-10-01)
- [[concepts/mecka-robot-motion-data]] — Mecka AI $60M Series B, 휴먼 모션 데이터 인프라 (2026-10-10)

## 참고 소스

- [DeepMind Gemini Robotics 2.5 공개 원본](raw/articles/2026-11-11-deepmind-gemini-robotics-2-5.md)