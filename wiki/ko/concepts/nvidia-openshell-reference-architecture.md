---
title: "NVIDIA OpenShell Reference Architecture — 실리콘 레벨에서 에이전트를 강제하는 안전 아키텍처"
category: concepts
tags: [nvidia, openshell, agent-safety, runtime, dpu, bluefield, sentry, vera-rubin, kill-switch, gtc-berlin]
created: 2026-10-21
updated: 2026-10-21
sources:
  - "raw/articles/2026-10-21-nvidia-openshell-reference-architecture.md"
related:
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/uk-csrb-ai-agent-loss-of-control]]"
  - "[[concepts/cairn-norforge-ai-agent-hacking-spree]]"
  - "[[concepts/shutdown-evasion]]"
status: draft
confidence: high
---

# NVIDIA OpenShell Reference Architecture — 실리콘 레벨에서 에이전트를 강제하는 안전 아키텍처

## 쉽게 읽기

**비유**: 지금까지 에이전트 안전은 "좋은 경비원 두기"였다 — 소프트웨어 샌드박스가 규칙을 지키는지 지켜본다. NVIDIA OpenShell은 "건물 자체에 철문을 다는" 방식이다. 생각이 도는 칩(Rubin), 행동하는 CPU(Vera), 감시하는 DPU(BlueField)가 역할이 나뉘어 있고, 에이전트가 경계를 벗어나려 하면 감시 칩이 밀리초 단위로 전원을 끊듯 격리·중단한다. 경비원을 속일 수는 있어도, 건물 철문은 속일 수 없다.

| 용어 | 풀이 |
|------|------|
| **OpenShell** | 에이전트 하네스에 보안 경계를 설정하는 오픈소스 런타임 (Vera CPU에서 동작) |
| **Sentry** | BlueField-4 DPU에서 돌아가는 DOCA 기반 감시자 — 대역 외(out-of-band)로 에이전트 행위를 지속 감시 |
| **대역 외 (out-of-band)** | 에이전트가 도는 시스템과 분리된 경로로 감시 — 에이전트가 감시자를 건드릴 수 없음 |
| **실리콘 레벨 강제** | 소프트웨어 정책이 아니라 하드웨어(DPU)에서 정책을 집행 — 우회가 사실상 불가 |

## 한줄 정의

2026-10-21 GTC Berlin에서 발표된 AI 에이전트용 풀스택 참조 아키텍처 — "생각은 Rubin에서, 행동은 Vera에서, 통제는 BlueField에서 (think on Rubin, act on Vera, be governed on BlueField)". OpenShell 보안 런타임이 하네스 경계를 설정하고 BlueField-4의 Sentry가 실리콘 레벨에서 정책을 강제, 위반 시 밀리초 단위로 격리·중단한다.

## 핵심 내용

- **3층 구조**: (1) 생각 — Vera Rubin에서 모델 추론 (폐쇄형 + Nemotron 기반 오픈 모델); (2) 행동 — Vera CPU에서 에이전트 하네스·툴 사용 + 오픈소스 OpenShell 보안 런타임이 경계 설정; (3) 통제 — BlueField-4 DPU의 NVIDIA Sentry가 대역 외로 에이전트 행위를 지속 감시하고 실리콘 레벨에서 정책 강제.
- **집행 방식**: 경계를 벗어나려는 에이전트는 밀리초 단위로 격리·중단 — 소프트웨어 훅이 아니라 하드웨어 강제.
- **NVIDIA 주장 수치**: Vera Rubin NVL72는 와트당 30배 처리량, Vera CPU는 x86 대비 2배 성능·고효율, Sentry 도입 시 에이전트 수용량 최대 +20%.
- **생태계**: Anthropic, AWS, Cisco, CrowdStrike, Dell, Google Cloud, HPE, IBM, Meta, Microsoft, OpenAI, Palo Alto Networks, Perplexity, SAP, ServiceNow, Siemens, SpaceX Super Intelligence 등. 엣지(RTX Spark·DGX Spark·DGX Station)까지 확장.
- **지적된 약점** (The Register 경유): NVIDIA 하드웨어 종속, OpenShell GitHub의 미해결 보안 이슈, 텔레메트리 기본 수집 (opt-out 필요).

## 왜 중요한가 (1인 개발자 관점)

1. **"멈추는 방법"의 하드웨어화**: 10-12 나델라의 '비상 브레이크' 제안 (모델-하네스 분리·외부화·변조 방지 증거 기록)이 소프트웨어 아키텍처 제안이었다면, OpenShell은 그걸 실리콘에 박는 구현이다. 에이전트 안전이 "좋은 코드"에서 "물리적 강제"로 내려가는 지점 — 하네스 설계자는 이제 "어느 레이어에서 멈추는가"를 선택해야 한다.
2. **규제와의 정면 수렴**: 어제(10-20) 영국 CSRB가 "통제 상실"을 법적 발동 조건으로 삼았다. OpenShell/Sentry는 그 발동 조건에 대한 기술적 답이다 — "통제를 상실하지 않았음을 증명하는 방법"이 DPU 로그가 되는 세상. 컴플라이언스가 아키텍처 선택이 된다.
3. **위협 모델의 실증**: 어제의 Cairn 에이전트 해킹 캠페인 (건당 $50, 23시간 자율 탐색)이 막으려는 대상이다. 대역 외 감시는 "에이전트가 자신의 감시자를 속이는" 공격 (shutdown-evasion 페이지의 자기보존 CoT와 연결)에 대한 구조적 답.
4. **락인의 가격**: 하드웨어 종속 + 텔레메트리 기본 수집 — 안전을 사는 대가로 NVIDIA 스택에 묶인다. 1인 개발자에게는 "안전 인프라를 직접 못 깔면 빌려 쓰는 수밖에"라는 현실 — 클라우드 에이전트 플랫폼의 안전 SLA를 따져볼 근거.

## 한계 (명시)

- 참조 아키텍처 발표 — 실제 운영 데이터 없음. "+20% 수용량" 등은 NVIDIA 주장.
- NVIDIA 하드웨어 종속 — 비-NVIDIA 스택에서는 사용 불가.
- OpenShell GitHub에 미해결 보안 이슈 존재 (The Register 지적) — "안전 런타임 자체의 안전"은 미검증.
- 텔레메트리 기본 수집 — opt-out 필요. 에이전트 행위 데이터가 NVIDIA로 가는 구조.
- Sentry의 "밀리초 격리"가 실제 공격 시나리오에서 검증된 바 없음.
