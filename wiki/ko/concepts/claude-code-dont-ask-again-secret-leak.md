---
title: "Claude Code 'Don't Ask Again', 승인한 명령을 비밀 그대로 저장해 1,122개 공개 GitHub 파일에 유출 — Apiiro 조사, 총 2,539건"
category: concepts
tags: [claude-code, security, secrets, github, agent-safety]
created: 2026-11-08
updated: 2026-11-08
sources:
  - "raw/articles/2026-11-08-claude-code-dont-ask-again-secret-leak.md"
related:
  - "[[concepts/opencode-key-breach]]"
  - "[[concepts/agent-supply-chain-security]]"
  - "[[concepts/litellm-pypi-supply-chain-compromise]]"
  - "[[concepts/wiz-black-october-ai-platform-breaches]]"
status: draft
confidence: high
---

# Claude Code "Don't Ask Again", 승인한 명령을 비밀 그대로 저장해 1,122개 공개 GitHub 파일에 유출 — Apiiro 조사, 총 2,539건

## 쉽게 읽기

**비유**: 비서에게 "다시는 묻지 마"라고 한 번 말했더니, 비서가 비밀번호가 적힌 메모를 그대로 책상 위에 두고 간 셈이다. 그 메모가 실려 있는 서류철(저장소)을 통째로 공개해 버린 사람이 1,122명이다. 비밀번호를 지워도 예전 서류철 사본에는 그대로 남아 있다.

| 용어 | 풀이 |
|------|------|
| **settings.local.json** | Claude Code가 "다시는 묻지 마"로 승인한 명령을 저장하는 로컬 설정 파일 — 원래는 개발자 PC에만 있어야 한다 |
| **gitleaks / TruffleHog** | 코드에서 비밀(키·비밀번호)을 찾아내는 스캐너 — 이번 조사에서는 5건 중 1건을 놓쳤다 |
| **allow 규칙** | 에이전트가 앞으로 같은 명령을 묻지 않고 실행하도록 허락하는 설정 |

## 한줄 정의

2026-11-05 — 보안업체 Apiiro의 조사에 따르면 Claude Code에서 "Yes, and don't ask again"으로 승인한 명령은 비밀번호·API 키를 포함한 명령 전체가 프로젝트 폴더의 `.claude/settings.local.json`에 평문으로 저장된다. GitHub 공개 저장소에서 이 파일 104,185개 중 1,122개(1.1%)에 실제 비밀이 들어 있었고, 이력·공유 설정·에이전트 채팅 기록까지 합하면 총 2,539건의 비밀이 1,994개 저장소에 노출됐다.

## 핵심 내용

- **메커니즘**: 데이터베이스 조회나 API 호출을 위해 Claude Code가 제안하는 명령에는 설정 파일의 비밀이 그대로 들어 있다. 실행 전 확인 프롬프트에서 "Yes, and don't ask again"을 고르면, 그 명령이 allow 규칙으로 `.claude/settings.local.json`에 저장된다. 문서상 첫 작성 시 이 파일은 전역 git 제외 목록에 추가되지만, 실제로는 104,185개의 공개 사본이 GitHub에 존재한다. Opus 5.5·Fable 5.1에서도 재현됐다. Apiiro는 "모델의 문제가 아니라 Claude Code 자체의 동작"이라고 밝혔다.
- **규모**: 2026-11-01~03 GitHub 코드 검색 기준, 공개 `.claude/settings.local.json` 104,185개(103,617개 저장소) 중 1,122개에 실제 비밀. 노출된 비밀의 예: DB 업체 자신의 관리자급 클라우드 키, 운영용 Azure Postgres 비밀번호, Square 운영 토큰, 의료기록 앱 DB 소유자 비밀번호. 영향받는 조직 63곳. 한 곳은 키가 실제로 유효했다고 확인했다.
- **전체 집계**: 구버전 이력에서 1,160건 추가, 팀이 의도적으로 커밋하는 공유 `.claude/settings.json`(76,011개 중 298개에 비밀), 저장된 에이전트 채팅 기록까지 합쳐 2,539건·1,994개 저장소. 유출 저장소 1,105곳 중 539곳에서는 Claude가 공동 저자로 표시된 커밋이 해당 파일을 건드렸다. 유출 파일의 중앙값 존재 기간은 스냅샷 기준 217일.
- **스캐너의 사각지대**: 1,122개 파일에 gitleaks는 564개, TruffleHog는 643개를 탐지했고, 215개(약 5분의 1)는 둘 다 놓쳤다. 비밀번호가 알려진 키 형식이 아니라 명령 속 평문으로 들어 있기 때문이다. 비밀 종류별로는 DB 비밀번호 379건이 가장 많고, AI 모델 API 키 149건, Supabase 서비스 역할 키 122건, Google API 키 110건, AWS 키 23건 순이다.
- **경고 이력**: 사용자들은 2025년 8월부터 GitHub 이슈(#5544, #11982, #13106, #91270)로 이 동작을 보고했지만, Apiiro에 따르면 Anthropic의 답은 없었고 3건은 비활성·사본으로 자동 종료됐다. 11-08 기준 Anthropic의 공개 답변은 확인되지 않았다.

## 왜 중요한가 (1인 개발자 관점)

1. **편의 기능이 비밀 유출 경로가 된다**: "다시는 묻지 마"는 매번 확인하는 번거로움을 없애는 기능이지만, 그 대가로 비밀을 평문 파일에 박제한다. 에이전트의 편의 기능이 보안 경계를 넓힌다는 교훈이다. 내 저장소에 `.claude/settings.local.json`이 커밋돼 있지 않은지 지금 확인하는 것이 실무적 다음 단계다.
2. **스캐너를 믿으면 안 된다**: gitleaks·TruffleHog 둘 다 5건 중 1건을 놓쳤다. 명령 속에 섞인 평문 비밀번호는 "키 형식"으로 안 잡힌다. 스캐너 통과가 곧 안전이 아니다.
3. **에이전트가 자기 유출을 직접 쓴다**: 유출 저장소 절반 가까이에서 Claude가 공동 저자인 커밋이 해당 파일을 건드렸다. 에이전트가 비밀을 파일에 쓰고, 그 파일을 커밋하는 전 과정을 인간이 안 보고 지나갈 수 있다는 뜻이다. 에이전트 작업 후 `git status` 확인은 선택이 아니라 필수다.

## 한계 (명시)

- Apiiro는 코딩 에이전트 보안 제품을 판매하는 업체로, 주제에 이해관계가 있다. 키를 직접 테스트하지 않았으므로 "실제 비밀"은 키 형식·공개 호스트 기준이지 유효성 확인이 아니다. 2,539건 집계에는 LLM 리뷰어의 판단이 들어 있다.
- 공개 저장소만 조사했고 비공개 저장소와 개발자 PC는 범위 밖이다. 이력 집계는 최소치다.

## 참고 소스

- [Claude Code 비밀 유출 Apiiro 조사 원본](raw/articles/2026-11-08-claude-code-dont-ask-again-secret-leak.md)
