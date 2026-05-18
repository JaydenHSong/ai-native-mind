---
title: "AI Memory Systems"
category: concepts
tags: [memory, agent, long-term, short-term, context, multi-party, group-memory, benchmark]
created: 2026-04-09
updated: 2026-05-15
sources:
  - "raw/notes/2026-04-09-ai-memory-systems.md"
  - "raw/articles/2026-05-03-zenbrain-7-layer-memory.md"
  - "raw/articles/2026-05-15-groupmembench-multi-party-memory.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/vector-db-embeddings]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
status: active
confidence: high
---

# AI Memory Systems

## 쉽게 읽기

**비유**: 사람도 **작업 메모**(지금 책상 위)와 **일기장**(오래 보관)을 나눈다. AI **단기 메모리**는 지금 대화 창 안, **장기 메모리**는 DB·파일·벡터 DB처럼 창 밖 저장소에 둔다.

| 용어 | 풀이 |
|------|------|
| **컨텍스트 윈도우** | 한 번에 모델이 볼 수 있는 **최대 길이** |
| **Semantic memory** | “의미가 비슷한 것끼리” 찾아 오는 **장기 기억** 스타일 |
| **RAG** | 필요할 때 문서를 **검색해서** 단기 메모에 붙이는 방식 |

## 한줄 정의

LLM의 컨텍스트 윈도우를 넘어선 **지속적 기억** 시스템. 2026년 AI 에이전트의 핵심 아키텍처 컴포넌트.

## 핵심 내용

### Short-term Memory (단기 메모리)

인간의 작업 기억(working memory)과 유사. **모델의 컨텍스트 윈도우 내**에 저장.

**포함**:
- 최근 대화 히스토리
- 시스템 프롬프트
- 도구 출력
- 추론 단계

**관리**: 토큰 제한으로 FIFO 큐 사용 — 새 정보가 들어오면 오래된 정보 제거.

### Long-term Memory (장기 메모리)

세션 종료 후에도 지속되는 **영구 저장소**. 여러 세션에 걸쳐 누적되는 지식.

## 장기 메모리의 3가지 모달리티

### 1. Episodic (일화적)
**특정 사건과 경험**의 기억
- "2026-04-09에 사용자가 X를 요청함"
- 시간 정보 포함
- **우리 위키의 `wiki/log.md`가 이 역할**

### 2. Semantic (의미적)
**사실과 개념**의 기억
- "사용자 이름은 Jayden"
- "프로젝트는 Next.js로 작성됨"
- 시간 무관 정보
- **우리 위키의 `wiki/concepts/`가 이 역할**

### 3. Procedural (절차적)
**방법과 스킬**의 기억
- "이 프로젝트 빌드는 pnpm build"
- "위키 Ingest 10단계 체크리스트"
- **우리 위키의 `CLAUDE.md`가 이 역할**

## 메모리 전환 (Short → Long)

단기 → 장기 압축 프로세스:
- "**인지적 압축**" (cognitive compression)
- 대화 소음에서 중요 신호 분리
- LLM이 "이게 기억할 가치가 있는가" 판단

## 주요 프레임워크

| 프레임워크 | 특징 | 적합 |
|----------|------|------|
| **Mem0** | 오픈소스, 자동 추출/저장 | 범용 |
| **Zep** | 지식 그래프 통합 | 관계 추론 |
| **LangChain Memory** | 다양한 클래스 | LangChain 생태계 |
| **AWS AgentCore** | 엔터프라이즈 | AWS 통합 |
| **Redis for Memory** | 빠른 읽기/쓰기 | 고성능 |

## 2026 트렌드

### 계층적 시스템
```
L1: 대화 컨텍스트 (초단기)
L2: 세션 요약 (단기)
L3: 벡터 DB (중기)
L4: 지식 그래프 (장기)
```

### 멀티 에이전트 공유 메모리
여러 에이전트가 동일한 메모리 접근. 팀 협업 시뮬레이션에 필수.

### 감정적/맥락적 인식
단순 사실 저장을 넘어 의도와 감정 추적.

## [[concepts/context-engineering|Context Engineering]]과의 관계

Context Engineering 5요소 중 **Memory/State** 계층. 우리 위키가 이미 완벽한 구현:

| 요소 | 구현 |
|------|------|
| **Semantic Memory** | `wiki/concepts/`, `wiki/patterns/` |
| **Episodic Memory** | `wiki/log.md` |
| **Procedural Memory** | `CLAUDE.md` |
| **Short-term** | Claude Code 세션 컨텍스트 |

## 구현 고려사항

- **망각 전략**: 언제 뭘 지울 것인가
- **검색 전략**: 필요한 기억만 로드
- **프라이버시**: PII 처리
- **비용**: 벡터 DB, 저장소 비용

## 2026-05-03 보강 — ZenBrain 7-계층 + Predictive Memory (arXiv 2604.23878)

[ZenBrain](https://arxiv.org/abs/2604.23878) (2026-04-26 arXiv preprint)은 **장시간 자율 운영**을 신경과학에서 정의된 메모리 시스템으로 풀자고 제안: **7 계층 + 9 알고리즘 + 6 PMA(Predictive Memory Architecture) 컴포넌트**. 위 3 모달리티(Episodic/Semantic/Procedural) 분류에 두 축이 추가된다.

| 추가 계층 | 역할 | 기존 위키와의 관계 |
|-----------|------|-------------------|
| **Sensory** | 도구 응답 raw stream의 짧은 윈도우 | 단기 메모리의 sub-layer |
| **Working** | 현재 turn의 활성 변수 | 단기 메모리의 핵심 |
| **Autobiographical / Self** | 페르소나·약속·장기 목표 | 신규 — "성격 표류" 방지 |
| **Predictive (PMA)** | 다음 입력의 forward model | 신규 — retrieval 호출 자체를 줄임 |

핵심 통찰 3가지:

1. **Memory ≠ store**. 인코딩·강화·망각·예측이 **같이 가는 동작 시스템**. 단순 vector DB는 부분 솔루션.
2. **Forgetting is a feature**. 의도적 망각이 1급 시민 — 보존만 하면 retrieval이 노이즈가 된다. [[concepts/context-rot-hallucination|Context Rot]]이 결국 강화/망각 정책 부재 문제다.
3. **Predictive Memory**. 다음 입력을 모델링해 두면 들어온 입력은 *예측 오차*로만 처리 — 토큰 효율·hallucination 모두 개선.

함의 (1인 개발자):

- 7계층 전부를 구현할 필요는 없다. **세 질문**이 디자인 체크리스트다 — (1) **forgetting 정책**이 명시되어 있는가? (2) **self/persona**가 영구 저장되는가? (3) **예측 모델로 retrieval 호출을 줄이는가**?
- [[patterns/preventing-context-rot]]의 3계층(working·episodic·long-term)은 ZenBrain의 부분 집합이며, **Self·Predictive 두 계층 추가**가 다음 단계의 자연스러운 확장이다.
- 같이 읽기: *Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers* ([arXiv 2603.07670](https://arxiv.org/html/2603.07670v1), 2026-03) — 산업 사례·평가 메트릭 정리에는 이쪽이 더 유용.

## 2026-05-15 보강 — GroupMemBench: Multi-Party Memory 측정 (arXiv 2605.14498)

[Yang et al.](https://arxiv.org/abs/2605.14498) (2026-05)는 기존 메모리 benchmark가 **dyadic(1:1)** 가정에 갇혀 있어 실제 deployment(Slack 채널·Discord·그룹챗·회의록)의 세 속성이 측정되지 않는다고 지적한다 — (i) **group dynamics**, (ii) **speaker-grounded belief tracking**, (iii) **audience-adapted language** (Theory-of-Mind).

| 발견 | 정량 |
|---|---|
| 최강 메모리 시스템 average accuracy | **46.0%** |
| Knowledge update | **27.1%** |
| Term ambiguity | **37.7%** |
| 단순 **BM25 baseline** | **대부분의 agent memory system 매치 또는 능가** |

→ 위 "[주요 프레임워크](#주요-프레임워크)" 표(Mem0 / Zep / LangChain Memory / AWS AgentCore / Redis)에 *dyadic gap*이라는 새로운 평가축이 붙는다 — multi-party 시나리오에서는 자동 메모리 시스템의 ingest 단계가 group의 구조·어휘 신호를 *지워서* 단순 키워드 검색에 뒤진다.

**6 question category** (adversarial query, asker에 binding): multi-hop reasoning · knowledge update · term ambiguity · user-implicit reasoning · temporal reasoning · abstention.

**ZenBrain(2026-05-03 보강)과의 짝**: ZenBrain의 7계층 중 *Autobiographical/Self* layer가 정확히 GroupMemBench의 (ii) speaker-grounded belief tracking — 즉 ZenBrain은 *처방*(architecture)이었고 GroupMemBench는 그 처방이 부재한 시스템들의 *측정*이다.

**1인 개발자 ROI 3개**:

1. 본 위키 자체가 *Episodic(log) / Semantic(concepts) / Procedural(CLAUDE.md)* 분리로 group-grade memory 구조를 *수동* 구현 중. GroupMemBench의 BM25-equivalence 결과는 본 위키의 *자연어 검색*(Obsidian grep)이 자동 메모리 시스템보다 *덜 손해 보지 않을 수 있음*을 시사 — 위키 패턴([[patterns/llm-wiki]]) 정당화의 정량적 근거.
2. 메모리 프레임워크를 도입할 때 *벤더 데모*가 1:1만 보여주면 "그룹/채널에서 어떤가" 한 줄 질문. 미답이면 도입 보류.
3. *Knowledge update 27.1%* 가 가장 약한 항목 — 본 위키가 갱신 빈도 높은 사실(예: "현재 사용하는 도구"는 [[tools/]] 페이지)을 *page-level*로 분리해 둔 구조가 이 약점을 회피한다.

**한계**: 6명 저자 중 Yang 외 5명, "strongest memory system"의 구체 이름, 6 category별 score breakdown 모두 본문 정독 후 채우기. 합성 데이터 기반이라 실 deployment의 noise 분포와 다를 수 있음.

→ 2x3 좌표계의 (tooling, 측정) 칸에 WildClawBench(2026-05-14, 60 production-like task)와 *직교 도메인*(memory) 측정으로 추가됨. 같은 칸에 점이 둘 — 측정 표면 다양화의 신호.

## 참고 소스

- [AI Memory Systems 리서치](raw/notes/2026-04-09-ai-memory-systems.md)
- [State of AI Agent Memory 2026 (Mem0)](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [AI Agent Memory Architecture (Redis)](https://redis.io/blog/ai-agent-memory-stateful-systems/)
- [ZenBrain 7-Layer Memory Architecture (arXiv 2604.23878, 2026-04)](https://arxiv.org/abs/2604.23878)
- [Memory for Autonomous LLM Agents — Survey (arXiv 2603.07670, 2026-03)](https://arxiv.org/html/2603.07670v1)
- [GroupMemBench: Multi-Party Memory (arXiv 2605.14498, 2026-05)](https://arxiv.org/abs/2605.14498)
