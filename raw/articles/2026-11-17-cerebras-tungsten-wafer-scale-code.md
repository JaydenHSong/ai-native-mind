---
title: "Cerebras Tungsten — 연구원 1명 + 코딩 에이전트 1명이 쓴 웨이퍼 스케일 코드 (11-16)"
source_url: "https://www.cerebras.ai/blog/high-level-code-wafer-scale-performance"
source_type: "news"
authors: ["Cerebras", "Michael James"]
published: 2026-11-16
fetched: 2026-11-17
tags: [cerebras, tungsten, agentic-coding, hpc, wafer-scale-engine]
status: raw
---

# Cerebras Tungsten — 연구원 1명 + 코딩 에이전트 1명이 쓴 웨이퍼 스케일 코드 (11-16)

> Cerebras가 웨이퍼 스케일 엔진(WSE, 90만 코어)용 고수준 언어·컴파일러 Tungsten과 HPC 앱·튜토리얼 모음 Aviary를 출시했다. 발표의 중심 사례는 연구원 1명과 코딩 에이전트 1명이 채팅만으로 약 2주 만에 작성한 입자-셀(particle-in-cell) 플라스마 시뮬레이션으로, 웨이퍼의 98%에서 돌아갔다.

## 내용

- **발표**: 2026-11-16, Cerebras 블로그 "High-Level Code, Wafer-Scale Performance"(공동창업자 Michael James, 1차 출처). Tungsten과 Aviary는 labs.cerebras.ai에서 연구 미리보기(research preview)로 제공된다.
- **Tungsten이란**: WSE를 고수준으로 프로그래밍하는 언어 + 컴파일러. 각 처리 타일이 무엇을 계산하고 어떤 데이터를 주고받는지를 적는 Tungsten과, 타일의 배치·연결을 적는 동반 언어 Paint의 2개 언어 모델이다. 컴파일러가 아키텍처 전체 모델을 갖고 있어 코드를 접근 패턴 레지스터·이벤트 기반 태스크·패브릭 호출·루프 명령어로 매핑한다.
- **Aviary**: Tungsten으로 쓴 고성능 앱·튜토리얼 모음. 열 방정식·Gray-Scott 반응-확산 스텐실부터 입자 수송, 희소 솔버, FFT, 분자동역학, 플라스마 시뮬레이션, 고차 유체역학까지. 같은 Tungsten 코드가 웨이퍼 1장에서도, 클러스터에서도 돌아간다고 한다.
- **에이전트 코딩 사례**: 연구원 1명 + 코딩 에이전트 1명이 채팅 인터페이스로 약 2주간 particle-in-cell 플라스마 시뮬레이션을 작성. 에이전트가 모든 줄을 썼고, 오픈소스 XOOPIC 참조 구현과 대조해 검증했으며, 웨이퍼 98%에서 실행됐다 — 6,000만 개 입자, 초당 7,200 타임스텝, 초당 4,300억 개 입자 업데이트(단일 시스템).
- **미검증 벤더 주장**: SNAP 핵 수송 프록시 1.6 PFLOP/s(단일 CS-4), HPCG 1.04 PFLOP/s, 웨이퍼 스케일 분자동역학이 Frontier 대비 748배 — 발표문에 독립 재현이 없어 벤더 주장으로만 기록한다. 시뮬레이터 실행 결과도 물리 웨이퍼 실측이 아니다.
- **향후**: AI 모델과 물리 시뮬레이션을 웨이퍼 위에서 결합하는 디자인 옵티마이저는 "곧 출시" 단계다.

## 맥락

- [[patterns/agent-scientific-discovery]] — 에이전트가 실제 과학 시뮬레이션 코드를 끝까지 쓰는 사례
- [[concepts/ai-orchestration]] — 코딩 에이전트의 역량 범위가 웹앱을 넘어 HPC 시뮬레이션으로 확장
- [[concepts/nvidia-nemotron-for-science]] — 같은 날 SC26 축의 과학 에이전트 스택(별도 수집)
