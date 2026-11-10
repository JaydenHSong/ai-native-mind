---
title: "Google Cloud Agent Compute Engine — 에이전트 세션마다 하드웨어 격리 microVM"
category: concepts
tags: [google-cloud, agent-compute-engine, microvm, agent-sandbox, credential-isolation, agent-substrate, agntcon]
created: 2026-10-23
updated: 2026-10-23
sources:
  - "raw/articles/2026-10-23-google-agent-compute-engine.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/nvidia-openshell-reference-architecture]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
status: draft
confidence: high
---

# Google Cloud Agent Compute Engine — 에이전트 세션마다 하드웨어 격리 microVM

## 쉽게 읽기

**비유**: 지금까지 에이전트는 "여러 사람이 함께 쓰는 사무실"(공유 컨테이너)에서 일했다. Agent Compute Engine은 에이전트마다 "금고 딸린 독립 사무실"(하드웨어 격리 microVM)을 준다. 에이전트의 두뇌(모델 호출)는 사무실 밖에 있고, 손(코드·셸·브라우저 실행)은 사무실 안에 있는데 — 사무실 안에는 금고 열쇠(API 키·자격증명)가 애초에 없다. 열쇠는 경비원(하드웨어 계층)이 직접 문 밖에서 전달한다.

| 용어 | 풀이 |
|------|------|
| **microVM** | 하드웨어 수준 격리를 가진 경량 가상머신 — 컨테이너보다 무겁지만 게스트 커널까지 분리 |
| **하네스 (harness)** | 에이전트의 "두뇌" — 모델을 호출하고 계획을 세우는 부분 |
| **virtio-vsock** | 가상머신과 호스트가 직접 통신하는 채널 — 네트워크 인터페이스 없이 게이트웨이로 |
| **dm-verity** | 읽기 전용 루트파일시스템의 무결성을 검증하는 리눅스 커널 기능 |

## 한줄 정의

2026-10-22 Google Cloud가 AGNTCon+MCPCon에서 공개한 AI 에이전트 전용 컴퓨팅 서비스 — 에이전트 세션마다 하드웨어 격리 microVM, 샌드박스 내 자격증명 제로, 하드웨어 계층이 토큰을 회선에 주입. 고객 프리뷰 수개월 내, 가격 미정.

## 핵심 내용

- **아키텍처**: 에이전트 세션당 하나의 microVM — 자체 게스트 커널, 루트 권한, Hyperdisk. 표준 네트워크 인터페이스·기본 게이트웨이·직접 VPC 접근 없음 (virtio-vsock → 로컬 프록시 → 외부 게이트웨이).
- **자격증명 분리**: 샌드박스 안에는 자격증명이 전혀 없음. 서비스 토큰·API 키는 에이전트가 도달 불가능한 별도 하드웨어 계층이 주입.
- **아이덴티티 4종**: User / Delegated on-behalf-of / Agent Workload Identity / Agent Workforce Identity.
- **하드웨어**: Titan 실리콘 + Titanium IPU, 무상태 호스트, dm-verity 읽기 전용 루트, 인증 키는 게스트 밖.
- **Agent Substrate** (오픈소스, 모든 K8s): 500 act/s, 200,000 에이전트에서 <500ms 일시중지/재개, ~10배 밀도 (Substrate 수치).
- **운영**: Gemini 에이전트(업무)·Antigravity·내부 평가·RL 파이프라인에 이미 사용.
- **업계 수렴**: 올해 microVM 격리로 수렴한 4번째 클라우드 — "신뢰할 수 없는 콘텐츠를 다루는 에이전트에 컨테이너는 잘못된 기본 단위"라는 업계 판정.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트 샌드박스의 정답지**: "코드를 실행하는 에이전트를 어떻게 가두는가"의 현시점 최강 답. Claude Code·OpenClaw·Hermes 같은 에이전트를 서비스로 올릴 때 ACE/Substrate 아키텍처 (두뇌 밖 / 손 안 / 키 없음) 가 설계 템플릿.
2. **자격증명 분리의 하드웨어화**: 환경변수에 API 키를 넣는 습관은 이 모델에서 아키텍처 위반. 하네스-샌드박스-주입계층 3분리는 에이전트 보안의 "기본기"가 될 것.
3. **밀도 경제**: 일시중지 microVM이 활성 리소스 0으로 체크포인트 — 상시 대기 에이전트 (Duet류) 의 단위 경제를 바꾸는 기술. 유휴 에이전트 20만 개를 <500ms로 깨운다는 건 "순찰 중" 에이전트 시대의 인프라 전제.

## 한계 (명시)

- 고객 프리뷰 "수개월 내" — 가격·부팅 시간·SLA 미공개.
- 10배 밀도·500 act/s는 Agent Substrate(오픈소스판) 수치, ACE 본체의 공개 벤치는 아님.
- TechTimes의 "4번째 클라우드" 수렴 주장은 매체 해석 — 다른 3곳의 명시적 비교 자료는 미제시.