---
title: "DeepSeek Harness, 일일 사용자 154만 명 — 오픈 에이전트 프레임워크의 플러그인 마켓플레이스 추진 (11-05)"
category: concepts
tags: [deepseek, harness, agent-framework, plugins, open-source]
created: 2026-11-10
updated: 2026-11-10
sources:
  - "raw/articles/2026-11-10-deepseek-harness-1-54m-dau.md"
related:
  - "[[concepts/deepseek-dsh-superagent-prototype]]"
  - "[[concepts/deepseek-v41-flash-1017]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
status: draft
confidence: medium
---

# DeepSeek Harness, 일일 사용자 154만 명 — 오픈 에이전트 프레임워크의 플러그인 마켓플레이스 추진 (11-05)

## 쉽게 읽기

**비유**: 코딩 에이전트를 '앱스토어가 있는 스마트폰'으로 만드는 셈이다. 본체는 무료 오픈소스이고, 사용자는 플러그인이라는 앱을 깔아 기능을 늘린다. 사용자가 3개월 만에 154만 명이 됐으니, 이제 공식 앱스토어(마켓플레이스)를 열겠다는 것이다.

| 용어 | 풀이 |
|------|------|
| **Harness (dsh)** | DeepSeek의 오픈소스 에이전트 프레임워크 — 모델을 에이전트로 동작시키는 틀 |
| **DAU** | 일일 활성 사용자 수 — 하루에 한 번 이상 쓴 사람 수 |
| **everything-is-a-plugin** | 내장 기능과 서드파티 확장이 같은 인터페이스로 동작하는 설계 |

## 한줄 정의

2026-11-05 — DeepSeek의 오픈소스 에이전트 프레임워크 Harness가 출시 3개월 만에 일일 활성 사용자 154만 명, 일일 토큰 소비 약 92조 개에 도달했다고 DeepSeek 팀이 밝혔다(SCMP 11-08 보도). 약 35,000개 서드파티 플러그인이 쌓였고, 공식 플러그인 마켓플레이스와 개발자 지원 프로그램을 추진한다. 수치는 DeepSeek 자체 발표로 독립 검증이 없다.

## 핵심 내용

- **규모(DeepSeek 자체 발표)**: 11-04 기준 일일 활성 사용자 154만 명(공식 API 경유 사용자만 집계), 일일 토큰 소비 약 92조 개. 9-30 기준 7일 평균 일일 사용자 27.1만 명에서 약 5.7배 증가했다. 활성 사용자의 약 60%가 최소 1개 서드파티 플러그인을 만들거나 설치했다. 사용자·토큰 집계 방법론은 공개되지 않았다.
- **일정**: Harness v0.1은 2026-08-13 출시(MIT 라이선스, GitHub), 데스크톱 앱은 9-29 출시. 0.2.2-rc.1은 11-04에 공개됐으며 6개 언어 추가·Git worktree·Codex/Claude CLI로 작업을 넘기는 실험적 subagent_oar 플러그인을 포함한다. 명령어는 `dsh`, `npx @deepseek-ai/dsh web`으로 실행한다. 프로젝트는 아직 developer preview이며 보안 감사를 받지 않았다고 명시한다.
- **다음 단계**: 공식 플러그인 마켓플레이스(검증된 배포·보안 심사 포함)와 플러그인 개발자 지원 프로그램(토큰 인센티브·기술 교류·홍보)을 계획 중이다. 출시일은 미정. 현재 플러그인 설치는 패키지명을 직접 입력하는 방식이라 발견성이 낮다.
- **아키텍처**: 'everything-is-a-plugin' 설계로, 내장 기능과 서드파티 확장이 동일한 실행 인터페이스를 공유한다. 커뮤니티에서는 플러그인 과부하·루핑·토큰 과소비 문제가 지적되고 있다. Harness 팀은 2026-10에 첫 제품 부문을 신설했고, Jane Street 출신 Cui Tianyi가 이끌고 있다.
- **날짜 주의**: 수치는 11-05 저녁 DeepSeek 팀의 WeChat 게시물에서 처음 공개됐고 SCMP가 11-08 보도했으며, 11-09~10에 여러 매체가 재보도했다. 본 페이지는 11-09 보도분을 기준으로 수집한 따라잡기(catch-up) 항목이다.

## 왜 중요한가 (1인 개발자 관점)

1. **오픈 에이전트 프레임워크가 규모를 증명했다**: 출시 3개월 만에 154만 DAU는, 폐쇄 생태계(Claude Code·Codex)만이 에이전트 시장을 차지하는 게 아니라는 신호다. MIT 라이선스 + 플러그인 생태계라는 조합이 실제로 사용자를 모았다.
2. **플러그인 마켓플레이스는 에이전트의 앱스토어다**: 공식 마켓플레이스 + 토큰 인센티브가 열리면, 에이전트용 도구·스킬을 만드는 것이 새로운 유통 채널이 된다. 다만 보안 심사·발견성 설계가 성패를 가른다.
3. **아직은 개발자 프리뷰다**: 보안 감사를 받지 않았고 breaking change가 예고돼 있다. 프로덕션·민감 데이터 작업에 쓰기 전에는 격리·권한 범위를 먼저 설계해야 한다.

## 한계 (명시)

- 154만 DAU·92조 토큰·35,000개 플러그인은 모두 DeepSeek 자체 발표 수치로, 독립 검증이 없다. 집계 방법론도 미공개다.
- 마켓플레이스·개발자 지원 프로그램은 계획 단계로, 출시일·토큰 인센티브 규모가 미정이다.
- 0.2.2-rc.1은 릴리스 후보이며 프로젝트 전체가 developer preview다. 보안 감사를 받지 않았다고 명시한다.

## 관련 개념

- [[concepts/deepseek-dsh-superagent-prototype]] — DeepSeek dsh-superagent 연구 프로토타입, 상주 코딩 에이전트
- [[concepts/deepseek-v41-flash-1017]] — DeepSeek V4.1-Flash-1017, MIT 오픈웨이트·태스크당 $0.2
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2, 같은 날 출시된 플래그십

## 참고 소스

- [DeepSeek Harness 일일 사용자 154만 명 원본](raw/articles/2026-11-10-deepseek-harness-1-54m-dau.md)
