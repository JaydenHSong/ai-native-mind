---
title: "AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents (arXiv 2605.13357)"
source_url: "https://arxiv.org/abs/2605.13357"
source_type: "arxiv-paper"
authors: ["Hailin Zhong", "Shengxin Zhu"]
published: 2026-05-13
fetched: 2026-05-14
tags: [harness-engineering, runtime-substrate, foundation-model, agent, formalization, 11-responsibilities, arxiv]
status: ingested
---

# AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents

> arXiv:2605.13357, 2026-05-13. Hailin Zhong, Shengxin Zhu. Position/formalization paper that names the runtime layer between a foundation model and its environment and enumerates **eleven** required component responsibilities.

## 메타

- **Title**: AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents
- **Authors**: Hailin Zhong, Shengxin Zhu
- **arXiv**: <https://arxiv.org/abs/2605.13357> | HTML: <https://arxiv.org/html/2605.13357v1>
- **Domain**: Software-engineering agents (Codex, Claude Code, Cursor 류 코딩 에이전트가 1차 frame).
- **Type**: 본격 새 방법론 제안 아닌, **terminology + 책임 enumeration 정형화** (taxonomy/position paper).

## 한 줄 요약

**"코드 에이전트가 unreliable한 건 모델 capability만의 문제가 아니다 — 모델·하네스·환경이 같이 만드는 *시스템*이고, 그 하네스가 11개 component responsibility를 *전부* 책임져야 한다."**

## 핵심 주장

### 1) Reliability gap의 재정의

지배적 설명: "에이전트가 실세계에서 실패하는 건 모델이 약해서다 → 더 큰 모델 / 더 좋은 fine-tune이 답이다."

저자 framing 전환: **Capability emerges from model–harness–environment system**.

- 모델: 한 시점의 weights
- 하네스 (= 본 논문의 주제): 관찰·행동·피드백·완료 판정의 **runtime substrate**
- 환경: project repo, sandbox, tool, 외부 service

→ harness layer가 reliability에 미치는 영향이 *모델 다음으로 큰 lever*이며, 형식적 정의가 없으니 비교·평가·재현이 안 된다는 게 문제 진술.

### 2) **11 component responsibilities** — 정형화 결과

| # | Responsibility | 한국어 의미 | 본 위키 매핑 후보 |
|---|---|---|---|
| 1 | **Task specification** | 에이전트에게 "무엇을" — 목표·success criterion·constraint | [[patterns/claude-md-guide]], MEP (Zigler) |
| 2 | **Context selection** | 현재 작업에 어떤 파일·메모리·툴을 노출할지 | [[concepts/context-engineering]] |
| 3 | **Tool access** | 사용 가능한 액션 집합·schema·permission | [[concepts/tool-use]], [[concepts/mcp]] |
| 4 | **Project memory** | 장기 지식(repo state, prior conventions, lessons) | [[concepts/ai-memory-systems]], ZenBrain 7-계층 |
| 5 | **Task state** | 현재 task의 working memory — plan, todo, intermediate | filesystem-as-memory (Stanford Meta-Harness) |
| 6 | **Observability** | trace, log, metric — 무엇을 했는지 보여 주기 | [[concepts/gen-ai-observability]] |
| 7 | **Failure attribution** | 실패 시 model·tool·prompt·env 중 어디 탓인지 가름 | RAND JRH의 한 부분, OTel agent SC |
| 8 | **Verification** | 변경이 *완료*되었음을 입증 (test pass, eval green, exec confirm) | [[concepts/llm-evaluation]], Verify Before You Fix |
| 9 | **Permissions** | sandbox, container isolation, structured approval | Wei 2026-04-20 (container ↔ approval lift 3.4) |
| 10 | **Entropy auditing** | 결정 다양성·반복 stability — judge reliability 류 신호 | RAND JRH (Stochastic stability family) |
| 11 | **Intervention recording** | human-in-the-loop 개입을 *데이터*로 보존 | [[patterns/agent-server-harness]], HITL gate |

> 11개의 *합집합*이 문헌의 흩어진 컴포넌트를 한 표에 모은 것이지, 11개 *전부 동시에* 구현해야 한다는 prescriptive 주장은 abstract 수준에서는 약한 read이다 (full PDF 검증 필요).

### 3) "Software-engineering capability emerges from a model-harness-environment system"

이 한 문장이 저자의 thesis. paraphrase:

```
Capability(agent) ≠ Capability(model)
Capability(agent) = f(model, harness, environment)
                           ^^^^^^^
                           formalize and engineer this
```

마치 OS가 hardware로부터 application capability를 emergent로 만드는 것과 유사한 substrate 관점. ← OS·DB·언어런타임을 substrate로 보는 비유는 본문에 있을 가능성이 높다 (abstract에선 명시 없음, 본문 확인 후 보강).

## 본 위키 함의

- [[concepts/harness-engineering]] — 이 페이지의 *formal definition* 자리에 11 component를 표로 박을 수 있다. 기존 본문은 Guides/Sensors 같은 운영적 표현이고, Zhong/Zhu는 *분리된 책임 enumeration*이라 한 layer 위.
- [[patterns/harness-engineering-casebook]] — 30 case matrix의 *열(column)* 후보가 이 11개. 한 도메인이 11 책임 중 어디를 잘 채우고 어디가 비는지 채점할 수 있다.
- [[concepts/llm-evaluation]] — verification (8번)이 이미 RAND JRH·Verify Before You Fix와 같은 영역이지만, 11 책임에 *failure attribution(7)·entropy auditing(10)*이 별도로 들어간 점에 주목. eval은 verification만이 아니라 attribution·entropy까지 셋이 별도 컴포넌트.
- [[journal/2026-05-06-pm]] Wei의 5 design dimension(subagent / context / tool / safety / orchestration)과 비교:
  - 둘 다 *taxonomy* 시도이지만, Wei는 **descriptive 70-project empirical**(현재 무엇이 있나), Zhong/Zhu는 **prescriptive responsibilities**(무엇이 *있어야* 하나). 결이 다르다.

## 한계 / 주의

- **WebFetch rate limit으로 full PDF 본문 확인 못 함**. 11 responsibility 이름·순서는 search-engine snippet에서 확보 (Bing/Google snippet과 web search agent 응답 일치 확인). 본 위키 표의 "본 위키 매핑 후보" 열은 본문 검증 후 확정 필요.
- "정형화 paper"는 후속 작업으로 합의·반박 둘 다 가능 — 본 위키는 받아쓰기 말고 *후속 비판도 함께 추적*해야.
- 어제(GSAR/VBYF/A-Harness, 2026-05-13)가 *verification gate*만 잠갔다면 오늘의 Runtime Substrate은 **verification을 11개 책임 중 한 칸**으로 위치시킨다 — verification만 잠근다고 reliability 끝나지 않는다는 함의.

## 참고

- 원문: <https://arxiv.org/abs/2605.13357>
- HTML 본문: <https://arxiv.org/html/2605.13357v1>
- Martin Fowler 본편 (대중 entry): <https://martinfowler.com/articles/harness-engineering.html>
- PingCAP 블로그 (What an AI Harness Actually Needs Beyond a Model): <https://www.pingcap.com/blog/ai-agent-harness/>
- 짝 페이지: 4월의 Wei 70-project 연구 ([[raw/articles/2026-05-06-pm-architectural-decisions-agent-harnesses]]) 와 4월의 CAAF anti-evolution 주장 ([[raw/articles/2026-05-06-pm-caaf-deterministic-harness]])
