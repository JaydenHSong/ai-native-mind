# Harness Engineering 심화 학습 — 큐레이션

**작성**: 2026-04-12  
**목표**: [[concepts/harness-engineering]] 너머로 **루프 설계·인간 역할·도구 스키마·운영** 축을 깊게 파기 위한 1차 출처 모음. 벤더 블로그는 관점만 참고.

---

## 0. 이미 위키에 반영된 축

- Martin Fowler 본편: [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html) — Guides / Sensors, Agent = Model + Harness.
- 위키 본문: Claude Code·Codex 하네스 사례, 서버 하네스 표, [[patterns/agent-server-harness]], [[concepts/gen-ai-observability]].

---

## 1. Thoughtworks / Fowler — 같은 계열에서 이어 읽기

| 링크 | 내용 |
|------|------|
| [Harness Engineering — first thoughts (memo)](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html) | 용어 도입 전 **메모** 형태. 배경·직관 잡기 좋음. |
| [Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) | 인간이 **in / on / out of the loop** 중 어디에 서는지, 루프 설계와 연결. 하네스 설계 = 루프 설계와 맞닿음. |

---

## 2. Anthropic — 도구·컨텍스트 = 하네스의 피드포워드

| 링크 | 내용 |
|------|------|
| [Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) | 도구 설명·스키마·에러 메시지 = **가이드** 품질이 곧 하네스 품질. |
| [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | JIT 로딩·메모리 = 컨텍스트 층 하네스. |
| [Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use) | 도구 수 폭발 시 검색·프로그래매틱 호출 = **도구 하네스** 고도화. |

---

## 3. 아키텍처·용어 정리 (보조 읽기)

| 링크 | 비고 |
|------|------|
| [What Is an Agent Harness? (Firecrawl)](https://www.firecrawl.dev/blog/what-is-an-agent-harness) | 구성요소(도구·상태·가드레일)를 한 장으로 정리. **벤더 관점**이므로 사실은 원문·공식 글과 대조. |
| [The Anatomy of an Agent Harness](https://blog.dailydoseofds.com/p/the-anatomy-of-an-agent-harness) | 이미 위키 참고에 있음 — 레이어 분해용. |
| [Claude Code Agent Harness Architecture (Wavespeed)](https://wavespeed.ai/blog/posts/claude-code-agent-harness-architecture/) | 비공식 분석. 위키에 인용됨 — **단일 출처로 믿지 말 것**. |

---

## 4. 운영·폐쇄 루프 (Sensors 쪽 심화)

| 링크 | 내용 |
|------|------|
| [[concepts/llm-evaluation]] (위키) | Eval = 하네스 **Sensor**의 한 종류. |
| [[concepts/gen-ai-observability]] (위키) | 트레이스·스팬 = 운영 센서. |
| [OpenTelemetry Gen AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | 센서 출력 표준화. |

---

## 5. 권장 순서 (짧은 코스)

1. Fowler **Harness engineering** 본문 다시 읽고, 자신의 레포에 Guides/Sensors 표 한 번 채우기.  
2. **Humans and Agents** — 내 역할이 in/on/out 중 어디인지 정하기.  
3. Anthropic **Writing tools for agents** — 도구 하나의 스키마·에러 문구만 개선해 보기.  
4. **Context engineering** 글 — JIT 패턴이 하네스에 어떻게 들어가는지 메모.  
5. (서버) [[patterns/agent-server-harness]] + OTel GenAI 페이지 — 프로덕션 Sensor 설계.

---

## 6. 다음 ingest 후보

- Fowler **Humans and Agents**를 읽고 `wiki/patterns/` 또는 `concepts/harness-engineering`에 "인간 루프 위치" 절 추가.  
- 도구 스키마 개선 실험 1건 → `wiki/journal/` 짧은 기록.
