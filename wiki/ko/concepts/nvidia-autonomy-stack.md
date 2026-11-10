---
title: "NVIDIA 자율주행 스택 — Hyperion·Alpamayo·Halos로 수렴하는 두 OEM"
category: concepts
tags: [nvidia, mercedes-benz, volvo, autonomous-driving, physical-ai, hyperion, alpamayo, halos]
created: 2026-10-17
updated: 2026-10-17
sources:
  - "raw/articles/2026-10-17-nvidia-mercedes-volvo-autonomy.md"
related:
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: high
---

# NVIDIA 자율주행 스택 — Hyperion·Alpamayo·Halos로 수렴하는 두 OEM

## 쉽게 읽기

**비유**: 스마트폰이 "칩은 퀄컴, OS는 안드로이드"로 표준화됐듯, 자동차도 "차체는 메르세데스·볼보, 두뇌는 NVIDIA"로 표준화되는 중이다. 두 회사가 하루 간격으로 같은 두뇌 스택을 채택했다.

| 용어 | 풀이 |
|------|------|
| **Hyperion** | 차량 내 컴퓨트 + 센서 스택 |
| **Alpamayo** | AI 리즈닝(reasoning) 기반 풀스택 자율주행 소프트웨어 — Alpamayo 2는 2026-08 오픈된 리즈닝 주행 모델 |
| **Halos** | 병렬 안전 스택 |
| **Eyes-off / mind-off** | 운전자가 눈을 떼고 생각도 다른 데 두는 수준의 자동화 (L3~L4 지향) |

## 한줄 정의

메르세데스-벤츠와 볼보 자동차가 하루 간격으로 NVIDIA의 자율주행 3층 스택(Hyperion·Alpamayo·Halos) 채택 확대를 발표한 사건 — **physical AI 플랫폼의 OEM 수렴**이 수치로가 아니라 계약으로 드러난 첫 대형 사례.

## 핵심 내용

- **메르세데스-벤츠** (2026-10-16, NVIDIA 뉴스룸+메르세데스 보도자료): 파트너십 확대. MB.OS에 Hyperion 통합. 목표: 도심 point-to-point 어시스턴스, 자동 주차, 능동 안전, 향후 SAE L4 '로보리무진'.
- **발언**: 메르세데스 CTO Jörg Burzer — 'NVIDIA is our most important strategic partner in automated driving'.
- **볼보 자동차**: 2017년 이래 협력 확대 (별도 발표). 차세대 모델 최초 도입, eyes-off/mind-off 목표. CEO Håkan Samuelsson.
- **메르세데스의 NVIDIA 활용 확장**: 시뮬레이션 + MO360 생산 시스템까지.
- **Alpamayo 2**: 오픈 리즈닝 주행 모델, 2026-08 오픈.
- **미공개**: 출시 날짜·차량·재무 조건 — 발표의 범위.

## 왜 중요한가 (1인 개발자 관점)

1. **Physical AI의 플랫폼 집중**: AMD($8.2B World Labs 인수, [[concepts/amd-world-labs-physical-ai]])와 NVIDIA의 양 축 — "월드모델 vs 주행 스택"의 진영이 OEM 계약으로 가시화.
2. **리즈닝 주행 모델 = 에이전트 패러다임의 이식**: Alpamayo는 "판단→행동"의 에이전트 구조를 주행에 적용 — 주행이 하네스 문제로 읽힘.
3. **벤더 록인의 질문**: 두 글로벌 OEM이 같은 스택으로 수렴 → "차는 하드웨어, 스택은 NVIDIA"의 수직 분리. 칩([[concepts/microsoft-maia-300]])에서 스택으로 — 가격 결정력의 축이 한 단계 위로.

## 한계 (명시)

- 출시 날짜·차량·재무 조건 미공개 — 발표의 선언적 성격.
- tbreak·europesays 2차 보도 — NVIDIA 뉴스룸 1차 확인 추가 필요.
- Alpamayo 2의 실제 성능·안전 기록은 미공개.

## 관련 개념

- [[concepts/amd-world-labs-physical-ai]] — physical AI의 다른 축: AMD의 월드모델 베팅과 NVIDIA의 주행 스택.
- [[comparisons/frontier-lab-economics]] — "하드웨어 수직 통합" 3단계의 physical AI판: 칩을 넘어 스택까지.
- [[concepts/nvidia-reflection-acquisition-talks]] — NVIDIA의 스택 상향 확장(오픈웨이트 랩 확보 협상)과 같은 벡터.

## 참고 소스

- [메르세데스-벤츠와 볼보, NVIDIA 자율주행 스택으로 차세대 시스템 공동 개발 (tbreak·europesays·NVIDIA, 10/16)](raw/articles/2026-10-17-nvidia-mercedes-volvo-autonomy.md)
