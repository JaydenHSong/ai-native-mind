---
title: "삼성 SPAC — Galaxy AI용 프라이빗 클라우드 (One UI 9.5 코드 발견)"
category: concepts
tags: [samsung, galaxy-ai, spac, private-cloud-compute, privacy, confidential-computing, one-ui, agents]
created: 2026-11-27
updated: 2026-11-27
sources:
  - "raw/articles/2026-11-27-samsung-spac-private-ai-cloud.md"
related:
  - "[[concepts/agent-residence]]"
  - "[[concepts/openai-private-inference-alpha-trials]]"
status: draft
confidence: low
---

# 삼성 SPAC — Galaxy AI용 프라이빗 클라우드 (One UI 9.5 코드 발견)

## 쉽게 읽기

**비유**: 핸드폰이 어려운 질문을 "머리 좋은 친구"(클라우드 서버)에게 물어볼 때, 보통은 "누가 물었는지"까지 다 들킨다. SPAC은 질문을 중간 사람(릴레이)에게 한 번 건네서 "누가" 물었는지는 가리고 "무엇을" 물었는지만 전달하는 방식이다. 편지를 봉투에 넣어 전달하는 사람에게 주는 것과 비슷하다 — 내용은 보여도 보낸 사람은 모른다.

| 용어 | 풀이 |
|------|------|
| **SPAC** | 삼성의 프라이빗 클라우드 AI 프레임워크 이름 — 아직 공식 발표 없음, 코드에서만 발견됨 |
| **프라이빗 클라우드 컴퓨트** | 클라우드 서버에서 계산은 하되, 누가 보냈는지 연결되지 않게 하는 설계 (애플이 2024년 먼저 도입) |
| **어테스테이션 (attestation)** | 폰이 서버의 소프트웨어가 변조되지 않았는지 확인하는 검증 — "믿을 만한 서버인지" 증명서 확인 |
| **릴레이 (relay)** | 요청을 중간에서 전달해 보낸 사람의 정체를 가리는 중계 서버 |

## 한줄 정의

2026-11-26 One UI 9.5 Beta 1(Galaxy S26 Ultra) 코드 분석에서 발견된 삼성의 프라이빗 클라우드 AI 프레임워크 'SPAC' — 애플 Private Cloud Compute와 같은 설계로, Galaxy AI 클라우드 기능을 익명 처리하는 것이 목표. 삼성 미발표, 베타에서 비활성화 상태.

## 핵심 내용

- **발견 위치**: One UI 9.5 Beta 1의 4개 앱 안에 SPAC SDK 존재 — Photo Editor, IntelliVoiceService(음성·언어 서비스), Smart Capture, PhotoRemasterService. 서버 측 게이트웨이 이름은 'Arcane', 토큰·신원·사기 탐지 서비스가 별도로 언급됨.
- **프라이버시 설계(코드 기준)**: (1) 서드파티 릴레이를 거쳐 요청이 전달돼 삼성이 '무엇을' 물었는지는 봐도 '누가' 물었는지는 모르게 함. (2) 폰이 서버 소프트웨어가 변조되지 않았는지 검증(attestation). (3) 서버 동작이 조용히 바꿀 수 없는 공개 기록에 남음. (4) 기기는 익명 일회성 패스로 인증받아 사용자를 드러내지 않음. 일부 검사를 건너뛰는 'unattested' 모드도 있으나 내부 테스트용으로 보임.
- **언급된 모델**: Google Gemma 4, Alibaba Qwen 3.6, Black Forest Labs FLUX.2 klein 4B, 삼성 자체 Gauss. 코드상 참조일 뿐 실제 사용 확인은 안 됨.
- **연결되는 기능**: AI Select, 클라우드 사진 지우기·업스케일, 실시간 통역, Writing Tools, Now Brief, Daily Briefing, Bixby Work 등 Galaxy AI 클라우드 기능 상당수.
- **상태**: 베타에서 비활성화, 사용자용 설정·동의 화면 없음. 공개 인증서 기록상 SPAC 서버 주소가 갱신되고 미국 릴레이가 추가되는 등 백엔드 준비는 진행 중. 11월 27일 업데이트: Android Authority가 Galaxy S26 Ultra에서 SPAC을 AI Select와 함께 제한적으로 동작시키는 데 성공.

## 왜 중요한가 (1인 개발자 관점)

1. **프라이버시 컴퓨트의 수렴**: 같은 주 OpenAI Private Inference 알파([[concepts/openai-private-inference-alpha-trials]])와 함께, 온디바이스 vs 클라우드의 이분법을 '익명 클라우드'라는 세 번째 옵션으로 해소하려는 흐름이 삼성·OpenAI·애플로 수렴 중이다. [[concepts/agent-residence]]의 상주 축에 '익명 클라우드' 행이 추가되는 셈이다.
2. **검증된 레시피의 채택**: 애플 Private Cloud Compute(2024, iOS 18)의 설계를 거의 그대로 따랐다는 평가 — 삼성의 독자 발명이 아니라 검증된 설계의 이식이다. 프라이버시 설계를 직접 발명하기보다, 공개된 검증 방식을 따라가는 것이 업계의 빠른 길이다.
3. **모델 공급망의 힌트**: 코드에 Gemma·Qwen·FLUX.2·Gauss가 함께 언급된다 — 삼성이 Galaxy AI의 클라우드 모델을 한 회사에 묶지 않고 여러 공급처에서 가져올 가능성을 시사한다. 단, 코드상 참조일 뿐 실제 사용은 미확인이다.

## 한계 (명시)

- 삼성 미발표 — 모든 내용은 One UI 9.5 베타 코드 분석(Android Authority 단일 출처)에 기반한 추론이다. 공식 명칭·출시일·적용 범위 모두 미확인.
- 언급된 모델(Gemma 4·Qwen 3.6·FLUX.2 klein 4B·Gauss)은 코드상 참조일 뿐 실제 사용 확인은 안 됨.
- 'unattested' 모드의 존재는 내부 테스트용으로 보이나, 실제 제품에서 검증 우회가 가능한지는 미확인.
- 11월 27일 업데이트의 AI Select 동작 확인도 Android Authority의 제한적 실험이며, 정식 기능이 아니다.

## 관련 개념

- [[concepts/agent-residence]] — 에이전트의 상주 형태, 익명 클라우드는 로컬·클라우드 사이의 세 번째 옵션
- [[concepts/openai-private-inference-alpha-trials]] — 같은 주 OpenAI의 프라이빗 추론 알파, 프라이버시 컴퓨트 수렴

## 참고 소스

- [삼성, Galaxy AI용 프라이빗 클라우드 'SPAC' 준비 중 — One UI 9.5 코드에서 발견 (Android Authority, 11-26)](raw/articles/2026-11-27-samsung-spac-private-ai-cloud.md)
