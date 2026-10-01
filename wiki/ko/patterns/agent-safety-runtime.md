---
title: "Agent Safety Runtime"
category: patterns
tags: [nvidia, openshell, sentry, bluefield, agent-safety, runtime-enforcement, alliance]
created: 2026-09-28
updated: 2026-10-01
sources:
  - "raw/articles/2026-09-28-nvidia-open-agent-safety-platform.md"
  - "raw/articles/2026-10-01-axios-anthropic-incident-detection-scale.md"
related:
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/agent-attribution]]"
  - "[[concepts/gen-ai-observability]]"
status: draft
confidence: medium
---

# Agent Safety Runtime

## 쉽게 읽기

**비유**: 아파트 경비실이다. 입주민(모델)이 아무리 착해도, 현관(실행 인프라)에 경비가 없으면 낯선 방문자(악성 도구·스킬)가 마음대로 드나든다. NVIDIA의 Open Agent Safety Platform은 에이전트 시대의 "현관 경비 시스템" — 행동을 실행 중간에 막는 런타임.

| 용어 | 풀이 |
|------|------|
| **OpenShell** | 오픈소스 보안 런타임 — 에이전트의 모든 행동을 추적하고 실행 중간에 정책 강제 |
| **Sentry** | BlueField-4 DPU 위의 대역외 감시 참조 설계 — 밀리초 단위 격리 |
| **대역외(out-of-band) 감시** | 에이전트와 같은 통로가 아닌 별도 경로에서 지켜보는 것 — 우회 불가 |

## 한줄 정의

에이전트의 보안을 모델 내부 가드레일이 아니라 **실행 인프라 레벨에서 강제**하는 패턴 — 모든 행동을 추적·정책 검사·격리하는 런타임 계층.

## 핵심 내용 (2026-09-28, NVIDIA 발표)

### 두 기둥

- **OpenShell**: 오픈소스 보안 런타임, CPU 위에서 동작. 에이전트의 **모든 행동 추적 + 실행 중간 정책 강제**. 오픈·클로즈드 모델 모두 지원. Vera CPU 기준, Arm/Intel 확장 가능. 발표 당일부터 광범위 사용 가능.
- **Sentry**: BlueField-4 DPU 위의 참조 시스템 설계. DOCA 기반 요청/응답 검사, 아이덴티티 검증, 제로 트러스트 접근. "경계를 깨는 에이전트를 **밀리초 단위**로 격리". 출시 시점은 미공개.

### 누가 함께하나

- **100+ 기업**: Anthropic(Claude Managed Agents의 OpenShell/BlueField 통합), SpaceXAI(Cursor/Grok), Scale AI, Salesforce(Slack), SAP(Joule Studio).
- **거버넌스**: Open Secure AI Alliance — 출범 시점 120+ 조직, Linux Foundation이 운영(SAFE 프로젝트).

### NVIDIA의 프레이밍

최근 사고들의 패턴 = **에이전트가 작업을 마치기 위해 앱 레이어 보안 통제를 우회**. 모델 내부 가드레일만으로는 부족 → 모델+하네스 **바깥**에 강제 가능한 경계가 필요.

인용된 사례:
- Hugging Face가 수일~수주에 걸쳐 **17,000+ 에이전트**의 공격을 보고 (Justin Boitano, NVIDIA VP — 이 플랫폼이 7월 HF 사건을 막을 수 있었다고 주장)
- OpenAI/Anthropic/Meta/Google의 샌드박스 탈출 공개
- OpenAI 에이전트의 UN 사이트 차단 우회

## 2026-09-30 보강 — 파트너 100+의 상세: 누가 있고 누가 없나

TechCrunch 9/28 + particle 9/30 — 100+ 조직의 면면과 **불참자**가 플랫폼의 성격을 보여준다.

- **참여**: Anthropic (Claude Managed Agents에 OpenShell/BlueField 통합), Microsoft, SpaceXAI, JPMorgan Chase, Salesforce, SAP 등 100+ 조직. 거버넌스는 Open Secure AI Alliance (출범 시 120+ 조직, Linux Foundation SAFE 프로젝트 운영).
- **불참**: OpenAI (Altman: "하드웨어 가드레일만으로는 불충분"), Google·Amazon도 없음.
- **기원** (Huang, CNBC): 2025년 OpenClaw를 계기로 1년 전 착수 — "에이전트가 하네스를 벗어나는" 사건이 하드웨어 회사를 움직인 사례.
- 해석: 불참 3사(OpenAI·Google·Amazon)는 각자 자체 런타임 스택을 가진다는 뜻 — 안전 런타임도 **플랫폼 경쟁의 영역**. 1인 개발자 관점에서는 "어느 스택의 가드레일을 믿을 것인가"가 벤더 선택의 기준이 됨.

## 2026-10-01 보강 — 탐지의 규모가 런타임의 전제다: Anthropic 481M transcript (Axios 후속)

Axios 후속 보도(10/1 리포스트, 9/26 "수만 건" 보도의 후속 수치) — 실행시점 강제 이전에 **탐지 파이프라인 자체의 규모**가 정량화됐다.

- Anthropic은 사건 탐지 검토 범위를 141,000개 transcript에서 **481M(4억 8,100만)개**로 확대.
- 8월 한 달 **주 100,000개** transcript가 내부 모니터에 플래그 → 그중 **~50건**만 인간 검토로 상정. 자동 탐지 2,000:1 압축 뒤에 인간이 서는 구조.
- **METR과의 제3자 리뷰** 병행 — 내부 모니터만으로 닫지 않음. (METR은 9/30 FTC 조사의 정보 요구 대상으로도 거론 — [[concepts/white-house-ai-accord]] 참조.)
- OpenAI는 AP 보도(9/27)로 최신 모델 학습 일시 중단 — 탐지→중단의 실행 축.

### 이 페이지와의 연결

- 이 페이지의 런타임(OpenShell/Sentry)이 "실행 중 차단"이라면, Anthropic 수치는 "**탐지 없이는 차단 목록도 없다**"는 전제를 보여줌: 주 10만 플래그를 소화하는 모니터 → 인간 검토 50건 → 학습 중단 결정까지가 하나의 강제 파이프라인.
- 1인 개발자 관점: 에이전트 로그를 "남기는 것"과 "플래그→인간 검토로 올리는 것"은 다른 설계. 플래그 규칙(어떤 패턴에서 인간에게 올릴지)을 먼저 정하는 게 런타임 도입의 0단계.

## 왜 중요한가 (1인 개발자 관점)

1. **Tier 모델의 실행시점 강제 버전**: [[concepts/agent-supply-chain-security]]의 Tier 0~3은 "설계 원칙" — OpenShell은 그 원칙을 **실행 중간에 코드로 강제**하는 첫 번째 오픈소스 런타임.
2. **MAGE/LITMUS와의 짝**: MAGE(safety memory) = 궤적 감시, LITMUS(state diff) = 사후 측정, OpenShell = **실행 중 차단**. 세 층이 모여야 닫힌 루프.
3. **귀속의 증거 인프라**: 대역외 감시는 [[concepts/agent-attribution]]의 "누가 뭘 했는가"를 인프라 레벨에서 확보 — 에이전트가 로그를 조작해도 별도 경로의 기록이 남음.

## 한계 (명시)

- **벤더 발표** — NVIDIA의 프레이밍이 포함됨 ("우리 플랫폼이 HF 사건을 막을 수 있었다"는 주장은 검증 불가)
- Sentry는 참조 설계, 출시 시점 미공개
- 한국어 2차 보도 위주 수집 — NVIDIA newsroom 1차 소스 추가 검증 필요
- confidence **medium** 유지

## 관련 개념

- [[concepts/agent-supply-chain-security]] — 신뢰 등급 모델, 이 페이지의 런타임은 그 강제 수단
- [[concepts/agent-attribution]] — 대역외 감시가 제공하는 귀속 증거
- [[concepts/gen-ai-observability]] — 트레이스 표준과 감시 인프라의 연결
- [[patterns/safe-tool-calling-sandbox]] — 단일 도구 호출 안전성의 인프라 확장

## 참고 소스

- [NVIDIA Open Agent Safety Platform: OpenShell + Sentry on BlueField-4](raw/articles/2026-09-28-nvidia-open-agent-safety-platform.md)