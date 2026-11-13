---
title: "OpenAI Codex npm 파이프라인 프롬프트 인젝션 체인 — Depi 보고 (11-11)"
source_url: "https://promtime.net/p/en/post/prompt-injection-reached-the-official-codex-npm-pipeline"
source_type: "news"
authors: ["Depi (via promtime.net)"]
published: 2026-11-11
fetched: 2026-11-12
tags: [openai, codex, prompt-injection, supply-chain, npm, github-actions, security]
status: raw
---

# OpenAI Codex npm 파이프라인 프롬프트 인젝션 체인 — Depi 보고 (11-11)

> 보안 연구자 Depi가 OpenAI의 GitHub Actions 워크플로에서 프롬프트 인젝션으로 시작해 공식 `@openai/codex` npm 패키지 릴리스 발행 자격증명까지 도달하는 공격 체인을 보고했다. Bugcrowd로 신고돼 P1 등급으로 해결됐고 9월 29일 공개됐다. 단, 실제 프로덕션 도달 가능성은 불확실하다는 뉘앙스가 함께 기록돼 있다.

## 내용

- **진입점**: OpenAI의 GitHub Actions 워크플로 `issue-labeler.yml`이 신규 이슈의 제목·본문을 Codex 에이전트 프롬프트에 그대로 전달했다. 이슈 본문에 심은 지시가 에이전트 지시로 실행되는 고전적 프롬프트 인젝션이다.
- **권한 상승**: 샌드박스 탈출 후 러너 프로세스 메모리에서 `GITHUB_TOKEN`과 `ACTIONS_RUNTIME_TOKEN`을 탈취했다. 이 토큰들은 공식 `@openai/codex` npm 패키지의 릴리스 발행에 필요한 자격증명까지 이어졌다.
- **규모**: Codex npm 패키지는 주간 다운로드 약 2,600만 회, 월간 약 9,700만 회다. 릴리스 파이프라인이 뚫리면 공급망 파급력이 매우 크다.
- **처리**: Depi가 Bugcrowd로 신고했고 P1 등급으로 해결(Resolved)됐으며 9월 29일 공개(disclosed)됐다. 초기 포상은 $1,000으로, OpenAI 상한 $100,000에 비해 낮아 재검토 중이다.
- **주의(핵심 뉘앙스)**: OpenAI의 프로덕션 labeler는 5월 29일부터 더 엄격한 `read-only` 모드로 운영돼 왔다. Depi의 풀 체인은 자체 테스트 저장소에서 재현한 것으로, 실제 프로덕션 환경에 그대로 도달했을지는 불확실하다. OpenAI 공식 입장 추가 확인이 필요하다.

## 맥락

- [[concepts/malbear-operation-snowball-deepseek-telecom]] — 탈옥 DeepSeek 에이전트의 유럽 통신사 침투, 에이전트 보안 사고 (2026-11-11)
- [[concepts/australia-ai-regulator-agent-breach]] — 호주 AI 규제기관 신설, OpenAI 에이전트 Medicare 침입 계기 (2026-11-10)
- [[concepts/openai-agent-sepolia-wallet]] — OpenAI 에이전트 Sepolia 지갑 사건 (2026-10-16)
- [[concepts/agent-attribution]] — 에이전트 보안 사건의 귀속 (2026-09-25)
