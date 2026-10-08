---
title: "Microsoft×Nvidia, Surface Laptop Ultra 공개 — '에이전트를 위한 OS', RTX Spark로 로컬 120B+ 모델 구동 (10/7)"
source_url: "https://www.reuters.com/business/microsoft-nvidia-ceos-unveil-new-ai-laptop-san-francisco-event-2026-10-07/"
source_type: "news"
authors: ["reuters"]
published: 2026-10-07
fetched: 2026-10-08
tags: [microsoft, nvidia, surface, windows, agents, on-device, rtx-spark, hybrid-intelligence, agent-security]
status: raw
---

# Microsoft×Nvidia, Surface Laptop Ultra 공개 — '에이전트를 위한 OS', RTX Spark로 로컬 120B+ 모델 구동 (10/7)

> 10/7 샌프란시스코 이벤트에서 Satya Nadella·Jensen Huang이 Surface Laptop Ultra 공개. Nvidia RTX Spark 슈퍼칩(Blackwell RTX GPU 최대 6,144코어 + Grace CPU 최대 20코어) 탑재, 최대 128GB 통합 메모리·1 petaflop로 120B+ 파라미터 모델 로컬 구동. $2,599부터, 10/16 출하. Copilot 'hybrid intelligence'(로컬 컨텍스트·액션·모델)와 에이전트 보안 플랫폼이 Windows 코어 아키텍처로 편입.

## 내용

- 하드웨어: Surface Laptop Ultra ($2,599~, 10/16 출하) + Surface RTX Spark Dev Box ($5,999, 11월 출하). 15인치 PixelSense Ultra, 18mm 미만·4.5lb 미만.
- 성능 주장: 이미지 생성 4.3배·비디오 생성 6.2배 (MacBook Pro M5 Pro 대비, Microsoft 주장). MAI Code 1.1 Flash(137B 코딩 모델) 온디바이스 구동, Meta Muse AI 에이전트가 Windows 네이티브 앱으로 출시 예정.
- Windows 변화: Copilot hybrid intelligence — 로컬 컨텍스트·로컬 액션·로컬 모델 (사용자 허가 기반). Execution Containers GA — Windows·macOS·Linux에 걸친 AI 에이전트 샌드박싱.
- 에이전트 보안: 3원칙 — Containment, Identity, Manageability. 엔드투엔드 에이전트 보안 플랫폼 출시. OpenAI·Anthropic이 이미 Microsoft 보안 도구 위에 구축 중.
- Nadella: "new chapter for Windows" — Agent 365·Microsoft IQ·Copilot을 코어 Windows 아키텍처로 통합, 에이전트가 별도 앱이 아닌 OS 깊숙이 내장되는 미래.
- Huang: "컴퓨터는 혁명되어야 한다", 에이전틱 AI가 소프트웨어 개발의 중심이 될 것.
- Reuters 분석 앵글: Azure 클라우드에서 발생하던 고비용 연산을 고객이 하드웨어 비용을 부담하는 로컬 Windows 기기로 이전하려는 베팅.
- 부수 발표: NVIDIA Nemotron 신모델 10/15, DeepSeek V5 Flash가 ~60GB 메모리에서 로컬 구동 가능, GitHub HydraFusion을 로컬 모델로 확장 (windowsreport 라이브).
- 교차검증: Reuters + Morningstar + techxplore + windowsreport + techaeris — 사양·가격·출하일 일치.

## 맥락

- concepts/agent-residence의 세 번째 벡터 — OS 내장형 에이전트 상주. Underdog(완전 온디바이스, 10/7)·Claude for Workspace(클라우드 앱 내장, 10/7)와 함께 '에이전트가 어디에 사는가' 경쟁의 하드웨어 축.
- patterns/agent-safety-runtime과 직결: Execution Containers GA = 에이전트 보안 런타임의 OS 레벨 구현.
- agent-authority-model 관점: 로컬 액션의 '사용자 허가 기반' 접근 제어가 권한 프레임워크의 실제 제품 구현.