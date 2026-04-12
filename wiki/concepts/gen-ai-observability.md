---
title: "GenAI·에이전트 관측 가능성 (OpenTelemetry)"
category: concepts
tags: [observability, opentelemetry, genai, agents, tracing, semconv]
created: 2026-04-11
updated: 2026-04-12
sources:
  - "raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md"
related:
  - "[[concepts/llm-evaluation]]"
  - "[[patterns/agent-server-harness]]"
  - "[[patterns/owasp-llm-typescript-mitigations]]"
  - "[[concepts/harness-engineering]]"
  - "[[concepts/ai-orchestration]]"
  - "[[concepts/mcp]]"
status: active
confidence: high
---

# GenAI·에이전트 관측 가능성 (OpenTelemetry)

## 쉽게 읽기

**비유**: 앱이 길게 돌 때 **블랙박스**처럼 “어디서 멈췄는지, 누가 뭘 불렀는지”를 남기는 것이 관측이다. **OpenTelemetry(OTel)** 는 여러 도구가 서로 다른 말을 쓰지 않게 **이름표 규칙**을 맞추려는 공개 표준이다. **GenAI semantic conventions**는 그중에서도 “LLM 호출·도구 호출” 같은 AI 전용 이름표다.

| 용어 | 풀이 |
|------|------|
| **트레이스** | 한 요청이 시스템을 지나며 남긴 **발자국 묶음** |
| **스팬(span)** | 발자국 한 칸(예: 모델 호출 한 번) |
| **메트릭·로그** | 숫자(건수·시간·비용)와 글자 로그 |

## 한줄 정의

생성형 AI·에이전트 앱에서 나오는 **트레이스·메트릭·로그**를 **OpenTelemetry(OTel)** 의 **GenAI semantic conventions** 쪽으로 맞춰, 벤더·프레임워크에 덜 묶이게 관측하는 접근.

## 왜 “그냥 로그”가 아닌가

- 에이전트는 **비결정적**이라, 관측 데이터가 장애 대응을 넘어 **품질·eval 피드백 루프**로 쓰이기도 한다 (OTel 블로그 논지).
- 프레임워크마다 다른 포맷이면, A/B 테스트·비용·지연 분석이 **통합 불가**에 가깝다.

## OpenTelemetry가 다루는 층

| 층 | 설명 |
|----|------|
| **GenAI semantic conventions** | 모델 호출, 도구 사용, 벡터 DB 등 **속성·스팬 이름**을 표준화. [공식 스펙 문서](https://opentelemetry.io/docs/specs/semconv/gen-ai/) |
| **에이전트 애플리케이션 컨벤션** | 개별 에이전트 엔티티 관측. 초안·SIG 논의 진행 중. |
| **에이전트 프레임워크 컨벤션** | LangGraph, CrewAI 등 **공통** 표면 + 벤더 확장. |

스펙은 **진화 중**이므로, 배포 시점의 버전·실험 플래그(예: stability opt-in)를 릴리즈 노트와 함께 고정하는 것이 하네스의 일부다.

## 계측 두 갈래 (요약)

1. **프레임워크 내장 instrumentation** — 도입 쉬움, OTel 버전·컨벤션 따라가기 책임은 프레임워크 측.  
2. **외부 OTel instrumentation 패키지** — 유연, 다만 패키지 조합·파편화 리스크.

어느 쪽이든 **에이전트 프레임워크 시맨틱 컨벤션에 맞출 것**이 상호운용의 전제로 강조된다 (OTel 블로그).

## 서버 하네스와 연결

- [[patterns/agent-server-harness]] 의 “관측: `run_id`, 단계 로그”를 **표준 스팬**으로 올리면, 이후 APM이 GenAI 컨벤션을 소비할 때 **동일 대시보드**로 모델·도구·에이전트 단계를 잇기 쉽다.
- [[concepts/harness-engineering]] 의 **Sensors**를 “린트만”이 아니라 **분산 트레이스**까지 확장하는 그림.
- [[concepts/llm-evaluation]] 과 짝: 트레이스에 붙은 `trace_id`·세션을 eval 데이터셋과 join하면 회귀 분석이 쉬워진다.

## 실무 체크리스트 (최소)

- [ ] 모델 호출 스팬에 **요청 메타**(모델 id, 토큰 요약/카운트 정책) 일관 적용  
- [ ] tool/MCP 호출을 **별도 child span**으로 분리  
- [ ] PII는 스팬 속성에 **원문 금지**·마스킹 정책  
- [ ] OTel SDK·semconv **버전 핀** 및 변경 로그 확인  

## 관련 개념

- [[concepts/llm-evaluation]] — 출력 품질 측정; 관측과 결합 시 강함
- [[patterns/agent-server-harness]] — 백엔드 배치와 관측 훅
- [[tools/vercel-workflow]] — 플랫폼 측 워크플로 관측 UI와의 관계 검토
- [[concepts/mcp]] — 도구 경로 관측 시 같이 설계

## Chapter Clear 가이드

- **소속 챕터**: Chapter 6 (운영 보스전)
- **퀘스트**: 모델 호출, 도구 호출, 에러를 각각 하나씩 span으로 추적하는 기준을 정한다.
- **클리어 조건**: trace_id 기준으로 "문제 요청 한 건"을 끝까지 따라갈 수 있다.
- **보상(산출물)**: 관측 지표 카드 1장
- **다음 퀘스트**: [[patterns/git-ai-workflow]] -> [[patterns/ai-code-review]]

## 참고 소스

- [리서치 노트](raw/notes/2026-04-11-vercel-workflow-otel-agents-research.md)
- [OpenTelemetry — Gen AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [OpenTelemetry Blog — AI Agent Observability](https://opentelemetry.io/blog/2025/ai-agent-observability/)
- [OpenTelemetry community — Gen AI project](https://github.com/open-telemetry/community/blob/main/projects/gen-ai.md)
