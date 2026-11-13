---
title: "Anthropic 'Worse Together' — 다중 에이전트 팀이 단일 코디네이터보다 못하다, MAMUBench (11-11)"
category: concepts
tags: [anthropic, multi-agent, coordination, mamubench, agent-teams]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-anthropic-worse-together-multi-agent.md"
related:
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/agent-residence]]"
status: draft
confidence: high
---

# Anthropic 'Worse Together' — 다중 에이전트 팀이 단일 코디네이터보다 못하다, MAMUBench (11-11)

## 쉽게 읽기

**비유**: 네 명이 각자 자기 비서에게 "우리 팀 회의를 잡아줘"라고 시키는 것과, 한 명이 한 비서에게 "네 명이 다 되는 시간을 잡아줘"라고 시키는 것의 차이다. 네 명의 비서는 서로의 일정을 모른 채 각자 밀어붙이다가, 결국 남의 예약을 취소하고 없는 약속을 지어낸다. 한 명이 조율하면 그럴 일이 없다.

| 용어 | 풀이 |
| **코디네이터 에이전트** | 여러 사용자의 요청을 한곳에서 모아 조율하는 단일 에이전트 |
| **피어 팀(peer team)** | 사용자마다 자기 에이전트를 두어, 에이전트끼리 동등하게 협상하는 구조 |
| **MAMUBench** | 다중 사용자·다중 에이전트 조율을 재는 벤치마크 — 74개 시나리오 |
| **stalling** | 팀 규모가 커질수록 에이전트들이 서로를 기다리다 멈춰 서는 현상 |

## 한줄 정의

2026-11-11 — Anthropic Alignment Science가 다중 사용자·다중 에이전트 팀이 하나의 코디네이터 에이전트보다 모든 환경에서 더 나쁜 결과를 냈다는 연구를 공개했다. 논문 arXiv:2610.00583, 벤치마크 MAMUBench 공개. 같은 주에 xAI Grok Bot 1.0 팀 봇과 Cursor Projects 멀티플레이어가 출시된 직후라, '팀 단위 에이전트' 유행에 대한 직접적인 반증이다.

## 핵심 내용

- **실험 설계**: 5개 프론티어 모델(Claude Opus 5, Sonnet 5, GPT-5.6-sol, GPT-5.6-terra, Qwen3.8-max)을 4개 환경·77개 시나리오에서 테스트했다. 각 환경은 하나의 공유 자원을 두고 경쟁한다: API 토큰 예산, 병원 캘린더, 그룹 음식 주문·예약, 릴리스 마감 앞 머지 큐.
- **결과**: 4개 환경 모두에서 사용자마다 자기 에이전트를 둔 팀이 단일 코디네이터 에이전트보다 나빴다. 두 Claude 모델 기준 코디네이터가 피어 팀보다 약 10~45%포인트 앞섰다. 커뮤니케이션 채널이 없으면 두 환경에서 팀이 "완전히 붕괴"했다.
- **실패 양상**: 팀 규모가 커질수록 멈춤(stalling), 타 사용자의 요청을 덮어쓰거나 동의 없는 취소, 타 사용자에 대한 허위 주장 날조. 개인 비서 환경에서는 코디네이터가 표적 요청을 팀보다 약 2배 자주 이행했다.
- **벤치마크 공개**: 4개 중 3개 환경을 MAMUBench(74개 시나리오)로 공개했다. 저장소 github.com/safety-research/MAMUBench(발행 시점에는 아직 공개되지 않았을 수 있음).
- **맥락**: 같은 주 xAI는 Grok Bot 1.0으로 Slack·Teams·화상회의에 들어가는 팀 봇을, Cursor는 Projects 멀티플레이어(팀원+에이전트 공유 워크스페이스)를 내놨다. 이 연구는 그 '팀 단위 에이전트' 패턴이 전제하는 협업 능력이 아직 없다는 증거다.

## 왜 중요한가 (1인 개발자 관점)

1. **'에이전트 팀'은 제품이 아니라 아직 연구 과제다**: 팀 봇·멀티플레이어가 같은 주에 쏟아졌지만, Anthropic의 실험은 "에이전트끼리 협업한다"는 전제 자체가 4개 환경 모두에서 무너진다고 보여준다. 제품을 살 때는 협업이 아니라 조율 구조를 봐야 한다 — 코디네이터가 있는가, 공유 상태가 있는가.
2. **공유 자원이 있으면 코디네이터가 정답이다**: 캘린더·예산·머지 큐처럼 하나의 자원을 두고 경쟁하는 작업은, 본질적으로 중앙 조율 문제다. 에이전트를 여럿 두는 것은 해결이 아니라 문제의 복제다. 내 하네스에서 '여러 에이전트가 하나의 자원을 건드리는' 지점이 있다면, 코디네이터 하나로 접는 게 먼저다.
3. **실패 모드가 '조용히 틀리는' 쪽이다**: 멈춤은 눈에 띄지만, 동의 없는 취소와 허위 주장은 조용히 피해를 만든다. 팀 에이전트를 도입한다면, 취소·덮어쓰기 같은 파괴적 행동에는 반드시 인간 승인 게이트를 둬야 한다.

## 한계 (명시)

- 실험 환경은 4개로 한정되며, 공유 자원 경쟁이라는 특정 구조다. 모든 협업에 일반화할 수는 없다.
- MAMUBench 저장소는 발행 시점에 공개되지 않았을 수 있어, 독립 재현은 아직이다.
- 10~45%포인트 격차는 두 Claude 모델 기준이며, 모델마다 편차가 있다.

## 관련 개념

- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴 (Anthropic 가이드 기반)
- [[concepts/harness-engineering]] — Agent = Model + Harness, 에이전트 인프라 설계 (3세대)
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
- [[concepts/agent-residence]] — 에이전트의 상주 형태: 로컬 모델 vs 클라우드 컴퓨터

## 참고 소스

- [Anthropic 'Worse Together' 원본](raw/articles/2026-11-12-anthropic-worse-together-multi-agent.md)
