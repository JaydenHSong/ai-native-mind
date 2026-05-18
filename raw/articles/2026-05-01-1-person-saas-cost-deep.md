---
source_url: "https://benchlm.ai/blog/posts/claude-api-pricing"
title: "1인 SaaS 비용 정밀 — 모델 가격, 사례 MRR, 인프라"
publisher: "여러 출처 종합"
ingested: 2026-05-01
related_urls:
  - "https://platform.claude.com/docs/en/about-claude/pricing"
  - "https://www.finout.io/blog/anthropic-api-pricing"
  - "https://saasranger.com/blog/micro-saas-revenue-reality-what-1000-founders-actually-earn/"
  - "https://www.thesuccessfulprojects.com/how-two-indie-hackers-built-a-successful-micro-saas-senja-io-1m-arr/"
  - "https://www.indiehackers.com/post/tech/learning-to-code-and-building-a-28k-mo-portfolio-of-saas-products-OA5p18fXtvHGxP9xTAwG"
---

# 1인 SaaS 비용 정밀 — 2026-05 시점

> 출처 종합: [Claude API Pricing 2026 (BenchLM)](https://benchlm.ai/blog/posts/claude-api-pricing) · [공식 docs](https://platform.claude.com/docs/en/about-claude/pricing) · [Anthropic API Pricing 2026 (Finout)](https://www.finout.io/blog/anthropic-api-pricing) · [Micro-SaaS Revenue Reality (SaaSRanger, 1000+ 창업자)](https://saasranger.com/blog/micro-saas-revenue-reality-what-1000-founders-actually-earn/) · [Senja.io case study](https://www.thesuccessfulprojects.com/how-two-indie-hackers-built-a-successful-micro-saas-senja-io-1m-arr/)

## 한 줄 요약

1인 개발자가 2026-05 시점에 production-ready agent를 띄울 때 실제로 마주치는 **모델 가격 + 사례 MRR + 인프라 비용**의 정밀 데이터. **median micro-SaaS는 $500/월 MRR**, **median 시간 to $1K MRR은 12~18개월**. 모델 비용은 작아도 **Managed vs Self-host 변곡점**이 1인 의사결정의 큰 변수.

## Claude API 가격 (2026-05)

| 모델 | Input ($/1M) | Output ($/1M) | 비고 |
|------|-------------|--------------|------|
| **Haiku 4.5** | $1 | $5 | 5x 비율, 가장 저렴 |
| **Sonnet 4.6** | $3 | $15 | 균형, 가장 흔히 사용 |
| **Opus 4.7 / 4.6** | $5 | $25 | 가장 똑똑, advisor에 적합 |
| **Opus 4.6 fast mode** | $30 | $150 | 6x 프리미엄, 지연 민감 |

### 절감 옵션

- **Batch API**: input·output 모두 **50% 할인**, 24시간 내 비동기 처리
- **Prompt caching**: 캐시된 input **-90%**
- → 위키 [[patterns/prompt-caching]]·[[patterns/ai-cost-management]] 참조

### Output:Input 비율은 일관되게 **5x**

→ 응답이 길수록 비용 폭증. 1인 개발자에게 중요한 패턴: **Output 길이를 schema로 강제** (Zod max length 등).

## Managed Agents 추가 비용 ([[tools/managed-agents]])

- **세션 활성 시간당 $0.08**
- 24시간 풀 활성 시 = $1.92/일
- 평균 세션 30분, 일 100세션 = $4/일 = ~$120/월
- **Long-lived 세션 누적이 변곡점**

## Self-host 인프라 비용 (sandbox provider 2026)

[Modal vs Daytona 비교 (Northflank)](https://northflank.com/blog/daytona-vs-modal) · [AI Code Sandbox Benchmark (Superagent)](https://www.superagent.sh/blog/ai-code-sandbox-benchmark-2026)

### Modal

- per-second billing (실 컴퓨팅만)
- **Starter**: $30/월 무료 크레딧, 100 containers, 10 GPU 동시
- **Team**: $250/월 + $100 크레딧, 1000 containers
- ⚠️ **sandbox는 non-preemptible 필요 → 3x 프리미엄**
- gVisor 위에서 동작, sub-second startup
- 셀프 호스팅 불가 (Modal 자체 인프라만)

### Daytona

- usage-based, **upfront 비용 0**
- **스타트업 프로그램**: $50k 무료 크레딧
- **셀프 호스팅 OK** — 데이터 leverage 권리·보안 자유
- 워밍 풀에서 sub-90ms 샌드박스 생성

### Runloop

- **무료 플랜 + 유료 두 단계**
- "Devbox" — VM 기반 샌드박스
- 코딩 에이전트·eval 워크플로 타깃
- 템플릿·스냅샷으로 반복 가능 작업

## Self-host 1인 minimal 월 비용 추정

| 항목 | 비용 (대략) |
|------|------------|
| Sandbox provider (Modal Starter / Daytona startup credit) | $30~100/월 |
| Vercel/Cloudflare host (frontend + edge) | $0~20/월 |
| DB (Supabase free → Pro $25) | $0~25/월 |
| Domain / CDN | $1~10/월 |
| 모델 토큰 (Sonnet 위주, 1만 req/월 가정) | $30~150/월 |
| **합계 (MVP 단계)** | **$60~300/월** |

→ 위키 [[patterns/solo-product-strategy]]의 $300~$500/월과 일관 (다만 거기엔 design·CS 도구 포함).

## 사례 MRR (1000+ 창업자 분석 + 알려진 케이스)

### Median (현실)

- **$500/월** — 1000+ micro-SaaS 분석의 중앙값
- **12~18개월** — $1K MRR까지의 median 시간
- **70%+** profit margin (bootstrap 한정)

### 성공 케이스

| 사례 | 시점 | MRR/ARR | 핵심 |
|------|------|---------|------|
| **Senja.io** | 5개월 | 첫 유료 고객 | 빠른 출시·검증 |
| Senja.io | ~17개월 | $5K MRR | "ramen profitability" |
| Senja.io | ~28개월 | $30K MRR | growth 가속 |
| Senja.io | 약 36개월 | **$1M ARR** | indie hacker 톱 |
| **Samuel Rondot** (포트폴리오) | - | $28K/월 | 여러 SaaS 묶음 |
| **Pascal (Noosa Labs)** | - | $120K MRR | 인수·성장 모델 |
| **Churnkey** | - | $30K MRR + 18% churn 절감 | B2B 니치 |
| **Baremetrics** | side project → | $1M+ ARR | 메트릭 SaaS |

### 성공 패턴 (1000+ 분석)

- **18% 만 성공** — SEO·cold email·Reddit·PH를 동시에 시도하지 **않음**
- **하나 채널을 90일 일관 → 검증 후 확장**
- **Build-in-public** (Indie Hackers, Twitter/X, Reddit)이 $1K MRR 도달 시간 단축

## 비용·MRR 변곡점 시각화 (위키 widget 후보)

이 raw가 위키의 [[examples/cost-simulator/index.html|비용 시뮬레이터]] 위젯의 입력 데이터 — 슬라이더로 트래픽·세션 시간·모델·architectural 선택을 만지면 **Managed Agents vs Self-host의 손익분기**를 실시간 시각화. Median MRR $500 라인을 넘는 비용 임계점을 빨간색으로 강조.

## 위키 매핑

- 새 페이지 후보: `patterns/agent-mvp-stack-2026` — 5대 영역·단계별 budget·의사결정 트리
- 새 페이지 후보: `comparisons/agent-platforms-for-solo-dev` — 1인 관점 4개 플랫폼 비교
- 새 자산: `examples/cost-simulator/index.html` — 인터랙티브 위젯
- 보강: [[patterns/ai-cost-management]] — 2026-05 가격 표 갱신 (Haiku 4.5, Sonnet 4.6, Opus 4.7)
- 보강: [[patterns/solo-product-strategy]] — Senja·Rondot·Noosa 사례 추가 + median 데이터

confidence: high (공식 + 다수 사례 + 1000+ 창업자 데이터)
