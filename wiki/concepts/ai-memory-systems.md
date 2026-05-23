---
title: "AI Memory Systems"
category: concepts
tags: [memory, agent, long-term, short-term, context, multi-party, group-memory, benchmark, probabilistic-memory, partial-observability, forgetting, consolidation, safety-memory, taxonomy, virtual-memory, token-budget, scalability, usable-scale-boundary]
created: 2026-04-09
updated: 2026-05-22
sources:
  - "raw/notes/2026-04-09-ai-memory-systems.md"
  - "raw/articles/2026-05-03-zenbrain-7-layer-memory.md"
  - "raw/articles/2026-05-15-groupmembench-multi-party-memory.md"
  - "raw/articles/2026-05-17-belief-memory-partial-observability.md"
  - "raw/articles/2026-05-17-human-inspired-memory-architecture.md"
  - "raw/articles/2026-05-17-mage-shadow-memory-long-horizon-threats.md"
  - "raw/articles/2026-05-19-clawvm-harness-managed-virtual-memory.md"
  - "raw/articles/2026-05-22-scale-conditioned-agent-memory-evaluation.md"
related:
  - "[[concepts/context-engineering]]"
  - "[[concepts/vector-db-embeddings]]"
  - "[[concepts/harness-engineering]]"
  - "[[patterns/llm-wiki]]"
  - "[[comparisons/agent-memory-taxonomy]]"
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

## 빠른 분류 — memory를 한 덩어리로 부르지 않기

최근 위키에 들어온 논문들을 합치면, 이제 memory는 최소 네 질문으로 나뉜다.

| 질문 | 대표 개념 | 주로 보는 페이지 |
|---|---|---|
| 어디에 저장하나? | short-term / episodic / semantic / procedural / layered memory | 이 페이지 본문 |
| 무엇을 얼마나 믿나? | **belief memory** | 이 페이지의 BeliefMem 섹션 |
| 언제 압축·망각·재강화하나? | **lifecycle memory** | 이 페이지의 Human-Inspired Memory 섹션 |
| 무엇을 안 잊어야 위험을 막나? | **safety memory** | [[concepts/agent-supply-chain-security]] 의 MAGE 섹션 |

→ 자세한 비교표는 [[comparisons/agent-memory-taxonomy]] 에 정리했다. 이 페이지는 메모리의 **기본 구조와 memory 내부 변화**를, 비교 페이지는 **역할 분화**를 담당한다.

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

## 2026-05-17 보강 — BeliefMem: Partial Observability에서 memory를 belief state로 (arXiv 2605.05583)

[Liao et al.](https://arxiv.org/abs/2605.05583) (2026-05-07)은 기존 agent memory가 관측 하나마다 **single deterministic conclusion**을 저장하면서 자기 오답을 장기 기억으로 굳혀 버린다고 지적한다. 예: 일시적 장애만 보고 "API X failed"를 메모리에 박아 두면, agent는 그 결론을 전제로 계속 행동하고 그 결론을 강화한다.

### 핵심 전환 — memory를 fact cache가 아니라 belief state로

| 기존 deterministic memory | BeliefMem |
|---|---|
| observation → conclusion 1개 | observation → candidate conclusion 여러 개 |
| uncertainty 폐기 | uncertainty 보존 |
| 나중에 수정 어려움 | 새 증거로 confidence 갱신 |
| self-reinforcing error 위험 | 대안 가설을 계속 가시화 |

구현 핵심은 단순하지만 함의가 크다:

- **candidate conclusions**를 separate entry로 저장
- 각 entry에 **probability** 부여
- 새 관측이 들어올 때 **Noisy-OR** rule로 확률 갱신
- retrieval 시에도 모든 후보와 확률을 함께 surface

→ memory가 "무엇이 사실인가"를 단정하지 않고, "지금 무엇을 얼마나 믿는가"를 표현한다.

### 왜 GroupMemBench 다음에 바로 중요해지는가

2026-05-15의 [[concepts/ai-memory-systems#2026-05-15 보강 — GroupMemBench: Multi-Party Memory 측정 (arXiv 2605.14498)|GroupMemBench]]가 말한 문제는 **group context에서 current memory ingestion이 구조·어휘 신호를 지워 버린다**는 것이었다. BeliefMem은 다른 각도지만 같은 뿌리를 찌른다 — **메모리가 관측의 불확실성을 너무 일찍 압축**한다.

- GroupMemBench = multi-party 상황에서 *무엇이 지워지는가*를 측정
- BeliefMem = partial observability 상황에서 *어떻게 저장해야 덜 지우는가*를 처방

즉 하나는 **measurement**, 다른 하나는 **prescription**이다.

### 벤치마크 결과 (abstract 수준)

- **LoCoMo / ALFWorld** 에서 평가
- 제한된 데이터 조건에서도 **best average performance**
- well-known baseline 대비 **remarkable outperformance**

세부 표는 본문 정독이 필요하지만, 위 숫자보다 더 중요한 메시지는 이쪽이다: **partial observability 환경에서 deterministic memory는 구조적으로 불리하다**.

### ZenBrain과의 짝

ZenBrain(2026-05-03 보강)이 memory를 **7 계층 시스템**으로 확장했다면, BeliefMem은 그 계층 안의 representation rule을 바꾼다.

- ZenBrain: forgetting / self / predictive memory까지 포함한 **architecture**
- BeliefMem: observation을 단일 사실이 아닌 확률적 belief로 두는 **update rule**

→ 앞으로 memory 설계 질문은 적어도 세 갈래가 된다:

1. **어디에 저장하나** (layer)
2. **무엇을 저장하나** (content)
3. **얼마나 믿나** (belief / uncertainty)

### 1인 개발자 ROI 3개

1. 디버깅 로그·운영 메모를 요약할 때 "결론 1개"만 적지 말고, 최소한 **대안 가설 2개와 confidence**를 남기면 cognitive lock-in을 줄일 수 있다.
2. agent memory 프레임워크를 볼 때 "vector DB냐 graph냐"보다 먼저 **uncertainty를 표현하는가**를 물어야 한다.
3. 본 위키의 journal/log에서 후속 검증 전 가설은 단정형 서술보다 "약하게 살아 있음" 같은 confidence 언어를 유지하는 편이 BeliefMem 철학에 맞다.

→ 2x3 좌표계의 **(prescriptive, 학습)** 칸을 채운다. Survey(2026-05-17)가 지형도를 주었다면, BeliefMem은 memory 내부 표현의 방향을 준다.

## 2026-05-17 보강 — Human-Inspired Memory: consolidation·forgetting까지 설계하기 (arXiv 2605.08538)

[Kerestecioglu et al.](https://arxiv.org/abs/2605.08538) (2026-05-08)은 장기 메모리 문제를 "더 많이 저장하자"가 아니라 **어떻게 압축·망각·재강화할까**의 문제로 다시 잡는다. 이 논문이 신선한 이유는 memory를 retrieval DB가 아니라 **운영 파이프라인**으로 취급한다는 점이다.

### 여섯 가지 cognitive mechanism

1. **sleep-phase consolidation**
2. **interference-based forgetting**
3. **engram maturation**
4. **reconsolidation upon retrieval**
5. **entity knowledge graphs**
6. **hybrid multi-cue retrieval**

→ 앞선 2026-05-03의 ZenBrain이 memory를 **계층(layer)** 으로, 2026-05-17의 BeliefMem이 memory를 **belief representation** 으로 봤다면, 이 논문은 memory를 **lifecycle operation** 으로 본다.

### 왜 중요한가 — memory failure를 store 부족이 아니라 관리 실패로 본다

이 논문이 겨냥하는 naive accumulation failure는 네 가지다.

- 중복 기억이 쌓여 retrieval noise 증가
- 오래된 기억과 새 기억의 **interference**
- retrieval 순간에 기억이 다시 정리되지 않아 stale memory 고착
- entity 관계 표현이 약해, 사람·이슈·사건 간 연결이 흐려짐

즉 memory quality는 vector DB 유무보다 **consolidation / forgetting / reconsolidation policy** 유무에 더 좌우될 수 있다.

### 정량 — 줄이면서 유지하기

abstract 기준 결과:

| 벤치마크 | 결과 |
|---|---|
| **VSCode issue-tracking** (13K issues / 120K events) | dedup-based consolidation으로 **97.2% retention precision**, **58% store reduction**, baseline 대비 **+21.8 pp** |
| **LongMemEval** (475 sessions / ~540K unique turns) | **200K-token budget**에서 raw retrieval **71.2%** vs pipeline **70.1%** (95% CI overlap) |
| **LongMemEval S-tier** (50 sessions) | preference recall **+13.3 pp** |

→ 메시지는 단순하다: **큰 저장소 없이도, 잘 정리된 기억이 거의 같은 정확도를 낼 수 있다.**

### ZenBrain · GroupMemBench · BeliefMem과의 관계

| 페이지 | 이 논문이 더하는 것 |
|---|---|
| [[concepts/ai-memory-systems#2026-05-03 보강 — ZenBrain 7-계층 + Predictive Memory (arXiv 2604.23878)|ZenBrain]] | layer 위에 **maintenance policy**를 올림 |
| [[concepts/ai-memory-systems#2026-05-15 보강 — GroupMemBench: Multi-Party Memory 측정 (arXiv 2605.14498)|GroupMemBench]] | memory 측정이 약하다고 말한 뒤, 여기서는 **store-size/accuracy trade-off**를 실제로 제시 |
| [[concepts/ai-memory-systems#2026-05-17 보강 — BeliefMem: Partial Observability에서 memory를 belief state로 (arXiv 2605.05583)|BeliefMem]] | uncertainty 표현 규칙에 더해 **when to rewrite** 문제를 채움 |

→ memory 설계 질문은 이제 최소 네 갈래가 된다:

1. **어디에 저장하나** (layer)
2. **무엇을 저장하나** (content)
3. **얼마나 믿나** (belief)
4. **언제 압축·망각·재강화하나** (lifecycle)

### 1인 개발자 ROI 3개

1. 프로젝트 노트·agent log를 무한히 쌓기보다, 주기적으로 **dedup + consolidation** 하는 잡 하나만 넣어도 retrieval 품질이 달라질 수 있다.
2. memory 시스템 평가 시 accuracy만 보지 말고 **store reduction 대비 accuracy 유지율**을 같이 봐야 한다.
3. `wiki/log.md`와 journal이 길어질수록, 장기적으로는 "최근 사건 요약본"과 "원본 로그"를 분리하는 mini-consolidation 계층이 필요하다.

## 2026-05-19 보강 — ClawVM: memory는 저장소가 아니라 runtime contract이기도 하다 (arXiv 2604.10352)

[ClawVM](https://arxiv.org/abs/2604.10352) (2026-04-11)은 이 페이지의 memory 논의를 한 단계 더 낮은 시스템 층으로 끌어내린다. 지금까지 최근 위키는 memory를 크게 세 방식으로 다뤘다.

- **BeliefMem** — 무엇을 얼마나 믿을까
- **Human-Inspired Memory** — 언제 압축·망각·재강화할까
- **MAGE** — 무엇을 안 잊어야 안전한가

ClawVM은 여기에 네 번째 질문을 붙인다.

> **그 기억을 누가, 어떤 lifecycle boundary에서, 어떤 불변식으로 지킬 것인가?**

### 문제의 재정의 — memory failure는 종종 retrieval failure가 아니라 lifecycle failure다

논문이 지적하는 recurring failure는 세 가지다.

- compaction 뒤 **lost state**
- reset 시 **flush bypass**
- 잘못된 **destructive writeback**

즉 메모리 오류는 "못 찾았다"보다 먼저 **제대로 보존·반영되지 않았다**는 문제일 수 있다.

### ClawVM의 핵심 구조

- **typed pages** 로 상태를 분리
- 각 page에 **minimum-fidelity invariants** 부여
- token budget 안에서 **multi-resolution representation** 선택
- compaction / reset / save 같은 lifecycle boundary마다 **validated writeback** 수행

이 구조는 memory를 vector DB plugin이 아니라 **virtual memory contract** 로 취급한다.

### 왜 이 페이지에 중요한가

ClawVM은 memory 시스템 논의를 다음 표처럼 바꾼다.

| 질문 | 대표 자료 | 초점 |
|---|---|---|
| 무엇을 얼마나 믿나? | BeliefMem | belief representation |
| 언제 압축·망각하나? | Human-Inspired Memory | lifecycle policy |
| 무엇을 안 잊어야 안전한가? | MAGE | safety memory |
| **어떻게 절대 안 잃게 강제하나?** | **ClawVM** | **runtime enforcement** |

### 정량 신호

HTML 본문 기준:

- **12 real-session traces** + adversarial stress tests
- task replay에서 budget 180 기준 **100% success** vs baseline **76.7%**
- policy-engine overhead **median 18–44μs/turn**, p95 **< 60μs**

→ 아주 작은 runtime cost로 state-loss 계열 실패를 크게 줄인다는 주장이다.

### 1인 개발자 ROI 3개

1. 장기 실행 agent를 만들 때 memory store 추가보다 먼저 **flush/reset/save 경계**를 명시하는 편이 더 즉효일 수 있다.
2. 메모리를 한 덩어리 요약으로 다루지 말고, 최소한 **"절대 안 잃을 페이지"와 "압축 가능한 페이지"** 를 나눠 보는 것이 좋다.
3. memory benchmark를 볼 때 retrieval accuracy뿐 아니라 **writeback correctness / compaction fault / reset safety** 같은 운영 지표도 질문해야 한다.

## 2026-05-22 보강 — Scale-Conditioned Memory Eval: 저장된 증거가 언제부터 안 쓰이기 시작하는가

[When Stored Evidence Stops Being Usable](https://arxiv.org/abs/2605.07313) (2026-05-08)은 이 페이지의 memory 논의를 한 가지 중요한 방향으로 넓힌다. 지금까지는 memory를 **무엇을 저장하나 / 어떻게 갱신하나 / 어떻게 안전하게 보존하나** 쪽으로 많이 봤다면, 이 논문은 한 걸음 물러나 **store가 커질수록 그 증거가 계속 usable한가** 를 묻는다.

### 핵심 전환 — fixed snapshot accuracy보다 growth 조건이 중요하다

기존 memory eval은 종종 현재 시점 정확도나 retrieval quality를 말한다. 하지만 production memory는 시간이 지나면서 **irrelevant session** 이 계속 쌓인다. 이 논문은 query마다 task evidence는 고정하고 irrelevant session만 늘려, 그 조건에서 성능이 어떻게 무너지는지 본다.

즉 질문이 이렇게 바뀐다.

- 예전: "지금 잘 찾는가?"
- 이제: **"쓸모없는 기록이 계속 쌓여도, 필요한 증거를 예산 안에서 계속 꺼낼 수 있는가?"**

### 네 가지 진단 지표

논문은 scale-conditioned memory eval을 다음 네 지표로 나눈다.

| 지표 | 질문 |
|---|---|
| **budget-compliant reliability** | 호출 예산 안에서 여전히 정답에 도달하는가? |
| **tail memory-call burden** | 어려운 사례에서 memory 호출이 얼마나 길게 늘어지는가? |
| **failure-regime decomposition** | 실패가 retrieval miss인지, budget overflow인지, interface 문제인지 구분되는가? |
| **usable-scale boundary** | 어느 규모부터 target reliability 아래로 떨어지는가? |

이 네 개는 memory benchmark를 accuracy 한 줄에서 **운영형 진단 도구** 로 바꿔 준다.

### 왜 최근 memory taxonomy와 잘 붙는가

최근 위키에서 memory는 이미 네 질문으로 쪼개졌다.

| 질문 | 대표 근거 |
|---|---|
| 무엇을 얼마나 믿나? | BeliefMem |
| 언제 압축·망각하나? | Human-Inspired Memory |
| 무엇을 안 잊어야 안전한가? | MAGE |
| 어떻게 절대 안 잃게 강제하나? | ClawVM |

이번 논문은 여기에 다섯 번째 질문을 추가한다.

| 새 질문 | 대표 근거 |
|---|---|
| **얼마나 커져도 계속 쓸 만한가?** | **Scale-Conditioned Evaluation** |

즉 memory 설계는 저장 방식만의 문제가 아니라, **규모가 커질 때 usability가 어떻게 붕괴하는지** 까지 포함해야 한다.

### 정량 신호

abstract 기준 핵심 수치는 다음과 같다.

- LongMemEval에서 **HippoRAG** 는 two-call budget을 지키지만 irrelevant session이 늘수록 **budget-compliant reliability가 16~20 percentage points 하락**
- **LiCoMemory** 는 agent 의존성이 큼
  - Qwen3-8B는 budget 초과
  - Qwen3-32B / Qwen3-235B는 시험 범위 내 상대적으로 안정

→ memory 성능 주장은 이제 모델명 하나가 아니라 **agent × interface × scale range × budget** 조건부 문장으로 써야 한다.

### 1인 개발자 ROI 3개

1. memory 시스템을 볼 때 demo accuracy보다 먼저 **history가 10배 늘어도 latency·호출 수·정확도가 어떻게 변하는지** 질문한다.
2. memory eval을 설계할 때 gold evidence를 바꾸지 말고 **irrelevant history만 늘리는 실험** 을 따로 만든다.
3. 본 위키처럼 장기 로그가 쌓이는 시스템은 "검색된다"보다 **실제로 예산 안에서 유용하게 다시 꺼내 쓸 수 있는가** 를 기준으로 구조를 점검한다.

## 참고 소스

- [AI Memory Systems 리서치](raw/notes/2026-04-09-ai-memory-systems.md)
- [State of AI Agent Memory 2026 (Mem0)](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [AI Agent Memory Architecture (Redis)](https://redis.io/blog/ai-agent-memory-stateful-systems/)
- [ZenBrain 7-Layer Memory Architecture (arXiv 2604.23878, 2026-04)](https://arxiv.org/abs/2604.23878)
- [Memory for Autonomous LLM Agents — Survey (arXiv 2603.07670, 2026-03)](https://arxiv.org/html/2603.07670v1)
- [GroupMemBench: Multi-Party Memory (arXiv 2605.14498, 2026-05)](https://arxiv.org/abs/2605.14498)
- [Human-Inspired Memory Architecture for LLM Agents (arXiv 2605.08538, 2026-05)](https://arxiv.org/abs/2605.08538)
- [When Stored Evidence Stops Being Usable: Scale-Conditioned Evaluation of Agent Memory (arXiv 2605.07313, 2026-05)](https://arxiv.org/abs/2605.07313)
