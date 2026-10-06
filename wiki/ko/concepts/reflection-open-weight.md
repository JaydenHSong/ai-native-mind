---
title: "Reflection AI 'Beam' — Nvidia 지원 오픈 웨이트, 미국의 DeepSeek·Qwen 대항마 (출시)"
category: concepts
tags: [reflection-ai, open-weights, nvidia, deepseek, qwen, open-source-models]
created: 2026-10-05
updated: 2026-10-06
sources:
  - "raw/articles/2026-10-05-reflection-ai-open-weight-imminent.md"
  - "raw/articles/2026-10-06-reflection-ai-beam-launch.md"
related:
  - "[[comparisons/frontier-lab-economics]]"
  - "[[patterns/mid-tier-performance-inversion]]"
status: draft
confidence: medium
---

# Reflection AI 오픈 웨이트 모델 (출시 임박)

## 한줄 정의

전 Google DeepMind 연구원 2인이 설립한 Nvidia 지원 스타트업 Reflection AI의 첫 오픈 웨이트 파운데이션 모델 'Beam' (2026-10-05 출시). 미국의 DeepSeek·Qwen 대항마 프레임.

## 핵심 내용

- Axios 단독 (2026-10-04, 소식통): Reflection AI가 첫 오픈 웨이트 모델 출시를 앞두고 있음. 이달 중 공개 예상.
- 포지셔닝: 코딩·수학·비용 효율에서 오픈 웨이트 리더보드를 장악한 중국 DeepSeek·Qwen에 맞서는 "미국의 답".
- 스케일: 2029년까지 $7B+ (약 10조 원) 컴퓨트 투입 보도.
- 기업은 출시 후 프라이빗 데이터로 다운로드·커스터마이징 가능할 전망.
- **후속 확정 (10/5)**: 위 '주의'는 Beam 출시로 해소 — 모델명 Beam · 라이선스 Apache 2.0 · 벤치마크 공개. 초기 성능 예상("중국 선도 오픈 모델과 경쟁")은 자체 보고 기준으로 충족 주장 (독립 검증 없음).

## 2026-10-05 업데이트 — 'Beam' 출시: 첫 스펙 공개

10/4 Axios 임박 보도의 실제 출시 (TechCrunch, 10/5).

- **Beam**: 텍스트 전용 MoE. 전체 501B / 활성 23B 파라미터, 23.8T 토큰 프리트레인, 1M 토큰 컨텍스트 (비교: Z.ai GLM-5.2 ~744B/40B 활성).
- 자체 보고 벤치마크: 고도 추론에서 GLM-5.2와 동급, 서구권 선도 오픈 모델 대비 "3~4배 적은 추론 컴퓨트". tech-insider 인용: SWE-Bench Verified 80.9, Terminal-Bench 2.1 80.1, AIME 2026 97.8 — 독립 검증 없음.
- 가중치 + 기술 리포트를 Apache 2.0으로 10월 중 공개. 레드팀 기간에는 waitlist 조기 접근.
- 회사 스케일 확정: 누적 ~$4.7B 조달 (PitchBook, Nvidia·Sequoia·Lightspeed), 최근 라운드 ~$25B pre-money. 컴퓨트 계약: SpaceX $6.3B (Colossus 2 GB300) + Nebius $1B. 한국 신세계그룹과 '소버린 AI 팩토리' 파트너십 테스트 중.

## 왜 중요한가

오픈 웨이트 = 배포 채널 장악 싸움이라는 10/4의 관찰(Vercel AI Gateway open-weight 점유율 54%→62%)에 미국의 새 주자가 등장하는 순간이다. $7B+ 컴퓨트 투입은 오픈 웨이트도 이제 "자본 집약 게임"이 됐음을 보여준다. 실제 출시·라이선스·벤치마크가 나오면 [[comparisons/frontier-lab-economics]]의 '저가 파괴자 vs 가격 결정력 인프라' 축에 미국 오픈 웨이트 행을 추가해야 한다.

## 관련 개념

- [[comparisons/frontier-lab-economics]] — 저가 파괴자 vs 가격 결정력 인프라, DeepSeek 사례
- [[patterns/mid-tier-performance-inversion]] — 중급 모델의 플래그십 성능 역전 흐름과 오픈 웨이트의 관계

## 참고 소스

- [Reflection AI Open-Weight Model: What We Know (Axios via explainx, Oct 2026)](raw/articles/2026-10-05-reflection-ai-open-weight-imminent.md)
