# AI 코딩 도구 비교 리서치 (2026-04-09)

## 출처
- https://kanerika.com/blogs/github-copilot-vs-claude-code-vs-cursor-vs-windsurf/
- https://dev.to/pockit_tools/cursor-vs-windsurf-vs-claude-code-in-2026-the-honest-comparison-after-using-all-three-3gof
- https://dev.to/whoffagents/claude-code-vs-cursor-vs-github-copilot-which-ai-coding-tool-is-actually-worth-it-in-2026-30a4
- https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/

## 4대 도구 핵심 차이

### Claude Code
- 터미널 기반 AI 에이전트 (IDE 아님)
- 아키텍처 레벨 사고 + 자율 실행
- CLAUDE.md로 컨텍스트 영속화
- 1M 토큰 컨텍스트 윈도우
- $100/월 (Max) — 10B 토큰 8개월 사용 사례
- 강점: 멀티파일 대규모 변경, 복잡한 추론

### Cursor
- AI-first IDE (VS Code 포크)
- Agent Mode (Composer)로 계획→수정→diff 보여줌
- $20/월 (Pro), $60 (Pro+), $200 (Ultra)
- 200K 토큰 컨텍스트
- 강점: IDE 통합, 인라인 편집, 빠른 반복

### GitHub Copilot
- VS Code/JetBrains 플러그인
- 인라인 자동완성 최강
- $10/월 (Pro) — 가성비 최고
- Claude Opus 4.6 접근 가능
- 강점: 코드 완성, CRUD, 테스트 스텁

### Windsurf
- IDE + AI 통합 (Codeium 제작)
- $15/월, 1000 프롬프트
- 50-70K 실효 컨텍스트
- 강점: 가격 대비 성능, 인디 개발자 친화적

## 조합 전략 (1인 개발자)
1. Claude Code + Cursor: 대규모 작업은 CC, 일상 코딩은 Cursor
2. Claude Code + Copilot: CC로 아키텍처, Copilot으로 인라인 완성
3. Claude Code 단독: 터미널 중심, CLAUDE.md로 전체 관리
