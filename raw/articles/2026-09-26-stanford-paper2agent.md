---
title: "Stanford Paper2Agent: research papers become MCP-based AI agents (~45 min, ~$14)"
source_url: "https://aiweekly.co/alerts/stanfords-paper2agent-turns-research-papers-into-ai-agents"
source_type: "research-news"
authors: ["AI Weekly"]
published: 2026-09-16
fetched: 2026-09-26
tags: [paper, mcp, scientific-discovery, agents, reproducibility, nature]
status: raw
---

# Stanford Paper2Agent: research papers become MCP-based AI agents (~45 min, ~$14)

> 스탠포드(Zou 연구실)가 논문 한 편을 약 45분·약 14달러에 작동하는 AI 에이전트로 변환하는 Paper2Agent 프레임워크를 Nature에 발표(2026-09-16). 논문의 원고·코드·데이터·워크플로우를 Model Context Protocol(MCP) 서버 뒤에 감싸 Claude Code 같은 채팅 에이전트가 호출할 수 있게 만든다.

## 메타

- **Title**: Reimagining research papers as interactive and reliable AI agents
- **Source**: Nature 원문 (Jiacheng Miao, Joe R. Davis, Yaohui Zhang, Jonathan K. Pritchard, James Zou), AI Weekly 요약
- **Links**: <https://aiweekly.co/alerts/stanfords-paper2agent-turns-research-papers-into-ai-agents>, <https://aiweekly.co/alerts/stanfords-paper2agent-turns-research-papers-into-mcp-agents>
- **Published**: 2026-09-16

## 한 줄 요약

**"지식은 정적 기록이 아니라 동적이고 상호작용적이어야 한다"(James Zou) — 논문을 MCP 에이전트로 바꾸는 작업은 출판과 코드 저장소 사이의 재현성 공백을 자동으로 감사한다."
**

## 핵심 내용

1. **Paper2Agent**: 스탠포드 연구팀이 개발한 프레임워크. 정적 연구 논문(원고·코드·데이터·워크플로우)을 **MCP 서버**로 감싸, Claude Code 같은 채팅 에이전트가 호출할 수 있는 "작동하는 AI 에이전트"로 변환. 논문 1편당 약 **45분**, 비용 약 **$14**.
2. **규모 실험**: 계산생물학 논문 100편에 적용 → **74편**이 에이전트화에 성공, **593개의 검증된 툴** 생성. AlphaGenome 케이스 스터디에서는 튜토리얼 기반 쿼리에 **98.7%** 정답률(저장소 직접 접근 방식 82.7% 대비), 전체 벤치마크 평균 **91.2%**.
3. **개념**: 각 에이전트를 "virtual corresponding author(가상 교신저자)"로 포지셔닝 — 논문에 대해 질문에 답하고, 그 논문의 방법론을 새 데이터에 적용하며, 다른 논문에서 만든 에이전트와 협업할 수 있다고 제시.
4. **실패 26건**: 코드 불완전, 문서 누락, 의존성 비호환이 원인 — 사실상 논문 재현성을 **자동으로 감사**하는 부수 효과가 있음.
5. **미해결 질문**: 원 논문 저자의 사전 동의가 필요한지, 계산생물학 밖 영역(도구·의존성 생태계가 다른 분야)에 얼마나 잘 적용되는지는 논문도 보도도 다루지 않음.
6. **인용**: James Zou는 IEEE Spectrum에 "It's still important to attribute the final discoveries and reference them back to original papers and original human authors" — 발견 귀속의 중요성 강조. Weill Cornell의 Olivier Elemento는 "출판 과정에 대한 사고방식의 진정한 진전"이라 평가.

## 시사점

- `[[patterns/agent-scientific-discovery]]`의 "문헌 접지→in-silico 가설→wet-lab 검증" 파이프라인에 Paper2Agent가 **구체적 구현체**로 들어감. 특히 "가상 교신저자" 개념은 기존 페이지의 발견 파이프라인과 직결.
- `[[concepts/mcp]]`의 실전 사례: MCP가 "AI의 USB-C"를 넘어 연구 지식의 **인터랙티브 인터페이스**로 쓰임 — 논문→도구 표준화의 새 패턴.
- 재현성 관점: 에이전트화 실패율(26%) 자체가 재현성 지표 — 나중에 `[[concepts/llm-evaluation]]`의 평가 방법론과 연결해 볼거리.
- 단, 성공률 74%와 벤치마크 91.2%는 동일 연구팀의 자체 측정 — 독립 검증 필요. 출처 다양성 확보 전까지 confidence는 medium.
