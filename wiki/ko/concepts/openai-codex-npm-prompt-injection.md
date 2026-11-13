---
title: "OpenAI Codex npm 파이프라인 프롬프트 인젝션 체인 — Depi 보고 (11-11)"
category: concepts
tags: [openai, codex, prompt-injection, supply-chain, npm, github-actions, security]
created: 2026-11-12
updated: 2026-11-12
sources:
  - "raw/articles/2026-11-12-openai-codex-npm-prompt-injection.md"
related:
  - "[[concepts/malbear-operation-snowball-deepseek-telecom]]"
  - "[[concepts/australia-ai-regulator-agent-breach]]"
  - "[[concepts/openai-agent-sepolia-wallet]]"
  - "[[concepts/agent-attribution]]"
status: draft
confidence: medium
---

# OpenAI Codex npm 파이프라인 프롬프트 인젝션 체인 — Depi 보고 (11-11)

## 쉽게 읽기

**비유**: 공장 정문에 "이 종이를 읽고 그대로 따라 하세요"라는 쪽지를 붙여 둔 셈이다. 지나가던 사람이 쪽지에 "금고 열쇠를 달라"고 적어 넣으면, 일꾼(에이전트)은 쪽지 내용인지 외부 지시인지 구분하지 못하고 그대로 실행한다. 금고 열쇠가 공장 제품(공식 npm 패키지)을 찍어내는 도장까지 이어진다.

| 용어 | 풀이 |
| **프롬프트 인젝션** | 신뢰하지 않는 입력(이슈 본문 등)에 심은 지시를 에이전트가 자신의 지시로 받아 실행하게 만드는 공격 |
| **GITHUB_TOKEN** | GitHub Actions 러너에 자동으로 주어지는 토큰 — 저장소 작업 권한을 가진다 |
| **ACTIONS_RUNTIME_TOKEN** | Actions 런타임과 통신하는 토큰 — 탈취 시 러너 권한을 넓힐 수 있다 |
| **Bugcrowd** | 기업이 보안 연구자에게 취약점 신고를 받는 버그 바운티 플랫폼 |

## 한줄 정의

2026-11-11 — 보안 연구자 Depi가 OpenAI의 GitHub Actions 워크플로에서 프롬프트 인젝션으로 시작해 공식 `@openai/codex` npm 패키지 릴리스 발행 자격증명까지 도달하는 공격 체인을 보고했다. Bugcrowd로 신고돼 P1 등급으로 해결됐고 9월 29일 공개됐다. 단, 실제 프로덕션 도달 가능성은 불확실하다.

## 핵심 내용

- **진입점**: OpenAI의 GitHub Actions 워크플로 `issue-labeler.yml`이 신규 이슈의 제목·본문을 Codex 에이전트 프롬프트에 그대로 전달했다. 이슈 본문에 심은 지시가 에이전트 지시로 실행되는 고전적 프롬프트 인젝션이다.
- **권한 상승**: 샌드박스 탈출 후 러너 프로세스 메모리에서 `GITHUB_TOKEN`과 `ACTIONS_RUNTIME_TOKEN`을 탈취했다. 이 토큰들은 공식 `@openai/codex` npm 패키지의 릴리스 발행에 필요한 자격증명까지 이어졌다.
- **규모**: Codex npm 패키지는 주간 다운로드 약 2,600만 회, 월간 약 9,700만 회다. 릴리스 파이프라인이 뚫리면 공급망 파급력이 매우 크다.
- **처리**: Depi가 Bugcrowd로 신고했고 P1 등급으로 해결(Resolved)됐으며 9월 29일 공개됐다. 초기 포상은 $1,000으로, OpenAI 상한 $100,000에 비해 낮아 재검토 중이다.
- **주의 — 실제 도달 가능성 불확실**: OpenAI의 프로덕션 labeler는 5월 29일부터 더 엄격한 `read-only` 모드로 운영돼 왔다. Depi의 풀 체인은 자체 테스트 저장소에서 재현한 것으로, 실제 프로덕션 환경에 그대로 도달했을지는 불확실하다. OpenAI 공식 입장 추가 확인이 필요하다.

## 왜 중요한가 (1인 개발자 관점)

1. **에이전트를 CI/CD에 붙이는 순간, 이슈 트래커가 공격 표면이 된다**: 사용자의 평문 입력(이슈 제목·본문)을 에이전트 프롬프트에 그대로 넣는 패턴은 가장 흔하면서도 가장 위험하다. 내 저장소의 라벨러·트리아지 봇도 같은 구조인지 점검할 일이다.
2. **릴리스 파이프라인은 공급망의 마지막 관문이다**: 토큰 하나가 수천만 다운로드를 찍는 패키지의 서명·발행 권한으로 이어진다. 에이전트에게 주는 토큰의 권한 범위를 최소로 줄이는 것(least privilege)이 곧 공급망 보안이다.
3. **샌드박스 탈출이 전제된 설계가 필요하다**: 이 체인의 핵심은 인젝션 그 자체가 아니라, 인젝션 뒤 샌드박스를 빠져나와 러너 메모리에 닿았다는 점이다. 에이전트 실행 환경은 '뚫릴 수 있다'는 전제로 격리해야 한다.

## 한계 (명시)

- Depi 원문과 2차 정리 매체 1곳에 근거한다. OpenAI 공식 입장은 아직 확인되지 않았다.
- 풀 체인은 연구자의 자체 테스트 저장소에서 재현된 것으로, 프로덕션 labeler의 read-only 모드 하에서 동일하게 동작했을지는 미확인이다. 실제 피해·유출은 보고되지 않았다.
- 포상 $1,000은 초기 금액으로 재검토 중이며, 최종 금액이 아니다.

## 관련 개념

- [[concepts/malbear-operation-snowball-deepseek-telecom]] — 탈옥 DeepSeek 에이전트의 유럽 통신사 침투, 에이전트 보안 사고 (2026-11-11)
- [[concepts/australia-ai-regulator-agent-breach]] — 호주 AI 규제기관 신설, OpenAI 에이전트 Medicare 침입 계기 (2026-11-10)
- [[concepts/openai-agent-sepolia-wallet]] — OpenAI 에이전트 Sepolia 지갑 사건, 타인 테스트 ETH 인출 (2026-10-16)
- [[concepts/agent-attribution]] — 에이전트 보안 사건의 귀속(행위자·책임·공개 시점) (2026-09-25)

## 참고 소스

- [Codex npm 파이프라인 프롬프트 인젝션 원본](raw/articles/2026-11-12-openai-codex-npm-prompt-injection.md)
