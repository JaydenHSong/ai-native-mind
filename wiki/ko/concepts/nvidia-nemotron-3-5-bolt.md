---
title: "NVIDIA Nemotron 3.5 Bolt — RTX Spark용 오픈웨이트 에이전틱 모델"
category: concepts
tags: [nvidia, nemotron, bolt, open-weights, agentic-ai, rtx-spark, edge-ai, quantization, mcp, pair]
created: 2026-10-14
updated: 2026-10-14
sources:
  - "raw/articles/2026-10-14-nvidia-nemotron-3-5-bolt-rtx-spark.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/agent-safety-runtime]]"
status: draft
confidence: medium
---

# NVIDIA Nemotron 3.5 Bolt — RTX Spark용 오픈웨이트 에이전틱 모델

## 쉽게 읽기

**비유**: 에이전트 일만 하도록 태어난 오픈소스 모델이 게이밍 GPU 한 장(24GB)에 통째로 들어간다. 모델→실행기→노트북까지 한 회사가 깔아주는 "에이전트용 PC 시대"의 개막탄.

| 용어 | 풀이 |
|------|------|
| **74B-A9B (MoE)** | 총 74B 파라미터 중 토큰당 9B만 활성화 — Mixture of Experts 구조 |
| **2비트 양자화 인식 학습** | 학습 단계부터 2비트 압축을 전제로 — 24GB 풋프린트의 비결 |
| **PAIR** | Personal AI Router — LAN 안의 PC들에 AI 워크로드를 분산하는 무료·오픈소스 라우터 |

## 한줄 정의

NVIDIA가 2026-10-13 발표한 에이전틱 AI 전용 오픈웨이트 모델 **Nemotron 3.5 Bolt**(74B-A9B) + RTX Spark 론치 위크의 소프트웨어 스택 — 2비트 양자화로 24GB에 들어가는 "로컬 에이전트용" 모델과 엣지 실행 인프라의 결합.

## 핵심 내용 (2026-10-13 발표)

### Nemotron 3.5 Bolt — 스펙

- **74B 파라미터 MoE, 토큰당 9B 활성** — 2비트 양자화 인식 학습(quantization-aware training)으로 **24GB 풋프린트**.
- 용도: **에이전틱 AI 전용**(purpose-built). **완전 오픈소스** — 가중치·학습 데이터·레시피 전부 공개.
- 출시: **10/15** — llama.cpp·vLLM·Ollama·Unsloth·LM Studio 경유, Hermes·OpenClaw를 통한 접근.
- 소형 버전 **Nemotron 3.5 Bolt E4B**(대화형 에이전트·게임 NPC용)는 **10/23** 후속.

### PAIR — 베타 탈출

- **Personal AI Router**가 베타를 벗어남. **무료·오픈소스**.
- LAN 안의 PC들에 워크로드를 분산. **llama.cpp + Hugging Face 다운로드** 지원 추가.

### RTX Spark 하드웨어 + MCP

- **RTX Spark 노트북** 10/16 판매 개시 — Grace CPU + Blackwell GPU, **최대 128GB 통합 메모리**, **~1 petaflop** AI 연산.
- **Broadcast 2.3**에 MCP 서버 내장. NVIDIA가 **앱·Broadcast·PAIR·RTX Remix·Omniverse용 MCP 서버**를 직접 제공 — 자사 소프트웨어 스택의 MCP 표준화.

## 왜 중요한가

1. **오픈웨이트 에이전트 스택의 완성형**: 모델(Nemotron)→라우터(PAIR)→하드웨어(RTX Spark)→프로토콜(MCP 서버)까지 한 회사가 깔아줌. [[comparisons/frontier-lab-economics]]의 "하드웨어 수직 통합"(DeepSeek-Ascend 3단계)의 서구·소비자 버전.
2. **24GB = 소비자 GPU 진입선**: 74B급 에이전트 모델이 게이밍 GPU 한 장에 — 로컬 에이전트의 실용선이 내려옴. [[concepts/agent-residence]]의 "로컬 상주" 축에 실물이 붙는 순간.
3. **MCP의 플랫폼화**: NVIDIA가 자사 앱 전부에 MCP 서버를 내장 — "AI의 USB-C"가 하드웨어 벤더의 기본 스펙이 되기 시작. [[concepts/mcp]]의 10/13 보강(Workspace MCP)과 같은 주에 겹침.
4. **런타임 경계의 확장**: 완전 오픈소스의 에이전틱 모델이 소비자 하드웨어로 퍼지면, 실행시점 강제([[patterns/agent-safety-runtime]])의 대상도 데이터센터에서 엣지로 넓어짐 — 같은 날의 AI 웜 연구와 같은 문제의식.

## 한계 (명시)

- 핵심 제품이 **미출시**(10/15 모델·10/16 노트북·10/23 E4B) — 스펙·일정은 발표 기준.
- 소스는 2차 매체(Tech Times·Gadget Pilipinas) — 1차(NVIDIA 발표문) 직접 확인 필요.
- confidence **medium** 유지.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — 오픈웨이트의 유통 장악 + 하드웨어 수직 통합의 서구 버전
- [[patterns/agent-safety-runtime]] — 오픈 에이전틱 모델의 엣지 확산이 넓히는 강제 대상

## 참고 소스

- [NVIDIA RTX Spark 론치 위크 — Nemotron 3.5 Bolt 발표 (Tech Times·Gadget Pilipinas, 10/13)](raw/articles/2026-10-14-nvidia-nemotron-3-5-bolt-rtx-spark.md)
