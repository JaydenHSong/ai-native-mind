---
title: "Claude Code 'Don't Ask Again', 승인한 명령을 비밀 그대로 저장해 1,122개 공개 GitHub 파일에 유출 — Apiiro 조사, 총 2,539건 (11-05)"
source_url: "https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again"
source_type: "news"
authors: ["Apiiro"]
published: 2026-11-05
fetched: 2026-11-08
tags: [claude-code, security, secrets, github, agent-safety]
status: raw
---

# Claude Code "Don't Ask Again", 승인한 명령을 비밀 그대로 저장해 1,122개 공개 GitHub 파일에 유출 — Apiiro 조사, 총 2,539건 (11-05)

> 보안업체 Apiiro가 11-05 발표한 조사에 따르면 Claude Code에서 "Yes, and don't ask again"으로 승인한 명령은 비밀번호·API 키를 포함한 명령 전체가 프로젝트 폴더의 `.claude/settings.local.json`에 평문으로 저장된다. GitHub 공개 저장소에서 이 파일 104,185개 중 1,122개(1.1%)에 실제 비밀이 들어 있었고, 이력·공유 설정·에이전트 채팅 기록까지 합하면 총 2,539건의 비밀이 1,994개 저장소에 노출됐다. Apiiro는 코딩 에이전트 보안 제품을 판매하는 업체이며, 키를 직접 테스트하지는 않았다.

## 내용

- **메커니즘**: 데이터베이스 조회나 API 호출을 위해 Claude Code가 제안하는 명령에는 설정 파일의 비밀이 그대로 들어 있다. 실행 전 확인 프롬프트에서 "Yes, and don't ask again"을 고르면, 그 명령이 allow 규칙으로 `.claude/settings.local.json`에 저장된다. 문서상 첫 작성 시 이 파일은 전역 git 제외 목록에 추가되지만, 실제로는 104,185개의 공개 사본이 GitHub에 존재한다. Opus 5.5·Fable 5.1에서도 재현됐다. Apiiro는 "모델의 문제가 아니라 Claude Code 자체의 동작"이라고 밝혔다.
- **규모**: 2026-11-01~03 GitHub 코드 검색 기준, 공개 `.claude/settings.local.json` 104,185개(103,617개 저장소) 중 1,122개에 실제 비밀. 노출된 비밀의 예: DB 업체 자신의 관리자급 클라우드 키, 운영용 Azure Postgres 비밀번호, Square 운영 토큰, 의료기록 앱 DB 소유자 비밀번호. 영향받는 조직 63곳(학생 그룹부터 스타트업·소프트웨어 업체·기성 업체까지). 한 곳은 키가 실제로 유효했다고 확인했다.
- **전체 집계**: 구버전 이력에서 1,160건 추가, 팀이 의도적으로 커밋하는 공유 `.claude/settings.json`(76,011개 중 298개에 비밀), 저장된 에이전트 채팅 기록까지 합쳐 2,539건·1,994개 저장소. 유출 저장소 1,105곳 중 539곳에서는 Claude가 공동 저자로 표시된 커밋이 해당 파일을 건드렸다. 유출 파일의 중앙값 존재 기간은 스냅샷 기준 217일.
- **스캐너의 사각지대**: 1,122개 파일에 gitleaks는 564개, TruffleHog는 643개를 탐지했고, 215개(약 5분의 1)는 둘 다 놓쳤다. 비밀번호가 알려진 키 형식이 아니라 명령 속 평문으로 들어 있기 때문이다. 비밀 종류별로는 DB 비밀번호 379건이 가장 많고, AI 모델 API 키 149건, Supabase 서비스 역할 키 122건, Google API 키 110건, AWS 키 23건 순이다.
- **경고 이력**: 사용자들은 2025년 8월부터 GitHub 이슈(#5544, #11982, #13106, #91270)로 이 동작을 보고했지만, Apiiro에 따르면 Anthropic의 답은 없었고 3건은 비활성·사본으로 자동 종료됐다. 11-08 기준 Anthropic의 공개 답변은 확인되지 않았다.
- **수치의 한계**: "실제 비밀"은 키 형식에 맞거나 공개 호스트 옆에 있는 비밀번호·토큰이라는 기준이며, 유효성을 직접 테스트한 것은 아니다. 2,539건 집계에는 LLM 리뷰어의 판단이 들어 있다. 공개 저장소만 조사했고 비공개 저장소와 개발자 PC는 범위 밖이다.

## 맥락

- [[concepts/opencode-key-breach]] — OpenCode 키 노출 사고, 폐기 중 레거시 콘솔 침입·3사 API 키 (2026-10-18)
- [[concepts/agent-supply-chain-security]] — 외부 도구·스킬·에이전트의 신뢰 모델 + dual-LLM/CaMeL + Tier 등급
- [[concepts/litellm-pypi-supply-chain-compromise]] — LiteLLM 1.107.0 PyPI 공급망 침해 (2026-10-22)
- [[concepts/wiz-black-october-ai-platform-breaches]] — Wiz "Black October", AI 개발 플랫폼 9곳 자격증명 침해·LLMjacking (2026-10-31)
