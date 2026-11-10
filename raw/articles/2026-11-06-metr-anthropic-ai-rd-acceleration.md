---
title: "METR, Anthropic의 AI R&D 가속 1.9배 추정 — 가속의 약 80%는 AI 덕분, 핵심 근거는 대부분 비공개 (11-05)"
source_url: "https://cellcog.ai/blog/metr-anthropic-ai-rd-acceleration/"
source_type: "news"
authors: ["METR"]
published: 2026-11-05
fetched: 2026-11-06
tags: [metr, anthropic, ai-rd-acceleration, aeci, evaluation]
status: raw
---

# METR, Anthropic의 AI R&D 가속 1.9배 추정 — 가속의 약 80%는 AI 덕분, 핵심 근거는 대부분 비공개 (11-05)

> 독립 평가 기관 METR이 11-05 Anthropic 내부에서 11주간 수행한 평가를 공개했다. Anthropic의 모델 능력 진전 속도가 2025년 10월 이전 대비 약 1.9배로 가속됐고, 그 가속의 약 80%는 AI 덕분이라는 추정이다. 다만 Anthropic이 핵심 근거의 대부분을 삭제해 공개 검증은 불가능하다.

## 내용

- **발표**: 11-05 METR "Independent Assessment of AI R&D Acceleration at Anthropic in October 2026" 공개. 8-12~10-29, 약 11주간 Anthropic 내부에서 수행된 고접근(high-access) 평가다. 상근 2.5명, 핵심 인력 인터뷰 약 15회, Anthropic 기기 사용, 내부 벤치마크 점수·학습·강화학습 정보·프로세스 지표·설문·예측을 검토했다. METR은 Anthropic으로부터 대가를 받지 않았다.
- **핵심 수치**: AECI(Anthropic 버전 Epoch Capabilities Index — 여러 벤치마크 점수를 합친 능력 지수) 기준으로, 2025년 10월 7일경 변곡점 이후 벤치마크 진전 속도가 이전 대비 약 1.9배(95% 신뢰구간 1.5~2.8배)다. 연간 진전은 15점에서 29점으로 늘었고, "지난 1년 동안 약 2년 치 진전이 있었다"는 표현이다(Claude 2.1에서 Sonnet 4.5까지의 거리). METR의 전체 주관 추정은 약 2배이나, 실제 값은 1.3~3배일 수 있다고 밝혔다. Haiku 5.5 시스템 카드의 1.7배와 달리 METR 수치는 7월 이후 학습된 미공개 모델 3종을 포함한다.
- **원인**: 가속의 약 80%가 AI 덕분이라는 주관 추정이다. 나머지 가속은 비AI 요인에서 왔고, 2025년 말에는 비AI 요인의 비중이 더 컸다. METR은 가속이 더 빠른 컴퓨트 스케일링 때문이라는 설명은 확신 있게 배제했다. 단, 80% 추정치 자체의 불확실성도 크다고 명시했다.
- **자율성 한계**: AI는 아직 모델 학습의 가장 중요한 부분에 "완전 자율적"으로 기여하지 못하고 있다. 연구자들은 완전 자율 기여가 곧 올 수 있다는 "signs of life"만 언급했다. 향후 12개월간 가속이 이어지는 것을 막을 병목은 발견되지 않았으나, 병목에 대한 METR의 판단이 평가 기간 중 여러 번 바뀌었다고 밝혔다.
- **검증 한계**: Anthropic은 비공개 정보에 대한 일방적 편집권을 행사했고, METR이 "가장 유익하다고 판단한 근거의 대부분"을 삭제했다. METR은 미공개 모델의 샘플 접근을 받지 못했고, 컴퓨트 배분 검증 계획도 Anthropic의 범위 변경으로 취소됐다. Opus 5.5 시스템 카드(9-22)의 1.53배 추세 분석은 AI에 의한 지속적 2배 가속이 내부 측정에서 나타나지 않았다고 한 바 있다.
- **안전 임계값 논쟁**: 같은 날 METR은 Anthropic 2026-08 Risk Report의 자동화 R&D 부분에 대한 검토도 공개했다. 7-15 기준 모델 위험이 낮았다는 데는 동의하나, 안전 정책의 "2x Acceleration Threshold" 조기 경보 임계값을 넘지 않았다는 Anthropic의 주장은 "논쟁 가능한 판단"에 기대며, 임계값을 이미 넘었을 가능성도 있고 공개 보고서는 가속 수준을 과소 진술한다고 봤다. 1.9배 수치와 임계값 판단은 비교 기준·평가 시점이 달라 같은 결론이 아니다.

## 맥락

- [[concepts/anthropic-s1-ipo-filing]] — Anthropic S-1 공개, 상반기 매출 $16.3B·순손실 $80.7B
- [[concepts/anthropic-workforce-report]] — Anthropic 내부 인력 보고서, 주니어 채용 27%→9%·에이전트 6배
- [[concepts/self-improving-ai-risk]] — 자기개선 AI의 통제 상실 리스크, frominside.ai 증언 + intelligence explosion 백서
- [[concepts/anthropic-s1a-q3-revenue-commitments]] — Anthropic S-1/A, Q3 매출 $16.96B·컴퓨트 약정 $895.4B
