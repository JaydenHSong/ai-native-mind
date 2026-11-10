---
title: "Plan-Then-Verify — 실행 전에 검증부터 하는 LLM 에이전트 계획 패턴 (MDPI, Core-60)"
source_url: "https://www.mdpi.com/2076-3417/16/21/10828"
source_type: "paper"
authors: ["Maria Curie-Skłodowska University"]
published: 2026-11-01
fetched: 2026-11-01
tags: [plan-then-verify, agent-planning, verifier, benchmark, core-60, safe-abstention]
status: raw
---

# Plan-Then-Verify — 실행 전에 검증부터 하는 LLM 에이전트 계획 패턴 (MDPI, Core-60)

> MDPI Applied Sciences 11-01 게재 논문이 Plan-Then-Verify(PTV)를 제안한다. 플래너가 구조화된 태스크 그래프를 만들고, 결정적 검증기가 문서화된 지식베이스에 비춰 함수·산출물·순서 제약을 실행 전에 검사하며, 한 번의 제한적 수리 패스만 허용한다. 지원 불가 워크플로는 능력을 지어내지 않고 안전하게 기권한다. (MDPI 논문 초록·본문 기반)

## 내용

- **파이프라인**: 플래너 → 결정적 검증기(함수·아티팩트·순서 제약 검사) → 1회 제한 수리 패스 → 검증기 이슈 집합이 비면 실행, 남으면 안전 기권(safe abstention).
- **벤치마크 Core-60**: 지원·다단계·수리 민감·지원 불가 요청을 아우르는 60개 태스크 공개 벤치마크. 벤치마크·지식베이스 스냅샷·구현·분석 자료·논문 소스가 GitLab에 공개됐다.
- **결과**: Gemma·Devstral·DeepSeek 등 여러 모델군에서 Plan-and-Execute 대비 정적 적합성(static conformance) 점수가 크게 개선됐고, 토큰 비용은 Plan-and-Execute 수준에 근접했다. GPT-OSS·GLM은 테스트 서빙 스택에서 구조화 출력이 무너져 효과가 거의 없었다.
- **한계(논문 자체 명시)**: 주 벤치마크는 정적이며 실제 도구를 호출하지 않는다. 보조 샌드박스 리플레이만 저장된 계획을 모의 도구로 실행했다. 보고된 점수는 실제 실행 성공률이 아니라 지원 성공 + 올바른 기권을 합친 적합성 점수다.

## 맥락

- [[patterns/agent-planning-to-implementation]] — 기획·스펙·태스크→코드까지 에이전트 파이프라인과 HITL 게이트
- [[patterns/agent-safety-runtime]] — 실행시점 에이전트 보안 런타임, NVIDIA OpenShell/Sentry (2026-09-28 위키)
- [[concepts/llm-evaluation]] — LLM 출력을 체계적으로 테스트하는 Evals 방법론
