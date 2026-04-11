---
title: "Codex Plugin"
category: tools
tags: [claude-code-plugin, codex, openai, code-review, cross-model]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[tools/gstack]]"
  - "[[comparisons/claude-code-plugins]]"
status: active
confidence: medium
---

# Codex Plugin (codex-plugin-cc)

## 쉽게 읽기

Claude가 쓴 코드를 **다른 회사 모델(OpenAI Codex)** 이 “둘째 의견”으로 리뷰하게 하는 플러그인이다. 같은 모델이 자기 글만 보면 **지나치게 찬성**할 수 있어서, **교차 검토**에 가깝다.

| 용어 | 풀이 |
|------|------|
| **크로스 모델** | 서로 다른 **두 AI**를 섞어 씀 |
| **편향(sycophancy)** | 사용자를 **무조건 맞춰 주려는** 성향 |
| **리뷰** | 버그·보안·빠진 경우를 **짚어 주기** |

## 한줄 설명

OpenAI가 공식 제작한 Claude Code용 플러그인으로, Claude가 작성한 코드를 OpenAI Codex가 리뷰하는 **크로스-모델 코드 리뷰** 도구.

## 핵심 철학

"한 모델이 쓴 코드를 같은 모델이 리뷰하면 편향이 발생한다." 동일 모델의 아첨 편향(sycophancy bias)을 회피하기 위해, 경쟁 모델이 "제2의 눈" 역할을 한다. 경쟁사 도구에 공식 플러그인을 제공한 **전례 없는 사례**로, 2026년 3월 공개 시 주목받았다.

## 핵심 기능

### 슬래시 커맨드

| 커맨드 | 기능 |
|--------|------|
| `/codex:review` | 현재 코드에 대한 Codex 코드 리뷰 |
| `/codex:adversarial-review` | 적대적 보안 감사 (취약점, 인증 오류 탐지) |
| `/codex:rescue` | 버그 조사 및 구출 작업 위임 |
| `/codex:setup` | 설치/인증 상태 확인 |
| `/codex:status` | 백그라운드 작업 진행 확인 |
| `/codex:result` | 완료된 작업 결과 확인 |
| `/codex:cancel` | 진행 중 작업 취소 |

### Review Gate (핵심 기능)

Stop hook을 활용한 **자동 품질 게이트**:

```
Claude가 코드 작성 → Codex가 자동 리뷰 → 문제 발견 시 Claude가 수정 → 통과 시 진행
```

활성화하면 Claude의 모든 코드 응답에 대해 자동으로 Codex 리뷰가 실행된다. 문제가 발견되면 Claude가 먼저 수정하도록 차단.

### 적대적 보안 감사

`/codex:adversarial-review`는 일반 리뷰를 넘어:
- 보안 취약점 탐색
- 인증/권한 로직 오류 탐지
- Race condition, 인젝션 공격 벡터 확인

## 설치

**요구사항**: Node.js 18.18+, ChatGPT 구독(Free 포함) 또는 OpenAI API 키

```bash
# Claude Code 플러그인으로 설치
/codex:setup
# 미설치 시 npm 자동 설치 제안
# 인증: !codex login
```

**GitHub**: [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 크로스-모델로 편향 회피 | OpenAI 계정/API 키 별도 필요 |
| 적대적 보안 감사 내장 | 외부 API 호출 → 지연 + 비용 |
| Review Gate 자동 품질 관리 | 두 AI 제공자에 동시 의존 |
| 창 전환 없이 멀티모델 활용 | 리뷰만 담당 (생성/계획 기능 없음) |

## AI 네이티브 관점에서의 의미

Codex Plugin은 [[concepts/ai-orchestration|AI 오케스트레이션]]의 **Evaluator-Optimizer 패턴**을 구현한다. Claude(Generator)가 코드를 생성하고, Codex(Evaluator)가 평가하며, 미달 시 Claude가 다시 개선한다. 이 루프는 단일 모델 사용보다 높은 품질을 달성할 수 있다.

또한 "경쟁사끼리 협력하는 도구"라는 점에서, AI 도구 생태계가 **모델 간 협업** 방향으로 진화하고 있음을 보여주는 사례.

## 관련 도구

- [[tools/claude-code]] — Codex Plugin이 확장하는 베이스 도구
- [[tools/bkit]] — gap-detector가 유사한 검증 역할
- [[tools/superpowers]] — 2단계 리뷰가 유사 개념
- [[tools/gstack]] — /review와 기능 겹침

## 참고 소스

- [GitHub: openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)
- [Introducing Codex Plugin for Claude Code (OpenAI Community)](https://community.openai.com/t/introducing-codex-plugin-for-claude-code/1378186)
- [Claude Code + Codex Plugin: Two AI Brains, One Terminal (DEV)](https://dev.to/harrison_guo_e01b4c8793a0/claude-code-codex-plugin-two-ai-brains-one-terminal-k31)
