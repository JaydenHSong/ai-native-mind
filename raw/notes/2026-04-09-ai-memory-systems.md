# AI Memory Systems 리서치 (2026-04-09)

## 출처
- https://www.analyticsvidhya.com/blog/2026/04/memory-systems-in-ai-agents/
- https://mem0.ai/blog/state-of-ai-agent-memory-2026
- https://redis.io/blog/ai-agent-memory-stateful-systems/
- https://machinelearningmastery.com/the-6-best-ai-agent-memory-frameworks-you-should-try-in-2026/
- https://www.ibm.com/think/topics/ai-agent-memory

## AI Agent Memory란?
LLM의 컨텍스트 윈도우를 넘어선 지속적 기억 시스템.
2026년 현재 AI 에이전트의 핵심 아키텍처 컴포넌트.

## Short-term Memory (단기 메모리)

### 특징
인간의 작업 기억(working memory)과 유사.
- 최근 대화 히스토리
- 시스템 프롬프트
- 도구 출력
- 추론 단계
- **모델의 컨텍스트 윈도우 내**에 저장

### 관리
토큰 제한으로 FIFO 큐 사용:
- 새 정보가 들어오면 오래된 정보 제거
- Sliding window 방식

## Long-term Memory (장기 메모리)

### 특징
세션 종료 후에도 지속되는 영구 저장소.
여러 세션에 걸쳐 누적되는 지식.

### 3가지 모달리티

#### 1. Episodic (일화적 메모리)
**특정 사건과 경험**의 기억
- "2026-04-09에 사용자가 X를 요청함"
- 시간 정보 포함
- 특정 상호작용의 기록

#### 2. Semantic (의미적 메모리)
**사실과 개념**의 기억
- "사용자 이름은 Jayden"
- "프로젝트는 Next.js로 작성됨"
- 시간 무관 정보

#### 3. Procedural (절차적 메모리)
**방법과 스킬**의 기억
- "이 프로젝트 빌드는 pnpm build"
- "테스트 실행은 pnpm test"
- 학습된 행동 패턴

## 메모리 전환 (Short → Long)
단기 메모리에서 장기 메모리로의 압축:
- "인지적 압축" (cognitive compression)
- 대화 소음에서 중요 신호 분리
- LLM이 "이게 기억할 가치가 있는가" 판단

## 주요 프레임워크

### Mem0
- 오픈소스 메모리 레이어
- GPT, Claude, Llama 지원
- 자동 추출/저장/검색

### Zep
- 장기 메모리 특화
- 지식 그래프 접근
- 시맨틱 + 그래프 검색 결합

### LangChain Memory
- 다양한 메모리 클래스
- Buffer, Summary, Entity, Knowledge Graph

### AWS AgentCore
- 엔터프라이즈 장기 메모리
- AWS 인프라 통합

### Redis for Memory
- Redis를 메모리 백엔드로
- 빠른 읽기/쓰기

## 2026 트렌드

### 계층적 시스템
- L1: 대화 컨텍스트 (초단기)
- L2: 세션 요약 (단기)
- L3: 벡터 DB (중기)
- L4: 지식 그래프 (장기)

### 멀티 에이전트 공유 메모리
여러 에이전트가 동일한 메모리 접근.
팀 협업 시뮬레이션에 필수.

### 감정적/맥락적 인식
단순 사실 저장을 넘어 의도와 감정 추적.

## Context Engineering과의 관계
Context Engineering의 5요소 중 **Memory/State** 계층.
- wiki/는 Semantic memory
- log.md는 Episodic memory
- CLAUDE.md는 Procedural memory (우리 위키 경우)

## 구현 고려사항
- **망각 전략**: 언제 뭘 지울 것인가
- **검색 전략**: 필요한 기억만 로드
- **프라이버시**: PII 처리
- **비용**: 벡터 DB, 저장소 비용
