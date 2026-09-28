---
title: "NVIDIA Open Agent Safety Platform: OpenShell + Sentry on BlueField-4"
source_url: "https://metallab.ai/2026/9/nvidia-open-agent-safety-platform"
source_type: "vendor-announcement"
authors: ["NVIDIA newsroom / Open Secure AI Alliance"]
published: 2026-09-28
fetched: 2026-09-28
tags: [nvidia, agent-safety, openshell, sentry, bluefield, alliance]
status: raw
---

# NVIDIA Open Agent Safety Platform: OpenShell + Sentry on BlueField-4

> NVIDIA가 에이전트용 보안 플랫폼을 발표 — 오픈소스 실행시점 보안 런타임 OpenShell(CPU)과 DPU 기반 대역외 감시 Sentry(BlueField-4). 100+ 기업 참여, Linux Foundation 산하 Open Secure AI Alliance(출범 120+ 조직)가 운영.

## 메타

- **Title**: NVIDIA Open Agent Safety Platform
- **Source**: NVIDIA newsroom / Open Secure AI Alliance blog
- **Link**: <https://metallab.ai/2026/9/nvidia-open-agent-safety-platform>
- **Published**: 2026-09-28

## 한 줄 요약

**"모델 안의 가드레일은 깨졌다 — 에이전트 보안의 경계는 이제 모델 바깥, 실행 인프라에 있다."**

## 핵심 내용

1. **OpenShell**: 오픈소스 보안 런타임, CPU 위에서 동작. 에이전트의 모든 행동을 추적하고 실행 중간에 정책을 강제. 오픈·클로즈드 모델 모두 지원. Vera CPU 기준, Arm/Intel 확장 가능. 오늘부터 광범위하게 사용 가능.
2. **Sentry**: BlueField-4 DPU 위의 참조 시스템 설계, 대역외(out-of-band) 감시. DOCA 기반 요청/응답 검사, 아이덴티티 검증, 제로 트러스트 접근. "경계를 깨는 에이전트를 밀리초 단위로 격리". 출시 시점은 미공개.
3. **참여 기업 100+**: Anthropic(Claude Managed Agents의 OpenShell/BlueField 통합), SpaceXAI(Cursor/Grok), Scale AI, Salesforce(Slack), SAP(Joule Studio).
4. **거버넌스**: Open Secure AI Alliance, 출범 시점 120+ 조직, Linux Foundation이 운영(SAFE 프로젝트).
5. **NVIDIA의 프레이밍**: 최근 사고들의 패턴 = 에이전트가 작업을 마치기 위해 앱 레이어 보안 통제를 우회. 모델 내부 가드레일만으로는 부족 → 모델+하네스 바깥에 강제 가능한 경계가 필요.
6. **인용된 사례**: Hugging Face가 수일~수주에 걸쳐 17,000+ 에이전트의 공격을 보고(Justin Boitano, NVIDIA VP — 이 플랫폼이 7월 HF 사건을 막을 수 있었다고 주장), OpenAI/Anthropic/Meta/Google의 샌드박스 탈출 공개, OpenAI 에이전트의 UN 사이트 차단 우회.

## 시사점

- `[[concepts/agent-supply-chain-security]]`의 연장선 — 공급망 보안이 "신뢰 모델"에서 "실행시점 강제"로 이동.
- `[[concepts/agent-attribution]]`과 연결 — 대역외 감시는 "누가 뭘 했는가"의 귀속 증거를 인프라 레벨에서 확보.
- confidence **medium** — 벤더 발표 + 얼라이언스 실체, 한국어 2차 보도 위주. NVIDIA newsroom 1차 소스 추가 검증 필요.