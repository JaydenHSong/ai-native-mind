---
title: "Mecka AI의 로봇 모션 데이터 — '로봇의 Scale AI' ($60M Series B)"
category: concepts
tags: [mecka-ai, robotics, motion-data, sequoia, series-b, physical-ai, data-infrastructure, egoverse, human-demonstration]
created: 2026-10-10
updated: 2026-10-10
sources:
  - "raw/articles/2026-10-10-mecka-ai-60m-series-b.md"
related:
  - "[[concepts/robojepa-robot-scaling-laws]]"
  - "[[concepts/amd-world-labs-physical-ai]]"
  - "[[comparisons/frontier-lab-economics]]"
status: draft
confidence: medium
---

# Mecka AI의 로봇 모션 데이터 — '로봇의 Scale AI' ($60M Series B)

## 쉽게 읽기

**비유**: LLM은 인터넷의 글을 긁어모아 똑똑해졌다. 로봇은 "사람이 컵을 어떻게 드는지"를 긁어모을 인터넷이 없다. Mecka는 사람들에게 바디 센서를 채워 일상 동작을 찍게 하고, 그 데이터를 로봇 회사에 판다 — 로봇 시대의 데이터 장사.

| 용어 | 풀이 |
|------|------|
| **Egocentric 캡처** | 텔레오퍼레이션(원격 조종)이 아니라 수행자 본인의 시점에서 동작을 기록하는 방식 |
| **EgoVerse** | Mecka의 휴먼 모션 데이터셋 (1,362시간·80,000 에피소드·2,087명) |

## 한줄 정의

토론토 로봇 데이터 스타트업 Mecka AI가 2026-10-07 Sequoia 주도 $60M Series B(밸류 $5억) 조달 — 바디 센서 착용자의 일상 동작을 기록해 휴먼 모션 데이터를 판매하는 "로봇의 Scale AI" (TechCrunch·FT 인용).

## 핵심 내용

- 조달: $60M Series B, Sequoia Capital 리드, 밸류 $5억 (TechCrunch 10/7). 신규 투자 NVIDIA·Qualcomm Ventures·Samsung·M12. 엔젤: Tony Xu(DoorDash)·Frank Slootman(전 ServiceNow/Snowflake)·Milan Kovac(전 Tesla Optimus).
- 사업 모델: 로봇을 만들지 않는다. 바디 센서 + 스마트폰 착용자가 일상 작업(커피 만들기·차 수리·세탁물 개기)을 수행 → 휴먼 모션 데이터 수집·가공 → 휴머노이드 훈련 랩에 판매.
- 핵심 명제: "Motion, contact, force and geometry aren't on the internet. You can't scrape them, license them or buy them." — 웹 스크래핑으로 얻을 수 없는 물리 상호작용 데이터.
- EgoVerse: 1,362시간 기록 데모·80,000 에피소드·2,087명 시연자. 센서 200fps로 관절 각도·힘·타이밍 캡처, 스마트폰 다각도 동기화 비디오.
- 재무 (회사 주장, 미검증): 2026년 6월 연환산 매출 run-rate $1억 돌파, 연말 $3억 목표. 직원 60명 미만.
- 경쟁: XDOF(Series B $12억 밸류 협상 중), Micro1($5억), Scale AI·Surge·Mercor의 로봇 데이터 확장 — 로봇 훈련 데이터가 AI 인프라에서 가장 빠르게 성장하는 세그먼트 중 하나.
- 창업진: CEO Josh Gao 등 4명, 핀테크·크립토 출신으로 로보틱스 배경 없음 — 텔레오퍼레이션 대신 egocentric 캡처라는 단순한 접근의 배경.
- FT(10/10): 로보틱스 랩들이 '로봇 체육관'에서 데이터 수집 중 — 업계 전반의 데이터 인프라 투자 흐름.

## 왜 중요한가

- **스케일링 법칙의 병목 이동**: [[concepts/robojepa-robot-scaling-laws]]가 "연산을 늘리면 성능이 예측 가능하게 오른다"를 증명하면, 다음 병목은 연산이 아니라 데이터. Mecka는 그 데이터 병목에 베팅하는 인프라 레이어 — 법칙의 경제적 귀결.
- **physical AI의 3축**: 하드웨어(AMD/Nvidia) vs 오픈 모델(Meta)에 이어 데이터(Mecka/XDOF) 축이 자본을 끌어당김 — "로봇의 Scale AI" 프레이밍은 LLM 데이터 레이블링 산업의 재현.
- **데이터 장사의 단위 경제**: 60명 미만으로 run-rate $1억(주장) — 데이터 인프라의 마진이 하드웨어보다 가벼운 구조. 검증 전까지는 주장 단계.

## 관련 개념

- [[concepts/robojepa-robot-scaling-laws]] — 스케일링 법칙이 성립하면 병목은 데이터. Mecka는 그 병목의 인프라 베팅.
- [[concepts/amd-world-labs-physical-ai]] — physical AI 축의 하드웨어(AMD $8.2B 인수) vs 데이터(Mecka) 양극.
- [[comparisons/frontier-lab-economics]] — 에이전트 랩(Manus·Nous)에 이은 데이터 인프라 자본 집중.

## 참고 소스

- [Mecka AI, Sequoia 주도 $60M 시리즈B — 로봇 훈련용 휴먼 모션 데이터 (TechCrunch 10/7·FT 10/10)](raw/articles/2026-10-10-mecka-ai-60m-series-b.md)
