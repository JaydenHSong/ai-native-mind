# AI 코드 리뷰 워크플로우 리서치 (2026-04-09)

## 출처
- https://code.claude.com/docs/en/code-review
- https://claude.com/blog/code-review
- https://addyosmani.com/blog/ai-coding-workflow/
- https://mindwiredai.com/2026/03/25/claude-code-creator-workflow-claudemd/
- https://github.com/shinpr/claude-code-workflows

## Claude Code Review (공식)

### 핵심 기능
- GitHub PR을 자동 리뷰
- 인라인 코멘트 포스팅
- 전문화된 에이전트가 코드 변경 분석
- **Correctness 중심** (포매팅이나 테스트 커버리지가 아님)

### 분석 영역
- Logic errors
- Security vulnerabilities
- Broken edge cases
- Subtle regressions
- Full codebase context 활용

## 솔로 개발자용 워크플로우

### 1. Plan-Review-Execute 패턴
```
1. Claude A: 계획 작성
2. Claude B: "스태프 엔지니어처럼" 리뷰
3. Claude A: 리뷰 반영 + 실행
```
**핵심**: 계획 없이 코딩 시작하는 것이 최대 실수.

### 2. Test-First with AI
```
1. 사람: 테스트 작성 (이해 보장)
2. AI: 구현
3. 테스트 실행 → 통과까지 반복
4. AI: 엣지 케이스 추가
```

### 3. Two-Phase Review
```
Phase 1: Self-review
  - AI에게 "방금 쓴 코드를 critical하게 리뷰해달라"
  - 다른 관점으로 보기

Phase 2: Human review
  - 사람이 AI 리뷰 결과 + 원본 코드 모두 확인
  - "AI가 놓쳤을 만한 것"에 집중
```

## 핵심 원칙 (Claude Code 제작자 100줄 워크플로우)

### 1. Single Source of Truth
- CLAUDE.md에 모든 규칙
- 2500 토큰 (~100줄) 제한
- 버전 관리 (git)

### 2. 실수는 CLAUDE.md에 기록
> "Anytime we see Claude do something incorrectly, we add it to CLAUDE.md so it doesn't repeat next time."

- 주당 여러 번 업데이트
- 같은 실수 반복 금지

### 3. Minimal Code Changes
- 가능한 한 간단한 변경
- 줄을 추가하기보다 **삭제**
- YAGNI 원칙 엄수

### 4. Slash Commands for Repetition
- 하루에 여러 번 하는 작업 = slash command
- Inner loop 워크플로우 자동화
- 반복 프롬프트 제거

### 5. Treat AI Output as Junior Developer Code
- 매 스니펫을 주니어 개발자가 쓴 것처럼 취급
- 읽고, 실행하고, 테스트
- "작동한다"는 말만 믿지 않기

## Addy Osmani의 LLM Workflow (2026)

### 1. Context First
- 작업 시작 전 관련 파일/문서 로드
- Context가 부족하면 결과도 나쁨

### 2. Incremental Changes
- 한 번에 한 가지만
- 작은 커밋으로 진행
- 각 단계 검증

### 3. Test-Driven AI
- 테스트가 AI를 가이드
- Red → AI가 Green → Refactor

### 4. The 80% Problem Awareness
- AI가 80% 해결
- 나머지 20%가 진짜 일
- 이 20%에 시간 투자

## GitHub Actions 통합

### 자동 PR 리뷰
```yaml
# .github/workflows/claude-review.yml
- uses: anthropics/claude-code-action@v1
  with:
    trigger: pull_request
    prompt: "Review for correctness, security, edge cases"
```

### 기능
- PR diff 분석
- 인라인 코멘트 포스팅
- PR 요약 생성
- 사전 분류된 PR을 사람이 리뷰

## 솔로 개발자를 위한 구체적 루틴

### 매일
1. CLAUDE.md 확인 (변경 있으면 커밋)
2. 작업 시작 → Plan 먼저
3. 작은 단위로 구현
4. Self-review 후 커밋

### PR 만들 때
1. `/commit` → 커밋 메시지 생성
2. `/pr` → PR 설명 자동 생성
3. Claude Code Review 자동 실행
4. 리뷰 반영 후 머지

### 주간
1. CLAUDE.md 리팩토링 (200줄 이하 유지)
2. 반복 작업 → slash command 추가
3. 실수 패턴 → CLAUDE.md 금지 항목에 추가
