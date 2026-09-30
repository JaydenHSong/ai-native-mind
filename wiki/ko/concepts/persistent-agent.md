---
title: "Persistent Agent"
category: concepts
tags: [persistent-agent, always-on-agent, openai, devday, dots, chatgpt-space, workspace]
created: 2026-09-27
updated: 2026-09-29
sources:
  - "raw/articles/2026-09-27-openai-persistent-agent-o.md"
  - "raw/articles/2026-09-28-openai-devday-o-leak-update.md"
  - "raw/articles/2026-09-29-openai-spaces-workspace-rumor.md"
  - "raw/articles/2026-09-29-openai-devday-2026-keynote-confirmed.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[patterns/ai-cost-management]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: medium
---

# Persistent Agent

## 쉽게 읽기

**비유**: 지금까지 AI는 "부를 때만 오는" 심부름꾼이었다. Persistent agent는 **"상주하는" 비서** — 계속 켜져 있고, 스스로 스케줄을 돌리고, 이메일 주소까지 갖는다. OpenAI DevDay(9/29) 리크에 따르면 코드명 "O"가 그 첫 사례일 수 있다.

| 용어 | 풀이 |
|------|------|
| **Persistent / Always-on** | 호출될 때만 실행되는 게 아니라 **지속적으로 존재하며** 상태를 유지하는 에이전트 |
| **Agent identity** | 에이전트에게 부여된 **고유 식별자**(이메일 주소 등) — "누가 보냈는가"의 프로토콜 레벨 정의 |

## 한줄 정의

호출-응답 사이클을 넘어 **지속적으로 가동되며 자체 스케줄·메모리·아이덴티티를 갖는** AI 에이전트 — 2026-09-29 DevDay에서 OpenAI "Dots"로 공식 출시 (이전 코드명 "O").

## 핵심 내용 (2026-09-27 리크 기준)

- **DevDay 9/29** (SF, Altman 키노트 10am PT) 핵심 발표라는 내부 소스발 리크 (TestingCatalog)
- **단서**: ChatGPT 설정에 "O" 표시명 + "-o" 이메일 접미사, ChatGPT Pro($100/월) 업그레이드 페이지에 잠깐 노출
- **Aeon 연결**: 내부 프로젝트 "Aeon"(ChatGPT Workspace용 커스텀 에이전트)의 소비자 버전 가능성
- **미확인**: 권한 범위·스케줄링·메모리 구조·가격 — 전부 미확인
- **Tibo 힌트**: Codex + ChatGPT Work 사용량 제한 리셋 — 과금/쿼터 모델 개편의 전조일 수 있음

## 왜 중요한가 (1인 개발자 관점)

1. **과금 모델의 변화**: 호출당 과금 → 상주 시간당 과금으로 바뀌면 1인 SaaS의 비용 구조가 달라짐 ([[patterns/ai-cost-management]]의 "시간을 사는 비용" 축과 연결)
2. **귀속의 새 층**: 에이전트에게 이메일 아이덴티티가 생기면 [[concepts/agent-attribution]]의 "행위자 특정"이 프로토콜 레벨에서 정의되기 시작
3. **경쟁 축**: 9/26 Microsoft Copilot "Autopilot"(상시 에이전트)와 같은 주 — always-on이 플랫폼 경쟁의 축으로 부상

## 한계 (명시)

- **루머 등급**: 단일 내부 소스, 9/29 발표 전까지 미확인 — confidence **low** 유지
- 발표 후 사실 확인되면 본 페이지 승격, 루머면 archived

## 2026-09-28 보강 — DevDay 전야: "o, your always-on assistant" 목격

DevDay(9/29) 하루 전 추가 리크 — 실루엣은 선명해졌지만 가격은 여전히 미확인.

- **신규 단서**: 9/26 ChatGPT Pro 업그레이드 페이지에 "o, your always-on assistant" 문구 노출 후 수시간 내 삭제. 설정 파일의 표시명 "O" + 이메일 접미사 "-o"는 유지.
- **예상 라인업**: 12+ 제품 — "O", GPT-6 Cyber(앱 전용 Daybreak Red 티어), 장기 작업용 Managed Agents.
- **경쟁 구도**: Anthropic Conway / Claude Managed Agents, Meta Muse, xAI Grok Bot(9/5), Google Gemini Spark — 상시 에이전트가 플랫폼 경쟁축.
- **제외**: aggregator발 루머 등급 세부사항(63개 언어, Cerebras fast mode)은 1차 소스 없음 — 수집 제외.
- **내일(9/29) 키노트에서 확인되면** 본 페이지 confidence 승격, 루머면 archived. confidence **low** 유지.

## 2026-09-29 보강 — "Spaces": 상주 에이전트의 거처

- **'Spaces' 루머** (tokenpost 9/28): 사람+AI 에이전트가 하나의 공유 환경에서 문서·결과물을 함께 생성·수정하는 협업 워크스페이스 준비 중. Canvas 공동편집 + 공유 프로젝트(작업 맥락) + 워크스페이스 에이전트(장기 업무 실행) 흐름의 통합으로 관측.
- 제품명·일정·가격 미확인 — 루머 등급, confidence **low** 유지.
- "O"(상주 에이전트)와 "Spaces"(상주 에이전트의 거처)는 같은 스레드: 채팅창을 벗어난 에이전트의 **정체성(O)** 과 **작업 공간(Spaces)** 이 쌍으로 등장.
- **오늘(9/29) 10am PT DevDay 키노트에서 확인되면** 본 페이지 승격 — "O" 확인/부인, Spaces 공개 여부, Astra 대체 모델 발표를 함께 체크.

## 2026-09-29 오후 보강 — DevDay 키노트: "O"는 Dots로 확정

"O" 루머가 키노트에서 **"Dots"** 로 확정 발표됐다 (Fort Mason, 9/29 10am PT). promote-or-retire 결정은 **승격**.

- **사양**: 각 Dot이 자체 클라우드 컴퓨터·브라우저를 갖고 목표를 향해 백그라운드 작업 후 체크인. 4,000+ 앱 연결, 피드백으로 학습. ChatGPT·Slack·Teams에서 메시지 (텍스트ing 예정). 파워 모델: GPT-6 Astra.
- **가용**: 초기에는 ChatGPT Pro·Business Premium·Enterprise 구독자 — Meta Muse(무료)와 가격 정책이 갈림.
- **'Spaces' 루머도 확정** — 실제 이름은 **"ChatGPT Space"**: 팀원과 Dot 에이전트가 함께 일하는 공유 워크스페이스. **"Pages"** (인간+에이전트 공동 생성 문서 — 이미지·글·차트·시각화) 동시 발표. "O"(정체성) + "Spaces"(거처)의 쌍이 그대로 실현됐다.
- **경쟁 구도 확정**: OpenAI Dots vs Meta Muse vs Anthropic Conway / Claude Managed Agents vs xAI Grok Bot vs Google Gemini Spark — 상시 에이전트가 플랫폼 경쟁의 핵심 축.
- confidence **low → medium** (복수 현장 리포트 인용; 공식 리캡은 3자 인용 경유 — 1차 확인 시 high로 상향 가능).

## 관련 개념

- [[concepts/agent-attribution]] — 에이전트 아이덴티티와 귀속의 연결
- [[patterns/ai-cost-management]] — 상주 시간당 과금 모델의 비용 함의
- [[concepts/agent-supply-chain-security]] — 상시 가동 에이전트의 신뢰 등급 문제

## 참고 소스

- [OpenAI DevDay leak: persistent always-on agent codenamed O](raw/articles/2026-09-27-openai-persistent-agent-o.md)
