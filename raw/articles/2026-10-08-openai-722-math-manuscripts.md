---
title: "OpenAI, 미공개 모델의 수학 논문 722건 GitHub 공개 — '영수증을 달라'는 수학계 반발과 검증 비대칭 (10/7)"
source_url: "https://decrypt.co/380366/openai-secret-ai-model-cracked-hundreds-math-problems-one-prompt"
source_type: "news"
authors: ["decrypt"]
published: 2026-10-07
fetched: 2026-10-08
tags: [openai, math, scientific-discovery, verification, lean, agmai, reproducibility]
status: raw
---

# OpenAI, 미공개 모델의 수학 논문 722건 GitHub 공개 — '영수증을 달라'는 수학계 반발과 검증 비대칭 (10/7)

> OpenAI가 10/7(화) 미공개 내부 모델이 작성한 수학 논문 722건(372개 결과 패밀리)을 GitHub에 공개. 대변인은 "단일 프롬프트를 단일 AI 에이전트에 건네 거의 모든 결과를 얻었다"고 주장, 결과당 평균 약 3시간의 ChatGPT Pro 사고 연산. 그러나 Lean 형식화는 162건(~22%)뿐이고 프롬프트는 비공개 — IAS 자문단(AGMAI)의 9/29 공개 권고를 사실상 거부. MIT Andrew Sutherland: "모델이 공개돼 재현 가능해지기 전까지 single-agent 주장은 unverified."

## 내용

- 규모: 722개 원고 = 372개 결과 패밀리. 약 4,000개 문제 중 OpenAI가 유의미하다고 판단한 것만 선별. Apache-2.0 라이선스. 레포의 GitHub Issues는 비활성화.
- 주장 내용: quasi-Riemann hypothesis(리만 가설의 약한 버전), 4차원 Kakeya 추측 해결 주장, Catalan 상수의 무리수성 등. 9월 Navier-Stokes(1만 개 에이전트·88시간)와 달리 이번엔 단일 프롬프트·단일 에이전트 주장.
- 검증 상태: Lean 형식화 메인 결과 162건(~22%). 10건에 대한 축약 추론 요약만 공개. OpenAI는 "형식화되지 않은 결과 중 일부에 문제가 있을 수 있다"고 경고. 8/1 발표 10건에 대한 arXiv 감사는 실질 오류 미확인(10월분은 미포함).
- AGMAI(고등연구소 수학·AI 자문단) 9/29 권고: 모델명 공개·프롬프트 공개·추론 요약·연산 비용 공개, 수학 결과를 모델 마케팅에 쓰지 말 것. OpenAI는 평균 연산 시간과 일부 통계만 공개, 프롬프트 미공개. 대변인: "권고에 구속되지 않는다(not bound)."
- 수학계 반응: Sutherland(MIT) "재현 전까지 unverified… 영수증을 달라" / Terence Tao "문제가 분야가 흡수하는 속도보다 빨리 수확되고 있다" / Daniel Litt(토론토) 공개 찬성 / Levent Alpöge(Anthropic) "수학사상 가장 중요한 순간". WIRED: 발표 직전 수학자들의 분노 보도, 공개 시점 약속 위반 주장.
- 정정: 어제(10/7) 수집 원본은 "377개 결과"로 기록했으나, 정확한 수치는 722개 원고 / 372개 패밀리. wiki 정제 시 정정 반영.
- 교차검증: Decrypt + aiweekly.co + aistockwire + press-report — 722/372/약 4,000문제/3시간/162건 Lean 수치 일치.

## 맥락

- patterns/agent-scientific-discovery의 사례 4 — '검증 비대칭(verification asymmetry)' 심화: 결과물은 열리고(Apache-2.0) 도구는 닫힌(미공개 모델·프롬프트·Issues 차단) 구조가 수학계의 재현 규범과 충돌.
- "발견 도구가 얼마나 열려 있나"가 과학 발견의 논점으로 이동 중 (어제 브리핑의 논점 연장).
- OpenAI·Anthropic 모두 IPO 준비 중 — 역량 과시가 투자자용이라는 수학계 해석도 기록.