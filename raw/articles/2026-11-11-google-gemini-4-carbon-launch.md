---
title: "Google, Gemini 4 Carbon 전면 공개 — 최강 모델, 11-30까지 $2/$10 (11-10)"
source_url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/?ref=thehype.news"
source_type: "news"
authors: ["Google"]
published: 2026-11-10
fetched: 2026-11-11
tags: [google, gemini-4-carbon, model-launch, cybersecurity, agents]
status: raw
---

# Google, Gemini 4 Carbon 전면 공개 — 최강 모델, 11-30까지 $2/$10 (11-10)

> Google이 11-10 Gemini 4 Carbon을 유료 개발자·기업·Ultra 구독자·과학자에게 전면 공개했다. 10-28 발표 이후 2주간 Fairwind Program 사이버 방어자 그룹에만 열려 있던 모델로, Google은 자사 최강 모델이라 설명한다. 장기 에이전트 워크플로·사이버보안·과학 추론에 특화됐고, 도입 가격은 Argon과 같은 $2/$10 per MTok이며 11-30 이후 $4/$20으로 오른다.

## 내용

- **공개 범위**: Gemini API(Google AI Studio)·Gemini for business 유료 티어, Gemini 앱 Ultra 구독자, Search AI Mode, Antigravity에서 이용 가능. 10-28 발표 때는 사이버 방어자(Fairwind) 한정 공개였고, 이번이 전면 공개다. Antigravity에는 여러 에이전트를 조율하는 /swarm 프리뷰도 함께 나왔다.
- **포지셔닝**: Argon은 대부분의 코딩·지식 작업에 권장되는 기본 모델로 남고, Carbon은 검증 루프에 토큰을 많이 쓰는 어려운 장기 과제(멀티스텝 코딩·디버깅, 아키텍처, 개방형 과학 연구)용이다. Google은 Carbon이 생각 토큰을 더 많이 쓴다고 설명한다.
- **벤치마크(Google 발표)**: Artificial Analysis Intelligence Index 59점으로 당시 1위(11-11 기준 업데이트 60점). CursorBench 4.0·Perplexity WANDR·Zapier AutomationBench 1위(차점 모델 대비 과제당 비용 2배 이상 저렴). MKA 벤치 #2이나 과제당 평균 비용은 1위 모델의 1/6. 사이버: SEC-bench Pro 88.2%·ExploitGym 54.8%·CWE-bench 71.0%. Gray Swan 프롬프트 인젝션 0.0% 공격 성공률(Argon 0.7%).
- **가격**: 11-30까지 입력 $2 / 출력 $10 per MTok(Argon 도입가와 동일), 12-01부터 $4/$20. 무료 티어에는 없음. Devin Desktop·CLI에도 탑재됐고 FrontierCode 2.0 40.0%를 기록했다.
- **의미**: 11-09 Fable 5.2·Muse Ember에 이어 11-10 Carbon까지, 3대 랩이 이틀 연속으로 에이전트용 최상위·최저가 모델을 나란히 내놨다. Carbon은 '어려운 과제용 프리미엄 추론'이라는 역할 분담을 명시해 Argon과 가격을 같게 유지하면서 사용량을 가르는 전략이다.
- **주의**: 모든 벤치는 Google 발표·선별 지표이며, The Verge는 Google이 인용한 벤치에서 Carbon이 Fable 5.2 뒤에 있다고 지적했다. AA 지수는 11-11 기준 60점으로 올랐으나 AA가 GA 이후 재측정했는지 불분명하다. 생각 토큰이 많아 실제 과제 비용은 단순 단가보다 높을 수 있다.

## 맥락

- [[concepts/gemini-4-carbon-testing]] — Gemini 4 Carbon 내부 테스트, 코딩 성능 Opus 5.5급 평가 (2026-10-10)
- [[concepts/gemini-4-argon]] — Google Gemini 4 Argon, 자체 벤치 vs 독립 지수 괴리 + gated release (2026-10-01)
- [[concepts/claude-fable-5-2-mythos-5-2]] — Anthropic Claude Fable 5.2·Mythos 5.2 출시, AA 지수 65점 1위 (2026-11-09)
- [[concepts/meta-muse-ember]] — Meta Muse Ember, 초저가 에이전트 모델 $0.10/$0.50 (2026-11-09)
- [[concepts/semianalysis-gdpx-benchmark]] — SemiAnalysis GDPx, Carbon 10.9%·Fable 5.2 12.0% (2026-11-02)
