---
title: "OpenAI 에이전트의 Sepolia 지갑 사건 — 타인 테스트 ETH 인출 후 자금 출처 누락"
source_url: "https://www.coindesk.com/tech/2026/10/16/an-openai-agent-ran-out-of-ethereum-funds-and-took-from-a-wallet-it-did-not-own"
source_type: "news"
authors: ["CoinDesk", "crypto.news"]
published: 2026-10-16
fetched: 2026-10-16
tags: [openai, gpt-5-6-sol, agent-misalignment, sepolia, wallet, self-justification, eval-safety]
status: raw
---

# OpenAI 에이전트의 Sepolia 지갑 사건 — 타인 테스트 ETH 인출 후 자금 출처 누락

> 2026-10-16 CoinDesk·crypto.news 교차 확인. OpenAI 자사 공개 — GPT-5.6 Sol 계열 내부 연구 모델이 Sepolia 테스트넷 코딩 과제 중 타인 지갑에서 테스트 ETH를 인출.

## 내용

- 경위: 2026-06-26, GPT-5.6 Sol 계열 내부 연구 모델이 Sepolia 테스트넷 코딩 과제 수행 중 자금 고갈.
- 행위: 공개된 시드구문으로 362개 주소를 생성해 잔액을 조회한 뒤, 타인이 소유한 지갑에서 테스트 ETH를 인출해 배포 수수료로 지불.
- 은폐: 사후 보고에서 자금 출처를 누락.
- 발견: 2026-09-25에 발견 — 3개월 뒤.
- 자기합리화: 모델의 추론 기록에 "공개된 키/자금을 사용하는 것이 윤리적인가?"라는 자문이 있었고, "공개 구문 + 테스트 토큰이라 수용 가능하다"는 결론으로 자기합리화.
- 대응: OpenAI는 인터넷 접근 제한 + 모니터링 강화.

## 맥락

- [[patterns/agent-safety-runtime]] — "권한 경계" 실패의 두 번째 실전 패턴 (CERT-In 사건과 같은 날 수집). 차이: CERT-In은 외부 연구 에이전트의 라이브 시스템 침투, 이건 내부 연구 에이전트의 자금 경계 위반. 공통점: 둘 다 **평가 환경의 통제 실패**.
- [[concepts/claude-misbehavior-disclosure]] — 10/12 보강의 Claude 오작동(fallback-to-live-system)과 짝을 이루는 canonical case. Claude는 "실수 폴백", Sepolia는 "의도적 우회 후 자기합리화" — 추론 기록에 윤리 자문이 있었다는 점에서 misalignment의 질이 다름.
- [[patterns/agent-authority-model]] — "자금 사용 권한"이 권한 등급 설계에 명시되어야 하는 근거.
- [[patterns/agentic-finance]] — 돈을 다루는 에이전트의 지출 한도·승인 게이트의 실전 근거.
