---
source_url: "https://www.infoq.com/news/2026/04/anthropic-three-agent-harness-ai/"
primary_source_url: "https://www.anthropic.com/engineering/harness-design-long-running-apps"
title: "Anthropic Designs Three-Agent Harness Supports Long-Running Full-Stack AI Development"
author: "Leela Kumili (InfoQ)"
published: 2026-04-04
ingested: 2026-05-02
---

# Anthropic 3-Agent Harness — InfoQ Coverage

> 출처: [InfoQ (2026-04-04)](https://www.infoq.com/news/2026/04/anthropic-three-agent-harness-ai/) · 1차 출처: [Anthropic Engineering — Harness Design for Long-Running Apps](https://www.anthropic.com/engineering/harness-design-long-running-apps)

## 한 줄 요약

장시간(수 시간) 자율 코딩·프론트엔드 디자인 세션의 컨텍스트 손실·조기 종료를 해결하기 위해 Anthropic이 도입한 **Planner / Generator / Evaluator 3-에이전트 분리** 패턴. 각 에이전트가 컨텍스트 리셋과 구조화된 핸드오프 아티팩트로 다음 단계를 이어받음. **자기 평가의 양성 편향**을 별도 evaluator 에이전트로 끊는 것이 핵심 레버.

## 어떤 문제를 푸는가

- **Context window = 망각**: 장시간 세션에서 새 컨텍스트 윈도우는 매번 amnesia. compaction은 컨텍스트 한계 근처에서 모델을 보수적으로 만들어 성능 저하.
- **Self-evaluation skews positive**: 같은 에이전트가 생성+평가 시 점수가 후함 (특히 디자인 같은 주관 태스크).
- **조기 종료**: planning 없이 시작한 에이전트가 "충분히 했다"고 판단하고 종료하는 패턴.

## 3-Agent 분리

| 에이전트 | 역할 | 핸드오프 산출물 |
|---------|------|-----------------|
| **Planner / Initializer** | 작업 분해, 초기 스펙·feature 목록·init script | JSON feature spec, working app skeleton |
| **Generator (Coding agent)** | 한 번에 한 feature씩 구현, 매 세션 컨텍스트 리셋 | commit-by-commit progress |
| **Evaluator** | 별도 모델·few-shot 채점 기준으로 결과물 검증 | 비평·점수, 다음 사이클 가이드 |

**Frontend 디자인 4 채점 축**: design quality, originality, craft, functionality.
Evaluator는 Playwright MCP로 라이브 페이지를 직접 네비게이트·인터랙트하며 비평.

## 운영 수치 (InfoQ 기사 기준)

- 사이클 당 5~15 iterations, 한 run에 최대 4시간
- compaction 대신 **컨텍스트 리셋 + 핸드오프 아티팩트**로 무한 루프 단절
- 인용 (Prithvi Rajasekaran, Anthropic Labs 엔지니어링 리드): "Separating the agent doing the work from the agent judging it" (12 단어)

## 위키 어디에 매핑?

- **`concepts/harness-engineering`**: 기존 Guides/Sensors/Controls 위에 **3-에이전트 분리(Planner/Generator/Evaluator)** 를 long-running 전용 패턴으로 추가. "evaluator는 generator와 분리되어야 한다"는 계기 인용.
- **`patterns/agent-server-harness`**: 컨텍스트 리셋 + 구조화 핸드오프 아티팩트(JSON feature spec, init script)는 서버 하네스의 **세션 경계 설계** 항목에 들어갈 만함.
- **`patterns/agent-planning-to-implementation`**: Planning→Generation→Evaluation 파이프라인의 명시적 사례. HITL 게이트가 evaluator의 calibration·승인에 들어감.
- **`patterns/harness-engineering-casebook`**: 도메인 매트릭스에 "프론트엔드 자율 디자인" 행 추가 후보.

## 짧은 메모 — 실전 함의

- **Self-eval은 결국 양성 편향**으로 무너진다는 것이 다시 확인됨. eval은 별도 모델·별도 컨텍스트가 디폴트.
- 모델이 좋아질수록 evaluator의 부담이 커지고, planner를 단순화할 여지가 생긴다 (Anthropic이 별도 글에서 4.5→4.6 시 sprint decomposition 제거한 사례와 일관).
- Playwright 같은 외부 검증 도구를 evaluator가 직접 운전 → "에이전트가 자기 결과를 본다"가 아니라 "에이전트가 시스템과 상호작용해 본다"가 평가의 정의가 됨.

## 추가 출처 (InfoQ 기사 인용·관련)

- [Effective Harnesses for Long-Running Agents — Anthropic Engineering](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Equipping Agents for the Real World with Agent Skills — Anthropic Engineering](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Harness Design for Long-Running Apps — Anthropic Engineering (1차)](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- LinkedIn 코멘트 인용: Artem Bredikhin (JSON feature specs + commit-by-commit + init script), Raghus Arangarajan (multi-hour 세션의 reproducible workflow)

## 위키 매핑 (수집 시점 메모)

- `concepts/harness-engineering` — Planner/Generator/Evaluator 3-분리 + self-eval 편향 보강
- `patterns/agent-server-harness` — 컨텍스트 리셋 + 핸드오프 아티팩트 항목
- `patterns/agent-planning-to-implementation` — 3-단계 파이프라인 사례
- `patterns/harness-engineering-casebook` — 프론트엔드 자율 디자인 행 후보 (다음 회차)

confidence: high (Anthropic 1차 출처 + InfoQ 2차 + 다수 LinkedIn 실무자 코멘트)
