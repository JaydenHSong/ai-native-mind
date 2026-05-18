---
title: "Agentic Engineering"
category: concepts
tags: [agentic-engineering, vibe-coding, ai-development, karpathy, symbolic-ai, neural-ai, hybrid-architecture, survey]
created: 2026-04-09
updated: 2026-05-17
sources:
  - "raw/notes/2026-04-09-engineering-paradigms-research.md"
  - "raw/notes/2026-04-11-orchestration-harness-server-supplement.md"
  - "raw/articles/2026-05-01-agentic-engineering-cisco-langchain.md"
  - "raw/articles/2026-05-17-agentic-ai-survey-dual-paradigm.md"
related:
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/ai-native-programmer]]"
  - "[[patterns/agent-planning-to-implementation]]"
  - "[[patterns/agent-server-harness]]"
status: active
confidence: medium
---

# Agentic Engineering

## 쉽게 읽기

**Vibe coding**은 “느낌 가는 대로 AI 출력을 받아들이기”에 가깝다. **Agentic engineering**은 그 대신 **역할·검사·되돌리기**를 정해 두고 AI가 돌게 하는 쪽이다. 즉, **속도만**이 아니라 **통제 가능한 자동화**를 목표로 한다.

| 용어 | 풀이 |
|------|------|
| **Harness** | AI가 벗어나지 않게 하는 **안전 띠·난간** 묶음 |
| **감독** | 사람이 완전히 손에서 놓지 않고 **기준과 승인**을 쥠 |
| **프로덕션** | 실제 사용자에게 나가는 **진짜 서비스** 환경 |

## 한줄 정의

AI 에이전트가 계획·작성·테스트·반복하되, 구조화된 인간 감독 하에 작동하는 개발 방법론. Vibe Coding의 성숙한 진화.

## 핵심 내용

### Vibe Coding → Agentic Engineering

| | Vibe Coding (2025) | Agentic Engineering (2026) |
|--|-------------------|--------------------------|
| **명명자** | Andrej Karpathy (2025년 2월) | Karpathy (2026년 초) |
| **접근** | AI 출력을 diff도 안 읽고 수용 | AI가 자율적으로 작업하되 구조적 감독 |
| **적합** | 해커톤, 프로토타입 | 프로덕션, 대규모 리팩토링, CI/CD |
| **인간 역할** | "vibes에 몸을 맡기기" | 의도 정의 + 가드레일 설정 + 품질 판단 |
| **Harness** | 없거나 최소 | 필수 — Guide + Sensor + Orchestration |

### Vibe Coding이란?

> "vibes에 완전히 몸을 맡기고, 지수적 성장을 수용하고, 코드가 내 이해를 넘어 성장하는 것을 잊는다" — Karpathy

- AI가 생성한 코드를 diff도 안 읽고 수용
- 빠른 프로토타이핑에 효과적
- 프로덕션에서는 **cognitive debt**(인지 부채) 누적

### Cognitive Debt (인지 부채) — 2026년 새 용어

기술 부채(technical debt)의 AI 버전:
- AI 상호작용의 잘못된 관리가 누적
- 컨텍스트 손실, 신뢰할 수 없는 에이전트 행동
- Vibe Coding의 최대 위험

### 2026년 수치

- 미국 개발자 **92%**가 AI 코딩 도구 일상 사용
- 전체 코드의 **41%**가 AI 생성
- Vibe coding 사용자의 **63%**가 비개발자
- Gartner: 2026년 말 기업 앱 **40%**에 AI 에이전트 내장

### Worker / Leader 제어 평면 (2026-04 Cisco × LangChain 파일럿)

[Renuka Kumar·Prashanth Ramagopal (Cisco), "Agentic Engineering" (LangChain Blog, 2026-04-17)](https://www.langchain.com/blog/agentic-engineering-redefining-software-engineering)는 Agentic Engineering을 "코딩 AI를 더 빠르게"가 아니라 **실제 엔지니어링 팀처럼 동작하는 multi-agent 제어 평면**으로 본다. LangGraph + LangSmith + LangMem 위에 두 역할을 얹는다.

| 역할 | 책임 |
|------|------|
| **Worker Agent** (개별 기여자) | 의도 해석 → 계획 수립 → 컨텍스트 수집(repo/이슈/로그) → 실행 → 검증 → Leader에 보고 |
| **Leader Agent** (프로젝트 리더) | 공유 prompt·workflow 라이브러리, 공통 tool gateway, swarm 장기 메모리, 글로벌 관측, "언제·어떻게" 오케스트레이션 |

Worker 간 통신은 **A2A 프로토콜**, 비지원 에이전트(IDE 코딩 에이전트 등)와는 **MCP 어댑터 도구**로 연결 → IDE 무관성. 실행과 조정의 분리 → 엣지 자율성 + 규모의 일관성.

**파일럿 결과 (보수적 측정)**:

- 디버깅 워크플로(20+): time-to-root-cause **93% 단축**, 한 달 70명 사용자 **512 세션** → **200+ man-hour** 절감, QE 독립 평가에서 품질 손실 없음
- 개발 워크플로(15+): 실행 시간 **65% 단축**. 단 **가장 큰 이득은 코드 생성 가속이 아니라 PR merge 이후 downstream 테스팅 압축**에서 옴
- **새 병목**: PR 리뷰 프로세스 자체(HITL 게이트)

시사점: 진짜 병목은 코드 생성 속도가 아니라 **조정 비용·크로스팀 지연·컨텍스트 공유 부족**이다. Codex/Claude 같은 코딩 에이전트는 **Worker 안에 임베드되는 컴포넌트**이지 대체재가 아니라는 점도 명시. 본 위키의 [[patterns/agent-planning-to-implementation]] 4단계와 거의 일대일 매핑되며, 차이는 **Leader Agent 층(공유 프롬프트·툴 게이트웨이·장기 메모리)** 의 명시적 분리.

## 2026-05-17 보강 — Agentic AI Survey: Symbolic vs Neural 두 계보로 다시 보기

[Ali & Dornaika](https://arxiv.org/abs/2510.25445) (2025-10-29)는 Agentic AI를 한 덩어리 최신 유행어처럼 다루는 관행을 비판한다. 저자들이 붙이는 이름은 **conceptual retrofitting** — modern neural system과 오래된 symbolic system을 같은 "agent"라는 단어 아래 무비판적으로 섞어 버리는 것.

### dual-paradigm framework

| 계보 | 핵심 메커니즘 | 대표 냄새 |
|---|---|---|
| **Symbolic / Classical** | algorithmic planning, persistent state | 명시적 상태·규칙·고전 planning |
| **Neural / Generative** | stochastic generation, prompt-driven orchestration | LLM 생성·tool use·prompt/harness 중심 |

이 구분은 "누가 더 최신인가"가 아니라 **무슨 제약 아래서 더 자연스러운가**의 질문이다.

### 우리 위키가 지금까지 강하게 다룬 쪽

이 페이지와 주변 문서([[concepts/harness-engineering]], [[concepts/ai-orchestration]], [[patterns/agent-planning-to-implementation]])는 대부분 **Neural / Generative lineage**를 다뤄 왔다.

- Worker / Leader control plane
- prompt-driven orchestration
- harness / verifier / evaluator
- multi-agent delegation

Survey가 주는 새 시각은 이것이다: 위 개념들은 "agent 일반론"이 아니라 **특정 lineage의 운영 기술**이다.

### PRISMA 90-study가 주는 전략적 이득

- **2018–2025** 문헌 90편 체계적 리뷰
- 분석 축 3개:
  1. architecture principle
  2. healthcare / finance / robotics 적용
  3. ethics / governance challenge

abstract 결론 요약:

- **healthcare** 같은 safety-critical domain → symbolic 쪽이 상대적으로 우세
- **finance** 같은 adaptive/data-rich domain → neural 쪽이 상대적으로 우세
- 장기 방향 → **hybrid neuro-symbolic** 통합 필요

→ 즉 agentic engineering의 질문은 "에이전트를 쓸까 말까"가 아니라, **어느 계보를 어느 비율로 섞을까**가 된다.

### 이 페이지 정의와의 관계

기존 정의는 Agentic Engineering을 "구조화된 인간 감독 하에 작동하는 AI 개발 방법론"으로 잡았다. Survey를 붙이면 이 정의가 한 단계 선명해진다:

- 이 페이지가 다루는 것은 **Neural / Generative Agentic Engineering** 이다.
- 여기서 human oversight, harness, verifier는 stochastic generation을 production에 끌고 오기 위한 대응 장치다.
- 반대로 symbolic 계열은 애초에 planning/state가 명시적이므로, 같은 문제를 다른 방식으로 푼다.

### 왜 hybrid가 중요해지나

Survey의 핵심 미래 주장은 **한 paradigm의 승리**가 아니라 **intentional integration**이다.

우리 위키 문맥으로 번역하면:

- **Neural 층**: 생성, 검색, tool-use, 오케스트레이션
- **Symbolic 층**: policy, constraints, state machine, deterministic verifier
- **Harness 층**: 둘을 붙이는 runtime substrate

→ [[concepts/harness-engineering]]가 중요한 이유가 더 강해진다. Harness는 단순 보조 장치가 아니라 **neural generation과 symbolic constraint를 접착하는 층**이기 때문이다.

### 1인 개발자 ROI 3개

1. agentic architecture를 볼 때 "LangGraph냐 Managed Agents냐" 전에 **이 시스템이 neural-first인지 symbolic-first인지**를 먼저 물으면 비교가 쉬워진다.
2. safety-critical workflow에는 자유 생성만 늘리지 말고 **symbolic state / rule / verifier 층**을 의도적으로 올려야 한다.
3. 앞으로의 좋은 설계는 "LLM을 더 많이 부르기"가 아니라 **어디를 생성적으로 두고 어디를 결정적으로 잠글지**를 구분하는 설계가 된다.

→ 2x3 좌표계의 **(descriptive, 학습)** 칸을 채운다. 지금 landscape를 배우는 지도 역할.

## 왜 중요한가

Agentic Engineering은 "AI를 쓰는 것"과 "AI로 엔지니어링하는 것"의 경계선이다. [[concepts/ai-native-programmer|AI 네이티브 프로그래머]]는 Vibe Coding이 아니라 Agentic Engineering을 한다 — [[concepts/harness-engineering|Harness]]를 설계하고, 에이전트를 [[concepts/ai-orchestration|오케스트레이션]]하며, 판단력으로 방향을 잡는다.

## 관련 개념

- [[concepts/harness-engineering]] — Agentic Engineering의 인프라
- [[concepts/ai-orchestration]] — 에이전트 조율 패턴
- [[concepts/ai-native-programmer]] — 이 방법론을 실천하는 사람
- [[patterns/agent-planning-to-implementation]] — 기획·계획을 코드로 넘길 때의 감독 구조
- [[patterns/agent-server-harness]] — 서버에 올린 에이전트의 감독·경계

## 참고 소스

- [Engineering 패러다임 리서치](raw/notes/2026-04-09-engineering-paradigms-research.md)
- [From Vibes to Engineering (The New Stack)](https://thenewstack.io/vibe-coding-agentic-engineering/)
- [Agentic Engineering Complete Guide (NxCode)](https://www.nxcode.io/resources/news/agentic-engineering-complete-guide-vibe-coding-ai-agents-2026)
