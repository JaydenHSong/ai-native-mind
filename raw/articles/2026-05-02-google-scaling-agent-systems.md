---
source_url: "https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/"
paper_url: "https://arxiv.org/abs/2512.08296"
title: "Towards a Science of Scaling Agent Systems: When and Why Agent Systems Work"
authors: "Yubin Kim (MIT Media Lab intern), Xin Liu (Google Research), and co-authors"
published: 2026-01-28
ingested: 2026-05-02
---

# Towards a Science of Scaling Agent Systems

> 출처: [Google Research Blog (2026-01-28)](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/) · [arXiv 2512.08296](https://arxiv.org/abs/2512.08296)

## 한 줄 요약

180개 에이전트 구성을 통제 실험으로 비교한 첫 정량 스케일링 연구. **"에이전트가 많을수록 좋다"는 통념을 반박**하고, 태스크 속성(병렬 가능성·도구 밀도·순차 의존성)에 코디네이션 구조를 맞춰야 한다는 정렬 원칙(alignment principle)을 제시. 87% 미관찰 태스크에서 최적 아키텍처를 예측하는 모델을 동반.

## 실험 설계

- **5 canonical 아키텍처**: Single-Agent (SAS), Independent (병렬·무통신), Centralized (오케스트레이터 hub-and-spoke), Decentralized (peer-to-peer mesh), Hybrid (계층 + peer)
- **3 모델 패밀리**: OpenAI GPT, Google Gemini, Anthropic Claude
- **4 벤치마크**: Finance-Agent (재무 추론), BrowseComp-Plus (웹 네비게이션), PlanCraft (순차 계획), Workbench (도구 사용)
- **180 컨피그**: 통제된 토큰 예산·도구 셋

## "Agentic" 태스크의 정의 3 요소

1. **Sustained multi-step interactions** with an external environment
2. **Iterative information gathering** under partial observability
3. **Adaptive strategy refinement** from environmental feedback

→ 정적 벤치마크가 잡지 못하는 축. eval 설계의 출발점으로 그대로 인용 가치.

## 핵심 결과 — 두 방향의 비대칭

### Parallelizable tasks (Finance-Agent)

- **Centralized 아키텍처가 단일 에이전트 대비 +80.9%** 성능 개선
- 분해 가능한 서브태스크를 병렬로 처리 → 명확한 이득

### Sequential tasks (PlanCraft)

- **모든 멀티 에이전트 변형이 -39 ~ -70% 성능 저하**
- 통신 오버헤드가 추론 과정을 파편화 → 실 작업에 쓸 인지 예산 부족

### Tool-use bottleneck

- 도구가 16개 이상으로 늘면 코디네이션 "세금"이 비례 이상으로 증가
- 멀티 에이전트가 도구 밀도 높은 태스크에서 자해 (인용: "tool-coordination trade-off")

## 신뢰성 — 아키텍처가 곧 안전 기능

- **Independent (무통신 병렬)**: 오류 증폭 **17.2x** — 검증 메커니즘 없이 캐스케이드
- **Centralized (오케스트레이터)**: 오류 증폭 **4.4x** — 오케스트레이터가 validation bottleneck 역할
- 결론: 신뢰성을 원하면 의도적으로 검증 단일점을 둬라

## 예측 모델

- 도구 수·decomposability 같은 측정 가능한 태스크 속성으로 R² = 0.513의 회귀
- **87% 미관찰 태스크에서 최적 코디네이션 전략 예측 성공**
- "스웜 vs 단일 강력 모델"을 직관이 아니라 데이터로 결정 가능

## 짧은 인용 (단일, 13단어)

> "smarter models don't replace the need for multi-agent systems, they accelerate it."

## 시사점 (이 위키 관점)

- **`concepts/ai-orchestration`**: 6대 패턴(체이닝/병렬/오케스트레이터/평가-옵티마이저/...) 위에 **"태스크 속성에 따른 아키텍처 선택"** 정량 기준으로 보강. 특히 PlanCraft -39~-70%는 "순차 작업에 멀티에이전트 X"의 강한 증거.
- **`comparisons/agent-frameworks`**: LangGraph/CrewAI/Agents SDK 비교에 **"기본 아키텍처(Independent? Centralized?)와 그 디폴트가 자주 마주칠 태스크에 맞는가"** 축 추가 후보.
- **`concepts/harness-engineering`**: 17.2x → 4.4x 오류 증폭 비교는 "오케스트레이터 = validation bottleneck = 안전 컴포넌트"라는 하네스 디자인 결정의 정량 근거.
- **`patterns/orchestration-patterns-practice`** (커리큘럼 5): "병렬 vs 순차" 케이스 스터디로 그대로 인용 가능.

## 같은 페이지의 관련 출처 (Google Research blog 인용)

- [More Agents Is All You Need — arXiv 2402.05120](https://arxiv.org/abs/2402.05120) (반박 대상)
- [Multi-agent collaboration — arXiv 2406.07155](https://arxiv.org/abs/2406.07155)
- [Finance-Agent benchmark](https://www.vals.ai/benchmarks/finance_agent)
- [BrowseComp-Plus — arXiv 2508.06600](https://arxiv.org/pdf/2508.06600)
- [PlanCraft — arXiv 2412.21033](https://arxiv.org/abs/2412.21033)
- [Workbench — arXiv 2405.00823](https://arxiv.org/abs/2405.00823)
- [Project Overview — MIT Media Lab](https://www.media.mit.edu/projects/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/overview/)
- [Google Explores Scaling Principles — InfoQ (2026-02)](https://www.infoq.com/news/2026/02/google-agent-scaling-principles/)

## 위키 매핑 (수집 시점 메모)

- `concepts/ai-orchestration` — alignment principle + sequential penalty 정량 수치 추가
- `concepts/harness-engineering` — 오류 증폭 4.4x vs 17.2x로 오케스트레이터 = 안전 컴포넌트 보강
- `comparisons/agent-frameworks` — 디폴트 아키텍처 축 후보 (다음 회차)
- `patterns/orchestration-patterns-practice` — 커리큘럼 케이스 스터디 후보 (다음 회차)

confidence: high (Google Research peer-reviewed paper + 통제 실험)
