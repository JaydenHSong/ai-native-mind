---
title: "Code as Agent Harness (arXiv 2605.18747)"
source_url: "https://arxiv.org/abs/2605.18747"
source_type: "arxiv-paper"
authors: ["Ning, Xuying", "Tieu, Katherine", "Fu, Dongqi", "Wei, Tianxin", "Li, Zihao", "Bei, Yuanchen", "Zou, Jiaru", "Ai, Mengting", "Liu, Zhining", "Li, Ting-Wei"]
published: 2026-05-18
fetched: 2026-05-22
tags: [harness-engineering, code-as-harness, agentic-coding, tool-use, planning, memory, multi-agent, survey, arxiv]
status: ingested
---

# Code as Agent Harness

> arXiv:2605.18747. code를 단순 산출물이 아니라 **agent reasoning·action·environment modeling·execution-based verification를 받치는 operational substrate** 로 보자는 survey.

## 메타

- **Title**: Code as Agent Harness
- **Authors**: Xuying Ning · Katherine Tieu · Dongqi Fu · Tianxin Wei · Zihao Li · Yuanchen Bei · Jiaru Zou · Mengting Ai · Zhining Liu · Ting-Wei Li
- **Link**: <https://arxiv.org/abs/2605.18747>
- **Focus**: harness interface, harness mechanisms, multi-agent shared code artifact, verification, long-horizon execution

## 한 줄 요약

**"코드는 이제 LLM이 만들어 내는 결과물인 동시에, agent가 생각하고 행동하고 검증하는 데 쓰는 하네스 자체다."**

## 핵심 주장

### 1) code는 output에서 substrate로 올라왔다

논문은 최근 agentic system에서 code의 역할이 바뀌었다고 본다.

- 예전: code = 최종 산출물
- 지금: code = reasoning scaffold + action interface + environment model + verification substrate

즉 agent가 code를 "쓰기만" 하는 것이 아니라, code 위에서 **계획하고 실행하고 확인** 한다.

### 2) harness를 세 층으로 다시 묶는다

survey는 code-as-harness를 세 연결 층으로 정리한다.

1. **harness interface**
   - code가 reasoning / action / environment modeling을 어떻게 연결하는가
2. **harness mechanisms**
   - planning
   - memory
   - tool use
   - feedback-driven control
   - optimization
3. **scaling to multi-agent**
   - shared code artifact
   - coordination
   - review
   - verification

핵심은 planning·memory·tool use를 따로따로 보지 않고, **executable code substrate 위에서 결합된 하네스 메커니즘** 으로 본다는 점이다.

### 3) shared code artifact가 multi-agent coordination의 매개가 된다

멀티 agent에서 중요한 것은 말로만 역할을 나누는 것이 아니라,

- 같은 파일
- 같은 diff
- 같은 test harness
- 같은 stateful artifact

를 공유하면서 coordination하는 것이다. 이 관점은 orchestration을 prompt choreography보다 **artifact-mediated workflow** 로 읽게 만든다.

### 4) 열린 과제도 하네스 질문으로 정리한다

논문이 짚는 open challenge는 대부분 이 위키의 최근 관심사와 정확히 맞물린다.

- final success만으로는 부족한 **evaluation beyond task success**
- **incomplete feedback** 아래 verification
- **regression-free harness improvement**
- multi-agent 간 **consistent shared state**
- safety-critical action에서 **human oversight**
- **multimodal environment** 로의 확장

즉 survey의 가치가 새로운 기법 하나보다, 최근 흩어진 소스들을 **한 장의 하네스 지도** 로 다시 묶는 데 있다.

## 기여점

1. code를 agent infrastructure의 중심 substrate로 재정의
2. harness interface / mechanisms / multi-agent scale의 **3-layer survey frame** 제공
3. planning·memory·tool use·verification을 별개 토픽이 아니라 **같은 code substrate 위 메커니즘 묶음** 으로 정리
4. evaluation·state consistency·human oversight를 harness 관점의 미해결 문제로 제시

## 실무적 시사점

### 1) 코드 저장소 자체가 agent runtime surface다

repo를 단순 작업 대상이 아니라 **agent가 읽고 쓰고 검증하는 상태공간** 으로 보면, diff·test·workspace 구조가 곧 하네스 설계가 된다.

### 2) planning / memory / tool use는 코드 밖 문서만으로 다뤄선 부족하다

긴 instruction보다 executable artifact와 code-backed state를 늘릴수록 장기 작업의 추적성과 검증성이 좋아진다.

### 3) multi-agent 설계는 대화 분업보다 shared artifact 설계가 중요하다

"누가 뭘 맡나"만이 아니라 **무엇을 공유하고 어디에 기록하나** 가 orchestration 품질을 좌우한다.

## 기존 지식과의 연결

- [[concepts/harness-engineering]]: 하네스를 prompt wrapper가 아니라 **code-backed operational substrate** 로 다시 압축한다.
- [[concepts/tool-use]]: tool use를 함수 호출이 아니라 **코드·환경·검증을 잇는 실행층** 으로 확장해 읽게 한다.
- [[concepts/ai-orchestration]]: multi-agent coordination의 핵심 매개를 message passing보다 **shared code artifact** 쪽으로 이동시킨다.
- [[patterns/agent-server-harness]]: 서버형 agent도 결국 code/state/test loop를 가진 runtime으로 재해석할 수 있다.

## 한계 / 메모

- 현재 캡처는 arXiv abstract page 기준이다.
- survey가 언급한 practical applications의 세부 분류와 대표 사례 표는 본문 정독 시 보강 필요.
- regression-free harness improvement와 multimodal extension 항목은 후속 source와 함께 더 구체화할 가치가 크다.
