---
title: "Kimi K3.1 Pro 오픈 웨이트 공개 — 2.8T MoE, 약속한 11-04 당일 Hugging Face 게시"
source_url: "https://explainx.ai/blog/kimi-k3-1-pro-open-weights-benchmarks-price-terminal-bench-nov-4-2026"
source_type: "news"
authors: ["ExplainX"]
published: 2026-11-04
fetched: 2026-11-05
tags: [moonshot, kimi, open-weights, moe, agents]
status: raw
---

# Kimi K3.1 Pro 오픈 웨이트 공개 — 2.8T MoE, 약속한 11-04 당일 Hugging Face 게시

> Moonshot AI가 11-04 Kimi K3.1 Pro의 전체 가중치를 Hugging Face(moonshotai/Kimi-K3.1-Pro)에 공개했다. 10-23 출시 때 약속한 기한을 지킨 것이다. 2.8T 파라미터 MoE, 1M 토큰 컨텍스트, 1.56TB 분량이며, 라이선스는 수익 조건부 별도 계약 조항이 붙은 자체 라이선스다. 기존 위키 페이지(10-24)의 후속 업데이트 건이다.

## 내용

- **스펙**: 총 2.8T 파라미터, 토큰당 활성 104B, 전문가 896개 중 16개 선택. 93층, 컨텍스트 1,048,576 토큰, MoonViT-V2 비전 인코더 401M. MXFP4 가중치·MXFP8 활성화(양자화 인식 학습). 가중치 파일 96개, 총 약 1.56TB. 접근 게이트 없음.
- **라이선스**: Kimi K3.1 Pro License, K3 라이선스와 사실상 동일 문구. 대부분 사용자에게는 MIT 스타일로 자유롭게 사용·변경·판매 가능하나, 12개월 매출 $20M 초과 모델-서비스 사업자는 상업 이용 전 Moonshot과 별도 계약이 필요하다. 표준 오픈소스 라이선스가 아니다.
- **벤치마크(자체 표 기준)**: Terminal-Bench 4.0 65.7%, Claude Opus 5.5 66.4%·GPT-6 Astra 58.2%와 비교. Moonshot 자체 표에서 Opus 5.5보다 앞선 항목이 37개 중 16개, 최대 격차 5.4점, 뒤처진 항목은 최대 33.5점. 수치는 Moonshot 자체 보고이며 하네스 표기 있음.
- **실행 비용**: vLLM 기준 8개 데이터센터 GPU(각 288GB VRAM) 필요. 11-04 기준 GGUF 빌드 없음. 호스티드 API는 kimi-k3.1-pro로 $2 입력/$10 출력(백만 토큰당) 유지.
- **미확인 사항**: GPT-6 Astra 출력으로 학습했다는 보도는 미확인 상태로 남아 있다. 독립 평가는 가중치 공개 이후에나 가능하다.

## 맥락

- [[concepts/moonshot-kimi-k31-pro]] — K3.1 Pro 출시 예고와 스펙 (10-24)
- [[concepts/deepseek-v41-flash-1017]] — 오픈웨이트 경쟁 모델의 가격 비교축
- [[concepts/meta-muse-spark-open]] — 오픈웨이트 프론티어 모델의 로컬 구동 맥락
