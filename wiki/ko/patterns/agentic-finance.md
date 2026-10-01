---
title: "Agentic Finance — 에이전트에게 실제 돈을 맡기는 상품화"
category: patterns
tags: [agentic-finance, robinhood, trading-agent, mcp, hitl, dedicated-account, consumer-fintech]
created: 2026-10-01
updated: 2026-10-01
sources:
  - "raw/articles/2026-10-01-robinhood-agents-launch.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[patterns/agentic-commerce]]"
  - "[[concepts/agent-supply-chain-security]]"
status: draft
confidence: high
---

# Agentic Finance — 에이전트에게 실제 돈을 맡기는 상품화

## 쉽게 읽기

**비유**: 은행 창구에 "이 한도 안에서 알아서 굴려줘"라고 위임장을 맡기는 것과 같다. 단, 위임장은 앱 설정 화면이고, 대리인은 AI 모델이며, "주문 전에 도장 찍어줘"가 기본값으로 켜져 있다.

| 용어 | 풀이 |
|------|------|
| **Agentic account** | 에이전트 전용으로 분리된 계좌 — 에이전트는 이 안의 자금만 만질 수 있음 |
| **거래 승인 기본값 ON** | HITL(Human-in-the-Loop)의 상품화 — 주문 실행 전 사용자 승인이 디폴트 |
| **Loops** | 전략을 24시간 반복 실행하는 상시 루프 기능 (예정) |

## 한줄 정의

금융 플랫폼이 **앱 안에서** 에이전트에게 전용 계좌·선택한 모델·설정한 한도를 주고 실제 매매를 실행시키는 패턴 — 2026-09-29 Robinhood Agents가 메인스트림 상품으로 처음 배치한 사례.

## 사례: Robinhood Agents (2026-09-29 HOOD Summit, Houston)

### 상품 구조

- 앱 안에서 에이전트를 **이름 짓고**, **전용 agentic 계정**을 열고, **모델을 고르고**(OpenAI GPT-6 계열·Anthropic Opus 4.8 — Fortune 인용), **한도를 설정**하면 시장 리서치·전략 수립·자동 매매 실행.
- 경위: 2026-05 MCP로 서드파티 에이전트 연결 → 2026-09 인앱 내장. "연결"에서 "내장 상품"으로.
- **Loops** (예정): 전략을 24시간 반복 실행 — [[concepts/persistent-agent]]의 상시 가동이 금융으로 이식되는 지점.

### 안전 설계 (상품 레벨의 강제)

| 장치 | 내용 |
|------|------|
| 거래 승인 | **기본값 ON** — 끄지 않으면 모든 주문 전 사용자 승인 필요 |
| 계정 분리 | 에이전트는 전용 계정의 자금만 접근 — 메인 계정과 분리 (blast radius 제한) |
| 한도 설정 | 사용자가 에이전트별 한도를 직접 지정 |
| 책임 경계 | Robinhood는 에이전트를 **감독·감사하지 않으며 손실 책임은 사용자** (savingtoinvest 정리) |

→ [[concepts/agent-supply-chain-security]]의 Tier 모델이 소비자 금융 상품 UI로 내려온 형태: 권한 분리(계정)·HITL(승인)·한도(레이트 리밋)가 전부 "설정 화면"이 됨. 단, 책임은 플랫폼이 아니라 사용자에게 — 감독 장치는 팔지만 감독 자체는 하지 않는 구조.

### 채택 수치 — 출처 간 불일치 (양쪽 병기)

| 출처 | agentic 계정 수 | 비고 |
|------|------|------|
| PYMNTS | **15,000+** (5월 이후) | 도구 사용 하루 ~3,000만 회 |
| savingtoinvest | **150,000+** | 8월 70,000의 2배+ |

- 10배 차이 — 1차(공식 발표·실적 자료) 확인 불가. 두 수치 모두 병기하고 단독 인용 금지.

### 병행 발표·시장 반응

- 크립토 퍼페추얼 최대 10x (BTC·ETH, Bitstamp 경유), 주말 24/7 주식 거래 (규제 심사 대기), Cboe 기반 실적 이벤트 계약.
- HOOD 주가는 9/30 sell-the-news로 **-3.2%** — 발표 자체는 호재로 소화되지 않음.

### 책임 경계의 역방향 사례

- 8월 말부터 **Claude가 Robinhood MCP 경유 매매를 거부**한다는 사용자 보고 다수 — 모델 제공자가 플랫폼 상품의 실행을 거부하는, 플랫폼-모델 간 책임 경계의 실증. 상품(승인 ON)과 모델(거부)이 서로 다른 안전 판단을 내리는 이중 구조.

## 왜 중요한가 (1인 개발자 관점)

1. **"에이전트에게 돈을 맡기는" 첫 메인스트림 UX**: 전용 계정 + 승인 기본값 + 한도 — 에이전트 권한 설계의 소비자 표준이 여기서 굳어질 가능성.
2. **책임의 비대칭**: 플랫폼은 안전 장치(승인·분리)는 설계하되 감독·손실 책임은 지지 않음. 에이전트 상품을 만들 때 "장치를 파는 것"과 "책임을 지는 것"은 별개로 설계됨.
3. **모델 선택권의 상품화**: 사용자가 GPT-6 vs Opus 4.8을 골라 자기 돈을 맡김 — 모델 브랜드가 소비자 선택 변수가 되는 첫 금융 사례.

## 한계 (명시)

- 채택 수치는 출처 간 10배 불일치 — 1차 확인 전까지 양쪽 병기.
- "Loops"는 예정 기능 — 실사용 데이터 없음.
- Claude의 MCP 매매 거부는 사용자 보고 기반 — 공식 정책 확인 필요.
- confidence **high** (제품 발표 자체는 PYMNTS·Fortune 교차; 수치는 conflicting으로 명시).

## 관련 개념

- [[concepts/persistent-agent]] — Loops: 상시 에이전트의 금융 이식
- [[patterns/agentic-commerce]] — 에이전트 결제(소비)에서 에이전트 운용(자산)으로
- [[concepts/agent-supply-chain-security]] — Tier 모델·HITL의 상품화 형태

## 참고 소스

- [Robinhood Agents 출시](raw/articles/2026-10-01-robinhood-agents-launch.md)
