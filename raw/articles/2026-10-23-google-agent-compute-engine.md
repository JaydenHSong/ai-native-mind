---
title: "Google Cloud Agent Compute Engine — 에이전트 세션마다 하드웨어 격리 microVM"
source_url: "https://www.marktechpost.com/2026/10/22/google-cloud-agent-compute-engine-microvm-ai-agents/"
source_type: "news"
authors: ["MarkTechPost", "TechTimes", "TokenPost", "AIDailyPost"]
published: 2026-10-22
fetched: 2026-10-23
tags: [google-cloud, agent-compute-engine, microvm, agent-sandbox, credential-isolation, agent-substrate, agntcon]
status: raw
---

# Google Cloud Agent Compute Engine — 에이전트 세션마다 하드웨어 격리 microVM

> Google Cloud가 10-22 AGNTCon+MCPCon에서 AI 에이전트 전용 컴퓨팅 서비스 Agent Compute Engine(ACE)을 공개. 에이전트 세션마다 하드웨어 격리 microVM을 할당하고, 하네스("두뇌")는 샌드박스 밖에서, 샌드박스("손")는 자격증명 없이 동작 — 토큰·API 키는 에이전트가 닿을 수 없는 별도 하드웨어 계층이 네트워크에 주입. Titanium IPU·Titan 실리콘, dm-verity 무상태 호스트, 오픈소스 자매 프로젝트 Agent Substrate(200,000 에이전트, <500ms 일시중지/재개). 고객 프리뷰는 수개월 내, 가격 미정. (MarkTechPost·TechTimes·TokenPost·AIDailyPost 교차)

## 내용

- **아키텍처**: 에이전트 세션당 하나의 microVM — 자체 게스트 커널, 루트 권한, Hyperdisk 스토리지. 표준 네트워크 인터페이스·기본 게이트웨이·직접 VPC 접근 없음 (모든 트래픽은 virtio-vsock → 로컬 프록시 → 외부 게이트웨이).
- **자격증명 분리**: 샌드박스 안에는 자격증명이 전혀 없음. 서비스 토큰·API 키·접근 비밀은 에이전트가 접근 불가능한 별도 하드웨어 계층이 회선(wire)에 주입.
- **4개 아이덴티티**: 에이전트 워크로드마다 User / Delegated on-behalf-of / Agent Workload Identity / Agent Workforce Identity 정의.
- **하드웨어**: Google 관리 호스트, Titan 실리콘 + Titanium IPU. 호스트는 무상태 어플라이언스, dm-verity로 읽기 전용 루트파일시스템 강제, 인증 키는 게스트 밖에.
- **Agent Substrate** (오픈소스, 모든 쿠버네티스에서 동작): 500 act/s, 200,000 에이전트 규모에서 <500ms 일시중지/재개, 기존 컴퓨트 대비 ~10배 밀도 (Substrate 수치, ACE 아님).
- **운영 현황**: 이미 Gemini 에이전트(업무 태스크)·Antigravity·내부 평가·RL 파이프라인에 사용 중. 고객 프리뷰 "수개월 내", 가격 미발표.
- **업계 수렴**: TechTimes — 올해 같은 해에 microVM 격리로 수렴한 클라우드 4곳째. "신뢰할 수 없는 콘텐츠를 다루는 에이전트에 컨테이너는 잘못된 기본 단위"라는 업계 판정.

## 맥락

- [[patterns/agent-safety-runtime]] — 실행시점 에이전트 보안 런타임 (NVIDIA OpenShell, 2026-10-21) — 하드웨어 강제 샌드박스의 클라우드 구현.
- [[concepts/nvidia-openshell-reference-architecture]] — NVIDIA OpenShell, 실리콘 레벨 에이전트 강제 참조 아키텍처 (2026-10-21) — 쌍을 이루는 하드웨어 강제 흐름.
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트 신뢰 모델 — 자격증명 격리가 신뢰 모델의 하드웨어 답.
- [[concepts/persistent-agent]] — 상시 가동형 에이전트 (2026-09-27) — Duet 이후 상시 대기 에이전트의 실행 기반.
