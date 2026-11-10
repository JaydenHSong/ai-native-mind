---
title: "에이전트의 상주 형태 — 로컬 모델 vs 클라우드 컴퓨터"
category: concepts
tags: [agent-residence, local-model, open-weights, privacy, cloud-agent, meta, xai, openai, underdog, claude-workspace, microsoft, windows-agents, surface, apple, china, alibaba, muse-spark, mlx]
created: 2026-10-04
updated: 2026-10-16
sources:
  - "raw/articles/2026-10-04-agent-residence-local-vs-cloud.md"
  - "raw/articles/2026-10-07-underdog-ondevice-ai-assistant.md"
  - "raw/articles/2026-10-07-claude-google-workspace-beta.md"
  - "raw/articles/2026-10-08-microsoft-surface-ultra-agentic-windows.md"
  - "raw/articles/2026-10-15-apple-intelligence-china.md"
  - "raw/articles/2026-10-16-meta-muse-spark-open.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[tools/claude-google-workspace]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/apple-intelligence-china-launch]]"
  - "[[concepts/meta-muse-spark-open]]"
status: draft
confidence: medium
---

# 에이전트의 상주 형태 — 로컬 모델 vs 클라우드 컴퓨터

## 한줄 정의

AI 에이전트가 '살 곳'은 채팅창이 아니라 두 군데로 갈라졌다 — 사용자의 하드웨어에 상주하는 로컬 모델 vs 클라우드에 자기 컴퓨터를 가진 클라우드 에이전트.

## 핵심 내용

2026년 8월 Meta가 30B 파라미터 open-weight 모델을 출하했다: 소비자급 GPU 1장으로 로컬 실행, 네트워크 없이도 에이전트 동작. 정반대 베팅은 xAI(8/11)와 OpenAI(9/29 DevDay Dots)의 클라우드 에이전트 — 노트북을 닫아도 클라우드 속 '자기 컴퓨터'에서 일을 계속한다.

| 축 | 로컬 상주 (Meta 30B) | 클라우드 상주 (xAI·OpenAI) |
|---|---|---|
| 데이터 | 기기 밖으로 안 나감 (프라이버시) | 클라우드로 이동 |
| 지속성 | 세션이 끊기면 멈춤 | always-on — 닫아도 계속 일함 |
| 가격 모델 | 무료 + 사용량 제한 (CNBC) | 유료 플랜 (Pro/Business 등) |
| 오프라인 | 가능 | 불가능 |

채팅 시대의 에이전트는 채팅창 뒤에 살았고 탭을 닫으면 끝났다. 이제 질문은 '얼마나 똑똑한가'에서 '어디에 상주하는가'로 이동했다.

## 왜 중요한가

AI 네이티브 프로그래머에게는 두 형태가 다른 도구다: 로컬 에이전트는 개인 개발 환경의 비서(민감한 코드·로컬 파일), 클라우드 에이전트는 밤새 도는 백그라운드 워커(장시간 빌드·리서치). 무엇을 어디에 맡길지의 아키텍처 분리가 필요하다 — "상주 위치"가 곧 권한·비용·신뢰의 경계가 되기 때문.

## 2026-10-07 보강 — 양극화의 상용화: Underdog(온디바이스) vs Claude for Workspace(클라우드)

같은 날(10/6) 보도된 두 제품이 이 페이지의 두 축을 그대로 제품화했다:

| | Underdog (Sigil Wen) | Claude for Google Workspace (Anthropic) |
|---|---|---|
| 상주 | 완전 온디바이스 (Mac·Windows, invite-only 베타) | 클라우드 + Google 앱 내 사이드바 |
| 모델 | Qwen3.8-27B 파인튜닝 27B reasoning 모델 | Claude (프론티어급) |
| 차별점 | 프라이버시 — 데이터가 기기 밖으로 안 나감, 계정 키 암호화 | 업무 앱 내장 — Docs·Sheets·Slides 직접 편집 |
| 엔진 | Husky (자체 추론 엔진, CPU↔GPU 데이터 이동 최소화 주장) | — |
| 타깃 | Instinct·Muse의 프라이버시 대안 | Gemini의 홈그라운드 정면 진입 |

- Underdog는 "로컬 상주"의 극단 — Meta 30B(2026-08)보다 한 걸음 더 나아가 프라이버시 자체를 제품 포지셔닝으로 삼음. 작은 모델 + 전용 추론 엔진 조합이 온디바이스 에이전트의 실용 노선.
- Claude for Workspace는 "클라우드 상주"의 업무 침투 — [[tools/claude-google-workspace]] 참조. 에이전트가 사는 곳이 곧 경쟁의 전선: 로컬은 프라이버시로, 클라우드는 워크플로 내장으로 각자 무장.

## 2026-10-08 보강 — 세 번째 벡터: OS 내장형 (Microsoft Surface Ultra + Agentic Windows)

로컬·클라우드 양극화에 세 번째 벡터가 상용으로 합류했다 — **OS가 에이전트의 집이 되는 경우** (10/7, Reuters 외 다수 매체):

- **Surface Laptop Ultra**: Nvidia RTX Spark 탑재(Blackwell RTX GPU 최대 6,144코어 + Grace CPU 최대 20코어), 최대 128GB 통합 메모리·1 petaflop로 120B+ 파라미터 모델 로컬 구동. $2,599부터, 10/16 출하. Dev Box $5,999(11월 출하).
- **Windows 변화**: Copilot 'hybrid intelligence'(로컬 컨텍스트·로컬 액션·로컬 모델, 사용자 허가 기반). Execution Containers GA — Windows·macOS·Linux에 걸친 AI 에이전트 샌드박싱.
- **보안 3원칙**: Containment, Identity, Manageability + 엔드투엔드 에이전트 보안 플랫폼. OpenAI·Anthropic이 이미 Microsoft 보안 도구 위에 구축 중.
- Nadella: "new chapter for Windows" — Agent 365·Microsoft IQ·Copilot을 코어 Windows 아키텍처로 통합. 에이전트가 별도 앱이 아니라 OS 깊숙이 내장되는 미래.
- Reuters 분석 앵글: Azure 고비용 연산을 고객이 하드웨어 비용을 부담하는 로컬 기기로 이전하려는 베팅 — **상주 위치가 곧 비용 분담 구조**.

→ 이 페이지의 2축(로컬 vs 클라우드)에 3축 추가: 로컬(프라이버시) · 클라우드(워크플로) · **OS 내장(플랫폼)**. OS가 에이전트 보안(Containment·Identity·Manageability)을 강제하는 주체가 되면, [[patterns/agent-safety-runtime]]의 실행시점 보안이 OS 레벨 표준으로 굳어진다.

## 2026-10-15 보강 — 강제된 "Alibaba 클라우드 상주": Apple Intelligence 중국판

Apple이 12월 **iOS 27.3**로 중국 본토에 Apple Intelligence 출시 예정 (10/14, 9to5Mac·Bloomberg·SCMP) — 2년 넘는 규제 지연(2025년 5월→2025년 말→2026년 초 모두 불발)의 끝. iPhone Duo 중국 출시는 다음 주.

- **제한판 구성**: 올해 플래그십인 개편 Siri AI 제외, Apple 자체 이미지 생성 도구 제외, 일부 앱 텍스트 생성 제한, 카메라 기반 비주얼 인텔리전스 제외. 포함은 Genmoji·AI 알림 요약·글쓰기 도구·사진 Clean Up — **2024년 오리지널 기능 세트 수준**.
- **양보 조건**: Alibaba와 공동 개발한 가드레일 — **정부가 AI 모델 업데이트를 승인하는 필터** 포함. 클라우드 쿼리는 Alibaba 경유(**Tongyi Qianwen이 OpenAI 대체**, Alibaba 이미지 모델이 Apple 도구 대체). Baidu와는 검색·Siri 협력.
- **규제 궤적**: 2026년 7월 예비 승인, 9/29 MIIT 망접속 허가(iPhone Duo·iPhone 18 Pro·iPhone 15 Pro까지 소급 — Apple Intelligence와 Tongyi Qianwen·Tongyi Wanxiang 병기, 등록번호 공개).
- **맥락 수치**: 중국은 Apple 매출의 **17–20%**. 경쟁사(Huawei·Xiaomi·Oppo·Vivo)는 이미 AI 기능 탑재. Apple 시총 종가 기준 $5T 돌파(Nvidia 다음 2위). Bloomberg — 2년 된 기능을 이제 내놓는 실익은 불투명. Apple은 10/13 EU에 대해서도 Siri AI 관련 "건설적 협력 중".
- 이 페이지의 프레이밍으로 읽으면: "어디에 상주하는가"가 **주권의 질문**이 된 사례 — 온디바이스 모델이라도 클라우드 상주(Alibaba)는 중국 정부가 강제. 3축(로컬·클라우드·OS 내장)에 4번째 질문이 붙는다: **"상주 인프라를 누가 허가하는가"**. Apple의 프라이버시 포지셔닝(온디바이스)은 유지되지만, 클라우드 쿼리 경로는 정부의 업데이트 승인 필터를 통과 — "데이터가 기기 밖으로 안 나감"이 아니라 "밖으로 나간 쿼리가 Alibaba를 경유하고 모델 업데이트는 정부가 승인"하는 구조. Underdog(10/7 보강)가 "로컬 = 프라이버시"였다면, 중국판은 **"로컬 ≠ 주권"** — 상주 위치와 통제 주체의 분리.
- 상세: [[concepts/apple-intelligence-china-launch]]

## 2026-10-16 보강 — Muse Spark Open: Mac Studio가 에이전트의 집이 된다

Meta Muse Spark Open (10/15, TechCrunch·MacRumors) — 816B(활성 42B) MoE 오픈웨이트를 **M5 Ultra Mac Studio 2대(MLX·통합메모리 1TB)** 에서 로컬 구동 시연. Apple과의 협력.

- **"로컬" 스펙트럼의 상단 확장**: 2026-08 Meta 30B(소비자 GPU 1장) → 2026-10 Muse Spark(816B, Mac Studio 2대·1TB 통합메모리). "로컬 상주"가 단일 GPU에서 워크스테이션급으로 넓어짐. GPQA Diamond 89.0·Terminal-Bench 2.1 76.4 — 로컬에서 프론티어급 에이전트 성능의 주장(단 AA 지능지수 39는 중국 오픈 모델보다 낮음 — 자사 벤치와 독립 지수 괴리).
- **플랫폼(OS) × 모델(오픈웨이트)의 교차**: 10/8 보강의 OS 내장(Surface Ultra + Agentic Windows)이 "OS가 에이전트의 집"이었다면, 이번은 **Apple 하드웨어 × Meta 모델** — OS 벤더와 모델 벤더의 결합으로 로컬 에이전트 스택이 완성되는 형태. MLX(Apple 실리콘 추론 스택)가 오픈웨이트 배포 채널의 일부가 됨.
- 1인 개발자 관점: "로컬"은 이제 소비자 GPU(30B급)와 워크스테이션(816B급)의 2단 — 무엇을 어디에 상주시킬지의 아키텍처 분리가 더 정교해진다. 민감 코드는 온디바이스, 무거운 에이전트 워크로드는 Mac Studio급 로컬.
- 상세: [[concepts/meta-muse-spark-open]]

## 관련 개념

- [[concepts/persistent-agent]] — 상주 에이전트 개념의 원형 (OpenAI "O" 리크, 2026-09-27)
- [[patterns/agentic-finance]] — 클라우드 상주 에이전트가 돈을 쓰기 시작하면 (Robinhood Agents)
- [[comparisons/managed-vs-deep-agents]] — 호스팅 형태 선택의 lock-in vs 자유도

## 참고 소스

- [The Agent Just Stopped Living in the Chat Window](raw/articles/2026-10-04-agent-residence-local-vs-cloud.md)
- [Sigil Wen의 Underdog — 온디바이스 프라이버시 AI 어시스턴트 (TechCrunch, 10/6)](raw/articles/2026-10-07-underdog-ondevice-ai-assistant.md)
- [Anthropic, Google Workspace용 Claude 공개 베타 (10/6)](raw/articles/2026-10-07-claude-google-workspace-beta.md)
- [Microsoft×Nvidia, Surface Laptop Ultra — '에이전트를 위한 OS' (Reuters, 10/7)](raw/articles/2026-10-08-microsoft-surface-ultra-agentic-windows.md)
- [Apple Intelligence, 12월 iOS 27.3으로 중국 출시 예정 (9to5Mac·Bloomberg·SCMP, 10/14)](raw/articles/2026-10-15-apple-intelligence-china.md)
- [Meta Muse Spark Open — 816B 오픈웨이트, Mac Studio 로컬 구동 (TechCrunch·MacRumors, 10/15)](raw/articles/2026-10-16-meta-muse-spark-open.md)