---
title: "에이전트의 상주 형태 — 로컬 모델 vs 클라우드 컴퓨터"
category: concepts
tags: [agent-residence, local-model, open-weights, privacy, cloud-agent, meta, xai, openai, underdog, claude-workspace, microsoft, windows-agents, surface]
created: 2026-10-04
updated: 2026-10-08
sources:
  - "raw/articles/2026-10-04-agent-residence-local-vs-cloud.md"
  - "raw/articles/2026-10-07-underdog-ondevice-ai-assistant.md"
  - "raw/articles/2026-10-07-claude-google-workspace-beta.md"
  - "raw/articles/2026-10-08-microsoft-surface-ultra-agentic-windows.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agentic-finance]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[tools/claude-google-workspace]]"
  - "[[patterns/agent-safety-runtime]]"
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

## 관련 개념

- [[concepts/persistent-agent]] — 상주 에이전트 개념의 원형 (OpenAI "O" 리크, 2026-09-27)
- [[patterns/agentic-finance]] — 클라우드 상주 에이전트가 돈을 쓰기 시작하면 (Robinhood Agents)
- [[comparisons/managed-vs-deep-agents]] — 호스팅 형태 선택의 lock-in vs 자유도

## 참고 소스

- [The Agent Just Stopped Living in the Chat Window](raw/articles/2026-10-04-agent-residence-local-vs-cloud.md)
- [Sigil Wen의 Underdog — 온디바이스 프라이버시 AI 어시스턴트 (TechCrunch, 10/6)](raw/articles/2026-10-07-underdog-ondevice-ai-assistant.md)
- [Anthropic, Google Workspace용 Claude 공개 베타 (10/6)](raw/articles/2026-10-07-claude-google-workspace-beta.md)
- [Microsoft×Nvidia, Surface Laptop Ultra — '에이전트를 위한 OS' (Reuters, 10/7)](raw/articles/2026-10-08-microsoft-surface-ultra-agentic-windows.md)