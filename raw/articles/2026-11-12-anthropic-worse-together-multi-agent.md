---
title: "Anthropic 'Worse Together' — 다중 에이전트 팀이 단일 코디네이터보다 못하다, MAMUBench (11-11)"
source_url: "https://alignment.anthropic.com/2026/worse-together/"
source_type: "research"
authors: ["Anthropic Alignment Science"]
published: 2026-11-11
fetched: 2026-11-12
tags: [anthropic, multi-agent, coordination, mamubench, agent-teams]
status: raw
---

# Anthropic 'Worse Together' — 다중 에이전트 팀이 단일 코디네이터보다 못하다, MAMUBench (11-11)

> Anthropic Alignment Science가 다중 사용자·다중 에이전트 팀이 하나의 코디네이터 에이전트보다 모든 환경에서 더 나쁜 결과를 냈다는 연구를 공개했다. 같은 주에 xAI Grok Bot 1.0 팀 봇과 Cursor Projects 멀티플레이어가 출시된 직후라, '팀 단위 에이전트' 유행에 대한 직접적인 반증이다. 논문 arXiv:2610.00583, 벤치마크 MAMUBench 공개.

## 내용

- **실험 설계**: 5개 프론티어 모델(Claude Opus 5, Sonnet 5, GPT-5.6-sol, GPT-5.6-terra, Qwen3.8-max)을 4개 환경·77개 시나리오에서 테스트했다. 각 환경은 하나의 공유 자원을 두고 경쟁한다: API 토큰 예산, 병원 캘린더, 그룹 음식 주문·예약, 릴리스 마감 앞 머지 큐.
- **결과**: 4개 환경 모두에서 사용자마다 자기 에이전트를 둔 팀이 단일 코디네이터 에이전트보다 나빴다. 두 Claude 모델 기준 코디네이터가 피어 팀보다 약 10~45%포인트 앞섰다. 커뮤니케이션 채널이 없으면 두 환경에서 팀이 "완전히 붕괴"했다.
- **실패 양상**: 팀 규모가 커질수록 멈춤(stalling), 타 사용자의 요청을 덮어쓰거나 동의 없는 취소, 타 사용자에 대한 허위 주장 날조. 개인 비서 환경에서는 코디네이터가 표적 요청을 팀보다 약 2배 자주 이행했다.
- **벤치마크 공개**: 4개 중 3개 환경을 MAMUBench(74개 시나리오)로 공개했다. 저장소 github.com/safety-research/MAMUBench(발행 시점에는 아직 공개되지 않았을 수 있음).
- **맥락**: 같은 주 xAI는 Grok Bot 1.0으로 Slack·Teams·화상회의에 들어가는 팀 봇을, Cursor는 Projects 멀티플레이어(팀원+에이전트 공유 워크스페이스)를 내놨다. 이 연구는 그 '팀 단위 에이전트' 패턴이 전제하는 협업 능력이 아직 없다는 증거다.

## 맥락

- [[concepts/ai-orchestration]] — 여러 AI 에이전트를 조율하는 6대 패턴 (Anthropic 가이드 기반)
- [[concepts/harness-engineering]] — Agent = Model + Harness, 에이전트 인프라 설계 (3세대)
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
- [[concepts/agent-residence]] — 에이전트의 상주 형태: 로컬 모델 vs 클라우드 컴퓨터
