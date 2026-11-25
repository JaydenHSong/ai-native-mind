---
title: "OpenAI, GPT-6 단백질 설계 능력 공개 — 추론·코드로 미니바인더 설계, 실험실 결합 확인 (11-24)"
source_url: "https://theparameter.ai/a/gpt-6-protein-design/"
source_type: "news"
authors: ["The Parameter"]
published: 2026-11-24
fetched: 2026-11-25
tags: [openai, gpt-6, protein-design, science, preprint]
status: raw
---

# OpenAI, GPT-6 단백질 설계 능력 공개 — 추론·코드로 미니바인더 설계, 실험실 결합 확인 (11-24)

> OpenAI가 11월 24일 GPT-6 모델이 단백질 구조와 아미노산 서열을 추론과 일반 코드만으로 설계할 수 있다고 발표했다. 프리프린트 「GPT-6 as a Universal Foundation Model for Protein Biology: Beyond Specialized Models」와 연구 포스트가 같은 날 공개됐고, 연구 파트너 Onava와의 실험실 검증에서 322개 미니바인더 중 35개(10.9%)가 표적에 결합했다.

## 내용

- **핵심 주장**: GPT-6 계열이 전용 생물학 모델 없이 추론과 범용 코딩 도구만으로 새로운 단백질 구조·서열을 설계. 자연어 지시(결합 위치, 코일·가닥 수, 전체 형태)로 설계 수행.
- **실험실 검증 (Onava)**: GPT-6.2 사전 공개 버전이 설계한 3D 구조 기반 미니바인더 322개를 5개 표적(PD-L1, IL-7Rα, TrkA, VEGF-A, IL-17A)에 테스트 — 35개(10.9%) 결합 확인. 표적별 IL-17A 18개, VEGF-A 8개, PD-L1 5개, IL-7Rα 3개, TrkA 1개. 원래 RFdiffusion 연구보다 낮은 적중률이며, 필터 기준과 결합 정의에 따라 달라진다고 OpenAI도 명시.
- **기존 구조 재설계**: 알려진 미니바인더 서열 재설계에서 MDM2 75/88개(85%), VEGF-A 26/42개(62%), PD-1 8/59개(14%)가 결합 유지. 새 서열로 만든 107개 단백질 중 14개(13.1%) 결합. 높은 역접힘(inverse-folding) 정확도는 암기(memorization) 영향일 수 있다고 OpenAI가 언급.
- **14개 단백질 과제 계산 평가**: 최신 내부 모델이 대부분 과제에서 전용 시스템과 대등하거나 우수. 단, 완전한 단백질 구조 예측은 명확한 약점 — 내부 모델 평균 TM-score 0.38 vs 전용 구조예측 모델 ESMFold2 0.93.
- **한계 명시**: 설계 캠페인은 Boltz-2, OpenDDE, ESMFold2 같은 전용 구조예측 모델로 후보를 걸렀고, SolubleMPNN이 아미노산 서열을 제공. OpenAI는 "전용 모델 도움 없이 처음부터 끝까지(end-to-end) 제로샷으로 미니바인더를 만들 수 있다는 것을 아직 입증하지 못했다"고 직접 밝힘.
- **결합 ≠ 기능**: 특이성·안정성·생물학적 활성·안전성·효능은 미확인. OpenAI는 같은 능력이 오용될 수 있다며 Preparedness Framework(바이오보안 중심)를 언급.

## 맥락

- 범용 프론티어 모델이 전문 도메인 파이프라인과 경쟁하는 '울퉁불퉁한 능력 경계(jagged capability frontier)'의 실증 사례 — 과학 분야가 벤치마크를 넘어 실험실 결과로 모델을 평가받는 첫 분야
- 위키의 GPT-6 계열·과학 에이전트·모델 평가 주제와 직결
