---
title: "중국 프론티어 모델 6종에서 Blackwell GPU 지문 발견 — 수출 통제 칩 사용 정황 (11-12)"
source_url: "https://unemploymentlabs.com/checkpoint-forensics"
source_type: "news"
authors: ["Unemployment Labs"]
published: 2026-11-12
fetched: 2026-11-15
tags: [blackwell, china, deepseek, kimi, minimax, export-controls, forensics]
status: raw
---

# 중국 프론티어 모델 6종에서 Blackwell GPU 지문 발견 — 수출 통제 칩 사용 정황 (11-12)

> Will DePue(Unemployment Labs, 전 OpenAI 연구원)가 11-12 발표한 체크포인트 포렌식 보고서: 중국 4개 랩의 최신 모델 6종이 공개 가중치에 미국 수출 통제 대상인 NVIDIA Blackwell GPU의 초기화 지문을 남겼다. 이전 세대 모델은 Hopper 지문을 보인다. 보고서는 칩의 위치·입수 경로·법 위반 여부는 입증하지 않는다고 명시한다.

## 내용

- **방법**: 모델 가중치의 초기값 흔적을 되짚는다. PyTorch가 Philox 난수 생성기로 초기 가중치를 채울 때 GPU의 SM(스트리밍 멀티프로세서) 수만큼 스레드를 나눠 배치하는데, SM 수가 다르면 같은 시드라도 가중치 배열이 달라진다. Hopper H100/H200/H800은 132 SM, Blackwell B200/B300은 148 SM, GB200/GB300은 152 SM이다. 훈련 중 바뀌지 않은 가중치 행에서 초기 배열을 복원해 칩을 식별한다.
- **대상 6종**: DeepSeek-V4-Flash(B200/B300)·DeepSeek-V4-Pro(GB200/GB300)·Kimi K3(GB200/GB300)·Kimi K3.1-Pro(GB200/GB300)·MiniMax-M3(B200/B300)·Ant Group Ling-3.1-flash(GB200/GB300). 전부 2026-04 이후 출시. 같은 회사의 이전 모델(DeepSeek-V3, Kimi K2/K2.5, MiniMax-M2.7, Ling-3.0-flash)은 Hopper 지문이다.
- **신뢰도**: 6종 각각의 증거 강도는 49~1,385 시그마. 약 6조 개 시드·레이아웃 조합을 탐색했을 때 우연한 일치가 낼 수 있는 최대치는 약 8 시그마라, 우연이 아니라는 주장이다. DeepSeek-V4-Flash와 Kimi K3는 실제 Blackwell 칩에서 직접 대조해 확인했다. 하드웨어가 공개된 모델 24종에 이 방법을 적용했더니 전부 공개 내용과 일치했다.
- **규모 추정**: Kimi K3 약 4,500개·DeepSeek-V4-Pro 약 3,000개 등 5개 학습 실행 합계 약 12,000개의 Blackwell GPU(범위 7,000~22,000개), 실행 기간 50~100일. 가장 큰 클러스터 약 2억~3억 달러, 5개 합계 5억 달러 이상으로 추산한다. 단 효율(MFU)·학습 토큰 수·실행 기간이 가정에 의존해 저자 스스로 "자신 있지 않다"고 밝힌다. 수정 전 초안은 2,000~3,000개·1.5억~2억 달러였고 11-12에 상향 수정됐다.
- **한계**: 지문은 가중치를 만든 하드웨어를 가리킬 뿐, 학습 전체가 그 칩에서 돌아갔는지·칩이 어디에 있었는지·어떻게 입수했는지·수출 통제를 위반했는지는 보여주지 않는다. 특별히 설정한 AMD 하드웨어도 대안으로 거론되나, DeepSeek-V4-Flash에서는 배제했고 나머지 5종에서도 "매우 unlikely"하다고 본다. DeepSeek-V4.1-Flash에서는 지문을 찾지 못했는데, 이는 Ascend 사용의 증거가 아니라 null 결과다.
- **전환하지 않은 랩**: Alibaba(Qwen)·Zhipu(GLM)·Tencent·Xiaomi·StepFun의 최신 모델은 여전히 Hopper로 읽힌다. Meituan은 LongCat-2.0을 "AI ASIC superpod"에서 학습했다고 밝혔고, 공개 가중치에서 NVIDIA 지문이 나오지 않았다.
- **반향**: TechCrunch가 11-13 요약 보도했고, 엔지니어 Peter Liu가 CPU만으로 같은 SM 피크·시드를 복원하는 재현 스크립트를 오픈소스 공개했다. 저자는 방법이 공개된 이상 랩들이 지문을 지울 수 있다고 밝혔다.

## 맥락

- [[concepts/nvidia-huang-ousted-ceo]] — NVIDIA CEO 사임·보드 조사, Blackwell 수급을 둘러싼 정치·시장 맥락 (2026-11-12)
- [[concepts/meituan-longcat-2-5]] — 같은 날 Meituan LongCat-2.5, 중국 칩만으로 학습한 정반대 사례 (2026-11-15)
- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro 예고, 이번 지문이 확인된 모델 계열 (2026-10-24)