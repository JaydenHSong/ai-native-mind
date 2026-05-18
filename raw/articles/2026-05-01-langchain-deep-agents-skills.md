---
source_url: "https://www.langchain.com/blog/using-skills-with-deep-agents"
title: "Using skills with Deep Agents"
author: "Lance Martin (LangChain)"
published: 2025-11-25
ingested: 2026-05-01
related_urls:
  - "https://github.com/langchain-ai/deepagents"
  - "https://docs.langchain.com/oss/python/deepagents/skills"
  - "https://blog.langchain.com/deep-agents-deploy-an-open-alternative-to-claude-managed-agents/"
---

# LangChain Deep Agents + Skills 채택

> 출처: [LangChain Blog — Lance Martin (2025-11-25)](https://www.langchain.com/blog/using-skills-with-deep-agents) · [deepagents GitHub](https://github.com/langchain-ai/deepagents) · [공식 docs (Skills)](https://docs.langchain.com/oss/python/deepagents/skills)

## 한 줄 요약

LangChain의 **deepagents** — 오픈소스 에이전트 하네스(planning tool, filesystem 백엔드, subagent spawning) — 가 **Anthropic의 SKILL.md 포맷을 그대로 채택**. `deepagents-CLI`로 스킬 폴더만 복사하면 어떤 에이전트든 같은 스킬을 쓸 수 있다. 이는 **Claude Managed Agents의 오픈 대안인 Deep Agents Deploy**와 짝을 이루는 흐름.

## Deep Agents란

- **에이전트 하네스 라이브러리**: planning tool + filesystem ops + code execution + subagent spawning
- **개방형**(MIT, 모델 무관) — Claude Managed Agents와 다르게 어떤 모델로든 돌고, 자체 호스팅 가능
- 핵심 통찰: 일반화 에이전트가 도구를 적게 쓰는 게 더 강한 이유 (Manus·Claude Code 패턴) → **filesystem + bash + scripts**로 다양한 행동을 풀자

## Skills 통합 흐름

```bash
mkdir -p ~/.deepagents/agent/skills
cp -r examples/skills/web-research ~/.deepagents/agent/skills/
deepagents skills list   # 등록된 스킬 확인
```

스킬은 startup에 자동 로드되며(이름·설명만), 사용자 요청이 스킬과 매칭되면 본문을 읽고 실행. **MCP의 도구 정의처럼 스키마를 별도로 만들 필요 없음** — 그냥 markdown 파일.

## Skills의 두 가지 이점 (Anthropic 인용)

1. **토큰 효율**: 진보적 노출 → 시작 시점엔 frontmatter만, 필요할 때만 본문 로드. 도구가 많아질 때의 context bloat 회피.
2. **인지 부하 감소**: 겹치는 도구 여러 개를 navigate하는 대신 작은 atomic 도구 + skills 조합. **context confusion** 회피.

## Deep Agents 후속 흐름 (백필)

발표 이후 LangChain이 줄지어 출시한 글(2026-04 집중):

| 날짜 | 글 | 핵심 |
|------|----|------|
| 2026-04-16 | [Running Subagents in the Background — Hunter Lovell, Colin Francis](https://www.langchain.com/blog) | subagent를 background에서 돌려 메인 컨텍스트를 보존 |
| 2026-04-17 | [Agentic Engineering — Cisco × LangChain (오늘 ingest 완료)](https://www.langchain.com/blog/agentic-engineering-redefining-software-engineering) | Worker/Leader 제어 평면 |
| 2026-04-20 | [The runtime behind production deep agents — Sydney Runkle, Vivek Trivedy (24min)](https://www.langchain.com/blog) | deepagents의 production runtime 깊이 분석 |
| 2026-04-29 | [Tuning Deep Agents to Work Well with Different Models — Vivek Trivedy, Mason Daugherty](https://www.langchain.com/blog) | 모델 무관성을 실제로 살리는 튜닝 가이드 |

→ **Deep Agents는 4월 한 달 동안 가장 활발히 진화한 오픈 에이전트 하네스 라인**.

## Managed Agents vs Deep Agents Deploy 핵심 비교 메모

| 축 | Claude Managed Agents | LangChain Deep Agents Deploy |
|----|----------------------|-----------------------------|
| 모델 | Claude 전용 (lock-in) | 모델 무관 (OpenAI/Anthropic/Google/Ollama) |
| 호스팅 | Anthropic 클라우드만 | self-host 가능, sandbox 추상화 (Daytona/Runloop/Modal) |
| 가격 | $0.08/세션-시간 + 토큰 | 인프라 자체 부담 (모델 비용만) |
| 라이선스 | 클로즈드 | MIT |
| 자격증명 격리 | Brain/Hands 분리 디폴트 | sandbox provider 추상화로 디폴트 |
| 디버깅 가시성 | Claude Console 통합 트레이싱 | LangSmith 네이티브 통합 |
| 적합 시점 | 빠른 출시·운영 부담 ↓ | 다중 벤더·온프렘·자유도 |

## 위키 매핑

- 새 페이지 후보: `tools/deep-agents-deploy` (LangChain Deep Agents 도구 페이지) — 본 raw가 1차 출처
- 새 페이지 후보: `comparisons/managed-vs-deep-agents`
- 보강: [[concepts/agentic-engineering]] (Worker/Leader가 Deep Agents 위에서 돈다는 점), [[concepts/harness-engineering]] (Deep Agents = 오픈 하네스의 production-ready 사례)

confidence: high (LangChain 공식 + Anthropic 공식 교차)
