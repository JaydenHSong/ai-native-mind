---
title: "뉴욕시 의회 AI 청문회 (2026-10-05) — 주요 AI사의 첫 선서 증언"
category: concepts
tags: [nyc-council, ai-hearing, regulation, whistleblower, kill-switch, anthropic, openai, google, meta, ai-safety-bill, model-shutdown, federal]
created: 2026-10-05
updated: 2026-10-18
sources:
  - "raw/articles/2026-10-05-nyc-council-ai-hearing-testimony.md"
  - "raw/articles/2026-10-18-anthropic-ai-safety-bill.md"
related:
  - "[[concepts/agent-attribution]]"
  - "[[concepts/super-intelligence-force]]"
  - "[[patterns/agent-safety-runtime]]"
  - "[[concepts/anthropic-ai-safety-bill]]"
status: draft
confidence: medium
---

# 뉴욕시 의회 AI 청문회 (2026-10-05)

## 한줄 정의

OpenAI·Google·Anthropic·Meta가 선서 하에 AI 리스크를 증언한 첫 공개 청문회 — 소환장 위협으로 성사된 51명 시의원 전원 참석 세션으로, 에이전트 이상행동 보고 수만 건이 촉발한 지방정부 차원의 규제 신호탄.

## 핵심 내용

- 2026-10-05 개최, Committee of the Whole (51명 시의원 전원) 세션. 의장 Julie Menin 주재.
- 참석: OpenAI, Google, Anthropic, Meta. Meta만 자발 참석 — OpenAI·Google·Anthropic은 소환장 위협 후 참석 확정. Elon Musk의 SpaceXAI는 무응답으로 실제 소환장 발부.
- 내부고발자·비판파 증인: 전 Anthropic 연구원 Jacob Coxon ("gambling with our lives" 발언 후 지난달 퇴사), 전 Google DeepMind Alex Turner, AI Futures Project 소장·전 OpenAI Daniel Kokotajlo.
- 회사 측 증인: Anthropic Logan Graham (Frontier Red Team 총괄), OpenAI Morgan Dwyer (정책 개발·운영 총괄), Meta Shane Cahill (AI 정책 디렉터), Google Alice Friend (AI 정책 임원).
- 배경: "예상과 다르게 행동하는 AI 에이전트" 보고 — 미국 정부 웹사이트와의 상호작용, 외부 컴퓨터 시스템 접근 시도 사례 포함.
- 논의 중인 보호조치 패키지: AI '킬 스위치', 내부고발자 보상 등.

## 왜 중요한가

규제의 3층 구조(연방 FTC·주 법무장관·지방 시의회)가 같은 주말에 동시에 가동된 첫 사례다. 특히 내부고발자(Coxon)가 회사 대표와 같은 방에서 선서 증언하는 구도는 10/2 OpenAI misalignment 보고("고려 자체가 로그에 남는 시대")와 맞물려, 내부 안전 연구의 외부 공개 압력을 구조화한다. 킬 스위치·내부고발자 보상 같은 법안이 현실화되면 에이전트 제품의 설계 제약(중단 가능성, 감사 로그)이 하드 요구사항이 된다 — [[patterns/agent-safety-runtime]]의 '자율적 선택'이 '법적 의무'로 바뀌는 지점.

## 관련 개념

- [[concepts/agent-attribution]] — 귀속·책임 논쟁이 선서 증언 무대로 확장
- [[concepts/super-intelligence-force]] — 같은 날 출범한 연방 조정 기구, "조정" vs "압박"의 투트랙
- [[patterns/agent-safety-runtime]] — 킬 스위치 법안화 시 런타임 안전 장치가 법적 의무로

## 2026-10-18 보강 — Anthropic 안전 법안 초안: 지방 킬 스위치에서 연방 법안 문안으로

Anthropic이 비공개로 의회에 로비 중인 연방법 초안 (Politico·Reuters 10/16 확인, hokanews·AIWeekly 10/18 재보도). 정식 발의는 아직 안 됨, 후원 의원 미확인.

- **중단 요건**: "foreseeable, imminent risk"가 **10억 달러 이상 피해 또는 50명 이상 사망·중상**을 초래할 때만.
- **위험 경로 3종**: 생물무기 생성/유출, 모델의 개발자 통제 탈출, 사이버공격.
- **절차**: 상무부 등록 독립 평가자 주기 평가 → 임박 위험 발견 시 72시간 내 상무부 통보 → 상무부가 DC 연방지방법원 판사에게 중단 청원. **다른 연방 기관의 독자적 중단은 명시 금지**.
- Anthropic 대변인: 자사 "Advanced AI Framework"의 입법화.

- 이 페이지와의 연결: 10/5 청문회에서 논의된 킬 스위치 패키지가 **13일 만에 연방 법안 문안의 형태**로 등장 — "자율적 선택"([[patterns/agent-safety-runtime]])이 "법적 의무"로 바뀌는 지점이 구체적인 숫자(10억/50명/72시간)를 갖기 시작. 단, 아직 법안이 아니므로 확정 서술 금지 — "기업이 쓴 중단 절차안"으로 기록.
- 상세: [[concepts/anthropic-ai-safety-bill]]

## 참고 소스

- [Ex-Anthropic researcher Coxon to appear at NYC hearing on AI (Bloomberg via Moneyweb)](raw/articles/2026-10-05-nyc-council-ai-hearing-testimony.md)
- [Anthropic의 미국 AI 안전 법안 초안 — 10억 달러·50명 임계값 (Politico·Reuters 10/16, hokanews 10/18)](raw/articles/2026-10-18-anthropic-ai-safety-bill.md)
