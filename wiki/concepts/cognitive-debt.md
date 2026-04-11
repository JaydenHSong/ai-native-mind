---
title: "Cognitive Debt"
category: concepts
tags: [cognitive-debt, technical-debt, ai-coding, maintenance]
created: 2026-04-09
updated: 2026-04-11
sources:
  - "raw/notes/2026-04-09-cognitive-debt-deep.md"
related:
  - "[[concepts/agentic-engineering]]"
  - "[[patterns/vibe-coding-antipatterns]]"
  - "[[patterns/claude-md-guide]]"
  - "[[patterns/ai-code-review]]"
status: active
confidence: high
---

# Cognitive Debt

## 쉽게 읽기

**비유**: **기술 부채**가 “나중에 고칠 코드 똥덩어리”라면, **인지 부채**는 “나중에 머리 아프게 할 **이해 비용**”이다. AI가 빠르게 만든 코드를 내가 잘 모른 채 쌓아 두면, 다음에 고칠 때마다 **머리가 더 필요**해진다.

| 용어 | 풀이 |
|------|------|
| **Technical debt** | 품질을 조금 포기하고 **속도로 갚기로 미룬 빚** |
| **Cognitive debt** | 시스템을 **사람이 이해·추론**해야 할 부담이 쌓임 |
| **회귀 비용** | 고칠 때마다 깨질까 봐 **겁나는 정도** |

## 한줄 정의

소프트웨어 시스템을 이해하고 추론하는 데 필요한 **미래의 정신적 노력**의 축적. Technical Debt의 AI 버전.

## 핵심 내용

### Technical vs Cognitive Debt

| | Technical Debt | Cognitive Debt |
|--|---------------|---------------|
| **위치** | 코드베이스 | 개발자의 머릿속 |
| **발현** | 유지보수 느려짐 | 이해가 어려워짐 |
| **해결** | 리팩토링 | 재학습, 문서화 |
| **누구에 영향** | 팀 전체 | 개인 코그니션 |

Cognitive Debt는 **Epistemic Debt** (인식론적 부채)라고도 불림.

## 2026년 역설

> AI가 전체 새 상업 코드의 **41%** 작성. 속도는 역대 최고.
>
> 하지만 Stack Overflow 분석: 경험 많은 개발자가 AI 도구 사용 시 **19% 생산성 감소**.

**모순**: 빨라졌지만 더 느려졌다.

## 왜 발생하나

### Addy Osmani의 "80% 문제"

> "AI가 80%를 해준다. 나머지 20%가 진짜 문제다."

- AI는 happy path를 잘 처리
- 엣지 케이스, 에러, 예외 상황 남아있음
- 이 20% 해결하려면 **전체 맥락 이해** 필요
- 그런데 80%를 AI가 썼기 때문에 맥락이 없음
- → 20% 해결에 **더 많은 시간** 소요

### Comprehension Debt (Addy Osmani)

- AI가 생성한 코드를 **아무도 완전히 이해하지 못함**
- 수정/디버깅 시 처음부터 이해해야 함
- 리뷰 시간이 작성 시간보다 길어짐

### Velocity Illusion (속도 환상)

```
코드 생성 속도    ↑
이해 속도         ↓
단기 생산성       ↑
장기 유지보수 비용 ↑↑
```

## Karpathy의 인정

> "When Karpathy admits he barely writes code directly anymore, when the Claude Code team ships 20+ PRs daily with 100% AI-written code, we're past the point of dismissing this as hype."

이 현상이 실재함을 인정. **하지만 관리하지 않으면 재앙**.

## Cognitive Debt의 증상

- "내가 쓴 코드인데 왜 이렇게 돼있지?"
- 디버깅이 2-3배 오래 걸림
- 새 기능 추가 시 부작용 예측 불가
- 리팩토링 두려움 증가
- 코드 리뷰가 오래 걸림
- 신규 팀원 온보딩 어려움

## 완화 전략

### 1. Claude Code 팀의 원칙
> "Anytime we see Claude do something incorrectly, we add it to CLAUDE.md"

- 실수를 CLAUDE.md에 기록
- 재발 방지
- **CLAUDE.md 자체가 "이해의 외부화"**

### 2. Incremental Understanding
AI가 작성해도 매 단계 **직접 읽고 이해**:
- 읽지 않은 코드는 머지하지 않기
- 이해 안 되면 AI에게 설명 요청
- "왜 이렇게 했는지" 주석 요구

### 3. Test-First with AI
- 먼저 테스트를 작성 (사람이 이해)
- 그 다음 구현을 AI에 위임
- 테스트 통과 = 최소한의 이해 보장

### 4. Documentation as Code
- AI에게 코드와 함께 문서화 요청
- 주석, README 업데이트 강제
- 설계 결정 기록

### 5. Regular "Why" Sessions
- 정기적으로 "이게 왜 이렇게 됐지?" 리뷰
- AI에게 코드 설명 요청
- 이해 gap 발견 시 즉시 채우기

## 2026 패러다임 전환

| 시대 | 주요 관심사 |
|------|-----------|
| 2015-2024 | Technical debt 최적화 |
| 2025+ | **Cognitive debt 관리** |

**TechDebt 2026 컨퍼런스에서 공식 주제로 채택**.

## 1인 개발자에게 특히 위험

- 동료 리뷰 없음 → 혼자 모든 맥락 유지
- 이해 gap이 곧 프로젝트 중단 위험
- 6개월 후 "내 코드 못 알아봄" 경험

## 관련 개념

- [[concepts/agentic-engineering]] — 성숙한 AI 개발 방법론
- [[patterns/vibe-coding-antipatterns]] — Cognitive Debt의 주요 원인
- [[patterns/claude-md-guide]] — CLAUDE.md로 이해 외부화
- [[patterns/ai-code-review]] — 이해 유지 전략

## 참고 소스

- [Cognitive Debt 리서치](raw/notes/2026-04-09-cognitive-debt-deep.md)
- [From Tech Debt to Cognitive Debt (Storey)](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/)
- [The 80% Problem (Osmani)](https://addyo.substack.com/p/the-80-problem-in-agentic-coding)
- [Comprehension Debt (Osmani)](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e)
