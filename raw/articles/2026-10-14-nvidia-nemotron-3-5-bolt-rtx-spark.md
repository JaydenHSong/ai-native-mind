---
title: "NVIDIA RTX Spark 런치 위크 — Nemotron 3.5 Bolt 74B-A9B (24GB에 74B MoE), PAIR 정식 출시"
source_url: "https://www.techtimes.com/articles/328981/20261014/nvidia-rtx-spark-launches-friday-74-billion-parameter-ai-fits-24gb-laptop.htm"
source_type: "news"
authors: ["Tech Times", "Gadget Pilipinas"]
published: 2026-10-13
fetched: 2026-10-14
tags: [nvidia, nemotron, open-weights, local-agents, rtx-spark, mcp]
status: raw
---

# NVIDIA RTX Spark 런치 위크 — Nemotron 3.5 Bolt 74B-A9B (24GB에 74B MoE), PAIR 정식 출시

> NVIDIA RTX Spark 런치 위크 발표 (2026-10-13). Tech Times + Gadget Pilipinas 교차 확인.

## 내용

- Nemotron 3.5 Bolt 74B-A9B: 74B 파라미터 MoE, 토큰당 9B 활성, 2-bit 양자화 인식 훈련(quantization-aware training) → 24GB 풋프린트. 에이전트 AI 전용 설계.
- 완전 오픈소스: 가중치 + 훈련 데이터 + 레시피 공개. 10/15 출시, llama.cpp·vLLM·Ollama·Unsloth·LM Studio 지원. Hermes·OpenClaw 경유 접근.
- 소형 모델 Nemotron 3.5 Bolt E4B (대화 에이전트/게임 NPC용)는 10/23 후속 출시.
- PAIR (Personal AI Router) 베타 종료: 무료/오픈소스. LAN 내 PC들에 워크로드 분산, llama.cpp + Hugging Face 다운로드 추가.
- RTX Spark 노트북 (Grace CPU + Blackwell GPU, 최대 128GB 통합 메모리, ~1 petaflop AI 연산): 10/16 판매 개시.
- Broadcast 2.3: 내장 MCP 서버 탑재. NVIDIA는 자사 앱·Broadcast·PAIR·RTX Remix·Omniverse용 MCP 서버를 직접 제공.

## 맥락

- [[concepts/nvidia-nemotron-3-5-bolt]] — 신규 위키 페이지: 모델 스펙·출시 일정·오픈소스 범위 정리.
- [[patterns/agent-safety-runtime]] — 로컬 실행 에이전트 확산과 "AI 웜" 자기복제 위협 (2026-10-14 Anthropic 연구) 연결 지점. 로컬 24GB급 에이전트 모델의 안전 운용 문제.
- [[concepts/mcp]] — NVIDIA가 자사 앱 전반에 MCP 서버를 번들: MCP가 사실상 표준 인터페이스로 굳어지는 신호.
- 주의: 10/13 발표 기준. 실제 출시일은 10/15(모델)·10/16(노트북)·10/23(E4B).
