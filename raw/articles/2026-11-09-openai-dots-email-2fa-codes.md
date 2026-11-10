---
title: "OpenAI Dots, 연결된 받은편지함에서 로그인 코드 가져오기 시작 — 2FA도 에이전트가 처리 (11-07)"
source_url: "https://cryptobriefing.com/openai-dots-agents-2fa-email-codes/"
source_type: "news"
authors: ["Crypto Briefing", "OpenAI"]
published: 2026-11-07
fetched: 2026-11-09
tags: [openai, dots, agent, 2fa, email, authentication, persistent-agent]
status: raw
---

# OpenAI Dots, 연결된 받은편지함에서 로그인 코드 가져오기 시작 — 2FA도 에이전트가 처리 (11-07)

> Crypto Briefing이 11-07 보도한 바에 따르면 OpenAI의 상시 가동 에이전트 Dots가 사용자가 연결한 받은편지함에서 회원가입·로그인 인증 코드를 가져와 입력할 수 있게 됐다. 사용자가 권한을 준 경우에만 동작한다. 다만 초기 사용자 피드백에 따르면 Dots는 코드를 보고도 입력 전에 머뭇거리는 경우가 있다. OpenAI는 아직 공개 릴리스 노트에 이 기능을 올리지 않았다.

## 내용

- **기능**: 로그인·회원가입 과정에서 이메일로 온 6자리 코드를 연결된 받은편지함에서 가져와 해당 사이트에 입력한다. 주말 동안 ChatGPT에 이 옵션이 나타나기 시작했고, 토요일에 스크린샷이 공유됐다. 저장된 로그인으로 새 기기에서 로그인할 때는 여전히 사용자 확인이 필요하다.
- **전제**: 사용자가 받은편지함을 연결하고 권한을 줘야만 동작한다. Dots는 GPT-6 Astra 기반의 상시 가동 에이전트로, 격리된 클라우드 컴퓨터에서 동작하며 4,000개 이상 앱에 플러그인으로 연결된다. 9-29 DevDay에서 출시됐다.
- **안전장치**: Auto-review가 작업 전 계획을 검사하고, Custom Rules로 작업 승인 규칙을 정한다. 거래 확인·민감 데이터 변경 같은 고위험 작업은 제한된다. 초기 피드백에서 나타난 "입력 전 머뭇거림"은 내장 보안 설정 때문으로 보인다.
- **접근**: ChatGPT Pro·Business Premium 구독자(1개 Dot 포함)와 Enterprise 베타. Pro는 월 $100부터다.
- **한계**: OpenAI 공식 발표가 아니라 보도·사용자 피드백 기반이다. 공개 릴리스 노트에 아직 없으며, "머뭇거림"의 정확한 원인은 미확인이다. 2FA 코드를 에이전트가 다루게 되면서 인간 신원 확인 절차 하나가 자동화되는 셈이라, 고위험 작업 차단 장치가 사실상 마지막 방어선이 된다.

## 맥락

- [[concepts/persistent-agent]] — 상시 가동형 에이전트, 자체 스케줄·아이덴티티, OpenAI "O" 리크 (2026-09-27)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급
- [[concepts/openai-gpt6-astra-safety-underperformance]] — GPT-6 Astra의 안전 연구 은밀한 저성과 (2026-11-06)
- [[concepts/claude-duet-proactive-agent]] — Anthropic Claude Duet, 상시 대기 에이전트 리서치 프리뷰 (2026-10-22)
