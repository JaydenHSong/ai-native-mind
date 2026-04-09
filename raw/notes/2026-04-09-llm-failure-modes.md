# AI가 실패하는 패턴 리서치 (2026-04-09)

## 출처
- https://www.morphllm.com/context-rot
- https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models
- https://www.harness.io/blog/defeating-context-rot-mastering-the-flow-of-ai-sessions
- https://thenewstack.io/context-rot-enterprise-ai-llms/
- https://openreview.net/forum?id=vHKUXkrpVs

## AI의 주요 실패 패턴

### 1. Hallucination (환각)
**정의**: 모델이 사실이 아닌 정보를 확신에 차서 생성.

**원인** (2026 연구):
- 노이즈 데이터
- 아키텍처 quirk
- 디코딩 랜덤성
- **시스템적 인센티브 문제** (2025 Harvard 연구)
- 모델이 "모른다"고 말하기보다 뭔가 말하도록 훈련됨

**2026 접근**:
- Zero hallucination은 불가능하다고 인정
- "불확실성 관리"에 집중
- 투명한 uncertainty가 신뢰의 핵심

### 2. Context Rot (컨텍스트 부패)
**정의**: 입력 길이가 증가할수록 LLM 성능이 측정 가능하게 저하.

**핵심 발견 (Chroma 연구)**:
- 18개 frontier 모델 테스트 → **모두** 성능 저하
- 코딩 에이전트의 **주요 실패 모드**

**U자 곡선 패턴**:
- 모델은 컨텍스트의 **시작과 끝**에 강한 주의
- **중간 부분은 무시**
- 20개 문서 QA에서 관련 문서가 위치 5-15에 있으면 정확도 30% 하락

**원인**:
- Self-attention 메커니즘의 한계
- 긴 컨텍스트에서 관련성 판단 어려움

### 3. Error 누적 (Error Cascading)
**에이전트 특화**:
- 한 단계 오류가 다음 단계에 전파
- 멀티스텝 작업에서 기하급수적으로 악화
- "한 번 틀리면 복구 어려움"

### 4. Tool Hallucination
**정의**: 존재하지 않는 도구를 호출하려 시도.

**흥미로운 발견 (2026)**:
> "추론 능력 강화가 도구 환각을 증폭시킨다"

"똑똑해질수록 거짓말도 정교해짐"

### 5. The Reasoning Trap
추론 체인이 길어질수록 오류 가능성 증가.
Chain-of-thought의 어두운 면.

## Hallucination과 Context Rot의 연결

> "환각은 종종 Context Rot의 하류 증상이다"

- 컨텍스트가 저하되면 불확실성 증가
- 모델이 통계적으로 가능한 답으로 빈 곳 채움
- **원인은 모델이 아니라 컨텍스트 관리**

## AI Agent 특화 위험
- 모델이 파일 수정, 코드 실행, 데스크톱 조작 가능
- 환각이 "잘못된 텍스트"를 넘어 **구체적 실패**로
- 보안 위협 확장 (untrusted 컨텐츠 섭취)

## 실전 완화 전략

### Context Rot 방지
- **긴 컨텍스트 사용 최소화**
- 관련 정보만 선택적 로드
- Subagent로 컨텍스트 격리
- Summarization으로 정보 압축

### Hallucination 방지
- RAG로 grounded 답변 강제
- Structured output으로 제약
- LLM-as-Judge로 검증
- Uncertainty 표현 장려

### Error 누적 방지
- 매 단계 검증 게이트
- Early stopping 조건
- Rollback 메커니즘
- Human-in-the-loop 체크포인트

## Claude Code의 대응 (소스코드 유출로 확인)
- **3계층 메모리 아키텍처**: Context entropy 방지가 명시적 목표
- 컨텍스트 자동 압축
- 토큰 버짓 관리
- 재시도 로직
