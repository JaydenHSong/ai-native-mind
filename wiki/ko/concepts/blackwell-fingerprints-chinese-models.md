---
title: "중국 프론티어 모델 6종에서 Blackwell GPU 지문 발견 — 수출 통제 칩 사용 정황 (11-12)"
category: concepts
tags: [blackwell, china, deepseek, kimi, minimax, export-controls, forensics]
created: 2026-11-15
updated: 2026-11-15
sources:
  - "raw/articles/2026-11-15-blackwell-fingerprints-chinese-models.md"
related:
  - "[[concepts/nvidia-huang-ousted-ceo]]"
  - "[[concepts/meituan-longcat-2-5]]"
  - "[[concepts/moonshot-kimi-k31-pro]]"
status: draft
confidence: high
---

# 중국 프론티어 모델 6종에서 Blackwell GPU 지문 발견 — 수출 통제 칩 사용 정황 (11-12)

## 쉽게 읽기

**비유**: 요리할 때 도마에 남는 칼자국처럼, AI 모델을 만들 때 쓴 칩의 흔적이 모델 안에 남는다. 칩마다 자국 패턴이 달라서, 모델을 열어보면 어떤 칩으로 만들었는지 짐작할 수 있다. 이번 보고서는 중국 최신 모델 6개의 자국이 미국이 중국 수출을 막은 최신 칩(Blackwell)과 일치한다고 밝혔다.

| 용어 | 풀이 |
| **Blackwell** | NVIDIA의 최신 AI 칩 세대. B200/B300, GB200/GB300이 여기에 속한다 |
| **SM (스트리밍 멀티프로세서)** | GPU 안에서 계산을 나누어 맡는 일꾼 단위. 칩마다 개수가 다르다 (Hopper 132개, B200/B300 148개, GB200/GB300 152개) |
| **Philox** | 모델의 초기 숫자를 만드는 난수 생성 방식. 같은 씨앗(시드)과 같은 일꾼 수면 같은 숫자가 나온다 |
| **시그마(σ)** | 결과가 우연일 확률이 얼마나 낮은지를 나타내는 단위. 클수록 우연이 아니다 |
| **Hopper** | Blackwell 이전 세대의 NVIDIA AI 칩 (H100·H200·H800) |
| **수출 통제** | 미국이 특정 첨단 칩을 중국으로 보내는 데 허가를 요구하는 규제 |
| **체크포인트 포렌식** | 공개된 모델 가중치를 뒤져서 학습 과정의 흔적을 찾는 분석 방법 |

## 한줄 정의

2026-11-12 — Unemployment Labs의 Will DePue가 발표한 체크포인트 포렌식 보고서: 중국 4개 랩(DeepSeek·Moonshot AI·MiniMax·Ant Group)의 최신 모델 6종이 공개 가중치에 NVIDIA Blackwell GPU의 초기화 지문을 남겼고, 이는 수출 통제 대상 칩에 접근해 최신 모델을 만들었다는 기술적 정황이다. 단 칩의 위치·입수 경로·법 위반 여부는 입증하지 않는다.

## 핵심 내용

- **방법**: PyTorch가 Philox 난수 생성기로 모델의 초기 가중치를 채울 때, GPU의 SM 수만큼 스레드를 나눠 배치한다. SM 수가 다르면 같은 시드라도 가중치 배열이 달라진다. 훈련 중 바뀌지 않은 가중치 행에서 초기 배열을 복원해 어떤 칩으로 시작했는지 식별한다.
- **대상 6종**: DeepSeek-V4-Flash(B200/B300)·DeepSeek-V4-Pro(GB200/GB300)·Kimi K3(GB200/GB300)·Kimi K3.1-Pro(GB200/GB300)·MiniMax-M3(B200/B300)·Ant Group Ling-3.1-flash(GB200/GB300). 전부 2026-04 이후 출시됐다. 같은 회사의 이전 모델(DeepSeek-V3, Kimi K2/K2.5, MiniMax-M2.7, Ling-3.0-flash)은 Hopper 지문을 보인다.
- **신뢰도**: 6종 각각의 증거 강도는 49~1,385 시그마. 약 6조 개 시드·레이아웃 조합을 탐색했을 때 우연한 일치가 낼 수 있는 최대치는 약 8 시그마라 우연이 아니라는 주장이다. DeepSeek-V4-Flash와 Kimi K3는 실제 Blackwell 칩에서 직접 대조해 확인했다. 하드웨어가 공개된 모델 24종에 이 방법을 적용했더니 전부 공개 내용과 일치했다.
- **규모 추정**: Kimi K3 약 4,500개·DeepSeek-V4-Pro 약 3,000개 등 5개 학습 실행 합계 약 12,000개의 Blackwell GPU(범위 7,000~22,000개), 실행 기간 50~100일. 가장 큰 클러스터 약 2억~3억 달러, 5개 합계 5억 달러 이상으로 추산한다. 단 효율·학습 토큰 수·실행 기간이 가정에 의존해 저자 스스로 확신하지 않는다고 밝힌다.
- **전환하지 않은 랩**: Alibaba(Qwen)·Zhipu(GLM)·Tencent·Xiaomi·StepFun의 최신 모델은 여전히 Hopper로 읽힌다. Meituan은 LongCat-2.0을 "AI ASIC superpod"에서 학습했다고 밝혔고, 공개 가중치에서 NVIDIA 지문이 나오지 않았다.
- **반향**: TechCrunch가 11-13 요약 보도했고, 엔지니어 Peter Liu가 CPU만으로 같은 SM 피크·시드를 복원하는 재현 스크립트를 오픈소스 공개했다. 저자는 방법이 공개된 이상 랩들이 지문을 지울 수 있다고 밝혔다.

## 왜 중요한가 (1인 개발자 관점)

1. **가중치는 거짓말을 안 한다**: 보도나 주장과 달리, 공개 가중치에서 직접 읽어낸 기술적 증거라 검증이 가능하다. 내 모델의 학습 환경을 공개할 때도 같은 방식으로 읽힌다는 뜻이다.
2. **수출 통제의 실효성 논쟁이 숫자로 옮겨갔다**: "중국이 Blackwell을 못 쓴다"는 전제가 흔들리면, 칩 수급·가격·지정학 뉴스를 읽는 기준이 바뀐다. NVDA 실적(11-17)과 함께 봐야 할 배경이다.
3. **방법 자체가 재사용 가능하다**: Philox 초기화 흔적은 다른 모델에도 적용할 수 있는 포렌식 도구다. 오픈웨이트 모델을 고를 때 "어디서, 무엇으로 만들었는지"를 따지는 새로운 검증 축이 생겼다.

## 한계 (명시)

- 지문은 가중치를 만든 하드웨어를 가리킬 뿐, 학습 전체가 그 칩에서 돌아갔는지·칩이 어디에 있었는지·어떻게 입수했는지·수출 통제를 위반했는지는 보여주지 않는다.
- 규모 추정치(12,000개 GPU, 5억 달러 이상)는 효율·토큰 수·기간 가정에 의존하고, 저자 스스로 확신하지 않는다고 밝힌다. 초안(2,000~3,000개)에서 11-12에 상향 수정됐다.
- DeepSeek-V4.1-Flash에서 지문을 찾지 못한 것은 Ascend 사용의 증거가 아니라 null 결과다.
- 특별히 설정한 AMD 하드웨어도 대안으로 거론되나, DeepSeek-V4-Flash에서는 배제했고 나머지 5종에서도 "매우 unlikely"하다고 본다 — 배제 근거는 보고서의 판단이다.

## 관련 개념

- [[concepts/nvidia-huang-ousted-ceo]] — NVIDIA CEO 사임·보드 조사, Blackwell 수급을 둘러싼 정치·시장 맥락 (2026-11-12)
- [[concepts/meituan-longcat-2-5]] — 같은 날 Meituan LongCat-2.5, 중국 칩만으로 학습한 정반대 사례 (2026-11-15)
- [[concepts/moonshot-kimi-k31-pro]] — Kimi K3.1 Pro 예고, 이번 지문이 확인된 모델 계열 (2026-10-24)

## 참고 소스

- [중국 프론티어 모델 6종에서 Blackwell GPU 지문 발견 원본](raw/articles/2026-11-15-blackwell-fingerprints-chinese-models.md)