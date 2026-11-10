---
title: "Anthropic, 에이전트 메모리 'dreaming' 공개 — 세션 사이 오프라인 정리로 틀린 메모를 고치고 위키를 쌓는다 (11-06 엔지니어링 블로그)"
source_url: "https://cellcog.ai/blog/anthropic-agent-memory-dreaming/"
source_type: "news"
authors: ["Anthropic"]
published: 2026-11-06
fetched: 2026-11-07
tags: [anthropic, claude, agent-memory, dreaming, sleep-time-compute]
status: raw
---

# Anthropic, 에이전트 메모리 "dreaming" 공개 — 세션 사이 오프라인 정리로 틀린 메모를 고치고 위키를 쌓는다 (11-06 엔지니어링 블로그)

> Anthropic이 11-06 엔지니어링 블로그 "The components of agent memory"(Lance Martin)에서 Claude의 세션 간 메모리가 어떻게 동작하는지 공개했다. 핵심은 "dreaming"이다. 세션 사이 오프라인 시간에 Claude가 자기 로그를 다시 읽어 틀린 메모를 고치고, 새 메모를 쓰고, 연결된 위키 페이지를 만들고, 다음 세션에 무엇을 올릴지 정한다. 인간의 수면 중 기억 통합에서 따온 아이디어로, Letta와 UC Berkeley의 sleep-time compute 연구를 인용했다.

## 내용

- **정의**: Anthropic은 에이전트 메모리를 "경험에서 얻은 지식을 세션 사이에 파일로 남겨 나중에 읽을 수 있는 맥락"으로 좁게 정의한다. 가중치 변경, 한 대화 안의 인컨텍스트 학습, 오래된 대화를 요약으로 대체하는 compaction은 메모리에서 제외한다.
- **4개 층**: (1) 전사(transcripts) — 대화·활동 로그를 그대로 보존, (2) 메모리 노트 — Claude가 고른 교훈·규칙·목표·계획, (3) 메모리 표현 — 위키 같은 연결된 지식 구조, (4) 주입 맥락 — 매 세션 시작 시 미리 올리는 작은 메모리 층. dreaming은 이 층들 사이에서 동작한다.
- **설계 규칙**: "메모리가 무엇을 위한 것인지는 알려주되, 어떻게 쓸지는 알려주지 말라"는 것이 핵심 규칙이다. 강한 모델에게 실패만 기록하라고 지시하면 오히려 약해졌다. Claude Code의 자동 메모리는 MEMORY.md의 첫 200줄 또는 25KB까지만 인덱스로 올린다. 항상 올리는 층은 작게 유지해야 한다.
- **실험 결과**: CL-Bench 1.0 데이터베이스 과제에서 메모리 보유 시 Opus 5.5는 0.655→0.838, Sonnet 5.5는 0.644→0.833, Opus 5는 0.564→0.828로 올랐다. 포켓몬스터 레드에서는 Sonnet 3.7이 225개 폴더에 413개 파일(약 978,000자)을 남기고 배지 1개, Fable 5는 파일 9개+대시보드 1개(약 43,400자)로 배지 4개를 얻었다. Mt. Moon 근처 포켓몬센터 위치를 잘못 적은 메모 때문에 한 방향 절벽을 반복해 오가던 실행이 dreaming으로 메모를 바로잡은 뒤 Cerulean City에 도달했다.
- **위키 실험**: 인수한 소프트웨어 회사 Stainless의 내부 파일 약 35만 개(약 4억 2,000만 토큰)를 대상으로 Opus 5 에이전트가 128회 dreaming 세션을 돌려 위키를 구축했다. 25개 평가 질문의 충족 기준 비율이 13%에서 48%로 올랐고, 검색+위키는 61%로 검색 단독 53%를 앞섰다. 단, 위키가 항상 이득이 되지는 않았다.
- **범위**: Managed Agents와 Claude Code의 자동 메모리를 쓴 연구 설정 설명이지, dreaming을 일반 제품 기능으로 출시한다는 발표는 아니다. 메모리 정리는 컴퓨트를 쓰고, 정리 주기는 아직 열린 문제다. 모든 평가는 Anthropic 자체 측정으로 독립 검증이 없다.

## 맥락

- [[concepts/ai-memory-systems]] — Short/Long-term 메모리, Episodic/Semantic/Procedural 모달리티
- [[patterns/llm-wiki]] — LLM이 유지보수하는 개인 지식 위키 패턴 (Tobi Lütke)
- [[concepts/meta-muse-wonder-models]] — Meta Muse Wonder·Active Memory, 같은 주 출시된 상용 메모리 기능 (2026-10-13)
- [[concepts/claude-duet-proactive-agent]] — Anthropic Claude Duet, 상시 대기 에이전트 리서치 프리뷰 (2026-10-22)