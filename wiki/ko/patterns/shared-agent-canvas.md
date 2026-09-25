---
title: "Shared Agent Canvas"
category: patterns
tags: [human-in-the-loop, collaboration, interface, context-engineering, lm-studio]
created: 2026-09-25
updated: 2026-09-25
sources:
  - "raw/articles/2026-09-25-lm-studio-agent-canvas.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[patterns/claude-md-guide]]"
status: draft
confidence: low
---

# Shared Agent Canvas

## 쉽게 읽기

**비유**: 지금까지 에이전트와 일하는 방식은 "채팅으로 말로 시키기"였다. LM Studio의 Agent Canvas는 **둘 다 보고 둘 다 고칠 수 있는 공동 작업대**다. 사람이 목업을 그리고, 에이전트가 그 자리에서 구현한다. 지시는 말이 아니라 **함께 편집하는 그림**이 된다.

| 용어 | 풀이 |
|------|------|
| **Canvas** | 사용자와 에이전트가 동시에 보고 편집하는 공유 작업 공간 |
| **Bionic** | LM Studio의 에이전트 — 캔버스에서 구현을 맡는 쪽 |

## 한줄 설명

인간-에이전트 협업 인터페이스를 채팅(순차 턴)에서 **공유 캔버스(동시 편집 공간)** 로 — 설계와 구현 사이의 handoff를 같은 화면에서 처리하는 패턴.

## 문제 상황

- **기대**: 에이전트에게 맡기면 알아서 해줌
- **현실**: 채팅 기반 협업은 (1) 설계 의도가 말로만 전달되어 누락되고, (2) "지금 뭘 보고 있는 거지?"라는 공유 컨텍스트 부재, (3) 승인(HITL)이 별도 게이트로 분리되어 흐름이 끊김

## 해결 방법

### Canvas = 공유 컨텍스트 surface

- 사용자와 에이전트가 **같은 artifact를 보고 편집** — 플로우차트·프로세스 맵·시스템 설계·목업
- 워크플로우: 목업을 함께 다듬은 뒤 같은 화면에서 **Bionic에게 구현 요청**
- 즉 "설계→구현 handoff"가 채팅 메시지 전달이 아니라 **공간 공유**로 해결

### 정책 vs 설계의 분리

- `[[patterns/claude-md-guide]]` (CLAUDE.md = 정책 객체): 정책은 텍스트로 고정
- Canvas: 설계는 **공동 편집** — "무엇을 어디에 남기는가"의 분리
  - 고정된 것 (정책·규칙) → 텍스트 파일
  - 함께 만드는 것 (설계·목업) → 공유 캔버스

### context-engineering 관점

[[concepts/context-engineering]]에서 말하는 "AI의 정보 환경 설계"에 **인간도 들어가는 환경**이 추가됨. 에이전트와 인간이 같은 artifact를 바라본다는 것이 신뢰·감독의 전제 — 감독(HITL)이 "결과 검수"가 아니라 "과정 공동 참여"로 바뀜.

## 적용 예시

에이전트와 협업할 때:

1. **채팅으로 지시하기 전에** 공유 artifact(목업·다이어그램·체크리스트)를 먼저 만든다
2. 에이전트의 작업 결과를 **같은 artifact 위에서** 확인한다 (별도 보고 X)
3. 정책(절대 규칙)은 텍스트로, 설계(함께 바꾸는 것)는 캔버스로 분리

## 장단점

| 장점 | 단점 |
|------|------|
| "말로 시키기"의 누락·오해를 구조적으로 줄임 | 뉴스레터 발표 단계 — 실제 사용 경험·독립 리뷰 없음 |
| HITL이 검수 게이트가 아니라 공동 작업이 됨 | 로컬 실행(LM Studio) 한정 — 클라우드 에이전트 적용 방식 미정 |

## 관련 패턴

- [[concepts/context-engineering|Context Engineering]] — 캔버스는 인간까지 포함하는 정보 환경 설계
- [[patterns/claude-md-guide|CLAUDE.md 작성 가이드]] — 고정 정책(텍스트) vs 공동 설계(캔버스)의 분리

## 참고 소스

- [LM Studio ships Agent Canvas — an interactive space you and the agent both edit](raw/articles/2026-09-25-lm-studio-agent-canvas.md)