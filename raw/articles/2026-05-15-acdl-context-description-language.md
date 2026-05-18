---
title: "A Language for Describing Agentic LLM Contexts — ACDL (arXiv 2605.01920)"
source_url: "https://arxiv.org/abs/2605.01920"
source_type: "arxiv-paper"
authors: ["Noga Peleg Pelc", "Gal A. Kaminka", "Yoav Goldberg"]
published: 2026-05-03
fetched: 2026-05-15
tags: [context-engineering, notation, specification-language, formal-method, harness-engineering, arxiv, cais-2026]
status: ingested
---

# A Language for Describing Agentic LLM Contexts (ACDL)

> arXiv:2605.01920, 2026-05-03. Peleg Pelc · Kaminka · Goldberg (Bar-Ilan University · AI21 Labs). 18 pages, 12 figures. Accepted at **CAIS '26** (ACM Conference on AI and Agentic Systems, May 2026, San Jose). DOI: 10.1145/3786335.3813126. Project: <http://www.acdlang.org>.

## 메타

- **Title**: A Language for Describing Agentic LLM Contexts
- **Authors**: Noga Peleg Pelc, Gal A. Kaminka, Yoav Goldberg
- **arXiv**: <https://arxiv.org/abs/2605.01920> | PDF: <https://arxiv.org/pdf/2605.01920> | HTML: <https://arxiv.org/html/2605.01920v1>
- **Project / tooling**: <http://www.acdlang.org>
- **Domain**: LLM 에이전트 시스템의 *컨텍스트가 시간에 따라 어떻게 진화하는지*를 정밀하게 기술하는 **표기법(notation)** — 즉, "이 시스템은 어떤 prompt를 어떤 순서로 만들어내는가"를 한 페이지의 그림 또는 코드로 적는다.

## 한 줄 요약

**"Context Engineering이 학문이라면 그 학문엔 *기호*가 있어야 한다 — ACDL은 role-message sequence · dynamic content · time-indexed reference · conditional/iterative structure를 위한 문법을 제공하고, 손그림과 정형 코드 양쪽으로 같은 의미를 적을 수 있게 한다."**

## 핵심 주장

### 1) 문제 — 컨텍스트 합성에 *표준 표기*가 없다

논문 인용 (abstract): "context construction is typically conveyed through informal prose, ad hoc diagrams, or direct inspection of code, none of which precisely capture how a prompt evolves across interaction steps or how two context representation strategies differ."

→ 두 시스템을 *비교*할 때 우리는 매번 "그 시스템 코드를 까봐야" 답이 나온다. ER diagram이 데이터베이스에, UML이 OOP에 한 일을 **컨텍스트 합성**에는 아직 누구도 하지 않았다.

### 2) ACDL 4대 구성 요소

| 구성 요소 | 표현 대상 |
|---|---|
| **Role message sequence** | system/user/assistant 메시지가 어떤 *순서*로 합쳐지는가 |
| **Dynamic content** | 어느 메시지의 어느 부분이 *시점에 따라 바뀌는지* (예: tool output, retrieved doc) |
| **Time-indexed reference** | t-1, t-3 같은 *과거 turn 참조*를 명시 (어떤 history를 얼마나 가져오나) |
| **Conditional / iterative structure** | if / loop — 분기와 반복까지 표기법 안에서 처리 |

→ "context의 *모양*"이 아니라 "context를 만드는 *프로그램*의 모양"을 적는다. 시스템 동작 *독립적*. 그 어떤 구현(LangChain, custom code, MCP server, …) 위에서도 같은 ACDL diagram이 그려질 수 있다.

### 3) 표현의 이중 매체

- **Whiteboard hand-drawn**: 회의실 칠판에 사람이 그릴 수 있게 설계됨 (12 figure의 거의 모두가 손그림 호환).
- **Formal text**: 같은 의미를 텍스트 문법으로도 적고, 자동으로 같은 diagram을 렌더링.

→ 두 매체가 동일 의미를 보장한다는 것이 핵심 design constraint.

### 4) 사용처 — 논문/일상 양쪽

저자가 명시: "encourage the community to adopt it for describing LLM systems context, both in day-to-day communication and in papers."

→ 1인 개발자에게 의미: 본인 에이전트의 context flow를 ACDL diagram 1장으로 만들면, 6개월 뒤 자기 코드도 빠르게 다시 이해 가능. 위키 [[concepts/cognitive-debt|Cognitive Debt]]를 줄이는 표기 도구.

## 기존 시스템에 적용

논문에서 "documenting several existing systems and their variants" — 즉 ACDL은 *기존* 에이전트 시스템들을 *역공학*하면서 검증되었다. 어떤 시스템들을 다뤘는지는 본문에 12 figure로 분포 (rate limit으로 본문 미독, 후속 정독 필요).

## 본 위키와의 짝

| 본 위키 페이지 | ACDL과의 관계 |
|---|---|
| [[concepts/context-engineering]] | ACDL은 이 학문의 *표기 표준* 후보 — Mise en Place(2026-05-12)가 *프로세스*를 정한다면 ACDL은 *결과 구조*를 그린다 |
| [[concepts/harness-engineering]] | 11 책임(Zhong/Zhu, 2026-05-14) 중 #2 Context selection, #4 Project memory, #5 Task state의 *spec 표기* 후보 |
| [[patterns/claude-md-guide]] | GROUNDING.md(2026-05-12)가 *constraint 텍스트*를 정한다면 ACDL은 그 텍스트가 *prompt에 어떻게 주입되는지*를 적는다 |

## 2x3 좌표계에서의 위치

(descriptive/prescriptive/tooling × 학습/정형화/측정 — 2026-05-14 journal 좌표계)

- **Tooling × 정형화** 칸 ← 이 논문이 채운다. 어제(05-14)까지 빈 칸 (Wei는 정형화이긴 하나 descriptive=실태조사, Zhong/Zhu는 prescriptive=책임 정의, Zhang은 학습축이라 정형화의 *tooling* 칸이 비어 있었음).

## 한계 (추정 — 본문 미독)

- 18 페이지 conference paper, 학술 검증은 채택 1건(CAIS '26) 시점 — 산업 채택은 *권유* 단계.
- ACDL 자체는 *기술 언어*이고 의미론(semantics)은 paper 내부, 표준화 조직(W3C 등) 채택 흔적 없음 (검색 시점 기준).
- "language 만든다 vs. 자연어 다이어그램으로 충분한다" 논쟁의 한 쪽 — 반례는 본 위키의 [[patterns/llm-wiki]]가 *자연어*만으로 6주째 운영되고 있다는 사실.

## 출처

- arXiv: <https://arxiv.org/abs/2605.01920>
- DOI (CAIS '26): <https://doi.org/10.1145/3786335.3813126>
- 프로젝트 사이트: <http://www.acdlang.org>
