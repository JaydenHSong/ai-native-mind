---
source_url: "https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/"
title: "Dual LLM 패턴 + CaMeL — prompt injection의 architectural 답"
publisher: "Simon Willison + Google DeepMind 종합"
ingested: 2026-05-01
related_urls:
  - "https://simonwillison.net/2023/Apr/25/dual-llm-pattern/"
  - "https://simonwillison.net/2025/Apr/11/camel/"
  - "https://arxiv.org/abs/2503.18813"
  - "https://www.infoq.com/news/2025/04/deepmind-camel-promt-injection/"
  - "https://afine.com/llm-security-prompt-injection-camel"
  - "https://www.conductorone.com/engineering/splitting-ai-agents-to-contain-prompt-injection/"
---

# Dual LLM 패턴 + CaMeL — Prompt Injection의 architectural 답

> 출처: [Simon Willison — Design Patterns for Securing LLM Agents (2025-06-13)](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/) · [Simon Willison — CaMeL 분석 (2025-04-11)](https://simonwillison.net/2025/Apr/11/camel/) · [DeepMind CaMeL — arXiv 2503.18813](https://arxiv.org/abs/2503.18813) · [InfoQ 정리](https://www.infoq.com/news/2025/04/deepmind-camel-promt-injection/)

## 한 줄 요약

Prompt injection을 모델 안에서 막을 수 없다는 합의 위에서 등장한 **architectural 답 두 단계**: 2023년 **Dual LLM 패턴**(Simon Willison) → 2025년 **CaMeL**(Google DeepMind, Dual LLM의 정식 확장). 핵심은 "**신뢰할 수 있는 instruction이 untrusted data에 노출되지 않도록 LLM 책임을 분리**"하는 것.

## Dual LLM 패턴 (2023, Simon Willison)

```
┌─────────────────────────────────────────────────────┐
│  Privileged LLM (P-LLM)                              │
│   - 사용자 instruction만 본다                          │
│   - 도구 사용 가능                                     │
│   - untrusted data는 절대 안 봄                        │
│   - reference만 다룸: $email-summary-1                 │
└─────────────────────────────────────────────────────┘
                       ↕
┌─────────────────────────────────────────────────────┐
│  Quarantined LLM (Q-LLM)                             │
│   - untrusted data를 처리                              │
│   - 도구 사용 불가                                      │
│   - 결과를 reference로만 P-LLM에 돌려줌                  │
└─────────────────────────────────────────────────────┘
```

**핵심 트릭**:

- P-LLM은 "$email-summary-1을 사용자에게 보여 줘"라고 지시
- Q-LLM이 실제로 이메일을 읽고 reference에 채움
- **악성 토큰이 P-LLM에 도달하는 경로 자체가 없다**

P-LLM이 도구를 호출하려면 결정을 해야 하는데, 그 결정에 untrusted 입력이 영향을 주지 못함 → injection chain이 끊긴다.

### 한계 (Simon 본인 인정)

- P-LLM이 만드는 **plan 자체에 Q-LLM 결과를 참조하는 분기**가 들어가면 우회 가능
- 사용자가 Q-LLM 결과를 보면 결국 그 사람이 속을 수 있음 (UI/UX 측면 위험)

## CaMeL (2025, DeepMind) — Dual LLM의 정식 확장

CaMeL = **Cap**abilities for **M**achin**e** **L**earning. arXiv 2503.18813 ([Defeating Prompt Injections by Design](https://arxiv.org/abs/2503.18813)).

### 무엇이 바뀌었나

Dual LLM이 책임을 둘로 나눴다면, CaMeL은 **전통 SW 보안 원칙**(control flow integrity, access control, information flow control)을 LLM 위에 얹는다.

```
┌─────────────────────────────────────────────────────┐
│  P-LLM (Planner)                                    │
│   - 사용자 instruction → locked-down Python 코드     │
│   - 어떤 도구를 어떤 순서로 호출할지 명시              │
└─────────────────────────────────────────────────────┘
                       ↓ (Python program)
┌─────────────────────────────────────────────────────┐
│  CaMeL Interpreter (전통 SW 보안 코드)                │
│   - 모든 값에 capability 메타데이터 부여              │
│   - 데이터 출처(trusted/untrusted) 추적              │
│   - 보안 정책 검사 후 도구 호출                       │
└─────────────────────────────────────────────────────┘
                       ↓ (제한된 호출)
┌─────────────────────────────────────────────────────┐
│  Q-LLM + Tools                                      │
│   - untrusted data 처리                             │
│   - capability에 맞춰 도구 호출                       │
└─────────────────────────────────────────────────────┘
```

### 핵심 차이

| 축 | Dual LLM | CaMeL |
|---|----------|-------|
| 분리 | LLM 둘로 책임 분리 | LLM + 전통 SW 보안 layer 추가 |
| 데이터 추적 | reference만 (수동) | **모든 값에 capability** (자동, 정책 기반) |
| 도구 호출 결정 | P-LLM이 plan으로 | P-LLM이 Python 코드로, **interpreter가 정책 검사** |
| 보안 보장 | 경로 차단 | **information flow integrity** 증명 가능 |

### 실증 (AgentDojo 벤치마크)

- CaMeL: 77% 태스크를 **provable security**(증명 가능한 안전성)로 해결
- 무방어 시스템: 84% (단, 안전성 보장 없음)
- → **7%p 효용 손실로 prompt injection 대부분 차단**

### 한계 (DeepMind 인정)

- 보안 정책을 **사용자가 직접 정의**해야 함
- privacy-sensitive 태스크에서 **수동 승인 fatigue** 가능 → 자동·무신경 승인의 위험

## 실무 적용 가이드

### 1단계 — 어디에 untrusted data가 들어오는가?

대부분의 production agent에서 untrusted 입력은:
- 사용자가 붙여넣는 텍스트(이메일 본문, 외부 문서)
- MCP 도구가 가져오는 외부 데이터
- 다른 에이전트(A2A)가 보내는 메시지
- 검색 결과(웹 fetch, RAG retrieval)

→ 이 모두를 **Q-LLM 영역**에 격리.

### 2단계 — P-LLM의 도구 사용을 **정의된 plan 안에서만** 허용

- P-LLM이 도구를 직접 부르지 말고 **structured output**(Zod schema 등)으로 plan만 생성
- Plan을 받은 **deterministic interpreter**가 검증 후 실행
- 위키 [[patterns/owasp-llm-typescript-mitigations]]의 **structured output + 좁은 도구 스키마**가 같은 결의 1차 방어

### 3단계 — Q-LLM은 도구 0, 결과는 **타입 강제**된 형태로만 반환

- "이메일에서 회의 시간 1개 추출"이면 결과는 `{ time: "ISO 8601" }`로 강제
- 자유 텍스트가 P-LLM으로 흘러들지 않게

### 4단계 — HITL 체크포인트

CaMeL의 user fatigue 경고 — sensitive 액션(메일 발송, 결제, 권한 변경)에서만 사람 승인. 모든 단계에 두면 자동 승인이 시작된다.

## 위키 매핑

- [[patterns/owasp-llm-typescript-mitigations]] — agentic 확장 섹션에 dual-LLM/CaMeL 패턴 명시
- 새 페이지 후보: `concepts/agent-supply-chain-security` (이 패턴은 supply chain 보안의 **방어 측 architectural 답**)
- examples/agent-safety-sketch에 dual-LLM 최소 TS 구현 추가 (오늘 작업)

confidence: high (Simon Willison 원본 + DeepMind 논문 + InfoQ 정리 다중 교차)
