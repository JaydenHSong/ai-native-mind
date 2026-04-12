---
title: "Harness Engineering"
category: concepts
tags: [harness-engineering, ai-agent, infrastructure, orchestration]
created: 2026-04-09
updated: 2026-04-13
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/notes/2026-04-12-harness-engineering-deep-dive.md"
  - "raw/notes/2026-04-13-harness-casebook-anthropic-academy.md"
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

## 우리가 이미 하고 있는 것

| Harness 구성요소 | 우리의 구현 |
|-----------------|-----------|
| Guides (피드포워드) | CLAUDE.md Schema, PDCA Plan/Design 문서, 템플릿 |
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
