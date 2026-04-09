# AI 비용 관리 리서치 (2026-04-09)

## 출처
- https://platform.claude.com/docs/en/about-claude/pricing
- https://www.metacto.com/blogs/anthropic-api-pricing-a-full-breakdown-of-costs-and-integration
- https://code.claude.com/docs/en/costs
- https://www.mindstudio.ai/blog/ai-agent-token-budget-management-claude-code
- https://www.morphllm.com/ai-coding-costs
- https://claude5.com/news/ai-api-economics-2026-cost-optimization-and-market-pricing-t

## 2026 Claude API 가격 (per 1M tokens)

| 모델 | Input | Output |
|------|-------|--------|
| **Opus 4.6** | $5 | $25 |
| **Sonnet 4.6** | $3 | $15 |
| **Haiku 4.5** | $1 | $5 |

**주목**: Opus가 $15/$75 → $5/$25로 **67% 인하** (2026년).

## 핵심 최적화 전략

### 1. Model Routing (모델 라우팅) — 최대 임팩트
> "가장 높은 레버리지의 비용 최적화는 작업별로 올바른 모델을 고르는 것"

**같은 토큰 = 5배 비용 차이** (Opus vs Haiku)

**작업별 모델 선택**:
- **Haiku 4.5**: 분류, 라우팅, 간단한 추출 → 대량 처리
- **Sonnet 4.6**: 일반 프로덕션 워크로드 → 기본값
- **Opus 4.6**: 복잡한 추론, 아키텍처 결정 → 필요할 때만

### 2. Prompt Caching — 90% 절감
- Opus input $5/1M → 캐시 읽기 $0.50/1M
- 큰 프롬프트, 긴 대화, 코드베이스 컨텍스트에 강력
- 자세한 내용: [[concepts/prompt-caching]] 참고

### 3. Batch Processing — 50% 할인
- Anthropic, OpenAI 모두 제공
- 표준 API 가격의 **50%**
- 단점: 24시간 내 처리 (실시간 아님)
- **적합**: 코드 리뷰, 문서 생성, 배치 분석

### 4. Prompt Caching + Batch 결합
```
일반 가격: $100
+ Prompt Caching (90% 절감): $10
+ Batch API (50% 추가 할인): $5
= 최대 95% 절감
```

## Claude Code의 비용 관리

### Hard Limits
Claude Code는 하드 리미트 내장:
- 토큰 버짓 체크
- 자동 compaction
- 사전 예산 검증

### Auto Compaction
컨텍스트 윈도우가 차기 전에 자동으로 대화 히스토리 압축.
Context rot 방지 + 비용 절감.

### Session Cost Tracking
`/cost` 명령어로 현재 세션 비용 확인.

## 실전 시나리오

### 케이스 1: 월 $720 → $72
한 개발자의 실제 경험:
- 프롬프트 캐싱 적용
- 90% 비용 절감
- 변경 없이 동일 기능

### 케이스 2: 계획적 라우팅
```python
def route_model(task_complexity: str) -> str:
    if task_complexity == "simple":  # 분류, 추출
        return "haiku-4.5"
    elif task_complexity == "medium":  # 일반 코딩
        return "sonnet-4.6"
    else:  # 아키텍처, 복잡한 추론
        return "opus-4.6"
```

### 케이스 3: Subagent로 비용 분리
- 메인 agent: Sonnet (전체 조율)
- Exploration subagent: Haiku (빠른 탐색)
- Review subagent: Opus (깊은 분석)
- → 필요한 곳에만 고비용 모델

## 1인 개발자 월별 예산 가이드

### 취미/학습
- Claude API: $20-50/월
- Haiku + Sonnet 위주
- 프롬프트 캐싱 필수

### MVP 개발
- Claude Code Max: $100-200/월
- 또는 API $100-300/월
- Subagent 활용

### 프로덕션 1인 SaaS
- 사용자당 비용 계산 필수
- Model routing 최적화
- Batch API로 offline 작업
- 수익 대비 AI 비용 < 30% 유지

## 경쟁 구도 (2026)

### 가격 수렴
- Grok, Gemini, ChatGPT, Claude 가격 비슷해짐
- 차별화는 품질과 속도로

### 계층
- **저가**: Haiku 4.5, GPT-5.4 nano, Gemini Flash
- **중가**: Sonnet 4.6, GPT-5.4 mini
- **고가**: Opus 4.6, GPT-5.4, GPT-5.4 Pro

## 모니터링 베스트 프랙티스

### 1. Daily Budget Alert
```bash
# cron job
./check-api-spend.sh $DAILY_LIMIT
```

### 2. Token Usage Dashboard
- LangSmith, Helicone, Langfuse
- 실시간 비용 추적
- 모델별, 기능별 분해

### 3. Quarterly Review
- 가장 비싼 작업 식별
- 더 저렴한 모델로 이전 가능한지 확인
- 캐싱 전략 최적화

## 피해야 할 실수
- ❌ 모든 요청을 Opus로
- ❌ Prompt caching 무시
- ❌ 무제한 컨텍스트 주입
- ❌ Batch 가능한 것을 실시간으로
- ❌ 비용 모니터링 없이 배포
