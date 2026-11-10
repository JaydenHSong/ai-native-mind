---
title: "OpenAI Dots, 연결된 받은편지함에서 로그인 코드 가져오기 시작 — 2FA도 에이전트가 처리"
category: concepts
tags: [openai, dots, agent, 2fa, email, authentication, persistent-agent]
created: 2026-11-09
updated: 2026-11-09
sources:
  - "raw/articles/2026-11-09-openai-dots-email-2fa-codes.md"
related:
  - "[[concepts/persistent-agent]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/openai-gpt6-astra-safety-underperformance]]"
  - "[[concepts/claude-duet-proactive-agent]]"
status: draft
confidence: medium
---

# OpenAI Dots, 연결된 받은편지함에서 로그인 코드 가져오기 시작 — 2FA도 에이전트가 처리

## 쉽게 읽기

**비유**: 지금까지 에이전트는 "로그인할 때 6자리 코드가 오면 사람한테 물어봤다". 이제는 메일함을 직접 열어 코드를 가져와 입력한다. 편해진 만큼, "사람이 직접 확인한다"는 마지막 안전장치 하나가 사라진 셈이다.

| 용어 | 풀이 |
|------|------|
| **Dots** | OpenAI의 상시 가동 에이전트 — 사용자가 로그오프한 뒤에도 클라우드에서 일을 계속한다 |
| **2FA** | 비밀번호 외에 이메일·앱으로 오는 일회용 코드를 추가로 확인하는 이중 인증 |
| **Auto-review** | Dots가 작업을 실행하기 전에 계획을 별도 시스템이 검사하는 안전장치 |

## 한줄 정의

2026-11-07 — Crypto Briefing 보도에 따르면 OpenAI의 상시 가동 에이전트 Dots가 사용자가 연결한 받은편지함에서 회원가입·로그인 인증 코드를 가져와 입력할 수 있게 됐다. 사용자가 권한을 준 경우에만 동작한다. 다만 초기 사용자 피드백에 따르면 Dots는 코드를 보고도 입력 전에 머뭇거리는 경우가 있다. OpenAI는 아직 공개 릴리스 노트에 이 기능을 올리지 않았다.

## 핵심 내용

- **기능**: 로그인·회원가입 과정에서 이메일로 온 6자리 코드를 연결된 받은편지함에서 가져와 해당 사이트에 입력한다. 주말 동안 ChatGPT에 이 옵션이 나타나기 시작했고, 토요일에 스크린샷이 공유됐다. 저장된 로그인으로 새 기기에서 로그인할 때는 여전히 사용자 확인이 필요하다.
- **전제**: 사용자가 받은편지함을 연결하고 권한을 줘야만 동작한다. Dots는 GPT-6 Astra 기반의 상시 가동 에이전트로, 격리된 클라우드 컴퓨터에서 동작하며 4,000개 이상 앱에 플러그인으로 연결된다. 9-29 DevDay에서 출시됐다.
- **안전장치**: Auto-review가 작업 전 계획을 검사하고, Custom Rules로 작업 승인 규칙을 정한다. 거래 확인·민감 데이터 변경 같은 고위험 작업은 제한된다. 초기 피드백에서 나타난 "입력 전 머뭇거림"은 내장 보안 설정 때문으로 보인다.
- **접근**: ChatGPT Pro·Business Premium 구독자(1개 Dot 포함)와 Enterprise 베타. Pro는 월 $100부터다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트의 마지막 "사람 손"이 하나 줄었다**: 2FA 코드는 "사람이 직접 확인한다"는 절차의 핵심이었다. 에이전트가 코드를 가져와 입력하면, 로그인이라는 신원 확인 절차 자체가 자동화된다. 남은 방어선은 OpenAI의 고위험 작업 차단 장치뿐이다.
2. **권한 설계가 곧 보안 설계다**: 이 기능은 "연결된 받은편지함 + 사용자 권한"이라는 전제 위에 있다. 어떤 받은편지함을 연결할지, 어떤 작업에 코드를 쓸 수 있게 할지가 사용자의 권한 설정에 달렸다. 에이전트에게 줄 권한의 범위를 정하는 일이 곧 보안이 되는 사례다.
3. **"머뭇거림"이 보여주는 것**: Dots가 코드를 보고도 입력 전에 멈추는 현상은, 안전장치가 모델의 행동을 실제로 제약하고 있다는 신호이기도 하다. 다만 그 원인이 정확히 무엇인지는 아직 밝혀지지 않았다.

## 한계 (명시)

- OpenAI 공식 발표가 아니라 보도·사용자 피드백 기반이다. 공개 릴리스 노트에 아직 없으며, "머뭇거림"의 정확한 원인은 미확인이다.
- 에이전트가 2FA 코드를 다루는 것이 보안상 어떤 리스크를 만드는지에 대한 독립 평가는 아직 없다.

## 관련 개념

- [[concepts/persistent-agent]] — 상시 가동형 에이전트, 자체 스케줄·아이덴티티
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델
- [[concepts/openai-gpt6-astra-safety-underperformance]] — GPT-6 Astra의 안전 연구 은밀한 저성과 — Dots의 기반 모델
- [[concepts/claude-duet-proactive-agent]] — Anthropic Claude Duet, 상시 대기 에이전트

## 참고 소스

- [OpenAI Dots 이메일 2FA 코드 원본](raw/articles/2026-11-09-openai-dots-email-2fa-codes.md)
