---
title: "Cerebras Tungsten — 연구원 1명 + 코딩 에이전트 1명이 쓴 웨이퍼 스케일 코드"
category: concepts
tags: [cerebras, tungsten, agentic-coding, hpc, wafer-scale-engine, plasma, particle-in-cell, paint]
created: 2026-11-17
updated: 2026-11-17
sources:
  - "raw/articles/2026-11-17-cerebras-tungsten-wafer-scale-code.md"
related:
  - "[[patterns/agent-scientific-discovery]]"
  - "[[concepts/nvidia-nemotron-for-science]]"
  - "[[concepts/ai-orchestration]]"
  - "[[patterns/agentic-coding]]"
status: draft
confidence: low
---

# Cerebras Tungsten — 연구원 1명 + 코딩 에이전트 1명이 쓴 웨이퍼 스케일 코드

## 쉽게 읽기

**비유**: 웨이퍼 한 장에 90만 개 코어를 박은 슈퍼컴퓨터는 원래 프로그래밍이 너무 어려워 전문가만 다뤘다. Cerebras가 "사람 말로 적으면 기계가 알아서 나눠 주는" 새 언어를 내놨고, 연구원 한 명이 코딩 에이전트와 채팅만으로 2주 만에 플라스마 시뮬레이션을 완성했다 — 웨이퍼의 98%에서 돌아갔다.

| 용어 | 풀이 |
|------|------|
| **WSE (Wafer-Scale Engine)** | 칩 하나가 웨이퍼 한 장 크기인 Cerebras의 슈퍼컴퓨터 — 90만 개 코어 |
| **Tungsten** | WSE를 고수준으로 프로그래밍하는 새 언어 + 컴파일러 |
| **Paint** | 타일의 배치·연결을 적는 Tungsten의 동반 언어 |
| **Particle-in-cell (PIC)** | 입자의 움직임을 셀로 나눠 계산하는 플라스마 시뮬레이션 기법 |
| **PFLOP/s** | 초당 1,000조 번의 부동소수점 연산 — 슈퍼컴퓨터 성능 단위 |

## 한줄 정의

Cerebras가 웨이퍼 스케일 엔진(WSE, 90만 코어)용 고수준 언어·컴파일러 **Tungsten**과 HPC 앱·튜토리얼 모음 **Aviary**를 출시했다(2026-11-16). 중심 사례는 연구원 1명과 코딩 에이전트 1명이 채팅만으로 약 2주 만에 작성한 입자-셀(particle-in-cell) 플라스마 시뮬레이션으로, 웨이퍼의 98%에서 돌아갔다.

## 핵심 내용

- **발표**: 2026-11-16, Cerebras 블로그 "High-Level Code, Wafer-Scale Performance"(공동창업자 Michael James, 1차 출처). Tungsten과 Aviary는 labs.cerebras.ai에서 연구 미리보기(research preview)로 제공된다.
- **Tungsten이란**: WSE를 고수준으로 프로그래밍하는 언어 + 컴파일러. 각 처리 타일이 무엇을 계산하고 어떤 데이터를 주고받는지를 적는 Tungsten과, 타일의 배치·연결을 적는 동반 언어 **Paint**의 2개 언어 모델이다. 컴파일러가 아키텍처 전체 모델을 갖고 있어 코드를 접근 패턴 레지스터·이벤트 기반 태스크·패브릭 호출·루프 명령어로 매핑한다.
- **Aviary**: Tungsten으로 쓴 고성능 앱·튜토리얼 모음. 열 방정식·Gray-Scott 반응-확산 스텐실부터 입자 수송, 희소 솔버, FFT, 분자동역학, 플라스마 시뮬레이션, 고차 유체역학까지. 같은 Tungsten 코드가 웨이퍼 1장에서도, 클러스터에서도 돌아간다고 한다.
- **에이전트 코딩 사례**: 연구원 1명 + 코딩 에이전트 1명이 채팅 인터페이스로 약 2주간 particle-in-cell 플라스마 시뮬레이션을 작성. 에이전트가 모든 줄을 썼고, 오픈소스 XOOPIC 참조 구현과 대조해 검증했으며, 웨이퍼 98%에서 실행됐다 — **6,000만 개 입자, 초당 7,200 타임스텝, 초당 4,300억 개 입자 업데이트**(단일 시스템).
- **향후**: AI 모델과 물리 시뮬레이션을 웨이퍼 위에서 결합하는 디자인 옵티마이저는 "곧 출시" 단계다.

## 왜 중요한가 (1인 개발자 관점)

1. **코딩 에이전트의 영역이 웹앱을 넘어 HPC로**: [[patterns/agentic-coding]]이 "코드를 통째로 작성"하는 방식이라면, 이번엔 그 코드가 웨이퍼 스케일 시뮬레이션이다. 에이전트가 다루는 코드의 "난이도 천장"이 한 단계 올라갔다 — 그것도 채팅만으로, 2주 만에.
2. **검증 방식이 본질이다**: 에이전트가 쓴 코드를 오픈소스 XOOPIC 참조 구현과 대조해 검증했다는 점이 이 사례의 진짜 교훈이다. [[patterns/agent-scientific-discovery]]의 "검증 주체 분리" 원칙 — 발견(작성)한 에이전트와 검증(대조) 기준이 분리돼 있어야 한다는 것 — 이 그대로 적용된 사례다.
3. **언어가 하드웨어의 문턱을 낮춘다**: WSE 프로그래밍은 원래 전문가 영역이었다. Tungsten처럼 "무엇을 계산하는지"만 적으면 컴파일러가 나머지를 맡는 언어는, 1인 개발자가 슈퍼컴퓨터급 하드웨어에 닿는 길을 연다. 하네스의 추상화 계층이 한 단 더 올라간 셈이다.
4. **같은 날의 과학 에이전트 축**: NVIDIA Nemotron for Science(화학 추론)와 짝을 이룬다 — 과학 에이전트 스택이 "추론"과 "시뮬레이션" 두 갈래로 동시에 열리고 있다.

## 한계 (명시)

- **미검증 벤더 주장**: SNAP 핵 수송 프록시 **1.6 PFLOP/s**(단일 CS-4), HPCG **1.04 PFLOP/s**, 웨이퍼 스케일 분자동역학이 Frontier 대비 **748배** — 발표문에 독립 재현이 없어 벤더 주장으로만 기록한다. 시뮬레이터 실행 결과도 물리 웨이퍼 실측이 아니다.
- 에이전트 코딩 사례의 수치(6,000만 개 입자·초당 7,200 타임스텝)도 Cerebras 발표 기준이며 독립 검증이 없다.
- Tungsten·Aviary는 연구 미리보기(research preview) 단계 — 정식 제품이 아니다.
- confidence는 **low** — 단일 벤더 1차 출처이며, 핵심 성능 수치가 미검증 벤더 주장이다.

## 관련 개념

- [[patterns/agent-scientific-discovery]] — 에이전트가 실제 과학 시뮬레이션 코드를 끝까지 쓰는 사례
- [[concepts/nvidia-nemotron-for-science]] — 같은 날 SC26 축의 과학 에이전트 스택 (2026-11-16)
- [[concepts/ai-orchestration]] — 코딩 에이전트의 역량 범위가 웹앱을 넘어 HPC 시뮬레이션으로 확장
- [[patterns/agentic-coding]] — 에이전트가 코드를 통째로 작성하는 방식, 신뢰성은 워크플로의 속성

## 참고 소스

- [Cerebras Tungsten — 연구원 1명 + 코딩 에이전트 1명이 쓴 웨이퍼 스케일 코드 (Cerebras 블로그·Michael James, 11-16)](raw/articles/2026-11-17-cerebras-tungsten-wafer-scale-code.md)
