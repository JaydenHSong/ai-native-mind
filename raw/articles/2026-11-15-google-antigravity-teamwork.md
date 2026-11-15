---
title: "Google Antigravity /teamwork 성과 — 에이전트 팀이 수학 난제 형식화·소프트웨어 재작성 (11-13)"
source_url: "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/"
source_type: "news"
authors: ["Google Research"]
published: 2026-11-13
fetched: 2026-11-15
tags: [google, antigravity, teamwork, multi-agent, lean, formal-verification]
status: raw
---

# Google Antigravity /teamwork 성과 — 에이전트 팀이 수학 난제 형식화·소프트웨어 재작성 (11-13)

> Google Research가 11-13 Antigravity의 멀티 에이전트 기능 /teamwork 성과를 공개했다. Gemini 4 모델 기반의 전문 에이전트 팀이 인간 전문가와 함께 수학·화학·시스템 소프트웨어의 열린 문제들을 다뤘다. Weil 추측의 기계 검증 형식화, Courtade–Kumar 추측 증명의 형식화, 커널·코덱의 Rust 재작성 등이 포함된다.

## 내용

- **방식**: /teamwork는 전문 서브에이전트 팀과 Lean 4 증명 검사기·기존 테스트 스위트·시뮬레이터 같은 자동 "반증자(falsifier)"를 짝짓는다. 워크플로우는 선언적 자기개선 자연어 패턴으로 표현되고, 프롬프트마다 가장 맞는 패턴으로 동적 라우팅된다. Gemini 4 Argon·Carbon·Hydrogen이 기반 모델이다.
- **수학**: /teamwork-LEAP이 Weil 추측(유한체 위 다항식 방정식의 해 개수, Pierre Deligne 1974년 증명)의 기계 검증 형식화를 완전 자율로 만들었다고 한다. 약 180만 줄의 Lean 코드, 서브에이전트 호출 28,800회. 2013년 Courtade–Kumar 추측의 완전한 증명을 Lean 4로 형식화해 약 5,000만 줄을 생성했다(인간 수학자와 협업). 일반 정수환 위의 Hilbert 10번 문제 증명 첫 형식화(약 92만 줄), 1927년부터 열린 Birkhoff 추측 첫 형식화, 3차원 Bochner–Riesz 추측의 최근 증명에서 빈틈을 찾아 수정한 것도 포함된다.
- **과학·소프트웨어**: NMR 데이터에서 분자 구조를 식별해 top-1 정확도 95%·top-3 100%. Zircon 마이크로커널을 메모리 안전 Rust로 재작성해 약 80만 줄 추가. libgav1을 Rust로 포팅해 C++ 원본보다 20~30% 빠르다고 한다. 9x9 바둑 엔진을 처음부터 학습했고, Google 내부 플릿 전체의 메모리 절감도 보고했다.
- **공개**: 외부 연구자·개발자가 Antigravity에서 Gemini 4 모델과 /teamwork·/boost를 오늘부터 쓸 수 있다. 학계 연구자 10,000명에게 최상위 사용 티어 6개월 무료 신청을 열었다. 정식 증명 패턴의 후속 업데이트도 예고했다.
- **검증 주의**: 독립 점검(sysnote)은 수치의 성격을 따져야 한다고 지적한다. Courtade–Kumar 5,000만 줄 중 사람이 읽을 수 있는 증명 코드는 약 23만 8,690줄이고 나머지 99.5%는 Lean 커널이 검사하는 생성된 인증서 데이터다. Weil 형식화는 저장소·논문·명세 파일이 공개되지 않아 외부에서 확인할 수 없고, Axiom이 11-06 이미 자체 Weil 형식화를 Apache 2.0으로 공개했다. 대부분 결과는 인간 전문가와 긴밀히 협업한 것이며, Google 자체 설명이라 독립 감사된 수치는 아니다.

## 맥락

- [[concepts/gemini-4-carbon-launch]] — Gemini 4 Carbon, /teamwork의 기반 모델 중 최강 멤버 (2026-11-10)
- [[concepts/gemini-4-hydrogen]] — Gemini 4 Hydrogen, 실행형 멤버·1M 컨텍스트 균일 요금 (2026-11-12)
- [[concepts/anthropic-worse-together-multi-agent]] — Anthropic 'Worse Together', 멀티 에이전트 협업의 한계를 다룬 연구와 대비 (2026-11-11)