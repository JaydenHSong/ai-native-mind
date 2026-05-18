---
source_url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
title: "Equipping agents for the real world with Agent Skills"
publisher: "Anthropic Engineering"
ingested: 2026-05-01
related_urls:
  - "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
  - "https://github.com/anthropics/skills"
  - "https://agentskills.io/home"
  - "https://thenewstack.io/agent-skills-anthropics-next-bid-to-define-ai-standards/"
---

# Anthropic Agent Skills — SKILL.md 표준

> 출처: [Anthropic Engineering — Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) · [공식 docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) · [agentskills.io](https://agentskills.io/home)

## 한 줄 요약

**Agent Skill = `SKILL.md` 1개를 가진 폴더**. 에이전트가 컨텍스트를 다 깔아두지 않고, **이름·설명만 미리 알고 필요할 때 본문을 동적 로딩**하는 패턴(progressive disclosure). Anthropic이 이걸 **MCP에 이은 두 번째 오픈 표준**으로 밀고 있고, LangChain의 Deep Agents도 이미 채택. The New Stack은 이를 "Agent Skills: Anthropic's Next Bid to Define AI Standards"라고 표현.

## 구조

```
my-skill/
  SKILL.md          ← YAML frontmatter (name, description) + Markdown 본문
  scripts/...        ← 보조 스크립트
  references/...     ← 참고 자료
```

`SKILL.md`는 반드시 YAML frontmatter에 `name`과 `description` (필수). 에이전트는 startup에 **모든 skill의 name·description만 시스템 프롬프트에 사전 로드** → Claude가 스킬을 언제 쓸지 판단하는 **첫 단계 progressive disclosure** 정보. 본문은 호출 시점에만 읽음.

## Tools와의 차이 (Lance Martin 정리, deepagents 채택 이유)

| | 전통적 Tools | Skills |
|--|--------------|--------|
| 컨텍스트 점유 | 모든 정의를 **시작부터 깔아둠** | name·description만 사전 로드, 본문은 lazy |
| 토큰 비용 | 도구 많아질수록 bloat | 사용한 스킬만 |
| 인지 부하 | 겹치는 도구 → context confusion 위험 | 작은 atomic 도구 + 많은 스킬 |
| 학습 곡선 | 도구 스키마 학습 필요 | Markdown으로 가르침 |

**핵심 통찰** (Lance Martin, LangChain): 일반화 에이전트(Claude Code, Manus)는 도구를 **놀랍도록 적게** 쓴다 — Claude Code는 약 12개, Manus는 20개 미만. **컴퓨터(bash + filesystem)** 만 쥐어 주면 사람처럼 다양한 행동을 한다. 도구를 늘리는 대신 **filesystem 위 스크립트·instructions**(=skills)로 행동을 offload하는 전략.

## Best Practice (Anthropic 공식)

- **Eval부터** 시작: 대표 태스크에서 에이전트가 어디서 막히는지 관찰 → 그 gap을 채우는 스킬을 incremental하게 추가
- **`SKILL.md`가 비대해지면** 분리해 reference. 상호 배타적이거나 드물게 같이 쓰이는 컨텍스트는 **경로를 분리**하면 토큰 절감
- 스킬은 **continuous learning**의 한 걸음 — Anthropic의 Barry Zhang은 "에이전트가 새 태스크를 만나면 스스로 새 스킬을 생성"하는 방향을 시사

## 지원 범위 (2026)

- Claude.ai, Claude Code, Claude Agent SDK, Claude Developer Platform 모두 지원
- [agentskills.io](https://agentskills.io/home) 가 오픈 사양 사이트
- [anthropics/skills GitHub repo](https://github.com/anthropics/skills) 에 공식 스킬 모음
- LangChain `deepagents-CLI`도 같은 포맷 채택 → **표준화 신호** (한 명세로 여러 에이전트 호환)
- 커뮤니티 마켓플레이스 [skillsmp.com](https://skillsmp.com/) 등장

## 위키 매핑

- 위키의 **CLAUDE.md**(`patterns/claude-md-guide`)·**Cowork SKILL.md**(우리가 이미 여러 도메인 스킬 사용 중)와 같은 그림. 새 페이지 `patterns/agents-md-skill-md` 후보 — 두 파일 형식의 공식 스펙·우리가 활용 중인 사례 정리
- 보강: [[patterns/claude-md-guide]] (CLAUDE.md는 frontmatter는 없지만 같은 "에이전트용 컨텍스트 파일" 계열), [[concepts/harness-engineering]] (도구·스킬도 가이드의 일부)

confidence: high (Anthropic 공식 + LangChain 공식 + The New Stack 확인)
