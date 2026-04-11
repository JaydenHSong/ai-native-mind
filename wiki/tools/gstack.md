---
title: "gstack"
category: tools
tags: [claude-code-plugin, gstack, garry-tan, role-based, startup]
created: 2026-04-09
updated: 2026-04-11
sources: []
related:
  - "[[tools/claude-code]]"
  - "[[tools/bkit]]"
  - "[[tools/superpowers]]"
  - "[[tools/codex-plugin]]"
  - "[[comparisons/claude-code-plugins]]"
status: active
confidence: medium
---

# gstack

## 쉽게 읽기

**역할 놀이**를 프롬프트로 정리해 둔 스킬 팩이다. 같은 AI라도 “지금은 QA”, “지금은 디자이너”처럼 **말투와 체크리스트**를 바꿔 쓰게 한다. 실체는 **CLAUDE.md + 슬래시 명령 모음**에 가깝다.

| 용어 | 풀이 |
|------|------|
| **Persona** | AI에게 씌우는 **역할 가면** |
| **Slash command** | `/something` 처럼 **짧은 명령으로 스크립트 실행** |
| **스킬 팩** | 여러 역할·절차를 파일로 묶어 둔 것 |

## 한줄 설명

Y Combinator CEO Garry Tan이 공개한 Claude Code 스킬 팩으로, AI를 CEO·디자이너·엔지니어·QA 등 **역할별 전문가 팀**으로 전환하는 프레임워크.

## 핵심 철학

"AI에게 역할을 부여하면 더 잘 작동한다." 단일 AI를 범용으로 쓰는 대신, 역할(persona)을 지정하여 해당 관점에서 리뷰하게 한다. 실체는 **CLAUDE.md + slash command 기반 구조화된 프롬프트 모음**이며, 이것만으로 Garry Tan은 50일간 주당 10,000줄, 100 PR을 달성했다고 보고.

## 핵심 기능

### 9개 슬래시 커맨드

| 커맨드 | 역할 | 기능 |
|--------|------|------|
| `/plan-ceo-review` | CEO | 제품 방향성 검토 — "올바른 것을 만들고 있는가?" |
| `/plan-eng-review` | 엔지니어링 매니저 | 아키텍처 리뷰 — 다이어그램, 장애 모드, 테스트 커버리지 |
| `/review` | 시니어 엔지니어 | 코드 리뷰 — race condition, N+1 쿼리, 보안 경계 |
| `/ship` | 릴리스 매니저 | 원커맨드 배포 — main 동기화, 테스트, 푸시, PR 생성 |
| `/qa` | QA 엔지니어 | diff 기반 브라우저 자동 테스트 |

### 브라우저 자동화

Playwright 기반 Bun 바이너리로 브라우저 자동 QA 테스트 실행. `/qa`로 변경된 부분의 UI를 자동 검증.

### 파괴적 명령 안전 경고

`rm -rf`, `DROP TABLE` 등 위험한 명령 실행 시 자동 경고.

### 자연어 트리거

슬래시 커맨드 외에 자연어로도 작동:
- "보안 점검해줘" → 보안 리뷰 실행
- "이거 배포해도 돼?" → ship 프로세스 안내

## 설치

**요구사항**: Claude Code, Git, Bun v1.0+

```bash
git clone --single-branch --depth 1 \
  https://github.com/garrytan/gstack.git \
  ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup
```

약 30초 소요. Docker, 클라우드 서비스, 추가 API 키 불필요.

## 장점과 한계

| 장점 | 한계 |
|------|------|
| 역할 부여로 AI 관점 다양화 | "프롬프트 모음일 뿐"이라는 비판 |
| 30초 원커맨드 설치 | 기존 프로젝트 적용(retrofit) 어려움 |
| Markdown 기반 투명성 | 스킬 1회당 10K+ 토큰 소모 |
| 브라우저 자동화 내장 | 규제/안전 중요 시스템에 부적합 |
| 배포까지 원스톱 (/ship) | 계획/설계 단계가 얕음 |

## 논란

- Garry Tan의 YC CEO 영향력이 기술적 가치보다 **과대 홍보에 기여**했다는 지적 존재
- TechCrunch에서 "찬반 논란"으로 보도 ([기사](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/))
- 실제로는 구조화된 프롬프트의 힘을 보여주는 좋은 사례이나, 플러그인 시스템의 기술적 깊이와는 차이

## AI 네이티브 관점에서의 의미

gstack은 [[concepts/ai-orchestration|AI 오케스트레이션]]에서 **역할 기반 프롬프팅(persona prompting)**의 효과를 보여준다. 같은 LLM이라도 "CEO 관점에서 리뷰해라"와 "보안 엔지니어 관점에서 리뷰해라"는 다른 결과를 낸다. 이는 [[concepts/context-engineering|Context Engineering]]의 실전 적용 — 프롬프트로 AI의 사고 맥락을 조종하는 것.

## 관련 도구

- [[tools/claude-code]] — gstack이 확장하는 베이스 도구
- [[tools/bkit]] — 더 넓은 범위의 프로세스 관리
- [[tools/superpowers]] — 더 깊은 수준의 TDD/계획
- [[tools/codex-plugin]] — 크로스-모델 리뷰

## 참고 소스

- [GitHub: garrytan/gstack](https://github.com/garrytan/gstack)
- [gstacks.org](https://gstacks.org/)
- [TechCrunch: gstack 찬반 논란](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/)
