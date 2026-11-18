---
title: "Microsoft Ignite 2026 — MAI Code 2 공개, Copilot Autopilot·Agent 365 5,000만 개"
category: concepts
tags: [microsoft, mai-code-2, github-copilot, ignite, coding-agent]
created: 2026-11-18
updated: 2026-11-18
sources:
  - "raw/articles/2026-11-18-microsoft-ignite-mai-code-2.md"
related:
  - "[[concepts/microsoft-maia-300]]"
  - "[[concepts/tool-use]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/mcp]]"
status: draft
confidence: medium
---

# Microsoft Ignite 2026 — MAI Code 2 공개, Copilot Autopilot·Agent 365 5,000만 개

## 쉽게 읽기

**비유**: Microsoft가 자기 회사의 코딩 AI 모델(MAI Code 2)을 내놨다. 회사 말로는 "남의 최고 모델 성능의 96%를 5% 가격에" 낸다고 한다. **단, 이 숫자는 Microsoft가 자기 시험으로 잰 것이고, 남이 다시 재서 확인한 적은 없다.** 같은 날 Copilot은 "24시간 일하는 비서(Autopilot)" 모드를 얻었고, 등록된 에이전트가 5,000만 개를 넘었다.

| 용어 | 풀이 |
|------|------|
| **코딩 모델** | 코드를 짜는 데 특화된 AI 모델 |
| **파라미터** | 모델의 "뇌세포 수" 같은 것 — 클수록 보통 더 똑똑하지만 무겁다. 활성 파라미터는 한 번에 실제로 쓰는 부분 |
| **하네스** | 모델을 굴리는 주변 장치·틀 — 어떻게 시키고 결과를 어떻게 받는지 정하는 부분 |
| **Autopilot** | 사람이 시키지 않아도 24시간 상주하며 일을 처리하는 에이전트 모드 |
| **Agent 365** | 기업이 쓰는 에이전트를 등록·관리하는 Microsoft의 대장부 |

## 한줄 정의

Microsoft가 Ignite 2026 키노트에서 7개 자체 MAI 모델을 공개했다. 코딩 모델 **MAI Code 2**는 GitHub Copilot에서 정식 출시됐고, Microsoft는 자체 하네스 기준 Claude Opus 5.5 대비 **96% 성능을 5% 비용**으로, GPT-6.1 Sol 대비 **98% 성능을 40% 비용**으로 제공한다고 주장했다. Copilot은 Chat·Cowork·Code·Autopilot 4개 모드로 재편됐고, 24시간 상주하는 Autopilot 에이전트와 Agent 365에 등록된 에이전트 **5,000만 개** 돌파가 함께 발표됐다.

## 핵심 내용

- **MAI Code 2**: 자체 코딩 모델, GitHub Copilot에서 GA. Copilot Pro/Pro+/Max/Business/Enterprise에서 사용 가능. 약 2.8T 전체 파라미터 / 77B 활성 파라미터. Microsoft 주장(자체 내부 하네스, 독립 재현 없음): DeepSWE 1.1, TerminalBench 2.1, SWE-Atlas, FrontierCode 1.1 평균 기준 Claude Opus 5.5 대비 96% 성능을 5% 비용으로, GPT-6.1 Sol 대비 98% 성능을 40% 비용으로 제공. 비용은 50% 프로모션 가격 기준(Code 2 프로모션 $0.50/$2.50, 2027년 5월 17일까지).
- **MAI Code 2 Flash**: 약 398B 전체 / 12B 활성 파라미터. Copilot Free/Student 포함 전 플랜에서 사용 가능, Foundry에서는 제한 프리뷰. 7개 MAI 라인업에는 Cyber 2 Flash, Image 2.7, Realtime 1, Decision 1.1도 포함.
- **한계**: Microsoft는 Code 2가 기초 과학이나 초장기 에이전트 작업 같은 "더 어려운 문제"에는 아직 맞춰지지 않았다고 밝혔다.
- **Copilot 재편**: Chat·Cowork·Code·Autopilot 4개 모드. 24시간 상주하는 Autopilot 에이전트와 자연어 앱 생성기 Copilot Code는 Frontier 고객 대상으로 롤아웃 중. Agent 365에 등록된 에이전트는 5,000만 개를 넘었다.
- **Maia 300**: 자체 AI 칩 공개. 선도 GPU 대비 와트당 토큰 40%↑ 주장(자체 기준).
- **MAI Licensed Weights**: 신뢰 고객에게 모델 가중치를 제공하는 프로그램도 함께 발표 — 에이전트 커스터마이징 맥락에서 중요.
- **주의**: 성능·가격 수치는 모두 Microsoft 자체 주장이며 독립 검증이 없다. 프로모션 가격이 끝난 뒤의 실효 비용도 별개다.

## 왜 중요한가 (1인 개발자 관점)

1. **가격 경쟁이 모델 선택의 기준을 바꾼다**: "96% 성능에 5% 비용"이 사실이라면, 코딩 모델 선택은 "가장 똑똑한가"에서 "내 작업에 충분한가"로 바뀐다. [[concepts/tool-use]] 관점에서 Copilot 안에서 바로 쓸 수 있는 저렴한 모델은 실무의 기본값이 될 수 있다 — 단, 숫자는 Microsoft 자체 하네스 기준이라 내 작업으로 재봐야 한다.
2. **프로모션 가격의 함정**: $0.50/$2.50은 2027년 5월 17일까지의 50% 프로모션 가격이다. 프로모션 종료 뒤 실효 비용을 모르면 장기 선택을 할 수 없다.
3. **상주형 에이전트가 기본 UX가 된다**: 24시간 상주하는 Autopilot이 Copilot의 한 모드로 들어왔다. [[concepts/ai-orchestration]]의 상주형 매니저 에이전트 흐름이 기업용 Copilot의 기본값이 되는 전환이다. "시켜서 하는 도구"에서 "알아서 돌아가는 동료"로의 이동이다.
4. **5,000만 개 에이전트 등록의 의미**: [[concepts/mcp]] 관점에서 Agent 365의 규모는 에이전트 생태계가 "몇 개의 유명한 에이전트"가 아니라 "등록·관리해야 할 수천만 개의 개체" 단계에 들어섰다는 뜻이다.
5. **가중치 라이선스**: MAI Licensed Weights는 모델을 내 환경에 맞게 고쳐 쓸 수 있는 길을 연다 — 에이전트 커스터마이징을 직접 하는 1인 개발자에게는 API 가격보다 더 중요할 수 있는 발표다.

## 한계 (명시)

- 성능·가격 수치는 전부 Microsoft 자체 주장이며 독립 검증이 없다. "96% 성능·5% 비용"은 자체 내부 하네스 기준 평균이다.
- Maia 300의 와트당 토큰 40%↑도 자체 기준 주장이다.
- Code 2가 기초 과학·초장기 에이전트 작업에는 아직 맞지 않는다고 Microsoft 스스로 밝혔다.
- confidence는 medium — Microsoft 공식 블로그 1차 출처 + 7개 모델·Copilot 재편·Agent 365 수치가 한 발표에 묶여 있으나, 성능·가격 주장의 독립 검증이 없음.

## 관련 개념

- [[concepts/microsoft-maia-300]] — 자체 AI 칩 Maia 300, 이번 Ignite에서 함께 공개 (2026-10-12)
- [[concepts/tool-use]] — 코딩 에이전트의 가격 경쟁이 모델 선택의 기준을 바꾸는 흐름
- [[concepts/ai-orchestration]] — 상주형 매니저 에이전트(Autopilot)가 기업용 Copilot의 기본 UX가 되는 전환
- [[concepts/mcp]] — Agent 365의 5,000만 개 에이전트 등록이 의미하는 에이전트 생태계 규모

## 참고 소스

- [Microsoft Ignite 2026 — 자체 코딩 모델 MAI Code 2 공개, Copilot Autopilot·Agent 365 5,000만 개 (Microsoft, 11-17)](raw/articles/2026-11-18-microsoft-ignite-mai-code-2.md)
