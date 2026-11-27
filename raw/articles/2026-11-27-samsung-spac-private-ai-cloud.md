---
title: "삼성, Galaxy AI용 프라이빗 클라우드 'SPAC' 준비 중 — One UI 9.5 코드에서 발견 (11-26)"
source_url: "https://mobile.androidauthority.com/samsung-one-ui-9-5-spac-private-cloud-galaxy-ai-apk-teardown-3739743/"
source_type: "news"
authors: ["android-authority"]
published: 2026-11-26
fetched: 2026-11-27
tags: [samsung, galaxy-ai, private-cloud-compute, privacy, confidential-computing, one-ui, spac, agents]
status: raw
---

# 삼성, Galaxy AI용 프라이빗 클라우드 'SPAC' 준비 중 — One UI 9.5 코드에서 발견 (11-26)

> One UI 9.5 Beta 1(Galaxy S26 Ultra) 코드 분석에서 삼성의 프라이빗 클라우드 AI 프레임워크 'SPAC' 흔적이 발견됐다. 애플 Private Cloud Compute와 같은 설계: 요청은 서버에서 처리하되 누가 보냈는지 연결되지 않게 한다. 삼성은 아직 공식 발표하지 않았고 기능은 꺼진 상태다. Android Authority 원보도 11월 26일, 11월 27일 업데이트로 AI Select에서 SPAC이 실제로 동작하는 것을 확인했다.

## 내용

- **발견 위치**: One UI 9.5 Beta 1의 4개 앱 안에 SPAC SDK 존재 — Photo Editor, IntelliVoiceService(음성·언어 서비스), Smart Capture, PhotoRemasterService. 서버 측 게이트웨이 이름은 'Arcane', 토큰·신원·사기 탐지 서비스가 별도로 언급됨.
- **프라이버시 설계(코드 기준)**: (1) 서드파티 릴레이를 거쳐 요청이 전달돼 삼성이 '무엇을' 물었는지는 봐도 '누가' 물었는지는 모르게 함. (2) 폰이 서버 소프트웨어가 변조되지 않았는지 검증(attestation). (3) 서버 동작이 조용히 바꿀 수 없는 공개 기록에 남음. (4) 기기는 익명 일회성 패스로 인증받아 사용자를 드러내지 않음. 일부 검사를 건너뛰는 'unattested' 모드도 있으나 내부 테스트용으로 보임.
- **언급된 모델**: Google Gemma 4, Alibaba Qwen 3.6, Black Forest Labs FLUX.2 klein 4B, 삼성 자체 Gauss. 코드상 참조일 뿐 실제 사용 확인은 안 됨.
- **연결되는 기능**: AI Select, 클라우드 사진 지우기·업스케일, 실시간 통역, Writing Tools, Now Brief, Daily Briefing, Bixby Work 등 Galaxy AI 클라우드 기능 상당수.
- **상태**: 베타에서 비활성화, 사용자용 설정·동의 화면 없음. 공개 인증서 기록상 SPAC 서버 주소가 갱신되고 미국 릴레이가 추가되는 등 백엔드 준비는 진행 중. 11월 27일 업데이트: Android Authority가 Galaxy S26 Ultra에서 SPAC을 AI Select와 함께 제한적으로 동작시키는 데 성공.

## 맥락

- 애플 Private Cloud Compute(2024, iOS 18)의 설계를 거의 그대로 따랐다는 평가 — 삼성의 독자 발명이 아니라 검증된 레시피 채택
- 같은 주 OpenAI 프라이빗 추론 알파 테스트와 함께 '프라이버시 컴퓨트' 수렴: 온디바이스 vs 클라우드 선택을 '익명 클라우드'로 해소하려는 흐름
- 위키의 에이전트 상주(agent-residence)·프라이버시 컴퓨트 페이지와 연결