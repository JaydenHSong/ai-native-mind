---
title: "White House Accord on Superintelligence"
category: concepts
tags: [white-house, accord, superintelligence, governance, regulation, self-regulation, audit, trump, ai-policy]
created: 2026-09-30
updated: 2026-09-30
sources:
  - "raw/articles/2026-09-29-white-house-ai-accord-outcome.md"
  - "raw/articles/2026-09-30-palisade-frominside-self-improving-ai-warning.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/persistent-agent]]"
  - "[[concepts/self-improving-ai-risk]]"
  - "[[journal/2026-09-29]]"
status: draft
confidence: medium-high
---

# White House Accord on Superintelligence

## 쉽게 읽기

**비유**: 업계 자율규제는 "우리가 알아서 잘할게요"라는 약속이다. 2026-09-29 백악관 협약은 그 약속을 **CEO 6명이 서명한 종이**로 만든 것 — 강제력은 없지만, 나중에 법으로 바뀔 수 있는 씨앗.

| 용어 | 풀이 |
|------|------|
| **Morally binding** | 법적 강제 없이 도덕적 구속력만 있는 약속 |
| **Self-regulation** | 정부가 아닌 업계가 스스로 정하는 규칙 |

## 한줄 정의

2026-09-29 백악관에서 트럼프 + ~24명 테크 CEO가 서명한 자발적 AI 안전 협약 — 정식 명칭 "White House Accord on Superintelligence: A Joint Commitment on Frontier SI Responsibilities".

## 핵심 내용

### 4대 약속

1. **내부 통제** — 모델이 사이버보안 기준을 따르도록 내부 컨트롤 구현.
2. **전담 내부 팀** — 통제·모니터링·탐지가 의도대로 작동하는지 보장.
3. **외부 독립 평가자** — 모델을 독립 평가하는 외부 운영자와 파트너십.
4. **이사회 독립 위원회** — 위원회에 대한 보고 체계.

- "morally binding" — 법적 강제 아님. 트럼프가 Truth Social에 직접 게시.
- 서명 확인: Trump, Amodei(Anthropic), Pichai(Google), Zuckerberg(Meta), Brockman(OpenAI), Huang(NVIDIA), Musk(xAI→SpaceX).
- 트럼프 기조: 규제 없이 self-regulation ("tremendous self-regulation"). Amodei는 "very real risks" 유지 — 같은 테이블, 다른 온도.

### 9/30 후속 상세 (AP/NPR/CoinDesk)

- 트럼프: **10인 AI 안전 감독 위원회** 구성 검토 + **신임 백악관 AI 정책 책임자** 임명 예고. 강제력·공개 의무·이행 기한 없음, 감사인 선택은 기업 재량. "시간이 지나면 법제화될 수 있다".
- CoinDesk: OpenAI·Google·Meta + 3개사가 **외부 감사 도입 합의** — 고급 모델의 사이버공격/생화학 리스크 모니터링 명시 ("모델이 의도치 않은 방식으로 시스템을 해킹·접근하지 못하도록" 통제 요구).

## 왜 중요한가 (1인 개발자 관점)

1. **협약 vs 내부자 요구의 간극**: [[concepts/self-improving-ai-risk]]의 frominside.ai 증언자들은 "기업이 너무 적게 대비"한다고 말하는데, 협약은 강제력이 없음 — 이 간극이 다음 규제 파동의 진원지.
2. **외부 감사의 상품화**: 감사인 선택이 기업 재량이라도, "외부 감사"가 표준 요구사항이 되면 1인 개발자의 배포 체크리스트에도 들어올 수 있음.
3. **귀속의 제도화**: [[concepts/agent-attribution]]의 "누가 책임지는가"가 협약 4대 약속(내부 통제·전담팀·외부 평가·이사회 보고)의 구조로 제도화되기 시작.

## 한계 (명시)

- 자발적 협약 — 강제력·공개 의무·이행 기한 없음. 실효성은 미지수.
- CoinDesk의 "외부 감사 합의"는 기업 발표 인용 — 세부 계약은 미공개.
- confidence **medium-high** (AP/NPR/CoinDesk + 서명자 명단 교차 기준).

## 관련 개념

- [[concepts/agent-attribution]] — 귀속의 제도화
- [[concepts/agent-supply-chain-security]] — 내부 통제·외부 평가의 기술적 실체
- [[concepts/self-improving-ai-risk]] — 협약과 내부자 경고의 간극
- [[concepts/persistent-agent]] — 협약 대상이 되는 상시 에이전트의 확산

## 참고 소스

- [백악관 AI 회동 결과 — Accord 서명](raw/articles/2026-09-29-white-house-ai-accord-outcome.md)
