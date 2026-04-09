---
title: "Git + AI 워크플로우"
category: patterns
tags: [git, workflow, claude-code, commits, pr]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-git-ai-workflow.md"
related:
  - "[[patterns/ai-code-review]]"
  - "[[patterns/claude-md-guide]]"
  - "[[tools/claude-code]]"
  - "[[patterns/subagents-delegation]]"
status: active
confidence: high
---

# Git + AI 워크플로우

## 한줄 설명

Claude Code의 Git 통합으로 커밋 메시지, PR 생성, 브랜치 관리를 자동화하는 실전 워크플로우.

## 핵심 Slash Commands

### /commit
```
1. diff 읽기
2. 관련 파일 스테이징
3. 설명적 커밋 메시지 생성
4. 사용자 승인 후 커밋
```
Conventional commits 포맷 자동 지원.

### /pr
```
1. 현재 브랜치의 모든 커밋 분석
2. PR 제목 + 설명 자동 생성
3. gh pr create로 PR 오픈
```

### /commit-push-pr (커스텀 체인)

`.claude/commands/commit-push-pr.md`:
```markdown
1. 변경 사항 리뷰
2. 파일 스테이징
3. 설명적 커밋 메시지로 커밋
4. 현재 브랜치로 푸시
5. PR 생성 + 변경 요약
```

## 좋은 AI 생성 커밋 메시지

```
feat(auth): add OAuth2 refresh token handling

- Add refresh token rotation logic to AuthService
- Update token storage to encrypt refresh tokens
- Add tests for token expiration scenarios

Closes #123
```

### 자동 생성 규칙
- Conventional commits 포맷
- **Why, not just What**
- 관련 이슈 링크
- Breaking change 명시

## GitHub Actions 통합

### PR 자동 리뷰
```yaml
name: Claude PR Review
on: pull_request

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          trigger: pull_request
          prompt: |
            Review this PR for:
            - Correctness
            - Security vulnerabilities
            - Edge cases
            - Performance issues
```

**작동**:
1. PR 열림/업데이트
2. Claude가 diff 읽음
3. 인라인 코멘트 포스팅
4. 요약 코멘트 추가
5. 사람 리뷰어가 사전 분류된 PR 인계

## 브랜치 전략 (AI 시대)

### 작은 브랜치 원칙
- AI가 빠르게 변경 → **더 작은 브랜치** 유지
- PR당 ~200 LoC 이내
- 리뷰 가능한 단위 유지

### Worktree 활용 (병렬 작업)

```bash
git worktree add ../project-feature-a feature-a
git worktree add ../project-feature-b feature-b
```

- 여러 Claude Code 인스턴스 병렬 실행
- 각 브랜치가 독립적 작업 공간
- 머지 충돌 최소화
- [[patterns/subagents-delegation|Subagents 병렬 패턴]]과 결합

## 1인 개발자 루틴

### 매 기능 시작 시
```
1. git checkout -b feature/name
2. Claude Code 열기
3. Plan → Design → Implement
4. /commit (작은 단위로)
5. /pr
6. Self-review 후 머지
```

### 커밋 빈도
- **작게, 자주**
- 기능 단위가 아니라 **이해 단위**
- "이 커밋을 나중에 혼자 revert할 수 있나?"

### 리뷰 습관
- 자동 생성 커밋 메시지도 **읽고** 승인
- PR 설명 검증
- AI가 만든 테스트 **실제 실행**

## Git Hook + AI

### Pre-commit
```bash
#!/bin/sh
# AI가 커밋 전 검증
claude-code review-staged
```

### Commit-msg
```bash
#!/bin/sh
# 메시지 품질 체크
claude-code validate-commit-msg $1
```

## Slash Commands 팀 공유

`.claude/commands/` 디렉토리를 **git에 커밋** → 팀 전체 사용.
프로젝트별 워크플로우를 코드로 관리.

## CLAUDE.md에 Git 규칙

```markdown
## Git Conventions
- Conventional commits
- Squash merge only
- Branch names: type/issue-123-short-desc
- Max 200 LoC per PR
```

## 비상 복구

- AI가 실수한 커밋 → `git revert`
- 잘못된 force push → `git reflog`로 복구
- **AI에게 복구 명령도 요청 가능** — "git reflog로 이전 상태 복구해줘"

## 추천 도구

### 0xkaz/claude-auto-commit
오픈소스 도구:
- Claude Code SDK 활용
- 지능적 커밋 메시지 생성
- 다국어 지원 (한국어 포함)
- 고급 기능 (스테이징 전략, 컨벤션 강제)

## 참고 소스

- [Git + AI Workflow 리서치](raw/notes/2026-04-09-git-ai-workflow.md)
- [Claude Code Git Integration](https://claudefa.st/blog/guide/development/git-integration)
- [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions)
- [Build PR Reviews with GitHub Actions](https://markaicode.com/claude-code-github-actions-pr-reviews/)
