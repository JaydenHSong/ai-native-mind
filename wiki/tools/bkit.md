---
title: "bkit"
category: tools
tags: [claude-code-plugin, bkit, pdca, ai-native, development-os]
created: 2026-04-09
updated: 2026-04-09
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/superpowers]]"
  - "[[tools/codex-plugin]]"
  - "[[tools/gstack]]"
  - "[[comparisons/claude-code-plugins]]"
  - "[[concepts/ai-orchestration]]"
status: active
confidence: medium
---

# bkit (Vibecoding Kit)

## 한줄 설명

popup-studio-ai가 개발한 Claude Code 플러그인으로, PDCA 방법론 기반의 "AI Native Development OS".

## 핵심 철학

"Vibe Coding에 엔지니어링 규율을 부여한다." AI 도구로 빠르게 코드를 생성하되, Plan-Do-Check-Act 사이클로 품질을 관리한다. 단순 코드 생성기가 아니라 **소프트웨어 개발 전체 라이프사이클을 구조화**하는 것이 목표.

## 핵심 기능

### PDCA 사이클

개발의 모든 단계를 구조화된 문서와 검증으로 관리:

```
Plan (계획) → Design (설계) → Do (구현) → Check (검증) → Act (개선)
```

- `/pdca plan` — 요구사항 분석, 범위 정의
- `/pdca design` — 기술 명세, API 설계
- `/pdca do` — 구현 가이드
- `/pdca analyze` — Gap Analysis (설계 vs 구현 일치도)
- `/pdca iterate` — Match Rate < 90%이면 자동 개선
- `/pdca report` — 완료 보고서

### 9단계 개발 파이프라인

```
Schema → Convention → Mockup → API → Design System
→ UI Integration → SEO/Security → Review → Deployment
```

"다음에 뭘 해야 하지?"라는 고민을 제거한다.

### Agent Team (32개 에이전트)

CTO 리드가 오케스트레이션하는 전문가 팀:

| 에이전트 | 역할 |
|----------|------|
| cto-lead | 팀 조율, 기술 방향 |
| product-manager | 요구사항 분석, 우선순위 |
| frontend-architect | UI/UX 아키텍처 |
| code-analyzer | 코드 품질 분석 |
| gap-detector | 설계-구현 갭 탐지 |
| qa-strategist | 테스트 전략 |
| security-architect | 보안 검토 |

### 50+ Skills

PM 기획(`/pdca pm`), 모바일 앱(`/mobile-app`), 데스크톱 앱(`/desktop-app`), 제로 스크립트 QA(`/zero-script-qa`) 등.

### 프로젝트 레벨 시스템

| 레벨 | 대상 | 예시 |
|------|------|------|
| Starter | 정적 웹, 초보자 | 포트폴리오, 랜딩 페이지 |
| Dynamic | 풀스택, BaaS | 로그인 있는 웹앱 |
| Enterprise | 마이크로서비스, K8s | 대규모 시스템 |

## 설치

```bash
/plugin marketplace add popup-studio-ai/bkit-claude-code
/plugin install bkit
```

## 장점과 한계

| 장점 | 한계 |
|------|------|
| PDCA로 AI 코딩에 규율 부여 | 스킬/에이전트가 많아 학습 곡선 존재 |
| 9단계 파이프라인이 방향 제시 | 컨텍스트 토큰 소비가 큼 |
| PM부터 배포까지 전 단계 커버 | Claude Code 생태계에 종속적 |
| 한국어 지원 우수 (한국 개발사) | 단순 작업엔 과도할 수 있음 |
| Agent Team으로 병렬 전문 처리 | 긴 세션에서 메모리 관리 필요 |

## AI 네이티브 관점에서의 의미

bkit은 [[concepts/ai-orchestration|AI 오케스트레이션]]의 **Orchestrator-Workers 패턴**을 실현한 도구다. CTO 에이전트가 오케스트레이터, 나머지 전문 에이전트가 워커 역할을 한다. [[concepts/context-engineering|Context Engineering]]도 핵심 — CLAUDE.md를 통해 LLM의 작동 환경을 체계적으로 설계한다.

## 관련 도구

- [[tools/claude-code]] — bkit이 확장하는 베이스 도구
- [[tools/superpowers]] — 유사한 구조화 접근, TDD 중심
- [[tools/codex-plugin]] — 크로스-모델 리뷰로 보완 가능
- [[tools/gstack]] — 역할 기반 리뷰로 보완 가능

## 참고 소스

- [GitHub: popup-studio-ai/bkit-claude-code](https://github.com/popup-studio-ai/bkit-claude-code)
- [bkamp.ai 쇼케이스](https://bkamp.ai/en/showcases/55c58fa9-0a35-4504-bfa9-1d8b5a630eea)
