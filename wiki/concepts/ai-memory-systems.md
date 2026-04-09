---
title: "AI Memory Systems"
category: concepts
tags: [memory, agent, long-term, short-term, context]
created: 2026-04-09
updated: 2026-04-09
sources:
  - "raw/notes/2026-04-09-ai-memory-systems.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/vector-db-embeddings]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
status: active
confidence: high
---

# AI Memory Systems

## 한줄 정의

LLM의 컨텍스트 윈도우를 넘어선 **지속적 기억** 시스템. 2026년 AI 에이전트의 핵심 아키텍처 컴포넌트.

## 핵심 내용

### Short-term Memory (단기 메모리)

인간의 작업 기억(working memory)과 유사. **모델의 컨텍스트 윈도우 내**에 저장.

**포함**:
- 최근 대화 히스토리
- 시스템 프롬프트
- 도구 출력
- 추론 단계

**관리**: 토큰 제한으로 FIFO 큐 사용 — 새 정보가 들어오면 오래된 정보 제거.

### Long-term Memory (장기 메모리)

세션 종료 후에도 지속되는 **영구 저장소**. 여러 세션에 걸쳐 누적되는 지식.

## 장기 메모리의 3가지 모달리티

### 1. Episodic (일화적)
**특정 사건과 경험**의 기억
- "2026-04-09에 사용자가 X를 요청함"
- 시간 정보 포함
- **우리 위키의 `wiki/log.md`가 이 역할**

### 2. Semantic (의미적)
**사실과 개념**의 기억
- "사용자 이름은 Jayden"
- "프로젝트는 Next.js로 작성됨"
- 시간 무관 정보
- **우리 위키의 `wiki/concepts/`가 이 역할**

### 3. Procedural (절차적)
**방법과 스킬**의 기억
- "이 프로젝트 빌드는 pnpm build"
- "위키 Ingest 10단계 체크리스트"
- **우리 위키의 `CLAUDE.md`가 이 역할**

## 메모리 전환 (Short → Long)

단기 → 장기 압축 프로세스:
- "**인지적 압축**" (cognitive compression)
- 대화 소음에서 중요 신호 분리
- LLM이 "이게 기억할 가치가 있는가" 판단

## 주요 프레임워크

| 프레임워크 | 특징 | 적합 |
|----------|------|------|
| **Mem0** | 오픈소스, 자동 추출/저장 | 범용 |
| **Zep** | 지식 그래프 통합 | 관계 추론 |
| **LangChain Memory** | 다양한 클래스 | LangChain 생태계 |
| **AWS AgentCore** | 엔터프라이즈 | AWS 통합 |
| **Redis for Memory** | 빠른 읽기/쓰기 | 고성능 |

## 2026 트렌드

### 계층적 시스템
```
L1: 대화 컨텍스트 (초단기)
L2: 세션 요약 (단기)
L3: 벡터 DB (중기)
L4: 지식 그래프 (장기)
```

### 멀티 에이전트 공유 메모리
여러 에이전트가 동일한 메모리 접근. 팀 협업 시뮬레이션에 필수.

### 감정적/맥락적 인식
단순 사실 저장을 넘어 의도와 감정 추적.

## [[concepts/context-engineering|Context Engineering]]과의 관계

Context Engineering 5요소 중 **Memory/State** 계층. 우리 위키가 이미 완벽한 구현:

| 요소 | 구현 |
|------|------|
| **Semantic Memory** | `wiki/concepts/`, `wiki/patterns/` |
| **Episodic Memory** | `wiki/log.md` |
| **Procedural Memory** | `CLAUDE.md` |
| **Short-term** | Claude Code 세션 컨텍스트 |

## 구현 고려사항

- **망각 전략**: 언제 뭘 지울 것인가
- **검색 전략**: 필요한 기억만 로드
- **프라이버시**: PII 처리
- **비용**: 벡터 DB, 저장소 비용

## 참고 소스

- [AI Memory Systems 리서치](raw/notes/2026-04-09-ai-memory-systems.md)
- [State of AI Agent Memory 2026 (Mem0)](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [AI Agent Memory Architecture (Redis)](https://redis.io/blog/ai-agent-memory-stateful-systems/)
