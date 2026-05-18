---
title: "Affordance Agent Harness: Verification-Gated Skill Orchestration (arXiv 2605.00663)"
source_url: "https://arxiv.org/abs/2605.00663"
source_type: "arxiv-paper"
authors: ["(저자 — arXiv 페이지 추가 확인 필요)"]
published: 2026-05-01
fetched: 2026-05-13
tags: [harness, verification-gated, affordance, skill-orchestration, embodied, arxiv]
status: ingested
---

# Affordance Agent Harness: Verification-Gated Skill Orchestration

> arXiv:2605.00663v1, 2026-05-01. Affordance grounding(에이전트가 "open-world scene에서 어디에 어떻게 interact할지" 결정)에 verification-gated runtime을 적용.

## 메타

- **Title**: Affordance Agent Harness: Verification-Gated Skill Orchestration
- **arXiv**: <https://arxiv.org/abs/2605.00663>
- **HTML**: <https://arxiv.org/html/2605.00663v1>
- **Domain**: Embodied / visual agent — actionable region이 **작거나, 가려져 있거나, 반사되거나, 시각적으로 ambiguous**한 scene에서 작동.
- **주의**: WebFetch rate limit으로 본문 deep dive 미완. 저자명·정확 수치는 arXiv 페이지 추가 확인 필요. 이 노트는 abstract + 검색결과 정리.

## 한 줄 요약

**"Fixed pipeline은 per-instance difficulty에 못 맞춘다 — heterogeneous skill(detection, segmentation, interaction-imagination)을 evidence store + Router + verification-driven retry로 묶어 closed-loop runtime을 만들어라. 비용 budget 안에서."**

## 핵심 주장

### 1) 문제 — Fixed Pipeline의 한계

- 최근 affordance grounding 시스템들은 detection / segmentation / interaction-imagination 같은 여러 skill을 결합한다.
- 그러나 대부분 **고정 파이프라인**으로 orchestrate → per-instance difficulty에 못 맞춤.
- Intermediate error로부터의 targeted recovery 부족.
- 반복되는 object/scene에서 **경험 재사용** 못 함.

### 2) A-Harness 구조 (Affordance Agent Harness)

| 컴포넌트 | 역할 |
|---|---|
| **Evidence Store** | Skill 호출 결과(증거)를 누적·구조화 |
| **Router** | 현재 evidence·priors 기반으로 다음 skill 선택·parameterize (adaptive) |
| **Episodic Memory** | 반복 카테고리에 대한 prior 제공 (재사용) |
| **Verification Gate** | 현재 evidence가 commit하기에 충분한지 판단. 부족하면 **무엇이 missing인지** 진단 (relative, actionable diagnostic) |
| **Cost Control** | Bounded inference cost 안에서 retry / fallback |

### 3) Verification의 두 가지 출력

- **상대적 진단**: "이 evidence가 다른 evidence보다 약하다"
- **Actionable**: "그래서 다음에 어떤 skill을 호출해서 어떤 evidence를 보충해야 한다"

→ 단순한 "score < threshold이면 retry" 패턴이 아니라, **"무엇이 missing인지를 명시해 다음 액션을 유도"**하는 점이 차별.

## 의의

### "Verification before action"의 **embodied 도메인** 사례

- 같은 날 ingest한 [[journal/2026-05-13|GSAR]](claim 도메인) / [[journal/2026-05-13|Verify Before You Fix]](code 도메인)와 짝.
- 도메인-별 verifier 매핑:

| 도메인 | Evidence 종류 | Verifier |
|---|---|---|
| Text/Claim | Wikipedia gold evidence | GSAR typed groundedness score |
| Code | Execution trace, exploit 재현 | uAST + execution sandbox |
| Embodied/Visual | Skill outputs (detection, seg) + episodic prior | A-Harness verification gate |

### Harness Engineering 매핑

- [[concepts/harness-engineering|harness-engineering]]의 **Sensors + Controls + Memory** 컴포넌트가 한 시스템에 다 들어가 있다.
- [[patterns/harness-engineering-casebook|casebook]]에 30 도메인 중 "visual/embodied" 칸이 비어 있었다면 본 사례가 후보 행.

## 한계 / 주의

- **본문 미정독**: 본 노트는 abstract + 검색결과 기반. 정확한 정량 결과·저자명은 arXiv 페이지 후속 확인 필요.
- **Domain-specific**: open-world embodied scene에 특화. text/code agent에 직접 매핑은 어렵고, **개념적 매핑**(verification gate + evidence store + router)만 일반화 가능.

## 출처

- arXiv abstract (검색 요약)
- Submitted: 2026-05-01 (v1)
- License: 명시 안 됨 (arXiv 기본)
- 본 위키 fetch: 2026-05-13
