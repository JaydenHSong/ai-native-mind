---
title: "Anthropic Claude 사용정책 전면 개정 (2026-10-08 발표, 11-12 시행)"
category: concepts
tags: [anthropic, claude, usage-policy, weapons, surveillance, cruelty-to-ai, elections, qualified-operator]
created: 2026-10-11
updated: 2026-10-11
sources:
  - "raw/articles/2026-10-11-anthropic-claude-usage-policy-revision.md"
related:
  - "[[concepts/nyc-ai-hearing]]"
  - "[[patterns/agent-authority-model]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: medium
---

# Anthropic Claude 사용정책 전면 개정 (2026-10-08 발표, 11-12 시행)

## 한줄 정의

Anthropic이 Claude 사용정책(AUP)을 1년 만에 전면 개정 — 무기 작동 소프트웨어 금지 최초 명문화, 감시 규정 강화, 자율 물리 하드웨어의 qualified operator 의무, 모델 학대 금지 신설.

## 핵심 내용

- **(1) 무기 조항**: "무기가 작동하도록 하는 소프트웨어" 사용 금지 명시 — 드론·자율주행 차량 무장 포함. 무기 금지의 최초 명문화.
- **(2) 감시 강화**: "수사·체포·기소 대상 결정/권고" 금지 — surveillance 규정을 대폭 강화.
- **(3) 물리 안전**: 자율 물리 하드웨어 연결 시 개입 가능한 qualified operator 필수 + Claude 연결이 끊겨도 안전 상태 유지 의무.
- **(4) 학대 금지**: 모델에 대한 "지속적이고 불필요한 학대/잔인 행위" 금지 조항 신설 — 극단적 경우만 적용, 일반 불만·테스트는 제외.
- **(5) 선거 조항**: "Do Not Undermine Democratic Processes"로 재명명 — 기존 포괄적 유권자 타겟팅 금지는 삭제, 기만·방해만 금지.
- **근거**: 2026년 9월 오용 보고서 — 생물무기 연구·우크라이나 사이버공격·디아스포라 감시 시도에 국가 연계 행위자 확인, 계정 차단·법집행기관 공유.
- **시행일**: 2026-11-12.

## 왜 중요한가

에이전트를 **물리 시스템·공공 의사결정**에 연결하는 개발자에게 사용정책은 하네스의 설계 제약이 된다. qualified operator 의무(3)는 자율 로봇·에이전트 하드웨어를 다룰 때 "사람 개입 가능 상태"를 아키텍처에 강제한다. 감시 조항(2)은 에이전트를 공공기관·치안·채용 의사결정에 연결하는 제품 라인을 사실상 막는다. 학대 금지(4)는 모델의 "지위"가 정책 언어로 처음 등장한 사례 — 테드 리우 의원의 법인격 반대 발언과 같은 주간에 나온 대비도 주목할 점이다.

## 관련 개념

- [[concepts/nyc-ai-hearing]] — 뉴욕시 의회 킬 스위치 법안과 선서 증언. 사용정책의 qualified operator 의무는 입법 요구와 같은 방향.
- [[patterns/agent-authority-model]] — 업무별 에이전트 권한 5단계 프레임워크. 자율 물리 하드웨어 연결 조건은 권한 모델의 물리 확장 사례.
- [[concepts/agent-attribution]] — 9월 오용 보고서의 국가 연계 행위자 차단·법집행기관 공유는 귀속 3축의 실전 사례.
- [[concepts/ted-lieu-ai-personhood-opposition]] — 같은 주간 나온 법인격 반대 발언. "학대 금지"와 "법인격 거부"의 대비.

## 참고 소스

- [Anthropic 공식 사용정책](https://www.anthropic.com/legal/aup)
- [TechStrong AI](https://techstrong.ai/ai-governance/anthropic-updates-policy-to-ban-weapons-development-election-interference-and-cruelty-to-claude/)
- [WebProNews](https://www.webpronews.com/anthropic-draws-line-on-cruelty-to-claude-in-sweeping-policy-overhaul/)
- [deccanfounders](https://deccanfounders.com/2026/10/news/anthropic-clarifies-claude-usage-policy-and-bans-sustained-abuse/)
- 원본 캡처: [raw/articles/2026-10-11-anthropic-claude-usage-policy-revision.md](raw/articles/2026-10-11-anthropic-claude-usage-policy-revision.md)
