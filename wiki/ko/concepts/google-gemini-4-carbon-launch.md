---
title: "Google, Gemini 4 Carbon 전면 공개 — 최강 모델, 장기 에이전트·사이버 특화 (11-10)"
category: concepts
tags: [google, gemini-4-carbon, model-launch, cybersecurity, agents, pricing]
created: 2026-11-11
updated: 2026-11-11
sources:
  - "raw/articles/2026-11-11-google-gemini-4-carbon-launch.md"
related:
  - "[[concepts/gemini-4-carbon-testing]]"
  - "[[concepts/gemini-4-argon]]"
  - "[[concepts/claude-fable-5-2-mythos-5-2]]"
  - "[[concepts/meta-muse-ember]]"
status: draft
confidence: high
---

# Google, Gemini 4 Carbon 전면 공개 — 최강 모델, 장기 에이전트·사이버 특화 (11-10)

## 쉽게 읽기

**비유**: 같은 가게에서 파는 두 대의 컴퓨터다. Argon은 빠르고 가벼워서 매일 쓰는 문서·코딩용 노트북, Carbon은 무겁지만 오래 돌리는 시뮬레이션이나 보안 감사 같은 '하루 종일 붙잡고 있어야 하는 일'용 워크스테이션이다. 가격은 당분간 똑같이 받지만, Carbon은 전기를(토큰을) 훨씬 많이 먹는다.

| 용어 | 풀이 |
|------|------|
| **Carbon** | Gemini 4 시리즈의 최상위 모델 — 장기 추론·사이버보안 특화 |
| **MKA** | 에이전트 실무 능력을 재는 벤치마크 계열 — Carbon은 #2 |
| **Fairwind Program** | Google의 사이버 방어자 대상 선별 공개 프로그램 |
| **/swarm** | Antigravity의 멀티 에이전트 조율 프리뷰 — 한 프롬프트를 에이전트 팀으로 나눔 |

## 한줄 정의

2026-11-10 — Google이 Gemini 4 Carbon을 유료 개발자·기업·Ultra 구독자·과학자에게 전면 공개했다. 10-28 발표 이후 2주간 Fairwind 사이버 방어자 그룹에만 열려 있던 자사 최강 모델로, 장기 에이전트 워크플로·사이버보안·과학 추론에 특화됐다. 도입가는 $2/$10 per MTok(11-30까지), 12-01부터 $4/$20이다.

## 핵심 내용

- **공개 범위**: Gemini API(Google AI Studio)·Gemini for business 유료 티어, Gemini 앱 Ultra 구독자, Search AI Mode, Antigravity. Antigravity에는 여러 에이전트를 조율하는 /swarm 프리뷰도 함께 나왔다. 무료 티어에는 없다.
- **포지셔닝 — Argon과 역할 분담**: Argon은 대부분의 코딩·지식 작업에 권장되는 기본 모델로 남고, Carbon은 검증 루프에 토큰을 많이 쓰는 어려운 장기 과제(멀티스텝 코딩·디버깅, 아키텍처, 개방형 과학 연구)용이다. Google은 Carbon이 생각 토큰을 더 많이 쓴다고 설명한다. 같은 가격으로 시작해 사용량으로 가르는 전략이다.
- **벤치마크(Google 발표)**: Artificial Analysis Intelligence Index 59점(발표 당시 1위, 11-11 기준 업데이트 60점). CursorBench 4.0·Perplexity WANDR·Zapier AutomationBench 1위(차점 모델 대비 과제당 비용 2배 이상 저렴). MKA 벤치 #2이나 과제당 평균 비용은 1위 모델의 1/6 수준. 사이버: SEC-bench Pro 88.2%·ExploitGym 54.8%·CWE-bench 71.0%. Gray Swan 프롬프트 인젝션 공격 성공률 0.0%(Argon 0.7%).
- **가격**: 11-30까지 입력 $2 / 출력 $10 per MTok(Argon 도입가와 동일), 12-01부터 $4/$20. Devin Desktop·CLI에도 탑재됐고 FrontierCode 2.0 40.0%를 기록했다.
- **출시 맥락**: 11-09 Fable 5.2·Muse Ember에 이어 11-10 Carbon까지, 3대 랩이 이틀 연속으로 에이전트용 최상위·최저가 모델을 나란히 내놨다. 10-28 발표→11-10 전면 공개까지 2주는 '선별 방어자 먼저, 전면 공개 나중'이라는 gated release 패턴이다.

## 왜 중요한가 (1인 개발자 관점)

1. **어려운 과제용 프리미엄 추론의 가격표가 생겼다**: Carbon은 단가가 아니라 '생각 토큰 총량'으로 비용이 정해진다. 장기 에이전트 작업을 Carbon에 맡길지 Argon에 맡길지는 과제 난이도와 검증 비용을 재는 문제라, 라우팅 기준이 가격표에서 토큰 예산으로 이동한다.
2. **사이버 특화가 모델 선택의 축이 됐다**: SEC-bench·ExploitGym·CWE-bench라는 방어 수명주기 벤치가 전면에 나왔다. 보안 작업을 맡길 모델을 고를 때 일반 코딩 벤치와는 다른 축이 필요하다는 신호다.
3. **멀티 에이전트 조율이 제품 표면으로 나왔다**: Antigravity /swarm 프리뷰는 '한 프롬프트 → 에이전트 팀'이라는 조율 자체를 제품 기능으로 파는 시도다. 하네스를 직접 짜는 1인 개발자에게는 비교 기준이 된다.

## 한계 (명시)

- 모든 벤치는 Google 발표·선별 지표이며, The Verge는 Google이 인용한 벤치에서 Carbon이 Fable 5.2 뒤에 있다고 지적했다. AA 지수는 11-11 기준 60점으로 올랐으나 GA 이후 재측정했는지 불분명하다.
- 생각 토큰이 많아 실제 과제 비용은 단순 단가보다 높을 수 있다. '과제당 비용 2배 저렴' 같은 주장은 Google이 고른 벤치·조건 기준이다.
- 10-10 내부 테스트 페이지([[concepts/gemini-4-carbon-testing]])의 수치와 이번 공개 수치는 측정 시점·조건이 달라 직접 비교하면 안 된다.

## 관련 개념

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 Carbon 내부 테스트, 코딩 성능 Opus 5.5급 평가 (2026-10-10)
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon, 자체 벤치 vs 독립 지수 괴리 + gated release (2026-10-01)
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2 출시, AA 지수 65점 1위 (2026-11-09)
- [[concepts/meta-muse-ember]] — Meta Muse Ember, 초저가 에이전트 모델 $0.10/$0.50 (2026-11-09)
- [[concepts/semianalysis-gdpx-benchmark]] — SemiAnalysis GDPx, Carbon 10.9%·Fable 5.2 12.0% (2026-11-02)

## 참고 소스

- [Google Gemini 4 Carbon 전면 공개 원본](raw/articles/2026-11-11-google-gemini-4-carbon-launch.md)