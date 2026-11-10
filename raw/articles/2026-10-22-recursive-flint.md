---
title: "Recursive Flint — 'Eureka Machine'이 만든 40B MoE 오픈웨이트 코딩 모델"
source_url: "https://marktechpost.com/2026/10/21/recursive-releases-flint-an-open-weight-40b-moe-coding-model/"
source_type: "news"
authors: ["marktechpost.com", "biggo.ai", "aiparabellum.com", "teckhustlers.com", "tokenpost.com", "startupfortune.com", "dailyaibrief.ai"]
published: 2026-10-21
fetched: 2026-10-22
tags: [recursive, flint, open-weight, coding-model, moe, rsi, eureka-machine, richard-socher]
status: raw
---

# Recursive Flint — 'Eureka Machine'이 만든 40B MoE 오픈웨이트 코딩 모델

> 2026-10-21 리처드 소처 (Richard Socher) 의 스타트업 Recursive가 오픈웨이트 코딩 모델 Flint를 공개. MoE 구조 — 총 39.8B 중 토큰당 약 2.5B만 활성화. 컨텍스트 최대 512K (권장 256K). Apache 2.0 라이선스로 Hugging Face 공개. 벤치마크 (업체 측정): SWE-bench Verified 74.2% · SWE-bench Pro v2 89.7% · Terminal-Bench 2.1 54.9% — 50B 이하 MoE 중 최상위급. M4 Pro 맥북 프로에서 약 131 tokens/sec. 회사 발표에 따르면 자사 자동 연구 시스템 "Eureka Machine"이 아키텍처 탐색·학습 방법·GPU 커널 튜닝까지 거의 전 과정을 담당했고, 4개월 미만 소규모 팀으로 완성. Recursive는 5월 스텔스 탈피, GV·Nvidia·AMD Ventures 등에서 6.5억 달러 유치 (밸류 46.5억 달러). (marktechpost.com·biggo.ai·aiparabellum.com·teckhustlers.com·tokenpost.com·startupfortune.com·dailyaibrief.ai 교차)

## 내용

- **모델**: Flint — 총 39.8B MoE (토큰당 활성 약 2.5B), 컨텍스트 512K (권장 256K), Apache 2.0.
- **성능 주장** (업체 측정, 독립 검증 없음): SWE-bench Verified 74.2%, SWE-bench Pro v2 89.7%, Terminal-Bench 2.1 54.9%. M4 Pro에서 ~131 tok/s 로컬 구동.
- **제작 과정**: "Eureka Machine" (Recursive의 자동 연구 시스템) 이 아키텍처 탐색·학습 방법·GPU 커널 튜닝 등 거의 전 과정을 주도 — 4개월 미만, 소규모 팀.
- **회사**: 5월 스텔스 탈피. GV·Nvidia·AMD Ventures 등에서 $6.5억 유치, 밸류에이션 $46.5억.
- **의의**: RSI (Recursive Self-Improvement) 의 첫 공개 실증 사례 주장 — AI가 AI 연구 파이프라인의 대부분을 수행.

## 맥락

- [[concepts/self-improving-ai-risk]] — 자기개선 AI의 통제 상실 리스크 (frominside.ai 증언, 2026-09-30) — Flint는 RSI의 공개 실증 주장이라는 점에서 이 페이지의 반대편 증거로 기록 가치.
- [[concepts/nvidia-nemotron-3-5-bolt]] — NVIDIA Nemotron 3.5 Bolt, RTX Spark용 오픈웨이트 에이전틱 모델 (2026-10-14) — 로컬/에지 코딩 모델 축의 경쟁 구도.
- [[concepts/meta-muse-spark-open]] — Meta Muse Spark Open, 816B MoE 오픈웨이트 (2026-10-16) — 오픈웨이트 프론티어 확장 흐름.
