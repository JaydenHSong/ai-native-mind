---
title: "Google Antigravity /teamwork 성과 — 에이전트 팀이 수학 난제 형식화·소프트웨어 재작성 (11-13)"
category: concepts
tags: [google, antigravity, teamwork, multi-agent, lean, formal-verification]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-google-antigravity-teamwork.md"
related:
  - "[[concepts/gemini-4-carbon-launch]]"
  - "[[concepts/gemini-4-hydrogen]]"
  - "[[concepts/anthropic-worse-together-multi-agent]]"
status: draft
confidence: medium
---

# Google Antigravity /teamwork 성과 — 에이전트 팀이 수학 난제 형식화·소프트웨어 재작성 (11-13)

## 쉽게 읽기

**비유**: 어려운 수학 문제를 여러 전문가가 나눠 풀고, 검산 담당(Lean 증명 검사기)이 답을 일일이 확인해 주는 팀이다. 답이 맞는지 틀리는지 기계가 바로 판정해 주니, 에이전트들이 서로 틀린 길을 가도 금방 되돌릴 수 있다.

| 용어 | 풀이 |
| **/teamwork** | Antigravity 안에 있는 멀티 에이전트 기능. 전문 에이전트 팀이 긴 작업을 나눠 맡는다 |
| **Lean 4** | 수학 증명을 컴퓨터가 검사할 수 있는 언어로 적는 도구. 증명이 맞는지 기계가 판정한다 |
| **형식화(formalization)** | 사람이 쓴 증명을 Lean 같은 기계 언어로 옮겨 적어, 컴퓨터가 검증하게 만드는 일 |
| **Weil 추측** | 유한체 위 다항식 방정식의 해 개수를 다루는 수학의 대표 난제. Deligne이 1974년에 증명했다 |
| **반증자(falsifier)** | 에이전트의 답을 자동으로 검사해 틀린 부분을 찾아내는 장치 (증명 검사기, 테스트 스위트 등) |
| **서브에이전트** | 큰 일을 맡은 에이전트 안에서 세부 작업을 처리하는 하위 에이전트 |

## 한줄 정의

2026-11-13 — Google Research가 Antigravity의 멀티 에이전트 기능 /teamwork 성과를 공개했다. Gemini 4 모델 기반의 전문 에이전트 팀이 인간 전문가와 함께 수학·화학·시스템 소프트웨어의 열린 문제들을 다뤘다. Weil 추측의 기계 검증 형식화, Courtade–Kumar 추측 증명의 형식화, 커널·코덱의 Rust 재작성 등이 포함된다.

## 핵심 내용

- **방식**: /teamwork는 전문 서브에이전트 팀과 Lean 4 증명 검사기·기존 테스트 스위트·시뮬레이터 같은 자동 "반증자"를 짝짓는다. 워크플로우는 선언적 자기개선 자연어 패턴으로 표현되고, 프롬프트마다 가장 맞는 패턴으로 동적 라우팅된다. Gemini 4 Argon·Carbon·Hydrogen이 기반 모델이다.
- **수학**: /teamwork-LEAP이 Weil 추측(유한체 위 다항식 방정식의 해 개수, Pierre Deligne 1974년 증명)의 기계 검증 형식화를 완전 자율로 만들었다고 한다. 약 180만 줄의 Lean 코드, 서브에이전트 호출 28,800회. 2013년 Courtade–Kumar 추측의 완전한 증명을 Lean 4로 형식화해 약 5,000만 줄을 생성했다(인간 수학자와 협업). 일반 정수환 위의 Hilbert 10번 문제 증명 첫 형식화(약 92만 줄), 1927년부터 열린 Birkhoff 추측 첫 형식화, 3차원 Bochner–Riesz 추측의 최근 증명에서 빈틈을 찾아 수정한 것도 포함된다.
- **과학·소프트웨어**: NMR 데이터에서 분자 구조를 식별해 top-1 정확도 95%·top-3 100%. Zircon 마이크로커널을 메모리 안전 Rust로 재작성해 약 80만 줄 추가. libgav1을 Rust로 포팅해 C++ 원본보다 20~30% 빠르다고 한다. 9x9 바둑 엔진을 처음부터 학습했고, Google 내부 플릿 전체의 메모리 절감도 보고했다.
- **공개**: 외부 연구자·개발자가 Antigravity에서 Gemini 4 모델과 /teamwork·/boost를 오늘부터 쓸 수 있다. 학계 연구자 10,000명에게 최상위 사용 티어 6개월 무료 신청을 열었다. 정식 증명 패턴의 후속 업데이트도 예고했다.

## 왜 중요한가 (1인 개발자 관점)

1. **"검사기가 있는 일"은 에이전트에게 맡길 수 있다**: 증명 검사기·테스트 스위트처럼 맞고 틀림을 기계가 판정해 주는 일에서는 에이전트 팀이 수만 번의 시도를 스스로 검증하며 나아간다. 내 작업 중에도 "검사기"를 먼저 세우면 에이전트의 자율성을 키울 수 있다.
2. **긴 호흡의 작업 단위가 커졌다**: 28,800번의 서브에이전트 호출로 한 문제를 끝내는 규모는, 하루짜리 태스크를 넘어 "몇 주짜리 연구"를 에이전트 팀에 맡기는 방향이다.
3. **멀티 에이전트의 성공 조건이 보인다**: Anthropic의 'Worse Together'가 협업의 실패를 보여줬다면, /teamwork는 반증자(검사기)가 있을 때 협업이 성공한다는 대조 사례다. 하네스를 설계할 때 검사기 유무가 성패를 가른다.

## 한계 (명시)

- 독립 점검(sysnote)은 수치의 성격을 따져야 한다고 지적한다. Courtade–Kumar 5,000만 줄 중 사람이 읽을 수 있는 증명 코드는 약 23만 8,690줄이고 나머지 99.5%는 Lean 커널이 검사하는 생성된 인증서 데이터다.
- Weil 형식화는 저장소·논문·명세 파일이 공개되지 않아 외부에서 확인할 수 없고, Axiom이 11-06 이미 자체 Weil 형식화를 Apache 2.0으로 공개했다.
- 대부분 결과는 인간 전문가와 긴밀히 협업한 것이며, Google 자체 설명이라 독립 감사된 수치는 아니다.
- Weil 형식화가 "완전 자율"이라고 해도, 증명 검사기가 명확한 합격·불합격을 주는 특수한 영역이라 열린 현실 과제와는 거리가 있다.

## 관련 개념

- [[concepts/gemini-4-carbon-launch]] — Gemini 4 Carbon, /teamwork의 기반 모델 중 최강 멤버 (2026-11-10)
- [[concepts/gemini-4-hydrogen]] — Gemini 4 Hydrogen, 실행형 멤버·1M 컨텍스트 균일 요금 (2026-11-12)
- [[concepts/anthropic-worse-together-multi-agent]] — Anthropic 'Worse Together', 멀티 에이전트 협업의 한계를 다룬 연구와 대비 (2026-11-11)

## 참고 소스

- [Google Antigravity /teamwork 성과 원본](raw/articles/2026-11-15-google-antigravity-teamwork.md)