---
title: "AI 비용 관리"
category: patterns
tags: [cost, pricing, optimization, anthropic, claude, openai]
created: 2026-04-09
updated: 2026-05-01
sources:
  - "raw/notes/2026-04-09-ai-cost-management.md"
  - "raw/articles/2026-05-01-anthropic-managed-agents-launch.md"
  - "raw/articles/2026-05-01-anthropic-advisor-strategy.md"
  - "raw/articles/2026-05-01-solo-founder-ai-stack-2026.md"
  - "raw/articles/2026-05-01-1-person-saas-cost-deep.md"
  - "raw/articles/2026-05-01-managed-vs-selfhost-breakeven.md"
related:
  - "[[patterns/prompt-caching]]"
  - "[[patterns/subagents-delegation]]"
  - "[[patterns/solo-product-strategy]]"
  - "[[tools/managed-agents]]"
  - "[[tools/deep-agents-deploy]]"
  - "[[comparisons/managed-vs-deep-agents]]"
status: active
confidence: high
---

# AI 비용 관리

## 쉽게 읽기

**비유**: AI는 글자 수(토큰)만큼 **종량제 과금**에 가깝다. 질문이 길수록·답이 길수록·모델이 비쌀수록 영수증이 커진다. 그래서 **짧은 모델로 먼저 시도**, **반복되는 앞부분 캐시**, **불필요한 맥락 줄이기**로 요금을 관리한다.

| 용어 | 풀이 |
|------|------|
| **토큰** | AI가 읽고 쓰는 **작은 글자 덩어리** 단위 |
| **Model routing** | 쉬운 일은 싼 모델, 어려운 일만 비싼 모델에 맡기기 |
| **Input / Output** | 질문 쪽 과금 vs 답변 쪽 과금(보통 답이 더 비쌈) |

## 한줄 설명

1인 개발자가 AI API 비용을 **95%까지 절감**하면서 프로덕션 품질을 유지하는 실전 전략.

## 2026 Claude API 가격 (per 1M tokens, 2026-05 시점)

| 모델 | Input | Output |
|------|-------|--------|
| **Opus 4.7 / 4.6** | $5 | $25 |
| **Sonnet 4.6** | $3 | $15 |
| **Haiku 4.5** | $1 | $5 |
| **Opus 4.6 fast mode** | $30 | $150 (6x premium) |

**주목**:
- Opus가 $15/$75 → $5/$25로 **67% 인하** (2026년)
- 모든 모델이 일관 **5x output:input** 비율 → 응답 길이를 schema로 강제하는 게 큰 절감
- **Batch API**: 50% 할인 (24h 비동기)
- **Prompt caching**: 캐시된 input -90%

→ 변곡점·시나리오는 [[examples/cost-simulator/index.html|인터랙티브 비용 시뮬레이터]]에서 직접 확인.

## 핵심 최적화 전략

### 1. Model Routing — 최대 임팩트 ⭐

> "가장 높은 레버리지의 비용 최적화는 작업별로 올바른 모델을 고르는 것."

**같은 토큰 = 5배 비용 차이** (Opus vs Haiku).

**작업별 모델 선택**:

| 모델 | 용도 | 예시 |
|------|------|------|
| **Haiku 4.5** | 분류, 라우팅, 간단한 추출 | 대량 처리, 스팸 필터 |
| **Sonnet 4.6** | 일반 프로덕션 워크로드 | **기본값** |
| **Opus 4.6** | 복잡한 추론, 아키텍처 결정 | 필요할 때만 |

### 2. [[patterns/prompt-caching|Prompt Caching]] — 90% 절감

- Opus input $5/1M → 캐시 읽기 $0.50/1M
- 큰 프롬프트, 긴 대화, 코드베이스 컨텍스트에 강력
- 자세한 내용: [[patterns/prompt-caching]] 참고

### 3. Batch Processing — 50% 할인

- Anthropic, OpenAI 모두 제공
- 표준 API 가격의 **50%**
- 단점: 24시간 내 처리 (실시간 아님)
- **적합**: 코드 리뷰, 문서 생성, 배치 분석

### 4. 결합 전략

```
일반 가격: $100
+ Prompt Caching (90% 절감): $10
+ Batch API (50% 추가 할인): $5
= 최대 95% 절감
```

## Claude Code의 비용 관리

### Hard Limits
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
- **90% 비용 절감**
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

### 케이스 3: [[patterns/subagents-delegation|Subagent]]로 비용 분리

- 메인 agent: Sonnet (전체 조율)
- Exploration subagent: Haiku (빠른 탐색)
- Review subagent: Opus (깊은 분석)
- → 필요한 곳에만 고비용 모델

## 1인 개발자 월별 예산 가이드

### 취미/학습
- Claude API: **$20-50/월**
- Haiku + Sonnet 위주
- 프롬프트 캐싱 필수

### MVP 개발
- Claude Code Max: **$100-200/월**
- 또는 API $100-300/월
- Subagent 활용

### 프로덕션 1인 SaaS
- 사용자당 비용 계산 필수
- Model routing 최적화
- Batch API로 offline 작업
- **수익 대비 AI 비용 < 30% 유지**

## 경쟁 구도 (2026)

### 가격 수렴
- Grok, Gemini, ChatGPT, Claude 가격 비슷해짐
- 차별화는 품질과 속도로

### 3계층

| 계층 | 모델 |
|------|------|
| **저가** | Haiku 4.5, GPT-5.4 nano, Gemini Flash |
| **중가** | Sonnet 4.6, GPT-5.4 mini |
| **고가** | Opus 4.6, GPT-5.4, GPT-5.4 Pro |

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

## 2026-04 신규 변수: Managed 플랫폼 세션 단가

[[tools/managed-agents|Claude Managed Agents]] (2026-04-08 출시)는 토큰 비용 외에 **세션 활성 시간당 $0.08** 추가. 인프라 빌드/유지를 며칠로 단축하는 대신, **long-lived 세션이 많아지면 누적 부담** — 즉 시간을 사는 비용이다.

### Managed vs Self-host 변곡점 (대략적, 검증 필요)

| 시점 | 권장 |
|------|------|
| MVP, 0~100 사용자 | **Managed Agents** — 시간 절약 가치 압도적 |
| 100~1,000 사용자 | 둘 다 viable, 비용·lock-in 비교 |
| 1,000+ 사용자, long-lived 세션 다수 | **[[tools/deep-agents-deploy|Deep Agents Deploy]] 셀프 호스팅 검토** |
| 정부·on-prem·다중 벤더 | 처음부터 Deep Agents Deploy |

[[comparisons/managed-vs-deep-agents]] 에 더 자세한 비용 비교.

## Advisor Strategy — 비싼 모델 + 저렴한 모델 라우팅의 새 변형

[Anthropic 2026-04-09 발표](https://claude.com/blog/the-advisor-strategy)에 따르면, **메인 에이전트는 저렴/빠른 모델로 돌리고, 어렵거나 불확실한 결정에서만 더 똑똑한 advisor 모델에게 짧게 컨설팅**받는 패턴이 비용·지연·품질 절충을 다시 잡는다.

- 비유: 메인 = 현장 직원, advisor = 상사 — 매 결정마다 부르면 비용 폭발하지만, **막힐 때만** 부르면 양쪽 시간을 다 아낀다.
- 적합: long-running session에서 가끔 critical decision (코딩 에이전트의 아키텍처 선택, 디버깅 root cause 가설 검증)
- 위 표의 "Model Routing"의 더 정밀한 변형으로 보면 됨

## ❌ 피해야 할 실수

- 모든 요청을 Opus로
- Prompt caching 무시
- 무제한 컨텍스트 주입
- Batch 가능한 것을 실시간으로
- 비용 모니터링 없이 배포

## Chapter Clear 가이드

- **소속 챕터**: Chapter 7 (엔드게임)
- **퀘스트**: 내 사용 패턴 기준으로 model routing 규칙 1개와 예산 상한 1개를 정한다.
- **클리어 조건**: 비용 최적화 전후를 숫자로 비교할 수 있다.
- **보상(산출물)**: 월간 AI 비용 운영표 v1
- **다음 퀘스트**: [[wiki/campaign-map]] -> [[wiki/log]]

## 참고 소스

- [AI 비용 관리 리서치](raw/notes/2026-04-09-ai-cost-management.md)
- [Claude API Pricing (Anthropic)](https://platform.claude.com/docs/en/about-claude/pricing)
- [Manage Costs Effectively (Claude Code Docs)](https://code.claude.com/docs/en/costs)
- [Real Cost of AI Coding 2026 (Morph)](https://www.morphllm.com/ai-coding-costs)
