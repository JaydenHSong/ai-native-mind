# Subagents & 위임 패턴 리서치 (2026-04-09)

## 출처
- https://claude.com/blog/subagents-in-claude-code
- https://code.claude.com/docs/en/sub-agents
- https://medium.com/@richardhightower/claude-code-subagents-and-main-agent-coordination-a-complete-guide-to-ai-agent-delegation-patterns-a4f88ae8f46c
- https://claudefa.st/blog/guide/agents/sub-agent-best-practices
- https://platform.claude.com/docs/en/agent-sdk/subagents

## Subagent이란?
Claude Code의 핵심 기능. 메인 세션과 분리된 전용 컨텍스트 윈도우를 가진 AI 에이전트.
각 subagent는 자체 시스템 프롬프트, 도구 제한, 모델 설정을 가질 수 있음.

## 3가지 호출 방식
1. **Natural language**: 프롬프트에 이름 언급 → Claude가 위임 결정
2. **@-mention**: `@agent-name`으로 한 작업에 강제 호출
3. **Session-wide**: 전체 세션이 해당 subagent의 시스템 프롬프트 사용

## 핵심 위임 패턴

### 1. Explore-Plan-Execute (3단계 파이프라인)
복잡한 엔지니어링 작업의 가장 신뢰할 수 있는 패턴:
- **Explore** subagent: 코드베이스 탐색, 관련 파일 요약
- **Plan** subagent: 탐색 결과 기반 계획 수립
- **Execute** subagent: 계획 실행

각 단계가 다음 단계에 깨끗한 핸드오프를 제공.

### 2. 병렬 Subagents
의존성 없는 서브태스크를 동시에 실행:
- 여러 파일의 에러 수정
- 여러 컴포넌트의 패턴 업데이트
- 독립적인 변경 작업
- 3개 병렬 subagent가 순차보다 빠름

### 3. Context Preservation (컨텍스트 보존)
메인 대화를 깨끗하게 유지:
- Subagent가 수십 개 파일을 읽고 **요약만** 반환
- 메인 컨텍스트에 raw 내용 대신 종합 결과만 유입
- Context Rot 방지에 효과적

## 언제 위임할까

### 위임 O
- Context gathering이 필요 (수십 개 파일 읽기)
- 의존성 없는 병렬 작업
- 전문화된 역할 (security reviewer, test writer)
- 깊은 탐색이 필요한 복잡한 작업

### 위임 X
- 간단한 단일 파일 수정
- 상호 의존적 작업 (순차 필요)
- 메인 컨텍스트가 이미 충분

## 설계 베스트 프랙티스
- **description 필드**: 언제 이 subagent를 써야 하는지 명확히 기술
- **도구 제한**: 각 subagent에 필요한 도구만 부여
- **모델 선택**: 간단한 작업은 Haiku, 복잡한 추론은 Opus

## 위치 (우선순위 순)
1. `.claude/agents/` (프로젝트) — 팀 공유
2. `~/.claude/agents/` (사용자) — 전역
