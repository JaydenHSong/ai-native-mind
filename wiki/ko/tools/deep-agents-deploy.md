---
title: "LangChain Deep Agents Deploy"
category: tools
tags: [deep-agents, langchain, langgraph, agent-platform, harness, open-source, agents-md, skill-md]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-langchain-deep-agents-skills.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-01-langchain-langgraph-1-0.md"
related:
  - "[[tools/managed-agents]]"
  - "[[comparisons/managed-vs-deep-agents]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/agent-server-harness]]"
  - "[[concepts/agentic-engineering]]"
  - "[[comparisons/agent-frameworks]]"
status: active
confidence: high
---

# LangChain Deep Agents Deploy

## 쉽게 읽기

**비유**: [[tools/managed-agents]]가 "공유 주방"(빌려 쓰는 클라우드)이라면, **Deep Agents Deploy**는 "**오픈 키친 키트**"다 — 같은 수준의 인프라(샌드박스·메모리·프로토콜)를 **자기 건물에 직접 깔 수 있도록** 박스 안에 넣어서 준다. 모델은 Claude든 OpenAI든 골라 넣는다.

| 용어 | 풀이 |
|------|------|
| **deepagents** | LangChain의 오픈 소스 에이전트 하네스 라이브러리 |
| **AGENTS.md** | 에이전트 정체성·동작·지식 정의 파일 (markdown) |
| **SKILL.md** | 모듈식 도메인 지식, lazy 로드 |
| **Sandbox provider** | 격리 실행 환경 (Daytona / Runloop / Modal 등) |

## 한줄 설명

LangGraph 위에 만들어진 **오픈 소스 에이전트 하네스 + 배포 도구**. `AGENTS.md` + `SKILL.md` 정의를 `deepagents deploy` 한 줄로 띄우면 메모리·샌드박스·MCP+A2A+Agent Protocol 서버가 자동 구성. 모델 무관, MIT 라이선스, 셀프 호스팅 가능.

## 핵심 기능

- **에이전트 하네스**: planning tool + filesystem ops + code execution + subagent spawning
- **AGENTS.md / SKILL.md**: [[patterns/agents-md-skill-md|에이전트용 README + 스킬 매뉴얼]] 표준 채택
- **Skills 시스템**: progressive disclosure — startup엔 name·description만, 본문은 lazy 로드
- **Sandbox 추상화**: Daytona, Runloop, Modal 중 선택
- **A2A endpoint**: `/a2a/{assistant_id}` 자동 노출 ([[concepts/a2a-protocol]] 호환)
- **LangSmith 네이티브 통합**: 트레이싱·eval·deploy 한 자리
- **Subagent 백그라운드 실행** (2026-04-16 추가): 메인 컨텍스트 보존하며 병렬 작업

## 사용법 (최소 흐름)

```bash
# 스킬 설치
mkdir -p ~/.deepagents/agent/skills
cp -r examples/skills/web-research ~/.deepagents/agent/skills/
deepagents skills list

# 배포
deepagents deploy
# → MCP + A2A + Agent Protocol 엔드포인트가 떠 있음
```

`AGENTS.md`에 에이전트 정체성·동작 규칙, `skills/` 폴더에 도메인별 `SKILL.md`. 사용자 요청이 어떤 스킬과 매칭되면 본문을 동적으로 읽고 실행.

## 4월 2026 진화 흐름

| 날짜 | 발표 | 의미 |
|------|------|------|
| 2025-11-25 | Skills 통합 | Anthropic SKILL.md 포맷 채택 |
| 2026-04-16 | Subagent 백그라운드 실행 | 메인 컨텍스트 보존 |
| 2026-04-17 | Cisco × LangChain 파일럿 | Worker/Leader 제어 평면, 디버깅 93%↓ |
| 2026-04-20 | The runtime behind production deep agents (24min 심층) | production runtime 깊이 |
| 2026-04-29 | 모델별 튜닝 가이드 | 모델 무관성을 실제로 살리는 법 |

→ Deep Agents는 4월 한 달간 **가장 활발히 진화한 오픈 에이전트 하네스 라인**.

## 핵심 통찰 (Lance Martin)

> 일반화 에이전트(Claude Code, Manus)는 도구를 **놀랍도록 적게** 쓴다 — Claude Code 약 12개, Manus < 20개.  
> 비결은 도구가 아니라 **컴퓨터(bash + filesystem)** 를 쥐어 주는 것. 도구를 늘리는 대신 **filesystem 위 스크립트·instructions(=skills)** 로 행동을 offload.

→ 이것이 Deep Agents 설계 철학. [[concepts/harness-engineering]]의 "Guides는 도구 스키마이기도 하다"와 같은 결.

## 장점과 한계

| 장점 | 한계 |
|------|------|
| **모델 무관** (OpenAI/Anthropic/Google/Ollama) | 자체 인프라 운영 책임은 자기 몫 |
| MIT 라이선스, 셀프 호스팅 | Managed Agents 대비 **초기 셋업 더 무거움** |
| LangSmith 통합 트레이싱·eval | LangChain 생태계에 의존 |
| Sandbox provider 선택 자유 (Daytona/Runloop/Modal) | provider별 운영 노하우 필요 |
| AGENTS.md/SKILL.md 표준 채택 — 다른 에이전트와 호환 | research preview·alpha 기능들이 빠르게 변동 |

## 언제 쓰는가

**적합**:
- 다중 벤더 모델 병행 (예: 비싼 advisor에는 Claude, 메인은 GPT-4o-mini)
- on-prem / 정부 / 금융 — 클라우드 외부 데이터 안 됨
- 라우팅·메모리 정책 fine-grained 제어 필요
- LangChain·LangGraph·LangSmith 사용 중인 팀

**부적합**:
- 1인 창업 초기 — 며칠 단위 빠른 출시가 더 가치 있을 때 (그땐 [[tools/managed-agents]])
- 인프라 운영 자체에 시간 쓸 여력 없음
- 단일 Claude 모델만으로 충분

## 비교

[[comparisons/managed-vs-deep-agents]] — Anthropic Managed Agents와의 자세한 비교.

## 위치 (위키 스택 그림 안에서)

[[concepts/harness-engineering]]의 "에이전트 스택 4 레이어" 중 **upper-middle** (Managed Agents와 같은 자리). 차이는 lock-in 정도와 자유도.

## 관련 도구

- [[tools/managed-agents]] — 클라우드 매니지드 대안
- [[tools/claude-code]] — 같은 SKILL.md 포맷 사용 가능
- [[comparisons/agent-frameworks]] — LangGraph 자체와의 관계

## 참고 소스

- [LangChain Skills 채택 글 (Lance Martin, 2025-11-25)](raw/articles/2026-05-01-langchain-deep-agents-skills.md)
- [에이전트 스택 stratification 정리](raw/articles/2026-05-01-agent-stack-2026-layers.md)
- [Anthropic Agent Skills 표준](raw/articles/2026-05-01-anthropic-agent-skills.md)
- [LangGraph 1.0 stability](raw/articles/2026-05-01-langchain-langgraph-1-0.md)
- [Using skills with Deep Agents (LangChain)](https://www.langchain.com/blog/using-skills-with-deep-agents)
- [deepagents GitHub](https://github.com/langchain-ai/deepagents)
- [공식 docs (Skills)](https://docs.langchain.com/oss/python/deepagents/skills)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 5 (실전 보스전 — 에이전트 서비스 출시)
- **클리어 조건**: 로컬에서 `deepagents` 설치 → AGENTS.md + SKILL.md 1개 만들기 → 한 번 띄워 보기
- **다음 퀘스트**: [[tools/managed-agents]] 비교 → [[comparisons/managed-vs-deep-agents]]에서 결정
