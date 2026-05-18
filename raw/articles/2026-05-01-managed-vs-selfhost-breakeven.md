---
source_url: "internal-synthesis"
title: "Managed vs Self-host 변곡점 모델 (2026-05 정밀)"
ingested: 2026-05-01
related_urls:
  - "https://claude.com/blog/claude-managed-agents"
  - "https://github.com/langchain-ai/deepagents"
  - "https://northflank.com/blog/daytona-vs-modal"
---

# Managed Agents vs Self-host — 비용 변곡점 정밀 모델

> 본 raw는 [tools/managed-agents](https://claude.com/blog/claude-managed-agents) 가격 + [Modal/Daytona/Runloop 인프라 가격](https://northflank.com/blog/daytona-vs-modal) + [1인 SaaS 비용 raw](raw/articles/2026-05-01-1-person-saas-cost-deep.md) 종합 — 위키 [[examples/cost-simulator/index.html|비용 시뮬레이터]] 위젯의 수식 baseline.

## 한 줄 요약

Managed Agents의 **세션-시간 단가($0.08)** 와 Self-host의 **고정 인프라비** 사이의 손익분기점은 대략 **월 ~$80-200 인프라비 수준의 트래픽**에서 갈린다 — 이 시점은 1인 SaaS의 **median MRR $500** 와 가까워서 의사결정의 결정적 변수가 됨.

## 모델 정의

### 변수

```
T  = 일 평균 트래픽 (req/일)
S  = req당 평균 세션 활성 시간 (분)
M  = 모델별 토큰 단가 (input + output, $/1M)
I  = req당 평균 input 토큰 (k)
O  = req당 평균 output 토큰 (k, ~5x Input 권장)
F  = self-host 고정 인프라비 ($/월)
```

### Managed Agents 월 비용

```
Token_cost  = T × 30 × (I × M_in + O × M_out) / 1000
Session_cost = T × 30 × (S/60) × $0.08
Total_M     = Token_cost + Session_cost
```

### Self-host 월 비용

```
Token_cost = (동일 — 토큰은 둘 다 같음)
Infra_cost = F  (고정, sandbox provider + DB + host 등)
Total_S    = Token_cost + Infra_cost
```

### 변곡점

```
Session_cost = Infra_cost
T × 30 × (S/60) × 0.08 = F
T × S = F × 60 / (30 × 0.08) = 25 × F
```

→ **T × S = 25 × F** (분·일·req의 곱이 인프라비의 25배가 되는 지점)

## 수치 예시

### 시나리오 A — Self-host F = $80/월 (Modal Starter + Vercel + Supabase)

```
T × S = 25 × 80 = 2,000
```

| 트래픽 (T) | 세션 시간 (S) | T×S | 변곡점? |
|----------|-------------|-----|--------|
| 100 req/일 | 5분 | 500 | Managed 유리 (T×S < 2000) |
| 100 req/일 | 20분 | 2,000 | **변곡점** |
| 200 req/일 | 10분 | 2,000 | **변곡점** |
| 500 req/일 | 5분 | 2,500 | Self-host 유리 |
| 1,000 req/일 | 5분 | 5,000 | Self-host 명확 우위 |

### 시나리오 B — Self-host F = $200/월 (Modal Team / Daytona 자체 호스팅 일부 운영비)

```
T × S = 25 × 200 = 5,000
```

| 트래픽 (T) | 세션 시간 (S) | T×S | 변곡점? |
|----------|-------------|-----|--------|
| 100 req/일 | 5분 | 500 | Managed 강력 우위 |
| 500 req/일 | 10분 | 5,000 | **변곡점** |
| 1,000 req/일 | 10분 | 10,000 | Self-host 우위 |

### 시나리오 C — Self-host F = $500/월 (Team 인프라 + 더 큰 DB)

```
T × S = 12,500
```

→ 매우 트래픽 많은 단계까지 Managed 가성비 유지.

## 단순 의사결정 룰

1. **MVP 단계 (~100 req/일, 세션 5~30분)**: 거의 항상 **Managed**. 변곡점 한참 미달 + 시간 가치 높음.
2. **초기 사용자 (100~500 req/일)**: 변곡점 **근처**. 세션 시간 길수록 Self-host 유리. 평가 1회 권장.
3. **운영 (500+ req/일)**: 거의 **Self-host**. 단 lock-in·운영 부담 비교 후.
4. **Long-lived 워크플로 (세션 30분+)**: T 작아도 **Self-host** 빠르게 유리.
5. **on-prem·규제**: 처음부터 **Self-host** (선택지 없음).

## 추가 고려 (단순 비용 외)

| 축 | Managed | Self-host |
|---|---------|-----------|
| **시간 가치** (1인 시간) | 높게 산다 (며칠 단위 출시) | 인프라 운영 시간 본인 부담 |
| **lock-in 비용** | Claude 전용 | 모델 무관 |
| **outage 영향** | Anthropic의 outage = 본인 outage | 본인 인프라 outage |
| **persistent memory** (2026-04-23 추가) | 디폴트 제공 | LangMem 등 직접 통합 |
| **observability** | Console 통합 | LangSmith / Langfuse 직접 |
| **scale 팀 변화** | 가격 그대로 | 데브옵스 인력 필요해짐 |

## widget 입력 → 결과 매핑

비용 시뮬레이터 widget이 사용자에게 보여줄 결과:

```
INPUT (슬라이더)              OUTPUT (실시간)
─────────────                 ─────────────
T: 트래픽 (10~10000)           Managed 월 비용
S: 세션 시간 (1~60분)           Self-host 월 비용 (F=$80, $200, $500 시나리오)
모델: Haiku/Sonnet/Opus         차이 ($)
I: input 토큰/req (1~50k)       어느 쪽이 유리한지 라벨
O: output 토큰/req (1~50k)      변곡점까지 남은 트래픽
F: self-host 인프라비           Median MRR $500과 비교 (수익 대비 AI 비용 %)
```

## 가정·한계

- 모델 토큰 비용은 양쪽 같음으로 단순화 (실제로는 prompt caching 적용 시 90% 절감 가능)
- batch API 50% 할인은 미반영 (실시간 워크플로 가정)
- self-host에서 인프라비 $F는 평균 — 트래픽 폭증 시 elastic 스케일 비용은 별도
- Managed Agents의 outcome-driven mode 추가 비용은 미반영 (research preview)

## 위키 매핑

- 위 모델 수식이 [[examples/cost-simulator/index.html|비용 시뮬레이터 widget]]의 핵심 로직
- 보강: [[patterns/ai-cost-management]] — 변곡점 표 추가
- 보강: [[comparisons/managed-vs-deep-agents]] — 비용 변곡점 표를 본 raw 기반으로 정밀화 후보

confidence: medium (수식은 확실, 단 실제 시장 가격은 변동 — 6개월마다 갱신)
