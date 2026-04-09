# AI Agent 프레임워크 비교 리서치 (2026-04-09)

## 출처
- https://particula.tech/blog/langgraph-vs-crewai-vs-openai-agents-sdk-2026
- https://gurusup.com/blog/best-multi-agent-frameworks-2026
- https://composio.dev/blog/openai-agents-sdk-vs-langgraph-vs-autogen-vs-crewai
- https://langgraphjs.guide/comparison/
- https://langfuse.com/blog/2025-03-19-ai-agent-comparison

## 3대 접근법
1. Graph-based (LangGraph) — 상태 그래프로 에이전트 흐름 정의
2. Role-based (CrewAI) — 역할 부여한 에이전트 팀 구성
3. Provider-native (OpenAI SDK) — 최소 코드, 핸드오프 패턴

## LangGraph
- 제작: LangChain
- 핵심: 방향성 상태 그래프 (노드=함수, 엣지=전환, 조건 분기)
- 장점: 프로덕션 최강, 체크포인팅, 시간 여행, LangSmith 관측
- 단점: 학습 곡선 높음, 보일러플레이트 많음
- 적합: 복잡한 상태 관리 필요한 프로덕션 시스템

## CrewAI
- GitHub Stars: 44.6K
- 핵심: 역할(role), 목표(goal), 배경(backstory) 부여한 에이전트 팀
- 장점: 프로토타입 40% 빠르게, MCP 1급 지원, 직관적 API
- 단점: 체크포인팅 제한, 프로덕션 안정성 중간
- 적합: 빠른 프로토타입, 팀 시뮬레이션

## OpenAI Agents SDK
- 핵심: 에이전트 정의 + 핸드오프 패턴, 100줄 미만 코드
- 장점: 최소 코드, 가드레일 내장, 트레이싱
- 단점: 벤더 종속 (이름은 100+ LLM 지원이라지만)
- 적합: OpenAI 생태계 안에서 빠르게 시작

## 선택 가이드
- 프로덕션 안정성 → LangGraph
- 빠른 프로토타입 → CrewAI
- OpenAI 생태계 → Agents SDK
- 1인 개발자 → Claude Code (프레임워크 없이 직접)
