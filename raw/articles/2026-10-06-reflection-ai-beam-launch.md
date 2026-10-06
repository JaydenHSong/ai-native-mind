---
title: "Reflection AI, 오픈 웨이트 'Beam' 출시 — 501B MoE, Apache 2.0, 미국 오픈 웨이트의 실전 데뷔"
source_url: "https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/"
source_type: "news"
authors: ["techcrunch"]
published: 2026-10-05
fetched: 2026-10-06
tags: [reflection-ai, beam, open-weights, nvidia, moe, deepseek, qwen, apache-2.0]
status: raw
---

# Reflection AI, 오픈 웨이트 'Beam' 출시 (10/5)

> 10/4 Axios '출시 임박' 단독 보도의 실제 출시. 텍스트 전용 MoE 501B(활성 23B), Apache 2.0 라이선스, 이달 중 가중치·기술 리포트 공개.

## 내용

- Beam: 텍스트 전용 mixture-of-experts. 전체 파라미터 501B / 활성 23B, 23.8T 토큰 프리트레인, 1M 토큰 컨텍스트 윈도우 (비교: Z.ai GLM-5.2 ~744B/40B 활성).
- 자체 보고 벤치마크: 고도 추론에서 GLM-5.2와 동급, 서구권 선도 오픈 모델 대비 "3~4배 적은 추론 컴퓨트"로 경쟁. tech-insider 인용 수치: SWE-Bench Verified 80.9, Terminal-Bench 2.1 80.1, AIME 2026 97.8 — 독립 검증 없음.
- 가중치 + 기술 리포트를 Apache 2.0으로 2026년 10월 중 공개. 레드팀 기간에는 waitlist 조기 접근.
- 회사 배경: 2024년 전 DeepMind Misha Laskin·Ioannis Antonoglou 창업. PitchBook 기준 누적 ~$4.7B 조달 (Nvidia·Sequoia·Lightspeed), 최근 라운드 기업가치 ~$25B pre-money. 2029년까지 $7B+ 컴퓨트 계약 — SpaceX $6.3B (Colossus 2의 GB300) + Nebius $1B. 한국 신세계그룹과 '소버린 AI 팩토리' 파트너십 테스트 중.

## 맥락

- 위키 concepts/reflection-open-weight(10/4 임박 보도)의 후속 — '예정' 표기를 확정 정보로 갱신해야 함 (이름 Beam·라이선스 Apache 2.0·벤치마크 공개).
- 10/6 Mistral Large 4와 같은 24시간 안에 나온 두 건의 서구권 오픈 웨이트 반격 — DeepSeek·Qwen·Z.ai(중국)에 대한 미국+유럽의 동시 대응.
- comparisons/frontier-lab-economics의 '저가 파괴자 vs 가격 결정력 인프라' 축에 미국 오픈 웨이트 행이 실제로 생긴 순간.
