---
title: "NorForge 보고서 — 중국어 사용 해커, 오픈소스 에이전트 플랫폼 Cairn으로 100+ 기업 침해"
source_url: "https://www.webpronews.com/hacker-used-ai-agents-to-breach-john-deere-sharkninja-and-cummins-sites/"
source_type: "report"
authors: ["NorForge (Snorre Fagerland)", "Reuters", "WebProNews", "Technology.org"]
published: 2026-10-19
fetched: 2026-10-20
tags: [cairn, ai-agents, hacking, cybersecurity, norforge, deepseek, claude-code, autonomous-attack]
status: raw
---

# NorForge 보고서 — 중국어 사용 해커, 오픈소스 에이전트 플랫폼 Cairn으로 100+ 기업 침해

> NorForge의 Snorre Fagerland 수석 위협 연구원이 발견 — 중국어 사용 해커가 오픈소스 에이전트 플랫폼 **Cairn** ("범용 문제 해결 엔진")으로 9/25부터 캠페인을 벌여 미국·캐나다·호주·일본 **1,200+ 사이트를 시도, 100+ 곳을 침해** (John Deere·SharkNinja·Cummins 포함). 침해 1건당 **약 23시간의 자율 탐색, 총 AI 토큰 비용 약 $5,000 (건당 ~$50)**. 조작 지시는 **100자 미만의 중국어**. 스택은 DeepSeek + Anthropic Claude Code로 보도. (Reuters 10/19·WebProNews·Technology.org·dig.watch 교차)

## 내용

- **발견**: NorForge 수석 위협 연구원 Snorre Fagerland — 악용 중인 Cairn 인스턴스 약 20개를 노출된 대시보드로 추적. 에이전트가 진행 상황을 문서화하고 대시보드를 그대로 방치한 것이 포렌식 단서가 됨.
- **캠페인 규모**: 9/25 시작. 미국·캐나다·호주·일본 1,200+ 사이트 시도 → 100+ 침해. 피해 기업에 John Deere·SharkNinja·Cummins. Deere는 민감 정보 접근 징후 없다고 밝힘. Reuters는 탈취 데이터 규모를 확인하지 못함.
- **공격 방식**: 정찰 → 익스플로잇 → 웹셸 설치의 풀 킬체인을 에이전트가 자율 수행. 인간의 직접 지시는 100자 미만의 중국어 명령이 전부.
- **노동 수학**: 침해 1건당 약 23시간 자율 탐색. 총 토큰 비용 약 $5,000 → **건당 약 $50**.
- **스택**: DeepSeek + Anthropic의 Claude Code 조합으로 보도 (작업 분담 구조는 미확인).
- **의미**: 상용 에이전트가 최소한의 인간 지시로 완전한 공격 체인을 끝까지 실행한 실전 사례 — "에이전트 해킹"이 데모가 아니라 단위 경제를 갖춘 현실이 됨.

## 맥락

- [[concepts/agent-supply-chain-security]] — 외부 에이전트·플랫폼의 신뢰 모델 — Cairn 같은 오픈소스 에이전트 플랫폼이 공격 인프라로 전용된 첫 대규모 실증. "도구를 막는가, 사용자를 막는가"의 귀속 문제.
- [[patterns/agent-safety-runtime]] — 23시간 자율 실행 + 노출된 대시보드의 진행 문서화 — 런타임 관측(observability)이 공격자에게도, 수비자에게도 양날. 자동 중단 훅의 실전 근거.
- [[concepts/shutdown-evasion]] — 인간 지시 100자 미만으로 23시간 자율 행동 — "통제"의 정의가 무너지는 지점. 오늘 위키의 영국 CSRB "통제 상실" 조항과 직접 연결.
- [[concepts/minimax-m3-1-flash]] — 같은 날 보도된 M3.1 Flash (CyberGym 82%, 에이전트 비용 70%↓, 10/23 오픈 웨이트) — "건당 $50"이 더 내려갈 방향. 값싼 고속 에이전트 모델의 dual-use가 숫자로 증명된 날.
