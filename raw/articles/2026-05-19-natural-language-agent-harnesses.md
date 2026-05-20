---
title: "Natural-Language Agent Harnesses (arXiv 2603.25723)"
source_url: "https://arxiv.org/abs/2603.25723"
source_type: "arxiv-paper"
authors: ["Pan, Linyue", "Zou, Lexiao", "Guo, Shuo", "Ni, Jingchen", "Zheng, Hai-Tao"]
published: 2026-03-26
fetched: 2026-05-19
tags: [harness-engineering, natural-language, claude-md, agents-md, runtime-policy, multi-agent, computer-use, coding, arxiv]
status: ingested
---

# Natural-Language Agent Harnesses

> arXiv:2603.25723, v2 2026-05-18. 하네스를 controller code에 숨기지 말고 **실행 가능한 자연어 문서**로 분리하자는 제안. NLAH 문서와 Intelligent Harness Runtime(IHR) 조합으로 coding·terminal-use·computer-use benchmark를 비교한다.

## 메타

- **Title**: Natural-Language Agent Harnesses
- **Authors**: Pan, Linyue · Zou, Lexiao · Guo, Shuo · Ni, Jingchen · Zheng, Hai-Tao
- **arXiv**: <https://arxiv.org/abs/2603.25723> | HTML: <https://arxiv.org/html/2603.25723v2>
- **Focus**: natural-language harness policy, shared runtime, file-backed state, verifier modules, policy portability

## 한 줄 요약

**"하네스의 재사용 가능한 핵심은 코드가 아니라 정책이다. 그 정책을 자연어 문서로 분리하면, 비교·이식·ablation이 쉬워진다."**

## 핵심 주장

### 1) 하네스 로직이 controller code에 묻히면 비교와 이식이 어렵다

논문이 지적하는 문제:

- harness policy가 code와 강하게 결합됨
- 어떤 규칙이 성능에 기여했는지 **ablation** 하기 어려움
- 다른 runtime이나 benchmark로 **이식**하기 어려움

### 2) NLAH는 실행 가능한 자연어 객체, IHR은 공용 런타임이다

핵심 구성:

- **NLAH**: run-level harness policy를 적는 자연어 문서
- **IHR (Intelligent Harness Runtime)**: 이 문서를 읽어
  - agent calls
  - handoffs
  - state updates
  - validation gates
  - artifact contracts
  로 실행하는 shared runtime

즉 코드와 문서를 경쟁시키는 게 아니라, **정책은 문서화하고 실행은 공용 런타임이 담당**하게 한다.

### 3) 성능은 code harness와 대체로 비슷하면서 정책 표면은 훨씬 짧다

본문 기준 핵심 결과:

- coding / terminal-use / computer-use benchmark에서 **comparable task outcomes**
- **OSWorld**: NLAH **46.3** vs code harness **47.1**
- static harness policy 길이:
  - **SWE Verified Live-SWE**: code **60.10k tokens / 68 files** vs NLAH **2.90k / 3 files**
  - **TB2 MHTBA**: code **10.50k / 3 files** vs NLAH **0.80k / 1 file**
  - **OSWorld SeeAct**: code **47.50k / 5 files** vs NLAH **1.40k / 1 file**

→ 점수는 조금 오르내려도, 하네스 정책 표면을 **훨씬 작은 문서**로 드러낼 수 있다는 것이 논문의 강한 포인트다.

### 4) 무엇이 실제로 먹히는지 ablation 가능해진다

본문의 module 결과 요약:

- **file-backed state**: SWE **73.0 → 75.6**, OSWorld **44.4 → 58.3**
- **verifier**: SWE **+0.2**, OSWorld **+8.4**
- **self-evolution**: SWE **78.8**, OSWorld **52.8**
- **context compression**: SWE **73.0 → 72.0**, OSWorld **44.4 → 36.1**

즉 자연어 하네스의 장점은 "문서로 썼다" 자체보다, **모듈을 명시적으로 켜고 끄며 비교할 수 있다**는 데 있다.

## 실무적 시사점

- `CLAUDE.md`, `AGENTS.md`, `SKILL.md`는 단순 메모가 아니라 **실행 정책 표면**으로 다뤄야 한다
- 하네스 정책을 코드 밖 문서로 빼면 benchmark 간 **portability** 와 **reviewability** 가 좋아진다
- 다만 문서만으로 충분한 것이 아니라, 이를 일관되게 해석하는 **shared runtime charter** 가 필요하다

## 기존 지식과의 연결

- [[concepts/harness-engineering]] — harness를 incidental glue가 아니라 **scientific representation object** 로 보게 만드는 자료
- [[patterns/claude-md-guide]] — CLAUDE.md / AGENTS.md를 실행 정책으로 보는 현재 위키의 방향을 한 단계 일반화
- [[concepts/context-engineering]] — "무엇을 보여줄까"에서 더 나아가 **정책 자체를 어떻게 외부화할까** 질문으로 확장
- [[patterns/llm-wiki]] — 자연어 문서가 단순 기록이 아니라 **운영 객체**가 될 수 있다는 점에서 위키 패턴과도 닿음

## 남는 질문 / 한계

- comparable outcome은 강점이지만, 특정 benchmark에서는 code harness가 여전히 더 좋다
- shared runtime가 충분히 강하지 않으면 자연어 정책은 다시 모호성 비용을 낳을 수 있다
- AGENTS.md / CLAUDE.md를 실제 production harness charter로 승격하려면 schema와 tooling이 더 필요하다
