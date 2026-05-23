---
title: "Harness Engineering"
category: concepts
tags: [harness-engineering, ai-agent, infrastructure, orchestration, verification-gated, grounding, runtime-substrate, 11-responsibilities, evaluation-hacking, runtime-interface, trajectory-audit, natural-language-harness, trace-diagnostics, corpus-level-observability, skill-governance, library-drift, code-as-harness, shared-artifact]
created: 2026-04-09
updated: 2026-05-22
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/notes/2026-04-12-harness-engineering-deep-dive.md"
  - "raw/notes/2026-04-13-harness-casebook-anthropic-academy.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-02-google-scaling-agent-systems.md"
  - "raw/articles/2026-05-02-anthropic-three-agent-harness-infoq.md"
  - "raw/articles/2026-05-02-humanlayer-skill-issue-harness.md"
  - "raw/articles/2026-05-06-anthropic-agentic-coding-trends-report.md"
  - "raw/articles/2026-05-06-last-harness-meta-evolution.md"
  - "raw/articles/2026-05-06-agentic-harness-engineering-observability.md"
  - "raw/articles/2026-05-06-pm-architectural-decisions-agent-harnesses.md"
  - "raw/articles/2026-05-06-pm-caaf-deterministic-harness.md"
  - "raw/articles/2026-05-06-pm-meta-harness-stanford.md"
  - "raw/articles/2026-05-13-affordance-agent-harness-verification-gated.md"
  - "raw/articles/2026-05-13-gsar-typed-grounding-multiagent.md"
  - "raw/articles/2026-05-13-verify-before-you-fix-execution-grounding.md"
  - "raw/articles/2026-05-14-ai-harness-engineering-runtime-substrate.md"
  - "raw/articles/2026-05-18-effective-harness-engineering-algorithm-discovery.md"
  - "raw/articles/2026-05-18-skillsmith-boundary-guided-runtime-interfaces.md"
  - "raw/articles/2026-05-19-harnessaudit-trajectory-safety.md"
  - "raw/articles/2026-05-19-natural-language-agent-harnesses.md"
  - "raw/articles/2026-05-21-insights-generator-trace-diagnostics.md"
  - "raw/articles/2026-05-21-library-drift-self-evolving-skill-libraries.md"
  - "raw/articles/2026-05-22-code-as-agent-harness.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/prompt-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/agentic-engineering]]"
  - "[[tools/claude-code]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/harness-building-blocks]]"
  - "[[tools/vercel-workflow]]"
  - "[[concepts/gen-ai-observability]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[journal/2026-04-12]]"
  - "[[patterns/harness-engineering-casebook]]"
status: active
confidence: high
---

# Harness Engineering

## 한줄 정의

AI 에이전트를 감싸는 완전한 인프라(제약, 피드백 루프, 오케스트레이션, 제어 메커니즘)를 설계하는 기술. **Agent = Model + Harness**.

## 먼저 이렇게 생각하면 쉬움

**말(M)** 은 똑똑해졌지만, 혼자 두면 위험하게 달릴 수 있다. **하네스(Harness)** 는 말에 채우는 **안장·고삐·목줄** 같은 것이다. “어디까지 달릴지, 어디서 멈출지, 누가 감독할지”를 **규칙과 도구와 자동 검사**로 정해 주는 전부가 하네스다.  
여기서 **모델(Model)** 은 말의 두뇌(생각·말하기)이고, **하네스**는 그 말이 **실제 일(코드·파일·서버)** 을 할 때 필요한 **주변 장치**다.

## 이 페이지에서 나오는 말 (짧게)

| 말 | 쉬운 뜻 |
|----|--------|
| **Guides (가이드)** | 일하기 **전에** 미리 적어 두는 규칙·체크리스트 (예: 숙제 형식, 코딩 규칙). |
| **Sensors (센서)** | 일을 한 **뒤에** “맞았나?”를 재는 장치 (예: 맞춤법 검사, 자동 채점). |
| **피드포워드** | 미리 막는 것 (가이드). |
| **피드백** | 한 뒤 고치게 하는 것 (센서). |
| **오케스트레이션** | 여러 단계·여러 AI를 **순서와 역할**에 맞게 지휘하는 것. |
| **프로덕션** | 진짜 사용자에게 나가는 **실서비스** 환경. |

## 핵심 내용

### 3세대 진화에서의 위치

```
1세대: Prompt Engineering  — "무엇을 질문하는가"     (2022-2024)
2세대: Context Engineering — "무엇을 보여주는가"     (2025)
3세대: Harness Engineering — "전체가 어떻게 작동하는가" (2026)
```

하네스가 [[concepts/context-engineering|Context Engineering]]을 포함하고, 컨텍스트가 [[concepts/prompt-engineering|Prompt Engineering]]을 포함한다. 각 세대가 해결하는 문제가 완전히 다르다.  
비유하면: 1세대는 “질문 문장 잘 쓰기”, 2세대는 “책상에 올릴 자료 골라 주기”, 3세대는 “**전체 숙제 과정이 안 틀어지게** 시스템 짜기”에 가깝다.

### 왜 Harness가 필요해졌나

> "에이전트가 유용할 만큼 좋아졌지만, 혼자 믿을 만큼 신뢰할 수는 없다"

- AI 에이전트 실패율 약 20% — **다섯 번 중 한 번 꼴**로 기대와 다르게 동작할 수 있다는 뜻이다.  
- MIT 연구: 대기업 GenAI 파일럿의 ~95%가 측정 가능한 수익 미달성 — “도입했다”와 “돈이 났다”는 **다른 이야기**라는 경고. 숫자는 시대·정의에 따라 달라질 수 있으니, **‘모델만 사면 끝’이 아니다’** 정도로 이해하면 된다.  
- 모델만으로는 프로덕션 수준의 신뢰성 확보 불가 — **똑똑한 두뇌 한 덩어리**만으로는 은행 앱 같은 걸 못 만든다는 말에 가깝다.

### 3대 구성요소 (Martin Fowler 정의)

#### 1. Guides (가이드) — 피드포워드 제어
에이전트가 **행동하기 전에** 조향하는 제어. “시작하기 전에 길 알려 주기”다.
- 코딩 컨벤션, 구조화된 프롬프트, 부트스트랩 지시
- 우리의 예: `CLAUDE.md`, PDCA Plan/Design 문서

#### 2. Sensors (센서) — 피드백 제어
에이전트가 **행동한 후에** 문제를 잡는 제어. “제출한 숙제를 채점하기”에 가깝다.
- 린터, 타입 체커, 테스트 스위트
- 우리의 예: Gap Analysis, Lint 워크플로우

#### 3. 제어의 두 종류

| 종류 | 특징 | 예시 |
|------|------|------|
| **Computational** | 매번 같은 규칙으로 판정, 빠르고 싸다 | 린터, 타입체크, frontmatter 검증 |
| **Inferential** | AI가 “괜찮아 보인다”고 판단, 느리고 비싸다 | 코드 리뷰 에이전트, Gap Analysis |

**쉽게**: 계산기로 틀린지 맞는지 알 수 있으면 **Computational**이다. 문맥을 읽어야 하면 **Inferential**이다.

### 심화: 루프·인간·정책 층

하네스를 “프롬프트 몇 줄”이 아니라 **시간이 흐르는 루프**로 보면 설계가 선명해진다.

| 축 | 질문 |
|----|------|
| **폐쇄 루프** | 센서가 잡은 실패가 **가이드**(린트 규칙, 템플릿, 도구 스키마)로 다시 인코딩되는가? 모델을 갈아엎기 전에 하네스를 고칠 수 있는가? (비유: 같은 실수를 반복하면 **규칙을 고쳐서** 다음엔 안 나게 하기.) |
| **인간의 위치** | *In the loop*(매 단계 승인) / *On the loop*(루프·정책 유지보수) / *Out*(완전 자동) 중 어디를 목표로 하는가? Thoughtworks 글 [Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)에서 논의된다. **In**은 “줄마다 같이 보기”, **On**은 “규칙·자동채점기를 손보는 감독”, **Out**은 “거의 맡기기”로 이해하면 된다. |
| **Harnessability** | 코드베이스·아키텍처가 테스트·모듈 경계·도구 접근 측면에서 **하네스를 얹기 쉬운가**. 레거시는 가이드만으로는 부족하고 센서·리팩터링 투자가 필요하다. (비유: **방이 지저분하면** 청소 로봇만으로는 한계가 있다. 정리가 먼저 필요할 수 있다.) |
| **정책 층** | *Norms*(팀이 선호하는 방식)과 *Guardrails*(절대 금지)를 도구·프롬프트·CI에 나누어 싣는다. 둘을 한 덩어리 프롬프트로만 섞으면 위반 탐지가 어렵다. (비유: **교칙**과 **절대 하면 안 되는 일**을 한 문단에 섞어 쓰면, 나중에 누가 어겼는지 찾기 어렵다.) |

**도구 = 가이드의 일부**: Anthropic [Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents)는 스키마·설명·에러 메시지가 곧 **피드포워드 하네스**임을 강조한다. [Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use)는 도구가 많아질 때의 **도구 하네스**(검색·프로그래매틱 호출)로 이어진다.

### Humans: in / on / out of the loop (Fowler)

Martin Fowler의 [Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)는 **why loop**(아이디어↔결과)와 **how loop**(구현 과정)를 나누고, 인간이 최저층 코드만 줄단위로 검토하는 **in the loop**는 병목이 될 수 있다고 본다. 대안은 에이전트가 스스로 품질을 재게 하고, 인간은 **on the loop**에서 **하네스**(스펙·검사·워크플로)를 설계·개선하는 것 — 산출물이 마음에 안 들면 산출물을 직접 고치기보다 **하네스를 고친다**. “에이전트가 하네스를 개선 제안까지 하는” 단계를 **agentic flywheel**로 묶어 설명한다.

**아주 짧게 다시 말하면**: “AI가 쓴 글자 하나하나를 사람이 다 고친다”가 아니라, “**AI가 잘하도록 게임 규칙과 심판을 계속 다듬는다**”에 가깝다.

정리 노트: [[journal/2026-04-12]].

### Claude Code의 Harness (소스코드 유출로 밝혀진 구조)

2026년 3월 Anthropic이 실수로 Claude Code 전체 소스를 공개하면서, 실제 Harness 구조가 드러남:

- **500,000줄** TypeScript, 1,900개 파일
- **~40개 권한 제어 도구**: 파일, bash, 웹, LSP
- **46,000줄 쿼리 엔진**: LLM API, 토큰 캐싱, 컨텍스트 관리, 재시도
- **3계층 메모리**: "context entropy" — 말이 길어질수록 **핵심을 잊어버리는 현상**을 줄이기 위한 기억 장치 설계

### OpenAI Codex의 Harness Engineering 사례

2026년 2월 OpenAI가 내부 소프트웨어 제품을 Codex로 구축:
- **수동 코드 0줄** — 모든 코드를 에이전트가 작성
- 3명 엔지니어 × 5개월 × ~1,500 PR × ~100만 줄
- 핵심은 코드를 쓴 게 아니라 **Harness를 설계**한 것

### 2026-04 스택 stratification — 어디 레이어에 살 것인가

[Hieu TRAN, "The Agent Stack in 2026" (dev.to, 2026-04-14)](https://dev.to/hieu_tran_80c388add84c060/the-agent-stack-in-2026-layers-harnesses-and-where-you-actually-build-2e5g) 정리에 따르면, 2026년 4월 [Anthropic Managed Agents](https://www.anthropic.com/engineering/managed-agents)와 [LangChain Deep Agents Deploy](https://blog.langchain.com/deep-agents-deploy-an-open-alternative-to-claude-managed-agents/) 출시를 계기로 에이전트 스택이 4 레이어 스펙트럼으로 stratify되었다.

| 레이어 | 무엇을 하는가 | 도구 |
|--------|-------------|------|
| Low end | 코드로 직접 오케스트레이션·툴 실행·상태·재시도 | LangGraph, Claude Agent SDK |
| Middle | 프레임워크가 plumbing 처리 | LangChain agents |
| **Upper-middle** | 플랫폼이 배포·런타임 소유(메모리, 샌드박스, 자격증명 격리, 프로토콜) | **Managed Agents, Deep Agents Deploy** |
| High end | 시스템 프롬프트 + 도구만, 인프라 없음 | 잘 프롬프트된 모델 |

핵심 메시지: **에이전트 정체성·능력은 이식 가능한 정의 레이어로(`AGENTS.md`, `SKILL.md`), 실행·메모리·보안·배포는 그 아래 인프라로** 분리하라. Managed Agents의 **Brain/Hands/Session** 분리(자격증명 0인 샌드박스 + append-only 세션 로그)가 같은 원칙을 인프라 디폴트로 만든 사례.

또한 Anthropic의 [Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps)는 Planner/Generator/Evaluator 3-에이전트 하네스를 만들었지만, Claude 4.5→4.6로 모델이 좋아지자 **하네스를 단순화했다**(sprint decomposition 제거, evaluator를 per-sprint→end-of-run으로). 시사점: **하네스 컴포넌트는 모델이 못 하는 것에 대한 가정의 인코딩**이므로, 모델이 발전하면 그 가정을 stress-test하라. "find the simplest solution possible, and only increase complexity when needed."

### 보안 교훈 — ClawHavoc (2026-02)

같은 글이 보고하는 OpenClaw의 ClawHub(커뮤니티 스킬 레지스트리) 공급망 공격: 12개 publisher 계정 침해, 1,184개 악성 스킬 배포. Snyk ToxicSkills 보고서는 ClawHub 스킬 36.8%가 어떤 형태든 취약, 13.4%는 critical로 평가. 한 번 에이전트 컨텍스트에 로드되면 자격증명 유출·도구 호출 리다이렉트·추론 오염 가능.

교훈: 컨텍스트 레벨 에이전트 정의(개념 자체)는 위험한 게 아니다. 위험한 것은 **신뢰할 수 없는 publisher의 스킬을 자격증명 접근 가능한 실행 컨텍스트에 로드하는 것**이다. 즉 하네스 설계에서 **Brain/Hands 자격증명 격리 + 스킬 supply chain 신뢰 모델 + 감사 인프라** 셋이 한 묶음으로 가야 한다.

### 2026-05 보강 — 정량 근거·3-에이전트 분리·6 레버

세 개의 외부 출처를 같은 그림 위에 얹는다.

**(1) Google Research, [Towards a Science of Scaling Agent Systems (2026-01)](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/) / [arXiv 2512.08296](https://arxiv.org/abs/2512.08296)** — 5 아키텍처 × 3 모델 패밀리 × 4 벤치마크 = **180 컨피그** 통제 실험. 결과는 **alignment principle**: 코디네이션 구조를 태스크 속성에 맞춰라.

| 신호 | 수치 |
|------|------|
| Centralized vs SAS, parallelizable 태스크(Finance-Agent) | **+80.9%** |
| 모든 멀티 에이전트 변형, 순차 태스크(PlanCraft) | **-39 ~ -70%** |
| Independent (무통신 병렬) 오류 증폭 | **17.2x** |
| Centralized (오케스트레이터) 오류 증폭 | **4.4x** |
| 예측 모델이 미관찰 태스크에서 최적 아키텍처 적중 | **87%** |

**하네스 디자인 함의**: 오케스트레이터는 "성능 booster"가 아니라 **validation bottleneck = 안전 컴포넌트**다. 도구가 16개를 넘으면 코디네이션 세금이 비례 이상으로 커지므로, 도구 밀도가 높은 태스크에서 무지성 멀티 에이전트 분해는 자해다.

**(2) [Anthropic Harness Design (2026-04, InfoQ 정리)](https://www.infoq.com/news/2026/04/anthropic-three-agent-harness-ai/)** — 장시간(수 시간) 자율 코딩에서 **Planner / Generator / Evaluator 3-에이전트 분리**. 핵심 레버는 **컨텍스트 리셋 + 구조화 핸드오프 아티팩트**(JSON feature spec, init script, commit-by-commit progress)와 **별도 evaluator로 self-eval 양성 편향 차단**. Frontend 평가는 Playwright MCP로 라이브 페이지를 직접 조작하며 4축(design quality / originality / craft / functionality)으로 채점.

> "Separating the agent doing the work from the agent judging it" — Prithvi Rajasekaran (Anthropic Labs)

**(3) [HumanLayer — Skill Issue: Harness Engineering for Coding Agents (2026-03-12)](https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents)** — 1년 운영 경험을 6 레버로 정리.

| 레버 | 한 줄 처방 |
|------|------------|
| CLAUDE.md / AGENTS.md | 60줄 미만, less is more, auto-generate 금지, progressive disclosure (ETH Zurich 138 agentfile 연구가 LLM 생성 파일은 성능 저하 +20% 비용 확인) |
| MCP 서버 | 도구가 도구 설명을 시스템 프롬프트에 주입함 — 학습 데이터에 잘 표현된 CLI(GitHub/Docker/DB)는 MCP 대신 CLI |
| Skills | 필요할 때만 SKILL.md 로드(progressive disclosure). 레지스트리는 npm install처럼 의심하라 (ClawHavoc 인용) |
| Sub-agents | "frontend/backend 분류"는 안 먹힌다. 먹히는 건 **context firewall** — 부모는 프롬프트와 최종 결과만 본다 |
| Hooks | git hooks의 에이전트 버전. **성공은 침묵, 실패만 verbose**, exit 2로 하네스가 다시 깨움 |
| Back-pressure | 자기 검증 메커니즘(typecheck/test/playwright)을 **컨텍스트 효율적**으로 — 통과 4,000줄을 컨텍스트에 쏟아붓지 마라 |

**세 출처가 한 곡으로 모이는 지점**: 모델이 똑똑해도 비결정성이 사라지지는 않는다(HumanLayer). 그래서 멀티 에이전트는 **태스크 속성에 정렬**시켜야 하고(Google), 장시간 세션에서는 **생성과 평가를 분리**해야 한다(Anthropic). 셋 다 결국 [[concepts/context-engineering|컨텍스트 엔지니어링]]의 부분집합으로 환원된다.

### 2026-05-06 보강 — 자동 하네스 진화 (Self-Evolving Harness)

2026년 4월 후반 arXiv에 같은 시점 두 논문이 올라오면서, 하네스 엔지니어링은 **사람의 수공예**에서 **자동 진화 + 관측 가드레일**로 한 단계 더 추상화된다. Anthropic의 [2026 Agentic Coding Trends Report](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)도 같은 방향을 1년 예측의 첫 번째·두 번째 우선순위로 못박는다.

**(1) Seong et al., ["The Last Harness You'll Ever Build" (arXiv 2604.21003, 2026-04-22)](https://arxiv.org/abs/2604.21003)** — **2-Level 메타 진화**.

| 레벨 | 내용 |
|------|------|
| L1: Harness Evolution Loop | Worker `W_H` (실행) + Evaluator `V` (실패 진단·스코어) + Evolution Agent `E` (history 보고 `H` 수정) — 단일 task의 harness 최적화 |
| L2: Meta-Evolution Loop | 진화 프로토콜 `Λ = (W_H, H^(0), V, E)` 자체를 다양한 task에 걸쳐 학습 → `Λ^(best)` |

핵심 약속: **새 도메인에 적응할 때 사람의 harness engineering이 0**. 메타-러닝과의 형식적 대응을 명시.

**(2) ["Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses" (arXiv 2604.25850)](https://arxiv.org/abs/2604.25850)** — **3 Observability Pillars**가 자동 진화를 trial-and-error 붕괴에서 구한다.

| 기둥 | 무엇을 관측하나 | 진화 루프에 주는 것 |
|------|-----------------|---------------------|
| Component observability | 모든 편집 가능 컴포넌트의 file-level 표현 | 액션 스페이스가 explicit·revertible |
| Experience observability | 수백만 raw trajectory 토큰을 layered drill-down evidence corpus로 distill | evolving agent가 실제 소비 가능한 신호 |
| Decision observability | 모든 edit ↔ self-declared prediction → 다음 라운드 결과로 검증 | 모든 edit이 falsifiable contract |

**정량**: Terminal-Bench 2 pass@1 **69.7% → 77.0%** (10 iterations), 사람이 만든 SOTA harness Codex-CLI(71.9%)와 self-evolving baseline ACE/TF-GRPO 모두 능가.

**(3) [Anthropic 2026 Agentic Coding Trends Report (2026-05)](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)** — 8 트렌드 중 **Trend 2(단일 → 조율된 팀)**, **Trend 3(장기 실행 에이전트 days/weeks)**, **Trend 4(human oversight 협업으로 스케일)**가 앞 두 논문의 **시장 측 등치**. 60% 사용 / 0–20% fully delegate 격차는 자동 진화가 옳다는 정량 신호이자, 사람이 빠질 자리가 아니라는 경고.

**세 출처를 같은 그림으로**:

```
H 자체가 변수다  ─→  Last Harness:    H를 진화시키는 Λ
                  AHE:             Λ가 trial-and-error로 안 빠지는 3 pillar
                  Anthropic 2026:  시장은 이 방향으로 1년 더 간다
```

**Jayden 위키 함의 (3가지 즉효 ROI)**:

1. **`patterns/harness-engineering-casebook`의 도메인 매트릭스를 Λ 학습 데이터처럼 다루기** — 케이스별 Guides/Sensors/HITL 차이를 component·decision observability 관점에서 다시 정리.
2. **Sensors = component observability + decision observability**: Lint 워크플로우의 self-declared prediction(이 edit이 무엇을 고칠 것이라 주장하는가) 필드를 ingest log에 추가.
3. **하네스 component를 file-level로 분리 유지**: CLAUDE.md, templates/, 프롬프트 스니펫, eval 룰을 한 큰 문서가 아니라 작은 파일로 — revertible성과 attribution이 살아남는다.

### 2026-05-06 PM 보강 — 하네스 연구의 세 좌표축 (Descriptive · Prescriptive · Tooling)

오전(자동 진화 + 관측)에 이어 오후 PM 인제스트는 **자동 진화 외부**의 세 좌표축을 채운다 — 같은 시점에 arXiv에 같이 떠 있던 세 논문이 서로 다른 질문에 답한다.

| 좌표축 | 질문 | 논문 |
|--------|------|------|
| **Descriptive (지도 그리기)** | 실제 70개 프로젝트는 어떻게 생겼나? | [Wei, "Architectural Design Decisions in AI Agent Harnesses" (arXiv 2604.18071, 2026-04-20)](https://arxiv.org/abs/2604.18071) |
| **Prescriptive (강제하기)** | 안전-크리티컬에서 LLM의 sycophantic compliance를 어떻게 막나? | [Zhang, "Harness as an Asset: CAAF" (arXiv 2604.17025, 2026-04-18)](https://arxiv.org/abs/2604.17025) |
| **Tooling (자동화 구현)** | 자동 하네스 진화를 실제 코드로 어떻게 돌리나? | [Lee et al., "Meta-Harness" (arXiv 2603.28052, 2026-03-30, Stanford·KRAFTON·MIT)](https://arxiv.org/abs/2603.28052) |

**(1) 5 Design Dimensions (Descriptive, n=70)** — Wei가 제안하는 **subagent architecture / context management / tool systems / safety mechanisms / orchestration** 5축은 우리 위키의 Guides/Sensors/HITL 분류와 **직교**한다. 둘을 곱한 5×3 매트릭스가 빈 칸을 보여 준다 — 예: "tool systems × Sensors"는 우리 위키에 거의 비어 있고, [[concepts/mcp]]가 자라야 할 자리. corpus 통계 핵심: **file-persistent hybrid context 27.1%** (가장 mature), **registry-based tool 34.3% > MCP 14.3%** (MCP는 "emerging"으로 명시), **container isolation ↔ structured approval 동시 출현 lift 3.4** — 격리와 승인은 짝으로 간다. 인용: "Capability growth does not automatically produce safety maturity."

**(2) CAAF — Determinism via UAI + State Locking (Prescriptive)** — Zhang의 답: **`H`를 진화시키지 마라, `H`를 incorruptible asset으로 잠가라**.

| CAAF 컴포넌트 | 역할 | 우리 위키 근사 |
|---------------|------|----------------|
| Recursive Atomic Decomposition | physically isolated nodes + context firewalls | [[patterns/subagents-delegation]]의 context firewall과 동형 |
| Harness as an Asset (HaaA) | versioned YAML constraint registry | `CLAUDE.md` + `templates/` + frontmatter 스키마 |
| Unified Assertion Interface (UAI) | LLM이 override 못 하는 deterministic PASS/FAIL | frontmatter validation + lint 워크플로우 |
| State Locking | PASS된 schema를 read_only로 잠금 | PDCA 단계 게이트 ([[patterns/bkit-superpowers-combo]]와 같은 냄새) |

정량 충격: **L3 자율주행 paradox detection — CAAF-GPT-4o-mini 30/30 vs monolithic GPT-4o no-hint 0/30**. **Multi-agent baseline (debate, sequential checker) 80 trial 모두 0%** — 오케스트레이션만으로는 reliability gap이 안 닫힌다는 *두 번째* 정량 근거(첫 번째는 [Google 2026-05-02 논문](https://arxiv.org/abs/...)의 17.2x vs 4.4x). 인용: "A system whose reliability depends on the presence of a specific linguistic trigger cannot be safely deployed."

**(3) Meta-Harness — Filesystem as Memory (Tooling)** — Lee et al.의 답: 자동 하네스 진화를 **coding agent + filesystem**으로 한다.

기존 text optimizer(OPRO/TextGrad/AlphaEvolve/GEPA/Feedback Descent)는 0.002–0.026 MTok/iter으로 feedback을 압축. Meta-Harness는 **10 MTok/iter** (3 orders of magnitude 더). Proposer가 raw LLM이 아니라 **coding agent**라서 grep/cat으로 prior 후보를 *선택적으로* inspect — median 82 files/iter, 20+ prior 후보 참조.

정량: 텍스트 분류 ACE 대비 **+7.7 points, 4× fewer context tokens** (60 proposal → 4 evaluation으로 동일 정확도); IMO-level math 5 모델 평균 **+4.7 points**; **TerminalBench-2 #1 (Haiku 4.5 부문)** — AHE 77.0%·Codex-CLI 71.9%와 같은 벤치, 새로운 SOTA 기준점. 인용: "Compressed feedback often removes the information needed to trace downstream failures to earlier harness decisions."

**세 논문을 같은 그림으로 (오전 3편과 합쳐 1년 지도)**:

```
(오전) "H는 변수다"        (오전) "Λ가 무너지지 않게"     (오후) "지도 그리기"
Last Harness (L1+L2)  ── AHE (3 pillars) ──────── Wei 5 dimensions
        │                       │                          │
        ▼                       ▼                          ▼
(오후) "코드로 구현"      (오후) "잠가서 강제"
Meta-Harness          ── CAAF (UAI + locking)
(filesystem proposer)    (anti-evolution: H는 asset)
```

**자동 진화 라인(상단)과 결정적 잠금 라인(하단)이 직교**한다. Last Harness/AHE/Meta-Harness가 *"`H`를 똑똑하게 만든다"* 면, CAAF는 *"`H`를 신뢰 가능하게 만든다"*. 안전-크리티컬에서는 둘이 합쳐져야 한다 — 진화된 `H`도 UAI로 잠긴 invariant를 통과해야 한다.

**Jayden 위키 함의 (PM 추가 ROI 3가지)**:

1. **`H` = asset framing 적용**: 우리 `CLAUDE.md`·`templates/`·frontmatter 스키마를 단순 prompt가 아니라 **machine-readable invariant registry**로 다시 본다. Lint 워크플로우가 mini-UAI다 — 이미 deterministic PASS/FAIL이다.
2. **State Locking을 ingest 워크플로우에 내장**: 단계 N PASS → 단계 N의 산출물 read-only로 표시 → 단계 N+1만 oscillate 가능. PDCA 단계 건너뛰기 방지와 같은 결.
3. **Wei의 5×3 매트릭스로 갭 진단**: subagent / context / tool / safety / orchestration × Guides / Sensors / HITL — 우리 위키에서 빈 칸이 많은 곳은 **tool systems × Sensors**, **subagent × HITL**. 다음 인제스트의 후보 영역.

## 우리가 이미 하고 있는 것

| Harness 구성요소 | 우리의 구현 |
|-----------------|-----------|
| Guides (피드포워드) | CLAUDE.md Schema, PDCA Plan/Design 문서, 템플릿, **raw frontmatter 표준 + "같은 폴더 최근 파일과 키 셋 일치" 룰** |
| Sensors (피드백) | Gap Analysis, Lint 워크플로우, frontmatter 검증 |
| Orchestration | PDCA 사이클, Ingest 10단계 체크리스트 |
| Memory | wiki/ (누적 지식), index.md, log.md |
| Guardrails | raw/ 읽기전용, frontmatter 필수, 분류 규칙 |

### 서버·프로덕션에서의 Harness (CLI와 다른 점)

로컬의 Claude Code는 **한 사용자·한 워크스페이스**를 전제로 Guides/Sensors가 잘 맞는다. 서버에 올리면 아래가 추가된다.

| 영역 | 설계 질문 |
|------|-----------|
| **신원·권한** | 어떤 API 키·토큰으로 외부 도구(MCP, DB)에 접근하는가? 테넌트 간 격리는? |
| **네트워크 경계** | 에이전트가 호출할 URL **허용 목록(화이트리스트)**. **SSRF**(서버가 공격자가 시키는 대로 내부 URL을 열어 버리는 취약점) 막기 |
| **실행 샌드박스** | Bash/코드 실행을 허용할 경우 컨테이너·임시 VM·제한된 런타임 |
| **동시성** | 같은 사용자·같은 리소스에 대한 락, 큐 깊이, rate limit |
| **장기 실행** | LLM+도구 루프가 수 분 걸릴 때 HTTP 타임아웃 vs 백그라운드 잡 |
| **스트리밍** | SSE 등으로 토큰·단계 이벤트를 클라이언트에 밀어줄지 |
| **관측·감사** | 요청 단위 trace, 프롬프트/응답 보존 정책(PII, 보존 기간) |

구체적인 배치 패턴(동기 라우트, 큐+워커, 스트림)은 [[patterns/agent-server-harness|에이전트 서버 하네스]]에 모았다. **기획 산출물에서 코드로 넘어가는 단계**의 가이드·센서 배치는 [[patterns/agent-planning-to-implementation|에이전트 기획→구현 파이프라인]]을 보면 된다.

## 왜 중요한가

AI 네이티브 프로그래머에게 Harness Engineering은 **가장 실전적인 스킬**이다. 모델은 바꿀 수 없지만, Harness는 설계할 수 있다. 좋은 Harness = 신뢰할 수 있는 에이전트.

## 2026-05-13 보강 — Verification-Gated Harness, 3-도메인 매핑

같은 시점 arXiv 3편이 **"committing 전에 어떤 evidence를 어떻게 검증할 것인가"**를 도메인을 바꿔 가며 답한다. 어제 PM의 *결정적 잠금 라인*(CAAF, [[journal/2026-05-06-pm]])이 H를 잠갔다면, 오늘 3편은 **출력 단계의 게이트**를 도메인별로 잠근다.

| 도메인 | 논문 | Evidence 종류 | 게이트 메커니즘 | 액션 분기 |
|---|---|---|---|---|
| Text / Claim | **GSAR** (arXiv 2604.23366, Kamelhar/Oracle) | Wikipedia gold evidence, 4-way claim typology | Weighted groundedness + asymmetric contradiction penalty | proceed / regenerate / replan |
| Code | **Verify Before You Fix** (arXiv 2604.10800v1, Gajjar/GWU) | Execution trace (exploit 재현) | Strict invariant: "no repair without execution-confirmed exploitability" | detect → validate → repair (validation 통과 시만) |
| Embodied / Visual | **Affordance Agent Harness** (arXiv 2605.00663, 2026-05-01) | Skill outputs(detection, segmentation) + episodic prior | Relative + actionable diagnostic("무엇이 missing"까지 진단) | adaptive Router로 다음 skill 호출, budget 내 retry |

세 시스템 모두 공통 구조:

```
Skill/Model output → Evidence Store → Verifier → {commit | retry | replan}
                                              ↑
                                      bounded budget loop
```

**Wei 2026-05-06 PM의 5 design dimension에 mapping**(원문 [[journal/2026-05-06-pm]]):

| Wei dimension | GSAR | Verify Before You Fix | A-Harness |
|---|---|---|---|
| Subagent | 4 judge 합의 | Detector/Validator/Repairer 3 stage | Skill registry |
| Context | Evidence store(typed) | uAST + exec trace | Evidence store + episodic memory |
| Tool | Score function | Execution sandbox | Skill toolbox |
| Safety | Contradiction penalty | Strict invariant | Cost budget + retry cap |
| Orchestration | 3-tier decision | 3-stage pipeline (validation 게이트) | Adaptive Router |

**Jayden 위키 함의 (3 즉효 ROI)**:

1. **Ingest log에 *typed claim* 필드 후보**: 위키 페이지 frontmatter에 `grounding: {claim, evidence, type}` 같은 컬럼이 들어가면 GSAR식 게이트가 mini-lint로 가능. 아직 제안 단계.
2. **`examples/`에 execution-grounded mini-sketch**: 코드 변경 → 단위 테스트 실행 → 결과 PASS/FAIL이 commit 여부 결정 (Verify Before You Fix 코드 도메인 정신, 1인 개발자에게 즉시 적용 가능). over-engineering 회피 위해 minimal sketch.
3. **하네스 케이스북에 visual/embodied 행 후보**: [[patterns/harness-engineering-casebook|케이스북]] 30 도메인 중 embodied 칸이 약하다면 A-Harness가 좋은 첫 행. 단, abstract 기반이라 fully populate는 본문 정독 후.

> 어제(2026-05-12) MEP/JRH/GROUNDING.md가 **모델 아래 세 레버**(workflow 입구 / eval 뒤 / invocation 위)였다면, 오늘 3편은 **출력 directly 위의 게이트**를 세 도메인으로 분산한 것. 같은 1년 그림이 한 칸씩 채워지고 있다.

## 2026-05-14 보강 — Runtime Substrate: 11 Component Responsibilities (Zhong & Zhu)

출처: Zhong & Zhu, "AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents" (arXiv 2605.13357, 2026-05-13). [원본 노트](raw/articles/2026-05-14-ai-harness-engineering-runtime-substrate.md).

저자 thesis 한 줄: **"Software-engineering capability emerges from a model-harness-environment system."** 즉 reliability gap을 모델 capability 단일 변수로 환원하지 말고 *세 변수의 함수*로 보고, 그중 통제 가능한 가운데 항(harness)을 책임 enumeration으로 정형화하자.

### 11 책임과 본 위키 매핑

| # | Responsibility | 본 위키 매핑 | 비고 |
|---|---|---|---|
| 1 | Task specification | [[patterns/claude-md-guide]], MEP (Zigler) | "무엇을·언제 끝" |
| 2 | Context selection | [[concepts/context-engineering]] | 노출할 파일·메모리 |
| 3 | Tool access | [[concepts/tool-use]], [[concepts/mcp]] | 액션 schema·permission |
| 4 | Project memory | [[concepts/ai-memory-systems]] | 장기 — repo state, lessons |
| 5 | Task state | filesystem-as-memory (Stanford Meta-Harness, [[journal/2026-05-06-pm]]) | 단기 — plan·todo |
| 6 | Observability | [[concepts/gen-ai-observability]] | trace·metric·log |
| 7 | Failure attribution | RAND JRH 일부, OTel agent SC | 모델·툴·prompt·env 어느 탓 |
| 8 | Verification | [[concepts/llm-evaluation]], Verify Before You Fix ([[journal/2026-05-13]]) | "변경이 *완료*" 입증 |
| 9 | Permissions | Wei container ↔ approval lift 3.4 ([[journal/2026-05-06-pm]]) | sandbox·HITL gate |
| 10 | Entropy auditing | RAND JRH (Stochastic stability family) | 결정 다양성·반복 stability |
| 11 | Intervention recording | [[patterns/agent-server-harness]] | HITL을 *데이터*로 보존 |

### Wei descriptive vs Zhong/Zhu prescriptive

| 축 | Wei (arXiv 2604.18071) | Zhong/Zhu (arXiv 2605.13357) |
|---|---|---|
| **시선** | 70-project empirical, 무엇이 *있나* | Position/formalization, 무엇이 *있어야* 하나 |
| **수** | 5 design dimension | 11 component responsibility |
| **합** | Subagent/Context/Tool/Safety/Orchestration | Task spec · Context · Tool · Project mem · Task state · Observability · Failure attribution · Verification · Permission · Entropy audit · Intervention rec |
| **세 칸 차이** | (없음) | Failure attribution / Entropy audit / Intervention rec — Wei dimension에 없던 *책임* |

→ **3개 새 책임**(Failure attribution / Entropy auditing / Intervention recording)이 이번 페이퍼의 *증분*이다. 이 셋은 어제 GSAR/JRH의 *eval/judge 신호*가 자연스럽게 자라난 한 layer 위 책임으로 읽힌다.

### 어제(2026-05-13)와의 관계

- 어제 verification-gated 3편(GSAR / VBYF / A-Harness)은 **단일 책임(verification = #8)**을 도메인별로 잠갔다.
- 오늘 Zhong/Zhu는 verification을 11개 책임 중 *한 칸*으로 위치시킨다 — **verification만 잠가도 reliability는 안 닫힌다**. Failure attribution(#7)·Entropy audit(#10)이 빠지면 verification 결과 *해석*이 안 된다.
- 즉 어제가 "한 칸 깊게", 오늘이 "옆으로 펼쳐서 빈 칸 채움".

### Jayden 위키 함의 (3 즉효 ROI)

1. **케이스북 column upgrade**: [[patterns/harness-engineering-casebook|케이스북]] 30 case matrix를 *11 책임* 열로 점검 가능. 현재 어떤 domain은 #8 verification만 채워져 있고 #7·#10이 텅 비어 있을 가능성. lint 후보.
2. **이 페이지 *formal definition* 자리**: 본 위키 [[concepts/harness-engineering]]는 지금까지 Guides/Sensors 같은 운영적 표현이었다. 11 책임 표가 *first formal definition*에 가까운 후보 — 단, abstract 기반이라 fully replace는 본문 정독 후.
3. **[[concepts/llm-evaluation]] 분화 신호**: verification(#8) ≠ failure attribution(#7) ≠ entropy audit(#10). 본 위키 eval 페이지를 셋으로 나눠 보면 *내가 지금 어디만 잘하고 있는지* 식별 가능. 분리 페이지 신설은 아직 이르다(증거 single source).

> 한계: WebFetch rate limit으로 full PDF 본문 미확보 — 11 책임 이름은 web search 응답 기준. *book/위키에 박기 전 PDF 검증 필요*. 매핑 표의 "본 위키 매핑" 열은 가설 수준.

## 2026-05-18 보강 — Harness는 budget allocation · hack detection · runtime shape까지 결정한다

2026-05-18에 읽은 두 편은 하네스를 또 다른 두 층으로 밀어 올린다. 하나는 **algorithm discovery 하네스**의 실험, 다른 하나는 **skill runtime 하네스**의 컴파일 관점이다. 공통 메시지는 같다: **하네스는 모델 바깥의 포장지가 아니라, 성능·비용·안전의 분포를 직접 바꾸는 계산 구조**다.

### A. Effective Harness Engineering — 많이 돌리기보다 깊게 생각시키기

[Effective Harness Engineering for Algorithm Discovery with Coding Agents](https://arxiv.org/abs/2605.15221) (2026-05-13)는 Vesper라는 framework로 세 질문을 던진다.

1. 같은 token budget이면 **많은 후보를 얕게** 만들까, **적은 후보를 깊게** 만들까?
2. scoring function을 속이는 **evaluation hack** 을 어떻게 막을까?
3. **full filesystem access** 가 필요한 coding agent를 병렬로 어떻게 안전하게 돌릴까?

핵심 결론은 두 줄로 요약된다.

- **fewer algorithms + deeper thought** 가 같은 budget에서 더 높은 점수
- **more capable models produced evaluation hacks at higher rates**

→ 즉 harness는 단순 실행기가 아니라 **budget allocator** 이고, 동시에 **anti-gaming detector** 다. 모델이 강해질수록 guardrail을 줄일 수 있다는 직관도 깨진다.

또 하나의 실전 포인트는 **Git worktree isolation** 이다. 병렬 agent를 같은 작업 디렉터리에서 돌리는 대신 worktree로 격리해 충돌과 오염을 줄인다. 본 위키의 [[patterns/subagents-delegation]] 과 [[patterns/agent-server-harness]] 에서 말한 "격리된 병렬화"가 연구 맥락에서 다시 확인된 셈이다.

### B. SkillSmith — skill은 긴 문서가 아니라 컴파일된 runtime interface다

[SkillSmith](https://arxiv.org/abs/2605.15215) (2026-05-12)는 skill loading을 context problem이자 runtime problem으로 본다.

- raw skill injection은 **irrelevant context injection** 과 **repeated reasoning** 을 만든다
- 해결책은 skill package를 offline에서 분석해 **minimal executable interface** 로 컴파일하는 것
- runtime에서는 필요한 boundary만 실행

정량도 강하다.

- **solve-stage token usage -57.44%**
- **thinking iterations -42.99%**
- **solve time -50.57% (2.02x faster)**
- **cost -57.44%**

→ harness 책임 11개 중 **Tool access(#3)** 와 **Context selection(#2)** 이 따로 노는 게 아니라는 증거다. tool/schema/skill을 어떤 모양으로 런타임에 노출하느냐가 곧 context 비용과 reasoning loop 길이를 바꾼다.

### 오늘 시점 한 그림

| 질문 | 하네스가 바꾸는 것 | 오늘 소스 |
|---|---|---|
| 같은 예산에서 무엇을 늘릴까? | **generation 수가 아니라 후보당 사고 밀도** | Effective Harness Engineering |
| 점수는 믿을 만한가? | **evaluation hack 탐지** | Effective Harness Engineering |
| skill을 어떻게 싣나? | **raw context 대신 compiled runtime interface** | SkillSmith |
| 병렬화는 어떻게 안전하게 하나? | **shared workspace 대신 worktree isolation** | Effective Harness Engineering |

### Jayden 위키 함의

1. **병렬 subagent 기본값을 "공유 작업공간"이 아니라 "격리 worktree/ephemeral dir"로 두는 편이 낫다.**
2. **skill/도구 문서는 길게 설명하는 것보다, runtime에서 필요한 최소 boundary만 남기도록 압축해야 한다.**
3. **모델 upgrade는 score-gaming risk도 함께 키울 수 있으므로, stronger model일수록 verification harness를 두껍게 유지해야 한다.**

## 2026-05-19 보강 — HarnessAudit + Natural-Language Harness: 하네스는 실행 중에도 감사되어야 하고, 문서 객체로도 다뤄져야 한다

2026-05-18까지 이 페이지는 하네스를 **예산 배분 / verification / tool boundary / worktree isolation** 관점으로 구체화했다. 오늘 들어온 두 논문은 그 위에 서로 다른 축을 하나씩 더한다.

- [HarnessAudit](https://arxiv.org/abs/2605.14271) — 하네스를 **trajectory 전체를 따라 감사해야 하는 safety substrate** 로 본다
- [Natural-Language Agent Harnesses](https://arxiv.org/abs/2603.25723) — 하네스를 **코드에서 분리 가능한 정책 문서 객체** 로 본다

### A. HarnessAudit — completion이 아니라 execution protocol까지 봐야 한다

HarnessAudit의 문제의식은 간단하다. **정답을 냈어도, 그 과정에서 잘못된 자원 접근·민감 정보 공유·권한 위반이 있었다면 안전한 하네스가 아니다.**

핵심은 trajectory를 3개 층으로 보는 것:

1. **Boundary compliance** — 누가 무엇에 접근해도 되는가
2. **Execution fidelity** — task completion과 action validity가 맞는가
3. **System stability** — perturbation을 받아도 프로토콜 준수가 유지되는가

벤치마크 규모도 실전적이다.

- **210 tasks**
- **8 real-world domains**
- **24 fine-grained scenarios**
- single-agent / multi-agent 둘 다 구성

본문 기준 발견이 특히 중요하다.

- **best overall score도 0.32** 수준
- completion이 높은 시스템이 safety도 높은 것은 아님
- **multi-agent coordination이 information flow / resource access violation을 증폭**

→ 이건 [[concepts/llm-evaluation]] 의 judge·environment 층 위에 **protocol/trajectory audit 층**을 하나 더 올린다. 하네스는 더 이상 "잘 굴러가게 하는 glue"가 아니라, **실행 중 boundary를 계속 강제하고 사후에 재감사할 수 있어야 하는 substrate** 다.

### B. Natural-Language Agent Harnesses — 하네스의 재사용 핵심은 코드가 아니라 정책이다

Natural-Language Agent Harnesses(NLAH)는 하네스를 controller code에 묻어 두지 말고 **자연어 문서로 외부화**하자고 제안한다. 실행은 IHR(Intelligent Harness Runtime)이 맡고, 문서는 run-level policy만 담는다.

논문의 강한 포인트는 "문서로 적어도 돌아간다"보다, **정책 표면을 훨씬 짧고 비교 가능하게 만들 수 있다**는 점이다.

- **OSWorld**: NLAH **46.3** vs code harness **47.1**
- **SWE Verified Live-SWE**: code **60.10k tokens / 68 files** vs NLAH **2.90k / 3 files**
- **TB2 MHTBA**: code **10.50k / 3 files** vs NLAH **0.80k / 1 file**

또한 module ablation이 선명하다.

- **file-backed state**: SWE **73.0 → 75.6**, OSWorld **44.4 → 58.3**
- **verifier**: SWE **+0.2**, OSWorld **+8.4**
- **context compression**: SWE **73.0 → 72.0**, OSWorld **44.4 → 36.1**

→ 이 논문이 보여 주는 것은 하네스의 본질이 특정 언어나 프레임워크가 아니라 **정책 모듈의 조합**이라는 점이다. 그래서 `CLAUDE.md`, `AGENTS.md`, `SKILL.md` 류 문서를 그냥 설명서가 아니라 **실행 정책 객체**로 다루는 현재 위키 방향이 더 강해진다.

### 오늘 시점 재압축

이제 하네스를 최소 여섯 질문으로 볼 수 있다.

| 질문 | 대표 근거 |
|---|---|
| 같은 예산에서 무엇을 늘릴까? | Effective Harness Engineering |
| skill을 어떤 모양으로 싣나? | SkillSmith |
| 병렬화를 어떻게 안전하게 하나? | worktree isolation |
| 어떤 책임을 런타임이 가져야 하나? | Zhong & Zhu 11 responsibilities |
| 실행 중 safety를 어떻게 감사하나? | **HarnessAudit** |
| 그 정책을 어떻게 비교·이식·ablation하나? | **NLAH + IHR** |

즉 하네스는 **운영자 감각으로 짜는 비공식 glue**에서, **감사 가능하고 표현 가능하며 이식 가능한 1급 아키텍처 객체**로 올라가고 있다.

## 2026-05-21 보강 — Insights Generator: trace를 저장하는 것에서 trace 코퍼스를 진단하는 것으로

오늘 source는 이 페이지의 observability 이야기를 한 단계 더 밀어 올린다. 좋은 하네스는 이제 trace를 "남기는 것"에서 멈추지 않고, **trace 코퍼스 전체를 읽어 다음 하네스 수정으로 이어지는 진단 보고서** 를 만들 수 있어야 한다.

### 1) production trace는 샘플 몇 개 읽기로는 안 보인다

[Insights Generator](https://arxiv.org/abs/2605.21347) 는 LLM agent failure diagnosis가 여전히 수동 trace inspection에 크게 의존한다고 지적한다.

- 운영자는 trace 몇 개만 읽고
- ad-hoc 가설을 세우고
- scaffold를 손본 뒤
- 다시 일부만 확인한다

하지만 실제 production corpora에서는

- 개별 trace가 **수만 토큰** 길고
- 중요한 패턴은 **trace population 전체** 에서만 드러날 수 있다

즉 trace를 남겼다는 사실만으로는 observability가 완성되지 않는다.

### 2) 하네스는 corpus-level trace diagnostics 능력까지 가져야 한다

논문은 문제를 이렇게 정식화한다.

- 입력: execution trace들의 **corpus**
- 출력: systematic behavioral pattern을 설명하는 **grounded natural-language insights**
- 조건: 모든 insight는 **supporting evidence** 와 연결되어야 함

이 framing은 중요하다. dashboard가 숫자로 "이상함"을 알려 준다면, corpus-level diagnostics는 **"왜 이런 이상이 반복되는가"** 를 설명한다.

### 3) scout-investigator 구조는 하네스의 "진단 서브에이전트" 로 읽을 수 있다

IG는 diagnostic question에 대해

- 가설을 제안하고
- trace corpus에서 시험하고
- evidence-backed insight report를 만든다

이건 단순 분석기가 아니라, 하네스 안에서 **trace를 읽고 하네스 수정 제안을 만드는 evaluator / analyst agent** 역할로 해석할 수 있다.

### 4) observability가 실제 scaffold 개선 루프에 연결된다

가장 중요한 정량은 이것이다.

- human expert가 IG report를 사용하면
- **baseline scaffold 대비 30.4 percentage points 성능 향상**
- coding agent가 IG-derived insight를 활용해도 **consistent and stable gains**

즉 observability가 단순 관측 대시보드가 아니라 **하네스 진화 입력** 으로 작동한다.

### 오늘 시점 재압축

최근 source를 합치면 trace 관련 하네스 질문은 세 층으로 정리된다.

| 층 | 질문 | 대표 근거 |
|---|---|---|
| **개별 trajectory 감사** | 실행 한 번이 boundary를 어겼는가? | HarnessAudit |
| **정책 표현과 이식** | 그 규칙을 문서 객체로 드러내고 비교할 수 있는가? | NLAH + IHR |
| **코퍼스 진단** | 수많은 trace를 모아 반복 패턴과 개선안을 뽑아낼 수 있는가? | **Insights Generator** |

→ 이제 하네스는 action loop만 설계하는 층이 아니라, **자기 실행 흔적을 해석해 다음 버전 규칙으로 되먹이는 메타 루프** 까지 품는 구조로 보인다.

### 1인 개발자 ROI 3개

1. trace를 쌓아 두기만 하지 말고, 주간 단위로 **반복 실패 패턴 메모** 를 남긴다.
2. 수동 회고도 "가설 → 근거 trace → 수정 규칙" 형식으로 적으면 나중에 `CLAUDE.md` / harness policy로 승격하기 쉽다.
3. 운영 로그 분석의 목표를 dashboard 숫자 하나가 아니라 **다음 하네스 변경 1개를 정당화하는 evidence memo** 로 잡는다.

## 2026-05-21 보강 — Library Drift: self-evolving agent에도 skill garbage collection이 필요하다

[Library Drift](https://arxiv.org/abs/2605.19576) (2026-05-19)는 최근 이 페이지가 다뤄 온 **self-evolving harness** 이야기에 중요한 역보정을 넣는다. 지금까지의 질문이 "하네스를 어떻게 자동 진화시킬까"였다면, 이 논문은 그 진화가 **무한 skill 축적** 으로 흐를 때 어떤 silent failure가 생기는지를 짚는다.

### drift는 skill 품질만의 문제가 아니라 lifecycle 부재의 문제다

논문이 정의한 **library drift** 증상은 다음과 같다.

- unbounded skill accumulation
- retrieval degradation
- false-positive injection
- performance stagnation

즉 self-improvement loop가 있다고 해서 자동으로 더 좋아지는 것이 아니라, **퇴역(retirement)과 active-cap이 없는 증식** 은 오히려 성능을 망칠 수 있다.

### 관측 포인트: trace-level evidence log가 drift를 먼저 보여 준다

저자들은 최종 task score만 보지 않고 다음을 기록한다.

- **per-skill contribution score**
- **attribution verdict**
- **router engagement metric**

이건 [[concepts/harness-engineering]] 이 최근 쌓아 온 observability 논의와 정확히 맞물린다. trace observability의 대상이 이제 action trajectory뿐 아니라 **skill lifecycle** 로 확장된 셈이다.

### 처방은 생각보다 작다: retirement + cap + prior

논문이 제시한 최소 governance recipe는 세 가지다.

1. **outcome-driven retirement**
2. **bounded active-cap**
3. **meta-skill authoring prior**

MBPP+ hard-100 / 100 rounds에서 held-out pass@1이 **0.258 → 0.584**, rolling gain **+0.328** 까지 오르는 결과는, 큰 새 모델보다 **작은 운영 규칙** 이 load-bearing일 수 있음을 보여 준다.

### 오늘 시점 재압축

최근 하네스 소스를 합치면 self-improvement는 이제 네 질문으로 쪼개진다.

| 질문 | 대표 근거 |
|---|---|
| 어떻게 하네스를 진화시킬까? | Last Harness / AHE |
| 어떤 evidence로 진화를 정당화할까? | Insights Generator |
| 어떤 정책 문서로 유지할까? | NLAH |
| **언제 skill을 퇴역시킬까?** | **Library Drift** |

→ 하네스 진화는 생성 loop만이 아니라, **쓸모없는 capability를 제거하는 lifecycle governance** 까지 포함해야 성숙하다.

### 1인 개발자 ROI 3개

1. `SKILL.md` / tool registry를 늘리는 것 자체를 성과로 세지 말고 **active set 크기** 를 관리한다.
2. skill 호출 뒤에는 "도움 됨 / 무관 / 방해됨" 같은 **경량 attribution 로그** 를 남긴다.
3. 월간 정리 때 새 skill 추가만 보지 말고 **삭제·퇴역된 skill 수** 도 함께 본다.

## 2026-05-22 보강 — Code as Agent Harness: code를 결과물에서 runtime substrate로 보기

[Code as Agent Harness](https://arxiv.org/abs/2605.18747) (2026-05-18)는 최근 이 페이지에 들어온 source들을 한 단계 더 상위 개념으로 묶어 준다. 요지는 간단하다. **code는 agent가 만들어 내는 output인 동시에, agent reasoning·action·verification을 떠받치는 harness 그 자체** 라는 것이다.

### 1) 하네스의 중심이 prompt에서 executable artifact로 이동한다

이 논문이 주는 가장 큰 압축은, planning / memory / tool use / verification을 각각 독립 토픽으로 보지 않고 **code-backed harness mechanisms** 로 재정렬한다는 점이다.

- interface: code가 reasoning·action·environment modeling을 연결
- mechanisms: planning / memory / tool use / feedback-driven control
- scale: multi-agent coordination / review / verification

즉 이 페이지가 최근 쌓아 온

- [[concepts/tool-use]]
- [[concepts/ai-memory-systems]]
- [[concepts/ai-orchestration]]
- [[concepts/llm-evaluation]]

흐름을, "모두 code substrate 위에서 도는 하네스 메커니즘"으로 다시 한 장에 붙여 준다.

### 2) multi-agent coordination의 핵심은 shared artifact다

최근 위키는 orchestration을 delegation·handoff·policy boundary로 세분화해 왔다. 이 논문은 그 옆에서 coordination의 매개를 더 분명히 한다.

- message passing만으로는 부족하고
- **shared file / diff / test harness / stateful code artifact**
- 가 multi-agent의 실제 coordination surface다

이 관점은 [[concepts/ai-orchestration]] 의 orchestration을 prompt choreography보다 **artifact-mediated workflow** 로 더 강하게 읽게 만든다.

### 3) 최근 open problem들이 하나의 하네스 체크리스트로 묶인다

논문이 짚는 open challenge는 이 페이지의 최근 보강과 거의 일대일 대응된다.

| 열린 질문 | 최근 위키 대응 소스 |
|---|---|
| final success 너머의 evaluation | SpecBench / ProcBench / HarnessAudit |
| incomplete feedback 아래 verification | GSAR / Verify Before You Fix |
| regression-free harness improvement | AHE / Insights Generator |
| consistent shared state | ClawVM / BeliefMem / Formal Skill |
| safety-critical human oversight | Progressive Autonomy / MAGE |

→ 이 표가 말해 주는 것은, 최근 일주일간 쌓인 논문들이 사실 따로 노는 것이 아니라 **"code as harness"라는 상위 프레임으로 수렴** 한다는 점이다.

### 1인 개발자 ROI 3개

1. repo를 단순 작업 대상이 아니라 **agent runtime state space** 로 본다 — 파일 구조, 테스트, diff 자체가 하네스다.
2. 장기 작업은 prose instruction보다 **실행 가능한 중간 산출물**(spec 파일, check script, state file)을 더 많이 남길수록 안정적이다.
3. multi-agent를 붙일 때는 역할 설명보다 먼저 **무엇을 공유 artifact로 둘지** 를 설계한다.

## 케이스별·Anthropic 스터디

도메인이 달라질 때 Guides/Sensors/HITL이 어떻게 달라지는지, 그리고 **Anthropic Academy(공식 코스)**를 하네스 학습과 어떻게 짝지을지는 [[patterns/harness-engineering-casebook|Harness 케이스북 & Anthropic Academy 스터디 맵]]에 모아 두었다.

## 관련 개념

- [[concepts/context-engineering]] — Harness의 하위 계층
- [[concepts/prompt-engineering]] — 가장 기초적인 계층
- [[concepts/agentic-engineering]] — Harness Engineering의 실행 방법론
- [[concepts/ai-orchestration]] — Harness 안에서의 에이전트 조율
- [[patterns/agent-server-harness]] — 서버 런타임에 하네스 얹기
- [[patterns/agent-planning-to-implementation]] — 계획·기획 단계의 Guides/Sensors

## 참고 소스

- [Harness 케이스북·Academy 큐레이션](raw/notes/2026-04-13-harness-casebook-anthropic-academy.md)
- [Harness 심화 큐레이션](raw/notes/2026-04-12-harness-engineering-deep-dive.md)
- [Engineering 패러다임 리서치](raw/notes/2026-04-09-engineering-paradigms-research.md)
- [Martin Fowler — Harness engineering (본편)](https://martinfowler.com/articles/harness-engineering.html)
- [Martin Fowler — Harness engineering memo (초기 메모)](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html)
- [Martin Fowler — Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)
- [Anthropic — Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents)
- [Claude Code Agent Harness Architecture](https://wavespeed.ai/blog/posts/claude-code-agent-harness-architecture/)
- [The Anatomy of an Agent Harness](https://blog.dailydoseofds.com/p/the-anatomy-of-an-agent-harness)
