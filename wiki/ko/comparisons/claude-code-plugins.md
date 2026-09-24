---
title: "Claude Code 플러그인 4종 비교"
category: comparisons
tags: [claude-code-plugin, bkit, superpowers, codex, gstack, comparison]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[tools/codex-plugin]]"
  - "[[tools/gstack]]"
  - "[[tools/claude-code]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/context-engineering]]"
status: active
confidence: medium
---

# Claude Code 플러그인 4종 비교

## 쉽게 읽기

네 회사가 아니라 **한 앱(Claude Code)에 붙는 확장팩** 네 종류다. 서로 “대체”라기보다 **프로세스(bkit)·습관(superpowers)·역할(gstack)·외부 검열(codex)** 처럼 층이 다르다.

| 이름 | 한 줄 |
|------|--------|
| **bkit** | 큰 개발 순서(PDCA) 뼈대 |
| **Superpowers** | 계획·TDD 같은 **작업 습관** 강제 |
| **gstack** | CEO/디자이너처럼 **역할 분업** |
| **Codex plugin** | 다른 회사 모델로 **둘째 의견** 리뷰 |

## 핵심 차이

4개 플러그인은 "AI 코딩을 어떻게 구조화할 것인가"라는 같은 질문에 대해 **서로 다른 레이어**에서 답한다. 경쟁이 아니라 보완 관계.

## 비교표

| 기준 | [[tools/bkit|bkit]] | [[tools/superpowers|Superpowers]] | [[tools/codex-plugin|Codex]] | [[tools/gstack|gstack]] |
|------|------|------------|-------|--------|
| **만든 사람** | popup-studio-ai (한국) | Jesse Vincent (obra) | OpenAI (공식) | Garry Tan (YC CEO) |
| **핵심 비유** | "개발 OS" | "시니어 개발자" | "제2의 눈" | "역할극 팀" |
| **접근법** | PDCA 프로세스 관리 | TDD + 계획 강제 | 크로스-모델 리뷰 | 역할 기반 프롬프트 |
| **범위** | 기획~배포 전 단계 | 설계~구현~테스트 | 코드 리뷰만 | 리뷰~배포 |
| **에이전트** | 32개 전문 에이전트 | Subagent 병렬 실행 | Codex 단일 | 역할별 프롬프트 |
| **외부 의존성** | 없음 | 없음 | OpenAI 계정 | Bun |
| **설치 방식** | 플러그인 마켓플레이스 | 플러그인 마켓플레이스 | 플러그인 마켓플레이스 | git clone |
| **한국어** | 우수 | 미지원 | 미지원 | 미지원 |
| **라이선스** | 오픈소스 | MIT | 오픈소스 | 오픈소스 |
| **기술 깊이** | 높음 (MCP 서버, 상태 머신) | 높음 (subagent 오케스트레이션) | 중간 (hook 기반) | 낮음 (프롬프트 모음) |

## 오케스트레이션 패턴 매핑

각 플러그인이 활용하는 [[concepts/ai-orchestration|AI 오케스트레이션]] 패턴:

| 플러그인 | 주요 패턴 | 설명 |
|----------|----------|------|
| bkit | **Orchestrator-Workers** | CTO 에이전트가 전문 에이전트 팀을 조율 |
| Superpowers | **Parallelization** | Plan을 태스크로 분해, subagent가 병렬 처리 |
| Codex | **Evaluator-Optimizer** | Claude(생성) + Codex(평가)의 개선 루프 |
| gstack | **Prompt Routing** | 역할(persona)에 따라 다른 관점의 리뷰 유도 |

## 조합 전략: PDCA × 4 플러그인

이 4개를 **PDCA 사이클의 각 단계에 배치**하면 최적의 조합이 된다:

```
┌─────────────────────────────────────────────────────┐
│                    PDCA 사이클                        │
│                                                      │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐       │
│  │   Plan   │───▶│    Do    │───▶│  Check   │       │
│  │          │    │          │    │          │       │
│  │ bkit     │    │ Super-   │    │ Codex    │       │
│  │ +gstack  │    │ powers   │    │ +bkit    │       │
│  │ CEO/Eng  │    │ TDD+     │    │ cross-   │       │
│  │ review   │    │ subagent │    │ model    │       │
│  └──────────┘    └──────────┘    └──────────┘       │
│       ▲                              │               │
│       │          ┌──────────┐        │               │
│       └──────────│   Act    │◀───────┘               │
│                  │          │                        │
│                  │ bkit     │                        │
│                  │ report + │                        │
│                  │ iterate  │                        │
│                  └──────────┘                        │
└─────────────────────────────────────────────────────┘
```

### 단계별 최적 조합

| PDCA 단계 | 주력 도구 | 보조 도구 | 하는 일 |
|-----------|----------|----------|--------|
| **Plan** | bkit `/pdca plan` | gstack `/plan-ceo-review`, `/plan-eng-review` | 요구사항 정의 + 방향성·아키텍처 리뷰 |
| **Do** | Superpowers brainstorm + execute | bkit 파이프라인 가이드 | TDD 기반 구현 + subagent 병렬 실행 |
| **Check** | Codex `/codex:review` | bkit `gap-detector` | 크로스-모델 리뷰 + 설계-구현 갭 분석 |
| **Act** | bkit `/pdca report` + `/pdca iterate` | — | 개선 사항 반영 + 완료 보고서 |

### 단독 사용 시 추천

모든 플러그인을 동시에 쓰면 토큰 비용이 크므로, 상황에 따라 선택:

| 상황 | 추천 플러그인 |
|------|-------------|
| 혼자 처음부터 끝까지 | bkit (전 단계 커버) |
| 복잡한 기능 구현 | Superpowers (TDD + subagent) |
| 보안 중요한 코드 | Codex (적대적 리뷰) |
| 빠른 MVP | gstack (가볍고 빠름) |
| 전부 조합 | PDCA 단계별 배치 (위 표 참조) |

## Context Engineering 관점

4개 플러그인 모두 [[concepts/context-engineering|Context Engineering]]의 서로 다른 측면을 구현:

- **bkit**: CLAUDE.md에 개발 프로세스 전체를 인코딩 → 영속적 컨텍스트
- **Superpowers**: brainstorm 결과를 설계 문서로 저장 → 세션 간 컨텍스트 유지
- **Codex**: 다른 모델의 관점을 주입 → 컨텍스트 다양성
- **gstack**: 역할 프롬프트로 사고 맥락 전환 → 컨텍스트 프레이밍

## 결론

이 4개 플러그인은 "Claude Code를 어떻게 하면 더 잘 쓸 수 있을까?"에 대한 현재 생태계의 주요 답변들이다. 각각이 AI 오케스트레이션의 서로 다른 패턴을 실현하며, 조합하면 PDCA 사이클 전체를 커버하는 완전한 AI 네이티브 개발 환경을 구축할 수 있다.

핵심 인사이트: **도구가 중요한 게 아니라, AI에게 구조를 부여하는 것이 중요하다.** 이 4개가 공통적으로 하는 일은 "AI에게 그냥 시키지 않고, 어떤 절차/역할/검증을 거치게 한다"는 것이다.

## 참고 소스

- 각 도구 페이지의 참고 소스 참조
- [MindStudio: GStack vs 경쟁 프레임워크](https://www.mindstudio.ai/blog/gstack-vs-superpowers-vs-hermes-claude-code-frameworks)
