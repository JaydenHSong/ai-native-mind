---
title: "Google Cogentic, 하루 만에 수학 증명 6편 — 인수분해 무조건 준지수 bound 포함 (11-25)"
source_url: "https://munderdiffl.in/blog/what-is-cogentic/"
source_type: "news"
authors: ["munderdiffl.in"]
published: 2026-11-25
fetched: 2026-11-26
tags: [google, cogentic, gemini-4, math, factoring, multi-agent, lean]
status: raw
---

# Google Cogentic, 하루 만에 수학 증명 6편 — 인수분해 무조건 준지수 bound 포함 (11-25)

> Google Research가 11월 25일 멀티 에이전트 수학 증명 하네스 Cogentic이 만든 논문 6편(총 274쪽)을 GitHub에 공개했다. 인수분해의 무조건 준지수 시간 bound를 포함하며, 각 논문은 "초기 프롬프트 외 인간 개입 없이 Cogentic이 전부 만들었다"고 적혀 있다. RSA를 깨는 결과는 아니다.

## 내용

- **Cogentic이란**: Google Research·DeepMind의 멀티 에이전트 증명 발견 하네스. 여러 에이전트가 증명을 시도하고, 다른 에이전트가 적대적으로 검증하며, 검증된 단계만 원장에 기록한다. 기반 모델은 Gemini 4. 2026-09-30 arXiv 논문(Cogentic: Multi-Agent Orchestration for Automated Proof Discovery)으로 소개됨.
- **공개된 6편 (11-25 커밋, google-research 저장소)**: 무조건 인수분해 L_N[1/3, O(1)] (랜덤화, 54쪽), 무조건 결정적 준지수 인수분해 (59쪽), 고정 특성 유한체 이산로그 준다항 시간 (36쪽), 1/5-근사 내시 균형 다항 시간 알고리즘 (41쪽), 로그-랭크 추측 제곱근 장벽 돌파 (37쪽), 선형 밀도 단순 그래프 간선 재구성 (47쪽).
- **인수분해 bound**: 랜덤화 버전은 0-오류 Las Vegas 알고리즘으로 모든 정수 N을 기대 시간 L_N[1/3, 105]에 완전 인수분해한다고 주장. 결정적 버전은 exp(3 (ln N)^{3/4}) 수준의 준지수 bound. 둘 다 미증명 가정이 없는 '무조건' 결과라고 주장.
- **RSA는 안 깨짐**: bound는 준지수(subexponential)이지 다항 시간이 아니며, 상수 105는 범용 수체 체(GNFS)의 ~1.923보다 훨씬 크다. Scott Aaronson은 "어느 것도 깨지 않는다(None of them breaks anything)"고 정리. '인수분해를 다항 시간에 풀었다'는 소문은 별개의 미확인 루머.
- **검증 상태**: 공개 시점에 Lean 4 형식화 파일은 저장소에 0개. README는 "모든 증명의 Lean 4 형식화를 후속 제출로 공개하겠다"고만 적음. 외부 수학자의 독립 검증은 아직 없음.

## 맥락

- OpenAI의 수학 원고 9편(11-24, 행렬곱 지수 9/4 등)과 같은 주에 나온 'AI가 수학 증명을 만든다'는 두 번째 대형 사례 — 이번엔 검증 파이프라인(적대적 검증+원장)까지 갖춘 하네스 형태
- 위키의 멀티 에이전트 오케스트레이션·에이전트 과학 발견·Lean 형식 검증 주제와 직결
