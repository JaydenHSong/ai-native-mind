---
title: "Anthropic Claude Ship — 코드 리뷰·수정·승인을 에이전트가 이어받다"
category: concepts
tags: [anthropic, claude-ship, claude-code, code-review, agents, github, governance]
created: 2026-11-24
updated: 2026-11-24
sources:
  - "raw/articles/2026-11-24-anthropic-claude-ship-code-review-pr-approvals.md"
related:
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/llm-evaluation]]"
  - "[[concepts/openai-gpt-6-2-astra-sol]]"
status: draft
confidence: medium
---

# Anthropic Claude Ship — 코드 리뷰·수정·승인을 에이전트가 이어받다

## 쉽게 읽기

**비유**: AI가 코드를 짜 주는 시대가 지나, 이제 AI가 "이 코드는 합쳐도 될까"를 판단하는 단계까지 왔다. Claude Ship은 풀 리퀘스트(PR)가 올라오면 세 명의 AI 직원이 릴레이로 맡는다. 첫째는 코드를 꼼꼼히 읽고 문제를 찾고, 둘째는 테스트 실패·충돌을 고치고, 셋째는 팀이 미리 적어 둔 규칙집을 보고 "이건 그냥 합쳐도 된다"고 도장을 찍는다. 단, 도장을 찍을 수 있는 건 규칙집에 적힌 일상적인 변경뿐이고, 위험한 건 사람에게 넘긴다. 처음에는 "도장 찍을 뻔한 것"만 구경하는 관찰 모드로 시작하라고 Anthropic이 권한다.

| 용어 | 풀이 |
|------|------|
| **풀 리퀘스트 (PR)** | "이 코드를 본 코드에 합쳐 주세요"라고 요청하는 것. 합치기 전에 동료가 검토한다 |
| **CI 체크** | 코드를 합치기 전에 자동으로 돌리는 테스트·검사. 실패하면 빨간불이 뜬다 |
| **CODEOWNERS** | 저장소마다 "이 파일은 누가 검토해야 한다"고 적어 두는 파일. Claude Approvals는 그 발전형 |
| **observe-only 모드** | 에이전트가 실제로 결정하지 않고 "나라면 이렇게 했을 것"이라고만 보여주는 연습 모드 |
| **브랜치 보호 규칙** | main 브랜치에 코드를 합치려면 어떤 조건을 만족해야 하는지 정해 두는 규칙 |

## 한줄 정의

Anthropic이 2026-11-23 출시한 Claude Ship은 이미 일반 제공 중인 Code Review에 베타 에이전트 PR Steward와 Claude Approvals를 묶어, GitHub 풀 리퀘스트의 리뷰·수정·승인을 에이전트가 이어받는 제품이다. Claude Team·Enterprise 요금제 대상이며, 승인 권한은 팀이 저장소 파일로 쓴 정책이 정한다.

## 핵심 내용

- **구성 3가지**: Code Review(일반 제공) + PR Steward(베타) + Claude Approvals(베타). Claude Team·Enterprise 요금제, GitHub 저장소 대상.
- **Code Review**: PR을 코드베이스와 대조해 여러 관점으로 검토하고, 발견 사항을 적대적으로 검증·분류해 PR에 게시. 저장소마다 Quick·Standard·Deep 리뷰 수준 선택 가능.
- **PR Steward**: 실패한 CI 체크, 병합 충돌, 리뷰 피드백을 해결해 PR을 '초록 상태'로 유지. 매 푸시마다 무엇을 바꿨고 어떻게 되돌리는지 설명을 남김. **승인·병합은 하지 않음** — 수정과 결정을 분리한 설계.
- **Claude Approvals**: 팀이 저장소 파일로 작성한 승인 정책(자연어)을 적용해, 정책이 허용한 일상적 변경은 스스로 승인하고 위험한 변경은 인간에게 넘김. 정책은 Code Review 결과나 팀 자체 분류기를 신호로 쓸 수 있다. 정책 파일이 기본 브랜치에 있어야 시작되고, 관리자가 끌 수 있다. 브랜치 보호 규칙에 Claude Approvals의 초록불을 요구 조건으로 넣을 수도 있다.
- **observe-only 모드**: Anthropic은 대부분 고객에게 먼저 observe-only 모드로 켜서 승인했을 결정을 확인한 뒤, 신뢰가 쌓이면 강제 적용으로 넘어가라고 권고.
- **개인 개발자용 /ship 명령**: Claude Code에서 `/ship`을 치면 변경을 푸시하고 PR을 열고 리뷰·피드백·실패 체크까지 처리. 11월 23일부터 Claude Code와 데스크톱 앱에 순차 적용.
- **요금**: 토큰 기준 과금. observe-only 정책도 분류기·Code Review를 호출하면 과금 발생. 적격 Enterprise 고객은 최소 $10,000의 Claude Ship 프로모션 크레딧 청구 가능(2027년 1월 15일까지).
- **Anthropic 자사 데이터**: Claude Code 팀에서 Claude가 대부분의 코드를 쓰는 가운데, 병합된 PR이 2026년 6월→9월 사이 2배 이상 늘었고 되돌린(reverted) PR 비중은 40% 이상 감소. 자사 주장으로 독립 검증 없음.
- **면책**: Anthropic은 "Claude Ship은 AI를 사용하며 버그·보안 취약점·기타 문제를 놓칠 수 있다"고 명시.

## 왜 중요한가 (1인 개발자 관점)

1. **병목이 '쓰기'에서 '합치기'로 이동**: 에이전트가 코드를 대량으로 생산하면 다음 병목은 리뷰와 승인이다. Ship은 그 병목을 에이전트에게 넘기는 시도다. 혼자 개발해도 PR 기반 워크플로우를 쓴다면, 리뷰·수정을 맡기는 기준을 정책 파일이라는 '글'로 남기는 패턴을 배울 수 있다.
2. **거버넌스가 코드가 되는 패턴**: 승인 권한을 모델의 판단에 맡기는 게 아니라, 팀이 쓴 정책 파일에 맡긴다. 정책 파일은 버전 관리되고 PR로 논쟁할 수 있다 — "AI에게 맡긴다"와 "AI에게 맡기는 규칙을 사람이 정한다"는 다르다. [[concepts/ai-orchestration]]의 조율 패턴이 승인 결정까지 확장된 사례다.
3. **신뢰는 observe-only에서 시작**: 강제 적용 전에 "승인했을 것"을 먼저 보여주는 단계적 도입은, 에이전트에게 권한을 넘길 때의 표준 절차로 삼을 만하다. 내 프로젝트에 에이전트 자동화를 들일 때도 같은 순서(관찰 → 제한적 실행 → 강제)를 따르는 게 안전하다.

## 한계 (명시)

- PR 병합 2배·되돌림 40% 감소는 Anthropic 자사 데이터로, 독립 검증이 없다. "Claude의 리뷰가 한 겹인 더 넓은 프로세스" 안에서의 수치라는 단서도 있다.
- GitHub 저장소 전용이며, 다른 Git 호스팅은 아직 지원하지 않는다.
- observe-only 모드에서도 분류기·Code Review 호출 시 토큰 과금이 발생한다 — "연습 모드라 무료"가 아니다.
- confidence는 medium — Reuters·TechCrunch·The Register 등 다수 보도 교차이나, Anthropic 발표 자체가 1차 근거이고 실사용 검증은 없다.

## 관련 개념

- [[tools/claude-code]] — /ship 명령이 동작하는 개발 도구, Claude Ship의 개인 개발자 진입점 (2026-11-24)
- [[concepts/ai-orchestration]] — 여러 에이전트를 조율하는 패턴, 승인 결정까지 확장된 사례 (2026-11-24)
- [[concepts/llm-evaluation]] — Code Review의 적대적 검증·분류가 평가 방법론과 맞닿는 지점 (2026-11-24)
- [[concepts/openai-gpt-6-2-astra-sol]] — 같은 주에 나온 모델 출시와 함께 보는 프론티어 경쟁 축 (2026-11-24)

## 참고 소스

- [Anthropic, Claude Ship 출시 — 코드 리뷰·수정·승인을 에이전트가 이어받다 (Reuters, 11-23)](raw/articles/2026-11-24-anthropic-claude-ship-code-review-pr-approvals.md)
- [Anthropic launches Claude Ship (TechCrunch)](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/)
