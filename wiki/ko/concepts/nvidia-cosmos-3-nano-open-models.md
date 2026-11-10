---
title: "NVIDIA Cosmos 3 Nano 오픈 웨이트 4종 — 자율주행·로봇용 인터랙티브 월드 시뮬레이션, 16B·상용 라이선스"
category: concepts
tags: [nvidia, cosmos-3, world-model, physical-ai, open-weights]
created: 2026-11-07
updated: 2026-11-07
sources:
  - "raw/articles/2026-11-07-nvidia-cosmos-3-nano-open-models.md"
related:
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[concepts/google-genie-4-native-audio-world-model]]"
  - "[[concepts/mecka-robot-motion-data]]"
  - "[[concepts/nvidia-autonomy-stack]]"
status: draft
confidence: high
---

# NVIDIA Cosmos 3 Nano 오픈 웨이트 4종 — 자율주행·로봇용 인터랙티브 월드 시뮬레이션, 16B·상용 라이선스

## 쉽게 읽기

**비유**: 로봇과 자율주행차가 실제 도로에 나가기 전에 연습할 "가상 세계"를 만드는 모델 4종이 공개됐다. 하나는 날씨를 바꿔가며 주행 영상을 찍어내고, 하나는 핸들을 돌릴 때마다 그에 맞는 영상을 실시간으로 보여주고, 하나는 로봇 팔을 움직이면 그 결과를 영상으로 예측한다. 모두 무료로 쓸 수 있는 가중치로 나왔다 — 단, 돌리려면 워크스테이션급 그래픽카드가 필요하다.

| 용어 | 풀이 |
|------|------|
| **월드 모델** | 세상이 어떻게 움직이는지 배워, 행동에 따른 다음 장면을 예측·생성하는 모델 |
| **오픈 웨이트** | 학습된 가중치를 공개해 누구나 내려받아 쓸 수 있는 모델 |
| **OpenMDW1.1** | 상업·비상업 이용을 허용하는 NVIDIA의 오픈 모델 라이선스 |

## 한줄 정의

2026-11-05 Hugging Face 블로그 — NVIDIA가 Cosmos 3 월드 모델 계열의 오픈 웨이트 체크포인트 4종을 공개했다. 모두 Cosmos 3 Nano를 작업별로 후학습한 것으로, 학습 가능 파라미터 16B씩이며 OpenMDW1.1 라이선스로 상업·비상업 이용이 가능하다. 전일 실행에서 누락된 따라잡기 수집이다.

## 핵심 내용

- **4종 체크포인트**: Cosmos3-Nano-Transfer-Auto(날씨·조명·시간대를 바꿔 다중 시점 주행 데이터를 일괄 생성, 최대 11개 카메라 뷰+어안·RGB와 LiDAR 동시 생성), Cosmos3-Nano-Sim-Auto(주행 제어가 바뀔 때 동기화된 카메라·LiDAR 관측을 스트리밍하는 인과적 증류 버전), Cosmos3-Nano-Sim-Transfer(물리 시뮬레이터 제어+텍스트 프롬프트를 사실적인 RGB 영상으로 변환), Cosmos3-Nano-Sim-Bimanual(로봇·카메라 행동에서 영상을 예측, YAM·AgiBot 양팔 로봇의 인터랙티브 시뮬레이션 지원).
- **라이선스·규모**: 4종 모두 16B 학습 가능 파라미터, OpenMDW1.1(상업·비상업 이용 허용, 약관 준수 조건). 2026-05-31 GTC Taipei/Computex 메인 출시 이후 Cosmos 3 계열의 가장 큰 확장이다. NVIDIA 기술 블로그(11-02, Pranjali Joshi 외)는 자율주행·로봇·스마트 인프라 전반의 physical AI를 대상으로 삼는다고 밝혔다.
- **용도 구분**: Transfer-Auto는 오프라인 합성 데이터 생성용, Sim-Auto는 정책과 연결해 행동의 결과를 롤아웃으로 살피는 폐루프 시뮬레이션용, Sim-Transfer는 시뮬레이션과 실제 분포 사이의 도메인 격차 완화용, Sim-Bimanual은 양팔 조작 과제의 행동-시각 폐루프 예측용이다.
- **주의점**: 오픈 웨이트만으로 특정 과제의 성능이나 배포 적합성이 입증되는 것은 아니다. 한 보도에 따르면 16B Nano 구동에 최소 96GB VRAM이 필요해 워크스테이션급 RTX PRO 6000이나 다중 GPU 구성이 요구된다. NVIDIA는 과업별 평가가 필요하다고 밝혔다.

## 왜 중요한가 (1인 개발자 관점)

1. **Physical AI의 "데이터 공장"이 열렸다**: 로봇·자율주행의 병목은 실제 주행·조작 데이터다. 날씨·조명·시간대를 바꿔가며 합성 데이터를 찍어내는 Transfer-Auto는, 그 병목을 완화하는 인프라다. Genie 4(구글의 월드 모델)가 시뮬레이션이라면, Cosmos 3는 그 시뮬레이션을 "내 센서·내 로봇"에 맞추는 도구다.
2. **오픈 웨이트 + 상용 라이선스의 조합이 넓어진다**: 16B 오픈 웨이트가 상업 이용 가능으로 나왔다는 것은, 작은 팀도 월드 모델을 자기 파이프라인에 넣어볼 수 있다는 뜻이다. 다만 96GB VRAM 요구량은 "내려받아 돌린다"는 말의 현실적 문턱을 보여준다.
3. **시뮬레이션과 현실의 격차를 메우는 방향이다**: Sim-Transfer가 시뮬레이터 제어를 사실적인 영상으로 바꾸는 것은, 시뮬레이션에서 배운 정책이 현실에서도 통하게 만드는 다리다. 이 다리가 튼튼한지가 로봇 정책 학습의 성패를 가른다.

## 한계 (명시)

- 오픈 웨이트 공개이지 성능 검증이 아니다. 특정 과제·센서·로봇에 맞는지는 과업별 평가가 필요하다고 NVIDIA도 밝혔다.
- 96GB VRAM 요구량은 보도 기준이며, 실제 구동 환경은 양자화·최적화에 따라 달라질 수 있다.
- 생성된 시뮬레이션의 충실도(정책 학습·평가에 충분한가)는 아직 측정 과제로 남아 있다.

## 참고 소스

- [NVIDIA Cosmos 3 Nano 오픈 웨이트 원본](raw/articles/2026-11-07-nvidia-cosmos-3-nano-open-models.md)