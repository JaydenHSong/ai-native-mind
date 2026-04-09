# AI Engineering 패러다임 진화 리서치 (2026-04-09)

## 출처
- https://medium.com/@server_62309/prompt-engineering-vs-context-engineering-vs-harness-engineering-whats-the-difference-in-2026-2883670f78f1
- https://www.epsilla.com/blogs/harness-engineering-evolution-prompt-context-autonomous-agents
- https://martinfowler.com/articles/harness-engineering.html
- https://wavespeed.ai/blog/posts/claude-code-agent-harness-architecture/
- https://blog.dailydoseofds.com/p/the-anatomy-of-an-agent-harness
- https://thenewstack.io/vibe-coding-agentic-engineering/
- https://www.nxcode.io/resources/news/agentic-engineering-complete-guide-vibe-coding-ai-agents-2026
- https://datasciencedojo.com/blog/harness-engineering/
- https://bdtechtalks.substack.com/p/the-art-of-ai-harness-engineering

## 3세대 진화: Prompt → Context → Harness

### 1세대: Prompt Engineering (2022-2024)
- "무엇을 질문하는가" (what to ask)
- few-shot learning, chain-of-thought, role-playing
- 한 번의 입력을 최적화하여 한 번의 좋은 출력을 얻기
- 시대: ChatGPT 출시 ~ 에이전트 이전

### 2세대: Context Engineering (2025)
- "모델이 자신있게 답할 수 있도록 무엇을 보내는가" (what to send)
- 대화 히스토리, 검색된 문서, 사용자 선호도, 사용 가능한 도구, 출력 포맷
- AI가 작동하는 전체 정보 환경을 설계
- Anthropic이 개념 정립, CLAUDE.md가 대표적 구현체

### 3세대: Harness Engineering (2026)
- "전체 시스템이 어떻게 작동하는가" (how the whole thing operates)
- AI 에이전트를 감싸는 완전한 인프라 설계
- 제약, 피드백 루프, 오케스트레이션 레이어, 제어 메커니즘
- Agent = Model + Harness

## 계층 관계

```
Harness Engineering (전체 시스템)
  └── Context Engineering (정보 환경)
        └── Prompt Engineering (단일 지시)
```

하네스가 컨텍스트를 포함하고, 컨텍스트가 프롬프트를 포함한다.
각 세대가 해결하는 문제가 완전히 다르다.

## Harness Engineering 상세

### 정의
Agent에서 모델 자체를 제외한 모든 것 = Harness
오케스트레이션 루프, 도구, 메모리, 컨텍스트 관리, 상태 지속, 에러 처리, 가드레일

### 3대 구성요소 (Martin Fowler)
1. Guides (가이드) — 에이전트가 행동하기 전에 조향하는 피드포워드 제어
   - 코딩 컨벤션, 구조화된 프롬프트, 부트스트랩 지시
2. Sensors (센서) — 에이전트가 행동한 후에 문제를 잡는 피드백 제어
   - 린터, 타입 체커, 테스트 스위트
3. 제어의 구분:
   - Computational controls: 결정적, 빠름, 저렴 (린터, 타입체크)
   - Inferential controls: AI 기반 의미론적 리뷰, 느림, 비쌈 (코드 리뷰 에이전트)

### Claude Code 사례 (소스코드 유출 사건으로 밝혀진 구조)
- 2026년 3월 31일 Anthropic이 npm 업데이트에 실수로 전체 소스코드 포함
- 500,000줄 TypeScript, 1,900개 파일
- 약 40개의 권한 제어 도구 (파일, bash, 웹, LSP)
- 46,000줄의 쿼리 엔진 (LLM API, 토큰 캐싱, 컨텍스트 관리, 재시도)
- 3계층 메모리 아키텍처: "context entropy" (에이전트가 점점 맥락을 잃는 현상) 방지

### OpenAI Codex 사례
- 2026년 2월 "Harness engineering: leveraging Codex in an agent-first world" 발표
- 내부 소프트웨어 제품을 수동 코드 0줄로 출시
- 3명 엔지니어가 5개월간 약 1,500 PR, 약 100만 줄 코드 생성
- 모든 코드를 Codex 에이전트가 작성

## Harness Engineering이 필요한 이유
- AI 에이전트 실패율 약 20%
- MIT 연구: 대기업 GenAI 파일럿의 약 95%가 측정 가능한 수익을 내지 못함
- "에이전트가 유용할 만큼 좋아졌지만, 혼자 믿을 만큼 신뢰할 수는 없는" 상태

## Vibe Coding → Agentic Engineering

### Vibe Coding (Andrej Karpathy, 2025년 2월)
- AI가 생성한 코드를 diff도 안 읽고 수용
- 빠른 프로토타이핑에 적합, 프로덕션에는 부적합
- "vibes에 완전히 몸을 맡기는" 코딩

### Agentic Engineering (Karpathy, 2026년 초)
- Vibe Coding의 성숙한 진화
- AI 에이전트가 계획, 작성, 테스트, 반복하되 구조화된 인간 감독 하에
- 대규모 리팩토링, 프로덕션 CI/CD 파이프라인에 적합

### 수치
- 2026년 미국 개발자 92%가 AI 코딩 도구 일상 사용
- 전체 코드의 41%가 AI 생성
- Vibe coding 사용자의 63%가 비개발자
- Gartner: 2026년 말까지 기업 앱 40%에 AI 에이전트 내장

## Cognitive Debt (인지 부채) — 2026년 새 용어
- 기술 부채(technical debt)의 AI 버전
- AI 상호작용의 잘못된 관리, 컨텍스트 손실, 신뢰할 수 없는 에이전트 행동이 누적
- 2026년 주요 위협으로 부상
