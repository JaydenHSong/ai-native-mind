# AI Agent Orchestration 패턴 리서치 (2026-04-09)

## 출처
- https://www.anthropic.com/research/building-effective-agents
- https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns
- https://thinking.inc/en/blue-ocean/agentic/agent-orchestration-patterns/
- https://www.chanl.ai/blog/multi-agent-orchestration-patterns-production-2026

## Anthropic의 가이드: Building Effective Agents

Anthropic이 수십 개 팀과 협업하며 발견한 핵심 통찰:
- 가장 성공적인 구현은 복잡한 프레임워크가 아니라 **단순하고 조합 가능한 패턴**을 사용
- 원칙: 간단한 프롬프트로 시작 → 평가로 최적화 → 간단한 솔루션이 안될 때만 멀티에이전트

## 핵심 오케스트레이션 패턴

### 1. Prompt Chaining (순차 체이닝)
- 작업을 고정된 하위 단계로 분해
- 각 단계의 출력이 다음 단계의 입력
- 중간에 게이트/검증 추가 가능
- 예: 마케팅 카피 생성 → 다른 LLM이 번역 → 다른 LLM이 톤 검증

### 2. Routing (라우팅)
- 입력을 분류하여 전문화된 에이전트로 전달
- 고객 서비스에서 문의 유형별로 다른 에이전트 배정
- 각 에이전트가 도메인 특화 프롬프트를 가짐

### 3. Parallelization (병렬화)
- 독립적인 하위 작업을 동시 실행
- Sectioning: 작업을 나눠서 각 에이전트에 배분
- Voting: 같은 작업을 여러 에이전트가 수행, 결과 종합
- 속도와 신뢰성 향상

### 4. Orchestrator-Workers (오케스트레이터-워커)
- 중앙 오케스트레이터가 작업을 동적으로 분해하고 위임
- 복잡도가 예측 불가능한 작업에 적합
- Anthropic의 코딩 에이전트가 이 패턴 사용
- 예: GitHub 이슈를 받아 → 파일 분석 → 코드 수정 → 테스트

### 5. Evaluator-Optimizer (평가자-최적화자)
- 하나의 에이전트가 생성, 다른 에이전트가 평가
- 반복적으로 품질 개선
- 문학 번역, 코드 리뷰 등에 효과적

### 6. 자율 에이전트 (Autonomous Agent)
- 에이전트가 스스로 도구 사용과 의사결정
- 환경에서 피드백을 받아 다음 행동 결정
- 복잡한 open-ended 문제에 적합
- 주의: 비용과 에러 누적 가능

## 실무 고려사항

- 멀티에이전트는 싱글에이전트 대비 **10-15배 토큰 사용**
- 대부분의 경우 단일 에이전트 + 좋은 프롬프트가 더 효율적
- 프레임워크: LangGraph(안정적), CrewAI(빠른 프로토타입), OpenAI Agents SDK
- Gartner: 멀티에이전트 문의 2024 Q1→2025 Q2 **1,445% 증가**

## Context Engineering (맥락 공학)

Anthropic이 2026년 발표한 개념:
- 프롬프트 엔지니어링의 진화형
- AI가 작동하는 **전체 정보 환경을 설계하는 학문**
- 단순히 프롬프트 한 줄이 아니라, 시스템 전체의 맥락을 설계
- "AI를 반복 가능하게 만드는 것은 context engineering이다"
