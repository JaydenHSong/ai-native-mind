---
title: "NVIDIA, Cosmos 3 Nano 오픈 웨이트 4종 공개 — 자율주행·로봇용 인터랙티브 월드 시뮬레이션, 16B·상용 라이선스 (11-05)"
source_url: "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation"
source_type: "news"
authors: ["NVIDIA"]
published: 2026-11-05
fetched: 2026-11-07
tags: [nvidia, cosmos-3, world-model, physical-ai, open-weights]
status: raw
---

# NVIDIA, Cosmos 3 Nano 오픈 웨이트 4종 공개 — 자율주행·로봇용 인터랙티브 월드 시뮬레이션, 16B·상용 라이선스 (11-05)

> NVIDIA가 11-05 Hugging Face 블로그를 통해 Cosmos 3 월드 모델 계열의 오픈 웨이트 체크포인트 4종을 공개했다. 모두 Cosmos 3 Nano를 작업별로 후학습한 것으로, 학습 가능 파라미터 16B씩이며 OpenMDW1.1 라이선스로 상업·비상업 이용이 가능하다. 전일 실행에서 누락된 따라잡기 수집이다.

## 내용

- **4종 체크포인트**: Cosmos3-Nano-Transfer-Auto(날씨·조명·시간대를 바꿔 다중 시점 주행 데이터를 일괄 생성, 최대 11개 카메라 뷰+어안·RGB와 LiDAR 동시 생성), Cosmos3-Nano-Sim-Auto(주행 제어가 바뀔 때 동기화된 카메라·LiDAR 관측을 스트리밍하는 인과적 증류 버전), Cosmos3-Nano-Sim-Transfer(물리 시뮬레이터 제어+텍스트 프롬프트를 사실적인 RGB 영상으로 변환), Cosmos3-Nano-Sim-Bimanual(로봇·카메라 행동에서 영상을 예측, YAM·AgiBot 양팔 로봇의 인터랙티브 시뮬레이션 지원).
- **라이선스·규모**: 4종 모두 16B 학습 가능 파라미터, OpenMDW1.1(상업·비상업 이용 허용, 약관 준수 조건). 2026-05-31 GTC Taipei/Computex 메인 출시 이후 Cosmos 3 계열의 가장 큰 확장이다. NVIDIA 기술 블로그(11-02, Pranjali Joshi 외)는 자율주행·로봇·스마트 인프라 전반의 physical AI를 대상으로 삼는다고 밝혔다.
- **용도 구분**: Transfer-Auto는 오프라인 합성 데이터 생성용, Sim-Auto는 정책과 연결해 행동의 결과를 롤아웃으로 살피는 폐루프 시뮬레이션용, Sim-Transfer는 시뮬레이션과 실제 분포 사이의 도메인 격차 완화용, Sim-Bimanual은 양팔 조작 과제의 행동-시각 폐루프 예측용이다.
- **주의점**: 오픈 웨이트만으로 특정 과제의 성능이나 배포 적합성이 입증되는 것은 아니다. 한 보도에 따르면 16B Nano 구동에 최소 96GB VRAM이 필요해 워크스테이션급 RTX PRO 6000이나 다중 GPU 구성이 요구된다. NVIDIA는 과업별 평가가 필요하다고 밝혔다.

## 맥락

- [[concepts/amd-world-labs-physical-ai]] — AMD의 World Labs $8.2B 인수, physical AI·월드모델 하드웨어 축 (2026-09-30)
- [[concepts/google-genie-4-native-audio-world-model]] — Google Genie 4, 네이티브 오디오를 품은 실시간 월드 모델 (2026-10-28)
- [[concepts/mecka-robot-motion-data]] — Mecka AI $60M Series B, 휴먼 모션 데이터 인프라 (2026-10-10)
- [[concepts/nvidia-autonomy-stack]] — 메르세데스·볼보의 NVIDIA 자율주행 스택 수렴 (2026-10-17)