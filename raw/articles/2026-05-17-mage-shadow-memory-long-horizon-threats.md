---
title: "MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory (arXiv 2605.03228)"
source_url: "https://arxiv.org/abs/2605.03228"
source_type: "arxiv-paper"
authors: ["Yuhui Wang", "Tanqiu Jiang", "Jiacheng Liang", "Charles Fleming", "Ting Wang"]
published: 2026-05-04
fetched: 2026-05-17
tags: [security, long-horizon-threat, memory, shadow-memory, guardrail, agent-safety, harness-engineering, arxiv]
status: ingested
---

# MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory

> arXiv:2605.03228, 2026-05-04. Wang · Jiang · Liang · Fleming · Wang. Long-horizon agent attack 방어를 위해 **shadow memory**를 두고, 실행 직전 pending action의 위험을 평가하는 프레임워크.

## 메타

- **Title**: MAGE: Safeguarding LLM Agents against Long-Horizon Threats via Shadow Memory
- **Authors**: Yuhui Wang, Tanqiu Jiang, Jiacheng Liang, Charles Fleming, Ting Wang
- **arXiv**: <https://arxiv.org/abs/2605.03228> | PDF: <https://arxiv.org/pdf/2605.03228>
- **Domain**: LLM agent security, long-horizon threat, memory-based guardrail
- **실험 힌트**: HTML 본문 기준 AgentDojo의 Banking / Slack test suite를 사용하며, 긴 상호작용 도중 누적되는 공격을 다룬다.

## 한 줄 요약

**"단일 turn 방어는 길게 달리는 에이전트 앞에서 약하다 — MAGE는 시스템 보안의 shadow stack처럼 *안전 전용 기억*을 따로 유지해, 행동 직전 위험을 판정하는 memory-as-guardrail 프레임워크다."**

## 핵심 주장

### 1) 문제 — long-horizon threat는 단발성 prompt injection보다 길게 스며든다

abstract 핵심: 에이전트가 복잡한 실세계 task를 오래 수행할수록, 사용자·에이전트·환경 상호작용 전체를 악용해 *single-turn에선 드물던* 악성 목적을 달성하게 만드는 공격이 등장한다.

→ 즉 방어 표면이 "지금 받은 입력 한 줄"이 아니라 **trajectory 전체**가 된다.

### 2) MAGE의 아이디어 — shadow memory

- 시스템 보안의 **shadow stack**에서 영감
- 일반 작업 메모리와 별도로 **safety-focused agentic memory** 유지
- 전체 실행 궤적에서 **safety-critical context만 distill**해서 보존
- pending action 실행 전에 이 shadow memory를 이용해 위험을 **사전 평가**

→ 메모리를 productivity 기능이 아니라 **guardrail 컴포넌트**로 재해석한다.

### 3) 왜 중요한가 — "기억"이 곧 보안 장치가 된다

기존 메모리 논문들이 "더 잘 기억하게 하자"에 가까웠다면, MAGE는 "무엇을 *안 잊어야 안전한가*"로 초점을 바꾼다.

- 일반 context가 길어질수록 안전 신호가 희석될 수 있음
- shadow memory는 안전 관련 사실만 별도 경로로 유지
- 따라서 *유틸리티 메모리*와 *안전 메모리*를 분리하는 설계 원칙이 생김

### 4) 평가 결과 — 정확도 상승, 조기 탐지, utility 손실은 작음

abstract가 명시하는 결과:

- 기존 defense 대비 **detection accuracy 실질 향상**
- 공격의 **majority를 early-stage에서 탐지**
- agent utility에 주는 **overhead는 negligible**

수치 세부값은 본문 표 정독이 필요하지만, 주장 구조는 분명하다: **보안 향상 ↔ utility 유지**의 trade-off를 memory 구조로 개선.

## 본 위키와의 짝

| 본 위키 페이지 | MAGE와의 관계 |
|---|---|
| [[concepts/agent-supply-chain-security]] | Tier 3 untrusted 입력을 한 번에 차단하는 dual-LLM 계열 방어와 달리, MAGE는 **긴 trajectory 안에서 누적된 위험 신호**를 메모리로 추적 |
| [[concepts/ai-memory-systems]] | 메모리를 productivity가 아니라 **safety memory**로 쓰는 첫 강한 사례 |
| [[concepts/harness-engineering]] | 11 책임 중 #4 Project memory, #8 Verification, #10 Entropy auditing이 한 지점에 겹친다 |
| [[patterns/safe-tool-calling-sandbox]] | sandbox가 blast radius를 줄인다면, MAGE는 그 직전 단계에서 **실행 여부를 다시 묻는 sensor** 역할 |

## 2x3 좌표계에서의 위치

- **Prescriptive × 측정** 칸.
- "이렇게 설계하라"(shadow memory guardrail)라는 처방이 있고, 동시에 long-horizon threat에서 defense efficacy를 **평가**한다.

## 한계

- abstract와 HTML 구조만 확인. 표 단위 정량은 후속 정독 필요.
- AgentDojo Banking / Slack 중심 실험이라 다른 enterprise agent stack으로 일반화할 때 추가 검증 필요.
- threat model이 indirect prompt injection 계열에 강하게 묶여 있을 수 있음 — broader runtime attack taxonomy와의 대응은 본문 확인 필요.

## 출처

- arXiv: <https://arxiv.org/abs/2605.03228>
- PDF: <https://arxiv.org/pdf/2605.03228>
