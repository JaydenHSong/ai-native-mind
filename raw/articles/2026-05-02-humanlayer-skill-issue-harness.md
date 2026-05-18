---
source_url: "https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents"
title: "Skill Issue: Harness Engineering for Coding Agents"
author: "Kyle (HumanLayer)"
published: 2026-03-12
ingested: 2026-05-02
---

# Skill Issue — Harness Engineering for Coding Agents (HumanLayer)

> 출처: [HumanLayer Blog (Kyle, 2026-03-12)](https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents)

## 한 줄 요약

수백 세션의 코딩 에이전트 실패를 1년 디버깅한 결론: **모델 문제가 아니라 컨피그 문제**. coding agent = AI model + harness이고, harness는 context engineering의 부분집합이다. **CLAUDE.md/AGENTS.md, MCP, Skills, Sub-agents, Hooks, Back-pressure** 6 레버로 정리하고, 각각 흔한 함정을 케이스 스터디로 보여준다.

## 핵심 명제

- 모델은 더 똑똑해질 것이지만, 그러면 더 어려운 문제를 줄 것이고, **결정론적이지 않은 시스템은 계속 예측 못 한 방식으로 실패**한다.
- "GPT-6가 고쳐줄 거야"는 답이 아니다. **오늘의 모델에서 최대를 뽑는 법**을 묻는 것이 옳다.
- 인용 (Mitchell Hashimoto, 12단어): "anytime you find an agent makes a mistake, [...] engineer a solution"

## Harness Engineering = Context Engineering의 부분집합

`harness engineering ⊂ context engineering ⊂ "make agents reliable"`

답해야 할 질문들:

- 모델에 새 능력을 어떻게 주는가
- 학습 데이터에 없는 코드베이스 지식을 어떻게 가르치는가
- "CRITICAL: always do XYZ" 시스템 메시지 너머 결정성을 어떻게 추가하는가
- 컨텍스트 윈도우가 너무 빨리·나쁜 컨텍스트로 부풀지 않도록 어떻게 관리하는가

## 6 레버 — 각각의 함정과 처방

### 1. CLAUDE.md / AGENTS.md

- ETH Zurich가 138 agentfile을 테스트해 "대부분 쓸모없거나 해롭다" 결론. LLM 생성 파일은 성능을 **떨어뜨리고 비용 +20%**. 사람이 쓴 것도 +4% 효과뿐.
- 그러나 결론은 "agentfile은 무용"이 아니라 **"잘 쓴 것만 도움"** — auto-generate 금지, less is more, progressive disclosure, conditional rules 최소화.
- HumanLayer의 `CLAUDE.md`는 **60줄 미만**.

### 2. MCP는 도구를 위한 것

- MCP 서버 연결 시 도구 설명이 **시스템 프롬프트에 주입**됨 → 너무 많이 꽂으면 "dumb zone"으로 직행.
- 보안 경고: 신뢰하지 못하는 서버에 연결 금지 (프롬프트 인젝션 벡터). STDIO/uvx/npx는 호스트 코드 실행.
- Anthropic은 [MCP tool search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)로 progressive disclosure 실험 중.
- **CLI vs MCP 결정 룰**: 학습 데이터에 잘 표현된 CLI(GitHub, Docker, DB)면 MCP 대신 CLI를 쓰게 해라 — 컨텍스트 효율 + grep/jq 합성 가능.
- 사례: HumanLayer가 Linear MCP를 6 사용 패턴 + 작은 자체 CLI로 교체 → 토큰 수천 절감.

### 3. Skills = 재사용 가능 지식 (+ 도구)

- **Progressive disclosure**: 에이전트가 필요할 때만 SKILL.md 로드. 시스템 프롬프트 부풀림 방지.
- 보안 경고: skill registry는 npm install처럼 다뤄야. **OpenClaw ClawHub 1,184 악성 스킬 사고 인용**.
- MCP/커스텀 도구를 skill에 직접 번들 못 함 → 실행파일/CLI/npm 패키지로 묶어 함께 배포 (BrowserBase agent browser skills, Vercel agent-browser CLI 예시).

### 4. Sub-agents = 컨텍스트 통제

- "frontend engineer / backend engineer / data analyst" 식 분류는 **안 먹힌다**. 먹히는 건 **context firewall** 용도.
- 부모 컨텍스트는 sub-agent에 보낸 프롬프트 + 받은 최종 결과만 본다. 중간 도구 호출·grep 결과는 부모에 들어오지 않음.
- Chroma "context rot" 연구 (18 모델, needle-in-haystack)가 "긴 컨텍스트일수록 단순 태스크도 성능 저하" 실증. distractor는 길어질수록 더 해롭다.
- **롱 컨텍스트 모델은 함정**: needle-in-haystack에서 더 큰 컨텍스트 = 더 큰 haystack. 진짜로 필요한 건 **컨텍스트 윈도우 격리**, sub-agent가 구조적으로 해결.
- 비용 통제: 부모는 Opus, sub는 Sonnet/Haiku 식 모델 라우팅.
- 사용 케이스: 코드베이스 정의 위치 찾기, 패턴 분석, 정보 흐름 추적, 일반 리서치. **filepath:line 인용**으로 부모에 압축 결과만 반환.

### 5. Hooks = 제어 흐름

- git hooks의 에이전트 버전. 자동·조용히 실행, 도구 호출 시 추가 컨텍스트 주입, 빌드/타입 에러를 stop 시점에 surfacing.
- Claude Code hooks, Opencode plugins. (Codex는 아직 없음.)
- 케이스: 알림(소리/Slack), 정책(`Bash()`로 migration 시도하면 자동 거부), 통합(PR 생성), **검증(Stop hook에서 biome+typecheck 병렬 실행, 에러 있으면 exit 2 → 하네스가 다시 에이전트 깨움)**.

### 6. Back-pressure = 자기 검증 능력

- "에이전트가 자기 결과를 검증할 수 있는 능력"이 성공률과 강하게 상관.
- 메커니즘: typecheck/build (강타입 언어 권장 — [arXiv 2504.09246](https://arxiv.org/pdf/2504.09246)), 단위/통합 테스트, 코드 커버리지 hook, UI 테스팅(playwright/agent-browser).
- **Critical: 컨텍스트 효율적이어야**. 4,000 줄 통과 테스트가 컨텍스트에 쏟아지면 에이전트가 길을 잃는다. **성공은 침묵, 실패만 verbose**.

## 안티패턴 vs 워킹 패턴

**작동 안 한 것:**

- 실패도 안 본 채로 이상적 하네스를 미리 설계하기
- "혹시 모르니까" 수십 개 skill·MCP 설치
- 매 세션 끝에 5분짜리 풀 테스트 스위트 돌리기 (서브셋만)
- sub-agent 별로 어떤 도구 쓸지 micro-optimize

**작동한 것:**

- 단순하게 시작, 실제 실패가 나야 컨피그 추가
- 디자인-테스트-반복-버리기 (안 쓰는 hook은 폐기)
- 레포 레벨 컨피그로 팀에 분배
- "1-shot 성공" 아니라 **이터레이션 속도** 최적화

## 짧은 인용 (단일, 14 단어)

> "The next time your coding agent isn't performing the way you expect, [...] check the harness."

## 위키 매핑 (수집 시점 메모)

- `concepts/harness-engineering` — 6 레버 (CLAUDE.md/MCP/Skills/Sub-agents/Hooks/Back-pressure) 카탈로그로 추가
- `patterns/claude-md-guide` — ETH Zurich 138 agentfile 연구 + HumanLayer 60줄 원칙으로 보강
- `patterns/subagents-delegation` — context firewall 정의·"frontend/backend 분류는 안 먹힌다" 안티패턴 + Chroma context rot 인용
- `patterns/safe-tool-calling-sandbox` — MCP 인젝션 벡터·CLI vs MCP 결정 룰 보강
- `concepts/context-rot-hallucination` — Chroma 18-모델 needle-in-haystack 결과 인용

## 추가 출처 (글 본문에서 인용)

- [The Anatomy of an Agent Harness — LangChain Blog (Viv)](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)
- [Claude Code SDK: Harness as a Service — Vivek Trivedi](https://www.vtrivedy.com/posts/claude-code-sdk-haas-harness-as-a-service)
- [Harness Engineering — OpenAI](https://openai.com/index/harness-engineering/)
- [12-Factor Agents — Dex Horthy](https://github.com/humanlayer/12-factor-agents)
- [Advanced Context Engineering — HumanLayer](https://www.humanlayer.dev/blog/advanced-context-engineering)
- [Context-Efficient Back-pressure — HumanLayer](https://www.humanlayer.dev/blog/context-efficient-backpressure)
- [Writing a Good CLAUDE.md — HumanLayer](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [A Complete Guide to AGENTS.md — Matt Pocock](https://www.aihero.dev/a-complete-guide-to-agents-md)
- [Chroma — Context Rot Research](https://research.trychroma.com/context-rot)
- [ETH Zurich agentfile study — arXiv 2602.11988](https://arxiv.org/abs/2602.11988)
- [Strongly typed languages help LLMs — arXiv 2504.09246](https://arxiv.org/pdf/2504.09246)

confidence: high (1년치 운영 경험 + 외부 인용 다수, 단 단일 회사 관점이라 medium-high 사이)
